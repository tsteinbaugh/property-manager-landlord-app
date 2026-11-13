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

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Retro checks (SOP 1.18), 2026-10-01

**Date:** 2026-10-01 · **Chat:** Georgia's own chat, circle-back (rule 8) · **Settings:** Opus, high effort, built-in browser. **Research mode not used** (no rule 9 trigger: the official code's own full-text search did every absence search). Scalpel, not a re-audit (rule 1): only the rules and fixes in the prompt were checked.

**Setup.**
- **Input:** `lease-clauses.csv` has **2,282 rows** (17 columns, CRLF), as the prompt says. GA had 104 active rows.
- **Old outputs deleted:** `lease-clause-decision-log-GA.md`, `lease-clause-decision-log-named-topic-checklist.md` and `lease-clauses-GA-sync.csv`, all from earlier work in this chat.
- **The attached files are the only source of truth.** Where earlier chat conflicts with them, the files win:
  - In earlier chat, `security-deposit-cap-ga` and `dv-lease-termination-ga` were active. The 2026-09-29 three-bucket scrub switched both off, and this pass works from that state.
  - Earlier chat produced a 1,125-row sync file. It is superseded by the 2,282-row master.
  - The GA log says section text came from Justia. This pass read the **official O.C.G.A.** instead, because Justia now shows a Cloudflare challenge, which I did not solve.

