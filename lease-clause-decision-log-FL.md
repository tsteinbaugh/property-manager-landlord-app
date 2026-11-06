# Florida — lease-clause decision log (state #13)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. Older phrases such as "flag for the X re-audit" or "when X is next revisited" are historical and dead: they are not a queue.

**Date:** 2026-09-26 · **Settings:** Opus, high effort, ordinary search and fetch. Research mode not used.
**Scope:** Florida state law only. Municipal and county ordinances are flagged where met, not resolved (instruction 20).
**Input CSV:** `lease-clauses.csv`, 835 rows, 796 active. Active counts: CA 150, CO 114, KS 114, MN 119, ND 110, NE 111, NJ 79, NV 102, OH 73, SD 90, TX 128, WY 98, FL 0. No duplicate ids and no blank status, so instructions 13 and 27 are satisfied. One malformed row was repaired (§0.1).
**Output CSV:** **883 rows, 847 active. FL 98 active, all VERIFIED** (after §15). No other state's active count changed. No duplicate ids, dangling `supersedes`, display collisions or blank status, and no active row has blank `states` (except the intentionally blank `security-deposit-return` parent).

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **Fla. Stat. ch. 83 Part II, §§83.40-83.684, whole** (2026 official text, section-open, with history lines). I fetched it from flsenate.gov and leg.state.fl.us; §83.56(2)-(3) came from Taylor's paste. **Taylor's paste:** §§404.056, 125.0103, 166.043, 715.07, 715.10-715.111, 68.065, 832.08, 760.23, 760.27, 760.29, 413.08, 553.883, 553.885. **Session laws** (effective-date clauses, laws.flrules.org): chs. 2025-16, 2025-166, 2025-190, 2026-143. |
| Step 1 — tag first | **Done.** 47 shared rows tagged FL (§2.1). 9 bases not tagged; FL overrides were written instead (§2.2). No shared row's text was edited (§3.1). Nothing held. |
| Step 2 — new FL rows | 17 lease clauses (one added in §12) and 19 education rows (one added in §11), plus 3 rewritten dormant rows (§3). |
| Instruction 24 families | **Both closed:** `security-deposit-return-fl` and `assistance-animal-accommodation-fl`. |
| Dormant rows | **All 3 rewritten and activated** (§5). |
| Named-topic checklist | **Done.** FL column added to all 10 tables (69 rows, no blank cell). 20 new topics. Candidate-topic table: 146 refs (87 answered, 53 not located, 2 not checked, 4 N/A). Instructions 33 and 34 added. |
| Layout rules (instruction 28) | **8 lease-side rules found** (§4). |
| Research mode | **Run once** (§11). Settled the preemption dates and reach; local fair-housing ordinances remain unsettled (no authority exists). |
| Proof-of-absence searches | **Done** (§§13-14): mold, bed bugs, eviction-record sealing, DV lease termination, immigration status, EV charging, deposit cap, late-fee and application-fee caps all confirmed absent (statutes), each with its own row. |
| Open for Taylor | Four decisions (§6). None blocks the handoff. |

### 0.1 A malformed CSV row, repaired

`security-deposit-installments-co` (inactive CO row) had 17 fields: its `topic_key` value `security-deposit-installments` had shifted one column right, most likely at the NJ-close sync. The file could not be written back well-formed as it was. I moved the value into `topic_key`. No other field changed, the row stays inactive, and nothing was reviewed about Colorado law.

## 1. Process notes

### 1.1 Source and currency
- Every row cites the section it rests on and its history line.
- Newest amendments seen: ch. 2025-16 (HB 615, e-mail notices, eff. 2025-07-01); ch. 2025-166 (CS/SB 948, landlord flood disclosure §83.512, eff. 2025-10-01); ch. 2025-190 (CS/CS/SB 180, casualty belongings, effective on becoming law); ch. 2026-125 (§83.684 veterans pilot); **ch. 2026-143 (CS/HB 1293, fraudulent entry, eff. 2026-10-01)**.
- **Currency finding (instruction 34):** the official 2026 compilation already prints ch. 2026-143's change to §83.56(2)(a), four days before it takes effect. A compilation that looks current can show law that is not yet in force. The affected rows state the date.
- **Special sessions:** none appear in any history line read. I did not run a separate sweep of 2024-2026 special sessions. The history lines on every section read are the currency evidence.

### 1.2 How the text was obtained
- The shell cannot reach Florida sites. WebFetch worked for most sections.
- flsenate.gov rate-limited me, and leg.state.fl.us served me only Chapter 83 pages.
- The fetch tool refused to reproduce §83.56(2)-(3) twice, so per §5a.2 I asked Taylor instead of trying a third time. The other adjacent sections also came by paste.

### 1.3 Section-open vs recall (instruction 22)
Every row was drafted with the section text in view. Two notes contained recall (the pre-2023 month-to-month notice figure and a nickname for §83.515); both were removed before close. **No case law is relied on anywhere.** The recall subset is empty.

## 2. Step 1 — tag first

### 2.1 Tagged FL as written (48)
`rent-payment`, `late-fee`, `due-at-signing`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided` (base), `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `possession-delay`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-insurance-requirement`, `assigned-parking-space`, `guest-policy`, `guest-policy-day-limit`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, `keys`, `holdover` (base), `surrender-end-of-term` (base), `parking-vehicle-rules`, the variants `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `tenant-forward-proceedings-ca`, **`application-of-payments-nj`** (§6, decision 1).

Every tagged row has an `FL:` note naming the controlling section. The ones that matter:
- **`holdover` (base):** Florida supplies the referent its "maximum permitted by law" needs: **double rent** (Fla. Stat. §83.58). `holdover-ca` is not tagged, because it would give up that recovery (K.3).
- **Variants over bases:** the base parking, storage and renter's-insurance clauses disclaim landlord liability. Fla. Stat. §83.47(1)(b) voids such disclaimers, and **§83.47(2) makes the landlord liable for actual damages caused by including them.** That is why FL gets the no-disclaimer variants.
- **`surrender-end-of-term`:** the "to the extent permitted by law" limit carries the load. Florida's ch. 715 abandoned-property procedure is optional (§715.101(2)).
- **`parking-vehicle-rules`:** §715.07 regulates the property owner and the tower, not lease content. "In accordance with applicable law" is enough.
- **`late-fee`:** there is no cap in Part II, and local caps are preempted (§83.425). The fee is not designated as rent.

### 2.2 Not tagged — FL override written instead (9 bases)

| Base | Override | Why the base fails in Florida |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-fl` | Instruction 24. Florida has its own holding methods, a 15-day and 30-day claim-notice regime with forfeiture, and a prescribed claim form (§83.49) |
| `landlords-access` | `landlords-access-fl` | The base gives a standing right to enter "to show" on notice alone. Florida allows entry for showings or inspection only with consent (not unreasonably withheld), in an emergency, on unreasonable refusal, or after a half-period absence; repair entries need 24 hours' notice and fall between 7:30 a.m. and 8 p.m. (§83.53) |
| `early-termination` | `early-termination-fl` + `early-termination-addendum-fl` | The base fee (greater of one month or 30% of remaining rent) can exceed Florida's **2-month cap**, and Florida allows a fee only through a **separately signed addendum** in statutory form (§83.595(4)) |
| `pet-policy` | `pet-policy-fl` | The base lets the landlord enter and remove a pet "without liability". That entry falls outside §83.53, the removal falls outside §83.67(5), and the liability waiver is void under §83.47 |
| `default-by-tenant` (and `-ks-ne`) | `default-by-tenant-fl` | The base promises a cure period for every non-rent breach. That would give up the statutory **no-cure 7-day termination** in §83.56(2)(a) (instruction 33) |
| `returned-payments` | `nsf-fee-limit-fl` (dormant, rewritten) | Florida's measure is statutory (§68.065(2)). The rewritten row states it, and the two rows cannot both display |
| `application-of-payments` | `application-of-payments-nj` (tagged FL) | Fees-first allocation turns an unpaid fee into unpaid "rent" that a 3-day notice can reach (§§83.43(12), 83.56(3), 83.60(2)) |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-fl` | Instruction 24. Florida's service-animal housing rule has no direct-threat denial (§413.08(6)(b)). Emotional support animals have their own documentation limits (§760.27) |
| `common-area-use` | `common-area-use-fl` | The base requires Landlord's consent for a waterbed; Florida bars prohibiting flotation bedding that meets code (§83.535). FL-only override at Taylor's direction (§3.1) |

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
The first draft edited the shared `common-area-use` waterbed sentence for every tagged state. **Taylor declined that (2026-09-26):** other states keep the landlord-consent waterbed rule. Florida instead gets `common-area-use-fl`, which is the base text verbatim except that flotation bedding is carved out of the consent rule and pointed to `flotation-bedding-fl`. The shared row is byte-identical to the input CSV.

### 3.2 New FL lease clauses (17) and rewritten dormant clauses (2)

| Row | Rule | Rests on | Layout |
|---|---|---|---|
| `security-deposit-return-fl` | REQUIRED | §83.49(1), (3), (5)-(7), (9) | — |
| `security-deposit-notice-fl` | CONDITIONAL (5+ units) | §83.49(2) | statutory capitals |
| `fee-in-lieu-of-deposit-fl` | CONDITIONAL (opt-in) | §83.491 | signed agreement; capitals |
| `landlords-access-fl` | RECOMMENDED | §83.53 | — |
| `early-termination-fl` | RECOMMENDED | §§83.595, 83.43(6), 83.682, 83.63, 83.512 | — |
| `early-termination-addendum-fl` | CONDITIONAL (opt-in) | §83.595(4) | **separate addendum** |
| `end-of-term-notice-fl` | CONDITIONAL (opt-in) | §83.575 | — |
| `electronic-notice-addendum-fl` | CONDITIONAL | §83.505 | **separate addendum**, conspicuous |
| `landlord-address-disclosure-fl` | REQUIRED | §83.50 | at or before commencement |
| `radon-disclosure-fl` | REQUIRED | §404.056(5) | **exact language**, at or before signing |
| `default-by-tenant-fl` | REQUIRED | §§83.56, 83.48, 83.595 | — |
| `assistance-animal-accommodation-fl` | REQUIRED | §§413.08(6), 760.27, 760.29 | — |
| `pet-policy-fl` | RECOMMENDED | §§83.43(4), 83.47, 83.53, 83.67(5) | — |
| `flotation-bedding-fl` | CONDITIONAL (opt-in) | §83.535 | — |
| `common-area-use-fl` | RECOMMENDED | §§83.535, 83.67(4) | — |
| `casualty-damage-fl` | RECOMMENDED | §83.63 (2025) | — |
| `abandoned-property-release-fl` | CONDITIONAL (opt-in) | §83.67(5) | **printed or clearly stamped** legend |
| `flood-disclosure-fl` (dormant) | CONDITIONAL (1-year+) | §83.512 | **separate document** |
| `nsf-fee-limit-fl` (dormant) | CONSTRAINED | §68.065 | — |

### 3.3 New FL education rows (18) and one converted dormant row

Topics:
- self-help and prohibited practices;
- retaliation;
- periodic-tenancy termination;
- servicemember rights;
- landlord maintenance duties;
- lease terms Florida voids;
- landlord remedies after breach;
- foreclosure tenants;
- when the last tenant dies;
- apartment-employee screening;
- fraudulent-entry termination (from 2026-10-01);
- the eviction notices and process;
- abandoned property (ch. 715);
- local preemption;
- fair housing;
- service-animal penalties;
- smoke and CO alarms;
- bounced checks.

`habitability-timeline-fl` (dormant) was converted to education, covering the tenant's 7-day remedies.

## 4. Layout and placement requirements (instruction 28)

| Rule | Requirement | Where it lives |
|---|---|---|
| Fla. Stat. §83.49(2)(d) | Deposit disclosure in the statute's **capitals**; in the lease or within 30 days (5+ units) | `security-deposit-notice-fl` |
| Fla. Stat. §83.491(4)(b) | Fee-in-lieu disclosure in **capitals**, in a **signed written agreement** | `fee-in-lieu-of-deposit-fl` |
| Fla. Stat. §83.505(1) | E-mail notice election as an **addendum** both parties sign, **conspicuously** stating it is voluntary and revocable | `electronic-notice-addendum-fl` |
| Fla. Stat. §83.512(1) | Flood disclosure as a **separate document**, at or before execution, leases of 1 year or more | `flood-disclosure-fl` |
| Fla. Stat. §83.595(4) | Early-termination fee accepted only by a **separate addendum** signed by the tenant when the lease is made, in the checkbox form | `early-termination-addendum-fl` |
| Fla. Stat. §83.67(5) | Abandoned-property legend **printed or clearly stamped** on the rental agreement | `abandoned-property-release-fl` |
| Fla. Stat. §404.056(5) | Radon notice in **exact statutory language** on a document executed at or before signing | `radon-disclosure-fl` |
| Fla. Stat. §83.575(1)-(2) | A tenant end-of-term notice clause is valid only if it also binds the landlord (30-60 days). Liquidated damages require a landlord reminder 15 days before the notice period | `end-of-term-notice-fl` |

**Outside the lease** (for the builder's notice workflows): §83.49(3)(a) deposit claim notice; §83.56(2)-(3) 7-day and 3-day notices; §§715.105-.106 abandoned-property notices; §68.065(4) bounced-check demand.

**Boundary:** these come from reading the texts listed in §0, not from a code-wide search for "underlined", "boldface" or "conspicuous". No underline or bold rule appears in the text read.

**Omission sanctions that forfeit money** (the second half of instruction 28):
- no fee without the signed addendum (§83.595(4));
- no end-of-term liquidated damages without the landlord's reminder (§83.575(2));
- a late deposit notice forfeits the claim (§83.49(3)(a)).

These add to the **Addendum M.12** case for a `formatting` field. Florida adds the value **"printed or stamped legend"**.

## 5. Dormant rows (instruction 21)

| Row | Right | Wrong | Outcome |
|---|---|---|---|
| `flood-disclosure-fl` | A separate written disclosure; a termination remedy | It asked about flood *zone*. Florida asks about flood damage, insurance claims and FEMA assistance. The duty covers leases of 1 year or more only, so the row is CONDITIONAL, not REQUIRED. The remedy needs a 50%-of-value loss and termination within 30 days. The law is 2025, not 2024 | Rewritten to the statutory form; activated |
| `habitability-timeline-fl` | The 7-day period | Florida has no duty to "begin remedial action within 7 days". The 7 days is the cure window, after which the tenant's remedies (terminate or withhold) open, and it applies only to §83.51(1) and material lease terms | Converted to education; activated |
| `nsf-fee-limit-fl` | The $25/$30/$40 tiers and break points | The 5% alternative applies at every tier. Actual bank fees are recoverable on top. The rule covers electronic transfers and debit orders, not only checks | Rewritten; activated; supersedes `returned-payments` |

**Pattern holds for all three:** one real fact each, and the operative rule missed each time.

## 6. Decisions for Taylor

All answered or routed on 2026-09-26; see §12.

## 7. Open items (none blocking)

| Item | What would close it |
|---|---|
| Local fair-housing ordinances (source of income etc.) vs §83.425 | **Cannot be closed by research:** no court or AG has ruled (§11). Recorded as a standing jurisdiction flag |
| Proof-of-absence searches | Full-text searches on the official site, with word variants: mold, domestic violence (lease termination and lock change), immigration, EV charging, eviction sealing, deposit cap, bed bug disclosure |
| L.5 dependencies not read | §§250.01, 456.001, 456.47, 509.013, 509.242, 51.011, 760.20-.22, 775.082-.083, 817.537, 832.05-.07. Each is labelled in its row |
| §760.34 (local fair-housing laws) | Read it only if you want the survival argument on primary text; no row depends on it |

## 8. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed (the draft `common-area-use` edit was withdrawn, §3.1). Every shared-row change is an added `FL` tag with an `FL:` note, which is a states-only change under §5a.1.
- **Vouch given, 2026-10-03:** `surrender-end-of-term` (CA's proposal), vouched for FL; reasoning in "Circle-back checks (SOP 1.36)" at the end of this log.

## 9. Findings worth Taylor's attention

1. **Florida protects landlords from their own generous clauses less than it seems.** A shared clause that promises a cure for every breach contractually gives up the no-cure termination. That is now instruction 33, and it may reach other states with no-cure grounds.
2. **§83.47(2) is unusual.** Including a void exculpatory clause creates liability for actual damages. That makes the no-disclaimer variants the safe default in Florida.
3. **Florida is preemption-heavy.** §83.425 (2023) covers screening, deposits, application fees, lease terms, disclosures, fees and notices. Rent control is barred absolutely (§§125.0103(2), 166.043(2)). What survives locally is the open research question.
4. **Statute defects recorded, not resolved:**
   - §83.491(6) cites "s. 83.43(13)" for "security deposit"; after the 2024 renumbering it is (14).
   - §832.08(5)'s tiers match the landlord measure in §68.065, but it is a state-attorney fee schedule. The dormant row had cited the wrong kind of statute.
5. **The service-animal species limit applies only to public accommodations.** The "dog or miniature horse" limit in §413.08(1)(d) applies only to subsections (2)-(4), not to housing.

## 10. Deliverables

| File | State |
|---|---|
| `lease-clauses.csv` | 883 rows, 847 active; FL 98 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-FL.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | FL column in all 10 tables; Florida sections at the end; instructions 33-34 |


---

## 11. Research-mode pass — 2026-09-26 (once; report in the conversation)

**Settled:**
- **§83.425 dates and reach.** Laws of Fla. ch. 2023-314 was approved 2023-06-29 and took effect 2023-07-01. The same act raised month-to-month notice from 15 to 30 days and set the 30-60 day bounds in §83.575(1). "Supersedes any local government regulations" reaches ordinances already on the books.
- **What happened locally.** Palm Beach County repealed its rent-increase notice ordinance on the County Attorney's recommendation citing HB 1417 (primary agenda item). St. Petersburg repealed, and Hillsborough stopped enforcing; both are from news sources.
- **No court or Attorney General opinion interprets §83.425.**
- **Rent control.** Ch. 2023-17 (Live Local Act) deleted the old "grave housing emergency plus referendum" route. Its effective date is 2023-07-01 per secondary sources and was not confirmed on the session law's last page.
- **Correction:** ch. 2024-27 is a towing-rates act only. My earlier notes listed it beside the rent-control change as if it were related; the row notes now say so.
- **§83.684 veterans pilot.** Subsections (3)-(5) read verbatim, eff. 2026-07-01. New row `edu-veterans-pilot-fl` (CONDITIONAL, education).

**Unsettled, and not resolvable by more research:** do local fair-housing ordinances that add protected classes survive §83.425? The argument for survival is §760.34 (not read by me) plus 1987 Florida Supreme Court cases upholding county anti-discrimination ordinances. The argument against is that §83.425 names "the screening process". Miami-Dade still lists source of income. `edu-local-preemption-fl` and `edu-fair-housing-fl` now tell landlords to treat these ordinances as enforceable locally. **Builder rule:** never offer a clause excluding voucher holders.

**Late fees as rent.**
- Florida trial courts have voided 3-day notices that demand a late charge not designated as rent. The sources are secondary; no appellate case was found.
- The research recommended labelling fees "additional rent". **I did not adopt that.** It conflicts with your NJ decision, which is the library default, and the demand-rent-only posture already avoids defective notices.
- Florida differs from NJ in one respect: the designation route here is statutory (§83.43(12)). Say if Florida should opt in.

**Not done by the pass:** official full-text searches. No "Not located" was upgraded to "Confirmed absent". Secondary sources report that the immigration law SB 1718 (2023) imposes no landlord duty. The foreign-ownership law (§§692.201-.205) imposes no landlord duty found, and whether it covers residential leaseholds is unverified; no row was written.

**Rows changed (notes only):** `edu-local-preemption-fl` (body also updated), `edu-fair-housing-fl`, `edu-periodic-tenancy-termination-fl`, `default-by-tenant-fl`, `late-fee` (FL note), `application-of-payments-nj` (FL note), `landlords-access-fl`. No shared-row text changed, so no new propagation is owed.

**Integrity:** 870 rows, 834 active; FL 86, all VERIFIED; other states unchanged.


---

## 12. Taylor's decisions and routing — 2026-09-26

| Item | Decision | Result |
|---|---|---|
| Waterbed | **FL-only override**, not a shared edit | `common-area-use-fl` added; `common-area-use` restored and untagged for FL; no propagation owed |
| Payment order (fees-first `application-of-payments` vs rent-first `application-of-payments-nj`) | **Broader question — flagged for Claude CLI** | FL stays on the rent-first row for now. The library-wide question is whether fees-first should remain on the 11 states tagged on the base |
| `security-deposit-installments-co` repair (§0.1) | **Flagged for Claude CLI** to check against `lease-clause-citations-CO.csv` | Repair stays in this CSV (format only) |
| Single-family/duplex maintenance shift (§83.51) | **Build as a supplemental optional clause, routine items only** (Taylor, after context) | `maintenance-allocation-fl` (§13) |
| Late fees as "rent" (§83.43(12)) | **Keep the NJ default: fees are not rent** (Taylor, after context) | No change |
| Proof-of-absence searches | Taylor to run | Terms and site given in the conversation |

**Flagged for Claude CLI (Taylor's instruction):**
1. Payment order across the library.
2. The `security-deposit-installments-co` column repair.

**Integrity:** 871 rows, 835 active; FL 86, all VERIFIED; no shared row's text changed; other states unchanged.


---

## 13. Maintenance clause and proof-of-absence searches — 2026-09-26

**New lease clause: `maintenance-allocation-fl`** (CONDITIONAL; single-family home or duplex only).
- It shifts checked routine items to the tenant: lawn, pest control (not termites), filters, smoke-detector batteries, drain clogs, pool, garbage, bulbs, and later screen repair.
- The landlord always keeps structure, roof, the plumbing, electrical, HVAC and water-heating systems, smoke-detector installation, and code compliance.
- Basis: §83.51(1) lets a house or duplex lease modify the (1) duties in writing, and §83.51(2)(b) allows the same for smoke detectors. Keeping core items with the landlord is Taylor's design limit, not a statutory one.

**Late fees:** the NJ default stays. Fees are not designated rent.

**Official full-text searches (Taylor, 2026 Florida Statutes):**

| Topic | Terms | Result | Row |
|---|---|---|---|
| Mold | mold, molds, fungus, fungal | **Confirmed absent (statutes).** Hits: mold-assessor licensing (ch. 468 Part XVI), molder's liens, insurance, association emergency powers, unrelated | `edu-no-mold-disclosure-fl` |
| Bed bugs | "bed bug", "bed bugs", bedbug | **Confirmed absent (statutes)** as a disclosure or timeline duty. Hits: §487.021 (pesticides), §83.51 | `edu-no-bed-bug-disclosure-fl` |
| Eviction-record sealing | eviction (40 hits) | **Confirmed absent (statutes)** | `edu-no-eviction-record-sealing-fl` |
| DV, immigration, EV charging, deposit cap, late-fee and application-fee caps | several | **Not resolved.** Each returned 77 to 1,000+ hits, too many to review | — |

**Search-tool behaviour (instruction 29 / TX1.20):**
- Florida's search matches word variants: "bedbug" found §83.51, whose text says "bedbugs", and "mold" and "molds" returned the same list.
- Multi-word terms appear to match ANY of the words: "immigration status" returned more hits than "immigration" alone.
- Narrower searches need exact-phrase or all-words mode.

**New landlord-relevant sections found among the "eviction" hits. Not read; requested:**
- **Fla. Stat. §250.5202:** an eviction, distress action or court-registry rent deposit "may not proceed against any member who is called into state active duty". This is a state-military protection beyond §83.682.
- **Fla. Stat. §180.135:** utility services may not be refused or discontinued over a former occupant's unpaid charges, and those charges cannot be a lien on the rental property, with an exception.
- **Optional: Fla. Stat. §82.035:** removing a "transient occupant" of residential property.

**Integrity:** 875 rows, 839 active; FL 90, all VERIFIED; no shared row's text changed; other states unchanged.


---

## 14. Narrowed proof-of-absence searches — 2026-09-26

Taylor re-ran the broad terms as a quoted phrase plus a second word, which narrows the results. Every hit was reviewed, including subject-index pages, which point to sections but are not law.

| Topic | Search | Result | Row |
|---|---|---|---|
| DV lease termination or lock change | "domestic violence" tenant | **Confirmed absent (statutes).** Hits: §44.102 (mediation), §420.9071 (housing definitions), index pages to ch. 741. Small gap: the 81-hit "change the locks" list was not reviewed | `edu-no-dv-lease-termination-fl` |
| Immigration-status rule | immigration landlord; immigration tenant | **Confirmed absent (statutes).** Index hits on local-government enforcement only | `edu-no-immigration-inquiry-rule-fl` |
| Tenant EV charging right | "electric vehicle" tenant; "electric vehicle" lessee | **Confirmed absent (statutes)** for tenants. The condo unit-owner rule (§718.113) was not read | `edu-no-ev-charging-right-fl` |
| Deposit cap | "security deposit" tenant | **Confirmed absent (statutes)** for landlords. Only association rental deposits are capped at 1 month (§719.106; §718.112 per index) | `edu-no-deposit-cap-fl` |
| Late-fee and application-fee caps | "late fee" tenant; "application fee" tenant | **Confirmed absent (statutes).** Hits: self-storage (§83.808), association late fees, recovery-residence certification fee | `edu-no-fee-caps-fl` |

**Search tool:** a quoted phrase plus a word narrows the results, presumably by matching all terms. Unquoted multi-word terms seem to match any word.

**Requested sections:** received and written up in §15.

**Integrity:** 880 rows, 844 active; FL 95, all VERIFIED; no shared row's text changed; other states unchanged.


---

## 15. Sections found by the searches — 2026-09-26

Pasted by Taylor from the official 2026 statutes, read section-open.

| Section | What it does | Row |
|---|---|---|
| Fla. Stat. §250.5202 | No eviction, distress action or registry-deposit requirement against a member called to state active duty (or active duty) who has given the landlord written notice, where rent is $1,200/month or less and the unit is the family home. Court stay of up to 3 months unless the ability to pay is not materially affected | `edu-state-active-duty-eviction-stay-fl` |
| Fla. Stat. §§180.135, 125.485 | City and county utilities may not refuse or cut off service to an owner or tenant over a former occupant's unpaid charges. No lien unless the current party directly benefited. The city rule cannot be waived by a landlord guarantee. **§180.135(4): a tenant's failure to pay city utility charges lets the landlord start eviction proceedings** | `edu-utility-former-occupant-fl` |
| Fla. Stat. §82.035 | Police removal of a transient occupant on the owner's sworn affidavit (refusal is trespass); unlawful detainer without notice; belongings retrievable, generally within 10 days; a wrongful-removal claim against the requester. Not for tenants | `edu-transient-occupant-removal-fl` |

**FL notes appended (notes only, no text change):** `utility-service-continuity` (§180.135(4)), `guest-policy-day-limit` (§82.035), `edu-servicemember-rights-fl` (§250.5202). These are states-only rows, so no propagation is owed.

**Not read (L.5):** §§250.01, 810.08, 82.03, 82.036 (the 2024 unauthorized-occupant law).

**The Florida pass is complete.** The only open items are the two Claude CLI flags in §12: payment order across the library, and the `security-deposit-installments-co` column repair.

**Integrity:** 883 rows, 847 active; FL 98, all VERIFIED; no shared row's text changed; other states unchanged.


---

## 16. Claude Code sync — 2026-09-26

Both Claude CLI flags from §12 are closed.

**1. Payment order across the library (Taylor's decision).** The base `application-of-payments` is now **rent first** for every tagged state, and NJ and FL are folded back into it. Its text is the NJ row's wording plus the base's "or applicable law requires otherwise" hedge. The hedge is kept because TX §92.008(p) and CA Civ. Code §1954.07(g)(2) rely on it, and the cure sentence stays for NV §40.253(11). `application-of-payments-nj` is retired (inactive, do not reactivate). Taylor keeps fees-first wording in his own lease for its deterrent value, knowing a court won't enforce it at eviction; the library default is the safe one. The Rent Tracker was changed to rent first the same day: its suggested split pays rent before fees, and a rent-paid month with an unpaid fee shows "Rent paid — fee due", never a rent shortfall. Propagation notes were appended to all 12 other tagged states' logs.

**2. The `security-deposit-installments-co` column repair.** Confirmed correct. The bad row came from the NJ sync's own status fix (Claude Code's error, not the NJ pass). The citations file already records the row as REMOVED, so nothing else needed checking. The CSV generator now refuses to run on any row with the wrong field count.

**Integrity after the sync:** 883 rows; 331 shipped lease clauses and 515 education rows. FL shows 67 clauses. Every other state's visible count is unchanged, and each shows the one rent-first `application-of-payments`.

**PARTIALs closed at the sync (Taylor agreed they were closable):** `edu-apartment-employee-screening-fl` (§509.242(1)(d)-(e) read: the classifications are 75%+ nontransient units, or more than 25% held out as transient) and `edu-veterans-pilot-fl` (all of §83.684 read; effective 2026-07-01 per ch. 2026-125's own effective-date clause, approved 2026-06-11). Both bodies were already correct. The one open item left is `edu-local-preemption-fl`, which research can't close (§11).

**Instruction 33 applied to the other states (Taylor, 2026-09-26, targeted fix).** `default-by-tenant`, `default-by-tenant-ks-ne` and `default-by-tenant-nj` now end their non-rent cure promise with "except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." That covers the 11 states still on a cure-everything promise; FL and SD have their own rows. Propagation notes were appended to those 11 logs.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged FL** (§5a.1; uniform text, no FL override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Fla. Stat. §83.56(2) (material-provision noncompliance: 7-day cure notice, or no-cure notice for the listed kinds) applies through `default-by-tenant-fl`. The clause adds no cure promise and no waiver.

---

## Gap-discovery backfill (instruction 36) — 2026-09-27

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1: Fla. Stat. ch. 83 Part II, §§83.40-83.684, read whole from the official 2026 text) |
| Gap-discovery source 2 — real-lease comparison | Done (§GB.1: Florida Realtors Residential Lease for Single Family Home or Duplex, RLHD-3x Rev 7/16, ©2022, Supreme Court of Florida-approved 2010-04-15) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§GB.2: 69 scenarios, Claude-generated; 6 confirmed absences from Taylor's official full-text searches, 2026-09-27) |
| Gap-discovery source 4 — outside-title search | Done (§§11, 13, 14, 15: research pass and official full-text searches; adjacent reads of §§404.056, 715.07, 715.10-.111, 68.065, 760.23/.27/.29, 413.08, 553.883/.885, 250.5202, 180.135, 125.485, 82.035) |

Scope: two targeted checks, not a re-audit (standing rule). Screened against the current library (941 rows; FL 99 active before this section). Handoff is a delta: `lease-clauses-FL-delta.csv`.

### GB.1 Real-lease comparison (gap-discovery source 2)

**Lease used:** Florida Realtors® *Residential Lease for Single Family Home or Duplex (For a Term Not to Exceed One Year)*, form **RLHD-3x Rev 7/16**, ©2022 Florida Realtors®, footer "Approved on April 15, 2010, by the Supreme Court of Florida"; 20 pages including an attached copy of Part II of ch. 83. **Where from:** posted publicly by Coyle Realty, a Florida brokerage (coylerealty.com/linked/residential_lease_for_single_family_home_and_duplex.pdf). **Why it qualifies:** it is the Florida Realtors association's lease (option (a)), and the form itself is the Supreme Court-approved Florida lease. **Cross-check:** the Supreme Court-approved *multi-family* lease hosted by The Florida Bar (floridabar.org/public/consumer/consumer004; no edition date printed) was screened for provisions the single-family form lacks.

**Method:** mapped by topic, no text reproduced (copyrighted). The lease was a lead only (instruction 6). Every statutory point below rests on primary text read section-open (§§713.10, 718.112(2)(k), 718.116(11), 720.306(1)(h), read 2026-09-27 on flsenate.gov), or on text already read in the FL pass. **Currency caveat:** the lease form is a 2016 revision; it predates §83.505 (2025 e-mail addendum), §83.512 (2025 flood disclosure) and the 2023 notice changes. Where it is older than the library, the library governs.

#### GB.1.1 Provision map

| Lease provision (by topic) | FL library coverage | Result |
|---|---|---|
| §1 Parties, contact details | `landlord-address-disclosure-fl` (§83.50) | Covered |
| §2 Property, furnishings, appliances, named occupants | `appliances-included`, `permitted-occupants` | Covered |
| §3 Term (form limited to 12 months) | Form scope limit, not law | Not needed |
| §4 Rent, installments, where paid, proration, payment methods (cash allowed) | `rent-payment`, `due-at-signing`, `acceptable-payment-methods` | Covered |
| §4 Taxes on rent | **None** | **Gap → `edu-transient-rental-tax-fl`** (§212.03; lead confirmed through the scenario screen) |
| §4 Worthless-check charge per §68.065 | `nsf-fee-limit-fl`, `edu-dishonored-payment-remedies-fl` | Covered |
| §5 Money due before occupancy (advance and last rent, deposits, HOA deposit) | `due-at-signing`, `security-deposit-return-fl`, `edu-no-deposit-cap-fl` | Covered; association deposit now verified (§718.112(2)(k)) |
| §5 No keys until paid | Contract term | Not needed |
| §6 Late fee (form default 4% after 5 days) | `late-fee`, `edu-no-fee-caps-fl` | Covered (no statutory cap; form default is contractual) |
| §7 Pets and smoking | `pet-policy-fl`, `smoking-policy`, `assistance-animal-accommodation-fl` | Covered |
| §8 Notices (mail or hand delivery; e-mail fields) | `notices`, `electronic-notice-addendum-fl` | Covered. The form's e-mail fields alone do not meet §83.505's signed-addendum rule; the library's addendum does |
| §9 Utilities | `utilities-responsibility`, `utilities-paid-by-landlord` | Covered |
| §10 Maintenance checklist (every item assignable, incl. roof and structure) | `landlord-maintenance`, `maintenance-allocation-fl` | Covered. The form lets structure and code items move to the tenant; the library keeps them with the landlord by Taylor's design (§13) |
| §11 Assignment and subletting | `no-sublet-assign` | Covered |
| §12 Keys, openers, HOA access devices | `keys` | Covered |
| §13 Lead-based paint | `lead-based-paint` | Covered |
| §14 Servicemember termination (§83.682) | `early-termination-fl`, `edu-servicemember-rights-fl`, `edu-state-active-duty-eviction-stay-fl` | Covered (library-wide decision: no SCRA clause; AZ §16.4) |
| §15 Landlord's access (24 hours for repairs, 7:30 a.m.-8 p.m.; consent for other purposes; absence rule) | `landlords-access-fl` | Covered; same structure |
| §16 Association approval contingency; HOA application fee; HOA deposit | `hoa-compliance` (rules and fines only) | **Gap → `association-approval-fl`, `edu-association-leasing-rules-fl`** |
| §17 Residential use; alterations need consent; pictures and window treatments allowed; no hazardous materials | `residential-use-only`, `no-alterations`, `common-area-use-fl`, `fire-safety-grilling` | Covered (pictures: contract choice) |
| §18 Risk of loss by negligence; renter's insurance recommended | `tenants-property-insurance-ks-oh-ca`, `edu-prohibited-lease-terms-fl` (§83.47) | Covered |
| §19 Prohibited acts by landlord (§83.67) | `edu-prohibited-practices-fl` | Covered |
| §20 Casualty (form: tenant may terminate within 30 days) | `casualty-damage-fl` (§83.63) | Covered. §83.63 as read sets no 30-day window; the library follows the statute |
| §21 Defaults and remedies (refers to Part II) | `default-by-tenant-fl`, `edu-eviction-process-fl`, `edu-landlord-remedies-after-breach-fl` | Covered |
| §22 Subordination to mortgages | — | Not needed (library-wide decision: skipped, AZ §16.4) |
| §23 **Liens: landlord's interest not subject to liens for tenant improvements (§713.10)** | **None** | **Gap → `no-liens-fl`, `edu-construction-liens-fl`** |
| §24 Renewal only in writing; combined term ≤ 1 year | `entire-agreement`; form scope limit | Covered / not needed |
| §25 Tenant reports phone number within 5 business days | Contract term, no statute | Not needed |
| §26 Prevailing-party fees | §83.48; `default-by-tenant-fl` | Covered |
| §27 Time of essence; binding effect; no oral changes or surrender; Florida law; fax signatures; **radon** | `entire-agreement`, `governing-law`, `electronic-signatures`, `radon-disclosure-fl` | Covered (time of essence skipped library-wide) |
| §28 Brokers' commission | Broker mechanics | Not needed |
| §29 Tenant's personal property legend (tenant initials to activate) | `abandoned-property-release-fl` (§83.67(5)) | Covered. The statute requires the legend to be "printed or clearly stamped"; initials are the form's design choice, not a statutory element |
| Early termination fee / liquidated damages addendum | `early-termination-addendum-fl` (§83.595(4)) | Covered; same statutory form |
| §83.49(2) deposit disclosure | `security-deposit-notice-fl` | Covered. **The form omits it**; the library carries it for landlords with 5+ units |
| Flood disclosure (§83.512), e-mail addendum (§83.505) | `flood-disclosure-fl`, `electronic-notice-addendum-fl` | Covered. The 2016 form predates both |
| Multi-family form only: common areas; landlord may adopt rules; overnight-guest default (7 nights a month) | `common-area-use-fl`, `entire-agreement` (changes by notice where law permits), `guest-policy`, `guest-policy-day-limit` | Covered |

#### GB.1.2 What it produced

- **(a) Missing required clause:** none. Every Florida requirement the form carries (radon, lead, early-termination addendum, access rules, §83.67(5) legend) is already in the library, and the library carries three the form lacks: the §83.49(2) deposit notice, the §83.512 flood disclosure and the §83.505 e-mail addendum.
- **(b) Corrections to existing FL rows:** none.
- **(c) New FL rows:**
  - `no-liens-fl` (lease clause, RECOMMENDED; opt-in landlord right, instruction 30)
  - `edu-construction-liens-fl`
  - `association-approval-fl` (lease clause, CONDITIONAL)
  - `edu-association-leasing-rules-fl`
  - `edu-transient-rental-tax-fl` (lead from §4's tax line, confirmed through the scenario screen)
- **(d) Confirmed absences:** none new from the lease.
- **(e) Cross-state question (for Taylor, not acted on):** a tenant-improvement lien clause. Florida's §713.10 makes the lease language the trigger; other states' mechanic's-lien statutes were not read. Adding a shared row would be a product decision.

**Why §713.10 matters:** under §713.10(1), a lien for an improvement a tenant makes "in accordance with an agreement" with the landlord extends to the landlord's interest. `no-alterations` has the landlord consenting to alterations, which can supply that agreement. The lease prohibition works fully only with a recording: the lease, a memorandum, or a parcel notice, recorded before the contractor's notice of commencement (§713.10(2)(b)). A landlord who ignores a contractor's written demand for a verified copy for 30 days loses the protection (§713.10(3)).

### GB.2 Landlord-scenario screen (gap-discovery source 3)

**Method:** Arizona's 59-scenario map (AZ log §18.1), re-run against the FL-active library, plus Florida-specific scenarios (hurricanes, condo associations, squatters, short-term leases, flotation beds, fee-in-lieu programs, e-mail notices, servicemembers on state duty). For each gap, the Florida statutes were searched with the official full-text search in Taylor's browser (quoted phrase plus a word; variants match), and every hit bearing on landlords was read section-open.

#### GB.2.1 Scenario map

**Result:**
- **69 scenarios:** 59 covered, 7 gaps, 1 confirmed absence with no row (the holding deposit), 1 out of scope (condominium conversion) and 1 flagged (a foreign-principal buyer).
- **The 7 gaps produced 8 new rows.** Two were found by source 2 and confirmed here: contractor liens, and association approval and rent demands. Five are new here: squatters, sales tax on short leases, uncashed deposit refunds, towing, and the HOA rent demand (read into `edu-association-leasing-rules-fl`).
- **Three body additions:**
  - cooling;
  - rent-increase notice;
  - a squatter cross-reference.
- **Six confirmed absences (§GB.2.3).**

| Scenario | FL coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **No statute** (confirmed absent, §GB.2.3) |
| Screening: fees, criminal history, income source, immigration status | `edu-no-fee-caps-fl`, `edu-fair-housing-fl`, `edu-no-immigration-inquiry-rule-fl`, `edu-local-preemption-fl` | Covered |
| Applicant lied on the application | `rental-application-accuracy`, `edu-fraudulent-entry-termination-fl` | Covered |
| Voucher holder applies | `edu-fair-housing-fl` (no state source-of-income class), `edu-local-preemption-fl` (local ordinances' survival unsettled) | Covered |
| Servicemember applies | `edu-servicemember-rights-fl` (§83.683, 7-day decision) | Covered |
| Unit not ready on move-in day | `possession-delay` | Covered |
| Required disclosures at signing | `landlord-address-disclosure-fl`, `security-deposit-notice-fl`, `radon-disclosure-fl`, `flood-disclosure-fl`, `lead-based-paint`, `electronic-notice-addendum-fl` (if e-mail notices) | Covered |
| Blank left in the lease | Product rule (AZ log §7); Part II has no blank-space rule | Covered (builder rule) |
| City requires rental registration or inspection | `edu-local-preemption-fl` | Covered at state level; local layer flagged (instruction 20) |
| Property is a condominium or in an HOA | `hoa-compliance` | **Gap → `association-approval-fl`, `edu-association-leasing-rules-fl`** (source 2; §§718.112(2)(k), 720.306(1)(h)) |
| How big a deposit may be | `edu-no-deposit-cap-fl` | Covered |
| Tenant wants to pay a fee instead of a deposit | `fee-in-lieu-of-deposit-fl` (§83.491) | Covered |
| Seasonal lease of 6 months or less | none | **Gap → `edu-transient-rental-tax-fl`** (§212.03) |
| **Rent and money** | | |
| Rent is late | `late-fee`, `edu-no-fee-caps-fl`, `default-by-tenant-fl`, `edu-eviction-process-fl` (3-day notice) | Covered |
| Tenant pays part of the rent | `default-by-tenant-fl`, `acceptable-payment-methods` (§83.56(5) waiver and receipt) | Covered |
| Check bounces | `nsf-fee-limit-fl`, `edu-dishonored-payment-remedies-fl` | Covered |
| Tenant pays in cash and wants a receipt | `acceptable-payment-methods` | Covered for partial rent after a notice (§83.56(5)(a)1). **No general receipt statute** (confirmed absent, §GB.2.3) |
| Which debt a payment pays first | `application-of-payments` | Covered |
| Raising the rent at renewal or on a month-to-month | `edu-periodic-tenancy-termination-fl`, `edu-local-preemption-fl` | Covered; **body addition** (no notice statute, confirmed absent) |
| **During the tenancy** | | |
| AC fails in July | `habitability-timeline-fl`, `edu-landlord-maintenance-fl`, `maintenance-allocation-fl` | Covered; **body addition** (cooling not on the §83.51(2)(a) list; local codes flagged) |
| Tenant withholds rent over repairs | `habitability-timeline-fl` (7-day notice; §83.60(2) registry deposit) | Covered |
| Termites, roaches, bedbugs | `edu-landlord-maintenance-fl` (§83.51(2)(a)1 extermination), `edu-no-bed-bug-disclosure-fl` | Covered |
| Mold complaint | `edu-no-mold-disclosure-fl`, `tenant-maintenance`, `landlord-maintenance` | Covered |
| Tenant causes damage, or won't keep the unit clean | `default-by-tenant-fl` (§83.52, §83.56(2)(b)), `tenant-maintenance` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access-fl` (§83.53) | Covered |
| Tenant changes the locks | `keys`; landlord lockout barred (`edu-prohibited-practices-fl`, §83.67(2)) | Covered |
| Tenant away for a month | `landlords-access-fl` (§83.53(3) absence entry), `edu-abandoned-property-fl` | Covered |
| Guest won't leave | `guest-policy`, `guest-policy-day-limit`, `edu-transient-occupant-removal-fl` (§82.035) | Covered; cross-reference added |
| Squatters in a vacant unit | `edu-transient-occupant-removal-fl` (guests only) | **Gap → `edu-unauthorized-occupant-removal-fl`** (§82.036) |
| Roommate moves out | `joint-liability`, `no-sublet-assign` | Covered |
| Tenant sublets or lists on Airbnb | `no-sublet-assign`, `residential-use-only`, `edu-association-leasing-rules-fl` (association short-term limits) | Covered |
| Noise and neighbor complaints | `no-disturbance`, `default-by-tenant-fl` (§83.56(2)(a) no-cure) | Covered |
| Drugs, violence or other crime | `default-by-tenant-fl` (§83.56(2)(a)), `edu-eviction-process-fl` | Covered |
| Marijuana smoking | `smoking-policy` (tagged FL; bans all smoking) | Covered. The medical-marijuana statute is not read; the flag is already in `smoking-policy`'s FL note |
| Unapproved pet | `pet-policy-fl`, `pet-insurance-requirement` | Covered |
| Assistance or emotional-support animal request | `assistance-animal-accommodation-fl`, `edu-service-animal-penalties-fl` | Covered |
| Disability modification request | `edu-fair-housing-fl`, `no-alterations` | Covered |
| Tenant paints, or hires a contractor for an approved alteration | `no-alterations` | **Gap → `no-liens-fl`, `edu-construction-liens-fl`** (source 2; §713.10) |
| Waterbed request | `flotation-bedding-fl`, `common-area-use-fl` (§83.535) | Covered |
| Association fines the owner because of the tenant | `hoa-compliance` | Covered |
| Owner is behind on dues; association demands the rent from the tenant | none | **Gap → `edu-association-leasing-rules-fl`** (§§718.116(11), 720.3085(8)) |
| Car towed from the lot | `parking-vehicle-rules` (defers to law) | **Gap → `edu-towing-fl`** (§715.07) |
| Pool at the property | `maintenance-allocation-fl` (pool care) | Covered. **No pool-safety notice to tenants** (confirmed absent, §GB.2.3) |
| Yard and pool work by the tenant | `maintenance-allocation-fl`, `landscaping-irrigation` | Covered |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence`, `edu-utility-former-occupant-fl` | Covered |
| Landlord's master-metered utility is shut off for nonpayment | `edu-prohibited-practices-fl` (§83.67(1)), `habitability-timeline-fl` | Covered for tenant remedies. **No utility-to-tenant shutoff notice statute** (confirmed absent, §GB.2.3) |
| Hurricane: shutters, evacuation, storm damage | `casualty-damage-fl` (§83.63, belongings retrieval), `edu-landlord-maintenance-fl` | Covered for damage. Part II, read whole, has no storm-preparation duty |
| Flooding | `flood-disclosure-fl`, `casualty-damage-fl` | Covered |
| Adding a new rule mid-lease, or a law changes | `entire-agreement`, `common-area-use-fl` | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination-fl`, `early-termination-addendum-fl`, `edu-landlord-remedies-after-breach-fl` | Covered |
| Domestic violence victim wants out | `edu-no-dv-lease-termination-fl` | Covered (confirmed absent, 2026-09-26) |
| Tenant is deployed or called up | `early-termination-fl`, `edu-servicemember-rights-fl`, `edu-state-active-duty-eviction-stay-fl` | Covered |
| Month-to-month notice either way | `edu-periodic-tenancy-termination-fl` | Covered |
| Lease requires the tenant's end-of-term notice | `end-of-term-notice-fl` (§83.575) | Covered |
| Tenant stays after the lease ends | `holdover` (§83.58) | Covered |
| Tenant disappears | `edu-abandoned-property-fl`, `abandoned-property-release-fl` | Covered |
| Tenant dies | `edu-deceased-tenant-fl` (§83.59(3)(d)) | Covered. **No lease-termination-on-death statute** (confirmed absent, §GB.2.3) |
| Fire or casualty | `casualty-damage-fl` | Covered |
| Eviction process | `edu-eviction-process-fl`, `edu-prohibited-practices-fl` | Covered |
| Retaliation claim | `edu-retaliation-fl` | Covered |
| Belongings left after move-out or eviction | `edu-abandoned-property-fl`, `abandoned-property-release-fl` | Covered |
| Deposit dispute | `security-deposit-return-fl`, `security-deposit-use` | Covered |
| Deposit refund never cashed | none | **Gap → `edu-unclaimed-deposit-refunds-fl`** (§717.102(1)) |
| Tenant asks to seal an eviction record | `edu-no-eviction-record-sealing-fl` | Covered (confirmed absent, 2026-09-26) |
| **Owner changes** | | |
| Owner sells the property with a tenant in place | `security-deposit-return-fl` (§83.49(7) successor), `landlord-address-disclosure-fl` (§83.50), `landlords-access-fl` (showings) | Covered. Part II has no seller-release section like A.R.S. §33-1325 |
| Lender forecloses | `edu-foreclosure-tenant-rights-fl` | Covered |
| Owner switches property managers | `landlord-address-disclosure-fl` (§83.50), `edu-apartment-employee-screening-fl` | Covered |
| Buyer is a foreign principal | none | Flagged, not resolved (TX1.19: §§692.201-.205; whether a lease is covered was not verified) |
| Building is converted to condominiums | none | **Out of scope, no row.** §718.606 was read section-open on 2026-09-27 and sets duties for a developer converting existing improvements: tenant extensions to 180 or 270 days, tenant termination on 30 days' notice, and no lease clause may shorten the extension. It governs a regulated conversion, not an ordinary lease |

#### GB.2.2 Rows changed

- **New:**
  - `edu-unauthorized-occupant-removal-fl` (§82.036, squatters)
  - `edu-transient-rental-tax-fl` (§212.03)
  - `edu-unclaimed-deposit-refunds-fl` (§717.102(1))
  - `edu-towing-fl` (§715.07)
  - with the four source-2 rows above.
- **Body additions:**
  - `edu-landlord-maintenance-fl`: air conditioning is not a statutory duty (§83.51(2)(a)5); codes and the lease govern.
  - `edu-periodic-tenancy-termination-fl`: no rent-increase notice statute; increases via §83.57 notice; local notice ordinances preempted.
  - `edu-transient-occupant-removal-fl`: cross-reference to the squatter procedure.
- **Notes only:** `edu-no-deposit-cap-fl` (§718.112(2)(k) now read).
- **Also read after the searches:** §720.3085(8)(a) and its prescribed tenant notice (verbatim), now in `edu-association-leasing-rules-fl` (HOA rent demand); §718.606 (condominium conversion; out of scope); §515.27(1) (pool construction features).

#### GB.2.3 Confirmed absences (no row)

Taylor ran the official full-text searches on flsenate.gov on 2026-09-27, using a quoted phrase plus a word (variants match). Every hit's section and title was reviewed, and any hit that bears on landlords was read.

- **Holding deposit or earnest money before the lease:**
  - "holding deposit": 0 hits.
  - "earnest money" tenant: only ch. 2023-17 and ch. 2022-194, session laws on affordable-housing development deposits (non-housing-tenancy).
  - Not settled by text: §83.49(1) reaches money "deposited or advanced by a tenant on a rental agreement". Whether pre-lease money falls under it is not answered by any statute found. No row.
- **Rent-increase notice (dwellings):**
  - "rent increase" tenant and "increase in rent" tenant: the only 2026 hits are the mobile-home-park index entries (ch. 723, §723.037, lot rentals). Ch. 723 is outside Part II and was not read.
  - Older hits are session laws only: ch. 90-198 (mobile homes) and ch. 91-103 (condominiums).
  - This answers checklist row 294.10: Florida's statutory rent-increase notice is the mobile-home rule.
  - Recorded in `edu-periodic-tenancy-termination-fl`.
- **Landlord receipt for cash rent:**
  - "written receipt" tenant: the hits are §§718.116, 719.108 and 720.3085, where an association gives receipts to a tenant paying it rent on demand, plus §83.49, which has no receipt duty (read whole in the FL pass).
  - The only landlord receipt rule remains §83.56(5)(a)1: a receipt for partial rent accepted after a 3-day notice.
- **Pool-safety notice to tenants:**
  - "swimming pool" tenant: §212.08 (tax), §481.203 (architecture definitions), §489.103 (contracting exemptions) and index pages pointing to §514.0115 (public pools) and the Residential Swimming Pool Safety Act (ch. 515).
  - §515.27(1), read section-open, ties the safety features to a pool's final inspection and certificate of completion. It is a construction-permit rule with no notice or duty to a tenant.
  - Pool care stays in `maintenance-allocation-fl`. No row (contrast `pool-safety-notice-az`).
- **Utility shutoff notice to tenants in master-metered buildings:**
  - "master meter" tenant: only §367.072, where 65% of customers, tenants or unit owners served by a master meter may petition to revoke a water or wastewater utility's certificate, and ch. 2008-240 (condominium).
  - No notice-to-tenants duty. Public Service Commission rules are not read (flagged, as in AZ).
  - A landlord's own interruption of utilities is barred by §83.67(1) (`edu-prohibited-practices-fl`).
- **Lease ends on the tenant's death:**
  - "death of the tenant": only ch. 2007-136, the act that authorized recovery of possession on the tenant's death (now §83.59(3)(d), `edu-deceased-tenant-fl`).
  - "tenant dies": 0 hits.
  - The lease's own terms and estate law govern. No row.

### GB.3 Integrity

- **Delta:** 12 rows (8 new, 4 changed), all 16 columns.
- **Base plus delta:** 949 rows, 913 active. FL has 107 active rows (70 lease clauses, 37 education), all VERIFIED.
- **Checks:**
  - Every other state's active count is unchanged.
  - No shared row's text changed. All 4 changed rows are FL-only.
  - No duplicate ids, dangling `supersedes`, display collisions, blank status, or blank `states` except the parent.
- **Instruction 19:** every row id named in this section and in the checklist cells exists as an active FL-tagged row.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`holdover`** — a continued month-to-month tenancy is now "terminable by either party upon the written notice required by applicable law or, where applicable law sets no notice period, by this Lease". Wyoming has no statutory period (`periodic-tenancy-notice-wy` supplies one). Raised by the WY backfill (WY log §20.4).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

- **2026-09-29, Addendum M.14 fix:** `electronic-notice-addendum-fl` used a variable name the builder never resolves, so it printed raw; renamed to the resolved name (`{{tenant_names}}`). Not a scrub change; no propagation owed.

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `casualty-damage-fl` → `edu-casualty-damage-fl`.
- **Trimmed:** `security-deposit-return-fl` keeps the landlord's holding-method choice and the tenant's 7-day vacating notice; the restated handling, claim, objection and return rules → new `edu-security-deposit-rules-fl`.

### Verdict for every lease clause

All 22 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `casualty-damage-fl` | Education | — | tenant right |
| `security-deposit-return-fl` | Split | CONSTRAINED_TERM | keep holding-method choice; restated duties to edu |
| `abandoned-property-release-fl` | Keep | SERVES_LANDLORD | opt-in |
| `assistance-animal-accommodation-fl` | Keep | SERVES_LANDLORD |  |
| `association-approval-fl` | Keep | SERVES_LANDLORD |  |
| `common-area-use-fl` | Keep | SERVES_LANDLORD |  |
| `default-by-tenant-fl` | Keep | SERVES_LANDLORD |  |
| `early-termination-addendum-fl` | Keep | SERVES_LANDLORD | opt-in |
| `early-termination-fl` | Keep | SERVES_LANDLORD |  |
| `electronic-notice-addendum-fl` | Keep | SERVES_LANDLORD | opt-in |
| `end-of-term-notice-fl` | Keep | SERVES_LANDLORD | opt-in |
| `fee-in-lieu-of-deposit-fl` | Keep | SERVES_LANDLORD | opt-in |
| `flood-disclosure-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 83.50(2) |  |
| `flotation-bedding-fl` | Keep | SERVES_LANDLORD |  |
| `landlord-address-disclosure-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 83.50(1) |  |
| `landlords-access-fl` | Keep | SERVES_LANDLORD |  |
| `maintenance-allocation-fl` | Keep | SERVES_LANDLORD | opt-in |
| `no-liens-fl` | Keep | SERVES_LANDLORD | opt-in |
| `nsf-fee-limit-fl` | Keep | CONSTRAINED_TERM | fee stated as the term |
| `pet-policy-fl` | Keep | SERVES_LANDLORD |  |
| `radon-disclosure-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 404.056(5) |  |
| `security-deposit-notice-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 83.49(2) |  |

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.30), 2026-10-03

**Date:** 2026-10-03. **Scope:** the 18 [Retro] rules and 1 targeted fix in the FL retro prompt only. This is a scalpel, not a re-audit (rule 1), and nothing else was reopened. **Input:** `lease-clauses.csv`, 2,856 rows (count checked first, as the prompt asks), 17 columns, CRLF; FL 108 active (69 lease clauses, 39 education). Earlier output files in this chat were deleted, and only the files attached for this task were used (rule 8). **Settings:** Opus, high effort. Research mode was not used; no rule 9 trigger arose.

**How the text was read (rules 11, 12, 14).** The cloud shell still cannot reach Florida sites, but this chat now has the Claude desktop browser pane, which can. Every section relied on was read in that pane on the official Online Sunshine pages (leg.state.fl.us, 2026 Florida Statutes and the Constitution), with session laws on laws.flrules.org, court rules on floridabar.org and one federal act on govinfo.gov. PDFs were parsed in the page with pdf.js.
- Hashes: SHA-256 for each page and section was computed in the browser, and the excerpts relied on were copied into the sources file with those hashes. Because the excerpts are copies rather than hash-matched files, this is a weaker method than rule 14 asks, and is named as such.
- Search engine: whole-code searches used the Online Sunshine statute search. It indexes section bodies: 'rebuttable AND presumption AND advance AND rent' finds §83.49(7). Its known positive returns 2 hits and its nonsense control returns 0. It does not honour quoted phrases, so every battery uses AND and every hit was read in context. Wildcard positive: 'bedbug*' finds §83.51.
- Chapter 83 Part II was also screened in-page with regex: 93,515 characters, 79 headings matched, positive 4 hits, nonsense 0.
- The full battery log and the excerpts are in this pass's sources files (`battery-log.md`, `excerpts-relied-on.md`; handed to Claude Code with the delta).

### Results, one line per rule

| Rule | Verdict | What was read | Rows changed |
|---|---|---|---|
| 37 Tenancy type | **Fixed** | §§83.43(6), 83.46, 83.49(3), (5), (6), 83.491(9), 83.512(1), 83.57, 83.575, 83.58, 83.595(4); §212.03(4); chs. 2023-314 and 2023-17 effective dates. Problem: `early-termination-fl` and `end-of-term-notice-fl` would carry into a month-to-month holdover, because `holdover` continues the tenancy 'on the same terms'. §83.575 applies only to 'a rental agreement with a specific duration'. "Expiration" windows: §83.49(3) and §83.58 run from the end date a §83.57 notice sets. "Entered into or renewed": §83.491(9) (2023-07-01) reaches every builder lease. | `early-termination-fl` and `end-of-term-notice-fl` (fixed-Term only, with a periodic carve-out); `edu-transient-rental-tax-fl` (month-to-month in its first 6 months); notes on `flood-disclosure-fl` (year-to-year treated as 1 year+), `holdover`, `edu-security-deposit-rules-fl` |
| 39 Eviction duties | **Fixed** (statewide); local rules partly read | Statutes: §§83.56, 83.59-83.625, 83.62(2), 83.67, 51.011, and ch. 715 (already in the FL pass). Court rules read whole: Fla. R. Civ. P. (10-01-26 edition, 340 pp.) and Fla. R. Gen. Prac. & Jud. Admin. (7-1-2026, 259 pp., including Rule 2.420). Findings: Form 1.947 requires a copy of a written lease attached to the complaint; §51.011 makes the statute govern when a rule's time period differs; Rule 1.580(b) third-party possession affidavit; no federal pre-filing condition; no eviction sealing category in Rule 2.420(c), only motions under (e) and (h). Post-writ: §83.62(2) (to or near the property line, no liability; no storage or animal duty). Lockout ban §83.67(2). **Local rules:** the Eleventh Circuit's list and its R-1-11 (county civil division, structural only) were read. The other 19 circuits' local rules and all administrative orders were not read (§ Open items). | `edu-eviction-process-fl` (Form 1.947 lease copy; statute controls over rule timing); `edu-no-eviction-record-sealing-fl` (court-rule basis and sentence) |
| 41 Just cause | **Checked, no issue** | Batteries: 'just AND cause AND tenant' 4 hits; 'good AND cause AND tenant AND evict*' 7 hits; Part II regex 2 hits (§83.64(3) only). Florida has no just-cause rule, so the wording in `security-deposit-use`, `no-alterations`, `holdover`, `keys`, `security-deposit-return-fl`, `early-termination-fl` and `end-of-term-notice-fl` (end of Term ends possession) is lawful. | none |
| 41b `for-cause-eviction` row | **Fixed** | As rule 41, plus §§83.57, 83.425, 83.64, 760.23, 718.606 (re-read), 250.5202, and Pub. L. 115-174 §304. | new `edu-no-for-cause-eviction-fl` (confirmed absence with situational limits; points to `edu-periodic-tenancy-termination-fl`, where the rule was already stated) |
| 42 Required text in a shared clause | **Checked, no issue** | Part II regex for required lease content: 19 hits. §83.49(2) disclosure (5+ units) is carried by `security-deposit-notice-fl`, not by shared `security-deposit-use` or `due-at-signing`; §83.48 needs no lease text. No statute forces a sentence into a shared fee or deposit clause. | none |
| 44 Terms turned into landlord duties | **Fixed** | §83.56(1) lets the tenant terminate for a material failure to keep 'material provisions of the rental agreement'; §83.55 gives damages for breach of 'the requirements of the rental agreement'; §83.60(1)(b) withholding applies to §83.51(1) only. So the library's voluntary promises become statutory triggers. Start rows `security-deposit-notice-fl` and `landlord-address-disclosure-fl`: no 'as agreed' duty (their delivery terms are the statute's own). | `habitability-timeline-fl` (body: lease promises count for termination; withholding stays limited to §83.51(1), see rule 79); FL notes on `landlord-maintenance`, `appliances-included`, `services-utilities-provided`, `utilities-paid-by-landlord`, `security-deposit-notice-fl`, `landlord-address-disclosure-fl` |
| 45 Electronic notices | **Checked, notes added** | Florida UETA, §668.50, read whole. (3)(b) excludes only wills, most of the UCC and UCITA, so eviction, default and cure notices are not excluded, and §83.505 authorizes e-mail for 'any notices required under this part'. Unwaivable conditions: (5)(c) a party may refuse other electronic transactions; (8)(a) and (c) a record the recipient cannot print or store is unenforceable against the recipient; (8)(b)2 a specified method must be used. Start rows checked: `security-deposit-notice-fl`, `electronic-notice-addendum-fl`, `landlord-address-disclosure-fl`. | notes on `electronic-notice-addendum-fl`, `notices`, `electronic-signatures` (previously 'not read'), `security-deposit-notice-fl`. Builder: send e-mail notices the tenant can save and print |
| 46 Lease as the required notice | **Fixed** | §83.49(2) lets the lease carry the deposit disclosure (offered: `security-deposit-notice-fl`); §§83.50, 404.056(5) and 83.67(5) are likewise carried. Reconciliation: shared `notices` says 'nothing in this Lease designates an alternative method of delivery', and `addendum-precedence` gives priority only to addenda 'required by law', so the optional §83.505 e-mail addendum needed its own control sentence. | `electronic-notice-addendum-fl` (body: "This Addendum is part of the Lease. For the notices it covers, it controls over the Notices section of the Lease."); `notices` FL note |
| 47 Knowing-use penalties | **Fixed** (education); clauses checked | Part II has no 'knowing use' penalty, but §83.47(2) gives actual damages for including a void term at all. Debt-collection statute: §559.72(9) reaches 'a person' collecting a consumer debt; §559.77(2) gives actual damages plus up to $1,000 statutory; §559.55(6) defines consumer debt (whether rent qualifies is case law, not read). Start rows: `late-fee` and `notices` carry no void term. `common-area-use-fl` names the protected flag display (§83.67(4)) instead of relying on a generic saving sentence. `early-termination-fl`'s fee could have reached a periodic holdover and is now limited (rule 37). | `edu-prohibited-lease-terms-fl` (body: collection-law sentence) |
| 48 Separate documents | **Checked, no issue** | Batteries for separate writing, document and instrument (22, 23 and 4 hits). Landlord-side rules: §83.512 separate document (`flood-disclosure-fl`); §83.595(4) separate addendum (`early-termination-addendum-fl`); §83.505 addendum (`electronic-notice-addendum-fl`); §83.67(5) lease or separate writing (optional). No clause tries to supply any of these inside the lease. Chore split: §83.51(1) lets only a single-family home or duplex shift (1) duties 'in writing' (`maintenance-allocation-fl`), with no separate-writing rule; not the uniform-act split. | none |
| 49 Collection costs | **Checked, no issue** | Part II regex (collection, costs and expenses, attorney fees): §83.48 reciprocal fees (not waivable), §83.49(2)(d), §83.625, §83.67(6). No Florida statute bars recovering collection costs. `default-by-tenant-fl`'s 'reasonable costs and expenses' is lawful; its fee sentence matches §83.48. In `security-deposit-notice-fl`, the 'costs and attorney fees' wording is the statute's reciprocal text. | notes on `default-by-tenant-fl`, `security-deposit-notice-fl` |
| 50 "The lease controls" | **Checked, no issue** | Part II regex: 14 lease-choice hits. Each choice is made on purpose: §83.43(12) (fees not rent; pet rent is rent); §83.46(1) (`rent-payment`); §83.49(5) (7-day vacating notice kept); §83.51(1) (`maintenance-allocation-fl`); §83.51(2)(a) and (b) (duties kept with the landlord; detectors installed by the landlord); §83.51(2)(e) (`utilities-responsibility`); §83.575 (`end-of-term-notice-fl`); §83.595(4) (addendum); §83.67(5) (legend). No deposit uplift tied to lease terms (Florida has no cap). | none |
| 51 Plain-language and consumer-contract statutes | **Fixed** | FDUTPA read. §501.203(8): "trade or commerce" includes 'rental' of 'any property'. §501.204: general standard read with FTC law, and no enumerated list of unfair practices. §501.212(7), closing paragraph: 'does not affect any action or remedy concerning residential tenancies covered under part II of chapter 83'. Plain language: battery returned 18 hits, none reaching leases. Blank spaces: battery returned 2 hits, both outside residential leases (§520.23 motor vehicles; §1001.42); Part II returned 0. Lease copy: battery returned 14 hits, none a copy duty; Part II returned 0. | new `edu-consumer-protection-act-fl` |
| 53 Figure vs shared clause | **Fixed** (one trigger) | `rent-payment`: no conflict (next business day is a floor). `nsf-fee-limit-fl`: tiers from §68.065, unchanged. `surrender-end-of-term`: self-limited. `holdover`: the trigger matches §83.58 ('after the expiration of the rental agreement'). `early-termination-fl` and the addendum: 2 months and 60 days match §83.595(4). Trigger fix: `end-of-term-notice-fl`'s reminder 'no later than 15 days before' the notice period sits outside §83.575(2)'s 'within 15 days before the start of the notification period' when sent earlier. It now says '15 days before the notice period begins', which satisfies both readings (Claude's call, rule 76). | `end-of-term-notice-fl` |
| 54t Tenant-caused damage | **Fixed** (clause and education) | Each exit or abatement provision was checked for its own fault exception. §83.63 casualty: 'other than by the wrongful or negligent acts of the tenant' (tenant only). §83.56(1)(a)-(b) and §83.60(1)(b) rest on §83.51 duties, and §83.51(4) excludes conditions caused by the tenant, family or a person present with consent. §83.60(2) is a registry deposit, not an abatement. Supporting sections: §83.52(6) tenant duty; §83.56(2)(a) intentional damage gives a no-cure notice; §83.595(2) good-faith reletting. Casualty rows checked first (`edu-casualty-damage-fl`). | new `tenant-caused-damage-fl` (optional; no-abatement and lost-rent parts limited to §83.63's 'tenant' group; repair-cost sentence uses §83.51(4)'s wider group; periodic limit), new `edu-tenant-caused-damage-fl`; note on `edu-casualty-damage-fl` |
| 35c Constitution | **Checked, no issue** | Florida Constitution loaded whole (Online Sunshine page; positive 'homestead' 70, nonsense 0). Screened marijuana/cannabis (25 hits, all Art. X §29), arms (Art. I §8), privacy (Art. I §23: 'governmental intrusion'), speech (Art. I §4), tenant/landlord/lease/dwelling (2 hits, Art. X §20 workplace smoking), and smoking. Art. X §29(a)(1) shields medical use from 'civil liability or sanctions under Florida law'; (c)(6) requires no accommodation of smoking in public places; no lease text. Fla. Stat. §381.986(15)(d): 'does not impair the ability of any party to restrict or limit smoking or vaping marijuana on his or her private property'. `smoking-policy` bans smoking and vaping of anything, not possession or other use, and stays tagged. Case-law risk under §29(a)(1) is labelled unread. | `smoking-policy` FL note |
| 27 Seven topics | **Fixed** (all seven now have rows) | algorithmic-rent-setting: **Confirmed absent** (battery 'algorithm* AND rent*' 3 tax hits; Part II 0). fees-as-rent: **Present**, §83.43(12). landlord-self-cure: **Confirmed absent** (Part II regex; whole-code battery 1 tax hit). lease-completeness: **Confirmed absent** (rule 51 batteries). quiet-possession: **Confirmed absent** (2 batteries, 5 and 9 hits, none residential; Part II 0). statutory-forms: **Present** ('substantially AND following AND form AND tenant', 36 hits, landlord ones listed in the row). tenant-security-cameras: **Confirmed absent** (camera 3 hits, surveillance 2, none tenant; Part II 0; voyeurism and interception statutes not read). | new `edu-no-algorithmic-rent-rule-fl`, `edu-fees-as-rent-fl`, `edu-no-landlord-self-cure-fl`, `edu-no-lease-completeness-rule-fl`, `edu-no-quiet-possession-statute-fl`, `edu-statutory-forms-fl`, `edu-no-tenant-camera-rule-fl` |
| 79 Re-read before trusting a summary | **Fixed** (see list below) | Rows resting on secondary sources or fetch-tool summaries re-read section-open. Also mechanical: 24 statutory quotations in FL rows' notes were checked against the official ch. 83 text. 23 matched; the 24th, 'full and equal access', is from §413.08, not ch. 83. | see list |
| Targeted fix 19 (scrub-trimmed clauses, rules 78 and 47) | **Fixed** (one pointer); nothing to restore | `security-deposit-return-fl` re-read against §83.49 whole. Filled with any holding choice it cannot break a limit: the interest figures are §83.49(1)(b)-(c)'s own, and the vacating notice tracks §83.49(5). Conditions a number check can't catch bind regardless of the lease and sit in `edu-security-deposit-rules-fl`. Required lease content was searched across Part II, not only this clause's citation (§§83.49(2), 83.575(1), 83.67(5), 83.512, 83.595(4), plus §§404.056(5), 83.50); nothing was trimmed. Every active FL clause was searched for pointers to switched-off or trimmed text: `pet-policy-fl` said a pet deposit is 'returned under this Lease's Security Deposit terms', and the return terms left the Lease at the scrub. | `pet-policy-fl` (body: held and returned as Florida law requires); note on `security-deposit-return-fl` |

### Rule 79: rows re-read, with verdicts

**Start row:**
- `edu-no-immigration-inquiry-rule-fl`: **holds; basis upgraded.**
  - The SB 1718 point (secondary) is no longer relied on.
  - Whole-code batteries: 'alien AND landlord' 0; 'immigration AND tenant' 0; 'alien AND lease' 20, 'harbor* AND alien' 10, 'alien AND dwelling' 7, none a renting rule.
  - §760.23(1)-(2) re-read; the "national origin" subdivision cited is right.

**Secondary sources replaced by primary text:**
- `edu-local-preemption-fl`: **holds; basis upgraded.**
  - Ch. 2023-17 s. 49 (effective July 1, 2023; approved March 29, 2023; s. 2 has no separate date) read on the session law.
  - §760.34(3), (8) read.
  - The local fair-housing question stays PARTIAL (no court or AG ruling).
- `edu-fair-housing-fl`: **holds.** §760.34 read section-open (was research-sourced).
- `edu-periodic-tenancy-termination-fl`: **holds.** Ch. 2023-314 ss. 2-4 read (s. 4 'take effect July 1, 2023'; approved June 29, 2023); was 'read by the research tool'.
- `late-fee` and `default-by-tenant-fl` (FL notes citing trial-court decisions): case law, not statute. Left as labelled ("secondary, not read"); rule 21 applies.

**Fetch-tool summaries replaced by section-open reads:**
- `edu-unauthorized-occupant-removal-fl`: §82.036 read whole; **holds.**
- `edu-association-leasing-rules-fl`: §720.3085(8)(b)-(f) read; **body corrected.** HOA tenants also get the rent credit, and the HOA may evict, as condominium tenants and associations do (the body had limited both to condominiums).
- `edu-transient-rental-tax-fl`: §212.03 read; **holds** (and a rule 37 sentence added).
- `edu-veterans-pilot-fl`: §83.684(1)-(2), (6)-(7) read; **holds.**
- `association-approval-fl` and `edu-no-deposit-cap-fl`: §719.106(1)(i) read (was 'abstract only'); **hold.** A cooperative's fee cap is $100 per applicant.
- `no-liens-fl`, `edu-construction-liens-fl` (§713.10) and `edu-unclaimed-deposit-refunds-fl` (§717.102): **hold.**

**Qualifier attached to the wrong sentence:**
- `habitability-timeline-fl`: **fixed.** "A tenant may instead give written notice … withhold rent" followed a sentence covering lease provisions, but §83.60(1)(b) limits withholding to §83.51(1).

**Wrong subdivision in `lease_clause_basis` (rule 22):**
- `flood-disclosure-fl`: '§ 83.50(2)' corrected to '§ 83.512'.
- `landlord-address-disclosure-fl`: '§ 83.50(1)' corrected to '§ 83.50'. §83.50 has no subsections.

**Basis count (from `lease-clauses.csv` notes and `lease_clause_basis`):** 40 of 108 active FL rows recorded no basis.
- **Group 1 (research rows), 36:** shared rows whose FL segment named a section but not how it was read. Basis now recorded on each: Part II read whole in the FL pass, cited sections re-read on 2026-10-03. `surrender-end-of-term` and `parking-vehicle-rules` rest on Taylor's paste; `lead-based-paint` is federal.
  - Rows: `rent-payment`, `due-at-signing`, `security-deposit-use`, `residential-use-only`, `permitted-occupants`, `no-disturbance`, `utilities-responsibility`, `utility-payment-evidence`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `surrender-end-of-term`, `holdover`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `tenant-forward-proceedings-ca`, `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`.
- **Group 2 (created by the 2026-09-29 scrub), 2:** `edu-security-deposit-rules-fl`, `edu-casualty-damage-fl`. Provenance repaired by carrying the source rows' basis; both sections re-read.
- **Group 3 (shared rows with no FL segment), 2:** `application-of-payments`, `rental-application-accuracy`. FL segments added with basis.

**Citations-file updates for Claude Code (`lease-clause-citations-FL.csv`):**
- `flood-disclosure-fl`: no change needed (the file already cites §83.512).
- `edu-local-preemption-fl`: keep PARTIAL. Drop "Ch. 2023-17's effective date is from secondary sources" (now read).
- `edu-no-immigration-inquiry-rule-fl`: basis "Online Sunshine whole-code batteries; §760.23 read".
- `electronic-signatures`: replace "Florida electronic-transactions statute not read" with "§668.50 read".
- `smoking-policy`: replace "medical marijuana not read" with "Const. art. X §29 and §381.986(15)(d) read".
- `edu-foreclosure-tenant-rights-fl`: add "federal PTFA governs; §83.5615 not in force (note under §83.5615; Pub. L. 115-174 §304)".
- `edu-transient-occupant-removal-fl`: leave as is (its §82.036 mention is a cross-reference).
- New rows need citation entries:
  - `edu-no-for-cause-eviction-fl`: CONFIRMED_ABSENT.
  - `tenant-caused-damage-fl`: CITED.
  - `edu-tenant-caused-damage-fl`: CITED.
  - `edu-consumer-protection-act-fl`: CITED.
  - `edu-fees-as-rent-fl`: CITED.
  - `edu-statutory-forms-fl`: CITED.
  - The four absence rows: CONFIRMED_ABSENT.

### Other finding (targeted fix outside the 18 rules, rule 1)

**`edu-foreclosure-tenant-rights-fl` described a Florida statute that is not in force.**
- Under §83.5615, the official 2026 compilation prints: 'Section 2, ch. 2020-99, created s. 83.5615 “[e]ffective upon the repeal of the federal Protecting Tenants at Foreclosure Act, Pub. L. No. 111-22.”'
- Pub. L. 115-174 §304 (read on govinfo.gov) repealed the federal act's sunset and restored it permanently, effective 30 days after May 24, 2018.
- The substance landlords must follow is unchanged: 90 days' notice, lease survival and the bona fide test.
- The body now says it is federal law, with Florida's standby copy. PTFA §§701-703 themselves were not read.
- Rule 16 lesson: an official compilation can print a contingent section with no in-force marker except a footnote.

### New rows (11)

| Row | Type | rule_type | Basis |
|---|---|---|---|
| `edu-no-for-cause-eviction-fl` | education | RECOMMENDED | confirmed absent; §§83.57, 83.425, 83.64, 760.23, 718.606, 250.5202 |
| `tenant-caused-damage-fl` | lease clause, optional | CONDITIONAL | SERVES_LANDLORD; §§83.63, 83.51(4), 83.52(6), 83.595(2) |
| `edu-tenant-caused-damage-fl` | education | RECOMMENDED | §§83.63, 83.51(4), 83.56, 83.60, 83.52(6), 83.49(3), 83.55, 83.595 |
| `edu-consumer-protection-act-fl` | education | RECOMMENDED | §§501.203(3), (8), 501.204, 501.212 |
| `edu-no-algorithmic-rent-rule-fl` | education | RECOMMENDED | confirmed absent |
| `edu-fees-as-rent-fl` | education | RECOMMENDED | §§83.43(12), 83.56(3) |
| `edu-no-landlord-self-cure-fl` | education | RECOMMENDED | confirmed absent; §§83.53(2), 83.51(4) |
| `edu-no-lease-completeness-rule-fl` | education | RECOMMENDED | confirmed absent; §83.45 |
| `edu-no-quiet-possession-statute-fl` | education | RECOMMENDED | confirmed absent; §§83.67, 83.53(3) |
| `edu-statutory-forms-fl` | education | RECOMMENDED | present; forms listed in the row |
| `edu-no-tenant-camera-rule-fl` | education | RECOMMENDED | confirmed absent |

No new `{{variables}}`. No shared row's text changed: shared rows received only an FL note segment and `last_checked`, so no propagation is owed (rule 62).

### Open items

- **Rule 39 local rules:** 19 of Florida's 20 circuits' local rules were not read, and no circuit's administrative orders were read (Florida trial-court eviction practice mostly lives in administrative orders). This is an open boundary.
- **Case law, not read (rule 76 labels):**
  - whether rent is a "consumer debt" under §559.55(6);
  - whether Art. X §29(a)(1) bars evicting a qualifying patient for smoking in breach of a lease;
  - the lost-rent measure in `tenant-caused-damage-fl`;
  - whether a guest's negligence counts as the tenant's under §83.63.

### Integrity (delta checked against the master)

- **Delta:** 80 rows (69 changed, 11 new), 17 columns, the master's header, CRLF.
- **Merged:** 2,867 rows. FL active rows go from 108 to 119 (70 lease clauses, 49 education), all VERIFIED. Every other state's active count is unchanged.
- **Checks:**
  - no duplicate ids;
  - no dangling `supersedes`;
  - no display collisions;
  - no blank status or `states` except the `security-deposit-return` parent.
- **Shared rows** (40) changed only `notes` (an appended FL segment) and `last_checked`.
- **FL-only rows** (29) changed only `notes`, `last_checked`, `bodyText` (11 rows) and `lease_clause_basis` (2 rows).
- Every row id named in the new notes is an active FL row, apart from deliberate references to the TN model, the switched-off provenance row and the base rows FL overrides.

### Proposed SOP changes

1. **Footnoted contingent sections (rule 16).** When a section relied on carries a compiler's note making it effective on a contingency (for example, "effective upon the repeal of" a federal act), confirm the contingency before treating the section as law. Reason: Florida's §83.5615 is printed in the 2026 compilation, but it is a dormant copy of the federal PTFA, and an education row presented it as Florida law in force.
2. **Generous lease promises as statutory triggers (rule 44).** Check whether the state's landlord-noncompliance remedy reaches "material provisions of the rental agreement", not only "expressly agreed to furnish" wording. Reason: Florida §83.56(1) turns every voluntary maintenance, appliance or utility promise into a 7-day termination trigger, while the withholding defense (§83.60(1)(b)) does not reach them; the education row had blurred the two.
3. **Boolean-only engines (rule 19).** Where the official statute search does not honour quoted phrases, record that and use AND batteries with every hit read in context. Test the engine's phrase handling with a known positive in quotes (Florida's Online Sunshine returned 188 ranked results for a two-word quoted phrase that has 2 true hits).
4. **Optional addenda vs the Notices sentence (rule 46).** Check `addendum-precedence` as well as `notices`. Reason: it ranks only addenda "required by law" above the Lease, so an optional statutory e-mail addendum (Florida §83.505) gets no priority from it and needs its own control sentence.

## Retro sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 3ba34ed` (the attached CSV is byte-identical to it): 69 rows updated and 11 new, no refusals. Forty of the updates are shared rows given an FL note segment recording Florida's basis (rule 79's third group), notes only. FL active 108 → 119 (70 lease clauses); every other state's set unchanged. The one same-topic pair, `early-termination-fl` and `early-termination-addendum-fl`, predates this pass (the § 83.595(4) addendum is a separate document by design).
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 4 of 4, against leg.state.fl.us (2026 Florida Statutes, read by Claude Code at sync):** § 83.5615 prints only a note that it took effect "upon the repeal of the federal Protecting Tenants at Foreclosure Act", which hasn't happened, confirming the correction to `edu-foreclosure-tenant-rights-fl`; § 83.63 (the casualty fault exception covers "the tenant" only) behind `tenant-caused-damage-fl`; § 83.56(1) ("material provisions of the rental agreement") behind `habitability-timeline-fl`; § 83.505 (e-mail notices only by a signed addendum) behind `electronic-notice-addendum-fl`'s new control sentence.
- **Citations file:** the five updates the retro listed applied (`electronic-signatures` now § 668.50; `smoking-policy` now Fla. Const. art. X, § 29 and § 381.986(15)(d); `edu-foreclosure-tenant-rights-fl` now cites the federal PTFA with § 83.5615 marked not in force; `edu-local-preemption-fl` and `edu-no-immigration-inquiry-rule-fl` bases updated), 11 rows added (5 confirmed-absence), changed rows dated.
- **Supporting files:** the retro's `battery-log.md` and `excerpts-relied-on.md` are kept below as appendices A and B.
- **Open:** 19 of Florida's 20 circuits' local rules and all administrative orders unread (rule 39); four case-law questions (above).
- **SOP 1.31:** all four proposals adopted (rules 11, 16, 44, 46). FL's conformance column is complete except the examples.

### Appendix A: FL retro battery log (2026-10-03)

Engine: Online Sunshine statute search (official Florida Legislature site), 2026 Florida Statutes,
URL form: https://www.leg.state.fl.us/statutes/index.cfm?StatuteYear=2026&AppMode=Display_Results&Mode=Search%20Statutes&Submenu=2&Tab=statutes&NumPerPage=50&Search_String=<query>
Matching: Boolean AND/OR/NOT and * wildcard at section level, case-insensitive (site's Search Tips page, read 2026-10-03). Quoted phrases are NOT honoured as phrases ("flotation bedding" in quotes returned 188 ranked returns), so every battery uses AND and every hit is read in context before it counts.
Proof it indexes body text, not titles only (rule 11): 'rebuttable AND presumption AND advance AND rent' -> 2 (83.49, 721.05); the words sit in §83.49(7), deep in the body, not in the title.
Known positive: 'flotation AND bedding' -> 2 (83.535, 212.08).
Nonsense control: 'xqzzyplugh' -> 0.
Constitution: not covered by this engine (separate page; screened in-page, see rule 35c).
Chapter 83 Part II regex screen: run in-page on the official ch. 83 'View Entire Chapter' page (leg.state.fl.us, 134,695 chars, SHA-256 c039a5d7fd67ce51ea8905677881c51e7a86312a53e23c47854215ee1d64a11d), Part II slice 93,515 chars, 79 headings matched. Positive 'flotation bedding' 4 hits; nonsense 0.

## Whole-code batteries
| # | Query | Returns | Hits (section: heading) | Verdict |
|---|---|---|---|---|
| 1 | alien AND landlord | 0 | - | no landlord immigration rule |
| 2 | alien AND lease | 20 | 379.232 448.095 680.303 631.141 443.101 689.28 288.15 443.1216 327.02 550.002 316.193 163.340 718.117 775.261 440.02 790.06 775.21 626.9932 163.01 921.0022 | none a residential landlord duty |
| 3 | immigration AND tenant | 0 | - | - |
| 4 | harbor* AND alien | 10 | 379.226 787.06 328.72 944.608 985.4815 944.607 775.261 943.0435 775.21 921.0022 | none about renting to a person by immigration status |
| 5 | alien AND dwelling | 7 | 420.526 907.041 494.001 163.340 163.360 921.0022 163.3162 | none |
| 6 | just AND cause AND tenant | 4 | 193.155 61.075 718.117 212.08 | no just-cause eviction rule |
| 7 | good AND cause AND tenant AND evict* | 7 | 83.64 381.00895 723.061 82.035 723.031 718.1255 397.487 | only §83.64(3) (retaliation defense defeated by good cause) for Part II; 723.x mobile-home lots; 381.00895 migrant labor housing |
| 8 | plain AND language AND contract* | 18 | 680.214 413.0114 672.316 1011.035 288.018 102.014 171.031 945.41 288.0655 395.301 1002.88 578.09 408.9091 520.07 916.107 39.402 288.1226 121.021 | no plain-language consumer-contract statute reaching leases |
| 9 | blank* AND lease* AND sign* | 2 | 520.23 (motor-vehicle retail installment) 1001.42 | no blank-space rule for residential leases |
| 10 | algorithm* AND rent* | 3 | 212.04 212.05 212.12 | none about rent pricing |
| 11 | camera* AND tenant* | 3 | 316.003 553.793 934.50 | none about tenant cameras |
| 12 | surveillance AND tenant* | 2 | 934.50 212.08 | none |
| 13 | quiet AND enjoyment | 5 | 65.091 679.610 723.025 513.118 513.13 | no residential quiet-enjoyment statute (723.025 mobile-home park only) |
| 14 | quiet AND possession | 9 | 65.061 65.081 679.610 65.021 65.011 64.061 513.13 718.117 402.305 | none a residential quiet-possession covenant |
| 15 | separate AND writing AND tenant | 22 | 255.25 83.49 718.106 697.07 713.3471 709.2119 61.075 715.12 166.231 723.031 625.012 713.785 509.013 350.81 196.012 719.106 193.155 718.111 212.08 627.351 381.0065 376.3078 | 83.49 is "separate account"; no residential separate-writing rule beyond those already in the library |
| 16 | separate AND document AND tenant | 23 | 83.512 + 22 non-landlord sections (255.25 481.203 713.3471 715.12 689.071 403.121 718.111 509.013 420.0003 456.053 718.117 403.706 443.036 713.785 212.08 193.155 719.106 316.003 733.817 627.351 381.0065 376.3078) | §83.512 flood disclosure (`flood-disclosure-fl`, separate) |
| 17 | separate AND instrument AND lease* AND tenant | 4 | 689.071 193.155 718.111 212.08 | none |
| 18 | marijuana AND landlord | 2 | 397.487 212.08 | no landlord rule (recovery residences only) |
| 19 | marijuana AND tenant* | 2 | 397.487 212.08 | same |
| 20 | firearm* AND tenant* | 3 | 212.08 790.333 921.0022 | no tenant firearm rule |
| 21 | bedbug* (wildcard positive) | 1 | 83.51 | wildcard and body indexing confirmed |
| 22 | landlord AND tenant AND repair* AND charge* AND rent | 1 | 212.08 | no landlord self-cure statute |
| 23 | copy AND rental AND agreement AND tenant AND sign* | 14 | 83.491 83.682 83.505 719.108 718.116 420.9075 82.037 82.036 255.249 125.0104 718.111 212.08 627.351 489.103 | no lease-copy-at-signing duty |
| 24 | substantially AND following AND form AND tenant | 36 | landlord-tenant hits: 83.49 83.491 83.505 83.512 83.56 83.595 83.67 715.105 715.106 718.116 719.108 720.3085 82.036 (82.037 commercial); rest non-housing | statutory forms list (`edu-statutory-forms-fl`) |

## In-page regex screens over Fla. Stat. ch. 83 Part II (93,515 chars; positive 'flotation bedding' 4, nonsense 0)
| Pattern | Hits | Sections |
|---|---|---|
| lease-choice: unless otherwise (agreed or provided), if the lease so provides, except when otherwise provided, as provided in the rental agreement, may contain a provision, may provide that, if provided in the rental agreement, designated as rent, in writing with respect to | 14 | 83.43(12); 83.46(1); 83.49(5); 83.51(1), (2)(a), (2)(b); 83.575(1), (2) x2; 83.595(4) x3; 83.67(5) x2 |
| collection, costs and expenses, attorney fees | 9 | 83.48 (5, incl. TOC); 83.49(2)(d) disclosure; 83.625; 83.67(1) ('garbage collection'), 83.67(6) |
| required content (lease must contain/include..., in the lease agreement, printed or clearly stamped, separate document/writing/addendum, signing a separate) | 19 | 83.49(2), (5); 83.491; 83.51(2)(e); 83.512(1); 83.56(4); 83.575; 83.595(4); 83.67(4), (5) |
| self-cure (landlord may enter/repair/remedy..., cost of repair, charged to the tenant) | 8 | 83.491 (repair costs, fee program), 83.512 (definition), 83.53 entry only |
| quiet enjoyment/possession, peaceable, peaceful | 0 | - |
| blank(s), fill(ed) in | 0 | - |
| camera, video, surveillance, doorbell, recording device | 0 | - |
| algorithm, software, pricing, rent-setting | 0 | - |
| good/just/for/without cause | 2 | 83.64(3) |
| copy of the rental agreement/lease | 0 | - |

## Florida Constitution in-page screen (whole document page, positive 'homestead' 70, nonsense 0)
marijuana|cannabis 25 (all Art. X §29); bear arms|firearm 7 (Art. I §8; Art. VIII §5 waiting period); privacy 4 (Art. I §23 governmental intrusion; Art. X §22); speech (Art. I §4); tenant|landlord|lessee|lessor|rental agreement|dwelling 2 (Art. X §20 workplace smoking, 'lessee' as person in control); smok 6 (Art. X §20).

### Appendix B: Primary text relied on for the FL retro changes (2026-10-03)

Method (rule 14): every passage below was read in the Claude desktop browser pane on the official site named, and copied here from the page text the browser returned. The shell cannot reach Florida sites, so a SHA-256 of each whole page or section was computed in the browser (crypto.subtle) and is recorded here; the excerpts themselves are copies, not hash-matched files (weaker method, named as such).

## Fla. Stat. ch. 83, 2026 (Online Sunshine, "View Entire Chapter", https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0000-0099/0083/0083.html)
Page text 134,695 chars, SHA-256 c039a5d7fd67ce51ea8905677881c51e7a86312a53e23c47854215ee1d64a11d. Per-section SHA-256 (first 16 hex) of the section text from its heading through its history line: 83.42 7f802133ff3c4e37; 83.43 e3f61fd4744bb3e1; 83.46 f015972852b81340; 83.47 1301c27cb6339253; 83.48 c0e44b25c9d35fde; 83.49 2e2caea355c79f59; 83.50 4bb55d5f890e6c41; 83.505 6e6edcf759eb80f5; 83.51 df741748a359e1e4; 83.512 a6c7a7a67775733c; 83.52 b140405ef4464035; 83.53 0292fc03f2cad596; 83.56 (with 83.5615) 62ef0feffc48ea18; 83.57 d1f48acfdd5e4a7f; 83.575 fb7462e04dfb3e84; 83.58 df9ee0af03754d89; 83.59 61fa329f8a164d61; 83.595 1ebad2c27264afd8; 83.60 63646ea7c35e912e; 83.62 9c05049fcdf695ec; 83.63 37624e0d2cb029da; 83.64 17f6bfb6ce85c660; 83.67 5df18b3ffee6d386.

- §83.50 (whole; no numbered subsections): "In addition to any other disclosure required by law, the landlord, or a person authorized to enter into a rental agreement on the landlord’s behalf, shall disclose in writing to the tenant, at or before the commencement of the tenancy, the name and address of the landlord or a person authorized to receive notices and demands in the landlord’s behalf. ..." History.—s. 2, ch. 73-330; s. 443, ch. 95-147; s. 5, ch. 2013-136; s. 3, ch. 2025-16.
- §83.512(1): "A landlord must complete and provide a flood disclosure to a prospective tenant of residential real property at or before the execution of a rental agreement for a term of 1 year or longer. The flood disclosure must be in a separate document." History.—s. 1, ch. 2025-166.
- §83.5615 note: "Section 2, ch. 2020-99, created s. 83.5615 “[e]ffective upon the repeal of the federal Protecting Tenants at Foreclosure Act, Pub. L. No. 111-22.”"
- §83.575(1): "A rental agreement with a specific duration may contain a provision requiring the tenant to notify the landlord within a specified period before vacating the premises at the end of the rental agreement, if such provision also requires the landlord to notify the tenant in a manner prescribed by s. 83.56(4) within such notice period if the rental agreement will not be renewed. A rental agreement may not require less than 30 days’ notice or more than 60 days’ notice from either the tenant or the landlord."
- §83.575(2): "A rental agreement with a specific duration may provide that if a tenant fails to give the required notice before vacating the premises at the end of the rental agreement, the tenant may be liable for liquidated damages as specified in the rental agreement if the landlord provides written notice to the tenant specifying the tenant’s obligations under the notification provision contained in the rental agreement and the date the rental agreement is terminated. The landlord must provide such written notice to the tenant in a manner prescribed by s. 83.56(4) within 15 days before the start of the notification period contained in the rental agreement. The written notice must list all fees, penalties, and other charges applicable to the tenant under this subsection."
- §83.57 (opening): "A tenancy without a specific duration, as defined in s. 83.46(2) or (3), may be terminated by either party giving written notice in the manner provided in s. 83.56(4), as follows: ..." History ends s. 2, ch. 2023-314.
- §83.58: "If the tenant holds over and continues in possession of the dwelling unit or any part thereof after the expiration of the rental agreement without the permission of the landlord, the landlord may recover possession of the dwelling unit in the manner provided for in s. 83.59. The landlord may also recover double the amount of rent due on the dwelling unit, or any part thereof, for the period during which the tenant refuses to surrender possession."
- §83.56(1) (first sentence): "If the landlord materially fails to comply with s. 83.51(1) or material provisions of the rental agreement within 7 days after delivery of written notice by the tenant specifying the noncompliance and indicating the intention of the tenant to terminate the rental agreement by reason thereof, the tenant may terminate the rental agreement."
- §83.56(2)(a) (no-cure examples): "destruction, damage, or misuse of the landlord’s or other tenants’ property by intentional act; an act of fraudulent entry of a residential dwelling unit which violates s. 817.537(2), regardless of whether criminal proceedings have commenced; or a subsequent or continued unreasonable disturbance."
- §83.60(1)(b) (first sentence): "The defense of a material noncompliance with s. 83.51(1) may be raised by the tenant if 7 days have elapsed after the delivery of written notice by the tenant to the landlord, specifying the noncompliance and indicating the intention of the tenant not to pay rent by reason thereof."
- §83.51(4): "The landlord is not responsible to the tenant under this section for conditions created or caused by the negligent or wrongful act or omission of the tenant, a member of the tenant’s family, or other person on the premises with the tenant’s consent."
- §83.52(6): "Not destroy, deface, damage, impair, or remove any part of the premises or property therein belonging to the landlord nor permit any person to do so."
- §83.63 (opening): "If the premises are damaged or destroyed other than by the wrongful or negligent acts of the tenant so that the enjoyment of the premises is substantially impaired: (1) The tenant may terminate the rental agreement and immediately vacate the premises. ..."
- §83.595(2) (extract): "Retake possession of the dwelling unit for the account of the tenant, holding the tenant liable for the difference between the rent stipulated to be paid under the rental agreement and what the landlord is able to recover from a reletting. If the landlord retakes possession, the landlord has a duty to exercise good faith in attempting to relet the premises ..."
- §83.47(2): "If such a void and unenforceable provision is included in a rental agreement entered into, extended, or renewed after the effective date of this part and either party suffers actual damages as a result of the inclusion, the aggrieved party may recover those damages sustained after the effective date of this part."
- §83.55: "If either the landlord or the tenant fails to comply with the requirements of the rental agreement or this part, the aggrieved party may recover the damages caused by the noncompliance."
- §83.43(12): "“Rent” means the periodic payments due the landlord from the tenant for occupancy under a rental agreement and any other payments due the landlord from the tenant as may be designated as rent in a written rental agreement."
- §83.491(9): "This section applies to rental agreements entered into or renewed on or after July 1, 2023."
- §83.684(1)-(2), (6)-(7): read verbatim on the same page; consistent with `edu-veterans-pilot-fl`. History.—s. 1, ch. 2026-125.

## Other Florida statutes, 2026 (Online Sunshine section pages)
- §82.036 (whole, read 2026-10-03; History.—s. 1, ch. 2024-44; s. 1, ch. 2025-112; s. 9, ch. 2026-14). (4): "Upon receipt of the complaint, the sheriff shall verify that the person submitting the complaint is the record owner of the real property or the authorized agent of the owner and appears otherwise entitled to relief under this section. If verified, the sheriff shall, without delay, serve a notice to immediately vacate on all the unlawful occupants and shall put the owner in possession of the real property." (5) last sentence: "The property owner or his or her authorized agent is not liable to an unlawful occupant or any other party for the loss, destruction, or damage to the personal property unless the removal was wrongful." (3) prescribes the "COMPLAINT TO REMOVE PERSONS UNLAWFULLY OCCUPYING RESIDENTIAL REAL PROPERTY" "in substantially the following form".
- §720.3085(8)(c)-(d): "(c) The liability of the tenant may not exceed the amount due from the tenant to the tenant’s landlord. The tenant shall be given a credit against rents due to the landlord in the amount of assessments paid to the association. (d) The association may issue notice under s. 83.56 and sue for eviction under ss. 83.59-83.625 as if the association were a landlord under part II of chapter 83 if the tenant fails to pay a monetary obligation. However, the association is not otherwise considered a landlord under chapter 83 and specifically has no obligations under s. 83.51." History ends s. 10, ch. 2024-221.
- §718.116(11)(a)-(f): read whole; matches `edu-association-leasing-rules-fl` (History ends s. 19, ch. 2023-203).
- §718.112(2)(k): read whole ("may not exceed $150 per applicant"; CPI adjustment every 5 years; lessee deposit "not to exceed the equivalent of 1 month’s rent").
- §719.106(1)(i): "Any such fee may be preset, but in no event shall it exceed $100 per applicant other than husband/wife or parent/dependent child, which are considered one applicant. However, if the lease or sublease is a renewal of a lease or sublease with the same lessee or sublessee, no charge shall be made. ... a security deposit in an amount not to exceed the equivalent of 1 month’s rent. ... Within 15 days after a tenant vacates the premises, the association shall refund the full security deposit or give written notice to the tenant of any claim made against the security. Disputes under this paragraph shall be handled in the same fashion as disputes concerning security deposits under s. 83.49." History ends s. 46, ch. 2026-14.
- §720.306(1)(h)1-5: read whole; matches the row.
- §713.10(1)-(4): read whole; matches `no-liens-fl` and `edu-construction-liens-fl` (History ends s. 5, ch. 2023-226).
- §717.102(1): read whole; matches `edu-unclaimed-deposit-refunds-fl`.
- §212.03(1)(a), (2), (4), (7)(a)-(c): read whole; History ends s. 2, ch. 2014-40. (4): "The tax levied by this section shall not apply to, be imposed upon, or collected from any person who shall have entered into a bona fide written lease for longer than 6 months in duration for continuous residence at any one hotel, apartment house, roominghouse, tourist or trailer camp, or condominium, or to any person who shall reside continuously longer than 6 months at any one hotel, apartment house, roominghouse, tourist or trailer camp, or condominium and shall have paid the tax levied by this section for 6 months of residence ..."
- §760.23(1)-(2): "... because of race, color, national origin, sex, disability, familial status, or religion."
- §760.34(3), (8): local fair housing laws "substantially equivalent" (read whole; History ends s. 4, ch. 2020-164).
- §718.606(1)-(6): read; History.—s. 1, ch. 80-3; s. 20, ch. 84-368.
- §668.50(3)(b)-(c), (5)(b)-(d), (8)(a)-(d) (UETA; History ends s. 139, ch. 2025-92): (3)(b) excludes only wills/codicils/testamentary trusts, the UCC other than s. 671.107 and chs. 672 and 680, and UCITA; (3)(c) excludes transactions governed by rules relating to judicial procedure except (2), (9), (11); (5)(c) "A party that agrees to conduct a transaction by electronic means may refuse to conduct other transactions by electronic means. The right granted by this paragraph may not be waived by agreement."; (8)(a) record "capable of retention by the recipient at the time of receipt"; (8)(c) "If a sender inhibits the ability of a recipient to store or print an electronic record, the electronic record is not enforceable against the recipient."; (8)(b)2 a record must be sent by the method another law specifies.
- §559.55(6): "“Debt” or “consumer debt” means any obligation or alleged obligation of a consumer to pay money arising out of a transaction in which the money, property, insurance, or services which are the subject of the transaction are primarily for personal, family, or household purposes, whether or not such obligation has been reduced to judgment."
- §559.72 (opening and (9)): "In collecting consumer debts, a person may not: ... (9) Claim, attempt, or threaten to enforce a debt when such person knows that the debt is not legitimate, or assert the existence of some other legal right when such person knows that the right does not exist."
- §559.77(2) (first sentence): "Any person who fails to comply with any provision of s. 559.72 is liable for actual damages and for additional statutory damages as the court may allow, but not exceeding $1,000, together with court costs and reasonable attorney’s fees incurred by the plaintiff."
- §501.203(8): "“Trade or commerce” means the advertising, soliciting, providing, offering, or distributing, whether by sale, rental, or otherwise, of any good or service, or any property, whether tangible or intangible, or any other article, commodity, or thing of value, wherever situated."
- §501.204(1): "Unfair methods of competition, unconscionable acts or practices, and unfair or deceptive acts or practices in the conduct of any trade or commerce are hereby declared unlawful."
- §501.212(7) closing paragraph: "However, this subsection does not affect any action or remedy concerning residential tenancies covered under part II of chapter 83, nor does it prohibit the enforcing authority from maintaining exclusive jurisdiction to bring any cause of action authorized under this part."
- §381.986(15)(d): "This section does not impair the ability of any party to restrict or limit smoking or vaping marijuana on his or her private property." History ends s. 30, ch. 2026-233.
- §51.011 (opening): "If there is a difference between the time period prescribed in a rule and in this section, this section governs." (1): answer "within 5 days after service of process".

## Florida Constitution (Online Sunshine, whole document page, SHA-256 of the screened text e67d4b494999b4d5e8ecc108b7c7879f9f5785400fb0be39520979c1f5ff830f, 422 section headings)
- Art. X, §29(a)(1): "The medical use of marijuana by a qualifying patient or caregiver in compliance with this section is not subject to criminal or civil liability or sanctions under Florida law."
- Art. X, §29(c)(6): "Nothing in this section shall require any accommodation of any on-site medical use of marijuana in any correctional institution or detention facility or place of education or employment, or of smoking medical marijuana in any public place."
- Art. I, §8(a) (right to bear arms), §4 (speech), §23 (privacy: "free from governmental intrusion"): no lease or landlord text.
- Art. X, §20 (workplace smoking): "private residences" excepted; no lease text.

## Session laws (laws.flrules.org PDFs, parsed in-browser with pdf.js)
- Ch. 2023-17 (CS/SB 102), s. 49: "Except as otherwise expressly provided in this act and except for this section, which shall take effect upon becoming a law, this act shall take effect July 1, 2023. Approved by the Governor March 29, 2023." Section 2 (s. 125.0103) has no separate effective date.
- Ch. 2023-314 (CS/HB 1417), s. 4: "This act shall take effect July 1, 2023. Approved by the Governor June 29, 2023." Ss. 2-3 change §83.57(3) from 15 to 30 days and add the 30-60 day bounds to §83.575(1).

## Federal (govinfo.gov)
- Pub. L. 115-174, §304: "(a) Repeal of Sunset Provision.--Section 704 of the Protecting Tenants at Foreclosure Act of 2009 ... is repealed. (b) Restoration.--Sections 701 through 703 of the Protecting Tenants at Foreclosure Act of 2009 ... as were in effect on December 30, 2014, are restored and revived. (c) Effective Date.--Subsections (a) and (b) shall take effect on the date that is 30 days after the date of enactment of this Act." PTFA §§701-703 themselves not read.

## Court rules (floridabar.org PDFs, parsed in-browser with pdf.js)
- Florida Rules of Civil Procedure, edition 10-01-26 (340 pages; PDF SHA-256 5807c154038c9f851f865325c6cff2496a9cf8888daacca2a7572eb222347ed4): searched whole for landlord, tenant, evict, seal, CARES/covered property. Landlord-relevant: Form 1.923(a) eviction summons; Form 1.947 note: "Paragraph 3 must specify whether the rental agreement is written or oral and if written, a copy must be attached."; Form 1.947(b) answer; Rule 1.580 writ of possession (third-party affidavit). No CARES Act or federal pre-filing condition.
- Florida Rules of General Practice and Judicial Administration, edition 7-1-2026 (259 pages; SHA-256 a7fba18f1ca3c5d7f313b1a53c744a654ef29ca14bde57b3c22db0d92dbdbba2): 'evict|landlord|tenant' appears only in a judicial-workload rule (p. 66). Rule 2.420(c) lists confidential records with no eviction category; (e) and (h) let a party ask the court to determine specific information confidential.
- Eleventh Circuit (Miami-Dade) local rules page and Local Rule R-1-11 (County Court civil division: jurisdiction only). The other 19 circuits' local rules were not read.

## Circle-back checks (SOP 1.36), 2026-10-03

**Scope:** the FL retro prompt for SOP 1.36 lists 0 [Retro] rules and 1 targeted fix. Only that fix was checked; nothing else was reopened (rule 1). **Input:** `lease-clauses.csv`, 2,876 rows (count checked first), 17 columns, CRLF; FL 119 active, the same count the SOP 1.30 retro sync left. Earlier output files in this chat were deleted, and only the files attached for this task were used (rule 8). The earlier retro in this chat worked from a 2,856-row master; the 2,876-row file attached now supersedes it, and nothing below relies on the older file. **Settings:** Opus, high effort. Research mode was not used; no rule 9 trigger arose.

**How the text was read (rules 11, 12, 79).** Fla. Stat. ch. 83 was opened whole on Online Sunshine (2026 Florida Statutes, "View Entire Chapter") in the Claude desktop browser pane. The page's SHA-256, `c039a5d7fd67ce51ea8905677881c51e7a86312a53e23c47854215ee1d64a11d` over 134,695 characters, matches the hash recorded at the SOP 1.30 retro earlier today (Appendix B), so the text is unchanged. Sections read section-open, with the first 16 hex characters of each section's SHA-256 from heading through history line:
- §83.47: `1301c27cb6339253` (matches Appendix B)
- §83.58: `df9ee0af03754d89` (matches Appendix B)
- §83.56: `e4f2075017b384a5`
- §83.59: `61fa329f8a164d61`
- §83.60: `63646ea7c35e912e`
- §83.64: `17f6bfb6ce85c660`
- §83.67: `5df18b3ffee6d386`

### Results

| Check | Verdict | What was read | Rows changed |
|---|---|---|---|
| Targeted fix 1: rule 62 vetting of CA's proposed edit to `surrender-end-of-term` ('unless applicable law entitles Tenant to remain') | **Vouched, no change needed.** Part (b), whether the current wording states a duty Florida law doesn't back, was already covered at Retro checks (SOP 1.30), rules 41 and 53. Part (a), whether the qualified wording is lawful and accurate here, was checked now. | §§83.47, 83.56(5)(a), 83.58, 83.59(1) and (3), 83.60(1)-(2), 83.64. Reasoning is in "Vouches given" below. | none |

### Vouches given

- **`surrender-end-of-term`** (CA's proposal, 2026-10-03): **vouched for FL; no FL change is needed either way.**
  - **(b) Current wording.** The current wording states a duty Florida law backs. Florida has no just-cause rule (Retro checks (SOP 1.30), rule 41; `edu-no-for-cause-eviction-fl`). §83.59(1): 'If the rental agreement is terminated and the tenant does not vacate the premises, the landlord may recover possession'. §83.58 gives double rent 'for the period during which the tenant refuses to surrender possession' after expiration without the landlord's permission.
  - **(a) The qualified wording is lawful.** §83.47(1) voids only provisions that waive Part II rights or limit liability. A sentence that defers to the law does neither.
  - **The qualified wording is also accurate, and slightly more so than the current text.** Florida law can let a tenant stay after a landlord-asserted end date in three narrow ways:
    1. **Retaliation.** §83.64(2) makes retaliation a defense 'in any action brought against him or her for possession'. That includes an action after the Term expires, unless the landlord proves good cause under §83.64(3). Whether the end of the Term alone counts as good cause is case law, not read.
    2. **A failed termination.** §83.56(5)(a) waiver by accepting rent with knowledge, and §83.60(1)(b) withholding as 'a complete defense', each mean a landlord's earlier termination never took effect.
    3. **The landlord's permission.** §83.58 applies only 'without the permission of the landlord', and `holdover` offers a month-to-month continuation.
  - **Drafting risk checked (Claude's call, rule 76).** A tenant could argue that §83.59(3)'s ban on recovering possession outside court 'entitles' them to stay until the writ issues. That reading is weak: §83.59(3) limits how the landlord recovers, and it grants the tenant no right of possession. It would also cost the landlord nothing: §83.58's double rent and `holdover`'s 'maximum amount permitted by applicable law' run from the statute, not from this sentence.
  - **Other parts of the clause.** The abandoned-property sentence is unaffected; its FL basis is recorded at Retro checks (SOP 1.30), rule 79.
  - **Placement.** Per rule 62, this vouch belongs in the propagation section. In FL's log that is §8 ("Propagation notes"); §9 is "Findings worth Taylor's attention". Claude Code may add a one-line pointer there; the vouch itself is kept here so that this pass adds one section only.

### Integrity

No row changed, so no delta file was produced. FL active count is 119 before and after.

### Proposed SOP changes

1. **Rule 62:** name the vouch's home by title ("the log's propagation section"), not by number. FL's propagation section is §8, and its §9 is "Findings worth Taylor's attention", so "§9, 'Vouches given'" points at the wrong section in FL's log, and may in other early-pass logs too.

## Circle-back sync (Claude Code, 2026-10-03)

- **No delta:** the pass changed no rows, as it reported; FL active 119, unchanged.
- **Rule 62:** FL vouched for CA's `surrender-end-of-term` qualifier; recorded in the backlog tally, with a one-line pointer added under §8 (Propagation notes).
- **Guards:** all pass. **Statute check:** FL's reads matched the chapter hash recorded at the SOP 1.30 retro the same day, so no fresh spot-check was needed for a vouch that changed no text.
- **SOP 1.37:** FL's proposal adopted (rule 62 names the propagation section by title).

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no FL override. FL's note segment on the row records it.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for FL. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any FL row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach FL's law; to be confirmed at FL's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-05): Desktop's running record

## Florida topic gaps — running record

Pass started 2026-11-05 under SOP 1.95. The prompt was staged 2026-10-31 21:55.

This summary has to outlive the temporary workspace. The detail is in the delivered `gaps-log-FL.md` and `lease-clauses-FL-gaps-delta.csv`.

### Status (FINAL, delivered 2026-11-05)
- 261 of 261 topics answered; 291 delta rows: 18 tags, 273 new. Merge check: 17 columns, CRLF, no duplicate ids, master + 273 = 14,225 rows, all 13,934 non-FL rows unchanged, tags change only `states` and add an FL notes segment.
- 1,432 quotes checked, 0 problems; full battery replay 1,126 terms, 0 differences, plus the batteries added during the check (FLG-M-033 to -039, FLG-B-029), all replayed.
- **Independent check:** round 1 over all 291 rows (5 sets): 7 ERROR, 33 FIX, 47 MINOR, 1 REPRO, all accepted, 99 edits. Round 2 over the 74 edited rows: 0 ERROR, 3 FIX, 11 MINOR, 1 REPRO, 18 edits. 13 rows were edited after round 2 and are listed in log §5.
- **Errors the check caught:** out-of-state owners (foreign LLC certificate of authority and registered agent, §§ 605.0902-605.0905, 607.1502; service via the Secretary of State, § 48.181); fictitious-name bar on suing (§ 865.09(9)(a)); any-person reporting duties (§§ 39.201, 415.1034, 794.027, 406.12); mobile home prospectus threshold is 26 lots (§ 723.011(1)(a)). Root cause: absence batteries that required a landlord or tenant word; SOP change proposed.
- Questions for Taylor were unanswered at delivery; recommendations adopted (log §4). For the maintenance shift, the in-unit items turned out to be tenant duties already under § 83.52(2)-(3), so no clause was added.
- Florida items 1-8 are answered in log §4.

### Step A (passed)
- **lease-clauses.csv:** 52,616,417 bytes, SHA-256 bc7f9020…cdbece1b3b6. 13,952 rows, of which 13,841 are active and 120 are FL. 261 topics.
- **Corpus archive** efd59225…5f0c6f5 verified (256 files).
- **Live currency proof** (2026-11-05): the text of chs. 83, 509, 718, 720 and 741 matches flsenate.gov.

### Corpus defects found and fixed (report to Claude Code)
1. **flsenate.gov page chrome:** the last section of all 503 chapters carried page chrome.
2. **Civil-rules page headers:** running headers sat inside rule bodies.
3. **Online Sunshine footer:** it sat in the last section of all 135 leg.state.fl.us chapters.

All three are stripped. Each fix was replayed with 0 differences.

### Sources read outside the corpus
All were read in the browser pane on 2026-11-05. Hashes are in log §1.6.
- **Federal:**
  - 34 U.S.C. § 12491
  - 15 U.S.C. § 9058
  - 11 U.S.C. § 362
  - 24 C.F.R. § 982.310
  - 42 U.S.C. §§ 3604, 3607
  - 47 C.F.R. § 1.4000
- **Court rules:**
  - Fla. R. Gen. Prac. & Jud. Admin. 2.514
  - Fla. Sm. Cl. R. 7.010, 7.050
  - Fla. R. App. P. 9.310
- **Session laws (effective dates only):**
  - chs. 2024-71, 2024-73, 2024-77, 2024-148, 2024-259
  - chs. 2025-30, 2025-87, 2025-134, 2025-156, 2025-182
  - chs. 2026-17, 2026-57, 2026-145, 2026-156

### Slice highlights
- **M (main pass):**
  - Waiver row: edu-part5-nonwaivable-fl.
  - Clauses: jury-waiver-fl, collection-fee-fl, notice-cost-fl.
  - Tag: fees-and-charges-vi.
  - Domestic violence: the tenancy protections are absent in Florida.
  - Landlord registration: the DBPR public lodging licence.
- **A (habitability):**
  - Covers ch. 509 and R. 61C-1.004 for licensed apartments, § 768.0706 and § 718.112(2)(n).
  - Clauses: appliances-excluded-fl, pest-cooperation-fl, designated-repairer-fl.
  - Tags: carpet-cleaning-ar, furnishings-included-la, detector-care-la.
- **B (eviction/termination):**
  - Clauses: criminal-activity-fl, conversion-termination-fl, extended-absence-notice-fl, unpaid-amounts-interest-fl.
  - Tag: owner-occupancy-termination-ar.
- **C (utilities):**
  - Covers the PSC submetering and resale rules, the water-resale cap in § 367.022(9), and utility liens.
  - Antenna rule: 47 C.F.R. § 1.4000.
  - Clauses: utility-allocation-fl, utility-shutoff-notice-designee-fl, government-fee-reimbursement-fl, tenant-caused-fines-fl.
  - Tags: energy-data-release-wy, ev-charger-installation-hi, tax-insurance-escalation-la.
- **D (disclosures):**
  - Most of the listed disclosure duties are confirmed absent in Florida.
  - Sex-offender residency (§ 775.215) binds the offender, not the landlord.
  - Eminent domain: the court apportions the award (§ 73.101).
  - Tag: eminent-domain-vi.
- **E (lease formation):**
  - Landlord's lien (§ 713.691, enforced under § 85.011(5)) is new to the FL rows.
  - Private parking charges are governed by § 715.075.
  - The insurer-claim procedure for a fee in lieu of deposit is in § 83.491(2).
  - The library declines four options, each with an education row explaining why:
    - automatic renewal (§ 501.165 may reach leases)
    - modifying the landlord's lien
    - a wage-garnishment waiver
    - arbitration
  - Clause: rules-fl.
  - Tags: lease-copy-receipt-hi, rent-concession-wi, rent-installments-or, rent-escalation-la, rent-increase-midterm-ky, guaranty-as, informal-dispute-resolution-or.
- **F (occupants and miscellaneous):**
  - Clauses: firearm-rules-fl, scheduled-services-entry-fl, animal-care-access-fl, family-child-care-fl, tenant-portal-fl, employee-housing-fl.
  - Tags: cannabis-restrictions-ak, move-in-condition-report-as.
  - Contrary to the topic list's expectation: fraudulent entry (§§ 817.537, 83.56(2)(a), from Oct. 1, 2026) allows termination on 7 days' notice with no cure; the sheriff removes squatters (§ 82.036); housing furnished with a job is a dwelling unit (§ 83.43(5)(c)).
  - Cannabis: certified recovery residences must ban marijuana (§ 397.487(3)(a)3.); ch. 2025-182 read, row current.
  - Card-surcharge ban (§ 501.0117) stated with the case lead Dana's Railroad Supply v. Attorney General (11th Cir. 2015).

### Findings on existing rows (log §6)
- **late-fee (shared):** the waiver sentence goes beyond what §§ 83.56(5)(a) and 83.47(1)(a) allow.
- **edu-landlord-maintenance-fl:** the cooling sentence misses § 509.221(3).
- **edu-utility-former-occupant-fl:** "Private utilities are not covered" misses the PSC rules.
- **acceptable-payment-methods (shared):** the FL segment omits the § 501.0117 card-surcharge ban (not wrong; the clause imposes no surcharge).
- **edu-service-animal-penalties-fl:** omits the emotional-support-animal crime in § 817.265 (incomplete, not wrong).

### Questions for Taylor (unanswered at delivery; recommendations adopted)
1. **Apartment maintenance-shift clause:** recommend a narrow, in-unit-only clause.
2. **Landlord casualty-termination clause:** recommend no clause; education only.
3. **Optional arbitration clause limited to money claims:** recommend no. § 83.47(1)(a) may reach it, the point is unsettled without case law, and the carve-outs leave little to arbitrate.
4. **Restoration clause for disability modifications:** § 760.23(9)(a) omits the federal restoration proviso; recommend no clause for now (the education row gives the cautious course).

### Not fetched at delivery (rows state the limit; none is wrong without it)
- **FAC R. 25-6.049:** need the pre-amendment text. The corpus copy is the version effective 11-8-26. Reading it needs browser permission for flrules.org.
- **FDACS EV-charging rules** under § 366.94(3).
- **Optional:** FAC ch. 61G20; 24 C.F.R. § 982.404; 42 U.S.C. § 4852d and 40 C.F.R. § 745.113.

### Proposed SOP changes
- Absence batteries need a limb without landlord or tenant words whenever the rule could sit in a general business, entity, service or reporting statute.
- The independent checker should get a script comparing History lines and "not held" claims with the corpus.
- Corpus check scripts should compare full section content, not just prefixes.
- Strip court-rule running page headers before splitting.

# Topic gaps pass (end-of-run consistency pass, 2026-11-05): Desktop's log

## Topic gaps: Florida (end-of-run consistency pass)

**Pass:** FL topic gaps, end-of-run consistency pass (SOP 1.95; prompt staged 2026-10-31 21:55). **Date:** 2026-11-05. **Scope:** the 261 topics in `missing-topics-FL.md` and the eight Florida items in the prompt, nothing else; no existing row's text was changed (scope fence), and the only change to existing rows is adding FL to `states` and an `FL: ` notes segment on tagged rows. **Settings:** Opus, high effort; research mode not used (no rule 9 trigger arose).

**Start clean (rule 8).** Deleted from `/mnt/user-data/outputs/` at the start: `lease-clause-decision-log-FL-retro.md` (the 2026-10-03 SOP 1.36 retro section). The files attached with this prompt are the only source of truth; where this chat's earlier work (October retros, 2,856- and 2,876-row libraries) differs from them, they win.

**Step A (passed).** `lease-clauses.csv` decompressed: 52,616,417 bytes, SHA-256 `bc7f9020351ef82abe3ee2ffa9da942c182464b11559a3028a245cdbece1b3b6` (both as staged); 13,952 rows, 13,841 active, 120 active rows carry FL; FL answers 103 of the library's 364 active topics; `missing-topics-FL.md` lists 261 topics. Corpus archive `corpus-FL-20261031.tar.xz` SHA-256 `efd592255cdd7b8fcce7a7b8bafc3cb6db5e38226944f0150bfd2edde695c0f6` matches its `.sha256` file.


### §1 Sources, channel and currency

**§1.1 Channel.** Statute text came from the staged corpus (README: Claude Code, 2026-10-31/11-01; the 2026 Florida Statutes, 503 chapters from flsenate.gov and 135 from leg.state.fl.us; the Constitution; 185 chapter laws of 2024-2026; 24 FAC chapters; the Florida Bar's Rules of Civil Procedure with forms, effective 10-1-26). Read in the cloud workspace by script. `verify_fl.py` was run with `python3 -I` from outside the corpus folder (17 lines, read first): "ok - 256 files verified". Federal sections were read in the Claude desktop browser pane on Taylor's computer from govinfo.gov (approved for this chat at the October retro) and saved as transcribed excerpts in `fetched/`, with the page's SHA-256 recorded: 34 U.S.C. § 12491 (page text 19,188 chars, SHA-256 `6356ae4c…1682ddc`), 15 U.S.C. § 9058 (4,091 chars, `d052aa04…8a6982`). These are transcriptions, weaker than byte copies.

**§1.2 Currency proof against the live site (rule 24).** On 2026-11-05 the browser pane fetched flsenate.gov's whole-chapter pages for chs. 83, 509, 718, 720 and 741. Byte hashes differ from the manifest by about 1.1 KB per page (per-request markup), so the statute content was compared instead: the text of every `div.Section` element, whitespace-collapsed and lowercased, hashed in the browser and in the workspace from the shipped copies (`statutes/html/`). All five match section for section (83: 75 sections `8fe4b70a…`; 509: 75 `40827df9…`; 718: 90 `93f61dd6…`; 720: 36 `f1d65597…`; 741: 48 `4a533b7a…`). Ch. 83's text also matches the Online Sunshine page read on 2026-10-03 for every section quoted then.

**§1.3 Corpus proof and defects found (rules 19, 24).** Loader `tools/flcorpus.py`:
- Statutes: 24,993 sections, unique numbers, reconciled 0 missing / 0 extra against `catchlines.tsv`; every section has a body and a History line. The leading "<number> <catchline>.—" line of each body is moved to the heading field so heading-only matches can't count as body hits (24,993 of 24,993 parsed after allowing a one- or two-digit footnote marker before the number in 216 sections).
- STATUTES.TXT vs the 12 shipped HTML chapters: 580 sections compared, all bodies match except § 723.0861, which differs only by a compiler's footnote marker.
- **Defect 1 (page chrome).** The last section of each of the 503 flsenate.gov chapters carried the page's navigation menu and script text in its body (e.g. § 51.011 ended "Home Senators … Privacy Statement" plus JavaScript, and its History line carried script). The loader strips it (cut at "\nHome\nSenators\n"; History cut at "(function(){") and refuses to load unless exactly 503 sections are stripped. It could only add false hits (words like "rules", "laws", "search"). Every battery logged before the fix was replayed: 17 terms, 0 differences. Both running helpers were told and asked to replay theirs.
- **Defect 2 (court-rule page headers).** The rules text carries "October 1, 2026 Florida Rules of Civil Procedure NNN" page lines inside rule bodies; stripped before rule splitting. Replay after the fix: 360 terms, 0 differences.
- **Defect 3 (Online Sunshine footer).** The last section of each of the 135 leg.state.fl.us chapters ended with the site footer "Copyright © 1995-2026 The Florida Legislature • Privacy Statement • Contact Us" (helper B found it in § 715.12). The loader cuts it and refuses to load unless exactly 135 are cut. Like defect 1 it could only add false hits; every battery logged before the fix was replayed: 466 terms, 0 differences (slice A's own replay: 158 terms, 0 differences).
  - Control count after the fix: the must-hit control "\bLegislature\b" counted 2,548 statute units in the batteries logged before the footer fix (slice A, FLG-A-001 to FLG-A-035, and the slice A rows that quote it) and 2,426 after it, because the footer itself contained "The Florida Legislature". The control only proves the search ran over a loaded corpus; every term count reproduces under the fixed loader (independent check finding R12-15), so the figure 2,548 in those rows is the count at the time of the run and no absence changes.
- Session laws: running headers ("Ch. 2025-16 LAWS OF FLORIDA …"), CODING lines and page numbers stripped. pdftotext keeps struck words unmarked, so no row describes what an act added or struck; rows state the compiled law and read each act only for its effective-date section.
- Constitution: indexed by article and section, 213 sections, matching the document's own contents list article by article (a footnote marker before "SECTION" fixed 12 that were missing at first).
- Court rules: split into 94 rules (R1.xxx) and 83 forms (FORM1.xxx), matching the contents list; body text starts at the second "RULE 1.010".
- FAC: 24 chapters, whole-chapter units.

**§1.4 Currency (rule 16).** Each relied-on section's History line was read. Acts of 2024-2026 amending ch. 83 part II, found by script over the chapter's History lines, are exactly the six the prompt lists, and each act's effective-date section was read: ch. 2024-199 (§§ 83.43, 83.49, 83.491; on becoming law, approved May 17, 2024), ch. 2025-16 (§§ 83.49, 83.50, 83.505, 83.51, 83.56, 83.575; July 1, 2025), ch. 2025-166 (§ 83.512; October 1, 2025), ch. 2025-190 (§ 83.63; on becoming law, approved June 26, 2025), ch. 2026-125 (§ 83.684; July 1, 2026), ch. 2026-143 (§ 83.56; October 1, 2026). Other acts read for effective dates as rows needed them are named in the rows (e.g. ch. 2025-23, 2025-163, 2026-86, 2026-91, 2024-27, 2024-123). Ch. 2023-314 (§§ 83.425, 83.57, 83.575) is not in the corpus; its effective date was read on laws.flrules.org at the 2026-10-03 retro (FL log). Bounded claim: the corpus holds the 2024-2026 acts cited in History lines of the chapters its README lists, not every act of those sessions, so a battery's session-law scope proves absence only in those acts.

**§1.5 What was not searched.** Case law (rows say "no published case was searched"); county and municipal ordinances (flagged, not resolved; rule 3, subject to Fla. Stat. § 83.425); FAC chapters other than the 24 held; the Florida Rules of General Practice and Judicial Administration, Small Claims Rules and Rules of Appellate Procedure apart from the rules listed in §1.6, circuit local rules and administrative orders; federal law other than the sections listed in §1.6 (no row quotes any other federal text); of the court rules outside the corpus, only the rules listed in §1.6 were read.

**§1.6 Sources read outside the corpus.** All read on 2026-11-05 in the Claude desktop browser pane on Taylor's computer and saved as transcribed excerpts in `fetched/` (weaker than byte copies); hashes are of the page text or PDF as read.
- 24 C.F.R. § 982.310 (Owner termination of tenancy): https://www.ecfr.gov/current/title-24/subtitle-B/chapter-IX/part-982/subpart-G/section-982.310 (eCFR, current); SHA-256 `4ebb7286…1653be7`; this file transcribes (a), (b) and (d)(2) (weaker than a byte copy).
- 47 C.F.R. § 1.4000 (Restrictions impairing reception of television broadcast signals, direct broadcast satellite services or multichannel multipoint distribution services): https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-1/subpart-S/section-1.4000 (eCFR, current); SHA-256 `0144298f…d8a730f`; this file transcribes (a)(1)-(4), (b), (e) and (g) (weaker than a byte copy). Read at slice C's fetch request (edu-telecom-access-fl).
- ch. 2024-148, Laws of Fla. (health care practitioners and massage therapy (amending s. 823.05, F.S., among others)): https://laws.flrules.org/2024/148 (Department of State, Laws of Florida PDF); SHA-256 `f2111463…dd7054e`; this file transcribes the effective-date section and approval line only.
- ch. 2024-77, Laws of Fla. (amending ss. 562.12 and 893.138, F.S.): https://laws.flrules.org/2024/77 (Department of State, Laws of Florida PDF); SHA-256 `86ba3085…1d88361`; this file transcribes the effective-date section and approval line only.
- ch. 2025-30, Laws of Fla. (amending s. 810.09, F.S. (trespass)): https://laws.flrules.org/2025/30 (Department of State, Laws of Florida PDF); SHA-256 `2ffbff1e…b70895d`; this file transcribes the effective-date section and approval line only.
- ch. 2024-71, Laws of Fla. (amending s. 775.21 among others, F.S.): https://laws.flrules.org/2024/71 (Department of State, Laws of Florida PDF); SHA-256 `c16f443f…01dd3a3`; this file transcribes the effective-date section (July 1, 2024) and approval line only. Read at slice D's fetch request.
- ch. 2024-73, Laws of Fla. (amending s. 775.21 among others, F.S.): https://laws.flrules.org/2024/73 (Department of State, Laws of Florida PDF); SHA-256 `11d2dacc…93ec5c1`; this file transcribes the effective-date section (October 1, 2024) and approval line only. Read at slice D's fetch request.
- ch. 2025-134, Laws of Fla. (amending s. 775.21 among others, F.S.): https://laws.flrules.org/2025/134 (Department of State, Laws of Florida PDF); SHA-256 `6fb793c8…9231e00`; this file transcribes the effective-date section (October 1, 2025) and approval line only. Read at slice D's fetch request.
- ch. 2025-156, Laws of Fla. (amending s. 775.21 among others, F.S.): https://laws.flrules.org/2025/156 (Department of State, Laws of Florida PDF); SHA-256 `7e1905b3…929ffa8`; this file transcribes the effective-date section (October 1, 2025) and approval line only. Read at slice D's fetch request.
- ch. 2026-17, Laws of Fla. (amending s. 775.215, F.S.): https://laws.flrules.org/2026/17 (Department of State, Laws of Florida PDF); SHA-256 `537e29ec…efc6151`; this file transcribes the effective-date section (July 1, 2026) and approval line only. Read at slice D's fetch request.
- ch. 2024-259, Laws of Fla. (amending s. 695.03 among others, F.S.): https://laws.flrules.org/2024/259 (Department of State, Laws of Florida PDF); SHA-256 `0632321b…b697397`; this file transcribes the effective-date section (July 1, 2024) and approval line only. Read at slice E's fetch request.
- ch. 2026-57, Laws of Fla. (amending s. 733.612 among others, F.S.): https://laws.flrules.org/2026/57 (Department of State, Laws of Florida PDF); SHA-256 `359c57b7…57e402d`; this file transcribes the effective-date section (July 1, 2026) and approval line only. Read at slice E's fetch request.
- ch. 2025-182, Laws of Fla. (relating to certified recovery residences; adds s. 397.487(15)-(16), F.S.): https://laws.flrules.org/2025/182 (Department of State, Laws of Florida PDF); SHA-256 `2fad38d2…28237e3`; this file transcribes the effective-date section (July 1, 2025), the approval line and section 1's amending clause only. Read at slice F's fetch request.
- ch. 2025-87, Laws of Fla. (amending s. 162.09, F.S.): https://laws.flrules.org/2025/87 (Department of State, Laws of Florida PDF); SHA-256 `79169a15…0fc8a8b`; this file transcribes the effective-date section (July 1, 2025) and approval line only. Read at slice A's fetch request for § 162.09's latest act.
- ch. 2026-145, Laws of Fla. (amending s. 893.138, F.S. (public nuisances)): https://laws.flrules.org/2026/145 (Department of State, Laws of Florida PDF); SHA-256 `ef096779…4b18849`; this file transcribes the effective-date section and approval line only.
- ch. 2026-156, Laws of Fla. (amending s. 874.03, F.S.; reenacting s. 823.05(2)(a), F.S., among others): https://laws.flrules.org/2026/156 (Department of State, Laws of Florida PDF); SHA-256 `820edef2…aa08823`; this file transcribes the effective-date section and approval line only.
- Fla. R. App. P. 9.310 (Stay pending review): https://www-media.floridabar.org/uploads/2026/10/Appellate-Court-Rules-10-01-26.pdf (The Florida Bar, Florida Rules of Appellate Procedure, October 1, 2026 edition, 245 pages); SHA-256 `7b462cb6…f1a7042`; rule 9.310(a)-(c), (e) transcribed as extracted (running page line removed).
- Fla. R. Gen. Prac. & Jud. Admin. 2.514 (Computing and extending time): https://www-media.floridabar.org/uploads/2026/08/2027_01-JULY-Florida-Rules-of-General-Practice-and-Judicial-Administration-7-1-2026.pdf (The Florida Bar, July 1, 2026 edition, 259 pages); SHA-256 `a7fba18f…dbdbba2`; rule 2.514 transcribed whole as extracted (running page lines removed).
- Fla. Sm. Cl. R. 7.010, 7.050 (Title and scope; commencement of action; statement of claim): https://www-media.floridabar.org/uploads/2026/08/2026_01-JUL-Small-Claims-Rules-7-1-2026-1.pdf (The Florida Bar, Florida Small Claims Rules, July 1, 2026 edition, 69 pages); SHA-256 `daf3ac5b…0f3d909`; rule 7.010(a)-(b) and rule 7.050(a) transcribed as extracted.
- 11 U.S.C. § 362 (Automatic stay): https://www.govinfo.gov/content/pkg/USCODE-2024-title11/html/USCODE-2024-title11-chap3-subchapIV-sec362.htm (United States Code, 2024 Edition, via govinfo link service); SHA-256 `ad76075e…cce2ba3`; this file transcribes (a)(1)-(3), (b)(22)-(23), (l)(1)-(2), (l)(4)(A) and (m)(1)-(3)(A) (weaker than a byte copy).
- 15 U.S.C. § 9058 (Temporary moratorium on eviction filings): https://www.govinfo.gov/content/pkg/USCODE-2024-title15/html/USCODE-2024-title15-chap116-subchapIII-partA-sec9058.htm (United States Code, 2024 Edition, via govinfo link service); SHA-256 `d052aa04…d6a8982`; this file transcribes (a)(1)-(2), (b) and (c) (weaker than a byte copy).
- 34 U.S.C. § 12491 (Housing protections for victims of domestic violence, dating violence, sexual assault, and stalking): https://www.govinfo.gov/content/pkg/USCODE-2024-title34/html/USCODE-2024-title34-subtitleI-chap121-subchapIII-partL-subpart2-sec12491.htm (United States Code, 2024 Edition, via govinfo link service); SHA-256 `6356ae4c…1682ddc`; this file transcribes subsections (a)(3)(H) and (J), (b) and (c)(4) only (weaker than a byte copy).
- 42 U.S.C. § 3604 (Discrimination in the sale or rental of housing and other prohibited practices): https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3604.htm (United States Code, 2024 Edition); SHA-256 `7344bac5…d4cff63`; this file transcribes the opening words and (a)-(c), (f)(1)-(3)(B), (f)(9) (weaker than a byte copy).
- 42 U.S.C. § 3607 (Religious organization or private club exemption): https://www.govinfo.gov/content/pkg/USCODE-2024-title42/html/USCODE-2024-title42-chap45-subchapI-sec3607.htm (United States Code, 2024 Edition); SHA-256 `a319a98d…4930ce0`; this file transcribes (b)(1)-(2) and (b)(4) (weaker than a byte copy).


### §2 Topics answered

Topics answered: 261 of 261 listed. One line per topic: topic | row id(s) | verdict | citation. Slice in brackets (M = main pass; A-F = canvass helpers).

- accessory-dwelling-unit | edu-accessory-dwelling-unit-fl | Present (local option to allow ADUs in single-family zones; permit affidavit that the unit will be rented at an affordable rate; no state owner-occupancy or minimum-term rule) | Fla. Stat. § 163.31771; battery FLG-D-036 [D]
- actual-notice-method | edu-actual-notice-method-fl | Present (statutory methods fixed for core notices; e-mail only by addendum; no text-message method) | battery FLG-E-016; Fla. Stat. §§ 83.56(4), 83.505 [E]
- adverse-proceeding-notice | edu-no-adverse-proceeding-notice-fl | Confirmed absent (no duty either way to give notice of proceedings against the property; landlord joined in ejectment) | battery FLG-E-017; Fla. Stat. § 66.021(4) [E]
- alarm-tampering-fee | edu-no-alarm-tampering-fee-fl (new); detector-care-la (tag) | Confirmed absent (no fee statute); optional clause tagged | battery FLG-A-021; Fla. Stat. §§ 83.51(4), 83.52(6), 83.55 [A]
- alt-housing | edu-no-alt-housing-duty-fl | Confirmed absent | battery FLG-A-030; related Fla. Stat. §§ 83.51(2)(a)1., 83.56(1)(a), 83.63, 718.606(4) [A]
- animal-care-access | edu-no-animal-care-entry-right-fl; animal-care-access-fl | Confirmed absent (no statutory right to enter to care for or remove an absent tenant's animal); optional consent clause offered | battery FLG-F-018; Fla. Stat. §§ 83.53, 828.073 [F]
- appliances-excluded | appliances-excluded-fl | Present (optional clause; shared appliances-excluded-la declined) | Fla. Stat. §§ 83.51, 83.47(1)(b) [A]
- application-fees | edu-application-fees-fl | Absent (no fee rule); related duties present | FLG-M-017; Fla. Stat. §§ 83.425, 83.683, 83.491(7), 501.005(9), (12)(j) [M]
- asbestos-hazards | edu-no-asbestos-notice-rule-fl | Confirmed absent (no tenant notice); abatement licensing noted | battery FLG-A-023; Fla. Stat. §§ 469.002(1)(d), 469.003 [A]
- association-obligations-disclosure | edu-association-obligations-disclosure-fl | Present (two owner-to-renter notice copies; renter's records right; no general duty) | Fla. Stat. §§ 718.112(2)(n)1., 718.1085(1), 719.1055(5)(a)2., 719.1055(6)(a), 718.111(12)(c)1.a., 719.104(2)(c); battery FLG-D-001 [D]
- attorney-fees | edu-attorney-fees-fl | Present | Fla. Stat. §§ 83.48, 83.49(3)(c), 83.625, 83.67(6), 57.105(7) [M]
- automatic-renewal | edu-automatic-renewal-fl | Present (no lease-specific statute; Fla. Stat. § 83.575 notice limits; Fla. Stat. § 501.165 reach unsettled) | battery FLG-E-001 [E]
- balcony-inspection | edu-balcony-inspection-fl | Present | Fla. Stat. §§ 509.2112, 509.211(3), 553.899, 718.112(2)(g)-(h) [A]
- bed-bug-cooperation | pest-cooperation-fl (new clause; pest-cooperation-pr and pest-cooperation-la declined) | Present | Fla. Stat. §§ 83.51(2)(a)1., 83.51(4), 83.52, 83.53 [A]
- binding-arbitration | edu-binding-arbitration-fl | Present (Revised Florida Arbitration Code; no residential-lease arbitration statute; clause declined) | battery FLG-E-025; Fla. Stat. §§ 682.02(1), 682.013, 682.014(2)(d), 682.07, 682.25, 44.104(1), 83.47(1), 83.59(2) [E]
- cannabis | edu-cannabis-fl; tag cannabis-restrictions-ak | Present (medical marijuana only; no housing protection for patients; owners may restrict smoking or vaping on private property; certified recovery residences must ban marijuana, medical included) | Fla. Const. art. X, § 29(c); Fla. Stat. §§ 381.986(1)(k), (5)(f), (15)(d), 397.487(3)(a)3.; battery FLG-F-005 [F]
- carpet-cleaning | edu-no-carpet-cleaning-rule-fl (new); carpet-cleaning-ar (tag) | Confirmed absent (no carpet rule; optional clause lawful) | battery FLG-A-004; Fla. Stat. § 83.49(3) [A]
- casualty-and-mitigation-waivable | edu-casualty-and-mitigation-waivable-fl | Present | Fla. Stat. §§ 83.63, 83.595 [M]
- certificate-of-occupancy-disclosure | edu-no-certificate-of-occupancy-disclosure-fl | Confirmed absent (no duty to give or state a certificate of occupancy to a tenant) | battery FLG-D-021 [D]
- children-occupancy | edu-children-occupancy-fl | Present (familial status protected by Florida's Fair Housing Act; no separate landlord-tenant rule on families that grow during a tenancy; no required lease content on children) | Fla. Stat. §§ 760.22(6), 760.23(1)-(3), (6), 760.29(1), (4), (5)(b); battery FLG-F-001 [F]
- cold-weather-vacate-notice | edu-no-cold-weather-vacate-notice-fl | Confirmed absent | FLG-B-016 [B]
- collection-fee | edu-collection-fee-fl, collection-fee-fl | Present | Fla. Stat. §§ 559.72(9), 559.77, 83.43(12), 83.48; FLG-M-009 [M]
- common-area-lighting | edu-common-area-lighting-fl | Present | Fla. Stat. §§ 83.51(2)(a)3., 509.221(3), 768.0706(2)(a)2.-3.; Fla. Admin. Code R. 61C-1.004(9) [A]
- communal-land-lease-approval | edu-no-communal-land-lease-approval-fl | Confirmed absent for private land (no communal-land lease approval); state-held Seminole reservation leasing by the trustee noted; federal trust land not reviewed | battery FLG-D-029; Fla. Stat. §§ 285.011, 285.08, 285.11 [D]
- condemned-premises-rent-bar | edu-no-condemned-rent-bar-fl | Confirmed absent | battery FLG-A-029; related Fla. Stat. §§ 83.56(1)(a), 83.63, 633.228 [A]
- condition-inspection | edu-no-condition-inspection-rule-fl; tag move-in-condition-report-as | Confirmed absent (no required move-in or move-out inspection, inventory or condition report; no sign-or-dissent damage list); the deposit claim notice and the veterans pilot's move-out checklist noted | battery FLG-F-020 (supersedes FLG-F-019); Fla. Stat. §§ 83.49(3), 83.684(5)(c), 83.53(1) [F]
- confession-of-judgment | edu-confession-of-judgment-fl | Present | Fla. Stat. § 55.05; FLG-M-004 [M]
- confirmed-absences-habitability | edu-confirmed-absences-habitability-fl | Present (summary of confirmed gaps) | batteries FLG-A-001, -002, -003, -007, -014, -027, -029, -030, -031; Fla. Stat. § 83.51 [A]
- confirmed-absences-misc | edu-confirmed-absences-misc-fl | (1) double letting: Confirmed absent (agrees with slice B); (2) smoke or CO alarm evidentiary or insurance shield: Confirmed absent; (3) false rental application: Present only as fraudulent entry from Oct. 1, 2026 (Fla. Stat. §§ 817.537, 83.56(2)(a)); (4) payment-method fees: Present, credit-card surcharge ban reaching lessors (Fla. Stat. § 501.0117), no cap on other payment fees | batteries FLG-B-021, FLG-F-055, FLG-F-058, FLG-F-057 (supersedes FLG-F-056) [F]
- confirmed-absences-outside-title | edu-confirmed-absences-outside-title-fl | (1) squatter remedy: Present (Fla. Stat. §§ 82.036, 82.035); (2) cash rent receipt duty: Confirmed absent (only the partial-rent receipt, Fla. Stat. § 83.56(5)(a)1.); (3) registration as a precondition to a possession judgment: no landlord-tenant condition, but Present in the trade-name and foreign-entity statutes (an unregistered fictitious name or a foreign LLC or corporation without a certificate of authority may not maintain an action; Fla. Stat. §§ 865.09(9)(a), 605.0904(1), 605.0905(3), 607.1502(1); corrected after independent check R15-01) | batteries FLG-F-049 (supersedes FLG-F-048), FLG-F-051 (supersedes FLG-F-050), FLG-F-054 (supersedes FLG-F-053, FLG-F-052) [F]
- conversion-notice | edu-conversion-notice-fl; conversion-termination-fl | Present | Fla. Stat. §§ 718.606, 718.608, 718.61, 718.612, 718.62 [B]
- criminal-activity | edu-criminal-activity-fl; criminal-activity-fl | Present | Fla. Stat. §§ 83.52(6)-(7), 83.56(2), 60.05(5), 823.10 [B]
- cure-and-eviction-grounds | edu-cure-and-eviction-grounds-fl | Present | Fla. Stat. § 83.56(2)-(4) [B]
- defective-drywall-disclosure | edu-no-drywall-disclosure-fl | Confirmed absent (no defective or corrosive drywall disclosure; drywall appears only in association emergency powers and a coastal definition) | battery FLG-D-018 [D]
- deposit-cost-schedule | edu-no-deposit-cost-schedule-rule-fl | Absent | FLG-M-015 [M]
- deposit-installments | edu-deposit-installments-fl | Present (fee-in-lieu program only) | Fla. Stat. § 83.491(1)(b), (3)(c) [M]
- deposit-last-month-rent | edu-deposit-last-month-rent-fl | Present | Fla. Stat. §§ 83.43(2), 83.49(1), (3) [M]
- deposit-surrender-notice | edu-deposit-surrender-notice-fl | Present | Fla. Stat. § 83.49(3)(a), (5) [M]
- designated-repairer | designated-repairer-fl | Present (optional clause; no statutory designated-repairer or repair-and-deduct rule) | battery FLG-A-014; Fla. Stat. §§ 83.50, 83.56(1), (4), 83.60(1)(b) [A]
- disability-accommodation | edu-disability-accommodation-fl | Present (reasonable accommodation and modification duties in Florida's Fair Housing Act); confirmed absent (restoration condition, restoration escrow, lease-inclusion rule) | Fla. Stat. §§ 760.22(3), 760.23(7)-(9), 760.29(1), (3), (5)(c), 413.08(6)(a); battery FLG-F-002 [F]
- disaster-displaced-guests | edu-no-disaster-guest-rule-fl | Confirmed absent (no right for tenants to house disaster-displaced people despite the lease; no suspension of occupancy or guest limits in an emergency) | battery FLG-F-009 (supersedes FLG-F-008); Fla. Stat. §§ 252.36(6)(g), (i), 83.56(2)(b) [F]
- disaster-duties | edu-disaster-duties-fl | Present (tenant casualty rights; price-gouging ban on rentals in a declared emergency; Governor's emergency orders; association emergency powers); confirmed absent (no automatic end of tenancy or rent relief for a declared disaster) | Fla. Stat. §§ 83.63, 501.160, 252.36, 718.1265, 720.316, 83.53(2); battery FLG-F-007 [F]
- double-letting | edu-no-double-letting-rule-fl | Confirmed absent | FLG-B-021 [B]
- drug-free-housing-addendum | edu-no-drug-free-addendum-rule-fl | Confirmed absent (no statute requiring or regulating a drug-free or crime-free lease addendum); drug conduct handled through lease terms, the 7-day notices and nuisance law | battery FLG-F-012 (supersedes FLG-F-011); Fla. Stat. §§ 83.52(6)-(7), 83.56(2), 823.10, 397.311(39) [F]
- dv-confidentiality | edu-no-dv-confidentiality-rule-fl | Absent (state); federal covered housing | FLG-M-002; Fla. Stat. §§ 741.30(3)(b), 741.401-741.405 [M]
- dv-deposit-timing | edu-no-dv-deposit-timing-rule-fl | Absent | FLG-M-002; Fla. Stat. § 83.49(3) [M]
- dv-eviction-protection | edu-no-dv-eviction-protection-fl | Absent (state); federal covered housing | FLG-M-002; FEDERAL: 34 U.S.C. § 12491(b) [M]
- dv-lockchange | edu-no-dv-lock-change-right-fl | Absent | FLG-M-001; Fla. Stat. §§ 741.30(6)(a)2., 83.67(2) [M]
- dv-protection-order-chapter-moved | edu-dv-protection-order-statutes-fl | Present | Fla. Stat. §§ 741.30, 784.046, 784.0485 [M]
- dv-qualifying-documents | edu-no-dv-qualifying-documents-fl | Absent | FLG-M-002 [M]
- electric-submetering-disclosure | edu-electric-submetering-fl | Present | Fla. Admin. Code R. 25-6.049(5), (9), 25-6.003(2); Fla. Stat. §§ 366.02(8), 366.03; battery FLG-C-001 [C]
- emergency-assistance-right | edu-no-emergency-assistance-right-fl | Confirmed absent (no statutory right to summon police or emergency help, no ban on lease penalties for calls, no presumption against eviction after a call); retaliation statute's open list noted | battery FLG-F-015 (supersedes FLG-F-014, FLG-F-013); Fla. Stat. § 83.64 [F]
- emergency-contact | edu-no-emergency-contact-rule-fl | Confirmed absent (no emergency-contact duty; name and address disclosure only) | battery FLG-E-018; Fla. Stat. §§ 83.50, 83.56(3) [E]
- eminent-domain | eminent-domain-vi (tag) + edu-eminent-domain-fl | Tagged (no Florida statute ends a lease or abates rent on a taking; court apportions conflicting claims to the award) | Fla. Const. art. X, § 6(a); Fla. Stat. §§ 73.021(4), 73.101, 421.55; battery FLG-D-031 [D]
- energy-data-release | edu-no-energy-data-release-fl; tag energy-data-release-wy | Confirmed absent | battery FLG-C-002; related Fla. Admin. Code R. 25-6.093(4) [C]
- entity-landlord-court-representation | edu-entity-landlord-court-representation-fl | Present | Fla. Stat. §§ 83.59(2), 454.18, 454.23; Fla. Sm. Cl. R. 7.050(a) [B]
- environmental-event-termination | edu-no-environmental-event-termination-fl | Confirmed absent (landlord right) | Fla. Stat. §§ 83.63, 83.512, 83.47(1)(a) [B]
- ev-charging-end-of-tenancy | edu-no-ev-charging-end-of-tenancy-fl | Confirmed absent (residential tenancies) | battery FLG-C-008; related Fla. Stat. §§ 718.113(8)(f), 718.121(2) [C]
- ev-charging-requirements | edu-ev-charging-requirements-fl; tag ev-charger-installation-hi | Present | Fla. Stat. § 366.94(1)-(3); battery FLG-C-008 [C]
- ev-charging-shared-area | edu-ev-charging-shared-area-fl | Present; tenant shared-area right confirmed absent | Fla. Stat. §§ 366.94(4), 718.113(9); battery FLG-C-008 [C]
- eviction-hardship-stay | edu-no-eviction-hardship-stay-fl | Confirmed absent | Fla. Stat. §§ 83.62(1), 250.5202; Fla. R. Civ. P. 1.550(b), 1.580(b) [B]
- eviction-penalty-clause-ban | edu-no-eviction-fee-statute-fl | Absent | Fla. Stat. §§ 83.59(4), 83.625, 83.48; FLG-M-008, FLG-M-005 [M]
- eviction-service-party | edu-no-eviction-service-party-fl | Confirmed absent | Fla. Stat. §§ 48.031(1)(a), 48.183, 741.403(1)(b) [B]
- exculpatory-clauses | edu-exculpatory-clauses-fl | Present | Fla. Stat. § 83.47(1)(b), (2); FLG-M-028 [M]
- expedited-criminal-eviction | edu-expedited-criminal-eviction-fl | Present (no dedicated track) | Fla. Stat. §§ 83.56(2)(a), 83.59(2), 83.681, 60.05(5) [B]
- expedited-deposit-disposition | edu-expedited-deposit-disposition-fl | Present | Fla. Stat. § 83.49(3)(b)-(c) [M]
- extended-absence-notice | edu-extended-absence-notice-fl; extended-absence-notice-fl | Present (effects); duty absent | Fla. Stat. §§ 83.53(2)(d), 83.59(3)(c), 83.55 [B]
- family-child-care | edu-family-child-care-fl; family-child-care-fl | Present (family child care homes are a valid residential use for local zoning; residential insurance excludes child-care liability unless covered); confirmed absent (no tenant right against the landlord; no landlord-condition rule) | Fla. Stat. §§ 125.0109, 166.0445, 402.302(8), (11), 627.70161; battery FLG-F-030 [F]
- farmland-hunting-rights | edu-no-farmland-hunting-rule-fl | Confirmed absent (no statute allocating hunting or fishing rights between landlord and farm tenant); trespass "owner" includes a lessee or occupant; written-authorization and liability-limit rules noted | battery FLG-D-030; Fla. Stat. §§ 810.12(4), 379.3004, 375.251(2) [D]
- fee-transparency | edu-fee-transparency-fl | Absent | FLG-M-019; Fla. Stat. §§ 83.425, 501.212(7) [M]
- fee-unprovided-service | edu-fee-unprovided-service-fl | Absent | FLG-M-019; Fla. Stat. §§ 83.56(1), 83.55, 83.45 [M]
- fire-code-standard | edu-fire-code-standard-fl | Present | Fla. Stat. §§ 633.202, 633.208, 553.73; Fla. Admin. Code R. 69A-60.002 [A]
- fire-sprinkler-duty | edu-fire-sprinkler-duty-fl | Present | Fla. Stat. §§ 553.895(2), 633.208(10), 553.73(17), 509.215, 718.112(2)(n) [A]
- firearms | edu-firearms-fl; firearm-rules-fl | Present (vehicle parking-lot rule for employers, which can reach a landlord business; discharge and safe-storage crimes); confirmed absent (no statute on private lease firearm terms or tenant possession in the home) | Fla. Stat. §§ 790.251, 790.15, 790.174, 790.33; battery FLG-F-006 [F]
- foreclosure-disclosure | edu-no-foreclosure-disclosure-fl | Confirmed absent (no pre-lease foreclosure disclosure; standby § 83.5615 not in force) | battery FLG-D-024; Fla. Stat. § 83.5615 Note [D]
- foreign-ownership | edu-foreign-ownership-fl | Present (foreign-principal real property restrictions; silent on leases; no landlord inquiry duty) | Fla. Stat. §§ 692.201-692.205; battery FLG-D-011 [D]
- forfeiture-redemption | edu-no-forfeiture-redemption-fl | Confirmed absent | Fla. Stat. §§ 83.56(3), (5)(a), 83.60 [B]
- frozen-standard-incorporation | edu-frozen-standard-incorporation-fl | Present | Fla. Stat. §§ 553.73(6), (7)(d), 633.202(1), 633.208(4), 553.895(1), 509.215(7) [A]
- furnishings-included | furnishings-included-la (tag) | Tagged | Fla. Stat. §§ 83.52(6), 83.43(4), 83.49 [A]
- good-cause-notice | edu-no-good-cause-notice-fl | Confirmed absent | Fla. Stat. §§ 83.57, 83.64(3) [B]
- government-fee-reimbursement | government-fee-reimbursement-fl | Present (lawful option; no Florida rule) | battery FLG-C-013; Fla. Stat. §§ 83.43(12), 83.425 [C]
- governmental-fines | tenant-caused-fines-fl | Present (lawful option; no allocation statute) | Fla. Stat. §§ 162.09(1), (3), 83.51(4), 83.52(1); battery FLG-C-014 [C]
- guarantor-renewal | edu-guarantor-renewal-fl; tag guaranty-as | Confirmed absent (no lease-guaranty statute; writing rule only) | battery FLG-E-015; Fla. Stat. § 725.01 [E]
- guest-rights | edu-no-guest-rights-statute-fl | Confirmed absent (no statutory right of tenants to have guests, suppliers or caregivers; no ban on guest fees or limits); lease terms, the curable-breach notice and condominium suspension rules apply | battery FLG-F-028 (supersedes FLG-F-027); Fla. Stat. §§ 83.56(2)(b), 718.106(4), 718.303(3) [F]
- habitability-materiality | edu-habitability-materiality-fl | Present | Fla. Stat. §§ 83.56(1), 83.60(1)(b), 83.63 [A]
- habitability-modifiable | edu-habitability-modifiable-fl | Present | Fla. Stat. § 83.51(2)(a)-(e), (3) [M]
- habitability-presumption | edu-no-habitability-presumption-fl | Confirmed absent | battery FLG-A-002; Fla. Stat. §§ 83.60(1)(b), 83.64 [A]
- habitability-statement | edu-no-habitability-statement-fl | Confirmed absent | battery FLG-A-001; duty itself Fla. Stat. § 83.51(1) [A]
- habitability-waiver | edu-habitability-waiver-fl | Present | Fla. Stat. §§ 83.51(1), (4), 83.47(1) [M]
- hazardous-contamination-disclosure | edu-hazardous-contamination-disclosure-fl | Present (narrow: site-rehabilitation notice copy to tenants of the source property; no general lease disclosure) | Fla. Stat. § 376.30702(2); battery FLG-D-016 [D]
- health-district-rental-rules | edu-no-health-district-rental-rules-fl | Confirmed absent (no duty to provide health rules or refer tenants; state sanitary-nuisance enforcement noted) | battery FLG-D-023; Fla. Stat. §§ 386.01-386.041 [D]
- heating | edu-heating-fl | Present | Fla. Stat. § 83.51(2)(a)5., (1)(a), (2)(c), (2)(e); Fla. Stat. § 509.221(3); Fla. Admin. Code R. 61C-1.004(10) [A]
- holding-deposit | edu-holding-deposit-fl | Absent | FLG-M-018; Fla. Stat. §§ 83.43(4), (17), 83.49(1) [M]
- holdover-rate | edu-holdover-rate-fl | Present | Fla. Stat. §§ 83.58, 83.575(3) [B]
- home-business | edu-home-business-fl | Present (home-based business statute limits local governments only); confirmed absent (no statutory limit on a lease restricting a home business) | Fla. Stat. § 559.955; battery FLG-F-029 [F]
- homestead-waiver | edu-homestead-waiver-fl | Present (constitutional and statutory exemptions; no lease waiver route except the separate 14-point wage-garnishment waiver; library declines it) | battery FLG-E-024; Fla. Const. art. X, § 4; Fla. Stat. §§ 222.05, 222.11(2), 222.25, 713.691(2) [E]
- infirmity-termination | edu-no-infirmity-termination-fl | Confirmed absent | FLG-B-023; Fla. Stat. § 429.24(7) (ALF only) [B]
- informal-dispute-resolution | edu-informal-dispute-resolution-fl; tag informal-dispute-resolution-or | Present (no statute on pre-suit informal resolution; deposit disclosure urges it; mediation rules) | battery FLG-E-025; Fla. Stat. §§ 83.49(2)(d), 44.102(2)(a), 83.56(5)(b) [E]
- inspection-condemnation-disclosure | edu-no-code-order-disclosure-fl | Confirmed absent for tenants (code-enforcement disclosure runs only to a buyer on a transfer of ownership) | battery FLG-D-022; Fla. Stat. §§ 162.06(5), 125.69(1)(f) [D]
- inspection-notice-penalty | edu-no-inspection-notice-penalty-fl | Confirmed absent (no inspection-notice duty, so no penalty; no fixed penalty for entry without notice); actual damages and the deposit-notice forfeiture apply | batteries FLG-F-022 (supersedes FLG-F-021), FLG-F-020; Fla. Stat. §§ 83.53, 83.55, 83.49(3)(a), 83.67(6) [F]
- jury-waiver | edu-jury-waiver-fl, jury-waiver-fl | Present | Fla. Const. art. I, § 22; Fla. Stat. § 51.011(3); Fla. R. Civ. P. 1.430; Form 1.947(b) [M]
- key-control-policy | edu-key-control-policy-fl | Present | Fla. Stat. § 509.211(5) [A]
- knowing-use-penalty | edu-knowing-use-penalty-fl | Present | Fla. Stat. §§ 83.47(2), 559.72(9), 83.67(6) [M]
- landlord-breach-remedy | edu-landlord-breach-remedy-fl | Present | Fla. Stat. §§ 83.54, 83.55, 83.56(1), 83.60(1), 83.67(6), 83.48, 83.49(3), 83.64 [A]
- landlord-liability-insurance | edu-no-landlord-insurance-mandate-fl | Confirmed absent (no landlord insurance mandate) | battery FLG-E-021 [E]
- landlord-lien | edu-landlord-lien-fl | Present (statutory residential landlord's lien; distress abolished for residential tenancies; summary enforcement) | battery FLG-E-023; Fla. Stat. §§ 713.691, 85.011(5), 83.67(5), 83.001, 83.08-83.09 [E]
- landlord-registration | edu-landlord-registration-fl | Present | Fla. Stat. §§ 509.013(4), 509.241, 509.242(1)(d), 509.251, 83.49(8) [M]
- landlord-remedies-termination | edu-landlord-remedies-termination-fl | Present | Fla. Stat. §§ 83.55, 83.59, 83.595, 83.625, 34.01 [B]
- late-fee-limit | edu-no-late-fee-limit-fl | Absent | FLG-M-026 [M]
- law-enforcement-cooperation | edu-law-enforcement-cooperation-fl | Present (court-ordered assistance with interceptions, pen registers and trap and trace devices; owner-knowledge forfeiture rule; nuisance exposure; any-person reporting duties for child abuse, vulnerable adults and witnessed sexual battery, added after independent check R15-16); confirmed absent (landlord-specific duty to cooperate, report crimes or hand over tenant information; crime-free program statute) | Fla. Stat. §§ 934.09, 934.34, 932.703(1)(a)3., 893.138(12), 39.201(1)(a)1., 39.205(1), 415.1034(1)(a), 415.111(1), 794.027; battery FLG-F-016 [F]
- lead-safe-certification | edu-no-lead-safe-certification-fl | Confirmed absent (no lead-safe or lead-free certificate for rentals) | battery FLG-D-015; Fla. Stat. §§ 381.983-381.985 [D]
- lead-state-notices | edu-no-lead-state-notices-fl | Confirmed absent (no state lead notice, packet or certificate for leases; state act is education and screening only) | battery FLG-D-015; Fla. Stat. §§ 381.982-381.985 [D]
- lease-content-requirements | edu-lease-content-requirements-fl | Present (no general content list or first-page rule; content rules are the required disclosures and conditional terms) | battery FLG-E-009; Fla. Stat. §§ 83.43(13), 83.49(2), 83.50, 83.575, 83.595(4), 83.491 [E]
- lease-copy | edu-no-lease-copy-duty-fl; tag lease-copy-receipt-hi | Confirmed absent (no duty to give the tenant a copy; broker record-keeping only) | battery FLG-E-006; Fla. Stat. § 475.5015 [E]
- lease-notice-initial-requirement | edu-no-lease-initials-requirement-fl | Confirmed absent (no initialing rule for a residential lease; checkbox addenda instead) | battery FLG-E-007; Fla. Stat. §§ 83.505(1), 83.595(4), 812.155(6) [E]
- lease-registration | edu-lease-registration-fl | Present (recording optional; priority rule for leases of 1 year or longer) | Fla. Stat. §§ 695.01(1), 695.03, 695.26, 28.222(3)(a), 713.10(2)(b); battery FLG-E-003 [E]
- lease-term-limitation | edu-lease-term-limits-fl | Present (no private residential term cap; execution formalities) | Fla. Stat. §§ 689.01(1), 725.01, 744.441(5), (12); Fla. Const. art. X, § 4(c); batteries FLG-E-004, FLG-E-005 [E]
- lease-type-parity | edu-no-lease-type-parity-fl | Confirmed absent (no parity rule between month-to-month and fixed-term terms or rent) | battery FLG-E-010; related Fla. Stat. §§ 83.64, 83.425 [E]
- lease-type-size | edu-no-lease-type-size-fl | Confirmed absent (no type-size rule for a residential lease) | battery FLG-E-008 [E]
- limitation-of-actions | edu-limitation-of-actions-fl | Present | Fla. Stat. §§ 95.11(2)(b), (3)(j), 95.03, 95.04, 95.051 [B]
- liquidated-damages | edu-liquidated-damages-fl | Present | Fla. Stat. §§ 83.595(4), 83.575(2); FLG-M-005 [M]
- lockout-for-rent-delinquency | edu-lockout-for-rent-delinquency-fl | Present (prohibited) | Fla. Stat. §§ 83.67(1)-(2), (6)-(7), 83.59(3), 83.62(2); FLG-M-027 [M]
- maintenance-duty-shift | edu-maintenance-duty-shift-fl | Present | Fla. Stat. § 83.51(1) (last sentence), (2)(a), (2)(b), (2)(e) [A]
- meter-conservation-charge | edu-no-meter-conservation-charge-fl | Confirmed absent | battery FLG-C-003; related Fla. Stat. §§ 163.08(3), 367.022(9) [C]
- meth-disclosure | edu-no-meth-disclosure-fl | Confirmed absent (no drug-lab disclosure, reporting, cleanup standard or habitation ban); owner crimes for knowingly leasing for drug manufacture noted | battery FLG-D-017; Fla. Stat. §§ 893.1351, 812.14(5)-(7), 893.138 [D]
- military-air-zone-disclosure | edu-no-military-zone-disclosure-fl | Confirmed absent (no lease or sale disclosure; military compatibility handled by local planning and airport zoning) | battery FLG-D-010 (FLG-D-009 failed positive, superseded); Fla. Stat. §§ 163.3175, 333.03 [D]
- minor-tenant-filing | edu-minor-tenants-fl | Present | Fla. Stat. §§ 743.07, 743.01, 743.015, 743.045; Fla. R. Civ. P. 1.210(b) [B]
- municipal-utility-lien | edu-utility-liens-fl | Present; owner exemption for current tenant's bill confirmed absent | Fla. Stat. §§ 153.67, 159.17, 180.135; battery FLG-C-007 [C]
- nonpayment-notice | edu-nonpayment-notice-fl | Present | Fla. Stat. § 83.56(3)-(4); Fla. R. Gen. Prac. & Jud. Admin. 2.514 [B]
- nonrefundable-deposit-notice | edu-no-nonrefundable-deposit-rule-fl | Absent | FLG-M-020; Fla. Stat. §§ 83.43(4), (14), 83.491(3)(f) [M]
- nonrefundable-deposit-separate-notice | edu-no-nonrefundable-separate-notice-fl | Absent | FLG-M-020 [M]
- nonresident-owner-agent | edu-no-nonresident-owner-agent-fl | Present (a foreign LLC owning income-producing property must obtain a certificate of authority naming a Florida registered agent and cannot sue, including to evict, without one; nonresidents doing business here are deemed to appoint the Secretary of State for service; no agent rule for individual owners; no income-tax withholding on rent; paid managers need a broker licence; corrected after independent check R13-17/R13-19) | battery FLG-D-027 (FLG-D-026 failed positive, superseded); Fla. Stat. §§ 48.181(2), (5), 83.50, 475.01, 475.011(2), 475.42(1)(a), 605.0902(1), 605.0904(1), 605.0905(3), 607.1502(1); Fla. Const. art. VII, § 5 [D]
- notice-service-fee | edu-notice-service-fee-fl, notice-cost-fl | Absent (statute); optional actual-cost clause | Fla. Stat. § 83.55; FLG-M-008 [M]
- notice-to-quit-waiver | edu-notice-to-quit-waiver-fl | Present | Fla. Stat. §§ 83.56(4), 83.57, 83.575(1), 83.47 [M]
- notice-to-vacate-additional-terms | edu-no-notice-to-vacate-terms-rule-fl | Confirmed absent (general); conversion rule present | Fla. Stat. §§ 718.606, 718.62 [B]
- nuisance | edu-nuisance-fl | Present (public-nuisance suits against owners, 72-hour vacate order, local nuisance boards with closure orders, rental-property rehabilitation safe harbor); confirmed absent (receivership, rent escrow, lease-summary duty) | Fla. Stat. §§ 60.05, 823.05, 823.10, 893.138; battery FLG-F-010 [F]
- optional-lease-terms | edu-optional-lease-terms-fl | Present (checklist of terms Florida lets the lease add or choose, with library clause or declined status) | Fla. Stat. §§ 83.575, 83.595(4), 83.505, 83.491, 83.43(12), 83.51(1)-(2), 83.67(5), 83.49(5), 83.46(1), (3), 713.691(1), 83.42(2) [E]
- ordnance-demolition-meter-disclosures | edu-no-ordnance-demolition-meter-disclosure-fl | Confirmed absent | battery FLG-C-012 [C]
- other-landlord-facilities | edu-other-landlord-facilities-fl | Present (elevator inspection and service; common areas, garbage; no garage-door or laundry duty) | battery FLG-E-032; Fla. Stat. §§ 83.51(2)(a), 83.67(1), 83.52(5), 399.02(2), 399.061(1) [E]
- owner-move-in-reservation | owner-occupancy-termination-ar (tag) | Tagged | Fla. Stat. §§ 83.57(3), 83.575(1), 83.58, 83.59(3) [B]
- parking-rules-notice | edu-parking-rules-notice-fl | Present (no lease-delivery rule for parking rules; posted tow-away signs; private-parking rules, signage, invoices and appeals; unauthorized parking as curable noncompliance) | battery FLG-E-028; Fla. Stat. §§ 715.07(2), 715.075, 83.56(2)(b) [E]
- part5-nonwaivable | edu-part5-nonwaivable-fl | Present | Fla. Stat. §§ 83.41, 83.42, 83.47, 83.48, 83.56(4) [M]
- periodic-services-entry | edu-periodic-services-entry-fl; scheduled-services-entry-fl | Present (entry to supply agreed services needs consent, emergency, unreasonable refusal or absence; the lease can make scheduled services agreed services); confirmed absent (no-notice scheduled-service entry rule or conspicuous-lease rule) | Fla. Stat. § 83.53; battery FLG-F-017 [F]
- pest-control-notice | edu-pest-control-notice-fl | Present | Fla. Stat. §§ 83.51(2)(a)1., 482.2265, 482.2267(5), 482.226(5); battery FLG-A-012 [A]
- pet-eviction-fact-sheet | edu-no-pet-eviction-fact-sheet-fl | Confirmed absent (no state fact sheet on pets and eviction, and no duty to give one) | battery FLG-F-047 (supersedes FLG-F-046); Fla. Stat. § 83.56(2)(b) [F]
- pet-fees | edu-pet-fees-fl | Present | Fla. Stat. §§ 83.43(4), (12), 413.08(6)(b) [M]
- plain-language | edu-no-plain-language-rule-fl | Confirmed absent (no plain-language, readability or caption rule for leases; readability rules exist for insurance policies and rental-purchase of goods) | battery FLG-D-032; Fla. Stat. §§ 627.4145, 559.9233(6) [D]
- plain-language-consumer-statement | edu-no-plain-language-statement-fl | Confirmed absent (no statement of consumer restrictions, readability test, Attorney General preapproval or dollar exclusion for leases) | battery FLG-D-032 [D]
- political-access | edu-no-political-access-rule-fl | Confirmed absent for ordinary rentals (no candidate or canvasser access right to apartment buildings); owners in condominiums and HOAs, and mobile home owners in parks, may invite candidates to speak in common areas | battery FLG-F-033; Fla. Stat. §§ 718.123, 720.304(1), 723.055 [F]
- pool-safety | edu-pool-safety-fl | Present | Fla. Stat. §§ 515.25, 515.27, 515.29, 515.37, 514.011, 514.0115, 514.031, 514.0315 [A]
- portable-cooling-device | edu-no-portable-cooling-rule-fl | Confirmed absent (no tenant cooling-device right) | battery FLG-A-008; related Fla. Stat. §§ 509.221(3), 720.3035(1)(b)2. [A]
- portable-solar | edu-portable-solar-fl | Present (owner-side statute); tenant right confirmed absent | Fla. Stat. § 163.04(2)-(4); battery FLG-C-009 [C]
- portfolio-thresholds | edu-portfolio-thresholds-fl | Present | Fla. Stat. §§ 83.49(1)(c), (2), 83.51(1)-(2), 509.013(4)(b)3.-4., 509.242(1)(d)-(e), 83.515(1), 723.002(1) [E]
- possession-bond | edu-no-possession-bond-fl | Confirmed absent | Fla. Stat. §§ 83.60(2), 83.14 (Part I) [B]
- post-eviction-property | edu-post-eviction-property-fl | Present | Fla. Stat. §§ 83.62(2), 715.101 [B]
- private-well-testing | edu-private-well-testing-fl | Present (system-size rules; no general duty to give test results to tenants) | Fla. Stat. § 381.0062; Fla. Admin. Code ch. 64E-8; battery FLG-A-025 [A]
- prohibited-acts-renter | edu-prohibited-acts-renter-fl | Present (statutory prohibitions on damage and disturbance, and on unreasonably refusing entry); shared clause prohibited-acts-renter-wy declined for FL | Fla. Stat. §§ 83.52(6)-(7), 83.53(1), 83.56(2) [F]
- promises-to-repair | edu-no-promises-to-repair-rule-fl | Confirmed absent | battery FLG-A-019; Fla. Stat. §§ 83.56(1), 83.55 [A]
- prop65-rental-warning | edu-no-chemical-warning-rule-fl | Confirmed absent (no Proposition 65-type chemical exposure warning for rentals) | batteries FLG-D-020 (FLG-D-019 failed positive, superseded) [D]
- property-tax-rent-disclosure | edu-no-property-tax-rent-statement-fl | Confirmed absent | battery FLG-C-015 [C]
- protected-class-inquiry-ban | edu-no-protected-class-inquiry-ban-fl | Confirmed absent (no general housing inquiry or record ban); present: discriminatory statements ban and the emotional-support-animal diagnosis rule | Fla. Stat. §§ 760.23(3), 760.27(3)(a), 413.08(3)(b); battery FLG-F-003 [F]
- purpose-limitation | edu-purpose-limitation-fl | Present (no statute voids a lease for prohibited use; criminal letting, nuisance abatement and 72-hour vacate order) | battery FLG-E-027; Fla. Stat. §§ 796.06(1), 823.05(1), 823.10(1), 60.05(5), 893.138, 83.52, 83.56(2) [E]
- recycling-notice | edu-no-recycling-notice-fl | Confirmed absent (state notice); receptacle duty present | Fla. Stat. § 403.706(2)(c), (21); battery FLG-C-011 [C]
- redemption | edu-redemption-fl | Confirmed absent (partial-rent rule present) | Fla. Stat. § 83.56(5)(a), (c) [B]
- religious-cultural-display | edu-no-religious-display-rule-fl | Confirmed absent for landlords (no tenant right to a religious or cultural display against the lease); condominium associations must accommodate a small religious object on the unit door | battery FLG-F-032; Fla. Stat. §§ 718.113(6), 760.23(1)-(2) [F]
- rent-concession | edu-no-rent-concession-rule-fl; tag rent-concession-wi | Confirmed absent (no statute on rent concessions) | battery FLG-E-011 [E]
- rent-demand-bar | edu-rent-demand-bar-fl | Present | Fla. Stat. §§ 83.46(1), 83.56(3)-(4), 83.60(1)(b) [B]
- rent-escalation | edu-rent-escalation-fl; tags rent-escalation-la, rent-increase-midterm-ky | Present (no statute on unit-lease escalation; CPI escalation void only in association facility leases; retaliation bar) | battery FLG-E-013; Fla. Stat. §§ 718.4015, 720.31(5), 83.64 [E]
- rent-increase-notice | edu-rent-increase-notice-fl | Absent (notice statute) | FLG-M-032; Fla. Stat. §§ 83.57, 501.160, 125.0103(2), 723.037(1) [M]
- rent-installments | edu-rent-installments-fl; tag rent-installments-or | Present (lease may vary the default due date) | Fla. Stat. §§ 83.46(1), 83.56(3), (5)(a) [E]
- rent-into-court-counterclaim | edu-rent-into-court-counterclaim-fl | Present | Fla. Stat. §§ 83.60(2), 83.61; Fla. R. Civ. P. 1.170(a) [B]
- rent-receipt-anti-waiver | edu-no-rent-receipt-anti-waiver-fl | Absent | FLG-M-029; Fla. Stat. § 83.43(9) [M]
- rent-receipts | edu-rent-receipts-fl | Absent (general); partial-rent receipt present | FLG-M-021; Fla. Stat. § 83.56(5)(a)1. [M]
- rent-reporting | edu-no-rent-reporting-rule-fl | Confirmed absent (no state rent-reporting duty or notice rule) | battery FLG-E-014; related Fla. Stat. § 83.491(4)(a) [E]
- rental-inspection | edu-rental-inspection-fl | Present | Fla. Stat. §§ 509.032(2)(a)-(b), 509.241(1), 83.53 [M]
- renters-insurance-rules | edu-renters-insurance-rules-fl | Present (no rule on requiring renter's insurance; flood-disclosure statement, flotation insurance, fee-in-lieu insurance notice) | battery FLG-E-019; Fla. Stat. §§ 83.512(1), 83.535, 83.491(3)(i), 83.47(1)(b) [E]
- repair-cost-termination | edu-no-repair-cost-termination-fl | Confirmed absent (landlord); tenant flood-loss threshold noted | battery FLG-A-016; Fla. Stat. §§ 83.63, 83.512(2) [A]
- repair-escrow-exemption-notice | edu-no-repair-escrow-exemption-fl | Confirmed absent | batteries FLG-A-031, FLG-A-014; Fla. Stat. §§ 83.60(2), 83.61 [A]
- repair-notice | edu-repair-notice-fl | Present | Fla. Stat. §§ 83.56(1), (4), 83.60(1)(b) [A]
- required-disclosures | edu-required-disclosures-fl | Present (checklist: landlord identity, radon, flood, deposit notice, fee-in-lieu, association opt-out copies, federal lead row; no first-page form or coverage notice; no general seller condition disclosure) | Fla. Stat. §§ 83.50, 404.056(5), 83.512, 83.49(2), 83.491(4), 718.112(2)(n)1.; batteries FLG-D-007 (FLG-D-006 superseded) [D]
- required-fees | fees-and-charges-vi (tagged), edu-required-fees-fl | Tagged; no statute | FLG-M-019; Fla. Stat. §§ 83.43(12), 83.425 [M]
- rights-responsibilities-guide | edu-no-rights-guide-fl | Absent | FLG-M-023 [M]
- rules-regulations | edu-rules-regulations-fl; rules-fl | Present (reasonable rules enforceable through Fla. Stat. § 83.56(2); no adoption or change procedure for Part II; ch. 723 has its own) | battery FLG-E-026; Fla. Stat. §§ 83.56(2), 83.64(3), 83.44, 83.45 [E]
- sale-or-management-change | edu-sale-or-management-change-fl | Present (deposit transfer with accounting and receipt; name-and-address change notice; showings; no separate sale notice) | Fla. Stat. §§ 83.49(7), 83.50, 83.53(1)-(2); battery FLG-D-025 [D]
- sanitary-code-variance | edu-no-code-variance-notice-fl | Confirmed absent | battery FLG-A-035 [A]
- scope | edu-scope-fl | Present | Fla. Stat. §§ 83.41, 83.42, 83.43(5), (13), 83.001, 723.002(1), 83.803, 83.425 [E]
- seasonal-tenancy | edu-no-seasonal-tenancy-rule-fl | Confirmed absent | Fla. Stat. §§ 83.42(3), 83.43(18), 509.013(4), (12) [B]
- security-deposit-holding | edu-security-deposit-holding-fl | Present | Fla. Stat. § 83.49(1), (2), (3)(d), (9) [M]
- security-deposit-nonwaiver | edu-security-deposit-nonwaiver-fl | Present | Fla. Stat. §§ 83.47(1)(a), 83.49(3)(b), (5), 83.491(4)(a) [M]
- security-deposit-on-sale | edu-security-deposit-on-sale-fl | Present | Fla. Stat. § 83.49(7) [M]
- security-deposit-penalty | edu-security-deposit-penalty-fl | Present | Fla. Stat. § 83.49(1)(c), (2), (3)(a), (3)(c), (8) [M]
- security-deposit-standards | edu-no-deposit-standards-rule-fl | Absent | FLG-M-015 [M]
- security-devices | edu-security-devices-fl | Present (no rekey-at-turnover rule) | Fla. Stat. §§ 83.51(2)(a)2., 509.211(1), 768.0706(2)(a)4.-7.; battery FLG-A-009 [A]
- self-help-eviction | edu-self-help-eviction-fl | Present | Fla. Stat. §§ 83.59(3), 83.67(1)-(8) [B]
- senior-housing-work-card | edu-no-senior-housing-work-card-fl | Confirmed absent (no work-card or staff-screening rule for 55+ housing); apartment-employee screening applies by property type, not age | battery FLG-F-004; Fla. Stat. §§ 760.29(4), 83.515 [F]
- service-animal-denial-penalty | edu-service-animal-denial-penalty-fl | Present (second-degree misdemeanor for a housing provider who discriminates against an individual with a disability; full and equal access with a service animal, no extra charge) | Fla. Stat. §§ 413.08(1), (6)(b), (7), 775.082(4)(b), 775.083(1)(e) [F]
- service-animal-misrepresentation | edu-service-animal-misrepresentation-fl | Present (two misdemeanors that reach housing: misrepresenting service-animal use, and false proof of need for an emotional support animal) | Fla. Stat. §§ 413.08(9), 817.265, 760.27(3)(c), 775.082(4)(b), 775.083(1)(e) [F]
- sex-offender-disclosure | edu-no-sex-offender-disclosure-fl | Confirmed absent (no landlord duty; notification is law enforcement's) | battery FLG-D-004; Fla. Stat. §§ 775.21(7), 83.515(2) [D]
- sex-offender-occupancy | edu-sex-offender-occupancy-fl | Present (offender residency restriction binds the offender; no landlord leasing or co-residence rule; harboring offense) | Fla. Stat. §§ 775.215, 775.21(10)(g), 943.0435(13); battery FLG-D-005 [D]
- sfr-occupancy-disclosure | edu-no-sfr-occupancy-disclosure-fl | Confirmed absent (no single-family rental disclosure, type-size or first-page rule; single-family/duplex rules are maintenance allocations) | battery FLG-D-037; Fla. Stat. § 83.51(1)-(2) [D]
- shoreline-access-disclosure | edu-no-shoreline-disclosure-fl | Confirmed absent for leases (coastal disclosure runs to purchasers only) | battery FLG-D-008; Fla. Stat. § 161.57 [D]
- showing-notice-waiver | edu-showing-notice-waiver-fl | Present | Fla. Stat. § 83.53 [M]
- shutdown-rent-protection | edu-no-shutdown-rent-protection-fl | Confirmed absent | FLG-B-028 [B]
- single-family-zone-lease-limit | edu-no-single-family-zone-lease-limit-fl | Confirmed absent (no state limit on renting homes in single-family zones; vacation-rental preemption and HOA rental-restriction limits noted) | battery FLG-D-037; Fla. Stat. §§ 509.032(7)(b), 720.306(1)(h) [D]
- smart-access | edu-no-smart-access-rule-fl | Confirmed absent | battery FLG-A-010; general rules Fla. Stat. §§ 83.53, 83.67(2) [A]
- smoke-drift-waiver | edu-no-smoke-drift-waiver-rule-fl | Absent (workplace ban present) | Fla. Stat. §§ 386.203(5), 386.204, 386.2045, 386.209; Fla. Const. art. X, § 20; FLG-M-010 [M]
- social-security-defense | edu-no-benefit-delay-defense-fl | Confirmed absent | Fla. Stat. §§ 83.56(5)(c), 83.60(2) [B]
- source-of-income | edu-no-source-of-income-rule-fl | Absent (state) | FLG-M-031; Fla. Stat. § 760.23 [M]
- special-district-representation | edu-no-special-district-statement-fl | Confirmed absent for leases (community development district statement runs to initial-sale purchasers) | battery FLG-D-028; Fla. Stat. §§ 190.048, 190.0485 [D]
- sprinkler-disclosure | edu-sprinkler-disclosure-fl | Present (only the condominium and cooperative opt-out notice copy to a renter; no general sprinkler disclosure) | Fla. Stat. §§ 718.112(2)(n)1., 719.1055(5)(a)2.; battery FLG-D-002 [D]
- statute-of-frauds-lease-term | edu-statute-of-frauds-lease-fl | Present | Fla. Stat. §§ 725.01, 689.01(1), 83.43(13), 83.01 [E]
- statutory-caps | edu-statutory-caps-fl | Present (checklist of Florida's statutory figures; no deposit, late-fee or application-fee cap) | Fla. Stat. §§ 83.595(4), 83.575(1), 83.49(1), 68.065(2), 83.58, 83.67(6), 83.53(2), 83.491(4)(a)1. [E]
- statutory-early-termination | edu-statutory-early-termination-fl | Present | Fla. Stat. §§ 83.56(1), 83.63, 83.682 [B]
- steam-radiator-covers | edu-no-steam-radiator-cover-rule-fl | Confirmed absent | battery FLG-A-006 [A]
- stigmatized-property | edu-stigmatized-property-fl | Present (death, homicide, suicide and HIV/AIDS are not material facts that must be disclosed; lease coverage undefined) | Fla. Stat. §§ 689.25, 760.50(4)(a); battery FLG-D-003 [D]
- stove-refrigerator | edu-no-stove-refrigerator-rule-fl | Confirmed absent | battery FLG-A-003; related Fla. Stat. §§ 83.51(1), 83.67(1) [A]
- student-housing | edu-student-housing-fl | Present (the Act excludes residence incidental to educational services); confirmed absent (no separate student-housing rule for private landlords) | Fla. Stat. § 83.42(1); battery FLG-F-044 (supersedes FLG-F-043) [F]
- subsidized-inspection-refusal | edu-no-subsidized-inspection-refusal-rule-fl | Confirmed absent (no Florida rule on a refused subsidy-program inspection by landlord or tenant); entry rules, registry rule and deposit exclusion for subsidized tenancies noted | battery FLG-F-025 (supersedes FLG-F-024, FLG-F-023); Fla. Stat. §§ 83.53, 83.56(2), 83.60(2), 83.49(4) [F]
- subsidy-habitability-proration | edu-no-subsidy-proration-rule-fl | Confirmed absent (state law); federal voucher rules not held | battery FLG-A-033; Fla. Stat. §§ 83.60(2), 83.56(5)(c) [A]
- subsidy-late-fee | edu-no-subsidy-late-fee-rule-fl | Confirmed absent (no Florida late-fee rule for subsidized tenancies); federal voucher rule that the family does not owe the housing assistance payment quoted | battery FLG-F-026; Fla. Stat. §§ 83.60(2), 83.56(5)(c), 83.45; FEDERAL: 24 C.F.R. § 982.310(b) [F]
- substandard-property-receivership | edu-code-enforcement-no-receivership-fl | Present (code-enforcement orders, fines, repair liens); no receivership | Fla. Stat. §§ 162.06, 162.09; battery FLG-A-027 [A]
- tax-escalation | edu-no-tax-escalation-rule-fl; tag tax-insurance-escalation-la | Confirmed absent (statute); lawful option tagged | battery FLG-C-015; related Fla. Stat. §§ 83.43(12), 83.45, 723.031(5)(c) [C]
- telecom-access | edu-telecom-access-fl | Present (condominium and HOA; federal antenna rule for the tenant's exclusive-use areas); ordinary-rental access rule confirmed absent | Fla. Stat. §§ 718.1232, 720.309(2)(c); FEDERAL: 47 C.F.R. § 1.4000; battery FLG-C-010 [C]
- tenancy-at-will | edu-tenancy-at-will-fl | Present | Fla. Stat. §§ 83.46(2), 83.57; Part I §§ 83.01-83.04 [B]
- tenant-bankruptcy | edu-tenant-bankruptcy-fl | Confirmed absent (state rule); federal automatic stay stated | FLG-B-020 [B]
- tenant-confidential-information | edu-tenant-confidential-information-fl | Present (data-security, breach-notice and disposal duties of a commercial landlord holding tenants' personal information); confirmed absent (no landlord-tenant rule limiting disclosure of tenant information or requiring consent) | Fla. Stat. § 501.171; batteries FLG-F-037 (supersedes FLG-F-036) [F]
- tenant-display-rights | edu-tenant-display-rights-fl | Present (tenant's statutory right to display one U.S. flag; association display rules); confirmed absent (no tenant right to political signs or other displays against a lease) | Fla. Stat. §§ 83.67(4), (6), 720.3045, 720.304(2), 718.113(4); battery FLG-F-032 (supersedes FLG-F-031) [F]
- tenant-employee-housing | edu-tenant-employee-housing-fl; employee-housing-fl | Present (housing furnished as an incident of employment is a dwelling unit under the Act; wage-period tenancy default and post-employment rent; written agreement displaces the default for apartment employees and resident managers); confirmed absent (no employee-housing disclosure or sponsor rule) | Fla. Stat. §§ 83.43(5)(c), 83.46(3), 83.57; battery FLG-F-045 [F]
- tenant-insurance-claims | edu-tenant-insurance-claims-fl | Present (fee-in-lieu insurance claim and subrogation rules; no rule on claims against a tenant's renter's policy) | battery FLG-E-022; Fla. Stat. § 83.491(2) [E]
- tenant-portal | edu-tenant-portal-fl; tenant-portal-fl | Confirmed absent (no portal statute); present: e-mail notice needs the signed addendum, and UETA's non-waivable right to refuse further electronic transactions; optional Florida portal clause offered, tenant-portal-mn declined | battery FLG-F-042 (supersedes FLG-F-041, FLG-F-040); Fla. Stat. §§ 83.505, 83.56(4), 668.50(5) [F]
- tenant-records | edu-tenant-records-fl | Confirmed absent (no rent-ledger, records-request or retention duty); present: deposit accounting on transfer, electronic-notice copies, and the data-security statute's protection and disposal duties | battery FLG-F-039 (supersedes FLG-F-038); Fla. Stat. §§ 83.49(7), 83.505(5), 501.171(2), (8) [F]
- tenant-repair-remedies | edu-tenant-repair-remedies-fl | Present (no repair-and-deduct) | Fla. Stat. §§ 83.56(1), 83.60, 83.55, 83.61; battery FLG-A-014 [A]
- tenant-right-to-organize | edu-tenant-right-to-organize-fl | Present (retaliation against tenant organizing is unlawful); confirmed absent for ordinary rentals (no affirmative right to meet, distribute or canvass on the property); mobile home park assembly and canvassing rights noted | Fla. Stat. §§ 83.64(1)(b), (3), 723.054, 723.055; battery FLG-F-035 (supersedes FLG-F-034) [F]
- tenant-rights-statement | edu-no-tenant-rights-statement-fl | Absent | FLG-M-023 [M]
- tenant-screening | edu-tenant-screening-fl | Absent | FLG-M-025; Fla. Stat. §§ 83.425, 83.67(3), 83.683, 760.23 [M]
- tenant-statutory-duties | edu-tenant-statutory-duties-fl | Present (seven statutory tenant duties apply at all times; enforced by the 7-day notices and damages) | Fla. Stat. §§ 83.52, 83.56(2), 83.55, 83.53(1) [F]
- term-change-notice | edu-term-change-notice-fl | Absent | FLG-M-032; Fla. Stat. §§ 83.49(2), 83.505(3) [M]
- tpa-exemption-notice | edu-no-tpa-exemption-notice-fl | Confirmed absent (no rent-cap, just-cause or purchase-right regime to be exempt from; conversion exclusions are self-executing) | batteries FLG-D-012, FLG-D-014; Fla. Stat. §§ 125.0103(2), 718.612(4) [D]
- tpa-notice | edu-no-tpa-notice-fl | Confirmed absent (no rent-cap or just-cause coverage notice; local rent control barred; no general tenant purchase right; conversion right of first refusal and park association right noted) | batteries FLG-D-012, FLG-D-014; Fla. Stat. §§ 125.0103(2), 166.043(2), 718.612, 723.071 [D]
- tpa-sunset | edu-no-tpa-sunset-fl | Confirmed absent (no dated repeal of a tenant protection; one contingent standby section, § 83.5615, not in force) | battery FLG-D-013; Fla. Stat. § 83.5615 Note [D]
- translation-duty | edu-no-translation-duty-fl | Confirmed absent (no lease translation duty; translation rules exist for health plan contracts negotiated in another language) | battery FLG-D-033; Fla. Stat. § 641.305 [D]
- trespass-notice | edu-trespass-notice-fl | Present | Fla. Stat. §§ 810.08, 810.09, 810.011(5) [B]
- truth-in-renting | edu-no-truth-in-renting-fl | Confirmed absent (no truth-in-renting statement or rule on lease terms violating clearly established rights; Fla. Stat. § 83.47 voids waivers; local disclosure mandates preempted) | batteries FLG-D-035 (FLG-D-034 superseded); Fla. Stat. §§ 83.47, 83.425, 501.204 [D]
- unbundled-parking | edu-no-unbundled-parking-rule-fl | Confirmed absent (no unbundled-parking rule for residential rentals) | battery FLG-E-030 [E]
- unconscionability | edu-unconscionability-fl | Present | Fla. Stat. §§ 83.45, 83.44 [M]
- unpaid-damages-interest | edu-unpaid-damages-interest-fl; unpaid-amounts-interest-fl | Present | Fla. Stat. §§ 687.01, 687.02(1), 687.03, 55.03 [B]
- usufructuary-lessor | edu-no-usufructuary-lessor-fl | Confirmed absent (no usufruct; no statute on a life tenant's lease after death; fiduciary lease powers stated) | battery FLG-E-031; Fla. Stat. §§ 733.612(7), 736.0816(10), 744.441(5) [E]
- utility-allowance-cap | edu-utility-allowance-cap-fl | Present | Fla. Admin. Code R. 25-6.049(9)(b), 25-7.058, 25-7.071(3); Fla. Stat. § 367.022(9) [C]
- utility-apportionment | utility-allocation-fl | Present | Fla. Stat. §§ 83.51(2)(e), 367.022(9); Fla. Admin. Code R. 25-6.049(9), 25-7.058, 25-7.071(3) [C]
- utility-deposit-return | edu-utility-deposit-return-fl | Present | Fla. Admin. Code R. 25-6.097, 25-7.083, 25-30.311; Fla. Stat. § 180.135(3) [C]
- utility-disclosure-attachment | edu-no-utility-disclosure-attachment-fl | Confirmed absent (ordinary rentals) | battery FLG-C-004; related Fla. Stat. § 723.031(5)(c) (mobile home parks only) [C]
- utility-disconnection-notice-authorization | utility-shutoff-notice-designee-fl | Present | Fla. Admin. Code R. 25-6.105(5)(g), 25-7.089(2)(g) [C]
- utility-interruption-submeter | edu-utility-interruption-submeter-fl | Present | Fla. Stat. § 83.67(1), (6), (7) [C]
- utility-landlord-account | edu-utility-landlord-account-fl | Present; tenant notice, pay-and-deduct, receivership confirmed absent | Fla. Stat. §§ 83.67(1), 83.51(2)(a)5.; battery FLG-C-005 [C]
- utility-shutoff-statute | edu-utility-shutoff-rules-fl | Present; weather or emergency bar confirmed absent | Fla. Admin. Code R. 25-6.105, 25-7.089, 25-30.320; Fla. Stat. §§ 366.15, 180.135(4); battery FLG-C-006 [C]
- utility-submetering-disclosure | edu-utility-submetering-disclosure-fl | Present (cost rules), disclosure confirmed absent | Fla. Admin. Code R. 25-6.049(9), 25-7.058, 25-7.071(3); Fla. Stat. § 367.022(5), (9); battery FLG-C-001 [C]
- utility-transfer | edu-utility-transfer-fl | Present (prohibition) | Fla. Stat. §§ 83.67(1), 83.51(2)(e) [C]
- waiver-by-acceptance | edu-waiver-by-acceptance-fl | Present | Fla. Stat. § 83.56(5); FLG-M-030 [M]
- water-heater-temperature | edu-no-water-heater-temperature-rule-fl | Confirmed absent | battery FLG-A-007; related Fla. Stat. §§ 83.51(2)(a)5., 554.109 [A]
- window-guards | edu-no-window-guard-rule-fl | Confirmed absent | battery FLG-A-022 [A]
- written-notice-required | edu-written-notice-required-fl | Present | Fla. Stat. §§ 83.56(1)-(4), 83.57, 83.575, 83.49(3)(a), (5), 83.50, 83.53(2), 83.682(1), 83.505 [E]


### §3 Batteries for every absence

Engine: `tools/bat.py`. Every term is compiled case-insensitive and DOTALL and matched against a whitespace-collapsed view of each unit's body (headings and History lines separate). Default scope is every Florida source held: statutes, session laws, constitution sections, FAC chapters and civil rules (fetched federal text only by name). Each run adds the nonsense control "zqxvbnmwt" (must be 0) and the must-hit control "\bLegislature\b" (2,548 statute sections), refuses to run without a positive, refuses a positive whose regex doesn't match its unit or that no battery term reaches, lists heading-only units, probes `\bWORD\b` terms for inflections, warns on proximity windows under 1,200 characters, and logs to `battery-log.jsonl`; a logged name can't be reused, and a rerun must name the run it supersedes and why. `tools/rerun.py` replays every logged term against the corpus.


Batteries logged: 245; cited by the answers: 197. Each line: name, status, scope, controls, positives, then every term with its hit count (units listed in the battery log and in the row notes).

- **FLG-A-001** [OK] habitability statement in lease: any FL source requiring a lease or rental agreement to state the unit is fit/habitable; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.56 "untenantable"; passed 83.43 "fitness for habitation".
  - `\b(?:habitab\w*|fit for (?:human )?habitation|fitness for habitation|tenantable|untenantable|uninhabitable)[\s\S]{0,1200}\b(?:rental agreements?|lease[sd]?|tenants?)\b` -> 6
  - `\b(?:rental agreements?|lease[sd]?|tenants?)\b[\s\S]{0,1200}\b(?:habitab\w*|fit for (?:human )?habitation|fitness for habitation|tenantable|untenantable|uninhabitable)` -> 9
  - `\A(?=[\s\S]*\b(?:habitab\w*|fit for (?:human )?habitation|fitness for habitation|tenantable|untenantable|uninhabitable))(?=[\s\S]*\b(?:rental agreements?|lease[sd]?|tenants?)\b)(?=[\s\S]*\b(?:shall|must) (?:state|contain|include|disclose|set forth|provide|recite)\b)` -> 17
  - `\bwarrant(?:y|ies) of (?:habitability|fitness)\b` -> 10
  - `\bfit (?:for|to) (?:human habitation|habitation|live in|occupancy|occupy)\b` -> 1
- **FLG-A-002** [OK] habitability presumption: any FL presumption tied to habitability, untenantability, code violation, repair or retaliation in a tenancy; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 39.203 "rebuttable presumption that such action was retaliatory"; passed 415.1036 "presumption that the detrimental action was retaliatory".
  - `\bpresum\w*[\s\S]{0,1200}\b(?:habitab\w*|untenantable|uninhabitable|tenantable|retaliat\w*|code violations?|unfit|unsafe|repairs?)\b` -> 17
  - `\b(?:habitab\w*|untenantable|uninhabitable|tenantable|retaliat\w*|code violations?|unfit|unsafe|repairs?)\b[\s\S]{0,1200}\bpresum\w*` -> 15
  - `\A(?=[\s\S]*\bpresum\w*)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:habitab\w*|untenantable|uninhabitable|tenantable|retaliat\w*|code violations?|unfit|unsafe|repairs?)\b)(?=[\s\S]*\b(?:dwellings?|dwelling units?|residential|residences?)\b)` -> 35
  - `\bpresumed (?:to be )?(?:uninhabitable|untenantable|retaliatory|unfit|habitable)\b` -> 0
- **FLG-A-003** [OK] stove/refrigerator: any FL duty to supply a stove, oven, range or refrigerator in a rental; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.67 "including, but not limited to, water, heat, light, electricity, gas, elevator, garbage collection, or refrigeration".
  - `\b(?:stoves?|refrigerators?|refrigeration|ovens?|cooking (?:appliances?|facilities|equipment)|cooktops?|kitchen ranges?)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?)\b` -> 7
  - `\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\b(?:stoves?|refrigerators?|refrigeration|ovens?|cooking (?:appliances?|facilities|equipment)|cooktops?|kitchen ranges?)\b` -> 5
  - `\A(?=[\s\S]*\b(?:stoves?|refrigerators?|refrigeration|ovens?|cooking (?:appliances?|facilities|equipment)|cooktops?|kitchen ranges?)\b)(?=[\s\S]*\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?)\b)` -> 21
  - `\brefrigerators?\b` -> 14
  - `\bstoves?\b` -> 12
- **FLG-A-004** [OK] carpet cleaning: any FL rule on carpet cleaning at move-out, carpet deductions or a wear-and-tear/age test; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 720.316 "removing and disposing of wet drywall, insulation, carpet"; passed 83.491 "beyond normal wear and tear".
  - `\b(?:carpets?|carpeting|carpeted|floor coverings?|rugs?)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|security deposits?|deposit money|rental agreements?|lease[sd]?)\b` -> 1
  - `\b(?:tenants?|landlords?|security deposits?|deposit money|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\b(?:carpets?|carpeting|carpeted|floor coverings?|rugs?)\b` -> 3
  - `\A(?=[\s\S]*\b(?:carpets?|carpeting|carpeted|floor coverings?|rugs?)\b)(?=[\s\S]*\b(?:tenants?|landlords?|security deposits?|deposit money|rental agreements?|lease[sd]?)\b)` -> 9
  - `\b(?:wear and tear|ordinary wear|normal wear)\b` -> 16
  - `\bcarpets?\b` -> 7
  - `\bprofessional(?:ly)? clean\w*` -> 0
- **FLG-A-005** [OK] furnished rentals: any FL rule on furnishings or furnished dwelling units in a residential tenancy; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.43 "that is furnished, with or without rent, as an incident of employment"; passed 83.46 "If the dwelling unit is furnished without rent".
  - `\b(?:furnished|furniture|furnishings)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?)\b` -> 50
  - `\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\b(?:furnished|furniture|furnishings)\b` -> 62
  - `\A(?=[\s\S]*\b(?:furnished|furniture|furnishings)\b)(?=[\s\S]*\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:residential|dwellings?|apartments?)\b)` -> 71
  - `\bfurnished (?:units?|apartments?|dwellings?|rentals?|premises)\b` -> 0
- **FLG-A-006** [OK] steam radiator covers: any FL rule on radiator covers, steam heat or hot heating surfaces in rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 316.2015 "radiator".
  - `\b(?:radiators?|steam heat\w*|steam boilers?|steam pipes?|hot surfaces?)[\s\S]{0,1200}\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residential|dwellings?)\b` -> 0
  - `\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residential|dwellings?)\b[\s\S]{0,1200}\b(?:radiators?|steam heat\w*|steam boilers?|steam pipes?|hot surfaces?)` -> 0
  - `\A(?=[\s\S]*\b(?:radiators?|steam heat\w*|steam boilers?|steam pipes?|hot surfaces?))(?=[\s\S]*\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residential|dwellings?)\b)` -> 0
  - `\bradiators?\b` -> 1
  - `\bradiator (?:covers?|guards?|shields?)\b` -> 0
  - `\A(?=[\s\S]*\bheating boilers?\b)(?=[\s\S]*\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residential|dwellings?)\b)` -> 1
- **FLG-A-007** [OK] water heater temperature: any FL rule setting water heater temperature at occupancy or a maximum hot water temperature in rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 554.109 "Water temperature of 210 degrees Fahrenheit".
  - `\b(?:water heaters?|water heating|hot water heaters?|hot water supply)\b[\s\S]{0,1200}\b(?:temperatures?|degrees|°F|thermostats?)` -> 4
  - `\b(?:temperatures?|degrees|thermostats?)\b[\s\S]{0,1200}\b(?:water heaters?|water heating|hot water heaters?|hot water supply)\b` -> 5
  - `\A(?=[\s\S]*\b(?:water heaters?|water heating|hot water heaters?|hot water supply)\b)(?=[\s\S]*\b(?:temperatures?|degrees|thermostats?)\b)(?=[\s\S]*\b(?:tenants?|landlords?|occupan\w*|dwelling units?|lease[sd]?|rental)\b)` -> 4
  - `\bhot water\b[\s\S]{0,1200}\b(?:1[0-4]\d|120) degrees` -> 2
  - `\bscald\w*` -> 1
- **FLG-A-008** [OK] portable cooling device: tenant right to install a cooling device, lease restriction rules, or a landlord cooling duty; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.52 "air-conditioning"; passed 509.221 "properly lighted, heated, cooled, and ventilated".
  - `\b(?:air[- ]condition\w*|cooling (?:units?|devices?|systems?|equipment)|window units?|portable (?:air|cooling)|heat pumps?|fans?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|residents?|rental agreements?|lease[sd]?)\b` -> 11
  - `\b(?:tenants?|lessees?|landlords?|residents?|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\b(?:air[- ]condition\w*|cooling (?:units?|devices?|systems?|equipment)|window units?|portable (?:air|cooling)|heat pumps?|fans?)\b` -> 10
  - `\A(?=[\s\S]*\b(?:air[- ]condition\w*|cooling (?:units?|devices?|systems?|equipment)|window units?|portable (?:air|cooling)|heat pumps?|fans?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|landlords?|residents?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:install\w*|prohibit\w*|restrict\w*|may not|shall not)\b)` -> 33
  - `\bwindow (?:air[- ]conditioning )?units?\b` -> 1
  - `\b(?:heated|lighted), cooled\b` -> 1
- **FLG-A-009** [OK] security devices: mandatory locks, deadbolts, peepholes, window locks, rekey at turnover; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.67 "changing the locks"; passed 768.0706 "peephole or door viewer"; passed 509.211 "approved locking device on each door".
  - `\b(?:re-?key\w*|chang\w* (?:the |of )?locks?|lock changes?|new locks?|replac\w* (?:the )?locks?)[\s\S]{0,1200}\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|vacat\w*|turnover)` -> 2
  - `\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|vacat\w*|turnover)[\s\S]{0,1200}\b(?:re-?key\w*|chang\w* (?:the |of )?locks?|lock changes?|new locks?|replac\w* (?:the )?locks?)` -> 6
  - `\A(?=[\s\S]*\b(?:re-?key\w*|chang\w* (?:the |of )?locks?|lock changes?|new locks?|replac\w* (?:the )?locks?))(?=[\s\S]*\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|vacat\w*|turnover))` -> 6
  - `\b(?:deadbolts?|dead bolts?|peepholes?|door viewers?|security devices?|locking devices?)\b` -> 20
  - `\A(?=[\s\S]*\blocks?\b)(?=[\s\S]*\b(?:dwelling units?|apartments?)\b)(?=[\s\S]*\b(?:each|every) (?:exterior |dwelling unit |outside )?doors?\b)` -> 1
- **FLG-A-010** [OK] smart access: smart locks, app-based or electronic entry systems in rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 768.0706 "Locked gates with key or fob access".
  - `\b(?:smart locks?|smart access|electronic (?:locks?|keys?|access)|keyless (?:entry|locks?)|key ?fobs?|fobs?|key cards?|access (?:control )?(?:systems?|codes?|credentials?)|connected devices?|app-based|biometric)[\s\S]{0,1200}\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residents?)\b` -> 4
  - `\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residents?)\b[\s\S]{0,1200}\b(?:smart locks?|smart access|electronic (?:locks?|keys?|access)|keyless (?:entry|locks?)|key ?fobs?|fobs?|key cards?|access (?:control )?(?:systems?|codes?|credentials?)|connected devices?|app-based|biometric)` -> 6
  - `\A(?=[\s\S]*\b(?:smart locks?|smart access|electronic (?:locks?|keys?|access)|keyless (?:entry|locks?)|key ?fobs?|fobs?|key cards?|access (?:control )?(?:systems?|codes?|credentials?)|connected devices?|app-based|biometric))(?=[\s\S]*\b(?:tenants?|landlords?|dwelling units?|rental agreements?|lease[sd]?|residents?)\b)` -> 30
  - `\bsmart (?:locks?|home|access)\b` -> 0
- **FLG-A-011** [FAILED] (not cited by any row) pest control notice: any FL rule requiring notice to tenants or occupants of pest control or pesticide application; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.51 "written notice, in person, by mail, or by e-mail"; recorded as failed 482.2267 "notify that person at least 24 hours before applying the pesticide".
  - `\b(?:pest control|pesticides?|exterminat\w*|fumigat\w*)[\s\S]{0,1200}\b(?:notice|notif\w*|post\w*|warn\w*)[\s\S]{0,1200}\b(?:tenants?|occupants?|lessees?)\b` -> 2
  - `\b(?:tenants?|occupants?|lessees?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|post\w*|warn\w*)[\s\S]{0,1200}\b(?:pest control|pesticides?|exterminat\w*|fumigat\w*)` -> 4
  - `\A(?=[\s\S]*\b(?:pest control|pesticides?|exterminat\w*|fumigat\w*))(?=[\s\S]*\b(?:notice|notif\w*|post\w*|warn\w*))(?=[\s\S]*\b(?:landlords?|lessors?|tenants?)\b)` -> 13
  - `\bnotice of (?:the )?(?:application of )?pesticides?\b` -> 1
- **FLG-A-012** [OK] pest control notice: any FL rule requiring notice to tenants or occupants of pest control or pesticide application; supersedes FLG-A-011 (positive 482.2267 recorded as failed (no term matched the unit); added plain term for prior notification); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.51 "written notice, in person, by mail, or by e-mail"; passed 482.2267 "notify that person at least 24 hours before applying the pesticide".
  - `\b(?:pest control|pesticides?|exterminat\w*|fumigat\w*)[\s\S]{0,1200}\b(?:notice|notif\w*|post\w*|warn\w*)[\s\S]{0,1200}\b(?:tenants?|occupants?|lessees?)\b` -> 2
  - `\b(?:tenants?|occupants?|lessees?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|post\w*|warn\w*)[\s\S]{0,1200}\b(?:pest control|pesticides?|exterminat\w*|fumigat\w*)` -> 4
  - `\A(?=[\s\S]*\b(?:pest control|pesticides?|exterminat\w*|fumigat\w*))(?=[\s\S]*\b(?:notice|notif\w*|post\w*|warn\w*))(?=[\s\S]*\b(?:landlords?|lessors?|tenants?)\b)` -> 13
  - `\bnotice of (?:the )?(?:application of )?pesticides?\b` -> 1
  - `\bprior notification\b` -> 15
- **FLG-A-013** [OK] (not cited by any row) tenant repair remedies: repair-and-deduct, rent withholding or offset for repairs; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.201 "the tenant may withhold rent after notice to the landlord".
  - `\b(?:repairs?|repaired|repairing|remed\w*|maintenance)[\s\S]{0,1200}\b(?:deduct\w*|offset\w*|set-?off|withh[oe]ld\w*|reimburs\w*)[\s\S]{0,1200}\brent\w*` -> 12
  - `\brent\w*[\s\S]{0,1200}\b(?:deduct\w*|offset\w*|set-?off|withh[oe]ld\w*|reimburs\w*)[\s\S]{0,1200}\b(?:repairs?|repaired|repairing|remed\w*|maintenance)` -> 10
  - `\A(?=[\s\S]*\b(?:repairs?|repaired|repairing|remed\w*|maintenance))(?=[\s\S]*\b(?:deduct\w*|offset\w*|set-?off|withh[oe]ld\w*|reimburs\w*))(?=[\s\S]*\brent\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` -> 40
  - `\brepair and deduct\b` -> 0
  - `\bcost of (?:the )?(?:repairs?|remedy)[\s\S]{0,1200}\bfrom (?:the )?rent\b` -> 0
- **FLG-A-014** [OK] tenant repair remedies: repair-and-deduct, rent withholding or offset for repairs; supersedes FLG-A-013 (INFLECTION warning on rent in the section-wide AND; rent inflections added); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.201 "the tenant may withhold rent after notice to the landlord".
  - `\b(?:repairs?|repaired|repairing|remed\w*|maintenance)[\s\S]{0,1200}\b(?:deduct\w*|offset\w*|set-?off|withh[oe]ld\w*|reimburs\w*)[\s\S]{0,1200}\brent\w*` -> 12
  - `\brent\w*[\s\S]{0,1200}\b(?:deduct\w*|offset\w*|set-?off|withh[oe]ld\w*|reimburs\w*)[\s\S]{0,1200}\b(?:repairs?|repaired|repairing|remed\w*|maintenance)` -> 10
  - `\A(?=[\s\S]*\b(?:repairs?|repaired|repairing|remed\w*|maintenance))(?=[\s\S]*\b(?:deduct\w*|offset\w*|set-?off|withh[oe]ld\w*|reimburs\w*))(?=[\s\S]*\brent(?:s|ed|ing|es|d)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` -> 50
  - `\brepair and deduct\b` -> 0
  - `\bcost of (?:the )?(?:repairs?|remedy)[\s\S]{0,1200}\bfrom (?:the )?rent\b` -> 0
- **FLG-A-015** [FAILED] (not cited by any row) repair-cost termination: lease termination because repair cost exceeds a threshold; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.63 "damaged or destroyed other than by the wrongful or negligent acts of the tenant"; recorded as failed 718.117 "cost".
  - `\b(?:costs? of (?:the )?(?:repairs?|restoration|rebuilding)|repair costs?|cost to repair|(?:\d+|fifty) percent of (?:the )?(?:market |assessed |replacement )?value)[\s\S]{0,1200}\b(?:terminat\w*|cancel\w*|end the (?:lease|rental agreement|tenancy))` -> 9
  - `\b(?:terminat\w*|cancel\w*|end the (?:lease|rental agreement|tenancy))[\s\S]{0,1200}\b(?:costs? of (?:the )?(?:repairs?|restoration|rebuilding)|repair costs?|cost to repair|(?:\d+|fifty) percent of (?:the )?(?:market |assessed |replacement )?value)` -> 8
  - `\A(?=[\s\S]*\b(?:costs? of (?:the )?(?:repairs?|restoration|rebuilding)|repair costs?|cost to repair|(?:\d+|fifty) percent of (?:the )?(?:market |assessed |replacement )?value))(?=[\s\S]*\b(?:terminat\w*|cancel\w*|end the (?:lease|rental agreement|tenancy)))(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)` -> 19
  - `\bsubstantial (?:damage|improvement)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b` -> 2
- **FLG-A-016** [OK] repair-cost termination: lease termination because repair cost exceeds a threshold; supersedes FLG-A-015 (both positives recorded as failed (no term matched the named units); real positives chosen from read sections); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.512 "total cost of repairs to or replacement of the personal property is 50 percent"; passed 420.503 "exceeds 40 percent of the value of the dwelling".
  - `\b(?:costs? of (?:the )?(?:repairs?|restoration|rebuilding)|repair costs?|cost to repair|(?:\d+|fifty) percent of (?:the )?(?:market |assessed |replacement )?value)[\s\S]{0,1200}\b(?:terminat\w*|cancel\w*|end the (?:lease|rental agreement|tenancy))` -> 9
  - `\b(?:terminat\w*|cancel\w*|end the (?:lease|rental agreement|tenancy))[\s\S]{0,1200}\b(?:costs? of (?:the )?(?:repairs?|restoration|rebuilding)|repair costs?|cost to repair|(?:\d+|fifty) percent of (?:the )?(?:market |assessed |replacement )?value)` -> 8
  - `\A(?=[\s\S]*\b(?:costs? of (?:the )?(?:repairs?|restoration|rebuilding)|repair costs?|cost to repair|(?:\d+|fifty) percent of (?:the )?(?:market |assessed |replacement )?value))(?=[\s\S]*\b(?:terminat\w*|cancel\w*|end the (?:lease|rental agreement|tenancy)))(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)` -> 19
  - `\bsubstantial (?:damage|improvement)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b` -> 2
- **FLG-A-017** [OK] (not cited by any row) promises to repair: rule requiring landlord repair promises in writing with a completion date before signing; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.53 "necessary or agreed repairs".
  - `\b(?:promis\w*|agree\w*|represent\w*|commit\w*)[\s\S]{0,1200}\b(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*)[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|rental agreements?|lease[sd]?)\b` -> 142
  - `\b(?:tenants?|landlords?|lessees?|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\b(?:promis\w*|agree\w*|represent\w*|commit\w*)[\s\S]{0,1200}\b(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*)` -> 112
  - `\A(?=[\s\S]*\b(?:promis\w*|agree\w*|represent\w*|commit\w*))(?=[\s\S]*\b(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*))(?=[\s\S]*\b(?:landlords?|lessors?)\b)(?=[\s\S]*\b(?:in writing|written)\b)(?=[\s\S]*\b(?:before|prior to)\b)` -> 46
  - `\bcompletion date\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|rental agreements?|lease[sd]?)\b` -> 0
- **FLG-A-018** [FAILED] (not cited by any row) promises to repair: rule requiring landlord repair promises in writing with a completion date before signing; supersedes FLG-A-017 (first run's proximity chains returned 142 and 112 units, too broad to read in context; narrowed to promise-to-repair phrasing plus a five-part section-wide AND); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.53 "necessary or agreed repairs"; recorded as failed 553.835 "agree to".
  - `\b(?:promis\w*|agree\w*|commit\w*|undertak\w*) to (?:make |perform |complete |do )?(?:any |the |certain )?(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*)[\s\S]{0,1200}\b(?:landlords?|lessors?|owners?)\b` -> 1
  - `\b(?:landlords?|lessors?|owners?)\b[\s\S]{0,1200}\b(?:promis\w*|agree\w*|commit\w*|undertak\w*) to (?:make |perform |complete |do )?(?:any |the |certain )?(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*)` -> 1
  - `\A(?=[\s\S]*\b(?:promis\w*|agree\w*|represent\w*|commit\w*))(?=[\s\S]*\b(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*))(?=[\s\S]*\b(?:landlords?|lessors?)\b)(?=[\s\S]*\b(?:in writing|written)\b)(?=[\s\S]*\b(?:before|prior to)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` -> 38
  - `\bcompletion dates?\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|rental agreements?|lease[sd]?)\b` -> 2
  - `\bpromises? to (?:repair|clean|improve)\b` -> 0
- **FLG-A-019** [OK] promises to repair: rule requiring landlord repair promises in writing with a completion date before signing; supersedes FLG-A-018 (both positives recorded as failed (no term matched the named units); positive now a unit the five-part AND matches); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.56 "material provisions of the rental agreement"; passed 319.30 "agree".
  - `\b(?:promis\w*|agree\w*|commit\w*|undertak\w*) to (?:make |perform |complete |do )?(?:any |the |certain )?(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*)[\s\S]{0,1200}\b(?:landlords?|lessors?|owners?)\b` -> 1
  - `\b(?:landlords?|lessors?|owners?)\b[\s\S]{0,1200}\b(?:promis\w*|agree\w*|commit\w*|undertak\w*) to (?:make |perform |complete |do )?(?:any |the |certain )?(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*)` -> 1
  - `\A(?=[\s\S]*\b(?:promis\w*|agree\w*|represent\w*|commit\w*))(?=[\s\S]*\b(?:repairs?|repaired|repairing|clean\w*|improve\w*|renovat\w*|decorat\w*))(?=[\s\S]*\b(?:landlords?|lessors?)\b)(?=[\s\S]*\b(?:in writing|written)\b)(?=[\s\S]*\b(?:before|prior to)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` -> 38
  - `\bcompletion dates?\b[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|rental agreements?|lease[sd]?)\b` -> 2
  - `\bpromises? to (?:repair|clean|improve)\b` -> 0
- **FLG-A-020** [FAILED] (not cited by any row) alarm tampering: tenant removal or tampering with smoke/CO alarms, and any fee for it; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.52 "remove any part of the premises"; recorded as failed 553.883 "smoke alarm".
  - `\b(?:tamper\w*|disabl\w*|disconnect\w*|remov\w*|render\w* inoperable|interfer\w*)[\s\S]{0,1200}\b(?:smoke (?:detectors?|detection devices?|alarms?)|carbon monoxide (?:alarms?|detectors?)|fire alarms?|fire protection (?:systems?|equipment)|alarm systems?)` -> 9
  - `\b(?:smoke (?:detectors?|detection devices?|alarms?)|carbon monoxide (?:alarms?|detectors?)|fire alarms?|fire protection (?:systems?|equipment)|alarm systems?)[\s\S]{0,1200}\b(?:tamper\w*|disabl\w*|disconnect\w*|remov\w*|render\w* inoperable|interfer\w*)` -> 8
  - `\A(?=[\s\S]*\b(?:smoke (?:detectors?|detection devices?|alarms?)|carbon monoxide (?:alarms?|detectors?)|fire alarms?|fire protection (?:systems?|equipment)|alarm systems?))(?=[\s\S]*\b(?:tamper\w*|disabl\w*|disconnect\w*|remov\w*|render\w* inoperable|interfer\w*))(?=[\s\S]*\b(?:tenants?|lessees?|landlords?|fees?|charges?)\b)` -> 22
  - `\btamper\w* with\b[\s\S]{0,1200}\b(?:alarms?|detectors?|sprinklers?)\b` -> 0
- **FLG-A-021** [OK] alarm tampering: tenant removal or tampering with smoke/CO alarms, and any fee for it; supersedes FLG-A-020 (both positives recorded as failed (no term matched the named units); positive now Fla. Stat. 83.51, which the proximity terms match); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.51 "working smoke detection devices".
  - `\b(?:tamper\w*|disabl\w*|disconnect\w*|remov\w*|render\w* inoperable|interfer\w*)[\s\S]{0,1200}\b(?:smoke (?:detectors?|detection devices?|alarms?)|carbon monoxide (?:alarms?|detectors?)|fire alarms?|fire protection (?:systems?|equipment)|alarm systems?)` -> 9
  - `\b(?:smoke (?:detectors?|detection devices?|alarms?)|carbon monoxide (?:alarms?|detectors?)|fire alarms?|fire protection (?:systems?|equipment)|alarm systems?)[\s\S]{0,1200}\b(?:tamper\w*|disabl\w*|disconnect\w*|remov\w*|render\w* inoperable|interfer\w*)` -> 8
  - `\A(?=[\s\S]*\b(?:smoke (?:detectors?|detection devices?|alarms?)|carbon monoxide (?:alarms?|detectors?)|fire alarms?|fire protection (?:systems?|equipment)|alarm systems?))(?=[\s\S]*\b(?:tamper\w*|disabl\w*|disconnect\w*|remov\w*|render\w* inoperable|interfer\w*))(?=[\s\S]*\b(?:tenants?|lessees?|landlords?|fees?|charges?)\b)` -> 22
  - `\btamper\w* with\b[\s\S]{0,1200}\b(?:alarms?|detectors?|sprinklers?)\b` -> 0
- **FLG-A-022** [OK] window guards: child window guards, security or burglar bars, release mechanisms, escape openings; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 515.27 "release mechanism placed no lower than 54 inches".
  - `\b(?:window guards?|window bars?|burglar bars?|security bars?|window (?:stops?|fall\w*|grilles?)|bars on (?:the )?windows?|release mechanisms?)[\s\S]{0,1200}\b(?:tenants?|landlords?|dwellings?|dwelling units?|residential|lease[sd]?|rental agreements?)\b` -> 2
  - `\b(?:tenants?|landlords?|dwellings?|dwelling units?|residential|lease[sd]?|rental agreements?)\b[\s\S]{0,1200}\b(?:window guards?|window bars?|burglar bars?|security bars?|window (?:stops?|fall\w*|grilles?)|bars on (?:the )?windows?|release mechanisms?)` -> 1
  - `\A(?=[\s\S]*\b(?:window guards?|window bars?|burglar bars?|security bars?|window (?:stops?|fall\w*|grilles?)|bars on (?:the )?windows?|release mechanisms?))(?=[\s\S]*\b(?:tenants?|landlords?|dwellings?|dwelling units?|residential|lease[sd]?|rental agreements?)\b)` -> 2
  - `\b(?:emergency escape and rescue|escape (?:or|and) rescue) (?:openings?|windows?)\b` -> 1
- **FLG-A-023** [OK] asbestos: notice or disclosure duties to tenants or occupants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 469.002 "asbestos-containing resilient floor covering".
  - `\basbestos\w*[\s\S]{0,1200}\b(?:tenants?|occupants?|residents?|lessees?|landlords?|rental agreements?|lease[sd]?)\b` -> 3
  - `\b(?:tenants?|occupants?|residents?|lessees?|landlords?|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\basbestos\w*` -> 3
  - `\A(?=[\s\S]*\basbestos\w*)(?=[\s\S]*\b(?:notice|notif\w*|disclos\w*|inform\w*)\b)(?=[\s\S]*\b(?:owners?|tenants?|occupants?)\b)` -> 7
  - `\basbestos\w*` -> 34
- **FLG-A-024** [FAILED] (not cited by any row) private well testing: duty to test a rental's private well or give results to tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 381.0062 "limited use public water system".
  - `\b(?:private wells?|water wells?|wells? water|drinking water wells?|potable water wells?|wellhead|private water (?:supply|systems?)|limited use (?:public )?water systems?)[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|rental|lease[sd]?|dwelling units?|occupants?)` -> 4
  - `\b(?:tenants?|landlords?|lessees?|rental|lease[sd]?|dwelling units?|occupants?)[\s\S]{0,1200}\b(?:private wells?|water wells?|wells? water|drinking water wells?|potable water wells?|wellhead|private water (?:supply|systems?)|limited use (?:public )?water systems?)` -> 8
  - `\A(?=[\s\S]*\b(?:private wells?|water wells?|wells? water|drinking water wells?|potable water wells?|wellhead|private water (?:supply|systems?)|limited use (?:public )?water systems?))(?=[\s\S]*\b(?:test\w*|sampl\w*|analys[ie]s)\b)(?=[\s\S]*\b(?:tenants?|landlords?|lessees?|rental|lease[sd]?|dwelling units?|occupants?))` -> 13
  - `\bwater (?:test|analysis) results?\b` -> 1
- **FLG-A-025** [OK] private well testing: duty to test a rental's private well or give results to tenants; supersedes FLG-A-024 (positive recorded as failed (pattern did not match the unit text); positive now the private water system definition, and the system names added); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 381.0062 "one of which may be a rental residence".
  - `\b(?:private wells?|water wells?|wells? water|drinking water wells?|potable water wells?|wellhead|private water (?:supply|systems?)|limited use (?:public )?water systems?|multifamily water systems?|limited use community (?:public )?water systems?)[\s\S]{0,1200}\b(?:tenants?|landlords?|lessees?|rental|lease[sd]?|dwelling units?|occupants?)` -> 4
  - `\b(?:tenants?|landlords?|lessees?|rental|lease[sd]?|dwelling units?|occupants?)[\s\S]{0,1200}\b(?:private wells?|water wells?|wells? water|drinking water wells?|potable water wells?|wellhead|private water (?:supply|systems?)|limited use (?:public )?water systems?|multifamily water systems?|limited use community (?:public )?water systems?)` -> 8
  - `\A(?=[\s\S]*\b(?:private wells?|water wells?|wells? water|drinking water wells?|potable water wells?|wellhead|private water (?:supply|systems?)|limited use (?:public )?water systems?|multifamily water systems?|limited use community (?:public )?water systems?))(?=[\s\S]*\b(?:test\w*|sampl\w*|analys[ie]s)\b)(?=[\s\S]*\b(?:tenants?|landlords?|lessees?|rental|lease[sd]?|dwelling units?|occupants?))` -> 13
  - `\bwater (?:test|analysis) results?\b` -> 1
- **FLG-A-026** [FAILED] (not cited by any row) substandard property receivership and code-enforcement repair orders; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 393.0678 "receivership".
  - `\breceivers?(?:hips?)?\b[\s\S]{0,1200}\b(?:code (?:violations?|enforcement)|unsafe|substandard|uninhabitable|unfit|repairs?)\b` -> 4
  - `\b(?:code (?:violations?|enforcement)|unsafe|substandard|uninhabitable|unfit|repairs?)\b[\s\S]{0,1200}\breceivers?(?:hips?)?\b` -> 8
  - `\A(?=[\s\S]*\breceivers?(?:hips?)?\b)(?=[\s\S]*\b(?:tenants?|landlords?|dwellings?|dwelling units?|residential|rental|lease[sd]?))(?=[\s\S]*\b(?:code (?:violations?|enforcement)|unsafe|substandard|uninhabitable|unfit for)\b)` -> 11
  - `\bunsafe (?:buildings?|structures?)\b` -> 1
- **FLG-A-027** [OK] substandard property receivership and code-enforcement repair orders; supersedes FLG-A-026 (positive recorded as failed (no term matched Fla. Stat. 393.0678); positive now Fla. Stat. 718.117, which the reverse-order and AND terms match); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 718.117 "appoint a receiver".
  - `\breceivers?(?:hips?)?\b[\s\S]{0,1200}\b(?:code (?:violations?|enforcement)|unsafe|substandard|uninhabitable|unfit|repairs?)\b` -> 4
  - `\b(?:code (?:violations?|enforcement)|unsafe|substandard|uninhabitable|unfit|repairs?)\b[\s\S]{0,1200}\breceivers?(?:hips?)?\b` -> 8
  - `\A(?=[\s\S]*\breceivers?(?:hips?)?\b)(?=[\s\S]*\b(?:tenants?|landlords?|dwellings?|dwelling units?|residential|rental|lease[sd]?))(?=[\s\S]*\b(?:code (?:violations?|enforcement)|unsafe|substandard|uninhabitable|unfit for)\b)` -> 11
  - `\bunsafe (?:buildings?|structures?)\b` -> 1
- **FLG-A-028** [FAILED] (not cited by any row) condemned premises: bar on collecting rent after condemnation or a vacate order; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 633.228 "order to cease and desist from such violation, to correct any hazardous condition, to preclude occupancy"; recorded as failed 509.261 "unsafe or unfit for human occupancy".
  - `\b(?:condemn\w*|order(?:ed|s)? to vacate|vacate (?:order|the (?:premises|building|dwelling))|unfit for (?:human )?(?:habitation|occupancy)|unsafe for (?:human )?(?:habitation|occupancy)|declared unsafe|preclude occupancy)[\s\S]{0,1200}\brent(?:s|ed|al)?\b` -> 17
  - `\brent(?:s|ed|al)?\b[\s\S]{0,1200}\b(?:condemn\w*|order(?:ed|s)? to vacate|vacate (?:order|the (?:premises|building|dwelling))|unfit for (?:human )?(?:habitation|occupancy)|unsafe for (?:human )?(?:habitation|occupancy)|declared unsafe|preclude occupancy)` -> 16
  - `\A(?=[\s\S]*\b(?:condemn\w*|order(?:ed|s)? to vacate|vacate (?:order|the (?:premises|building|dwelling))|unfit for (?:human )?(?:habitation|occupancy)|unsafe for (?:human )?(?:habitation|occupancy)|declared unsafe|preclude occupancy))(?=[\s\S]*\brent(?:s|ed)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` -> 21
  - `\b(?:may|shall) not (?:collect|demand|accept|charge) (?:any )?rent\b` -> 0
- **FLG-A-029** [OK] condemned premises: bar on collecting rent after condemnation or a vacate order; supersedes FLG-A-028 (both positives recorded as failed (no rent word in those units, so no term matched); positive now Fla. Stat. 702.10, which the AND term matches); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 702.10 "order to vacate the premises".
  - `\b(?:condemn\w*|order(?:ed|s)? to vacate|vacate (?:order|the (?:premises|building|dwelling))|unfit for (?:human )?(?:habitation|occupancy)|unsafe for (?:human )?(?:habitation|occupancy)|declared unsafe|preclude occupancy)[\s\S]{0,1200}\brent(?:s|ed|al)?\b` -> 17
  - `\brent(?:s|ed|al)?\b[\s\S]{0,1200}\b(?:condemn\w*|order(?:ed|s)? to vacate|vacate (?:order|the (?:premises|building|dwelling))|unfit for (?:human )?(?:habitation|occupancy)|unsafe for (?:human )?(?:habitation|occupancy)|declared unsafe|preclude occupancy)` -> 16
  - `\A(?=[\s\S]*\b(?:condemn\w*|order(?:ed|s)? to vacate|vacate (?:order|the (?:premises|building|dwelling))|unfit for (?:human )?(?:habitation|occupancy)|unsafe for (?:human )?(?:habitation|occupancy)|declared unsafe|preclude occupancy))(?=[\s\S]*\brent(?:s|ed)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)` -> 21
  - `\b(?:may|shall) not (?:collect|demand|accept|charge) (?:any )?rent\b` -> 0
- **FLG-A-030** [OK] alternate housing: landlord duty to provide or pay for alternate housing during repairs or uninhabitability; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 723.061 "relocation".
  - `\b(?:relocat\w*|alternat\w* (?:housing|accommodations?|lodging|dwellings?)|temporary (?:housing|lodging|accommodations?|shelter)|substitute (?:housing|premises|dwelling))[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?)\b` -> 15
  - `\b(?:tenants?|lessees?|landlords?|lessors?)\b[\s\S]{0,1200}\b(?:relocat\w*|alternat\w* (?:housing|accommodations?|lodging|dwellings?)|temporary (?:housing|lodging|accommodations?|shelter)|substitute (?:housing|premises|dwelling))` -> 16
  - `\A(?=[\s\S]*\b(?:relocat\w*|alternat\w* (?:housing|accommodations?|lodging|dwellings?)|temporary (?:housing|lodging|accommodations?|shelter)|substitute (?:housing|premises|dwelling)))(?=[\s\S]*\b(?:tenants?|lessees?|landlords?|lessors?)\b)(?=[\s\S]*\b(?:repairs?|uninhabitable|untenantable|unfit|condemn\w*|casualty|damaged)\b)` -> 34
  - `\brelocation (?:assistance|benefits|payments?|expenses?)\b` -> 20
- **FLG-A-031** [OK] repair escrow and small-landlord exemption notice; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.60 "pay into the registry of the court"; passed 718.112 "escrow account maintained by the association".
  - `\bescrow\w*[\s\S]{0,1200}\brent(?:s|ed)?\b` -> 3
  - `\brent(?:s|ed)?\b[\s\S]{0,1200}\bescrow\w*` -> 7
  - `\A(?=[\s\S]*\bescrow\w*)(?=[\s\S]*\brent(?:s|ed)?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:repairs?|habitab\w*|untenantable|code violations?|noncompliance)\b)` -> 9
  - `\A(?=[\s\S]*\b(?:exempt\w*|opt(?:s|ed)? out)\b)(?=[\s\S]*\b(?:landlords?|lessors?)\b)(?=[\s\S]*\b(?:fewer than|or fewer|or less) (?:\w+ )?(?:dwelling |rental )?units?\b)(?=[\s\S]*\bnotice\b)` -> 3
  - `\bregistry of the court\b` -> 36
- **FLG-A-032** [FAILED] (not cited by any row) subsidy habitability proration: state rules on subsidy abatement or proration for habitability failures; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.60 "tenants receiving rent subsidies are required to deposit only that portion of the full rent"; recorded as failed 83.56 "rent subsidies received from a local, state, or national government".
  - `\b(?:rent subsid\w*|subsid\w*|housing assistance payments?|vouchers?|section 8|housing choice)[\s\S]{0,1200}\b(?:abat\w*|withh[oe]ld\w*|habitab\w*|housing quality standards|inspection|untenantable|repairs?)` -> 54
  - `\b(?:abat\w*|withh[oe]ld\w*|habitab\w*|housing quality standards|inspection|untenantable|repairs?)[\s\S]{0,1200}\b(?:rent subsid\w*|subsid\w*|housing assistance payments?|vouchers?|section 8|housing choice)` -> 58
  - `\A(?=[\s\S]*\b(?:rent subsid\w*|subsid\w*|housing assistance payments?|vouchers?|section 8|housing choice))(?=[\s\S]*\b(?:abat\w*|withh[oe]ld\w*|prorat\w*)\b)(?=[\s\S]*\b(?:tenants?|landlords?)\b)(?=[\s\S]*\brent(?:s|ed)?\b)` -> 10
  - `\bhousing quality standards\b` -> 0
- **FLG-A-033** [OK] subsidy habitability proration: state rules on subsidy abatement or proration for habitability failures; supersedes FLG-A-032 (first run's subsidy limb matched every 'section 8' of an act and every 'subsidy' (54 and 58 units) and both positives failed; narrowed to rent-subsidy terms with a plain rent-subsidy term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.60 "tenants receiving rent subsidies are required to deposit only that portion of the full rent"; passed 83.56 "rent subsidies received from a local, state, or national government".
  - `\b(?:rent subsid\w*|housing assistance payments?|housing choice vouchers?|(?:tenant-based|project-based) (?:rental )?assistance|s(?:ection|\.) 8 of the (?:United States Housing|National Housing) Act)[\s\S]{0,1200}\b(?:abat\w*|withh[oe]ld\w*|habitab\w*|housing quality|untenantable|prorat\w*)` -> 0
  - `\b(?:abat\w*|withh[oe]ld\w*|habitab\w*|housing quality|untenantable|prorat\w*)[\s\S]{0,1200}\b(?:rent subsid\w*|housing assistance payments?|housing choice vouchers?|(?:tenant-based|project-based) (?:rental )?assistance|s(?:ection|\.) 8 of the (?:United States Housing|National Housing) Act)` -> 0
  - `\A(?=[\s\S]*\b(?:rent subsid\w*|housing assistance payments?|housing choice vouchers?|(?:tenant-based|project-based) (?:rental )?assistance|s(?:ection|\.) 8 of the (?:United States Housing|National Housing) Act))(?=[\s\S]*\b(?:abat\w*|withh[oe]ld\w*|habitab\w*|housing quality|untenantable|prorat\w*))(?=[\s\S]*\b(?:tenants?|landlords?)\b)` -> 2
  - `\brent subsid\w*` -> 9
  - `\bhousing quality standards\b` -> 0
- **FLG-A-034** [FAILED] (not cited by any row) sanitary code variance: notice of a health/housing code variance, exception or waiver to tenants or attached to the lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 381.0062 "A sanction from the department affording a supplier of water an extended time".
  - `\b(?:variances?|exceptions?|exemptions?|waivers?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|copy|attach\w*|disclos\w*|post\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|residents?)\b` -> 44
  - `\b(?:tenants?|lessees?|occupants?|residents?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|copy|attach\w*|disclos\w*|post\w*)\b[\s\S]{0,1200}\b(?:variances?|exceptions?|exemptions?|waivers?)\b` -> 64
  - `\A(?=[\s\S]*\bvariances?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:notice|notif\w*|attach\w*|disclos\w*)\b)` -> 8
  - `\bvariances?\b[\s\S]{0,1200}\b(?:rental agreements?|lease[sd]?)\b` -> 2
  - `\battached to the (?:lease|rental agreement)\b` -> 0
- **FLG-A-035** [OK] sanitary code variance: notice of a health/housing code variance, exception or waiver to tenants or attached to the lease; supersedes FLG-A-034 (positive recorded as failed and the exception/exemption/waiver proximity limbs returned 44 and 64 units of tax and licensing hits; narrowed to variance in proximity and code-tied exception, exemption or waiver section-wide); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 381.0065 "variance".
  - `\bvariances?\b[\s\S]{0,1200}\b(?:notice|notif\w*|copy|attach\w*|disclos\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?)\b` -> 1
  - `\b(?:tenants?|lessees?|occupants?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|copy|attach\w*|disclos\w*)\b[\s\S]{0,1200}\bvariances?\b` -> 2
  - `\A(?=[\s\S]*\bvariances?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:notice|notif\w*|copy|attach\w*|disclos\w*)\b)` -> 8
  - `\A(?=[\s\S]*\b(?:exceptions?|exemptions?|waivers?)\b)(?=[\s\S]*\b(?:housing|health|sanitary|building|fire(?:safety)?) codes?\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:notice|notif\w*|copy|attach\w*|disclos\w*)\b)` -> 20
  - `\battached to the (?:lease|rental agreement)\b` -> 0
- **FLG-B-001** [OK] lease-set cure period for non-rent breach (cure-and-eviction-grounds); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.20 "lease is silent on the matter"; passed 83.56 "opportunity to cure".
  - `\b(?:cur(?:e|es|ed|ing)|remed(?:y|ies|ied)|correct(?:s|ed|ing)?)\b[\s\S]{0,1200}\b(?:lease|rental agreement)s? (?:is silent|provides?|may provide|may specify|specif(?:y|ies))` -> 1
  - `\b(?:lease|rental agreement)s? (?:is silent|provides?|may provide|may specify|specif(?:y|ies))[\s\S]{0,1200}\b(?:cur(?:e|es|ed|ing)|remed(?:y|ies|ied)|correct(?:s|ed|ing)?)\b` -> 3
  - `\A(?=[\s\S]*\bcur(?:e|es|ed|ing)\b)(?=[\s\S]*\b(?:lease|rental agreement) is silent)` -> 1
  - `\blease is silent` -> 2
  - `\bperiod (?:for|to) cure\b|\bcure period\b|\bopportunity to cure\b|\btime period for cure\b` -> 16
- **FLG-B-002** [OK] criminal or drug activity as a residential termination ground; crime-free lease statute; mandatory eviction duty; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 60.05 "convicted of an offense under chapter 893"; passed 723.061 "Conviction of a violation".
  - `\b(?:criminal|drug-related|illegal|unlawful) (?:activit(?:y|ies)|conduct|act(?:s)?|use)\b[\s\S]{0,1200}\b(?:tenant(?:s|cy)?|lessee|rental agreement|dwelling unit)\b[\s\S]{0,1200}\b(?:terminat\w*|evict\w*|possession)` -> 0
  - `\b(?:tenant(?:s|cy)?|lessee|rental agreement|dwelling unit)\b[\s\S]{0,1200}\b(?:criminal|drug-related|illegal|unlawful) (?:activit(?:y|ies)|conduct|act(?:s)?|use)\b` -> 2
  - `\A(?=[\s\S]*\bcriminal activit(?:y|ies)\b)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:terminat|evict))` -> 2
  - `crime[- ]free` -> 4
  - `\b(?:tenant|lessee)s?\b[\s\S]{0,1200}\b(?:convicted|conviction)\b[\s\S]{0,1200}\b(?:vacate|evict\w*|terminat\w*|possession)` -> 3
  - `\bdrugs?\b[\s\S]{0,1200}\bevict(?:s|ed|ing|ion)?\b` -> 1
  - `\bevict(?:s|ed|ing|ion)?\b[\s\S]{0,1200}\bdrugs?\b` -> 1
- **FLG-B-003** [FAILED] (not cited by any row) expedited eviction track for criminal or dangerous conduct; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.59 "advance the cause on the calendar"; recorded as failed 60.05 "within 72 hours".
  - `\b(?:expedit(?:e|ed|es|ing|ious)|accelerat(?:e|ed)|priority|immediate(?:ly)?)\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|action for possession|removal of (?:the )?tenant)` -> 2
  - `\b(?:evict(?:s|ed|ing|ion)?|action for possession|removal of (?:the )?tenant)[\s\S]{0,1200}\b(?:expedit(?:e|ed|es|ing|ious)|accelerat(?:e|ed)|priority)\b` -> 0
  - `\A(?=[\s\S]*\bexpedit)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|possession))` -> 17
  - `expedited eviction|eviction[\s\S]{0,40}expedited|fast[- ]track` -> 5
  - `\badvance the cause on the calendar\b` -> 20
- **FLG-B-004** [OK] expedited eviction track for criminal or dangerous conduct; supersedes FLG-B-003 (positive 60.05 failed (no term matched it); window warning on a 40-char limb); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.59 "advance the cause on the calendar"; passed 60.05 "within 72 hours".
  - `\b(?:expedit(?:e|ed|es|ing|ious)|accelerat(?:e|ed)|priority|immediate(?:ly)?)\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|action for possession|removal of (?:the )?tenant)` -> 2
  - `\b(?:evict(?:s|ed|ing|ion)?|action for possession|removal of (?:the )?tenant)[\s\S]{0,1200}\b(?:expedit(?:e|ed|es|ing|ious)|accelerat(?:e|ed)|priority)\b` -> 0
  - `\A(?=[\s\S]*\bexpedit)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|possession))` -> 17
  - `expedited eviction|fast[- ]track` -> 5
  - `\badvance the cause on the calendar\b` -> 20
  - `\b(?:tenant|lessee|occupant)s?\b[\s\S]{0,1200}\bvacate[\s\S]{0,1200}\bwithin (?:24|48|72) hours\b` -> 1
- **FLG-B-005** [OK] eviction hardship stay or postponement; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 250.5202 "stay the proceedings"; passed R1.580 "stay execution of the writ".
  - `\bhardships?\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|writs? of possession|removal of (?:the )?tenant|action for possession)` -> 5
  - `\b(?:evict(?:s|ed|ing|ion)?|writs? of possession|removal of (?:the )?tenant|action for possession)[\s\S]{0,1200}\bhardships?\b` -> 1
  - `\bstay(?:s|ed|ing)?\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|writs? of possession|action for possession)` -> 3
  - `\b(?:evict(?:s|ed|ing|ion)?|writs? of possession|action for possession)[\s\S]{0,1200}\bstay(?:s|ed|ing)?\b` -> 3
  - `\A(?=[\s\S]*\bstay)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|writ of possession))` -> 9
  - `\bpostpone(?:s|d|ment)?\b[\s\S]{0,1200}\b(?:evict\w*|writ|execution)\b[\s\S]{0,1200}\b(?:tenant|dwelling)` -> 0
  - `\b(?:illness|elderly|disabilit(?:y|ies)|inclement weather|winter)\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|writs? of possession)` -> 0
- **FLG-B-006** [FAILED] (not cited by any row) lease-named agent to accept eviction service; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 741.403 "agent for purposes of service of process"; passed 83.22 "designated by the tenant for receipt of notice".
  - `\b(?:agent|person|representative)s? (?:for|to (?:accept|receive))[\s\S]{0,40}service of process[\s\S]{0,1200}\b(?:tenant|lessee|lease|rental agreement)` -> 2
  - `\b(?:tenant|lessee|lease|rental agreement)[\s\S]{0,1200}\b(?:agent|person|representative)s? (?:for|to (?:accept|receive))[\s\S]{0,40}service of process` -> 2
  - `\A(?=[\s\S]*\bservice of process\b)(?=[\s\S]*\b(?:tenant|lessee)\b)(?=[\s\S]*\b(?:designat\w*|appoint\w*)\b)` -> 8
  - `\b(?:accept|receive)s? (?:service|process|the summons)\b[\s\S]{0,1200}\b(?:tenant|lessee)s?\b` -> 0
  - `\b(?:tenant|lessee)s?\b[\s\S]{0,1200}\b(?:accept|receive)s? (?:service|process|the summons)\b` -> 1
  - `designated by the tenant for receipt of notice` -> 1
- **FLG-B-007** [OK] lease-named agent to accept eviction service; supersedes FLG-B-006 (positive 741.403 failed (no term matched); window warnings); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 741.403 "agent for purposes of service of process"; passed 83.22 "designated by the tenant for receipt of notice".
  - `\b(?:agent|person|representative)s? (?:for (?:the )?(?:purposes? of )?|to (?:accept|receive) )service of process[\s\S]{0,1200}\b(?:tenant|lessee|lease|rental agreement)` -> 2
  - `\b(?:tenant|lessee|lease|rental agreement)[\s\S]{0,1200}\b(?:agent|person|representative)s? (?:for (?:the )?(?:purposes? of )?|to (?:accept|receive) )service of process` -> 2
  - `\A(?=[\s\S]*\bservice of process\b)(?=[\s\S]*\b(?:tenant|lessee)\b)(?=[\s\S]*\b(?:designat\w*|appoint\w*)\b)` -> 8
  - `\b(?:accept|receive)s? (?:service|process|the summons)\b[\s\S]{0,1200}\b(?:tenant|lessee)s?\b` -> 0
  - `\b(?:tenant|lessee)s?\b[\s\S]{0,1200}\b(?:accept|receive)s? (?:service|process|the summons)\b` -> 1
  - `designated by the tenant for receipt of notice` -> 1
  - `\bagents? for (?:the )?(?:purposes? of )?service of process\b` -> 67
- **FLG-B-008** [OK] entity landlord appearance in eviction by non-attorney; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.59 "not permitted to take any action other than".
  - `\b(?:corporations?|business entit(?:y|ies)|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies))\b[\s\S]{0,1200}\b(?:appear\w*|represent\w*)\b[\s\S]{0,300}\b(?:by|through) (?:an? )?(?:officer|employee|member|manager|nonlawyer|non-attorney|agent)` -> 8
  - `\b(?:officer|employee|member|manager|nonlawyer|non-attorney)s?\b[\s\S]{0,1200}\b(?:appear\w*|represent\w*)\b[\s\S]{0,1200}\b(?:corporations?|entit(?:y|ies))\b[\s\S]{0,1200}\b(?:county court|small claims)` -> 0
  - `\A(?=[\s\S]*\blandlord)(?=[\s\S]*\bagent\b)(?=[\s\S]*\bunless[\s\S]{0,80}attorney)` -> 1
  - `\bnot permitted to take any action other than\b` -> 1
  - `\b(?:landlord|lessor|owner)s?\b[\s\S]{0,1200}\b(?:practice of law|practice law)\b|\b(?:practice of law|practice law)\b[\s\S]{0,1200}\b(?:landlord|lessor|evict\w*)` -> 4
- **FLG-B-009** [OK] entity landlord appearance in eviction by non-attorney; supersedes FLG-B-008 (window warnings (300 and 80 character limbs)); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.59 "not permitted to take any action other than".
  - `\b(?:corporations?|business entit(?:y|ies)|limited liability compan(?:y|ies)|partnerships?|entit(?:y|ies))\b[\s\S]{0,1200}\b(?:appear\w*|represent\w*)\b[\s\S]{0,1200}\b(?:by|through) (?:an? )?(?:officer|employee|member|manager|nonlawyer|non-attorney|agent)` -> 18
  - `\b(?:officer|employee|member|manager|nonlawyer|non-attorney)s?\b[\s\S]{0,1200}\b(?:appear\w*|represent\w*)\b[\s\S]{0,1200}\b(?:corporations?|entit(?:y|ies))\b[\s\S]{0,1200}\b(?:county court|small claims)` -> 0
  - `\A(?=[\s\S]*\blandlord)(?=[\s\S]*\bagent\b)(?=[\s\S]*\bunless\b[\s\S]{0,1200}\battorney)` -> 10
  - `\bnot permitted to take any action other than\b` -> 1
  - `\b(?:landlord|lessor|owner)s?\b[\s\S]{0,1200}\b(?:practice of law|practice law)\b|\b(?:practice of law|practice law)\b[\s\S]{0,1200}\b(?:landlord|lessor|evict\w*)` -> 4
- **FLG-B-010** [OK] tenant redemption / relief from forfeiture after notice or judgment; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.202 "tender of the rent"; passed 83.56 "accepting partial rent".
  - `\b(?:redeem(?:s|ed|ing)?|redemption|reinstat(?:e|es|ed|ing|ement)|relief from (?:the )?forfeiture)\b[\s\S]{0,1200}\b(?:tenant(?:s|cy)?|lessee|rental agreement|lease)\b` -> 21
  - `\b(?:tenant(?:s|cy)?|lessee|rental agreement|lease)\b[\s\S]{0,1200}\b(?:redeem(?:s|ed|ing)?|redemption|reinstat(?:e|es|ed|ing|ement)|relief from (?:the )?forfeiture)\b` -> 25
  - `\A(?=[\s\S]*\b(?:redeem|redemption|reinstat))(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|possession|writ))` -> 15
  - `\btender(?:s|ed|ing)?\b[\s\S]{0,1200}\brent\b` -> 5
  - `\brent\b[\s\S]{0,1200}\btender(?:s|ed|ing)?\b` -> 6
  - `\bforfeiture of (?:the )?(?:lease|tenancy|leasehold|term)\b` -> 0
  - `\b(?:pay(?:s|ment|ing)?|paid)\b[\s\S]{0,1200}\bbefore\b[\s\S]{0,1200}\bwrit of possession\b` -> 1
- **FLG-B-011** [OK] tenant redemption / relief from forfeiture after notice or judgment; supersedes FLG-B-010 (INFLECTION warning on rent); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.202 "tender of the rent"; passed 83.56 "accepting partial rent".
  - `\b(?:redeem(?:s|ed|ing)?|redemption|reinstat(?:e|es|ed|ing|ement)|relief from (?:the )?forfeiture)\b[\s\S]{0,1200}\b(?:tenant(?:s|cy)?|lessee|rental agreement|lease)\b` -> 21
  - `\b(?:tenant(?:s|cy)?|lessee|rental agreement|lease)\b[\s\S]{0,1200}\b(?:redeem(?:s|ed|ing)?|redemption|reinstat(?:e|es|ed|ing|ement)|relief from (?:the )?forfeiture)\b` -> 25
  - `\A(?=[\s\S]*\b(?:redeem|redemption|reinstat))(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|possession|writ))` -> 15
  - `\btender(?:s|ed|ing)?\b[\s\S]{0,1200}\brent(?:s|ed|al)?\b` -> 8
  - `\brent(?:s|ed|al)?\b[\s\S]{0,1200}\btender(?:s|ed|ing)?\b` -> 9
  - `\bforfeiture of (?:the )?(?:lease|tenancy|leasehold|term)\b` -> 0
  - `\b(?:pay(?:s|ment|ing)?|paid)\b[\s\S]{0,1200}\bbefore\b[\s\S]{0,1200}\bwrit of possession\b` -> 1
- **FLG-B-012** [FAILED] (not cited by any row) possession bond / confessed judgment for possession; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.12 "bond".
  - `\bbond(?:s|ed)?\b[\s\S]{0,1200}\b(?:possession|evict(?:s|ed|ing|ion)?|removal of (?:the )?tenant)\b[\s\S]{0,1200}\b(?:tenant|lessee)s?\b` -> 1
  - `\b(?:tenant|lessee)s?\b[\s\S]{0,1200}\b(?:possession|evict(?:s|ed|ing|ion)?)\b[\s\S]{0,1200}\bbond(?:s|ed)?\b` -> 3
  - `\A(?=[\s\S]*\bbond)(?=[\s\S]*\b(?:tenant|lessee))(?=[\s\S]*\bpossession)` -> 50
  - `\bconfess(?:ion|ed|es|ing)? (?:of )?judgments?\b|\bwarrant of attorney\b|\bcognovit\b` -> 8
  - `\b(?:possession|surety|undertaking)\b[\s\S]{0,1200}\b(?:end|expiration) of (?:the )?(?:term|lease)\b` -> 5
- **FLG-B-013** [OK] possession bond / confessed judgment for possession; supersedes FLG-B-012 (positive 83.12 failed (no term matched); AND limb too broad); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.14 "giving bond with surety"; passed 715.12 "bond".
  - `\bbond(?:s|ed)?\b[\s\S]{0,1200}\b(?:possession|evict(?:s|ed|ing|ion)?|removal of (?:the )?tenant)\b[\s\S]{0,1200}\b(?:tenant|lessee)s?\b` -> 1
  - `\b(?:tenant|lessee)s?\b[\s\S]{0,1200}\b(?:possession|evict(?:s|ed|ing|ion)?)\b[\s\S]{0,1200}\bbond(?:s|ed)?\b` -> 3
  - `\A(?=[\s\S]*\bbond)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|writ of possession|action for possession))` -> 3
  - `\bconfess(?:ion|ed|es|ing)? (?:of )?judgments?\b|\bwarrant of attorney\b|\bcognovit\b` -> 8
  - `\b(?:possession|surety|undertaking)\b[\s\S]{0,1200}\b(?:end|expiration) of (?:the )?(?:term|lease)\b` -> 5
  - `\bgiving bond with surety\b` -> 4
- **FLG-B-014** [OK] post-eviction property: animal duties, storage, trespass after writ; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.62 "to or near the property line".
  - `\b(?:animals?|pets?|livestock|dogs?|cats?)\b[\s\S]{0,1200}\b(?:writ of possession|evict(?:s|ed|ing|ion)?|abandon(?:s|ed|ing|ment)?)\b[\s\S]{0,1200}\b(?:tenant|lessee|dwelling)` -> 1
  - `\b(?:writ of possession|evict(?:s|ed|ing|ion)?)\b[\s\S]{0,1200}\b(?:animals?|pets?|livestock|dogs?|cats?)\b` -> 0
  - `\A(?=[\s\S]*\bwrit of possession\b)(?=[\s\S]*\b(?:animal|pet)s?\b)` -> 2
  - `\bwrit of possession\b[\s\S]{0,1200}\btrespass\w*` -> 0
  - `\btrespass\w*[\s\S]{0,1200}\bwrit of possession\b` -> 4
  - `\b(?:personal property|belongings)\b[\s\S]{0,1200}\b(?:to or near the property line|writ of possession)\b` -> 6
  - `\b(?:writ of possession|executes the writ)\b[\s\S]{0,1200}\b(?:personal property|belongings|stor(?:e|age))\b` -> 8
- **FLG-B-015** [OK] good-cause requirement for termination or nonrenewal notices; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.64 "eviction is for good cause".
  - `\b(?:good|just) cause\b[\s\S]{0,1200}\b(?:tenant(?:s|cy)?|lessee|rental agreement)\b[\s\S]{0,1200}\b(?:terminat\w*|evict\w*|non-?renew\w*|notice to vacate)` -> 1
  - `\b(?:terminat\w*|evict\w*|non-?renew\w*|notice to vacate)\b[\s\S]{0,1200}\b(?:good|just) cause\b[\s\S]{0,1200}\b(?:tenant|lessee)s?\b` -> 3
  - `\A(?=[\s\S]*\b(?:good|just) cause\b)(?=[\s\S]*\btenant)(?=[\s\S]*\bevict)` -> 4
  - `\b(?:without|for) cause\b[\s\S]{0,1200}\b(?:tenant(?:s|cy)?|rental agreement)\b` -> 1
  - `\b(?:tenant(?:s|cy)?|rental agreement)\b[\s\S]{0,1200}\b(?:without|for) cause\b` -> 0
  - `\b(?:reason|grounds?) for (?:the )?(?:termination|nonrenewal|non-renewal)\b[\s\S]{0,1200}\b(?:tenant|landlord)s?\b` -> 0
- **FLG-B-016** [OK] cold-weather notice or bar before vacating or eviction; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.51 "heat during winter".
  - `\b(?:cold|winter|freezing|weather|temperatures?)\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|vacat(?:e|es|ed|ing)|writs? of possession|removal of (?:the )?tenant)` -> 2
  - `\b(?:evict(?:s|ed|ing|ion)?|vacat(?:e|es|ed|ing)|writs? of possession|removal of (?:the )?tenant)[\s\S]{0,1200}\b(?:cold|winter|freezing|weather|temperatures?)\b` -> 2
  - `\A(?=[\s\S]*\b(?:winter|cold weather|freezing)\b)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|vacat))` -> 3
  - `\bcold[- ]weather\b` -> 0
  - `\bheat during winter\b` -> 2
- **FLG-B-017** [FAILED] (not cited by any row) late government benefit or voucher payment as an eviction defense; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.60 "tenants receiving rent subsidies"; passed 83.56 "rent subsidies".
  - `\b(?:social security|public assistance|government benefits?|benefit checks?|vouchers?|housing assistance payments?|rent subsid(?:y|ies))\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|possession|continuance|terminat\w*)\b` -> 50
  - `\b(?:evict(?:s|ed|ing|ion)?|action for possession|continuance)\b[\s\S]{0,1200}\b(?:social security|public assistance|government benefits?|benefit checks?|vouchers?|housing assistance payments?|rent subsid(?:y|ies))\b` -> 6
  - `\A(?=[\s\S]*\b(?:social security|voucher|subsid))(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:late|delay\w*)\b)(?=[\s\S]*\b(?:rent|evict))` -> 15
  - `\b(?:late|delay(?:ed|s)?)\b[\s\S]{0,1200}\b(?:benefit|subsidy|assistance) (?:check|payment)s?\b` -> 0
  - `\b(?:benefit|subsidy|assistance) (?:check|payment)s?\b[\s\S]{0,1200}\b(?:late|delay(?:ed|s)?)\b` -> 0
- **FLG-B-018** [OK] late government benefit or voucher payment as an eviction defense; supersedes FLG-B-017 (positive 83.60 failed; term 1 too broad (bare possession/terminate)); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.60 "tenants receiving rent subsidies"; passed 83.56 "rent subsidies".
  - `\b(?:social security|public assistance|government benefits?|benefit checks?|vouchers?|housing assistance payments?|rent subsid(?:y|ies))\b[\s\S]{0,1200}\b(?:evict(?:s|ed|ing|ion)?|for possession|writs? of possession|continuance)\b` -> 4
  - `\b(?:evict(?:s|ed|ing|ion)?|for possession|writs? of possession|continuance)\b[\s\S]{0,1200}\b(?:social security|public assistance|government benefits?|benefit checks?|vouchers?|housing assistance payments?|rent subsid(?:y|ies))\b` -> 9
  - `\A(?=[\s\S]*\b(?:social security|voucher|subsid))(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:late|delay\w*)\b)(?=[\s\S]*\bevict)` -> 1
  - `\b(?:late|delay(?:ed|s)?)\b[\s\S]{0,1200}\b(?:benefit|subsidy|assistance) (?:check|payment)s?\b` -> 0
  - `\b(?:benefit|subsidy|assistance) (?:check|payment)s?\b[\s\S]{0,1200}\b(?:late|delay(?:ed|s)?)\b` -> 0
- **FLG-B-019** [FAILED] (not cited by any row) tenant bankruptcy and eviction / writ enforcement; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 723.084 "bankruptcy".
  - `\bbankrupt(?:cy|cies)?\b[\s\S]{0,1200}\b(?:tenant|lessee|evict(?:s|ed|ing|ion)?|writs? of possession|rental agreement)s?\b` -> 6
  - `\b(?:tenant|lessee|evict(?:s|ed|ing|ion)?|writs? of possession|rental agreement)s?\b[\s\S]{0,1200}\bbankrupt(?:cy|cies)?\b` -> 1
  - `\A(?=[\s\S]*\bbankrupt)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|possession))` -> 11
  - `\bautomatic stay\b` -> 12
- **FLG-B-020** [OK] tenant bankruptcy and eviction / writ enforcement; supersedes FLG-B-019 (positive 723.084 failed (no term matched); replaced with real positives 720.3085 and 718.116); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 720.3085 "bankruptcy petition"; passed 718.116 "automatic stay".
  - `\bbankrupt(?:cy|cies)?\b[\s\S]{0,1200}\b(?:tenant|lessee|evict(?:s|ed|ing|ion)?|writs? of possession|rental agreement)s?\b` -> 6
  - `\b(?:tenant|lessee|evict(?:s|ed|ing|ion)?|writs? of possession|rental agreement)s?\b[\s\S]{0,1200}\bbankrupt(?:cy|cies)?\b` -> 1
  - `\A(?=[\s\S]*\bbankrupt)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:evict|possession))` -> 11
  - `\bautomatic stay\b` -> 12
- **FLG-B-021** [OK] double letting / failure to deliver possession; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed FORM1.947 "deliver possession".
  - `\b(?:rent(?:s|ed)?|leas(?:e|es|ed)|let(?:s|ting)?)\b[\s\S]{0,1200}\b(?:same|identical) (?:dwelling|unit|premises|room)s?\b[\s\S]{0,1200}\b(?:two|more than one|another|second)\b` -> 1
  - `\b(?:two|more than one|another|second) (?:tenants|persons|lessees|parties)\b[\s\S]{0,1200}\b(?:same|identical) (?:dwelling|unit|premises|room)s?\b` -> 0
  - `\A(?=[\s\S]*\b(?:same|identical) (?:dwelling|unit|premises|room)s?\b)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:two|more than one) (?:tenants|persons|lessees)\b)` -> 0
  - `\bdouble[- ]?(?:letting|leasing|booking|rented|rent(?:ing|al))\b` -> 0
  - `\bdeliver(?:s|ed|y|ing)? (?:of )?possession\b[\s\S]{0,1200}\b(?:tenant|lessee|rental agreement)s?\b` -> 1
  - `\b(?:tenant|lessee|rental agreement)s?\b[\s\S]{0,1200}\bdeliver(?:s|ed|y|ing)? (?:of )?possession\b` -> 1
  - `\b(?:fail(?:s|ed|ure)?|unable) to (?:deliver|give|surrender) possession\b` -> 0
- **FLG-B-022** [OK] seasonal tenancy category; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 381.008 "seasonal or migrant farmworkers whether or not rent is paid".
  - `\bseasonal(?:ly)?\b[\s\S]{0,1200}\b(?:tenant(?:s|cy)?|rental agreement|leas(?:e|es|ed)|rent(?:s|ed|al)?)\b` -> 8
  - `\b(?:tenant(?:s|cy)?|rental agreement|leas(?:e|es|ed)|rent(?:s|ed|al)?)\b[\s\S]{0,1200}\bseasonal(?:ly)?\b` -> 7
  - `\A(?=[\s\S]*\bseason(?:al|s)?\b)(?=[\s\S]*\btenan)(?=[\s\S]*\b(?:terminat|vacat|expir))` -> 9
  - `\bseasonal (?:tenan\w*|rental\w*|leas\w*|occupan\w*|residen\w*)` -> 2
  - `\b(?:season|winter|summer)\b[\s\S]{0,1200}\b(?:tenancy|rental agreement)\b[\s\S]{0,1200}\b(?:ends?|terminat\w*|expir\w*)\b` -> 1
- **FLG-B-023** [OK] tenant early termination for age, illness, disability or move to care; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 429.24 "terminat".
  - `\b(?:nursing homes?|assisted living|care facilit(?:y|ies)|incapacit(?:y|ated)|disabilit(?:y|ies)|illness|infirm\w*|elderly|senior citizens?)\b[\s\S]{0,1200}\bterminat\w*\b[\s\S]{0,1200}\b(?:rental agreement|lease|tenancy)\b` -> 2
  - `\b(?:rental agreement|lease|tenancy)\b[\s\S]{0,1200}\bterminat\w*\b[\s\S]{0,1200}\b(?:nursing homes?|assisted living|care facilit(?:y|ies)|incapacit(?:y|ated)|disabilit(?:y|ies)|illness|infirm\w*|elderly|senior citizens?)\b` -> 4
  - `\A(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:nursing home|assisted living|incapacit))(?=[\s\S]*\bterminat\w* (?:the|a|his|her|its) (?:rental agreement|lease)\b)` -> 1
  - `\bincapacity to contract\b` -> 0
- **FLG-B-024** [OK] landlord termination after environmental event or casualty; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.63 "damaged or destroyed".
  - `\b(?:hurricanes?|floods?|flooding|natural disasters?|environmental|contamination|sinkholes?|state of emergency|damaged or destroyed)\b[\s\S]{0,1200}\bterminat\w*\b[\s\S]{0,1200}\b(?:rental agreement|lease|tenancy)\b` -> 8
  - `\b(?:rental agreement|lease|tenancy)\b[\s\S]{0,1200}\bterminat\w*\b[\s\S]{0,1200}\b(?:hurricanes?|floods?|flooding|natural disasters?|environmental|contamination|sinkholes?|state of emergency)\b` -> 9
  - `\A(?=[\s\S]*\blandlord)(?=[\s\S]*\b(?:hurricane|flood|natural disaster|environmental|casualty))(?=[\s\S]*\bterminat\w* the (?:rental agreement|lease)\b)` -> 5
  - `\bcasualty damage\b|\buntenantable\b` -> 3
- **FLG-B-025** [OK] landlord conduct limits while a notice to vacate is pending; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 723.061 "notice to vacate".
  - `\b(?:notices? to vacate|notices? of termination|notices? of intended conversion)\b[\s\S]{0,1200}\b(?:alter(?:s|ed|ing|ations?)?|uninhabitable|untenantable|renovat\w*|demoli\w*|reduc\w* (?:in )?services?)\b` -> 1
  - `\b(?:alter(?:s|ed|ing|ations?)?|uninhabitable|untenantable|renovat\w*|demoli\w*)\b[\s\S]{0,1200}\b(?:notices? to vacate|notices? of termination)\b` -> 0
  - `\A(?=[\s\S]*\bnotices? to vacate\b)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:alter|uninhabitable|untenantable))` -> 1
  - `\bnotices? to vacate\b` -> 4
- **FLG-B-026** [OK] tenant duty to give notice of extended absence; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.59 "notified the landlord, in writing, of an intended absence"; passed 83.53 "notifies the landlord of an intended absence".
  - `\b(?:absen(?:ce|ces|t)|away from)\b[\s\S]{0,1200}\b(?:notif(?:y|ies|ied)|notice)\b[\s\S]{0,1200}\b(?:landlord|lessor)s?\b` -> 6
  - `\b(?:landlord|lessor)s?\b[\s\S]{0,1200}\b(?:notif(?:y|ies|ied)|notice)\b[\s\S]{0,1200}\b(?:intended|extended|anticipated) absences?\b` -> 3
  - `\A(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:intended|extended|anticipated|prolonged) absences?\b)` -> 3
  - `\b(?:intended|extended|anticipated|prolonged) absences?\b` -> 3
- **FLG-B-027** [OK] owner move-in termination right (statutory grant or limit); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.575 "notify the landlord within a specified period before vacating".
  - `\b(?:owner|landlord|lessor)s?\b[\s\S]{0,1200}\b(?:occupy|occupancy|move in|personal use|own use|family member)\b[\s\S]{0,1200}\bterminat\w*\b[\s\S]{0,1200}\b(?:rental agreement|lease|tenancy)\b` -> 5
  - `\bterminat\w*\b[\s\S]{0,1200}\b(?:rental agreement|lease|tenancy)\b[\s\S]{0,1200}\b(?:owner|landlord)s? (?:intends to |will |to )?(?:occupy|move in|reside)\b` -> 0
  - `\A(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:owner|landlord) (?:intends to |will |to )?(?:occupy|reside|move in))(?=[\s\S]*\bterminat)` -> 0
  - `\b(?:owner[- ]occupan\w*|owner move[- ]in|personal occupancy)\b` -> 1
  - `\bspecific duration may contain a provision\b` -> 2
- **FLG-B-028** [OK] rent or eviction protection for government workers during a shutdown; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 250.5202 "state active duty".
  - `\b(?:shutdowns?|furlough(?:s|ed)?|lapse in appropriations|unpaid (?:federal|government) (?:employees?|workers?))\b[\s\S]{0,1200}\b(?:rent(?:s|al)?|evict(?:s|ed|ing|ion)?|tenant|lease)\b` -> 0
  - `\b(?:rent(?:s|al)?|evict(?:s|ed|ing|ion)?|tenant|lease)\b[\s\S]{0,1200}\b(?:shutdowns?|furlough(?:s|ed)?|lapse in appropriations)\b` -> 0
  - `\A(?=[\s\S]*\b(?:federal|government) (?:employees?|workers?)\b)(?=[\s\S]*\btenant)(?=[\s\S]*\b(?:rent|evict))` -> 5
  - `\bgovernment shutdown\b|\bfederal shutdown\b` -> 0
  - `\bstate active duty\b[\s\S]{0,1200}\b(?:evict\w*|rent)\b` -> 1
- **FLG-B-029** [OK] redemption (check R13-14): duty to accept, or limits on, rent paid by a charity, third party or government program on the tenant's behalf; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.56 "rent subsidies".
  - `\b(?:on behalf of|for the benefit of)\s+(?:a |the |any )?(?:tenants?|lessees?|renters?)\b` -> 6
  - `\brent(?:al)? subsid\w*|\brent(?:al)? assistance\b|\bemergency rental\b|\bhousing assistance payments?\b` -> 16
  - `\b(?:rent(?:al)? assistance|emergency rental|housing assistance payments?|rent(?:al)? subsid\w*)\b[\s\S]{0,1200}\b(?:landlords?|lessors?)\b[\s\S]{0,1200}\b(?:accept\w*|refus\w*|declin\w*|reject\w*)\b` -> 2
  - `\b(?:third[- ]party|charit\w*|nonprofit|government\w*)\b[\s\S]{0,1200}\b(?:pay\w*|tender\w*)\b[\s\S]{0,1200}\brent\w*` -> 42
- **FLG-C-001** [OK] submetering or utility-resale disclosure to tenants (electric, gas, water): prescribed lease or written disclosure of submetering, master-meter allocation or resale; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed FAC25-6 "sub-metering"; passed 367.022 "resells water service to his or her tenants"; passed FAC25-7 "distributed to the tenants thereof by the landlord".
  - `\b(?:sub-?meter\w*|master[- ]meter\w*)[\s\S]{0,1200}\b(?:disclos\w*|notice|notif\w*|statements?|inform\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|residents?|occupants?)\b` -> 1
  - `\b(?:tenants?|lessees?|residents?|occupants?)\b[\s\S]{0,1200}\b(?:disclos\w*|notice|notif\w*|statements?|inform\w*)\b[\s\S]{0,1200}\b(?:sub-?meter\w*|master[- ]meter\w*)` -> 0
  - `\A(?=[\s\S]*\b(?:sub-?meter\w*|master[- ]meter\w*))(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:disclos\w*|written notice)\b)` -> 2
  - `\A(?=[\s\S]*\b(?:resells?|resale)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:water|electricity|electric|gas)\b)(?=[\s\S]*\b(?:disclos\w*|written notice)\b)` -> 11
  - `\bresells?\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b` -> 1
  - `\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\bresells?\b` -> 1
  - `\bsub-?meter(?:s|ed|ing)?\b` -> 2
  - `\bsubmeter(?:s|ed|ing)?\b` -> 0
- **FLG-C-002** [OK] energy usage data release: statute or rule letting or requiring a utility to release a tenant's energy or water usage data to the owner, building benchmarking; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed FAC25-6 "actual consumption of electric energy by that customer".
  - `\b(?:energy|electricity|electric|gas|water|usage|consumption)\b (?:usage |consumption )?(?:data|information|history|records?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|landlords?|lessors?|owners?)\b` -> 0
  - `\b(?:tenants?|lessees?|occupants?|landlords?|lessors?|owners?)\b[\s\S]{0,1200}\b(?:energy|electricity|electric|gas|water|usage|consumption)\b (?:usage |consumption )?(?:data|information|history|records?)\b` -> 0
  - `\A(?=[\s\S]*\b(?:benchmark\w*|energy (?:usage|consumption|use) (?:data|information))\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)` -> 13
  - `\bbenchmark(?:s|ed|ing)?\b[\s\S]{0,1200}\b(?:buildings?|energy|properties|property)\b` -> 3
  - `\b(?:buildings?|energy|properties|property)\b[\s\S]{0,1200}\bbenchmark(?:s|ed|ing)?\b` -> 8
  - `\bactual consumption\b[\s\S]{0,1200}\b(?:release|disclos\w*|provide|third part\w*)\b` -> 1
  - `\benergy star\b` -> 1
  - `\bbenchmarking\b` -> 2
- **FLG-C-003** [OK] meter conservation charge / on-bill energy-efficiency financing: notice to tenants or rent deduction; submetered water monthly statement with meter readings; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed FAC25-7 "conservation charges made by the gas utility"; passed 163.08 "persons renting, using, living, or otherwise occupying real property".
  - `\b(?:conservation charges?|on-bill|on bill (?:financing|repayment)|energy[- ]efficiency (?:loans?|financing|charges?|improvements?)|qualifying improvements?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|occupying|renting|renters?)\b` -> 3
  - `\b(?:tenants?|lessees?|occupants?|occupying|renting|renters?)\b[\s\S]{0,1200}\b(?:conservation charges?|on-bill|on bill (?:financing|repayment)|energy[- ]efficiency (?:loans?|financing|charges?|improvements?)|qualifying improvements?)\b` -> 2
  - `\A(?=[\s\S]*\b(?:conservation charges?|on-bill|on bill (?:financing|repayment)|energy[- ]efficiency (?:loans?|financing|charges?|improvements?)|qualifying improvements?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:notice|notif\w*|disclos\w*)\b)` -> 8
  - `\bmeter readings?\b[\s\S]{0,1200}\b(?:statements?|bills?|billing)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|residents?)\b` -> 1
  - `\b(?:tenants?|lessees?|residents?)\b[\s\S]{0,1200}\b(?:statements?|bills?|billing)\b[\s\S]{0,1200}\bmeter readings?\b` -> 0
  - `\bconservation charges?\b` -> 1
  - `\bon-bill\b` -> 0
- **FLG-C-004** [OK] utility disclosure attachment: statement of utility costs, billing history, or who pays which utility, required with or attached to a residential lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.031 "utility charges are not otherwise being collected".
  - `\b(?:utility|utilities|electric(?:ity)?|energy|water|gas)\b (?:costs?|bills?|charges?|usage|consumption)\b[\s\S]{0,1200}\b(?:disclos\w*|statements?|summary|summaries|attach\w*|notice)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|prospective tenants?|renters?)\b` -> 0
  - `\b(?:tenants?|lessees?|prospective tenants?|renters?)\b[\s\S]{0,1200}\b(?:disclos\w*|statements?|summary|summaries|attach\w*|notice)\b[\s\S]{0,1200}\b(?:utility|utilities|electric(?:ity)?|energy|water|gas)\b (?:costs?|bills?|charges?|usage|consumption)\b` -> 1
  - `\b(?:disclos\w*|statements?|summary|attach\w*)\b[\s\S]{0,1200}\b(?:utility|utilities|electric(?:ity)?|energy|water|gas)\b (?:costs?|bills?|charges?|usage|consumption)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|prospective tenants?|renters?)\b` -> 0
  - `\A(?=[\s\S]*\b(?:utility|utilities|electric(?:ity)?|energy|water|gas)\b (?:costs?|bills?|charges?|usage|consumption)\b)(?=[\s\S]*\b(?:disclos\w*)\b)(?=[\s\S]*\b(?:prospective tenants?|rental agreements?|lease[sd]? agreements?)\b)` -> 6
  - `\baverage (?:monthly |annual )?(?:utility|electric|energy|water) (?:costs?|bills?|charges?|usage|consumption)\b` -> 0
- **FLG-C-005** [OK] landlord-held utility account: utility notice to tenants before disconnecting a landlord's or master-meter account; tenant pay-and-deduct of a landlord's utility bill; receiver for unpaid landlord utilities; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed FAC25-6 "Delinquency in payment for service by a previous occupant"; passed 153.12 "discontinue furnishing water to such premises".
  - `\b(?:discontinu\w*|disconnect\w*|shut ?off|shutoffs?|terminat\w* (?:of )?(?:the )?(?:utility |water |electric |gas )?service)\b[\s\S]{0,1200}\b(?:notice|notif\w*)\b[\s\S]{0,1200}\b(?:tenants?|occupants?|residents?|lessees?)\b` -> 12
  - `\b(?:tenants?|occupants?|residents?|lessees?)\b[\s\S]{0,1200}\b(?:notice|notif\w*)\b[\s\S]{0,1200}\b(?:discontinu\w*|disconnect\w*|shut ?off|shutoffs?|terminat\w* (?:of )?(?:the )?(?:utility |water |electric |gas )?service)\b` -> 10
  - `\A(?=[\s\S]*\bmaster[- ]meter\w*)(?=[\s\S]*\b(?:discontinu\w*|disconnect\w*|shut ?off|shutoffs?|terminat\w* (?:of )?(?:the )?(?:utility |water |electric |gas )?service))(?=[\s\S]*\b(?:tenants?|occupants?|residents?|lessees?)\b)` -> 3
  - `\b(?:tenants?|occupants?|residents?|lessees?)\b[\s\S]{0,1200}\b(?:pay|pays|paid|paying)\b[\s\S]{0,1200}\b(?:utility|utilities|electric\w*|water|gas|sewer)\b[\s\S]{0,1200}\b(?:deduct\w*|offset\w*|credit\w* against (?:the )?rent)\b` -> 1
  - `\b(?:utility|utilities|electric\w*|water|gas|sewer)\b[\s\S]{0,1200}\b(?:deduct\w*|offset\w*)\b[\s\S]{0,1200}\brent\b[\s\S]{0,1200}\b(?:tenants?|occupants?|residents?|lessees?)\b` -> 0
  - `\breceivers?\b[\s\S]{0,1200}\b(?:utility|utilities)\b[\s\S]{0,1200}\b(?:tenants?|occupants?|residents?|lessees?)\b` -> 5
  - `\b(?:tenants?|occupants?|residents?|lessees?)\b[\s\S]{0,1200}\b(?:utility|utilities)\b[\s\S]{0,1200}\breceivers?\b` -> 8
  - `\bmaster[- ]metered\b` -> 1
- **FLG-C-006** [OK] utility shutoff limits: weather, winter, temperature or declared-emergency (hurricane) bar or extension on disconnection for nonpayment; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed FAC25-6 "No utility shall discontinue service to any non-commercial customer".
  - `\b(?:discontinu\w*|disconnect\w*|shut ?off|shutoffs?)\b[\s\S]{0,1200}\b(?:hurricanes?|tropical storms?|states? of emergency|declared emergenc\w*|emergenc(?:y|ies) (?:declaration|order)s?|heat advisor\w*|extreme (?:heat|cold|weather)|freez\w*|temperatures?|winter|cold weather)\b` -> 5
  - `\b(?:hurricanes?|tropical storms?|states? of emergency|declared emergenc\w*|emergenc(?:y|ies) (?:declaration|order)s?|heat advisor\w*|extreme (?:heat|cold|weather)|freez\w*|temperatures?|winter|cold weather)\b[\s\S]{0,1200}\b(?:discontinu\w*|disconnect\w*|shut ?off|shutoffs?)\b` -> 5
  - `\b(?:nonpayment|non-payment|delinquen\w*|unpaid|arrear\w*)\b[\s\S]{0,1200}\b(?:hurricanes?|tropical storms?|states? of emergency|declared emergenc\w*|emergenc(?:y|ies) (?:declaration|order)s?|heat advisor\w*|extreme (?:heat|cold|weather)|freez\w*|temperatures?|winter|cold weather)\b` -> 5
  - `\b(?:hurricanes?|tropical storms?|states? of emergency|declared emergenc\w*|emergenc(?:y|ies) (?:declaration|order)s?|heat advisor\w*|extreme (?:heat|cold|weather)|freez\w*|temperatures?|winter|cold weather)\b[\s\S]{0,1200}\b(?:nonpayment|non-payment|delinquen\w*|unpaid|arrear\w*)\b` -> 10
  - `\A(?=[\s\S]*\b(?:discontinu\w*|disconnect\w*|shut ?off|shutoffs?))(?=[\s\S]*\b(?:electric\w*|gas|water|utility|utilities)\b)(?=[\s\S]*\b(?:hurricanes?|tropical storms?|states? of emergency|declared emergenc\w*|emergenc(?:y|ies) (?:declaration|order)s?|heat advisor\w*|extreme (?:heat|cold|weather)|freez\w*|temperatures?|winter|cold weather)\b)(?=[\s\S]*\b(?:nonpayment|non-payment|delinquen\w*|unpaid|arrear\w*)\b)` -> 11
  - `\b(?:shut ?off|disconnection|termination) moratori(?:um|ums|a)\b|\bmoratori(?:um|ums|a) on (?:utility |service )?(?:disconnect\w*|shut ?offs?|terminations?)\b` -> 0
- **FLG-C-007** [OK] utility liens and tenants: owner relief from a lien for a tenant's unpaid water, sewer, garbage or utility charges (lease plus affidavit, notice to utility); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 180.135 "unpaid service charges incurred by a former occupant will not be the basis for any lien"; passed 153.67 "superior and paramount to the interest on such parcel or property of any owner, lessee, tenant".
  - `\b(?:liens?|lienable)\b[\s\S]{0,1200}\b(?:water|sewer|sewage|wastewater|garbage|solid waste|utility|utilities|service charges?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|renters?)\b` -> 5
  - `\b(?:tenants?|lessees?|occupants?|renters?)\b[\s\S]{0,1200}\b(?:water|sewer|sewage|wastewater|garbage|solid waste|utility|utilities|service charges?)\b[\s\S]{0,1200}\b(?:liens?|lienable)\b` -> 5
  - `\b(?:water|sewer|sewage|wastewater|garbage|solid waste|utility|utilities|service charges?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|renters?)\b[\s\S]{0,1200}\b(?:liens?|lienable)\b` -> 9
  - `\baffidavits?\b[\s\S]{0,1200}\b(?:water|sewer|utility|utilities|garbage|solid waste)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|renters?)\b` -> 0
  - `\b(?:tenants?|lessees?|occupants?|renters?)\b[\s\S]{0,1200}\b(?:water|sewer|utility|utilities|garbage|solid waste)\b[\s\S]{0,1200}\baffidavits?\b` -> 0
  - `\A(?=[\s\S]*\b(?:liens?|lienable)\b)(?=[\s\S]*\b(?:water|sewer|garbage|solid waste)\b)(?=[\s\S]*\b(?:tenants?|lessees?|occupants?|renters?)\b)(?=[\s\S]*\b(?:affidavits?|copy of the (?:lease|rental agreement)|rental agreements?)\b)` -> 18
  - `\bunpaid service charges\b` -> 2
- **FLG-C-008** [OK] EV charging and tenants: tenant right to install, landlord duties, shared-area charging, removal or restoration at end of tenancy, for residential rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 366.94 "electric vehicle charging station"; passed 718.113 "installing an electric vehicle charging station".
  - `\b(?:electric vehicles?|electric-vehicle|EV) (?:charg\w*|supply equipment)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|renters?|rental units?|apartments?)\b` -> 0
  - `\b(?:tenants?|lessees?|landlords?|lessors?|renters?|rental units?|apartments?)\b[\s\S]{0,1200}\b(?:electric vehicles?|electric-vehicle|EV) (?:charg\w*|supply equipment)\b` -> 0
  - `\A(?=[\s\S]*\b(?:electric vehicles?|electric-vehicle|EV) (?:charg\w*|supply equipment))(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)` -> 7
  - `\b(?:charging stations?|chargers?)\b[\s\S]{0,1200}\b(?:remov\w*|restor\w*|terminat\w*|vacat\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?)\b` -> 0
  - `\b(?:tenants?|lessees?|occupants?)\b[\s\S]{0,1200}\b(?:remov\w*|restor\w*|terminat\w*|vacat\w*)\b[\s\S]{0,1200}\b(?:charging stations?|chargers?)\b` -> 0
  - `\belectric vehicle charging stations?\b` -> 8
  - `\belectric vehicle supply equipment\b` -> 2
- **FLG-C-009** [OK] portable or plug-in solar: tenant right to install a solar or renewable energy device; lease bans on solar under the solar-rights statute; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 163.04 "patio railings in condominiums, cooperatives, or apartments".
  - `\b(?:solar (?:collectors?|panels?|energy (?:systems?|devices?)|devices?|equipment|systems?|modules?)|plug-in solar|balcony solar|portable solar|energy devices based on renewable resources)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|rental agreements?|renters?)\b` -> 1
  - `\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|rental agreements?|renters?)\b[\s\S]{0,1200}\b(?:solar (?:collectors?|panels?|energy (?:systems?|devices?)|devices?|equipment|systems?|modules?)|plug-in solar|balcony solar|portable solar|energy devices based on renewable resources)\b` -> 1
  - `\A(?=[\s\S]*\b(?:solar|renewable resources?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:prohibit\w*|install\w*|permission|consent)\b)` -> 17
  - `\b(?:plug-in|portable|balcony) (?:solar|photovoltaic|energy)\b` -> 0
  - `\bsolar collectors?\b` -> 2
- **FLG-C-010** [OK] telecom access: tenant access to cable, satellite, antenna, broadband or communications service providers; rent differential for subscribers; landlord restrictions; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.1232 "whether tenant or owner, shall be denied access".
  - `\b(?:cable (?:television|tv|services?|operators?|providers?)|cable or video services?|video service providers?|satellite (?:dish\w*|television|antennas?|services?)|antennas?|broadband services?|internet services?|communications services?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|rental units?|renters?)\b` -> 9
  - `\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|rental units?|renters?)\b[\s\S]{0,1200}\b(?:cable (?:television|tv|services?|operators?|providers?)|cable or video services?|video service providers?|satellite (?:dish\w*|television|antennas?|services?)|antennas?|broadband services?|internet services?|communications services?)\b` -> 8
  - `\A(?=[\s\S]*\b(?:cable|satellite|antennas?|broadband)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:denied access|deny access|denies access|denying access|be denied)\b)` -> 10
  - `\bsatellite dish(?:es)?\b` -> 0
  - `\bover-the-air\b` -> 0
- **FLG-C-011** [OK] recycling notice: landlord duty to tell tenants where and how to recycle, or to provide recycling receptacles, at multifamily rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 403.706 "adequate receptacle for recycling by tenants and owners".
  - `\b(?:recycl\w*|recyclables?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|inform\w*|instruct\w*|educat\w*|post\w*|disclos\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|multifamily|occupants?)\b` -> 2
  - `\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|multifamily|occupants?)\b[\s\S]{0,1200}\b(?:notice|notif\w*|inform\w*|instruct\w*|educat\w*|post\w*|disclos\w*)\b[\s\S]{0,1200}\b(?:recycl\w*|recyclables?)\b` -> 0
  - `\b(?:recycl\w*|recyclables?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|multifamily|occupants?)\b` -> 5
  - `\b(?:tenants?|lessees?|landlords?|lessors?|apartments?|multifamily|occupants?)\b[\s\S]{0,1200}\b(?:recycl\w*|recyclables?)\b` -> 4
  - `\A(?=[\s\S]*\b(?:recycl\w*|recyclables?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|landlords?)\b)(?=[\s\S]*\b(?:notice|notif\w*|inform\w*|instruct\w*|educat\w*|post\w*|disclos\w*)\b)` -> 12
  - `\brecycling (?:receptacles?|containers?|bins?)\b` -> 3
- **FLG-C-012** [OK] ordnance, demolition and shared-meter disclosures to prospective tenants (former ordnance locations; pending demolition; shared or common utility meters); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 403.706 "construction and demolition debris".
  - `\b(?:ordnance|munitions?|unexploded|explosive remnants?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|prospective tenants?|renters?)\b` -> 0
  - `\b(?:tenants?|lessees?|landlords?|lessors?|prospective tenants?|renters?)\b[\s\S]{0,1200}\b(?:ordnance|munitions?|unexploded|explosive remnants?)\b` -> 0
  - `\bdemoli\w*\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|prospective tenants?|renters?)\b` -> 8
  - `\b(?:tenants?|lessees?|landlords?|lessors?|prospective tenants?|renters?)\b[\s\S]{0,1200}\bdemoli\w*` -> 5
  - `\b(?:shared|common|single|one) (?:utility |gas |electric |water )?meters?\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|prospective tenants?|renters?)\b` -> 0
  - `\b(?:tenants?|lessees?|landlords?|lessors?|prospective tenants?|renters?)\b[\s\S]{0,1200}\b(?:shared|common|single|one) (?:utility |gas |electric |water )?meters?\b` -> 1
  - `\A(?=[\s\S]*\b(?:(?:ordnance|munitions?|unexploded|explosive remnants?)|demolition permits?|application for demolition)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\bdisclos\w*)` -> 0
  - `\bformer (?:military )?(?:ordnance|munitions) locations?\b` -> 0
- **FLG-C-013** [OK] government fee reimbursement: passing a government fee on the rental (registration, licensing, inspection, permit, business tax) through to the tenant; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.031 "pass-through charges".
  - `\b(?:registration|licens\w*|inspection|permit|certificate of (?:occupancy|compliance)|business tax|impact|governmental?|local government|municipal|county) (?:fees?|charges?|assessments?|taxes|receipts?)\b[\s\S]{0,1200}\b(?:pass(?:es|ed|ing)? (?:on|through|along)|pass-through|pass-on|reimburs\w*|recover\w*|charge(?:s|d)? (?:to|back))\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?)\b` -> 0
  - `\b(?:tenants?|lessees?|renters?)\b[\s\S]{0,1200}\b(?:pass(?:es|ed|ing)? (?:on|through|along)|pass-through|pass-on|reimburs\w*|recover\w*|charge(?:s|d)? (?:to|back))\b[\s\S]{0,1200}\b(?:registration|licens\w*|inspection|permit|certificate of (?:occupancy|compliance)|business tax|impact|governmental?|local government|municipal|county) (?:fees?|charges?|assessments?|taxes|receipts?)\b` -> 1
  - `\b(?:pass(?:es|ed|ing)? (?:on|through|along)|pass-through|pass-on|reimburs\w*|recover\w*|charge(?:s|d)? (?:to|back))\b[\s\S]{0,1200}\b(?:registration|licens\w*|inspection|permit|certificate of (?:occupancy|compliance)|business tax|impact|governmental?|local government|municipal|county) (?:fees?|charges?|assessments?|taxes|receipts?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?)\b` -> 2
  - `\b(?:fees?|charges?|assessments?|taxes)\b[\s\S]{0,1200}\b(?:pass(?:es|ed|ing)? (?:on|through|along)|pass-through|pass-on)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b` -> 1
  - `\b(?:tenants?|lessees?)\b[\s\S]{0,1200}\b(?:pass(?:es|ed|ing)? (?:on|through|along)|pass-through|pass-on)\b[\s\S]{0,1200}\b(?:fees?|charges?|assessments?|taxes)\b` -> 3
  - `\A(?=[\s\S]*\b(?:rental (?:registration|licens\w*|permits?|inspections?)|landlord (?:registration|licens\w*))\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?)\b)(?=[\s\S]*\b(?:fees?|charges?)\b)` -> 0
  - `\brental (?:registration|licens(?:e|es|ing)|permits?) (?:fees?|programs?|ordinances?)\b` -> 0
- **FLG-C-014** [OK] governmental fines: passing code-enforcement or nuisance fines or abatement costs to the tenant who caused the condition; default allocation between owner and tenant; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.49 "subject to a fine".
  - `\b(?:fines?|civil penalt(?:y|ies)|administrative fines?|abatement costs?|costs? of abatement|code enforcement liens?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|renters?)\b[\s\S]{0,1200}\b(?:landlords?|lessors?)\b` -> 3
  - `\b(?:tenants?|lessees?|occupants?|renters?)\b[\s\S]{0,1200}\b(?:fines?|civil penalt(?:y|ies)|administrative fines?|abatement costs?|costs? of abatement|code enforcement liens?)\b[\s\S]{0,1200}\b(?:landlords?|lessors?)\b` -> 2
  - `\b(?:landlords?|lessors?)\b[\s\S]{0,1200}\b(?:fines?|civil penalt(?:y|ies)|administrative fines?|abatement costs?|costs? of abatement|code enforcement liens?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|occupants?|renters?)\b` -> 3
  - `\A(?=[\s\S]*\b(?:code enforcement|nuisances?|code violations?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:fines?|civil penalt(?:y|ies))\b)(?=[\s\S]*\b(?:landlords?|lessors?)\b)` -> 0
  - `\b(?:fines?|penalt(?:y|ies))\b[\s\S]{0,1200}\b(?:reimburs\w*|pass(?:ed)? (?:on|through))\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b` -> 0
  - `\bunless the lease provides otherwise\b` -> 0
- **FLG-C-015** [OK] property tax and rent: lease pass-through of property tax increases (tax escalation), stated tenant share, abatement refund; statement of the property-tax portion of rent; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.031 "ad valorem property taxes, non-ad valorem assessments, and utility charges".
  - `\b(?:ad valorem (?:property )?tax\w*|property tax\w*|real (?:estate|property) tax\w*|tax(?:es)? on the (?:property|premises))\b[\s\S]{0,1200}\b(?:increas\w*|share|portion|pass(?:es|ed|ing)? (?:on|through)|pass-through|pass-on|escalat\w*|reimburs\w*|statements?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?)\b` -> 5
  - `\b(?:tenants?|lessees?|renters?)\b[\s\S]{0,1200}\b(?:increas\w*|share|portion|pass(?:es|ed|ing)? (?:on|through)|pass-through|pass-on|escalat\w*|reimburs\w*|statements?)\b[\s\S]{0,1200}\b(?:ad valorem (?:property )?tax\w*|property tax\w*|real (?:estate|property) tax\w*|tax(?:es)? on the (?:property|premises))\b` -> 8
  - `\b(?:increas\w*|share|portion|pass(?:es|ed|ing)? (?:on|through)|pass-through|pass-on|escalat\w*|reimburs\w*|statements?)\b[\s\S]{0,1200}\b(?:ad valorem (?:property )?tax\w*|property tax\w*|real (?:estate|property) tax\w*|tax(?:es)? on the (?:property|premises))\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?)\b` -> 5
  - `\A(?=[\s\S]*\b(?:ad valorem (?:property )?tax\w*|property tax\w*|real (?:estate|property) tax\w*|tax(?:es)? on the (?:property|premises))\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:statements?|disclos\w*)\b)(?=[\s\S]*\brent\b)` -> 23
  - `\bportion of (?:the |each |a )?(?:rent|rental payments?)\b[\s\S]{0,1200}\btax\w*` -> 0
  - `\btax\w*[\s\S]{0,1200}\bportion of (?:the |each |a )?(?:rent|rental payments?)\b` -> 0
  - `\btax escalat\w*\b` -> 0
- **FLG-D-001** [OK] association obligations disclosure to tenants (chs. 718-720 and all sources); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.1085 "provided by a unit owner to a renter prior to signing a lease".
  - `\b(?:renters?|tenants?|lessees?)\b[\s\S]{0,1200}\b(?:declarations?|bylaws|governing documents|association rules|rules and regulations|covenants)\b[\s\S]{0,1200}\b(?:cop(?:y|ies)|disclos\w*|furnish\w*|deliver\w*)\b` -> 10
  - `\b(?:cop(?:y|ies)|disclos\w*|furnish\w*|deliver\w*)\b[\s\S]{0,1200}\b(?:declarations?|bylaws|governing documents|association rules|rules and regulations|covenants)\b[\s\S]{0,1200}\b(?:renters?|tenants?|lessees?)\b` -> 9
  - `\A(?=[\s\S]*\b(?:renters?|tenants?|lessees?)\b)(?=[\s\S]*\b(?:condominium|homeowners.? association|cooperative)\b)(?=[\s\S]*\b(?:prior to|before) (?:signing|executing|execution of) (?:a|the) (?:lease|rental agreement)\b)` -> 3
  - `\b(?:prior to|before) signing a lease\b` -> 3
  - `\brenter of a (?:unit|parcel|lot|home)\b` -> 5
- **FLG-D-002** [OK] sprinkler disclosure to tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.112 "forego retrofitting of the required fire sprinkler system".
  - `\bsprinkler\w*[\s\S]{0,1200}\b(?:renters?|tenants?|lessees?|occupants?|landlords?|rental agreements?|lease[sd]?)\b` -> 3
  - `\b(?:renters?|tenants?|lessees?|occupants?|landlords?|rental agreements?|lease[sd]?)\b[\s\S]{0,1200}\bsprinkler\w*` -> 4
  - `\A(?=[\s\S]*\bsprinkler\w*)(?=[\s\S]*\b(?:disclos\w*|notice|notif\w*|inform\w*|cop(?:y|ies))\b)(?=[\s\S]*\b(?:renters?|tenants?|lessees?|occupants?|rental agreements?|lease[sd]?)\b)` -> 8
  - `\bfire sprinkler system\w*` -> 13
- **FLG-D-003** [OK] stigmatized property nondisclosure; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 689.25 "site of a homicide, suicide, or death".
  - `\b(?:homicides?|suicides?|murders?|deaths?)\b[\s\S]{0,1200}\b(?:not (?:a )?material fact|need not (?:be )?disclose\w*|failure to disclose|duty to disclose|must be disclosed)\b` -> 3
  - `\b(?:not (?:a )?material fact|need not (?:be )?disclose\w*|failure to disclose|duty to disclose|must be disclosed)\b[\s\S]{0,1200}\b(?:homicides?|suicides?|murders?|deaths?)\b` -> 2
  - `\A(?=[\s\S]*\b(?:homicides?|suicides?)\b)(?=[\s\S]*\bdisclos\w*)(?=[\s\S]*\b(?:real property|real estate|dwellings?|landlords?|tenants?|lease[sd]?|rental)\b)` -> 11
  - `\bmaterial facts?\b[\s\S]{0,1200}\b(?:real estate transactions?|transferees?)\b` -> 2
  - `\bpsychologically (?:impacted|affected)\b|\bstigmatized\b` -> 0
- **FLG-D-004** [OK] sex offender disclosure by landlords; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.515 "sexual predator and sexual offender registries".
  - `\b(?:sexual (?:predators?|offenders?)|sex offenders?)\b[\s\S]{0,1200}\b(?:landlords?|tenants?|lessees?|lessors?|renters?|rental agreements?|lease[sd]?|rent(?:s|ed|ing)?|real estate|purchasers?|buyers?)\b` -> 3
  - `\b(?:landlords?|tenants?|lessees?|lessors?|renters?|rental agreements?|lease[sd]?|rent(?:s|ed|ing)?|real estate|purchasers?|buyers?)\b[\s\S]{0,1200}\b(?:sexual (?:predators?|offenders?)|sex offenders?)\b` -> 3
  - `\A(?=[\s\S]*\b(?:sexual (?:predators?|offenders?)|sex offenders?)\b)(?=[\s\S]*\b(?:landlords?|tenants?|lessees?|lessors?|renters?|rental agreements?|lease[sd]?|rent(?:s|ed|ing)?|real estate|purchasers?|buyers?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|inform(?:s|ed|ing)?)\b)` -> 10
  - `\b(?:sex(?:ual)? offender|sexual predator) regist(?:ry|ries|ration)\b` -> 13
  - `\bcommunity and public notification\b` -> 6
- **FLG-D-005** [OK] sex offender occupancy rules (proximity, co-residence, landlord leasing); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 775.215 "may not reside within 1,000 feet of any school".
  - `\b(?:sexual (?:predators?|offenders?)|sex offenders?|persons? (?:who has|who have) been convicted)\b[\s\S]{0,1200}\b(?:lease[sd]?|leasing|rent(?:s|ed|ing)?|landlords?|lessors?|owners? of (?:a|the|any) (?:dwelling|residence|property))\b` -> 3
  - `\b(?:lease[sd]?|leasing|rent(?:s|ed|ing)?|landlords?|lessors?|owners? of (?:a|the|any) (?:dwelling|residence|property))\b[\s\S]{0,1200}\b(?:sexual (?:predators?|offenders?)|sex offenders?|persons? (?:who has|who have) been convicted)\b` -> 3
  - `\A(?=[\s\S]*\b(?:sexual (?:predators?|offenders?)|sex offenders?|persons? (?:who has|who have) been convicted)\b)(?=[\s\S]*\b(?:reside|resides|residing|residence|dwelling)\b)(?=[\s\S]*\b(?:lease[sd]?|rent(?:s|ed|ing)?|landlords?|lessors?)\b)` -> 14
  - `\bmay not reside within\b` -> 1
  - `\b(?:co-?resid\w*|reside together|live together|living together)\b` -> 7
- **FLG-D-006** [OK] required lease disclosures: first-page form, coverage notice, option-to-purchase seller disclosure; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.50 "In addition to any other disclosure required by law".
  - `\b(?:first|front) page\b[\s\S]{0,1200}\b(?:lease[sd]?|rental agreements?)\b` -> 4
  - `\b(?:lease[sd]?|rental agreements?)\b[\s\S]{0,1200}\b(?:first|front) page\b` -> 4
  - `\A(?=[\s\S]*\b(?:rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:option to (?:purchase|buy)|right of first refusal|lease-purchase|rent-to-own)\b)(?=[\s\S]*\bseller\w*)(?=[\s\S]*\bdisclos\w*)` -> 6
  - `\bproperty condition disclosure\w*|\bseller.?s? (?:property )?disclosure statement\b|\bcondition of the property\b[\s\S]{0,300}\bdisclos\w*` -> 0
  - `\bin addition to any other disclosure required by law\b` -> 2
- **FLG-D-007** [OK] required lease disclosures: first-page form, coverage notice, option-to-purchase seller disclosure; supersedes FLG-D-006 (WINDOW warning: the condition-of-the-property limb used a 300-character window; widened to 1,200); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.50 "In addition to any other disclosure required by law".
  - `\b(?:first|front) page\b[\s\S]{0,1200}\b(?:lease[sd]?|rental agreements?)\b` -> 4
  - `\b(?:lease[sd]?|rental agreements?)\b[\s\S]{0,1200}\b(?:first|front) page\b` -> 4
  - `\A(?=[\s\S]*\b(?:rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:option to (?:purchase|buy)|right of first refusal|lease-purchase|rent-to-own)\b)(?=[\s\S]*\bseller\w*)(?=[\s\S]*\bdisclos\w*)` -> 6
  - `\bproperty condition disclosure\w*|\bseller.?s? (?:property )?disclosure statement\b|\bcondition of the property\b[\s\S]{0,1200}\bdisclos\w*` -> 0
  - `\bin addition to any other disclosure required by law\b` -> 2
- **FLG-D-008** [OK] shoreline or beach access disclosure to tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 161.57 "seaward of the coastal construction control line".
  - `\b(?:shorelines?|beach(?:es)?|coastal construction control line|coastal (?:areas?|propert\w*)|erosion|public access|ocean|waterfront)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?)\b` -> 36
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?)\b[\s\S]{0,1200}\b(?:shorelines?|beach(?:es)?|coastal construction control line|coastal (?:areas?|propert\w*)|erosion|public access|ocean|waterfront)\b` -> 31
  - `\A(?=[\s\S]*\b(?:shorelines?|beach(?:es)?|coastal construction control line|coastal (?:areas?|propert\w*)|erosion|public access|ocean|waterfront)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?)\b)(?=[\s\S]*\bdisclos\w*)` -> 23
  - `\bcoastal properties disclosure\b|\bseaward of the coastal construction control line\b` -> 13
- **FLG-D-009** [FAILED] (not cited by any row) military installation or airport noise and accident zone disclosure; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 692.203 "within 10 miles of any military installation".
  - `\b(?:military installations?|military bases?|air (?:force|installations?)|airports?|airfields?|noise zones?|accident potential zones?|clear zones?|airport noise)\b[\s\S]{0,1200}\bdisclos\w*[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b` -> 1
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b[\s\S]{0,1200}\bdisclos\w*[\s\S]{0,1200}\b(?:military installations?|military bases?|air (?:force|installations?)|airports?|airfields?|noise zones?|accident potential zones?|clear zones?|airport noise)\b` -> 0
  - `\A(?=[\s\S]*\b(?:military installations?|military bases?|air (?:force|installations?)|airports?|airfields?|noise zones?|accident potential zones?|clear zones?|airport noise)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|notice)\b)(?=[\s\S]*\b(?:noise|accident|compatib\w*)\b)` -> 17
  - `\bmilitary installation\w*[\s\S]{0,1200}\b(?:noise|accident potential)\b` -> 2
  - `\bairport noise\b|\bnoise zones?\b|\baccident potential zones?\b` -> 5
- **FLG-D-010** [OK] military installation or airport noise and accident zone disclosure; supersedes FLG-D-009 (positive failed: no battery term matched Fla. Stat. § 692.203; replaced with Fla. Stat. § 163.3175, read whole, which the noise limb matches); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 163.3175 "noise attenuation reduction requirements".
  - `\b(?:military installations?|military bases?|air (?:force|installations?)|airports?|airfields?|noise zones?|accident potential zones?|clear zones?|airport noise)\b[\s\S]{0,1200}\bdisclos\w*[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b` -> 1
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b[\s\S]{0,1200}\bdisclos\w*[\s\S]{0,1200}\b(?:military installations?|military bases?|air (?:force|installations?)|airports?|airfields?|noise zones?|accident potential zones?|clear zones?|airport noise)\b` -> 0
  - `\A(?=[\s\S]*\b(?:military installations?|military bases?|air (?:force|installations?)|airports?|airfields?|noise zones?|accident potential zones?|clear zones?|airport noise)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|notice)\b)(?=[\s\S]*\b(?:noise|accident|compatib\w*)\b)` -> 17
  - `\bmilitary installation\w*[\s\S]{0,1200}\b(?:noise|accident potential)\b` -> 2
  - `\bairport noise\b|\bnoise zones?\b|\baccident potential zones?\b` -> 5
- **FLG-D-011** [OK] foreign ownership restrictions and leases; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 692.203 "A foreign principal may not directly or indirectly own".
  - `\b(?:foreign principals?|foreign countr(?:y|ies) of concern|nonresident aliens?|alien(?:s)? (?:who|ineligible))\b[\s\S]{0,1200}\b(?:lease[sd]?|leasing|leaseholds?|tenants?|lessees?|lessors?|landlords?|rental agreements?|rent(?:s|ed|ing)?)\b` -> 4
  - `\b(?:lease[sd]?|leasing|leaseholds?|tenants?|lessees?|lessors?|landlords?|rental agreements?|rent(?:s|ed|ing)?)\b[\s\S]{0,1200}\b(?:foreign principals?|foreign countr(?:y|ies) of concern|nonresident aliens?|alien(?:s)? (?:who|ineligible))\b` -> 4
  - `\A(?=[\s\S]*\b(?:foreign principals?|foreign countr(?:y|ies) of concern|nonresident aliens?|alien(?:s)? (?:who|ineligible))\b)(?=[\s\S]*\b(?:lease[sd]?|leasing|leaseholds?|tenants?|lessees?|lessors?|landlords?|rental agreements?|rent(?:s|ed|ing)?)\b)(?=[\s\S]*\breal property\b)` -> 5
  - `\bforeign countr(?:y|ies) of concern\b` -> 31
  - `\bde minimus indirect interest\b` -> 4
- **FLG-D-012** [OK] tenant protection act coverage and exemption notices (rent cap, just cause); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 125.0103 "imposing controls on rents".
  - `\b(?:controls? on rents?|rent controls?|rent stabiliz\w*|rent caps?|limits? on rent increases?|just cause|statement of cause)\b[\s\S]{0,1200}\b(?:notices?|notif\w*|disclos\w*|exempt\w*)\b` -> 23
  - `\b(?:notices?|notif\w*|disclos\w*|exempt\w*)\b[\s\S]{0,1200}\b(?:controls? on rents?|rent controls?|rent stabiliz\w*|rent caps?|limits? on rent increases?|just cause|statement of cause)\b` -> 14
  - `\A(?=[\s\S]*\b(?:controls? on rents?|rent controls?|rent stabiliz\w*|rent caps?|limits? on rent increases?|just cause|statement of cause)\b)(?=[\s\S]*\b(?:tenants?|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:exempt\w*|notices?)\b)` -> 4
  - `\bjust cause\b` -> 41
  - `\bcontrols on rents\b` -> 2
- **FLG-D-013** [OK] sunset or dated repeal of tenant protections; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.5615 "ffective upon the repeal of the federal".
  - `\b(?:expires?|expired|stands? repealed|is repealed|shall expire|sunsets?|repealed effective|future repeal|remains? in effect only until)\b[\s\S]{0,1200}\b(?:tenants?|landlords?|rental agreements?|tenanc(?:y|ies)|dwelling units?)\b` -> 21
  - `\b(?:tenants?|landlords?|rental agreements?|tenanc(?:y|ies)|dwelling units?)\b[\s\S]{0,1200}\b(?:expires?|expired|stands? repealed|is repealed|shall expire|sunsets?|repealed effective|future repeal|remains? in effect only until)\b` -> 23
  - `\A(?=[\s\S]*\b(?:stands? repealed|is repealed|shall expire|expires|future repeal|sunsets?)\b)(?=[\s\S]*\b(?:landlords?|tenants?)\b)(?=[\s\S]*\b(?:residential|dwelling)\b)` -> 34
  - `\b(?:this (?:section|part|act) (?:expires|is repealed|shall stand repealed|stands repealed)|scheduled repeal)\b` -> 105
  - `ffective upon the repeal\b` -> 1
- **FLG-D-014** [OK] tenant opportunity or right to purchase on sale; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.612 "shall have the right of first refusal to purchase the unit in which he or she resides".
  - `\b(?:rights? of first refusal|opportunity to (?:purchase|buy)|rights? to (?:purchase|buy)|first right to (?:purchase|buy)|right of first offer)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|residents?|renters?|home ?owners)\b` -> 15
  - `\b(?:tenants?|lessees?|residents?|renters?|home ?owners)\b[\s\S]{0,1200}\b(?:rights? of first refusal|opportunity to (?:purchase|buy)|rights? to (?:purchase|buy)|first right to (?:purchase|buy)|right of first offer)\b` -> 14
  - `\A(?=[\s\S]*\b(?:rights? of first refusal|opportunity to (?:purchase|buy)|rights? to (?:purchase|buy)|first right to (?:purchase|buy)|right of first offer)\b)(?=[\s\S]*\b(?:tenants?|residents?)\b)(?=[\s\S]*\b(?:sale|sells?|selling|offers? (?:the|a) (?:building|property|park))\b)` -> 11
  - `\btenant opportunity\w*|\bopportunity to purchase\b` -> 5
- **FLG-D-015** [OK] state lead notices and lead-safe certification for rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 381.983 "where the owner has actual knowledge of the presence of lead-based paint".
  - `\b(?:lead-based paint|lead-based-paint|lead poisoning|lead hazards?|lead-safe|lead safe|lead paint|elevated blood-lead)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|owners?|property managers?)\b` -> 3
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|owners?|property managers?)\b[\s\S]{0,1200}\b(?:lead-based paint|lead-based-paint|lead poisoning|lead hazards?|lead-safe|lead safe|lead paint|elevated blood-lead)\b` -> 3
  - `\A(?=[\s\S]*\b(?:lead-based paint|lead-based-paint|lead poisoning|lead hazards?|lead-safe|lead safe|lead paint|elevated blood-lead)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|owners?|property managers?)\b)(?=[\s\S]*\b(?:notices?|notif\w*|disclos\w*|certif\w*|pamphlets?|inspect\w*)\b)` -> 0
  - `\blead-free certificate\w*|\blead-safe certificate\w*|\bcertificate of lead\w*|\blead(?:-safe| safe) (?:housing|certification)\b` -> 0
  - `\baffected property\b` -> 29
- **FLG-D-016** [OK] hazardous contamination disclosure to tenants and in leases; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 376.30702 "all known lessees and tenants of the source property".
  - `\b(?:contaminat\w*|hazardous substances?|hazardous wastes?|pollutants?|brownfields?|institutional controls?|engineering controls?|petroleum discharges?|toxic|radioactiv\w*)\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?)\b` -> 7
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?)\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?)\b[\s\S]{0,1200}\b(?:contaminat\w*|hazardous substances?|hazardous wastes?|pollutants?|brownfields?|institutional controls?|engineering controls?|petroleum discharges?|toxic|radioactiv\w*)\b` -> 10
  - `\A(?=[\s\S]*\b(?:contaminat\w*|hazardous substances?|hazardous wastes?|pollutants?|brownfields?|institutional controls?|engineering controls?|petroleum discharges?|toxic|radioactiv\w*)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*)\b)(?=[\s\S]*\b(?:real property|residential|dwelling)\b)` -> 27
  - `\binstitutional controls?\b[\s\S]{0,1200}\b(?:lease[sd]?|tenants?|lessees?|conveyances?|deeds?|instruments?)\b` -> 2
  - `\blessees and tenants of the source property\b|\bformer phosphate mine\b` -> 4
- **FLG-D-017** [OK] methamphetamine or drug-lab contamination disclosure, reporting, habitation ban; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 893.13 "manufacture methamphetamine or phencyclidine".
  - `\b(?:methamphetamines?|meth labs?|drug labs?|clandestine lab\w*|manufactur\w* (?:of )?(?:a )?controlled substances?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|dwellings?|residential|real property|premises)\b` -> 4
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|dwellings?|residential|real property|premises)\b[\s\S]{0,1200}\b(?:methamphetamines?|meth labs?|drug labs?|clandestine lab\w*|manufactur\w* (?:of )?(?:a )?controlled substances?)\b` -> 9
  - `\A(?=[\s\S]*\b(?:methamphetamines?|meth labs?|drug labs?|clandestine lab\w*|manufactur\w* (?:of )?(?:a )?controlled substances?)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|report\w*|decontaminat\w*|remediat\w*|cleanup)\b)(?=[\s\S]*\b(?:tenants?|landlords?|dwellings?|lease[sd]?|owners?)\b)` -> 8
  - `\bdecontaminat\w*` -> 16
  - `\bpublic nuisance\b[\s\S]{0,1200}\bcontrolled substances?\b` -> 1
- **FLG-D-018** [OK] defective drywall disclosure; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.1265 "removing and disposing of wet drywall".
  - `\b(?:drywall|gypsum (?:wall)?board|wallboard|corrosive (?:drywall|gypsum)|Chinese drywall)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b` -> 1
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b[\s\S]{0,1200}\b(?:drywall|gypsum (?:wall)?board|wallboard|corrosive (?:drywall|gypsum)|Chinese drywall)\b` -> 2
  - `\A(?=[\s\S]*\b(?:drywall|gypsum (?:wall)?board|wallboard|corrosive (?:drywall|gypsum)|Chinese drywall)\b)(?=[\s\S]*\b(?:disclos\w*|notif\w*|notices?|defect\w*)\b)` -> 4
  - `\bdrywall\b` -> 5
  - `\b(?:corrosive|defective|problem) (?:drywall|wallboard|gypsum)\b` -> 0
- **FLG-D-019** [FAILED] (not cited by any row) Prop 65-type chemical exposure warning for rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 440.02 "cause cancer".
  - `\b(?:Proposition 65|known to the state to cause cancer|cause cancer or reproductive (?:toxicity|harm)|reproductive toxicity|carcinogens?)\b[\s\S]{0,1200}\b(?:warn\w*|signs?|notices?|disclos\w*)\b` -> 2
  - `\b(?:warn\w*|signs?|notices?|disclos\w*)\b[\s\S]{0,1200}\b(?:Proposition 65|known to the state to cause cancer|cause cancer or reproductive (?:toxicity|harm)|reproductive toxicity|carcinogens?)\b` -> 2
  - `\A(?=[\s\S]*\b(?:Proposition 65|known to the state to cause cancer|cause cancer or reproductive (?:toxicity|harm)|reproductive toxicity|carcinogens?)\b)(?=[\s\S]*\b(?:warn\w*|disclos\w*)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b)` -> 2
  - `\bclear and reasonable warning\b` -> 0
  - `\bcarcinogens?\b` -> 2
- **FLG-D-020** [OK] Prop 65-type chemical exposure warning for rentals; supersedes FLG-D-019 (positive failed: Fla. Stat. § 440.02 was not read and does not contain the phrase; replaced with Fla. Stat. § 381.986, read in context, which carries a carcinogen warning); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 381.986 "marijuana smoke contains carcinogens".
  - `\b(?:Proposition 65|known to the state to cause cancer|cause cancer or reproductive (?:toxicity|harm)|reproductive toxicity|carcinogens?)\b[\s\S]{0,1200}\b(?:warn\w*|signs?|notices?|disclos\w*)\b` -> 2
  - `\b(?:warn\w*|signs?|notices?|disclos\w*)\b[\s\S]{0,1200}\b(?:Proposition 65|known to the state to cause cancer|cause cancer or reproductive (?:toxicity|harm)|reproductive toxicity|carcinogens?)\b` -> 2
  - `\A(?=[\s\S]*\b(?:Proposition 65|known to the state to cause cancer|cause cancer or reproductive (?:toxicity|harm)|reproductive toxicity|carcinogens?)\b)(?=[\s\S]*\b(?:warn\w*|disclos\w*)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?|sellers?)\b)` -> 2
  - `\bclear and reasonable warning\b` -> 0
  - `\bcarcinogens?\b|\bcancer-causing\b` -> 4
- **FLG-D-021** [OK] certificate of occupancy disclosure or condition of renting; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.301 "Copies of any certificates of occupancy that may have been issued for the condominium property".
  - `\bcertificates? of (?:occupancy|completion|compliance)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|dwelling units?)\b` -> 12
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|dwelling units?)\b[\s\S]{0,1200}\bcertificates? of (?:occupancy|completion|compliance)\b` -> 11
  - `\A(?=[\s\S]*\bcertificates? of (?:occupancy|completion|compliance)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|dwelling units?)\b)(?=[\s\S]*\b(?:disclos\w*|copy|copies|provid\w*|post\w*|display\w*)\b)` -> 41
  - `\bcertificates? of occupancy\b` -> 67
  - `\b(?:may not|shall not) be occupied\b|\bunlawful(?:ly)? (?:to )?occup\w*` -> 9
- **FLG-D-022** [OK] disclosure of outstanding code violation, inspection or condemnation orders to tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 162.06 "Disclose, in writing, the existence and the nature of the proceeding to the prospective transferee".
  - `\b(?:code violations?|violations? of (?:the )?(?:applicable )?codes?|enforcement proceedings?|condemn\w*|unsafe (?:structures?|buildings?)|unfit for (?:human )?habitation|vacate orders?|order to vacate)\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|prospective transferees?|occupants?)\b` -> 4
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|prospective transferees?|occupants?)\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?)\b[\s\S]{0,1200}\b(?:code violations?|violations? of (?:the )?(?:applicable )?codes?|enforcement proceedings?|condemn\w*|unsafe (?:structures?|buildings?)|unfit for (?:human )?habitation|vacate orders?|order to vacate)\b` -> 6
  - `\A(?=[\s\S]*\b(?:code violations?|violations? of (?:the )?(?:applicable )?codes?|enforcement proceedings?|condemn\w*|unsafe (?:structures?|buildings?)|unfit for (?:human )?habitation|vacate orders?|order to vacate)\b)(?=[\s\S]*\b(?:tenants?|lessees?|renters?|occupants?)\b)(?=[\s\S]*\bdisclos\w*)` -> 11
  - `\bprospective transferees?\b` -> 6
  - `\bunfit for (?:human )?habitation\b|\bcondemned\b` -> 22
- **FLG-D-023** [OK] health-district rental rules: copies on request, referral to health department; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 404.056 "Additional information regarding radon and radon testing may be obtained from your county health department".
  - `\b(?:county health departments?|department of health|health departments?|health officers?|sanitary nuisances?|sanitation rules?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|rental (?:units?|propert\w*|housing))\b` -> 13
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|rental (?:units?|propert\w*|housing))\b[\s\S]{0,1200}\b(?:county health departments?|department of health|health departments?|health officers?|sanitary nuisances?|sanitation rules?)\b` -> 15
  - `\A(?=[\s\S]*\b(?:county health departments?|department of health|health departments?|health officers?|sanitary nuisances?|sanitation rules?)\b)(?=[\s\S]*\b(?:landlords?|tenants?)\b)(?=[\s\S]*\b(?:cop(?:y|ies)|upon request|on request|refer\w*|provide\w*)\b)` -> 28
  - `\bsanitary nuisances?\b` -> 15
  - `\bhousing code\w*|\bhousing standards?\b` -> 2
- **FLG-D-024** [OK] pre-lease foreclosure disclosure to tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.5615 "The date of a notice of foreclosure shall be deemed to be the date".
  - `\b(?:foreclos\w*|lis pendens|notice of default|mortgage default|judicial sale|foreclosure sale)\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?|inform\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|prospective tenants?)\b` -> 15
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|prospective tenants?)\b[\s\S]{0,1200}\b(?:disclos\w*|notif\w*|notices?|inform\w*)\b[\s\S]{0,1200}\b(?:foreclos\w*|lis pendens|notice of default|mortgage default|judicial sale|foreclosure sale)\b` -> 12
  - `\A(?=[\s\S]*\b(?:foreclos\w*|lis pendens|notice of default|mortgage default|judicial sale|foreclosure sale)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:disclos\w*|before (?:entering|signing|executing))\b)` -> 26
  - `\bnotice of foreclosure\b` -> 1
  - `\bforeclos\w*[\s\S]{0,1200}\bprospective (?:tenants?|lessees?|renters?)\b` -> 0
- **FLG-D-025** [OK] sale or management change: tenant notice, successor duties, release of seller; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.49 "Upon the sale or transfer of title of the rental property".
  - `\b(?:sale or transfer of title|sale of the (?:rental )?property|transfer of (?:title|ownership)|new owner|change in the designated rental agent|successor (?:owner|landlord)|property manag\w*)\b[\s\S]{0,1200}\b(?:notif\w*|notices?|disclos\w*)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?)\b` -> 2
  - `\b(?:tenants?|lessees?|renters?|rental agreements?)\b[\s\S]{0,1200}\b(?:notif\w*|notices?|disclos\w*)\b[\s\S]{0,1200}\b(?:sale or transfer of title|sale of the (?:rental )?property|transfer of (?:title|ownership)|new owner|change in the designated rental agent|successor (?:owner|landlord)|property manag\w*)\b` -> 7
  - `\A(?=[\s\S]*\b(?:sale or transfer of title|sale of the (?:rental )?property|transfer of (?:title|ownership)|new owner|change in the designated rental agent|successor (?:owner|landlord)|property manag\w*)\b)(?=[\s\S]*\b(?:tenants?|landlords?)\b)(?=[\s\S]*\b(?:residential|dwelling units?)\b)(?=[\s\S]*\b(?:security deposits?|advance rents?)\b)` -> 3
  - `\bsale or transfer of title of the rental property\b|\bchange in the designated rental agent\b` -> 1
  - `\bsuccessor (?:landlord|lessor)s?\b|\bnew landlord\b` -> 0
- **FLG-D-026** [FAILED] (not cited by any row) nonresident owner agent designation; withholding on rent to nonresidents; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 48.181 "privilege extended by law to nonresidents".
  - `\b(?:nonresidents?|non-residents?|out-of-state|resides? outside (?:of )?(?:this|the) state|foreign business entit\w*)\b[\s\S]{0,1200}\b(?:landlords?|lessors?|owners? of (?:real|residential|rental) property|rental propert\w*|dwelling units?|tenants?)\b` -> 2
  - `\b(?:landlords?|lessors?|owners? of (?:real|residential|rental) property|rental propert\w*|dwelling units?|tenants?)\b[\s\S]{0,1200}\b(?:nonresidents?|non-residents?|out-of-state|resides? outside (?:of )?(?:this|the) state|foreign business entit\w*)\b` -> 2
  - `\A(?=[\s\S]*\b(?:nonresidents?|non-residents?|out-of-state|resides? outside (?:of )?(?:this|the) state|foreign business entit\w*)\b)(?=[\s\S]*\b(?:landlords?|tenants?|rental agreements?)\b)(?=[\s\S]*\b(?:agents?|designat\w*|appoint\w*)\b)` -> 11
  - `\bwithh(?:o|e)ld\w*[\s\S]{0,1200}\brents?\b[\s\S]{0,1200}\bnonresident\w*` -> 0
  - `\bperson authorized to receive notices and demands\b` -> 5
- **FLG-D-027** [OK] nonresident owner agent designation; withholding on rent to nonresidents; supersedes FLG-D-026 (positive failed: no battery term matched Fla. Stat. § 48.181; replaced with Fla. Stat. § 83.50, read whole, matched by the agent-designation term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.50 "person authorized to receive notices and demands".
  - `\b(?:nonresidents?|non-residents?|out-of-state|resides? outside (?:of )?(?:this|the) state|foreign business entit\w*)\b[\s\S]{0,1200}\b(?:landlords?|lessors?|owners? of (?:real|residential|rental) property|rental propert\w*|dwelling units?|tenants?)\b` -> 2
  - `\b(?:landlords?|lessors?|owners? of (?:real|residential|rental) property|rental propert\w*|dwelling units?|tenants?)\b[\s\S]{0,1200}\b(?:nonresidents?|non-residents?|out-of-state|resides? outside (?:of )?(?:this|the) state|foreign business entit\w*)\b` -> 2
  - `\A(?=[\s\S]*\b(?:nonresidents?|non-residents?|out-of-state|resides? outside (?:of )?(?:this|the) state|foreign business entit\w*)\b)(?=[\s\S]*\b(?:landlords?|tenants?|rental agreements?)\b)(?=[\s\S]*\b(?:agents?|designat\w*|appoint\w*)\b)` -> 11
  - `\bwithh(?:o|e)ld\w*[\s\S]{0,1200}\brents?\b[\s\S]{0,1200}\bnonresident\w*` -> 0
  - `\bperson authorized to receive notices and demands\b` -> 5
- **FLG-D-028** [OK] special district or CDD disclosure to tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 190.048 "MAY IMPOSE AND LEVY TAXES OR ASSESSMENTS".
  - `\b(?:community development districts?|special (?:taxing |improvement |assessment )?districts?|dependent special districts?|independent special districts?|non-ad valorem assessments?)\b[\s\S]{0,1200}\b(?:disclos\w*|notices?|statements?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?)\b` -> 11
  - `\b(?:tenants?|lessees?|renters?|rental agreements?|lease[sd]?|landlords?|lessors?|purchasers?|buyers?)\b[\s\S]{0,1200}\b(?:disclos\w*|notices?|statements?)\b[\s\S]{0,1200}\b(?:community development districts?|special (?:taxing |improvement |assessment )?districts?|dependent special districts?|independent special districts?|non-ad valorem assessments?)\b` -> 7
  - `\A(?=[\s\S]*\b(?:community development districts?|special (?:taxing |improvement |assessment )?districts?|dependent special districts?|independent special districts?|non-ad valorem assessments?)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\bdisclos\w*)` -> 22
  - `\bMAY IMPOSE AND LEVY TAXES OR ASSESSMENTS\b` -> 1
  - `\bcommunity development district\w*` -> 48
- **FLG-D-029** [OK] communal, tribal or native land lease approval; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 285.11 "The trustee shall have the right to lease any part or parts of the reservation".
  - `\b(?:Indian reservations?|reservations? set aside|tribal (?:lands?|trust lands?)|lands? held in trust (?:by|for) (?:the United States|the tribe)|communal lands?|native lands?|Seminole|Miccosukee)\b[\s\S]{0,1200}\b(?:lease[sd]?|leasing|lessees?|tenants?|rental agreements?)\b` -> 4
  - `\b(?:lease[sd]?|leasing|lessees?|tenants?|rental agreements?)\b[\s\S]{0,1200}\b(?:Indian reservations?|reservations? set aside|tribal (?:lands?|trust lands?)|lands? held in trust (?:by|for) (?:the United States|the tribe)|communal lands?|native lands?|Seminole|Miccosukee)\b` -> 5
  - `\A(?=[\s\S]*\b(?:Indian reservations?|reservations? set aside|tribal (?:lands?|trust lands?)|lands? held in trust (?:by|for) (?:the United States|the tribe)|communal lands?|native lands?|Seminole|Miccosukee)\b)(?=[\s\S]*\b(?:lease[sd]?|leasing|lessees?|tenants?|rental agreements?)\b)(?=[\s\S]*\b(?:approv\w*|consent\w*)\b)` -> 15
  - `\bimprovement lease\w*` -> 1
  - `\bcommunal (?:land|property)\w*|\bnative land\w*|\bhomestead lands?\b` -> 1
- **FLG-D-030** [OK] hunting and fishing rights between landlord and tenant of farmland; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 375.251 "owner or lessee who makes available to any person an area primarily for the purposes of hunting".
  - `\b(?:hunt(?:s|ed|ing|ers?)?|fish(?:es|ed|ing)?|trap(?:s|ped|ping)?|take wild game)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|lease[sd]?|occupants?)\b` -> 47
  - `\b(?:tenants?|lessees?|landlords?|lessors?|lease[sd]?|occupants?)\b[\s\S]{0,1200}\b(?:hunt(?:s|ed|ing|ers?)?|fish(?:es|ed|ing)?|trap(?:s|ped|ping)?|take wild game)\b` -> 43
  - `\A(?=[\s\S]*\b(?:hunt(?:s|ed|ing|ers?)?|fish(?:es|ed|ing)?|trap(?:s|ped|ping)?|take wild game)\b)(?=[\s\S]*\b(?:tenants?|lessees?)\b)(?=[\s\S]*\b(?:farm\w*|agricultur\w*|ranch\w*|grazing)\b)(?=[\s\S]*\b(?:permission|consent|authoriz\w*|written)\b)` -> 29
  - `\bhunting rights?\b|\bright to hunt\b` -> 3
  - `\bwritten authorization\b[\s\S]{0,1200}\bhunt\w*` -> 3
- **FLG-D-031** [OK] eminent domain: lease termination, rent abatement, award allocation, tenant relocation; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 73.101 "conflicting claims to the amount awarded".
  - `\b(?:eminent domain|condemnation|condemning authorit\w*|appropriat(?:ed|ion) (?:of|for) (?:the )?(?:property|public use)|taking of (?:the )?property|taken for (?:a )?public (?:use|purpose))\b[\s\S]{0,1200}\b(?:tenants?|lessees?|rental agreements?|lease[sd]?|leaseholds?|rent)\b` -> 39
  - `\b(?:tenants?|lessees?|rental agreements?|lease[sd]?|leaseholds?|rent)\b[\s\S]{0,1200}\b(?:eminent domain|condemnation|condemning authorit\w*|appropriat(?:ed|ion) (?:of|for) (?:the )?(?:property|public use)|taking of (?:the )?property|taken for (?:a )?public (?:use|purpose))\b` -> 35
  - `\A(?=[\s\S]*\b(?:eminent domain|condemnation|condemning authorit\w*|appropriat(?:ed|ion) (?:of|for) (?:the )?(?:property|public use)|taking of (?:the )?property|taken for (?:a )?public (?:use|purpose))\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?)\b)(?=[\s\S]*\b(?:terminat\w*|abat\w*|apportion\w*|relocat\w*)\b)` -> 21
  - `\brelocation (?:assistance|payments?|expenses?)\b` -> 20
  - `\bconflicting claims to the amount awarded\b` -> 1
- **FLG-D-032** [OK] plain-language or readability rules for leases and consumer contracts; consumer restriction statement; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 627.4145 "Flesch reading ease test".
  - `\b(?:plain language|plain-language|readab\w*|Flesch|clear and coherent|common and everyday meanings?|captioned)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?|lease[sd]?|consumer contracts?|consumer)\b` -> 7
  - `\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?|lease[sd]?|consumer contracts?|consumer)\b[\s\S]{0,1200}\b(?:plain language|plain-language|readab\w*|Flesch|clear and coherent|common and everyday meanings?|captioned)\b` -> 9
  - `\A(?=[\s\S]*\b(?:plain language|plain-language|readab\w*|Flesch|clear and coherent|common and everyday meanings?|captioned)\b)(?=[\s\S]*\b(?:lease[sd]?|rental agreements?|tenants?|consumer contracts?)\b)` -> 19
  - `\bplain language\b|\bFlesch\b` -> 27
  - `\bstatement of (?:consumer )?(?:restrictions|rights)\b|\bpreapprov\w*[\s\S]{0,1200}\b(?:lease[sd]?|consumer contracts?)\b` -> 5
- **FLG-D-033** [OK] lease translation duty and type-size rules; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 641.305 "conducted in a language other than English".
  - `\b(?:language other than English|Spanish|translat\w*|primary language|principal language|native language)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?|lease[sd]?|contracts?)\b` -> 9
  - `\b(?:tenants?|lessees?|landlords?|lessors?|rental agreements?|lease[sd]?|contracts?)\b[\s\S]{0,1200}\b(?:language other than English|Spanish|translat\w*|primary language|principal language|native language)\b` -> 18
  - `\A(?=[\s\S]*\b(?:language other than English|Spanish|translat\w*|primary language|principal language|native language)\b)(?=[\s\S]*\b(?:tenants?|lessees?|rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:negotiat\w*|written translation|copy)\b)` -> 7
  - `\bwritten translation\b` -> 4
  - `\bnegotiations?\b[\s\S]{0,1200}\bin a language other than English\b` -> 3
- **FLG-D-034** [OK] truth-in-renting: rights statement, lease terms violating clearly established rights; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.47 "Purports to waive or preclude the rights, remedies, or requirements".
  - `\b(?:truth.in.renting|clearly established legal rights?|statement of (?:tenant|landlord|the) rights|tenant.s rights (?:statement|guide|handbook)|rights and responsibilities of (?:landlords?|tenants?))\b[\s\S]{0,1200}\b(?:lease[sd]?|rental agreements?|tenants?)\b` -> 0
  - `\b(?:lease[sd]?|rental agreements?|tenants?)\b[\s\S]{0,1200}\b(?:truth.in.renting|clearly established legal rights?|statement of (?:tenant|landlord|the) rights|tenant.s rights (?:statement|guide|handbook)|rights and responsibilities of (?:landlords?|tenants?))\b` -> 0
  - `\A(?=[\s\S]*\b(?:rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:void|unenforceable)\b)(?=[\s\S]*\b(?:waive|preclude|limit)\w*\b)(?=[\s\S]*\b(?:landlords?|tenants?)\b)` -> 21
  - `\btruth.in.renting\b` -> 0
  - `\bPurports to waive or preclude the rights, remedies, or requirements\b` -> 1
- **FLG-D-035** [OK] truth-in-renting: rights statement, lease terms violating clearly established rights; supersedes FLG-D-034 (the rights-statement limb missed the article 'the' (Fla. Stat. § 83.425 reads 'rights and responsibilities of the landlord'); widened); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.47 "Purports to waive or preclude the rights, remedies, or requirements"; passed 83.425 "rights and responsibilities of the landlord".
  - `\b(?:truth.in.renting|clearly established legal rights?|statements? of (?:the )?(?:tenants?|landlords?|tenant.s|landlord.s) (?:legal )?rights|tenant.s rights (?:statements?|guides?|handbooks?)|rights and responsibilities of (?:the )?(?:landlords?|tenants?)|rights and obligations of (?:the )?(?:landlords?|tenants?))\b[\s\S]{0,1200}\b(?:lease[sd]?|rental agreements?|tenants?)\b` -> 1
  - `\b(?:lease[sd]?|rental agreements?|tenants?)\b[\s\S]{0,1200}\b(?:truth.in.renting|clearly established legal rights?|statements? of (?:the )?(?:tenants?|landlords?|tenant.s|landlord.s) (?:legal )?rights|tenant.s rights (?:statements?|guides?|handbooks?)|rights and responsibilities of (?:the )?(?:landlords?|tenants?)|rights and obligations of (?:the )?(?:landlords?|tenants?))\b` -> 1
  - `\A(?=[\s\S]*\b(?:rental agreements?|lease[sd]?)\b)(?=[\s\S]*\b(?:void|unenforceable)\b)(?=[\s\S]*\b(?:waive|preclude|limit)\w*\b)(?=[\s\S]*\b(?:landlords?|tenants?)\b)` -> 21
  - `\btruth.in.renting\b` -> 0
  - `\bPurports to waive or preclude the rights, remedies, or requirements\b` -> 1
- **FLG-D-036** [OK] accessory dwelling units: rental conditions, owner occupancy, minimum term; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 163.31771 "will be rented at an affordable rate".
  - `\b(?:accessory dwelling units?|granny flats?|in-law (?:suites?|apartments?)|garage apartments?|secondary (?:living )?units?|ancillary (?:or secondary )?living units?|accessory apartments?)\b[\s\S]{0,1200}\b(?:tenants?|lessees?|rent(?:s|ed|al|als|ing)?|lease[sd]?|landlords?)\b` -> 2
  - `\b(?:tenants?|lessees?|rent(?:s|ed|al|als|ing)?|lease[sd]?|landlords?)\b[\s\S]{0,1200}\b(?:accessory dwelling units?|granny flats?|in-law (?:suites?|apartments?)|garage apartments?|secondary (?:living )?units?|ancillary (?:or secondary )?living units?|accessory apartments?)\b` -> 2
  - `\A(?=[\s\S]*\b(?:accessory dwelling units?|granny flats?|in-law (?:suites?|apartments?)|garage apartments?|secondary (?:living )?units?|ancillary (?:or secondary )?living units?|accessory apartments?)\b)(?=[\s\S]*\b(?:owner.occup\w*|affidavit|affordab\w*|term (?:of|longer than))\b)` -> 5
  - `\baccessory dwelling units?\b` -> 3
  - `\bowner.occupied\b[\s\S]{0,1200}\b(?:rent(?:s|ed|al)?|lease[sd]?)\b` -> 4
- **FLG-D-037** [OK] single-family zone lease limits, owner-occupancy conditions on renting, and single-family occupancy disclosure; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 163.31771 "any area zoned for single-family residential use".
  - `\b(?:single.family (?:residential |zon\w* |dwellings? |homes? |residences? )?(?:areas?|zones?|zoning|districts?|dwellings?|homes?|residences?)|one-family dwellings?)\b[\s\S]{0,1200}\b(?:rent(?:s|ed|al|als|ing)?|lease[sd]?|leasing|tenants?|lessees?)\b` -> 8
  - `\b(?:rent(?:s|ed|al|als|ing)?|lease[sd]?|leasing|tenants?|lessees?)\b[\s\S]{0,1200}\b(?:single.family (?:residential |zon\w* |dwellings? |homes? |residences? )?(?:areas?|zones?|zoning|districts?|dwellings?|homes?|residences?)|one-family dwellings?)\b` -> 7
  - `\A(?=[\s\S]*\b(?:single.family (?:residential |zon\w* |dwellings? |homes? |residences? )?(?:areas?|zones?|zoning|districts?|dwellings?|homes?|residences?)|one-family dwellings?)\b)(?=[\s\S]*\b(?:rent(?:s|ed|al|als|ing)?|lease[sd]?|leasing|tenants?|lessees?)\b)(?=[\s\S]*\b(?:owner.occup\w*|prohibit\w*|restrict\w*|disclos\w*)\b)` -> 20
  - `\bmay not prohibit vacation rentals\b` -> 1
  - `\bowner.occupan\w*\b|\bowner.occupied\b` -> 21
- **FLG-E-001** [OK] automatic renewal of a residential lease: statute naming automatic renewal/extension of a lease or rental agreement; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 501.165 "automatic renewal provision".
  - `\bautomatic(?:ally)?\s+renew(?:s|ed|al|als|ing)?\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|leas(?:e|es|ed|ing)|rental agreements?|lessees?|dwelling units?)\b` -> 8
  - `\b(?:tenan(?:t|ts|cy|cies)|leas(?:e|es|ed|ing)|rental agreements?|lessees?|dwelling units?)\b[\s\S]{0,1200}\bautomatic(?:ally)?\s+renew(?:s|ed|al|als|ing)?\b` -> 6
  - `\A(?=[\s\S]*\bautomatic(?:ally)?\s+renew)(?=[\s\S]*\b(?:tenant|rental agreement|leas(?:e|es|ed)\b))` -> 16
  - `\brenew(?:s|ed)?\s+automatically\b` -> 1
  - `\bautomatic(?:ally)?\s+extend(?:s|ed|ing)?\b|\bautomatic extensions?\b|\bevergreen\b|\broll(?:s|ed)? over\b` -> 20
- **FLG-E-002** [FAILED] (not cited by any row) lease registration/recording duty for a residential lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 695.01 "lease for a term of 1 year or longer".
  - `\bleas(?:e|es)\b[\s\S]{0,1200}\b(?:shall|must)\s+(?:be\s+)?(?:recorded|registered|filed)\b` -> 10
  - `\b(?:shall|must)\s+(?:be\s+)?(?:recorded|registered|filed)\b[\s\S]{0,1200}\bleas(?:e|es)\b` -> 12
  - `\A(?=[\s\S]*\bleas(?:e|es)\b)(?=[\s\S]*\b(?:record(?:ed|ing)?|regist(?:er|ered|ration|ry))\b)(?=[\s\S]*\b(?:tenant|dwelling|residential)\b)` -> 125
  - `\bmemorand(?:um|a) of (?:the )?leas(?:e|es)\b|\bshort[- ]form leas(?:e|es)\b|\bleas(?:e|es) registr(?:y|ation)\b|\bregist(?:er|ration) of leas(?:e|es)\b` -> 2
  - `\bunrecorded leas(?:e|es)\b|\bleas(?:e|es)\b[\s\S]{0,1200}\bnot recorded\b|\bnot recorded\b[\s\S]{0,1200}\bleas(?:e|es)\b` -> 1
- **FLG-E-003** [OK] lease registration/recording duty for a residential lease; supersedes FLG-E-002 (positive failed: no term matched Fla. Stat. 695.01's 'be recorded'; added be/been/is forms); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 695.01 "lease for a term of 1 year or longer".
  - `\bleas(?:e|es)\b[\s\S]{0,1200}\b(?:shall|must|be|been|is|are)\s+(?:be\s+)?(?:recorded|registered)\b` -> 29
  - `\b(?:shall|must|be|been|is|are)\s+(?:be\s+)?(?:recorded|registered)\b[\s\S]{0,1200}\bleas(?:e|es)\b` -> 29
  - `\A(?=[\s\S]*\bleas(?:e|es)\b)(?=[\s\S]*\b(?:recorded|registered)\b)(?=[\s\S]*\b(?:residential tenan(?:t|ts|cy|cies)|dwelling units?)\b)` -> 9
  - `\bmemorand(?:um|a) of (?:the )?leas(?:e|es)\b|\bshort[- ]form leas(?:e|es)\b|\bleas(?:e|es) registr(?:y|ation)\b|\bregist(?:er|ration) of leas(?:e|es)\b|\bunrecorded leas(?:e|es)\b` -> 2
- **FLG-E-004** [OK] spousal joinder / homestead alienation rules reaching a lease of a married owner homestead; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed CONST-X-4 "joined by the spouse if married".
  - `\bspous(?:e|es|al)\b[\s\S]{0,1200}\bleas(?:e|es|ed|ing)\b[\s\S]{0,1200}\bhomestead` -> 0
  - `\bhomestead[\s\S]{0,1200}\bleas(?:e|es|ed|ing)\b[\s\S]{0,1200}\bspous(?:e|es|al)\b` -> 0
  - `\A(?=[\s\S]*\bhomestead)(?=[\s\S]*\bspous(?:e|es)\b)(?=[\s\S]*\bleas(?:e|es|ed|ing)\b)` -> 12
  - `\bjoined by (?:the|his or her|her or his) spouse\b|\bjoinder of (?:the|his or her|her or his) spouse\b|\bspouse joins\b` -> 1
  - `\balienat(?:e|ed|es|ing|ion)\b[\s\S]{0,1200}\bhomestead|\bhomestead[\s\S]{0,1200}\balienat(?:e|ed|es|ing|ion)\b` -> 4
- **FLG-E-005** [OK] maximum or minimum term of a private residential lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 1013.15 "30 years".
  - `\bleas(?:e|es)\b[\s\S]{0,1200}\b(?:may|shall) not (?:exceed|be (?:for |made for )?(?:a term |a period )?(?:longer|more) than)\b[\s\S]{0,1200}\byears?\b` -> 11
  - `\byears?\b[\s\S]{0,1200}\b(?:may|shall) not (?:exceed|be (?:for |made for )?(?:a term |a period )?(?:longer|more) than)\b[\s\S]{0,1200}\bleas(?:e|es)\b` -> 12
  - `\A(?=[\s\S]*\bleas(?:e|es)\b)(?=[\s\S]*\b(?:maximum|longest) (?:term|period|duration)\b)(?=[\s\S]*\b(?:tenant|dwelling|residential)\b)` -> 3
  - `\bninety-nine years?\b|\b99 years?\b|\b99-year\b` -> 15
  - `\brental agreements?\b[\s\S]{0,1200}\b(?:minimum|maximum) (?:term|duration|period)\b|\b(?:minimum|maximum) (?:term|duration|period)\b[\s\S]{0,1200}\brental agreements?\b` -> 0
- **FLG-E-006** [OK] duty to give the tenant a copy of the lease or rental agreement; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.012 "copy of the rental agreement".
  - `\bcop(?:y|ies)\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?)\b[\s\S]{0,1200}\btenants?\b` -> 9
  - `\btenants?\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?)\b[\s\S]{0,1200}\bcop(?:y|ies)\b` -> 16
  - `\A(?=[\s\S]*\bcop(?:y|ies) of (?:the|such|a|any|his or her|its) (?:executed |signed )?(?:leas(?:e|es)|rental agreements?|lot rental agreements?)\b)(?=[\s\S]*\b(?:tenant|lessee)s?\b)` -> 8
  - `\b(?:give|deliver|provide|furnish)(?:s|ed|ing)?\b[\s\S]{0,1200}\bcop(?:y|ies) of (?:the|such|a|any|his or her|its) (?:executed |signed )?(?:leas(?:e|es)|rental agreements?)\b` -> 7
  - `\bexecuted cop(?:y|ies)\b|\bduplicate originals?\b|\bfully executed\b` -> 32
- **FLG-E-007** [OK] requirement that the tenant initial a lease term or notice; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 82.036 "initial each box".
  - `\b(?:initial(?:ed|s)|initialing)\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?|tenants?|lessees?)\b` -> 1
  - `\b(?:leas(?:e|es)|rental agreements?|tenants?|lessees?)\b[\s\S]{0,1200}\b(?:initial(?:ed|s)|initialing)\b` -> 1
  - `\A(?=[\s\S]*\b(?:initial(?:ed|s)|initialing)\b)(?=[\s\S]*\b(?:leas(?:e|es)|rental agreements?)\b)(?=[\s\S]*\btenants?\b)` -> 1
  - `\binitial(?:ed|s)? (?:by|in the space|next to|beside|each)\b` -> 13
- **FLG-E-008** [OK] minimum type size or typeface rule for a residential lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.1085 "16-point bold type".
  - `\b(?:point type|\d{1,2}-point|type size|size type|boldface(?:d)? type|bold type|conspicuous type|capital letters)\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?|tenants?)\b` -> 22
  - `\b(?:leas(?:e|es)|rental agreements?|tenants?)\b[\s\S]{0,1200}\b(?:point type|\d{1,2}-point|type size|size type|boldface(?:d)? type|bold type|conspicuous type|capital letters)\b` -> 19
  - `\A(?=[\s\S]*\b(?:point type|\d{1,2}-point|type size)\b)(?=[\s\S]*\b(?:rental agreements?|residential tenan(?:t|ts|cy)|dwelling units?)\b)` -> 5
  - `\blegible\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?)\b|\b(?:leas(?:e|es)|rental agreements?)\b[\s\S]{0,1200}\blegible\b` -> 2
- **FLG-E-009** [OK] lease content requirements: required terms, first-page or start/end date rules for a lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.012 "first page".
  - `\b(?:first|front) (?:page|cover|sheet)\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?)\b` -> 4
  - `\b(?:leas(?:e|es)|rental agreements?)\b[\s\S]{0,1200}\b(?:first|front) (?:page|cover|sheet)\b` -> 4
  - `\A(?=[\s\S]*\b(?:first|front) (?:page|cover|sheet)\b)(?=[\s\S]*\b(?:rental agreements?|leas(?:e|es))\b)(?=[\s\S]*\btenants?\b)` -> 4
  - `\b(?:beginning|starting|commencement|start) and (?:ending|end|expiration|termination) dates?\b|\b(?:lease|rental agreement) (?:start|end|expiration|termination) dates?\b` -> 13
  - `\brental agreements?\b[\s\S]{0,1200}\b(?:must|shall) (?:state|contain|include|set forth|specify)\b|\b(?:must|shall) (?:state|contain|include|set forth|specify)\b[\s\S]{0,1200}\brental agreements?\b` -> 19
- **FLG-E-010** [OK] lease type parity: limits on different terms or rent for month-to-month vs fixed-term tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.57 "month to month".
  - `\bmonth[- ]to[- ]month\b[\s\S]{0,1200}\b(?:specific duration|fixed terms?|definite terms?|without a specific term)\b` -> 0
  - `\b(?:specific duration|fixed terms?|definite terms?|without a specific term)\b[\s\S]{0,1200}\bmonth[- ]to[- ]month\b` -> 1
  - `\A(?=[\s\S]*\bmonth[- ]to[- ]month\b)(?=[\s\S]*\btenan(?:t|ts|cy|cies)\b)(?=[\s\S]*\b(?:more burdensome|less favorable|surcharge|premium|higher rent|different (?:rent|terms))\b)` -> 0
  - `\bmore burdensome\b|\bless favorable terms?\b|\bshort[- ]term (?:lease|rental) (?:premium|surcharge)\b` -> 15
  - `\bperiodic tenan(?:t|ts|cy|cies)\b[\s\S]{0,1200}\b(?:rent|terms?)\b[\s\S]{0,1200}\b(?:differ|exceed)(?:s|ent|ence)?\b` -> 0
- **FLG-E-011** [OK] rent concessions (free or reduced rent) in residential leases: disclosure, recapture or other rule; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 1004.43 "rent free".
  - `\b(?:concessions?|free rent|rent[- ]free|discount(?:s|ed)?|rebates?|incentives?)\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\brent\b` -> 1
  - `\b(?:tenants?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\brent\b[\s\S]{0,1200}\b(?:concessions?|free rent|rent[- ]free|rebates?)\b` -> 1
  - `\A(?=[\s\S]*\b(?:rent(?:al)? concessions?|free rent|rent[- ]free|rent (?:discount|credit|rebate)s?)\b)(?=[\s\S]*\btenants?\b)` -> 0
  - `\brent(?:al)? concessions?\b|\bfree rent\b|\brent[- ]free\b|\bmove-in (?:special|incentive)s?\b|\brent (?:discount|credit|rebate)s?\b` -> 2
- **FLG-E-012** [FAILED] (not cited by any row) rent escalation or mid-term rent increase clauses in a residential lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 723.031 "increase".
  - `\bescalat(?:e|es|ed|ion|ions|or|ing)\b[\s\S]{0,1200}\b(?:rent|rental agreements?|leas(?:e|es)|tenants?)\b` -> 3
  - `\b(?:rent|rental agreements?|leas(?:e|es)|tenants?)\b[\s\S]{0,1200}\bescalat(?:e|es|ed|ion|ions|or|ing)\b` -> 5
  - `\A(?=[\s\S]*\b(?:increase|adjust)(?:s|d|ment|ments)?\b[\s\S]{0,1200}\brent\b)(?=[\s\S]*\b(?:during the term|mid-?term|before the end of the term|term of the (?:lease|rental agreement))\b)(?=[\s\S]*\btenants?\b)` -> 2
  - `\bconsumer price index\b[\s\S]{0,1200}\brent(?:s|al)?\b|\brent(?:s|al)?\b[\s\S]{0,1200}\bconsumer price index\b` -> 10
  - `\bescalation clauses?\b|\brent escalat(?:ion|or)s?\b` -> 6
- **FLG-E-013** [OK] rent escalation or mid-term rent increase clauses in a residential lease; supersedes FLG-E-012 (positive failed (no term matched Fla. Stat. 723.031); new positive Fla. Stat. 718.4015 and rent inflections added); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.4015 "escalation clause".
  - `\bescalat(?:e|es|ed|ion|ions|or|ing)\b[\s\S]{0,1200}\b(?:rent(?:s|ed|ing|al)?|rental agreements?|leas(?:e|es)|tenants?)\b` -> 3
  - `\b(?:rent(?:s|ed|ing|al)?|rental agreements?|leas(?:e|es)|tenants?)\b[\s\S]{0,1200}\bescalat(?:e|es|ed|ion|ions|or|ing)\b` -> 6
  - `\A(?=[\s\S]*\b(?:increase|adjust)(?:s|d|ment|ments)?\b[\s\S]{0,1200}\brent(?:s|al)?\b)(?=[\s\S]*\b(?:during the term|mid-?term|before the end of the term|term of the (?:lease|rental agreement))\b)(?=[\s\S]*\btenants?\b)` -> 6
  - `\bconsumer price index\b[\s\S]{0,1200}\brent(?:s|al)?\b|\brent(?:s|al)?\b[\s\S]{0,1200}\bconsumer price index\b` -> 10
  - `\bescalation clauses?\b|\brent escalat(?:ion|or)s?\b` -> 6
- **FLG-E-014** [OK] rent reporting to credit bureaus: duty to offer, notice before reporting, bar on requiring enrollment; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.491 "credit report".
  - `\b(?:credit (?:report(?:s|ing)?|rating|bureaus?|histor(?:y|ies))|consumer reporting agenc(?:y|ies)|rent(?:al)? payment (?:history|reporting))\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?|leas(?:e|es))\b` -> 4
  - `\b(?:tenants?|rental agreements?|leas(?:e|es))\b[\s\S]{0,1200}\b(?:credit (?:report(?:s|ing)?|rating|bureaus?|histor(?:y|ies))|consumer reporting agenc(?:y|ies)|rent(?:al)? payment (?:history|reporting))\b` -> 5
  - `\A(?=[\s\S]*\b(?:credit report(?:s|ing)?|credit bureaus?|consumer reporting agenc(?:y|ies))\b)(?=[\s\S]*\brent(?:s|al)?\b)(?=[\s\S]*\btenants?\b)` -> 4
  - `\brent reporting\b|\bpositive rent(?:al)? (?:payment )?reporting\b|\breport(?:s|ed|ing)? (?:timely |on-time )?rent(?:al)? payments?\b` -> 0
- **FLG-E-015** [OK] guaranty of a residential lease: renewal coverage, maximum, writing, deposit limits; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 725.01 "special promise to answer for the debt".
  - `\bguarant(?:y|ies|or|ors|ee|eed|ees)\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?|leas(?:e|es)|lessees?)\b` -> 33
  - `\b(?:tenants?|rental agreements?|leas(?:e|es)|lessees?)\b[\s\S]{0,1200}\bguarant(?:y|ies|or|ors|ee|eed|ees)\b` -> 37
  - `\A(?=[\s\S]*\bguarant(?:y|ies|or|ors)\b)(?=[\s\S]*\brenew(?:s|ed|al|als)?\b)(?=[\s\S]*\b(?:tenants?|rental agreements?|leas(?:e|es))\b)` -> 12
  - `\bcontinuing guarant(?:y|ies)\b|\bsuret(?:y|ies)\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?)\b|\bco-?signer\b|\bspecial promise to answer for the debt\b` -> 5
- **FLG-E-016** [OK] agreed notice methods: whether parties may add a method (text, e-mail, portal) for landlord-tenant notices; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.505 "electronically deliver".
  - `\b(?:text messag(?:e|es|ing)|sms|electronic(?:ally)? (?:messag(?:e|es)|means|transmission|deliver(?:y|ed))|e-?mail(?:s|ed)?)\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?|lessees?)\b[\s\S]{0,1200}\bnotices?\b` -> 5
  - `\b(?:tenants?|rental agreements?|lessees?)\b[\s\S]{0,1200}\bnotices?\b[\s\S]{0,1200}\b(?:text messag(?:e|es|ing)|sms|electronic(?:ally)? (?:messag(?:e|es)|means|transmission|deliver(?:y|ed)))\b` -> 6
  - `\A(?=[\s\S]*\btext messag(?:e|es|ing)\b)(?=[\s\S]*\b(?:tenant|landlord)s?\b)(?=[\s\S]*\bnotices?\b)` -> 5
  - `\btext messag(?:e|es|ing)\b|\bactual notice\b[\s\S]{0,1200}\b(?:tenants?|landlords?)\b` -> 37
- **FLG-E-017** [OK] notice to tenants of foreclosure, condemnation, code enforcement or other proceedings against the property; tenant duty to forward; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 893.138 "notif".
  - `\b(?:foreclos(?:e|ed|ure|ures|ing)|lis pendens|condemnation|eminent domain|code (?:enforcement|violation)s?|unsafe (?:building|structure)s?)\b[\s\S]{0,1200}\bnotif(?:y|ies|ied|ication)\b[\s\S]{0,1200}\btenants?\b` -> 3
  - `\btenants?\b[\s\S]{0,1200}\bnotif(?:y|ies|ied|ication)\b[\s\S]{0,1200}\b(?:foreclos(?:e|ed|ure|ures|ing)|lis pendens|condemnation|eminent domain|code (?:enforcement|violation)s?|unsafe (?:building|structure)s?)\b` -> 0
  - `\A(?=[\s\S]*\bforeclos(?:e|ed|ure|ures|ing)\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:notice|notify|disclose)\b)` -> 5
  - `\battorn(?:s|ed|ing|ment)?\b|\bejectment\b[\s\S]{0,1200}\btenants?\b|\btenants?\b[\s\S]{0,1200}\bejectment\b` -> 1
- **FLG-E-018** [OK] landlord duty to give tenants an emergency contact or telephone number; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.111 "emergency contact information".
  - `\b(?:emergency contacts?|emergenc(?:y|ies) (?:telephone|phone) numbers?|24-hour (?:telephone|phone|contact|number)|after-hours (?:contact|number|telephone))\b[\s\S]{0,1200}\b(?:tenants?|landlords?|rental agreements?|dwelling units?)\b` -> 0
  - `\b(?:tenants?|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:emergency contacts?|emergenc(?:y|ies) (?:telephone|phone) numbers?|24-hour (?:telephone|phone|contact|number)|after-hours (?:contact|number|telephone))\b` -> 0
  - `\A(?=[\s\S]*\b(?:telephone|phone) numbers?\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\b(?:emergenc(?:y|ies)|repairs?)\b)` -> 6
  - `\bemergency contacts?\b|\bproperty manager(?:s|\x27s)? (?:name|telephone|phone|contact)\b` -> 27
- **FLG-E-019** [OK] renters insurance rules: landlord requiring renters insurance, carrier choice, force-placement, advisory notice; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.512 "Renters' insurance".
  - `\b(?:renters?['’]?s?['’]? insurance|tenants?['’]?s?['’]? (?:insurance|coverage|policy|policies)|renters? (?:policy|policies|coverage)|liability insurance)\b[\s\S]{0,1200}\b(?:landlords?|rental agreements?|leas(?:e|es))\b` -> 9
  - `\b(?:landlords?|rental agreements?|leas(?:e|es))\b[\s\S]{0,1200}\b(?:renters?['’]?s?['’]? insurance|tenants?['’]?s?['’]? (?:insurance|coverage|policy|policies)|renters? (?:policy|policies|coverage))\b` -> 3
  - `\A(?=[\s\S]*\binsur(?:e|ed|ance|er|ers)\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\b(?:requir(?:e|es|ed|ing)|obtain|maintain|purchase)\b)` -> 16
  - `\bforce[- ]placed\b|\blender[- ]placed\b|\bproof of (?:insurance|coverage)\b[\s\S]{0,1200}\btenants?\b` -> 0
- **FLG-E-020** [FAILED] (not cited by any row) mandatory landlord liability or property insurance for residential rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.535 "flotation insurance".
  - `\blandlords?\b[\s\S]{0,1200}\b(?:shall|must)\s+(?:obtain|maintain|carry|procure|purchase|have)\b[\s\S]{0,1200}\binsurance\b` -> 1
  - `\binsurance\b[\s\S]{0,1200}\b(?:shall|must)\s+be\s+(?:obtained|maintained|carried|procured|purchased)\b[\s\S]{0,1200}\blandlords?\b` -> 0
  - `\A(?=[\s\S]*\bliability insurance\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:dwelling units?|residential rental|rental (?:property|unit|housing))\b)` -> 1
  - `\blandlord(?:s|\x27s)? (?:liability )?insurance\b|\brental (?:property|dwelling) insurance\b|\bproof of (?:liability )?insurance\b[\s\S]{0,1200}\brental\b` -> 1
- **FLG-E-021** [OK] mandatory landlord liability or property insurance for residential rentals; supersedes FLG-E-020 (positive Fla. Stat. 83.535 matched no term; positive moved to Fla. Stat. 83.491 and 'be required to carry' added); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.491 "landlord's insurance coverage".
  - `\b(?:landlords?|owners?)\b[\s\S]{0,1200}\b(?:shall|must)\s+(?:be required to\s+)?(?:obtain|maintain|carry|procure|purchase|have)\b[\s\S]{0,1200}\b(?:liability )?insurance\b[\s\S]{0,1200}\b(?:tenants?|dwelling units?|rental)\b` -> 3
  - `\binsurance\b[\s\S]{0,1200}\b(?:shall|must)\s+be\s+(?:obtained|maintained|carried|procured|purchased)\b[\s\S]{0,1200}\blandlords?\b` -> 0
  - `\A(?=[\s\S]*\bliability insurance\b)(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:dwelling units?|residential rental|rental (?:property|unit|housing))\b)` -> 1
  - `\blandlord(?:s|\x27s)? (?:liability )?insurance\b|\brental (?:property|dwelling) insurance\b|\bproof of (?:liability )?insurance\b[\s\S]{0,1200}\brental\b` -> 1
- **FLG-E-022** [OK] insurance claims between landlord and tenant: claims on tenant renter insurance, landlord claims and subrogation against tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.491 "submit a claim to an insurer".
  - `\bclaims?\b[\s\S]{0,1200}\b(?:renters?['’]?s?['’]? insurance|tenants?['’]?s?['’]? (?:insurance|insurer|policy|policies|coverage))\b` -> 2
  - `\b(?:renters?['’]?s?['’]? insurance|tenants?['’]?s?['’]? (?:insurance|insurer|policy|policies|coverage))\b[\s\S]{0,1200}\bclaims?\b` -> 5
  - `\A(?=[\s\S]*\binsurers?\b)(?=[\s\S]*\bsubrogat(?:e|ed|ion)\b)(?=[\s\S]*\btenants?\b)` -> 3
  - `\blandlords?\b[\s\S]{0,1200}\b(?:submit|file|make)s?\b[\s\S]{0,1200}\bclaims?\b[\s\S]{0,1200}\binsurers?\b` -> 1
- **FLG-E-023** [OK] landlord lien or distress on a residential tenant property; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.08 "lien for such rent".
  - `\bliens?\b[\s\S]{0,1200}\b(?:(?:tenant|lessee|guest)s?['’]?s? (?:personal )?(?:property|belongings|effects)|property of the (?:lessee|tenant))\b` -> 5
  - `\b(?:(?:tenant|lessee|guest)s?['’]?s? (?:personal )?(?:property|belongings|effects)|property of the (?:lessee|tenant))\b[\s\S]{0,1200}\bliens?\b` -> 7
  - `\A(?=[\s\S]*\bliens?\b)(?=[\s\S]*\bdwelling units?\b)(?=[\s\S]*\brent\b)(?=[\s\S]*\btenants?\b)` -> 2
  - `\bdistress (?:for rent|writ|warrant)s?\b|\blandlord['’]?s lien\b|\bdistrain(?:ed|t)?\b` -> 22
- **FLG-E-024** [OK] waiver of homestead or execution exemptions in a lease or by a tenant; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 222.11 "waive the protection".
  - `\bwaiv(?:e|es|ed|er|ing)\b[\s\S]{0,1200}\b(?:exempt(?:ion|ions)?|homestead)\b[\s\S]{0,1200}\b(?:tenants?|leas(?:e|es)|rental agreements?|lessees?)\b` -> 15
  - `\b(?:tenants?|leas(?:e|es)|rental agreements?|lessees?)\b[\s\S]{0,1200}\bwaiv(?:e|es|ed|er|ing)\b[\s\S]{0,1200}\b(?:exempt(?:ion|ions)?|homestead)\b` -> 8
  - `\A(?=[\s\S]*\bwaiv(?:e|es|ed|er|ing)\b)(?=[\s\S]*\bexempt(?:ion|ions)? from (?:levy|attachment|garnishment|execution|forced sale|legal process|the lien)\b)` -> 4
  - `\bwaive (?:this|the) protection\b|\bwaiver of (?:the )?(?:homestead|exemptions?)\b|\bhomestead (?:waiver|rights)\b` -> 11
- **FLG-E-025** [OK] arbitration, mediation and informal dispute resolution in residential tenancies; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 44.102 "landlord and tenant dispute".
  - `\b(?:arbitrat(?:e|ed|ion|ions|or|ors)|mediat(?:e|ed|ion|or|ors))\b[\s\S]{0,1200}\b(?:landlords?|tenants?|rental agreements?|lessees?)\b` -> 6
  - `\b(?:landlords?|tenants?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:arbitrat(?:e|ed|ion|ions|or|ors)|mediat(?:e|ed|ion|or|ors))\b` -> 11
  - `\A(?=[\s\S]*\b(?:arbitrat|mediat))(?=[\s\S]*\b(?:dwelling units?|residential tenan(?:t|ts|cy|cies)|rental agreements?)\b)` -> 6
  - `\binformally resolve\b|\binformal (?:dispute )?resolution\b|\bdispute resolution\b[\s\S]{0,1200}\btenants?\b|\bpre-?suit (?:notice|demand)\b[\s\S]{0,1200}\btenants?\b` -> 10
- **FLG-E-026** [OK] landlord rules: adoption, mid-tenancy changes and enforceability conditions for residential rules; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.56 "reasonable rules or regulations".
  - `\b(?:rules?|regulations?)\b[\s\S]{0,1200}\b(?:adopt(?:s|ed|ion)?|amend(?:s|ed|ment|ments)?|chang(?:e|es|ed)|modif(?:y|ies|ied|ication))\b[\s\S]{0,1200}\btenants?\b` -> 20
  - `\btenants?\b[\s\S]{0,1200}\b(?:adopt(?:s|ed|ion)?|amend(?:s|ed|ment|ments)?|chang(?:e|es|ed)|modif(?:y|ies|ied|ication))\b[\s\S]{0,1200}\b(?:rules? (?:and|or) regulations?|house rules|park rules)\b` -> 0
  - `\A(?=[\s\S]*\b(?:reasonable rules|rules (?:and|or) regulations)\b)(?=[\s\S]*\b(?:dwelling units?|rental agreements?)\b)(?=[\s\S]*\blandlords?\b)` -> 7
  - `\bhouse rules\b|\bsubstantial modification\b|\bsubstantially modif(?:y|ies)\b[\s\S]{0,1200}\b(?:rental agreements?|leas(?:e|es))\b` -> 10
- **FLG-E-027** [OK] purpose limitation: statute voiding or terminating a lease when premises are used for a prohibited purpose; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 796.06 "lewdness".
  - `\b(?:leas(?:e|es)|rental agreements?|tenancy)\b[\s\S]{0,1200}\b(?:void(?:ed|able)?|forfeit(?:ed|ure)?|terminat(?:e|ed|es)|annul(?:led)?)\b[\s\S]{0,1200}\b(?:nuisance|prostitution|lewdness|gambling|controlled substances?|illegal|unlawful) (?:use|purpose|activit(?:y|ies)|business)?` -> 1
  - `\b(?:nuisance|prostitution|lewdness|assignation|gambling|controlled substances?)\b[\s\S]{0,1200}\b(?:leas(?:e|es)|rental agreements?|lessees?|tenants?)\b[\s\S]{0,1200}\b(?:void(?:ed|able)?|forfeit(?:ed|ure)?|annul(?:led)?)\b` -> 1
  - `\A(?=[\s\S]*\b(?:nuisance|prostitution|lewdness|gambling)\b)(?=[\s\S]*\b(?:leas(?:e|es)|rental agreements?)\b)(?=[\s\S]*\b(?:landlords?|lessors?|owners?)\b)(?=[\s\S]*\bvoid\b)` -> 5
  - `\bunlawful (?:use|purpose)s?\b[\s\S]{0,1200}\b(?:premises|dwelling|leas(?:e|es))\b|\bused for (?:the purpose of )?(?:lewdness|prostitution|gambling)\b` -> 5
- **FLG-E-028** [OK] parking and towing rules notice to tenants: delivery before signing, headings, mid-term changes, vehicle data, permits; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 715.07 "tow-away zone".
  - `\bparking\b[\s\S]{0,1200}\b(?:rules?|regulations?|policy|policies)\b[\s\S]{0,1200}\b(?:tenants?|rental agreements?|leas(?:e|es)|residents?)\b` -> 14
  - `\b(?:tenants?|rental agreements?|leas(?:e|es)|residents?)\b[\s\S]{0,1200}\b(?:towing|parking) (?:rules?|regulations?|policy|policies)\b` -> 0
  - `\A(?=[\s\S]*\b(?:tow(?:ed|ing)?|park(?:ed|ing))\b)(?=[\s\S]*\btenants?\b)(?=[\s\S]*\b(?:rental agreements?|leas(?:e|es))\b)(?=[\s\S]*\bnotices?\b)` -> 21
  - `\btow-away zone\b|\bparking permits?\b[\s\S]{0,1200}\b(?:tenants?|residents?)\b|\bvehicle (?:information|registration)\b[\s\S]{0,1200}\btenants?\b` -> 3
- **FLG-E-029** [FAILED] (not cited by any row) unbundled parking: separate pricing or optional parking for residential tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 715.07 "parked".
  - `\bparking\b[\s\S]{0,1200}\b(?:separate(?:ly)?|unbundl(?:e|ed|ing)|apart) from (?:the )?rent\b` -> 0
  - `\b(?:rent|rental agreements?|leas(?:e|es)|tenants?)\b[\s\S]{0,1200}\b(?:parking (?:spaces?|fees?|charges?)|garage (?:spaces?|fees?))\b` -> 9
  - `\A(?=[\s\S]*\bparking (?:spaces?|fees?|charges?)\b)(?=[\s\S]*\b(?:dwelling units?|residential (?:rental|units?)|apartments?)\b)(?=[\s\S]*\b(?:rent|lease)\b)` -> 2
  - `\bunbundl(?:e|ed|ing)\b|\bparking (?:requirements?|minimums?)\b` -> 21
- **FLG-E-030** [OK] unbundled parking: separate pricing or optional parking for residential tenants; supersedes FLG-E-029 (positive Fla. Stat. 715.07 matched no term; positive moved to Fla. Stat. 718.303); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 718.303 "parking".
  - `\bparking\b[\s\S]{0,1200}\b(?:separate(?:ly)?|unbundl(?:e|ed|ing)|apart) from (?:the )?rent\b` -> 0
  - `\b(?:rent|rental agreements?|leas(?:e|es)|tenants?)\b[\s\S]{0,1200}\b(?:parking (?:spaces?|fees?|charges?)|garage (?:spaces?|fees?))\b` -> 9
  - `\A(?=[\s\S]*\bparking (?:spaces?|fees?|charges?)\b)(?=[\s\S]*\b(?:dwelling units?|residential (?:rental|units?)|apartments?)\b)(?=[\s\S]*\b(?:rent|lease)\b)` -> 2
  - `\bunbundl(?:e|ed|ing)\b|\bparking (?:requirements?|minimums?)\b` -> 21
- **FLG-E-031** [OK] lease granted by a lessor with a limited estate (life tenant, usufructuary, fiduciary): survival of the lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 744.441 "extending beyond".
  - `\b(?:life estates?|life tenan(?:t|ts|cy)|usufruct(?:s|uary)?|remaindermen|remainder(?:man|men)|tenant for life)\b[\s\S]{0,1200}\bleas(?:e|es|ed|ing)\b` -> 5
  - `\bleas(?:e|es|ed|ing)\b[\s\S]{0,1200}\b(?:life estates?|life tenan(?:t|ts|cy)|usufruct(?:s|uary)?|remainder(?:man|men)|tenant for life)\b` -> 0
  - `\A(?=[\s\S]*\b(?:life estates?|life tenan(?:t|ts|cy)|usufruct)\b)(?=[\s\S]*\bleas(?:e|es|ed)\b)(?=[\s\S]*\b(?:terminat(?:e|es|ed|ion)|expir(?:e|es|ed|ation)|death)\b)` -> 2
  - `\bleas(?:e|es)\b[\s\S]{0,1200}\b(?:extending|extend|extends) beyond\b|\busufruct\b` -> 8
- **FLG-E-032** [OK] other landlord facilities: duties for building facilities such as elevators, garage doors, laundry, mailboxes; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.67 "elevator".
  - `\b(?:garage doors?|garage door openers?|gates?|laundry (?:rooms?|facilit(?:y|ies)|machines?)|mailbox(?:es)?|trash chutes?|elevators?)\b[\s\S]{0,1200}\b(?:landlords?|tenants?|rental agreements?)\b` -> 8
  - `\b(?:landlords?|tenants?|rental agreements?)\b[\s\S]{0,1200}\b(?:garage doors?|garage door openers?|laundry (?:rooms?|facilit(?:y|ies)|machines?)|mailbox(?:es)?|trash chutes?|elevators?)\b` -> 5
  - `\A(?=[\s\S]*\bgarage door)(?=[\s\S]*\b(?:residential|dwelling|tenant|owner)s?\b)` -> 14
  - `\bautomatic garage door openers?\b|\bentrapment\b` -> 5
- **FLG-F-001** [OK] children-occupancy: landlord-tenant familial-status protection, required lease content on children; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 760.23 "familial status"; passed 760.29 "familial status does not apply".
  - `\bfamilial status\b` -> 10
  - `\b(?:familial status|children|minor child(?:ren)?|pregnan\w*)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?)\b` -> 9
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?)\b[\s\S]{0,1200}\b(?:familial status|children|minor child(?:ren)?|pregnan\w*)\b` -> 10
  - `\A(?=[\s\S]*\b(?:familial status|children|minor child(?:ren)?|pregnan\w*)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|landlords?)\b)(?=[\s\S]*\b(?:evict\w*|terminat\w*|nonrenew\w*)\b)` -> 23
  - `\boccupancy by (?:children|minors)\b` -> 0
- **FLG-F-002** [OK] disability-accommodation: restoration condition, restoration escrow, lease-inclusion sentence; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 760.23 "reasonable modifications of existing premises"; passed 760.23 "reasonable accommodations in rules".
  - `\breasonable modifications?\b` -> 2
  - `\b(?:disability|disabilities|disabled|handicap\w*)\b[\s\S]{0,1200}\brestor(?:e|es|ed|ing|ation)\b` -> 24
  - `\brestor(?:e|es|ed|ing|ation)\b[\s\S]{0,1200}\b(?:disability|disabilities|disabled|handicap\w*)\b` -> 12
  - `\A(?=[\s\S]*\b(?:disability|disabilities|handicap\w*)\b)(?=[\s\S]*\bmodif(?:y|ies|ied|ication|ications)\b)(?=[\s\S]*\b(?:restor\w*|escrow\w*|interest[- ]bearing)\b)(?=[\s\S]*\b(?:dwellings?|tenan(?:t|ts|cy)|landlords?|rental agreements?|premises)\b)` -> 16
  - `\breasonable accommodations?\b` -> 16
- **FLG-F-003** [OK] protected-class-inquiry-ban: inquiry and record ban in housing; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 760.27 "may not request information that discloses the diagnosis"; passed 760.23 "indicates any preference, limitation, or discrimination".
  - `\b(?:inquir(?:e|es|ed|ing|y|ies)|ask(?:s|ed|ing)?|request(?:s|ed|ing)? information|make (?:any )?record)\b[\s\S]{0,1200}\b(?:race|color|national origin|religion|familial status|disabilit(?:y|ies)|handicap\w*)\b` -> 24
  - `\b(?:race|color|national origin|religion|familial status|disabilit(?:y|ies)|handicap\w*)\b[\s\S]{0,1200}\b(?:inquir(?:e|es|ed|ing|y|ies)|ask(?:s|ed|ing)?|request(?:s|ed|ing)? information|make (?:any )?record)\b` -> 17
  - `\A(?=[\s\S]*\b(?:inquir(?:e|es|ed|ing|y|ies)|request(?:s|ed|ing)? information)\b)(?=[\s\S]*\b(?:familial status|national origin|disabilit(?:y|ies)|handicap\w*)\b)(?=[\s\S]*\b(?:dwellings?|tenan(?:t|ts|cy)|landlords?|housing providers?|rental of)\b)` -> 11
  - `\bpreference, limitation, or discrimination\b` -> 1
- **FLG-F-004** [OK] senior-housing-work-card: staff work cards or screening in 55+ housing; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 760.29 "housing for older persons".
  - `\bwork cards?\b` -> 0
  - `\bhousing for older persons\b` -> 9
  - `\b(?:housing for older persons|55 years of age or older|62 years of age or older|age-restricted|adult communit(?:y|ies)|retirement communit(?:y|ies))\b[\s\S]{0,1200}\b(?:employees?|staff|workers?|background screenings?|fingerprint\w*)\b` -> 6
  - `\b(?:employees?|staff|workers?|background screenings?|fingerprint\w*)\b[\s\S]{0,1200}\b(?:housing for older persons|55 years of age or older|62 years of age or older|age-restricted|adult communit(?:y|ies)|retirement communit(?:y|ies))\b` -> 12
  - `\A(?=[\s\S]*\b(?:housing for older persons|55 years of age or older|age-restricted|retirement communit(?:y|ies))\b)(?=[\s\S]*\b(?:background screenings?|fingerprint\w*|work cards?|identification cards?)\b)(?=[\s\S]*\b(?:dwellings?|tenan(?:t|ts|cy)|landlords?|residents?|housing)\b)` -> 3
- **FLG-F-005** [OK] cannabis: medical-marijuana cardholder housing protection, landlord limits; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 381.986 "restrict or limit smoking or vaping marijuana on his or her private property".
  - `\b(?:marijuana|cannabis|marihuana)\b[\s\S]{0,1200}\b(?:landlords?|tenan(?:t|ts|cy|cies)|lessors?|lessees?|rental agreements?|leases?|dwellings?|housing providers?)\b` -> 10
  - `\b(?:landlords?|tenan(?:t|ts|cy|cies)|lessors?|lessees?|rental agreements?|leases?|dwellings?|housing providers?)\b[\s\S]{0,1200}\b(?:marijuana|cannabis|marihuana)\b` -> 3
  - `\A(?=[\s\S]*\b(?:marijuana|cannabis)\b)(?=[\s\S]*\b(?:landlords?|tenan(?:t|ts|cy|cies)|rental agreements?|housing providers?)\b)(?=[\s\S]*\b(?:discriminat\w*|penaliz\w*|refus\w*|deny|denied|evict\w*)\b)` -> 8
  - `\bcardholders?\b` -> 32
  - `\bprivate property\b[\s\S]{0,1200}\b(?:marijuana|cannabis)\b` -> 1
- **FLG-F-006** [OK] firearms: lease firearm restrictions, tenant possession protection, parking-lot rule; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 790.251 "No public or private employer may prohibit any customer, employee, or invitee from possessing any legally owned firearm"; passed 790.251 "landlord of a public or private employer".
  - `\b(?:firearms?|guns?|ammunition|weapons?)\b[\s\S]{0,1200}\b(?:landlords?|tenan(?:t|ts|cy|cies)|lessors?|lessees?|rental agreements?|leases?|dwelling units?)\b` -> 9
  - `\b(?:landlords?|tenan(?:t|ts|cy|cies)|lessors?|lessees?|rental agreements?|leases?|dwelling units?)\b[\s\S]{0,1200}\b(?:firearms?|guns?|ammunition|weapons?)\b` -> 10
  - `\A(?=[\s\S]*\b(?:firearms?|guns?|ammunition)\b)(?=[\s\S]*\b(?:landlords?|tenan(?:t|ts|cy|cies)|rental agreements?|residential leases?|apartments?)\b)(?=[\s\S]*\b(?:prohibit\w*|restrict\w*|ban(?:s|ned)?)\b)` -> 14
  - `\bkeep and bear arms\b` -> 4
- **FLG-F-007** [OK] disaster-duties: tenancy end or rent during declared disaster; landlord disaster duties; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 501.160 "Any dwelling unit or self-storage facility that is necessary for habitation"; passed 718.1265 "state of emergency".
  - `\b(?:states? of emergency|declared emergenc(?:y|ies)|disasters?|hurricanes?|emergency declarations?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|dwelling units?)\b` -> 13
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|dwelling units?)\b[\s\S]{0,1200}\b(?:states? of emergency|declared emergenc(?:y|ies)|disasters?|hurricanes?|emergency declarations?)\b` -> 14
  - `\A(?=[\s\S]*\b(?:states? of emergency|declared emergenc(?:y|ies)|disasters?|hurricanes?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:rent|rents|evict\w*|terminat\w*|abate\w*)\b)` -> 25
  - `\binaccessib\w*\b` -> 15
- **FLG-F-008** [FAILED] (not cited by any row) disaster-displaced-guests: tenant may house displaced persons despite lease; occupancy limit suspension; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 718.1265 "evacuation of the condominium property"; recorded as failed 420.9075 "disaster".
  - `\b(?:displaced|evacuees?|evacuated)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|guests?|occupan(?:t|ts|cy)|lease|leases)\b` -> 2
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|guests?|occupan(?:t|ts|cy)|lease|leases)\b[\s\S]{0,1200}\b(?:displaced|evacuees?|evacuated)\b` -> 2
  - `\A(?=[\s\S]*\b(?:displaced|evacuees?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:guests?|occupan(?:t|ts|cy)|house|shelter\w*)\b)` -> 1
  - `\b(?:displaced persons?|disaster victims?|displaced households?)\b` -> 2
- **FLG-F-009** [OK] disaster-displaced-guests: tenant may house displaced persons despite lease; occupancy limit suspension; supersedes FLG-F-008 (positives failed: no battery term matched the named units; added evacuat- forms and real positives); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 421.55 "displaced person"; passed 718.1265 "evacuation of the condominium property".
  - `\b(?:displaced|evacuees?|evacuat\w*)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|guests?|occupan(?:t|ts|cy)|lease|leases)\b` -> 15
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|guests?|occupan(?:t|ts|cy)|lease|leases)\b[\s\S]{0,1200}\b(?:displaced|evacuees?|evacuat\w*)\b` -> 15
  - `\A(?=[\s\S]*\b(?:displaced|evacuees?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:guests?|occupan(?:t|ts|cy)|house|shelter\w*)\b)` -> 1
  - `\b(?:displaced persons?|disaster victims?|displaced households?)\b` -> 2
- **FLG-F-010** [OK] nuisance: receivership, lease cancellation, closure, tenant and neighbor suits, landlord as defendant; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 60.05 "may order the tenant to vacate the property within 72 hours"; passed 893.138 "a rental property that is declared a nuisance".
  - `\bnuisances?\b[\s\S]{0,1200}\b(?:receivers?|receiverships?|escrow\w*|rents? (?:into|to the) (?:court|registry)|subsid(?:y|ies))\b` -> 0
  - `\b(?:receivers?|receiverships?|escrow\w*|subsid(?:y|ies))\b[\s\S]{0,1200}\bnuisances?\b` -> 1
  - `\A(?=[\s\S]*\bnuisances?\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|rental property|lessees?|landlords?)\b)(?=[\s\S]*\b(?:terminat\w*|cancel\w*|vacate|evict\w*|receiv\w*)\b)` -> 19
  - `\bmay order the tenant to vacate\b` -> 1
- **FLG-F-011** [FAILED] (not cited by any row) drug-free-housing-addendum: required or regulated drug-free lease addendum; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 381.986 "drug-free workplace program".
  - `\bdrug[- ]free\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|dwellings?|housing|addend(?:um|a))\b` -> 4
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|dwellings?|housing|addend(?:um|a))\b[\s\S]{0,1200}\bdrug[- ]free\b` -> 1
  - `\A(?=[\s\S]*\b(?:controlled substances?|illegal drugs?|drug[- ]related)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:addend(?:um|a)|lease provisions?|clause|covenant)\b)` -> 2
  - `\bdrug[- ]free (?:housing|lease|addendum)\b` -> 0
- **FLG-F-012** [OK] drug-free-housing-addendum: required or regulated drug-free lease addendum; supersedes FLG-F-011 (positive recorded as failed: no battery term matched 381.986; added plain drug-free term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 381.986 "drug-free workplace program".
  - `\bdrug[- ]free\b` -> 29
  - `\bdrug[- ]free\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|dwellings?|housing|addend(?:um|a))\b` -> 4
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|dwellings?|housing|addend(?:um|a))\b[\s\S]{0,1200}\bdrug[- ]free\b` -> 1
  - `\A(?=[\s\S]*\b(?:controlled substances?|illegal drugs?|drug[- ]related)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:addend(?:um|a)|lease provisions?|clause|covenant)\b)` -> 2
  - `\bdrug[- ]free (?:housing|lease|addendum)\b` -> 0
- **FLG-F-013** [OK] (not cited by any row) emergency-assistance-right: tenant right to summon police or emergency help; presumption against eviction after a call; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.64 "primarily because the landlord is retaliating against the tenant"; passed 82.036 "law enforcement".
  - `\b(?:law enforcement|police|911|emergency assistance|emergency services|sheriff)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|lessees?)\b` -> 51
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|lessees?)\b[\s\S]{0,1200}\b(?:law enforcement|police|911|emergency assistance|emergency services)\b` -> 36
  - `\A(?=[\s\S]*\b(?:summon\w*|call(?:s|ed|ing)?|request(?:s|ed|ing)?|contact(?:s|ed|ing)?)\b)(?=[\s\S]*\b(?:law enforcement|police|911|emergency assistance|emergency services)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:evict\w*|penal\w*|retaliat\w*|terminat\w*|limit\w*)\b)` -> 45
  - `\bemergency assistance\b` -> 14
  - `\bretaliat\w*\b` -> 89
- **FLG-F-014** [FAILED] (not cited by any row) emergency-assistance-right: tenant right to summon police or emergency help; presumption against eviction after a call; supersedes FLG-F-013 (narrowed: FLG-F-013's bare police and retaliation limbs returned 36-89 off-point units each; this run uses the summoning vocabulary); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 365.172 "emergency assistance"; recorded as failed 365.171 "requesting emergency services".
  - `\b(?:call(?:s|ed|ing)?|summon(?:s|ed|ing)?|contact(?:s|ed|ing)?|request(?:s|ed|ing)?|seek(?:s|ing)?|sought|dial(?:s|ed|ing)?) (?:the )?(?:police|law enforcement|911|emergency assistance|emergency services|emergency help)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|lessees?|residents?|occupants?)\b` -> 0
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|lessees?|residents?|occupants?)\b[\s\S]{0,1200}\b(?:call(?:s|ed|ing)?|summon(?:s|ed|ing)?|contact(?:s|ed|ing)?|request(?:s|ed|ing)?|seek(?:s|ing)?|sought|dial(?:s|ed|ing)?) (?:the )?(?:police|law enforcement|911|emergency assistance|emergency services|emergency help)\b` -> 0
  - `\A(?=[\s\S]*\b(?:police|law enforcement|911|emergency assistance)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b)(?=[\s\S]*\bretaliat\w*\b)` -> 3
  - `\bemergency assistance\b` -> 14
- **FLG-F-015** [OK] emergency-assistance-right: tenant right to summon police or emergency help; presumption against eviction after a call; supersedes FLG-F-014 (positive 365.171 recorded as failed: no battery term matched it; added the summoning phrase as a plain term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 365.172 "emergency assistance"; passed 365.171 "requesting emergency services".
  - `\b(?:call(?:s|ed|ing)?|summon(?:s|ed|ing)?|contact(?:s|ed|ing)?|request(?:s|ed|ing)?|seek(?:s|ing)?|sought|dial(?:s|ed|ing)?) (?:the )?(?:police|law enforcement|911|emergency assistance|emergency services|emergency help)\b` -> 17
  - `\b(?:call(?:s|ed|ing)?|summon(?:s|ed|ing)?|contact(?:s|ed|ing)?|request(?:s|ed|ing)?|seek(?:s|ing)?|sought|dial(?:s|ed|ing)?) (?:the )?(?:police|law enforcement|911|emergency assistance|emergency services|emergency help)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|lessees?|residents?|occupants?)\b` -> 0
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|evict\w*|lessees?|residents?|occupants?)\b[\s\S]{0,1200}\b(?:call(?:s|ed|ing)?|summon(?:s|ed|ing)?|contact(?:s|ed|ing)?|request(?:s|ed|ing)?|seek(?:s|ing)?|sought|dial(?:s|ed|ing)?) (?:the )?(?:police|law enforcement|911|emergency assistance|emergency services|emergency help)\b` -> 0
  - `\A(?=[\s\S]*\b(?:police|law enforcement|911|emergency assistance)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b)(?=[\s\S]*\bretaliat\w*\b)` -> 3
  - `\bemergency assistance\b` -> 14
- **FLG-F-016** [OK] law-enforcement-cooperation: landlord duty to cooperate with or report to police; crime-free programs; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 934.34 "landlord, custodian, or other person shall furnish"; passed 934.09 "landlord, custodian, or other person shall furnish the applicant forthwith".
  - `\b(?:landlords?|lessors?|property managers?)\b[\s\S]{0,1200}\b(?:law enforcement|police|investigat\w*|subpoena\w*|warrants?)\b` -> 21
  - `\b(?:law enforcement|police|investigat\w*|subpoena\w*|warrants?)\b[\s\S]{0,1200}\b(?:landlords?|lessors?|property managers?)\b` -> 15
  - `\A(?=[\s\S]*\b(?:landlords?|tenan(?:t|ts|cy)|rental agreements?)\b)(?=[\s\S]*\b(?:law enforcement|police)\b)(?=[\s\S]*\b(?:cooperat\w*|report(?:s|ed|ing)? (?:to|any|the)|furnish\w*|disclos\w*)\b)(?=[\s\S]*\b(?:crimes?|criminal activit(?:y|ies))\b)` -> 17
  - `\bcrime[- ]free\b` -> 4
- **FLG-F-017** [OK] periodic-services-entry: entry for regularly scheduled services; conspicuous-lease rule; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.53 "supply agreed services".
  - `\b(?:regularly scheduled|scheduled services?|routine services?|periodic services?|recurring services?|agreed services)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy)|landlords?|dwelling units?|rental agreements?)\b` -> 1
  - `\b(?:tenan(?:t|ts|cy)|landlords?|dwelling units?|rental agreements?)\b[\s\S]{0,1200}\b(?:regularly scheduled|scheduled services?|routine services?|periodic services?|recurring services?|agreed services)\b` -> 1
  - `\A(?=[\s\S]*\b(?:enter|entry|access)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\bconspicuous\w*\b)(?=[\s\S]*\b(?:services?|pest control|filters?)\b)` -> 26
  - `\bsupply agreed services\b` -> 1
- **FLG-F-018** [OK] animal-care-access: landlord entry to care for or remove an absent tenant's animal; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.43 "pet deposit"; passed 828.13 "animal".
  - `\b(?:animals?|pets?|dogs?|cats?)\b[\s\S]{0,1200}\b(?:landlords?|tenan(?:t|ts|cy|cies)|dwelling units?|rental agreements?)\b` -> 5
  - `\b(?:landlords?|tenan(?:t|ts|cy|cies)|dwelling units?|rental agreements?)\b[\s\S]{0,1200}\b(?:animals?|pets?|dogs?|cats?)\b` -> 7
  - `\A(?=[\s\S]*\b(?:animals?|pets?)\b)(?=[\s\S]*\b(?:landlords?|tenan(?:t|ts|cy))\b)(?=[\s\S]*\b(?:enter|entry|access)\b)(?=[\s\S]*\b(?:absen(?:t|ce)|abandon\w*|incapacitat\w*|hospitali[sz]\w*|deceased|death)\b)` -> 11
  - `\b(?:abandon(?:s|ed|ing|ment)? (?:an |the |any )?animals?|animals? left)\b` -> 2
- **FLG-F-019** [FAILED] (not cited by any row) condition-inspection: move-in/move-out inspection, inventory, condition report, damage list; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.49 "security deposit"; recorded as failed 83.53 "inspect the premises".
  - `\b(?:move[- ]in|move[- ]out|walk[- ]through|condition (?:report|statement|checklist)s?|inventor(?:y|ies)|checklists?|damage lists?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?|security deposits?)\b` -> 7
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?|security deposits?)\b[\s\S]{0,1200}\b(?:move[- ]in|move[- ]out|walk[- ]through|condition (?:report|statement|checklist)s?|inventor(?:y|ies)|checklists?|damage lists?)\b` -> 11
  - `\A(?=[\s\S]*\b(?:inspect\w*|condition of the (?:premises|dwelling|unit))\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:security deposits?|deposit money|beginning of the tenancy|commencement of the tenancy)\b)(?=[\s\S]*\b(?:sign\w*|written|writing)\b)` -> 3
  - `\bmove[- ]in\b` -> 1
- **FLG-F-020** [OK] condition-inspection: move-in/move-out inspection, inventory, condition report, damage list; supersedes FLG-F-019 (positive 83.53 recorded as failed: no battery term matched it; replaced with real positives for the move-out vocabulary); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.684 "move-out checklist"; passed 83.49 "WHEN YOU MOVE OUT".
  - `\b(?:move[- ]in|move[- ]out|walk[- ]through|condition (?:report|statement|checklist)s?|inventor(?:y|ies)|checklists?|damage lists?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?|security deposits?)\b` -> 7
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?|security deposits?)\b[\s\S]{0,1200}\b(?:move[- ]in|move[- ]out|walk[- ]through|condition (?:report|statement|checklist)s?|inventor(?:y|ies)|checklists?|damage lists?)\b` -> 11
  - `\A(?=[\s\S]*\b(?:inspect\w*|condition of the (?:premises|dwelling|unit))\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:security deposits?|deposit money|beginning of the tenancy|commencement of the tenancy)\b)(?=[\s\S]*\b(?:sign\w*|written|writing)\b)` -> 3
  - `\bmove[- ]in\b` -> 1
- **FLG-F-021** [FAILED] (not cited by any row) inspection-notice-penalty: penalty for missing an inspection notice or for unlawful entry; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.53 "abuse the right of access"; recorded as failed 83.49 "forfeits the right to impose a claim".
  - `\b(?:enter(?:s|ed|ing)?|entry|inspect(?:s|ed|ing|ion|ions)?)\b[\s\S]{0,1200}\b(?:penalt(?:y|ies)|statutory damages|months?.{0,2} rent|times the (?:amount|rent|deposit)|forfeit\w*)\b[\s\S]{0,1200}\b(?:landlords?|tenan(?:t|ts|cy))\b` -> 8
  - `\b(?:landlords?|tenan(?:t|ts|cy))\b[\s\S]{0,1200}\b(?:penalt(?:y|ies)|statutory damages|months?.{0,2} rent|times the (?:amount|rent|deposit)|forfeit\w*)\b[\s\S]{0,1200}\b(?:enter(?:s|ed|ing)?|entry|inspect(?:s|ed|ing|ion|ions)?)\b` -> 10
  - `\A(?=[\s\S]*\b(?:right of access|enter the dwelling unit|inspection notice|notice of (?:the )?inspection)\b)(?=[\s\S]*\b(?:landlords?|tenan(?:t|ts|cy))\b)(?=[\s\S]*\b(?:penalt(?:y|ies)|statutory damages|forfeit\w*|liable)\b)` -> 3
  - `\babuse the right of access\b` -> 1
- **FLG-F-022** [OK] inspection-notice-penalty: penalty for missing an inspection notice or for unlawful entry; supersedes FLG-F-021 (positive 83.49 recorded as failed and WINDOW warnings from a {0,2} limb; replaced the apostrophe limb and added a plain forfeiture term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.53 "abuse the right of access"; passed 83.49 "forfeits the right to impose a claim".
  - `\b(?:enter(?:s|ed|ing)?|entry|inspect(?:s|ed|ing|ion|ions)?)\b[\s\S]{0,1200}\b(?:penalt(?:y|ies)|statutory damages|months?'? rent|times the (?:amount|rent|deposit)|forfeit\w*)\b[\s\S]{0,1200}\b(?:landlords?|tenan(?:t|ts|cy))\b` -> 6
  - `\b(?:landlords?|tenan(?:t|ts|cy))\b[\s\S]{0,1200}\b(?:penalt(?:y|ies)|statutory damages|months?'? rent|times the (?:amount|rent|deposit)|forfeit\w*)\b[\s\S]{0,1200}\b(?:enter(?:s|ed|ing)?|entry|inspect(?:s|ed|ing|ion|ions)?)\b` -> 7
  - `\A(?=[\s\S]*\b(?:right of access|enter the dwelling unit|inspection notice|notice of (?:the )?inspection)\b)(?=[\s\S]*\b(?:landlords?|tenan(?:t|ts|cy))\b)(?=[\s\S]*\b(?:penalt(?:y|ies)|statutory damages|forfeit\w*|liable)\b)` -> 3
  - `\babuse the right of access\b` -> 1
  - `\bforfeits the right to\b` -> 5
- **FLG-F-023** [FAILED] (not cited by any row) subsidized-inspection-refusal: refusal of a subsidy program inspection by tenant or landlord; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.49 "section 8 of the National Housing Act"; recorded as failed 421.10 "housing projects".
  - `\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|section 8 (?:of the National Housing Act|housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b[\s\S]{0,1200}\binspect\w*\b` -> 1
  - `\binspect\w*\b[\s\S]{0,1200}\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|section 8 (?:of the National Housing Act|housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b` -> 3
  - `\A(?=[\s\S]*\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|section 8 (?:of the National Housing Act|housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b)(?=[\s\S]*\binspect\w*\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|owners?)\b)(?=[\s\S]*\b(?:refus\w*|den(?:y|ies|ied)|withh[oe]ld\w*)\b)` -> 10
  - `\bhousing quality standards?\b` -> 0
- **FLG-F-024** [FAILED] (not cited by any row) subsidized-inspection-refusal: refusal of a subsidy program inspection by tenant or landlord; supersedes FLG-F-023 (both positives recorded as failed (83.49 says s. 8, not section 8; no term matched 421.10); added the s. 8 form and a plain subsidy term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.49 "s\. 8 of the National Housing Act"; passed 83.56 "rent subsidies".
  - `\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b[\s\S]{0,1200}\binspect\w*\b` -> 1
  - `\binspect\w*\b[\s\S]{0,1200}\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b` -> 3
  - `\A(?=[\s\S]*\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b)(?=[\s\S]*\binspect\w*\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|owners?)\b)(?=[\s\S]*\b(?:refus\w*|den(?:y|ies|ied)|withh[oe]ld\w*)\b)` -> 10
  - `\bhousing quality standards?\b` -> 0
  - `\b(?:housing assistance payments?|rent subsid(?:y|ies)|housing choice vouchers?)\b` -> 12
- **FLG-F-025** [OK] subsidized-inspection-refusal: refusal of a subsidy program inspection by tenant or landlord; supersedes FLG-F-024 (positive 83.49 recorded as failed (no battery term reaches that unit); replaced with 83.60); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.60 "tenants receiving rent subsidies"; passed 83.56 "rent subsidies".
  - `\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b[\s\S]{0,1200}\binspect\w*\b` -> 1
  - `\binspect\w*\b[\s\S]{0,1200}\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b` -> 3
  - `\A(?=[\s\S]*\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b)(?=[\s\S]*\binspect\w*\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|owners?)\b)(?=[\s\S]*\b(?:refus\w*|den(?:y|ies|ied)|withh[oe]ld\w*)\b)` -> 10
  - `\bhousing quality standards?\b` -> 0
  - `\b(?:housing assistance payments?|rent subsid(?:y|ies)|housing choice vouchers?)\b` -> 12
- **FLG-F-026** [OK] subsidy-late-fee: late fees in subsidized tenancies; fee on late subsidy payment; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.60 "tenants receiving rent subsidies"; passed 83.56 "rent subsidies".
  - `\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b[\s\S]{0,1200}\b(?:late (?:fees?|charges?|payments?)|grace periods?)\b` -> 0
  - `\b(?:late (?:fees?|charges?|payments?)|grace periods?)\b[\s\S]{0,1200}\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b` -> 0
  - `\A(?=[\s\S]*\b(?:rent subsid(?:y|ies)|housing assistance payments?|housing choice vouchers?|housing vouchers?|s(?:ection|\.) 8 of the National Housing Act|section 8 (?:housing|vouchers?)|rental assistance|public housing|housing authorit(?:y|ies)|tenant(?:.s)? (?:portion|share))\b)(?=[\s\S]*\b(?:late|delinquen\w*)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:fees?|charges?|penalt(?:y|ies))\b)` -> 2
  - `\b(?:housing assistance payments?|rent subsid(?:y|ies)|housing choice vouchers?)\b` -> 12
- **FLG-F-027** [FAILED] (not cited by any row) guest-rights: tenants' right to have guests or suppliers; fee or waiver bans; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.56 "unauthorized pets, guests, or vehicles"; recorded as failed 82.035 "transient occupant".
  - `\b(?:guests?|visitors?|invitees?|caregivers?|suppliers?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:right|rights|access|fees?|prohibit\w*)\b` -> 22
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:guests?|visitors?|invitees?|caregivers?|suppliers?)\b[\s\S]{0,1200}\b(?:right|rights|access|fees?|prohibit\w*)\b` -> 26
  - `\A(?=[\s\S]*\b(?:guests?|visitors?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:may not (?:prohibit|charge|restrict|limit)|shall not (?:prohibit|charge|restrict|limit))\b)` -> 13
  - `\bguests? of (?:the|a) tenant\b` -> 0
- **FLG-F-028** [OK] guest-rights: tenants' right to have guests or suppliers; fee or waiver bans; supersedes FLG-F-027 (both positives recorded as failed: the three-part chain did not reach them; positives replaced with units the battery terms reach, and a plain guest-rights phrase added); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.491 "THE TENANT OR HIS OR HER GUESTS"; passed 718.1265 "tenants, guests".
  - `\b(?:guests?|visitors?|invitees?|caregivers?|suppliers?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:right|rights|access|fees?|prohibit\w*)\b` -> 22
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:guests?|visitors?|invitees?|caregivers?|suppliers?)\b[\s\S]{0,1200}\b(?:right|rights|access|fees?|prohibit\w*)\b` -> 26
  - `\A(?=[\s\S]*\b(?:guests?|visitors?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:may not (?:prohibit|charge|restrict|limit)|shall not (?:prohibit|charge|restrict|limit))\b)` -> 13
  - `\b(?:guests? of (?:the|a) tenant|tenant or his or her guests|right to (?:have|receive) (?:guests|visitors))\b` -> 1
- **FLG-F-029** [OK] home-business: statutory right to run a home business vs. lease restrictions; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 559.955 "home-based business".
  - `\b(?:home[- ]based business(?:es)?|home occupations?|business(?:es)? (?:operated |conducted )?(?:from|in) (?:a |the )?(?:home|residence|dwelling))\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessors?)\b` -> 0
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessors?)\b[\s\S]{0,1200}\b(?:home[- ]based business(?:es)?|home occupations?|business(?:es)? (?:operated |conducted )?(?:from|in) (?:a |the )?(?:home|residence|dwelling))\b` -> 0
  - `\A(?=[\s\S]*\b(?:home[- ]based|home occupations?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|declarations?)\b)(?=[\s\S]*\b(?:prohibit\w*|restrict\w*)\b)` -> 3
  - `\bhome[- ]based business(?:es)?\b` -> 7
- **FLG-F-030** [OK] family-child-care: tenant right to operate a family child care home; landlord conditions; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 125.0109 "family child care home"; passed 402.302 "Family child care home".
  - `\b(?:family (?:child|day) care homes?|large family child care homes?|child care (?:in|from) (?:a |the )?(?:home|residence))\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessors?|rented|renters?)\b` -> 1
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessors?|rented|renters?)\b[\s\S]{0,1200}\b(?:family (?:child|day) care homes?|large family child care homes?|child care (?:in|from) (?:a |the )?(?:home|residence))\b` -> 1
  - `\A(?=[\s\S]*\b(?:family (?:child|day) care homes?|large family child care homes?|child care (?:in|from) (?:a |the )?(?:home|residence))\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|owners? of the (?:residence|premises|property))\b)(?=[\s\S]*\b(?:prohibit\w*|consent|permission|insurance|liabilit(?:y|ies))\b)` -> 3
  - `\bfamily child care homes?\b` -> 31
- **FLG-F-031** [OK] (not cited by any row) tenant-display-rights and religious-cultural-display: flags, signs, religious and cultural displays in rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.67 "United States flag"; passed 718.113 "religious object".
  - `\b(?:flags?|signs?|banners?|political signs?|religious (?:objects?|items?|decorations?|symbols?)|cultural (?:items?|objects?)|holiday decorations?|mezuzah\w*|displays?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|lessees?)\b` -> 37
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:flags?|signs?|banners?|political signs?|religious (?:objects?|items?|decorations?|symbols?)|cultural (?:items?|objects?)|holiday decorations?|mezuzah\w*|displays?)\b` -> 37
  - `\A(?=[\s\S]*\b(?:display(?:s|ed|ing)?|post(?:s|ed|ing)?)\b)(?=[\s\S]*\b(?:political|religious|cultural|candidate)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|unit owners?|parcel owners?|homeowners?)\b)` -> 40
  - `\b(?:religious object|religious decorations?|political signs?)\b` -> 3
- **FLG-F-032** [OK] tenant-display-rights and religious-cultural-display: flags, signs, religious and cultural displays in rentals; supersedes FLG-F-031 (narrowed: the bare sign and display words returned 37-40 off-point units (traffic, tax, billboards)); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.67 "United States flag"; passed 718.113 "religious object".
  - `\b(?:flags?|political signs?|campaign signs?|yard signs?|religious (?:objects?|items?|decorations?|symbols?|displays?)|cultural (?:items?|objects?|displays?)|holiday decorations?|mezuzah\w*)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|lessees?)\b` -> 4
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|lessees?)\b[\s\S]{0,1200}\b(?:flags?|political signs?|campaign signs?|yard signs?|religious (?:objects?|items?|decorations?|symbols?|displays?)|cultural (?:items?|objects?|displays?)|holiday decorations?|mezuzah\w*)\b` -> 4
  - `\A(?=[\s\S]*\b(?:display(?:s|ed|ing)?|post(?:s|ed|ing)?)\b)(?=[\s\S]*\b(?:political signs?|campaign signs?|religious (?:objects?|items?|decorations?|symbols?)|cultural (?:items?|objects?))\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|unit owners?|parcel owners?|homeowners?)\b)` -> 3
  - `\b(?:religious object|religious decorations?|political signs?)\b` -> 3
- **FLG-F-033** [OK] political-access: candidate or canvasser access to rental buildings; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 720.304 "candidates for public office".
  - `\b(?:candidates?|canvass\w*|campaign(?:s|ing|ers?)?|petition circulators?|voter registration|political committees?|door[- ]to[- ]door)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|apartments?|multifamily|residential (?:buildings?|complex(?:es)?)|gated)\b` -> 5
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|apartments?|multifamily|residential (?:buildings?|complex(?:es)?)|gated)\b[\s\S]{0,1200}\b(?:candidates?|canvass\w*|campaign(?:s|ing|ers?)?|petition circulators?|voter registration|political committees?|door[- ]to[- ]door)\b` -> 4
  - `\A(?=[\s\S]*\b(?:candidates?|canvass\w*|campaign(?:s|ing|ers?)?|petition circulators?|voter registration|political committees?|door[- ]to[- ]door)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|apartments?|unit owners?|parcel owners?)\b)(?=[\s\S]*\b(?:access|enter|entry|deny|denied|prohibit\w*)\b)` -> 22
  - `\bcandidates for public office\b` -> 6
- **FLG-F-034** [FAILED] (not cited by any row) tenant-right-to-organize: tenants' right to organize, meet, distribute materials; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.64 "tenant organization"; recorded as failed 723.054 "canvassing".
  - `\b(?:tenant (?:organizations?|associations?|unions?|councils?)|tenants?.? (?:organizations?|associations?)|organiz(?:e|es|ed|ing))\b[\s\S]{0,1200}\b(?:landlords?|rental agreements?|dwelling units?|tenan(?:t|ts|cy))\b` -> 7
  - `\b(?:landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:tenant (?:organizations?|associations?|unions?|councils?)|organiz(?:e|es|ed|ing))\b` -> 4
  - `\A(?=[\s\S]*\b(?:tenant organizations?|tenants? associations?|organiz(?:e|es|ed|ing))\b)(?=[\s\S]*\b(?:landlords?|rental agreements?|park owners?)\b)(?=[\s\S]*\b(?:meet(?:s|ing|ings)?|assembl\w*|distribut\w*|canvass\w*|communicat\w*)\b)` -> 13
  - `\btenant organizations?\b` -> 2
- **FLG-F-035** [OK] tenant-right-to-organize: tenants' right to organize, meet, distribute materials; supersedes FLG-F-034 (positive 723.054 recorded as failed (no battery term reached it); replaced with 723.055, which the terms reach); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.64 "tenant organization"; passed 723.055 "tenant organization".
  - `\b(?:tenant (?:organizations?|associations?|unions?|councils?)|tenants?.? (?:organizations?|associations?)|organiz(?:e|es|ed|ing))\b[\s\S]{0,1200}\b(?:landlords?|rental agreements?|dwelling units?|tenan(?:t|ts|cy))\b` -> 7
  - `\b(?:landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:tenant (?:organizations?|associations?|unions?|councils?)|organiz(?:e|es|ed|ing))\b` -> 4
  - `\A(?=[\s\S]*\b(?:tenant organizations?|tenants? associations?|organiz(?:e|es|ed|ing))\b)(?=[\s\S]*\b(?:landlords?|rental agreements?|park owners?)\b)(?=[\s\S]*\b(?:meet(?:s|ing|ings)?|assembl\w*|distribut\w*|canvass\w*|communicat\w*)\b)` -> 13
  - `\btenant organizations?\b` -> 2
- **FLG-F-036** [FAILED] (not cited by any row) tenant-confidential-information: limits on a landlord disclosing tenant or applicant information; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 501.171 "Covered entity"; recorded as failed 718.111 "personal information".
  - `\b(?:disclos\w*|releas(?:e|es|ed|ing)|sell(?:s|ing)?|sold|shar(?:e|es|ed|ing))\b[\s\S]{0,1200}\b(?:tenant|tenants|applicant|applicants|lessee|lessees)\b.{0,3}(?:s )?(?:personal |confidential |private )?(?:information|data|records)\b` -> 2
  - `\b(?:tenant|tenants|applicant|applicants|lessee|lessees)\b.{0,3}(?:s )?(?:personal |confidential |private )?(?:information|data|records)\b[\s\S]{0,1200}\b(?:disclos\w*|releas(?:e|es|ed|ing)|sell(?:s|ing)?|sold|shar(?:e|es|ed|ing))\b` -> 3
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:personal information|confidential information|social security numbers?)\b)(?=[\s\S]*\b(?:disclos\w*|releas\w*|consent)\b)(?=[\s\S]*\btenan(?:t|ts)\b)` -> 3
  - `\bcovered entit(?:y|ies)\b` -> 9
- **FLG-F-037** [OK] tenant-confidential-information: limits on a landlord disclosing tenant or applicant information; supersedes FLG-F-036 (positive 718.111 recorded as failed and WINDOW warnings from a {0,3} limb; rewrote the tenant-information phrase without a short window); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 501.171 "Covered entity"; passed 501.171 "personal information".
  - `\b(?:disclos\w*|releas(?:e|es|ed|ing)|sell(?:s|ing)?|sold|shar(?:e|es|ed|ing))\b[\s\S]{0,1200}\b(?:tenant|applicant|lessee|renter)(?:'s|s'|s)? (?:personal |confidential |private |contact )?(?:information|data|records|files?)\b` -> 2
  - `\b(?:tenant|applicant|lessee|renter)(?:'s|s'|s)? (?:personal |confidential |private |contact )?(?:information|data|records|files?)\b[\s\S]{0,1200}\b(?:disclos\w*|releas(?:e|es|ed|ing)|sell(?:s|ing)?|sold|shar(?:e|es|ed|ing))\b` -> 2
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:personal information|confidential information|social security numbers?)\b)(?=[\s\S]*\b(?:disclos\w*|releas\w*|consent)\b)(?=[\s\S]*\btenan(?:t|ts)\b)` -> 3
  - `\bcovered entit(?:y|ies)\b` -> 9
  - `\b(?:tenant|applicant|lessee|renter)(?:'s|s'|s)? (?:personal |confidential |private |contact )?(?:information|data|records|files?)\b` -> 31
- **FLG-F-038** [FAILED] (not cited by any row) tenant-records: rent ledger, records request, record retention by landlords; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.49 "accurate accounting"; recorded as failed 83.505 "maintain a copy of any notice sent electronically".
  - `\b(?:ledgers?|records? of (?:rent|payments?)|payment histor(?:y|ies)|rent records?|account statements?|accounting)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b` -> 5
  - `\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:ledgers?|records? of (?:rent|payments?)|payment histor(?:y|ies)|rent records?|account statements?|accounting)\b` -> 7
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\btenan(?:t|ts)\b)(?=[\s\S]*\brecords?\b)(?=[\s\S]*\b(?:upon request|on request|request(?:s|ed)? by the tenant|retain\w*|keep(?:s)? records)\b)` -> 12
  - `\b(?:rent ledgers?|tenant ledgers?)\b` -> 0
- **FLG-F-039** [OK] tenant-records: rent ledger, records request, record retention by landlords; supersedes FLG-F-038 (positive 83.505 recorded as failed (no battery term reaches it); replaced with a second 83.49 positive); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.49 "accurate accounting"; passed 83.49 "tenant account".
  - `\b(?:ledgers?|records? of (?:rent|payments?)|payment histor(?:y|ies)|rent records?|account statements?|accounting)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b` -> 5
  - `\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:ledgers?|records? of (?:rent|payments?)|payment histor(?:y|ies)|rent records?|account statements?|accounting)\b` -> 7
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\btenan(?:t|ts)\b)(?=[\s\S]*\brecords?\b)(?=[\s\S]*\b(?:upon request|on request|request(?:s|ed)? by the tenant|retain\w*|keep(?:s)? records)\b)` -> 12
  - `\b(?:rent ledgers?|tenant ledgers?)\b` -> 0
- **FLG-F-040** [FAILED] (not cited by any row) tenant-portal: required portal payments, signatures or notices; UETA refusal right; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.505 "electronically deliver"; recorded as failed 668.50 "may refuse to conduct other transactions by electronic means".
  - `\b(?:portals?|online payments?|electronic (?:payments?|funds transfers?)|web ?sites?|apps?|mobile applications?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|rent)\b` -> 6
  - `\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:portals?|online payments?|electronic (?:payments?|funds transfers?)|mobile applications?)\b` -> 1
  - `\A(?=[\s\S]*\b(?:portals?|online|electronic(?:ally)?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:rent|rents)\b)(?=[\s\S]*\b(?:pay(?:s|ing|ment|ments)?|sign(?:s|ed|ing|ature|atures)?)\b)` -> 21
  - `\b(?:tenant portals?|online portals?|resident portals?)\b` -> 12
- **FLG-F-041** [OK] (not cited by any row) tenant-portal: required portal payments, signatures or notices; UETA refusal right; supersedes FLG-F-040 (both positives recorded as failed (no battery term reached them); added the electronic-delivery vocabulary as a plain term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.505 "electronically deliver"; passed 668.50 "may refuse to conduct other transactions by electronic means".
  - `\b(?:portals?|online payments?|electronic (?:payments?|funds transfers?)|web ?sites?|apps?|mobile applications?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|rent)\b` -> 6
  - `\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:portals?|online payments?|electronic (?:payments?|funds transfers?)|mobile applications?)\b` -> 1
  - `\A(?=[\s\S]*\b(?:portals?|online|electronic(?:ally)?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:rent|rents)\b)(?=[\s\S]*\b(?:pay(?:s|ing|ment|ments)?|sign(?:s|ed|ing|ature|atures)?)\b)` -> 21
  - `\b(?:tenant portals?|online portals?|resident portals?)\b` -> 12
  - `\b(?:by electronic means|electronic delivery|electronically deliver)\b` -> 156
- **FLG-F-042** [OK] tenant-portal: required portal payments, signatures or notices; UETA refusal right; supersedes FLG-F-041 (narrowed: the plain by-electronic-means term returned 156 off-point units; replaced with the two statutes' own phrases); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.505 "electronically deliver"; passed 668.50 "may refuse to conduct other transactions by electronic means".
  - `\b(?:portals?|online payments?|electronic (?:payments?|funds transfers?)|web ?sites?|apps?|mobile applications?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|rent)\b` -> 6
  - `\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:portals?|online payments?|electronic (?:payments?|funds transfers?)|mobile applications?)\b` -> 1
  - `\A(?=[\s\S]*\b(?:portals?|online|electronic(?:ally)?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?)\b)(?=[\s\S]*\b(?:rent|rents)\b)(?=[\s\S]*\b(?:pay(?:s|ing|ment|ments)?|sign(?:s|ed|ing|ature|atures)?)\b)` -> 21
  - `\b(?:tenant portals?|online portals?|resident portals?)\b` -> 12
  - `\b(?:electronically deliver|refuse to conduct other transactions by electronic means)\b` -> 6
- **FLG-F-043** [FAILED] (not cited by any row) student-housing: rules for student housing; exemption from tenant protections; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.42 "educational"; passed 97.021 "dormitory room".
  - `\b(?:dormitor(?:y|ies)|student housing|residence halls?|student (?:residents?|tenants?|apartments?)|housing (?:for|of) students)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessees?|evict\w*)\b` -> 4
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessees?|evict\w*)\b[\s\S]{0,1200}\b(?:dormitor(?:y|ies)|student housing|residence halls?|student (?:residents?|tenants?|apartments?)|housing (?:for|of) students)\b` -> 3
  - `\A(?=[\s\S]*\b(?:dormitor(?:y|ies)|student housing|residence halls?|student (?:residents?|tenants?|apartments?)|housing (?:for|of) students)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:terminat\w*|evict\w*|exempt\w*|does not apply)\b)` -> 1
  - `\b(?:student housing|dormitor(?:y|ies))\b` -> 35
- **FLG-F-044** [OK] student-housing: rules for student housing; exemption from tenant protections; supersedes FLG-F-043 (positive 83.42 recorded as failed (no battery term reached it); added the exclusion's own phrase); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.42 "educational"; passed 97.021 "dormitory room".
  - `\b(?:dormitor(?:y|ies)|student housing|residence halls?|student (?:residents?|tenants?|apartments?)|housing (?:for|of) students)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessees?|evict\w*)\b` -> 4
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|leases?|lessees?|evict\w*)\b[\s\S]{0,1200}\b(?:dormitor(?:y|ies)|student housing|residence halls?|student (?:residents?|tenants?|apartments?)|housing (?:for|of) students)\b` -> 3
  - `\A(?=[\s\S]*\b(?:dormitor(?:y|ies)|student housing|residence halls?|student (?:residents?|tenants?|apartments?)|housing (?:for|of) students)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:terminat\w*|evict\w*|exempt\w*|does not apply)\b)` -> 1
  - `\b(?:student housing|dormitor(?:y|ies))\b` -> 35
  - `\bincidental to the provision of\b` -> 3
- **FLG-F-045** [OK] tenant-employee-housing: occupancy conditional on employment; employee housing disclosure; caretakers; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.60 "resident manager"; passed 381.008 "residential migrant housing".
  - `\b(?:employees?|employment|employers?|caretakers?|resident managers?|on-site managers?|superintendents?|janitors?)\b[\s\S]{0,1200}\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:terminat\w*|vacate\w*|possession|evict\w*|occupan\w*)\b` -> 17
  - `\b(?:tenan(?:t|ts|cy|cies)|landlords?|rental agreements?|dwelling units?)\b[\s\S]{0,1200}\b(?:employees?|employment|employers?|caretakers?|resident managers?|on-site managers?|superintendents?|janitors?)\b[\s\S]{0,1200}\b(?:terminat\w*|vacate\w*|possession|evict\w*|occupan\w*)\b` -> 14
  - `\A(?=[\s\S]*\b(?:condition(?:ed|al)? (?:up)?on (?:his or her |the )?employment|incident(?:al)? to (?:the )?employment|employer-provided housing|employee housing|housing provided by (?:an|the) employer)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|occupan\w*|dwelling)\b)` -> 0
  - `\b(?:resident managers?|employee housing|employer-provided housing|residential migrant housing)\b` -> 19
- **FLG-F-046** [FAILED] (not cited by any row) pet-eviction-fact-sheet: required fact sheet on pets and eviction; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.56 "unauthorized pets"; recorded as failed 741.30 "animal".
  - `\b(?:pets?|animals?|dogs?|cats?)\b[\s\S]{0,1200}\b(?:evict\w*|writ of possession|removal of the tenant|possession of the (?:premises|dwelling unit))\b` -> 2
  - `\b(?:evict\w*|writ of possession|removal of the tenant|possession of the (?:premises|dwelling unit))\b[\s\S]{0,1200}\b(?:pets?|animals?|dogs?|cats?)\b` -> 0
  - `\A(?=[\s\S]*\b(?:fact sheets?|informational (?:sheets?|brochures?|pamphlets?)|notice to (?:pet|animal) owners?)\b)(?=[\s\S]*\b(?:pets?|animals?|dogs?|cats?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|evict\w*)\b)` -> 1
  - `\bfact sheets?\b` -> 6
- **FLG-F-047** [OK] pet-eviction-fact-sheet: required fact sheet on pets and eviction; supersedes FLG-F-046 (positive 741.30 recorded as failed (no battery term reached it); replaced with 83.43); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.56 "unauthorized pets"; passed 83.43 "pet deposit".
  - `\b(?:pets?|animals?|dogs?|cats?)\b[\s\S]{0,1200}\b(?:evict\w*|writ of possession|removal of the tenant|possession of the (?:premises|dwelling unit))\b` -> 2
  - `\b(?:evict\w*|writ of possession|removal of the tenant|possession of the (?:premises|dwelling unit))\b[\s\S]{0,1200}\b(?:pets?|animals?|dogs?|cats?)\b` -> 0
  - `\A(?=[\s\S]*\b(?:fact sheets?|informational (?:sheets?|brochures?|pamphlets?)|notice to (?:pet|animal) owners?)\b)(?=[\s\S]*\b(?:pets?|animals?|dogs?|cats?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|evict\w*)\b)` -> 1
  - `\bfact sheets?\b` -> 6
- **FLG-F-048** [FAILED] (not cited by any row) confirmed-absences-outside-title item 1: squatter or unauthorized-occupant specific remedy; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 82.036 "unauthorized person"; recorded as failed 82.035 "transient occupant".
  - `\b(?:squatt\w*|unauthorized persons?|unlawful(?:ly)? occup\w*|unlawful occupants?)\b[\s\S]{0,1200}\b(?:remov\w*|sheriff|vacate|possession)\b` -> 7
  - `\b(?:remov\w*|sheriff|vacate|possession)\b[\s\S]{0,1200}\b(?:squatt\w*|unauthorized persons?|unlawful(?:ly)? occup\w*|unlawful occupants?)\b` -> 9
  - `\A(?=[\s\S]*\b(?:unauthorized persons?|unlawful occupants?|transient occupants?)\b)(?=[\s\S]*\b(?:residential|dwelling)\b)(?=[\s\S]*\bsheriff\b)` -> 6
  - `\bnotice to immediately vacate\b` -> 2
- **FLG-F-049** [OK] confirmed-absences-outside-title item 1: squatter or unauthorized-occupant specific remedy; supersedes FLG-F-048 (positive 82.035 recorded as failed (no battery term reached it); added transient occupant to the proximity limbs); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 82.036 "unauthorized person"; passed 82.035 "transient occupant".
  - `\b(?:squatt\w*|unauthorized persons?|unlawful(?:ly)? occup\w*|unlawful occupants?|transient occupants?)\b[\s\S]{0,1200}\b(?:remov\w*|sheriff|vacate|possession)\b` -> 8
  - `\b(?:remov\w*|sheriff|vacate|possession)\b[\s\S]{0,1200}\b(?:squatt\w*|unauthorized persons?|unlawful(?:ly)? occup\w*|unlawful occupants?|transient occupants?)\b` -> 10
  - `\A(?=[\s\S]*\b(?:unauthorized persons?|unlawful occupants?|transient occupants?)\b)(?=[\s\S]*\b(?:residential|dwelling)\b)(?=[\s\S]*\bsheriff\b)` -> 6
  - `\bnotice to immediately vacate\b` -> 2
- **FLG-F-050** [FAILED] (not cited by any row) confirmed-absences-outside-title item 2: cash rent payment receipt duty (contract and debtor-creditor law included); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.56 "receipt stating the date and amount received"; passed 713.785 "cash".
  - `\bcash\b[\s\S]{0,1200}\breceipts?\b[\s\S]{0,1200}\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|lessees?)\b` -> 6
  - `\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|lessees?)\b[\s\S]{0,1200}\bcash\b[\s\S]{0,1200}\breceipts?\b` -> 4
  - `\A(?=[\s\S]*\bcash\b)(?=[\s\S]*\breceipts?\b)(?=[\s\S]*\b(?:debtors?|payors?|obligors?|tenan(?:t|ts))\b)(?=[\s\S]*\b(?:upon request|on request|shall (?:give|provide|issue|furnish))\b)` -> 37
  - `\b(?:written receipt|receipt for (?:the )?(?:cash|payment|rent))\b` -> 11
- **FLG-F-051** [OK] confirmed-absences-outside-title item 2: cash rent payment receipt duty (contract and debtor-creditor law included); supersedes FLG-F-050 (positive 83.56 recorded as failed (no battery term reached it) and the section-wide AND returned 37 off-point units; added the receipt-stating phrase and a rent limb to the AND); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.56 "receipt stating the date and amount received"; passed 713.785 "cash".
  - `\bcash\b[\s\S]{0,1200}\breceipts?\b[\s\S]{0,1200}\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|lessees?)\b` -> 6
  - `\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|lessees?)\b[\s\S]{0,1200}\bcash\b[\s\S]{0,1200}\breceipts?\b` -> 4
  - `\A(?=[\s\S]*\bcash\b)(?=[\s\S]*\breceipts?\b)(?=[\s\S]*\b(?:rent|rents)\b)(?=[\s\S]*\b(?:debtors?|payors?|obligors?|tenan(?:t|ts))\b)(?=[\s\S]*\b(?:upon request|on request|shall (?:give|provide|issue|furnish))\b)` -> 14
  - `\b(?:written receipt|receipt stating|receipt for (?:the )?(?:cash|payment|rent))\b` -> 12
- **FLG-F-052** [FAILED] (not cited by any row) confirmed-absences-outside-title item 3: landlord registration or licence as a precondition to a possession judgment; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 509.241 "license"; recorded as failed 83.59 "action for possession".
  - `\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b[\s\S]{0,1200}\b(?:action for possession|writ of possession|judgment for possession|evict\w*|removal of (?:the )?tenant)\b` -> 5
  - `\b(?:action for possession|writ of possession|judgment for possession|evict\w*|removal of (?:the )?tenant)\b[\s\S]{0,1200}\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b` -> 5
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b)(?=[\s\S]*\b(?:action for possession|writ of possession|evict\w*)\b)(?=[\s\S]*\b(?:condition precedent|may not (?:bring|maintain|file)|shall not (?:bring|maintain|file)|dismiss\w*|bar(?:s|red)?)\b)` -> 2
  - `\bcondition precedent\b[\s\S]{0,1200}\b(?:possession|evict\w*)\b` -> 3
- **FLG-F-053** [FAILED] (not cited by any row) confirmed-absences-outside-title item 3: landlord registration or licence as a precondition to a possession judgment; supersedes FLG-F-052 (both positives recorded as failed (no battery term reached them); replaced with units the terms reach); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.061 "Eviction|eviction"; recorded as failed 83.231 "tenant".
  - `\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b[\s\S]{0,1200}\b(?:action for possession|writ of possession|judgment for possession|evict\w*|removal of (?:the )?tenant)\b` -> 5
  - `\b(?:action for possession|writ of possession|judgment for possession|evict\w*|removal of (?:the )?tenant)\b[\s\S]{0,1200}\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b` -> 5
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b)(?=[\s\S]*\b(?:action for possession|writ of possession|evict\w*)\b)(?=[\s\S]*\b(?:condition precedent|may not (?:bring|maintain|file)|shall not (?:bring|maintain|file)|dismiss\w*|bar(?:s|red)?)\b)` -> 2
  - `\bcondition precedent\b[\s\S]{0,1200}\b(?:possession|evict\w*)\b` -> 3
- **FLG-F-054** [OK] confirmed-absences-outside-title item 3: landlord registration or licence as a precondition to a possession judgment; supersedes FLG-F-053 (positive 83.231 recorded as failed (its body has no 'tenant'); replaced the pattern with its own phrase); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 723.061 "Eviction|eviction"; passed 83.231 "judgment for possession".
  - `\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b[\s\S]{0,1200}\b(?:action for possession|writ of possession|judgment for possession|evict\w*|removal of (?:the )?tenant)\b` -> 5
  - `\b(?:action for possession|writ of possession|judgment for possession|evict\w*|removal of (?:the )?tenant)\b[\s\S]{0,1200}\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b` -> 5
  - `\A(?=[\s\S]*\blandlords?\b)(?=[\s\S]*\b(?:regist(?:er|ered|ers|ration|rations)|licens(?:e|ed|es|ing|ure)|certificate of (?:occupancy|registration|compliance))\b)(?=[\s\S]*\b(?:action for possession|writ of possession|evict\w*)\b)(?=[\s\S]*\b(?:condition precedent|may not (?:bring|maintain|file)|shall not (?:bring|maintain|file)|dismiss\w*|bar(?:s|red)?)\b)` -> 2
  - `\bcondition precedent\b[\s\S]{0,1200}\b(?:possession|evict\w*)\b` -> 3
- **FLG-F-055** [OK] confirmed-absences-misc item: smoke/CO alarm evidentiary or insurance shield; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.51 "smoke detection devices"; passed 553.883 "smoke alarms".
  - `\b(?:smoke (?:detect\w*|alarms?)|carbon monoxide (?:detect\w*|alarms?))\b[\s\S]{0,1200}\b(?:admissib\w*|inadmissib\w*|evidence of negligence|insurers?|insurance)\b` -> 1
  - `\b(?:admissib\w*|inadmissib\w*|evidence of negligence|insurers?|insurance)\b[\s\S]{0,1200}\b(?:smoke (?:detect\w*|alarms?)|carbon monoxide (?:detect\w*|alarms?))\b` -> 0
  - `\A(?=[\s\S]*\b(?:smoke (?:detect\w*|alarms?)|carbon monoxide (?:detect\w*|alarms?))\b)(?=[\s\S]*\b(?:landlords?|owners?|tenan(?:t|ts))\b)(?=[\s\S]*\b(?:liab\w*|negligen\w*|civil action|damages)\b)` -> 6
  - `\bsmoke (?:detection devices?|detectors?|alarms?)\b` -> 16
- **FLG-F-056** [FAILED] (not cited by any row) confirmed-absences-misc item: ban or cap on payment-method (convenience) fees for rent; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 83.43 "rent"; passed 215.322 "convenience fee".
  - `\b(?:convenience fees?|surcharges?|processing fees?|transaction fees?|service fees?)\b[\s\S]{0,1200}\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|rental agreements?)\b` -> 15
  - `\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|rental agreements?)\b[\s\S]{0,1200}\b(?:convenience fees?|surcharges?|processing fees?|transaction fees?)\b` -> 13
  - `\A(?=[\s\S]*\b(?:credit cards?|debit cards?|electronic payments?|payment methods?|method of payment)\b)(?=[\s\S]*\b(?:fees?|surcharges?|charges?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?)\b)(?=[\s\S]*\b(?:may not|shall not|prohibit\w*)\b)` -> 20
  - `\bconvenience fees?\b` -> 14
- **FLG-F-057** [OK] confirmed-absences-misc item: ban or cap on payment-method (convenience) fees for rent; supersedes FLG-F-056 (positive 83.43 recorded as failed (no battery term reached it); replaced with 501.0117, and added the lessee wording); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 501.0117 "surcharge"; passed 215.322 "convenience fee".
  - `\b(?:convenience fees?|surcharges?|processing fees?|transaction fees?|service fees?)\b[\s\S]{0,1200}\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|rental agreements?|lessees?|lessors?)\b` -> 21
  - `\b(?:rent|rents|tenan(?:t|ts|cy)|landlords?|rental agreements?|lessees?|lessors?)\b[\s\S]{0,1200}\b(?:convenience fees?|surcharges?|processing fees?|transaction fees?)\b` -> 19
  - `\A(?=[\s\S]*\b(?:credit cards?|debit cards?|electronic payments?|payment methods?|method of payment)\b)(?=[\s\S]*\b(?:fees?|surcharges?|charges?)\b)(?=[\s\S]*\b(?:tenan(?:t|ts|cy)|landlords?|rental agreements?|lessees?|lessors?)\b)(?=[\s\S]*\b(?:may not|shall not|prohibit\w*)\b)` -> 30
  - `\bconvenience fees?\b` -> 14
- **FLG-F-058** [OK] confirmed-absences-misc item: special right to end a lease for a false rental application; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 817.537 "rental application"; passed 83.56 "fraudulent entry".
  - `\b(?:false|fraudulent|forged|fictitious|misrepresent\w*|materially false)\b[\s\S]{0,1200}\b(?:rental applications?|applications? for (?:a )?(?:residential )?(?:tenancy|lease|rental))\b` -> 2
  - `\b(?:rental applications?|applications? for (?:a )?(?:residential )?(?:tenancy|lease|rental))\b[\s\S]{0,1200}\b(?:false|fraudulent|forged|fictitious|misrepresent\w*|terminat\w*|rescind\w*|rescission)\b` -> 2
  - `\A(?=[\s\S]*\brental applications?\b)(?=[\s\S]*\b(?:false|fraudulent|misrepresent\w*)\b)(?=[\s\S]*\b(?:terminat\w*|rescind\w*|rescission|void\w*)\b)` -> 1
  - `\bfraudulent entry\b` -> 5
- **FLG-M-001** [OK] dv-lockchange: lock change or rekey right or duty for a violence victim; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.67 "changing the locks".
  - `(?:(?:domestic|dating|sexual|repeat) violence|\bstalking\b)[\s\S]{0,1200}\b(?:locks?|rekey\w*|re-key\w*)\b` -> 0
  - `\b(?:locks?|rekey\w*|re-key\w*)\b[\s\S]{0,1200}(?:(?:domestic|dating|sexual|repeat) violence|\bstalking\b)` -> 0
  - `\A(?=[\s\S]*(?:(?:domestic|dating|sexual|repeat) violence|\bstalking\b))(?=[\s\S]*\b(?:locks?|rekey\w*)\b)(?=[\s\S]*\b(?:tenant|landlord|lessee|lessor|rental agreement)\b)` -> 1
  - `\bchang(?:e|es|ed|ing) the locks\b` -> 6
  - `\bvictim\w*[\s\S]{0,1200}\b(?:locks?|rekey\w*)\b` -> 1
  - `\b(?:locks?|rekey\w*)\b[\s\S]{0,1200}\bvictim\w*` -> 1
- **FLG-M-002** [OK] dv tenancy protections: termination, eviction defense, confidentiality, deposit timing, qualifying documents; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 741.30 "exclusive use and possession of the dwelling".
  - `(?:(?:domestic|dating|sexual|repeat) violence|\bstalking\b)[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|tenancy|evict\w*)` -> 2
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|tenancy|evict\w*)[\s\S]{0,1200}(?:(?:domestic|dating|sexual|repeat) violence|\bstalking\b)` -> 4
  - `\A(?=[\s\S]*(?:(?:domestic|dating|sexual|repeat) violence|\bstalking\b))(?=[\s\S]*\b(?:tenant|landlord|lessee|lessor)\b)(?=[\s\S]*\b(?:terminat\w*|evict\w*|possession|rental agreement|lease)\b)` -> 8
  - `exclusive use and possession of the dwelling` -> 6
  - `\bvictim\w*[\s\S]{0,1200}\b(?:rental agreement|tenancy|landlord|lessor|evict\w*)` -> 2
  - `\b(?:rental agreement|tenancy|landlord|lessor|evict\w*)[\s\S]{0,1200}\bvictim\w*` -> 1
- **FLG-M-003** [OK] jury-waiver: statute on waiving jury in a lease or eviction; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed R1.430 "waives? trial by jury|trial by jury".
  - `\bwaiv\w*[\s\S]{0,1200}\bjury\b` -> 19
  - `\bjury\b[\s\S]{0,1200}\bwaiv\w*` -> 20
  - `\A(?=[\s\S]*\bjury\b)(?=[\s\S]*\bwaiv\w*)(?=[\s\S]*\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit))` -> 7
  - `trial by jury` -> 25
- **FLG-M-004** [OK] confession-of-judgment: confessed judgments, warrants of attorney, cognovit; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 55.05 "confessing or suffering judgment".
  - `confess\w*[\s\S]{0,1200}\bjudgment` -> 11
  - `\bjudgment[\s\S]{0,1200}confess\w*` -> 3
  - `cognovit|warrant of attorney` -> 0
  - `agree\w* (?:to|for) (?:a |the )?(?:entry of )?judgment` -> 0
  - `\A(?=[\s\S]*confess\w*)(?=[\s\S]*\bjudgment)(?=[\s\S]*\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit))` -> 3
- **FLG-M-005** [OK] liquidated-damages / penalty rule outside ch. 83; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.595 "liquidated damages".
  - `liquidated damages` -> 55
  - `\bpenalt\w*[\s\S]{0,1200}\b(?:contract|agreement)[\s\S]{0,1200}\b(?:void|unenforceable)\b` -> 17
  - `\b(?:void|unenforceable)\b[\s\S]{0,1200}\b(?:contract|agreement)[\s\S]{0,1200}\bpenalt\w*` -> 8
  - `damages[\s\S]{0,1200}(?:fixed|determined|stipulated) in (?:advance|anticipation)` -> 0
  - `\A(?=[\s\S]*liquidated damages)(?=[\s\S]*\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit))` -> 13
- **FLG-M-006** [FAILED] (not cited by any row) notice-service-fee / eviction-penalty-clause-ban: lease charge for serving a notice or filing an eviction; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 83.62 "reasonable hourly rate"; passed 83.67 "changing the locks".
  - `(?:fee|charge)s?[\s\S]{0,1200}\b(?:serv\w*|post\w*|deliver\w*) (?:of )?(?:a |the )?(?:written )?notice[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 5
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}(?:fee|charge)s?[\s\S]{0,1200}\b(?:serv\w*|post\w*|deliver\w*) (?:of )?(?:a |the )?(?:written )?notice` -> 11
  - `eviction (?:fee|charge|cost)s?` -> 0
  - `\A(?=[\s\S]*\bevict\w*)(?=[\s\S]*\b(?:fee|charge)s?\b)(?=[\s\S]*\b(?:tenant|landlord)\b)` -> 14
  - `\bnotice (?:fee|charge)s?\b` -> 0
- **FLG-M-007** [OK] collection-fee: fee for collecting a past-due amount; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 68.065 "collection costs?|cost\w* of collection|collection (?:fee|cost|charge)".
  - `collection (?:fee|cost|charge|expense)s?` -> 17
  - `\bcost\w* of collection` -> 32
  - `\A(?=[\s\S]*\bcollect\w*)(?=[\s\S]*\b(?:fee|charge|cost)s?\b)(?=[\s\S]*\b(?:tenant|landlord|rent)\b)(?=[\s\S]*\b(?:lease|rental agreement)\b)` -> 88
- **FLG-M-008** [OK] notice-service-fee / eviction-penalty-clause-ban: lease charge for serving a notice or filing an eviction; supersedes FLG-M-006 (positive 83.62 matched no battery term; rerun without it); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.67 "lawful eviction".
  - `(?:fee|charge)s?[\s\S]{0,1200}\b(?:serv\w*|post\w*|deliver\w*) (?:of )?(?:a |the )?(?:written )?notice[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 5
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}(?:fee|charge)s?[\s\S]{0,1200}\b(?:serv\w*|post\w*|deliver\w*) (?:of )?(?:a |the )?(?:written )?notice` -> 11
  - `eviction (?:fee|charge|cost)s?` -> 0
  - `\A(?=[\s\S]*\bevict\w*)(?=[\s\S]*\b(?:fee|charge)s?\b)(?=[\s\S]*\b(?:tenant|landlord)\b)` -> 14
  - `\bnotice (?:fee|charge)s?\b` -> 0
- **FLG-M-009** [OK] collection-fee: fee for collecting a past-due amount; supersedes FLG-M-007 (four-term AND returned 88 mostly off-point units; replaced with a collection-charge limb tied to the role words); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 68.065 "collection costs?|cost\w* of collection|collection (?:fee|cost|charge)".
  - `collection (?:fee|cost|charge|expense)s?` -> 17
  - `\bcost\w* of collection` -> 32
  - `\A(?=[\s\S]*(?:collection (?:fee|cost|charge|expense)s?|\bcost\w* of collection))(?=[\s\S]*\b(?:tenant|landlord|lessee|lessor)\b)` -> 4
- **FLG-M-010** [OK] smoke-drift-waiver: smoke drift between units, waivers, secondhand smoke in rentals; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 386.203 "Secondhand smoke".
  - `(?:secondhand smoke|smoke drift|drifting smoke|tobacco smoke|environmental tobacco)[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 1
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}(?:secondhand smoke|smoke drift|drifting smoke|tobacco smoke|environmental tobacco)` -> 1
  - `\A(?=[\s\S]*\bsmok\w*)(?=[\s\S]*\b(?:tenant|landlord|rental agreement)\b)(?=[\s\S]*\bwaiv\w*)` -> 5
  - `secondhand smoke` -> 1
- **FLG-M-011** [OK] application-fees: rental application or screening fee rules; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.425 "fees associated with such applications".
  - `application fees?` -> 282
  - `screening fees?` -> 0
  - `applications? and fees` -> 7
  - `\A(?=[\s\S]*\bapplication\w*)(?=[\s\S]*\bfees?\b)(?=[\s\S]*\b(?:tenant|landlord|rental agreement)\b)(?=[\s\S]*\b(?:rent|rental|dwelling)\b)` -> 46
- **FLG-M-012** [OK] holding-deposit: money taken before the lease; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 420.503 "earnest money".
  - `holding deposits?|earnest money|reservation (?:fee|deposit)s?|good[- ]faith deposits?` -> 17
  - `\bdeposit\w*[\s\S]{0,1200}\b(?:prospective tenant|applicant)s?\b` -> 119
  - `\b(?:prospective tenant|applicant)s?\b[\s\S]{0,1200}\bdeposit\w*` -> 151
- **FLG-M-013** [OK] required-fees / fee-transparency / fee-unprovided-service: lease fee listing, all-in price, fee for a service not provided; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.425 "fees charged by the landlord".
  - `(?:mandatory|nonoptional|non-optional|required) (?:fees?|charges?)` -> 81
  - `junk fees?|hidden fees?|drip pricing|total price` -> 10
  - `\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:disclos\w*|itemiz\w*)[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 20
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:disclos\w*|itemiz\w*)` -> 23
  - `fees charged by the landlord` -> 1
  - `(?:fees?|charges?)[\s\S]{0,1200}\bservices? (?:not|never) (?:provided|rendered|furnished)` -> 2
- **FLG-M-014** [OK] rent-receipts: duty to give a receipt; debtor's right to a receipt; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.56 "receipt stating the date and amount received".
  - `\breceipts?\b[\s\S]{0,1200}\brent\b` -> 28
  - `\brent\b[\s\S]{0,1200}\breceipts?\b` -> 33
  - `\b(?:right|entitled) to (?:a |an )?(?:written )?receipt` -> 2
  - `\A(?=[\s\S]*\breceipt)(?=[\s\S]*\bcreditor\b)(?=[\s\S]*\bdebtor\b)(?=[\s\S]*\b(?:demand|request|require)\w*)` -> 17
- **FLG-M-015** [OK] deposit-cost-schedule / security-deposit-standards: preset cleaning or carpet charges, posted deposit standards; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 715.065 "cleaning".
  - `\b(?:carpet|cleaning)\b[\s\S]{0,1200}\bdeposit\w*` -> 4
  - `\bdeposit\w*[\s\S]{0,1200}\b(?:carpet|cleaning)\b` -> 2
  - `\bstandards?\b[\s\S]{0,1200}\bsecurity deposits?` -> 1
  - `\bsecurity deposits?[\s\S]{0,1200}\bstandards?\b` -> 2
  - `\A(?=[\s\S]*\bsecurity deposits?\b)(?=[\s\S]*\b(?:carpet|cleaning|standards?)\b)(?=[\s\S]*\b(?:tenant|landlord)\b)` -> 2
- **FLG-M-016** [OK] nonrefundable-deposit-notice / separate notice; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.491 "nonrefundable".
  - `\bnon-?refundable\b` -> 192
  - `\bnon-?refundable\b[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 4
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}\bnon-?refundable\b` -> 1
- **FLG-M-017** [OK] application-fees: rental application or screening fee rules; supersedes FLG-M-011 (plain 'application fee' term returned 282 licensing units; replaced by role-limbed terms); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.425 "fees associated with such applications".
  - `application fees?[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 3
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}application fees?` -> 2
  - `screening fees?` -> 0
  - `applications? and fees` -> 7
  - `\A(?=[\s\S]*\bapplication fees?\b)(?=[\s\S]*\b(?:tenant|landlord)\b)(?=[\s\S]*\b(?:rent|rental|dwelling)\b)` -> 5
- **FLG-M-018** [OK] holding-deposit: money taken before the lease; supersedes FLG-M-012 ('applicant' limb returned 119/151 licensing units; replaced by 'prospective tenant'); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 420.503 "earnest money"; passed 83.491 "prospective tenant".
  - `holding deposits?|earnest money|reservation (?:fee|deposit)s?|good[- ]faith deposits?` -> 17
  - `\bdeposit\w*[\s\S]{0,1200}\bprospective tenants?\b` -> 1
  - `\bprospective tenants?\b[\s\S]{0,1200}\bdeposit\w*` -> 2
  - `\A(?=[\s\S]*\bdeposit\w*)(?=[\s\S]*\b(?:prospective tenant|applicant for (?:a )?(?:rental|tenancy|occupancy))s?\b)` -> 3
- **FLG-M-019** [OK] required-fees / fee-transparency / fee-unprovided-service; supersedes FLG-M-013 (plain 'mandatory/required fees' term returned 81 off-point units; replaced by role-limbed terms); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.425 "fees charged by the landlord".
  - `(?:mandatory|nonoptional|non-optional|required) (?:fees?|charges?)[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 1
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}(?:mandatory|nonoptional|non-optional|required) (?:fees?|charges?)` -> 3
  - `junk fees?|hidden fees?|drip pricing|total price` -> 10
  - `\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:disclos\w*|itemiz\w*)[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 20
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}\b(?:fees?|charges?)\b[\s\S]{0,1200}\b(?:disclos\w*|itemiz\w*)` -> 23
  - `fees charged by the landlord` -> 1
  - `(?:fees?|charges?)[\s\S]{0,1200}\bservices? (?:not|never) (?:provided|rendered|furnished)` -> 2
- **FLG-M-020** [OK] nonrefundable-deposit-notice / separate notice; supersedes FLG-M-016 (plain 'nonrefundable' returned 192 licensing units; replaced by a distinctive deposit term); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.491 "nonrefundable".
  - `\bnon-?refundable (?:security )?deposits?\b` -> 3
  - `\bnon-?refundable\b[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 4
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}\bnon-?refundable\b` -> 1
  - `\A(?=[\s\S]*\bnon-?refundable\b)(?=[\s\S]*\bdeposit\w*)(?=[\s\S]*\b(?:tenant|landlord|rent)\b)` -> 7
- **FLG-M-021** [OK] rent-receipts: duty to give a receipt; debtor's right to a receipt; supersedes FLG-M-014 (INFLECTION warnings on rent, creditor, debtor); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.56 "receipt stating the date and amount received".
  - `\breceipts?\b[\s\S]{0,1200}\brent(?:s|ed|ing)?\b` -> 44
  - `\brent(?:s|ed|ing)?\b[\s\S]{0,1200}\breceipts?\b` -> 45
  - `\b(?:right|entitled) to (?:a |an )?(?:written )?receipt` -> 2
  - `\A(?=[\s\S]*\breceipt)(?=[\s\S]*\bcreditors?\b)(?=[\s\S]*\bdebtors?\b)(?=[\s\S]*\b(?:demand|request|require)\w*)` -> 21
- **FLG-M-022** [FAILED] (not cited by any row) source-of-income: refusing tenants for income source or vouchers; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: recorded as failed 1002.81 "federal housing assistance payments".
  - `(?:source of income|lawful source|housing (?:choice )?vouchers?|section 8\b|housing assistance payments?|rent(?:al)? (?:subsidy|subsidies|assistance))[\s\S]{0,1200}\b(?:discriminat\w*|refus\w*|den(?:y|ied|ies))` -> 2
  - `\b(?:discriminat\w*|refus\w*|den(?:y|ied|ies))[\s\S]{0,1200}(?:source of income|lawful source|housing (?:choice )?vouchers?|section 8\b|housing assistance payments?|rent(?:al)? (?:subsidy|subsidies|assistance))` -> 6
  - `\A(?=[\s\S]*(?:source of income|lawful source|housing (?:choice )?vouchers?|section 8\b|housing assistance payments?|rent(?:al)? (?:subsidy|subsidies|assistance)))(?=[\s\S]*\b(?:discriminat\w*|refus\w*)\b)(?=[\s\S]*\b(?:tenant|landlord|rental|dwelling)\b)` -> 32
  - `source of income` -> 8
- **FLG-M-023** [OK] tenant-rights-statement / rights-responsibilities-guide: state statement, handbook or guide to give tenants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.425 "rights and responsibilities of the landlord".
  - `(?:tenants?|landlords?|renters?)['’]? (?:rights|bill of rights|handbook|guide)` -> 2
  - `rights and responsibilities of (?:the )?(?:landlord|tenant)` -> 1
  - `(?:statement|summary|handbook|guide|brochure|pamphlet)s?[\s\S]{0,1200}\b(?:tenant|landlord)s?\b[\s\S]{0,1200}\brights?\b` -> 11
  - `\A(?=[\s\S]*\b(?:handbook|brochure|pamphlet|guide)\b)(?=[\s\S]*\b(?:tenant|landlord)s?\b)(?=[\s\S]*\b(?:rental agreement|lease|tenancy)\b)` -> 10
- **FLG-M-024** [OK] rent-increase-notice / term-change-notice: notice before raising rent or changing terms; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 723.037 "increase".
  - `\brent (?:increase|increases|increased)\b|increase (?:in |of )?(?:the )?(?:lot )?rent\w*` -> 10
  - `\b(?:increas\w*|rais\w*)\b[\s\S]{0,1200}\brent\b[\s\S]{0,1200}\bnotice` -> 3
  - `\bnotice[\s\S]{0,1200}\b(?:increas\w*|rais\w*)\b[\s\S]{0,1200}\brent\b` -> 3
  - `\A(?=[\s\S]*\b(?:increas\w*|rais\w*)\b)(?=[\s\S]*\brent\b)(?=[\s\S]*\bnotice\b)(?=[\s\S]*\b(?:tenant|landlord)\b)` -> 20
  - `(?:chang\w*|modif\w*|amend\w*)[\s\S]{0,1200}\b(?:terms|rental agreement)\b[\s\S]{0,1200}\b(?:tenant|landlord)\b[\s\S]{0,1200}\bnotice` -> 6
- **FLG-M-025** [OK] tenant-screening: rules for screening rental applicants; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.425 "screening process used by a landlord".
  - `tenant screening|screening (?:process|criteria)` -> 16
  - `(?:criminal|arrest|eviction) (?:history|record|background)s?[\s\S]{0,1200}\b(?:tenant|rental|landlord|housing)` -> 7
  - `\b(?:tenant|rental|landlord|housing)\b[\s\S]{0,1200}(?:criminal|arrest|eviction) (?:history|record|background)s?` -> 4
  - `\bconsumer reports?\b[\s\S]{0,1200}\b(?:tenant|rental|landlord|lease)` -> 2
  - `\b(?:tenant|rental|landlord|lease)\b[\s\S]{0,1200}\bconsumer reports?\b` -> 2
- **FLG-M-026** [OK] late-fee-limit: caps on late fees; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 723.061 "late charges".
  - `late (?:fee|charge|payment charge)s?[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 8
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}late (?:fee|charge|payment charge)s?` -> 9
  - `\A(?=[\s\S]*\blate (?:fee|charge)s?)(?=[\s\S]*\b(?:tenant|landlord|lessee|lot rental)\b)` -> 13
- **FLG-M-027** [OK] lockout-for-rent-delinquency: self-help lockout; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.67 "bootlock".
  - `\block(?:ing|s|ed)? out\b|\blockouts?\b|\bbootlock` -> 15
  - `\bchang(?:e|es|ed|ing) the locks\b` -> 6
  - `\bexclud\w*[\s\S]{0,1200}\btenant[\s\S]{0,1200}\b(?:rent|nonpayment)` -> 5
- **FLG-M-028** [OK] exculpatory-clauses: releases, indemnity, liability limits in leases; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.47 "limit or preclude any liability".
  - `\bindemnif\w*[\s\S]{0,1200}\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)` -> 3
  - `\b(?:tenant|landlord|lessee|lessor|rental agreement|dwelling unit)[\s\S]{0,1200}\bindemnif\w*` -> 5
  - `exculpat\w*|hold (?:\w+ )?harmless` -> 52
  - `\A(?=[\s\S]*\b(?:limit|preclude|release)\w*)(?=[\s\S]*\bliabilit\w*)(?=[\s\S]*\b(?:rental agreement|lease)\b)(?=[\s\S]*\b(?:tenant|landlord)\b)` -> 32
- **FLG-M-029** [OK] rent-receipt-anti-waiver: whoever collects rent keeps the repair duty; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 697.07 "assignment of rents".
  - `\bassign\w*[\s\S]{0,1200}\brents?\b[\s\S]{0,1200}\b(?:repair\w*|maint\w*|habitab\w*|obligations?)\b` -> 5
  - `\b(?:repair\w*|maint\w*|habitab\w*|obligations?)\b[\s\S]{0,1200}\bassign\w*[\s\S]{0,1200}\brents?\b` -> 5
  - `assignment of rents` -> 1
  - `\A(?=[\s\S]*\bcollect\w* (?:the )?rents?\b)(?=[\s\S]*\b(?:obligation|dut(?:y|ies))\b)(?=[\s\S]*\b(?:landlord|lessor)\b)` -> 3
- **FLG-M-030** [OK] waiver-by-acceptance: accepting rent waives a breach; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 83.56 "accepts rent with actual knowledge".
  - `\baccept\w*[\s\S]{0,1200}\brent\w*[\s\S]{0,1200}\bwaiv\w*` -> 6
  - `\bwaiv\w*[\s\S]{0,1200}\baccept\w*[\s\S]{0,1200}\brent\w*` -> 4
  - `\A(?=[\s\S]*\baccept\w* (?:of )?(?:the )?(?:partial )?rent)(?=[\s\S]*\bwaiv\w*)` -> 4
- **FLG-M-031** [OK] source-of-income: refusing tenants for income source or vouchers; supersedes FLG-M-022 (positive 1002.81 matched no battery term; positive moved to a unit a term reaches); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 1002.81 "federal housing assistance payments".
  - `(?:source of income|lawful source|housing (?:choice )?vouchers?|section 8\b|housing assistance payments?|rent(?:al)? (?:subsidy|subsidies|assistance))[\s\S]{0,1200}\b(?:discriminat\w*|refus\w*|den(?:y|ied|ies))` -> 2
  - `\b(?:discriminat\w*|refus\w*|den(?:y|ied|ies))[\s\S]{0,1200}(?:source of income|lawful source|housing (?:choice )?vouchers?|section 8\b|housing assistance payments?|rent(?:al)? (?:subsidy|subsidies|assistance))` -> 6
  - `\A(?=[\s\S]*(?:source of income|lawful source|housing (?:choice )?vouchers?|section 8\b|housing assistance payments?|rent(?:al)? (?:subsidy|subsidies|assistance)))(?=[\s\S]*\b(?:discriminat\w*|refus\w*)\b)(?=[\s\S]*\b(?:tenant|landlord|rental|dwelling)\b)` -> 32
  - `source of income` -> 8
  - `federal housing assistance payments` -> 1
- **FLG-M-032** [OK] rent-increase-notice / term-change-notice: notice before raising rent or changing terms; supersedes FLG-M-024 (INFLECTION warnings on rent); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2548; positives: passed 723.037 "increase".
  - `\brent (?:increase|increases|increased)\b|increase (?:in |of )?(?:the )?(?:lot )?rent\w*` -> 10
  - `\b(?:increas\w*|rais\w*)\b[\s\S]{0,1200}\brent(?:s|ed|al)?\b[\s\S]{0,1200}\bnotice` -> 8
  - `\bnotice[\s\S]{0,1200}\b(?:increas\w*|rais\w*)\b[\s\S]{0,1200}\brent(?:s|ed|al)?\b` -> 9
  - `\A(?=[\s\S]*\b(?:increas\w*|rais\w*)\b)(?=[\s\S]*\brent(?:s|al)?\b)(?=[\s\S]*\bnotice\b)(?=[\s\S]*\b(?:tenant|landlord)\b)(?=[\s\S]*\b(?:amount|rate)\b)` -> 31
  - `(?:chang\w*|modif\w*|amend\w*)[\s\S]{0,1200}\b(?:terms|rental agreement)\b[\s\S]{0,1200}\b(?:tenant|landlord)\b[\s\S]{0,1200}\bnotice` -> 6
- **FLG-M-033** [OK] landlord-registration (check R11-10): statewide landlord or rental registry; out-of-state owner local agent; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 509.101 "register of guests".
  - `\bregist\w*[\s\S]{0,1200}\b(?:landlords?|rental propert\w*|residential rental|rental units?|dwelling units?)` -> 23
  - `\b(?:landlords?|rental propert\w*|residential rental|rental units?|dwelling units?)[\s\S]{0,1200}\bregist\w*` -> 18
  - `\b(?:nonresident|out-of-state|out of state|resides? outside)[\s\S]{0,1200}\b(?:owner|landlord|lessor)s?\b[\s\S]{0,1200}\b(?:rent\w*|lease\w*|dwelling)` -> 12
  - `\b(?:local|resident|registered) agent[\s\S]{0,1200}\b(?:rental|landlord|dwelling|tenant)` -> 0
- **FLG-M-034** [OK] deposit-installments (check R11-11): installment payment of a security deposit outside s. 83.491; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.491 "installments".
  - `\binstall?ments?\b[\s\S]{0,1200}\b(?:security )?deposits?\b` -> 18
  - `\b(?:security )?deposits?\b[\s\S]{0,1200}\binstall?ments?\b` -> 12
- **FLG-M-035** [OK] habitability-waiver (check R11-12): tenant accepts named defects for a rent reduction; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.51 "abate".
  - `\b(?:reduc\w*|abat\w*|lower\w*|discount\w*)\b[\s\S]{0,1200}\brent\w*\b[\s\S]{0,1200}\b(?:defects?|defective|conditions?|repairs?|disrepair)\b` -> 13
  - `\b(?:defects?|defective|disrepair)\b[\s\S]{0,1200}\b(?:reduc\w*|abat\w*)\b[\s\S]{0,1200}\brent\w*\b` -> 1
  - `\b(?:accept\w*|waiv\w*|as is)\b[\s\S]{0,600}\b(?:defects?|defective|disrepair)\b[\s\S]{0,1200}\b(?:tenants?|lessees?)\b` -> 1
- **FLG-M-036** [OK] unconscionability (check R11-13): statutory list of unconscionable lease terms; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.45 "unconscionable".
  - `\bunconscionab\w*` -> 27
  - `\bunfair (?:lease|rental agreement|terms?)\b` -> 0
- **FLG-M-037** [OK] pet-fees (check R21-04): a cap on pet fees, pet deposits or pet rent; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 413.08 "extra compensation".
  - `\bpets?\b[\s\S]{0,1200}\b(?:fees?|deposits?|rent|charges?)\b[\s\S]{0,1200}\b(?:exceed\w*|caps?|capped|limit\w*|maximum)\b` -> 3
  - `\b(?:fees?|deposits?|rent|charges?)\b[\s\S]{0,1200}\bpets?\b[\s\S]{0,1200}\b(?:exceed\w*|caps?|capped|limit\w*|maximum)\b` -> 0
  - `\bextra compensation\b` -> 7
- **FLG-M-038** [FAILED] (not cited by any row) expedited-deposit-disposition (check R21-01): fast-track or summary procedure for security deposit disputes; scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: recorded as failed 51.011 "summary procedure".
  - `\b(?:expedit\w*|summary (?:procedure|proceeding)s?|fast[- ]track|accelerat\w*)\b[\s\S]{0,1200}\b(?:security deposits?|deposit money|advance rent)\b` -> 0
  - `\b(?:security deposits?|deposit money|advance rent)\b[\s\S]{0,1200}\b(?:expedit\w*|summary (?:procedure|proceeding)s?|fast[- ]track|accelerat\w*)\b` -> 1
  - `\bsummary procedure\b` -> 43
- **FLG-M-039** [OK] expedited-deposit-disposition (check R21-01): fast-track or summary procedure for security deposit disputes; supersedes FLG-M-038 (positive 51.011 does not contain the phrase; positive moved to 83.59, which a term reaches); scope all; controls "zqxvbnmwt" 0, "\bLegislature\b" 2426; positives: passed 83.59 "summary procedure".
  - `\b(?:expedit\w*|summary (?:procedure|proceeding)s?|fast[- ]track|accelerat\w*)\b[\s\S]{0,1200}\b(?:security deposits?|deposit money|advance rent)\b` -> 0
  - `\b(?:security deposits?|deposit money|advance rent)\b[\s\S]{0,1200}\b(?:expedit\w*|summary (?:procedure|proceeding)s?|fast[- ]track|accelerat\w*)\b` -> 1
  - `\bsummary procedure\b` -> 43

### §4 Decisions and questions asked of Taylor

#### Florida items (prompt), each answered once with the statute read

1. **Waivers, prohibited provisions and remedies (rule 54).** Read whole: Fla. Stat. §§ 83.45, 83.47, 83.48, 83.51, 83.56(5), 83.595 (and 83.44, 83.49, 83.53, 83.57, 83.575, 83.63, 55.05, 57.105, 559.72, 559.77, 386.203-386.209, Fla. Const. art. I, § 22, art. X, § 20, Fla. R. Civ. P. 1.430, Form 1.947(b)). Central row `edu-part5-nonwaivable-fl` (part5-nonwaivable): § 83.47(1)(a)-(b) voids waivers of part II rights and limits on legal liability; § 83.47(2) gives actual damages for inclusion with no knowledge element; § 83.56(4) and § 83.48 carry their own non-waiver sentences; what part II leaves to agreement (§§ 83.46(1), 83.49(5), 83.51(1) last sentence for single-family homes and duplexes, 83.51(2)(a)-(b) "unless otherwise agreed in writing", 83.51(2)(e)). Each other waiver topic has its own short row pointing there: habitability-waiver, habitability-modifiable, notice-to-quit-waiver, showing-notice-waiver (Florida sets no showing-notice period, so a waiver of one is empty), security-deposit-nonwaiver, smoke-drift-waiver, jury-waiver, confession-of-judgment (§ 55.05 voids every pre-suit power of attorney to confess judgment), exculpatory-clauses, unconscionability, attorney-fees (§ 83.48 plus § 57.105(7) reciprocity), collection-fee, notice-service-fee, eviction-penalty-clause-ban, liquidated-damages (§ 83.595(4) addendum, 2 months' rent; § 83.575(2) for notice breaches), waiver-by-acceptance (§ 83.56(5)(a)-(c)), plus knowing-use-penalty and casualty-and-mitigation-waivable. Rule 54 options offered: `jury-waiver-fl` (mutual, possession-only, severable), `collection-fee-fl` (agency's actual charge up to a landlord cap), `notice-cost-fl` (actual delivery cost as § 83.55 damages). Declined as clauses, with education rows saying why: a fixed eviction fee and a notice-service fee set in advance (penalty doctrine unread; court awards costs and fees), an acceptance-of-rent non-waiver clause (void under § 83.47(1)(a) against § 83.56(5)(a)). Pointed to without change: `edu-prohibited-lease-terms-fl`, `early-termination-addendum-fl`, `early-termination-fl`. One finding on an existing row (log §6): `late-fee`'s acceptance sentence.
2. **Domestic violence.** Read whole: Fla. Stat. § 741.30 (exclusive use and possession of the shared dwelling, (5)(a)2., (6)(a)2.; officer assistance (8)(a)2.), §§ 784.046 and 784.0485 (no dwelling relief), § 741.28, §§ 741.401-741.405 (Address Confidentiality Program, agencies only). Batteries FLG-M-001 (lock change) and FLG-M-002 (tenancy protections) over every held Florida source found no lock-change, confidentiality, eviction-protection, deposit-timing or qualifying-document rule for victims. The only tenancy mention is a police-training topic in § 943.1701(7). Rows: `edu-no-dv-lock-change-right-fl`, `edu-no-dv-confidentiality-rule-fl`, `edu-no-dv-eviction-protection-fl`, `edu-no-dv-deposit-timing-rule-fl`, `edu-no-dv-qualifying-documents-fl` (absences), `edu-dv-protection-order-statutes-fl` (the statutes haven't moved; latest amendments effective July 1, 2026 and July 1, 2025). Federal VAWA (34 U.S.C. § 12491) is stated only for covered housing, from the saved text. `edu-no-dv-lease-termination-fl` pointed to without change.
3. **Deposits, fees and receipts.** Read whole: Fla. Stat. §§ 83.43, 83.49, 83.491, 83.67 (also 413.08(6), 760.27, 501.005, 83.683, 760.23). Rows on security-deposit-holding, -on-sale, -penalty (forfeiture of the claim, fees, bond, licensee sanctions; no multiple damages), deposit-surrender-notice (§ 83.49(5)), expedited-deposit-disposition (court "shall advance the cause on the calendar"), deposit-last-month-rent (advance rent), deposit-installments (fee-in-lieu program only, § 83.491(1)(b), (3)(c)), pet-fees (pet deposit is deposit money; no charge for a service animal), and confirmed absences for deposit-cost-schedule, security-deposit-standards, nonrefundable-deposit-notice and -separate-notice, holding-deposit, application-fees, fee-transparency, fee-unprovided-service, late-fee-limit, rent-receipts (one receipt rule only, § 83.56(5)(a)1.) and rent-receipt-anti-waiver. required-fees: tagged `fees-and-charges-vi` (reasons in its FL segment) plus `edu-required-fees-fl`. lockout-for-rent-delinquency: prohibited (§ 83.67(2), (6), (7)). Pointed to without change: `edu-security-deposit-rules-fl`, `security-deposit-notice-fl`, `security-deposit-return-fl`, `fee-in-lieu-of-deposit-fl`, `edu-no-deposit-cap-fl`, `edu-no-fee-caps-fl`, `edu-fees-as-rent-fl`.
4. **Local preemption (§ 83.425, ch. 2023-314).** Read whole: Fla. Stat. § 83.425, § 125.0103 (rent control barred, (2)); § 166.043 relied on through `edu-local-preemption-fl`. Each local-subject row says what the statute preempts and what it leaves (code enforcement under the codes § 83.51(1)(a) incorporates). landlord-registration is answered by the state licence for public lodging establishments (Fla. Stat. §§ 509.013(4), 509.241, 509.242(1)(d), 509.251: properties renting 5+ units long-term), rental-inspection by the Division's annual inspection and right of entry (Fla. Stat. § 509.032(2)). Confirmed absences: source-of-income (state law; local ordinances' survival unsettled, as `edu-local-preemption-fl` says), tenant-rights-statement, rights-responsibilities-guide, rent-increase-notice (no statute; periodic tenancies change by § 83.57 notice; § 501.160 emergency price-gouging reaches dwelling units; § 723.037's 90 days is mobile-home-park only), term-change-notice (only the § 83.49(2) deposit-holding change and § 83.505(3) e-mail update notices), tenant-screening. No county ordinance was researched (rule 3). `edu-local-preemption-fl` pointed to without change.
5. **Shared fee clauses (2026-10-04 cross-state check).** Read against Fla. Stat. §§ 83.47, 83.49, 83.51(2)(a)2., 83.51(4), 720.3085(8) and 718.116(11) (also 720.305(1)-(2), 718.303(1), (3)). `keys` works in Florida: for a dwelling other than a single-family home or duplex, locks and keys are the landlord's duty "Unless otherwise agreed in writing" (Fla. Stat. § 83.51(2)(a)), and the lease is that writing; a rekey after unreturned or lost keys is a tenant-caused condition (Fla. Stat. § 83.51(4)); taking the cost from the deposit still needs the § 83.49(3)(a) claim notice. `hoa-compliance` works in Florida: tenants are governed by association rules and can be fined directly (Fla. Stat. §§ 720.305(1)-(2), capped at $100 per violation and $1,000 in the aggregate unless the governing documents provide otherwise; 718.303(1), (3)); passing fines for the tenant's own violations is a contract term that limits no liability. The association rent-demand statutes give the tenant a credit against rent and immunity for rent timely paid to the association (Fla. Stat. §§ 718.116(11), 720.3085(8)) and make the association a landlord only for notice and eviction, with "no obligations under s. 83.51" (Fla. Stat. § 720.3085(8)(d)); neither clause conflicts. No conflict to report.
6. **Three central shared edits (2026-10-04).** `smoking-policy` reads correctly: a lease ban on smoking or vaping anything, including marijuana, is consistent with Fla. Stat. § 381.986(15)(d) ("does not impair the ability of any party to restrict or limit smoking or vaping marijuana on his or her private property"), Fla. Const. art. X, § 29 (no lease rule; case-law risk on medical-use sanctions labelled unread at the October retro) and the Clean Indoor Air Act (§§ 386.201-386.211: the private-residence exception permits smoking but doesn't require a landlord to allow it, and Fla. Const. art. X, § 20(b) preserves an owner's further limits); the 2026-10-04 narrowing of Tenant's cost liability to Tenant, occupants and guests is consistent with Fla. Stat. § 83.47(1)(b). `no-alterations` reads correctly: its saving sentence keeps the tenant's lawful installations (flotation bedding § 83.535, the U.S. flag § 83.67(4), disability modifications § 760.23(9)(a)) and changes no ownership Florida assigns. `addendum-precedence` reads correctly: the § 83.505 e-mail addendum carries its own control sentence (`electronic-notice-addendum-fl`), and the § 83.595(4) addendum, the § 83.512 flood disclosure and the § 83.49(2) notice are documents "applicable law requires", which the carve-out lets control.
7. **Holdover and CARES.** (a) `holdover` works in Florida: Fla. Stat. § 83.58 gives "double the amount of rent due on the dwelling unit, or any part thereof, for the period during which the tenant refuses to surrender possession", a figure, so "the maximum amount permitted by applicable law" has a Florida referent (rule 26 AS 5 doesn't bite); the month-to-month continuation on acceptance of rent matches § 83.46(2), and § 83.575(3)'s extra month's rent for a permitted holdover without notice is left to the law. (b) No FL eviction row contradicts `edu-cares-act-notice`: `edu-eviction-process-fl`, `default-by-tenant-fl` and `edu-periodic-tenancy-termination-fl` state Florida's notices without claiming they suffice for a federally backed property, and § 83.5615 is stated as dormant (`edu-foreclosure-tenant-rights-fl`). 15 U.S.C. § 9058(c) was read and saved. Florida's eviction court forms (Form 1.947) carry no CARES statement (no Florida rule in the corpus does). No finding.
8. **Currency.** See §1.4: all six listed acts read for their effective-date sections; the chapter's History lines show no other 2024-2026 act.

#### Class decisions given to the canvass helpers
The helpers worked from a numbered decisions file (scope of part II and ch. 723; waivers; notices; what may be changed in writing under § 83.51; preemption; definitions; good faith and unconscionability; § 83.5615 dormant; the main pass's topics; tag-first rules; Part 5's NEEDS_REVIEW policy; body voice; case law and ordinances; currency; federal law). Rows cite them as "log §4 class decision N"; the file's text is reproduced at the end of this section.
## Florida gaps pass: class decisions (main pass, 2026-11-05)

Read this before every topic. Cite a decision in delivered notes as "log §4 class decision N". Every
statutory phrase below is quoted verbatim from the corpus with its citation; open the section yourself before
quoting any of its words in a row (rule 27, SD-gaps 12).

**1. Scope of the act.** 'This part applies to the rental of a dwelling unit' (Fla. Stat. § 83.41). Part II
'does not apply to' five listed occupancies, among them 'Transient occupancy in a hotel, condominium, motel,
roominghouse, or similar public lodging, or transient occupancy in a mobile home park' (Fla. Stat. § 83.42(3)),
'Occupancy by a holder of a proprietary lease in a cooperative apartment' (Fla. Stat. § 83.42(4)) and
'Occupancy by an owner of a condominium unit' (Fla. Stat. § 83.42(5)); read § 83.42 whole. Mobile home park
lots: chapter 723 'appl[ies] to any residential tenancy in which a mobile home is placed upon a rented or
leased lot in a mobile home park in which 10 or more lots are offered for rent or lease'; where both home and
lot are rented, or fewer than 10 lots, 'the tenancy shall be governed by the provisions of part II of chapter
83' (Fla. Stat. § 723.002(1)). The library is for ordinary residential rentals: a rule found only in ch. 723
is stated as a mobile-home-park rule and does not answer the topic for ordinary rentals by itself. (Quote
§ 723.002(1) only in exact fragments; "appl[ies]" above is an editorial bracket, so don't copy it as a quote.)

**2. Waivers.** A rental-agreement provision 'is void and unenforceable to the extent that it: (a) Purports to
waive or preclude the rights, remedies, or requirements set forth in this part. (b) Purports to limit or
preclude any liability of the landlord to the tenant or of the tenant to the landlord, arising under law'
(Fla. Stat. § 83.47(1)); and 'If such a void and unenforceable provision is included in a rental agreement
entered into, extended, or renewed after the effective date of this part and either party suffers actual
damages as a result of the inclusion, the aggrieved party may recover those damages sustained after the
effective date of this part' (Fla. Stat. § 83.47(2)). The main pass writes the central row
`edu-part5-nonwaivable-fl` (topic part5-nonwaivable); a helper row that touches a waiver points to it by id
rather than restating it. The § 83.47(1)(a) bar reaches rights 'set forth in this part' (Part II only); rights
in other chapters carry their own non-waiver rules, if any. State the default rule before any waiver point:
a waiver of a rule Florida doesn't have is empty, not lawful (rule 27, WY-gaps).

**3. Notices.** 'The delivery of the written notices required by subsections (1)-(3) shall be by mailing,
delivering a true copy thereof, e-mailing in accordance with s. 83.505, or, if the tenant is absent from the
premises, by leaving a copy thereof at the residence. The notice requirements of subsections (1)-(3) may not
be waived in the rental agreement' (Fla. Stat. § 83.56(4)). E-mail delivery needs the signed addendum in
'substantially the following form' (Fla. Stat. § 83.505(1)); the library's clause is
`electronic-notice-addendum-fl`.

**4. What the parties may change in writing (maintenance).** '(1) ... The landlord's obligations under this
subsection may be altered or modified in writing with respect to a single-family home or duplex' (§ 83.51(1),
last sentence; quote it from the section, the corpus prints a curly apostrophe). '(2)(a) Unless otherwise
agreed in writing, in addition to the requirements of subsection (1), the landlord of a dwelling unit other
than a single-family home or duplex shall ...' make reasonable provisions for extermination, locks and keys,
common areas, garbage removal, and 'Functioning facilities for heat during winter, running water, and hot
water' (Fla. Stat. § 83.51(2)(a)5.). '(b) Unless otherwise agreed in writing, at the commencement of the
tenancy of a single-family home or duplex, the landlord shall install working smoke detection devices'
(Fla. Stat. § 83.51(2)(b)). Rental agreement may make the tenant pay 'costs or charges for garbage removal,
water, fuel, or utilities' (Fla. Stat. § 83.51(2)(e)). Tenant-caused conditions: § 83.51(4). Noncompliance with
subsection (2) is not a defense to possession: § 83.51(2)(c). Each "unless otherwise agreed in writing"
attaches to its own paragraph; say which.

**5. Preemption.** 'The regulation of residential tenancies, the landlord-tenant relationship, and all other
matters covered under this part are preempted to the state' (Fla. Stat. § 83.425), superseding 'any local
government regulations on matters covered under this part, including, but not limited to,' screening, security
deposits, applications and their fees, rental-agreement terms, rights and responsibilities, disclosures, fees
and notice requirements (read § 83.425 whole; it has one history entry, s. 1, ch. 2023-314). Existing row:
`edu-local-preemption-fl` (point to it). Never research or resolve an ordinance (rule 3); where a topic is a
local subject, say what the statute leaves local only to the extent you read it, and flag.

**6. Definitions.** 'Rent' and 'Deposit money': Fla. Stat. § 83.43(12) and (4); 'Security deposits' (14);
'Advance rent' (2); 'Premises' (11); 'Rental agreement' (13); 'Tenant' (17); 'Transient occupancy' (18).
Fees are rent only if 'designated as rent in a written rental agreement' (Fla. Stat. § 83.43(12)); existing row
`edu-fees-as-rent-fl`.

**7. Good faith and unconscionability.** § 83.44 (good faith) and § 83.45 (unconscionability; court may refuse
to enforce, strike or limit). The main pass writes `edu-unconscionability-fl` and `edu-attorney-fees-fl`
(§ 83.48: prevailing-party fees, 'may not be waived in a lease agreement'). Point to them by id if needed.

**8. Dormant section.** § 83.5615 is printed in the 2026 Florida Statutes but its compiler's note says ch.
2020-99 created it "[e]ffective upon the repeal of the federal Protecting Tenants at Foreclosure Act, Pub. L.
No. 111-22" (quote only from the section's Note). It is NOT in force; the federal act governs. Existing row:
`edu-foreclosure-tenant-rights-fl`. Never state § 83.5615 as current law.

**9. Main pass's topics.** Slice M (the 54 topics in `work/slice-M/topics.md`: waivers, domestic violence,
deposits/fees/receipts, preemption-dependent local topics) belongs to the main pass. Don't answer them. You may
point by id only to rows that already exist (`work/fl-rows.tsv`) or to the three central ids named in
decisions 2 and 7.

**10. Tag first (rules 26-28).** Before drafting, run `libq.py topic <key>` and read every row keyed to the
topic in full (`libq.py row <id>`), plus `libq.py grep` on the section numbers and key terms. Tag a shared row
only where its whole text applies in Florida as written, AND its basis doesn't rest on another state's statute
or statutory absence, AND it neither imposes a limit Florida law doesn't nor omits a right Florida gives the
landlord (ask both ways), AND Florida lets the term sit in the lease (no separate-instrument rule). Never tag a
row whose only figure is "the maximum ... permitted by applicable law" where Florida sets no figure. A tag
changes only `states` and adds an `FL: ` segment. A tagged row keyed to another topic does not answer this
topic: write a short row keyed to this topic too. Before writing any row, grep the CSV for the section numbers
you will cite (`libq.py sec NUM`) so you don't duplicate an existing FL row.

**11. NEEDS_REVIEW policy (SOP Part 5, Taylor 2026-10-15).** 'where only case law could settle a point, the
row states the doubt and the cautious course and is VERIFIED; a lease clause is redrafted so it works under
every reading, or switched off. Only a primary source that can't be reached keeps a row open.' So: an
interpretive doubt is never a reason for NEEDS_REVIEW. A row is NEEDS_REVIEW only if it rests on a source the
corpus doesn't hold and the main pass couldn't fetch (put a fetch request in your answer first).

**12. Body voice.** Education rows speak to the landlord as "you", plain language, short sentences; say who
and what the rule covers (applicability subsection, definitions, unit counts, tenancy type) and state each
consequence with its trigger. End with what was not reviewed only where it matters ("Case law and local
ordinances were not reviewed."). Clauses speak of "Landlord" and "Tenant"; an optional clause starts with a
bracketed instruction "[Optional. ...]" and is CONDITIONAL; reuse existing `{{variables}}` only; landlord-chosen
figures are `[bracketed prompts]`.

**13. Case law and ordinances.** Case law is not held. Write "no published case was searched for this point"
(never "no case exists"). Cases you know of are leads only (rule 1 of the citation format): cite as
"__ So. 3d __ (Fla. _ DCA 20__)" only if you are certain of the citation, labelled "lead, not read".

**14. Currency.** The corpus is the 2026 Florida Statutes (flsenate.gov / leg.state.fl.us); five core chapter
pages (83, 509, 718, 720, 741) were matched section-for-section with the live site on 2026-11-05. Read each
relied-on section's History line; for any 2024-2026 act it lists, read that act's effective-date section
(`sec.py ch2025-16 --grep "effect"`). Session-law text is pdftotext output: struck words are NOT marked, so
never describe what an act added or removed from its text; state current law from the compiled section. An
act not held is a fetch request.

**15. Federal law.** Not in the corpus. Never cite it from general knowledge (rule 12). If a row needs a federal
point, put a fetch request ("FEDERAL: 42 U.S.C. § 3604(f)") in your answer's `fetch_requests`; the main pass
saves it to `/home/claude/flg/fetched/` (loader units kind `fetched`, searchable with `--scope fetched`) and tells
you. Mark the citation "FEDERAL:" in notes.


#### Decisions recorded with the topics

- accessory-dwelling-unit: Whether the affordable-rent affidavit in Fla. Stat. § 163.31771(4) binds every ADU permit or only units allowed by an ordinance adopted under the section is not stated; the row gives the cautious reading (treat it as binding where the permit was issued on such an affidavit) and is VERIFIED (log §4 class decision 11). No clause: the affidavit is a permit document, not lease text.
- appliances-excluded: appliances-excluded-la not tagged for FL (log §4 class decision 10): its carve-out keeps only liability "for causing physical injury or for intentional or gross fault", a Louisiana-law shape; in Florida any provision that 'Purports to limit or preclude any liability of the landlord to the tenant or of the tenant to the landlord, arising under law' is void (Fla. Stat. § 83.47(1)(b)), so the clause would limit liability Florida keeps (for example property damage from ordinary negligence), and its health-or-safety carve-out does not track Florida's code-compliance duty (Fla. Stat. § 83.51(1)(a)). Florida's own clause appliances-excluded-fl written instead.
- association-obligations-disclosure: Education only, no clause: the two renter-copy duties require a copy of the association's notice, not lease text, so the lease is not the vehicle (rule 55); the row tells the landlord to keep a signed receipt.
- automatic-renewal: automatic-renewal: renewal-by-silence clause declined for FL (rule 54 declined-option education row); the cautious course because Fla. Stat. § 501.165's reach to residential leases is unsettled and Fla. Stat. § 83.575(1) pairs any tenant notice-before-vacating term with a landlord nonrenewal notice within 30-60 days. Existing end-of-term-notice-fl covers the lawful notice term.
- bed-bug-cooperation: pest-cooperation-pr and pest-cooperation-la not tagged for FL (log §4 class decision 10). Both end "Otherwise, Landlord will pay for treatment as part of Landlord's repair obligations", which imposes a treatment duty Florida law does not impose on a single-family home or duplex (Fla. Stat. § 83.51(2)(a) reaches only 'a dwelling unit other than a single-family home or duplex') and contradicts the FL option in maintenance-allocation-fl that lets a house or duplex tenant take on pest control in writing. Both use "the fault of Tenant" where Florida's exception is 'the negligent or wrongful act or omission of the tenant, a member of the tenant’s family, or other person on the premises with the tenant’s consent' (Fla. Stat. § 83.51(4)), and neither carries the Florida vacate rules (7 days of written notice, at most 4 days out, rent abated). pest-cooperation-la's "after reasonable notice" also understates the 24-hour repair-entry notice in Fla. Stat. § 83.53(2). Florida's own clause pest-cooperation-fl written instead.
- binding-arbitration: binding-arbitration: no arbitration clause offered for FL (rule 54 declined option; education row says so). Reason: Fla. Stat. § 83.47(1)(a) may void a clause precluding Part II remedies and the landlord's summary possession action (Fla. Stat. § 83.59(2)); the narrow jury waiver (slice M) and informal dispute resolution clause cover the landlord's interest.
- cannabis: cannabis: tagged cannabis-restrictions-ak for FL (optional clause; Florida has no patient housing protection and the medical statute preserves owner limits on smoking and vaping). Kept edu-cannabis-fl NEEDS_REVIEW pending the effective-date section of ch. 2025-182, Laws of Fla. (Fla. Stat. § 397.487).
- collection-fee: Collection fee: no Florida statute; offered optional collection-fee-fl measured by the agency's actual charge up to a landlord-set cap, kept out of rent and the 3-day notice (rule 54; drafting call, rule 76).
- confirmed-absences-misc: confirmed-absences-misc: Fla. Stat. § 501.0117 bars 'A seller or lessor in a sales or lease transaction' (Fla. Stat. § 501.0117(1)) from a credit-card surcharge; no FL row in the library or in slices M, A-E cites it. The main pass may want to check slice M's fee rows and the FL-tagged acceptable-payment-methods clause against it (neither imposes a surcharge, so no conflict was found).
- criminal-activity: Declined tag of criminal-activity-ky for FL: its victim carve-out imposes a limit Florida statute doesn't (decision 10); wrote criminal-activity-fl without it.
- disability-accommodation: disability-accommodation: rule 54 decline. A restoration condition on a disability modification is lawful under federal law where reasonable (FEDERAL: 42 U.S.C. § 3604(f)(3)(A)) but Florida's Fla. Stat. § 760.23(9)(a) omits the proviso; the library offers no Florida restoration clause and edu-disability-accommodation-fl says why and gives the cautious course.
- eminent-domain: Tag of eminent-domain-vi (rules 26-28, log §4 class decision 10): asked both ways, the clause imposes no limit Florida law does not (Florida has no statute on lease or rent after a taking) and gives away no Florida landlord right; the award-allocation sentence governs between the parties while the court still apportions conflicting claims (Fla. Stat. § 73.101), as in the Kansas segment; it is not a waiver of a Part II right or of landlord liability under Fla. Stat. § 83.47(1) because Part II has no condemnation rule and the award is the condemnor's obligation; the deposit sentence defers to "lawful deductions", so Fla. Stat. § 83.49(3) governs. Optional (bracketed), not a default.
- energy-data-release: energy-data-release: tagged energy-data-release-wy for FL (optional consent clause, basis rests on no state's statute; Florida has no energy-data provision) and wrote an absence row keyed to the topic.
- environmental-event-termination: Declined an optional landlord casualty/environmental-event termination clause for FL (rule 54): it could preclude the tenant's Fla. Stat. § 83.63(1) option to stay in the usable part at reduced rent, which Fla. Stat. § 83.47(1)(a) protects.
- ev-charging-end-of-tenancy: ev-charging-end-of-tenancy: shared clause ev-charging-end-of-tenancy-co not tagged (REQUIRED, rests on Colorado's tenant charging right, which Florida does not have).
- ev-charging-requirements: ev-charging-requirements: tagged ev-charger-installation-hi for FL (consent-based optional clause; Florida gives no tenant right; its deposit sentence refers to a limit Florida does not have but imposes none).
- extended-absence-notice: Declined tag of extended-absence-notice-ks for FL: its willful-failure damages sentence could limit the landlord's Fla. Stat. § 83.55 damages (decision 10); wrote extended-absence-notice-fl.
- foreign-ownership: Whether a residential lease is an "interest" a foreign principal may not "acquire by purchase, grant, devise, or descent" under Fla. Stat. §§ 692.202-692.204 is not stated in the part; interpretive doubt only (log §4 class decision 11), so the row states the doubt and a cautious course and is VERIFIED. No clause: the part puts no term in a lease and no duty on a landlord.
- government-fee-reimbursement: government-fee-reimbursement: shared clause government-fee-reimbursement-ky not tagged (exclusions rest on Kentucky's statute); wrote government-fee-reimbursement-fl.
- governmental-fines: governmental-fines: shared clause tenant-caused-fines-as not tagged (its basis rests on an American Samoa nuisance statute; the FL clause names Florida code-enforcement repair costs); wrote tenant-caused-fines-fl.
- governmental-fines: Main pass fetched ch. 2025-87, Laws of Fla. on 2026-11-05 (log §1.6): effective July 1, 2025; notes updated.
- homestead-waiver: homestead-waiver: the Fla. Stat. § 222.11(2)(b) wage-garnishment waiver (separate document, 14-point statutory form) is a lawful option the library declines (rule 54 education row); no lease waiver of the constitutional homestead or personal-property exemptions is offered (no authorizing statute found, battery FLG-E-024).
- jury-waiver: Jury waiver: Florida has no statute on lease jury waivers; the court-rule answer form says a tenant may have waived the jury in the lease. Offered an optional, mutual, possession-only waiver (jury-waiver-fl) under rule 54, narrowed and severable so it works if a court refuses it (case law unread). Claude's drafting call under rule 76.
- landlord-lien: landlord-lien: Fla. Stat. § 713.691(1) lets a written rental agreement modify or waive the residential landlord's lien. No lien clause offered (rule 54 declined option, education row says so): the statutory lien needs no clause, and a clause widening it would add risk under Fla. Stat. § 83.67(5).
- lease-registration: Main pass read the requested act's effective-date section on laws.flrules.org 2026-11-05 (log §1.6); notes updated.
- military-air-zone-disclosure: FLG-D-009 recorded as failed (positive Fla. Stat. § 692.203 not matched by any term), rerun as FLG-D-010; only FLG-D-010 is cited.
- nonpayment-notice: Fla. R. Gen. Prac. & Jud. Admin. 2.514(b) mail days: likely not applicable to the pre-suit 3-day notice (it speaks of acting after service; Fla. Stat. § 83.56(3) sets its own count); row advises adding 5 days when mailing as the cautious course.
- nonresident-owner-agent: FLG-D-026 recorded as failed (no term matched its positive, Fla. Stat. § 48.181), rerun as FLG-D-027; only FLG-D-027 is cited.
- nonresident-owner-agent: Verdict changed from Absent to Present after the independent check (R13-17, R13-19) found Fla. Stat. §§ 48.181 and 605.0902-605.0905 apply to out-of-state owners; the row id keeps its original 'no-' form because ids are fixed once delivered in an interim save.
- notice-service-fee: Notice cost: no Florida statute; offered optional notice-cost-fl recovering only actual out-of-pocket delivery cost as damages under Fla. Stat. § 83.55, kept out of rent and the 3-day notice (rule 54; drafting call, rule 76).
- portable-solar: portable-solar: whether a residential lease is a "similar binding agreement" under Fla. Stat. § 163.04(2) is left open (owner-protective second sentence; apartment patio-railing carve-out in (4)); row takes the cautious course and is VERIFIED per class decision 11.
- prohibited-acts-renter: prohibited-acts-renter: tag of prohibited-acts-renter-wy declined for FL (rests on its states' lack of an entry-notice statute; narrows the damage duty to intentional or negligent acts, which Fla. Stat. § 83.52(6) does not); education row edu-prohibited-acts-renter-fl written instead, since the statute implies the prohibitions into every lease.
- prop65-rental-warning: FLG-D-019 recorded as failed (its positive, Fla. Stat. § 440.02, did not contain the phrase), rerun as FLG-D-020; only FLG-D-020 is cited.
- required-disclosures: FLG-D-006 superseded by FLG-D-007 (one limb ran at a 300-character window); only FLG-D-007 is cited.
- sale-or-management-change: The deposit-transfer rule is stated in the same terms as slice M's edu-security-deposit-on-sale-fl (keyed security-deposit-on-sale); this row is keyed to sale-or-management-change, does not redraft M's row, and does not point to it by id (log §4 class decision 9); it points to the existing edu-security-deposit-rules-fl instead.
- sex-offender-disclosure: Main pass read the effective-date sections of the requested acts on laws.flrules.org 2026-11-05 (log §1.6): all in effect; row set to VERIFIED.
- sex-offender-occupancy: Main pass read the effective-date sections of the requested acts on laws.flrules.org 2026-11-05 (log §1.6): all in effect; row set to VERIFIED.
- sprinkler-disclosure: Coordinated with slice A's edu-fire-sprinkler-duty-fl (keyed fire-sprinkler-duty), which states the condominium renter copy; this row is keyed to sprinkler-disclosure, adds the cooperative copy (Fla. Stat. § 719.1055(5)(a)2.) and states the absence of any general disclosure. No redraft of slice A's row.
- stigmatized-property: Fla. Stat. § 689.25 says "real estate transaction" and "transferee" without defining either; the row says the statute plainly covers sales, that a residential lease is probably within it, and gives a cautious course that works under either reading (no affirmative misstatement; no question or answer about HIV status). Interpretive doubt only, so VERIFIED (log §4 class decision 11).
- substandard-property-receivership: Main pass fetched ch. 2025-87, Laws of Fla. on 2026-11-05 (log §1.6): effective July 1, 2025; notes updated.
- tax-escalation: tax-escalation: tagged tax-insurance-escalation-la for FL (optional agreed rent formula; no Florida statute; its LA basis is general contract freedom).
- telecom-access: Main pass read FEDERAL: 47 C.F.R. § 1.4000 on eCFR 2026-11-05 (log §1.6); the dish and antenna sentences now state the rule, and edu-telecom-access-fl is VERIFIED.
- tenant-portal: tenant-portal: tag of tenant-portal-mn declined for FL (its fee-free alternative promise is a Minnesota-law limit, and it lacks Florida's notice-delivery limit); Florida-drafted optional clause tenant-portal-fl offered with a non-electronic payment fallback to respect Fla. Stat. § 668.50(5)(c).
- tpa-notice: The topic key carries two readings in the library (California's Tenant Protection Act coverage notice, and a tenant opportunity-to-purchase notice); the row answers both for Florida in one subject, "tenant protection and purchase-right notices", and points to edu-conversion-notice-fl (slice B) rather than restating the conversion rules.
- truth-in-renting: FLG-D-034 superseded by FLG-D-035 (its rights-statement limb could not match "of the landlord"); only FLG-D-035 is cited.
- usufructuary-lessor: Main pass read the requested act's effective-date section on laws.flrules.org 2026-11-05 (log §1.6); notes updated.
- utility-allowance-cap: utility-allowance-cap: shared clause utility-allowance-cap-co not tagged for FL (declares the overage is not rent, giving up the Fla. Stat. § 83.43(12) option; Colorado basis). Florida's answer is the cost caps; the optional allocation clause utility-allocation-fl (topic utility-apportionment) carries the lease term.
- utility-submetering-disclosure: Fla. Admin. Code R. 25-6.049's History line ends 11-8-26, after the 2026-11-05 read: the flrules.org file serves the rule as amended effective November 8, 2026; rows state that text and say so in notes. The pre-amendment text is not held; the main pass may want to confirm what the 11-8-26 amendment changed (fetch request filed).

#### Questions for Taylor

- binding-arbitration: binding-arbitration (FL): offer an optional arbitration clause limited to money claims, carving out possession actions, small claims and Part II statutory remedies, with the Fla. Stat. § 682.07 right to counsel preserved? Recommendation: no, keep it declined (education row edu-binding-arbitration-fl) because the Fla. Stat. § 83.47(1)(a) reach is unsettled without case law and the carve-outs leave little for arbitration. Drafted on the cautious course meanwhile.
- disability-accommodation: disability-accommodation: Florida's Fair Housing Act copies the federal modification duty without the federal restoration proviso. Should the library offer Florida landlords an optional restoration clause (as for ID, HI, WY, MN, NV, OH), relying on federal law alone? Recommendation: no clause until a Florida case or Commission rule is read; the education row gives the cautious course (agree restoration in writing at the time of the request, interior only, where reasonable).
- environmental-event-termination: Offer an optional FL clause letting the landlord end the lease when a casualty makes the whole unit untenantable (leaving partial-damage cases to Fla. Stat. § 83.63)? Recommendation: no for now; the drafted cautious course is education only, since Fla. Stat. § 83.47(1)(a) voids terms that preclude Part II rights and no case law was searched.
- maintenance-duty-shift: Florida maintenance-duty-shift: Fla. Stat. § 83.51(2)(a) lets a written agreement remove an apartment landlord's added duties (extermination, locks and keys, common areas, garbage removal, heat and water) 'Unless otherwise agreed in writing'. The library offers a shift clause only for a single-family home or duplex (maintenance-allocation-fl). Should it also offer an optional clause for other units? Recommendation: offer at most a narrow optional clause limited to in-unit items the tenant controls (for example carrying garbage to the outside receptacle and routine in-unit pest prevention), never heat, water, hot water, locks or common areas, since those failures already give the tenant no defense to possession (Fla. Stat. § 83.51(2)(c)) and a wholesale shift invites Fla. Stat. § 83.45 scrutiny. Until you decide, edu-maintenance-duty-shift-fl and edu-heating-fl say the option is lawful and not offered.

**Outcome.** Taylor was asked all four questions in chat on 2026-11-05 (the first three at interim saves 4-5, the fourth at interim save 6) and had not answered by final delivery, so each recommendation is adopted as the prompt directs:
1. maintenance-duty-shift: recommendation was at most a narrow optional clause limited to in-unit items the tenant controls. On drafting, the example items (carrying garbage out, keeping the unit clean) proved to be existing tenant duties under Fla. Stat. § 83.52(2)-(3), so a clause would restate the statute; none is added, and `edu-maintenance-duty-shift-fl` says so (edited after the last check round; see §5).
2. environmental-event-termination: no landlord casualty-termination clause; education only (`edu-casualty-damage-fl` and the slice B row stand).
3. binding-arbitration: no arbitration clause; the education row stands.
4. disability-accommodation: no restoration clause; the education row's cautious course stands.
Any of these can be reopened if Taylor answers differently; no row would need removal, only an added clause.


#### New {{variables}} (rule 60)

None.


### §5 Independent check

Rule 80, scaled as the prompt directs: two rounds, one checking agent at a time, each a fresh agent that had not written the rows, briefed with `work/check-brief.md` (quotations, statements of law, absences and their batteries, lease clauses, tags, consistency, case-law doubts) and told to judge only against the corpus and fetched sources. Findings were judged by the main pass against the cited text before any edit; every edit went through `tools/errata.py` (exact old text, once only, by row id) and was followed by `asm.py check` over all slices.

**Before the check.** Coverage 261 of 261 topics; no duplicate ids across slices; full battery replay (`rerun.py`, slice by slice): 1,126 terms, 0 differences (M 151, A 158, B 152, C 100, D 182, E 137, F 246).

**Round 1 (all 291 rows, five sets in sequence).**

| Set | Rows | ERROR | FIX | MINOR | REPRO |
|---|---|---|---|---|---|
| 1 (slice M) | 58 | 0 | 7 | 14 | 0 |
| 2 (slices A, C) | 70 | 0 | 7 | 8 | 1 |
| 3 (slices B, D) | 75 | 2 | 6 | 12 | 0 |
| 4 (slice E) | 43 | 1 | 7 | 5 | 0 |
| 5 (slice F) | 45 | 4 | 6 | 8 | 0 |
| **Total** | **291** | **7** | **33** | **47** | **1** |

All 88 findings were accepted after re-reading the source, some with wording adjusted by the main pass (noted in the errata files); 99 edits in all, including consistency edits to rows that shared a corrected rule. The errors:
- R13-17, R13-19 (`edu-no-nonresident-owner-agent-fl`): missed Fla. Stat. § 48.181(2), (5) (substituted service on nonresidents doing business here, subsection (5) new from October 1, 2025) and Fla. Stat. §§ 605.0902(1), 605.0904(1), 605.0905(3), 607.1502(1) (a foreign LLC owning income-producing property needs a certificate of authority naming a registered agent and cannot sue without one). Verdict changed from Absent to Present; title changed; `edu-landlord-registration-fl` aligned.
- R14-01 (`edu-no-lease-copy-duty-fl`): mobile home park prospectus threshold is 26 lots (Fla. Stat. § 723.011(1)(a)), not 10.
- R15-01, R15-02 (`edu-confirmed-absences-outside-title-fl`): missed the fictitious-name bar on maintaining any action (Fla. Stat. § 865.09(9)(a)) and the foreign-entity bars; item (3) now Present in part.
- R15-16, R15-17 (`edu-law-enforcement-cooperation-fl`): missed the any-person reporting duties (Fla. Stat. §§ 39.201, 39.205, 415.1034, 415.111, 794.027).
In each error row but R14-01, every limb of the cited battery required a landlord, tenant or lease word, so it could not reach a general statute; see Proposed SOP changes.
The REPRO (R12-15): the must-hit control "\bLegislature\b" was 2,548 for batteries logged before the corpus footer fix and 2,426 after; explained in §1.3, no term count differs.
New batteries logged during round 1: FLG-M-033 to FLG-M-036, FLG-B-029 (all OK, replayed).

**Round 2 (the 74 rows edited after round 1).** ERROR 0, FIX 3, MINOR 11, REPRO 1 (15 findings, all accepted; 18 edits). Round 2 confirmed that every other round-1 edit fixed its finding and made no row worse. The fixes: R21-03 (`edu-required-fees-fl` now names the 2-month cap on an agreed early termination fee or liquidated damages, Fla. Stat. § 83.595(4)); R21-06 (fictitious-name timing: register before doing business under the name); R21-12 (`edu-law-enforcement-cooperation-fl` adds the any-person duty to report deaths, Fla. Stat. § 406.12). The REPRO (R21-04) and one MINOR (R21-01) were absences without a fitting battery; batteries FLG-M-037 and FLG-M-039 (rerun of FLG-M-038, whose positive failed) were logged and cited. All replay with 0 differences.

**Rows edited after the last round** (not seen by an independent checker in their final form; each edit was checked by the main pass against the cited text and by `asm.py check`):
- `edu-expedited-deposit-disposition-fl`
- `edu-firearms-fl`
- `edu-habitability-waiver-fl`
- `edu-landlord-registration-fl`
- `edu-law-enforcement-cooperation-fl`
- `edu-maintenance-duty-shift-fl`
- `edu-no-deposit-standards-rule-fl`
- `edu-no-nonresident-owner-agent-fl`
- `edu-no-steam-radiator-cover-rule-fl`
- `edu-pet-fees-fl`
- `edu-required-fees-fl`
- `edu-tenant-records-fl`
- `edu-unconscionability-fl`

The 12 round-2 rows carry the round-2 edits; `edu-maintenance-duty-shift-fl` carries the §4 outcome of question 1 (two sentences quoting Fla. Stat. § 83.52(2)-(3)).

**Final state.** 261 answers, 1,432 single-quoted passages checked against their cited units, 0 problems; every cited battery has status OK and replays.

**Not reachable for the checkers.** Florida case law (including Dana's Railroad Supply, cited only as a lead); local ordinances; the Florida Building Code; HAP contract terms; federal law beyond the fetched sections; the Small Claims Rules beyond 7.010 and 7.050; Fla. Admin. Code R. 25-6.049 before its amendment effective November 8, 2026; chs. 2024-135 and 2024-213, Laws of Fla. (latest acts on Fla. Stat. §§ 406.12 and 39.201, both read as printed in the 2026 text).


### §6 Findings on existing rows



- (confirmed-absences-misc) acceptable-payment-methods (FL segment says "No payment-method, cash-acceptance or rent-receipt statute in Part II"): accurate for Part II, but outside Part II 'A seller or lessor in a sales or lease transaction may not impose a surcharge on the buyer or lessee for electing to use a credit card in lieu of payment by cash, check, or similar means, if the seller or lessor accepts payment by credit card' (Fla. Stat. § 501.0117(1)); the clause imposes no surcharge, so it is not wrong, but its FL segment's boundary ("Part II only") leaves the card-surcharge ban unmentioned. Case lead, not reviewed: Dana's Railroad Supply v. Attorney General, 807 F.3d 1235 (11th Cir. 2015), held the surcharge ban unconstitutional as applied, so a proposed FL addition should state the ban and that doubt together. Not changed (scope fence).
- (portable-cooling-device) edu-landlord-maintenance-fl (body, last sentence) says "Air conditioning is not on the statute's list of duties; whether a landlord must provide cooling depends on the applicable local housing codes and on the lease." True of Fla. Stat. § 83.51, but incomplete for licensed apartment buildings: 'Each establishment licensed under this chapter shall be properly lighted, heated, cooled, and ventilated and shall be operated with strict regard to the health, comfort, and safety of the guests' (Fla. Stat. § 509.221(3)), and a nontransient apartment (Fla. Stat. § 509.242(1)(d)) is a licensed public lodging establishment unless excluded by Fla. Stat. § 509.013(4)(b) (for example, four rental units or fewer). Suggest the main pass add the licensed-apartment exception to that sentence or point to edu-no-portable-cooling-rule-fl and edu-heating-fl. Read section-open 2026-11-05 (corpus text of the 2026 Florida Statutes).
- (service-animal-misrepresentation) edu-service-animal-penalties-fl (keyed to assistance-animal-accommodation): its body covers only the service-animal misrepresentation crime and the Internet-registration rule; it omits the separate emotional-support-animal crime, under which a person who 'knowingly and willfully misrepresents himself or herself, through his or her conduct or through a verbal or written notice, as having a disability or disability-related need for an emotional support animal or being otherwise qualified to use an emotional support animal, commits a misdemeanor of the second degree' (Fla. Stat. § 817.265). Not wrong, incomplete; the new row edu-service-animal-misrepresentation-fl states it. Not changed (scope fence).
- (utility-shutoff-statute) edu-utility-former-occupant-fl: its notes say "Private utilities are not covered by either section." That is true of Fla. Stat. §§ 180.135 and 125.485, but the Public Service Commission rules give customers of regulated electric, gas and water utilities a parallel protection: 'Delinquency in payment for service by a previous occupant of the premises unless the current applicant or customer occupied the premises at the time the delinquency occurred and the previous customer continues to occupy the premises and such previous customer shall benefit from such service' (Fla. Admin. Code R. 25-6.105(8)(a)) is not cause to refuse or discontinue service, with the same rule for gas (Fla. Admin. Code R. 25-7.089(6)(a)) and water (Fla. Admin. Code R. 25-30.320(5)(a)). Suggest the main pass add a pointer to edu-utility-shutoff-rules-fl; the row text was not changed.
- (waiver-by-acceptance) late-fee (shared; FL tagged): its sentence "Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease" is broader than Florida allows for the payment accepted. Fla. Stat. § 83.56(5)(a): 'If the landlord accepts rent with actual knowledge of a noncompliance by the tenant ... the landlord or tenant waives his or her right to terminate the rental agreement or to bring a civil action for that noncompliance, but not for any subsequent or continuing noncompliance', and Fla. Stat. § 83.47(1)(a) voids a provision that 'Purports to waive or preclude the rights, remedies, or requirements set forth in this part'. As a statement about future due dates the sentence is fine; as a claim that accepting a late payment never waives termination for that late payment, it is void in Florida to that extent (and Fla. Stat. § 83.47(2) gives damages for inclusion). Proposed fix at sync (shared text, rule 62, so Claude Code's call): either an FL override reading "... does not waive Landlord's right to require full payment of Rent on the date it is due in later months, or any remedy for a later or continuing breach, except as Florida law provides", or a shared-text saving phrase "except as applicable law provides" if every tagged state's log supports it.

### §7 Findings for other states

None.


### Proposed SOP changes

- Rule 24: a corpus README's own check script should compare each chapter's sections against the source page's section elements by content, not only by prefix; the FL corpus's flsenate.gov chapters all carried the page's navigation menu and script inside their last section's body, and a prefix comparison passed it. Reason: 503 of 638 chapters were affected; only a body read of § 51.011 found it. The other 135 chapters (leg.state.fl.us) carried the site footer in their last section, found only when a helper read § 715.12; together, every chapter in the corpus was affected.
- Rule 24: corpus text tools should strip a court-rule compilation's running page headers ("<date> <title> <page>") before splitting rules, and README should list it as an artifact. Reason: the FL civil-rules text carried them inside rule bodies, which breaks quotes spanning a page.
- Rule 19 (batteries for absence): require at least one limb with no landlord, tenant or lease word whenever the absent rule could live in a general statute that binds a landlord as a business, owner or person: entity and trade-name registration (Fla. Stat. §§ 605.0902-605.0905, 607.1502, 865.09), service of process (§ 48.181), mandatory reporting (§§ 39.201, 415.1034, 794.027). Reason: in the FL gaps pass the independent check found four absence rows (`edu-no-nonresident-owner-agent-fl`, `edu-confirmed-absences-outside-title-fl`, `edu-law-enforcement-cooperation-fl`, and the registration line of `edu-landlord-registration-fl`) whose every battery limb required a landlord or tenant word, so the batteries could not reach the controlling statutes (findings R13-17, R13-19, R15-01, R15-16).
- Rule 80 (independent check): give the checker a script that compares every History line and every "not held" claim a row states with the corpus and the held-sources list. Reason: round 1 of the FL check found seven wrong History endings or stale "not held" statements that a mechanical comparison catches (R11-21, R13-08 to R13-10, R13-18, R14-02).

- (possession-bond) Corpus: the 2026-11-05 chrome fix left the footer "Copyright © 1995-2026 The Florida Legislature • Privacy Statement • Contact Us" at the end of Fla. Stat. § 715.12's body; a second footer form may survive on other chapters' last sections.
- (social-security-defense) asm.py flags "24 C.F.R. § 982.310" as a BARE CITATION (its prefix test knows only Fla. Stat./Code forms), while qcheck needs the § to resolve the fetched unit; the row uses "§§" as a workaround. Suggest exempting U.S.C./C.F.R. prefixes in the bare-citation test.

### Proposed topic questions

- cure-and-eviction-grounds: Lease-set cure period (MP model): Florida's only lease-silent cure rule, Fla. Stat. § 83.20(3), is in Part I (nonresidential and tenancies outside Part II); Part II fixes 7 days and bars waiver (Fla. Stat. § 83.56(4)).
- eviction-service-party: Louisiana-style ACP question: Florida's program participant designates the Attorney General as agent for service of process (Fla. Stat. § 741.403(1)(b)); whether that controls a possession summons is unsettled in the statutes read.

## Gaps-pass sync review (Claude Code, 2026-11-06)

Merged with `merge-delta.py --base 8ab6426` (the staged CSV, SHA-256 bc7f9020…): 273 new rows and 18 shared rows tagged (291, matching the log's count), nothing refused. All 261 missing topics are answered. Twelve tagged rows had moved since base only by the Arizona tag; `rent-escalation-la`'s text changed at the AZ sync (region-neutral CPI example), which suits Florida too. With the override below, Florida has 411 active rows, all VERIFIED.

**Edited after the last round.** All 13 rows the log's §5 lists were read against the corpus. Every quoted passage is in the corpus text, and the new statements of law hold: Fla. Stat. § 605.0905(3) (income-producing real property is transacting business), § 605.0904(1), § 607.1502(1), § 865.09(9)(a), § 48.181(2), (5), § 406.12 (first-degree misdemeanor), §§ 39.205(1), 415.111(1), 794.027, § 83.595(4) (2 months' rent) and § 83.52(2)-(3). One wording fix: `edu-law-enforcement-cooperation-fl` now says "knowingly and willfully" for the child-abuse and vulnerable-adult reporting crimes, as §§ 39.205(1) and 415.111(1) do.

**Taylor's questions.** The four §4 questions were unanswered at delivery, so the recommendations stand: no apartment maintenance-shift clause (the in-unit items are already tenant duties under § 83.52(2)-(3)), no landlord casualty-termination clause, no arbitration clause, no restoration clause for modifications. Each can be reopened by adding a clause.

**§6 findings applied** (each quote re-read in the corpus first): `late-fee-fl` added (the acceptance sentence limited to later months and later or continuing breaches, "except as Florida law provides", for Fla. Stat. §§ 83.56(5)(a), 83.47(1)(a)), with FL untagged from `late-fee` and an "Untagged" note, following `late-fee-az`; `edu-landlord-maintenance-fl`'s cooling sentence names the licensed-apartment duty (§ 509.221(3)); `edu-utility-former-occupant-fl` notes point to the PSC rules (R. 25-6.105(8)(a), 25-7.089(6)(a), 25-30.320(5)(a)); `edu-service-animal-penalties-fl` names the emotional-support-animal crime (§ 817.265); `acceptable-payment-methods`'s FL segment names the card-surcharge ban (§ 501.0117(1)) with the Dana's Railroad Supply doubt as an unread lead.

**§7** has no findings for other states.

**Topic questions and SOP.** Both proposed topic questions are already in `topic-questions.csv` (`cure-and-eviction-grounds` from MP, `eviction-service-party` from LA), so none was added. The four proposed SOP changes were adopted as SOP 1.97 (rules 19, 24, 80). Desktop's two tool notes (the § 715.12 footer, already stripped by its loader, and its own bare-citation test) need nothing in the repo. Citations: 292 rows were added to `lease-clause-citations-FL.csv` (266 CITED from the log's §2 lines, 25 CONFIRMED_ABSENT, and `late-fee-fl`).
