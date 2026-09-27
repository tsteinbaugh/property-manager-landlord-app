# Texas — lease-clause decision log (state #11)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

**Date:** 2026-09-25 · **Settings:** Opus, high effort, ordinary search/fetch (one search, §1). Research mode not yet needed. The points where it will be are in §9.
**Scope:** Texas, state law only. City and county layers are flagged where met, not resolved (instruction 20).
**Input CSV:** `lease-clauses.csv`, **726 rows**, confirmed at session start: 681 active / 45 inactive; active CO 114, WY 98, KS 114, NE 111, MN 119, ND 110, SD 90, OH 73, CA 150, NV 102, TX 0. No duplicate ids; zero blank `verification_status`. Instructions 13 and 27 satisfied.
**Output CSV (batch 1 — superseded by batch 2, §11):** `lease-clauses.csv`, **768 rows** (+42 new; 3 dormant TX rows rewritten and activated; 2 dormant TX rows still inactive with updated notes). **726 active; TX 87 active (42 shared, 61 lease clauses), all `VERIFIED`.** Other states' active counts unchanged. No duplicate ids, no dangling `supersedes`, no display collisions, no blank status, no blank `states` on any new row.

---

## 0. Completion status — read this first

**FINAL STATE (after §18): `lease-clauses.csv` 800 rows, 760 active; TX 128 active (49 shared), all 128 `VERIFIED`, no held rows.** The Texas pass is complete, subject only to the judgment calls in §18.3. Batch 2 (§11) and §13 supersede this table where they differ. Both instruction 24 families are closed. **The named-topic canvass is done (§12).** All five dormant rows are resolved. All 12 held rows are now resolved (the last, `parking-vehicle-rules`, got a Texas override in §13).


| | Status |
|---|---|
| Primary text read | **Tex. Prop. Code ch. 92, all subchapters A–I (§§92.001–92.355), section-open.** Source: Justia "2025 Texas Statutes" host copy supplied by Taylor, with per-section history lines. Nothing else read yet. |
| Step 1 — tag first | **Done against ch. 92.** 61 shared and 197 uncited single-state rows read in full. **42 tagged TX** (§2.1). **12 held** on named unread chapters (§2.3). **4 not tagged; TX override written instead** (§2.4). |
| Step 2 — new TX rows | **16 new lease clauses + 26 education rows + 3 rewritten dormant rows** (§3). Each checked against its `topic_key` group first. **3 shared rows edited, all uniform** (§3.1). |
| Instruction 24 families | `security-deposit-return` **closed** (`security-deposit-return-tx`). `assistance-animal-accommodation` **open**, waiting on Tex. Prop. Code ch. 301. |
| Dormant rows | **3 rewritten and activated** (late fee, repair remedies, flood). **2 still open** (NSF fee, utility allocation), each waiting on a named code (§6). |
| Named-topic canvass / TX checklist column | **Not started.** Deliberately deferred until ch. 91/24/54/301 arrive, so the column isn't mostly "Not Yet Checked". |
| Lease formatting (bold/underline/placement) | **16 requirements found in ch. 92** (§5). Recorded in row bodies as bracketed builder directives; the builder cannot enforce any of them yet. |

## 1. Process notes

**Source and currency (L.8).** Every row cites the section it rests on and its history line. The latest amendments visible in ch. 92 are from the **89th Leg., Regular Session (2025)**: S.B. 2349 (§92.0135), H.B. 2037 (§§92.0561, 92.112, 92.113), H.B. 47 (§92.0161), all eff. 2025-09-01. The **88th (2023)** touched only §92.0563 (S.B. 1259, H.B. 3474, justice-court cap $20,000). History lines evidence enactment (instruction 17) and give effective dates directly.

**One open currency gap.** Justia labels its compilation "2025" and warns it may lag. I haven't confirmed that no **2025 special-session** bill amended ch. 92. One ordinary search found nothing pointing that way, but that is not proof. The revisor's chapter page is `statutes.capitol.texas.gov/Docs/PR/htm/PR.92.htm`; a glance at whether any history line there postdates the Regular Session closes this. All rows are `VERIFIED` with this caveat in `SRC` notes.

**Section-open vs recall (instruction 22).** Every row was drafted with the section text in context. The recall subset is empty.

**Chapter completeness.** The paste ran §92.001 → §92.355 with no gaps in Justia's previous/next chain. Subchapter I appears to be the last subchapter. Not independently confirmed.

## 2. Step 1 — tag first

### 2.1 Tagged TX as written (42)