**Sources and method.**
- **Statutes:** official O.C.G.A. on advance.lexis.com (the General Assembly's free LexisNexis access). Its currency statement reads "Current through the 2026 Special Session of the General Assembly."
  - Lexis showed a CAPTCHA the first time a document opened. Taylor solved it in the browser; I did not.
  - Section text was copied out of the browser and checked by SHA-256 against the browser's own copy. Before hashing, en/em/thin/no-break spaces were normalised to plain spaces.
  - **Hash-matched and saved:**
    - Title 44 ch. 7: §§ 44-7-2, -6, -7, -13, -15, -16, -24, -33, -34, -50 (version in force), -52, -55, -80.
    - Other titles: §§ 44-14-341, 44-14-342, 44-13-1, 44-13-40, 44-3-87, 13-6-7, 13-6-11, 13-6-15, 10-12-3, 10-12-5, 10-12-8, 7-4-2.
  - **Browser hash only, text not saved (a weaker method):**
    - the rest of ch. 7, arts. 1-4 (every section crawled and hashed);
    - §§ 10-1-392, 10-1-393, 10-12-6, 10-12-7, 44-13-41 to 44-13-43.
- **Court rules:** gasupreme.us PDFs, parsed in the browser with pdf.js because the container shell can't reach outside hosts (403).
  - Uniform Magistrate Court Rules, read whole.
  - Uniform Superior Court Rule 21 (PDF dated 2026-04-09).
- **Constitution:** the Georgia Constitution is a separate searchable source on the same site. A known positive (Art. I, § I, Para. VIII) was returned.
- **Search battery:** every full-text search ran with a nonsense control (0 hits) and, where one exists, a known positive. Patterns and counts: B1-B15, K0-K2 and R1-R2 in the retro search notes.
- **Not read:** case law, local ordinances, federal law (CARES Act, E-SIGN), and Title 16 recording law.

### One line per rule

| Prompt item | Rule | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| 1 | 37 tenancy type | **Fixed** | §§ 44-7-6, 44-7-7 (a tenancy with no end date is at will: 60 days' notice from the landlord, 30 from the tenant); HB 404 § 6 ("entered into or renewed on or after July 1, 2024"; whether an older tenancy at will "renews" each period is unsettled); shared clauses with fixed-Term figures | `early-termination` (GA untagged) → `early-termination-ks` (GA tagged; its fixed-Term limb answers the "remaining Rent due under the Term" fee); renewal sentence ("apply to every tenancy") added to `edu-eviction-process-ga`, `edu-security-deposit-rules-ga`, `edu-landlord-maintenance-ga`; `returned-payments` "during the Term", see fix 22 |
| 2 | 39 eviction duties, court rules, public access | **Fixed** | §§ 44-7-50 to 44-7-59 re-read; UMCR read whole (6(D), 34.2, 46); USCR 21 | `edu-eviction-process-ga`: § 44-7-55(e) duty (off-duty officer at the landlord's sole cost; written notice to the sheriff at least 5 calendar days ahead) and UMCR 46(C) CARES Act 30-day notice for a "covered property" (federal statute not read, flagged). `edu-eviction-record-sealing-ga`: UMCR 6(D) and USCR 21 limitation of access, in force now (title drops "(from 2027)"). No post-writ animal duty; § 44-7-55(c) no-bailee rule already stated |
| 3 | 41 just cause | **Checked, no issue** | B1 "good cause" (30 hits), B2 "just/for cause" (3 hits): none for dwellings; start list (`security-deposit-use`, `no-alterations`, `early-termination`, `keys`, `holdover-ca`, `holdover-rate-ga`) screened | None. No just-cause rule, so no clause wording can turn the end of the term into a for-cause event |
| 4 | 41b `for-cause-eviction` row | **Fixed** | B3 conversion (§ 44-3-87), B4 tenant organization and rent escrow (§§ 44-7-24, 44-7-54 returned; no repair rent-escrow statute) | New `edu-no-for-cause-eviction-ga`: confirmed absence, with retaliation (3 months; tenant organization), the 120-day condominium-conversion window, and no rent-escrow bar |
| 5 | 43 cure promises | **Already covered in §2.1 and §6 (decision 3)** | `default-by-tenant`'s rent limb defers to "the time period specified by applicable law" (§ 44-7-50(c), 3 business days), so it adds no notice by contract; Georgia has no no-cure grounds to give away; `application-of-payments` against § 44-7-52 tender; `early-termination` landlord limb (see fix 23) | None |
| 6 | 45 electronic-transactions act | **Fixed** (note) | UETA §§ 10-12-3(b) (excludes only wills, Title 11 except § 11-1-306 and Arts. 2 and 2A, and UCITA), 10-12-5(b)-(c) (refusal right not waivable), 10-12-8 (retention; required delivery method; not waivable); B6 search | `electronic-signatures` GA segment: "UETA not read" replaced. No Georgia clause relies on electronic delivery of a statutory notice |
| 7 | 46 lease as the required notice | **Already covered in §4** | §§ 44-7-3, 44-7-31 (lease clauses serve), § 44-7-20 (separate notice before signing), § 44-7-33 (lists) | None |
| 8 | 47 knowing-use penalties | **Checked, no issue** | B5 (13 hits; none a penalty for knowingly using a prohibited lease term; § 44-7-2 attaches none). Screened `late-fee`, `early-termination`, `notices`, `common-area-use` | None |
| 9 | 48 separate documents | **Already covered in §4** | § 44-7-20 flood notice; § 44-7-33 lists | None |
| 10 | 49 collection-cost bans | **Checked, no issue** | B12 (71 hits; no residential ban); § 44-7-2(c) (one-way fee clauses void; the mutual sentence satisfies it); § 13-6-11 read; § 13-1-11's reach to leases is case law, not read | None (see fix 24) |
| 11 | 50 "the lease controls" | **Fixed** | § 44-7-1(b) usufruct "unless the contrary is agreed ... and so stated" (landlord-favourable default kept); § 44-7-50(d) agreed delivery methods (declined, rule 44, no change); § 44-7-15 (casualty clause exists); § 44-7-24(d)(1)(A), (d)(2)(C) (already offered); **§ 44-7-24(d)(2)(E)** (holdover after the landlord's end-of-term notice "as agreed upon in the written lease"); § 44-7-54 "under terms of the lease"; § 44-3-87(a) renewal notice | New optional `end-of-term-notice-ga` (CONDITIONAL) supplies the agreed notice the (d)(2)(E) safe harbour needs |
| 12 | 51 plain language, consumer protection | **Checked, no issue** | B15 plain-language search (47 hits, known positive § 10-4-107.1 returned, none for leases); FBPA § 10-1-392(a)(10) reaches leases by its text; the § 10-1-393(b) list has no blank-space or copy-at-signing practice for ordinary leases ((b)(20) is foreclosure-rescue only) | None here; the absence row is `edu-no-lease-completeness-rule-ga` (rule 27) |
| 13 | 53 figures and triggers | **Checked, no issue** | `rent-payment`, `returned-payments` (§ 13-6-15(b): $30 or 5% plus bank fees "when making written demand", already in its GA note), `default-by-tenant` (§ 44-7-50(c)), `surrender-end-of-term`, `holdover-ca`, `assistance-animal-accommodation-ga` | None (holdover trigger: fix 19) |
| 14 | 54 optional clauses | **Fixed** | B11 (§§ 44-13-1, 44-13-40 to -43); § 7-4-2, § 44-7-16; § 44-7-24; § 44-7-2(b)(4)-(6) | New `exemption-waiver-ga` (CONDITIONAL, off by default) + `edu-exemption-waiver-ga`; new `edu-legal-interest-ga` (contract interest rate lawful but **declined**: see the list below); `end-of-term-notice-ga` (item 11) |
| 15 | 54t tenant-caused damage | **Fixed** | `tenant-caused-damage-tn` read, not tagged; § 44-7-15 (no abatement for casualty the landlord did not cause; no exit); `casualty-termination-ga` excludes tenant-caused damage; § 44-7-34(a); § 44-7-13(a) (no tenant-fault carve-out; non-waivable, § 44-7-2(b)(1)) | New `tenant-caused-damage-ga` (CONDITIONAL): "Landlord will make repairs as Georgia law requires", not TN's "reasonable efforts to repair", so it can't be read as softening the repair duty; tenancy-at-will limb. New `edu-tenant-caused-damage-ga` |
| 16 | 35c constitution screen | **Checked, no issue** | K0-K2: no constitutional text reaches a private residential lease (Bill of Rights paragraphs restrain government; Art. III, § VI, Para. V(c) is a legislative power); B13: no tenant cannabis protection (low-THC registry only), so `smoking-policy` stands | None |
| 17 | 27 seven topics | **Fixed** | **Algorithmic rent:** Confirmed absent (B7 0 hits; terms alone 10). **Fees as rent:** Present (§ 44-7-50(c) names late fees, utilities and other charges; § 44-7-52 tender is "all rents"; § 44-7-54 rent and utility payments). **Landlord self-cure:** Not located (ch. 7 read whole; no known positive to test a code-wide pattern). **Lease completeness:** Confirmed absent (B9). **Quiet possession:** Confirmed absent as a statute (B8; case notes only, not read). **Statutory forms:** Present (§ 13-6-15(c) demand "in substantially the form which follows"; UMCR 46 CARES affidavit; no lease or eviction-notice form). **Tenant cameras:** Confirmed absent (B14 0 hits; B14b 7 hits, none landlord-tenant) | New `edu-no-algorithmic-rent-rule-ga`, `edu-fees-as-rent-ga`, `edu-no-landlord-self-cure-ga`, `edu-no-lease-completeness-rule-ga`, `edu-no-quiet-possession-statute-ga`, `edu-statutory-forms-ga`, `edu-no-tenant-camera-rule-ga` |
| 18 | 79 secondary-basis rows | **Fixed** | No GA row rests on secondary sources. **29 of 81 rows record no basis** (CITED or CONFIRMED_ABSENT in `lease-clause-citations-GA.csv` whose own GA notes don't say how the section was read): 27 shared-row GA segments plus `edu-dv-lease-termination-ga` and `edu-flood-disclosure-ga`. **Re-read section-open this pass:** 24 of the 29 (every ch. 7 section they cite, plus §§ 13-6-7, 13-6-15, 10-12-x). `electronic-signatures` and `early-termination` now record a basis. **Not re-read, listed for the sync:** `no-alterations` (§ 8-3-202), `parking-vehicle-rules` (§ 44-1-13), `guest-policy` (§§ 16-7-21.1, 44-11-30 to -33), `lead-based-paint` (§§ 31-41-12 to -18; federal), `edu-dv-lease-termination-ga` (§§ 16-5-90 to -94, 19-13-1). The GA log (§1.3) says all were drafted section-open | `edu-landlord-remedies-ga`: **defect fixed.** It said the general lien "dates only from the levy" (§§ 44-14-341/342), but § 44-7-80 says the lien for rent attaches when the § 44-7-71 affidavit is made. It now states both. Art. 4 sections earlier read by summary are now read section-open |
| 19 | Fix: `holdover-rate-ga` trigger | **Fixed** | (a) Georgia has no statutory holdover measure or start date (`edu-no-holdover-multiplier-ga`; § 44-7-50(a)), so "after the end of the Term" was a lawful contract trigger; liquidated damages under § 13-6-7 (penalty case law not read). (b) Extended | `holdover-rate-ga`: "after this Lease ends, whether at the end of the Term or on an earlier termination under this Lease or applicable law"; "before this Lease ended" |
| 20 | Fix: dangling pointers | **Fixed** | Own note segments scanned for pointers to switched-off rows | `due-at-signing` GA segment repointed to `edu-security-deposit-rules-ga`; `edu-security-deposit-rules-ga` history pointer marked "(switched off)". Provenance pointers in `edu-no-bed-bug-disclosure-ga`, `edu-no-mold-disclosure-ga`, `edu-dv-lease-termination-ga` ("split from", "moved from") are history and were left alone |
| 21 | Fix: scrub-trimmed `security-deposit-return-ga` | **Fixed** | § 44-7-33(c): the tenant is bound only "provided that the lists ... contain written notice of the tenant's duty to sign or to dissent". Required-content search: nothing else Georgia requires in the lease beyond `landlord-disclosure-ga` and `security-deposit-escrow-ga` | Restored: "The list will include written notice of Tenant's duty to sign it or to dissent from it." Deposit-cap builder check goes to backlog M.13 (deposit + pet deposit + last-month amount ≤ 2 × Rent, decision 1) |
| 22 | Fix: rule 62 vetting, `returned-payments` "during any 12-month period" | **Checked, no issue** | § 13-6-15 (fee and demand only; no count rule); ch. 7 has no payment-method rule | None. **Lawful in GA.** It also fixes the rule 37 "during the Term" point for tenancies at will |
| 23 | Fix: `early-termination` landlord limb, WY "or such shorter notice and cure period as applicable law permits" | **Checked, no issue** | § 44-7-50(a), (c) | None. **Lawful in GA**, and it would stop the limb's 30 + 10 days reading as a route that crowds out the 3-business-day nonpayment notice. Moot for GA: GA now uses `early-termination-ks` (item 1) |
| 24 | Fix: `default-by-tenant`, CO's proposal to delete "and reasonable costs and expenses" | **Checked, no issue** | § 44-7-2(c); B12; § 13-6-11 | None. **Lawful in GA.** It gives up only one-way contractual recovery of non-litigation collection costs, which no Georgia statute bars, and removes the risk that "expenses" is read as one-way attorney fees under § 44-7-2(c) |

### Calls I made myself (rule 76; Taylor can reverse any of them)
- **Offered as optional clauses**, never defaults, under rule 54's "offer every lawful one":
  - `end-of-term-notice-ga`: the § 44-7-24(d)(2)(E) safe harbour. It is the same family as the GA pass's `rent-escalation-ga` and `serious-misconduct-prohibition-ga`.
  - `exemption-waiver-ga`: § 44-13-40 lets the waiver sit "in the contract of indebtedness". It follows AL's precedent, Taylor's AL decision 4.
  - `tenant-caused-damage-ga`: rule 54t.
- **Declined, with an education row:** a contract interest rate. A month's rent is usually $3,000 or less, so § 7-4-2(a)(2)'s 16% ceiling applies. Whether a late fee is "interest" under (a)(3), and whether arrears are a "forbearance", are usury questions I did not read. MO took the same course.
- **Not offered, log only:**
  - jury waiver (no statute; enforceability is case law, not read);
  - shortening the § 44-7-7 at-will notices by lease (the statute is silent on contracting out; unsettled);
  - waivers of the dispossessory, distress or deposit rules (barred, § 44-7-2(b)(4)-(6)).

### Shared rows and propagation
- **No shared row's text was edited.** On shared rows, only the GA tag, the GA note segment and `last_checked` changed:
  - `early-termination`: GA untagged, segment appended, `last_checked` 2026-10-01;
  - `early-termination-ks`: GA tagged, segment appended;
  - `due-at-signing` and `electronic-signatures`: GA segment edited.
- These are states-only and note-only changes (s5a.1), so no propagation is owed. No display collision: `early-termination-ks` supersedes `early-termination`, and only the former is GA-tagged.
- **Rule 62 verdicts for the sync (fixes 22-24):** GA vouches for all three proposed shared edits:
  - `returned-payments` "during any 12-month period";
  - the WY limb on `early-termination`, which GA no longer uses;
  - deleting "and reasonable costs and expenses" from `default-by-tenant`.

### Findings worth Taylor's attention
1. **Legal watch:** §§ 44-14-341/342 date the landlord's general lien from the levy, but § 44-7-80 attaches the lien for rent from the § 44-7-71 affidavit. The two statutes conflict on priority; the case law was not read. `edu-landlord-remedies-ga` tells landlords to assume the later date.
2. **Federal flag:** UMCR 46(C) makes the CARES Act 30-day notice a Georgia filing condition for "covered property". The library has not read the federal definition.
3. **Citation format, not fixed (out of scope):** `edu-dv-lease-termination-ga` and `edu-flood-disclosure-ga` cite "O.C.G.A. 44-7-23" and "O.C.G.A. 44-7-20" without "§". A one-character sync fix.

### Delta and checks
`lease-clauses-GA-retro-delta.csv` has **25 rows: 11 changed and 14 new.**
- **Changed, own rows:** `holdover-rate-ga`, `security-deposit-return-ga`, `edu-landlord-remedies-ga`, `edu-eviction-process-ga`, `edu-eviction-record-sealing-ga`, `edu-security-deposit-rules-ga`, `edu-landlord-maintenance-ga`.
- **Changed, shared rows:** `due-at-signing`, `electronic-signatures`, `early-termination`, `early-termination-ks`.
- **New:**
  - `edu-no-for-cause-eviction-ga`;
  - `end-of-term-notice-ga`;
  - `exemption-waiver-ga`, `edu-exemption-waiver-ga`;
  - `tenant-caused-damage-ga`, `edu-tenant-caused-damage-ga`;
  - `edu-legal-interest-ga`;
  - the seven rule 27 rows.
- **Merged into the master:**
  - 2,296 rows;
  - GA active 104 → **118** (67 lease clauses, 51 education);
  - every other state's active count unchanged.
- **Integrity checks passed:**
  - no duplicate ids;
  - no dangling `supersedes`;
  - no GA display collision;
  - all 17 fields on every row;
  - header byte-identical to the master;
  - CRLF throughout, no bare LF.
- **Every delta row:** VERIFIED, `last_checked` 2026-10-01. New rows also have `effective_from` 2026-10-01 and record their basis in `notes`.

### Proposed SOP changes
1. **Rule 19, form phrases:** add "form which follows" and "substantially the form" to the statutory-form search terms. Georgia's § 13-6-15(c) says "in substantially the form which follows", which none of the listed phrases ("following form", "substantially as follows", "as follows:") matches. Two GA patterns built on them missed the known positive.
2. **Rule 19, chained proximity on Lexis:** on the LexisNexis public-access codes, a pattern chaining three or more w/n terms dropped true hits. Prefer an AND of two OR-groups, and keep the known-positive test mandatory for each pattern.
3. **Rule 37, applicability by renewal:** where a statute applies to leases "entered into or renewed on or after" a date (Georgia's HB 404 § 6), say how it reaches a periodic or at-will tenancy that began earlier. If that is unsettled, tell landlords to follow the rule for every tenancy.
4. **Rule 39, federal notices in court rules:** check the uniform court rules for federal pre-filing conditions, not only timing and public access. Georgia's UMCR 46 makes the CARES Act 30-day notice a filing condition for a "covered property".
5. **Rule 54, retaliation safe harbours:** a safe harbour that turns on something "as agreed upon in the written lease" is itself an optional clause. Georgia's § 44-7-24(d)(2)(E) is an example: an end-of-term notice.
6. **Rule 79, or rule 39 widened:** where two statutes give different dates or priorities for the same right, state both, and flag the pair for the legal watch. This is the statute-versus-statute version of rule 39's statute-versus-court-rule rule; Georgia's lien sections are an example.
7. **Sources (Fwd):**
   - When a host copy is behind a bot challenge, use the official code's own site rather than solving it.
   - When a document-access CAPTCHA appears, ask Taylor to solve it.
   - When the shell's egress is blocked, parse court-rule PDFs in the browser (pdf.js from cdnjs) and save the text with a hash check.

## Retro sync (Claude Code, 2026-10-02)

- **Merged** with `merge-delta.py --base 5321f8c` (the commit the pass was staged from; the attached CSV is byte-identical to it): 11 rows updated, 14 new, no refusals. GA active 104 → 118; GA shows 67 lease clauses with no same-topic pairs; every other state's set unchanged.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check: not done at sync.** From Claude Code's shell, Justia returns 403 and the official O.C.G.A. on Lexis needs a CAPTCHA, so no Georgia text could be read; the retro's own reads were hash-matched against the official code (see Sources and method above).
- **Fix 3 (citation format) applied:** `edu-dv-lease-termination-ga` and `edu-flood-disclosure-ga` now cite "O.C.G.A. § 44-7-23" and "O.C.G.A. § 44-7-20".
- **Citations file:** `early-termination` removed (GA untagged); 15 rows added (`early-termination-ks` and the 14 new rows; 3 confirmed-absence rows); the newly cited sections of the 9 changed rows appended (among them §§ 44-7-55(e), 44-7-71, 44-7-80, the UETA sections and the court rules).
- **Legal watch:** two manual recheck items added to the GA config: the court rules (UMCR 6(D), 34.2, 46; USCR 21; the CARES Act "covered property" definition unread) and the lien-priority conflict (§§ 44-14-341/342 vs § 44-7-80).
- **Rule 62 answers recorded:** GA vouches for all three pending shared edits (`returned-payments` "during any 12-month period", WY's `early-termination` limb, CO's `default-by-tenant` deletion). None can merge yet: each still waits on other tagged states (`docs/backlog.md`).
- **Rule 79 rows not re-read (5):** `no-alterations`, `parking-vehicle-rules`, `guest-policy`, `lead-based-paint`, `edu-dv-lease-termination-ga`. Listed in the backlog for GA's next circle-back; the original GA log (§1.3) says they were drafted section-open.
- **Builder:** the Georgia deposit cap (deposit + pet deposit + last-month amount ≤ 2 × Rent, decision 1) added to backlog M.13.
- **SOP 1.19:** all seven proposals adopted (rules 14, 19, 31, 37, 39, 54); see the change log. GA's conformance column is complete except the eviction-fee example.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Circle-back checks (SOP 1.37), 2026-10-03

**Chat:** Georgia's own chat, circle-back (rule 8) · **Settings:** Opus, high effort. **Research mode not used** (no rule 9 trigger). Scalpel, not a re-audit (rule 1): only the two targeted fixes in the prompt were checked. The prompt lists **0 [Retro] rules** for GA at 1.37.

**Setup.**
- **Input:** `lease-clauses.csv` has **2,876 rows** (17 columns, CRLF), as the prompt says.
- **Old outputs deleted:** `lease-clause-decision-log-GA-retro.md` and `lease-clauses-GA-retro-delta.csv`, both from the 1.18 retro.
- **The attached files are the only source of truth.** Earlier chat described the 2,282-row library and the 1.18 delta before it was synced. Those are superseded by the attached master, which already carries the 1.18 changes (Retro sync, 2026-10-02).

**Sources.**
- The governing sections are the official O.C.G.A. texts saved and SHA-256 matched at the 1.18 retro (advance.lexis.com, "Current through the 2026 Special Session of the General Assembly"): §§ 44-7-2, 44-7-50 (version in force), 44-7-52, 44-7-55, 44-3-87. § 44-7-54 was read verbatim at the same retro.
- A fresh read of §§ 44-7-53 and 44-7-56 hit Lexis's document CAPTCHA. I didn't solve it, and neither verdict depends on those two sections, so I didn't ask Taylor to.
- Not read: case law and local ordinances.

### One line per check

| Prompt item | Rule | Verdict | What was read | Rows changed |
|---|---|---|---|---|
| — | [Retro] rules at 1.37 | **None listed for GA** | — | — |
| Fix 1 | 53 (as amended 1.23): holdover trigger after a nonpayment termination | **Fixed** | `edu-no-fee-caps-ga`: no late-fee cap, so North Carolina's reason doesn't apply. **Georgia's own reason** is that its nonpayment route is a cure route (detail below). § 44-7-55(a): after judgment the landlord still gets "all rents due and ... any other claim relating to the dispute" | `holdover-rate-ga`: "(other than a termination for nonpayment of Rent)" added after "an earlier termination under this Lease or applicable law", same wording as `holdover-rate-nc`. Other earlier terminations keep the charge: a non-rent default, a tenancy at will ended under § 44-7-7, and `end-of-term-notice-ga`. `last_checked` 2026-10-03 |
| Fix 2(1) | 62 vetting: `surrender-end-of-term` + "unless applicable law entitles Tenant to remain" (CA) | **Checked, no issue: vouched** | §§ 44-3-87(a), (i); 44-7-52(a); 44-7-54(a)-(b); 44-7-55(a); the GA note on the row ("no just-cause rule in Georgia") | None (the vouch is below, not in the row's notes, per rule 62) |
| Fix 2(2) | 62 vetting: `default-by-tenant` no-cure carve-out moved into its own sentence reaching both limbs (MN; ND and CA support) | **Checked, no issue: vouched** | §§ 44-7-50(c), (d); 44-7-52(a); 44-7-2(b)(4); HB 404 § 6 applicability (GA log §1.1) | None |

**Fix 1, why Georgia excludes the nonpayment case.**
- Before filing, the landlord must give a notice "to vacate or pay all past due rent, late fees, utilities, and other charges" within three business days (§ 44-7-50(c)).
- After filing, the tenant may tender "all rents allegedly owed plus the cost of the dispossessory warrant" within seven days of service. That tender "shall be a complete defense to the action", and the landlord must accept it once in any 12 months (§ 44-7-52(a)).
- So a daily charge running from a nonpayment termination would do one of two things: raise the statutory price of staying above rent plus warrant costs, or be charged for the same days as the rent the tenant tenders.
- The tenant's rights under the dispossessory article cannot be waived or "otherwise avoid[ed]" by the lease (§ 44-7-2(b)(4)).
- Penalty case law was not read.

### Vouches given (for §9, Propagation notes)

- **`surrender-end-of-term`, CA's qualifier "unless applicable law entitles Tenant to remain": vouched, no change needed for GA.**
  - Georgia has no just-cause rule (`edu-no-for-cause-eviction-ga`), but its statutes let a tenant stay past the end of a lease in four cases:
    - a tenant of a conversion condominium may not be required to vacate during the 120-day notice period, except for nonpayment, waste or disturbing conduct (§ 44-3-87(a), (i));
    - a timely tender of rent and warrant costs is a complete defense to a nonpayment case (§ 44-7-52(a));
    - while a case is pending the tenant stays as long as registry payments are made (§ 44-7-54(a)-(b));
    - the writ takes effect only seven days after judgment, subject to the appeal section (§ 44-7-55(a)).
  - The current flat "will surrender ... immediately" therefore overstates the tenant's duty in those cases. It doesn't give the landlord any self-help, since possession still comes only through the dispossessory article (§ 44-7-2(b)(4)), so GA doesn't need its own override. The qualified wording is lawful and accurate in Georgia.
- **`default-by-tenant`, the no-cure carve-out in its own sentence reaching both limbs: vouched, no change needed for GA.**
  - The carve-out applies only "where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure".
  - For a lease entered into or renewed on or after 2024-07-01, Georgia never permits that for nonpayment: § 44-7-50(c) requires the notice to vacate or pay before filing, delivered as § 44-7-50(d) requires. So the carve-out cannot reach that notice.
  - For an older tenancy that hasn't renewed, Georgia requires no pre-suit cure notice, so nothing required is dropped. The library's education rows still tell landlords to give the notice for every tenancy.
  - The post-filing tender (§ 44-7-52(a)) is statutory and cannot be avoided by the lease (§ 44-7-2(b)(4)), so the edit can't remove it.
  - Georgia has no statutory no-cure grounds, so the sentence has nothing else to reach (GA log §6, decision 3).

### Delta and checks

`lease-clauses-GA-retro-delta.csv` has **one row: `holdover-rate-ga`** (`bodyText`, `notes`, `last_checked` 2026-10-03; VERIFIED; basis unchanged, CONSTRAINED_TERM). No new rows, and no shared row changed.

The file has 17 fields per row, a header byte-identical to the master, and CRLF throughout with no bare LF. No change to GA's active count (118).

Citations file: no new section beyond those `holdover-rate-ga` already lists, except § 44-7-50(c), § 44-7-52(a), § 44-7-55(a) and § 44-7-2(b)(4), which the sync may append to that row.

### Proposed SOP changes

1. **Rule 53 (the 1.23 nonpayment sentence):** widen the reason beyond a late-fee cap. Add: "or where the nonpayment route lets the tenant keep possession by paying (a pay-or-vacate notice, a tender defense, a right to redeem), since a daily charge from the termination then raises the statutory price of staying or duplicates the rent tendered for the same days." Georgia has no late-fee cap, but §§ 44-7-50(c) and 44-7-52(a) raise the same problem. As currently worded, the rule would have left Georgia's nonpayment case in.

## Circle-back sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 2b10851`: 1 row updated (`holdover-rate-ga` now excludes a termination for nonpayment of Rent, the same wording as `holdover-rate-nc`), no new rows, nothing refused. GA active 118, unchanged.
- **Citations file:** `holdover-rate-ga` gains § 44-7-50(c), § 44-7-52(a), § 44-7-55(a) and § 44-7-2(b)(4); `last_checked` 2026-10-03.
- **Rule 62:** GA vouched for CA's `surrender-end-of-term` qualifier and MN's `default-by-tenant` sentence; both recorded in the backlog tally.
- **Guards:** all pass. **Statute spot-check:** not possible from here. Georgia's official code is only on Lexis, which serves a CAPTCHA, the same as at the 2026-10-02 retro sync. The pass relied on texts it saved from Lexis and hash-matched at that retro.
- **SOP 1.38:** GA's rule 53 proposal adopted, narrowed to pay-to-stay rights that run after the termination.

## Propagated shared-row edit, 2026-10-04 (at the PA circle-back sync)

- `returned-payments` (CO, WY, KS, NE, MN, ND, SD, OH, AZ, GA, PA): AZ's proposal merged once every tagged state had vetted it, PA last. "If more than two of Tenant's payments during the Term are returned" now reads "during any 12-month period", so the count works for a month-to-month tenancy, which has no Term. Uniform; no GA override. GA's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no GA override. GA's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where GA law lets Landlord proceed without a cure opportunity. Uniform; no GA override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for GA. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any GA row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach GA's law; to be confirmed at GA's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.

# Topic gaps pass (end-of-run consistency pass, 2026-11-06): Desktop's running record

## GA topic gaps: running record

Pass: Georgia topic gaps (GAPS-PROMPT.md, SOP 1.95), started 2026-11-06. Sources: official O.C.G.A. on advance.lexis.com ("Current through the 2026 Special Session of the General Assembly"); U.S. Code from uscode.house.gov (through Pub. L. 119-138); eCFR (titles 24, 40 as of 2026-11-05); legis.ga.gov for acts.

### Batch 1: deposits, fees and money limits (delivered 2026-11-06)

31 of 258 topics. Georgia items 1 (attorney fees, liquidated damages) and 3 (deposits) answered; items 5-8 concluded in log §4; item 9 act list compiled from Lexis history lines and legis.ga.gov. Question to Taylor: OK to hand the `early-termination-ga` flat one-month override (fields in log §4 item 7) to Claude Code at sync.

### Batches 2-3 in part: dispossessory, notices, lease terms, family violence, misc started (delivered 2026-11-06)

90 of 258 topics. Article 3 read whole (both § 44-7-50 versions). Tag GA on `rent-concession-wi`. No new clauses. Case-law-only topics (waiver by acceptance, breach materiality, self-help damages) state the cautious course.

### Batches 3-12: remaining topics (delivered 2026-11-06)

All 258 of 258 topics answered: 240 new GA education rows and 30 GA tags on shared clauses; no new GA lease clauses (every Georgia rule either already has a GA clause or imposes nothing the lease must say). Key finds: O.C.G.A. § 36-74-30(b) (no local rental registration; inspections only on probable cause; proposed fix to `edu-local-preemption-ga` in log §6); § 12-5-180.1 (water and sewer rebilling capped at cost plus a reasonable billing fee, terms disclosed before signing); § 8-3-202(a)(8), (b) (public-housing firearm rule; small-owner exemptions); § 15-10-43 (employee may represent an entity in magistrate court); § 2-1-7 (foreign-adversary possessory interests near military sites); § 10-6A-6(b) (broker disclosure); § 41-2-7(b) (prima-facie unfitness finding); PTFA (12 U.S.C. § 5220 note). Late in the pass the site raised a CAPTCHA on section opens (not solved); rows relying on sections not read say so.

### Independent check: two rounds (delivered 2026-11-06)

Round 1: all 270 rows in four slices (errata r1a-r1g, 216 changes; 12 ERRORs including the § 13-5-30(b) signature rule, § 41-2-7(b), the sprinkler 'as built' rule and the EV-charger residence exclusion). Searches the checker found missing were run and saved before fixing. Round 2: the 129 rows edited after round 1 in two slices (errata r2a, r2b, 44 changes; 1 ERROR, the § 30-4-3(b) service-dog fee bar). The battery preamble's control wording was corrected in every row. 33 rows edited after round 2 are listed in log §5. Final: 270 quotations matched by script (4 HB 404 line-number artifacts checked by hand).

### Rows so far (240 new, 30 tags)

- `security-deposit-cap` → `edu-security-deposit-cap-ga`
- `security-deposit-nonwaiver` → `edu-security-deposit-nonwaiver-ga`
- `security-deposit-penalty` → `edu-security-deposit-penalty-ga`
- `deposit-last-month-rent` → `edu-deposit-last-month-rent-ga`
- `pet-fees` → `edu-pet-fees-ga`
- `nonrefundable-deposit-separate-notice` → `edu-no-nonrefundable-separate-notice-ga`
- `security-deposit-standards` → `edu-no-deposit-standards-rule-ga`
- `deposit-installments` → `edu-no-deposit-installments-ga`
- `deposit-surrender-notice` → `edu-deposit-no-move-out-notice-condition-ga`
- `expedited-deposit-disposition` → `edu-no-expedited-deposit-disposition-ga`
- `holding-deposit` → `edu-holding-deposit-ga`
- `fee-in-lieu-of-deposit` → `edu-no-fee-in-lieu-of-deposit-rule-ga`
- `application-fees` → `edu-application-fees-ga`
- `utility-deposit-return` → `edu-no-utility-deposit-rule-ga`
- `fee-transparency` → `edu-no-fee-transparency-rule-ga`
- `required-fees` → `edu-no-required-fee-list-ga`
- `fee-unprovided-service` → `edu-no-fee-unprovided-service-rule-ga`
- `late-fee-limit` → `edu-no-late-fee-limit-ga`
- `attorney-fees` → `edu-attorney-fees-ga`
- `liquidated-damages` → `edu-liquidated-damages-ga`
- `collection-fee` → `edu-collection-fee-ga`
- `notice-service-fee` → `edu-no-notice-fee-rule-ga`
- `eviction-penalty-clause-ban` → `edu-no-eviction-fee-ban-ga`
- `limitation-of-actions` → `edu-limitation-of-actions-ga`
- `binding-arbitration` → `edu-binding-arbitration-ga`
- `deposit-cost-schedule` → `edu-no-deposit-cost-schedule-ga`
- `security-deposit-on-sale` → `edu-security-deposit-on-sale-ga`
- `carpet-cleaning` → `edu-carpet-cleaning-ga`
- `statutory-caps` → `edu-statutory-caps-ga`
- `sale-or-management-change` → `edu-sale-or-management-change-ga`
- `abandonment-and-mitigation` → `edu-abandonment-and-mitigation-ga`
- `actual-notice-method` → `edu-actual-notice-method-ga`
- `confession-of-judgment` → `edu-no-confession-of-judgment-lease-ga`
- `cure-and-eviction-grounds` → `edu-eviction-grounds-no-cure-ga`
- `eviction-hardship-stay` → `edu-no-eviction-hardship-stay-ga`
- `expedited-criminal-eviction` → `edu-no-expedited-criminal-eviction-ga`
- `forfeiture-redemption` → `edu-nonpayment-tender-defense-ga`
- `redemption` → `edu-redemption-ga`
- `good-cause-notice` → `edu-no-good-cause-notice-ga`
- `landlord-remedies-termination` → `edu-landlord-remedies-on-termination-ga`
- `lockout-for-rent-delinquency` → `edu-no-lockout-for-rent-ga`
- `nonpayment-notice` → `edu-nonpayment-notice-ga`
- `notice-to-quit-waiver` → `edu-notice-to-quit-not-waivable-ga`
- `notice-to-vacate-additional-terms` → `edu-no-notice-to-vacate-extra-terms-ga`
- `possession-bond` → `edu-no-possession-bond-ga`
- `post-eviction-property` → `edu-post-eviction-property-ga`
- `rent-demand-bar` → `edu-no-rent-demand-bar-ga`
- `rent-into-court-counterclaim` → `edu-rent-into-court-and-counterclaims-ga`
- `rent-receipt-anti-waiver` → `edu-repair-duty-not-severable-ga`
- `self-help-eviction` → `edu-self-help-eviction-ga`
- `social-security-defense` → `edu-no-benefit-delay-defense-ga`
- `tenant-bankruptcy` → `edu-tenant-bankruptcy-ga`
- `waiver-by-acceptance` → `edu-waiver-by-acceptance-ga`
- `landlord-breach-remedy` → `edu-landlord-breach-remedies-ga`
- `tenancy-at-will` → `edu-tenancy-at-will-basics-ga`
- `statutory-early-termination` → `edu-statutory-early-termination-ga`
- `cold-weather-vacate-notice` → `edu-no-cold-weather-eviction-rule-ga`
- `infirmity-termination` → `edu-no-infirmity-termination-ga`
- `trespass-notice` → `edu-trespass-notice-ga`
- `law-enforcement-cooperation` → `edu-no-law-enforcement-cooperation-rule-ga`
- `written-notice-required` → `edu-written-notices-ga`
- `entity-landlord-court-representation` → `edu-entity-landlord-representation-ga`
- `eviction-service-party` → `edu-dispossessory-service-ga`
- `jury-waiver` → `edu-jury-waiver-ga`
- `minor-tenant-filing` → `edu-minor-tenants-ga`
- `seasonal-tenancy` → `edu-seasonal-and-hotel-stays-ga`
- `usufructuary-lessor` → `edu-usufruct-lease-ga`
- `purpose-limitation` → `edu-illegal-purpose-lease-void-ga`
- `statute-of-frauds-lease-term` → `edu-statute-of-frauds-lease-ga`
- `lease-term-limitation` → `edu-lease-formalities-ga`
- `unconscionability` → `edu-no-unconscionability-statute-ga`
- `consumer-protection-act` → `edu-fair-business-practices-act-ga`
- `part5-nonwaivable` → `edu-nonwaivable-landlord-tenant-rules-ga`
- `exculpatory-clauses` → `edu-exculpatory-clauses-ga`
- `double-letting` → `edu-no-double-letting-rule-ga`
- `hoa` → `edu-association-rules-bind-tenants-ga`
- `truth-in-renting` → `edu-no-truth-in-renting-act-ga`
- `rights-responsibilities-guide` → `edu-no-tenant-rights-guide-ga`
- `tenant-rights-statement` → `edu-no-tenant-rights-statement-ga`
- `lease-type-parity` → `edu-no-lease-type-parity-ga`
- `tenant-right-to-organize` → `edu-tenant-organizing-ga`
- `single-family-zone-lease-limit` → `edu-no-single-family-rental-limit-ga`
- `accessory-dwelling-unit` → `edu-no-adu-statute-ga`
- `tenant-statutory-duties` → `edu-tenant-statutory-duties-ga`
- `prohibited-acts-renter` → `edu-prohibited-acts-renter-ga`
- `automatic-renewal` → `edu-automatic-renewal-ga`
- `lease-registration` → `edu-lease-recording-ga`
- `dv-qualifying-documents` → `edu-dv-qualifying-documents-ga`
- `dv-eviction-protection` → `edu-no-dv-eviction-defense-ga`
- `dv-lockchange` → `edu-no-dv-lock-change-ga`
- `dv-deposit-timing` → `edu-dv-deposit-timing-ga`
- `dv-protection-order-chapter-moved` → `edu-dv-order-statutes-current-ga`
- `dv-confidentiality` → `edu-dv-address-confidentiality-ga`
- `sex-offender-disclosure` → `edu-no-sex-offender-disclosure-ga`
- `sex-offender-occupancy` → `edu-sex-offender-residency-ga`
- `conversion-notice` → `edu-condominium-conversion-ga`
- `municipal-utility-lien` → `edu-utility-liens-tenant-bills-ga`
- `pest-control-notice` → `edu-no-pest-control-notice-ga`
- `bed-bug-cooperation` → `edu-no-bed-bug-cooperation-rule-ga`
- `waterbed` → `edu-no-waterbed-rule-ga`
- `smart-access` → `edu-no-smart-access-rule-ga`
- `shutdown-rent-protection` → `edu-no-shutdown-rent-protection-ga`
- `portfolio-thresholds` → `edu-portfolio-threshold-ga`
- `health-district-rental-rules` → `edu-no-health-district-rental-rules-ga`
- `senior-housing-work-card` → `edu-no-senior-housing-staff-rule-ga`
- `tenant-employee-housing` → `edu-employee-housing-ga`
- `scope` → `edu-scope-ga`
- `construction-liens` → `edu-construction-liens-tenant-work-ga`
- `cannabis` → `edu-cannabis-ga`
- `appliances-excluded` → `edu-no-appliance-rule-ga`
- `stove-refrigerator` → `edu-no-stove-refrigerator-duty-ga`
- `alt-housing` → `edu-no-relocation-duty-ga`
- `alarm-tampering-fee` → `edu-alarm-tampering-ga`
- `firearms` → `edu-firearms-in-leases-ga`
- `guest-rights` → `edu-no-guest-rights-statute-ga`
- `family-child-care` → `edu-no-family-child-care-right-ga`
- `fire-code-standard` → `edu-fire-code-standard-ga`
- `tax-escalation` → `edu-tax-escalation-ga`
- `tenant-repair-agreement` → `edu-tenant-repair-agreements-ga`
- `tenant-screening` → `edu-tenant-screening-ga`
- `tenant-records` → `edu-no-tenant-records-rule-ga`
- `tenant-confidential-information` → `edu-no-tenant-information-disclosure-rule-ga`
- `rent-reporting` → `edu-no-rent-reporting-rule-ga`
- `pet-eviction-fact-sheet` → `edu-no-pet-eviction-fact-sheet-ga`
- `parking-rules-notice` → `edu-no-parking-statute-ga`
- `unbundled-parking` → `edu-no-unbundled-parking-rule-ga`
- `veterans-incentive` → `edu-no-veterans-rental-incentive-ga`
- `tenant-display-rights` → `edu-no-display-rights-statute-ga`
- `religious-cultural-display` → `edu-no-religious-display-right-ga`
- `political-access` → `edu-no-political-access-right-ga`
- `telecom-access` → `edu-no-telecom-access-rule-ga`
- `water-heater-temperature` → `edu-no-water-heater-temperature-rule-ga`
- `emergency-contact` → `edu-no-emergency-contact-rule-ga`
- `knowing-use-penalty` → `edu-no-knowing-use-penalty-ga`
- `rental-inspection` → `edu-rental-inspection-ga`
- `condemned-premises-rent-bar` → `edu-condemned-premises-ga`
- `inspection-condemnation-disclosure` → `edu-no-inspection-order-disclosure-ga`
- `substandard-property-receivership` → `edu-no-housing-receivership-ga`
- `inspection-notice-penalty` → `edu-deposit-list-forfeiture-ga`
- `habitability-statement` → `edu-habitability-statement-ga`
- `habitability-waiver` → `edu-habitability-not-waivable-ga`
- `habitability-modifiable` → `edu-habitability-modifiable-ga`
- `habitability-materiality` → `edu-no-habitability-materiality-rule-ga`
- `habitability-presumption` → `edu-no-habitability-presumption-ga`
- `confirmed-absences-habitability` → `edu-confirmed-absences-habitability-ga`
- `heating` → `edu-no-heat-standard-ga`
- `maintenance-duty-shift` → `edu-repair-duty-not-shiftable-ga`
- `promises-to-repair` → `edu-no-written-repair-promise-rule-ga`
- `designated-repairer` → `edu-no-designated-repairer-rule-ga`
- `tenant-repair-remedies` → `edu-tenant-repair-remedies-ga`
- `repair-notice` → `edu-no-repair-notice-rule-ga`
- `repair-cost-termination` → `edu-no-repair-cost-termination-ga`
- `repair-escrow-exemption-notice` → `edu-no-repair-escrow-ga`
- `frozen-standard-incorporation` → `edu-code-edition-at-construction-ga`
- `sanitary-code-variance` → `edu-no-sanitary-code-variance-ga`
- `casualty-and-mitigation-waivable` → `edu-casualty-terms-ga`
- `environmental-event-termination` → `edu-no-environmental-termination-ga`
- `disaster-duties` → `edu-no-disaster-tenancy-rule-ga`
- `disability-accommodation` → `edu-disability-accommodation-ga`
- `children-occupancy` → `edu-children-occupancy-ga`
- `protected-class-inquiry-ban` → `edu-advertising-and-inquiries-ga`
- `student-housing` → `edu-student-housing-ga`
- `smoke-drift-waiver` → `edu-no-smoke-free-statute-ga`
- `drug-free-housing-addendum` → `edu-no-drug-free-housing-program-ga`
- `communal-land-lease-approval` → `edu-no-communal-land-approval-ga`
- `lease-notice-initial-requirement` → `edu-no-initials-rule-ga`
- `sfr-occupancy-disclosure` → `edu-no-disclosure-placement-rule-ga`
- `lease-type-size` → `edu-no-lease-type-size-ga`
- `plain-language` → `edu-no-plain-language-law-ga`
- `plain-language-consumer-statement` → `edu-no-consumer-restriction-statement-ga`
- `translation-duty` → `edu-no-translation-duty-ga`
- `lease-content-requirements` → `edu-lease-content-requirements-ga`
- `required-disclosures` → `edu-required-disclosures-ga`
- `optional-lease-terms` → `edu-option-to-purchase-ga`
- `tpa-notice` → `edu-no-tenant-purchase-right-ga`
- `tpa-exemption-notice` → `edu-no-tpa-exemption-notice-ga`
- `tpa-sunset` → `edu-no-sunset-statutes-ga`
- `subsidy-late-fee` → `edu-no-subsidy-late-fee-rule-ga`
- `subsidized-inspection-refusal` → `edu-no-voucher-inspection-rule-ga`
- `subsidy-habitability-proration` → `edu-no-subsidy-proration-rule-ga`
- `ordnance-demolition-meter-disclosures` → `edu-no-ordnance-demolition-disclosure-ga`
- `military-air-zone-disclosure` → `edu-no-military-zone-disclosure-ga`
- `shoreline-access-disclosure` → `edu-no-shoreline-disclosure-ga`
- `defective-drywall-disclosure` → `edu-no-drywall-disclosure-ga`
- `asbestos-hazards` → `edu-no-asbestos-tenant-notice-ga`
- `hazardous-contamination-disclosure` → `edu-no-contamination-disclosure-ga`
- `common-area-lighting` → `edu-no-common-area-lighting-rule-ga`
- `balcony-inspection` → `edu-no-balcony-inspection-rule-ga`
- `steam-radiator-covers` → `edu-no-radiator-cover-rule-ga`
- `key-control-policy` → `edu-no-key-control-statute-ga`
- `employee-screening` → `edu-no-employee-screening-rule-ga`
- `private-well-testing` → `edu-no-private-well-testing-ga`
- `recycling-notice` → `edu-no-recycling-notice-ga`
- `portable-cooling-device` → `edu-no-portable-cooling-right-ga`
- `portable-solar` → `edu-no-portable-solar-right-ga`
- `prop65-rental-warning` → `edu-no-prop65-equivalent-ga`
- `utility-transfer` → `edu-no-utility-transfer-rule-ga`
- `foreclosure` → `edu-foreclosure-ga`
- `foreclosure-disclosure` → `edu-no-foreclosure-disclosure-ga`
- `renters-insurance-rules` → `edu-renters-insurance-rules-ga`
- `tenant-insurance-claims` → `edu-no-tenant-claims-rule-ga`
- `landlord-liability-insurance` → `edu-no-landlord-insurance-mandate-ga`
- `nonresident-owner-agent` → `edu-nonresident-owner-agent-ga`
- `term-change-notice` → `edu-term-change-notice-ga`
- `confirmed-absences-misc` → `edu-confirmed-absences-misc-ga`
- `confirmed-absences-outside-title` → `edu-confirmed-absences-outside-title-ga`
- `nuisance` → `edu-nuisance-ga`
- `guarantor-renewal` → `edu-guarantor-renewal-ga`
- `fire-sprinkler-duty` → `edu-no-residential-sprinkler-mandate-ga`
- `sprinkler-disclosure` → `edu-no-sprinkler-disclosure-ga`
- `utility-submetering-disclosure` → `edu-water-submetering-ga`
- `utility-apportionment` → `edu-utility-apportionment-ga`
- `utility-allowance-cap` → `edu-utility-cost-cap-ga`
- `utility-disclosure-attachment` → `edu-utility-disclosure-attachment-ga`
- `electric-submetering-disclosure` → `edu-no-electric-submetering-rule-ga`
- `utility-interruption-submeter` → `edu-no-utility-interruption-submeter-rule-ga`
- `utility-landlord-account` → `edu-landlord-utility-account-ga`
- `utility-shutoff-statute` → `edu-no-utility-shutoff-rule-ga`
- `utility-disconnection-notice-authorization` → `edu-no-utility-notice-authorization-ga`
- `meter-conservation-charge` → `edu-no-meter-conservation-charge-ga`
- `adverse-proceeding-notice` → `edu-attornment-and-adverse-claims-ga`
- `special-district-representation` → `edu-no-special-district-tenant-rule-ga`
- `ev-charging-end-of-tenancy` → `edu-no-ev-charging-end-of-tenancy-rule-ga`
- `ev-charging-shared-area` → `edu-no-ev-shared-area-rule-ga`
- `property-tax-rent-disclosure` → `edu-no-property-tax-rent-statement-ga`
- `security-devices` → `edu-security-devices-ga`
- `window-guards` → `edu-no-window-guard-rule-ga`
- `lead-state-notices` → `edu-lead-state-notices-ga`
- `lead-safe-certification` → `edu-no-lead-safe-certificate-ga`
- `association-obligations-disclosure` → `edu-no-association-obligations-lease-disclosure-ga`
- `certificate-of-occupancy-disclosure` → `edu-no-certificate-of-occupancy-disclosure-ga`
- `disaster-displaced-guests` → `edu-no-disaster-guest-rule-ga`
- `ev-charging-requirements` → `edu-ev-charging-stations-ga`
- `farmland-hunting-rights` → `edu-hunting-rights-on-leased-land-ga`
- `foreign-ownership` → `edu-foreign-ownership-ga`
- `home-business` → `edu-no-home-business-statute-ga`
- `other-landlord-facilities` → `edu-elevator-duties-ga`
- `pool-safety` → `edu-pool-rules-ga`
- `service-animal-misrepresentation` → `edu-service-dog-misrepresentation-ga`
- `rent-tax` → `edu-rent-tax-ga`
- tag GA on `nonrefundable-fees-wv`
- tag GA on `carpet-cleaning-ar`
- tag GA on `rent-concession-wi`
- tag GA on `government-fee-reimbursement-ky`
- tag GA on `tenant-caused-fines-as`
- tag GA on `lease-copy-receipt-hi`
- tag GA on `informal-dispute-resolution-or`
- tag GA on `electronic-notice-ma`
- tag GA on `tenant-portal-mn`
- tag GA on `showing-notice-la`
- tag GA on `scheduled-services-entry-la`
- tag GA on `extended-absence-notice-ks`
- tag GA on `furnishings-included-la`
- tag GA on `appliances-excluded-la`
- tag GA on `detector-care-la`
- tag GA on `pest-cooperation-la`
- tag GA on `animal-care-access-vi`
- tag GA on `energy-data-release-wy`
- tag GA on `rent-installments-or`
- tag GA on `owner-occupancy-termination-ar`
- tag GA on `association-approval-la`
- tag GA on `firearm-rules-la`
- tag GA on `cannabis-restrictions-ak`
- tag GA on `eminent-domain-vi`
- tag GA on `no-liens-ar`
- tag GA on `prohibited-acts-renter-wy`
- tag GA on `rules-wi`
- tag GA on `rental-inspection-cooperation-mn`
- tag GA on `guaranty-as`
- tag GA on `farmland-sporting-rights-co`

### Key statute wording relied on

- O.C.G.A. § 44-7-30.1: 'No landlord shall demand or receive a security deposit in an amount that exceeds the equivalent of two months' rent.' (Ga. L. 2024, p. 91, § 4/HB 404, eff. 2024-07-01; HB 404 § 6: applies to leases 'entered into or renewed on or after July 1, 2024')
- O.C.G.A. § 44-7-34(a): 'No security deposit shall be retained to cover ordinary wear and tear'; retention allowed 'for repair work or cleaning contracted for by the tenant with third parties' and 'for actual damages caused by the tenant's breach, provided that the landlord attempts to mitigate the actual damages'
- O.C.G.A. § 44-7-36: ten-or-fewer-unit natural-person owners exempt from §§ 44-7-31, 44-7-32, 44-7-33 and 44-7-35 only (not 44-7-30.1 or 44-7-34); not if managed by third persons for a fee
- O.C.G.A. § 44-7-3(a): change of owner/agent/manager names and addresses must be given to each tenant 'within 30 days after the change either in writing or by posting a notice of the change in a conspicuous place'
- O.C.G.A. § 13-6-7: agreed damages bind 'unless the agreement violates some principle of law'
- O.C.G.A. § 9-9-2(c)(7): Georgia Arbitration Code does not apply to consumer transactions as defined in § 10-1-392 (which covers leases of real property for personal, family or household purposes)
- O.C.G.A. § 7-4-2(a)(1)(A): legal rate 7 percent simple where no written rate; O.C.G.A. § 44-7-16: rent bears interest from the due date
- FEDERAL: 15 U.S.C. § 1692f(1) bars a debt collector collecting any amount 'unless such amount is expressly authorized by the agreement creating the debt or permitted by law'; 9 U.S.C. § 2 (FAA) read
- O.C.G.A. § 44-7-50(d): demand for possession and three-day notice 'shall be posted in a sealed envelope conspicuously on the door of the property and delivered via any additional method or methods agreed upon in the rental agreement'
- O.C.G.A. § 44-7-52(a): tender within seven days of service is a complete defense; landlord is required to accept it 'only once in any 12 month period'
- O.C.G.A. § 44-7-55(c): landlord 'shall not be a bailee' of property removed under a writ; after execution it is 'regarded as abandoned'
- O.C.G.A. § 44-7-14.1(b): unlawful to 'knowingly and willfully' suspend utilities (cooling, heat, light, water) until final disposition of the dispossessory; fine up to $500
- O.C.G.A. § 44-7-2(b)(1)-(7): non-waivable list (repair duty, repair liability, § 36-61-11 ordinances, Articles 2, 3, 4, Title 9 ch. 11)
- O.C.G.A. § 44-7-23(e): family-violence termination 'shall not be waived or modified by the agreement of the parties under any circumstances'
- O.C.G.A. § 44-3-87(a): conversion notice at least 120 days before requiring the tenant to vacate
- O.C.G.A. § 36-60-17(d), (f): no water, gas, sewer or electric lien on real property unless the owner incurred the charges

### Open items

- Taylor: OK to hand the `early-termination-ga` flat one-month override (fields in log §4 item 7) to Claude Code at sync?
- Taylor: OK for Claude Code to apply the `edu-local-preemption-ga` replacement in log §6 (O.C.G.A. § 36-74-30(b), no local rental registration)?
- Unread because of the site CAPTCHA (rows say so): O.C.G.A. §§ 8-3-201, 8-3-205, 10-7-21, 10-7-24, 11-2-102, 11-2A-103, 16-12-191 (current), 16-12-200, 30-4-1, 31-41-15, 41-2-2, 41-3-1.1, 41-3-9, 44-3-93, 44-3-109, 44-3-222, 44-3-226, 44-3-235, 48-4-45, 48-5-9, 48-8-2, 50-18-152, 50-18-154. § 10-7-24 may bear on `guaranty-as`.
- Act PDFs other than HB 404 were not opened (log §4 item 9).

# Topic gaps pass (end-of-run consistency pass, 2026-11-06): Desktop's log

## Georgia topic gaps: log (cumulative, interim)

Pass: Georgia topic gaps, end-of-run consistency pass (GAPS-PROMPT.md, SOP 1.95). All 258 topics answered (batches 1 to 12). This copy precedes the independent check in §5. Dates: research 2026-11-06. Rows are dated `effective_from` and `last_checked` 2026-11-06.

### §1 Sources, channel and currency

- **O.C.G.A.** Official Code of Georgia Annotated on advance.lexis.com, the General Assembly's free LexisNexis public access, read in the built-in browser. Site currency line on every section read: "Current through the 2026 Special Session of the General Assembly." Sections are read whole; each section's text (to the start of its annotations) is saved with its history line and SHA-256 matched to the browser copy. Where Lexis shows two versions of a section (for example O.C.G.A. § 44-7-50, until and from January 1, 2027), both are saved and named by version. The first document open triggered a CAPTCHA, which Taylor cleared on 2026-11-06; nothing was solved by Claude.
- **Searches.** Lexis terms-and-connectors full-text search of the annotated code (hits include case notes and editor's notes). Quoted phrases are honoured: "ten or fewer rental units" returns 1 hit (O.C.G.A. § 44-7-36) and the reversed "ten fewer rental units" returns 0. A nonsense control ("zqxvbnmwt" and per-batch variants) returns 0 in every batch. Each battery for an absence is paired with a positive pattern that reaches the target section.
- **Session laws.** legis.ga.gov (Georgia General Assembly) for bill status, act numbers and act PDFs. HB 404 (2024, Safe at Home Act, Act 392) PDF read whole; § 6: "This Act shall apply to residential lease agreements that are entered into or renewed on or after July 1, 2024."
- **Federal.** U.S. Code from uscode.house.gov (Office of the Law Revision Counsel; site line "current through Public Law 119-138 (November 3, 2026)"; the site notes it is "currently operating in a temporary format"). C.F.R. from ecfr.gov (Titles 24 and 40 up to date as of 2026-11-05). Saved whole and SHA-256 matched as for the O.C.G.A. Federal citations in rows are marked FEDERAL:.
- **Local ordinances** are flagged, not resolved (O.C.G.A. § 44-7-19 and the local-rule rows).
- Not used: no secondary source, no memory. A section that could not be reached would make its row NEEDS_REVIEW; none so far.


Sections saved this pass: 261 O.C.G.A. sections and 38 federal sections; every saved text SHA-256 matched to the browser copy.

O.C.G.A. sections saved: 1-2-11, 1-3-1, 1-3-7, 2-1-7, 3-10-5, 5-6-47, 7-4-2, 8-2-4, 8-2-20, 8-2-25, 8-2-38, 8-2-101, 8-3-11, 8-3-17, 8-3-200, 8-3-202, 8-3-203, 9-3-22, 9-3-23, 9-3-24, 9-3-25, 9-3-26, 9-3-110, 9-3-112, 9-8-3, 9-9-2, 9-11-4, 9-11-17, 9-11-38, 9-11-39, 9-11-55, 9-11-60, 9-12-18, 9-13-176, 10-1-220 [Effective January 1, 2028], 10-1-224 [Effective January 1, 2028], 10-1-228 [Effective January 1, 2028], 10-1-392, 10-1-393, 10-1-396, 10-1-399, 10-6-2, 10-7-1, 10-7-3, 10-7-22, 10-12-3, 10-12-7, 10-12-8, 10-6A-5, 10-6A-6, 11-2-302, 11-2A-108, 12-5-180.1, 13-1-8, 13-1-11, 13-1-15, 13-3-20, 13-3-21, 13-4-60, 13-5-30, 13-5-31, 13-6-5, 13-6-7, 13-6-11, 13-6-15, 13-7-1, 13-8-1, 13-8-2, 13-12-1, 13-12-2, 13-12-3, 13-12-4, 14-2-504, 15-10-2 [Effective January 1, 2027], 15-10-41, 15-10-43, 15-10-45, 15-10-87, 15-19-50, 15-19-51, 15-19-52, 16-3-23, 16-5-90, 16-5-94, 16-5-95, 16-7-21.1, 16-7-21, 16-7-23, 16-11-127, 16-11-135, 16-11-173, 16-12-82, 16-12-190 [Effective July 1, 2026], 16-12-191 [Effective until July 1, 2026], 16-13-1, 16-13-30, 16-15-7, 19-13-1, 19-13-3, 19-13-4, 24-14-26, 25-2-12, 25-2-13, 25-2-40, 25-11-2, 25-11-8, 27-3-1 [Effective July 1, 2026], 30-4-3 [Effective July 1, 2026], 30-4-4 [Effective July 1, 2026], 31-2-13, 31-41-12, 31-41-13, 31-41-14, 31-41-18, 31-45-2, 31-45-3, 31-45-12, 31-45-13, 31-2A-4, 33-24-4, 36-31-5, 36-60-17, 36-61-11, 36-66-7, 36-74-30, 39-1-1, 41-1-1, 41-2-1, 41-2-5, 41-2-7, 41-2-8, 41-2-9, 41-2-10, 41-2-11, 41-3-1, 42-1-12, 42-1-15, 43-21-1, 43-21-3, 43-21-3.1, 43-21-3.2, 43-40-20, 44-2-9, 44-3-76, 44-3-80 [Effective July 1, 2026], 44-3-86, 44-3-87, 44-3-106, 44-3-111, 44-3-232 [Effective until January 1, 2027], 44-5-60, 44-5-81, 44-5-169, 44-6-86, 44-6-100, 44-6-101, 44-6-103, 44-6-105, 44-6-106, 44-7-1, 44-7-2, 44-7-3, 44-7-4, 44-7-5, 44-7-6, 44-7-7, 44-7-8, 44-7-9, 44-7-10, 44-7-11, 44-7-12, 44-7-13, 44-7-14, 44-7-14.1, 44-7-15, 44-7-16, 44-7-17, 44-7-18, 44-7-19, 44-7-20, 44-7-21, 44-7-22, 44-7-23, 44-7-24, 44-7-25, 44-7-30, 44-7-30.1, 44-7-31, 44-7-32, 44-7-33, 44-7-34, 44-7-35, 44-7-36, 44-7-37, 44-7-49, 44-7-50 [Effective January 1, 2027], 44-7-50 [Effective until January 1, 2027], 44-7-51, 44-7-52, 44-7-53, 44-7-54, 44-7-55, 44-7-56, 44-7-57, 44-7-58, 44-7-59, 44-7-70, 44-7-71, 44-7-72, 44-7-73, 44-7-74, 44-7-75, 44-7-76, 44-7-77, 44-7-78, 44-7-79, 44-7-80, 44-7-81, 44-7-82, 44-7-100, 44-7-101, 44-7-102, 44-7-103, 44-7-110, 44-7-111, 44-7-112, 44-7-113, 44-7-114, 44-7-115 [Effective July 1, 2026], 44-7-116, 44-7-117, 44-7-118, 44-7-119, 44-8-1, 44-11-33, 44-14-162, 44-14-162.1, 44-14-162.2, 44-14-162.4, 44-14-162.3, 44-14-232, 44-14-233, 44-14-344, 44-14-349, 44-14-361, 46-3-326, 46-5-7, 48-8-30, 48-13-50.2 [Effective until July 1, 2026], 48-13-50.2 [Effective July 1, 2026], 48-13-51 [Effective July 1, 2026], 50-18-150 [Effective July 1, 2026], 50-18-151 [Effective July 1, 2026], 50-18-153 [Effective July 1, 2026], 50-18-155 [Effective July 1, 2026], 50-40-1, 51-1-6, 51-3-1, 51-9-3, 51-12-5.1, 51-12-5.

Federal sections saved: 11 USC 362, 11 USC 365, 12 USC 5220, 15 USC 1681a, 15 USC 1681b, 15 USC 1681m, 15 USC 1692a, 15 USC 1692f, 15 USC 7001, 15 USC 9058, 24 CFR 100.202, 24 CFR 100.203, 24 CFR 100.204, 24 CFR 100.7, 24 CFR 35.88, 24 CFR 35.92, 24 CFR 5.2005, 24 CFR 5.2009, 24 CFR 982.308, 24 CFR 982.310, 24 CFR 982.453, 34 USC 12491, 40 CFR 745.107, 40 CFR 745.113, 42 USC 1437f, 42 USC 3602, 42 USC 3603, 42 USC 3604, 42 USC 3605, 42 USC 3606, 42 USC 3607, 42 USC 3617, 42 USC 4852d, 50 USC 3911, 50 USC 3951, 50 USC 3953, 50 USC 3955, 9 USC 2.


### §2 Topics answered

- `abandonment-and-mitigation`: `edu-abandonment-and-mitigation-ga`, Absent, O.C.G.A. § 13-6-5; O.C.G.A. § 44-7-34(a)
- `accessory-dwelling-unit`: `edu-no-adu-statute-ga`, Absent, absence shown by battery (§3)
- `actual-notice-method`: `edu-actual-notice-method-ga`, Present, O.C.G.A. § 44-7-50(d)
- `adverse-proceeding-notice`: `edu-attornment-and-adverse-claims-ga`, Absent, O.C.G.A. § 44-7-9
- `alarm-tampering-fee`: `edu-alarm-tampering-ga`, Present in part, O.C.G.A. § 25-2-40(a)(2); O.C.G.A. § 13-6-7.
- `alarm-tampering-fee`: `detector-care-la`, tagged, O.C.G.A. § 25-2-40(f)(2); O.C.G.A. § 13-6-7.
- `alt-housing`: `edu-no-relocation-duty-ga`, Absent, O.C.G.A. § 44-7-15.
- `animal-care-access`: `animal-care-access-vi`, tagged, absence shown by battery (§3)
- `appliances-excluded`: `edu-no-appliance-rule-ga`, Absent, O.C.G.A. § 44-7-13(a)
- `appliances-excluded`: `appliances-excluded-la`, tagged, O.C.G.A. §§ 44-7-2(b)(1)
- `application-fees`: `edu-application-fees-ga`, Absent, absence shown by battery (§3)
- `asbestos-hazards`: `edu-no-asbestos-tenant-notice-ga`, Absent, absence shown by battery (§3)
- `association-obligations-disclosure`: `edu-no-association-obligations-lease-disclosure-ga`, Absent, O.C.G.A. § 44-3-111; O.C.G.A. § 44-3-76.
- `attorney-fees`: `edu-attorney-fees-ga`, Present, O.C.G.A. § 44-7-2(c); O.C.G.A. § 13-6-11; O.C.G.A. § 44-7-35(c)
- `automatic-renewal`: `edu-automatic-renewal-ga`, Present, O.C.G.A. § 13-12-1(4); O.C.G.A. § 13-12-2; O.C.G.A. § 13-12-3(a)
- `balcony-inspection`: `edu-no-balcony-inspection-rule-ga`, Absent, absence shown by battery (§3)
- `bed-bug-cooperation`: `edu-no-bed-bug-cooperation-rule-ga`, Absent, O.C.G.A. § 44-7-13.
- `bed-bug-cooperation`: `pest-cooperation-la`, tagged, O.C.G.A. §§ 44-7-2(b)(1)
- `binding-arbitration`: `edu-binding-arbitration-ga`, Present, O.C.G.A. § 9-9-2(c); O.C.G.A. § 10-1-392(a)(10); O.C.G.A. § 44-7-2(b)(4)
- `cannabis`: `edu-cannabis-ga`, Absent, absence shown by battery (§3)
- `cannabis`: `cannabis-restrictions-ak`, tagged, absence shown by battery (§3)
- `carpet-cleaning`: `edu-carpet-cleaning-ga`, Absent, O.C.G.A. § 44-7-34(a); O.C.G.A. § 44-7-33(a)
- `carpet-cleaning`: `carpet-cleaning-ar`, tagged, O.C.G.A. § 44-7-34(a)
- `casualty-and-mitigation-waivable`: `edu-casualty-terms-ga`, Present, O.C.G.A. § 44-7-15; O.C.G.A. § 44-7-2(b); O.C.G.A. § 13-6-5
- `certificate-of-occupancy-disclosure`: `edu-no-certificate-of-occupancy-disclosure-ga`, Absent, absence shown by battery (§3)
- `children-occupancy`: `edu-children-occupancy-ga`, Present, O.C.G.A. § 8-3-202(a)(1); O.C.G.A. §§ 8-3-201
- `cold-weather-vacate-notice`: `edu-no-cold-weather-eviction-rule-ga`, Absent, O.C.G.A. § 44-7-55(a); O.C.G.A. § 44-7-14.1(b)
- `collection-fee`: `edu-collection-fee-ga`, Absent, O.C.G.A. §§ 13-6-7
- `common-area-lighting`: `edu-no-common-area-lighting-rule-ga`, Absent, absence shown by battery (§3)
- `communal-land-lease-approval`: `edu-no-communal-land-approval-ga`, Absent, absence shown by battery (§3)
- `condemned-premises-rent-bar`: `edu-condemned-premises-ga`, Present in part, O.C.G.A. § 41-2-9(a)(4); O.C.G.A. § 41-2-8(2); O.C.G.A. § 36-61-11
- `confession-of-judgment`: `edu-no-confession-of-judgment-lease-ga`, Present, O.C.G.A. § 9-12-18(a); O.C.G.A. § 44-7-2(b)(4); O.C.G.A. § 44-7-51(b)
- `confirmed-absences-habitability`: `edu-confirmed-absences-habitability-ga`, Summary, O.C.G.A. § 44-7-13; O.C.G.A. § 44-7-2(b)(1); O.C.G.A. §§ 44-7-14
- `confirmed-absences-misc`: `edu-confirmed-absences-misc-ga`, Summary, O.C.G.A. § 13-1-15(e); O.C.G.A. § 13-6-15; O.C.G.A. § 44-7-36
- `confirmed-absences-outside-title`: `edu-confirmed-absences-outside-title-ga`, Summary, O.C.G.A. § 36-74-30(b)
- `construction-liens`: `edu-construction-liens-tenant-work-ga`, Present in part, O.C.G.A. § 44-14-361(b)
- `construction-liens`: `no-liens-ar`, tagged, O.C.G.A. § 44-14-361(b)
- `consumer-protection-act`: `edu-fair-business-practices-act-ga`, Present, O.C.G.A. § 10-1-392(a)(10); O.C.G.A. § 10-1-393(a); O.C.G.A. § 10-1-399(a)
- `conversion-notice`: `edu-condominium-conversion-ga`, Present, O.C.G.A. § 44-3-87(a)
- `cure-and-eviction-grounds`: `edu-eviction-grounds-no-cure-ga`, Present, O.C.G.A. § 44-7-50(a); O.C.G.A. § 44-7-52(a)
- `defective-drywall-disclosure`: `edu-no-drywall-disclosure-ga`, Absent, absence shown by battery (§3)
- `deposit-cost-schedule`: `edu-no-deposit-cost-schedule-ga`, Absent, O.C.G.A. § 44-7-34(a); O.C.G.A. § 44-7-33(b)(1); O.C.G.A. § 44-7-36
- `deposit-installments`: `edu-no-deposit-installments-ga`, Absent, absence shown by battery (§3)
- `deposit-last-month-rent`: `edu-deposit-last-month-rent-ga`, Present, O.C.G.A. § 44-7-30(3); O.C.G.A. § 44-7-34(a)
- `deposit-surrender-notice`: `edu-deposit-no-move-out-notice-condition-ga`, Absent, O.C.G.A. § 44-7-33(b)(2); O.C.G.A. § 44-7-34(a); O.C.G.A. § 44-7-2(b)(6)
- `designated-repairer`: `edu-no-designated-repairer-rule-ga`, Absent, O.C.G.A. § 44-7-3(a)
- `disability-accommodation`: `edu-disability-accommodation-ga`, Present, O.C.G.A. § 8-3-202(a)(7)(B)(i); O.C.G.A. § 44-7-30.1.
- `disaster-displaced-guests`: `edu-no-disaster-guest-rule-ga`, Absent, absence shown by battery (§3)
- `disaster-duties`: `edu-no-disaster-tenancy-rule-ga`, Absent, O.C.G.A. § 44-7-15.
- `double-letting`: `edu-no-double-letting-rule-ga`, Absent, O.C.G.A. § 44-7-1(a)
- `drug-free-housing-addendum`: `edu-no-drug-free-housing-program-ga`, Absent, O.C.G.A. § 44-7-24(d)(2)(C)
- `dv-confidentiality`: `edu-dv-address-confidentiality-ga`, Present in part, O.C.G.A. § 50-18-151(a); O.C.G.A. § 50-18-153(a); O.C.G.A. § 44-7-23
- `dv-deposit-timing`: `edu-dv-deposit-timing-ga`, Absent, O.C.G.A. § 44-7-33(b)(1); O.C.G.A. § 44-7-34(a); O.C.G.A. § 44-7-23(d)
- `dv-eviction-protection`: `edu-no-dv-eviction-defense-ga`, Absent, O.C.G.A. § 44-7-23
- `dv-lockchange`: `edu-no-dv-lock-change-ga`, Absent, O.C.G.A. § 19-13-4; O.C.G.A. § 44-7-23
- `dv-protection-order-chapter-moved`: `edu-dv-order-statutes-current-ga`, Present, O.C.G.A. § 44-7-23(a)(1); O.C.G.A. § 19-13-1; O.C.G.A. § 19-13-4(a)(2)
- `dv-qualifying-documents`: `edu-dv-qualifying-documents-ga`, Present, O.C.G.A. § 44-7-23(a)(1); O.C.G.A. § 44-7-23
- `electric-submetering-disclosure`: `edu-no-electric-submetering-rule-ga`, Absent, absence shown by battery (§3)
- `emergency-contact`: `edu-no-emergency-contact-rule-ga`, Absent, O.C.G.A. § 44-7-3(a)
- `eminent-domain`: `eminent-domain-vi`, tagged, absence shown by battery (§3)
- `employee-screening`: `edu-no-employee-screening-rule-ga`, Absent, absence shown by battery (§3)
- `energy-data-release`: `energy-data-release-wy`, tagged, absence shown by battery (§3)
- `entity-landlord-court-representation`: `edu-entity-landlord-representation-ga`, Present, O.C.G.A. § 15-10-43(i); O.C.G.A. § 15-19-51(a)(1); O.C.G.A. § 15-19-50(1)
- `environmental-event-termination`: `edu-no-environmental-termination-ga`, Absent, O.C.G.A. § 44-7-15.
- `ev-charging-end-of-tenancy`: `edu-no-ev-charging-end-of-tenancy-rule-ga`, Absent, absence shown by battery (§3)
- `ev-charging-requirements`: `edu-ev-charging-stations-ga`, Present, O.C.G.A. § 10-1-224(a); O.C.G.A. §§ 10-1-220
- `ev-charging-shared-area`: `edu-no-ev-shared-area-rule-ga`, Absent, absence shown by battery (§3)
- `eviction-hardship-stay`: `edu-no-eviction-hardship-stay-ga`, Absent, O.C.G.A. § 44-7-55(a); O.C.G.A. § 44-7-56(b); O.C.G.A. § 9-11-60
- `eviction-penalty-clause-ban`: `edu-no-eviction-fee-ban-ga`, Absent, O.C.G.A. § 13-6-7; O.C.G.A. § 44-7-2(b)(4)
- `eviction-service-party`: `edu-dispossessory-service-ga`, Present, O.C.G.A. § 44-7-51(a); O.C.G.A. § 50-18-151(c)(2); O.C.G.A. §§ 50-18-150
- `exculpatory-clauses`: `edu-exculpatory-clauses-ga`, Present, O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 44-7-14; O.C.G.A. § 13-8-2(b)
- `expedited-criminal-eviction`: `edu-no-expedited-criminal-eviction-ga`, Absent, O.C.G.A. §§ 44-7-50(a); O.C.G.A. §§ 44-7-13
- `expedited-deposit-disposition`: `edu-no-expedited-deposit-disposition-ga`, Absent, O.C.G.A. §§ 44-7-33(b)
- `extended-absence-notice`: `extended-absence-notice-ks`, tagged, absence shown by battery (§3)
- `family-child-care`: `edu-no-family-child-care-right-ga`, Absent, absence shown by battery (§3)
- `farmland-hunting-rights`: `edu-hunting-rights-on-leased-land-ga`, Present, O.C.G.A. § 27-3-1(a); O.C.G.A. § 27-4-30
- `farmland-hunting-rights`: `farmland-sporting-rights-co`, tagged, O.C.G.A. § 27-3-1(a)
- `fee-in-lieu-of-deposit`: `edu-no-fee-in-lieu-of-deposit-rule-ga`, Absent, O.C.G.A. § 44-7-30(1); O.C.G.A. § 44-7-32(a)
- `fee-transparency`: `edu-no-fee-transparency-rule-ga`, Absent, absence shown by battery (§3)
- `fee-unprovided-service`: `edu-no-fee-unprovided-service-rule-ga`, Absent, absence shown by battery (§3)
- `fire-code-standard`: `edu-fire-code-standard-ga`, Present, O.C.G.A. § 8-2-20(9)(B)(i); O.C.G.A. § 8-2-25(a); O.C.G.A. § 25-2-40(a)
- `fire-sprinkler-duty`: `edu-no-residential-sprinkler-mandate-ga`, Present, O.C.G.A. § 8-2-4; O.C.G.A. §§ 25-11-2; O.C.G.A. § 25-11-2(9)
- `firearms`: `edu-firearms-in-leases-ga`, Absent, O.C.G.A. § 16-11-173(b)(1); O.C.G.A. § 16-11-135(a); O.C.G.A. § 16-11-127(c)
- `firearms`: `firearm-rules-la`, tagged, O.C.G.A. § 16-11-135
- `foreclosure`: `edu-foreclosure-ga`, Absent, O.C.G.A. §§ 44-14-162; O.C.G.A. § 44-7-32(a); O.C.G.A. § 44-7-50(a)
- `foreclosure-disclosure`: `edu-no-foreclosure-disclosure-ga`, Absent, O.C.G.A. § 10-1-393(a)
- `foreign-ownership`: `edu-foreign-ownership-ga`, Present, O.C.G.A. § 2-1-7(b)(1); O.C.G.A. § 1-2-11(b)
- `forfeiture-redemption`: `edu-nonpayment-tender-defense-ga`, Present, O.C.G.A. § 44-7-52(a); O.C.G.A. §§ 44-7-49
- `frozen-standard-incorporation`: `edu-code-edition-at-construction-ga`, Present, O.C.G.A. § 41-2-8(1)
- `furnishings-included`: `furnishings-included-la`, tagged, O.C.G.A. § 44-7-13(a); O.C.G.A. § 44-7-33; O.C.G.A. § 44-7-36
- `good-cause-notice`: `edu-no-good-cause-notice-ga`, Absent, O.C.G.A. § 44-7-7; O.C.G.A. § 44-7-24
- `government-fee-reimbursement`: `government-fee-reimbursement-ky`, tagged, O.C.G.A. § 36-74-30(b); O.C.G.A. § 44-7-2(b)
- `governmental-fines`: `tenant-caused-fines-as`, tagged, O.C.G.A. § 25-2-40(f)(2); O.C.G.A. § 13-6-7.
- `guarantor-renewal`: `edu-guarantor-renewal-ga`, Present, O.C.G.A. § 10-7-3; O.C.G.A. § 10-7-22; O.C.G.A. § 13-5-30(a)(2)
- `guarantor-renewal`: `guaranty-as`, tagged, O.C.G.A. § 13-5-30(a)(2); O.C.G.A. § 10-7-3; O.C.G.A. § 10-7-22
- `guest-rights`: `edu-no-guest-rights-statute-ga`, Absent, absence shown by battery (§3)
- `habitability-materiality`: `edu-no-habitability-materiality-rule-ga`, Absent, O.C.G.A. § 44-7-13; O.C.G.A. § 44-7-2(b)(1)
- `habitability-modifiable`: `edu-habitability-modifiable-ga`, Absent, O.C.G.A. § 44-7-13; O.C.G.A. § 44-7-2(b)(1)
- `habitability-presumption`: `edu-no-habitability-presumption-ga`, Absent, O.C.G.A. § 41-2-7(b); O.C.G.A. § 44-7-24(f); O.C.G.A. § 44-7-13
- `habitability-statement`: `edu-habitability-statement-ga`, Present, O.C.G.A. § 44-7-13; O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 41-2-10(a)
- `habitability-waiver`: `edu-habitability-not-waivable-ga`, Present, O.C.G.A. § 44-7-13; O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 44-7-2(b)(3)
- `hazardous-contamination-disclosure`: `edu-no-contamination-disclosure-ga`, Absent, absence shown by battery (§3)
- `health-district-rental-rules`: `edu-no-health-district-rental-rules-ga`, Absent, absence shown by battery (§3)
- `heating`: `edu-no-heat-standard-ga`, Absent, O.C.G.A. § 44-7-14.1(a); O.C.G.A. § 44-7-13; O.C.G.A. § 44-7-2(b)(1)
- `hoa`: `edu-association-rules-bind-tenants-ga`, Present, O.C.G.A. § 44-3-76; O.C.G.A. § 44-5-60(d)(6); O.C.G.A. §§ 44-3-93
- `hoa`: `association-approval-la`, tagged, O.C.G.A. § 44-3-76; O.C.G.A. § 44-5-60(d)(6)
- `holding-deposit`: `edu-holding-deposit-ga`, Absent, O.C.G.A. § 44-7-30(3)
- `home-business`: `edu-no-home-business-statute-ga`, Absent, absence shown by battery (§3)
- `infirmity-termination`: `edu-no-infirmity-termination-ga`, Absent, O.C.G.A. § 44-7-8; O.C.G.A. § 44-6-86
- `informal-dispute-resolution`: `informal-dispute-resolution-or`, tagged, O.C.G.A. § 44-7-2(b)(4)
- `inspection-condemnation-disclosure`: `edu-no-inspection-order-disclosure-ga`, Absent, O.C.G.A. § 41-2-8(6)(E); O.C.G.A. § 41-2-9(a)(3); O.C.G.A. § 10-6A-6(b)(1)
- `inspection-notice-penalty`: `edu-deposit-list-forfeiture-ga`, Present, O.C.G.A. § 44-7-35(a); O.C.G.A. § 44-7-33(c); O.C.G.A. § 44-7-36.
- `jury-waiver`: `edu-jury-waiver-ga`, Present in part, O.C.G.A. § 15-10-41(a); O.C.G.A. § 9-11-38; O.C.G.A. § 9-11-39(a)
- `key-control-policy`: `edu-no-key-control-statute-ga`, Absent, O.C.G.A. § 44-7-4(a)
- `knowing-use-penalty`: `edu-no-knowing-use-penalty-ga`, Absent, O.C.G.A. § 44-7-2(b); O.C.G.A. § 10-1-393(a)
- `landlord-breach-remedy`: `edu-landlord-breach-remedies-ga`, Present in part, O.C.G.A. §§ 44-7-2(b)(1); O.C.G.A. § 44-7-35; O.C.G.A. § 44-7-24
- `landlord-liability-insurance`: `edu-no-landlord-insurance-mandate-ga`, Absent, O.C.G.A. § 36-74-30(b)
- `landlord-remedies-termination`: `edu-landlord-remedies-on-termination-ga`, Present, O.C.G.A. § 44-7-55(a); O.C.G.A. § 44-7-51(c); O.C.G.A. § 44-7-10
- `late-fee-limit`: `edu-no-late-fee-limit-ga`, Absent, O.C.G.A. § 13-6-7.; O.C.G.A. §§ 44-7-110
- `law-enforcement-cooperation`: `edu-no-law-enforcement-cooperation-rule-ga`, Absent, O.C.G.A. § 44-7-24(d)(2)(C); O.C.G.A. § 44-7-23(c); O.C.G.A. § 44-7-23
- `lead-safe-certification`: `edu-no-lead-safe-certificate-ga`, Absent, O.C.G.A. § 31-41-15
- `lead-state-notices`: `edu-lead-state-notices-ga`, Present in part, O.C.G.A. § 31-41-13; O.C.G.A. § 31-41-14(a); O.C.G.A. § 31-41-18
- `lease-content-requirements`: `edu-lease-content-requirements-ga`, Present, O.C.G.A. §§ 44-7-3(a)
- `lease-copy`: `lease-copy-receipt-hi`, tagged, absence shown by battery (§3)
- `lease-notice-initial-requirement`: `edu-no-initials-rule-ga`, Absent, O.C.G.A. § 43-21-3.2; O.C.G.A. § 9-9-2(c)(8)
- `lease-registration`: `edu-lease-recording-ga`, Present, O.C.G.A. § 44-2-9; O.C.G.A. § 44-5-169
- `lease-term-limitation`: `edu-lease-formalities-ga`, Absent, O.C.G.A. § 13-5-30(a); O.C.G.A. § 10-6-2
- `lease-type-parity`: `edu-no-lease-type-parity-ga`, Absent, O.C.G.A. §§ 44-7-6
- `lease-type-size`: `edu-no-lease-type-size-ga`, Absent, absence shown by battery (§3)
- `limitation-of-actions`: `edu-limitation-of-actions-ga`, Present, O.C.G.A. § 9-3-24; O.C.G.A. § 9-3-25; O.C.G.A. § 9-3-26
- `liquidated-damages`: `edu-liquidated-damages-ga`, Present, O.C.G.A. § 13-6-7; O.C.G.A. § 44-7-34(a)
- `lockout-for-rent-delinquency`: `edu-no-lockout-for-rent-ga`, Present, O.C.G.A. § 44-7-2(b)(4); O.C.G.A. § 44-7-10; O.C.G.A. § 44-7-14.1(b)
- `maintenance-duty-shift`: `edu-repair-duty-not-shiftable-ga`, Present, O.C.G.A. § 44-7-2(b)(1)
- `meter-conservation-charge`: `edu-no-meter-conservation-charge-ga`, Absent, O.C.G.A. § 12-5-180.1(a)
- `military-air-zone-disclosure`: `edu-no-military-zone-disclosure-ga`, Absent, absence shown by battery (§3)
- `minor-tenant-filing`: `edu-minor-tenants-ga`, Present, O.C.G.A. § 39-1-1(a); O.C.G.A. § 13-3-20(a); O.C.G.A. § 13-3-21.
- `municipal-utility-lien`: `edu-utility-liens-tenant-bills-ga`, Present, O.C.G.A. § 36-60-17(a)
- `nonpayment-notice`: `edu-nonpayment-notice-ga`, Present, O.C.G.A. § 44-7-50(b); O.C.G.A. § 44-7-52(a); O.C.G.A. §§ 44-7-49
- `nonrefundable-deposit-notice`: `nonrefundable-fees-wv`, tagged, O.C.G.A. § 44-7-30(1); O.C.G.A. § 44-7-30(3); O.C.G.A. § 44-7-30.1
- `nonrefundable-deposit-separate-notice`: `edu-no-nonrefundable-separate-notice-ga`, Absent, O.C.G.A. § 44-7-30(1)
- `nonresident-owner-agent`: `edu-nonresident-owner-agent-ga`, Present in part, O.C.G.A. § 44-7-3(a)(1); O.C.G.A. § 44-7-25
- `notice-delivery-methods`: `electronic-notice-ma`, tagged, O.C.G.A. § 44-7-50(d); O.C.G.A. § 10-12-3
- `notice-service-fee`: `edu-no-notice-fee-rule-ga`, Absent, O.C.G.A. § 13-6-7; O.C.G.A. § 44-7-52(a); O.C.G.A. § 44-7-2(c)
- `notice-to-quit-waiver`: `edu-notice-to-quit-not-waivable-ga`, Present, O.C.G.A. § 44-7-2(b)(4); O.C.G.A. § 44-7-7
- `notice-to-vacate-additional-terms`: `edu-no-notice-to-vacate-extra-terms-ga`, Absent, O.C.G.A. § 44-7-14.1(a); O.C.G.A. § 44-7-13.
- `nuisance`: `edu-nuisance-ga`, Present, O.C.G.A. § 41-1-1; O.C.G.A. § 41-2-1; O.C.G.A. § 41-3-1(b)
- `optional-lease-terms`: `edu-option-to-purchase-ga`, Absent, O.C.G.A. § 13-5-30(a)(4)
- `ordnance-demolition-meter-disclosures`: `edu-no-ordnance-demolition-disclosure-ga`, Absent, absence shown by battery (§3)
- `other-landlord-facilities`: `edu-elevator-duties-ga`, Present, O.C.G.A. § 8-2-101(a)
- `owner-move-in-reservation`: `owner-occupancy-termination-ar`, tagged, O.C.G.A. § 44-7-2(b)(4); O.C.G.A. § 44-7-7
- `parking-rules-notice`: `edu-no-parking-statute-ga`, Absent, absence shown by battery (§3)
- `part5-nonwaivable`: `edu-nonwaivable-landlord-tenant-rules-ga`, Present, O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 44-7-23(e); O.C.G.A. § 44-7-22(f)
- `periodic-services-entry`: `scheduled-services-entry-la`, tagged, O.C.G.A. § 44-7-2(b)
- `pest-control-notice`: `edu-no-pest-control-notice-ga`, Absent, O.C.G.A. § 44-7-13.
- `pet-eviction-fact-sheet`: `edu-no-pet-eviction-fact-sheet-ga`, Absent, O.C.G.A. § 44-7-55(c)
- `pet-fees`: `edu-pet-fees-ga`, Present, O.C.G.A. § 44-7-30(1); O.C.G.A. § 44-7-30(3); O.C.G.A. § 44-7-34(a)
- `plain-language`: `edu-no-plain-language-law-ga`, Absent, absence shown by battery (§3)
- `plain-language-consumer-statement`: `edu-no-consumer-restriction-statement-ga`, Absent, absence shown by battery (§3)
- `political-access`: `edu-no-political-access-right-ga`, Absent, absence shown by battery (§3)
- `pool-safety`: `edu-pool-rules-ga`, Present, O.C.G.A. § 31-45-3; O.C.G.A. § 31-45-13; O.C.G.A. §§ 31-45-2
- `portable-cooling-device`: `edu-no-portable-cooling-right-ga`, Absent, O.C.G.A. § 44-7-14.1(a); O.C.G.A. § 44-7-13(a)
- `portable-solar`: `edu-no-portable-solar-right-ga`, Absent, absence shown by battery (§3)
- `portfolio-thresholds`: `edu-portfolio-threshold-ga`, Present, O.C.G.A. § 44-7-36; O.C.G.A. § 8-3-202(b)(1)(A)(i)
- `possession-bond`: `edu-no-possession-bond-ga`, Absent, O.C.G.A. § 44-7-54(a); O.C.G.A. § 44-7-56(b)(3)
- `post-eviction-property`: `edu-post-eviction-property-ga`, Present, O.C.G.A. § 44-7-55(c); O.C.G.A. § 44-7-59; O.C.G.A. § 16-7-21(b)(2)
- `private-well-testing`: `edu-no-private-well-testing-ga`, Absent, absence shown by battery (§3)
- `prohibited-acts-renter`: `edu-prohibited-acts-renter-ga`, Present in part, O.C.G.A. § 44-7-11; O.C.G.A. § 16-7-21(a); O.C.G.A. § 44-7-18(b)
- `prohibited-acts-renter`: `prohibited-acts-renter-wy`, tagged, O.C.G.A. § 44-7-11
- `promises-to-repair`: `edu-no-written-repair-promise-rule-ga`, Absent, O.C.G.A. § 13-5-30(a)(5)
- `prop65-rental-warning`: `edu-no-prop65-equivalent-ga`, Absent, absence shown by battery (§3)
- `property-tax-rent-disclosure`: `edu-no-property-tax-rent-statement-ga`, Absent, absence shown by battery (§3)
- `protected-class-inquiry-ban`: `edu-advertising-and-inquiries-ga`, Present in part, O.C.G.A. § 8-3-202(a)(1)
- `purpose-limitation`: `edu-illegal-purpose-lease-void-ga`, Present, O.C.G.A. § 44-7-18(b); O.C.G.A. § 13-8-1; O.C.G.A. §§ 44-7-1
- `recycling-notice`: `edu-no-recycling-notice-ga`, Absent, absence shown by battery (§3)
- `redemption`: `edu-redemption-ga`, Present, O.C.G.A. § 44-7-52(a)
- `religious-cultural-display`: `edu-no-religious-display-right-ga`, Absent, absence shown by battery (§3)
- `rent-concession`: `rent-concession-wi`, tagged, O.C.G.A. § 13-5-30(a)(5); O.C.G.A. § 10-1-393(a)
- `rent-demand-bar`: `edu-no-rent-demand-bar-ga`, Absent, O.C.G.A. § 44-7-13(a); O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 44-7-51(b)
- `rent-installments`: `rent-installments-or`, tagged, absence shown by battery (§3)
- `rent-into-court-counterclaim`: `edu-rent-into-court-and-counterclaims-ga`, Present, O.C.G.A. § 44-7-51(b); O.C.G.A. § 44-7-53(b); O.C.G.A. § 44-7-54(a)
- `rent-receipt-anti-waiver`: `edu-repair-duty-not-severable-ga`, Present in part, O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 44-14-344; O.C.G.A. §§ 44-14-341
- `rent-reporting`: `edu-no-rent-reporting-rule-ga`, Absent, absence shown by battery (§3)
- `rent-tax`: `edu-rent-tax-ga`, Present in part, O.C.G.A. § 48-8-30(a)(1); O.C.G.A. § 48-13-51(a)(1)(A); O.C.G.A. § 48-13-50.2(2)
- `rental-inspection`: `edu-rental-inspection-ga`, Present, O.C.G.A. § 36-74-30(b); O.C.G.A. § 41-2-11(3); O.C.G.A. § 31-2-13
- `rental-inspection`: `rental-inspection-cooperation-mn`, tagged, O.C.G.A. § 36-74-30(b)
- `renters-insurance-rules`: `edu-renters-insurance-rules-ga`, Absent, absence shown by battery (§3)
- `repair-cost-termination`: `edu-no-repair-cost-termination-ga`, Absent, O.C.G.A. §§ 44-7-13
- `repair-escrow-exemption-notice`: `edu-no-repair-escrow-ga`, Absent, O.C.G.A. § 44-7-54
- `repair-notice`: `edu-no-repair-notice-rule-ga`, Absent, O.C.G.A. § 44-7-24(b)(2)
- `required-disclosures`: `edu-required-disclosures-ga`, Present, O.C.G.A. §§ 44-7-3(a)
- `required-fees`: `edu-no-required-fee-list-ga`, Absent, absence shown by battery (§3)
- `rights-responsibilities-guide`: `edu-no-tenant-rights-guide-ga`, Absent, O.C.G.A. § 44-7-3; O.C.G.A. § 44-7-20; O.C.G.A. §§ 44-7-31
- `rules-regulations`: `rules-wi`, tagged, O.C.G.A. § 13-5-30(a)(5); O.C.G.A. § 44-3-76
- `sale-or-management-change`: `edu-sale-or-management-change-ga`, Present in part, O.C.G.A. § 44-7-3(a)
- `sanitary-code-variance`: `edu-no-sanitary-code-variance-ga`, Absent, absence shown by battery (§3)
- `scope`: `edu-scope-ga`, Present, O.C.G.A. § 44-7-30(2); O.C.G.A. § 44-7-59; O.C.G.A. §§ 44-7-110
- `seasonal-tenancy`: `edu-seasonal-and-hotel-stays-ga`, Present, O.C.G.A. § 43-21-1; O.C.G.A. § 43-21-3.1(a); O.C.G.A. § 43-21-3.2
- `security-deposit-cap`: `edu-security-deposit-cap-ga`, Present, O.C.G.A. § 44-7-30.1; O.C.G.A. § 44-7-30(3); O.C.G.A. § 44-7-36
- `security-deposit-nonwaiver`: `edu-security-deposit-nonwaiver-ga`, Present, O.C.G.A. § 44-7-2(b); O.C.G.A. § 44-7-36; O.C.G.A. §§ 44-7-30
- `security-deposit-on-sale`: `edu-security-deposit-on-sale-ga`, Absent, O.C.G.A. § 44-7-31; O.C.G.A. § 44-7-32(a); O.C.G.A. § 44-7-36
- `security-deposit-penalty`: `edu-security-deposit-penalty-ga`, Present, O.C.G.A. § 44-7-35(a); O.C.G.A. § 44-7-35(b); O.C.G.A. § 44-7-35(c)
- `security-deposit-standards`: `edu-no-deposit-standards-rule-ga`, Absent, absence shown by battery (§3)
- `security-devices`: `edu-security-devices-ga`, Present, O.C.G.A. § 44-7-4(a)
- `self-help-eviction`: `edu-self-help-eviction-ga`, Present, O.C.G.A. § 44-7-2(b)(4); O.C.G.A. § 44-7-10; O.C.G.A. § 44-7-14.1(b)
- `senior-housing-work-card`: `edu-no-senior-housing-staff-rule-ga`, Absent, absence shown by battery (§3)
- `service-animal-misrepresentation`: `edu-service-dog-misrepresentation-ga`, Present, O.C.G.A. § 30-4-4(b); O.C.G.A. § 30-4-1
- `sex-offender-disclosure`: `edu-no-sex-offender-disclosure-ga`, Absent, O.C.G.A. § 42-1-12
- `sex-offender-occupancy`: `edu-sex-offender-residency-ga`, Present, O.C.G.A. § 42-1-15(b)
- `sfr-occupancy-disclosure`: `edu-no-disclosure-placement-rule-ga`, Absent, absence shown by battery (§3)
- `shoreline-access-disclosure`: `edu-no-shoreline-disclosure-ga`, Absent, absence shown by battery (§3)
- `showing-notice-waiver`: `showing-notice-la`, tagged, O.C.G.A. § 44-7-2(b)
- `shutdown-rent-protection`: `edu-no-shutdown-rent-protection-ga`, Absent, O.C.G.A. § 44-7-52(a)
- `single-family-zone-lease-limit`: `edu-no-single-family-rental-limit-ga`, Absent, O.C.G.A. § 44-7-19
- `smart-access`: `edu-no-smart-access-rule-ga`, Absent, absence shown by battery (§3)
- `smoke-drift-waiver`: `edu-no-smoke-free-statute-ga`, Absent, absence shown by battery (§3)
- `social-security-defense`: `edu-no-benefit-delay-defense-ga`, Absent, O.C.G.A. § 44-7-52(a)
- `special-district-representation`: `edu-no-special-district-tenant-rule-ga`, Absent, absence shown by battery (§3)
- `sprinkler-disclosure`: `edu-no-sprinkler-disclosure-ga`, Absent, absence shown by battery (§3)
- `statute-of-frauds-lease-term`: `edu-statute-of-frauds-lease-ga`, Present, O.C.G.A. § 44-7-2(a); O.C.G.A. § 13-5-30(a)(4); O.C.G.A. § 13-5-31
- `statutory-caps`: `edu-statutory-caps-ga`, Summary, O.C.G.A. § 44-7-30.1; O.C.G.A. § 13-6-15(a); O.C.G.A. § 44-7-16
- `statutory-early-termination`: `edu-statutory-early-termination-ga`, Present, O.C.G.A. § 44-7-22; O.C.G.A. § 44-7-23; O.C.G.A. § 44-7-37
- `steam-radiator-covers`: `edu-no-radiator-cover-rule-ga`, Absent, absence shown by battery (§3)
- `stove-refrigerator`: `edu-no-stove-refrigerator-duty-ga`, Absent, absence shown by battery (§3)
- `student-housing`: `edu-student-housing-ga`, Absent, O.C.G.A. § 8-3-17; O.C.G.A. § 39-1-1(a)
- `subsidized-inspection-refusal`: `edu-no-voucher-inspection-rule-ga`, Absent, absence shown by battery (§3)
- `subsidy-habitability-proration`: `edu-no-subsidy-proration-rule-ga`, Absent, O.C.G.A. § 44-7-15.
- `subsidy-late-fee`: `edu-no-subsidy-late-fee-rule-ga`, Absent, absence shown by battery (§3)
- `substandard-property-receivership`: `edu-no-housing-receivership-ga`, Absent, O.C.G.A. §§ 41-2-9; O.C.G.A. § 9-8-3; O.C.G.A. § 41-2-9(a)(7)
- `tax-escalation`: `edu-tax-escalation-ga`, Present in part, O.C.G.A. § 44-7-24(d)(1)(A)
- `telecom-access`: `edu-no-telecom-access-rule-ga`, Absent, absence shown by battery (§3)
- `tenancy-at-will`: `edu-tenancy-at-will-basics-ga`, Present, O.C.G.A. § 44-7-6; O.C.G.A. § 44-7-7; O.C.G.A. § 44-7-50(a)
- `tenant-bankruptcy`: `edu-tenant-bankruptcy-ga`, Absent, O.C.G.A. § 44-7-52
- `tenant-confidential-information`: `edu-no-tenant-information-disclosure-rule-ga`, Absent, absence shown by battery (§3)
- `tenant-display-rights`: `edu-no-display-rights-statute-ga`, Absent, absence shown by battery (§3)
- `tenant-employee-housing`: `edu-employee-housing-ga`, Present in part, O.C.G.A. § 44-7-57
- `tenant-insurance-claims`: `edu-no-tenant-claims-rule-ga`, Absent, absence shown by battery (§3)
- `tenant-portal`: `tenant-portal-mn`, tagged, O.C.G.A. § 44-7-50(d); O.C.G.A. § 10-12-8(a); O.C.G.A. § 10-12-8(b)(1)
- `tenant-records`: `edu-no-tenant-records-rule-ga`, Absent, O.C.G.A. § 44-7-50(a)
- `tenant-repair-agreement`: `edu-tenant-repair-agreements-ga`, Present, O.C.G.A. § 44-7-2(b)(1); O.C.G.A. § 44-7-13(a)
- `tenant-repair-remedies`: `edu-tenant-repair-remedies-ga`, Present in part, O.C.G.A. §§ 44-7-14; O.C.G.A. §§ 41-2-9
- `tenant-right-to-organize`: `edu-tenant-organizing-ga`, Present, O.C.G.A. § 44-7-24(b)(4)
- `tenant-rights-statement`: `edu-no-tenant-rights-statement-ga`, Absent, absence shown by battery (§3)
- `tenant-screening`: `edu-tenant-screening-ga`, Absent, absence shown by battery (§3)
- `tenant-statutory-duties`: `edu-tenant-statutory-duties-ga`, Present, O.C.G.A. § 44-7-11; O.C.G.A. § 44-7-10; O.C.G.A. § 44-7-9
- `term-change-notice`: `edu-term-change-notice-ga`, Absent, O.C.G.A. § 44-7-7; O.C.G.A. § 13-5-30(b)
- `tpa-exemption-notice`: `edu-no-tpa-exemption-notice-ga`, Absent, absence shown by battery (§3)
- `tpa-notice`: `edu-no-tenant-purchase-right-ga`, Absent, absence shown by battery (§3)
- `tpa-sunset`: `edu-no-sunset-statutes-ga`, Absent, O.C.G.A. § 44-7-50; O.C.G.A. § 50-18-151
- `translation-duty`: `edu-no-translation-duty-ga`, Absent, absence shown by battery (§3)
- `trespass-notice`: `edu-trespass-notice-ga`, Present, O.C.G.A. § 16-7-21(b)(2)
- `truth-in-renting`: `edu-no-truth-in-renting-act-ga`, Absent, absence shown by battery (§3)
- `unbundled-parking`: `edu-no-unbundled-parking-rule-ga`, Absent, absence shown by battery (§3)
- `unconscionability`: `edu-no-unconscionability-statute-ga`, Absent, O.C.G.A. § 11-2-302(1); O.C.G.A. § 11-2A-108; O.C.G.A. § 13-8-2(a)
- `usufructuary-lessor`: `edu-usufruct-lease-ga`, Present, O.C.G.A. § 44-7-1(a); O.C.G.A. § 44-6-86
- `utility-allowance-cap`: `edu-utility-cost-cap-ga`, Present, O.C.G.A. § 12-5-180.1(a); O.C.G.A. § 44-7-36
- `utility-apportionment`: `edu-utility-apportionment-ga`, Present, O.C.G.A. § 12-5-180.1(a)
- `utility-deposit-return`: `edu-no-utility-deposit-rule-ga`, Absent, O.C.G.A. § 44-7-30(3); O.C.G.A. § 44-7-34(a)
- `utility-disclosure-attachment`: `edu-utility-disclosure-attachment-ga`, Present, O.C.G.A. § 12-5-180.1(a)
- `utility-disconnection-notice-authorization`: `edu-no-utility-notice-authorization-ga`, Absent, absence shown by battery (§3)
- `utility-interruption-submeter`: `edu-no-utility-interruption-submeter-rule-ga`, Absent, O.C.G.A. § 44-7-14.1.
- `utility-landlord-account`: `edu-landlord-utility-account-ga`, Present in part, O.C.G.A. § 44-7-14.1(b); O.C.G.A. § 36-60-17(a)
- `utility-shutoff-statute`: `edu-no-utility-shutoff-rule-ga`, Absent, O.C.G.A. § 44-7-14.1.
- `utility-submetering-disclosure`: `edu-water-submetering-ga`, Present, O.C.G.A. § 12-5-180.1(a)
- `utility-transfer`: `edu-no-utility-transfer-rule-ga`, Absent, absence shown by battery (§3)
- `veterans-incentive`: `edu-no-veterans-rental-incentive-ga`, Absent, absence shown by battery (§3)
- `waiver-by-acceptance`: `edu-waiver-by-acceptance-ga`, Absent, O.C.G.A. § 44-7-52(a)
- `water-heater-temperature`: `edu-no-water-heater-temperature-rule-ga`, Absent, O.C.G.A. §§ 44-7-13
- `waterbed`: `edu-no-waterbed-rule-ga`, Absent, O.C.G.A. § 44-7-30.1
- `window-guards`: `edu-no-window-guard-rule-ga`, Absent, absence shown by battery (§3)
- `written-notice-required`: `edu-written-notices-ga`, Present, O.C.G.A. §§ 44-7-3(a); O.C.G.A. § 44-7-7

Topics answered so far: 258 of 258.


### §3 Batteries

Re-run check (2026-11-06, fresh searches after all rows were written): 10 recorded patterns re-run, all with the same count ("agreed upon in the rental agreement" 2; "accessory dwelling" 0; rights-and-responsibilities guide 0; possession bond 3; unconscionable 58; double letting 0; pest control 0; government shutdown 0; knowingly-used lease terms 0; control "zqxvbnmwtk" 0).

Every query run, with its hit count and the rows that rely on it. Hit titles are kept in the battery files (`ga-bat-01` to `ga-bat-03`); each absence row's notes name the landlord-tenant hits and the kinds of the rest. "Run for a later batch" means the query has been run and will be cited when its topic's row is written.

- zqxvbnmwt → 0 (control)
- "ten or fewer rental units" → 1 (`edu-no-nonrefundable-separate-notice-ga`, `edu-no-deposit-standards-rule-ga`, `edu-no-deposit-installments-ga`, `edu-deposit-no-move-out-notice-condition-ga`, `edu-no-expedited-deposit-disposition-ga`, `edu-holding-deposit-ga`, `edu-no-fee-in-lieu-of-deposit-rule-ga`, `edu-application-fees-ga`, `edu-no-utility-deposit-rule-ga`, `edu-no-fee-transparency-rule-ga`, `edu-no-required-fee-list-ga`, `edu-no-fee-unprovided-service-rule-ga`, `edu-no-late-fee-limit-ga`, `edu-liquidated-damages-ga`, `edu-collection-fee-ga`, `edu-no-eviction-fee-ban-ga`, `edu-no-deposit-cost-schedule-ga`, `edu-security-deposit-on-sale-ga`, `edu-abandonment-and-mitigation-ga`, `edu-actual-notice-method-ga`, `edu-no-confession-of-judgment-lease-ga`, `edu-eviction-grounds-no-cure-ga`, `edu-no-eviction-hardship-stay-ga`, `edu-no-expedited-criminal-eviction-ga`, `edu-redemption-ga`, `edu-no-good-cause-notice-ga`, `edu-no-lockout-for-rent-ga`, `edu-notice-to-quit-not-waivable-ga`, `edu-no-notice-to-vacate-extra-terms-ga`, `edu-no-possession-bond-ga`, `edu-post-eviction-property-ga`, `edu-no-rent-demand-bar-ga`, `edu-repair-duty-not-severable-ga`, `edu-no-benefit-delay-defense-ga`, `edu-tenant-bankruptcy-ga`, `edu-waiver-by-acceptance-ga`, `edu-no-cold-weather-eviction-rule-ga`, `edu-no-infirmity-termination-ga`, `edu-trespass-notice-ga`, `edu-no-law-enforcement-cooperation-rule-ga`, `edu-written-notices-ga`, `edu-entity-landlord-representation-ga`, `edu-dispossessory-service-ga`, `edu-jury-waiver-ga`, `edu-minor-tenants-ga`, `edu-seasonal-and-hotel-stays-ga`, `edu-usufruct-lease-ga`, `edu-statute-of-frauds-lease-ga`, `edu-lease-formalities-ga`, `edu-no-unconscionability-statute-ga`, `edu-fair-business-practices-act-ga`, `edu-exculpatory-clauses-ga`, `edu-no-double-letting-rule-ga`, `edu-association-rules-bind-tenants-ga`, `edu-no-truth-in-renting-act-ga`, `edu-no-tenant-rights-guide-ga`, `edu-no-lease-type-parity-ga`, `edu-tenant-organizing-ga`, `edu-no-single-family-rental-limit-ga`, `edu-no-adu-statute-ga`, `edu-automatic-renewal-ga`, `edu-lease-recording-ga`, `edu-dv-qualifying-documents-ga`, `edu-no-dv-eviction-defense-ga`, `edu-no-dv-lock-change-ga`, `edu-dv-deposit-timing-ga`, `edu-dv-address-confidentiality-ga`, `edu-no-sex-offender-disclosure-ga`, `edu-sex-offender-residency-ga`, `edu-condominium-conversion-ga`, `edu-utility-liens-tenant-bills-ga`, `edu-no-pest-control-notice-ga`, `edu-no-bed-bug-cooperation-rule-ga`, `edu-no-waterbed-rule-ga`, `edu-no-smart-access-rule-ga`, `edu-no-shutdown-rent-protection-ga`, `edu-portfolio-threshold-ga`, `edu-no-health-district-rental-rules-ga`, `edu-no-senior-housing-staff-rule-ga`, `edu-employee-housing-ga`, `edu-scope-ga`, `edu-construction-liens-tenant-work-ga`, `edu-cannabis-ga`, `edu-no-appliance-rule-ga`, `edu-no-relocation-duty-ga`, `edu-alarm-tampering-ga`, `edu-firearms-in-leases-ga`, `edu-no-guest-rights-statute-ga`, `edu-no-family-child-care-right-ga`, `edu-fire-code-standard-ga`, `edu-tax-escalation-ga`, `edu-tenant-repair-agreements-ga`, `edu-tenant-screening-ga`, `edu-no-tenant-records-rule-ga`, `edu-no-tenant-information-disclosure-rule-ga`, `edu-no-rent-reporting-rule-ga`, `edu-no-pet-eviction-fact-sheet-ga`, `edu-no-parking-statute-ga`, `edu-no-veterans-rental-incentive-ga`, `edu-no-display-rights-statute-ga`, `edu-no-political-access-right-ga`, `edu-no-telecom-access-rule-ga`, `edu-no-water-heater-temperature-rule-ga`, `edu-no-emergency-contact-rule-ga`, `edu-no-knowing-use-penalty-ga`, `edu-rental-inspection-ga`, `edu-condemned-premises-ga`, `edu-no-housing-receivership-ga`, `edu-habitability-statement-ga`, `edu-habitability-not-waivable-ga`, `edu-habitability-modifiable-ga`, `edu-no-habitability-materiality-rule-ga`, `edu-no-habitability-presumption-ga`, `edu-confirmed-absences-habitability-ga`, `edu-no-heat-standard-ga`, `edu-repair-duty-not-shiftable-ga`, `edu-no-written-repair-promise-rule-ga`, `edu-no-designated-repairer-rule-ga`, `edu-tenant-repair-remedies-ga`, `edu-no-repair-notice-rule-ga`, `edu-no-repair-cost-termination-ga`, `edu-no-repair-escrow-ga`, `edu-code-edition-at-construction-ga`, `edu-no-sanitary-code-variance-ga`, `edu-no-environmental-termination-ga`, `edu-disability-accommodation-ga`, `edu-children-occupancy-ga`, `edu-advertising-and-inquiries-ga`, `edu-student-housing-ga`, `edu-no-smoke-free-statute-ga`, `edu-no-drug-free-housing-program-ga`, `edu-no-communal-land-approval-ga`, `edu-no-initials-rule-ga`, `edu-no-plain-language-law-ga`, `edu-no-translation-duty-ga`, `edu-lease-content-requirements-ga`, `edu-option-to-purchase-ga`, `edu-no-subsidy-late-fee-rule-ga`, `edu-no-voucher-inspection-rule-ga`, `edu-no-subsidy-proration-rule-ga`, `edu-no-ordnance-demolition-disclosure-ga`, `edu-no-military-zone-disclosure-ga`, `edu-no-shoreline-disclosure-ga`, `edu-no-drywall-disclosure-ga`, `edu-no-asbestos-tenant-notice-ga`, `edu-no-contamination-disclosure-ga`, `edu-no-common-area-lighting-rule-ga`, `edu-no-balcony-inspection-rule-ga`, `edu-no-radiator-cover-rule-ga`, `edu-no-key-control-statute-ga`, `edu-no-employee-screening-rule-ga`, `edu-no-private-well-testing-ga`, `edu-no-recycling-notice-ga`, `edu-no-portable-cooling-right-ga`, `edu-no-portable-solar-right-ga`, `edu-no-prop65-equivalent-ga`, `edu-no-utility-transfer-rule-ga`, `edu-foreclosure-ga`, `edu-no-foreclosure-disclosure-ga`, `edu-renters-insurance-rules-ga`, `edu-no-tenant-claims-rule-ga`, `edu-no-landlord-insurance-mandate-ga`, `edu-nonresident-owner-agent-ga`, `edu-term-change-notice-ga`, `edu-confirmed-absences-misc-ga`, `edu-nuisance-ga`, `edu-no-residential-sprinkler-mandate-ga`, `edu-water-submetering-ga`, `edu-utility-cost-cap-ga`, `edu-landlord-utility-account-ga`, `edu-no-utility-shutoff-rule-ga`, `edu-no-utility-notice-authorization-ga`, `edu-no-meter-conservation-charge-ga`, `edu-attornment-and-adverse-claims-ga`, `edu-no-special-district-tenant-rule-ga`, `edu-no-ev-charging-end-of-tenancy-rule-ga`, `edu-no-ev-shared-area-rule-ga`, `edu-no-property-tax-rent-statement-ga`, `edu-security-devices-ga`, `edu-no-window-guard-rule-ga`, `edu-lead-state-notices-ga`, `edu-no-lead-safe-certificate-ga`, `edu-no-association-obligations-lease-disclosure-ga`, `edu-no-certificate-of-occupancy-disclosure-ga`, `edu-no-disaster-guest-rule-ga`, `edu-ev-charging-stations-ga`, `edu-foreign-ownership-ga`, `edu-no-home-business-statute-ga`, `edu-elevator-duties-ga`, `edu-pool-rules-ga`, `edu-service-dog-misrepresentation-ga`, `edu-rent-tax-ga`)
- "ten fewer rental units" → 0 (`edu-no-nonrefundable-separate-notice-ga`, `edu-no-deposit-standards-rule-ga`, `edu-no-deposit-installments-ga`, `edu-deposit-no-move-out-notice-condition-ga`, `edu-no-expedited-deposit-disposition-ga`, `edu-holding-deposit-ga`, `edu-no-fee-in-lieu-of-deposit-rule-ga`, `edu-application-fees-ga`, `edu-no-utility-deposit-rule-ga`, `edu-no-fee-transparency-rule-ga`, `edu-no-required-fee-list-ga`, `edu-no-fee-unprovided-service-rule-ga`, `edu-no-late-fee-limit-ga`, `edu-liquidated-damages-ga`, `edu-collection-fee-ga`, `edu-no-eviction-fee-ban-ga`, `edu-no-deposit-cost-schedule-ga`, `edu-security-deposit-on-sale-ga`, `edu-abandonment-and-mitigation-ga`, `edu-actual-notice-method-ga`, `edu-no-confession-of-judgment-lease-ga`, `edu-eviction-grounds-no-cure-ga`, `edu-no-eviction-hardship-stay-ga`, `edu-no-expedited-criminal-eviction-ga`, `edu-redemption-ga`, `edu-no-good-cause-notice-ga`, `edu-no-lockout-for-rent-ga`, `edu-notice-to-quit-not-waivable-ga`, `edu-no-notice-to-vacate-extra-terms-ga`, `edu-no-possession-bond-ga`, `edu-post-eviction-property-ga`, `edu-no-rent-demand-bar-ga`, `edu-repair-duty-not-severable-ga`, `edu-no-benefit-delay-defense-ga`, `edu-tenant-bankruptcy-ga`, `edu-waiver-by-acceptance-ga`, `edu-no-cold-weather-eviction-rule-ga`, `edu-no-infirmity-termination-ga`, `edu-trespass-notice-ga`, `edu-no-law-enforcement-cooperation-rule-ga`, `edu-written-notices-ga`, `edu-entity-landlord-representation-ga`, `edu-dispossessory-service-ga`, `edu-jury-waiver-ga`, `edu-minor-tenants-ga`, `edu-seasonal-and-hotel-stays-ga`, `edu-usufruct-lease-ga`, `edu-statute-of-frauds-lease-ga`, `edu-lease-formalities-ga`, `edu-no-unconscionability-statute-ga`, `edu-fair-business-practices-act-ga`, `edu-exculpatory-clauses-ga`, `edu-no-double-letting-rule-ga`, `edu-association-rules-bind-tenants-ga`, `edu-no-truth-in-renting-act-ga`, `edu-no-tenant-rights-guide-ga`, `edu-no-lease-type-parity-ga`, `edu-tenant-organizing-ga`, `edu-no-single-family-rental-limit-ga`, `edu-no-adu-statute-ga`, `edu-automatic-renewal-ga`, `edu-lease-recording-ga`, `edu-dv-qualifying-documents-ga`, `edu-no-dv-eviction-defense-ga`, `edu-no-dv-lock-change-ga`, `edu-dv-deposit-timing-ga`, `edu-dv-address-confidentiality-ga`, `edu-no-sex-offender-disclosure-ga`, `edu-sex-offender-residency-ga`, `edu-condominium-conversion-ga`, `edu-utility-liens-tenant-bills-ga`, `edu-no-pest-control-notice-ga`, `edu-no-bed-bug-cooperation-rule-ga`, `edu-no-waterbed-rule-ga`, `edu-no-smart-access-rule-ga`, `edu-no-shutdown-rent-protection-ga`, `edu-portfolio-threshold-ga`, `edu-no-health-district-rental-rules-ga`, `edu-no-senior-housing-staff-rule-ga`, `edu-employee-housing-ga`, `edu-scope-ga`, `edu-construction-liens-tenant-work-ga`, `edu-cannabis-ga`, `edu-no-appliance-rule-ga`, `edu-no-relocation-duty-ga`, `edu-alarm-tampering-ga`, `edu-firearms-in-leases-ga`, `edu-no-guest-rights-statute-ga`, `edu-no-family-child-care-right-ga`, `edu-fire-code-standard-ga`, `edu-tax-escalation-ga`, `edu-tenant-repair-agreements-ga`, `edu-tenant-screening-ga`, `edu-no-tenant-records-rule-ga`, `edu-no-tenant-information-disclosure-rule-ga`, `edu-no-rent-reporting-rule-ga`, `edu-no-pet-eviction-fact-sheet-ga`, `edu-no-parking-statute-ga`, `edu-no-veterans-rental-incentive-ga`, `edu-no-display-rights-statute-ga`, `edu-no-political-access-right-ga`, `edu-no-telecom-access-rule-ga`, `edu-no-water-heater-temperature-rule-ga`, `edu-no-emergency-contact-rule-ga`, `edu-no-knowing-use-penalty-ga`, `edu-rental-inspection-ga`, `edu-condemned-premises-ga`, `edu-no-housing-receivership-ga`, `edu-habitability-statement-ga`, `edu-habitability-not-waivable-ga`, `edu-habitability-modifiable-ga`, `edu-no-habitability-materiality-rule-ga`, `edu-no-habitability-presumption-ga`, `edu-confirmed-absences-habitability-ga`, `edu-no-heat-standard-ga`, `edu-repair-duty-not-shiftable-ga`, `edu-no-written-repair-promise-rule-ga`, `edu-no-designated-repairer-rule-ga`, `edu-tenant-repair-remedies-ga`, `edu-no-repair-notice-rule-ga`, `edu-no-repair-cost-termination-ga`, `edu-no-repair-escrow-ga`, `edu-code-edition-at-construction-ga`, `edu-no-sanitary-code-variance-ga`, `edu-no-environmental-termination-ga`, `edu-disability-accommodation-ga`, `edu-children-occupancy-ga`, `edu-advertising-and-inquiries-ga`, `edu-student-housing-ga`, `edu-no-smoke-free-statute-ga`, `edu-no-drug-free-housing-program-ga`, `edu-no-communal-land-approval-ga`, `edu-no-initials-rule-ga`, `edu-no-plain-language-law-ga`, `edu-no-translation-duty-ga`, `edu-lease-content-requirements-ga`, `edu-option-to-purchase-ga`, `edu-no-subsidy-late-fee-rule-ga`, `edu-no-voucher-inspection-rule-ga`, `edu-no-subsidy-proration-rule-ga`, `edu-no-ordnance-demolition-disclosure-ga`, `edu-no-military-zone-disclosure-ga`, `edu-no-shoreline-disclosure-ga`, `edu-no-drywall-disclosure-ga`, `edu-no-asbestos-tenant-notice-ga`, `edu-no-contamination-disclosure-ga`, `edu-no-common-area-lighting-rule-ga`, `edu-no-balcony-inspection-rule-ga`, `edu-no-radiator-cover-rule-ga`, `edu-no-key-control-statute-ga`, `edu-no-employee-screening-rule-ga`, `edu-no-private-well-testing-ga`, `edu-no-recycling-notice-ga`, `edu-no-portable-cooling-right-ga`, `edu-no-portable-solar-right-ga`, `edu-no-prop65-equivalent-ga`, `edu-no-utility-transfer-rule-ga`, `edu-foreclosure-ga`, `edu-no-foreclosure-disclosure-ga`, `edu-renters-insurance-rules-ga`, `edu-no-tenant-claims-rule-ga`, `edu-no-landlord-insurance-mandate-ga`, `edu-nonresident-owner-agent-ga`, `edu-term-change-notice-ga`, `edu-confirmed-absences-misc-ga`, `edu-nuisance-ga`, `edu-no-residential-sprinkler-mandate-ga`, `edu-water-submetering-ga`, `edu-utility-cost-cap-ga`, `edu-landlord-utility-account-ga`, `edu-no-utility-shutoff-rule-ga`, `edu-no-utility-notice-authorization-ga`, `edu-no-meter-conservation-charge-ga`, `edu-attornment-and-adverse-claims-ga`, `edu-no-special-district-tenant-rule-ga`, `edu-no-ev-charging-end-of-tenancy-rule-ga`, `edu-no-ev-shared-area-rule-ga`, `edu-no-property-tax-rent-statement-ga`, `edu-security-devices-ga`, `edu-no-window-guard-rule-ga`, `edu-lead-state-notices-ga`, `edu-no-lead-safe-certificate-ga`, `edu-no-association-obligations-lease-disclosure-ga`, `edu-no-certificate-of-occupancy-disclosure-ga`, `edu-no-disaster-guest-rule-ga`, `edu-ev-charging-stations-ga`, `edu-foreign-ownership-ga`, `edu-no-home-business-statute-ga`, `edu-elevator-duties-ga`, `edu-pool-rules-ga`, `edu-service-dog-misrepresentation-ga`, `edu-rent-tax-ga`)
- (deposit OR deposits) w/30 (foreclosure) → 5 (`edu-security-deposit-on-sale-ga`)
- "security deposit" w/30 (standard OR standards OR criteria OR guideline OR guidelines) → 0 (`edu-no-deposit-standards-rule-ga`)
- "security deposit" w/30 (escrow) → 2 (`edu-no-deposit-standards-rule-ga`)
- (deposit OR deposits) w/15 (installment OR installments OR increments OR "partial payment" OR "partial payments") → 10 (`edu-no-deposit-installments-ga`)
- (deposit OR deposits) w/30 ("forwarding address" OR "notice of intent" OR "intent to vacate" OR "new address") → 1 (`edu-deposit-no-move-out-notice-condition-ga`)
- (deposit OR deposits) w/30 ("last known address") → 11 (`edu-deposit-no-move-out-notice-condition-ga`)
- (deposit OR deposits) w/30 (expedite OR expedited OR "processing fee" OR "administrative fee" OR "accounting fee") → 2 (`edu-no-expedited-deposit-disposition-ga`)
- (nonrefundable OR "non-refundable") w/30 (notice OR notify OR "separate writing" OR "written notice") → 6 (`edu-no-nonrefundable-separate-notice-ga`)
- ("holding deposit" OR "holding fee" OR "earnest money" OR "reservation fee" OR "reservation deposit") AND (lease OR tenant OR "rental agreement" OR landlord) → 25 (`edu-holding-deposit-ga`)
- ("in lieu of" w/10 (deposit OR deposits OR "security deposit")) OR "deposit alternative" OR "deposit waiver" → 27 (`edu-no-fee-in-lieu-of-deposit-rule-ga`)
- alternative w/10 "security deposits" → 1 (`edu-no-fee-in-lieu-of-deposit-rule-ga`)
- (application OR screening OR "background check") w/5 (fee OR fees OR charge OR charges) AND (tenant OR tenants OR lessee OR landlord OR "rental agreement" OR dwelling) → 24 (`edu-application-fees-ga`)
- "application fee" OR "application fees" → 130 (`edu-application-fees-ga`)
- "utility deposit" OR "utility deposits" OR ((deposit OR deposits) w/10 (utility OR utilities) w/30 (tenant OR landlord OR lessee)) → 0 (`edu-no-utility-deposit-rule-ga`)
- deposit w/50 utilities → 12 (`edu-no-utility-deposit-rule-ga`)
- "total price" OR "all-in" OR "junk fee" OR "junk fees" OR "mandatory fee" OR "mandatory fees" OR "hidden fee" OR "hidden fees" OR "drip pricing" → 64 (`edu-no-fee-transparency-rule-ga`)
- (fee OR fees OR charge OR charges) w/15 ("rental agreement" OR lease) w/15 (disclose OR disclosed OR list OR listed OR "set forth" OR itemize OR itemized) → 5 (`edu-no-required-fee-list-ga`)
- (fee OR fees OR charge OR charges) w/15 (service OR services) w/15 ("not provided" OR "not rendered" OR "does not provide" OR "not actually") → 6 (`edu-no-fee-unprovided-service-rule-ga`)
- ("collection fee" OR "collection fees" OR "collection costs" OR "cost of collection" OR "costs of collection" OR "collection charge") → 72 (`edu-collection-fee-ga`)
- "attorney's fees" w/10 "evidence of indebtedness" → 1 (run for a later batch)
- ("late fee" OR "late fees" OR "late charge" OR "late charges") AND ("mobile home" OR "manufactured home") → 2 (`edu-no-late-fee-limit-ga`)
- "liquidated damages" w/30 (lease OR tenant OR landlord OR rent OR "rental agreement") → 11 (`edu-liquidated-damages-ga`)
- (deposit OR deposits) w/30 (sale OR sell OR sold OR transfer OR transferee OR successor OR purchaser OR grantee OR "new owner") AND (tenant OR tenants OR landlord OR lessor OR lessee) → 51 (`edu-security-deposit-on-sale-ga`)
- (deposit OR deposits) w/30 (carpet OR carpets OR cleaning OR schedule) → 7 (`edu-no-deposit-cost-schedule-ga`, `edu-carpet-cleaning-ga`)
- (nonrefundable OR "non-refundable") w/30 (agreed OR agreement) → 9 (`edu-no-nonrefundable-separate-notice-ga`)
- (abandon OR abandons OR abandoned OR abandonment) w/25 (premises OR lease OR tenant OR tenancy) w/25 (rent OR mitigate OR mitigation OR relet OR reletting) → 10 (`edu-abandonment-and-mitigation-ga`)
- mitigate w/30 "actual damages" → 4 (`edu-abandonment-and-mitigation-ga`)
- "actual notice" w/30 (tenant OR landlord OR lease OR "rental agreement" OR lessee) → 14 (`edu-actual-notice-method-ga`)
- "agreed upon in the rental agreement" → 2 (`edu-actual-notice-method-ga`)
- ("notice to quit" OR "notice to vacate" OR "demand for possession") w/30 (waive OR waiver OR waived OR shorten OR shortened) → 3 (`edu-notice-to-quit-not-waivable-ga`, `edu-no-lease-type-parity-ga`, `edu-term-change-notice-ga`)
- (lease OR leases) w/15 (record OR recorded OR recording OR registered OR registration) w/30 ("real property" OR land OR "real estate" OR clerk) → 13 (`edu-lease-recording-ga`)
- (lease OR leases OR "rental agreement") w/30 (spouse OR seal OR "power of attorney" OR acknowledged OR notarized OR witness) → 64 (`edu-lease-formalities-ga`)
- (tenant OR lessee OR tenancy) w/30 ("good cause" OR "just cause") w/30 (notice OR terminate OR termination OR evict OR eviction OR dispossessory) → 1 (`edu-no-good-cause-notice-ga`)
- zqxvbnmwtd → 0 (control)
- (county OR municipal OR municipality OR "local government") w/30 (rental OR "rental property" OR "residential rental") w/30 (registration OR register OR license OR licensing OR permit OR inspection OR inspect) → 10 (run for a later batch)
- "accessory dwelling" OR "accessory dwelling unit" OR "accessory dwelling units" OR "granny flat" OR "in-law suite" → 0 (`edu-no-adu-statute-ga`)
- ("rights and responsibilities" OR handbook OR pamphlet OR guide OR "statement of rights") w/30 (tenant OR tenants OR landlord OR landlords) → 0 (`edu-no-tenant-rights-guide-ga`)
- ("single-family" OR "single family") w/30 (rent OR rental OR lease OR leasing) w/30 (zone OR zoning OR ordinance OR "owner-occupied" OR "owner occupied") → 2 (`edu-no-single-family-rental-limit-ga`, `edu-no-adu-statute-ga`)
- ("truth in renting" OR "tenant protection act" OR "tenant opportunity to purchase" OR "right of first refusal" OR "right to purchase") w/30 (tenant OR tenants OR rental) → 4 (`edu-no-truth-in-renting-act-ga`)
- (dispossessory OR eviction) w/30 (stay OR stayed OR hardship OR continuance OR postpone OR postponed) → 16 (`edu-no-eviction-hardship-stay-ga`, `edu-no-expedited-criminal-eviction-ga`)
- (dispossessory OR eviction OR "writ of possession") w/30 (winter OR "cold weather" OR freezing OR temperature OR holiday OR holidays) → 3 (`edu-no-cold-weather-eviction-rule-ga`)
- (receiver OR receivership) w/30 (rent OR rents OR tenant OR tenants OR "rental property" OR dwelling) → 22 (`edu-no-housing-receivership-ga`, `edu-nuisance-ga`)
- "right of first refusal" w/30 (tenant OR tenants OR lessee) → 2 (`edu-no-truth-in-renting-act-ga`)
- (dispossessory OR eviction) w/30 ("social security" OR benefit OR benefits OR voucher OR subsidy OR assistance) → 2 (`edu-no-benefit-delay-defense-ga`, `edu-no-shutdown-rent-protection-ga`)
- ("statute of frauds" OR "required to be in writing") w/30 (lease OR land OR "real estate") → 39 (`edu-statute-of-frauds-lease-ga`)
- zqxvbnmwte → 0 (control)
- (fee OR fees OR charge OR charges OR cost OR costs) w/15 (notice OR dispossessory OR eviction OR filing) w/30 (tenant OR lease OR "rental agreement") → 27 (`edu-no-eviction-fee-ban-ga`)
- (penalty OR penalties) w/15 (lease OR tenant OR "rental agreement") → 20 (`edu-no-eviction-fee-ban-ga`)
- (condemn OR condemned OR condemnation OR "unfit for human habitation" OR "vacate order") w/30 (rent OR tenant OR tenants OR landlord OR dwelling) → 49 (`edu-no-rent-demand-bar-ga`, `edu-condemned-premises-ga`)
- (variance OR waiver OR exception) w/30 ("housing code" OR "building code" OR "sanitary code" OR "minimum standards") w/30 (tenant OR tenants OR lease OR landlord) → 0 (`edu-no-sanitary-code-variance-ga`)
- (dispossessory OR "demand for possession") w/30 ("criminal activity" OR drug OR drugs OR violent OR felony OR nuisance) → 0 (`edu-no-expedited-criminal-eviction-ga`, `edu-no-drug-free-housing-program-ga`)
- (sprinkler OR sprinklers) w/30 (dwelling OR apartment OR residential OR tenant OR landlord OR "multifamily") → 4 (`edu-no-residential-sprinkler-mandate-ga`)
- ("incapacity" OR "incapacitated" OR "incompetent" OR "insanity") w/30 (lease OR tenancy OR tenant OR "tenancy at will") → 11 (`edu-no-infirmity-termination-ga`)
- (minor OR minors OR "under 18" OR "under the age") w/30 (lease OR tenant OR dispossessory OR "rental agreement") → 25 (`edu-minor-tenants-ga`)
- ("window guard" OR "window guards" OR "burglar bar" OR "burglar bars" OR "security bars" OR "window bars") → 2 (`edu-no-window-guard-rule-ga`)
- "confession of judgment" OR "confess judgment" OR "cognovit" OR "warrant of attorney" → 35 (`edu-no-confession-of-judgment-lease-ga`)
- ("rent receipt" OR "receipt for rent" OR receipts) w/30 (tenant OR landlord OR rent) → 34 (`edu-repair-duty-not-severable-ga`)
- (balcony OR balconies OR deck OR decks OR "exterior elevated") w/30 (inspect OR inspection OR inspected) → 3 (`edu-no-balcony-inspection-rule-ga`)
- ("swimming pool" OR pool OR pools OR spa) w/30 (barrier OR fence OR fencing OR enclosure OR safety) w/30 (apartment OR residential OR rental OR tenant OR landlord OR dwelling) → 0 (`edu-pool-rules-ga`)
- (jury) w/15 (waive OR waiver OR waived) w/30 (contract OR lease OR agreement) → 17 (`edu-jury-waiver-ga`)
- ("water heater" OR "hot water") w/30 (temperature OR degrees OR thermostat) → 10 (`edu-no-water-heater-temperature-rule-ga`, `edu-confirmed-absences-habitability-ga`)
- (rent OR rents) w/30 ("assignment of rents" OR "assign the rents" OR "collect the rents") w/30 (repair OR repairs OR habitable OR habitability) → 0 (`edu-repair-duty-not-severable-ga`)
- (heat OR heating OR "heating equipment") w/30 (tenant OR landlord OR lessee OR "rental agreement" OR dwelling OR premises) w/30 (furnish OR provide OR supply OR maintain OR temperature) → 8 (`edu-no-heat-standard-ga`)
- "usufruct" w/30 (lease OR tenant OR landlord OR rent) → 25 (`edu-usufruct-lease-ga`, `edu-no-double-letting-rule-ga`)
- (arbitration OR arbitrate) w/30 (lease OR tenant OR landlord OR "real property" OR "residential") → 34 (run for a later batch)
- ("common area" OR "common areas" OR hallway OR hallways) w/30 (lighting OR lights OR illuminated OR illumination) → 1 (`edu-no-common-area-lighting-rule-ga`)
- ("life estate" OR "life tenant") w/30 (lease OR lessee OR tenant) → 89 (`edu-usufruct-lease-ga`)
- (waive OR waiver OR waives) w/30 ("acceptance of rent" OR "accepting rent" OR "accepts rent" OR "receipt of rent" OR "accepts payment") → 1 (`edu-waiver-by-acceptance-ga`)
- ("acceptance of rent" OR "accepting rent" OR "accepts rent" OR "partial payment" OR "partial rent") w/30 (tenant OR landlord OR dispossessory OR lease) → 7 (`edu-redemption-ga`, `edu-waiver-by-acceptance-ga`)
- ("self-help" OR lockout OR "lock out" OR "locked out" OR "change the locks" OR "changing the locks") w/30 (tenant OR landlord OR premises OR dwelling) → 7 (`edu-no-lockout-for-rent-ga`)
- (tenant OR tenants OR "tenant organization" OR "tenants association" OR "tenant association") w/30 (organize OR organizing OR organization OR association OR assemble) → 29 (`edu-no-tenant-rights-guide-ga`, `edu-tenant-organizing-ga`)
- ("bankruptcy") w/30 (tenant OR lessee OR dispossessory OR "writ of possession") → 22 (`edu-tenant-bankruptcy-ga`)
- ("writ of possession" OR dispossessory) w/30 (sheriff OR marshal OR constable) w/30 (property OR belongings OR "personal property" OR animal OR animals OR pet OR pets) → 8 (`edu-post-eviction-property-ga`)
- (exculpate OR exculpatory OR "hold harmless" OR indemnify OR indemnity) w/30 (lease OR landlord OR tenant OR lessor OR lessee) → 26 (`edu-exculpatory-clauses-ga`, `edu-no-knowing-use-penalty-ga`)
- ("radiator" OR radiators) w/30 (cover OR covers OR guard OR guards) → 0 (`edu-no-radiator-cover-rule-ga`)
- ("possession bond" OR "bond for possession" OR "supersedeas") w/30 (tenant OR landlord OR dispossessory OR lease) → 3 (`edu-no-possession-bond-ga`)
- ("smoke-free" OR "smokefree" OR smoking) w/30 (apartment OR apartments OR "multi-unit" OR "multifamily" OR residential OR dwelling OR "common area") → 8 (`edu-no-smoke-free-statute-ga`)
- unconscionable OR unconscionability → 58 (`edu-no-unconscionability-statute-ga`)
- (lock OR locks OR deadbolt OR deadbolts OR "door viewer" OR peephole OR rekey OR rekeyed OR "security device") w/30 (tenant OR landlord OR dwelling OR apartment OR premises) → 36 (`edu-security-devices-ga`)
- (key OR keys) w/30 (control OR policy OR employee OR employees) w/30 (apartment OR apartments OR tenant OR complex) → 2 (`edu-no-key-control-statute-ga`)
- ("plain language" OR "plain English" OR "readable" OR readability) w/30 (lease OR contract OR agreement OR consumer) → 33 (`edu-no-plain-language-law-ga`, `edu-no-translation-duty-ga`)
- (employee OR employees OR staff) w/30 ("background check" OR screening OR "criminal history") w/30 (apartment OR apartments OR tenant OR tenants OR residential OR "senior housing") → 0 (`edu-no-employee-screening-rule-ga`)
- "written in plain" OR "plain English" OR "in plain language" OR "easily readable" OR "simple and understandable" → 17 (`edu-no-plain-language-law-ga`)
- "International Fire Code" OR "Life Safety Code" OR "International Building Code" OR "International Property Maintenance Code" → 12 (run for a later batch)
- ("type size" OR "point type" OR "10-point" OR "12-point" OR "boldface" OR "bold type" OR "bold-faced") w/30 (lease OR "rental agreement" OR tenant OR landlord) → 3 (`edu-no-initials-rule-ga`)
- (edition OR editions) w/30 (code OR codes OR standard OR standards) w/30 (incorporated OR adopted OR "by reference") → 8 (`edu-fire-code-standard-ga`, `edu-code-edition-at-construction-ga`)
- (translate OR translation OR "language other than English" OR Spanish) w/30 (lease OR "rental agreement" OR tenant OR landlord) → 0 (`edu-no-translation-duty-ga`)
- ("limitation" OR limitations OR "shall be brought within") w/30 (rent OR rents OR lease OR landlord) → 279 (run for a later batch)
- ("partial payment" OR "part payment" OR acknowledgment OR "new promise") w/30 (limitation OR limitations OR renew OR revive OR toll) → 48 (run for a later batch)
- "double letting" OR "let the same premises" OR "rent the same premises" OR ("same dwelling" w/10 (two OR another) w/10 (tenant OR tenants)) → 0 (`edu-no-double-letting-rule-ga`)
- "nonresident" w/30 (landlord OR owner OR lessor) w/30 (rent OR rental OR agent OR withhold OR withholding) → 4 (`edu-nonresident-owner-agent-ga`)
- zqxvbnmwtc → 0 (control)
- (tenant OR lessee OR occupant) w/30 (fine OR fines OR penalty OR penalties) w/30 (landlord OR owner) w/30 (reimburse OR reimbursement OR "pass through" OR charge) → 1 (run for a later batch)
- ("automatic renewal" OR "automatically renew" OR "automatically renews" OR "auto-renewal" OR "renew automatically")  → 35 (`edu-automatic-renewal-ga`)
- (submeter OR submetering OR submetered OR "sub-meter" OR "submeters")  → 3 (`edu-water-submetering-ga`)
- ("month-to-month" OR "month to month" OR periodic OR "tenancy at will") w/30 ("fixed term" OR "fixed-term" OR "more burdensome" OR parity) → 0 (`edu-no-lease-type-parity-ga`)
- (utility OR utilities OR electricity OR water OR gas) w/30 (tenant OR tenants OR lessee) w/30 (allocate OR allocation OR apportion OR apportionment OR "ratio utility" OR "master meter" OR "master-metered") → 6 (`edu-water-submetering-ga`)
- (lease OR "rental agreement") w/30 ("first page" OR "commencement date" OR "start date" OR "ending date") → 2 (`edu-lease-content-requirements-ga`)
- (disconnect OR disconnection OR terminate OR termination OR "shut off" OR shutoff) w/30 (utility OR service OR electric OR water OR gas) w/30 (tenant OR tenants OR landlord OR "rental unit" OR occupant) → 13 (`edu-no-notice-to-vacate-extra-terms-ga`, `edu-no-utility-shutoff-rule-ga`, `edu-no-utility-notice-authorization-ga`)
- (utility OR utilities OR water OR sewer OR garbage) w/30 lien w/30 (tenant OR tenants OR lessee OR owner OR landlord) → 10 (`edu-utility-liens-tenant-bills-ga`)
- ("copy of the lease" OR "copy of the rental agreement" OR "copy of such lease" OR "executed copy" OR "signed copy")  → 25 (run for a later batch)
- (utility OR utilities OR account) w/30 (transfer OR transferred OR "in the name of") w/30 (tenant OR tenants OR landlord) → 3 (`edu-no-utility-transfer-rule-ga`)
- ("cable television" OR cable OR satellite OR broadband OR telecommunications) w/30 (tenant OR tenants OR apartment OR apartments OR "multifamily" OR landlord) → 1 (run for a later batch)
- ("energy usage" OR "energy use" OR benchmarking OR "usage data" OR "energy data") w/30 (tenant OR tenants OR building OR owner) → 3 (run for a later batch)
- ("electric vehicle" OR "charging station" OR "charging stations" OR "charging station") w/30 (tenant OR tenants OR lessee OR landlord OR apartment OR condominium OR association) → 3 (`edu-no-ev-charging-end-of-tenancy-rule-ga`, `edu-no-ev-shared-area-rule-ga`, `edu-ev-charging-stations-ga`)
- (solar OR "solar energy") w/30 (tenant OR tenants OR lessee OR landlord OR restriction OR covenant OR association) → 4 (`edu-no-portable-solar-right-ga`)
- ("air conditioning" OR "air conditioner" OR "window unit" OR cooling) w/30 (tenant OR tenants OR landlord OR lessee OR dwelling) → 16 (`edu-no-portable-cooling-right-ga`)
- (recycle OR recycling OR recyclable) w/30 (apartment OR apartments OR "multifamily" OR tenant OR tenants OR landlord) → 2 (`edu-no-recycling-notice-ga`)
- ("private well" OR well OR wells) w/30 (test OR testing OR tested) w/30 (tenant OR lease OR rental OR landlord OR dwelling) → 0 (`edu-no-private-well-testing-ga`)
- asbestos w/30 (tenant OR tenants OR lease OR landlord OR residential OR dwelling OR notify OR notice) → 9 (`edu-no-asbestos-tenant-notice-ga`)
- (drywall OR "chinese drywall" OR "corrosive drywall") → 15 (`edu-no-drywall-disclosure-ga`)
- (contamination OR contaminated OR "hazardous substance" OR "environmental covenant" OR brownfield) w/30 (lease OR lessee OR tenant OR tenants OR disclose OR disclosure) → 17 (`edu-no-contamination-disclosure-ga`)
- ("military installation" OR "military base" OR "air installation" OR "accident potential" OR "noise zone") w/30 (lease OR lessee OR tenant OR disclose OR disclosure OR notice) → 4 (`edu-no-military-zone-disclosure-ga`)
- (shoreline OR shore OR beach OR "marshlands" OR "tidelands") w/30 (lease OR tenant OR disclose OR disclosure OR access) → 14 (`edu-no-shoreline-disclosure-ga`)
- (ordnance OR munitions OR "demolition permit" OR demolish OR demolition) w/30 (tenant OR tenants OR lease OR "prospective tenant" OR disclose) → 4 (`edu-no-ordnance-demolition-disclosure-ga`)
- ("certificate of occupancy") w/30 (tenant OR tenants OR lease OR landlord OR rent OR rental) → 1 (run for a later batch)
- (cure OR cured) w/20 (lease OR tenant OR tenancy OR "rental agreement") w/20 (breach OR default OR violation) → 2 (`edu-eviction-grounds-no-cure-ga`)
- ("sex offender" OR "sexual offender") w/30 (tenant OR tenants OR lease OR landlord OR rental OR reside OR residence) → 8 (`edu-no-sex-offender-disclosure-ga`, `edu-sex-offender-residency-ga`)
- "real estate" w/10 (contract OR contracts) w/30 arbitration → 4 (run for a later batch)
- ("pest control" OR pesticide OR pesticides OR extermination) w/30 (tenant OR tenants OR occupant OR occupants OR notice OR notify) w/30 (apartment OR residential OR dwelling OR landlord) → 0 (`edu-no-pest-control-notice-ga`)
- ("bed bug" OR "bed bugs" OR bedbug OR bedbugs) → 5 (`edu-no-pest-control-notice-ga`, `edu-no-bed-bug-cooperation-rule-ga`, `edu-no-health-district-rental-rules-ga`)
- (waterbed OR waterbeds OR "water bed" OR "water beds") → 1 (`edu-no-waterbed-rule-ga`)
- ("certificate" OR certification OR "lead-safe" OR "lead free" OR "lead-free") w/30 (lead w/5 (paint OR hazard OR hazards)) w/30 (rental OR tenant OR lease OR dwelling) → 0 (`edu-no-lead-safe-certificate-ga`)
- zqxvbnmwtf → 0 (control)
- (corporation OR corporations OR "limited liability company" OR partnership OR entity) w/30 ("magistrate court" OR dispossessory) w/30 (represent OR represented OR appear OR "attorney at law" OR "practice of law" OR officer OR employee) → 3 (`edu-entity-landlord-representation-ga`)
- (seasonal OR vacation OR "short-term rental" OR "short term rental" OR "vacation rental") w/30 (tenant OR tenancy OR lease OR rental OR occupant OR guest) → 22 (`edu-seasonal-and-hotel-stays-ga`)
- (death OR dies OR died OR deceased OR incapacity) w/30 ("tenancy at will" OR lease OR tenancy OR tenant) w/30 (terminate OR termination OR end OR ends OR notice) → 22 (`edu-no-infirmity-termination-ga`)
- (serve OR service OR served) w/15 (agent OR designate OR designated OR "registered agent") w/30 (dispossessory OR tenant OR summons) → 21 (`edu-dispossessory-service-ga`)
- "address confidentiality" OR "confidential address" OR (("family violence" OR stalking) w/30 address w/30 (confidential OR confidentiality OR shield)) → 13 (`edu-dv-address-confidentiality-ga`)
- ("family violence" OR stalking OR "protective order") w/30 (lock OR locks OR rekey OR "change the locks") → 0 (`edu-no-dv-lock-change-ga`)
- ("family violence" OR stalking OR "protective order") w/30 (dispossessory OR evict OR eviction OR terminate OR "rental agreement") → 11 (`edu-dv-qualifying-documents-ga`, `edu-no-dv-eviction-defense-ga`, `edu-no-dv-lock-change-ga`, `edu-dv-deposit-timing-ga`)
- ("criminal trespass" OR trespass) w/30 (tenant OR tenants OR landlord OR "common area" OR apartment OR premises) w/30 (notice OR notify OR forbid OR forbidden) → 10 (`edu-trespass-notice-ga`)
- zqxvbnmwtg → 0 (control)
- ("smoke detector" OR "smoke alarm" OR "smoke detectors" OR "carbon monoxide") w/30 (tamper OR tampering OR disable OR disabled OR remove OR removal)  → 0 (`edu-alarm-tampering-ga`)
- (relocation OR relocate OR "alternate housing" OR "alternative housing" OR "temporary housing") w/30 (tenant OR tenants OR landlord OR displaced) → 37 (`edu-no-relocation-duty-ga`)
- (appliance OR appliances OR stove OR range OR refrigerator) w/30 (landlord OR tenant OR lease OR "rental agreement" OR dwelling) → 18 (`edu-no-appliance-rule-ga`)
- (police OR "law enforcement") w/30 (tenant OR tenants OR landlord OR lease) w/30 (cooperate OR cooperation OR call OR calls OR report) → 6 (`edu-no-law-enforcement-cooperation-rule-ga`)
- ("writ of possession" OR dispossessory) w/30 (December OR holiday OR weather OR "extreme heat" OR "heat advisory") → 3 (`edu-no-cold-weather-eviction-rule-ga`)
- (condominium OR "property owners association" OR "homeowners association") w/30 (lease OR leasing OR tenant OR tenants OR lessee OR rent) → 54 (`edu-association-rules-bind-tenants-ga`, `edu-condominium-conversion-ga`, `edu-no-association-obligations-lease-disclosure-ga`)
- ("prepaid rent" OR "rent paid in advance" OR "advance rent") w/30 (tenant OR landlord OR lease OR sale OR purchaser) → 1 (`edu-deposit-last-month-rent-ga`)
- zqxvbnmwth → 0 (control)
- "notice" w/10 ("in writing" OR written) w/30 (tenant OR landlord OR lease OR "rental agreement") w/30 (terminate OR termination OR vacate) → 7 (`edu-written-notices-ga`)
- (electronic OR "e-mail" OR email OR "text message") w/30 (notice OR notices) w/30 (tenant OR landlord OR lease OR "rental agreement") → 11 (run for a later batch)
- ("medical cannabis" OR "low THC oil" OR "low THC" OR marijuana OR cannabis) w/30 (tenant OR lease OR landlord OR residence OR dwelling OR housing) → 29 (`edu-cannabis-ga`, `edu-no-drug-free-housing-program-ga`)
- (student OR students OR dormitory OR "student housing") w/30 (lease OR tenant OR housing OR rental) → 76 (`edu-student-housing-ga`)
- (employee OR employer OR caretaker OR servant) w/30 (housing OR dwelling OR premises OR quarters) w/30 (vacate OR terminate OR possession OR eviction) → 34 (`edu-employee-housing-ga`)
- "mobile home park" OR "manufactured home community" OR "manufactured housing community" OR "mobile home parks" → 14 (`edu-no-smart-access-rule-ga`, `edu-scope-ga`)
- (senior OR elderly OR "55 and older" OR "older persons") w/30 (housing OR apartment OR residential) w/30 (employee OR staff OR exempt OR exemption) → 8 (`edu-no-senior-housing-staff-rule-ga`)
- ("electronic lock" OR "smart lock" OR keyless OR "access control") w/30 (tenant OR dwelling OR apartment OR residential) → 1 (`edu-no-smart-access-rule-ga`)
- (child OR children OR "familial status") w/30 (occupancy OR occupants OR tenant OR tenancy OR rental) w/30 (refuse OR deny OR terminate OR discriminate) → 7 (`edu-children-occupancy-ga`)
- (lien OR liens) w/30 (lessee OR tenant OR leasehold) w/30 (improvement OR improvements OR contractor OR materialman OR consent) → 22 (`edu-construction-liens-tenant-work-ga`)
- ("fair business practices" OR "unfair or deceptive") w/30 (lease OR leases OR rental OR landlord OR tenant) → 6 (`edu-fair-business-practices-act-ga`)
- ("federal employee" OR "government shutdown" OR furlough OR furloughed) w/30 (rent OR tenant OR lease OR eviction) → 0 (`edu-no-shutdown-rent-protection-ga`)
- ("rental units" OR "dwelling units") w/15 (four OR five OR ten OR "more than") w/30 (landlord OR owner OR exempt OR exemption) → 1 (`edu-portfolio-threshold-ga`)
- ("communicable disease" OR "health department" OR "board of health") w/30 (rental OR "rental housing" OR tenant OR landlord) → 1 (`edu-no-health-district-rental-rules-ga`)
- (rule OR rules OR regulations) w/30 (tenant OR tenants OR "rental agreement" OR lease) w/30 (amend OR amended OR change OR modify OR modification OR adopt OR adopted) → 19 (run for a later batch)
- (radon OR mold OR asbestos OR lead) w/30 (disclose OR disclosure OR notify) w/30 (tenant OR lessee OR rental) → 0 (run for a later batch)
- (interpreter OR "language access" OR "limited English") w/30 (tenant OR housing OR lease OR rental OR landlord) → 0 (`edu-no-translation-duty-ga`)
- ("reasonable accommodation" OR "reasonable modification" OR "reasonable accommodations" OR "reasonable modifications") w/30 (housing OR dwelling OR tenant OR landlord OR rental) → 4 (`edu-disability-accommodation-ga`, `edu-advertising-and-inquiries-ga`)
- (disaster OR "state of emergency" OR hurricane OR "declared emergency") w/30 (tenant OR tenants OR rent OR lease OR eviction OR dispossessory) → 8 (`edu-no-environmental-termination-ga`)
- ("option to purchase" OR "lease-purchase" OR "rent-to-own" OR "lease with an option") w/30 ("real property" OR residence OR dwelling OR home) → 23 (`edu-option-to-purchase-ga`)
- (condemn OR condemnation OR "eminent domain" OR taking) w/30 (lease OR leasehold OR lessee OR tenant) w/30 (rent OR terminate OR termination OR compensation OR apportion) → 65 (run for a later batch)
- (eviction OR dispossessory) w/30 (record OR records OR registry OR report) w/30 (tenant OR seal OR sealed OR confidential) → 6 (run for a later batch)
- (nuisance) w/30 (lease OR tenant OR landlord OR premises) w/30 (abate OR abatement OR void OR forfeit OR forfeiture OR padlock OR closure) → 9 (`edu-nuisance-ga`)
- ("firearm" OR firearms OR weapon OR weapons OR gun OR guns) w/30 (lease OR tenant OR tenants OR landlord OR apartment OR residence OR "rental property") → 61 (`edu-firearms-in-leases-ga`)
- (foreclosure OR foreclosed OR "power of sale" OR "sale under power") w/30 (tenant OR tenants OR lease OR lessee OR occupant OR dispossessory) → 62 (`edu-foreclosure-ga`, `edu-no-foreclosure-disclosure-ga`)
- (water OR sewer OR garbage OR sanitation) w/30 (tenant OR tenants OR occupant) w/30 (bill OR bills OR charge OR charges OR deposit OR account) → 11 (run for a later batch)
- ("nonresident alien" OR "foreign adversary" OR "foreign principal" OR "foreign government" OR alien) w/30 (land OR "real property" OR lease OR acquire OR acquisition) → 10 (`edu-foreign-ownership-ga`)
- (repair OR repairs) w/30 (tenant OR lessee) w/30 (agree OR agreement OR agrees OR deduct OR withhold OR escrow) → 23 (`edu-landlord-breach-remedies-ga`, `edu-tenant-repair-agreements-ga`, `edu-confirmed-absences-habitability-ga`, `edu-repair-duty-not-shiftable-ga`, `edu-no-written-repair-promise-rule-ga`, `edu-tenant-repair-remedies-ga`, `edu-no-repair-cost-termination-ga`, `edu-no-repair-escrow-ga`)
- (notice OR notify) w/15 (repair OR repairs OR defect OR defects) w/30 (landlord OR tenant OR lessor) → 9 (`edu-no-habitability-materiality-rule-ga`, `edu-confirmed-absences-habitability-ga`, `edu-no-designated-repairer-rule-ga`, `edu-no-repair-notice-rule-ga`)
- (furnish OR furnished OR furniture OR furnishings) w/30 (lease OR tenant OR landlord OR "rental agreement" OR dwelling) → 108 (run for a later batch)
- (fine OR fines OR citation OR penalty) w/30 (ordinance OR code OR "code enforcement") w/30 (tenant OR tenants OR occupant OR owner OR landlord) → 63 (run for a later batch)
- zqxvbnmwti → 0 (control)
- (guaranty OR guarantor OR surety OR suretyship) w/30 (lease OR rent OR renewal OR extension OR modification) → 89 (run for a later batch)
- (guest OR guests OR visitor OR visitors OR invitee) w/30 (tenant OR tenants OR "rental agreement" OR lease OR landlord) w/30 (right OR rights OR fee OR fees OR prohibit) → 9 (`edu-no-guest-rights-statute-ga`)
- ("home-based business" OR "home based business" OR "home occupation" OR "home business") → 3 (`edu-no-home-business-statute-ga`)
- ("child care" OR "day care" OR "family day care" OR "family child care") w/30 (tenant OR lease OR landlord OR residence OR dwelling) → 17 (`edu-no-family-child-care-right-ga`)
- (hunt OR hunting OR fishing OR fish) w/30 (lessee OR tenant OR lease) w/30 (permission OR consent OR written) → 6 (run for a later batch)
- ("Uniform Fire Code" OR "fire code" OR "minimum fire safety standards" OR "state minimum standard codes") w/30 (dwelling OR apartment OR residential OR multifamily) → 5 (`edu-alarm-tampering-ga`, `edu-fire-code-standard-ga`)
- ("minimum standards" OR "housing code" OR "housing codes") w/30 (dwelling OR dwellings OR rental OR tenant) → 5 (`edu-habitability-statement-ga`, `edu-habitability-modifiable-ga`, `edu-no-habitability-materiality-rule-ga`, `edu-no-habitability-presumption-ga`, `edu-confirmed-absences-habitability-ga`, `edu-no-sanitary-code-variance-ga`)
- (animal OR animals OR pet OR pets) w/30 (abandon OR abandoned OR care OR feed OR custody) w/30 (tenant OR premises OR landlord OR dwelling OR "rental property") → 8 (run for a later batch)
- (heat OR heating OR "hot water" OR "running water") w/30 (waive OR waiver OR agreement OR "in writing") → 6 (`edu-habitability-not-waivable-ga`)
- (sprinkler OR sprinklers) w/30 (retrofit OR existing OR "high-rise" OR "high rise" OR apartment OR residential) → 3 (`edu-no-residential-sprinkler-mandate-ga`)
- (tribal OR tribe OR "Indian" OR reservation) w/30 (lease OR leases OR land OR lands) w/30 (approval OR approve OR consent) → 4 (`edu-no-communal-land-approval-ga`)
- ("insurance" OR insured OR insurer) w/30 (tenant OR tenants OR lessee OR "renter" OR "renters") w/30 (landlord OR lessor OR premises OR property) → 50 (`edu-renters-insurance-rules-ga`, `edu-no-tenant-claims-rule-ga`, `edu-no-landlord-insurance-mandate-ga`)
- (emergency OR "24-hour" OR "after-hours") w/30 (contact OR telephone OR number) w/30 (tenant OR tenants OR apartment OR management OR landlord) → 41 (`edu-no-emergency-contact-rule-ga`)
- (absence OR absent OR absences) w/30 (tenant OR lessee OR occupant) w/30 (notice OR notify OR days) → 9 (run for a later batch)
- (screen OR screening OR "consumer report" OR "criminal history" OR "credit report") w/30 (tenant OR tenants OR applicant OR applicants OR rental OR housing) → 67 (`edu-tenant-screening-ga`, `edu-no-rent-reporting-rule-ga`)
- ("Social Security number" OR "personal information" OR "personal data") w/30 (tenant OR tenants OR landlord OR applicant OR applicants OR lessee) → 30 (`edu-no-tenant-records-rule-ga`, `edu-no-tenant-information-disclosure-rule-ga`)
- (inspect OR inspection OR inspector OR inspectors) w/30 (rental OR dwelling OR tenant OR tenants) w/30 (warrant OR consent OR entry OR access OR enter) → 10 (`edu-rental-inspection-ga`)
- (knowingly OR willfully) w/30 (lease OR "rental agreement") w/30 (provision OR term OR clause) w/30 (void OR prohibited OR unenforceable) → 0 (`edu-no-knowing-use-penalty-ga`)
- ("rent reporting" OR "credit bureau" OR "consumer reporting agency") w/30 (rent OR tenant OR tenants OR landlord) → 0 (`edu-no-rent-reporting-rule-ga`)
- ("owner occupancy" OR "owner-occupied" OR "personal use" OR "own use" OR "owner occupied") w/30 (tenant OR terminate OR termination OR possession) → 35 (run for a later batch)
- ("sales tax" OR "sales and use tax" OR "hotel-motel" OR "excise tax") w/30 (rent OR rental OR lodging OR "living quarters" OR accommodations) → 49 (`edu-rent-tax-ga`)
- (pet OR pets OR dog OR dogs OR cat OR cats) w/30 (eviction OR dispossessory OR "writ of possession" OR landlord OR tenant) → 13 (`edu-no-pet-eviction-fact-sheet-ga`)
- (parking OR tow OR towing OR "parking facility") w/30 (tenant OR tenants OR apartment OR residential OR lease) → 115 (`edu-no-parking-statute-ga`)
- (veteran OR veterans) w/30 (rent OR rental OR housing OR landlord OR lease OR incentive) → 27 (`edu-no-veterans-rental-incentive-ga`)
- ("religious" OR religion) w/30 (display OR displays OR symbol OR symbols) w/30 (door OR dwelling OR tenant OR association) → 0 (`edu-no-display-rights-statute-ga`)
- (candidate OR candidates OR canvass OR canvassing OR political) w/30 (apartment OR tenant OR tenants OR multifamily OR residential) w/30 (access OR enter OR solicit OR door) → 3 (`edu-no-political-access-right-ga`)
- (flag OR flags OR "political sign" OR "political signs" OR sign OR signs) w/30 (tenant OR tenants OR lessee OR association OR "rental property") → 86 (`edu-no-display-rights-statute-ga`)
- ("satellite" OR antenna OR "over-the-air" OR cable) w/30 (tenant OR tenants OR apartment OR multifamily OR "multiple dwelling" OR landlord) → 2 (`edu-no-telecom-access-rule-ga`)
- ("water heater" OR "hot water") w/30 (tenant OR landlord OR rental OR dwelling OR apartment) → 3 (`edu-no-water-heater-temperature-rule-ga`)
- waterbed OR waterbeds OR "water bed" OR "liquid-filled furniture" → 1 (run for a later batch)
- ("lead" w/5 paint OR "lead-based") w/30 (tenant OR tenants OR rental OR lessor OR disclose OR disclosure OR notice) → 3 (run for a later batch)
- ("pool" OR pools OR "swimming pool" OR "public pool") w/30 (rule OR rules OR regulation OR regulations OR permit OR barrier) → 69 (run for a later batch)
- (record OR recorded OR recording) w/15 (lease OR leases OR "memorandum of lease") w/30 (notice OR purchaser OR "bona fide" OR priority) → 9 (run for a later batch)
- ("bed bug" OR "bed bugs" OR bedbug OR bedbugs OR pest OR pests OR vermin OR rodent OR rodents) w/30 (tenant OR tenants OR landlord OR dwelling OR rental) → 8 (run for a later batch)
- zqxvbnmwtj → 0 (control)
- (cancer OR "reproductive harm" OR "reproductive toxicity") w/30 (warning OR notice) w/30 (tenant OR rental OR premises OR dwelling) → 0 (`edu-no-prop65-equivalent-ga`)
- (disconnect OR disconnection OR "shut off" OR termination) w/30 (electric OR electricity OR gas OR water OR utility) w/30 (winter OR temperature OR medical OR "life support" OR weather OR emergency) → 1 (`edu-no-utility-shutoff-rule-ga`)
- (landlord OR owner) w/30 (utility OR electric OR water OR gas) w/30 (account OR bill OR bills) w/30 (tenant OR tenants OR occupant) → 7 (`edu-landlord-utility-account-ga`)
- (misrepresent OR misrepresentation OR falsely OR "false representation") w/30 ("service animal" OR "service dog" OR "assistance animal" OR "assistance dog") → 1 (`edu-service-dog-misrepresentation-ga`)
- (resell OR resale OR "master meter" OR "master-metered" OR "master metered") w/30 (electric OR electricity OR gas OR water) → 37 (`edu-utility-cost-cap-ga`)
- (voucher OR "housing choice" OR "Section 8" OR subsidized OR "housing assistance") w/30 (tenant OR landlord OR inspection OR rent OR "late fee") → 18 (`edu-no-subsidy-late-fee-rule-ga`, `edu-no-voucher-inspection-rule-ga`, `edu-no-subsidy-proration-rule-ga`)
- (conservation OR surcharge) w/30 (meter OR meters OR metered) w/30 (tenant OR tenants OR landlord OR apartment) → 0 (`edu-no-meter-conservation-charge-ga`)
- (conversion OR converted OR convert) w/30 (condominium OR cooperative) w/30 (tenant OR tenants OR lessee OR notice) → 5 (run for a later batch)
- ("garage door" OR elevator OR elevators OR escalator OR escalators) w/30 (owner OR landlord OR apartment OR residential OR building) w/30 (inspect OR inspection OR safety OR duty) → 12 (`edu-elevator-duties-ga`)
- ("ad valorem" OR "property tax" OR taxes) w/30 (tenant OR tenants OR lessee) w/30 (pass OR increase OR escalation OR reimburse OR share) → 13 (`edu-tax-escalation-ga`, `edu-no-property-tax-rent-statement-ga`)
- (inspection OR condemnation OR "repair order" OR violation) w/30 (disclose OR disclosure OR notify) w/30 (tenant OR tenants OR "prospective tenant" OR lessee) → 6 (`edu-no-inspection-order-disclosure-ga`)
- (inquire OR inquiry OR inquiries OR ask) w/30 (race OR religion OR "national origin" OR familial OR disability OR handicap) w/30 (rental OR dwelling OR housing OR sale) → 0 (`edu-advertising-and-inquiries-ga`)
- ("unfit for human habitation" OR "fit for human habitation" OR uninhabitable OR habitability OR habitable) → 23 (run for a later batch)
- ("special district" OR "community improvement district" OR "tax allocation district" OR "special service district") w/30 (tenant OR lessee OR vote OR representation OR election) → 63 (`edu-no-special-district-tenant-rule-ga`)
- (notice OR notify) w/30 (tenant OR tenants) w/30 (foreclosure OR "tax sale" OR receivership OR bankruptcy) w/30 (landlord OR owner) → 4 (`edu-attornment-and-adverse-claims-ga`)
- (window OR windows) w/30 (guard OR guards OR screen OR screens OR bars OR lock OR locks) w/30 (dwelling OR apartment OR tenant OR landlord OR building) → 5 (`edu-no-window-guard-rule-ga`)
- ("security deposit" OR deposit) w/30 ("family violence" OR stalking OR "protective order") → 1 (run for a later batch)
- ("swimming pool" OR pools OR pool) w/30 (apartment OR residential OR multifamily OR "public pool" OR "semi-public") → 22 (`edu-pool-rules-ga`)
- (mediation OR mediate OR "dispute resolution") w/30 (tenant OR landlord OR lease OR dispossessory) → 2 (run for a later batch)
- ("public housing" OR "housing authority") w/30 (lease OR tenant OR tenants OR eviction OR grievance) → 17 (run for a later batch)
- ("security" OR safety) w/30 (lock OR locks OR deadbolt OR deadbolts OR lighting) w/30 ordinance → 0 (run for a later batch)
- (enter OR entry OR access) w/30 (landlord OR lessor OR owner) w/30 (notice OR "reasonable time" OR emergency) w/30 (tenant OR premises OR dwelling) → 9 (run for a later batch)
- (certificate w/5 occupancy) w/30 (dwelling OR rental OR building OR occupy OR occupied) → 10 (`edu-no-certificate-of-occupancy-disclosure-ga`)
- (guest OR guests OR occupant OR occupants) w/30 (disaster OR emergency OR displaced OR evacuee OR evacuees) → 7 (`edu-no-disaster-guest-rule-ga`)
- (lead w/5 (poisoning OR hazard OR hazards)) w/30 (owner OR landlord OR tenant OR residence OR dwelling) → 11 (`edu-lead-state-notices-ga`, `edu-no-lead-safe-certificate-ga`)
- zqxvbnmwtk → 0 (control)
- zqxvbnmwtl → 0 (control)
- (deposit OR deposits) w/30 ("last month" OR "final month" OR "last month's rent") → 0 (`edu-deposit-last-month-rent-ga`)
- ("pet fee" OR "pet fees" OR "pet deposit" OR "pet deposits" OR "pet rent") → 3 (`edu-pet-fees-ga`)
- (estoppel w/5 certificate) OR ((sale OR purchaser) w/30 (lease OR tenant) w/30 (disclose OR release OR released)) → 13 (`edu-sale-or-management-change-ga`)
- "rent contract" w/30 (transfer OR transferee OR assign OR assignment) → 3 (`edu-repair-duty-not-severable-ga`)
- (redeem OR redemption OR reinstate) w/30 (tenant OR lease OR dispossessory) → 13 (`edu-nonpayment-tender-defense-ga`)
- (depreciation OR "useful life") w/30 (deposit OR tenant OR lease) → 12 (`edu-carpet-cleaning-ga`)
- "security deposit" w/30 (different OR differ OR uniform OR same) → 0 (`edu-no-deposit-standards-rule-ga`)
- zqxvbnmwtm → 0 (control)
- (Indian OR tribal OR "trust land" OR reservation) w/30 (lease OR tenant OR landlord) → 83 (run for a later batch)
- ("police" OR "law enforcement" OR "emergency assistance" OR "9-1-1") w/30 (tenant OR lease OR evict OR eviction OR dispossessory OR nuisance) → 37 (`edu-no-law-enforcement-cooperation-rule-ga`, `edu-no-dv-eviction-defense-ga`, `edu-nuisance-ga`)
- zqxvbnmwtn → 0 (control)
- (concession OR concessions OR "free rent" OR "reduced rent" OR rebate) w/30 (tenant OR lease OR landlord OR rent) → 17 (`edu-confirmed-absences-misc-ga`)
- (installment OR installments OR "partial payment" OR "partial payments") w/30 (rent OR tenant OR lease) → 52 (run for a later batch)
- (lease OR leasing OR tenant) w/30 (approval OR approve OR consent) w/30 (association OR condominium OR declaration) → 8 (run for a later batch)
- (nuisance OR abatement) w/30 (rent OR rents OR receiver OR receivership OR escrow) → 6 (`edu-nuisance-ga`)

### §4 Decisions and questions to Taylor

Georgia items (answered once each; items 2, 4 and 9 are being completed in later batches):

1. **Waivers, exculpation, attorney fees, liquidated damages, waiver by acceptance.** Answered from O.C.G.A. §§ 44-7-2, 44-7-13 and 44-7-14 (read whole) and § 13-6-7. Batch 1 holds `edu-attorney-fees-ga` and `edu-liquidated-damages-ga`; the exculpation and waiver-by-acceptance rows come in the lease-terms batch and point back to these.
2. **Family violence.** Answered from O.C.G.A. § 44-7-23 (read whole) with Title 19 ch. 13 (§§ 19-13-1, 19-13-3, 19-13-4), § 16-5-94 and the address confidentiality program (§§ 50-18-151, 50-18-153, effective July 1, 2026): `edu-dv-qualifying-documents-ga`, `edu-no-dv-eviction-defense-ga`, `edu-no-dv-lock-change-ga`, `edu-dv-deposit-timing-ga`, `edu-dv-order-statutes-current-ga`, `edu-dv-address-confidentiality-ga`. Georgia has one victim provision for tenants (early termination, non-waivable); no eviction defense, lock-change right or confidentiality duty; FEDERAL: 34 U.S.C. § 12491 for covered housing.
3. **Deposits, fees and receipts:** batch 1, from O.C.G.A. §§ 44-7-30 to 44-7-37 read whole. The ten-unit exemption (O.C.G.A. § 44-7-36) reaches §§ 44-7-31, 44-7-32, 44-7-33 and 44-7-35 only, so the § 44-7-30.1 cap and the § 44-7-34 return and wear-and-tear rules bind every landlord.
4. **Local rules (§ 44-7-19).** O.C.G.A. § 44-7-19 bars counties and cities from regulating 'the amount of rent' on private residential rental property (existing `edu-local-preemption-ga`). Other state limits on local rules found this pass: O.C.G.A. § 36-74-30(b) (as amended by Ga. L. 2025, p. 882, § 1/HB 399, effective July 1, 2025): 'No local government is authorized to perform investigations or inspections of residential rental property unless there is probable cause ... and in no event may a local government require the registration of residential rental property' (`edu-rental-inspection-ga`; see §6 for the existing row it contradicts); O.C.G.A. § 16-11-173(b)(1) preempts local firearm regulation (`edu-firearms-in-leases-ga`). Local powers that remain: minimum security standards (O.C.G.A. § 44-7-4), unfit-dwelling ordinances (O.C.G.A. §§ 36-61-11, 41-2-7 to 41-2-11; non-waivable under § 44-7-2(b)(3); `edu-condemned-premises-ga`). Individual ordinances are flagged, not resolved.
5. **`keys` and `hoa-compliance`:** no conflict with Georgia law found. Georgia has no statute on key return, rekeying or key charges, and none on a tenant's duty to follow association rules that the wording would offend.
6. **Shared clauses GA is tagged on:**
   - `smoking-policy`: reads correctly; Georgia has no statute on smoking in a private dwelling that the clause would breach.
   - `addendum-precedence`: reads correctly; nothing in Title 13 ch. 2 or Title 44 ch. 7 bars a contract term ranking its own parts.
   - `no-alterations`: reads correctly; it does not touch the landlord's non-waivable repair duty (O.C.G.A. §§ 44-7-2(b)(1), 44-7-13).
7. **`early-termination-ks` fee under O.C.G.A. § 13-6-7.** The statute cannot settle it: § 13-6-7 binds the parties to agreed damages "unless the agreement violates some principle of law", and the penalty test is case law this pass has not read. A fee of the greater of one month's Rent or 30% of the remaining Rent grows with the remaining term, which is the shape courts most often treat as a penalty, and Georgia deposits may be kept only for "actual damages caused by the tenant's breach, provided that the landlord attempts to mitigate the actual damages" (O.C.G.A. § 44-7-34(a)). The cautious course is the flat fee the NV, TX, NJ and AZ checks moved to. Proposed override fields (for Claude Code to add at sync, removing GA from `early-termination-ks`'s `states`):
   - `id` early-termination-ga; `group` Default & Termination; `title` Early Termination; `states` GA; `is_active` TRUE; `supersedes` early-termination-ks; `rule_type` REQUIRED; `content_type` LEASE_CLAUSE; `verification_status` VERIFIED; `effective_from` and `last_checked` 2026-11-06; `choice_group` and `is_default` blank; `topic_key` early-termination; `lease_clause_basis` SERVES_LANDLORD.
   - `bodyText`: "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay Landlord, by the termination date, an early termination fee equal to one month's Rent ({{monthly_rent}}), and remains responsible for Rent and other obligations up to the termination date. If Tenant gives that notice, pays the fee and delivers possession of the property by the termination date, Tenant owes no Rent for any period after the termination date. If Tenant leaves before the end of the Term without using this option, Tenant's liability is governed by Georgia law. This early-termination option and fee apply only if this Lease has a fixed Term; a month-to-month or other periodic tenancy ends on the notice that applicable law and this Lease provide, without an early termination fee. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act or O.C.G.A. § 44-7-22 or § 44-7-37, due to a family violence or stalking order under O.C.G.A. § 44-7-23, or due to the property becoming uninhabitable through no fault of Tenant."
   - `notes`: "GA: Override of `early-termination-ks` (GA gaps pass 2026-11-06, Georgia item 7). Flat one-month fee instead of the greater of one month or 30% of remaining Rent: O.C.G.A. § 13-6-7 enforces agreed damages 'unless the agreement violates some principle of law'; penalty case law not read, and a fee that scales with the remaining term is the cautious-course risk. O.C.G.A. § 44-7-34(a) (deposit kept only for actual damages, with mitigation). Military: O.C.G.A. §§ 44-7-22, 44-7-37; FEDERAL: 50 U.S.C. § 3955. Family violence: O.C.G.A. § 44-7-23. Tenancy at will: O.C.G.A. § 44-7-7. Sources as for the GA gaps rows (advance.lexis.com, 'Current through the 2026 Special Session of the General Assembly')."
   - **Question for Taylor:** OK to hand this override to Claude Code at sync? It changes GA off the shared clause, which this pass may not do itself.
8. **`edu-cares-act-notice`:** no GA eviction row contradicts it. `edu-eviction-process-ga` states the CARES 30-day notice for covered properties alongside the Georgia notice to vacate or pay, consistent with the federal row. FEDERAL: 15 U.S.C. § 9058 read whole 2026-11-06.
9. **Currency, 2024-2026 acts touching Title 44 ch. 7** (act numbers and effective dates read on legis.ga.gov; history lines read on each section in Lexis):
   - HB 404 (2024), Ga. L. 2024, p. 91 (Act 392), effective July 1, 2024: O.C.G.A. §§ 44-7-13, 44-7-14.1, 44-7-30.1, 44-7-50. Act PDF read whole.
   - HB 1203 (2024), Ga. L. 2024, p. 403, § 1 (Act 484), effective April 24, 2024: O.C.G.A. § 44-7-55.
   - SB 450 (2024), Ga. L. 2024, p. 201, § 10 (Act 424), effective April 22, 2024: O.C.G.A. § 44-7-56.
   - HB 270 (2025), Ga. L. 2025, p. 626, § 2 (Act 255), effective July 1, 2025: O.C.G.A. § 44-7-51.
   - SB 153 (2025), Ga. L. 2025, p. 1029, § 44(6) (Act 371), effective July 1, 2025: O.C.G.A. § 44-7-55 (Code revision).
   - HB 399 (2025), Ga. L. 2025, p. 882, § 2 (Act 315), effective July 1, 2025: O.C.G.A. § 44-7-25.
   - HB 1268 (2026), Ga. L. 2026, p. 1069, § 44(19), (20), effective July 1, 2026: O.C.G.A. §§ 44-7-20, 44-7-115 (Code revision).
   - SB 406 (2026), Ga. L. 2026, p. 988, § 8 (Act 715), effective January 1, 2027: O.C.G.A. § 44-7-50 (both versions saved).
   - Also outside ch. 7 but relied on: HB 399 § 1 amended O.C.G.A. § 36-74-30 (local registration ban; §6 finding); SB 420 (Ga. L. 2024, p. 446, effective July 1, 2024) and HB 358 (Ga. L. 2025, p. 642, effective July 1, 2025) enacted and amended O.C.G.A. § 2-1-7 (`edu-foreign-ownership-ga`). The address confidentiality article (O.C.G.A. §§ 50-18-150 and following) was enacted by Ga. L. 2024, p. 698, § 3/SB 324, effective July 1, 2026 (history line read).
   - Channel note: effective dates were read on the legis.ga.gov status pages and on each section's Lexis history line. Only the HB 404 act PDF was opened; the other act PDFs were not, so the section lists above come from the history lines.

Other decisions in batch 1:
- `edu-binding-arbitration-ga`: no arbitration clause offered (rule 54). The Georgia Arbitration Code excludes consumer transactions (O.C.G.A. § 9-9-2(c)(7)), and a residential lease is one under O.C.G.A. § 10-1-392(a)(10); how far the Federal Arbitration Act reaches a residential lease is case law not read.
- `carpet-cleaning-ar` tagged GA with two cautions (wear and tear; list the charge), instead of a GA clause.
- `rent-concession-wi` tagged GA (no Georgia concession statute; writing rule and the Fair Business Practices Act noted).
- Dispossessory topics answered from Article 3 read whole; where only case law decides (waiver by acceptance, materiality of a breach, self-help damages, shortening the tenancy-at-will notice), the row says so and gives the cautious course instead of a rule.
- No new clauses so far: every Georgia answer in batches 1 to 3 is an education row or a tag, because Georgia's statutes in these areas either already have a GA clause (`default-by-tenant`, `notices`, `serious-misconduct-prohibition-ga`, `hoa-compliance`) or impose nothing the lease must say.
- Tags (30 in all): shared clauses that read correctly under Georgia law were tagged before any GA row was written (rules 26-28), each with a GA note; `rules-wi` was chosen over `rules-ia` because O.C.G.A. § 13-5-30(b) requires written, signed modifications of leases over a year; `tenant-repair-agreement-hi` was not tagged because O.C.G.A. § 44-7-2(b)(1) bars shifting the repair duty (`edu-tenant-repair-agreements-ga` instead).
- `electronic-notice-ma` tagged with a caution: an e-mail address agreed in the lease may count as an 'additional method ... agreed upon in the rental agreement' for the dispossessory notices (O.C.G.A. § 44-7-50(d)).
- Declined clause options (rule 54): binding arbitration, jury waiver, tenant repair agreements.
- New variables: none.
- "Cooling" in the utility shut-off rule: O.C.G.A. § 44-7-14.1(a) now reads 'cooling, heat, light, and water service'; cooling was added by Ga. L. 2024, p. 91, § 3/HB 404, and HB 404 § 6 says the Act 'shall apply to residential lease agreements that are entered into or renewed on or after July 1, 2024'. Rows state the current text without that date; a lease made before July 1, 2024 and never renewed since may not carry the cooling rule, but the library writes new leases, all made after that date, so no row repeats the caveat.


### §5 Independent check

Two rounds, one agent at a time, each judging rows only against the saved sources (`check/BRIEF.md`, `check/BRIEF2.md`); no agent wrote files. Each finding was checked against the saved source before it was applied, and each was applied once to row text through errata files (row generators frozen at check start).

**Round 1 (all 270 rows, four slices of 66-68 rows):**
- Slice 1 (68 rows): 3 ERROR, 37 FIX reported; applied as `r1a` (44 changes), `r1b` (7, the same defect swept from other rows) and `r1c` (15, follow-ups that needed new searches and sections).
- Slice 2 (68 rows): findings led by an ERROR in `edu-statute-of-frauds-lease-ga` (a modification needs every party's signature, § 13-5-30(b)); applied with a repair-duty sweep as `r1d` (46 changes).
- Site CAPTCHA (sections could no longer be opened; not solved, Taylor told): rows relying on unread sections softened to say so and the police battery added, as `r1e` (10 changes).
- Slice 3 (68 rows): 7 ERROR, 23 FIX; applied as `r1f` (44 changes). Example: `edu-no-habitability-presumption-ga` now gives § 41-2-7(b)'s prima-facie unfitness finding.
- Slice 4 (66 rows: 36 NEW, 30 TAG): 2 ERROR (the sprinkler row's "as built" rule and owner-staff repairs, § 25-11-8(e); the EV-charger residence exclusion, § 10-1-220(6), (7)), 23 FIX; applied as `r1g` (50 changes). No TAG body conflicted with Georgia law. Its reproducibility findings (no saved search behind the concession, installment and association-approval absences; § 41-3-1.1 cited from an unsaved search) were cured by running and saving those searches (17, 52 and 8 hits, the nuisance-rents search 6 hits, the police search 37 hits) before the errata were written.

**Round 2 (the 129 rows edited after round 1, two slices, previous and current text side by side):**
- Slice 1 (65 rows): 1 ERROR (`edu-pet-fees-ga` said § 30-4-3 has no fee term; (b) bars extra compensation for a service dog), 12 FIX across 13 rows; applied as `r2a` (23 changes, including three optional NOTE wordings).
- After slice 1 the standard battery preamble was corrected in every row: it had said control "zqxvbnmwt" ran 'in the same batch', which was not true of every battery; it now says nonsense controls "zqxvbnmwt" and 12 lettered variants ran throughout the session, all 0 hits (all 13 saved). Slice 2 saw the corrected wording.
- Slice 2 (64 rows): 0 ERROR, 14 FIX (one in two rows: the 13-hit disconnection search was said to include § 44-7-14.1, which it does not); applied as `r2b` (21 changes).

**Rows edited after the last round (round 2), not re-checked by an agent (33):** `association-approval-la`, `edu-association-rules-bind-tenants-ga`, `edu-cannabis-ga`, `edu-children-occupancy-ga`, `edu-confirmed-absences-misc-ga`, `edu-deposit-last-month-rent-ga`, `edu-dispossessory-service-ga`, `edu-elevator-duties-ga`, `edu-employee-housing-ga`, `edu-fire-code-standard-ga`, `edu-landlord-utility-account-ga`, `edu-limitation-of-actions-ga`, `edu-no-dv-eviction-defense-ga`, `edu-no-dv-lock-change-ga`, `edu-no-inspection-order-disclosure-ga`, `edu-no-law-enforcement-cooperation-rule-ga`, `edu-no-lead-safe-certificate-ga`, `edu-no-military-zone-disclosure-ga`, `edu-no-portable-cooling-right-ga`, `edu-no-required-fee-list-ga`, `edu-no-residential-sprinkler-mandate-ga`, `edu-no-shutdown-rent-protection-ga`, `edu-no-utility-notice-authorization-ga`, `edu-no-utility-shutoff-rule-ga`, `edu-nuisance-ga`, `edu-pet-fees-ga`, `edu-portfolio-threshold-ga`, `edu-required-disclosures-ga`, `edu-sale-or-management-change-ga`, `edu-service-dog-misrepresentation-ga`, `edu-statutory-early-termination-ga`, `rent-concession-wi`, `tenant-portal-mn`. Each change is the checker's wording or a narrower one, checked against the saved section text before applying; the quotation script passes. The preamble correction also changed the notes of 209 rows (boilerplate only).

**Mechanical checks (final build):** 270 rows (240 new, 30 tags), all 258 topics answered; 270 single-quoted statute passages matched by script against the saved section texts, the only 4 unmatched being the HB 404 § 6 sentence, which matches the act PDF once its printed line numbers are removed; every backticked row reference resolves; ids unique and none collides with the master; required fields present; clauses carry a basis and education rows none; 261 saved sections SHA-256 matched to the manifest.

**Unread at the end (site CAPTCHA, not solved):** O.C.G.A. §§ 8-3-201, 8-3-205, 10-7-21, 10-7-24, 11-2-102, 11-2A-103, 16-12-191 (current), 16-12-200, 30-4-1, 31-41-15, 41-2-2, 41-3-1.1, 41-3-9, 44-3-93, 44-3-109, 44-3-222, 44-3-226, 44-3-235, 48-4-45, 48-5-9, 48-8-2, 50-18-152, 50-18-154. Each row that mentions one says it was not read. § 10-7-24 (a surety discharged when the creditor refuses to sue the principal after the surety's notice) may bear on `guaranty-as`'s 'without first suing Tenant'; the tag rests on §§ 10-7-1, 10-7-3 and 10-7-22, which were read, and Claude Code may wish to re-check it once § 10-7-24 can be opened. Search timestamps are saved in UTC (2026-11-07T00:44Z to 02:55Z), which is 2026-11-06 US time, the date the rows give.


### §6 Findings on existing rows

1. **`edu-local-preemption-ga` (rent-control) understates state preemption.** The row's notes say O.C.G.A. § 44-7-19 'does NOT preempt rental registration, licensing, inspection, fees, screening or notice rules', and its body says 'Georgia law does not preempt other local landlord rules generally'. That is true of § 44-7-19 alone, but O.C.G.A. § 36-74-30(b), read whole 2026-11-06 (history: Ga. L. 2025, p. 882, § 1/HB 399, effective July 1, 2025), says: 'No local government is authorized to perform investigations or inspections of residential rental property unless there is probable cause to believe there is or has been a violation or violations of applicable codes, and in no event may a local government require the registration of residential rental property.' Proposed replacement (same id, for Claude Code at sync):
   - `id` edu-local-preemption-ga; `group` Compliance & Prohibited Terms; `title` State Limits on Local Rent Regulation; `states` GA; `is_active` TRUE; `supersedes` blank; `rule_type` RECOMMENDED; `content_type` LANDLORD_EDUCATION; `verification_status` VERIFIED; `effective_from` 2026-11-06; `last_checked` 2026-11-06; `choice_group` and `is_default` blank; `topic_key` rent-control; `lease_clause_basis` blank.
   - `bodyText`: "No Georgia county or city may enact, keep or enforce any ordinance or resolution that regulates in any way the amount of rent charged for privately owned single-family or multi-unit residential rental property. Local governments and their housing authorities may still regulate rents on property they own, and may enter agreements with private owners that regulate rent (for example, in exchange for public funding). Since July 1, 2025, a local government also may not require registration of residential rental property, and may inspect or investigate it only with probable cause to believe a code violation exists or has existed. Cities and counties may still set minimum security standards for rental dwellings and enforce unfit-dwelling ordinances, which a lease cannot waive. Other local ordinances are outside this library's scope."
   - `notes`: keep the existing GA notes, replacing the sentence beginning "It does NOT preempt" with: "It does not itself preempt registration, inspection, fees, screening or notice rules; but O.C.G.A. § 36-74-30(b) (Ga. L. 2025, p. 882, § 1/HB 399, effective July 1, 2025; read whole 2026-11-06 on advance.lexis.com, 'Current through the 2026 Special Session of the General Assembly') bars local rental registration and limits local inspections of residential rental property to probable cause. See `edu-rental-inspection-ga`."
2. **`edu-nonresident-landlord-broker-ga` (landlord-registration).** Not wrong, but HB 399 (Ga. L. 2025, p. 882) also amended O.C.G.A. § 36-74-30 (§ 1 of the act), which the row does not mention; Claude Code may add a cross-reference to `edu-rental-inspection-ga`.


### §7 Findings for other states

None so far.


### Proposed SOP changes

1. When a state's public-access code site runs in an iframe-capable app, allow several hidden-iframe search workers in parallel but cap them at about four; above that the site slowed sharply in this pass (about one result per two minutes per worker with seven running).
2. Add to the local-rules step: search the local-government titles (here O.C.G.A. Title 36) for limits on rental registration and inspection, not only the landlord-tenant chapter's preemption section; Georgia's limit sits in O.C.G.A. § 36-74-30(b).


### Proposed topic questions

1. `landlord-registration` / `rental-inspection`: "Does a statute outside the landlord-tenant chapter bar local governments from requiring rental registration or from inspecting rentals without probable cause? (Georgia: O.C.G.A. § 36-74-30(b), 2025.)"
2. `firearms`: "Does the state fair housing act restrict firearm bans in public housing specifically? (Georgia: O.C.G.A. § 8-3-202(a)(8).)"
3. `utility-submetering-disclosure`: "Does a water-resources statute, rather than the utility regulator, cap water and sewer rebilling at cost plus a billing fee and require disclosure before signing? (Georgia: O.C.G.A. § 12-5-180.1.)"

# Topic gaps pass, round 3 (2026-11-06): GA Desktop chat check of the 33 rows edited after round 2

One checking agent read the 33 rows edited after round 2. It judged each row only against the saved section texts and saved searches, wrote no files, and opened no new Lexis sections (no CAPTCHA came up). I checked every finding against the saved source before it went in this report. The attached `ga-round3-rows.md` matches the delivered delta word for word, titles included.

`ga-round3-rows.md` holds row bodies only, so where an old_str comes from the GA notes it is marked **(notes)** and copied from the GA notes in the delivered delta. For a tag row, that means the GA segment of the notes.

**Holds (22):** `association-approval-la`, `edu-cannabis-ga`, `edu-confirmed-absences-misc-ga`, `edu-deposit-last-month-rent-ga`, `edu-dispossessory-service-ga`, `edu-elevator-duties-ga`, `edu-employee-housing-ga`, `edu-limitation-of-actions-ga`, `edu-no-inspection-order-disclosure-ga`, `edu-no-law-enforcement-cooperation-rule-ga`, `edu-no-lead-safe-certificate-ga`, `edu-no-portable-cooling-right-ga`, `edu-no-required-fee-list-ga`, `edu-no-shutdown-rent-protection-ga`, `edu-no-utility-notice-authorization-ga`, `edu-no-utility-shutoff-rule-ga`, `edu-nuisance-ga`, `edu-portfolio-threshold-ga`, `edu-service-dog-misrepresentation-ga`, `edu-statutory-early-termination-ga`, `rent-concession-wi`, `tenant-portal-mn`

#### `edu-association-rules-bind-tenants-ga`

Verdict: FIX
Reason: O.C.G.A. § 44-5-60(d)(6) has no "recorded" condition. Also, the notes say the fee-cap and rent-collection absence rests on three unopened sections, when most of the 54 hits in that search were never opened.

old_str:
```
The same duty binds occupants in a planned subdivision of 15 or more lots under its recorded covenants.
```
new_str:
```
The same duty binds occupants in a planned subdivision of 15 or more lots under its covenants.
```

old_str (notes):
```
the fee-cap and rent-collection absence rests on their headings.
```
new_str:
```
the fee-cap and rent-collection absence rests on their headings and on the headings of the other hits that were not opened (most of the 54, for example §§ 44-3-75, 44-3-77, 44-3-101); of the Article 3 and 6 hits only §§ 44-3-76, 44-3-80 [Effective July 1, 2026], 44-3-86, 44-3-87, 44-3-106 and 44-3-111 were saved.
```

Quotes:
- O.C.G.A. § 44-5-60(d)(6): 'In every planned subdivision containing no fewer than 15 individual plots, every person owning plots affected by such covenant owner and all those entitled to occupy such property shall comply with all lawful provisions of said covenants and the instrument containing such covenants.' (44-5-60.txt)
- Saved search: of the Article 3 and 6 hits, show.py reports §§ 44-3-75, 44-3-77, 44-3-101 and others NOT SAVED; §§ 44-3-76, 44-3-80 [Effective July 1, 2026], 44-3-86, 44-3-87, 44-3-106, 44-3-111 are saved.

#### `edu-children-occupancy-ga`

Verdict: FIX
Reason: No saved source calls Georgia's article the "Fair Housing Act"; that name appears only for the federal Act. `edu-portfolio-threshold-ga` already says "fair housing article", so the two rows should match.

old_str:
```
Georgia's Fair Housing Act bars refusing to rent
```
new_str:
```
Georgia's fair housing article bars refusing to rent
```

Quotes:
- O.C.G.A. § 8-3-200(b): 'The general purposes of this article are:' (8-3-200.txt)
- O.C.G.A. § 2-1-7(a)(3)(A)(ii): 'shall not be in conflict with the federal Fair Housing Act' (2-1-7.txt)

#### `edu-fire-code-standard-ga`

Verdict: FIX
Reason: The notes misdescribe the first search hit: it is the Title 8, Chapter 2 heading, not Title 25.

old_str (notes):
```
5 hits, the Title 25 ch. 2 heading,
```
new_str:
```
5 hits, the Title 8 ch. 2 heading,
```

Quotes:
- Saved search ("Uniform Fire Code" OR "fire code" OR ...): n=5; first hit 'CHAPTER 2 Standards and Requirements for Construction and Alteration of Buildings and Other Structures', breadcrumb O.C.G.A. Title 8, Ch. 2

#### `edu-landlord-utility-account-ga`

Verdict: FIX
Reason: The body says no statute lets tenants petition for a receiver, but the notes cite no search for that. The saved receivership search supports it, so the notes should cite it.

old_str (notes):
```
no tenant pay-and-deduct rule.
```
new_str:
```
no tenant pay-and-deduct rule. Receivership: (receiver OR receivership) w/30 (rent OR rents OR tenant OR tenants OR "rental property" OR dwelling): 22 hits, general equity receivers (§§ 9-8-2 to 9-8-4), mortgage foreclosure, landlord-tenant §§ 44-7-5, 44-7-11, 44-7-15 and other subjects; no tenant petition for a receiver over unpaid utilities.
```

Quotes:
- Saved search (receiver OR receivership) w/30 (rent OR rents OR tenant OR ...): n=22; hits include §§ 9-8-2, 9-8-3, 9-8-4, 44-7-5, 44-7-11, 44-7-15; none on utilities

#### `edu-no-dv-eviction-defense-ga`

Verdict: FIX
Reason: The early-termination right belongs to a tenant protected by an issued order (or whose minor child is protected), not to every victim. Other rows already say it this way.

old_str:
```
Georgia law gives a victim of family violence or stalking a right to end the lease early, but no statute
```
new_str:
```
Georgia law lets a tenant end the lease early when a family violence or stalking order protects the tenant or the tenant's minor child, but no statute
```

Quotes:
- O.C.G.A. § 44-7-23(b): 'A tenant may terminate his or her residential rental or lease agreement for real estate effective 30 days after providing the landlord with a written notice of termination when a civil family violence order, civil stalking order, criminal family violence order, or criminal stalking order has been issued:' (44-7-23.txt)

#### `edu-no-dv-lock-change-ga`

Verdict: FIX
Reason: The body now covers stalking orders, but the notes cite only the family violence section. § 16-5-94(d)(1) is saved, supports the stalking half, and shows stalking orders list no exclusion term.

old_str (notes):
```
Protective orders: O.C.G.A. § 19-13-4 (contents of protective orders; read whole; (a)(2), (5) let the order give the petitioner possession and exclude or evict the respondent).
```
new_str:
```
Protective orders: O.C.G.A. § 19-13-4 (contents of protective orders; read whole; (a)(1) ('Direct the respondent to refrain from such acts'); (a)(2), (5) let the order give the petitioner possession and exclude or evict the respondent); O.C.G.A. § 16-5-94(d)(1) (stalking orders may 'Direct a party to refrain from such conduct'; (d) lists no possession or exclusion term).
```

Quotes:
- O.C.G.A. § 19-13-4(a)(1): 'Direct the respondent to refrain from such acts;' (19-13-4.txt)
- O.C.G.A. § 16-5-94(d)(1): 'Direct a party to refrain from such conduct;' (16-5-94.txt)

#### `edu-no-military-zone-disclosure-ga`

Verdict: FIX
Reason: The body relies on the residential-property definition in § 2-1-7(a)(4), which refers to § 8-3-201. That section was not saved, and the notes should say so.

old_str (notes):
```
O.C.G.A. § 2-1-7 (foreign acquisitions near installations; read whole)
```
new_str:
```
O.C.G.A. § 2-1-7 (foreign acquisitions near installations; read whole; (a)(4) defines residential property by reference to 'Code Section 8-3-201', which was not saved)
```

Quotes:
- O.C.G.A. § 2-1-7(a)(4): '“Residential property” means real estate intended to be used as the purchaser’s dwelling, as such term is defined in Code Section 8-3-201.' (2-1-7.txt)

#### `edu-no-residential-sprinkler-mandate-ga`

Verdict: ERROR
Reason: The body says the work takes a "licensed" contractor or inspector. The saved sections only define those licenses. What § 25-11-8 requires is a certificate holder, employed full time, to do or supervise the work. The sections on who must hold a license (§§ 25-11-3 to 25-11-7) were not saved.

old_str:
```
Installing or altering a sprinkler system takes a licensed sprinkler contractor, and inspections a licensed contractor or licensed sprinkler system inspector; your own staff may
```
new_str:
```
Installing, altering or inspecting a sprinkler system is work for a sprinkler contractor that employs a state-certified supervisor full time to do or supervise it (the state also licenses sprinkler contractors and sprinkler system inspectors; the sections on who must hold those licenses were not read); your own staff may
```

old_str (notes):
```
O.C.G.A. §§ 25-11-2, 25-11-8 (installation by licensees; read whole); O.C.G.A. § 25-11-2(9), (10) (fire protection system inspectors; read whole);
```
new_str:
```
O.C.G.A. § 25-11-2(2), (4) ('supervises, performs, or supervises and performs the installation, repair, alteration, addition, maintenance, or inspection of water-based fire protection systems'), (5), (9), (10) (licenses and inspectors defined only; the license-requirement sections §§ 25-11-3 to 25-11-7 were not saved), read whole; O.C.G.A. § 25-11-8(a) ('No person shall act as a fire protection sprinkler contractor unless a certificate holder is employed full time'), read whole;
```

Quotes:
- O.C.G.A. § 25-11-8(a): 'No person shall act as a fire protection sprinkler contractor unless a certificate holder is employed full time, in office or on site or combination thereof, to supervise or perform the installation, repair, alteration, addition, maintenance, or inspection of water-based fire protection systems.' (25-11-8.txt)
- O.C.G.A. § 25-11-8(d): 'Only fire protection sprinkler contractors or certificate of competency holders shall alter or renovate water-based fire protection systems except as otherwise provided by this chapter.' (25-11-8.txt)
- O.C.G.A. § 25-11-2(10): '“Fire protection system inspector’s license” means a document issued by the Commissioner which authorizes the fire protection system inspector to engage in the business of inspecting water-based fire protection systems.' (25-11-2.txt)

#### `edu-pet-fees-ga`

Verdict: FIX
Reason: The cross-reference does not resolve: no row is titled "Assistance Animals". The target `assistance-animal-accommodation-ga` is titled "Service Dogs and Other Assistance Animals".

old_str:
```
see the Assistance Animals row before charging
```
new_str:
```
see Service Dogs and Other Assistance Animals before charging
```

Quotes:
- lease-clauses.csv: `assistance-animal-accommodation-ga`, title 'Service Dogs and Other Assistance Animals'

#### `edu-required-disclosures-ga`

Verdict: FIX
Reason: "Pre-1978" rests on the Lead Warning Statement in § 4852d, because the target-housing definition (§ 4851b) was not saved. The notes should say so.

old_str (notes):
```
FEDERAL: 42 U.S.C. § 4852d.
```
new_str:
```
FEDERAL: 42 U.S.C. § 4852d (the target housing definition in § 4851b was not saved; "pre-1978" rests on the Lead Warning Statement in § 4852d(a)(3), 'built prior to 1978').
```

Quotes:
- FEDERAL: 42 U.S.C. § 4852d(a)(3): 'residential real property on which a residential dwelling was built prior to 1978' (42 U.S.C. § 4852d, saved)

#### `edu-sale-or-management-change-ga`

Verdict: FIX
Reason: "(same battery)" does not resolve: the deposit-on-sale row uses two other searches, and those support the buyer-liability absence.

old_str (notes):
```
Deposits: `edu-security-deposit-on-sale-ga` (same battery).
```
new_str:
```
Deposits and buyer liability: `edu-security-deposit-on-sale-ga` and its batteries ((deposit OR deposits) w/30 (sale OR sell OR sold OR transfer OR transferee OR successor OR purchaser OR grantee OR "new owner") AND (tenant OR tenants OR landlord OR lessor OR lessee): 51 hits; (deposit OR deposits) w/30 (foreclosure): 5 hits).
```

Quotes:
- Saved search (deposit OR deposits) w/30 (sale OR sell OR sold OR ...): n=51
- Saved search (deposit OR deposits) w/30 (foreclosure): n=5
- Saved search (estoppel w/5 certificate) OR ...: n=13, a different query

### Outside the 33 (found in passing)

#### `edu-no-initials-rule-ga`

Verdict: FIX
Reason: Outside the 33. Its notes call § 44-3-2 a condominium section, but the saved search shows it is in Article 1, Georgia Land Sales Act (`edu-sale-or-management-change-ga` already says this).

old_str (notes):
```
self-storage § 10-4-218 and condominium §§ 44-3-2, 44-3-111;
```
new_str:
```
self-storage § 10-4-218, Georgia Land Sales Act definitions § 44-3-2 and condominium § 44-3-111;
```

Quotes:
- Saved search hit for § 44-3-2: breadcrumb 'Article 1 Georgia Land Sales Act'

### Could not check

- Anything that rests on unsaved sections, beyond whether the row says they are unread: §§ 8-3-201, 8-3-205, 16-12-191 (current), 16-12-200, 25-11-3 to 25-11-7, 30-4-1, 31-41-15, 41-2-2, 41-3-1.1, 41-3-9, 44-3-93, 44-3-109, 44-3-222, 44-3-226, 44-3-235, 50-18-152, 50-18-154; FEDERAL: 42 U.S.C. § 4851b.
- PSC Rule 515-3-2-.05 and the current code editions adopted by rule.
- Case-law points the rows frame as cautious courses.

Rows checked: 33; holds: 22; FIX: 10; ERROR: 1. Plus one FIX outside the 33 (`edu-no-initials-rule-ga`).

Applied by Claude Code 2026-11-06: all 14 edits (12 rows) matched exactly once and went in as written; the sprinkler row's citation line now cites §§ 25-11-2 and 25-11-8(a). The "could not check" list joins the unread-sections item in docs/backlog.md.

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-ga` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.
