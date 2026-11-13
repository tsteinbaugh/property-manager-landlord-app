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

---

## Gap-discovery backfill (instruction 36) — 2026-09-27

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §14: Tex. Prop. Code ch. 92, §§92.001–92.355, read whole section-open and checked against the official chapter page; chs. 24, 54, 91 and 301 also read whole, §11) |
| Gap-discovery source 2 — real-lease comparison | Done (§20.1: TAA Residential Lease Contract, Official Statewide Form 25, Oct 2025, with the TAA Apartment Lease Contract 25-A/B-1/B-2 and Master Lease Addendum 25-FF, Oct 2025) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§20.2: 77 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§15.2, §17, §18: official full-text searches across all codes, every hit read; outside-title reads of the Bus. & Com., Occ., Hum. Res., Water and Loc. Gov't Codes and 16 TAC; §20.2.3 adds H&S ch. 757, CPRC ch. 125 and Prop. Code ch. 24B) |

This backfill is numbered §20; it follows §19, the last section of the Texas log.

**Scope.** This is two targeted checks, not a re-audit: the real-lease comparison (source 2) and the landlord-scenario screen (source 3). No other Texas row was re-screened.
- **Input CSV confirmed (instruction 13):** 941 rows, 905 active, TX 129 active, all VERIFIED.
- **Why TX went from 128 to 129:** the Arizona session added `rental-application-accuracy`.
- **Current shared rows:** screening was run against the rows as they read now, including rent-first `application-of-payments`, the no-cure carve-out in `default-by-tenant`, the notice carve-out in `entire-agreement`, and `rental-application-accuracy`. None of them conflicts with anything found here.

**Result:**
- **No missing required clause.** Every statement Texas makes a lease carry is already a TX row.
- **Six new TX rows:**
  - five education rows: `edu-abandoned-property-tx`, `edu-pool-yard-enclosures-tx`, `edu-unauthorized-occupant-removal-tx`, `edu-common-nuisance-tx`, `edu-no-eviction-record-sealing-tx`;
  - one optional lease clause, `abandoned-property-tx`, added at Taylor's direction (Decision A).
- **Two TX rows changed:** `edu-eviction-process-tx` (one body sentence) and `security-devices-tx` (one builder note).
- **One new typography rule:** H&S §§757.009(b) and 757.013. It is the first Texas lease-format rule with a type-size alternative.
- **Shared rows:** no text changed.
- **Propagation notes:** none needed.
- **Resulting counts:** TX 135 active, all VERIFIED.

### 20.1 Real-lease comparison (gap-discovery source 2)

**The lease.** The Texas Apartment Association's **Residential Lease Contract**, TAA Official Statewide Form 25, revised October 2025, valid for leases completed before January 1, 2028. It covers houses, duplexes and other units with grounds or garages.
- **Read alongside it:**
  - the TAA **Apartment Lease Contract**, Form 25-A/B-1/B-2, Oct 2025, which has the same 32 paragraphs plus apartment specifics;
  - the TAA **Master Lease Addendum**, Form 25-FF, Oct 2025.
- **Source:** TAA posts these sample copies itself: https://www.taa.org/resources/understanding-the-lease-agreement/ (Residential: `/wp-content/uploads/2026/01/2025-Residential-Lease-Contract-SAMPLE.pdf`). They were retrieved and read on 2026-09-27.
- **Why it qualifies:**
  - It is the statewide residential-rental trade association's own attorney-drafted form, the standard lease for Texas rental housing. Members only may use it (par. 28).
  - It is the Texas analogue of the Realtors association lease the prompt names first (category (a)), and the association publishes it directly.
  - It is Texas-specific, not a multi-state template.
  - It is the current edition, written after S.B. 38.
- **Why not the Texas REALTORS form:** the only copies of the TXR-2001 Residential Lease that turned up were a brokerage listing supplement whose PDF had no machine-readable text and a download page behind a cookie wall. Neither could be read.

**Method.** Each provision was mapped by topic against the TX-active rows. The lease was used as a lead only (instruction 6), and every statutory point was checked against primary text. The lease text is not reproduced.

#### 20.1.1 Provision map

| TAA provision (by topic) | TX library coverage | Result |
|---|---|---|
| Parties, occupants, definitions | `permitted-occupants`, `joint-liability`, `edu-occupancy-limit-tx` | Covered |
| Access devices and keys | `keys-tx` (§92.156 turnover rekey; bold rekey-deduction option) | Covered |
| Rent due; no withholding except as law allows | `rent-payment`; `habitability-timeline-tx` | Covered |
| Payment method; cash only with written permission | `acceptable-payment-methods-tx`, `edu-cash-payments-tx` (§92.011) | Covered |
| Payments applied to non-rent charges first (water and wastewater excepted) | `application-of-payments` (rent first by design; "applicable law requires otherwise" covers §92.008(p) and PUC utility rules) | Covered. The difference is a product choice; no Texas statute sets the order |
| Initial and daily late fees after the 2nd day | `late-fee-safe-harbor-tx`, `edu-late-fee-rules-tx` (§§92.019, 92.0191) | Covered |
| Returned-payment fee | `nsf-fee-limit-tx` | Covered |
| Utilities; $50 connection or transfer fee; retail electric provider changes | `utilities-responsibility`, `utility-service-continuity`; submetering rows | Covered. The fee is a contract term; no statute located |
| Rent increase at renewal on notice | `edu-no-rent-increase-notice-tx`, `edu-termination-notice-tx` | Covered |
| Automatic month-to-month renewal; move-out notice (default 30 days) | `surrender-end-of-term`, `edu-termination-notice-tx` (§91.001) | Covered |
| Written reminder required if the lease demands more than 30 days' notice | — | **No statute.** Not in chs. 91 or 92, both read whole. A TAA contract term; no row |
| Deposit; forwarding address; 30-day refund; joint refund | `security-deposit-return-tx`, `edu-security-deposit-rules-tx`, `deposit-surrender-notice-tx` | Covered |
| Deposit not usable as rent | `deposit-last-month-rent-tx` (§92.108) | Covered |
| Rekey charge on early or breach move-out | `keys-tx` (§92.156(e), bold or underline) | Covered |
| Required liability insurance; waiver of subrogation; renter's insurance urged | `tenants-property-insurance-ks-oh-ca` | Covered. No Texas statute located in chs. 24, 54, 91 or 92 |
| Reletting charge, capped at 85% | `early-termination`, `edu-mitigation-duty-tx` (§91.006) | Covered. The cap is a TAA term |
| Early-termination option | `early-termination` | Covered |
| Statutory early-termination rights statement | `early-termination-rights-statement-tx` (REQUIRED) | Covered. The TAA version adds death of a sole resident (§92.0162, which requires no statement; `edu-deceased-tenant-tx`) |
| Delay of occupancy; 3-day and 7-day termination windows | `possession-delay`; §92.1031 in `edu-security-deposit-rules-tx` | Covered. No delay statute in chs. 91 or 92; TAA contract terms |
| Tenant pays for drain stoppages, doors, windows and screens, and windows left open | `tenant-repair-agreement-tx` (§92.006(f), bold or underline) | Covered |
| Community policies change on distribution | `entire-agreement` carve-out; §92.013 in `edu-parking-towing-rules-tx` | Covered |
| Guests limited to 2 days a week and 4 a month | `guest-policy`, `guest-policy-day-limit` | Covered. No statute |
| Notice of convictions; default on a criminal charge | `default-by-tenant`; `edu-criminal-record-leasing-tx` | No statute. Contract terms; product choice, no row |
| Prohibited conduct; home business | `no-disturbance`, `residential-use-only`, `smoking-policy` | Covered |
| Animals; removal of an unauthorized animal after 24 hours' notice; violation charges | `pet-policy`, `pet-insurance-requirement` | Covered. The removal and the charges are TAA terms; no statute located |
| Assistance-animal statements are true | `assistance-animal-accommodation`, `edu-service-animal-tx` (Hum. Res. Code §121.006) | Covered |
| Parking; towing and booting | `parking-rules-tx` ("Parking" heading, §92.0131(c)), `parking-vehicle-rules-tx`, `edu-private-property-towing-tx` | Covered |
| Entry, including forced entry, with a notice left after | `landlords-access`, `edu-no-entry-notice-statute-tx` | Covered |
| Written repair requests; duty to report | `landlord-maintenance` (§92.052(d)); `security-devices-tx` (§92.159) | Covered. **Pool-yard devices follow a stricter format rule** (§20.2.3) |
| Repair remedies statement (§§92.056, 92.0561, 92.0563) | `habitability-timeline-tx` (REQUIRED, bold or underline) | Covered |
| No rent abatement except by statute | `casualty-loss-tx` (§92.054, lease-agreed proportional reduction) | Covered. The difference is a product choice, recorded in §4.2 |
| Owner terminates for damage (7 days) or closure (30 days) | `casualty-loss-tx`; §92.055 in `edu-repair-duty-tx` | Covered |
| No assignment, sublet or short-term listing | `no-sublet-assign` (§91.005) | Covered |
| Security devices and statutory list | `security-devices-tx`, `edu-security-device-duties-tx` | Covered |
| Smoke alarms; §92.2611 liability for disabling one | `smoke-alarm-tx` (bold or underline notice) | Covered |
| Landlord nonliability; no security warranty | — | Not needed. No library row for any state; §92.006 bars waiving statutory duties (`edu-non-waivable-terms-tx`) |
| As-is; condition form within 48 hours | `existing-condition` | Covered. No move-in form statute in ch. 92 |
| Alterations; satellite dishes | `no-alterations` | Covered. Satellite dishes are governed by federal OTARD rules, not state law |
| Notices, including e-mailed notices to vacate | `notices`, `electronic-notice-consent-tx` (§24.005(f-3)(4)) | Covered |
| Joint and several liability; indemnity | `joint-liability` | Covered. Indemnity is not needed |
| Default events, including a false application | `default-by-tenant`, `rental-application-accuracy` | Covered |
| 24-hour notice to vacate; e-mailed notices; shortened weekend deadlines | `notice-to-vacate-period-tx`, `edu-eviction-notice-tx` | Covered. See the note below the table |
| Rent acceleration | `edu-mitigation-duty-tx` | Covered (mitigation limits it) |
| Holdover rent up by 25% | `holdover-ca` | Covered |
| Credit reporting; collection fees; interest under Fin. Code §304.003(c) | §92.110 in `edu-security-deposit-rules-tx` | Not needed. Contract terms; the interest-rate statute was not read |
| **Consent to electronic court appearances (par. 23.6)** | `edu-eviction-process-tx` | **Added** (§20.3); no clause (Decision B) |
| Non-waiver; subordination; cumulative remedies | — | Skipped library-wide (AZ §16.4 decision) |
| Move-out cleaning and inspection | `surrender-end-of-term`, `tenant-maintenance` | Covered. No statute |
| **Surrender and abandonment defined; disposal of property left behind (par. 27)** | none before this pass | **Gap → `edu-abandoned-property-tx` and `abandoned-property-tx`** (§20.3) |
| TAA membership; class-action waiver; force majeure | — | Not needed (association and product terms) |
| Controlling law and venue | `governing-law` | Covered |
| Pools and yard (Residential par. 3.6) | `landscaping-irrigation` | Yard covered. **Pool → gap** (§20.2.3) |
| Interior pest control by the owner | `landlord-maintenance`; `edu-no-bed-bug-statute-tx` | Covered |
| Master addendum: freeze precautions; bed bugs; mold; firearms; package acceptance | `edu-no-bed-bug-statute-tx`, `edu-no-mold-disclosure-tx`, `edu-firearms-tx` (§92.026) | Covered. Freeze and package terms are contract terms |
| Required separate documents (flood, owner disclosure, submetering, parking rules) | `flood-disclosure-tx`, `owner-management-disclosure-tx`, submetering rows, `parking-rules-tx` | Covered |

**Note on the notice-period row.** The TAA form makes a notice period that ends on a weekend or holiday end on that day. §24.0042 instead rolls forward "a period of time prescribed by this chapter". Whether a lease-contracted period (§24.005(a)) is a period "prescribed by this chapter" is not settled. `notice-to-vacate-period-tx` and `edu-eviction-notice-tx` already take the rolling-forward reading, which is the safer one, so no row changes.

#### 20.1.2 What the comparison produced
- **(a) Missing required clause:** none.
- **(b) Corrections to existing TX rows:** none of substance. One addition to `edu-eviction-process-tx` (§24.005105).
- **(c) New TX rows:** `edu-abandoned-property-tx`, `abandoned-property-tx`, and `edu-pool-yard-enclosures-tx` (the pool lead came from par. 3.6; its gap was confirmed in §20.2).
- **(d) Confirmed absences:**
  - **Residential definition of abandonment:** statute-wide (§20.2.4).
  - **Reminder notice for move-out notice longer than 30 days; statutory rule on occupancy delay:** bounded to chs. 91 and 92, both read whole.
- **(e) Cross-state questions:** none. The abandonment clause is Texas-only because Texas has no statute. Other states with an abandonment statute already have their own rows.

### 20.2 Landlord-scenario screen (gap-discovery source 3)

**Method.**
- **Scenarios:** Arizona's 59-scenario map (AZ log §18.1) plus Texas-specific situations: lockout, landlord's lien, landlord-paid utility cutoff, submetered electricity, freeze or hurricane, cash receipts, late-fee statements, occupancy limits, guarantors, and the foreign-acquisition law.
- **Run:** each scenario against the 129 TX-active rows.
- **Where no row answered:** Taylor ran the official statutes.capitol.texas.gov full-text search, and each hit's chapter was read section-open where it mattered.
- **Search rule (instruction 15):** exact phrases, with variants.

**Result.** 77 scenarios:
- **71 covered.**
- **Five gaps**, each now an education row: abandonment, pools, squatter removal, crime nuisance suits, and eviction-record sealing (an absence row).
- **One confirmed absence with no row:** extended-absence notice.
- **Bounded, not searched statute-wide:** a statutory partial-payment rule. Not in chs. 24, 91 or 92; marked covered by the lease rows.
- **One lead reclassified as covered:** closing or demolishing a unit (§92.055 is already in `edu-repair-duty-tx`).

#### 20.2.1 Scenario map

