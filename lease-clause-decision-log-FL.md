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
