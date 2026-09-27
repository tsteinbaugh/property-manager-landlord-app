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
