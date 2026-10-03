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