| Scenario | TX coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays an application deposit, then is rejected or backs out | `edu-rental-application-tx` (§§92.351–.355); §92.1031 in `edu-security-deposit-rules-tx` | Covered |
| Screening: fees, criminal history, income source, immigration | `edu-rental-application-tx`, `edu-criminal-record-leasing-tx`, `edu-voucher-preemption-tx`, `edu-no-immigration-inquiry-rule-tx`, `edu-fair-housing-tx` | Covered |
| Applicant lied on the application | `rental-application-accuracy` (§92.3515 lists inaccurate information as a denial ground) | Covered |
| Voucher holder applies | `edu-voucher-preemption-tx` (Loc. Gov't §250.007) | Covered |
| Unit not ready on move-in day | `possession-delay` | Covered (contract term; no statute) |
| Required disclosures at signing | `owner-management-disclosure-tx`, `flood-disclosure-tx`, `lead-based-paint`, `parking-rules-tx`, `emergency-phone-tx`, `utility-submetering-disclosure-tx`, `electric-submeter-disclosure-tx`, `early-termination-rights-statement-tx`, `habitability-timeline-tx`, `edu-lease-copy-tx` | Covered |
| Blank left in the lease | Product rule | Covered (builder rule) |
| Too many occupants | `edu-occupancy-limit-tx` (§92.010) | Covered |
| Guarantor or co-signer | `edu-guarantor-renewal-tx` (§92.021) | Covered |
| Property is in an HOA | `hoa-compliance` | Covered. Prop. Code ch. 209 (HOA leasing rules) not read; flagged |
| Tenant wants to pay a fee instead of a deposit | `edu-fee-in-lieu-of-deposit-tx` (§92.111) | Covered |
| How large a deposit | `edu-no-deposit-cap-or-interest-tx` | Covered |
| Lease of one year or more to a person from a designated country | `edu-foreign-acquisition-leases-tx` | Covered |
| **Rent and money** | | |
| Rent is late | `late-fee-safe-harbor-tx`, `edu-late-fee-rules-tx`, `edu-eviction-notice-tx` | Covered |
| Tenant asks what late fees they owe | `late-fee-safe-harbor-tx` (§92.0191) | Covered |
| Tenant pays part of the rent | `application-of-payments`, `late-fee-safe-harbor-tx` | Covered. No partial-payment statute in chs. 24, 91 or 92 (read whole; bounded) |
| Check bounces | `nsf-fee-limit-tx` | Covered |
| Tenant pays cash and wants a receipt | `edu-cash-payments-tx` (§92.011) | Covered |
| Raising the rent at renewal | `edu-no-rent-increase-notice-tx`, `edu-termination-notice-tx`, `edu-rent-control-preemption-tx` | Covered |
| City fines the owner for a tenant-caused violation | `edu-governmental-fines-tx` (§92.018) | Covered |
| Tenant withholds the last month's rent against the deposit | `deposit-last-month-rent-tx` (§92.108) | Covered |
| **During the tenancy** | | |
| AC fails in August | `edu-repair-duty-tx` (§92.0561(d)(3)(C)), `habitability-timeline-tx` | Covered. City cooling ordinances flagged (§7) |
| Tenant repairs and deducts | `habitability-timeline-tx`, `edu-repair-duty-tx` | Covered |
| Tenant withholds rent without following the statute | `edu-repair-duty-tx` (§92.058) | Covered |
| Pests or bed bugs | `edu-no-bed-bug-statute-tx` | Covered |
| Mold complaint | `edu-no-mold-disclosure-tx`, `edu-mold-remediation-licensing-tx` | Covered |
| Tenant causes damage | `default-by-tenant`, `tenant-repair-agreement-tx`, `security-deposit-use` | Covered |
| Landlord needs to enter; tenant refuses | `landlords-access`, `edu-no-entry-notice-statute-tx` | Covered |
| Tenant changes the locks or asks for a rekey | `keys-tx`, `security-devices-tx`, `edu-security-device-duties-tx` | Covered |
| Smoke alarm disabled; battery dead | `smoke-alarm-tx` | Covered |
| Fire extinguisher | `edu-smoke-alarm-duties-tx` (§§92.263–.264) | Covered |
| Tenant away for a month | — | **Confirmed absent** (§20.2.4). No row |
| Guest won't leave | `guest-policy`, `edu-eviction-notice-tx` | Covered (a guest who becomes an occupant is evicted) |
| **Stranger moves into a vacant unit** | none before this pass | **Gap → `edu-unauthorized-occupant-removal-tx`** (Prop. Code ch. 24B) |
| Roommate moves out | `joint-liability` | Covered |
| Tenant sublets or lists on Airbnb | `no-sublet-assign` (§91.005) | Covered. City short-term-rental rules flagged |
| Noise and neighbor complaints | `no-disturbance` | Covered |
| **Drugs, violence or other crime at the unit** | `default-by-tenant`, `edu-criminal-record-leasing-tx` | **Gap (owner's exposure) → `edu-common-nuisance-tx`** (CPRC ch. 125) |
| Tenant keeps calling the police | `edu-summon-police-tx` (§92.015) | Covered |
| Firearms | `edu-firearms-tx` (§92.026) | Covered |
| Unapproved pet | `pet-policy`, `pet-insurance-requirement` | Covered |
| Assistance animal, or a fake service dog | `assistance-animal-accommodation`, `edu-service-animal-tx` | Covered |
| Disability modification request | `edu-fair-housing-tx` (§301.025(c)) | Covered |
| Tenant paints or alters the unit | `no-alterations` | Covered |
| HOA fines the owner because of the tenant | `hoa-compliance` (§92.018 covers government fines only) | Covered |
| Car towed from the lot | `parking-rules-tx`, `parking-vehicle-rules-tx`, `edu-private-property-towing-tx` | Covered |
| Parking rule changed mid-lease | `edu-parking-towing-rules-tx` (§92.0131(d)–(e)) | Covered |
| Rule change affecting belongings outside the unit | `edu-parking-towing-rules-tx` (§92.013) | Covered |
| **Pool at the property** | none before this pass | **Gap → `edu-pool-yard-enclosures-tx`** (H&S ch. 757) and a format note on `security-devices-tx` |
| Yard work by the tenant | `landscaping-irrigation` | Covered |
| Tenant's utility is shut off | `utility-service-continuity`, `utility-payment-evidence` | Covered |
| Landlord falls behind on a landlord-paid utility | `edu-landlord-paid-utility-cutoff-tx` (§§92.301–.302) | Covered |
| Tenant doesn't pay the submetered electric bill | `electric-submeter-interruption-tx` (§92.008(h)–(r)) | Covered |
| Landlord wants to change the locks for unpaid rent | `lockout-rent-delinquency-tx`, `edu-lockout-utility-rules-tx` | Covered |
| Landlord wants to seize property for unpaid rent | `landlord-lien-tx`, `edu-landlord-lien-tx` | Covered |
| Freeze, hurricane or flood damage | `casualty-loss-tx` (§§92.054, 92.062), `flood-disclosure-tx`, `edu-flood-disclosure-remedy-tx` | Covered |
| Tenant asks who owns the property | `owner-management-disclosure-tx`, `edu-owner-disclosure-tx` | Covered |
| Tenant asks for a copy of the lease | `edu-lease-copy-tx` (§92.024) | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination`, `edu-mitigation-duty-tx` | Covered |
| Family-violence, sexual-assault or stalking victim wants out | `early-termination-rights-statement-tx`, `edu-early-termination-rights-tx` | Covered |
| Tenant is deployed or transferred | same rows (§92.017) | Covered |
| Month-to-month notice either way | `edu-termination-notice-tx` (§91.001) | Covered |
| Tenant stays after the lease ends | `holdover-ca`, `notice-to-vacate-period-tx` | Covered |
| **Tenant disappears and leaves belongings** | `surrender-end-of-term` (hedged), `edu-mitigation-duty-tx` | **Gap → `edu-abandoned-property-tx` + `abandoned-property-tx`** |
| Tenant dies | `edu-deceased-tenant-tx`, `deceased-tenant-contact-tx` (§§92.014, 92.0162) | Covered |
| Eviction process | `edu-eviction-notice-tx`, `edu-eviction-process-tx` | Covered (plus the §24.005105 sentence) |
| Retaliation claim | `edu-retaliation-tx` | Covered |
| Belongings left after the writ | `edu-post-writ-property-tx` | Covered |
| Deposit dispute | `security-deposit-return-tx`, `edu-security-deposit-rules-tx` | Covered |
| Deposit refund never cashed | `edu-unclaimed-deposit-escheat-tx` | Covered |
| **Tenant asks to seal an eviction record** | none before this pass | **Confirmed absent → `edu-no-eviction-record-sealing-tx`** |
| Tenant convicted of public indecency | `edu-public-indecency-termination-tx` (§91.003) | Covered |
| Owner wants to demolish or stop renting the unit | `edu-repair-duty-tx` (§92.055) | Covered |
| **Owner changes** | | |
| Owner sells with a tenant in place | `edu-security-deposit-rules-tx` (§92.105), `owner-management-disclosure-tx`, `landlords-access` | Covered |
| Lender forecloses | `edu-eviction-notice-tx` (§24.005(b), 30 days), `tenant-forward-proceedings-ca` | Covered |
| Owner switches property managers | `owner-management-disclosure-tx` | Covered |
| City passes a tenant ordinance | `edu-local-preemption-tx` (§1.004) | Covered |

**Count:** 77 scenarios: 71 covered, 5 gaps (four new education rows, plus the eviction-record absence row), and 1 absence with no row.

#### 20.2.2 Why these were gaps
- **The first four sit outside Property Code ch. 92.** The statute walk read ch. 92 whole, and the outside-title searches (§§15, 17, 18) ran topic-by-topic proof-of-absence terms. None of them surfaced a pool, squatter or nuisance statute, because no search term pointed there.
- **This is the pattern instruction 36 was written to catch.** In Arizona the same kind of screen found towing and sale-of-property rows.

#### 20.2.3 Rows written from new primary text (all read section-open, official text supplied by Taylor 2026-09-27)
- **`edu-pool-yard-enclosures-tx`** (H&S ch. 757, 1993; §§757.010–.011 amended 2015).
  - **Coverage:** multiunit rental complexes of 2+ units, including condominium projects but not stand-alone homes, and rental units in condominium, co-op or town-home projects with a pool.
  - **Duties:** 48-inch enclosure; self-closing, self-latching gates; 31-day inspection; repairs on tenant notice. The duties are non-waivable. Penalty up to $5,000 after the tenant's written notice.
  - **New typography rule (instruction 28):** a lease requirement that repair requests for pool-yard latches and bolts be in writing works only if it is "in capital letters and underlined or in 10-point boldfaced print" (§§757.009(b), 757.013). This makes **18** Texas lease-format rules, and the first with a type-size option. `security-devices-tx` now carries the builder note, because caps-plus-underline or 10-point bold satisfies both this rule and §92.159.
  - **Addendum M.12:** the proposed formatting field needs a type-size attribute as well as bold, underline and heading.
- **`edu-unauthorized-occupant-removal-tx`** (Prop. Code ch. 24B, S.B. 1333, eff. 2025-09-01).
  - **Procedure:** sheriff or constable removal on a sworn complaint in the statutory form.
  - **Exclusions:** current or former tenants and immediate family.
  - **Wrongful removal:** actual damages, three times fair market rent, costs and fees.
  - **Not determined:** whether a guest left behind by a departed tenant "unlawfully entered". The row routes every tenancy situation to eviction.
- **`edu-common-nuisance-tx`** (CPRC ch. 125, Subchs. A, C, D).
  - **Liability test:** knowingly tolerating listed crimes and failing to make reasonable attempts to abate. There is a multiunit rule for 3+ units.
  - **Remedies:** closure for one year, a $5,000–$10,000 bond, a receiver, and an order to terminate a lease.
  - **Defense-side evidence rules:** calls for police are inadmissible to show toleration; refusing to cooperate is admissible.
- **`edu-abandoned-property-tx`** and the optional clause **`abandoned-property-tx`** (Decision A). Design notes are on the clause:
  - three cumulative conditions, including posted and mailed notice with 5 days to respond;
  - a 30-day hold;
  - donation or discard only, so it is never a lien sale (§54.045);
  - release is never conditioned on paying costs (§54.042 exemptions);
  - the deceased-tenant case is carved out to §92.014;
  - an explicit statement that it enlarges no lockout right (§92.0081(j)).

#### 20.2.4 Confirmed absences
Searches were run by Taylor on 2026-09-27 on the official site.
- **Tenant notice of an extended absence:** confirmed absent (statutes). The exact phrase "extended absence" returned 0 hits. Unquoted, the words matched 239 unrelated chapters, which is why the phrase search was run. No row, following AZ precedent.
- **Eviction-record sealing:** confirmed absent (statutes).
  - "eviction record" (run as separate words, a broader query) returned 8 chapters.
  - Prop. Code chs. 24 (as amended by S.B. 38) and 92 were read whole and contain no sealing provision.
  - Gov't Code chs. 25 and 26 (county courts), Loc. Gov't chs. 86 (constables) and 154 (officer pay), and Prop. Code chs. 93 (commercial) and 94 (manufactured homes) were reviewed by title only; none is a records chapter.
  - Row: `edu-no-eviction-record-sealing-tx`.
- **Statutory definition of residential abandonment, or an abandoned-property procedure for a living tenant:** confirmed absent (statutes).
  - "abandoned the premises" hit Gov't Code ch. 2306 (TDHCA, housing finance; title only), Prop. Code ch. 54 (§54.044(d), read) and ch. 93 (commercial).
  - "premises abandoned" hit Prop. Code ch. 92 (§92.0081(b)(2), read) and ch. 93.
- **Statutory partial-payment rule:** not in chs. 24, 91 or 92, all read whole. Bounded; not searched statute-wide. No row.

### 20.3 Rows changed

**New (6):**

| Id | Type | Rule | Topic key |
|---|---|---|---|
| `edu-abandoned-property-tx` | Education | CONSTRAINED | abandoned-property |
| `abandoned-property-tx` | Lease clause, optional | CONDITIONAL | abandoned-property |
| `edu-pool-yard-enclosures-tx` | Education | CONSTRAINED | pool-safety |
| `edu-unauthorized-occupant-removal-tx` | Education | CONSTRAINED | unauthorized-occupant-removal (new key) |
| `edu-common-nuisance-tx` | Education | RECOMMENDED | nuisance |
| `edu-no-eviction-record-sealing-tx` | Education | RECOMMENDED | eviction-record-sealing |

All six are TX only and VERIFIED.

**Changed (2), both TX-only, both with `last_checked` reset to 2026-09-27:**
- **`edu-eviction-process-tx`:** one body sentence added. It covers §24.005105 video or phone appearance "if the parties agree", and notes that whether a consent signed in the lease counts is untested.
- **`security-devices-tx`:** a bracketed builder note added to the optional written-request sentence (H&S §§757.009(b), 757.013). The operative text is unchanged.

**Decisions (Taylor, 2026-09-27):**
- **A — build a TX abandonment clause:** **yes.** Built as `abandoned-property-tx`.
- **B — a lease clause consenting to electronic court appearances:** **no.** The education sentence stays.

**Shared rows:** no text changed, so there are no propagation notes. Nothing in this pass bears on another state's rows; the new statutes are all Texas-only.

**Builder notes for the Claude Code sync:**
- `abandoned-property-tx` uses fixed numbers (5 days, 30 days). It introduces no new placeholder.
- `unauthorized-occupant-removal` is a new topic key, used by one row.

### 20.4 Integrity (merged view: attached CSV plus this delta)
- **Totals:** 947 rows, 911 active.
- **TX:** 135 active (77 lease clauses, 58 education), all VERIFIED.
- **Other states:** active counts unchanged (AZ 109, CA 151, CO 115, FL 99, KS 115, MN 120, ND 111, NE 112, NJ 80, NV 103, OH 74, SD 91, WY 99).
- **Checks passed:** no duplicate ids, no dangling `supersedes`, no display collisions, no blank status on an active row, and no blank `states` on a delta row.
- **Delta file:** 8 rows (6 new, 2 changed), each with the full 16 columns; the header matches the attached CSV.
- **References:** every row id named in the delta's notes and bodies exists in the merged CSV.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).
2. **`pet-policy`** — "without liability to Tenant" now reads "without liability to Tenant to the extent applicable law permits". A flat disclaimer of the landlord's own entry-and-removal act is void where exculpation is barred (ND §9-08-02). Raised by the ND backfill (ND log §43.7).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows, and checklist mentions of them now point to those rows. Statutory limits that stay useful when filling in a clause are now bracket prompts for the landlord, not lease text.

- **Trimmed:** `late-fee-safe-harbor-tx` (fee and agreed-damages sentence kept), `nsf-fee-limit-tx` (fee kept; $30 cap → `edu-returned-payment-fee-tx`), `utility-submetering-disclosure-tx` (required disclosures kept), `security-deposit-return-tx` (forwarding address and e-mail designation kept). The restated rules were already in `edu-late-fee-rules-tx`, `edu-water-submetering-tx` and `edu-security-deposit-rules-tx`.
- **Optional (pattern 3):** `emergency-phone-tx`, with `edu-emergency-phone-tx`.
- **§5a.1:** only TX-only rows changed; no propagation owed.

### Verdict for every lease clause

All 27 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `late-fee-safe-harbor-tx` | Split | CONSTRAINED_TERM | keep fee and liquidated-damages agreement; floor, cap and statement duty to edu |
| `nsf-fee-limit-tx` | Split | CONSTRAINED_TERM | keep fee; $30 cap to edu |
| `security-deposit-return-tx` | Split | SERVES_LANDLORD | keep forwarding-address and e-mail designation; rest edu |
| `utility-submetering-disclosure-tx` | Split | REQUIRED_DISCLOSURE: 16 Tex. Admin. Code § 24.279 | keep disclosures; charge limits to edu |
| `emergency-phone-tx` | Optional + education | SERVES_LANDLORD | statute requires the number, not in the lease |
| `abandoned-property-tx` | Keep | SERVES_LANDLORD | opt-in definition |
| `acceptable-payment-methods-tx` | Keep | CONSTRAINED_TERM |  |
| `casualty-loss-tx` | Keep | SERVES_LANDLORD | weak: mutual termination; insurance-proceeds timing |
| `deceased-tenant-contact-tx` | Keep | SERVES_LANDLORD |  |
| `deposit-last-month-rent-tx` | Keep | SERVES_LANDLORD |  |
| `deposit-surrender-notice-tx` | Keep | SERVES_LANDLORD | opt-in |
| `early-termination-rights-statement-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code §§ 92.016(f), 92.0161(g) |  |
| `electric-submeter-disclosure-tx` | Keep | SERVES_LANDLORD |  |
| `electric-submeter-interruption-tx` | Keep | SERVES_LANDLORD | opt-in |
| `electronic-notice-consent-tx` | Keep | SERVES_LANDLORD | opt-in |
| `flood-disclosure-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code § 92.0135 |  |
| `habitability-timeline-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code § 92.056(g) |  |
| `keys-tx` | Keep | SERVES_LANDLORD |  |
| `landlord-lien-tx` | Keep | SERVES_LANDLORD | opt-in |
| `lockout-rent-delinquency-tx` | Keep | SERVES_LANDLORD | opt-in |
| `notice-to-vacate-period-tx` | Keep | CONSTRAINED_TERM |  |
| `owner-management-disclosure-tx` | Keep | SERVES_LANDLORD | inclusion in lease is full compliance |
| `parking-rules-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code § 92.0131 |  |
| `parking-vehicle-rules-tx` | Keep | SERVES_LANDLORD |  |
| `security-devices-tx` | Keep | SERVES_LANDLORD | bold statement extends cure time; written-request rule |
| `smoke-alarm-tx` | Keep | SERVES_LANDLORD | remedies need the bold notice |
| `tenant-repair-agreement-tx` | Keep | SERVES_LANDLORD | opt-in |

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.29), 2026-10-03

2026-10-03. Targeted checks only (rule 1). Nothing outside the 19 rules and 4 fixes below was reopened.

**Inputs.** The attached files are the only source of truth: `lease-clauses.csv` (2,842 rows, checked before starting), the TX log, `lease-clause-citations-TX.csv`, SOP and topics files. Where earlier chat content conflicts with them, the attached files control. Old output files were deleted before starting.

**Sources read this session**, all saved and identified by SHA-256 (rule 14):

- **Official Texas codes.** The whole Constitution (18 articles), Property Code (97 chapters), Business & Commerce Code (134), Civil Practice & Remedies Code (163) and Finance Code (100). Loaded from tcss.legis.texas.gov, the chapter HTML behind statutes.capitol.texas.gov.
  - The site states its text is current through the 89th Legislature's 2nd Called Session (2025).
  - Each load was proved complete against the site's chapter list.
  - Corpus hashes: CN 1225443…8e13, PR 02f67b79…9de1, BC 5475332c…96ce, CP d493b74b…fac5, FI 642b4ef5…6297.
- **Water Code ch. 13** from the same site (0e9c2d3f…3372).
- **Texas Rules of Civil Procedure**, txcourts.gov, "last amended October 1, 2026" (bd9d874a…e178a).
- **Texas Rules of Judicial Administration**, as of July 1, 2026 (0894acf2…a529b).
- **S.B. 2349 and H.B. 2037** (89th Leg., R.S.), enrolled text from capitol.texas.gov. Hashes: 5ae7622e…dd0ed and d6e84825…b00.

**How searches were run.** Searches run over the whole loaded codes with Python regex. Each battery was run with:

- a known positive from the same corpus;
- a nonsense control ("xqzzyplugh", 0 hits);
- a heading-only screen.

Section parser: 1,781 Property Code sections and 1,857 Business & Commerce sections. Constitution sections don't use the "Sec. N.N." header, so the Constitution was searched article by article.

**Weaker method.** The court rules come from long PDFs, extracted with pdftotext. The sections relied on are quoted in row notes and summarized below.

### One line per rule

| Rule | Verdict | What was read | Rows changed |
|---|---|---|---|
| **37** Tenancy type | **Fixed** | Battery in Prop. Code chs. 24, 54, 91–94: "lease term", "renewal", "12-month", "expiration of", "month-to-month", "remaining rent". §91.001; S.B. 2349 §2 and H.B. 2037 §5 (both cover leases "entered into or renewed on or after" Sept. 1, 2025). | `early-termination` (TX removed: the fee on "remaining Rent due under the Term" reaches the month-to-month tenancy `holdover-ca` creates, which §91.001 lets either side end on one month's notice with no fee); `early-termination-ks` (TX tagged); `edu-security-deposit-rules-tx` (§92.113 e-mail applies only to leases entered into or renewed from Sept. 1, 2025; for an earlier periodic tenancy that is unsettled, so the row says use mail); `flood-disclosure-tx` (note). No other date or term trigger in chs. 24, 54, 91, 92. |
| **39** Eviction duties and court rules | **Fixed** | TRCP Rule 510 read in full: rewritten for 2026, "the only rule that governs eviction cases". TRCP 76a; TRJA Rule 12. §24.0061. No conflicting statute and rule periods for the same duty. | `edu-eviction-process-tx` (new rule-only duties):<br>• 510.6(a)(9), (11) petition contents<br>• 510.6(d) name every lease tenant in residence<br>• 510.16(b) default-judgment address and e-mail service<br>• 510.18(g) writ costs, 60/90-day issue window, 90-day execution bar<br>• 510.24(b) and TRCP 3a(c) local-rule limits<br>`edu-no-eviction-record-sealing-tx`: court rules add no sealing either; 76a never allows sealing a judgment, and 510.1(b) makes its reach to eviction records doubtful. Also corrected: the four-day summary-disposition procedure applies only to forcible entry and detainer (510.10(a), §24.005106), not to an ordinary tenant eviction (510.10(b), Rule 503.2).<br>Boundary: individual justice-court local rules not read. |
| **41** Just cause | **Checked, no issue** | Battery over the whole Property Code: "good cause\|just cause" 9 hits, none in chs. 24, 54, 91, 92, 94 or 301. Cause-to-terminate pattern: 0. Heading screen: none relevant. | None. In a no-cause state, "end of the Term ends possession" is lawful in the six starting rows. |
| **41b** `for-cause-eviction` row | **Fixed** | §§91.001, 1.004(b), 92.331–.335, 24.005(b), (c-1). | `edu-no-for-cause-eviction-tx` (new): confirmed absence, plus situational limits: retaliation for 6 months (including tenant organizations), §92.332(b) grounds, foreclosure 30 days, fair housing, federal programs (not read). |
| **42** Required text inside shared clauses | **Checked, no issue** | Required-content battery ("underlined", "bold", "conspicuous", "must contain", "substantially equivalent", "included in a written lease") across PR, BC, FI, CP. | None. Every hit sits in a TX-only row (late fee, keys, lien, smoke alarm, parking, deposit-surrender, flood, statement). No shared fee or deposit clause needs a forced sentence. |
| **43** Cure promises | **Fixed** | §24.005(a) (S.B. 38): a tenant who was late before the notice month may get a notice to vacate, with no pay option. §91.003. | `default-by-tenant` (TX removed); `default-by-tenant-tx` (new): the no-cure carve-out is its own sentence reaching both limbs and names its cases (§24.005(a) notice to vacate; §92.332(b)(2) intentional damage or threats; §91.003), because a general 'where Texas law permits' carve-out would cancel the voluntary non-rent cure promise in a state that requires none. The rent limb's "written notice" adds nothing, since §24.005(a) already requires pre-suit written notice. `early-termination` landlord limb: see fix 22. |
| **44** Terms the statute makes landlord duties | **Fixed** | Battery for "agreed in the lease", "if the lease provides", "authorized in a written lease" in chs. 24, 54, 91, 92. §92.0561(d)(3)(B)–(C): the repair-and-deduct remedy opens where the landlord "expressly or impliedly agreed in the lease to furnish" water or heating or cooling equipment. | `edu-repair-duty-tx` (the agreement element restored); `appliances-included`, `utilities-paid-by-landlord` (TX notes); `electronic-notice-consent-tx` (an agreed e-mail method adds no duty). |
| **45** Electronic notices | **Fixed** | Tex. Bus. & Com. Code ch. 322 read: §§322.002, .003, .005 in full with its exceptions, .008, .015. No eviction, default or cure exclusion. §322.005(c): the right to refuse later electronic dealings is unwaivable. §322.008(a), (c), (d): a notice the tenant can't print or store is unenforceable, unwaivably. | `edu-electronic-notices-tx` (new); `electronic-notice-consent-tx` (note). `security-deposit-return-tx`, `abandoned-property-tx`: checked, no issue. |
| **46** Lease as the required notice | **Fixed** | §§24.005(f-3)(4), 92.0131, 92.013, 92.020(d), 92.201. | The shared `notices` sentence "nothing in this Lease designates an alternative method" could cancel the §24.005(f-3)(4) written e-mail agreement. `electronic-notice-consent-tx` now controls over the Notices section (MT model); `notices` TX note. Parking (`parking-rules-tx`, §92.013) is already covered in TX log §20.2.1. |
| **47** Penalties for prohibited terms | **Fixed** | §92.0563(b): knowing waiver of the repair duty costs one month's rent plus $2,000. §92.019(c). TDCA (Fin. Code ch. 392) §§392.001, .303(a)(2), .304(a)(8), (12), .403, .404. DTPA §17.46(b)(12). | `edu-non-waivable-terms-tx` (penalty paragraph); `edu-consumer-protection-act-tx` (new). Starting rows: `late-fee-safe-harbor-tx` (see fix 21); `early-termination` (TX removed). `notices`, `common-area-use`, `abandoned-property-tx`: checked, no void term. |
| **48** Separate-document rules | **Already covered in TX log §5** (layout table: §92.153(f), §92.2611(d-1)) **+ checked** | "separate (document\|writing\|instrument\|addendum\|notice)" and "separately from", across PR, BC, FI, CP. New hits: §92.021(c), where a renewal guaranty is a separate document (`edu-guarantor-renewal-tx` already says so); §92.008(h)(3); §92.0135(e). | None. Texas has no single-family/separate-writing chore split, so the tenant-chores settlement doesn't apply. |
| **49** Collection-cost bans | **Checked, no issue** | "collection cost\|cost(s) of collection\|expenses of collection": 0 hits in chs. 24, 54, 91, 92. Also read: attorney's-fee and court-cost sections in those chapters; §24.006; CPRC §38.001; TDCA §392.303(a)(2) (requires express authorization). | None. `default-by-tenant-tx` keeps "reasonable costs and expenses" (fix 23). `deposit-last-month-rent-tx` and `smoke-alarm-tx` state statutory remedies. |
| **50** "The lease controls" wording | **Already covered in TX log §12 item 5** (opt-in rights, built and not built) and §§4, 11.5 **+ checked** | Same battery as rule 44. | None. Choices made on purpose and recorded:<br>• §91.001(e)(1): no different month-to-month notice period is set, so the statute's one month applies via `early-termination-ks` and `holdover-ca`.<br>• §92.153(e)(3): well-being-check exemption, not offered; the education row covers it.<br>• §92.166(b): duplicate-key default kept. |
| **51** Plain-language and consumer protection | **Fixed** | DTPA §§17.42, 17.45, 17.46(b), 17.49, 17.50. First question: the list reaches leases, because "goods" includes leased real property; (b)(12) and (b)(24) apply; there is no blank-space or copy item. Second question: the general unconscionability standard (§17.50(a)(3)) reaches leases. Plain-language battery across PR, BC, FI, CP: none reaches leases. | `edu-consumer-protection-act-tx`, `edu-no-plain-language-rule-tx` (new). |
| **53** Figure vs shared clause, including triggers | **Fixed** (through rules 37 and 43) | `rent-payment`: weekend roll-forward is fine under §92.019. `surrender-end-of-term`: fine. `utility-submetering-disclosure-tx`: §13.503 (fix 21). `assistance-animal-accommodation`: fine. `holdover-ca`: no daily charge, and its trigger is end of Term only, so no stacked late fee. `electric-submeter-interruption-tx`: 12-day trigger and $10 fee match §92.008(h), (r). | `early-termination` and `default-by-tenant` (TX moved). |
| **54t** Tenant-caused damage | **Fixed** | Casualty rows first: §92.054(b) and (c) both carry a tenant-fault exception, and `casualty-loss-tx` tracks it. §92.052(b) means no repair remedies for tenant-caused conditions. Also §§92.104, 92.162, 92.006(f), 92.258, 91.006. `tenant-caused-damage-tn` read, not tagged. | `tenant-caused-damage-tx` (new optional clause; fault group limited to tenant, family and guests as in §92.054, without 'Occupant'): no abatement; landlord may end the lease if the home is totally unusable, since §92.054(b) denies both sides termination for a tenant-caused casualty; repair cost and lost rent less re-letting, with a periodic-tenancy end date). `edu-tenant-caused-damage-tx` (new). |
| **35c** Constitution screen | **Checked, no issue** | Whole Constitution, article by article. Cannabis/marijuana/hemp: 0 hits. Arms: Art. I §23. Speech and petition: Art. I §§8, 27. Searches and seizures: Art. I §9. Art. I §36 (2023): right to agricultural and horticultural practices on land people "own or lease". Lease/tenant/rent words: no residential-lease provision. | None. Each protects against government action, not a private lease term (case law not read). §92.026 firearms is already in `edu-firearms-tx`. |
| **27** Seven topics | **Fixed** | Batteries with positives, across PR, BC, FI, CP (in the notes of each new row). | Confirmed absent (row): `edu-no-algorithmic-rent-rule-tx`, `edu-fees-as-rent-tx`, `edu-no-landlord-self-cure-statute-tx`, `edu-no-lease-completeness-rule-tx`, `edu-no-quiet-possession-statute-tx`, `edu-no-tenant-camera-rule-tx`. Present (row): `edu-statutory-forms-tx` (§§92.0135, 92.016(f)/.0161(g)/.017(g), 24B.002). |
| **79** Re-read secondary-basis rows | **Fixed** | **Count.** Before: 2 of 137 active TX rows recorded no basis. Split: research pass 0; rows a library-wide pass created 2 (`edu-returned-payment-fee-tx`, `edu-emergency-phone-tx`, both from the 2026-09-29 scrub); shared rows with no TX segment 0 (`rental-application-accuracy` has its TX segment inside a run-on note). After: 0 of 150.<br>**Re-read section-open:**<br>• `edu-local-preemption-tx`: §1.004 and CPRC ch. 102A in full; the body now adds the 3-month notice and trade-association standing.<br>• `flood-disclosure-tx`: S.B. 2349 enrolled.<br>• `habitability-timeline-tx`: H.B. 2037 enrolled.<br>• `edu-water-submetering-tx`: Water Code §13.503.<br>• `edu-eviction-notice-tx` and `notice-to-vacate-period-tx`: TRCP 510.6. The look-back statement is now (a)(11), not (a)(13).<br>**Still secondary** (listed, not re-read): 16 TAC §24.275 registration (`edu-water-submetering-tx`); the designated-country list in `edu-foreign-acquisition-leases-tx` (not statute). | Rows named, plus the two provenance repairs. |

### Independent check

A separate agent that had not seen the work checked every changed body and new note against the saved official text. It found 3 serious and 11 minor problems, and all were corrected before delivery:

- **Serious:**
  - `default-by-tenant-tx`'s general carve-out swallowed its own cure promise.
  - `tenant-caused-damage-tx` named 'an Occupant', which §92.054's fault exception does not.
  - A pre-existing `edu-eviction-process-tx` sentence applied the four-day summary-disposition route to every eviction.
- **Minor:** wording in:
  - `edu-consumer-protection-act-tx`: §17.42(a)(2) bargaining-position condition; TDCA 'neither…nor'.
  - `edu-eviction-process-tx`: writ timing; local-rule scope.
  - `edu-no-eviction-record-sealing-tx`: 76a test.
  - `edu-tenant-caused-damage-tx`: §92.006(f) and §92.162 wording.
  - `utility-submetering-disclosure-tx`: §13.503(c-1) words; §13.501(1) definition.
  - `flood-disclosure-tx`: (d) knowledge condition; (a-1)(2) exemption.
  - `edu-statutory-forms-tx`: flood notice wording.
  - `edu-electronic-notices-tx`: §24.005(f-4) actual receipt; §322.005(c) scope.
  - `late-fee-safe-harbor-tx`: note.

### The four targeted fixes

**Fix 20: `edu-emergency-phone-tx`.** Confirmed against §92.020 (official text, saved).

- (a) and (b): a landlord with an on-site office needs a 24-hour number, posted outside the office. The 2026-09-30 restoration is right.
- (d): every other landlord must still give a number, but not a 24-hour one. Now stated in its own sentence.
- (c): a conforming local ordinance adopted before 1/1/2008 is unaffected. Added.

**Fix 21: scrub-trimmed clauses.**

- **`late-fee-safe-harbor-tx`: fixed.**
  - A landlord grace figure of 2 passes a number check but allows a fee on day 3. §92.019(a)(3) requires "two full days". Restored as a second condition: the later of the two controls.
  - Lawful-looking initial and daily fees can pass the 12%/10% safe harbor within days, because §92.019(b) makes them one fee. Restored the combined cap by structure size.
  - Required-content search: §92.019(a)(1) is satisfied by the clause itself.
- **`nsf-fee-limit-tx`: fixed.** §3.506(c) bars the fee, and requires a refund, where a reimbursement fee is collected through the district attorney. A number check can't see that.
- **`utility-submetering-disclosure-tx`: fixed.**
  - §13.503(c-1): no service charge for an apartment-house resident in a tax-credit unit or receiving a Section 8 voucher.
  - 16 TAC §24.281(e): no charge on allocated billing.
  - Both are now lease text, not a bracket prompt. The kept §24.279 disclosures are intact.
- **`security-deposit-return-tx`: checked, no issue.**
  - The clause has no figure.
  - The only required lease text in Subch. C is §92.103(b), which is a separate row.

**Fix 22: `early-termination` landlord limb (rule 62 vetting, shared text not edited).**

- **Is WY's proposed "…or such shorter notice and cure period as applicable law permits" lawful in Texas?** Yes. Nothing in chs. 24, 54, 91 or 92 bars it. In Texas it is circular, though: §24.005(a) lets the lease itself set "a shorter or longer notice period", so "as applicable law permits" points back to the lease.
- **Does the current promise (30 days' notice, 10-day cure for any material breach) give up Texas's shorter route?** It can.
  - Texas requires no cure for a non-rent breach.
  - §24.005(a) allows three days' notice to vacate, or whatever period the lease sets. For a tenant late before the notice month, it allows a notice to vacate with no pay option.
  - A specific "terminate for breach on 30 days plus 10-day cure" promise can be read to govern over the general default clause.
  - The savings sentence protects rights "under applicable law", which arguably doesn't reach a contractual default remedy. This risk rests on contract-construction case law, unread.
- **Result.** TX left the shared row for its own reason (rule 37) and is now on `early-termination-ks`, whose landlord limb defers to the Tenant Default and notice provisions. So WY's edit neither helps nor hurts Texas. If it ships, it is consistent with Texas law.

**Fix 23: `default-by-tenant` and CO's proposed deletion of "and reasonable costs and expenses" (rule 62 vetting, shared text not edited).**

- **Does Texas limit recovery of collection or eviction costs, or one-way cost awards?** No ban found.
  - §24.006(b)–(c): a lease fee clause entitles a prevailing landlord to fees and makes them reciprocal for a prevailing tenant.
  - §24.006(d): all court costs go to the prevailing party.
  - CPRC §38.001(b)(8): fees on a written-contract claim, with no lease term needed.
- **Does deleting the phrase give something up?** Yes.
  - TDCA §392.303(a)(2) bars collecting an incidental charge or expense unless it is "expressly authorized by the agreement creating the obligation or legally chargeable".
  - §392.304(a)(12) bars representing that fees will be added where no contract or statute authorizes them.
  - Deleting the phrase removes that express authorization. Whether the TDCA reaches a landlord collecting its own rent is case law, unread.
- **Result.** TX is now on `default-by-tenant-tx` (rule 43), which keeps the phrase. CO's deletion can proceed without affecting Texas.

### Propagation (rule 62)

No shared text was edited. Shared rows changed only in their TX tag, TX segment and `last_checked`:

- `early-termination`: TX removed.
- `early-termination-ks`: TX added.
- `default-by-tenant`: TX removed.
- `appliances-included`, `utilities-paid-by-landlord`, `notices`: TX notes only.
- `rental-application-accuracy`: the TX pointer now names `default-by-tenant-tx` (rule 63).

### Rows changed: 39

- **New (14):**
  - `default-by-tenant-tx`, `tenant-caused-damage-tx`
  - `edu-no-for-cause-eviction-tx`, `edu-electronic-notices-tx`, `edu-consumer-protection-act-tx`, `edu-no-plain-language-rule-tx`, `edu-tenant-caused-damage-tx`
  - the seven rule-27 rows
- **Changed TX rows (18):**
  - `late-fee-safe-harbor-tx`, `nsf-fee-limit-tx`, `utility-submetering-disclosure-tx`, `security-deposit-return-tx` (note only)
  - `edu-emergency-phone-tx`, `edu-returned-payment-fee-tx`, `edu-repair-duty-tx`, `edu-security-deposit-rules-tx`
  - `edu-no-eviction-record-sealing-tx`, `edu-eviction-process-tx`, `edu-eviction-notice-tx`, `notice-to-vacate-period-tx`
  - `electronic-notice-consent-tx`, `edu-non-waivable-terms-tx`, `edu-local-preemption-tx`
  - `flood-disclosure-tx`, `habitability-timeline-tx`, `edu-water-submetering-tx`
- **Shared rows (7):** listed above.

### Integrity (merged view: attached CSV plus delta)

- 2,856 rows; 2,734 active; TX 150 active (78 lease clauses).
- Ids unique. Every `supersedes` target exists.
- No base and variant both active in TX.
- Every TX lease clause carries a `lease_clause_basis`; no education row does.
- Every backticked id in the changed TX text names an active row.
- Delta: 39 rows, 17 columns, master header, CRLF line endings.

### Proposed SOP changes

1. **Rule 44.** Add: "including 'expressly or impliedly agreed in the lease to furnish', which turns a shared appliance or utility list into the trigger for a tenant repair remedy (TX §92.0561(d)(3)(B)–(C))."
2. **Rules 45–46.** Add: "Where a state's statute needs a written agreement before e-mail delivery, the opt-in clause must say it controls over the Notices section. The shared sentence 'nothing in this Lease designates an alternative method of delivery for any notice governed by law' can otherwise be read to cancel it (TX, MT)."
3. **Rule 79.** Add: "Cite court rules from the current compilation, not from an implementing order. A later rewrite can renumber (TX Rule 510.6(a)(13) became (a)(11))."
4. **Rule 78.** Add two examples of conditions a number check can't catch:
   - a "full days" floor behind a day-count placeholder;
   - daily late fees that add up past a cap.

## Retro sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 928f1f6` (the attached CSV is byte-identical to it): 25 rows updated and 14 new. One row was applied by hand: `rental-application-accuracy`'s TX sentence sits inside the row's opening (creation) segment, not a `TX:` segment, so the tool refused it; the delta's one change there (the pointer now names `default-by-tenant-tx`) was applied to that sentence alone. TX active 137 → 150 (78 lease clauses), no same-topic pairs; every other state's set unchanged. TX moved off `early-termination` and `default-by-tenant` to `early-termination-ks` and `default-by-tenant-tx`.
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 4 of 4, against tcss.legis.texas.gov (read by Claude Code at sync):** Tex. Prop. Code § 92.019(a), (a-1), (b) ("two full days"; initial and daily fees are one fee for the 12% or 10% cap) behind the restored `late-fee-safe-harbor-tx`; § 92.054(b) (the fault exception names the tenant, family, guests and invitees, not occupants) behind `tenant-caused-damage-tx`; § 92.020(a)-(d) behind `edu-emergency-phone-tx`; § 24.005(a) (lease may set a shorter or longer notice; a tenant late before the notice month may get a notice to vacate) behind `default-by-tenant-tx`.
- **Citations file:** `early-termination` and `default-by-tenant` removed, 15 rows added (7 confirmed-absence rows), changed rows dated. Bare section numbers were mapped to their code by chapter (ch. 392 is the Finance Code, ch. 322 and ch. 17 the Business & Commerce Code). The TX watch extractor reads no Finance Code key, so the two TDCA education rows aren't watched by bill search.
- **WY's `early-termination` edit merged.** With TX off the row, every tagged state (CO, WY, MN, ND, SD, OH) had vetted and supported "or on such shorter notice and cure period as applicable law permits"; applied as a uniform edit and noted in each of those logs (rule 62). TX found it lawful.
- **Rule 62 answers recorded:** TX's answer on CO's `default-by-tenant` deletion (lawful, but it gives up the TDCA's express authorization) is moot for TX, which now uses its own row.
- **SOP 1.30:** all four proposals adopted (rules 44, 46, 78, 79). TX's conformance column is complete except the examples.

## Circle-back checks (SOP 1.53), 2026-10-04

2026-10-04. Targeted check only (rule 1). Nothing outside the one fix below was reopened.

**Inputs.** The attached files are the only source of truth:
- `lease-clauses.csv`: 2,876 rows, checked before starting;
- the TX log, which now includes the SOP 1.29 retro and its sync;
- `lease-clause-citations-TX.csv`;
- SOP 1.53;
- the topics file.

Where earlier chat content conflicts with them, the attached files control. For example, the 2026-10-03 delta in this chat is superseded by the merged CSV, which also carries Claude Code's sync changes.

**Old outputs deleted:** `lease-clauses-TX-retro-delta.csv` and `lease-clause-decision-log-TX-retro.md` (both from the SOP 1.29 retro).

**Statute text.** Read section-open from the official Property Code corpus saved on 2026-10-03:
- source: tcss.legis.texas.gov, behind statutes.capitol.texas.gov;
- currency: through the 89th Legislature, 2nd Called Session, 2025;
- integrity: proved complete against the site's chapter list; SHA-256 02f67b79…9de1.

### One line per rule

The prompt lists no [Retro] rules for this retro (0 rules).

### Targeted fix

| Fix | Verdict | What was read | Rows changed |
|---|---|---|---|
| **1. Rule 62 vetting, `surrender-end-of-term`** (CA's proposal, 2026-10-03): add "unless applicable law entitles Tenant to remain" to "Tenant will surrender possession of the property and return all keys to Landlord immediately". | **Checked: the qualified wording is lawful and accurate in Texas. The current wording is mostly backed by Texas law, but it overstates the duty in two Texas cases.** TX supports the edit as uniform. Shared text not edited. Related earlier screen: TX log, Retro checks (SOP 1.29), rule 41 line ("end of the Term ends possession" is lawful in a no-cause state). | Tex. Prop. Code §§24.002(a), 24.005(a)–(b), (c-1), 91.001, 92.0081(b), 92.331, 92.332(b), 92.335; existing row `edu-no-for-cause-eviction-tx`. | None. No delta file. |

**Answer in full.**

1. **Is the qualified wording lawful and accurate in Texas? Yes.**
   - It narrows the tenant's duty only where the law itself does. Nothing in chs. 24, 54, 91 or 92 bars it.
   - Texas has no just-cause rule (`edu-no-for-cause-eviction-tx`). The qualifier still has real work to do there, in the two cases below.

2. **Does the current wording state a duty Texas law doesn't back? Mostly no; in two cases, yes.**
   - **Where the law backs it.** At the end of a fixed term, and after a valid termination, Texas law ends the right of possession. A tenant who refuses to surrender on written demand "holding over after the termination of the tenant's right of possession" commits forcible detainer (§24.002(a)(1)).
   - **Why process doesn't change that.** The landlord's notice to vacate (§24.005(a): three days, or the period the lease sets) and the judicial-process requirement (§92.0081(b)) govern how the landlord recovers possession. They are not a right to stay.
   - **Case 1: retaliation.**
     - §92.331(b) bars a landlord from ending the lease, or filing an eviction, within six months after a tenant's protected act.
     - §92.335 makes retaliation a defense to the eviction.
     - §92.332(b) lists the grounds that are always valid, including a holdover after an end-of-term notice given before the tenant acted.
     - A tenant given a retaliatory "earlier termination" may lawfully stay. The current clause says the tenant must surrender "immediately".
   - **Case 2: foreclosure.**
     - After a foreclosure sale, a purchaser who will not continue the lease must give a current tenant at least 30 days' notice to vacate (§24.005(b)).
     - Federal notice periods are not read here. §24.005(c-1) shows they delay service of the writ.
   - **Month-to-month tenancies.** A month-to-month tenancy ends on the later of the date in the notice or one month after it (§91.001(b)). A notice that is too short doesn't end the tenancy, so the clause isn't triggered. The qualifier makes that explicit too.

3. **TX position.** No TX change is needed today. The current self-limit on abandoned property ("to the extent permitted by applicable law") is untouched by the proposal. If the edit is applied, TX's existing note still holds, and TX needs no override.

### Proposed SOP changes

None.

### Vouches given (propagation, rule 62)
- **2026-10-04:** `surrender-end-of-term` (CA's proposal), supported for TX; reasoning above.

## Circle-back sync (Claude Code, 2026-10-04)

- **No delta:** the pass changed no rows, as it reported. TX active 150, unchanged.
- **Rule 62:** TX supports CA's `surrender-end-of-term` qualifier (retaliation, Tex. Prop. Code §§ 92.331(b), 92.335; post-foreclosure notice, § 24.005(b)); recorded in the backlog tally. TX's log keeps its propagation notes in §16, so the "Vouches given" line sits just above.
- **Guards:** all pass. **Statute spot-check, 1 of 1, on tcss.legis.texas.gov:** § 92.331(b) (within six months after the tenant's protected act a landlord may not file an eviction proceeding or end the lease, among other actions).
- **SOP:** no proposals.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no TX override. TX's note segment on the row records it.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for TX. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any TX row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach TX's law; to be confirmed at TX's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

# Topic gaps pass (end-of-run consistency pass, 2026-10-30/31): Desktop's log

# Topic gaps: Texas (end-of-run consistency pass) - log

SOP 1.91. Cumulative to date: 238 of 238 missing topics answered, plus the seven Texas items. Delta: 227 new rows, 26 tagged rows. Rows dated 2026-10-31.

## §1 Sources, channel and currency

- **Corpus.** The Texas corpus Claude Code downloaded on 2026-10-30 (`corpus-TX-20261030.tar.xz`, SHA-256 checked against the attached `.sha256` before unpacking). I re-checked its manifest with my own script rather than the shipped `verify_tx.py`: 7,010 files match their recorded hashes, 7,512 are listed as not shipped, and none has a problem. The statutes come from the whole-code downloads on statutes.capitol.texas.gov. Every code is held as text except the Special District Local Laws Code, which is held only in the catchline index. My section parser holds 91,642 sections, which is every non-SD catchline except two Vernon's Civil Statutes entries.
- **Currency.** The site says: "The statutes available on this website are current through the 89th 2nd Called Legislative Session, 2025. The constitutional provisions found on this website are current through the amendments approved by voters in November 2025." Every row takes its currency from the history line under each section, and the rows cite the latest "Amended by" or "Added by" entry.
- **Court rules.** The Texas Rules of Civil Procedure are the current compilation on txcourts.gov (last amended October 1, 2026). It includes Rule 510 as rewritten for 2026 (Misc. Docket No. 25-9096, preliminary approval, November 21, 2025; amended order Misc. Docket No. 25-9105, December 31, 2025, "amendments are effective January 1, 2026").
- **Rule 510 final order (Texas item 4).** As of 2026-10-31, no final Supreme Court order on the Part V eviction amendments has been issued.
  - The corpus page of 2026 administrative orders (most recent entry 10/30/2026) lists none.
  - On 2026-10-31 I also checked the live txcourts.gov rules-advisories page (most recent date shown 10/02/2026). Its eviction entries are 25-9105 (preliminary, 12/31/2025), 25-9096 (preliminary, 11/21/2025) and 25-9065 (task force, 09/02/2025). The last final order there is 22-9031 (04/25/2022).
  - Rows citing Rule 510 cite the rules as effective January 1, 2026, under the preliminary-approval orders.
- **Session laws.** Enrolled texts of the 88th and 89th Legislatures, including called sessions, as held. Rows cite a session law only where an act's own sections matter (for example, H.B. 2037's application clause).
- **Vetoes (Texas item 7).** `currency.json` lists 103 vetoed bills, which are not law. I scanned every answer for any H.B. or S.B. number in the vetoed list: none cites a vetoed bill. The only number matches were bills of other sessions, such as S.B. 1367 (2015) and S.B. 18 (2011). Among the vetoed bills, 88th S.B. 2493 (repairs and deposit refunds, vetoed 06/15/2023) and 88th S.B. 1668 (property owners' associations) are not relied on anywhere.
- **Multiple versions (Texas item 7).**
  - Tex. Penal Code § 32.56 has four versions, each added by a different 2025 act and all effective September 1, 2025. They are four different offenses that share one number:
    - gift cards (S.B. 1809);
    - mail receptacle keys (S.B. 1281);
    - false documents conveying a real-property interest (S.B. 1333);
    - financial abuse using AI media or phishing (S.B. 2373).
    Only the S.B. 1333 version concerns tenancies, and any row citing § 32.56 must cite it by that act.
  - Tex. Bus. & Com. Code § 17.56 (DTPA venue) has two versions, from 1995 ch. 138 and 1995 ch. 414. No new row relies on it.
- **Constitution art. 3, § 68 (Texas item 7).** Its note reads "(Added Nov. 4, 2025, subject to resolution of an election contest under Chapter 233, Election Code, pending as of February 2, 2026.)". It concerns the Dementia Prevention and Research Institute, and no row relies on it.
- **Not held, and so not relied on:** case law, city ordinances, federal law (except where an existing row states it), and most of the Texas Administrative Code. Only the PUC chapter 24 and 25.142 water and electric rules and the TREC rules index are held. The rows name these boundaries in their bodies.
- **Channel.** All primary text came from the corpus on disk in this cloud session. The one live fetch was the txcourts.gov rules-advisories page above. Agent helpers worked from the same corpus with the same tools, one slice each, at most two at a time.
- **Attorney general's Renter's Rights page.** The page held in the corpus still gives $10,000 as the justice-court limit for repair suits. Prop. Code § 92.0563(e) now says $20,000. No row relies on the page; noted for monitoring.


## §2 Topics answered

One line each: topic - row id - verdict - main citation.

- `accessory-dwelling-unit` - edu-no-adu-statute-tx - Absent - Tex. Loc. Gov't Code § 211.003
- `actual-notice-method` - edu-actual-notice-method-tx - Present - Tex. Prop. Code § 24.005; Tex. Prop. Code § 92.056
- `adverse-proceeding-notice` - edu-adverse-proceeding-notice-tx - Present - Tex. Prop. Code § 24.005; Tex. Loc. Gov't Code § 214.001
- `alarm-tampering-fee` - edu-alarm-tampering-remedies-tx - Present - Tex. Prop. Code § 92.2611; Tex. Prop. Code § 92.258
- `alt-housing` - edu-no-alt-housing-duty-tx - Absent - Tex. Prop. Code § 92.054; Tex. Prop. Code § 92.062
- `animal-care-access` - edu-no-animal-care-entry-right-tx, animal-care-access-vi (tag) - Absent + tagged - Tex. Health & Safety Code § 821.022; Tex. Health & Safety Code § 821.021
- `appliances-excluded` - appliances-excluded-tx - Present - Tex. Prop. Code § 92.052; Tex. Prop. Code § 92.0561
- `asbestos-hazards` - edu-asbestos-hazards-tx - Present - Tex. Occ. Code § 1954.002; Tex. Occ. Code § 1954.101
- `association-obligations-disclosure` - edu-association-obligations-disclosure-tx - Present - Tex. Prop. Code § 209.016; Tex. Prop. Code § 82.067
- `attorney-fees` - edu-attorney-fees-tx - Present - Tex. Prop. Code § 24.006; Tex. Prop. Code § 92.005
- `automatic-renewal` - edu-no-automatic-renewal-rule-tx - Absent - Tex. Prop. Code § 91.001; Tex. Prop. Code § 94.055
- `balcony-inspection` - edu-no-balcony-inspection-rule-tx - Absent - Tex. Health & Safety Code § 791.001; Tex. Health & Safety Code § 791.002
- `bed-bug-cooperation` - edu-pest-treatment-notice-tx, pest-cooperation-pr (tag) - Present + tagged - Tex. Occ. Code § 1951.453; Tex. Prop. Code § 92.052
- `binding-arbitration` - edu-lease-arbitration-tx - Present - Tex. Civ. Prac. & Rem. Code § 171.001; Tex. Civ. Prac. & Rem. Code § 171.002
- `cannabis` - edu-cannabis-tx, cannabis-restrictions-ak (tag) - Present + tagged - Tex. Health & Safety Code § 481.121; Tex. Health & Safety Code § 481.120
- `carpet-cleaning` - edu-carpet-cleaning-tx - Absent - Tex. Prop. Code § 92.001; Tex. Prop. Code § 92.104
- `casualty-and-mitigation-waivable` - edu-casualty-mitigation-waiver-tx - Present - Tex. Prop. Code § 92.054; Tex. Prop. Code § 92.006
- `certificate-of-occupancy-disclosure` - edu-no-certificate-of-occupancy-disclosure-tx - Absent - Tex. Prop. Code § 92.023; Tex. Loc. Gov't Code § 214.909
- `children-occupancy` - edu-children-occupancy-tx - Present - Tex. Prop. Code § 301.004; Tex. Prop. Code § 301.021
- `cold-weather-vacate-notice` - edu-no-cold-weather-vacate-notice-tx - Absent - Tex. Prop. Code § 92.008; Tex. Prop. Code § 92.052
- `collection-fee` - edu-collection-fee-tx - Present - Tex. Fin. Code § 392.001; Tex. Fin. Code § 392.303
- `common-area-lighting` - edu-common-area-lighting-tx - Present - Tex. Prop. Code § 92.052; Tex. Util. Code § 184.034
- `communal-land-lease-approval` - edu-no-communal-land-lease-approval-tx - Absent - Tex. Bus. & Com. Code § 26.01
- `condemned-premises-rent-bar` - edu-no-condemned-rent-bar-tx - Absent - Tex. Prop. Code § 92.023; Tex. Prop. Code § 92.054
- `condition-inspection` - edu-no-condition-inspection-rule-tx - Absent - Tex. Prop. Code § 92.258; Tex. Prop. Code § 92.263
- `confession-of-judgment` - edu-confession-of-judgment-tx - Present - Tex. Civ. Prac. & Rem. Code § 30.001; Tex. R. Civ. P. 510.8
- `confirmed-absences-habitability` - edu-confirmed-absences-habitability-tx - Absent - Tex. Prop. Code § 92.061; Tex. Prop. Code § 92.058
- `confirmed-absences-misc` - edu-confirmed-absences-misc-tx - Absent - Tex. Fin. Code § 345.108
- `confirmed-absences-outside-title` - edu-confirmed-absences-outside-title-tx - Absent - Tex. Prop. Code § 92.011; Tex. Prop. Code § 24.0053
- `construction-liens` - edu-construction-liens-tx, no-liens-ar (tag) - Present + tagged - Tex. Prop. Code § 53.001; Tex. Prop. Code § 53.021
- `conversion-notice` - edu-conversion-notice-tx - Present - Tex. Prop. Code § 82.160; Tex. Prop. Code § 82.154
- `criminal-activity` - edu-criminal-activity-tx, criminal-activity-ky (tag) - Present + tagged - Tex. Prop. Code § 92.332; Tex. Prop. Code § 92.015
- `cure-and-eviction-grounds` - edu-cure-and-eviction-grounds-tx - Present - Tex. Prop. Code § 24.002; Tex. Prop. Code § 24.005
- `defective-drywall-disclosure` - edu-no-drywall-disclosure-tx - Absent - Tex. Bus. & Com. Code § 17.45; Tex. Bus. & Com. Code § 17.46
- `deposit-cost-schedule` - edu-deposit-cost-schedule-tx - Present - Tex. Prop. Code § 92.101; Tex. Prop. Code § 92.102
- `deposit-installments` - edu-no-deposit-installments-tx - Absent - Tex. Prop. Code § 92.102; Tex. Prop. Code § 92.111
- `designated-repairer` - edu-designated-repairer-tx - Present - Tex. Prop. Code § 92.0561; Tex. Prop. Code § 92.006
- `disability-accommodation` - edu-disability-accommodation-tx - Present - Tex. Prop. Code § 301.025; Tex. Prop. Code § 301.003
- `disaster-displaced-guests` - edu-no-disaster-guest-rule-tx - Absent - Tex. Prop. Code § 92.010; Tex. Prop. Code § 92.062
- `disaster-duties` - edu-disaster-duties-tx - Present - Tex. Prop. Code § 92.054; Tex. Prop. Code § 92.0562
- `double-letting` - edu-no-double-letting-rule-tx - Absent - Tex. Prop. Code § 92.0081; Tex. Bus. & Com. Code § 17.46
- `drug-free-housing-addendum` - edu-no-drug-free-addendum-tx - Absent - Tex. Prop. Code § 92.332; Tex. Prop. Code § 92.015
- `dv-confidentiality` - edu-dv-confidentiality-tx - Present - Tex. Prop. Code § 92.0161; Tex. Prop. Code § 92.016
- `dv-deposit-timing` - edu-no-dv-deposit-timing-rule-tx - Absent - Tex. Prop. Code § 92.016; Tex. Prop. Code § 92.0161
- `dv-eviction-protection` - edu-no-dv-eviction-protection-tx - Absent - Tex. Prop. Code § 92.015; Tex. Prop. Code § 92.016
- `dv-lease-termination` - edu-dv-lease-termination-tx - Present - Tex. Prop. Code § 92.016; Tex. Prop. Code § 92.0161
- `dv-lockchange` - edu-no-dv-lockchange-right-tx - Absent - Tex. Prop. Code § 92.156; Tex. Prop. Code § 92.0081
- `dv-protection-order-chapter-moved` - edu-dv-protection-order-chapter-moved-tx - Present - Tex. Prop. Code § 92.016; Tex. Prop. Code § 92.0161
- `dv-qualifying-documents` - edu-dv-qualifying-documents-tx - Present - Tex. Prop. Code § 92.016; Tex. Prop. Code § 92.0161
- `eminent-domain` - edu-eminent-domain-tx, eminent-domain-vi (tag) - Present + tagged - Tex. Prop. Code § 21.042; Tex. Prop. Code § 21.043
- `employee-screening` - edu-employee-screening-tx - Present - Tex. Health & Safety Code § 765.001; Tex. Health & Safety Code § 765.002
- `energy-data-release` - edu-energy-data-release-tx, energy-data-release-wy (tag) - Present + tagged - Tex. Util. Code § 39.107; Tex. Util. Code § 182.051
- `entity-landlord-court-representation` - edu-entity-landlord-court-representation-tx - Present - Tex. Prop. Code § 24.011; Tex. Gov't Code § 27.031
- `environmental-event-termination` - edu-no-environmental-event-termination-tx - Absent - Tex. Prop. Code § 92.054; Tex. Prop. Code § 92.055
- `ev-charging-end-of-tenancy` - edu-no-ev-charging-end-of-tenancy-tx - Absent - see row
- `ev-charging-requirements` - edu-ev-charging-requirements-tx, ev-charger-installation-hi (tag) - Present + tagged - Tex. Occ. Code § 2311.0101; Tex. Occ. Code § 2311.0201
- `ev-charging-shared-area` - ev-charging-shared-area-co (tag) - Tagged - Tex. Prop. Code § 92.0131; Tex. Prop. Code § 92.006
- `eviction-hardship-stay` - edu-no-eviction-hardship-stay-tx - Absent - Tex. Prop. Code § 1.004; Tex. Prop. Code § 24.0043
- `eviction-penalty-clause-ban` - edu-no-eviction-penalty-rule-tx - Absent - Tex. Prop. Code § 24.006; Tex. R. Civ. P. 510.18
- `eviction-service-party` - edu-no-eviction-service-party-tx - Absent - Tex. Civ. Prac. & Rem. Code § 30.001; Tex. Prop. Code § 24.005
- `exculpatory-clauses` - edu-exculpatory-clauses-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.008
- `expedited-criminal-eviction` - edu-no-expedited-criminal-eviction-tx - Absent - Tex. Prop. Code § 24.005; Tex. Prop. Code § 24.0051
- `expedited-deposit-disposition` - edu-no-expedited-deposit-disposition-tx - Absent - Tex. Prop. Code § 92.103; Tex. Prop. Code § 92.104
- `extended-absence-notice` - extended-absence-notice-ks (tag) - Tagged - Tex. Prop. Code § 92.0081; Tex. Prop. Code § 92.006
- `family-child-care` - edu-no-family-child-care-rule-tx - Absent - Tex. Hum. Res. Code § 42.002; Tex. Loc. Gov't Code § 250.014
- `farmland-hunting-rights` - edu-farmland-hunting-rights-tx, farmland-sporting-rights-co (tag) - Present + tagged - PW § 61.022; PW § 61.001
- `fee-transparency` - edu-no-fee-transparency-law-tx - Absent - Tex. Loc. Gov't Code § 394.9026; Tex. Bus. & Com. Code § 17.46
- `fee-unprovided-service` - edu-no-fee-unprovided-service-rule-tx - Absent - Tex. Fin. Code § 392.303; Tex. Bus. & Com. Code § 17.46
- `fire-code-standard` - edu-fire-code-standard-tx - Present - Tex. Loc. Gov't Code § 214.211; Tex. Loc. Gov't Code § 214.212
- `fire-sprinkler-duty` - edu-fire-sprinkler-duty-tx - Present - Tex. Health & Safety Code § 766.051; Tex. Health & Safety Code § 766.052
- `foreclosure` - edu-foreclosure-tx - Present - Tex. Prop. Code § 24.002; Tex. Prop. Code § 24.005
- `foreclosure-disclosure` - edu-no-foreclosure-disclosure-tx - Absent - Tex. Prop. Code § 24.005; Tex. Bus. & Com. Code § 17.45
- `forfeiture-redemption` - edu-no-forfeiture-relief-tx - Absent - Tex. Prop. Code § 24.004; Tex. Prop. Code § 24.005
- `frozen-standard-incorporation` - edu-frozen-standard-incorporation-tx - Present - Tex. Loc. Gov't Code § 214.211; Tex. Loc. Gov't Code § 214.212
- `furnishings-included` - furnishings-included-la (tag) - Tagged - Tex. Prop. Code § 92.001; Tex. Prop. Code § 92.0081
- `good-cause-notice` - edu-good-cause-notice-tx, good-cause-nonrenewal-tx - Present - Tex. Loc. Gov't Code § 303.042; Tex. Loc. Gov't Code § 303.0421
- `government-fee-reimbursement` - government-fee-reimbursement-ky (tag) - Tagged - Tex. Prop. Code § 92.018; Tex. Prop. Code § 92.162
- `guest-rights` - edu-no-guest-rights-statute-tx - Absent - Tex. Prop. Code § 92.026; Tex. Prop. Code § 92.010
- `habitability-materiality` - edu-habitability-materiality-tx - Present - Tex. Prop. Code § 92.052; Tex. Prop. Code § 92.056
- `habitability-modifiable` - edu-habitability-modifiable-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.052
- `habitability-presumption` - edu-habitability-presumption-tx - Present - Tex. Prop. Code § 92.056; Tex. Prop. Code § 92.0562
- `habitability-statement` - edu-no-habitability-statement-tx - Absent - Tex. Prop. Code § 92.056; Tex. Prop. Code § 92.061
- `habitability-waiver` - edu-habitability-waiver-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.061
- `hazardous-contamination-disclosure` - edu-contamination-disclosure-tx - Present - Tex. Health & Safety Code § 361.531; Tex. Health & Safety Code § 361.532
- `health-district-rental-rules` - edu-no-health-district-rental-rules-tx - Absent - Tex. Prop. Code § 92.0561; Tex. Prop. Code § 92.055
- `heating` - edu-heating-tx - Present - Tex. Prop. Code § 92.0561; Tex. Prop. Code § 92.052
- `hoa` - edu-hoa-tx - Present - Tex. Prop. Code § 209.016; Tex. Prop. Code § 209.003
- `holding-deposit` - edu-holding-deposit-tx - Present - Tex. Prop. Code § 92.351; Tex. Prop. Code § 92.3515
- `holdover-rate` - edu-no-holdover-rate-tx - Absent - Tex. Prop. Code § 24.001; Tex. Prop. Code § 24.002
- `home-business` - edu-home-business-tx - Present - Tex. Loc. Gov't Code § 229.902; Tex. Loc. Gov't Code § 211.031
- `homestead-waiver` - edu-homestead-waiver-tx - Present - Tex. Const. art. XVI, § 49; Tex. Const. art. XVI, § 50
- `infirmity-termination` - edu-no-infirmity-termination-tx - Absent - Tex. Prop. Code § 92.016; Tex. Prop. Code § 92.0161
- `informal-dispute-resolution` - informal-dispute-resolution-or (tag) - Tagged - Tex. Prop. Code § 24.00506; Tex. Civ. Prac. & Rem. Code § 152.001
- `inspection-condemnation-disclosure` - edu-no-code-order-disclosure-tx - Absent - Tex. Loc. Gov't Code § 214.001; Tex. Gov't Code § 417.008
- `inspection-notice-penalty` - edu-no-inspection-notice-penalty-tx - Absent - Tex. Prop. Code § 92.103; Tex. Prop. Code § 92.107
- `jury-waiver` - edu-jury-waiver-tx - Present - Tex. Prop. Code § 92.006; Tex. Const. art. I, § 15
- `key-control-policy` - edu-no-key-control-policy-tx - Absent - Tex. Prop. Code § 92.156; Tex. Prop. Code § 92.151
- `knowing-use-penalty` - edu-knowing-use-penalty-tx - Present - Tex. Prop. Code § 92.0563; Tex. Prop. Code § 94.159
- `landlord-liability-insurance` - edu-no-landlord-insurance-mandate-tx - Absent - Tex. Prop. Code § 92.054; Tex. Prop. Code § 92.0135
- `landlord-registration` - edu-no-landlord-registration-tx - Absent - Tex. Occ. Code § 1101.002; Tex. Occ. Code § 1101.005
- `landlord-remedies-termination` - edu-landlord-remedies-termination-tx - Present - Tex. Prop. Code § 24.004; Tex. Prop. Code § 24.0051
- `late-fee-limit` - edu-late-fee-limit-tx - Present - Tex. Prop. Code § 92.019; Tex. Prop. Code § 92.002
- `law-enforcement-cooperation` - edu-no-law-enforcement-cooperation-rule-tx - Absent - Tex. Prop. Code § 92.015; Tex. Prop. Code § 92.332
- `lead-safe-certification` - edu-no-lead-safe-certificate-tx - Absent - Tex. Occ. Code § 1955.001; Tex. Occ. Code § 1955.051
- `lead-state-notices` - edu-no-lead-state-notices-tx - Absent - Tex. Occ. Code § 1955.001; Tex. Occ. Code § 1955.051
- `lease-content-requirements` - edu-lease-content-requirements-tx - Present - Tex. Prop. Code § 92.056; Tex. Prop. Code § 92.016
- `lease-notice-initial-requirement` - edu-no-lease-initials-requirement-tx - Absent - Tex. Prop. Code § 92.017; Tex. Prop. Code § 94.053
- `lease-registration` - edu-no-lease-registration-duty-tx - Absent - Tex. Prop. Code § 12.001; Tex. Prop. Code § 13.001
- `lease-term-limitation` - edu-lease-term-limits-tx - Absent - Tex. Bus. & Com. Code § 26.01; Tex. Fam. Code § 5.001
- `lease-type-parity` - edu-no-lease-type-parity-tx - Absent - Tex. Prop. Code § 91.001; Tex. Prop. Code § 94.055
- `lease-type-size` - edu-no-lease-type-size-tx - Absent - Tex. Prop. Code § 94.051; Tex. Prop. Code § 94.053
- `limitation-of-actions` - edu-limitation-of-actions-tx - Present - Tex. Civ. Prac. & Rem. Code § 16.003; Tex. Civ. Prac. & Rem. Code § 16.004
- `liquidated-damages` - edu-no-liquidated-damages-rule-tx - Absent - Tex. Bus. & Com. Code § 2A.504; Tex. Prop. Code § 92.019
- `maintenance-duty-shift` - edu-maintenance-duty-shift-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.052
- `meter-conservation-charge` - edu-no-meter-conservation-charge-tx - Absent - Tex. Loc. Gov't Code § 399.002; Tex. Loc. Gov't Code § 399.004
- `military-air-zone-disclosure` - edu-no-military-zone-disclosure-tx - Absent - Tex. Prop. Code § 5.008; Tex. Loc. Gov't Code § 397.001
- `minor-tenant-filing` - edu-minor-tenant-filing-tx - Present - Tex. Civ. Prac. & Rem. Code § 129.001; Tex. Fam. Code § 101.003
- `municipal-utility-lien` - edu-municipal-utility-lien-tx - Present - Tex. Loc. Gov't Code § 552.0025
- `nonrefundable-deposit-notice` - nonrefundable-fees-wv (tag) - Tagged - Tex. Prop. Code § 92.102; Tex. Prop. Code § 92.111
- `nonrefundable-deposit-separate-notice` - edu-no-nonrefundable-separate-notice-tx - Absent - Tex. Prop. Code § 92.102; Tex. Prop. Code § 92.111
- `nonresident-owner-agent` - edu-no-nonresident-owner-agent-tx - Absent - Tex. Prop. Code § 92.003; Tex. Civ. Prac. & Rem. Code § 17.042
- `notice-service-fee` - edu-no-notice-service-fee-tx - Absent - Tex. Prop. Code § 24.006; Tex. Fin. Code § 392.303
- `notice-to-quit-waiver` - edu-notice-to-quit-waiver-tx - Present - Tex. Prop. Code § 24.005; Tex. Prop. Code § 91.001
- `notice-to-vacate-additional-terms` - edu-notice-to-vacate-additional-terms-tx - Present - Tex. Prop. Code § 24.005; Tex. Prop. Code § 24.006
- `optional-lease-terms` - edu-optional-lease-terms-tx - Present - Tex. Prop. Code § 91.001; Tex. Prop. Code § 24.005
- `ordnance-demolition-meter-disclosures` - edu-no-ordnance-demolition-meter-disclosure-tx - Absent - Tex. Prop. Code § 92.055; Tex. Prop. Code § 92.0563
- `other-landlord-facilities` - edu-other-landlord-facilities-tx - Present - Tex. Prop. Code § 92.052; Tex. Prop. Code § 5.008
- `owner-move-in-reservation` - owner-occupancy-termination-ar (tag) - Tagged - Tex. Prop. Code § 92.0081; Tex. Prop. Code § 24.005
- `part5-nonwaivable` - edu-part5-nonwaivable-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.0563
- `periodic-services-entry` - scheduled-services-entry-la (tag) - Tagged - Tex. Prop. Code § 94.004; Tex. Occ. Code § 1951.453
- `pest-control-notice` - edu-pest-control-notice-tx - Present - Tex. Occ. Code § 1951.453; Tex. Occ. Code § 1951.454
- `pet-eviction-fact-sheet` - edu-no-pet-eviction-fact-sheet-tx - Absent - Tex. Loc. Gov't Code § 392.0555
- `pet-fees` - edu-pet-fees-tx - Present - Tex. Prop. Code § 92.102; Tex. Prop. Code § 92.103
- `plain-language-consumer-statement` - edu-no-plain-language-consumer-statement-tx - Absent - Tex. Bus. & Com. Code § 17.42; Tex. Bus. & Com. Code § 92.051
- `political-access` - edu-no-political-access-rule-tx - Absent - Tex. Elec. Code § 259.002; Tex. Elec. Code § 259.003
- `portable-cooling-device` - edu-no-portable-cooling-rule-tx - Absent - Tex. Prop. Code § 92.0561; Tex. Prop. Code § 92.052
- `portable-solar` - edu-no-portable-solar-right-tx - Absent - Tex. Prop. Code § 202.010; Tex. Prop. Code § 202.011
- `portfolio-thresholds` - edu-portfolio-thresholds-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.019
- `possession-bond` - edu-possession-bond-tx - Present - Tex. Prop. Code § 24.0061; Tex. Prop. Code § 24.005107
- `private-well-testing` - edu-no-private-well-testing-tx - Absent - Tex. Prop. Code § 92.052; Tex. Prop. Code § 92.0561
- `prohibited-acts-renter` - prohibited-acts-renter-wy (tag) - Tagged - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.052
- `promises-to-repair` - edu-no-promises-to-repair-rule-tx - Absent - Tex. Prop. Code § 92.061; Tex. Prop. Code § 92.0561
- `prop65-rental-warning` - edu-no-chemical-warning-rule-tx - Absent - Tex. Health & Safety Code § 503.001; Tex. Prop. Code § 92.052
- `property-tax-rent-disclosure` - edu-no-property-tax-rent-statement-tx - Absent - Tex. Prop. Code § 92.332; Tex. Prop. Code § 92.331
- `protected-class-inquiry-ban` - edu-no-protected-class-inquiry-ban-tx - Absent - Tex. Prop. Code § 301.021; Tex. Prop. Code § 301.022
- `purpose-limitation` - edu-no-purpose-limitation-tx - Absent - Tex. Prop. Code § 91.003; Tex. Prop. Code § 93.001
- `recycling-notice` - edu-no-recycling-notice-tx - Absent - see row
- `redemption` - edu-no-redemption-tx - Absent - Tex. Prop. Code § 24.005; Tex. Prop. Code § 24.0053
- `religious-cultural-display` - edu-no-religious-display-rule-tx - Absent - Tex. Prop. Code § 202.018; Tex. Prop. Code § 202.001
- `rent-concession` - rent-concession-wi (tag) - Tagged - Tex. Prop. Code § 92.019; Tex. Prop. Code § 92.006
- `rent-demand-bar` - edu-no-rent-demand-bar-tx - Absent - Tex. Prop. Code § 92.024; Tex. Prop. Code § 92.052
- `rent-escalation` - rent-escalation-ga (tag), rent-escalation-la (tag), rent-increase-midterm-ky (tag) - Tagged - Tex. Prop. Code § 92.331; Tex. Prop. Code § 92.332
- `rent-installments` - rent-installments-or (tag) - Tagged - Tex. Prop. Code § 92.019; Tex. Prop. Code § 92.006
- `rent-into-court-counterclaim` - edu-rent-into-court-counterclaim-tx - Present - Tex. Prop. Code § 24.004; Tex. Prop. Code § 24.005107
- `rent-receipt-anti-waiver` - edu-no-rent-receipt-anti-waiver-tx - Absent - Tex. Prop. Code § 92.001; Tex. Prop. Code § 92.003
- `rent-reporting` - edu-rent-reporting-tx - Present - Tex. Prop. Code § 92.110; Tex. Prop. Code § 92.107
- `rent-tax` - edu-rent-tax-tx - Present - Tex. Tax Code § 151.009; Tex. Tax Code § 151.010
- `rental-inspection` - edu-rental-inspection-tx, rental-inspection-cooperation-mn (tag) - Present + tagged - Tex. Loc. Gov't Code § 214.219; Tex. Code Crim. Proc. art. 18.05
- `renters-insurance-rules` - edu-no-renters-insurance-rules-tx - Absent - Tex. Prop. Code § 92.0135; Tex. Fin. Code § 392.303
- `repair-cost-termination` - edu-no-repair-cost-termination-tx - Absent - Tex. Prop. Code § 92.052; Tex. Prop. Code § 92.054
- `repair-escrow-exemption-notice` - edu-no-repair-escrow-exemption-tx - Absent - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.056
- `repair-notice` - edu-repair-notice-tx - Present - Tex. Prop. Code § 92.052; Tex. Prop. Code § 92.056
- `required-disclosures` - edu-required-disclosures-tx - Present - Tex. Prop. Code § 92.0135; Tex. Prop. Code § 92.3515
- `required-fees` - edu-required-fees-tx - Present - Tex. Prop. Code § 92.019; Tex. Prop. Code § 92.008
- `rights-responsibilities-guide` - edu-rights-responsibilities-guide-tx - Present - 10 § TAC 10.613; 10 § TAC 10.624
- `rules-regulations` - edu-rules-regulations-tx, rules-tx - Present - Tex. Prop. Code § 92.001; Tex. Prop. Code § 92.013
- `sale-or-management-change` - edu-sale-or-management-change-tx - Present - Tex. Prop. Code § 92.105; Tex. Prop. Code § 92.003
- `sanitary-code-variance` - edu-no-code-variance-notice-tx - Absent - Tex. Loc. Gov't Code § 214.0011
- `scope` - edu-scope-tx - Present - Tex. Prop. Code § 92.001; Tex. Prop. Code § 92.002
- `seasonal-tenancy` - edu-no-seasonal-tenancy-rule-tx - Absent - Tex. Prop. Code § 91.001; Tex. Prop. Code § 92.001
- `security-deposit-holding` - edu-security-deposit-holding-tx - Present - Tex. Prop. Code § 92.101; Tex. Prop. Code § 92.102
- `security-deposit-interest` - edu-no-security-deposit-interest-tx - Absent - Tex. Prop. Code § 92.101; Tex. Prop. Code § 92.102
- `security-deposit-nonwaiver` - edu-security-deposit-nonwaiver-tx - Present - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.102
- `security-deposit-on-sale` - edu-security-deposit-on-sale-tx - Present - Tex. Prop. Code § 92.105; Tex. Prop. Code § 92.106
- `security-deposit-penalty` - edu-security-deposit-penalty-tx - Present - Tex. Prop. Code § 92.101; Tex. Prop. Code § 92.102
- `security-deposit-standards` - edu-no-security-deposit-standards-tx - Absent - Tex. Prop. Code § 92.3515; Tex. Prop. Code § 92.111
- `senior-housing-work-card` - edu-no-senior-housing-work-card-tx - Absent - Tex. Prop. Code § 301.043; Tex. Health & Safety Code § 765.001
- `service-animal-denial-penalty` - edu-service-animal-denial-penalty-tx - Present - Tex. Hum. Res. Code § 121.002; Tex. Hum. Res. Code § 121.003
- `servicemember-rights` - edu-servicemember-rights-tx - Present - Tex. Prop. Code § 92.017; Tex. Prop. Code § 92.006
- `sex-offender-disclosure` - edu-sex-offender-disclosure-tx - Present - Tex. Code Crim. Proc. art. 62.056; Tex. Code Crim. Proc. art. 62.005
- `sex-offender-occupancy` - edu-sex-offender-occupancy-tx - Present - Tex. Code Crim. Proc. art. 62.064; Tex. Loc. Gov't Code § 341.906
- `sfr-occupancy-disclosure` - edu-no-sfr-occupancy-disclosure-tx - Absent - Tex. Prop. Code § 94.051
- `shoreline-access-disclosure` - edu-no-shoreline-disclosure-tx - Absent - Tex. Nat. Res. Code § 61.025; Tex. Nat. Res. Code § 33.135
- `showing-notice-waiver` - edu-no-showing-notice-waiver-tx - Absent - Tex. Prop. Code § 94.004; Tex. Prop. Code § 92.0081
- `shutdown-rent-protection` - edu-no-shutdown-rent-protection-tx - Absent - Tex. Prop. Code § 92.019
- `single-family-zone-lease-limit` - edu-no-single-family-zone-lease-limit-tx - Absent - Tex. Prop. Code § 209.016; Tex. Loc. Gov't Code § 229.902
- `smart-access` - edu-no-smart-access-law-tx - Absent - Tex. Prop. Code § 92.151; Tex. Prop. Code § 92.153
- `smoke-drift-waiver` - edu-no-smoke-drift-rule-tx - Absent - Tex. Penal Code § 48.01
- `social-security-defense` - edu-no-benefit-delay-defense-tx - Absent - Tex. Prop. Code § 24.005; Tex. Prop. Code § 24.0051
- `special-district-representation` - edu-no-special-district-statement-tx - Absent - Tex. Water Code § 49.452; Tex. Water Code § 49.4521
- `sprinkler-disclosure` - edu-no-sprinkler-disclosure-tx - Absent - Tex. Loc. Gov't Code § 229.902
- `statute-of-frauds-lease-term` - edu-statute-of-frauds-lease-term-tx - Present - Tex. Bus. & Com. Code § 26.01; Tex. Prop. Code § 5.021
- `statutory-caps` - edu-statutory-caps-tx - Present - Tex. Prop. Code § 92.019; Tex. Bus. & Com. Code § 3.506
- `steam-radiator-covers` - edu-no-steam-radiator-covers-tx - Absent - Tex. Health & Safety Code § 755.025; Tex. Health & Safety Code § 755.022
- `stigmatized-property` - edu-stigmatized-property-tx - Present - Tex. Occ. Code § 1101.802; Tex. Occ. Code § 1101.556
- `stove-refrigerator` - edu-no-stove-refrigerator-rule-tx - Absent - Tex. Prop. Code § 92.052; Tex. Loc. Gov't Code § 214.219
- `student-housing` - edu-no-student-housing-rule-tx - Absent - Tex. Prop. Code § 92.010; Tex. Prop. Code § 92.021
- `subsidized-inspection-refusal` - edu-no-subsidized-inspection-refusal-rule-tx - Absent - 10 § TAC 10.618; Tex. Prop. Code § 92.331
- `subsidy-habitability-proration` - edu-subsidy-habitability-proration-tx - Not located - Tex. Prop. Code § 92.0563; Tex. Prop. Code § 92.0561
- `subsidy-late-fee` - edu-subsidy-late-fee-tx - Present - Tex. Prop. Code § 92.019; 10 § TAC 10.624
- `substandard-property-receivership` - edu-substandard-property-receivership-tx - Present - Tex. Loc. Gov't Code § 214.001; Tex. Loc. Gov't Code § 214.003
- `tax-escalation` - tax-insurance-escalation-la (tag) - Tagged - Tex. Prop. Code § 92.332; Tex. Prop. Code § 92.331
- `telecom-access` - edu-telecom-access-tx - Present - Tex. Util. Code § 54.259; Tex. Util. Code § 54.260
- `tenancy-at-will` - edu-tenancy-at-will-tx - Present - Tex. Prop. Code § 24.001; Tex. Prop. Code § 24.002
- `tenant-bankruptcy` - edu-tenant-bankruptcy-tx - Not located - Tex. Prop. Code § 92.103
- `tenant-confidential-information` - edu-tenant-confidential-information-tx - Present - Tex. Bus. & Com. Code § 521.002; Tex. Bus. & Com. Code § 521.052
- `tenant-display-rights` - edu-no-tenant-display-rights-tx - Absent - Tex. Prop. Code § 202.012; Tex. Prop. Code § 202.010
- `tenant-employee-housing` - edu-tenant-employee-housing-tx - Present - Tex. Prop. Code § 92.001; Tex. Prop. Code § 92.002
- `tenant-insurance-claims` - edu-no-tenant-insurance-claims-rule-tx - Absent - Tex. Prop. Code § 92.006; Tex. Prop. Code § 92.054
- `tenant-portal` - edu-tenant-portal-tx, tenant-portal-mn (tag) - Present + tagged - Tex. Bus. & Com. Code § 322.005; Tex. Bus. & Com. Code § 322.007
- `tenant-records` - edu-tenant-records-tx - Present - Tex. Prop. Code § 92.011; Tex. Prop. Code § 92.106
- `tenant-right-to-organize` - edu-tenant-right-to-organize-tx - Present - Tex. Prop. Code § 92.331; Tex. Prop. Code § 92.332
- `tenant-rights-statement` - edu-tenant-rights-statement-tx - Present - 10 § TAC 10.613; Tex. Prop. Code § 92.008
- `tenant-statutory-duties` - edu-tenant-statutory-duties-tx - Present - Tex. Prop. Code § 91.005; Tex. Prop. Code § 92.108
- `term-change-notice` - edu-term-change-notice-tx - Present - Tex. Prop. Code § 91.001; Tex. Prop. Code § 92.013
- `tpa-exemption-notice` - edu-no-tpa-exemption-notice-tx - Absent - Tex. Gov't Code § 2306.6726
- `tpa-notice` - edu-tpa-notice-tx - Present - Tex. Gov't Code § 2306.6726; Tex. Gov't Code § 2306.6725
- `tpa-sunset` - edu-no-tpa-sunset-tx - Absent - Tex. Prop. Code § 24.005; Tex. Prop. Code § 24.0051
- `translation-duty` - edu-translation-duty-tx - Present - Tex. Prop. Code § 5.062; Tex. Prop. Code § 5.068
- `trespass-notice` - edu-trespass-notice-tx - Present - Tex. Penal Code § 30.05; Tex. Penal Code § 32.56 (S.B. 1333 version)
- `truth-in-renting` - edu-no-truth-in-renting-tx - Absent - Tex. Bus. & Com. Code § 17.45; Tex. Bus. & Com. Code § 17.46
- `unbundled-parking` - edu-no-unbundled-parking-rule-tx - Absent - Tex. Prop. Code § 92.0132; Tex. Loc. Gov't Code § 218.001
- `unconscionability` - edu-unconscionability-tx - Present - Tex. Bus. & Com. Code § 2A.102; Tex. Bus. & Com. Code § 2A.103
- `unpaid-damages-interest` - edu-unpaid-damages-interest-tx - Present - Tex. Prop. Code § 92.019; Tex. Fin. Code § 301.002
- `usufructuary-lessor` - edu-no-usufructuary-lessor-tx - Absent - Tex. Est. Code § 201.002; Tex. Prop. Code § 5.009
- `utility-allowance-cap` - edu-utility-allowance-cap-tx - Present - Tex. Water Code § 13.501; Tex. Water Code § 13.503
- `utility-apportionment` - edu-utility-apportionment-tx - Present - Tex. Water Code § 13.501; Tex. Water Code § 13.502
- `utility-deposit-return` - edu-utility-deposit-return-tx - Present - 16 § TAC 24.151; 16 § TAC 24.159
- `utility-disclosure-attachment` - edu-utility-disclosure-attachment-tx - Present - 16 § TAC 24.279; 16 § TAC 25.142(d)
- `utility-disconnection-notice-authorization` - edu-utility-disconnection-notice-authorization-tx - Not located - Tex. Prop. Code § 92.302; Tex. Util. Code § 17.201
- `utility-landlord-account` - edu-utility-landlord-account-tx - Present - Tex. Prop. Code § 92.301; Tex. Prop. Code § 92.302
- `utility-transfer` - edu-no-utility-transfer-cutoff-tx - Absent - Tex. Prop. Code § 92.008; Tex. Loc. Gov't Code § 552.0025
- `veterans-incentive` - edu-no-veterans-incentive-tx - Absent - Tex. Prop. Code § 301.021; Tex. Loc. Gov't Code § 250.007
- `waiver-by-acceptance` - edu-no-waiver-by-acceptance-rule-tx - Absent - Tex. Prop. Code § 92.019; Tex. R. Civ. P. 510
- `water-heater-temperature` - edu-water-heater-temperature-tx - Present - Tex. Prop. Code § 92.052; Tex. Health & Safety Code § 755.001
- `waterbed` - edu-no-waterbed-rule-tx - Absent - Tex. Prop. Code § 92.102; Tex. Prop. Code § 92.052
- `window-guards` - edu-no-window-guard-rule-tx - Absent - Tex. Prop. Code § 92.153; Tex. Health & Safety Code § 756.081
- `written-notice-required` - edu-written-notice-required-tx - Present - Tex. Prop. Code § 24.005; Tex. Prop. Code § 92.0081

## §3 Batteries for every absence

Each battery ran over every Texas code held as text (the corpus of 2026-10-30) unless it says otherwise. The nonsense control is `xqzzyplugh`. The counts are copied from the battery logs.

**`accessory-dwelling-unit`** (edu-no-adu-statute-tx)
- TX-GAPS-A-01 -  - codes ALL; patterns: `accessory\s+dwelling\w*` 0; `accessory\s+(?:apartment|living\s+unit|residential\s+unit|suite|unit)s?\b` 0; `\bgranny\b|in-law (?:unit|apartment|suite)|mother-in-law|garage apartment|guest\s*houses?\` 0; `secondary (?:dwelling|unit|suite)|second (?:dwelling|residential) units?` 0; `accessory structures?` 6; `owner[- ]occup\w*.{0,120}(?:zoning|accessory|second)|(?:zoning|accessory|second).{0,120}ow` 0; heading screen 0; catchline 0; control 0; positives: CP 16.009 passed
- TX-GAPS-A-36 -  - codes ALL; patterns: `accessory\s+dwelling\w*` 0; `accessory\s+(?:apartment|living\s+unit|residential\s+unit|suite|unit)s?\b` 0; `\bgranny\b|in-law (?:unit|apartment|suite)|mother-in-law|garage apartment|guest\s*houses?\` 0; `secondary (?:dwelling|unit|suite)|second (?:dwelling|residential) units?` 0; `accessory structures?` 6; `(?s)owner[- ]occup\w*.{0,120}(?:zoning|accessory|second)|(?:zoning|accessory|second).{0,12` 0; heading screen 0; catchline 0; control 0; positives: CP 16.009 passed

**`alt-housing`** (edu-no-alt-housing-duty-tx)
- TX-GAPS-A-05 -  - codes ALL; patterns: `(?:alternate|alternative|substitute|temporary|comparable)\s+(?:housing|lodging|accommodati` 56; `relocat\w*.{0,150}(?:tenant|occupant)|(?:tenant|occupant).{0,150}relocat\w*` 10; `(?:hotel|motel).{0,150}tenants?\b|tenants?\b.{0,150}(?:hotel|motel)` 1; `(?:displaced|uninhabitable|untenantable)\w*.{0,150}(?:tenant|lease\b|landlord)|(?:tenant|l` 1; heading screen 7; catchline 7; control 0; positives: LG 214.001 passed, GV 2306.936 passed
- TX-GAPS-A-06 -  - codes ALL; patterns: `(?:move|transfer|relocat)\w*.{0,60}(?:another|different|other|substitute)\s+(?:rental\s+)?` 2; `(?:another|different|substitute)\s+(?:rental\s+)?(?:unit|dwelling|apartment)s?\b.{0,100}(?` 3; heading screen 0; catchline 0; control 0; positives: PR 92.062 passed
- TX-GAPS-A-15 -  - codes ALL; patterns: `(?:alternate|alternative|substitute|temporary|comparable)\s+(?:housing|lodging|accommodati` 56; `(?s)relocat\w*.{0,150}(?:tenant|occupant)|(?:tenant|occupant).{0,150}relocat\w*` 11; `(?s)(?:hotel|motel).{0,150}tenants?\b|tenants?\b.{0,150}(?:hotel|motel)` 5; `(?s)(?:displaced|uninhabitable|untenantable)\w*.{0,150}(?:tenant|lease\b|landlord)|(?:tena` 2; heading screen 7; catchline 7; control 0; positives: LG 214.001 passed, GV 2306.936 passed
- TX-GAPS-A-37 -  - codes ALL; patterns: `(?s)(?:move|transfer|relocat)\w*.{0,60}(?:another|different|other|substitute)\s+(?:rental\` 2; `(?s)(?:another|different|substitute)\s+(?:rental\s+)?(?:unit|dwelling|apartment)s?\b.{0,10` 3; heading screen 0; catchline 0; control 0; positives: PR 92.062 passed

**`animal-care-access`** (edu-no-animal-care-entry-right-tx)
- TX-GAPS-A-07 -  - codes ALL; patterns: `(?:landlord|lessor|tenant)\w*.{0,150}(?:\bpets?\b|animals?\b)|(?:\bpets?\b|animals?\b).{0,` 6; `(?:enter|entry|access)\w*.{0,150}(?:\bpets?\b|animals?\b).{0,100}(?:care|feed|water|remov|` 4; `(?:dwelling|residence|habitation|premises|home)\w*.{0,100}(?:abandon|unattended|left)\w*.{` 4; heading screen 0; catchline 0; control 0; positives: PR 92.013 passed
- TX-GAPS-A-16 -  - codes ALL; patterns: `(?s)(?:landlord|lessor|tenant)\w*.{0,150}(?:\bpets?\b|animals?\b)|(?:\bpets?\b|animals?\b)` 7; `(?s)(?:enter|entry|access)\w*.{0,150}(?:\bpets?\b|animals?\b).{0,100}(?:care|feed|water|re` 8; `(?s)(?:dwelling|residence|habitation|premises|home)\w*.{0,100}(?:abandon|unattended|left)\` 4; heading screen 0; catchline 0; control 0; positives: PR 92.013 passed

**`automatic-renewal`** (edu-no-automatic-renewal-rule-tx)
- TX-GAPS-A-19 -  - codes ALL; patterns: `automatic\w*\s+(?:renew|extend|extension)\w*|(?:renew|extend)\w*\s+automatically` 31; `(?s)automatic\w*.{0,100}(?:lease\b|rental agreement|tenancy|tenant)|(?:lease\b|rental agre` 5; `evergreen|negative option` 6; `(?:fails?|failure) to (?:give|provide|reject)\w*.{0,100}(?:renew|extend)\w*` 4; heading screen 1; catchline 1; control 0; positives: BC 92.001 passed, PR 94.055 passed
- TX-GAPS-A-46 -  - codes ALL; patterns: `automatic\w*\s+(?:renew|extend|extension)\w*|(?:renew|extend)\w*\s+automatically` 31; `(?s)automatic\w*.{0,100}(?:lease\b|rental agreement|tenancy|tenant)|(?:lease\b|rental agre` 5; `evergreen|negative option` 6; `(?s)(?:fails?|failure) to (?:give|provide|reject)\w*.{0,100}(?:renew|extend)\w*` 4; heading screen 1; catchline 1; control 0; positives: BC 92.001 passed, PR 94.055 passed

**`balcony-inspection`** (edu-no-balcony-inspection-rule-tx)
- TX-GAPS-A-20 -  - codes ALL; patterns: `balcon\w*` 35; `exterior elevated|elevated (?:element|walkway|deck|exterior)|load-bearing (?:component|ele` 0; `(?s)\bdecks?\b.{0,100}(?:inspect|railing|guardrail)\w*|(?:inspect|railing|guardrail)\w*.{0` 0; `(?s)(?:porch|patio|terrace|stairway|walkway)\w*.{0,100}inspect\w*|inspect\w*.{0,100}(?:por` 46; heading screen 3; catchline 3; control 0; positives: HS 791.012 passed

**`carpet-cleaning`** (edu-carpet-cleaning-tx)
- TX-GAPS-A-24 -  - codes ALL; patterns: `carpet\w*|\brugs?\b|floor covering\w*` 5; `(?s)(?:clean\w*).{0,150}(?:security deposit|tenant|lease\b|move-out|surrender\w*)|(?:secur` 22; `(?s)(?:paint\w*|repaint\w*).{0,150}(?:security deposit|wear and tear)|(?:security deposit|` 1; heading screen 1; catchline 1; control 0; positives: FI 347.002 passed, PR 92.104 FAILED - recorded as failed; see the rerun
- TX-GAPS-A-40 -  - codes ALL; patterns: `carpet\w*|\brugs?\b|floor covering\w*` 5; `(?s)(?:clean\w*).{0,150}(?:security deposit|tenant|lease\b|move-out|surrender\w*)|(?:secur` 22; `(?s)(?:paint\w*|repaint\w*).{0,150}(?:security deposit|wear and tear)|(?:security deposit|` 1; heading screen 1; catchline 1; control 0; positives: FI 347.002 passed, OC 1304.003 passed

**`certificate-of-occupancy-disclosure`** (edu-no-certificate-of-occupancy-disclosure-tx)
- TX-GAPS-A-25 -  - codes ALL; patterns: `certificates? of occupancy` 28; `(?s)certificates? of occupancy.{0,200}(?:tenant|landlord|\blease\b|lessee|rental|dwelling)` 5; `(?s)(?:occupancy permit|permit to occupy|rental (?:license|permit|registration)|use permit` 2; heading screen 4; catchline 4; control 0; positives: PR 92.023 passed, LG 214.909 passed

**`cold-weather-vacate-notice`** (edu-no-cold-weather-vacate-notice-tx)
- TX-GAPS-E-15 -  - codes ALL; patterns: `cold weather|extreme weather|inclement weather|winter weather|freezing (?:temperature|weat` 51; `(?s)(?:freez\w*|frozen)[^.]{0,120}(?:pipe\w*|plumbing|dwelling|tenant\w*|premises|unit\b|v` 4; `(?s)(?:vacat\w*|abandon\w*|absen\w*|leav\w*)[^.]{0,150}(?:freez\w*|cold|winter|\bheat\b|he` 1; `(?s)(?:notice|notify)[^.]{0,80}(?:intent\w* to|before|prior to)[^.]{0,40}(?:vacat\w*|aband` 2; heading screen 2; catchline 2; control 0; positives: CR 46.04 passed, UT 104.258 passed
- TX-GAPS-E-19 -  - codes ALL; patterns: `\d+ degrees Fahrenheit` 35; `extended freeze|hard freeze|freeze warning|winter storm` 16; `National Weather Service` 16; `(?s)\b(?:heat|heating)\b[^.]{0,100}(?:tenant\w*|dwelling|lease\b|landlord\w*)|(?:tenant\w*` 7; heading screen 2; catchline 1; control 0; positives: PR 92.008 passed, PR 92.0562 passed, PR 92.0561 passed

**`communal-land-lease-approval`** (edu-no-communal-land-lease-approval-tx)
- TX-GAPS-A-28 -  - codes ALL; patterns: `communal (?:land|property)|land tenure|usufruct|held in common by` 0; `(?s)(?:indian tribe|tribal (?:land|trust|government|council)|\bpueblo\b|alabama-coushatta|` 3; `(?s)(?:approv\w*).{0,60}(?:of|for) (?:the|a|any) (?:residential )?lease\b|lease\b.{0,60}(?` 6; heading screen 0; catchline 0; control 0; positives: BC 26.01 FAILED - recorded as failed; see the rerun
- TX-GAPS-A-43 -  - codes ALL; patterns: `communal (?:land|property)|land tenure|usufruct|held in common by` 0; `(?s)(?:indian tribe|tribal (?:land|trust|government|council)|\bpueblo\b|alabama-coushatta|` 3; `(?s)(?:approv\w*).{0,60}(?:of|for) (?:the|a|any) (?:residential )?lease\b|lease\b.{0,60}(?` 6; heading screen 0; catchline 0; control 0; positives: TX 151.337 passed, NR 71.010 passed

**`condemned-premises-rent-bar`** (edu-no-condemned-rent-bar-tx)
- TX-GAPS-A-29 -  - codes ALL; patterns: `(?s)(?:condemn\w*|unfit for (?:human )?habitation|substandard|order\w* (?:to vacate|vacate` 1; `(?s)(?:may not|shall not|is not entitled to)\s+(?:collect|recover|demand|charge|accept)\w*` 0; `(?s)certificates? of occupancy.{0,200}\brent\w*|\brent\w*.{0,200}certificates? of occupanc` 0; heading screen 0; catchline 0; control 0; positives: PR 92.023 FAILED - recorded as failed; see the rerun
- TX-GAPS-A-44 -  - codes ALL; patterns: `(?s)(?:condemn\w*|unfit for (?:human )?habitation|substandard|order\w* (?:to vacate|vacate` 1; `(?s)(?:may not|shall not|is not entitled to)\s+(?:collect|recover|demand|charge|accept)\w*` 0; `(?s)certificates? of occupancy.{0,200}\brent\w*|\brent\w*.{0,200}certificates? of occupanc` 0; heading screen 0; catchline 0; control 0; positives: WA 61.163 passed

**`condition-inspection`** (edu-no-condition-inspection-rule-tx)
- TX-GAPS-A-30 -  - codes ALL; patterns: `(?s)(?:inventory|checklist|check-list|condition (?:report|statement|form)|statement of con` 16; `(?s)inspect\w*.{0,100}(?:beginning|start|commencement|end|termination|surrender)\w*.{0,60}` 2; `(?s)(?:existing|pre-existing|prior) (?:damage|condition)s?.{0,150}(?:tenant|landlord|\blea` 1; heading screen 0; catchline 0; control 0; positives: PR 92.014 passed, PR 92.258 FAILED - recorded as failed; see the rerun
- TX-GAPS-A-45 -  - codes ALL; patterns: `(?s)(?:inventory|checklist|check-list|condition (?:report|statement|form)|statement of con` 16; `(?s)inspect\w*.{0,100}(?:beginning|start|commencement|end|termination|surrender)\w*.{0,60}` 2; `(?s)(?:existing|pre-existing|prior) (?:damage|condition)s?.{0,150}(?:tenant|landlord|\blea` 1; heading screen 0; catchline 0; control 0; positives: PR 92.014 passed, PR 92.263 passed

**`confirmed-absences-habitability`** (edu-confirmed-absences-habitability-tx)
- TX-GAPS-A-31 -  - codes ALL; patterns: `warrant\w* of (?:habitability|fitness for habitation|suitability|tenantability)|implied wa` 5; `\bhabitab\w*|uninhabitab\w*|fit for (?:human )?habitation` 59; `(?s)withh[oe]ld\w*.{0,60}\brent\b|\brent\b.{0,60}withh[oe]ld\w*` 15; `(?s)\brent\w*.{0,60}(?:escrow|registry of the court|court registry)|(?:escrow|registry of ` 8; `(?:minimum|maximum)\s+(?:indoor\s+)?temperature|degrees fahrenheit` 38; `(?s)air[- ]condition\w*.{0,150}(?:tenant|landlord|dwelling|rental)|(?:tenant|landlord|rent` 2; heading screen 13; catchline 12; control 0; positives: PR 92.061 passed, PR 92.058 passed, PR 92.052 passed, PR 92.0561 passed
- TX-GAPS-A-47 -  - codes ALL; patterns: `(?s)warrant\w* of (?:habitability|fitness for habitation|suitability|tenantability)|implie` 6; `\bhabitab\w*|uninhabitab\w*|fit for (?:human )?habitation` 59; `(?s)withh[oe]ld\w*.{0,60}\brent\b|\brent\b.{0,60}withh[oe]ld\w*` 15; `(?s)\brent\w*.{0,60}(?:escrow|registry of the court|court registry)|(?:escrow|registry of ` 8; `(?:minimum|maximum)\s+(?:indoor\s+)?temperature|degrees fahrenheit` 38; `(?s)air[- ]condition\w*.{0,150}(?:tenant|landlord|dwelling|rental)|(?:tenant|landlord|rent` 2; heading screen 13; catchline 12; control 0; positives: PR 92.061 passed, PR 92.058 passed, PR 92.052 passed, PR 92.0561 passed

**`confirmed-absences-misc`** (edu-confirmed-absences-misc-tx)
- TX-GAPS-A-32 -  - codes ALL; patterns: `(?s)(?:rent|rental)\w*\s+(?:payment\s+)?(?:history|payments?|data).{0,150}(?:consumer repo` 0; `(?s)(?:energy (?:use|usage|consumption|efficiency rating|score|benchmark\w*)|utility (?:co` 1; `blank (?:spaces?|lines?)|spaces? left blank|left blank` 23; `(?s)(?:shutdown|lapse in appropriations|delay\w* in (?:benefit|payment)s?).{0,200}(?:tenan` 0; heading screen 1; catchline 1; control 0; positives: PR 92.0191 FAILED, BC 20.01 FAILED - recorded as failed; see the rerun
- TX-GAPS-A-33 -  - codes ALL; patterns: `(?s)(?:rent|rental)\w*\s+(?:payment\s+)?(?:history|payments?|data).{0,150}(?:consumer repo` 0; `(?s)(?:energy (?:use|usage|consumption|efficiency rating|score|benchmark\w*)|utility (?:co` 1; `blank (?:spaces?|lines?)|spaces? left blank|left blank` 23; `(?s)(?:shutdown|lapse in appropriations|delay\w* in (?:benefit|payment)s?).{0,200}(?:tenan` 0; heading screen 1; catchline 1; control 0; positives: FI 345.108 passed, UT 39.905 passed

**`confirmed-absences-outside-title`** (edu-confirmed-absences-outside-title-tx)
- TX-GAPS-A-34 -  - codes ALL; patterns: `(?s)(?:regist\w*|licens\w*|permit)\b.{0,150}(?:eviction|forcible (?:entry and )?detainer|p` 3; `rental (?:registration|registry|license|licensing|permit)|landlord (?:registration|registr` 0; heading screen 0; catchline 0; control 0; positives: PR 24.0053 passed
- TX-GAPS-A-35 -  - codes ALL; patterns: `plain[- ]language|readab\w*` 217; `(?s)(?:type size|point type|\d+-point|\bfont\b|typeface).{0,150}(?:\blease\b|rental agreem` 5; heading screen 9; catchline 8; control 0; positives: FI 341.502 passed

**`defective-drywall-disclosure`** (edu-no-drywall-disclosure-tx)
- TX-GAPS-B-06 -  - codes ALL; patterns: `\bdry\s?-?walls?\b` 1; `\bgypsum\s+(board|wallboard|panel)s?\b` 1; `\b(wallboard|plasterboard|sheetrock)s?\b` 3; `\b(corrosive|defective|contaminated|imported)\s+(drywall|building materials?|construction ` 0; `\b(building|construction) materials?\b.{0,120}\b(disclos\w*|tenants?|lease)\b|\b(disclos\w` 2; heading screen 0; catchline 0; control 0; positives: LG 233.154 passed, PR 82.052 passed

**`deposit-installments`** (edu-no-deposit-installments-tx)
- TX-GAPS-B-08 -  - codes ALL; patterns: `\binstall?ments?\b.{0,120}\bdeposits?\b|\bdeposits?\b.{0,120}\binstall?ments?\b` 6; `\b(payment plan|partial payments?|pay\w*\s+(in|over)\s+(two|three|four|several|equal)\b|mo` 2; `\bsecurity deposits?\b.{0,150}\b(maximum|exceed|limit\w*|cap)\b|\b(maximum|exceed|limit\w*` 2; `\binstall?ments?\b` 1623; heading screen 65; catchline 68; control 0; positives: PR 92.111 FAILED, PR 5.062 FAILED - recorded as failed; see the rerun
- TX-GAPS-B-09 -  - codes ALL; patterns: `\binstall?ments?\b.{0,120}\bdeposits?\b|\bdeposits?\b.{0,120}\binstall?ments?\b` 6; `\b(payment plan|partial payments?|pay\w*\s+(in|over)\s+(two|three|four|several|equal)\b|mo` 2; `\bsecurity deposits?\b.{0,150}\b(maximum|exceed|limit\w*|cap)\b|\b(maximum|exceed|limit\w*` 2; `\bfee in lieu of (a )?security deposit\b` 9; heading screen 1; catchline 1; control 0; positives: LG 131.003 passed, PR 92.111 passed

**`disaster-displaced-guests`** (edu-no-disaster-guest-rule-tx)
- TX-GAPS-B-11 -  - codes ALL; patterns: `\b(displaced|evacuee\w*|evacuat\w*)\b.{0,150}\b(guests?|tenants?|lease|occupan\w*|dwelling` 5; `\b(disasters?|emergenc\w*|hurricanes?)\b.{0,150}\b(guests?|occupancy limit\w*|additional o` 0; `\b(shelter\w*|hous\w*)\b.{0,80}\b(evacuees?|displaced (persons|individuals|residents|famil` 3; `\bnatural disaster\b` 109; heading screen 7; catchline 7; control 0; positives: PR 21.043 passed, PR 92.062 passed

**`double-letting`** (edu-no-double-letting-rule-tx)
- TX-GAPS-B-13 -  - codes ALL; patterns: `\bdouble[- ]?(let\w*|leas\w*|rent\w*|book\w*)\b|\bover-?book\w*` 0; `\b(deliver\w*|give|giving|tender\w*)\s+(of\s+)?(actual\s+)?possession\b.{0,150}\b(tenant|l` 0; `\b(same|identical)\s+(premises|dwelling|unit|room|rental unit)\b.{0,120}\b(two|more than o` 0; `\bpossession of the (premises|dwelling|rental unit|leased premises)\b` 31; heading screen 0; catchline 0; control 0; positives: PR 92.0081 passed

**`drug-free-housing-addendum`** (edu-no-drug-free-addendum-tx)
- TX-GAPS-B-14 -  - codes ALL; patterns: `\bdrug[- ]free\b` 5; `\bcrime[- ]free\b` 0; `\b(lease|rental)\s+addend\w*|\baddend\w*\b.{0,80}\b(lease|rental agreement)\b` 3; `\b(drugs?|controlled substances?|narcotics?|illegal substances?)\b.{0,150}\b(lease|tenan\w` 0; heading screen 1; catchline 1; control 0; positives: PR 92.006 FAILED - recorded as failed; see the rerun
- TX-GAPS-B-15 -  - codes ALL; patterns: `\bdrug[- ]free\b` 5; `\bcrime[- ]free\b` 0; `\b(lease|rental)\s+addend\w*|\baddend\w*\b.{0,80}\b(lease|rental agreement)\b` 3; `\b(drugs?|controlled substances?|narcotics?|illegal substances?)\b.{0,150}\b(lease|tenan\w` 0; heading screen 1; catchline 1; control 0; positives: PR 92.0135 passed, HS 481.134 passed

**`dv-deposit-timing`** (edu-no-dv-deposit-timing-rule-tx)
- TX-GAPS-M-08 - DV and deposit timing - codes ALL; patterns: `(family violence|sexual assault|stalking)[^.]{0,250}deposit|deposit[^.]{0,250}(family viol` 9; heading screen 1; catchline 0; control 0; positives: none - no real positive exists; the companion battery cited with it carries real positives
- TX-GAPS-M-22 - deposit return when cotenants remain (everyday words) - codes ALL; patterns: `(co-?tenant|remaining tenant|other tenant)s?[^.]{0,200}(deposit|surrender)|(deposit|surren` 0; `all (of the )?(tenants|occupants)[^.]{0,80}(vacate|surrender|deliver)` 0; heading screen 0; catchline 0; control 0; positives: PR 92.016 FAILED - recorded as failed; see the rerun
- TX-GAPS-M-23 - cotenants and deposit surrender (rerun of M-22, pattern limbs split) - codes ALL; patterns: `\bco-?tenants?\b` 104; `surrender\w*[^.]{0,120}deposit|deposit[^.]{0,120}surrender\w*` 16; heading screen 3; catchline 3; control 0; positives: PR 92.016 passed, PR 92.103 passed

**`dv-eviction-protection`** (edu-no-dv-eviction-protection-tx)
- TX-GAPS-M-10 - DV eviction protection - codes ALL; patterns: `(family violence|domestic violence|dating violence|stalking|sexual assault)[^.]{0,250}(evi` 4; `victim[^.]{0,120}(tenant|lease|landlord|rental)|(tenant|lease|landlord|rental)[^.]{0,120}v` 68; heading screen 2; catchline 2; control 0; positives: PR 92.016 passed

**`dv-lockchange`** (edu-no-dv-lockchange-right-tx)
- TX-GAPS-M-09 - DV lock change - codes ALL; patterns: `(family violence|stalking|sexual assault|protective order|dating violence)[^.]{0,250}(lock` 0; `rekey\w*|change[sd]? (the )?(door )?locks?` 40; heading screen 3; catchline 3; control 0; positives: PR 92.156 passed

**`environmental-event-termination`** (edu-no-environmental-event-termination-tx)
- TX-GAPS-B-19 -  - codes ALL; patterns: `\benvironmental\b.{0,60}\b(event|emergency|hazard|contamination|condition)s?\b.{0,200}\b(l` 0; `\b(contaminat\w*|hazardous (substance|material)s?|toxic|mold|chemical spill)\b.{0,150}\b(t` 0; `\bpublic health (event|emergency|disaster)\b.{0,200}\b(lease|tenan\w*|landlord|evict\w*|re` 0; `\bcasualty loss\b|\bclos(e|ing) (a|the) rental (unit|premises)\b` 18; heading screen 3; catchline 3; control 0; positives: PR 92.054 passed, PR 92.055 passed

**`ev-charging-end-of-tenancy`** (edu-no-ev-charging-end-of-tenancy-tx)
- TX-GAPS-B-21 -  - codes ALL; patterns: `\belectric vehicles?\b` 185; `\b(charging (station|equipment|infrastructure|port|unit|system)s?|vehicle supply equipment` 137; `(?s)\b(electric vehicle|charging)\b.{0,250}\b(tenants?|landlords?|lessees?|lease|dwelling|` 3; `\balternatively fueled vehicle\b` 4; heading screen 14; catchline 14; control 0; positives: OC 2311.0206 passed, UT 31.002 passed, UT 42.0102 passed

**`eviction-hardship-stay`** (edu-no-eviction-hardship-stay-tx)
- TX-GAPS-E-02 -  - codes ALL; patterns: `\bhardship\w*` 268; `(?s)\bstay(?:s|ed|ing)?\b[^.]{0,120}(?:writ of possession|eviction|forcible|judgment for p` 0; `(?s)(?:postpone\w*|continuance|delay\w*|abate\w*|suspend\w*)[^.]{0,120}(?:writ of possessi` 5; `(?s)(?:illness|disabilit\w*|elderly|children|school year|extreme weather|cold weather|incl` 0; heading screen 10; catchline 14; control 0; positives: PR 24.0043 passed, PR 24.005 passed, AG 161.054 passed

**`eviction-penalty-clause-ban`** (edu-no-eviction-penalty-rule-tx)
- TX-GAPS-M-19 - fee for notice / eviction filing charged to tenant (rerun of M-05, positive corrected) - codes ALL; patterns: `(fee|charge)[^.]{0,80}(notice to vacate|eviction|forcible detainer|notice to pay rent)|(no` 1; heading screen 0; catchline 0; control 0; positives: PR 24.006 passed
- TX-GAPS-M-04 - penalty / liquidated damages (general contract law) - codes ALL; patterns: `liquidated damages|liquidation of damages` 32; `penalt\w*[^.]{0,60}(imposed by|in|under) (a |the )?(contract|agreement|lease)|unenforceabl` 9; `(damages|amount)[^.]{0,60}(fixed|determined|agreed) in (advance|anticipation)|in anticipat` 1; heading screen 4; catchline 4; control 0; positives: BC 2A.504 passed

**`eviction-service-party`** (edu-no-eviction-service-party-tx)
- TX-GAPS-E-03 -  - codes ALL; patterns: `agent (?:for|to (?:receive|accept)) (?:service|process)|agent for service of process` 129; `(?:accept|receiv)\w* service of (?:process|citation)|(?:accept|waive)\w* (?:service|proces` 65; `(?s)(?:tenant\w*|lessee\w*|lease\b|leases\b|rental agreement|landlord\w*|occupant\w*)[^.]{` 5; `(?s)(?:citation|service of process|summons)[^.]{0,150}(?:tenant\w*|lessee\w*|lease\b|lease` 32; heading screen 23; catchline 23; control 0; positives: PR 92.003 passed, CR 58.052 passed, CP 30.001 passed

**`expedited-criminal-eviction`** (edu-no-expedited-criminal-eviction-tx)
- TX-GAPS-E-04 -  - codes ALL; patterns: `(?s)(?:expedit\w*|accelerat\w*|summary|immediate\w*)[^.]{0,100}evict\w*|evict\w*[^.]{0,100` 1; `(?s)evict\w*[^.]{0,150}(?:drug\w*|controlled substance|criminal|felony|violen\w*|gang|fire` 0; `(?s)terminat\w*[^.]{0,60}\b(?:lease|tenancy|tenant\w*)\b[^.]{0,150}(?:convict\w*|criminal|` 1; `(?s)\btenant\w*\b[^.]{0,120}(?:controlled substance|drug-related|criminal activity|common ` 0; `(?s)(?:serious misconduct|criminal acts?)[^.]{0,150}(?:tenant\w*|lease\b)|(?:tenant\w*|lea` 6; `(?s)terminat\w*[^.]{0,30}\btenant's lease` 3; heading screen 1; catchline 1; control 0; positives: PR 91.003 passed, CP 125.045 passed, PR 92.332 passed

**`expedited-deposit-disposition`** (edu-no-expedited-deposit-disposition-tx)
- TX-GAPS-B-23 -  - codes ALL; patterns: `(?s)\b(expedit\w*|accelerat\w*|early|earlier|sooner|prompt)\b.{0,80}\b(refund\w*|return\w*` 4; `(?s)\b(administrative|processing|accounting|handling)\s+(fees?|charges?)\b.{0,150}\bdeposi` 7; `(?s)\brefund\w*\b.{0,60}\b(security\s+)?deposits?\b` 90; heading screen 1; catchline 1; control 0; positives: PR 92.103 passed

**`family-child-care`** (edu-no-family-child-care-rule-tx)
- TX-GAPS-B-26 -  - codes ALL; patterns: `(?s)\b(child[- ]care|day[- ]care|family home|listed family home|registered family home|chi` 25; `(?s)\b(home[- ]based business\w*|home occupation\w*)\b.{0,200}\b(tenants?|landlords?|lease` 1; `\b(listed|registered) family home\b` 55; heading screen 6; catchline 6; control 0; positives: HR 42.002 FAILED - recorded as failed; see the rerun
- TX-GAPS-B-27 -  - codes ALL; patterns: `(?s)\b(child[- ]care|day[- ]care|family homes?|child care homes?)\b.{0,200}\b(tenants?|lan` 24; `(?s)\b(home[- ]based business\w*|home occupation\w*)\b.{0,200}\b(tenants?|landlords?|lease` 1; `\bfamily homes?\b` 264; heading screen 15; catchline 14; control 0; positives: HR 42.002 passed, LG 229.902 passed

**`fee-transparency`** (edu-no-fee-transparency-law-tx)
- TX-GAPS-M-06 - all-in pricing / junk fees - codes ALL; patterns: `all-in|total price|junk fee|drip pricing|hidden fee|mandatory fee` 74; `advertis\w*[^.]{0,100}\b(rent|rental|lease|apartment)\b[^.]{0,100}(fee|charge|price)` 1; heading screen 2; catchline 2; control 0; positives: BC 301.052 passed

**`fee-unprovided-service`** (edu-no-fee-unprovided-service-rule-tx)
- TX-GAPS-M-07 - charging for services not provided - codes ALL; patterns: `(goods|services?)[^.]{0,40}not (been )?(provided|rendered|furnished|delivered)|not (provid` 35; `(fee|charge)[^.]{0,80}(service|amenit\w*)[^.]{0,80}not (provided|available|offered)` 6; heading screen 1; catchline 1; control 0; positives: CR 39.01 passed

**`foreclosure-disclosure`** (edu-no-foreclosure-disclosure-tx)
- TX-GAPS-C-02 -  - codes ALL; patterns: `(?s)\bforeclos\w*.{0,250}\b(tenants?|lessees?|applicants?|prospective|renters?)\b|\b(tenan` 28; `(?s)\b(disclos\w*|notif\w*|inform\w*)\b.{0,150}\b(pending|threatened|scheduled|posted)\b.{` 1; `(?s)\bnotice of (default|acceleration|sale|trustee\W?s? sale)\b.{0,250}\b(tenants?|lessees` 3; `(?s)\b(mortgage|deed of trust|loan)\w*.{0,60}\b(default\w*|delinquen\w*)\b.{0,250}\b(tenan` 1; `\blis pendens\b` 32; heading screen 5; catchline 5; control 0; positives: PR 24.005 passed, PR 92.0562 passed, PR 12.007 passed

**`forfeiture-redemption`** (edu-no-forfeiture-relief-tx)
- TX-GAPS-E-13 -  - codes ALL; patterns: `(?s)forfeit\w*[^.]{0,120}\b(?:lease\w*|tenan\w*|leasehold\w*|rental)\b|\b(?:lease\w*|tenan` 66; `relie\w* (?:from|against) (?:a |the )?forfeiture|equitable relief[^.]{0,60}forfeit\w*` 2; `(?s)\b(?:right to cure|cure the default|avoid (?:the )?(?:enforcement|forfeiture))` 29; `(?s)(?:arrear\w*|past[- ]due rent|delinquent rent|rent due)[^.]{0,150}(?:before|prior to)[` 0; heading screen 8; catchline 8; control 0; positives: PR 5.065 passed, PR 5.063 passed

**`guest-rights`** (edu-no-guest-rights-statute-tx)
- TX-GAPS-C-07 -  - codes ALL; patterns: `(?s)\b(guests?|visitors?|invitees?)\b.{0,200}\b(tenants?|lessees?|renters?|residents?)\b|\` 88; `(?s)\b(right|entitled|may not (prohibit|restrict|limit|bar|deny))\b.{0,120}\b(receive|have` 2; `\b(guest|visitor) (fees?|charges?|limits?|polic\w*)\b|\bfees? (for|per) (a |each |any )?(g` 3; `(?s)\b(caregivers?|home health|personal care attendants?|live-in aides?)\b.{0,250}\b(tenan` 4; heading screen 0; catchline 0; control 0; positives: PR 92.026 passed, PR 92.332 passed

**`habitability-statement`** (edu-no-habitability-statement-tx)
- TX-GAPS-C-08 -  - codes ALL; patterns: `(?s)\bleases?\b.{0,200}\b(must|shall)\b.{0,100}\b(state|contain|include|provide|recite)\w*` 0; `\bfit (for|to) (human )?(habitation|live|occupancy)\b|\bhabitable\b|\buninhabitable\b|\bha` 97; `warrant\w* of (habitability|fitness|suitability)|implied warrant\w*` 47; `(?s)\b(covenant|promise|agree|warrant)\w*\b.{0,100}\b(deliver|maintain|keep|furnish)\w*\b.` 0; `(?s)\b(conditions?|defects?)\b.{0,100}\b(deemed|considered|presumed)\b.{0,100}\b(material\` 2; heading screen 17; catchline 17; control 0; positives: PR 92.061 passed, PR 94.151 passed, LG 214.219 passed

**`health-district-rental-rules`** (edu-no-health-district-rental-rules-tx)
- TX-GAPS-C-12 -  - codes ALL; patterns: `(?s)\b(health (districts?|departments?|authority|authorities|officers?|officials?)|public ` 7; `(?s)\bhealth\b.{0,40}\b(regulations?|rules?|codes?|ordinances?)\b.{0,200}\b(lessees?|tenan` 25; `(?s)\bsanitar\w*\b.{0,200}\b(lessees?|tenants?|landlords?|rental|apartments?)\b|\b(lessees` 3; `(?s)\b(on request|upon request|request of (a|the) tenant)\b.{0,150}\b(cop(y|ies)|provide)\` 16; heading screen 0; catchline 0; control 0; positives: LG 214.219 passed, PR 92.0561 passed

**`holdover-rate`** (edu-no-holdover-rate-tx)
- TX-GAPS-C-17 -  - codes ALL; patterns: `\bhold\w*\s*over\b|\bholdover\b` 21; `double (the )?rent|twice the (monthly |daily )?rent|(two|three) times the (monthly |daily ` 6; `(?s)\b(holding over|holdover|holds over|remains? in possession|retains? possession|after t` 7; `\bmesne profits\b|\buse and occupancy\b|\breasonable rental value\b|\bfair rental value\b` 30; `(?s)\bper diem\b.{0,150}\brent` 0; heading screen 1; catchline 1; control 0; positives: PR 24.002 passed, PR 24.008 passed, PR 92.332 passed

**`infirmity-termination`** (edu-no-infirmity-termination-tx)
- TX-GAPS-C-20 -  - codes ALL; patterns: `(?s)\b(terminat\w*|vacate|end)\b.{0,200}\b(leases?|tenancy|rental agreements?)\b.{0,250}\b` 0; `(?s)\b(tenants?|lessees?)\b.{0,200}\b(nursing (homes?|facilit\w*)|assisted living|long-ter` 2; `(?s)\bterminat\w*\b.{0,100}\bleases?\b.{0,300}\b(military|family violence|sexual|stalking|` 9; heading screen 0; catchline 0; control 0; positives: PR 92.016 passed, PR 92.017 passed, PR 92.0162 passed

**`inspection-condemnation-disclosure`** (edu-no-code-order-disclosure-tx)
- TX-GAPS-C-22 -  - codes ALL; patterns: `(?s)\b(disclos\w*|notif\w*|notice|inform\w*)\b.{0,200}\b(code violations?|condemn\w*|subst` 1; `(?s)\b(substandard|dangerous|unsafe)\b.{0,100}\b(buildings?|structures?|dwellings?)\b.{0,2` 3; `(?s)\bcertificates? of occupancy\b.{0,250}\b(tenants?|lessees?|landlords?)\b|\b(tenants?|l` 1; heading screen 1; catchline 1; control 0; positives: LG 214.001 passed, PR 92.023 passed

**`inspection-notice-penalty`** (edu-no-inspection-notice-penalty-tx)
- TX-GAPS-C-23 -  - codes ALL; patterns: `(?s)\b(move-?in|move-?out|walk-?through|pre-?move|initial|final|joint)\b.{0,50}\binspectio` 0; `(?s)\binspect\w*\b.{0,200}\bsecurity deposits?\b|\bsecurity deposits?\b.{0,200}\binspect\w` 0; `(?s)\b(forfeit\w*|double|treble|three times)\b.{0,200}\b(security )?deposits?\b` 27; `(?s)\b(condition|damage|inventory)\b.{0,30}\b(reports?|checklists?|statements?|forms?)\b.{` 1; heading screen 0; catchline 0; control 0; positives: PR 92.109 passed, PR 92.354 FAILED - recorded as failed; see the rerun
- TX-GAPS-C-26 -  - codes ALL; patterns: `(?s)\b(move-?in|move-?out|walk-?through|pre-?move|initial|final|joint)\b.{0,50}\binspectio` 0; `(?s)\binspect\w*\b.{0,200}\bsecurity deposits?\b|\bsecurity deposits?\b.{0,200}\binspect\w` 0; `(?s)\b(forfeit\w*|double|treble|three times)\b.{0,200}\b(security )?deposits?\b` 27; `(?s)\b(condition|damage|inventory)\b.{0,30}\b(reports?|checklists?|statements?|forms?)\b.{` 1; heading screen 0; catchline 0; control 0; positives: PR 92.109 passed, PR 92.107 passed

**`key-control-policy`** (edu-no-key-control-policy-tx)
- TX-GAPS-C-24 -  - codes ALL; patterns: `master keys?|key[- ]control|\bkeys? (log|policy|policies|management)\b` 10; `(?s)\b(keys?|access (devices?|cards?)|key ?cards?|pass ?codes?)\b.{0,200}\b(employees?|sta` 25; `(?s)\b(background checks?|criminal (history|background)\w*)\b.{0,250}\b(employees?|staff|p` 4; heading screen 1; catchline 1; control 0; positives: PR 92.156 passed, PR 92.151 FAILED - recorded as failed; see the rerun
- TX-GAPS-C-27 -  - codes ALL; patterns: `master keys?|key[- ]control|\bkeys? (log|policy|policies|management)\b` 10; `(?s)\b(keys?|access (devices?|cards?)|key ?cards?|pass ?codes?)\b.{0,200}\b(employees?|sta` 25; `(?s)\b(background checks?|criminal (history|background)\w*)\b.{0,250}\b(employees?|staff|p` 4; heading screen 1; catchline 1; control 0; positives: PR 92.156 passed, PR 92.162 passed

**`landlord-liability-insurance`** (edu-no-landlord-insurance-mandate-tx)
- TX-GAPS-D-01 -  - codes ALL; patterns: `(?s)\b(landlords?|lessors?|residential rental|rental propert\w*|rental units?|rental dwell` 33; `liability insurance` 586; `proof of (?:liability )?insurance|certificate of insurance|evidence of insurance` 180; `tenants? insurance|renter\W?s insurance|landlord\W?s insurance` 5; heading screen 73; catchline 110; control 0; positives: PR 92.111 passed, PR 82.111 passed, PR 207.003 passed, IN 2251.002 passed

**`landlord-registration`** (edu-no-landlord-registration-tx)
- TX-GAPS-D-02 -  - codes ALL; patterns: `(?s)\b(regist\w*|licens\w*|permit)\b.{0,100}\b(rental propert\w*|rental housing|rental dwe` 86; `rental registr\w*|registr\w* of rental|landlord registr\w*|rental licens\w*|rental permits` 28; `on-site manager|property manag\w*|management company` 234; `business licens\w*|occupation(?:al)? licens\w* (?:tax|fee)` 41; heading screen 16; catchline 16; control 0; positives: OC 1101.351 passed, HS 754.0141 passed, OC 1101.005 passed, PR 92.201 passed

**`law-enforcement-cooperation`** (edu-no-law-enforcement-cooperation-rule-tx)
- TX-GAPS-D-03 -  - codes ALL; patterns: `crime[- ]free` 0; `(?s)\b(law enforcement|police|peace officers?|sheriffs?|constables?)\b.{0,120}\b(landlords` 12; `(?s)\bcooperat\w*.{0,80}\b(investigat\w*|law enforcement|police)\b|\b(investigat\w*|law en` 155; `(?s)\b(call\w*|summon\w*|contact\w*|request\w*)\b.{0,60}\b(police|law enforcement|emergenc` 173; heading screen 11; catchline 9; control 0; positives: PR 92.015 passed, PR 24.0061 passed
- TX-GAPS-D-04 -  - codes ALL; patterns: `(?s)\b(criminal activit\w*|crimes?|criminal acts?)\b.{0,100}\b(leases?|tenan\w*|rental agr` 7; `(?s)\b(landlords?|owners?|owner's)\b.{0,200}\b(notif\w*|report\w*)\b.{0,60}\b(law enforcem` 4; heading screen 0; catchline 0; control 0; positives: PR 92.332 passed, CP 125.002 passed

**`lead-safe-certification`** (edu-no-lead-safe-certificate-tx)
- TX-GAPS-D-05 -  - codes ALL; patterns: `lead[- ]based paint` 7; `lead[- ]safe|lead[- ]free|lead (?:hazard|inspection|risk assessment|abatement|poisoning)\w` 56; `(?s)\blead\b.{0,80}\b(disclos\w*|pamphlet|notice|certif\w*)\b|\b(disclos\w*|pamphlet|notic` 28; `target housing|child-occupied facilit\w*` 11; heading screen 3; catchline 3; control 0; positives: OC 1955.001 passed, HS 88.008 passed, PR 5.008 passed, OC 1955.051 passed

**`lead-state-notices`** (edu-no-lead-state-notices-tx)
- TX-GAPS-D-05 -  - codes ALL; patterns: `lead[- ]based paint` 7; `lead[- ]safe|lead[- ]free|lead (?:hazard|inspection|risk assessment|abatement|poisoning)\w` 56; `(?s)\blead\b.{0,80}\b(disclos\w*|pamphlet|notice|certif\w*)\b|\b(disclos\w*|pamphlet|notic` 28; `target housing|child-occupied facilit\w*` 11; heading screen 3; catchline 3; control 0; positives: OC 1955.001 passed, HS 88.008 passed, PR 5.008 passed, OC 1955.051 passed

**`lease-notice-initial-requirement`** (edu-no-lease-initials-requirement-tx)
- TX-GAPS-D-07 -  - codes ALL; patterns: `\binitial(?:ed|ing|led|s)\b` 57; `(?s)\b(sign\w*|acknowledg\w*)\b.{0,40}\bseparate\w*\b|\bseparate\w*\b.{0,40}\b(sign\w*|ack` 42; `(?s)\b(underlined|bold\w*|conspicuous\w*|capital\w* letters)\b.{0,80}\b(leases?|rental agr` 21; heading screen 1; catchline 0; control 0; positives: PR 94.053 passed, PR 92.017 passed, PR 92.103 passed

**`lease-registration`** (edu-no-lease-registration-duty-tx)
- TX-GAPS-D-08 -  - codes ALL; patterns: `(?s)memorandum of (?:the )?lease|\brecord\w*\b.{0,60}\bleases?\b|\bleases?\b.{0,60}\b(reco` 34; `(?s)unrecorded (?:lease|instrument|conveyance)s?|\bvoid as to\b.{0,80}\b(purchaser|credito` 9; `(?s)\b(possession|occupancy|in possession)\b.{0,100}\b(notice)\b.{0,100}\b(purchaser|buyer` 1; `land regist\w*|registry of (?:deeds|leases|titles)|title regist\w*|torrens` 1; heading screen 2; catchline 2; control 0; positives: PR 13.001 passed, PR 12.001 FAILED - recorded as failed; see the rerun
- TX-GAPS-D-29 -  - codes ALL; patterns: `(?s)memorandum of (?:the )?lease|\brecord\w*\b.{0,60}\bleases?\b|\bleases?\b.{0,60}\b(reco` 34; `(?s)unrecorded (?:lease|instrument|conveyance)s?|\bvoid as to\b.{0,80}\b(purchaser|credito` 9; `(?s)\b(possession|occupancy|in possession)\b.{0,100}\b(notice)\b.{0,100}\b(purchaser|buyer` 1; `land regist\w*|registry of (?:deeds|leases|titles)|title regist\w*|torrens` 1; heading screen 2; catchline 2; control 0; positives: PR 13.001 passed, PR 82.056 passed

**`lease-term-limitation`** (edu-lease-term-limits-tx)
- TX-GAPS-D-09 -  - codes ALL; patterns: `(?s)\blease\w*\b[^.]{0,120}\b(?:term|period)s? (?:of )?(?:not (?:more|longer) than|no (?:m` 46; `(?s)\bleases?\b.{0,60}\b(?:longer|more) than (?:one|1) years?|\b(?:one|1) years? or (?:mor` 78; `perpetuit\w*` 26; `(?s)\bhomestead\b.{0,100}\b(leases?|rent\w*)\b|\b(leases?|rent\w*)\b.{0,100}\bhomestead\b` 5; heading screen 7; catchline 7; control 0; positives: BC 26.01 passed, LG 281.045 passed, CN 1.26 passed, PR 41.003 passed

**`lease-type-parity`** (edu-no-lease-type-parity-tx)
- TX-GAPS-D-10 -  - codes ALL; patterns: `(?s)\bmonth[- ]to[- ]month\b.{0,200}\b(fixed[- ]term|term lease|lease term|longer term|ter` 2; `(?s)\b(month[- ]to[- ]month|periodic|short[- ]term lease)\w*\b.{0,150}\b(premium|surcharge` 1; `month[- ]to[- ]month|tenancy from month to month|periodic tenanc\w*` 8; heading screen 0; catchline 0; control 0; positives: PR 91.001 passed, PR 94.055 passed

**`lease-type-size`** (edu-no-lease-type-size-tx)
- TX-GAPS-D-11 -  - codes ALL; patterns: `\b\d+[- ]point\b|\b(?:six|eight|ten|eleven|twelve|fourteen)[- ]point\b|point (?:type|font)` 196; `\b(small print|fine print|legibl\w*|readab\w*)\b` 292; `(?s)\b(type|print|font)\b.{0,80}\b(leases?|rental agreements?)\b|\b(leases?|rental agreeme` 30; heading screen 5; catchline 5; control 0; positives: PR 94.051 passed, PR 94.053 passed, PR 92.103 passed

**`liquidated-damages`** (edu-no-liquidated-damages-rule-tx)
- TX-GAPS-M-04 - penalty / liquidated damages (general contract law) - codes ALL; patterns: `liquidated damages|liquidation of damages` 32; `penalt\w*[^.]{0,60}(imposed by|in|under) (a |the )?(contract|agreement|lease)|unenforceabl` 9; `(damages|amount)[^.]{0,60}(fixed|determined|agreed) in (advance|anticipation)|in anticipat` 1; heading screen 4; catchline 4; control 0; positives: BC 2A.504 passed

**`meter-conservation-charge`** (edu-no-meter-conservation-charge-tx)
- TX-GAPS-D-14 -  - codes ALL; patterns: `conservation charges?|meter (?:conservation|charges?|fees?|surcharges?)\b` 0; `on-bill|energy[- ]efficiency (?:charges?|surcharges?|improvement\w*|loans?|financing)` 10; `(?s)\b(tenants?|lessees?)\b.{0,150}\b(energy efficien\w*|qualified improvement)\b|\b(energ` 0; `(?s)\bsubmeter\w*\b.{0,150}\b(surcharge|service charge|markup|mark-up|cost per gallon)\b|\` 1; heading screen 0; catchline 0; control 0; positives: LG 376.001 passed, WA 13.503 passed

**`military-air-zone-disclosure`** (edu-no-military-zone-disclosure-tx)
- TX-GAPS-D-15 -  - codes ALL; patterns: `military installation|military base|air installation|compatible use|joint land use|acciden` 299; `(?s)\b(military installation|military base|air installation|airports?)\b.{0,150}\b(leases?` 26; `(?s)\b(noise|overflights?|aircraft)\b.{0,100}\b(disclos\w*|notice)\b|\b(disclos\w*|notice)` 14; heading screen 21; catchline 21; control 0; positives: PR 5.008 passed, LG 397.007 passed

**`nonrefundable-deposit-separate-notice`** (edu-no-nonrefundable-separate-notice-tx)
- TX-GAPS-D-18 -  - codes ALL; patterns: `(?s)\b(fees?|deposits?|charges?)\b.{0,150}\bseparate (?:written )?(?:documents?|notices?|w` 7; `(?s)\bseparately (?:signed|initialed|acknowledged)\b|\bsigned separately\b` 6; heading screen 0; catchline 0; control 0; positives: PR 92.006 FAILED, PR 92.0135 FAILED - recorded as failed; see the rerun
- TX-GAPS-D-27 -  - codes ALL; patterns: `(?s)\b(fees?|deposits?|charges?)\b.{0,150}\bseparate (?:written )?(?:documents?|notices?|w` 7; `(?s)\bseparately (?:signed|initialed|acknowledged)\b|\bsigned separately\b` 6; heading screen 0; catchline 0; control 0; positives: FI 345.208 passed, BC 2.205 passed
- TX-GAPS-D-26 -  - codes ALL; patterns: `non-?refundable|not (?:be )?refundable|will not be refunded` 188; `however (?:denominated|designated|described|labell?ed|called)` 9; `(?s)\b(pet|cleaning|redecorat\w*|move[- ]in|administrative|amenity|reservation|holding)\b ` 212; `(?s)\bsecurity deposit\W{0,3}\s*(?:is|means)\b` 12; heading screen 17; catchline 17; control 0; positives: PR 92.111 passed, PR 92.3515 passed, PR 92.102 passed

**`nonresident-owner-agent`** (edu-no-nonresident-owner-agent-tx)
- TX-GAPS-D-19 -  - codes ALL; patterns: `(?s)\b(nonresidents?|non-residents?|out[- ]of[- ]state|resides? outside (?:this|the) state` 15; `agents? for service|registered agents?|resident agents?|local agents?` 431; `(?s)\bwithh(?:o|e)ld\w*\b.{0,60}\b(rent|rental income)\b` 10; heading screen 50; catchline 50; control 0; positives: PR 92.003 passed, CP 17.044 passed, CP 17.003 passed

**`notice-service-fee`** (edu-no-notice-service-fee-tx)
- TX-GAPS-M-05 - fee for notice / eviction filing charged to tenant - codes ALL; patterns: `(fee|charge)[^.]{0,80}(notice to vacate|eviction|forcible detainer|notice to pay rent)|(no` 1; heading screen 0; catchline 0; control 0; positives: PR 24.0061 FAILED - recorded as failed; see the rerun
- TX-GAPS-M-19 - fee for notice / eviction filing charged to tenant (rerun of M-05, positive corrected) - codes ALL; patterns: `(fee|charge)[^.]{0,80}(notice to vacate|eviction|forcible detainer|notice to pay rent)|(no` 1; heading screen 0; catchline 0; control 0; positives: PR 24.006 passed
- TX-GAPS-M-04 - penalty / liquidated damages (general contract law) - codes ALL; patterns: `liquidated damages|liquidation of damages` 32; `penalt\w*[^.]{0,60}(imposed by|in|under) (a |the )?(contract|agreement|lease)|unenforceabl` 9; `(damages|amount)[^.]{0,60}(fixed|determined|agreed) in (advance|anticipation)|in anticipat` 1; heading screen 4; catchline 4; control 0; positives: BC 2A.504 passed

**`ordnance-demolition-meter-disclosures`** (edu-no-ordnance-demolition-meter-disclosure-tx)
- TX-GAPS-D-21 -  - codes ALL; patterns: `ordnance|munitions|unexploded|explosive remnants` 7; `(?s)\bdemoli\w*\b.{0,120}\b(tenants?|leases?|lessees?|occupants?)\b|\b(tenants?|leases?|le` 13; `(?s)master[- ]meter\w*|(?:shared|common) meters?|\bmeters?\b.{0,80}\b(serv\w* (?:more than` 52; heading screen 3; catchline 3; control 0; positives: PR 92.055 passed, WA 13.501 passed, GV 437.004 passed

**`pet-eviction-fact-sheet`** (edu-no-pet-eviction-fact-sheet-tx)
- TX-GAPS-F-05 -  - codes ALL; patterns: `fact sheets?|information sheets?|informational (?:sheet|pamphlet|brochure)s?` 39; `(?:pets?|dogs?|cats?|animals?)\b[^.]{0,150}(?:evict\w*|writ of possession|notice to vacate` 0; `\b(?:pets?|dogs?|cats?)\b[^.]{0,150}(?:tenant|lease\b|landlord|lessee)|(?:tenant|landlord|` 4; `animals?\b[^.]{0,100}(?:abandon\w*|left behind|remain\w*)[^.]{0,100}(?:premises|dwelling|u` 1; heading screen 2; catchline 2; control 0; positives: LG 392.0555 passed

**`plain-language-consumer-statement`** (edu-no-plain-language-consumer-statement-tx)
- TX-GAPS-F-06 -  - codes ALL; patterns: `plain language|plain[- ]English` 101; `readab\w*|Flesch` 112; `consumer restrictions?|statement of (?:the )?(?:consumer\W?s? )?(?:rights and )?restrictio` 2; `attorney general[^.]{0,150}(?:approv\w*|certif\w*|review\w*)[^.]{0,80}(?:lease|contract|fo` 106; `(?:lease|rental agreement)[^.]{0,120}(?:clear and (?:understandable|conspicuous)|easily un` 1; heading screen 10; catchline 8; control 0; positives: BC 92.051 passed

**`political-access`** (edu-no-political-access-rule-tx)
- TX-GAPS-F-07 -  - codes ALL; patterns: `canvass\w*[^.]{0,150}(?:apartment|tenant|dwelling|multi-?(?:unit|family)|door|residen\w*)|` 13; `(?:candidate|campaign\w*|political|electioneering|voter registration)[^.]{0,150}(?:tenant|` 67; `political (?:advertising )?signs?|signs? advertising a candidate` 14; `door[- ]to[- ]door|distribut\w*[^.]{0,30}(?:literature|leaflets?|handbills?|pamphlets?)` 17; `tenant (?:organization|association|union)s?|tenants\W? (?:organization|association|union)s` 5; heading screen 4; catchline 4; control 0; positives: PR 202.013 passed, EL 259.002 passed, PR 92.331 passed

**`portable-cooling-device`** (edu-no-portable-cooling-rule-tx)
- TX-GAPS-F-08 -  - codes ALL; patterns: `(?:window|portable|room)[^.]{0,30}(?:air[- ]condition\w*|cooling (?:unit|device)s?|air[- ]` 2; `air[- ]condition\w*[^.]{0,150}(?:tenant|landlord|lease\b|dwelling|rental|lessee)|(?:tenant` 2; `cool(?:ing|ed)\b[^.]{0,150}(?:tenant|landlord|lease\b|dwelling|rental|lessee)|(?:tenant|la` 3; `install\w*[^.]{0,80}(?:air[- ]condition\w*|cooling|fans?\b)[^.]{0,80}(?:window|tenant|unit` 0; heading screen 0; catchline 0; control 0; positives: PR 92.0561 passed

**`portable-solar`** (edu-no-portable-solar-right-tx)
- TX-GAPS-F-09 -  - codes ALL; patterns: `solar[^.]{0,200}(?:tenant|lease\b|landlord|lessee|renter|rental)|(?:tenant|landlord|lessee` 11; `(?:plug-in|portable|balcony)[^.]{0,40}(?:solar|photovoltaic|generat\w*|batter\w*)` 5; `distributed (?:renewable )?generation[^.]{0,200}(?:tenant|lease\b|landlord|renter|resident` 0; `solar energy devices?|solar (?:energy )?(?:systems?|panels?|collectors?)` 70; heading screen 5; catchline 5; control 0; positives: PR 202.010 passed

**`private-well-testing`** (edu-no-private-well-testing-tx)
- TX-GAPS-F-10 -  - codes ALL; patterns: `(?:private|water|domestic|drinking water) wells?[^.]{0,200}(?:tenant|lease\b|landlord|rent` 6; `well water|private water (?:system|supply|well)s?` 12; `water[^.]{0,40}(?:test\w*|sampl\w*|analys\w*)[^.]{0,150}(?:tenant|landlord|lease\b|rental|` 1; heading screen 0; catchline 0; control 0; positives: LG 211.053 passed

**`promises-to-repair`** (edu-no-promises-to-repair-rule-tx)
- TX-GAPS-F-12 -  - codes ALL; patterns: `(?:promis\w*|agree\w*|represent\w*)[^.]{0,80}\bto (?:repair|clean|improve|redecorate|paint` 2; `(?:repairs?|improvements?|cleaning)[^.]{0,120}(?:completion date|date (?:of|for) completio` 4; `(?:repairs?|improvements?)[^.]{0,80}(?:before|prior to)[^.]{0,60}(?:occupancy|the lease|th` 3; `(?:need for|necessity of)[^.]{0,40}(?:repair|replacement)|work or services[^.]{0,60}(?:per` 10; heading screen 0; catchline 0; control 0; positives: PR 92.0561 passed, BC 17.46 passed

**`prop65-rental-warning`** (edu-no-chemical-warning-rule-tx)
- TX-GAPS-F-13 -  - codes ALL; patterns: `carcinogen\w*|known to (?:the state )?(?:to )?cause cancer` 3; `reproductive (?:toxicity|toxicant|harm)s?|birth defects?` 34; `warnings?\b[^.]{0,150}(?:tenant|lease\b|landlord|lessee|rental (?:property|unit|housing|dw` 10; `Proposition 65|Prop\.? 65|Safe Drinking Water and Toxic Enforcement` 0; `(?:hazardous|toxic) (?:substance|chemical)s?[^.]{0,150}(?:tenant|landlord|lessee|residenti` 0; heading screen 0; catchline 0; control 0; positives: HS 503.001 passed

**`property-tax-rent-disclosure`** (edu-no-property-tax-rent-statement-tx)
- TX-GAPS-F-14 -  - codes ALL; patterns: `(?:property|ad valorem) tax\w*[^.]{0,150}(?:\brent\b|\brents\b|rental|tenant|lessee)|(?:\b` 16; `(?:portion|share|part|percent\w*)[^.]{0,40}\brent\w*[^.]{0,60}(?:property|ad valorem|real ` 0; `certificates? of rent paid|renter\W?s\W? (?:credit|rebate|refund|tax credit)|rent (?:rebat` 0; `(?:landlord|lessor|owner)[^.]{0,100}(?:statement|disclos\w*|notif\w*)[^.]{0,100}(?:taxes|t` 0; heading screen 0; catchline 0; control 0; positives: GV 496.003 passed

**`protected-class-inquiry-ban`** (edu-no-protected-class-inquiry-ban-tx)
- TX-GAPS-F-15 -  - codes ALL; patterns: `(?:inquir\w*|ask\w*|question\w*)[^.]{0,150}(?:race|color|religion|sex|familial status|nati` 22; `(?:record|retain|maintain|keep)\w*[^.]{0,100}(?:race|religion|national origin|disabilit\w*` 0; `preference, limitation, or discrimination` 2; `(?:applicant|tenant|renter|prospective (?:tenant|renter|buyer))s?\b[^.]{0,150}(?:race|reli` 96; heading screen 3; catchline 3; control 0; positives: PR 301.022 passed

**`purpose-limitation`** (edu-no-purpose-limitation-tx)
- TX-GAPS-F-16 -  - codes ALL; patterns: `lease[^.]{0,150}(?:void|voidable|forfeit\w*|annul\w*|terminat\w*)[^.]{0,150}(?:nuisance|pr` 1; `(?:used|use|using)[^.]{0,30}(?:for|as)[^.]{0,30}(?:an? )?(?:unlawful|illegal|immoral) purp` 1; `common nuisance[^.]{0,200}(?:lease\b|tenant|lessee|landlord)|(?:lease\b|tenant|lessee|land` 2; `(?:terminat\w*|cancel\w*|evict\w*)[^.]{0,120}(?:tenant|lessee)[^.]{0,120}(?:convict\w*|cri` 0; heading screen 0; catchline 0; control 0; positives: PR 93.013 passed
- TX-GAPS-F-26 -  - codes ALL; patterns: `right of possession terminates|possession reverts to the landlord` 2; `lease[^.]{0,200}(?:is|becomes|shall be) void\b|\bvoid[^.]{0,60}\blease\b` 23; `terminat\w*[^.]{0,250}(?:convict\w*|prostitution|gambl\w*|controlled substance|nuisance)` 37; `(?:unlawful|illegal|immoral|criminal) (?:use|purpose|activit\w*)[^.]{0,200}(?:lease\b|tena` 7; heading screen 3; catchline 3; control 0; positives: PR 91.003 passed, PR 93.013 passed

**`recycling-notice`** (edu-no-recycling-notice-tx)
- TX-GAPS-F-17 -  - codes ALL; patterns: `recycl\w*[^.]{0,200}(?:tenant|apartment|multifamily|multi-family|landlord|dwelling units?|` 0; `recycl\w*[^.]{0,100}(?:notice|notif\w*|inform\w*|educat\w*)[^.]{0,100}(?:resident\w*|occup` 0; `(?:solid waste|garbage|trash|refuse)[^.]{0,150}(?:tenant|apartment|multifamily|multi-famil` 12; `recycl\w*` 811; heading screen 35; catchline 36; control 0; positives: HS 361.003 passed

**`redemption`** (edu-no-redemption-tx)
- TX-GAPS-E-12 -  - codes ALL; patterns: `(?s)(?:\bredeem\w*|\bredemption\b)[^.]{0,150}(?:tenan\w*|lease\b|possession|evict\w*|forci` 46; `(?s)reinstat\w*[^.]{0,100}(?:tenancy|lease\b|tenant\w*)|(?:tenancy|lease\b)[^.]{0,100}rein` 15; `(?s)(?:pay\w*|tender\w*)[^.]{0,100}(?:before|prior to)[^.]{0,60}(?:writ of possession|exec` 0; `(?s)(?:charit\w*|nonprofit|rental assistance|third[- ]party)[^.]{0,120}(?:\brent\b|tenant\` 9; heading screen 2; catchline 2; control 0; positives: PR 24.0062 passed, PR 209.011 passed

**`religious-cultural-display`** (edu-no-religious-display-rule-tx)
- TX-GAPS-F-18 -  - codes ALL; patterns: `religious[^.]{0,150}(?:display\w*|items?|symbols?|objects?|decorations?|apparel)|display\w` 13; `mezuzah|menorah|crucifix|nativity|rosary` 2; `display\w*[^.]{0,150}(?:tenant|lease\b|landlord|lessee)|(?:tenant|landlord|lessee)[^.]{0,1` 14; `(?:cultural|ethnic|holiday)[^.]{0,60}(?:display\w*|decorations?|symbols?)` 1; heading screen 1; catchline 1; control 0; positives: PR 202.018 passed

**`rent-demand-bar`** (edu-no-rent-demand-bar-tx)
- TX-GAPS-E-11 -  - codes ALL; patterns: `(?s)(?:may not|shall not|is not entitled to|not entitled to)[^.]{0,40}(?:demand|collect|ch` 2; `(?s)\brent\w*\b[^.]{0,100}(?:withh[eo]ld\w*|suspend\w*|abat\w*|reduc\w*|deduct\w*)|(?:with` 88; `(?s)(?:substandard|uninhabit\w*|unfit for|code violation\w*|housing code|building code)[^.` 0; `(?s)(?:certificate of occupancy|unregistered|unlicensed|registration)[^.]{0,120}\brent\w*\` 4; heading screen 6; catchline 6; control 0; positives: PR 92.0563 passed, PR 92.0561 passed

**`rent-receipt-anti-waiver`** (edu-no-rent-receipt-anti-waiver-tx)
- TX-GAPS-M-12 - rent receipt split from repair duty - codes ALL; patterns: `(receiv|collect)\w* (the )?rent[^.]{0,200}(repair|duty|obligation)|(repair|duty|obligation` 5; `rent is normally paid` 4; `rent collector` 5; heading screen 0; catchline 0; control 0; positives: PR 92.052 passed, PR 92.003 passed

**`renters-insurance-rules`** (edu-no-renters-insurance-rules-tx)
- TX-GAPS-F-25 -  - codes ALL; patterns: `renter\W?s\W? insurance|tenant\W?s\W? insurance|tenant insurance|renters insurance|tenants` 5; `(?:liability|property|contents|personal property|hazard) insurance[^.]{0,150}(?:tenant|les` 6; `requir\w*[^.]{0,80}(?:tenant|lessee|renter)[^.]{0,80}(?:insurance|insured|coverage)|(?:ten` 0; `force[- ]placed|lender[- ]placed|(?:landlord|lessor)[^.]{0,60}(?:purchase|procure|obtain)\` 0; heading screen 0; catchline 0; control 0; positives: PR 92.0135 passed

**`repair-cost-termination`** (edu-no-repair-cost-termination-tx)
- TX-GAPS-F-02 -  - codes ALL; patterns: `cost\w*[^.]{0,60}(?:repair\w*|remed\w*)[^.]{0,120}(?:exceed\w*|unreasonabl\w*|disproportio` 5; `(?:terminat\w*|clos\w*)[^.]{0,120}(?:in lieu of|instead of|rather than)[^.]{0,60}repair\w*` 0; `clos\w* (?:the|a) rental (?:unit|premises)|uneconomic\w*|economically (?:feasible|unfeasib` 62; `(?:demolish\w*|no longer use)[^.]{0,120}(?:rental unit|residential purposes|dwelling)` 1; heading screen 2; catchline 2; control 0; positives: PR 92.055 passed

**`repair-escrow-exemption-notice`** (edu-no-repair-escrow-exemption-tx)
- TX-GAPS-F-03 -  - codes ALL; patterns: `(?:rent|rental) escrow|escrow\w*[^.]{0,80}\brent\b|\brent\b[^.]{0,80}escrow\w*` 0; `(?:pay|deposit)\w*[^.]{0,40}\brent\b[^.]{0,80}(?:registry|clerk of (?:the )?court)` 5; `(?:one|two|three|four|five|\d+) or fewer (?:dwelling |rental |residential )?units|owns? on` 9; `(?:exempt\w*|do(?:es)? not apply)[^.]{0,120}landlord[^.]{0,80}(?:units?|dwellings?)[^.]{0,` 0; heading screen 0; catchline 0; control 0; positives: PR 92.006 passed, PR 24.0053 passed

**`sanitary-code-variance`** (edu-no-code-variance-notice-tx)
- TX-GAPS-G-05 -  - codes ALL; patterns: `(?s)\bvarian\w*[^.]{0,150}(?:housing|dwelling|rental|tenan\w*|lease|sanitar\w*)|(?:housing` 1; `sanitary code|sanitation code|state housing code` 2; `(?s)(?:health|housing|sanitar\w*|building) codes?[^.]{0,150}(?:waive\w*|waiver|exempt\w*|v` 1; heading screen 0; catchline 0; control 0; positives: GV 511.009 passed

**`seasonal-tenancy`** (edu-no-seasonal-tenancy-rule-tx)
- TX-GAPS-G-07 -  - codes ALL; patterns: `(?s)\bseasonal\w*[^.]{0,120}(?:lease|tenan\w*|rent\w*|dwelling|housing|occup\w*|living qua` 10; `short-term rental|vacation rental` 6; `(?s)\b(?:summer|winter|school year)[^.]{0,60}(?:lease|tenan\w*|rental)` 6; heading screen 1; catchline 1; control 0; positives: GV 2306.921 passed, TX 156.001 passed

**`security-deposit-interest`** (edu-no-security-deposit-interest-tx)
- TX-GAPS-G-09 -  - codes ALL; patterns: `(?s)interest (?:on|earned on|accru\w* on) (?:a |the |any )?(?:customer\W{0,2}s? |tenant\W{` 25; `(?s)security deposits?[^.]{0,150}\binterest\b|\binterest\b[^.]{0,150}security deposits?` 8; `(?s)(?:tenant|lessee|renter)\W{0,2}s? deposits?[^.]{0,150}\binterest\b` 0; heading screen 4; catchline 4; control 0; positives: PR 53.161 passed

**`security-deposit-standards`** (edu-no-security-deposit-standards-tx)
- TX-GAPS-G-12 -  - codes ALL; patterns: `(?s)(?:standards?|criteria|polic(?:y|ies)|schedule)[^.]{0,120}security deposits?|security ` 1; `selection criteria` 72; `(?s)(?:amount|calculat\w*) of (?:any |the )?(?:security )?deposits?` 47; `(?s)(?:post|posted|display\w*)[^.]{0,100}(?:deposit|criteria)` 40; heading screen 4; catchline 4; control 0; positives: PR 92.3515 passed, PR 94.053 passed

**`senior-housing-work-card`** (edu-no-senior-housing-work-card-tx)
- TX-GAPS-G-13 -  - codes ALL; patterns: `work (?:card|permit)s?` 2; `(?s)housing for (?:older persons|the elderly|elderly)|senior (?:housing|apartment\w*|livin` 39; `(?s)(?:employee|staff|worker|applicant)s?[^.]{0,150}(?:criminal history|background check)[` 0; `(?s)(?:55|fifty-five|62|sixty-two) years (?:of age )?(?:or|and) older[^.]{0,150}(?:housing` 5; `residential dwelling project` 12; heading screen 3; catchline 4; control 0; positives: PR 301.043 passed, HS 765.002 passed

**`sfr-occupancy-disclosure`** (edu-no-sfr-occupancy-disclosure-tx)
- TX-GAPS-G-18 -  - codes ALL; patterns: `(?s)notar\w*.{0,150}(?:lease|rental agreement|tenan\w*)|(?:lease|rental agreement|tenan\w*` 6; `(?s)(?:\d+|ten|twelve|fourteen|twenty-four)-point.{0,200}(?:lease|tenan\w*|rental)|(?:leas` 9; `(?s)presum\w*.{0,120}(?:lawful(?:ly)? occup\w*|unlawful(?:ly)? occup\w*|not (?:a )?tenant)` 0; `(?s)top of the first page|first page of the (?:lease|rental agreement)` 4; heading screen 0; catchline 0; control 0; positives: PR 94.051 passed, PR 24.0052 passed

**`shoreline-access-disclosure`** (edu-no-shoreline-disclosure-tx)
- TX-GAPS-G-19 -  - codes ALL; patterns: `(?s)(?:public beach|open beaches?|shoreline|coastal area|tidally influenced|vegetation lin` 19; `(?s)(?:beach|coastal|shoreline)[^.]{0,100}(?:disclos\w*|notice)` 10; heading screen 0; catchline 0; control 0; positives: NR 61.025 passed, NR 33.135 passed

**`showing-notice-waiver`** (edu-no-showing-notice-waiver-tx)
- TX-GAPS-M-02 - entry notice / showings - codes ALL; patterns: `(enter|entry)[^.]{0,80}(dwelling|premises|rental unit|residence|apartment)[^.]{0,120}notic` 15; `prospective (tenant|purchaser|buyer|lessee)s?[^.]{0,120}(show|enter|entry|access)|(show|en` 9; `landlord.{0,20}right of entry|right to enter` 19; heading screen 5; catchline 6; control 0; positives: PR 94.004 passed
- TX-GAPS-M-26 - entry notice / showings (rerun of M-02 with dot-matches-newline) - codes ALL; patterns: `(enter|entry)[^.]{0,80}(dwelling|premises|rental unit|residence|apartment)[^.]{0,120}notic` 15; `(?s)prospective (tenant|purchaser|buyer|lessee)s?.{0,120}(show|enter|entry)` 6; `(?s)landlord.{0,20}right of entry|right to enter` 19; heading screen 5; catchline 6; control 0; positives: PR 94.004 passed

**`shutdown-rent-protection`** (edu-no-shutdown-rent-protection-tx)
- TX-GAPS-G-20 -  - codes ALL; patterns: `(?s)(?:government|federal) (?:shutdown|furlough)|(?:shutdown|furlough\w*|lapse in appropri` 7; `(?s)(?:federal|state) (?:government )?(?:employees?|workers?)[^.]{0,150}(?:\brent\b|evict\` 2; `(?s)(?:delay\w*|late|interrupt\w*) (?:in )?(?:pay|wages|salary|paycheck)[^.]{0,150}(?:rent` 3; heading screen 1; catchline 1; control 0; positives: GV 659.016 passed

**`single-family-zone-lease-limit`** (edu-no-single-family-zone-lease-limit-tx)
- TX-GAPS-G-21 -  - codes ALL; patterns: `(?s)owner[- ]occup\w*` 9; `(?s)single[- ]family[^.]{0,150}(?:zon\w*|district)[^.]{0,150}(?:lease|rent\w*|tenan\w*|occ` 0; `(?s)(?:prohibit|restrict|limit)\w*[^.]{0,100}(?:leasing|rental|renting)[^.]{0,100}(?:home|` 12; `(?s)(?:zoning|zone)[^.]{0,150}(?:rental|leasing|\blease)\b` 10; `(?s)restriction relating to (?:occupancy or )?leasing|leasing restrictions?` 1; heading screen 0; catchline 0; control 0; positives: LG 214.003 passed, PR 209.016 passed

**`smart-access`** (edu-no-smart-access-law-tx)
- TX-GAPS-G-22 -  - codes ALL; patterns: `(?s)(?:smart|electronic|keypad|app-based|digital|biometric|wireless|remote)[- ]?(?:locks?|` 67; `biometric (?:identifier|data|information)s?` 52; `(?s)security devices?[^.]{0,150}(?:electronic|card|combination|code)` 5; `(?s)key ?cards?|key fobs?|access codes?|entry codes?` 14; heading screen 11; catchline 10; control 0; positives: BC 503.001 passed, PR 92.156 passed

**`smoke-drift-waiver`** (edu-no-smoke-drift-rule-tx)
- TX-GAPS-M-03 - smoke drift / smoke-free housing - codes ALL; patterns: `smok\w*[^.]{0,100}(common area|hallway|apartment|multifamily|multiunit|dwelling|residentia` 25; `secondhand smoke|second-hand smoke|environmental tobacco smoke|smoke-free|smoke free|tobac` 0; `smoking (is )?prohibited|prohibit\w* smoking` 4; heading screen 0; catchline 0; control 0; positives: PE 48.01 passed

**`social-security-defense`** (edu-no-benefit-delay-defense-tx)
- TX-GAPS-E-10 -  - codes ALL; patterns: `social security` 748; `(?s)(?:benefit\w*|public assistance|housing assistance|voucher\w*|subsid\w*|government age` 5; `(?s)government agency[^.]{0,120}\brent\b|\brent\b[^.]{0,120}government agency` 6; `housing choice voucher|section 8\b|federal housing assistance` 317; heading screen 20; catchline 21; control 0; positives: PR 24.0053 passed, PR 24.0054 passed, CP 30.014 passed

**`special-district-representation`** (edu-no-special-district-statement-tx)
- TX-GAPS-G-23 -  - codes ALL; patterns: `(?s)(?:special|taxing|utility|improvement|water|municipal utility) districts?.{0,200}(?:le` 29; `notice to purchasers?` 17; `(?s)(?:district|assessment)s?[^.]{0,200}(?:disclos\w*|notice)[^.]{0,200}(?:lessee|tenan\w*` 5; heading screen 8; catchline 8; control 0; positives: WA 49.452 passed

**`sprinkler-disclosure`** (edu-no-sprinkler-disclosure-tx)
- TX-GAPS-G-24 -  - codes ALL; patterns: `(?s)sprinkler.{0,150}(?:disclos\w*|notice|notif\w*|lease|tenan\w*|rental)|(?:disclos\w*|no` 12; `(?s)fire (?:protection|suppression) (?:systems?|sprinklers?).{0,150}(?:disclos\w*|notice|l` 6; heading screen 0; catchline 0; control 0; positives: IN 6003.002 passed

**`steam-radiator-covers`** (edu-no-steam-radiator-covers-tx)
- TX-GAPS-H-01 -  - codes ALL; patterns: `radiator\w*` 1; `steam[- ]heat\w*` 4; `(?s)(?:heating|hot)[- ](?:pipes?|surfaces?|elements?|risers?)[^.]{0,80}(?:covers?|guards?|` 0; heading screen 0; catchline 0; control 0; positives: HS 361.2755 passed, HS 755.001 passed

**`stove-refrigerator`** (edu-no-stove-refrigerator-rule-tx)
- TX-GAPS-H-03 -  - codes ALL; patterns: `refrigerat\w*` 155; `\bstoves?\b|cooking (?:ranges?|appliances?|facilit\w*|equipment)` 12; `(?s)kitchen\w*[^.]{0,100}(?:\btenants?\b|landlord|\blease\b|\blessee|rental|apartment)|(?:` 1; heading screen 4; catchline 4; control 0; positives: HS 343.011 passed, BC 121.002 passed

**`student-housing`** (edu-no-student-housing-rule-tx)
- TX-GAPS-H-04 -  - codes ALL; patterns: `(?s)\bstudents?\b[^.]{0,80}(?:\blease\b|\btenants?\b|landlord|apartment|off[- ]campus|rent` 9; `dormitor\w*|residence halls?|student housing` 63; `(?s)off[- ]campus[^.]{0,100}(?:housing|residen\w*)` 1; heading screen 7; catchline 8; control 0; positives: ED 107.61 passed

**`subsidized-inspection-refusal`** (edu-no-subsidized-inspection-refusal-rule-tx)
- TX-GAPS-H-05 -  - codes ALL; patterns: `(?s)(?:refus\w*|den(?:y|ies|ied)|fail\w*)[^.]{0,80}(?:access|entry|admi\w*|permi\w*)[^.]{0` 55; `housing quality standards?` 0; `(?s)inspect\w*[^.]{0,120}(?:assisted|subsidized|voucher|section 8|housing choice)|(?:assis` 29; heading screen 5; catchline 5; control 0; positives: HS 483.050 passed

**`subsidy-habitability-proration`** (edu-subsidy-habitability-proration-tx)
- TX-GAPS-H-06 -  - codes ALL; patterns: `housing assistance payments?|\bassistance payments?` 35; `(?s)(?:tenant|family|household)\W{0,2}s? (?:share|portion) of (?:the )?(?:total )?(?:month` 3; `(?s)\babat\w*[^.]{0,100}(?:\brent\b|rental|payments?)` 3; `(?s)late (?:fees?|charges?|payments?)[^.]{0,200}(?:subsidi\w*|assisted|assistance|voucher|` 1; `(?s)\brent\w*[^.]{0,60}subsidized|subsidized[^.]{0,60}\brent` 8; heading screen 0; catchline 0; control 0; positives: PR 92.333 passed, LG 303.0425 passed

**`tenant-bankruptcy`** (edu-tenant-bankruptcy-tx)
- TX-GAPS-H-10 -  - codes ALL; patterns: `(?s)bankrupt\w*[^.]{0,150}(?:\btenants?\b|\blease\b|\blessee|evict\w*|landlord|rental|forc` 3; `automatic stay` 2; heading screen 0; catchline 0; control 0; positives: PR 92.103 passed

**`tenant-display-rights`** (edu-no-tenant-display-rights-tx)
- TX-GAPS-H-12 -  - codes ALL; patterns: `(?s)\bflags?\b[^.]{0,150}(?:\btenants?\b|landlord|\blease\b|resident|apartment)|(?:\btenan` 1; `(?s)(?:display|post|affix)\w*[^.]{0,100}(?:signs?|banners?|decorations?|religious items?)[` 5; `(?s)\bflags?\b[^.]{0,80}display\w*|display\w*[^.]{0,80}\bflags?\b` 76; heading screen 9; catchline 10; control 0; positives: PR 202.012 passed, PR 202.018 passed

**`tenant-insurance-claims`** (edu-no-tenant-insurance-claims-rule-tx)
- TX-GAPS-H-14 -  - codes ALL; patterns: `(?s)(?:tenant|renter|lessee|resident)\W{0,2}s? (?:insurance|insurer|policy|policies)` 11; `(?s)(?:claim|file)\w*[^.]{0,120}(?:renter|tenant|lessee)\W{0,2}s? (?:insurance|policy|insu` 0; `renters?\W{0,2}s? insurance|tenant insurance` 1; heading screen 0; catchline 0; control 0; positives: PR 92.0135 passed

**`tpa-exemption-notice`** (edu-no-tpa-exemption-notice-tx)
- TX-GAPS-H-21 -  - codes ALL; patterns: `(?s)opportunity to purchase|right to (?:purchase|buy)[^.]{0,100}(?:\btenants?\b|building|d` 4; `(?s)right of first (?:refusal|offer)[^.]{0,200}(?:\btenants?\b|residents?)|(?:\btenants?\b` 7; `(?s)(?:intent|offer|decision) to sell[^.]{0,200}(?:\btenants?\b|residents?)|(?:notify|noti` 5; `(?s)(?:exempt\w*|exclu\w*)[^.]{0,150}(?:opportunity to purchase|right of first refusal)` 3; heading screen 1; catchline 1; control 0; positives: GV 2306.6726 passed, PR 12.020 passed

**`tpa-sunset`** (edu-no-tpa-sunset-tx)
- TX-GAPS-J-01 - tpa-sunset: dated repeal or expiry of tenancy law - codes ALL; patterns: `\bsunset\w*` 315; `(?s)this (section|chapter|subchapter|article) expires` 347; `(?s)(section|chapter|subchapter) (is repealed|expires) (on|effective)` 119; `(?s)(landlord|tenant|lease|tenancy|dwelling)\w*[^.]{0,150}\b(expires on|is repealed effect` 2; heading screen 121; catchline 131; control 0; positives: AG 11.003 passed, PR 70.405 passed

**`truth-in-renting`** (edu-no-truth-in-renting-tx)
- TX-GAPS-J-03 - truth-in-renting: state statement of rights / clauses misstating rights - codes ALL; patterns: `truth.in.(renting|leasing|lending)` 26; `(?s)statement of (the )?(rights|responsibilities)[^.]{0,150}(tenant|landlord|lessee|reside` 2; `(?s)(tenant|renter|resident|landlord)s?.? rights[^.]{0,100}(statement|guide|booklet|pamphl` 0; `(?s)(lease|rental agreement)[^.]{0,150}(violates|in violation of|contrary to)[^.]{0,60}(ri` 3; heading screen 0; catchline 0; control 0; positives: HS 242.501 passed

**`unbundled-parking`** (edu-no-unbundled-parking-rule-tx)
- TX-GAPS-J-04 - unbundled-parking: parking priced separately from rent - codes ALL; patterns: `unbundl\w*` 53; `(?s)parking[^.]{0,150}(separate\w*|apart from|in addition to)[^.]{0,60}(rent|lease)` 0; `(?s)(rent|lease)\w*[^.]{0,150}parking[^.]{0,60}separate\w*` 0; `(?s)parking[^.]{0,100}(fee|charge|price|cost)s?[^.]{0,100}(tenant|dwelling|residential|apa` 1; `parking spaces? per dwelling unit` 1; heading screen 4; catchline 4; control 0; positives: UT 39.051 passed, LG 218.102 passed

**`usufructuary-lessor`** (edu-no-usufructuary-lessor-tx)
- TX-GAPS-J-07 - usufructuary-lessor: usufruct / naked owner / life tenant leases - codes ALL; patterns: `usufruct\w*` 0; `\bnaked owner\w*` 0; `(?s)(life tenant|life estate)\w*[^.]{0,200}(lease|lessee)|(lease|lessee)[^.]{0,200}(life t` 0; `life tenant\w*|life estate\w*` 29; heading screen 2; catchline 2; control 0; positives: PR 5.009 passed, ES 201.002 passed
- TX-GAPS-J-08 - usufructuary-lessor everyday words: lease ending on the lessor death or limited estate - codes ALL; patterns: `(?s)(lease|rental)\w*[^.]{0,200}\b(dies|death)\b` 31; `(?s)(lessor|landlord|owner)[^.]{0,80}\b(dies|death)\b[^.]{0,150}(lease|tenant)` 1; `(?s)estate for (life|years)` 3; heading screen 0; catchline 0; control 0; positives: PR 92.0162 passed, PR 23.003 passed

**`utility-disconnection-notice-authorization`** (edu-utility-disconnection-notice-authorization-tx)
- TX-GAPS-J-13 - utility-disconnection-notice-authorization: third party or landlord copies of shutoff notices - codes ALL; patterns: `(?s)(third.party|designat\w*|another person|landlord|owner)[^.]{0,150}(notice|notif\w*)[^.` 3; `(?s)(disconnect\w*|discontinu\w*)[^.]{0,150}(notice|notif\w*)[^.]{0,150}(landlord|owner|th` 0; `third.party notif\w*` 0; heading screen 0; catchline 0; control 0; positives: PR 92.302 passed, UT 17.202 FAILED - recorded as failed; see the rerun
- TX-GAPS-J-25 - utility-disconnection-notice-authorization rerun of J-13 with notice-of-disconnection-to limb - codes ALL; patterns: `(?s)(third.party|designat\w*|another person|landlord|owner)[^.]{0,150}(notice|notif\w*)[^.` 3; `(?s)(disconnect\w*|discontinu\w*)[^.]{0,150}(notice|notif\w*)[^.]{0,150}(landlord|owner|th` 0; `third.party notif\w*` 0; `(?s)notice of (service )?(disconnection|discontinuance|termination)[^.]{0,150}\bto (a|the|` 6; heading screen 0; catchline 0; control 0; positives: PR 92.302 passed, UT 17.202 passed, UT 104.352 passed

**`utility-transfer`** (edu-no-utility-transfer-cutoff-tx)
- TX-GAPS-J-15 - utility-transfer: tenant transfer of utilities into own name / landlord cutoff of landlord-name service - codes ALL; patterns: `(?s)(transfer\w*|put|place|establish\w*|connect\w*)[^.]{0,80}(utilit\w*|service)[^.]{0,80}` 0; `(?s)(tenant\W{0,3}s? name|name of the tenant)[^.]{0,150}(utilit\w*|service|account)` 1; `(?s)(utilit\w*|service|account)[^.]{0,150}(name of the landlord|landlord\W{0,3}s? name|nam` 1; heading screen 0; catchline 0; control 0; positives: LG 552.0025 FAILED, WA 54.2051 passed - recorded as failed; see the rerun
- TX-GAPS-J-26 - utility-transfer rerun of J-15 with connected-in-tenant-name limb - codes ALL; patterns: `(?s)(transfer\w*|put|place|establish\w*|connect\w*)[^.]{0,80}(utilit\w*|service)[^.]{0,80}` 0; `(?s)(tenant\W{0,3}s? name|name of the tenant)[^.]{0,150}(utilit\w*|service|account)` 1; `(?s)(utilit\w*|service|account)[^.]{0,150}(name of the landlord|landlord\W{0,3}s? name|nam` 1; `(?s)(service|utilit\w*)[^.]{0,40}connected in (a|the) tenant\W{0,3}s? name` 2; heading screen 0; catchline 0; control 0; positives: LG 552.0025 passed, WA 54.2051 passed

**`veterans-incentive`** (edu-no-veterans-incentive-tx)
- TX-GAPS-J-16 - veterans-incentive: landlord incentives or rules for renting to veterans - codes ALL; patterns: `(?s)veteran\w*[^.]{0,150}(landlord|lease|lessor|rent\w*|tenant)|(landlord|lease|lessor|ren` 46; `(?s)veteran\w*[^.]{0,100}(tax credit|incentive|bonus|grant)|(tax credit|incentive|bonus|gr` 39; `military status` 2; heading screen 6; catchline 4; control 0; positives: LG 250.007 passed, GV 434.017 passed

**`waiver-by-acceptance`** (edu-no-waiver-by-acceptance-rule-tx)
- TX-GAPS-M-01 - waiver by acceptance of rent - codes ALL; patterns: `accept\w*[^.]{0,80}\brent\b|\brent\b[^.]{0,80}accept\w*` 14; `acceptance of (the )?(rent|payment)` 8; `waive\w*[^.]{0,80}(notice to vacate|forfeiture|breach)|(notice to vacate|forfeiture|breach` 12; heading screen 2; catchline 2; control 0; positives: BC 2A.516 passed

**`waterbed`** (edu-no-waterbed-rule-tx)
- TX-GAPS-J-18 - waterbed: waterbeds and water-filled furniture (term of art; no real positive) - codes ALL; patterns: `water.?beds?\b` 0; `water-filled` 0; `flotation (bed|mattress)\w*` 0; `(?s)(liquid|water)[^.]{0,20}(filled|bed)[^.]{0,40}furniture` 0; heading screen 0; catchline 0; control 0; positives: HS 341.0646 FAILED - recorded as failed; see the rerun
- TX-GAPS-J-27 - waterbed rerun of J-18 with flotation limb (real positive) - codes ALL; patterns: `water.?beds?\b` 0; `water-filled` 0; `flotation (bed|mattress)\w*` 0; `(?s)(liquid|water)[^.]{0,20}(filled|bed)[^.]{0,40}furniture` 0; `flotation\w*` 14; heading screen 0; catchline 0; control 0; positives: HS 341.0646 passed
- TX-GAPS-J-19 - waterbed everyday words: heavy furniture, floor loads, tenant furniture - codes ALL; patterns: `(?s)floor[^.]{0,40}(load|weight)` 1; `(?s)(heavy|bulky) (furniture|objects?|items?|appliances?)` 0; `(?s)furniture[^.]{0,100}\b(tenant|lessee)\b|\b(tenant|lessee)\b[^.]{0,100}furniture` 3; heading screen 0; catchline 0; control 0; positives: HS 791.007 passed, PR 92.0081 passed

**`window-guards`** (edu-no-window-guard-rule-tx)
- TX-GAPS-J-20 - window-guards: window guards, stops, falls, security bars, latches - codes ALL; patterns: `window guard\w*` 0; `window (stop|limiter)s?\b` 0; `(?s)window\w*[^.]{0,80}(fall\w*|falling)|(fall\w*|falling)[^.]{0,80}window` 0; `security bars?\b` 21; `window latch\w*` 6; heading screen 1; catchline 1; control 0; positives: HS 756.082 passed, PR 92.153 passed
- TX-GAPS-J-21 - window-guards everyday words: children and windows, window openings - codes ALL; patterns: `(?s)child\w*[^.]{0,120}window\w*|window\w*[^.]{0,120}child\w*` 0; `(?s)window\w*[^.]{0,60}open\w*[^.]{0,60}(inches|limit\w*)` 0; `(?s)window\w*[^.]{0,80}(tenant|dwelling unit|apartment)` 5; heading screen 0; catchline 0; control 0; positives: HS 757.007 FAILED, PR 92.0081 passed - recorded as failed; see the rerun
- TX-GAPS-J-28 - window-guards everyday words rerun of J-21 with corrected positive - codes ALL; patterns: `(?s)child\w*[^.]{0,120}window\w*|window\w*[^.]{0,120}child\w*` 0; `(?s)window\w*[^.]{0,60}open\w*[^.]{0,60}(inches|limit\w*)` 0; `(?s)window\w*[^.]{0,80}(tenant|dwelling unit|apartment)` 5; heading screen 0; catchline 0; control 0; positives: HS 757.008 passed, PR 92.0081 passed

## §4 Decisions, and questions asked of Taylor

**Questions asked of Taylor:** none. Every unsettled point that only case law could decide is written on the cautious course, stated as such in the row.

### Texas item 1: statutory waivers and fee clauses (14 topics)

- **Sections read whole:** Tex. Prop. Code § 92.006 (last amended by Acts 2015, 84th Leg., R.S., Ch. 1198 (S.B. 1367)), § 92.005, § 24.005 (as amended by S.B. 38, effective January 1, 2026) and § 24.006, and Tex. Civ. Prac. & Rem. Code ch. 38 (§§ 38.001-38.006; the chapter ends at § 38.006).
- **Hub row.** I answered the waiver family once, in the hub row `edu-part5-nonwaivable-tx` (topic `part5-nonwaivable`). It sets out § 92.006 subsection by subsection and points to `edu-non-waivable-terms-tx`, which is unchanged.
- **Rows that point to the hub:** `habitability-waiver`, `security-deposit-nonwaiver`, `jury-waiver`, `notice-to-quit-waiver`, `showing-notice-waiver` and `smoke-drift-waiver`.
  - Each of these says only what is specific to its own topic.
  - For example, § 92.006(c)-(f) for repairs, § 92.006(h) for jury trial, and § 24.005(a) for the contractable notice to vacate.
- **Fee clauses:** `attorney-fees`, `collection-fee`, `notice-service-fee`, `eviction-penalty-clause-ban`, `liquidated-damages`, `waiver-by-acceptance`, `confession-of-judgment` and `jury-waiver`. Each is answered once and points to the others by row id.
  - `attorney-fees` rests on § 24.006 (eviction), § 92.005 (ch. 92 suits) and CPRC §§ 38.001(b)(8) and 38.002 (contract claims).
  - `collection-fee` rests on Tex. Fin. Code §§ 392.303(a)(2) and 392.304(a)(12)-(13).
  - `confession-of-judgment` rests on CPRC § 30.001.
- **No general penalty statute.** Texas has no general statute on contract penalties or liquidated damages. The Business & Commerce Code rule, § 2A.504, covers leases of goods only.
  - So `notice-service-fee`, `eviction-penalty-clause-ban` and `liquidated-damages` are confirmed absences.
  - Each states the cautious course: recover costs through the judgment, and charge only actual, documented costs that the lease authorizes.
- **Waiver by acceptance** has no statute or rule. The row gives the cautious course (refuse or return rent after a notice to vacate, or accept it only with a written non-waiver) and states no rule of law.
- **Jury waiver.**
  - § 92.006(h) bars a lease waiver only "in an action brought under this chapter".
  - For evictions and rent suits, enforceability is case law, which I did not read. The row's cautious course is to leave jury waivers out of the lease.
  - It cites Tex. Const. art. I, § 15 and Tex. R. Civ. P. 510.15(c), the jury demand in eviction.

### Texas item 2: the seven `dv-` topics

- **Sections read whole:** Tex. Prop. Code §§ 92.016 (last amended 2019, S.B. 234) and 92.0161 (last amended 2025, H.B. 47), and Tex. Fam. Code ch. 85: §§ 85.021 and 85.025 read whole, with the section list of ch. 85 checked. I also read §§ 71.004 and 93.001, Code Crim. Proc. arts. 17.292, 58.152 and 7B.001, and Prop. Code ch. 24A.
- **Tag first.** No shared row on any `dv-` topic states Texas law as written. The candidate rows rest on other states' statutes, with their own notice periods, documents and deposit rules. So I wrote seven Texas rows and tagged none.
- **Pointers.** Each row points to `edu-early-termination-rights-tx` and `early-termination-rights-statement-tx`, unchanged. Those carry the military and death rights and the required lease statements.
- **Verdicts.** Three topics are confirmed absences (`dv-deposit-timing`, `dv-eviction-protection`, `dv-lockchange`); four are present (`dv-lease-termination`, `dv-qualifying-documents`, `dv-confidentiality`, `dv-protection-order-chapter-moved`). Two need a note:
  - `dv-confidentiality`: § 92.0161(j) is the only statutory confidentiality rule, and it covers sex offenses and stalking. § 92.016 has none for family violence. The row states the cautious practice for family-violence documents as practice, not law.
  - `dv-protection-order-chapter-moved`: every protective-order citation in §§ 92.016 and 92.0161 resolves to a provision in force. One stale cross-reference was found, in § 24A.001(3) (see §6).

### Texas item 3: fees and receipts

- **Sections read whole:** Tex. Prop. Code § 92.011 (cash payments), § 92.019 (late fees), § 92.0191 (late-fee statement) and § 92.0081 (lockouts; no lockout-fee provision). I also read §§ 92.008(r), 92.156(e), 92.162(b) and 54.044(c), the fee rules that make a charge depend on the lease.
- **Rows:**
  - `required-fees`, `pet-fees` and `late-fee-limit` are present.
  - `fee-transparency`, `fee-unprovided-service` and `rent-receipt-anti-waiver` are confirmed absent.
  - `late-fee-limit` points to `edu-late-fee-rules-tx`, unchanged. It adds the ch. 94 manufactured-home lot-lease rules (§ 94.053(c)(5), (d), (e)), which set no cap.
- **H.B. 21 (2025).** Tex. Loc. Gov't Code § 394.9026(a)(8) defines "rent", for housing-finance-corporation tax-exempt developments, to include recurring mandatory fees. It is noted in `required-fees`, `fee-transparency` and `pet-fees`, and it gives rise to the finding in §6.

### Texas item 4: eviction after S.B. 38

- **Current law only.** Slice E answered the 17 eviction topics from current Prop. Code ch. 24 as amended by S.B. 38 (Act of May 28, 2025, 89th Leg., R.S., ch. 960 (S.B. 38)). That act took effect January 1, 2026, except § 16, which took effect September 1, 2025 (§ 18), and it applies to petitions filed on or after January 1, 2026 (§ 17). The rows also rest on Rule 510 as amended effective January 1, 2026 (preliminary approval; see §1 for the status of the final order). No row states pre-2026 law as current.
- **Squatters and fake leases.** For `trespass-notice`, the helper read ch. 24B (S.B. 1333), Penal Code § 30.05 and the S.B. 1333 version of Penal Code § 32.56 (the false lease or deed offense), and cited only that version. The row points to `edu-unauthorized-occupant-removal-tx` rather than repeating it.
- **Batteries.** All 18 slice E batteries passed every positive. E-19 was added because E-15 missed § 92.008(i), the electricity cutoff when the temperature is 32°F or below.
- **Good cause.** `good-cause-notice` is present, with an education row plus a conditional required-disclosure clause, `good-cause-nonrenewal-tx`. Texas requires good-cause nonrenewal terms for three kinds of affordable housing:
  - multifamily developments of a public facility corporation claiming the tax exemption (Loc. Gov't Code § 303.0425(i)-(j));
  - income-restricted units of a housing finance corporation (§ 394.9026(c)(9), H.B. 21, 2025);
  - TDHCA-monitored tax-credit, TCAP and Exchange developments (10 Tex. Admin. Code § 10.613(a)).
- **Lead decision on `good-cause-nonrenewal-tx`.** Keep the education row for every Texas landlord, and offer the clause only behind an explicit property-program question that defaults to off. **For Claude Code at sync:** the builder needs that gating question; the row's `rule_type` is CONDITIONAL and it is not a default.
- **Lead decision on `eviction-service-party`.** Tenants in the address-confidentiality program may be served through the attorney general (Code Crim. Proc. art. 58.052(c)), but Rule 510.8(d) requires a sheriff or constable to serve the eviction citation. The row keeps the cautious course: serve under Rule 510.8 and also deliver to the attorney general, after advice. Only case law could settle which route controls; it was not read.

### Texas item 5: `keys-tx` and `hoa-compliance`

Both rows read correctly. Neither conflicts with the statute, so I propose no wording.

- **`keys-tx`.** Read against Tex. Prop. Code §§ 92.156 (H.B. 2404, 2015), 92.162, 92.163, 92.104 and 92.006(a). Every sentence matches:
  - turnover rekeying is at the landlord's expense within seven days (§ 92.156(a));
  - additional rekeying is at the tenant's expense on request (§ 92.156(b));
  - the breach-vacate deduction is effective only with an underlined or bold provision, matching § 92.156(e), "underlined or printed in boldface type";
  - the misuse repair charge is effective only with an underlined provision, matching § 92.162(b), "an underlined provision in a written lease", "and not by normal wear and tear";
  - the tenant alteration ban carries the repair-and-deduct exception (§ 92.163, "Except as provided by Section 92.164(a)(1) or 92.165(1)").
  - The deposit deduction is a charge "for which the tenant is legally liable under the lease" (§ 92.104(a)). No sentence waives a Subchapter D duty (§ 92.006(a)).
  - The clause does not restate the § 92.162(d) cap on tenant-paid rekeying. That is an omission, not a conflict, and `edu-security-device-duties-tx` states the cap.
- **`hoa-compliance`.** Read against Prop. Code chs. 202 (§§ 202.001-202.024) and 209 (§§ 209.001-209.017).
  - The ch. 209 fine procedure runs between the association and the owner. Before it levies a fine, the association must give "written notice to the owner by certified mail" (§ 209.006(a), last amended 2021, S.B. 1588).
  - Neither chapter bars a lease making the tenant answer for association fines the tenant's violations cause. § 92.018 bars passing on only fines imposed by a "governmental entity", defined as "the state, an agency of the state, or a political subdivision of the state" (§ 92.018(a)); an owners' association is none of these.
  - The association-side limits run against the association, not against the lease. The association may not require tenant approval or credit reports (§ 209.016(b)) and may not restrict renting by method of payment (§ 202.024(b)).
  - § 92.006 is not engaged, because the clause waives no landlord duty. **No conflict.**

### Texas item 6: three shared clauses

- **`smoking-policy` reads correctly in Texas.**
  - No statute protects smoking or vaping in rental housing. The only statewide ban is Penal Code § 48.01 (public places).
  - Possession of marihuana is an offense under Health & Safety Code § 481.121 (last amended 2023, H.B. 6).
  - The Compassionate Use Program in ch. 487 (amended 2025 by H.B. 46, which allows pulmonary-inhalation devices, § 487.107(c)(2)) has no landlord, lease or housing provision. Batteries TX-GAPS-M-24 (failed positive) and TX-GAPS-M-25 (rerun, every positive passed, control 0) confirm this.
  - The remediation charge is damage the tenant is liable for (§ 92.104(a)), not normal wear and tear.
- **`no-alterations` reads correctly in Texas.** It defers to the § 92.164(a)(1) and § 92.165(1) repair-and-deduct remedies and to § 92.163, which requires landlord permission otherwise. It also defers to the reasonable-modification right in the Texas Fair Housing Act (Prop. Code § 301.025(c)(1), at the tenant's expense). § 92.163 makes installed security devices fixtures, which the ownership sentence does not change.
- **`addendum-precedence` reads correctly in Texas.** Its carve-out for disclosures that law requires protects the § 92.0135 flood notice (amended 2025, S.B. 2349) and the §§ 92.016(f), 92.0161(g) and 92.017(g) statements.

### Texas item 7: currency, vetoes and CARES

- **Currency and vetoes:** see §1.
- **CARES consistency.** No Texas eviction row contradicts `edu-cares-act-notice`.
  - The Texas rows (`edu-eviction-notice-tx`, `edu-no-for-cause-eviction-tx`) state § 24.005(c-1). A federal notice period does not delay filing or the suit, but the writ "may not be served on the tenant until the period between the delivery of the notice under this section and the service of the writ equals or exceeds the period prescribed by the federal requirement" (§ 24.005(c-1)(3)).
  - The CARES row says the tenant may not be required to vacate until 30 days after notice. That is consistent: the writ is what requires vacating.
  - The CARES row's safe course (30 days' notice before filing) is more cautious than Texas requires, not contrary to it.
  - Current Tex. R. Civ. P. 510 has no CARES statement in the petition or citation. The CARES row says only that "some state court rules" ask for one, so it does not contradict Texas. A note is in §6.

### Helper questions settled by the lead (rule 76: not put to Taylor)

Each was a drafting choice where the cautious course was clear, so I decided it and recorded it here.

- **`criminal-activity`.** Should `default-by-tenant-tx` get a no-cure limb for breaches of the Criminal Activity Section? That would edit an existing row, which this pass may not do. It is recorded as a proposal in §6. The tag of `criminal-activity-ky` stands: its termination limb defers to the lease's default terms and applicable law.
- **`designated-repairer`.** No clause naming a landlord-preferred repairer. § 92.006(c) bars waiving Subchapter B remedies except as (d)-(f) allow, and § 92.0561(f) fixes who may repair. The education row says so.
- **`environmental-event-termination`.** No landlord exit clause. § 92.054 (casualty) and § 92.055 (closing the unit) already give the exits, and a broader contractual exit after a reported condition invites a § 92.006(c) argument. The confirmed-absence row says so.
- **`binding-arbitration`.** Education only, no clause, consistent with how earlier states handled the same doubt. The Texas Arbitration Act excludes agreements involving $50,000 or less unless each party's attorney signs (Tex. Civ. Prac. & Rem. Code § 171.002(a)(2), (b)), and § 92.006(h) bars jury waivers in ch. 92 actions. Federal Arbitration Act preemption is not reviewed.
- **Declined tags.** `ev-charging-end-of-tenancy-co` is not tagged. It makes a tenant-paid charger the tenant's property, which conflicts with `no-alterations` and with the TX-tagged `ev-charger-installation-hi`.
- **More declined tags (slice A).**
  - `detector-care-la`: it duplicates `smoke-alarm-tx` and adds carbon-monoxide detectors, which Texas does not require.
  - `appliances-excluded-la`: its "seriously affects health or safety" carve-out is narrower than the Texas repair test in § 92.052. A Texas clause, `appliances-excluded-tx`, was written instead.
  - `carpet-cleaning-ar`: its required cleaning charge risks a deduction for normal wear and tear, which § 92.104 bars.
- **Kept despite a narrow overlap (slice A).** The tag of `pest-cooperation-pr` stands. Under a county poison program, Health & Safety Code § 825.024(b) charges the landowner a tenant's poison costs for listed pests, but that is too narrow to block the tag.
- **Slice C helper questions, decided by the lead.**
  - **`holding-deposit`: no forfeiture clause.** § 92.351(1) defines an application deposit as one "refundable to the applicant if the applicant is rejected". Subchapter I says nothing about an accepted applicant who backs out. The row tells the landlord to state the terms in writing and to treat the deposit cautiously; whether it may be kept is case law, not read.
  - **`hazardous-contamination-disclosure`: education only, for now.** The owner of land over a closed municipal solid waste landfill "shall notify each lessee and each occupant" (Health & Safety Code § 361.539(b)), and § 361.537 conditions leasing such land on notice to the prospective lessee. Neither requires the text in the lease, so this is not a required-disclosure clause under rule 55. The situation is rare, and the education row tells the landlord to give the notice. If Taylor wants a fill-in notice clause, the slot is ready.
  - **Tags from slice C.** `furnishings-included-la` is lawful as written in Texas: it excepts normal wear and tear, consistent with § 92.104. `government-fee-reimbursement-ky` excludes fines, consistent with § 92.018, and gives the express lease authorization that Fin. Code § 392.303(a)(2) requires. `informal-dispute-resolution-or` excludes possession suits and does not delay any statutory deadline.
- **Slice D helper questions, decided by the lead on the cautious course.**
  - **`landlord-registration`.** An out-of-state entity that owns and leases Texas rentals should register as a foreign entity under Bus. Orgs. Code ch. 9. Whether leasing goes beyond the activities that do not count as "transacting business" in Texas (§ 9.251) is case law, not read. The row says to register or get advice.
  - **`lease-term-limitation`.** Have both spouses sign a lease of a married owner's homestead (Fam. Code § 5.001). Whether a lease "encumbers" the homestead is not settled by the text.
  - **`owner-move-in-reservation`.** `owner-occupancy-termination-ar` is tagged. **For Claude Code at sync:** show the Prop. Code § 92.331 six-month retaliation caution next to the clause; the TX note states it.
- **Overlap noted, not merged.** `edu-pest-control-notice-tx` (topic `pest-control-notice`) and `edu-pest-treatment-notice-tx` (topic `bed-bug-cooperation`) both cite the Occ. Code § 1951.453 48-hour notice. They are split by topic: the general pest-control notice rules (§§ 1951.453-.457) on one side, tenant cooperation in a bed-bug or pest treatment on the other. Each points to the other. The independent check is asked to confirm that they agree.
- **`nonrefundable-deposit-separate-notice`** (confirmed absent) relies on the `nonrefundable-fees-wv` tag, which is in this delta.
- **Slice F: lead decisions and corrections.**
  - **Correction to my own slice brief.** I pointed the helper to Prop. Code § 202.009 and § 202.011 for flags. The corpus shows § 202.009 is not in force; that subject moved to Elec. Code § 259.002 in 2019. § 202.011 covers roofing materials, flags are § 202.012, and solar is § 202.010. The helper followed the corpus, and later briefs were corrected.
  - **`rent-concession`.** When a concession lowers the rent due for a period, figure the § 92.019(a-1) late-fee percentage on the reduced rent actually due. That is the cautious reading; the statute measures the fee against "the amount of rent for the rental period under the lease" (§ 92.019(a-1)(1)(A)) and is not settled by the text. The tag note records this course, and the late-fee rows are unchanged.
  - **`rent-escalation`: three tags.**
    - `rent-escalation-ga` fits the § 92.332(a)(1) utilities, taxes or insurance safe harbor exactly.
    - `rent-escalation-la` is a scheduled or index-based change.
    - `rent-increase-midterm-ky` is a unilateral increase with 30 days' notice and a fee-free exit for the tenant. It follows Taylor's IN library decision, as KY, AK, AR, MS, VI, AS and KS did. Its TX note says to use it or the LA clause's no-other-change sentence, not both.
    - I kept all three tags. If Taylor does not want unilateral mid-term increases offered in Texas, drop the KY tag at sync.
  - **`promises-to-repair`.** The WY and WI clauses quote their own statutes, so they cannot be tagged. A Texas promised-work list would be a lawful option; it is not offered in this pass.
- **Slice G.**
  - **New clause `rules-tx`.** Neither shared rules clause fits Texas (`rules-ia` and `rules-wi` rest on their own states' rule-change statutes), so this Texas clause was written. It uses the delivery methods in § 92.013 and reuses `{{rule_change_notice_days}}`. Its bracketed note carries the § 94.008(c) rule for manufactured home communities.
  - **Lead correction from a helper's finding.** `edu-lease-term-limits-tx`, written earlier in this pass, said Texas adds no "power-of-attorney formality" for a long lease. But an estate for more than one year "must be subscribed and delivered by the conveyor or by the conveyor's agent authorized in writing" (Prop. Code § 5.021). The body now states the written-authority rule. This is listed in §5 for the independent check.
- **Slice H, decided by the lead.**
  - **Tax-escalation overlap.** Texas is now tagged on two optional pass-through clauses:
    - `rent-escalation-ga`: utilities, taxes or insurance, choose one or more;
    - `tax-insurance-escalation-la`: a share of tax and insurance increases over a base year.
    Both fit the § 92.332(a)(1) safe harbor. **For Claude Code at sync:** let the builder offer one of them for taxes and insurance, not both. My preference is the LA clause for taxes and insurance, with the GA clause used for utilities. Both tags stand.
  - **`subsidy-late-fee`.** For a subsidized tenant, the cautious course is to figure the § 92.019 percentage on the tenant's share of the rent only. The statute does not settle this.
  - **`tenant-portal-mn`.** Its promise of a fee-free backup way to pay is voluntary in Texas, and lawful. The tag stands.
  - **Not located.** `subsidy-habitability-proration` and `tenant-bankruptcy` rest on federal law (housing-program rules; the Bankruptcy Code's automatic stay), which is not in the corpus. Each row states what Texas law and the Texas rules provide, and names what would answer the rest.
- **Slice J.**
  - **Declined tag.** `utility-allowance-cap-co` is not tagged for Texas. In Texas, having tenants pay the overage on a master-metered bill is an allocation. For electricity that covers apartment houses of two or more units (Util. Code §§ 184.051-184.052); for water, five or more units (Water Code § 13.5031). Both regimes impose their own rules, so the clause as written would mislead in most multiunit buildings.
  - **A required-disclosure clause still to come, for allocated electricity and central-system costs.** The Utilities Code requires the PUC's rule to make the "rental agreement contain" "a clear written description of the method of computing the allocation" and "a statement of the average apartment unit monthly bill for all apartment units" for the previous calendar year (Util. Code § 184.052(b)(1)(A), (B)). That rule is 16 TAC § 25.141, which the corpus does not hold; only its title appears in the PUC index. Host copies exist (Cornell LII, Justia), but rule 12 bars resting a row on a secondary copy.
    - The education row `edu-utility-disclosure-attachment-tx` tells landlords to include both statements and to get advice.
    - **For Claude Code at the next staging:** fetch 16 TAC § 25.141 from the PUC and add a CONDITIONAL REQUIRED_DISCLOSURE clause modeled on `utility-submetering-disclosure-tx`. This is in Proposed topic questions.
  - **Not located.** `utility-disconnection-notice-authorization` rests on the PUC electric customer-protection rules, which are not held.



## §5 Independent check

This is rule 80, scaled down as the prompt allows: at most two rounds, one agent at a time. Each checker worked from the delta CSV and the corpus. Neither saw the answer files, this log, or the earlier round's results.

**Round 1** checked 98 of the 253 rows:
- in full: all 29 lease clauses (3 new Texas clauses and 26 tagged shared clauses), every row the lead had edited after a helper wrote it, and the two overlapping pest-notice rows;
- a seeded random sample of 45 of the remaining 200 rows (seed 20261031).

The checker opened every cited section whole, checked history lines, the batteries behind every absence and the failed-positive reruns, and spot-checked quotes. It also ran one search of its own per absence row.

Result: **87 PASS, 11 FIX, 0 FAIL.** All 11 fixes were applied exactly as proposed, as edits to body or notes (`check/r1/edits.json`):
1. `good-cause-nonrenewal-tx`: the use note now says the clause does not supply the different lease statement that 10 TAC § 10.613(b) requires for HOME, ERA, TCAP RF, NHTF, NSP and HOME-ARP developments.
2. `rent-escalation-ga` (TX segment): adds a caution. An increase tied to master-metered water or wastewater costs is an allocation under Water Code §§ 13.503 and 13.5031, whose saving clause covers only rent "unrelated to utility costs".
3. `rental-inspection-cooperation-mn` (TX segment): the § 214.219 inspection program applies only to cities of 1.7 million or more, and art. 18.05(e) limits building-code warrants in counties of 3.3 million or more.
4. `edu-actual-notice-method-tx`:
   - It now states the electronic-transactions act (Bus. & Com. Code §§ 322.005, 322.008) and § 92.113 e-mail deposit notices. Previously it wrongly said no statute lets parties add a method, which also contradicted `edu-electronic-notices-tx`.
   - The § 92.056(c) receipt rule is now limited to § 92.056(b)(4)-(5).
5. `edu-children-occupancy-tx`: adds the § 92.010(b) exceptions to the three-adults-per-bedroom cap.
6. `edu-no-environmental-event-termination-tx`: the § 92.055 closing rule now carries the moves-out-by-end-of-term condition and the § 92.0563(a)(3)-(5) remedies.
7. `edu-pest-treatment-notice-tx`: the "who pays" absence is narrowed to insects. Health & Safety Code § 825.024(b) charges a tenant's costs of poisoning listed pests to the landowner.
8. `edu-utility-deposit-return-tx`: 16 TAC § 24.281(a) bars passing the utility's fees to tenants; the sentence previously pointed the wrong way.
9. `edu-tenant-portal-tx`: 10 TAC § 10.613(o)(3)(B) applies only to designated units under the 2025 federal HOME rule.
10. `edu-no-ordnance-demolition-meter-disclosure-tx`: the same § 92.055 fix as item 6.
11. `edu-no-political-access-rule-tx`: only § 202.013 protects residents; Elec. Code § 259.002 protects only property owners.

Round 1 also passed four points with notes. `edu-unpaid-damages-interest-tx` hedges the 10 percent figure. `edu-translation-duty-tx` reads § 92.302 defensibly. `appliances-excluded-tx` gives a cautious written-request instruction. The `pest-cooperation-pr` caveat agrees with fix 7.

**Error kinds and rule 59.** The § 92.055 error turned up twice, so round 2 was given every remaining row citing § 92.055. Scope errors (city-size, program and owner-only limits) turned up three times. Round 2 was told to test every rule it reads for its applicability subsection and definitions.

**Round 2** checked 53 rows:
- the 11 rows edited after round 1, diffed against their old text;
- the 2 other rows citing § 92.055;
- a fresh seeded sample of 40 of the rows round 1 did not check (seed 1031), tested specifically for scope limits and dropped consequences.

The checker ran 33 searches of its own for the absence claims and found no statute that any row missed. All quotes were verbatim, and all batteries and reruns were in order.

Result: **edited list 5 PASS, 6 FIX; § 92.055 list 2 FIX; sample 31 PASS, 9 FIX; 0 FAIL overall.** All 17 fixes were applied as proposed (`check/r2/edits.json`, plus two of the lead's own rows edited in source):
- **§ 92.055 closing rule, now stated the same way in four rows** (`edu-no-environmental-event-termination-tx`, `edu-no-ordnance-demolition-meter-disclosure-tx`, `edu-no-health-district-rental-rules-tx`, `edu-no-repair-cost-termination-tx`):
  - a closing before any repair notice leaves no repair remedies;
  - after a repair notice, the tenant is entitled "only" to the § 92.0563(a)(3)-(5) remedies and, if they move out by the end of the term, the (d) payments;
  - the six-month bar applies to every closing;
  - occupancy waits for the official's certification.
- **`rent-escalation-ga` (TX segment):** "apartment house" means five or more units (Water Code § 13.501(1)), and there is a new electric-metering caution under Util. Code § 184.013(c).
- **`edu-actual-notice-method-tx`:** adds the § 322.008(d)(2) first-class-mail exception and the H.B. 2037 transition limit on § 92.113, with history lines recorded. `edu-tenant-portal-tx` gets the same § 92.113 limit.
- **`edu-no-political-access-rule-tx`:** § 202.013 excludes 501(c)(3) associations and common areas not offered for meetings.
- **`edu-portfolio-thresholds-tx`:** the "in the business" test applies only to the single-family exemption, and § 301.024 is blockbusting.
- **`edu-no-smart-access-law-tx`:** the biometric law applies to capture "for a commercial purpose", stated as a cautious reading.
- **`edu-confession-of-judgment-tx`:** the backup officer serves on an alias citation at the landlord's request (Rule 510.8(d); § 24.0051(f)).
- **`edu-utility-disconnection-notice-authorization-tx`:** § 92.302's full definition, the in-a-city condition and the paid-bill exception.
- **`edu-municipal-utility-lien-tx`:** the § 552.0025(f) limit to ordinances adopted on or after August 28, 1989.
- **`edu-no-notice-service-fee-tx`:** history lines recorded in the notes.
- **`edu-disability-accommodation-tx`:** adds the 30 hours of community service under § 121.004(a).
- **`edu-habitability-materiality-tx`:** the repair-and-deduct conditions, notice of intent and cap, and the § 92.056(b)(2) limit on remedies.
- **`edu-habitability-modifiable-tx`:** the full § 92.006(e)-(f) conditions.
- **`edu-no-environmental-event-termination-tx`:** § 92.023's "not in default" condition, in addition to the § 92.055 fix above.

**Rows edited after the last round (round 2), not re-checked by an independent agent because the prompt caps the check at two rounds:** `edu-actual-notice-method-tx`, `edu-confession-of-judgment-tx`, `edu-disability-accommodation-tx`, `edu-habitability-materiality-tx`, `edu-habitability-modifiable-tx`, `edu-municipal-utility-lien-tx`, `edu-no-environmental-event-termination-tx`, `edu-no-health-district-rental-rules-tx`, `edu-no-notice-service-fee-tx`, `edu-no-ordnance-demolition-meter-disclosure-tx`, `edu-no-political-access-rule-tx`, `edu-no-repair-cost-termination-tx`, `edu-no-smart-access-law-tx`, `edu-portfolio-thresholds-tx`, `edu-tenant-portal-tx`, `edu-utility-disconnection-notice-authorization-tx`, `rent-escalation-ga`. Each edit is the checker's own proposed wording, quoting the statute. The assembler re-verified every quote in these rows against the sections read, and every cited section is listed in its row's sections read.

**Coverage and residual risk.**
- The two rounds checked 140 of the 253 rows. Every clause, every tag and every lead-edited row was checked in full. The other 113 rows were checked by neither round.
- The random samples found wording fixes in 4 of 45 rows (round 1) and 9 of 40 (round 2, which targeted scope and consequences): 13 of 85, about 15%.
- None of these were wrong conclusions. All were precision faults: a dropped condition, an unstated scope limit, or an incomplete consequence.
- **At that rate, roughly 15-20 of the 113 unchecked rows likely carry a similar precision fault.** A third check scoped to those 113 rows would find them; it is outside this prompt's two-round cap, so it is Taylor's call (see Proposed SOP changes).



**Lead edits to helper rows before delivery.** These are quote-convention and battery-rerun edits to notes, plus one body correction: `edu-lease-term-limits-tx` now states the Prop. Code § 5.021 written-authority rule for agents. Each goes to the independent check with its pre-edit text.

- `edu-actual-notice-method-tx`: "'agreed in writing' near 'electronic' 1" changed
- `edu-asbestos-hazards-tx`: "danger to "the occupants of the building" the department" changed; ""shall require a building or facility owner or the owner's authorized " changed
- `edu-carpet-cleaning-tx`: "the cost 'as damages caused by Tenant's noncompliance'," changed
- `edu-children-occupancy-tx`: "54.042 'children's toys';" changed
- `edu-common-area-lighting-tx`: "an owner may not 'recover that charge through a metered charge to a re" changed
- `edu-construction-liens-tx`: "(regime noun 'owner's agent')" changed; "on tenant-as-agent and 'by implication of law' not read" changed
- `edu-criminal-activity-tx`: "and commercial rental property "means rental property that is not cove" changed; "positives PR 92.332, CP 125.0015 NOT ALL PASSED; Battery TX-GAPS-B-05" changed
- `edu-designated-repairer-tx`: "and added 'an independent' and the licensing sentence" changed; "('Unless the landlord and tenant agree otherwise under Subsection (g)'" changed
- `edu-disaster-duties-tx`: "'leasing ... lodging ... or another necessity' under § 17.46(b)(27)" changed
- `edu-eminent-domain-tx`: "21.0111 (an offer 'to purchase or lease')" changed
- `edu-employee-screening-tx`: "Hits read: 'residential dwelling project' only in" changed
- `edu-ev-charging-requirements-tx`: "Hits read: 'electric vehicle' = OC" changed; "UT 42.0101 (findings: 'property whose owners or tenants desire to inst" changed
- `edu-exculpatory-clauses-tx`: "pattern 3 ('landlord is not liable')" changed; "The § 92.054 positive failed (its text has no pattern match) and is di" changed
- `edu-farmland-hunting-rights-tx`: "on 'owner's agent' not read" changed
- `edu-fire-code-standard-tx`: "'fire code' near rental words" changed
- `edu-lease-arbitration-tx`: "(it uses 'This chapter does not apply', not 'arbitrat*' near" changed
- `edu-lease-term-limits-tx`: "Texas adds no seal, acknowledgment or power-of-attorney formality for " changed
- `edu-no-condition-inspection-rule-tx`: "(its 'determine ... at the beginning of the tenant's possession' does " changed; "which contains 'inspect' near 'beginning of a tenant's possession'" changed
- `edu-no-disaster-guest-rule-tx`: "pattern 4 'natural disaster' Prop. Code hits" changed
- `edu-no-environmental-event-termination-tx`: "'casualty loss' / 'close the rental unit'" changed
- `edu-no-ev-charging-end-of-tenancy-tx`: "a fixtures screen ('(?s)trade fixtures?|tenant's fixtures|fixtures ins" changed; "its first sentence ('A charging system installed at Tenant's expense r" changed
- `edu-no-family-child-care-rule-tx`: "'family home' in the Property Code = PR 202.003(b) only, which protect" changed; "uses 'Family home' without 'listed' or 'registered'.)" changed
- `extended-absence-notice-ks`: "the § 92.0081 positive failed only because § 92.0081(b)(2) puts 'premi" changed
- `owner-occupancy-termination-ar`: "recorded as failed (recorded as failed, rerun as TX-GAPS-D-30 with pos" changed
- `pest-cooperation-pr`: "Entry goes through 'this Lease's entry section'" changed; "its own 'reasonable notice' entry standard" changed; "('the tenant; a lawful occupant in the tenant's dwelling; a member of " changed
- `rent-increase-midterm-ky`: "Use either this clause or `rent-escalation-la`'s no-other-change sente" changed

## §6 Findings on existing rows

1. **`edu-fees-as-rent-tx`: "Texas statutes do not define rent".** That row says "Texas statutes do not define rent or say whether a fee can be treated as rent", and its battery covered only the Property, Business & Commerce, Civil Practice & Remedies and Finance Codes. Tex. Loc. Gov't Code § 394.9026(a)(8) (added by Acts 2025, 89th Leg., R.S., Ch. 208 (H.B. 21), Sec. 9, eff. May 28, 2025) reads: "'Rent' means any recurring fee or charge a tenant is required to pay as a condition of occupancy, including a fee or charge for the use of a common area or facility reasonably associated with residential rental property. The term does not include fees and charges for services or amenities that are optional for a tenant, such as pet fees and fees for storage or covered parking." The definition applies only to the housing-finance-corporation tax-exemption conditions in that section. **Proposed wording:** "Texas's landlord-tenant statutes do not define rent or say whether a fee can be treated as rent. (One narrow exception: for a development claiming the housing-finance-corporation tax exemption, Tex. Loc. Gov't Code § 394.9026(a)(8) counts recurring mandatory fees as rent.)" Severity: low. The general statement remains true for ch. 92 tenancies.
2. **`edu-no-entry-notice-statute-tx`: boundary only, not a defect.** The row's absence claim is bounded to ch. 92. All-codes battery TX-GAPS-M-02 confirms there is no residential entry-notice rule anywhere in the codes. The one entry-consent rule is § 94.004 (manufactured homes in a community), which the new row `edu-no-showing-notice-waiver-tx` mentions. No change needed. If the row is ever revised, its boundary could say "all Texas codes searched; the manufactured-home-community rule in § 94.004 differs".
3. **`edu-unauthorized-occupant-removal-tx`: Penal Code § 32.56 not read.** The row's notes say the Penal Code sections S.B. 1333 "reportedly added (ss32.56-.57, fraudulent leases or deeds) NOT read". § 32.56 has four versions sharing one number (see §1). The S.B. 1333 version is "FALSE, FRAUDULENT, OR FICTITIOUS DOCUMENT CONVEYING REAL PROPERTY INTEREST". If the row is ever revised to cite it, it must cite the S.B. 1333 version by act. Slice E reads ch. 24B and the S.B. 1333 sections for `unauthorized-occupant-removal` and `trespass-notice`; any further finding will be added here.
4. **Statute cross-reference, recorded for monitoring; no row relies on it.** Tex. Prop. Code § 24A.001(3) still defines "Peace officer" as "a person listed under Article 2.12(1) or (2), Code of Criminal Procedure". Article 2.12 is not in the corpus. The peace-officer list now sits in Code Crim. Proc. art. 2A.001, which was added by Acts 2023, 88th Leg., R.S., Ch. 765 (H.B. 4504), eff. January 1, 2025, and which names sheriffs in (1) and constables in (2). The new row `edu-dv-protection-order-chapter-moved-tx` tells landlords to read the reference as art. 2A.001(1)-(2). No existing row cites § 24A.001(3).
5. **`edu-cares-act-notice` (shared row): consistency note, no defect.** For Texas, the row's safe course ("give at least 30 days' written notice to vacate before filing") goes beyond what Texas requires. Under § 24.005(c-1), a landlord need not delay filing because of a federal notice period, but the writ may not be served until that period has run. The two are compatible. **Proposed TX: segment, if Claude Code wants one:** "TX: Tex. Prop. Code § 24.005(c-1) (as amended by S.B. 38, eff. Jan. 1, 2026) lets the landlord file before a federal notice period ends but bars serving the writ until it has run; current Tex. R. Civ. P. 510 asks for no CARES statement."
6. **`default-by-tenant-tx`: proposal, not a defect.** With `criminal-activity-ky` tagged for Texas, a drug or violent-crime breach falls under this row's voluntary cure promise ("does not cure the failure after receiving written notice"). Texas requires no cure: § 92.332(b)(3) treats violating "written lease provisions prohibiting serious misconduct or criminal acts" as a material breach. **Proposed wording:** add a limb (d) to the no-cure list, "a breach of the Criminal Activity Section of this Lease". This is a drafting choice for Taylor.
7. **`edu-no-ev-charging-right-tx`: boundary could be widened.** The row's boundary says the Utilities Code and local codes were not searched. Battery TX-GAPS-B-21, run over all Texas codes, confirms that no statute gives a tenant a charging right: Occ. Code ch. 2311 and Util. Code ch. 42 regulate providers only. The conclusion is unchanged. **Proposed boundary:** "all Texas codes searched; local codes not reviewed".
8. **`assistance-animal-accommodation` (TX segment): a second basis.** The TX segment was read against Prop. Code chs. 24, 54, 91, 92 and 301 only. Tex. Hum. Res. Code § 121.003(h) (no extra compensation or deposit for a service animal; liable for damage except reasonable wear and tear) and § 121.004 are a second Texas basis for the clause's no-fee and damage sentences. The clause is correct as written.
9. **`edu-repair-duty-tx` and `habitability-timeline-tx`: transition rule, noted, not a defect.** H.B. 2037 (2025) changed who may make repair-and-deduct repairs (§ 92.0561(f)) only for leases entered into or renewed on or after September 1, 2025 (H.B. 2037, SECTION 5). Both rows state the current rule, which is right for leases signed now.
10. **New 2025 local-government limits, for any future Texas home-business or child-care row.** Tex. Loc. Gov't Code § 229.902 (H.B. 2464) stops cities banning no-impact home businesses but keeps private agreements such as leases enforceable. § 250.014 (S.B. 599) bars cities from holding licensed, registered or listed family homes to stricter health and safety standards than the state's. Neither changes an existing row.
11. **`edu-no-plain-language-rule-tx`: boundary could be widened.** Battery TX-GAPS-A-35 searched every Texas code for a plain-language lease rule and found none. The row's conclusion is unchanged; its boundary note could say "all Texas codes searched".
12. **Court rule cross-reference, for monitoring; no row relies on it.** Tex. R. Civ. P. 510.19(d)(2)(D), as amended effective January 1, 2026, ties the writ issued without a hearing to the notice required by Rule 510.16, the default-judgment rule. The statute, Prop. Code § 24.0054(a), ties it to the notice given on appeal. The slice E rows follow the statute. This is worth raising if the Supreme Court takes comments before final approval.
13. **Corpus quirk, recorded for monitoring; no row affected.** The official text prints the note "For expiration of this section, see Subsection (i)" under Health & Safety Code § 766.053, which has no subsection (i). The expiry date is in § 766.054(i).
14. **Statute cross-reference, recorded for monitoring; no row affected.** Prop. Code § 92.0561(e)(2) points to "Paragraph (A)" for the potable-water condition, but the water event is in Paragraph (B). This looks like a drafting error in the statute. The new private-well row follows the substance.
15. **`edu-fair-housing-tx`: the same reading as a row fixed in round 2.** Round 2 found that `edu-portfolio-thresholds-tx` read the "in the business" test of Prop. Code § 301.041(d) as removing every exemption. The test works only through § 301.041(a)(1)(B)(i), the single-family exemption's condition; it does not reach the owner-occupant exemption in (a)(2). The checker reports that the existing `edu-fair-housing-tx` uses the same reading. **Proposed:** align that row's exemption sentence with the corrected wording in `edu-portfolio-thresholds-tx`.
16. (from topic `good-cause-notice`) `edu-no-for-cause-eviction-tx` says "Texas has no just-cause or good-cause eviction rule" (`edu-no-for-cause-eviction-tx` body) and limits the exceptions to federally assisted housing (not reviewed) and situational rules; its battery covered only the Property Code. Texas statutes impose good-cause nonrenewal terms on some housing: "the landlord may only choose to not renew the lease if the tenant" (Tex. Loc. Gov't Code § 303.0425(i)(2), public facility corporation multifamily developments claiming the exemption, with a 30-day written notice of proposed nonrenewal, § 303.0425(i)(3), non-waivable, § 303.0425(j)); the same for income-restricted units in housing finance corporation developments (§ 394.9026(c)(9), added 2025 by H.B. 21); and the TDHCA rule requires HTC, TCAP and Exchange leases to state that evictions or terminations for other than good cause are prohibited (10 TAC § 10.613(a), under Tex. Gov't Code § 2306.6735). Suggest the row add one sentence, for example `State law imposes good-cause nonrenewal terms on some tax-advantaged affordable housing; see edu-good-cause-notice-tx.` Not changed.
17. (from topic `inspection-condemnation-disclosure`) Minor, `edu-repair-duty-tx` (TX): the row says If a city revokes the certificate of occupancy because you failed to maintain the property, but Tex. Prop. Code § 92.023 reaches revocation by "a municipality or a county" (§ 92.023). Suggest: If a city or county revokes. Not changed.
18. (from topic `security-deposit-holding`) `edu-no-deposit-cap-or-interest-tx` (TX row, not an error): its body says chapter 92 does not require "hold it in a separate or interest-bearing account" and its notes bound the claim to ch. 92. The all-codes batteries TX-GAPS-G-08 and G-09 confirm no statute anywhere requires segregation or interest; the only holding and interest rules are for brokers (22 TAC § 535.146) and Section 811 PRA units (10 TAC § 10.624(f)(2)(A)). The lead may widen that row's boundary and point it to `edu-security-deposit-holding-tx` and `edu-no-security-deposit-interest-tx`; no change made.
19. (from topic `security-deposit-on-sale`) `edu-security-deposit-rules-tx` (TX row, minor omission, not wrong): it says the seller "stays liable until the buyer receives or assumes the deposits", but § 92.105(b-1) ends "unless otherwise specified by the parties in a written contract" (Tex. Prop. Code § 92.105(b-1)). The lead may add the exception or point to `edu-security-deposit-on-sale-tx`; no change made.
20. (from topic `service-animal-denial-penalty`) `edu-service-animal-tx` (TX row; its NEEDS_REVIEW condition can now be closed): its notes say the official site contradicts itself on Hum. Res. Code ch. 121 and ask whether H.B. 4164 changed § 121.002. The corpus (official whole-code text, current through the 89th Leg., 2nd C.S.) shows § 121.006 as amended by Acts 2023, 88th Leg., R.S., Ch. 757 (H.B. 4164), "a fine of not more than $1,000" (Tex. Hum. Res. Code § 121.006(a)(1)), and § 121.002 last amended by Acts 2013, Ch. 838 (H.B. 489), so H.B. 4164 did not change the definition. The row's figures ($300 denial fine, 30 hours, $300 presumed damages, $1,000 misrepresentation fine) match §§ 121.004 and 121.006. No change made.
21. (from topic `trespass-notice`) `edu-unauthorized-occupant-removal-tx` (no error found; one omission and one stale note). (1) The prescribed complaint also requires the owner to declare that "The person is not an owner or co-owner of the property and any title to the property that lists the person as an owner or co-owner is fraudulent" (§ 24B.002(a), item 7); the row lists the eligibility conditions of § 24B.001 but not this declaration. (2) Its notes say the Penal Code sections S.B. 1333 added were NOT read; they now are: the S.B. 1333 version of Penal Code § 32.56 makes it a Class A misdemeanor to knowingly present a fake lease or deed "with intent to enter or remain on real property" (§ 32.56(a)), which the new `edu-trespass-notice-tx` states. Suggest adding item 7 and a pointer; not changed.

## §7 Findings for other states

1. (from topic `furnishings-included`) `furnishings-included-la` sits in group Security Deposit although it is a furnishings-care clause; Tenant Responsibilities may fit better (not changed).

## New variables

None.

## Proposed SOP changes

1. **Rule 59 / canvass brief: put the quote convention in the brief template itself.** Helpers in this pass followed my brief, which used double quotes for statute wording. They also double-quoted search terms in battery lines, as rule 59 [AK 4] intends, so the two were mixed. The assembler had to decide each quote's type from the data: a quoted passage becomes single-quoted only if it appears verbatim in a section the answer read. **Proposed text:** "Canvass briefs show the convention by example: statute wording in single quotes, immediately followed by its parenthetical citation; search terms, labels and clause text in double quotes. The assembler converts by verbatim match and reports both misses and single-quoted text without a citation."
2. **Rule 16: number collisions within one code.** Where several acts of one session add sections with the same number (Texas Penal Code § 32.56 has four versions, all different offenses), a row citing the number names the version by act ("§ 32.56, as added by S.B. 1333"). The corpus helper should key versions by catchline, not only by number.
3. **Rule 19: proximity patterns must cross line breaks.** In this pass's corpus helper, `.` in a pattern did not match a newline, and Texas text puts each subdivision on its own line. So `A.{0,80}B` missed matches that span subdivisions. The slice B helper caught this, which surfaced Prop. Code § 93.013, and every proximity pattern was rerun with `(?s)`. **Proposed text:** "The corpus search tool compiles every pattern with DOTALL. A battery that ran without it is rerun before an absence is written."
4. **Rule 19: enforce "recorded as failed, rerun as N" in the assembler.** Helpers twice treated a failed positive as disregarded when other positives passed. The assembler now refuses an answer that cites a battery with a failed positive unless a rerun is cited. **Proposed text:** "Any failed positive, even beside passing ones, requires a rerun under a new id; the assembler checks this."
5. **Rule 80: scale the check to the error rate, not only to the round cap.** In this pass the independent check's random samples found precision faults in about 15% of rows: dropped conditions, unstated scope limits, incomplete consequences. With two rounds covering 140 of 253 rows, about 113 rows went unchecked. **Proposed text:** "If a round's random sample shows a fault rate above 10%, the next round covers every unchecked row of the kinds that failed, even beyond the default round cap, unless Taylor says otherwise."
6. **Canvass brief: check applicability before stating a rule.** Most faults were statutes stated without their own applicability subsection: a population threshold, one program's units, owners not residents, listed pests only, lines exclusively serving the unit. **Proposed text for the brief:** "Before stating any rule, read the section's applicability subsection and the chapter's definitions, and say in the body who and what it covers. State every consequence with the conditions that trigger it."
7. **Rule 59: write recurring statutory consequences once and reuse them.** The § 92.055 closing rule appeared in five rows in four different paraphrases, and two rounds were needed to make them agree. **Proposed text:** "Before drafting, write one statutory wording for any rule several rows will state (closing a unit, repair-and-deduct, deposit refund), and have helpers reuse it verbatim."


## Proposed topic questions

1. **Allocated electricity and central-system costs (topic `utility-disclosure-attachment`).** Add a CONDITIONAL REQUIRED_DISCLOSURE clause for Texas apartment houses that allocate central-system or nonsubmetered master-metered electricity costs. It would carry the allocation-method description and the previous year's average monthly bill that Util. Code § 184.052(b)(1) requires, once 16 TAC § 25.141 is in the corpus. The question for the topic list: should `utility-disclosure-attachment` cover allocation disclosures as well as submetering ones? Texas treats them as separate regimes.

---

## Gaps-pass sync review (Claude Code, 2026-10-31)

Merged with `merge-delta.py --base 1704572`: 227 new rows and 26 shared rows tagged, nothing refused. All 238 missing topics are answered; the pass delivered no NEEDS_REVIEW rows. Texas now carries 406 active rows, every one VERIFIED; the new rows carry the canvass date in `effective_from` (SOP rule 70).

**The rows the check didn't reach.** Desktop's check sampled precision faults in about 15% of rows (dropped conditions, missing applicability limits, incomplete consequences), and its two rounds didn't cover every row. At sync, all 184 new education rows the log didn't name were screened for exactly those faults, reading each cited section's applicability subsection and the chapter's definitions. 52 fixes in 46 rows; the other 138 passed. Among the fixes:
- the § 301.041 owner exemptions;
- § 92.302's coverage (any apartment or condominium);
- § 92.0161(c-1)'s stalking right reaching only stalking on the premises;
- `edu-no-dv-lockchange-right-tx` cited the wrong section (now §§ 92.161, 92.165);
- the § 92.110(b) forwarding-address exception;
- § 92.1031's tenant-found versus landlord-found split;
- the § 92.0562(d) affidavit delays.

**Edited-after rows:** the 17 named in §5 were read; 7 fixes.

**Findings on existing rows (§6) and the items:**
- **New and override rows:**
  - New required clause `electric-allocation-disclosure-tx`: Util. Code § 184.052(b)(1) and 16 TAC § 25.141(e), fetched from the PUC, for apartment houses that allocate central-system or master-metered electricity.
  - `early-termination-tx`: a flat one month's Rent superseding `early-termination-ks`. § 91.006(b) makes the landlord's duty to mitigate non-waivable, and a fee that grows with the remaining Term sits poorly beside it.
  - `default-by-tenant-tx` gains a no-cure ground for breach of the Criminal Activity Section (§ 92.332(b)(3)).
- **Other fixes:**
  - `edu-fair-housing-tx`'s exemptions (§ 301.041);
  - `edu-unauthorized-occupant-removal-tx`: ch. 24B's complaint items, and Penal Code § 32.56 as added by S.B. 1333 (cited by act);
  - `edu-security-deposit-rules-tx`: § 92.105(b-1);
  - `edu-cares-act-notice`'s Texas segment: § 24.005(c-1).

**Tags:** all 26 confirmed, with six notes-segment fixes; every section pointer resolves.

**Spot check:** deposits (§§ 92.101-92.113), entry (no statute for a rented dwelling; § 94.004 covers manufactured-home lots only), repairs (§§ 92.052-92.0563), lockouts and utility cutoffs (§§ 92.0081, 92.008) and the eviction notice (§ 24.005 as amended by S.B. 38) across all Texas rows: consistent after the fixes.

**Decisions (§4):** no product questions held the sync. Builder points to the backlog:
- `good-cause-nonrenewal-tx` only behind a property-program question;
- the § 92.331 retaliation caution beside owner move-in;
- one tax-and-insurance escalation clause, not two.

**Other:**
- No new `{{variables}}`.
- SOP 1.94 takes up 5 of the pass's 7 proposals. Proposal 5 (extend the check past the round cap when a sample's fault rate passes 10%) was not adopted, since the cap is Taylor's usage budget; the screen above covered that gap here.
- The topic question became the new electricity clause.
- The citations file gained 255 rows. Two farm-hunting rows cite the Parks and Wildlife Code, which the extractor doesn't read, and are GENERIC there.
- Minor omissions the screen noted but did not edit are in the backlog.

## Rule type: early termination (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: `early-termination-tx` is now `rule_type` RECOMMENDED, not REQUIRED, with the shared `early-termination-ks` and every state version that copied its label (OH, NV, TX, NJ, AZ, GA, SC, NC, VA, PA, IL). Under SOP rule 56, REQUIRED means a statute requires the clause in the lease, and no state's does. The label is research metadata only; no clause text changed. Taylor's lesson 2 (flag a lease without an early-termination clause) stays as a builder warning in the backlog.
