# Georgia — lease-clause decision log (state #15)

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §12: O.C.G.A. Title 44 ch. 7 arts. 1-4, every section read with its history line; citation inventory diffed, §8) |
| Gap-discovery source 2 — real-lease comparison | Done (§15: Georgia REALTORS® F913 Lease for Residential Property, 2025 printing, 01/01/25) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§16: 61 scenarios, Claude-generated, AZ §18.1 model plus Georgia-specific) |
| Gap-discovery source 4 — outside-title search | Done (§17: official O.C.G.A. full-text search, 26 searches incl. a control term; outside-title sections read section-open) |

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL, AZ) is closed. No re-audit of any completed state is planned. Targeted work on a specific row is welcome (a scalpel, not a hammer); this pass changed no other state's row except by adding a `GA` tag and a `GA:` note.

**Date:** 2026-09-28 · **Settings:** Opus, high effort, ordinary search and fetch plus the built-in browser. **Research mode not used** (§1.2 says why it was not needed).
**Scope:** Georgia state law only. Municipal and county ordinances flagged where met, not resolved (instruction 20). Deprioritized: abandoned mobile homes (ch. 7 art. 6), transportable housing (§ 44-7-59), croppers and crop rent (art. 5; §§ 44-7-17, 44-7-57).
**Input CSV:** `lease-clauses.csv`, **1,077 rows, 16 columns**; active counts AZ 109, CA 157, CO 115, FL 107, KS 129, MN 139, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106, matching the kickoff exactly (instruction 13). No duplicate ids, no blank status, no dangling `supersedes`. One dormant GA row. Outputs folder was empty at start; nothing to delete (instruction 43).
**Output CSV:** `lease-clauses-GA-sync.csv`, **1,125 rows, 1,090 active. GA 103 active: 66 lease clauses, 37 education; all 103 VERIFIED.** Every other state's active count unchanged.
**Revision 2026-09-28 (Taylor's decisions):** all six decisions made and applied (§6). Two rows added (`holdover-rate-ga`, `casualty-termination-ga`); the other changes are listed in §8. Colorado's missing casualty row is flagged for Claude CLI (§9).

---

## 0. Completion status — read this first

| | Status |
|---|---|
| Primary text read | **O.C.G.A. Title 44 ch. 7 arts. 1-4, whole** (§§ 44-7-1 to 44-7-25, 44-7-30 to 44-7-37, 44-7-49 to 44-7-59, 44-7-70 to 44-7-82), verbatim with history lines and editor's notes in the built-in browser from Justia's "2025 Code of Georgia" (a host copy of the official code that already prints 2026 session law). A few art. 4 procedure sections (§§ 44-7-72, -74 to -76, -78, -81) by fetch-tool summary, flagged. **Adjacent/outside-title, section-open:** §§ 44-11-30 to 44-11-33; 16-7-21.1; 44-1-13; 44-1-16; 13-6-7; 13-6-15; 13-8-2(b); 30-4-1 to 30-4-4; 8-3-201, 8-3-202, 8-3-213, 8-3-217; 25-2-40; 31-41-11 to 31-41-19; 43-40-29; 44-12-193; 44-14-341, 44-14-342; 44-3-80; 2-1-7; 48-13-50.3; 10-1-393 (scanned). **Session laws:** HB 404 (2024, Act 392) status history; SB 406 (2026, Act 715) signed version; HB 668 (2026) signed version; HB 1017 (2024) signed version. |
| Step 1 — tag first | **Done.** 54 shared rows tagged GA (§2.1). 7 bases not tagged: GA override or variant instead (§2.2). Every other state-specific row screened (§2.3). **No shared row's text was edited.** |
| Step 2 — new GA rows | 12 lease clauses (including `holdover-rate-ga` and `casualty-termination-ga`, added on decisions 2 and 4) and 37 education rows, including the dormant row rewritten and activated (§3). |
| Instruction 24 families | **Both closed:** `security-deposit-return-ga`; `assistance-animal-accommodation-ga` (override; § 30-4-3 has no direct-threat limit). |
| Instruction 33 | **Checked.** Georgia has no statutory no-cure grounds and no statutory cure for non-rent breaches; nothing to forfeit (§2.1, decision 3). |
| Dormant row | **Rewritten and activated** (§5). Pattern holds. |
| Named-topic checklist | **Done.** GA column in all 10 state-column tables (69 rows, no blank cell); GA answers appended to the 61-row gap-discovery backfill table; 14 new Georgia topics; candidate-topic table 201 refs (101 answered, 94 not located, 2 not checked, 4 N/A). Instructions 44 and 45 added. |
| Layout rules (instruction 28) | **7 lease-side rules** (§4), plus a code-wide typography search with no residential hit. |
| Proof-of-absence | **Run** on the official O.C.G.A. full-text search (§17): 15 topics confirmed absent statute-wide, each with its own row; lockouts and voluntary-move-out property recorded inside `edu-prohibited-practices-ga` and `edu-abandoned-property-ga`. |
| Kickoff leads | All resolved (§12). One lead was wrong (§ 44-11-50 does not exist). |
| Open for Taylor | None. All six decisions made 2026-09-28 and applied (§6). |

## 1. Process notes

### 1.1 Source and currency
- **Official code vs host copy.** The official O.C.G.A. is published by LexisNexis for the General Assembly (free public access on advance.lexis.com). It is annotated and searchable, but its pages are script-driven. Section text was read on Justia, a host copy the kickoff allows, which prints each section's **history line**, the Code Revision Commission's **amendment notes**, and delayed-effective-date versions side by side. The official site was used for every full-text search (§17).
- **Currency.** Justia's "2025 Code" already includes the 2026 session: history lines cite Ga. L. 2026, p. 278 (HB 668), p. 988 (SB 406), p. 1069 (HB 1268), and § 44-7-50 appears twice, with the version effective 2027-01-01. Every ch. 7 section's history line was read. 2024-2026 amendments to ch. 7:
  - HB 404 (Ga. L. 2024, p. 91; Act 392; signed 2024-04-22; effective 2024-07-01): § 44-7-13(b), § 44-7-14.1 ("cooling"), § 44-7-30.1, § 44-7-50(b)-(d). **HB 404 § 6 limits these to leases entered into or renewed on or after 2024-07-01** (editor's note).
  - SB 450 (2024): § 44-7-56. HB 1203 (2024): § 44-7-55(e). HB 270 (2025): § 44-7-51. HB 399 (2025): new § 44-7-25. SB 153 (2025) and HB 1268 (2026): stylistic Code revisions (incl. § 44-7-20).
  - SB 406 (Ga. L. 2026, p. 988; Act 715; signed 2026-05-12): § 44-7-50(e) **effective 2027-01-01** (instruction 34).
- **Special sessions:** none appear in any history line read.
- **Instruction 40:** the fetch tool served the pre-2026 text of § 44-1-16 as current; the browser read of the same URL showed the 2026 amendment. New instruction 45 records this.

### 1.2 How the text was obtained
- The shell cannot reach Georgia sites. WebFetch worked for most Justia sections but summarised, refused verbatim reproduction of § 44-7-50 twice, served a stale § 44-1-16, then hit a Justia rate limit (HTTP 429). I told Taylor each time.
- After two failed retrievals of § 44-7-50 I asked Taylor to paste it (§5a.2). Before he needed to, the **built-in browser** read the page verbatim, so I told him no paste was needed. Taylor then set "always allow" for law.justia.com and advance.lexis.com. The rest of the chapter was read verbatim through in-page scripts.
- **Research mode was not turned on.** I flagged early that it might be needed for the currency sweep, proof-of-absence and cross-title search. It wasn't: the official full-text search in the browser did all three directly, which is the method Taylor ran by hand for FL and AZ.

### 1.3 Section-open vs recall (instruction 22)
Every row was drafted with its section text in view (browser reads are saved in the session). The recall subset is empty. **No case law is relied on anywhere**; where Georgia law turns on case law (waiver by accepting late rent, exclusivity of the dispossessory remedy, § 13-8-2(b)'s reach to leases, unconscionability, penalty doctrine), the row says so and flags it (instruction 16).

## 2. Step 1 — tag first

### 2.1 Tagged GA as written (54)
`rent-payment`, `late-fee`, `returned-payments`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `acceptable-payment-methods`, `tenant-maintenance`, `no-sublet-assign`, `no-alterations`, `joint-liability`, `services-utilities-provided` (base), `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access`, `possession-delay`, `default-by-tenant`, `surrender-end-of-term`, `early-termination`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-policy`, `pet-insurance-requirement`, `assigned-parking-space`, `parking-vehicle-rules`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, and the variants `holdover-ca`, `tenant-forward-proceedings-ca`, `storage-space-ks-oh-ca`, `parking-ks-oh-ca`, `tenants-property-insurance-ks-oh-ca`, plus `rental-application-accuracy`.

Every tagged row has a `GA:` note naming the controlling section. The ones that matter:
- **`default-by-tenant`.** Nonpayment runs through a 3-business-day notice to vacate or pay (O.C.G.A. § 44-7-50(c)) and a once-a-year tender defense (§ 44-7-52). **Instruction 33:** Georgia has no statutory no-cure grounds to forfeit, and no statutory cure right either, so the clause's cure promise is purely contractual (decision 3: Taylor kept the shared clause). **Instruction 32:** § 44-7-2(c) voids a one-way fee clause; the mutual prevailing-party sentence satisfies it.
- **`notices` and instruction 44.** § 44-7-50(d) makes any delivery method "agreed upon in the rental agreement" mandatory for the demand and the 3-day notice. `notices` designates no alternative method, so posting alone is enough. A lease that adds e-mail would add a duty.
- **Variants over bases.** § 44-7-2(b)(1)-(2) forbids avoiding the repair duty and the liability for failing to repair (§§ 44-7-13, 44-7-14). The base parking, storage and renter's-insurance clauses say Landlord is not liable for damage or theft, with no limit, so GA takes the no-disclaimer variants. The base `services-utilities-provided` disclaims only causes beyond the landlord's reasonable control, so it is tagged as written.
- **`holdover-ca` instead of `holdover` (K.3).** Georgia has no holdover measure (confirmed absent statute-wide, §17), so the base's "maximum amount permitted by applicable law" has no referent. A continuing tenancy is a tenancy at will (60 days from the landlord, 30 from the tenant; §§ 44-7-6, 44-7-7). An opt-in stipulated daily charge sits beside it (`holdover-rate-ga`, decision 2).
- **`due-at-signing` and `pet-policy`.** Pet deposits and "advance rent deposits" are security deposits (§ 44-7-30(3)): inside the two-month cap and the escrow and return rules. Money "to be applied toward the payment of rent" is not. Decision 1: last-month rent paid in advance counts as a deposit unless the lease names the calendar month it pays.
- **`late-fee`.** No cap located statute-wide (§17). Late fees can be demanded in the 3-day notice (§ 44-7-50(c)).

### 2.2 Not tagged — GA override or variant instead (7 bases)

| Base | Instead | Why the base fails in Georgia |
|---|---|---|
| `security-deposit-return` (blank parent) | `security-deposit-return-ga` | Instruction 24. Georgia's 3-business-day move-out inspection, sign-or-dissent list, 30-day return after possession and 90-day undelivered-refund rule (§§ 44-7-33, 44-7-34) |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-ga` | Instruction 24. § 30-4-3(b) (HB 668, 2026) gives service dogs full and equal housing access with no direct-threat limit; the base's denial sentence reaches every animal |
| `holdover` | `holdover-ca` (tagged) | K.3: no Georgia referent for "maximum permitted by law" |
| `parking` | `parking-ks-oh-ca` (tagged) | Disclaimer; § 44-7-2(b)(1)-(2) |
| `storage-space` | `storage-space-ks-oh-ca` (tagged) | Disclaimer; § 44-7-2(b)(1)-(2) |
| `tenants-property-insurance` | `tenants-property-insurance-ks-oh-ca` (tagged) | Disclaimer; § 44-7-2(b)(1)-(2) |
| `security-deposit-cap-ga` (dormant, GA's own) | Rewritten and activated | §5 |

**L.2 exhaustive generic-clause audit (run on the output CSV):** every generic lease clause is tagged GA or has a GA override or variant, except the deliberate exclusions: `default-by-tenant-ks-ne`, `services-utilities-provided-ks-oh`, `surrender-end-of-term-mn-nd`, `surrender-end-of-term-ks-ne` (state variants Georgia does not need), `month-to-month-notice-co-*`, `possession-delay-mn-new-construction`.

### 2.3 Other states' specific rows screened, not tagged
- **DV rows** (`dv-lease-termination-az` and others): each encodes its own statute; Georgia's § 44-7-23 differs (qualifying orders, 30 days after notice, no lock change) → `dv-lease-termination-ga`.
- **`military-lease-termination-ca`:** California statute. Georgia's rights are in §§ 44-7-22 and 44-7-37 and apply regardless of lease text; library decision: no SCRA clause → `edu-servicemember-rights-ga`.
- **Move-in inventory rows** (`move-in-inventory-ks/-nv`, `move-in-inspection-az`): Georgia's list must come BEFORE the deposit and carry the sign-or-dissent notice → `move-in-damage-list-ga`.
- **Disclosure rows** (`landlord-disclosure-az`, `landlord-address-disclosure-fl`): state-specific wording → `landlord-disclosure-ga`.
- **Flood rows** (`flood-disclosure-fl` and others): Florida's form asks different questions → `flood-disclosure-ga`.
- **`crime-free-addendum-az`:** Arizona-specific statutory permission; Georgia's hook is the retaliation safe harbour → `serious-misconduct-prohibition-ga`.
- **Every remaining state-specific row** encodes its own state's statute and does not apply as written.

## 3. Step 2 — new rows

### 3.1 Shared-row edits: none
No shared row's `bodyText`, `rule_type` or `content_type` changed. Each new clause was checked against the library by `topic_key`; none could be merged into a multi-state row without blurring a real divergence (instruction 26, priority rule).

### 3.2 New GA lease clauses (11) and the rewritten dormant clause

| Row | Rule | Rests on | Layout |
|---|---|---|---|
| `security-deposit-return-ga` | REQUIRED | §§ 44-7-33(b)-(c), 44-7-34(a), 44-7-35(b)-(c) | notice on the lists |
| `security-deposit-cap-ga` (dormant, rewritten) | CONSTRAINED | §§ 44-7-30(3), 44-7-30.1; last-month rent per decision 1 | — |
| `security-deposit-escrow-ga` | CONDITIONAL (non-exempt) | §§ 44-7-31, 44-7-32, 44-7-36 | written location |
| `move-in-damage-list-ga` | CONDITIONAL (non-exempt) | § 44-7-33(a), (c) | before the deposit; notice on the list |
| `landlord-disclosure-ga` | REQUIRED | § 44-7-3 | at or before commencement |
| `flood-disclosure-ga` | CONDITIONAL (3+ floods in 5 years) | § 44-7-20 | separate, before signing |
| `assistance-animal-accommodation-ga` | REQUIRED | §§ 30-4-1, 30-4-3, 30-4-4; 8-3-202 | — |
| `dv-lease-termination-ga` | RECOMMENDED | § 44-7-23 | — |
| `rent-escalation-ga` | CONDITIONAL (opt-in) | § 44-7-24(d)(1)(A) | written lease |
| `serious-misconduct-prohibition-ga` | CONDITIONAL (opt-in) | § 44-7-24(d)(2)(C) | written lease |
| `holdover-rate-ga` (added 2026-09-28, decision 2) | CONDITIONAL (opt-in) | § 13-6-7 (liquidated damages); an add-on to `holdover-ca` | builder places it right after `holdover-ca` |
| `casualty-termination-ga` (added 2026-09-28, decision 4) | CONDITIONAL (opt-in) | § 44-7-15 displaced by agreement (not on § 44-7-2(b)'s list); § 44-7-13 left intact; modelled on `casualty-termination-wy` | — |

### 3.3 New GA education rows (37)
Topics:
- deposit rules; repair and fitness duties; lease terms Georgia voids;
- dispossessory process; record sealing from 2027; retaliation; self-help and utility shutoffs;
- tenancy at will; servicemember rights; local preemption (rent amount only); fair housing;
- service-dog penalties and definitions (2026); out-of-state owners' broker duty (2025);
- lead-poisoning abatement; smoke detectors; bounced checks; towing; stigmatized property;
- squatters and intruders; undelivered and uncashed refunds; rent interest, distress warrants and the landlord's lien; property left behind;
- **15 confirmed absences, each with its own row:** fee caps, deposit interest, entry notice, rent-increase notice, source of income, immigration inquiry, radon, mold and bed bugs, CO alarms, drug labs, EV charging, cash receipts, tenant death, holdover measure, right to call police (plus self-help lockouts and voluntary-move-out property, recorded inside `edu-prohibited-practices-ga` and `edu-abandoned-property-ga`).

## 4. Layout and placement requirements (instruction 28)

| Rule | Requirement | Where it lives |
|---|---|---|
| O.C.G.A. § 44-7-33(c) | Move-in and move-out damage lists must **contain written notice of the tenant's duty to sign or to dissent**; without it the tenant keeps the right to dispute | `move-in-damage-list-ga`, `security-deposit-return-ga` (the notice must be printed ON the list forms) |
| O.C.G.A. § 44-7-33(a) | Move-in list presented **before the deposit is tendered**, for the tenant's permanent retention | `move-in-damage-list-ga` |
| O.C.G.A. § 44-7-20 | Flooding notice **in writing before the written lease is entered** | `flood-disclosure-ga` (separate pre-signing document) |
| O.C.G.A. § 44-7-3(a) | Owner/manager disclosure **in writing, at or before commencement**; changes within 30 days in writing or by conspicuous posting | `landlord-disclosure-ga` |
| O.C.G.A. § 44-7-31 | Tenant **informed in writing** of the escrow account's location | `security-deposit-escrow-ga` |
| O.C.G.A. § 44-7-2(c) | Attorney-fee clause must be **reciprocal** | `default-by-tenant` (tagged) |
| O.C.G.A. § 44-7-24(d)(1)(A), (d)(2)(C) | Retaliation safe harbours need **written** lease provisions | `rent-escalation-ga`, `serious-misconduct-prohibition-ga` |

**Outside the lease** (for the builder's notice workflows):
- § 44-7-50(c)-(d): 3-business-day notice to vacate or pay (and demand for possession), **posted in a sealed envelope conspicuously on the door and delivered by every method the lease names** (instruction 44).
- § 44-7-34(a): deposit statement by first-class mail to the last known address.
- § 13-6-15(c): bounced-check demand in the statutory form.
- § 44-1-13(a.1): towing signs (not for 4 or fewer units).

**Code-wide typography search (instruction 28):** boldface, "bold type", "bold print", underlined, conspicuous, "capital letters", "separate document", "separate writing", "point type" within 50 words of lease/tenant/lessee/"rental agreement": 17 hits. The only landlord-tenant hits are the "conspicuous" posting rules in §§ 44-7-3 and 44-7-50; the rest are condominium sales, leases of goods, boat liveries, cemeteries and the Fair Business Practices Act. **No bold, capitals, type-size or separate-document rule for residential leases.**

**Omission sanctions that forfeit money** (second half of instruction 28):
- lists or statements late: no withholding and no damage suit (§ 44-7-35(b));
- lists without the sign-or-dissent notice: the tenant can still dispute (§ 44-7-33(c));
- no flooding notice: tort liability for the tenant's flood-damaged property (§ 44-7-20);
- no escalation clause: a rent increase within three months after protected action is a retaliation element (§ 44-7-24(c)(4));
- a one-way fee clause: void (§ 44-7-2(c)).

These add to the **Addendum M.12** case for a `formatting` field. Georgia adds two values: **"text printed on a companion form"** (the list notice) and **"delivered before signing"** (the flood notice).

## 5. Dormant row (instruction 21)

| Row | Right | Wrong | Outcome |
|---|---|---|---|
| `security-deposit-cap-ga` | The two-month cap; pet and other refundable deposits count | Its return sentence ("within 30 days after Tenant vacates") had the wrong trigger (possession under § 44-7-33(b)); it said nothing about nonrefundable fees or rent-applied money, both excluded by § 44-7-30(3); the cap only dates from HB 404 (leases entered or renewed on or after 2024-07-01) | Rewritten to the cap alone, return rule moved to `security-deposit-return-ga`; activated; `topic_key` normalised from `security-deposit-cap-ga` to `security-deposit-cap`; prior text kept in notes |

**Pattern holds again:** one real fact, part of the operative rule missed.

## 6. Decisions for Taylor

Asked in the first handoff. Taylor answered on 2026-09-28. Each answer is also recorded in the notes of the rows it affects.

| # | Question | Taylor's answer | What changed |
|---|---|---|---|
| 1 | Last-month rent: deposit or rent? § 44-7-30(3) puts "advance rent deposits" inside the deposit rules and money "to be applied toward the payment of rent" outside, and defines neither further | Yes to the recommendation | `security-deposit-cap-ga` body: money paid in advance toward the last month is an advance rent deposit. It counts toward the cap and is held, applied and returned with the Security Deposit, unless the lease expressly makes it Rent for a named calendar month. The builder must not add that designation automatically, because that would switch the rule off for every lease. Also updated: `edu-security-deposit-rules-ga` and the `due-at-signing` GA note |
| 2 | Offer an optional stipulated holdover rate? | Yes, as a GA clause if that is what it takes | New `holdover-rate-ga` (CONDITIONAL, opt-in). While no continued tenancy exists, a daily holdover charge replaces `holdover-ca`'s actual-damages measure. It is liquidated damages under § 13-6-7; the penalty test is case law, not read. Built as an add-on, so no shared row changes |
| 3 | `default-by-tenant`'s contractual cure promise in Georgia | Keep the shared clause for GA. The shared carve-out handles this kind of state difference, as it did for an earlier state | No text change; `default-by-tenant` GA note updated |
| 4 | Offer a casualty clause that gives up § 44-7-15's no-abatement default? | Asked why; after the explanation below: yes. Also flag Colorado for Claude CLI | New `casualty-termination-ga` (CONDITIONAL, opt-in). Colorado flag in §9 |
| 5 | Keep the no-disclaimer variants despite the REALTORS form's broader disclaimer? | Asked for a side-by-side; after it: go with the recommendation (keep) | No text change; `tenants-property-insurance-ks-oh-ca` GA note updated |
| 6 | Prompt out-of-state owners for their broker at onboarding (§ 44-7-25)? | No while the topic is education-only; yes if it ever becomes a clause | `edu-nonresident-landlord-broker-ga` notes |

**Decision 4, as explained to Taylor.** § 44-7-15 says destruction by fire or other casualty "not caused by the landlord ... shall not abate the rent contracted to be paid." It gives no one a right to end the lease. So with no clause, a Georgia lease on a burned unit keeps running, and the tenant owes rent on a home they cannot live in. The landlord is held too. The repair duty (§ 44-7-13(a)) and, for leases entered or renewed from 2024-07-01, the fitness term (§ 44-7-13(b)) cannot be waived (§ 44-7-2(b)(1)). How Georgia courts square those with § 44-7-15 is case law, not read. The earlier framing, that a clause "gives up a landlord-favourable default", undersold this: for the landlord, most of a clause's value is the right to end the lease. § 44-7-15 is not on § 44-7-2(b)'s non-waivable list, so a lease may change it. Thirteen of the library's 15 states carry a casualty row; Georgia and Colorado carry none (Colorado noted only; no re-audit). **Recommendation:** offer an optional (CONDITIONAL) GA clause modelled on `casualty-termination-wy`, Wyoming being another state with no statutory casualty rule. Under it, either party may end the lease if a casualty not caused by the tenant makes the unit uninhabitable, with rent prorated to move-out. Rent is reduced in proportion if the tenant stays in a partly usable unit.

**Decision 5, as explained to Taylor.** Each pair differs by one sentence: the base adds a blanket statement that the landlord is not liable.

| Clause | Base (CO, WY, SD) | Variant (GA and 9 other states) |
|---|---|---|
| Parking | "... Landlord does not provide security for the parking area **and is not liable for damage to or theft of a vehicle or its contents.**" | "... Landlord does not provide security for the parking area." |
| Storage | "... Tenant will not store any hazardous, flammable, or perishable materials in the storage space, **and Landlord is not liable for damage to or theft of items stored there.**" | "... Tenant will not store any hazardous, flammable, or perishable materials in the storage space." |
| Renter's insurance | "Landlord's insurance does not cover loss or damage to Tenant's personal property, **and Landlord is not liable for any such loss or damage.** Tenant will obtain ... renter's insurance ..." | "Landlord's insurance does not cover loss or damage to Tenant's personal property. Tenant will obtain ... renter's insurance ..." |
| REALTORS F913 (paraphrase, from the outline only) | Tenant's property is at the tenant's risk, the landlord has no liability for it, and the tenant indemnifies the landlord | — |

§ 44-7-2(b) bars a lease from "avoid[ing]" the landlord's repair duty (§ 44-7-13) or its liability for failing to repair (§ 44-7-14). The bold sentences have no exception. A car broken into through a gate the landlord knew was broken, or a storage unit flooded by a roof leak the landlord ignored, falls inside them, and to that extent they cannot be enforced. Whether a court enforces the rest of such a sentence is case law, not read. § 44-7-2 attaches no penalty to including one; the Fair Business Practices Act's reach to leases is case law, not relied on. What the variants give up is therefore small: a landlord is not liable anyway for loss it did not cause, and the variants keep the other protective wording (no security promised; the landlord's insurance does not cover the tenant; renter's insurance required). **Recommendation:** keep the variants. If you want wording that shields the landlord for losses it did not cause, the library already has a model: `services-utilities-provided` disclaims only "causes beyond Landlord's reasonable control." That would be a shared-row change touching 10 states, so it is a separate decision.

## 7. Open items and read list (none blocking)

| Item | What would close it |
|---|---|
| L.5 dependencies not read | Title 19 ch. 13 art. 1 (family-violence definition); §§ 16-5-90 to 16-5-94 (stalking); § 36-61-11 (read by title); Title 9 ch. 11 (by title); § 43-40-20 (broker trust accounts); § 44-12-214 (unclaimed-property reporting); § 25-2-13; §§ 16-9-1, 16-9-2, 17-10-3, 15-10-2; § 16-9-20; § 10-12-1 et seq.; NFPA 72. Each is labelled in its row |
| Art. 4 procedure sections read by summary | §§ 44-7-72, -74 to -76, -78, -81 (distress-warrant procedure; no landlord duty turns on them) |
| Agency rules | Department of Public Safety towing rules; Department of Public Health lead rules; PSC utility rules (instruction 16) |
| § 44-7-35(a) conjunctive reading | Case law, not relied on; no row rests on (a) |
| Local ordinances | Atlanta, Savannah and others (registration, inspection, fair-housing classes, § 44-7-4 security standards): flagged, not resolved |
| Sales tax on residential rent; hotel-motel taxes on stays under 30 days | Not checked beyond § 48-13-50.3 (innkeepers; extended stays over 30 days exempt) |

## 8. Integrity and screens
- **CSV:** 1,125 rows; every row has 16 fields (re-read with the `csv` module); no duplicate ids; no dangling `supersedes`; no display collisions (programmatic check over every active `supersedes` pair); no blank status; no active row with blank `states` except the intentional `security-deposit-return` parent. Line endings CRLF, as in the input. 55 existing rows changed (54 tags plus the dormant rewrite); every other existing row is byte-identical in content.
- **Counts:** GA 0 → 103. Every other state's active count unchanged: AZ 109, CA 157, CO 115, FL 107, KS 129, MN 139, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106.
- **Revision 2026-09-28 (Taylor's decisions):** one row added (`holdover-rate-ga`). Body text changed in two GA-only rows (`security-deposit-cap-ga`, `edu-security-deposit-rules-ga`). Notes changed in the GA segments of three shared rows (`due-at-signing`, `default-by-tenant`, `holdover-ca`) and in two GA education rows. Seven notes carried a doubled prefix ("O.C.G.A. §O.C.G.A. §", left by the citation-format pass) and now read "O.C.G.A. §§": the GA notes of `lead-based-paint` and `holdover-ca`, `edu-security-deposit-rules-ga`, `edu-tenancy-at-will-ga`, `edu-service-dog-law-ga`, `edu-lead-poisoning-abatement-ga` and `edu-no-deposit-interest-ga`. The non-GA text and every other field of each shared row are unchanged from the first handoff (checked programmatically). All integrity checks were re-run and pass. The checklist changed in three GA cells (rows 12 and 31 of the per-state tables, ref 367.7).
- **Second revision 2026-09-28 (decisions 4 and 5):** one row added (`casualty-termination-ga`). Body text changed in one GA-only row (`edu-landlord-remedies-ga`: now mentions the optional clause). Notes changed in the GA segment of `tenants-property-insurance-ks-oh-ca`. Non-GA text of that shared row unchanged (checked programmatically). All integrity checks re-run and pass. The checklist changed in two GA cells (row 29 of the per-state tables; the casualty line in "New topics added by Georgia").
- **Instruction 37 (citation inventory):** every ch. 7 section is cited in an active GA row's body or notes, except §§ 44-7-17 and 44-7-57 (crop rent and croppers; agricultural, deprioritized). §§ 44-7-71 to 44-7-80 are cited as the range "§§ 44-7-70 to 44-7-81".
- **Instruction 11 (citation screen):** all 132 distinct Georgia cites in GA rows were extracted; each was read section-open, or reviewed by title as a search hit and labelled so, or labelled as not read (§7).
- **Instruction 16 (non-statute citations):** federal lead rules (42 U.S.C. § 4852d; 24 CFR Part 35; 40 CFR Part 745); federal FHA (42 U.S.C. § 3604(f)(3)(B)); VAWA (34 U.S.C. § 12491, not read); NFPA 72; agency rules (§7); two Attorney General opinions seen as annotations (not relied on). No Ga. Comp. R. & Regs. rule and no case law is relied on.
- **Instructions 19/38:** every row id named in this log, in the GA checklist cells and in GA row notes exists in the output CSV. All GA rows named are active and GA-tagged. The non-GA ids named (`holdover`, `assistance-animal-accommodation`, `security-deposit-return`) are deliberate "not tagged" references.
- **Instruction 14:** every GA addition to a shared row's `notes` is delimited " | GA: ...".
- **Kickoff citation format:** every Georgia code cite in GA text is written `O.C.G.A. § 44-7-30` style. Session-law and act-section references (e.g. "HB 404 § 6", "Ga. L. 2024, p. 91, § 4") are left unprefixed so the legal-watch tripwire does not read them as code sections.

## 9. Propagation notes

**None owed.** No shared row's `bodyText`, `rule_type` or `content_type` changed, in the first handoff or in the 2026-09-28 revision (which changed only GA segments of shared rows' notes). Every change to an existing shared row is an added `GA` tag with a `GA:` note, which is a states-only change under §5a.1.

### 9.1 Flag for Claude CLI: Colorado has no casualty row (Taylor, 2026-09-28)

A targeted check on one topic, not a re-audit. Paste-ready:

> **Colorado — fire/casualty gap (flagged from the GA session, 2026-09-28).** Colorado is now the only one of the library's 15 states with no active row whose `topic_key` starts with `casualty` (every other state has one; GA's `casualty-termination-ga` was added today). No active CO-tagged row mentions casualty in its title or body. Task: (1) read, section-open, whatever Colorado statute governs rent and termination after fire or other casualty in a residential tenancy, starting with C.R.S. title 38 article 12 (parts 1, 5 and 8) and any casualty or untenantability section it cross-references, and record the source line; (2) if Colorado has a statutory rule, write `casualty-termination-co` to it; (3) if a full-text search of C.R.S. confirms there is none, write a CONDITIONAL contract-only row modelled on `casualty-termination-wy` (or `casualty-termination-ga`), plus an absence note in the row. Log it in the CO log as a targeted fix, with the §5a.1 judgment (new CO-only row, no shared-row change, no propagation owed). Do not re-audit any other Colorado topic.

## 10. Findings worth Taylor's attention
1. **Georgia's deposit law has a small-landlord switch.** A natural person who, with spouse and minor children, owns 10 or fewer units and doesn't pay a manager is exempt from escrow, the damage lists and the treble-damages remedy (§ 44-7-36). The two-month cap and the 30-day return still apply.
2. **The damage lists are the whole ballgame.** A tenant who attends the move-out inspection and signs, or fails to dissent specifically, cannot recover, but only if the lists carry the sign-or-dissent notice (§ 44-7-33(c)). That is a form requirement for the builder, not lease text.
3. **A generous notices clause can create eviction duties** (§ 44-7-50(d); instruction 44).
4. **Service dogs changed on 2026-07-01** (HB 668): mental impairments now covered; emotional-support dogs expressly excluded; misrepresentation is a crime.
5. **Two retaliation safe harbours exist only with written lease text** (§ 44-7-24(d)(1)(A), (d)(2)(C)); both are offered as opt-in clauses.
6. **Casualty doesn't abate rent in Georgia** (§ 44-7-15). The opt-in `casualty-termination-ga` displaces it (decision 4).
7. **Several HB 404 rules are date-gated** to leases entered or renewed on or after 2024-07-01, so a pre-2024 lease still running on its original term is outside them.
8. **§ 44-7-35(a) joins its three limbs with "and".** Read literally, the no-retention rule bites only if all three fail. No row relies on it; (b)'s forfeiture stands alone.
9. **§ 44-7-25 (2025) is new and was not in the leads:** out-of-state owners of houses and duplexes need a Georgia broker.

## 11. Deliverables

| File | State |
|---|---|
| `lease-clauses-GA-sync.csv` | 1,125 rows, 1,090 active; GA 103 (all VERIFIED); integrity checks pass; other states unchanged |
| `lease-clause-decision-log-GA.md` | This file |
| `lease-clause-decision-log-named-topic-checklist.md` | GA column in all 10 state-column tables; GA answers in the backfill table; Georgia sections at the end; instructions 44-45 |

## 12. Kickoff leads — what each turned out to be

| Lead | Result |
|---|---|
| Deposits, §§ 44-7-30 to 44-7-37 | **Confirmed**, with detail: move-in list before the deposit; move-out list in 3 business days; 5-business-day tenant inspection; 30-day return after possession; 90-day undelivered refund; escrow or bond; treble damages; small-landlord exemption (≤10 units, natural person, self-managed) |
| HB 404 "Safe at Home Act" | **Enacted:** Act 392, signed 2024-04-22, effective 2024-07-01. Two-month cap (§ 44-7-30.1) ✔; implied fitness (§ 44-7-13(b)) ✔; required notice before filing = 3-business-day notice to vacate or pay (§ 44-7-50(c)) ✔; also added "cooling" to § 44-7-14.1. Applies to leases entered or renewed on or after 2024-07-01 |
| Flooding, § 44-7-20 | **Confirmed:** three floods in five years; written notice before signing; tort liability |
| Preemption, § 44-7-19 | **Confirmed, narrowly:** only the amount of rent, for private single- and multi-unit property; counties and cities both named; local security standards expressly allowed (§ 44-7-4) |
| Dispossessory, "§ 44-11-50 and nearby" | **§ 44-11-50 does not exist** (Title 44 ch. 11 ends at § 44-11-33). Dispossessory is § 44-7-50 et seq.; ch. 11 art. 2 (intruders) is relevant to squatters and was read |
| Retaliation, § 44-7-24 | **Confirmed** (2019) |
| Void terms, § 44-7-2 | **Confirmed:** no waiver of repair, repair liability, unfit-dwelling ordinances, dispossessory, distress or deposit rules; fee reciprocity. "Indemnity": § 13-8-2(b) is facially for construction/repair contracts (lease reach is case law, not relied on) |
| Dormant `security-deposit-cap-ga` | Rewritten and activated (§5) |
| Not in the leads | § 44-7-25 (2025 non-resident owner broker); HB 668 (2026 service dogs); SB 406 (2027 record sealing); Title 31 ch. 41 lead abatement; § 44-1-13 towing (2026 rewrite); § 16-7-21.1 squatting |

---

## 15. Real-lease comparison (gap-discovery source 2)

**Lease used:** Georgia Association of REALTORS®, **Form F913, "Lease for Residential Property"**, 2025 printing, edition 01/01/25, "Copyright© 2025 by Georgia Association of REALTORS®, Inc." **Where from:** a class handout posted by Real Estate Academy of America, a Georgia real estate school (realestateacademyofamerica.com/wp-content/uploads/2024/12/HANDOUT-21-F913-Lease-for-Residential-Property-1.1.25-NOTES.pdf). **Why it qualifies:** it is the state Realtors association's residential lease (instruction 36, option (a)); the copy is posted by a Georgia licensing school rather than a brokerage, which I record plainly. **Reference exhibits** named in it (F910/F911/F912 condition reports, F918 lead exhibit, F923 property-damage exhibit) were not obtained. **Method:** mapped by topic through the fetch tool's outline (no text reproduced; copyrighted). The lease is a lead only (instruction 6); every point below rests on primary text read for this pass.

### 15.1 Provision map

| Lease provision (by topic) | GA library coverage | Result |
|---|---|---|
| Parties, property, term, possession delay (daily abatement) | `rent-payment`, `possession-delay` | Covered |
| Rent, due date, payment methods, late date and "additional rent" late charge | `rent-payment`, `late-fee`, `acceptable-payment-methods`, `edu-no-fee-caps-ga` | Covered; no statutory cap (§17) |
| Credit-card convenience fee | none | No statute located; contract term. Not needed |
| Service charges for posting the 3-day notice and for dishonored checks | `returned-payments`, `edu-dishonored-payment-remedies-ga` | Covered for checks (§ 13-6-15); a posting fee is contractual |
| Security deposit amount "two-month maximum per Georgia law" | `security-deposit-cap-ga` | Covered (§ 44-7-30.1) |
| Deposit held in escrow or general account; escrow required if landlord owns "10+" units, isn't a natural person, is a licensee or uses a paid manager; interest belongs to holder | `security-deposit-escrow-ga`, `edu-no-deposit-interest-ga` | Covered. The statute's line is "ten or fewer" exempt (§ 44-7-36), so escrow starts at 11 units; the form's "10+" is loose. Licensee trust accounts: § 43-40-20 (not read) |
| Move-in condition report; tenant acknowledges good condition and habitability | `move-in-damage-list-ga`, `existing-condition` | Covered; the list must precede the deposit and carry the sign-or-dissent notice (§ 44-7-33) |
| Deposit return in 30 days; move-out statement in 3 banking days; tenant objects in 3 banking days; undelivered payment becomes landlord's after 90 days; holder may interplead | `security-deposit-return-ga` | Covered. The statute gives the tenant 5 business days to inspect on request and a sign-or-dissent rule, not a 3-day objection window; the library follows the statute. Interpleader is contract |
| Notice not to renew; notices by hand, courier, mail, e-mail or fax, deemed delivered on transmission | `notices` | Covered; **instruction 44**: every method the lease names becomes mandatory for the 3-day notice (§ 44-7-50(d)) |
| Re-key fee; non-refundable administrative fee | `keys`; § 44-7-30(1) | Covered; nonrefundable fees are outside the deposit cap |
| Pets exhibit; smoking; no subletting or short-term rentals (uncurable breach) | `pet-policy`, `smoking-policy`, `no-sublet-assign` | Covered |
| Utilities connected within 3 banking days and kept on through move-out | `utilities-responsibility`, `utility-service-continuity` | Covered |
| Tenant's early termination; military (SCRA; § 44-7-22); family violence (§ 44-7-23) | `early-termination`, `edu-servicemember-rights-ga`, `dv-lease-termination-ga` | Covered |
| Landlord's early termination with fee credit | `early-termination` | Contract term; not needed |
| Holding-over daily rate | `holdover-ca`, `edu-no-holdover-multiplier-ga`, `holdover-rate-ga` | Covered; opt-in charge added on decision 2 |
| Fee to prepare a lease amendment | none | Contract term; not needed |
| Use; guests (14 consecutive / 28 per year); **arrest or indictment for unlawful activity is a default** | `permitted-occupants`, `guest-policy`, `guest-policy-day-limit` | Partly covered. **Gap → `serious-misconduct-prohibition-ga`** (conduct-based, built on § 44-7-24(d)(2)(C)) |
| Appliances; lawn and exterior maintenance by checkbox; pest control (tenant handles bed bugs) | `appliances-included`, `landscaping-irrigation`, `tenant-maintenance`, `edu-no-mold-bedbug-disclosure-ga` | Covered. Shifting bed-bug treatment to the tenant sits uneasily with § 44-7-13 (non-waivable); the library does not shift it |
| Flooding disclosure (3 times in 5 years) | `flood-disclosure-ga` | Covered |
| Lead-based paint exhibit and EPA Renovate Right | `lead-based-paint`, `edu-lead-poisoning-abatement-ga` | Covered |
| Other liquidated damages: early-termination amount, fee to halt a dispossessory, denial-of-access charge, unauthorized pet or smoking charge, utility-disconnection charge | `early-termination`; § 13-6-7 | Contract terms; enforceable as liquidated damages unless a penalty (case law). Not needed |
| Automatic renewal with a percentage rent increase | `edu-no-rent-increase-notice-ga`; `rent-escalation-ga` | Covered; no rent-increase statute |
| Brokerage relationships and material relationships (BRRETA) | none | Broker duties; not needed |
| Disclosure of ownership and agents | `landlord-disclosure-ga` | Covered (§ 44-7-3) |
| Default: 3-day cure notice for non-monetary defaults; 3-day notice to vacate or pay posted on the door | `default-by-tenant`, `edu-eviction-process-ga` | Covered; the form's non-monetary cure is contractual, like the library's |
| Tenant repairs: reporting, filters, bulbs, clogs; reimbursement in 14 days | `tenant-maintenance`, `landlord-maintenance` | Covered |
| Smoke/CO detector checks by tenant | `edu-smoke-detectors-ga` | Covered: § 25-2-40(f)(2) puts the maintenance fine on the occupant |
| Freezing pipes; mold and mildew duties; access codes | `tenant-maintenance`, `keys` | Covered by general duties |
| Community association compliance; fines as additional rent | `hoa-compliance` | Covered |
| Rules (locks, vehicles, waterbeds, space heaters, alterations, wall attachments, noise, trampolines) | `keys`, `parking-vehicle-rules`, `common-area-use`, `no-alterations`, `no-disturbance`, `fire-safety-grilling` | Covered |
| Personal property at tenant's risk; landlord "has no liability"; tenant indemnifies landlord | `tenants-property-insurance-ks-oh-ca` | Covered; the library's variant omits the disclaimer (decision 5) |
| Radon, attorney fees | — | The form has neither; Georgia has no radon statute; fees must be reciprocal if included (§ 44-7-2(c)) |

### 15.2 What it produced
- **(a) Missing required clause:** none.
- **(b) Corrections to GA rows:** none.
- **(c) New GA row:** `serious-misconduct-prohibition-ga` (the form's arrest/indictment default, rebuilt on conduct and on the statute's written-lease safe harbour).
- **(d) Divergences recorded as questions:** the "10+ units" escrow line (statute: more than ten); 3-banking-day objection window (statute: sign-or-dissent and 5-business-day inspection); broad disclaimer (decision 5); daily holdover rate (decision 2); bed bugs shifted to the tenant.
- **(e) Confirmed absences:** none new from the form.

## 16. Landlord-scenario screen (gap-discovery source 3)

**Method:** Arizona's scenario map (AZ log §18.1) and Florida's additions, re-run against the GA-active library, plus Georgia-specific scenarios (out-of-state owners, small-landlord deposit exemption, squatters, lead poisoning, flooding, pre-2024 leases). Where no row answered, the official O.C.G.A. full-text search was run (§17) and every hit bearing on landlords was read section-open. I generated the scenarios myself (Taylor's experience is Colorado-only, instruction 36).

**Result:** 61 scenarios: 45 covered by rows written in the statute walk; 6 gaps, each producing a row; 5 confirmed absences (four with their own rows, firearms recorded in `edu-fair-housing-ga`); 3 not located with no row (holding deposit, contractor liens, foreclosure); 2 out of scope.

| Scenario | GA coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | none | **No statute located**; the deposit definition turns on money held "by virtue of a residential rental agreement" (§ 44-7-30(3)). No row |
| Screening: application fee, criminal history, source of income, immigration | `edu-no-fee-caps-ga`, `edu-fair-housing-ga`, `edu-no-source-of-income-rule-ga`, `edu-no-immigration-inquiry-rule-ga` | Covered |
| Applicant lied on the application | `rental-application-accuracy` | Covered |
| Voucher holder applies | `edu-no-source-of-income-rule-ga` | Covered; local ordinances flagged |
| Owner lives out of state (house or duplex) | none | **Gap → `edu-nonresident-landlord-broker-ga`** (§ 44-7-25) |
| Small landlord (≤10 units) asks what deposit rules apply | `edu-security-deposit-rules-ga` | Covered (§ 44-7-36) |
| Required disclosures at signing | `landlord-disclosure-ga`, `flood-disclosure-ga`, `lead-based-paint`, `security-deposit-escrow-ga`, `move-in-damage-list-ga` | Covered |
| Property floods regularly | `flood-disclosure-ga` | Covered |
| Unit not ready on move-in day | `possession-delay` | Covered |
| How big a deposit may be; pet deposit on top | `security-deposit-cap-ga`, `pet-policy` | Covered |
| Last month's rent collected at signing | `due-at-signing`, `security-deposit-cap-ga` | Covered; decision 1 |
| Property in an HOA or condominium | `hoa-compliance` | Covered (§ 44-3-80(b)(2)); no association rent-demand statute located |
| Death or crime happened in the unit; applicant asks | none | **Gap → `edu-stigmatized-property-ga`** (§ 44-1-16, 2026 text) |
| City requires registration or inspection | `edu-local-preemption-ga` | Covered at state level; local layer flagged |
| **Rent and money** | | |
| Rent is late | `late-fee`, `default-by-tenant`, `edu-eviction-process-ga` | Covered |
| Tenant pays part of the rent | `application-of-payments`, `edu-eviction-process-ga` | Covered (tender rules § 44-7-52; no acceptance-waiver statute) |
| Check bounces | `returned-payments`, `edu-dishonored-payment-remedies-ga` | Covered |
| Cash rent and receipts | `edu-no-cash-receipt-duty-ga` | Covered (confirmed absent) |
| Raising rent at renewal or mid-term | `edu-no-rent-increase-notice-ga`, `rent-escalation-ga` | Covered |
| Interest on unpaid rent | `edu-landlord-remedies-ga` | Covered (§ 44-7-16) |
| **During the tenancy** | | |
| AC fails in July | `landlord-maintenance`, `edu-landlord-maintenance-ga`, `edu-prohibited-practices-ga` | Covered: no statutory repair deadline; landlord may not cut off cooling during a dispossessory (§ 44-7-14.1) |
| Tenant withholds rent over repairs | `edu-landlord-maintenance-ga` | Covered: no statutory withholding right |
| Pests, mold | `edu-no-mold-bedbug-disclosure-ga`, `landlord-maintenance` | Covered |
| Child found with lead poisoning | none | **Gap → `edu-lead-poisoning-abatement-ga`** (Title 31 ch. 41) |
| Smoke detector missing or dead | `edu-smoke-detectors-ga` | Covered (§ 25-2-40) |
| CO alarm | `edu-no-co-alarm-duty-ga` | Covered (confirmed absent) |
| Landlord needs to enter; tenant refuses | `landlords-access`, `edu-no-entry-notice-statute-ga` | Covered |
| Tenant changes the locks | `keys` | Covered (no lock statute) |
| Guest won't leave | `guest-policy`, `guest-policy-day-limit`, `edu-unauthorized-occupant-removal-ga` | Covered |
| Squatters in a vacant unit | none | **Gap → `edu-unauthorized-occupant-removal-ga`** (§ 16-7-21.1; §§ 44-11-30 to -33) |
| Roommate moves out | `joint-liability`, `no-sublet-assign` | Covered |
| Tenant lists the unit on Airbnb | `no-sublet-assign` | Covered |
| Noise; threats; drug activity | `no-disturbance`, `serious-misconduct-prohibition-ga`, `edu-retaliation-ga` | Covered |
| Unapproved pet; service dog; emotional support animal | `pet-policy`, `assistance-animal-accommodation-ga`, `edu-service-dog-law-ga` | Covered |
| Disability modification request | `no-alterations`, `edu-fair-housing-ga` | Covered (§ 8-3-202(a)(7)(B)(i)) |
| Tenant hires a contractor for an approved alteration (liens) | none | **Not located** as a landlord-tenant rule; mechanics' liens (Title 44 ch. 14 art. 8 part 3) not read. No row (contrast Fla. Stat. § 713.10) |
| Car towed from the lot | `parking-vehicle-rules` | **Gap → `edu-towing-ga`** (§ 44-1-13) |
| Tenant's utility shut off; landlord's master-metered utility shut off | `utility-service-continuity`, `edu-prohibited-practices-ga` | Covered; no utility-to-tenant notice statute (search §17) |
| Firearms in the unit | none | **Confirmed absent** for private leases (§17); public housing only (§ 8-3-202(a)(8)). Recorded in `edu-fair-housing-ga` |
| Fire or storm damage | `edu-landlord-remedies-ga`, `casualty-termination-ga` | Covered: rent not abated by statute (§ 44-7-15); opt-in clause displaces it (decision 4) |
| Tenant calls police repeatedly; lease penalizes calls | `edu-no-police-call-protection-ga` | Covered (confirmed absent) |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination` | Covered |
| Family-violence victim wants out | `dv-lease-termination-ga` | Covered |
| Tenant deployed or gets PCS orders | `edu-servicemember-rights-ga` | Covered |
| Month-to-month / no fixed term | `edu-tenancy-at-will-ga` | Covered (60/30) |
| Tenant stays after the lease | `holdover-ca`, `edu-no-holdover-multiplier-ga` | Covered |
| Tenant disappears; belongings left | `surrender-end-of-term`, `edu-abandoned-property-ga` | Covered |
| Tenant dies | `edu-no-tenant-death-termination-ga` | Covered (confirmed absent except § 44-7-22(d)) |
| Eviction for nonpayment | `edu-eviction-process-ga` | Covered |
| Eviction record sealing | `edu-eviction-record-sealing-ga` | Covered (from 2027) |
| Retaliation claim | `edu-retaliation-ga` | Covered |
| Landlord changes the locks or cuts utilities | `edu-prohibited-practices-ga` | Covered |
| Seizing tenant property for rent | `edu-landlord-remedies-ga` | Covered (distress warrant only) |
| Move-out inspection and deposit dispute | `security-deposit-return-ga` | Covered |
| Deposit refund returned undelivered, or never cashed | none | **Gap → `edu-unclaimed-deposit-refunds-ga`** (§ 44-7-34(a); § 44-12-193) |
| **Owner changes** | | |
| Owner sells the property | `landlord-disclosure-ga` | Covered (change notice in 30 days, § 44-7-3); no deposit-transfer statute located |
| Lender forecloses | none | Federal PTFA governs; no state rule located; § 44-7-32 bond covers deposit return on foreclosure. No row |
| Owner switches managers | `landlord-disclosure-ga` | Covered |
| Buyer is a foreign adversary principal | none | **Out of scope:** § 2-1-7(b)(2) excludes residential property (read) |
| Furnished rental under 30 days | none | **Out of scope:** innkeeper nightly fee (§ 48-13-50.3; extended stays over 30 days exempt) |
| Pre-2024 lease still on its original term | notes on HB 404 rows | Covered: cap, fitness term and 3-day notice apply to leases entered or renewed on or after 2024-07-01 |

("Covered" counts rows written during the statute walk. The six gaps produced the six rows named.)

## 17. Outside-title search and proof-of-absence (gap-discovery source 4)

**Engine:** the official O.C.G.A. full-text search (Georgia General Assembly public access, advance.lexis.com), run in the built-in browser on 2026-09-28. Terms and connectors (AND, OR, w/n, quoted phrases). Word forms were entered explicitly. **Control term:** "zqxvbnmwt" returned 0 (a true empty); "security deposit" returned 38 and "carbon monoxide" 21, so ordinary terms return hits. The code is annotated, so hits include case annotations; every hit was reviewed by title and any landlord-relevant hit read section-open. One search typed into a pre-filled box ran garbled and was re-run from a cleared box (instruction 39: a probe is a screen, never a verdict).

| # | Search | Hits | Result |
|---|---|---|---|
| 1 | zqxvbnmwt (control) | 0 | True empty |
| 2 | "late fee" AND (tenant OR landlord OR lessee) | 4 | No cap → `edu-no-fee-caps-ga` |
| 3 | ("late fees" OR "late charge(s)" OR "late payment") AND (tenant OR landlord OR lessee OR lessor) | 20 | No dwelling cap (rent-to-own goods, condo assessments, interest) |
| 4 | application/screening fee(s) AND (tenant OR landlord OR lessee OR "rental agreement") | 2 | None → `edu-no-fee-caps-ga` |
| 5 | landlord w/15 (enter/entry/access) w/30 (notice/consent) AND (tenant/premises/dwelling) | 7 | No entry rule → `edu-no-entry-notice-statute-ga` |
| 6 | "carbon monoxide" w/25 (detector(s)/alarm(s)); then "carbon monoxide" | 0; 21 | No alarm duty → `edu-no-co-alarm-duty-ga` |
| 7 | radon | 0 | Code-wide empty → `edu-no-radon-disclosure-ga` |
| 8 | (mold/molds/mildew/fungus/fungal/"bed bug(s)"/bedbug(s)) AND (tenant/landlord/lessee/"rental agreement") | 30 | None → `edu-no-mold-bedbug-disclosure-ga` |
| 9 | (clandestine/methamphetamine/"drug laborator(y)"/"drug lab") w/50 (property/dwelling/…/disclosure) | 22 | Criminal law only → `edu-no-drug-lab-disclosure-ga` |
| 10 | ("source of income"/"lawful source"/"housing choice voucher"/"Section 8"/immigration/citizenship) w/50 (landlord/tenant/…/dwelling) | 21 | None; § 2-1-7 read (residential excluded) → `edu-no-source-of-income-rule-ga`, `edu-no-immigration-inquiry-rule-ga` |
| 11 | ("electric vehicle"/"charging station") w/50 (tenant/…/rental) | 2 | Weights and measures only → `edu-no-ev-charging-right-ga` |
| 12 | rent increase variants AND (tenant/landlord/lessee/dwelling) | 4 | None → `edu-no-rent-increase-notice-ga` |
| 13 | (receipt(s)) w/15 (rent/rental) AND (landlord/tenant) | 7 | None → `edu-no-cash-receipt-duty-ga` |
| 14 | (abandon/abandoned/abandonment) w/25 (property/belongings/possessions) w/50 (tenant/…) | 7 | Post-writ only → `edu-abandoned-property-ga` |
| 15 | holdover variants w/50 (rent/damages/double/mesne profits) | 23 | None → `edu-no-holdover-multiplier-ga` |
| 16 | (death/dies/deceased) w/15 (tenant/lessee) w/50 (lease/…/termination) | 25 | None → `edu-no-tenant-death-termination-ga` |
| 17 | ("service member"/servicemember/"military service"/"active duty") w/50 (lease/tenant/…/eviction) | 4 | Only §§ 44-7-22, 44-7-37 → `edu-servicemember-rights-ga` |
| 18 | renter's insurance variants, firearm(s), flag w/40 (tenant/…/lease) | 16 | None for private leases |
| 19 | "emotional support"/"assistance animal(s)"/"support animal"/"comfort animal" | 11 | §§ 30-4-1, 30-4-4, 8-3-202 only → `assistance-animal-accommodation-ga` |
| 20 | (lessee/tenant/occupant) w/40 (association) w/40 (rent/assessment(s)) | 9 | § 44-3-80 read; no rent-demand rule |
| 21 | lead poisoning variants w/50 (owner/landlord/…) | 11 | **Found: Title 31 ch. 41 art. 2** → `edu-lead-poisoning-abatement-ga` |
| 22 | (discontinue/disconnect/termination) w/25 (service/utility) w/40 (tenant(s)/occupant(s)/"master meter") | 9 | No utility-to-tenant notice rule |
| 23 | typography terms (instruction 28) | 17 | No residential rule (§4) |
| 24 | lock/lockout/padlock/rekey/deadbolt/"self-help" w/25 (tenant/landlord/lessee) | 10 | No lockout or lock statute |
| 25 | ("law enforcement"/police/"emergency …") w/30 (tenant/…) w/30 (waive/penalty/evict/…) | 3 | None → `edu-no-police-call-protection-ga` |
| 26 | "security deposit" | 38 | Only §§ 44-7-33, 44-7-34 residential; no interest rule → `edu-no-deposit-interest-ga` |

**Other titles read section-open** (found by the searches, the statute walk's cross-references, or the scenario screen): §§ 13-6-7, 13-6-15, 13-8-2(b) (Title 13, contracts); §§ 16-7-21.1 (Title 16, squatting); §§ 25-2-40 (Title 25, fire safety); §§ 30-4-1 to 30-4-4 (Title 30, service dogs); §§ 31-41-11 to 31-41-19 (Title 31, lead); §§ 8-3-201, 8-3-202, 8-3-213, 8-3-217 (Title 8, fair housing); § 43-40-29 (Title 43, broker exemptions); §§ 44-1-13, 44-1-16, 44-3-80, 44-11-30 to 44-11-33, 44-12-193, 44-14-341, 44-14-342 (Title 44 outside ch. 7); § 2-1-7 (Title 2); § 48-13-50.3 (Title 48); § 10-1-393 (scanned for rental examples).

---

## Decisions that need Taylor (short list)

None open. Decided 2026-09-28 and applied: 1 (last-month rent is a deposit), 2 (`holdover-rate-ga`), 3 (keep the shared `default-by-tenant`), 4 (`casualty-termination-ga`; Colorado flagged for Claude CLI, §9.1), 5 (keep the no-disclaimer variants), 6 (no broker prompt while education-only).

**Integrity:** 1,125 rows (1,077 + 48 new; 1 dormant row reactivated); GA 103 active (all VERIFIED); every other state's count unchanged (AZ 109, CA 157, CO 115, FL 107, KS 129, MN 139, ND 122, NE 123, NJ 85, NV 121, OH 97, SD 99, TX 135, WY 106); no duplicate ids; no dangling `supersedes`; no display collisions; 16 fields on every row.

## 18. Sync spot-check (Claude Code, 2026-09-28)

A statute spot-check, now a standard sync step (CLAUDE.md decisions log, 2026-09-28). Not a re-audit.

- **HB 404 (Safe at Home Act), enrolled text from the Governor's signed-legislation site:** § 44-7-30.1 (two-month cap), § 44-7-50(c) (3-business-day notice to pay or vacate, including late fees), § 44-7-50(d) (sealed envelope on the door plus any method the rental agreement names), § 44-7-13(b) (fitness), § 44-7-14.1(a) (cooling added), and section 6 (leases entered or renewed on or after 2024-07-01). All match the GA rows.
- **§§ 44-7-34(a) and 44-7-36, text supplied by Taylor from Justia's 2025 Code of Georgia with history lines** (every host copy blocked automated reads). § 44-7-34(a) matches `security-deposit-return-ga` and `edu-security-deposit-rules-ga` point by point: 30 days after obtaining possession under § 44-7-33(b), the wear-and-tear bar, the reasons statement with the damage list, first-class mail, the 90-day undeliverable rule, and the permitted retentions. Georgia's DCA *Landlord Tenant Handbook* still says "within one month after termination ... or surrender and acceptance"; that is the pre-2018 text (replaced by Ga. L. 2018, p. 969, § 3/HB 834, effective 2018-07-01), so the handbook is out of date, not the rows. § 44-7-36 matches the education row: §§ 44-7-31, -32, -33 and -35 don't apply to a natural person who, with spouse and minor children, owns ten or fewer units not managed by a paid third party; § 44-7-30.1 and § 44-7-34 still apply.
- **Result:** no defects. `security-deposit-return-ga` still commits an exempt small landlord to the move-out list by contract; that is conservative, and it is left as built.

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows (most were already covered by this state's own education rows), and checklist mentions of them now point to those rows. §5a.1: only this state's own rows changed; no propagation owed.

- **Moved to education:** `dv-lease-termination-ga` → `edu-dv-lease-termination-ga`; `security-deposit-cap-ga` → the existing `edu-security-deposit-rules-ga`.
- **Trimmed:** `security-deposit-return-ga` keeps the sign-or-dissent duty, the permitted deductions and the forwarding-address request.
- **Optional (pattern 3):** `flood-disclosure-ga`, with `edu-flood-disclosure-ga`.

### Verdict for every lease clause

All 12 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-termination-ga` | Education | — | tenant right |
| `security-deposit-cap-ga` | Education | — | cap |
| `security-deposit-return-ga` | Split | SERVES_LANDLORD | keep sign-or-dissent duty; rest edu |
| `flood-disclosure-ga` | Optional + education | SERVES_LANDLORD | separate notice before signing |
| `assistance-animal-accommodation-ga` | Keep | SERVES_LANDLORD |  |
| `casualty-termination-ga` | Keep | SERVES_LANDLORD | contract choice |
| `holdover-rate-ga` | Keep | CONSTRAINED_TERM |  |
| `landlord-disclosure-ga` | Keep | REQUIRED_DISCLOSURE: O.C.G.A. § 44-7-3 |  |
| `move-in-damage-list-ga` | Keep | SERVES_LANDLORD | signed list is conclusive |
| `rent-escalation-ga` | Keep | SERVES_LANDLORD | opt-in |
| `security-deposit-escrow-ga` | Keep | REQUIRED_DISCLOSURE: O.C.G.A. § 44-7-31 |  |
| `serious-misconduct-prohibition-ga` | Keep | SERVES_LANDLORD |  |

## Targeted fix, 2026-09-29: bed-bug and mold rows split

`edu-no-mold-bedbug-disclosure-ga` covered two subjects in one row. It is switched off, and its content moved unchanged into `edu-no-bed-bug-disclosure-ga` and `edu-no-mold-disclosure-ga`, matching the separate rows most states have. The research and citation are copied to both rows (the same search covered both subjects); no new research. Reason: each row carries one `topic_key`, so a combined row hid one of the two subjects from the cross-state coverage check.
