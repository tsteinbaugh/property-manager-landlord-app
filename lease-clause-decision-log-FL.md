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