`rent-payment`, `due-at-signing`, `application-of-payments`, `security-deposit-use`, `residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `services-utilities-provided` (base), `joint-liability`, `utilities-paid-by-landlord`, `appliances-included`, `landlord-maintenance`, `landlords-access`, `notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`, `pet-policy`, `pet-insurance-requirement`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`, `lead-based-paint`, `hoa-compliance`, the variants `tenants-property-insurance-ks-oh-ca`, `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, and — after uniform edits (§3.1) — `tenant-maintenance`, `no-alterations`, `assigned-parking-space`. From the single-state set: **`tenant-forward-proceedings-ca`** (no CA-specific rule in it).

Each carries a `TX:` note naming the controlling section. The ones that matter:
- **`landlord-maintenance`** is voluntarily broader than §92.052. Its written-notice requirement is effective under §92.052(d). It does not carry the §92.056(g) remedies statement, which is a separate REQUIRED row.
- **`services-utilities-provided`**: the base was chosen, not the `-ks-oh` variant. The variant is `REQUIRED`, and Texas has no rule making services a mandatory lease subject. The base disclaimer reaches only causes beyond Landlord's control. See the cross-state question in §16.
- **Three variants chosen over their bases.** For parking, storage and renter's insurance, the base disclaimers purport to exempt landlord negligence. For parking, that collides with §92.0131(g): the landlord is liable for vehicle damage by an uninsured contracted tower.

### 2.2 The 197 uncited single-state rows

All read. Only `tenant-forward-proceedings-ca` applies as written. The rest encode another state's rule even without citing it.

Two near-misses were rejected on rule type, not substance: `emergency-assistance-right-ca` and `services-utilities-provided-ks-oh`. Both are `REQUIRED`, which would overstate Texas. See §16.

`lease-copy-receipt-mn` was rejected because an at-signing receipt is not the Texas duty (§92.024 gives three business days). `cash-rent-receipt-mn` and `deposit-last-month-rent-mn` were rejected because Texas's rules are shaped differently. Texas rows were written for each.

### 2.3 Held — waiting on named text (12)

| Row(s) | Waiting on | Why it can't be tagged from ch. 92 |
|---|---|---|
| `returned-payments` | Bus. & Com. Code §3.506 | "maximum amount permitted by applicable law" has no Texas referent yet (K.3 empty referent) |
| `no-sublet-assign`, `early-termination`, `possession-delay` | Prop. Code ch. 91 | Sublet consent, the mitigation-waiver bar and delivery of possession are in ch. 91 |
| `default-by-tenant` + `-ks-ne`, `holdover` + `holdover-ca` | ch. 24, ch. 91 | Notice to vacate, cure, attorney's fees in eviction, holdover measure |
| `surrender-end-of-term` + `-mn-nd` + `-ks-ne` | ch. 54, ch. 24 | Abandoned property, landlord's lien, post-writ property |
| `parking-vehicle-rules` | Occ. Code ch. 2308 | Towing lawfulness; it also needs the §92.0131(c) heading if it carries rules |
| `assistance-animal-accommodation` | Prop. Code ch. 301 | Instruction 24 family; Texas FHA basis unread |

### 2.4 Not tagged — TX override written instead (4)

`late-fee` → `late-fee-safe-harbor-tx`. `keys` → `keys-tx` (the base charges for turnover rekeying, which §92.156(a) puts on the landlord). `acceptable-payment-methods` → `acceptable-payment-methods-tx` (the §92.011 cash rule). `security-deposit-return` (blank-states REQUIRED base) → `security-deposit-return-tx`.

## 3. Step 2 — new rows

### 3.1 Shared-row edits (all UNIFORM, self-limiting; `last_checked` reset)

1. **`tenant-maintenance`** [CO;WY;MN;SD;OH;TX]. The same-condition duty now excepts "any condition that applicable law requires Landlord to repair or remedy". Driver: §92.006(c) makes the repair duty non-waivable, and §92.0563(b) sets a penalty of one month's rent + $2,000 for a *knowing* waiver. The old sentence could be read as shifting repairs, and every tagged state has a landlord repair duty.
2. **`no-alterations`** [10 states + TX]. Added "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Drivers: §§92.0561, 92.164(a)(1), 92.165(1).
3. **`assigned-parking-space`** [10 states + TX]. Reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term". Driver: §92.0131(e), which requires a listed ground and 14 days' notice.

### 3.2 New TX lease clauses (16) + rewritten dormant (3)

| Row | Rule | Rests on | Layout rule |
|---|---|---|---|
| `late-fee-safe-harbor-tx` (dormant, rewritten) | CONSTRAINED | §§92.019, 92.0191 | — |
| `habitability-timeline-tx` (dormant, rewritten as the remedies statement) | **REQUIRED** | §§92.056, 92.0561 | **bold/underline (§92.056(g))** |
| `flood-disclosure-tx` (dormant, rewritten) | **REQUIRED** | §92.0135 | statutory form; signed by both |
| `security-deposit-return-tx` | **REQUIRED** | §§92.103–.113 | — |
| `early-termination-rights-statement-tx` | **REQUIRED** | §§92.016(f), 92.0161(g), 92.017(g) | exact statement |
| `emergency-phone-tx` | **REQUIRED** | §92.020 | — |
| `keys-tx` | RECOMMENDED | §§92.156, 92.162, 92.163 | bold/underline (§92.156(e)); **underline only (§92.162(b))** |
| `acceptable-payment-methods-tx` | RECOMMENDED | §92.011 | — |
| `security-devices-tx` | RECOMMENDED | Subch. D | bold/underline (§§92.164(b), 92.159) |
| `smoke-alarm-tx` | RECOMMENDED | Subch. F | bold/underline (§92.2611(d)(1)) |
| `owner-management-disclosure-tx` | RECOMMENDED | Subch. E, §92.003 | — |
| `casualty-loss-tx` | RECOMMENDED | §92.054 | — |
| `deceased-tenant-contact-tx` | RECOMMENDED | §92.014 | — |
| `deposit-last-month-rent-tx` | CONSTRAINED | §92.108 | — |
| `deposit-surrender-notice-tx` | CONDITIONAL | §92.103(b) | bold/underline |
| `tenant-repair-agreement-tx` | CONDITIONAL | §92.006(e)(4), (f) | bold/underline |
| `lockout-rent-delinquency-tx` | CONDITIONAL | §92.0081 | — (bold applies to the notice) |
| `parking-rules-tx` | CONDITIONAL | §§92.0131, 92.0132 | **prescribed heading text** |
| `electric-submeter-interruption-tx` | CONDITIONAL | §92.008(h)–(r) | exact fee amount in lease |

### 3.3 New TX education rows (26)

Late fees; deposit rules; the bounded deposit cap/interest absence; the bounded entry-statute absence; the repair duty; lockouts and utility cutoffs; security devices; smoke alarms; statutory early termination; deceased tenant; right to summon police; retaliation; rental applications; occupancy limit; cash payments; firearms; lease copy; ownership disclosure; parking and towing; guarantors; landlord-paid utility cutoff; governmental fines; non-waivable terms; flood-notice remedy; fee in lieu of deposit; criminal-record leasing liability.

**Confirmed absences written as rows, each with its boundary stated (L.7):** `edu-no-deposit-cap-or-interest-tx` and `edu-no-entry-notice-statute-tx`. Evidentiary basis: a full primary-text read of ch. 92. Neither row claims anything about other codes.

## 4. Findings worth Taylor's attention

### 4.1 Texas enforces its lease law through typography
Sixteen ch. 92 rules turn on how the lease is printed or where a statement sits (§5). One of them is **REQUIRED** in every lease (§92.056(g)). Missing another costs real money:
- Omitting the early-termination statement **releases all delinquent rent** when a tenant uses the right.
- An un-bolded rekey-deduction or surrender-notice term is simply **ineffective**.

### 4.2 Judgment calls, surfaced not buried
1. **Late fee capped at the safe harbor.** §92.019(a-1)(2) allows a higher fee up to the landlord's uncertain damages. The clause forgoes that, because proving damages is the landlord's burden. This is a K.3 ceiling-only choice, made deliberately.
2. **Casualty rent reduction by agreement.** §92.054(c) makes partial-unusability rent reduction court-only unless the lease agrees otherwise. The clause agrees, which is tenant-favourable and avoids a lawsuit.
3. **Lockout offered as an opt-in clause, not defaulted.** The right exists only if the lease contains it.
4. **Candidate rows not written:** a guaranty-renewal clause (§92.021), a fee-in-lieu agreement (§92.111(c), (f)), and the §92.006(e) single-dwelling full repair shift. Education rows cover each. Say if you want any of them as clauses.

### 4.3 Drafting defects in the statute itself, recorded not resolved
- **§92.164(b)** cross-refers to "92.153(a)(1)–(4) and (6)" and "92.153(f)". Current §92.153(a) stops at (5), and the doorknob/dead-bolt exemption is (g). `security-devices-tx` states the substance instead of the broken references.
- **§92.017(a)** incorporates "50 App. U.S.C. Section 511", the pre-2015 SCRA codification. It is now 50 U.S.C. §3911.
- **§92.014(e)–(f)** say "a copy of this subchapter", but the section sits in Subch. A.

### 4.4 Two of my own kickoff flags were wrong
- **The flood notice may sit in the lease body.** §92.0135(e) permits a lease paragraph, an addendum or a separate document. The dormant row's real defects were different ones, listed in its notes.
- **The §92.0081 bold rule is on the pre-lockout *notice*, not the lease clause.**

### 4.5 One ambiguity, drafted around
§92.011(a) excuses cash acceptance only if the written lease requires "check, money order, or other traceable or negotiable instrument". Whether an electronic-only method list qualifies is unclear. `acceptable-payment-methods-tx` sidesteps it with a builder instruction. This is a research-mode candidate if you want it resolved.

## 5. Lease formatting and placement requirements found in ch. 92

| Rule | Requirement | Where it lives |
|---|---|---|
| §92.056(g) | Lease **must** state tenant repair remedies, underlined or bold | `habitability-timeline-tx` (REQUIRED) |
| §92.006(e)(4)(B), (f) | Tenant-repair agreements underlined or boldface, in the lease or a separate addendum | `tenant-repair-agreement-tx` |
| §92.103(b) | Advance-surrender-notice condition underlined or conspicuous bold | `deposit-surrender-notice-tx` |
| §92.156(e) | Rekey-cost deduction on breach-vacate underlined or boldface | `keys-tx` |
| §92.162(b) | Tenant pays for security-device misuse only via an **underlined** provision (bold not named) | `keys-tx` |
| §92.159 | Written-request requirement for security devices underlined or bold | `security-devices-tx` |
| §92.164(b) | Security-device notice underlined or bold → landlord gets 7 days, not 3 | `security-devices-tx` |
| §92.2611(d)(1) | No-disabling smoke alarm notice underlined or bold | `smoke-alarm-tx` |
| §92.2611(d-1) | Post-discovery 7-day notice in a **separate document** | edu |
| §92.0131(c) | Parking rules paragraph titled "Parking" or "Parking Rules", capitalized, underlined or bold | `parking-rules-tx` |
| §92.0131(b) | Parking rules given **before** execution; signed, or in the lease, or in a signed attachment the lease refers to | `parking-rules-tx` |
| §92.0135(b), (d), (e) | Flood notices in prescribed form; signed by both; at or before execution | `flood-disclosure-tx` |
| §§92.016(f), 92.0161(g), 92.017(g) | Statements "substantially equivalent" to prescribed text | `early-termination-rights-statement-tx` |
| §92.017(j) | Military-rights waiver only in a document **separate from the lease** | edu |
| §92.153(f) | Tenant's request not to install a keyless bolt must be separate, **not in the lease** | edu |
| §92.008(r) | Reconnection fee requires the **exact dollar amount** in a written lease | `electric-submeter-interruption-tx` |

Also outside the lease: the lockout notice (§92.0081(d)(3)(D)), the electricity termination notices (§92.008(h)(3)(A), (4)(A)), the application acknowledgment (§92.3515(d)) and the bilingual English/Spanish master-meter disconnection notice (§92.302(b)).

**Product flag — proposed Addendum M.12.** The builder has no formatting attribute. The bracketed directives above are instructions to a human; nothing enforces them.
- Texas needs at least four distinct values: bold-or-underline, underline-only, prescribed heading text, and separate-document.
- It also needs a "must not appear in the lease" value (§§92.017(j), 92.153(f)).
- ND's initialling field (M.1) and NV's first-page/2× font rule are the same class of problem.

Recommend a single `formatting` field over per-state special cases.

## 6. Dormant rows (instruction 21)

| Row | Outcome |
|---|---|
| `late-fee-safe-harbor-tx` | **Four defects**: "2 days" vs "two full days"; no daily-fee aggregation; safe harbor presented as a hard cap; no statement-on-request. Rewritten and activated. |
| `habitability-timeline-tx` | The 7-day presumption is real, but the row missed the actual **REQUIRED** §92.056(g) statement. Repurposed into it and activated. |
| `flood-disclosure-tx` | Not the statutory form; merged two notices; no 5-year window; no signature requirement; no exemptions. Rewritten to the §92.0135 form and activated. |
| `nsf-fee-limit-tx` | **Still dormant.** Not in ch. 92. Waiting on Bus. & Com. Code §3.506. The "plus the bank's fee" claim has no support yet. |
| `utility-submetering-disclosure-tx` | **Still dormant.** Ch. 92 covers electric *interruption*, not allocation disclosure. Waiting on Water Code / PUC rules. |

Across the three resolved rows, the pre-rigor pass got one fact right in each (12%/10%, 7 days, flood disclosure exists) and the operative rule wrong in each.

## 7. Municipal layer — flagged, not resolved

Chapter 92 itself preempts or limits local rules in four places:
- security devices: §92.170, except pre-1993 earlier-deadline ordinances;
- smoke alarms: §92.252, which reserves local fire-code rules and limits AC-retrofit mandates;
- ownership disclosure: §92.208, which allows only additional enforcement;
- the emergency-number rule: §92.020(c), which grandfathers conforming pre-2008 ordinances.

The broader preemption statutes (Loc. Gov't Code §§214.902, 250.007; HB 2127) are still unread.

## 8. Named-topic canvass

**Done — see §12.** (Originally deferred: Ch. 92 answers are already in the rows above. The TX checklist column will be filled in one pass once ch. 91/24/54/301 are in, so it isn't written twice.)

## 9. What I still need — one consolidated request

Items 2–9 of the original request are still outstanding:
- Prop. Code ch. 91, ch. 24 and ch. 54 (residential lien subchapter);
- ch. 301;
- Bus. & Com. Code §3.506 and its neighbours;
- Water Code ch. 13 submetering subchapter and 16 TAC ch. 24;
- Loc. Gov't Code §§214.902 and 250.007, and whatever HB 2127 (2023) codified;
- optional: Occ. Code ch. 2308 and H&S Code ch. 757.

New from ch. 92, lower priority (L.5 incorporations):
- Health & Safety Code ch. 766 and Ins. Code §6002.002 (smoke-alarm alternative compliance);
- Fam. Code §71.004.

The Penal Code, Code Crim. Proc. and Gov't Code ch. 420 references in §§92.0161 and 92.025 only matter if a row is ever written to restate them. None is.

**Currency check:** whether any 2025 special-session bill amended ch. 92 (§1).

**Research mode**, when we get there:
- proof-of-absence outside ch. 92 (radon, mold, carbon monoxide, bed bugs, entry, deposit interest);
- cross-chapter gap discovery;
- the §92.011 and §92.164(b) ambiguities, if you want them resolved rather than drafted around.

## 10. Deliverables (batch 1 — see §11.8 for current)

| File | State |
|---|---|
| `lease-clauses.csv` | 768 rows; 726 active; TX 87 active, all `VERIFIED`; integrity checks pass |
| `lease-clause-decision-log-TX.md` | This file |
| Named-topic checklist | **Not yet updated** (§8) |

## 16. Propagation notes — paste-ready

```
## Propagated from the Texas pass, 2026-09-25

Shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9). All three are UNIFORM (self-limiting; they add no obligation where no such law exists). Inherit without override. `last_checked` reset to 2026-09-25. Detail: lease-clause-decision-log-TX.md §3.1.

1. `tenant-maintenance` [CO, WY, MN, SD, OH] — "...except for ordinary wear and tear" now reads "...except for ordinary wear and tear and any condition that applicable law requires Landlord to repair or remedy." Driven by Tex. Prop. Code §92.006(c) / §92.0563(b).
2. `no-alterations` [CO, WY, KS, NE, MN, ND, SD, OH, CA, NV] — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1).
3. `assigned-parking-space` [CO, WY, KS, NE, MN, ND, SD, OH, CA, NV] — reassignment now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e).
```
Item 1 goes only to the five `tenant-maintenance` states. Items 2–3 go to all ten.

**Done at sync (2026-09-26):** appended as "## Propagated from the Texas pass, 2026-09-25" to all ten prior state logs. `grep -l "Propagated from the Texas pass" lease-clause-decision-log-*.md` lists 11 files (the ten plus this one).

**Cross-state questions I can't settle from here:**
1. `rule_type` is per row, so a `REQUIRED` variant cannot be tagged to a state where the same text is only good practice. This blocked `services-utilities-provided-ks-oh` and `emergency-assistance-right-ca` for TX. Is per-state `rule_type` worth a schema change, or should such rows stay split?
2. Does any existing state's lease already carry a clause whose effect depends on bold, underline or placement without the library saying so? Texas made this visible. The CA type-size floors and the NV first-page rule suggest the class is wider than one state.


---

## 11. Second text batch — 2026-09-25

**Received from the official site (statutes.capitol.texas.gov), with history lines:**
- Tex. Prop. Code ch. 24 (entire), ch. 54 (entire, incl. Subch. C residential lien), ch. 301 (entire);
- ch. 91 as pasted: §§91.001, 91.003–91.006 (§91.002 was renumbered into ch. 92 in 1989);
- Tex. Bus. & Com. Code §3.506;
- Tex. Water Code ch. 13 Subch. M (§§13.501–13.506);
- Tex. Loc. Gov't Code §§214.902, 250.007.

**Fetched myself (one search, one fetch):** 16 Tex. Admin. Code §24.279 from the PUC's own rule posting (§11.4).

### 11.1 Currency — a special session did touch the Property Code
§24.0043 carries "Amended by Acts 2025, 89th Leg., **2nd C.S.**, Ch. 7 (H.B. 16), eff. January 1, 2026." That is direct evidence that a 2025 called session amended the Property Code. The ch. 92 currency question in §1 is therefore **not academic**. Chapter 92 still needs checking against the official page for any 1st or 2nd C.S. amendment. The ch. 92 rows stay `VERIFIED` with the §1 caveat until then.

**S.B. 38 (89th R.S.) rewrote eviction, effective 2026-01-01**, which is already in force today. Its main changes:
- mandatory pay-or-vacate notice for a first-time nonpayment;
- new delivery methods, with the old (f)–(i) repealed;
- computation of time;
- summary disposition;
- 10–21-day trial window;
- appeal rent into the court registry;
- the legislature-only rule on modifying eviction procedure.

Every ch. 24 row cites it.

### 11.2 Held rows released (§2.3)

| Row | Outcome | Rests on |
|---|---|---|
| `no-sublet-assign` | **Tagged** | §91.005 (consent required; no reasonableness standard) |
| `early-termination` | **Tagged** (lawful-but-exposed fee, as in KS/NE/OH/NV) | §91.006 not waived; §92.1031 |
| `possession-delay` | **Tagged** | No delivery statute in chs. 24/91/92 |
| `default-by-tenant` (base) | **Tagged** | §24.005(a) gives the rent-cure referent; §24.006 matches the fee sentence |
| `holdover-ca` | **Tagged**; base `holdover` not (no Texas multiplier → empty referent, K.3) | §91.001 |
| `surrender-end-of-term` (base) | **Tagged**; the self-limit is load-bearing | §54.044(d), §92.0081(b)(2), §24.0061 |
| `assistance-animal-accommodation` | **Tagged — instruction 24 closed** | §301.025(c)(2), (f); §301.062 |
| `returned-payments` | **Not tagged; superseded by `nsf-fee-limit-tx`** | Bus. & Com. Code §3.506 |
| `parking-vehicle-rules` | **Still held** | Occ. Code ch. 2308 |

The `-ks-ne` / `-mn-nd` variants and base `holdover` stay untagged for TX.

**Assistance-animal classification.** Texas has an independent state basis, but it is a *generic* accommodation duty, not an animal-specific scheme like NE's. Because §301.062 makes Texas rules mirror federal regulations, the federal-guidance caveat in the checklist carries straight through.

### 11.3 New and rewritten rows

**Dormant rows, both resolved:**
- **`nsf-fee-limit-tx`: rewritten and activated.** The $30 figure was right. The "plus the bank's fee" claim is unsupported by §3.506(b).
- **`utility-submetering-disclosure-tx`: rewritten and activated as `NEEDS_REVIEW`**, on purpose (§11.4). The pre-rigor row was generic "utilities". The scheme is actually water/wastewater only, covers submetered as well as allocated billing, requires nine lease items rather than one, and requires handing the tenant the rules.

**Across all five dormant rows**, the pre-rigor pass had a real topic and one right number each time, and missed the operative rule each time.

**New lease clauses (3):**
- `landlord-lien-tx` (CONDITIONAL; **whole section bold/underline, §54.043(a)** — the 17th Texas typography rule);
- `electronic-notice-consent-tx` (CONDITIONAL; §24.005(f-3)(4));
- `notice-to-vacate-period-tx` (CONDITIONAL; §24.005(a)).

**New education rows (12):** month-to-month termination; pre-eviction notice; eviction process; post-writ property; landlord's lien; mitigation; landlord-breach lien; public-indecency termination; fair housing; voucher preemption; rent-control preemption; water submetering.

**Batch-1 rows updated (TX-only, no propagation needed):**
- `edu-non-waivable-terms-tx`: now adds mitigation and lien protections;
- notes on `early-termination-rights-statement-tx` and `acceptable-payment-methods-tx`.

### 11.4 Two ambiguities and one partial dependency
- **§3.506(e)** preserves "any right or remedy ... under any ... written contract." Whether a lease can add the landlord's own bank charge on top of the $30 processing fee is unclear. **Drafted around**: the clause stays at $30 total. This is a research-mode candidate.
- **The §24.005 form rule turns on "was not late or delinquent ... before the month in which the notice is given."** The statute does not say how far back "before" reaches: the prior month, or the whole tenancy. This affects landlord practice, not lease text. Recorded in `edu-eviction-notice-tx` in the statute's own words, without interpretation. This is a research-mode candidate.
- **16 TAC §24.279(a)(9)** points to §24.281(d)(3) for the service-charge percentage, which I have not read. That is why `utility-submetering-disclosure-tx` is `NEEDS_REVIEW`: every other lease element is from text read section-open. **Administrative rule (instruction 16):** its currency is asserted only as of the PUC's own posting ("effective 10/17/18").

### 11.5 Judgment calls, surfaced not buried
1. **Landlord's lien offered, not defaulted.** It is a real Texas landlord right, but "without a breach of the peace" is a practice standard no document can secure, and willful violation costs one month's rent + $1,000 + fees. This is the Addendum M.7 category again.
2. **Notice-to-vacate period offered as optional.** Entering a figure under 3 shortens a statutory default. The builder should probably warn when the value is below 3.
3. **Holdover measure is actual damages, not a stated holdover rent.** Texas leases commonly set a daily holdover rate. `holdover-oh`'s liquidated-rate shape could be adapted if you want one.
4. **No Texas abandoned-property procedure written.** No statute read prescribes one. The base `surrender-end-of-term` self-limit carries the load, and a contractual abandonment clause is a candidate row.

### 11.6 K.1 eviction-scope screen for Texas (all four columns)

| Topic | Texas |
|---|---|
| Self-help / ouster ban | §92.0081: lockout only with a lease right, advance notice and 24-hour key access; one month's rent + $1,000 + damages + fees; writ of reentry (§92.009) |
| Utility shutoff ban | §92.008: one month's rent + $1,000; the only exception is submetered electricity under strict rules; writ of restoration (§92.0091) |
| Pre-filing notice duty | §24.005: 3 days or as contracted; pay-or-vacate for first-time nonpayment; four delivery methods |
| Post-writ property | **Officer places property outside; landlord has no storage duty and statutory immunity** (§24.0061(f), (i)); optional warehouseman with a redemption list (§24.0062). No pet-animal duty located |

### 11.7 Municipal and local layer — flagged, not resolved
- **§24.0043: only the Legislature may modify or suspend ch. 24 eviction procedure** (effective 2026-01-01). Any city ordinance adding pre-eviction steps is squarely in question. Flagged, not resolved.
- **§214.902:** rent control only in a declared disaster, with the governor's approval.
- **§250.007:** local voucher/source-of-income ordinances are preempted, **except veteran source of income**.
- **HB 2127 (2023) is still not read**, so its general preemption reach is open.

### 11.8 Deliverables (current)

| File | State |
|---|---|
| `lease-clauses.csv` | **783 rows; 743 active; TX 111 (49 shared, 73 lease clauses); 110 VERIFIED, 1 NEEDS_REVIEW.** Integrity checks pass; no collisions; other states unchanged |
| `lease-clause-decision-log-TX.md` | This file |
| Named-topic checklist | **Updated — §12** |

### 11.9 What is still open
1. **Ch. 92 special-session check** — now more pressing (§11.1).
2. **16 TAC §24.281** (service charge) and **§25.142** (electric submetering lease rules). The PUC posts each rule as a PDF, as with §24.279.
3. **Occ. Code ch. 2308** (towing), to release `parking-vehicle-rules`.
4. **HB 2127's codified sections**, only if you want local preemption resolved rather than flagged.
5. **L.5 dependencies:** H&S Code chs. 757 and 766; Ins. Code §6002.002; Fam. Code §71.004. Low priority; no row restates them.
6. **Research mode:**
   - proof-of-absence outside the codes read (radon, mold, carbon monoxide, bed bugs, meth, entry);
   - cross-chapter gap discovery;
   - the §§3.506(e), 24.005(a), 92.011(a) and 92.164(b) ambiguities, if you want them resolved rather than drafted around.
7. **Named-topic canvass and TX checklist column.**

§16's propagation notes are unchanged by batch 2: no shared row's text was edited, only `states` tags added.


---

## 12. Named-topic canvass — 2026-09-25

**Checklist updated:** `lease-clause-decision-log-named-topic-checklist.md`.
- **TX column added to all 10 per-state tables:** 54 topic rows plus the 15 core obligations. **No row is blank or "Not Yet Checked".**
- **"Texas against the candidate-topic tables":** 104 refs — Nevada's 86 plus Nevada's own 18 new topics.
- **"New topics added by Texas":** 17 rows.
- **Three new standing instructions, 28–30:**
  - screen for typography-conditioned effect and money-forfeiting omissions;
  - read from the official site and check for special sessions;
  - list opt-in landlord rights explicitly.

**Candidate-ref tally:** 71 answered, 27 not located, 4 not checked, 2 N/A. The four not checked are escheat, dormancy charges, the service-animal misrepresentation statute, and single-family towing. Each needs a code not yet read: Prop. Code Title 6, Human Resources Code, Occ. Code ch. 2308.

**Checks run:**
- **Citation-existence screen (ref 134.1).** 140 distinct cites across the 111 TX rows. 124 resolve to text read section-open. The other 16 are each labelled *unread* in their own row. No phantom cites.
- **Instruction 19 cross-check.** All 52 row ids named in the TX answers were checked against the CSV. 50 are active TX rows; 2 are deliberate references to non-TX rows.

**What "Not located" means here.** Every "Not located" is bounded to the text read. None is a confirmed absence until research mode runs. The proof-of-absence candidates are: radon, bed bugs, mold, carbon-monoxide alarms, meth, immigration-status inquiry, EV charging, service-animal misrepresentation.

**Findings the canvass surfaced beyond the row work:**
1. **Fee reciprocity is statutory in eviction suits** (§24.006(c), ref 134.5). A one-way landlord fee clause is made mutual.
2. **The small-owner fair-housing exemption also removes the state accommodation duty** (ref 294.7), because the duty sits inside the exempted section. This is the reverse of Nevada.
3. **A lease-copy failure abates non-rent lawsuits** (§92.024(d), ref 335.2).
4. **Texas's rules on electronic notice are split across four sections**, each with a different trigger (ref 294.3):
   - eviction notices: written agreement;
   - deposit notices: prior e-mail contact;
   - lease copy: tenant request or prior e-mail;
   - late-fee statement: established means.
5. **Texas's opt-in landlord rights number over fifteen** (ref 694.1). Built as clauses: lockout, lien, rekey deduction, device-misuse charge, surrender notice, notice period, e-notice, reconnection fee. **Not built:**
   - guarantor renewal (§92.021);
   - advance payment of device charges (§92.162(c));
   - deceased-tenant alternative procedure (§92.014(d));
   - in-dwelling delivery of delay affidavits (§92.0562(e)(3)).

### 12.1 Status of the Texas pass

| Area | State |
|---|---|
| Tag-first screen (instruction 26) | Done; no rows held (§13) |
| New TX rows | Done for all text read |
| Instruction 24 families | Both closed |
| Dormant rows | All 5 resolved |
| Canvass + checklist | Done (this section) |
| Propagation notes | §16 (3 uniform edits) |
| **Remaining before "complete"** | See §13.5 — superseded |


---

## 13. Research-mode pass and third text batch — 2026-09-25

### 13.1 What came in
- **Research pass (advanced research, once).** Its report is the source for everything tagged "research pass" below.
- **Supplied by Taylor:**
  - 16 TAC §24.281 (PUC posting, effective 10/17/18);
  - 16 TAC §25.142 (PUC posting, effective 6/10/13);
  - Tex. Occ. Code ch. 2308, entire (official site).

### 13.2 Rows (788 total; TX 116)

| Row | Change | Status |
|---|---|---|
| `parking-vehicle-rules-tx` | **New Texas override** — the last held row resolved | VERIFIED |
| `electric-submeter-disclosure-tx` | **New** — 16 TAC §25.142(d) lease statements + rule copy at signing; optional late penalty only if the lease states the exact amount (≤5%) | VERIFIED |
| `utility-submetering-disclosure-tx` | Water service charge fixed: 9% allowed on **submetered only, none on allocated** (§24.281(d)(3) vs (e)); utility pass-through fees barred ((a)); formula must be an approved method ((e)) | **NEEDS_REVIEW → VERIFIED** |
| `edu-private-property-towing-tx` | **New** — ch. 2308 towing routes, sign specs, liability | VERIFIED |
| `edu-service-animal-tx` | **New** — Hum. Res. Code §121.003(h), §121.006 | **NEEDS_REVIEW** (§13.4) |
| `edu-local-preemption-tx` | **New** — Prop. Code §1.004 (H.B. 2127) and the litigation | **NEEDS_REVIEW** (§13.4) |
| `edu-eviction-notice-tx` | Adds the undefined S.B. 38 look-back and "always use pay-or-vacate" | VERIFIED |
| `habitability-timeline-tx`, `flood-disclosure-tx` | Notes now record what H.B. 2037 and S.B. 2349 actually changed; no text change needed | VERIFIED |
| `edu-non-waivable-terms-tx`, `notice-to-vacate-period-tx`, `parking-rules-tx`, `edu-parking-towing-rules-tx` | Cross-references updated | VERIFIED |

**Why the parking row needed an override, not a tag.** Occ. Code §2308.253(e) says an apartment lease provision allowing a tow for expired registration is "valid only if the provision requires" 10 days' written notice with set content. §2308.253(g) voids conflicting apartment lease terms. The shared row's "in accordance with applicable law" hedge cannot satisfy a rule that demands the provision *itself* carry the notice term.

This is a new failure shape for the library's standard hedge. It is recorded as a new checklist topic, with advice to screen other states for "valid only if the provision requires".

### 13.3 Research pass — what it settled and what it couldn't

**Settled:**
- **S.B. 2349:** added the §92.0135(a-1) exemptions and the (e) signature requirement.
- **H.B. 2037:** replaced the "yellow pages" repairer test in §92.0561(f) with an independent, municipally licensed repairer, and added §§92.112–.113.
- **H.B. 16 (2nd C.S.):** a judicial-branch omnibus bill.
- **Prop. Code §1.004 (H.B. 2127):** in force. The cities' facial challenge was dismissed for lack of standing (3d COA, July 18, 2025); en banc reconsideration was denied May 14, 2026.
- **Hum. Res. Code §121.006:** amended in 2023. It reaches housing on its face and covers trained dogs, not ESAs.
- **S.B. 38 look-back:** undefined. TRCP 510.6(a)(13) makes the petition state it but does not define it.

**Not settled:**
- **None of the eight proof-of-absence topics could be moved to "Confirmed absent".** The research tool could not use the official site's full-text search. They stay "Not located", bounded to the text read. On carbon monoxide, the one relevant 89th-Legislature bill (H.B. 3209) died in committee.
- **The ch. 92 called-session sweep was not completed.**

**Secondary-only findings** (recorded in the checklist, no rows written):
- Escheat of unrefunded deposits: 3-year presumption, landlord as holder, July 1 report.

**Unresolved ambiguities** (drafted-around choices stand):
- the §3.506(e) bank-fee stacking question;
- whether ACH counts under §92.011;
- the §92.164(b) cross-references.

### 13.4 A new currency failure: the official site contradicting itself
The official PDF of Hum. Res. Code ch. 121 on statutes.capitol.texas.gov still shows the **pre-2023** text: a $300 fine and the harness/leash element. The official HTML shows the 2023 amendment. Instruction 29 now reads, in effect, "the official **HTML** page": a host copy can lag, and so can the official PDF.

Both new `NEEDS_REVIEW` rows close with one paste each:
1. **Hum. Res. Code ch. 121**, official HTML → clears `edu-service-animal-tx`;
2. **Prop. Code ch. 1** (for §1.004's history line) → clears `edu-local-preemption-tx`.

### 13.5 Status of the Texas pass

| Area | State |
|---|---|
| Rows | TX 116 active: 114 VERIFIED, 2 NEEDS_REVIEW (each one paste from closing) |
| Held rows | None |
| Instruction 24 families | Both closed |
| Dormant rows | All 5 resolved |
| Canvass + checklist | Done; candidate tally now 74 answered, 27 not located, 2 N/A, 1 not checked (dormancy charges) |
| Propagation notes | §16 unchanged (3 uniform edits; no shared-row text changed since) |
| **Remaining** | ~~(1) Ch. 92 called-session check~~ — **closed, §14.** **(2)** The two official-HTML pastes in §13.4. **(3)** Proof-of-absence: a full-text search on statutes.capitol.texas.gov for radon, "bed bug", mold, "carbon monoxide", methamphetamine, immigration, "electric vehicle", and "rent increase". Each search that returns only already-read or non-landlord hits turns a "Not located" into "Confirmed absent", with the search recorded as the evidentiary basis. |


---

## 14. Chapter 92 currency — closed (2026-09-25)

Taylor supplied the full official chapter 92 page from statutes.capitol.texas.gov. **No section carries a 1st or 2nd called-session history line.** The newest amendments are all from the 89th Legislature's Regular Session: S.B. 2349 (§92.0135), H.B. 47 (§92.0161) and H.B. 2037 (§§92.0561, 92.112, 92.113), each effective Sept. 1, 2025.

The official text matches, section for section, the Justia copy the chapter 92 rows were built from. That includes the stale cross-references in §92.164(b), which are therefore in the official text itself, not a host-copy artifact. The official page also confirms that Subchapter I (§92.355) is the chapter's last section and that there is no §92.022 or §92.256.

**No row text changed.** The currency caveat in the notes of every chapter 92 row was replaced with this confirmation.

**Remaining for Texas:**
1. **Two official-HTML pastes** (§13.4): Hum. Res. Code ch. 121 and Prop. Code ch. 1.
2. **Full-text searches** for the eight proof-of-absence terms (§13.5).


---

## 15. Official-HTML pastes and statute-wide absence searches — 2026-09-25

**Rows: 795 total; TX 123 active, all 123 `VERIFIED`.** Both `NEEDS_REVIEW` rows are cleared, and there are 7 new education rows.

### 15.1 The two pastes
- **Hum. Res. Code ch. 121 (official HTML).**
  - §121.006 is the 2023 version (H.B. 4164): a $1,000 fine plus 30 hours of community service, with no harness/leash element. The official PDF is confirmed stale.
  - H.B. 4164 did **not** change the §121.002 definition. It is still a specially trained or equipped dog, last amended in 2013.
  - **New:** under §121.004, refusing a service-animal user housing access (§121.003(g)–(h)) is a misdemeanor, a fine up to $300 plus 30 hours of community service. It also supports a civil action with damages conclusively presumed to be at least $300.
  - "Housing accommodations" excludes a single-family home renting out only one room (§121.002(3)).
  - `edu-service-animal-tx` is rewritten and VERIFIED.
- **Prop. Code ch. 1 (official HTML).** §1.004(a) and (b) share one history line: H.B. 2127, 2023. The eviction/notice-to-vacate preemption language was in the original bill. `edu-local-preemption-tx` is VERIFIED.

### 15.2 Proof of absence, statute level

Taylor ran full-text searches of all codes on statutes.capitol.texas.gov, and every hit was read.

| Term | Result | Row |
|---|---|---|
| radon | **Confirmed absent** — only H&S §401.233 (waste-site licensing) and Prop. Code §5.008 (seller's notice) | `edu-no-radon-disclosure-tx` |
| "bed bug" | **Confirmed absent** — zero hits | `edu-no-bed-bug-statute-tx` |
| mold | **Confirmed absent** — licensing, insurance and manufacturing hits only | `edu-no-mold-disclosure-tx` |
| "carbon monoxide" | **Confirmed absent** — H&S ch. 766 defines CO alarms and requires public information only; day-care CO rule only; H.B. 3209 (89R) died | `edu-no-co-alarm-statute-tx` |
| methamphetamine | **Confirmed absent** — seller's notice and manufacturer-liability hits only | `edu-no-meth-disclosure-tx` |
| immigration, "electric vehicle", "rent increase" | **Too many hits for a code-wide search** — pending a search narrowed to the Property Code | — |

**Evidentiary basis for each confirmed absence:** a full-text search of every Texas code on the official site, with every hit read. **Boundary:** statutes only. The administrative code and local codes were not searched, so a city building code may still require carbon-monoxide alarms (municipal layer, flagged).

**Two landlord-useful rows came out of the hits:**
- `edu-mold-remediation-licensing-tx`: owners of fewer than 10 residential units may do their own mold work without a license (Occ. Code §1958.102(e), 2025).
- `edu-meth-manufacture-liability-tx`: a meth manufacturer is strictly liable for property damage (Civ. Prac. & Rem. Code ch. 99).

**A new false-positive pattern**, added to the checklist's new-topics table: Prop. Code §5.008, the seller's disclosure notice, lists radon, meth, CO alarms, flooding and more. A keyword search surfaces it as though it were a landlord duty. It applies only to the sale of a home of one dwelling unit.

### 15.3 What is left for Texas
1. **Property Code-only searches** for "immigration" / "citizenship", "electric vehicle" / "charging", and "rent increase" / "increase in rent" / "rental increase". Chapters 1, 24, 54, 91, 92 and 301 are already read. Only hits in any other Property Code chapter need to be pasted.
2. **Optional:** Prop. Code chs. 72–74 (escheat of unrefunded deposits; secondary-sourced so far, no row written).

Everything else in the Texas pass is complete.


---

## 17. Property Code searches: immigration, EV charging, rent increase — 2026-09-25

**Rows: 798 total; TX 126 active: 124 `VERIFIED`, 2 `NEEDS_REVIEW`.** Three new education rows; `edu-no-bed-bug-statute-tx` downgraded.

### 17.1 A search-tool limitation, found by accident
The Property Code search for "rental increase" returned nothing. But §92.012(a)(3), read in full earlier, says "notices of rental **increases**". So the official search's phrase matching appears not to catch plurals. Single-word searches did return plurals: "mold" found "molds".

A zero-hit multi-word phrase search is therefore not proof of absence. Two earlier conclusions rested on exactly that:
- **"bed bug"** (code-wide): `edu-no-bed-bug-statute-tx` is downgraded to NEEDS_REVIEW until "bed bugs" and "bedbug" are searched.
- **"electric vehicle"** (Property Code): `edu-no-ev-charging-right-tx` is written as NEEDS_REVIEW until "electric vehicles" is searched.

Radon, mold, carbon monoxide and meth are unaffected. They are single words, or the searches returned hits that were read.

**Process lesson** (added as a checklist topic): run singular and plural forms, and include a known section as a control. Running "rental increases" should return §92.012; if it does, the plural theory is confirmed.

### 17.2 Results

| Topic | Result | Row |
|---|---|---|
| Immigration-status inquiry | **Confirmed absent (Property Code).** "Immigration": no hits. "Citizenship": §5.005, §§5.251–.253, §163.002, §201.002, none about landlord inquiries | `edu-no-immigration-inquiry-rule-tx` |
| EV charging right | **Not yet proven.** "Electric vehicle": no hits; plural pending. "Charging" is too broad and was not reviewed | `edu-no-ev-charging-right-tx` (NEEDS_REVIEW) |
| Rent-increase notice | **Confirmed absent (Property Code, ch. 92 tenancies)**, resting on the full ch. 91/92 reads plus the search. The only hit is §94.053(d): in a manufactured-home community lot lease, a mid-term rent increase provision is void unless the tenant initials it (out of scope) | `edu-no-rent-increase-notice-tx` |

### 17.3 Flag: S.B. 17 (2025) and leases of a year or more
Tex. Prop. Code Subch. H (§§5.251–5.253, effective Sept. 1, 2025) bars certain foreign governments, companies and individuals from purchasing "or otherwise acquir[ing] an interest in real property". §5.252(3) exempts "a leasehold interest ... if the duration of the interest is less than one year".

**A standard 12-month lease is not less than one year.** Three things remain open:
- whether a residential lease of a year or more is an acquired "interest in real property" under §5.253;
- whether a landlord has any duty or exposure;
- how the §5.253(4) categories work in practice, e.g. (C), a citizen of a designated country unlawfully present in the United States.

All three depend on §5.254 onward, which is unread. **No lease text written.** This is flagged, not resolved. It may also be in litigation; not checked.

### 17.4 What is left for Texas
1. **Plural re-searches:** "bed bugs" and "bedbug" (all codes); "electric vehicles" (Property Code); "rental increases" (Property Code, as a control; it should return §92.012).
2. **Prop. Code ch. 5, Subch. H from §5.254 to the end** (S.B. 17).
3. **Optional:** Prop. Code chs. 72–74 (escheat).


---

## 18. Closing batch — S.B. 17, unclaimed property, plural re-searches — 2026-09-25

**Rows: 800 total; TX 128 active, all `VERIFIED`.** Two new education rows; both `NEEDS_REVIEW` rows restored to VERIFIED.

### 18.1 Search-tool finding confirmed
The control search "rental increases" returned §92.012; "rental increase" had not. **The official search matches exact word forms only.** The variant searches then closed both open absences:
- **Bed bugs:** "bed bug", "bed bugs" and "bedbug" returned nothing. "Bedbugs" returned only H&S §341.011(10), a public-health nuisance for disease-carrying ectoparasites "in a place in which sleeping accommodations are offered to the public". That is not a landlord duty, and whether it reaches ordinary rentals is unresolved (flagged). **Confirmed absent (statutes).**
- **EV charging:** "electric vehicle" and "electric vehicles" both returned no hits in the Property Code. **Confirmed absent (Property Code).**

### 18.2 S.B. 17 (Tex. Prop. Code Subch. H, §§5.251–5.259) — read in full
- A leasehold of **one year or more** is inside the subchapter (§5.252(3)).
- A **violating leasehold is void**. §5.255(e) exempts only leaseholds from the rule that violating acquisitions stay valid.
- The attorney general may bring an **in rem action against the real property** and record notice of it (§5.255(c)–(d)). A receiver may terminate the leasehold and manage the property pending disposition (§5.257).
- Penalties fall on the acquirer: a state jail felony for individuals (§5.258) and a civil penalty for companies (§5.259). **No landlord verification duty is stated.**
- Written up as `edu-foreign-acquisition-leases-tx` (CONSTRAINED). The row names no countries.
- **Not verified:** the current designated-country list, any litigation, and how "domiciled" applies to foreign students or visa holders.

### 18.3 Judgment calls for Taylor
1. **S.B. 17 lease clause, or none. DECIDED 2026-09-26 (Taylor): education only, no clause, no builder warning.** Flag for any revisit, recorded in the row's notes: trigger at one year or more (not "over 12 months"); wording tracks §5.253 rather than nationality; counsel review. The original options, kept for the record: Options:
   - (a) no clause (current state);
   - (b) a tenant representation that the tenant is not restricted by Subch. H;
   - (c) a builder warning when a lease of one year or more is drafted.

   Options (b) and (c) sit next to national-origin fair-housing liability and should go past counsel. The row states the fair-housing constraint and advises no screening practice.
2. **Carried forward:** the late-fee safe-harbor cap, the casualty rent-reduction agreement, the optional landlord's lien and notice-to-vacate period, and the §5 formatting-field proposal (Addendum M.12).

### 18.4 Unclaimed property (Prop. Code chs. 72–74) — read in full
**New row: `edu-unclaimed-deposit-escheat-tx`.** Its key points:
- a landlord owing a refund is a "holder";
- three-year presumption of abandonment;
- report and deliver by July 1 for property held on March 1;
- 60-day owner notice if over $250;
- continuing annual reports;
- no dormancy charges;
- 10-year records;
- interest, penalties and a misdemeanor for willful violation.

**Lease-content restriction:** §74.309 prohibits private agreements diverting unclaimed funds. A lease clause forfeiting an unclaimed deposit to the landlord would be prohibited, so it is added to `edu-non-waivable-terms-tx`.

**Checklist:** refs 427.2 and 427.3 are now answered. The candidate tally is 76 answered, 26 not located, 2 N/A, 0 not checked.

### 18.5 Texas pass — final status

| Item | State |
|---|---|
| Instruction 13 / 27 | Satisfied at start and at close (no blank status) |
| Tag-first screen (26) | Complete; no held rows |
| Instruction 24 families | Both closed |
| Dormant rows (21) | All 5 resolved |
| Canvass + checklist | Complete; TX column in every table; 17+ new topics; instructions 28–30 added |
| Proof of absence | Radon, bed bugs, mold, CO alarms, meth: confirmed absent (statutes). Immigration inquiry, EV charging, rent-increase notice: confirmed absent (Property Code) |
| Currency | Ch. 92 checked against the official page: no called-session amendments. A called-session amendment to §24.0043 is captured |
| Propagation notes | §16: 3 uniform edits, unchanged since |
| Cross-state questions | §16 |
| Open | Only the §18.3 judgment calls |


---

## 19. Decision recorded — 2026-09-26

**S.B. 17 stays education only** (`edu-foreign-acquisition-leases-tx`). No lease clause and no builder warning.

The row's notes carry a flag for any future revisit:
1. **Trigger:** a lease, renewal or extension of **one year or more**. §5.252(3) exempts only leases under a year, so a 12-month lease is covered.
2. **Wording:** any tenant representation tracks the statute ("not a person prohibited by §5.253"), never nationality. Nationality wording invites national-origin fair-housing liability and over-reaches the law, which turns on domicile.
3. **Effect:** a representation cannot cure a void lease.
4. **Consistency:** it would have to go in every qualifying lease.
5. **Review:** Texas counsel before shipping.

**Court context also recorded in the notes:** *Wang v. Paxton* (5th Cir. Dec. 11, 2025), where standing failed and a long-resident F-1 student was held not domiciled in China, and *Huang v. Paxton* (W.D. Tex.). Neither reached the merits.

No other row changed. **TX: 128 active, all VERIFIED.**


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged TX** (§5a.1; uniform text, no TX override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. Tex. Prop. Code §92.3515 lists inaccurate or incomplete information as a denial ground in the selection criteria (`edu-rental-application-tx`), so the clause is consistent. Criminal-record rules are in `edu-criminal-record-leasing-tx`. Remedies run through `default-by-tenant`.
