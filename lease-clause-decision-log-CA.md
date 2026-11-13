# California — lease-clause decision log (state #9)

> **STANDING RULE — NO RE-AUDITS (Taylor, 2026-09-26).** Every completed state (CO, WY, KS, NE, MN, ND, SD, OH, CA, NV, TX, NJ, FL) is closed. **No re-audit of any completed state is planned, now or later.** "Re-audit" means re-scrubbing everything for a state, and that won't happen. Targeted work is welcome: going back to re-verify or fix a specific row or topic in a completed state (a scalpel, not a hammer) needs no special justification; just say what and why. The word "re-audit" throughout these files refers to the one-time settings re-run of Aug–Sep 2026, which is finished. Older phrases such as "flag for the X re-audit", "live item for the X re-audit", "when X is next revisited" or "screen the completed states on their next revisit" are historical and dead: they are not a queue. Do not propose, plan or mention a re-audit, and do not park anything "for the re-audit". If something specific in a completed state looks wrong or unverified, say what and why and propose the targeted fix.

**Date:** 2026-09-19 · **Settings:** Opus, high effort, ordinary search/fetch (research mode not requested — see §1)
**Scope:** California, state-level only. Municipal rent-control and just-cause ordinances flagged, not resolved.
**Input CSV:** `lease-clauses__2_.csv`, 567 rows (CO 115, KS 114, NE 111, ND 110, MN 120, WY 99, SD 90, OH 73, CA 9 dormant).
**Output CSV:** `lease-clauses-ca.csv`, 664 rows. No ids removed, no duplicates, no dangling `supersedes`, no CA display collisions.

---

## 0. Completion status — read this first

**California is CLOSED as a state-level pass.** Every CA row is `VERIFIED`, the named-topic canvass is complete,
the base-clause extend screen is run and fully resolved, and all nine dormant rows are closed. Municipal
rent-control and just-cause ordinances remain out of scope by decision (§7) — and in California that boundary
is weaker than in any prior state, because §1946.2(i) lets a local ordinance *displace* the state scheme.

| | Count |
|---|---|
| Primary text read | **Civ. Code Title 5 Chapters 1–2 swept end to end (§§1925–1954.071)**, plus ~50 further provisions across Civ. Code, CCP, Gov. Code, H&S Code, Rev. & Tax. Code, Pen. Code and 2 CCR / 17 CCR; plus five case-law authorities (§5.22) |
| CA-specific rows | **116, all `VERIFIED`** — 59 active lease clauses, 54 landlord-education, 1 inactive alternative (§5.32), 2 retired as not in force |
| Shared base rows extended to CA | **27**, every one read in full and overlap-checked (§5.33). Held: `parking-vehicle-rules`. Superseded instead: `tenant-maintenance`, `possession-delay` |
| CA rows `NEEDS_REVIEW` | **0** |
| Dormant rows | **9 of 9 closed** — 7 rewritten, 1 retired as repealed, 1 correctly left inactive as never commenced. **None was correct as shipped.** |
| Named-topic canvass | **Core tables: 69 of 69.** **Candidate-topic tables: 70 of 70 — 69 answered, 1 not located with scope stated** (§§5.25–5.31). Plus 19 new CA-surfaced topic rows for the next state |
| Base-clause extend screen | **52 of 52** — 15 blocked and all replaced or recorded absent; 31 provisionally clear; 19 `supersedes` links |
| Output CSV | 674 rows (+107). No duplicates, no dangling `supersedes`, no rows lost, **no shared multi-state row modified** |

**Nothing is open that affects a clause.** What remains is legal-watch and deliberately-unread detail, all
recorded in the relevant rows:
- **Watch items:** a possible §3485 re-add in the *current* session; the 2030 TPA sunset; the 2029-01-20
  §1946.3 sunset; Civil Rights Council and CDPH rulemaking.
- **Unread by decision:** 17 CCR lead *dust and soil* thresholds; CCP §1577 unclaimed-property interest; CCP
  §415.46 (the prejudgment claim form); Civ. Code §§54.3, 1965; the federal SCRA, for comparison only.
- **Case law not read, conclusions textual:** *EpicentRx* (venue resolved on CCP §392 + §1953(a)(4)); *Baca v.
  Kuang* (read before building the "return, don't reserve" branch).

**The sublet decision is now the landlord's, not Taylor's** — two alternative rows plus an explainer (§5.32). It
needs one builder change: a choice-group mechanism, until which the sole-discretion option ships inactive.

**How the pass evolved, for the record.** It began as an explicit partial — four statutes verified, the
canvass at 4 of 69, the extend screen not started. Taylor then supplied primary text in batches (Instruction 8),
which is what made the rest possible: `leginfo` blocks automated fetching and most secondary sources proved
unreliable. Several findings in §§5.9–5.22 correct or sharpen earlier entries in this log; where they do, the
later section governs and says so.

## 1. Two process notes before the findings

**leginfo is robots-blocked.** `leginfo.legislature.ca.gov` refuses automated fetching, so the first four
statutes read in this pass (§§1946.1, 1946.2, 1947.12, 1950.5) came from **California.Public.Law's full-text
reproduction**; everything after that was supplied by Taylor from Justia, FindLaw and Westlaw reproductions, which carries the leginfo
source URL and a currency date (§§1946.2, 1950.5 updated 2026-01-01; §1946.1 2025-01-01; §1947.12 2024-01-01;
all verified by that host 2026-09-14). That is a faithful reproduction of uncopyrightable statutory text, but
it is a *host*, not the revisor — one notch below the standard CO/ND met when you supplied text directly.
Per Instruction 15 I am recording that as the evidentiary basis rather than letting prose tone imply more.
Nothing here rests on a landlord-industry secondary source.

**Research mode was never requested.** Per the standing rule I cannot toggle it and must tell you *before*
it is needed. Two items in §8 are genuine research-mode triggers and are flagged there; everything in this
log was reachable with ordinary search and fetch.

**Section-open vs recall tracking (Instruction 22).** Every `VERIFIED` row below was written with the
section open in front of me. Nothing in this pass was reconstructed from an earlier read in the session, so
the re-verify-the-recall-subset step has no population. The rows I could not read section-open are not
`VERIFIED` — they are `NEEDS_REVIEW`, which is the honest label.

---

## 2. Tenant Protection Act — verified, and it is more lease-invasive than any prior state

Both halves confirmed against current text. Substance is roughly as commonly reported; **the
lease-drafting consequences are not**, and two of them are load-bearing for the builder.

### 2.1 §1947.12 — rent cap
Lower of **5% + regional CPI, or 10%**, against the lowest rent charged in the prior 12 months; **maximum
two increases** per 12 months; discounts and concessions excluded and required to be listed separately in
the lease. Exemptions at (d): rolling 15-year certificate-of-occupancy, deed-restricted affordable,
dormitories, owner-occupied duplex (neither unit an ADU/JADU), and separately-alienable units meeting the
(d)(5) owner test. Remedies (k): overcharge damages, discretionary fees, **treble for wilful**, 3-year
limitation. Waiver void (l). → `rent-increase-cap-ca`.

The permitted percentage is **region- and date-dependent** — §1947.12(g)(1) keys to the metropolitan-area
CPI-U, (g)(3)(B) measures April-to-April with an August 1 switchover. It cannot be hardcoded. Flagging that
as app work, not clause text.

### 2.2 §1946.2 — just cause
Just cause after 12 months' continuous occupancy (24 where an adult was added mid-tenancy). At-fault grounds
(b)(1)(A)–(K); no-fault (b)(2)(A)–(D). Cure-first required for curable violations (c). No-fault termination
costs the owner **one month's rent** as relocation assistance within 15 days, or a written final-month rent
waiver (d)(3). **Strict compliance: (d)(4) and (g) render a defective notice VOID**; (h) allows treble
damages for wilful violations. Waiver void (j).

### 2.3 ⚠️ Finding 1 — a mandatory verbatim lease notice, in a prescribed type size, with a translation duty

**§1946.2(f)(3)** prescribes the exact wording of a notice that must appear **in the lease** (or as an
addendum or tenant-signed notice) for any tenancy commenced or renewed on or after **2020-07-01**, in **no
less than 12-point type**, and **subject to Civil Code §1632** — which triggers a translated copy where the
lease was negotiated primarily in Spanish, Chinese, Tagalog, Vietnamese or Korean.

This is the same failure shape as the federal Lead Warning Statement caught in the CO re-audit: verbatim
statutory text that a paraphrase silently breaks. It is worse here, because §1946.2(g) makes *any*
non-compliance with the section void the termination notice — so a paraphrased notice can cost the landlord
an eviction. → `tpa-notice-ca`, shipped verbatim.

Two things the library cannot currently express and which I am escalating rather than solving:
a **minimum type size**, and a **conditional obligation to produce a translated lease**. Neither is a
clause-text problem. The `notes` field records both.

### 2.4 ⚠️ Finding 2 — an opt-in landlord right, and the first recurrence of the CO pattern

**§1946.2(b)(2)(A)(ii):** for leases entered into on or after 2020-07-01, the owner/relative move-in just
cause is available **only if** the tenant agrees in writing at the time, **or a lease provision allows the
owner to terminate** on a unilateral decision to occupy.

**A silent California lease forfeits owner move-in entirely.** This is exactly the inverted pattern the CO
re-audit flagged at C.R.S. 38-12-503(11) and asked future states to watch for — *"any state with an
analogous provision means the library is silently costing landlords a statutory right."* California is the
first confirmed recurrence, and it is a far more commonly-needed right than CO's environmental-event
termination. → `owner-move-in-reservation-ca`.

Guardrails recorded in `notes`, not yet drafted into body text: (A)(iii) bars the ground where the intended
occupant already occupies a unit on the property or a similar vacancy exists; (A)(iv) requires the notice to
name the occupant and relationship and offer proof on request; (A)(v)–(vi) impose a 90-day move-in window, a
12-month occupancy floor, and a duty to re-offer the unit at the old rent plus moving expenses if either
fails; (A)(viii) defines "owner" by recorded-interest thresholds.

### 2.5 The exemption notice is also verbatim, and also mandatory
§§1946.2(e)(8)(B)(i) and 1947.12(d)(5)(B)(i) prescribe **identical** wording for the *exemption* notice on a
separately-alienable unit, and for tenancies commenced or renewed on/after 2020-07-01 it **must be in the
rental agreement**. → `tpa-exemption-notice-ca`. This row and `tpa-notice-ca` are mutually exclusive.
Getting it wrong is costly both ways: omit it on a genuinely exempt SFR and the owner loses the exemption;
include it on a non-qualifying property and the lease misstates the law to the tenant.

### 2.6 Both halves sunset 2030-01-01
§§1946.2(n) and 1947.12(o). Four CA rows lapse together on that date. → `edu-tpa-sunset-ca`, and this
belongs in the legal-watch workflow the fresh session builds.

---

## 3. Security deposits — §1950.5 verified in full

**AB 12 confirmed in substance, with details that differ from the common summary.** Cap is **one month's
rent** regardless of furnishing (§1950.5(c)(1)). The operative commencement rule is **§1950.5(c)(6)**: the
subdivision does not reach security *collected or demanded before 2024-07-01*, so earlier deposits are
grandfathered at the amount lawfully collected — that is the grandfathering you asked me to pin down, and
it is a transaction-date rule, not a tenancy-date rule.

Two exceptions: **(c)(5)** permits two months' rent for a natural person (or an LLC whose members are all
natural persons) owning ≤2 residential rental properties totalling ≤4 units — but **(c)(5)(B) disapplies it
entirely where the prospective tenant is a service member**, and separately forbids refusing to rent to a
service member on that account. **(c)(2)** permits advance payment of ≥6 months' rent on a lease of ≥6
months. **(n)** bars characterising any security as "nonrefundable". → `security-deposit-cap-ca`.

Return mechanics: 21 calendar days; $125 documentation threshold; bars on charging for wear and tear,
preexisting conditions, and professional cleaning unless reasonably necessary; initial-inspection right with
a 48-hour notice rule. **Bad-faith retention exposes the landlord to statutory damages of up to twice the
deposit plus actual damages, with the burden of proving reasonableness on the landlord** (§1950.5(m)).
→ `security-deposit-return-ca` (see §5).

Also captured as education, because it is app work more than lease text: **§1950.5(g) photograph duties**,
with two commencement dates that are easy to conflate — the move-**out** duty began 2025-04-01 and reaches
existing tenancies; the move-**in** duty attaches only to tenancies *beginning* on or after 2025-07-01.
Photographs must accompany the itemised statement wherever a repair/cleaning deduction is made
(§1950.5(h)(2)(D)). → `edu-deposit-photo-duty-ca`.

Not yet drafted into rows, recorded in `notes`: the **electronic-return duty** at (h)(1)(A)(ii) where the
landlord took deposit or rent electronically, together with its written notice-of-right; the multi-tenant
disbursement rules at (h)(1)(C); the good-faith-estimate path at (h)(3); and the (c)(4) service-member
written-explanation duty from 2025-04-01.

---

## 4. The nine dormant rows — three defective, one fatal, six unverified

You were right to treat these as research questions. Disposition:

| Row | Disposition | Why |
|---|---|---|
| `month-to-month-notice-ca` | **REWRITTEN**, now `VERIFIED` | Four defects — see below |
| `foreclosure-disclosure-ca` | **RETIRED** (inactive, `VERIFIED` as absent) | Asserts a repealed duty |
| `sex-offender-registry-notice-ca` | **REWRITTEN**, now `VERIFIED` | Paraphrased verbatim text; **dropped the meganslaw URL** — the only actionable content in the notice. Also REQUIRED→CONDITIONAL: §2079.10a(a) misses 2–4 unit buildings entirely |
| `late-fee-safe-harbor-ca` | **REWRITTEN**, now `VERIFIED` | Standard inversion confirmed. §1671(c)(2) routes dwellings to (d), where the clause is **void** unless damages were impracticable to fix — not the (b) "reasonable estimate" test the row recited. Burden also flips onto the landlord |
| `bed-bug-disclosure-ca` | **REWRITTEN**, now `VERIFIED` | Omitted the entire prescribed block; **invented an element** ("danger of self-treating with pesticides" is nowhere in §1954.603 — Instruction 18 shape); and reversed §1954.603(b), which requires the tenant's *reporting* procedure, not the landlord's investigation process |
| `flood-disclosure-ca` | **REWRITTEN**, now `VERIFIED` | Structural: treated the whole disclosure as conditional on flood-zone status. Only element (a)(1) is conditional — (2),(3),(4) are required in **every** CA lease, so non-flood-zone properties got nothing. Also glossed the trigger as FEMA-designated; the statute says "or an area of potential flooding" and never mentions FEMA |
| `nsf-fee-limit-ca` | **REWRITTEN**, now `VERIFIED` | $25/$35 confirmed, but §1719(a)(6) reaches a **check, draft or order** — likely not ACH or card, so the row asserted a safe harbour over payment types the statute may not cover. Omitted all three statutory exceptions, including the delayed-**social-security-deposit** carve-out |
| `foreclosure-disclosure-ca` | **RETIRED** (inactive, `VERIFIED` as absent) | Asserts a repealed duty |
| `meth-disclosure-ca` | **REWRITTEN**, now `VERIFIED` | **Six years stale** — the chapter has covered meth *or fentanyl* since AB 1596 (2020-01-01). Trigger was wrong (remediation order, not occupancy prohibition); duty attaches at **completed rental application**, not signing; statute needs a copy of the order, written acknowledgment before signature and the notice **attached**, none of which a free-text bracket delivers; and non-compliance lets the tenant **void the agreement** |
| `mold-disclosure-ca` | **RESOLVED**, stays inactive | Disclosure duty is contingent under §26147(e) and stays off. But the habitability limb is live — see §4.4 |

**All nine resolved. Not one was correct as shipped.** Seven rewritten, one retired as repealed, one (`mold-disclosure-ca`) correctly left inactive because the duty it states is not in force. The single remaining open question is factual, not textual: whether the department ever adopted the §26103/§26105/§26130 standards. Everything else in the dormant set is closed against primary text.

### 4.4 Mold — the disclosure row was right to be off, and wrong about why

California **does** have a live mold obligation. It sits in habitability, not disclosure:
H&S §17920.3(a)(13) lists visible mold growth as a substandard condition, and Civ. Code §1941.1(a) makes a dwelling untenantable if it is a unit described in §17920.3. Two limits that are easy to overstate in either direction: the mold must be **determined by a health officer or a code enforcement officer** — it is not self-executing on a tenant's own assessment — and mold that is *minor and on surfaces that accumulate moisture as part of their properly functioning and intended use* is excluded. The §17920.3 preamble adds a danger-to-occupants threshold on top.

**A finding for the base habitability clause screen, larger than mold:** §1941.1(a)'s opening words incorporate §17920.3 wholesale, which pulls a sixteen-item inadequate-sanitation list plus structural, wiring, plumbing, mechanical, weather-protection and fire limbs into California's tenantability standard. A reader stopping at §1941.1's seven enumerated characteristics — as the supplied extract did — sees a small fraction of it. §17920.3(a)(12) subjects insect, vermin and rodent infestation to the same officer-determination requirement as mold.

### 4.0 Three distinct "the citation resolves but the duty doesn't exist" shapes

CA produced three variants in one state, none of which a citation-existence screen (Instruction 11) can catch:

1. **Repealed by its own terms** — §2924.85, sunset 2018-01-01.
2. **Spent one-time limb** — §1954.603's duty to notify all existing tenants by 2018-01-01, discharged and
   not modellable.
3. **Never commenced** — §26147, suspended by (e) until predicate standards are adopted.

Recommend the citation screen be extended from "does the section exist" to "is the section *operative*",
with an "add and repeal" enacting title and a contingent-commencement subdivision as the two flags.

### 4.1 `month-to-month-notice-ca` — four defects in one dormant row

Read section-open against §1946.1:

1. **The 30/60 split is owner-only.** §1946.1(b) imposes 60 days on the **owner**; a tenant's notice is one
   tenancy period — 30 days on a month-to-month — *regardless of occupancy length*. The old text applied the
   split to "either Landlord or Tenant," so it bound a long-term tenant to a 60-day duty California law does
   not impose, **while reciting "as required by California law."** Same error shape as the CO entry-notice
   correction: a landlord policy dressed as a statutory command in tenant-facing text.
2. **Omits the §1946.1(d) 30-day path** for a separately-alienable unit sold to a natural-person bona fide
   purchaser in escrow (six cumulative conditions).
3. **Omits the §1946.1(h) abandoned-property statement** the owner's notice must contain.
4. **Silent on the §1946.2 just-cause overlay** — for a covered unit it told the tenant the tenancy could be
   ended on notice alone, which is false.

### 4.2 `foreclosure-disclosure-ca` — the fatal one

Civ. Code §2924.85 was added by **SB 1191 (Stats. 2012, ch. 566)**, whose title is *"An act to **add and
repeal** Section 2924.85 of the Civil Code."* §2924.85(g) sunset the section on **2018-01-01** absent an
extending statute enacted before that date; the codifier's note reads *"Repealed as of January 1, 2018, by
its own provisions."* No extension found.

**The library has been carrying a dormant clause asserting a duty that has not existed for eight years.**
It was also wrong on its own terms while the statute lived: it conflated §2924.85 (pre-lease disclosure to a
*prospective* tenant, 1–4 units only, prescribed form, English plus the §1632 languages) with §2924.8
(post-notice-of-sale notice to an *existing* tenant), and its free-text bracket could not have satisfied the
prescribed form. Per the proof-of-absence standard the absence now has its own row,
`edu-no-foreclosure-disclosure-ca`, so a future canvass can see it.

Evidentiary basis is the enacting act's title plus the sunset subdivision and a repeal annotation — **not**
a full-text read of the current code index. One notch below `CITED`; confirm at sync. **§2924.8 is a
separate, still-live duty and has not been read.** *[Resolved §5.24: read — it is a trustee and lender duty, not a landlord duty.]*

### 4.3 Four type-size floors and two translation duties — now a schema gap, not a curiosity

| Statute | Floor | Translation |
|---|---|---|
| §1946.2(f)(3) — TPA notice | 12-point | §1632 |
| Gov. Code §8589.45 — flood | 8-point | §1632 |
| §1954.603 — bed bugs | 10-point | — |
| §2079.10a — sex offender | 8-point | — |

The schema has no field for a minimum type size and no way to express "this lease must also be produced in
another language." Four required CA clauses depend on the first and two on the second. This is app and
schema work, escalated rather than solved.

**§1632 read 2026-09-19, and it is bigger than the two cross-references suggested.** The duty is to deliver
a translation of the *entire lease, every term and condition*, before signing — not a translated disclosure
— plus a notice in that language at the time and place of signing. Remedy is **rescission** (§1632(k)(1));
waiver is void (§1632(l)). Three limits worth knowing, none of them visible from §1946.2(f)(3) or
§8589.45(b): the duty reaches only a tenancy **longer than one month**, so a pure month-to-month tenancy
falls outside it entirely; house rules and furnishing inventories incorporated by reference are excluded
(§1632(g)(3)), though a later document making substantial changes re-triggers it (§1632(g)(1)); and it does
not apply where the tenant used **their own interpreter**, defined as an adult fluent in both languages and
not supplied by the landlord (§1632(h)). The English text governs (§1632(j)). → `edu-translation-duty-ca`.

---

## 5. Instruction 24 — the two invisible `REQUIRED` families

Hand-checked, as required, because the "screen base rows tagged 2+ states" step cannot see them.

- **`security-deposit-return`** (base row `states` blank, superseded by all 8 prior states) — **CA needs its
  own override and now has one**: `security-deposit-return-ca`, built from §1950.5 read in full. California
  would otherwise have inherited a clause tagged to nowhere. This is the ninth consecutive state to need it;
  the base row's blankness is now a strong signal it should be retired rather than maintained.
- **`assistance-animal-accommodation`** (base row tagged `KS` only) — **CLOSED.** CA override written:
  `assistance-animal-accommodation-ca`, plus `edu-assistance-animal-documentation-ca`. See §5.1. Both
  Instruction 24 families are now resolved.

### 5.1 Assistance animals — the strongest answer in the project, and a fifth classification category

2 CCR §§12005(d) and 12185 (Civil Rights Council fair housing regulations, operative 2020-01-01) give
California an **independent, animal-specific basis that expressly covers support animals** — emotional,
cognitive or similar support — with a reasonable-accommodation route in dwellings including common and
public use areas. Authority is Gov. Code §12935(a), referencing FEHA throughout plus *Auburn Woods I HOA v.
FEHC* (2004) 121 Cal.App.4th 1578. **It never rested on HUD guidance and survives the withdrawal intact.**

The CO re-audit's four-way ESA classification does not have a slot for this. CA's basis is neither an
independent animal-specific *statute* nor a merely generic accommodation duty — it is an independent,
animal-specific **administrative regulation** under a generic statute. Recommend the classification become
five-way.

Three findings beyond the clause itself:

- **§12185(d)(2) is the broadest fee ban in the project** — no pet fee, additional rent, additional security
  deposit, **or liability insurance**. No prior state's ban expressly reached insurance, and this one blocks
  `pet-insurance-requirement`, a base row tagged in all eight prior states. With `pet-policy` (pet
  deposit, pet rent, and §12185(d)(5)'s bar on breed/size/weight limits) that is the Ohio OAC 4112-5-07(C)
  finding recurring exactly. Both are in the extend manifest as blocked.
- **A fourth anti-letter-mill architecture.** CO regulates the provider's licence; ND/MN/SD scope who may
  certify; **CA regulates the reliability of the document**. §12185(c)(2) makes an online certification
  without an individualized assessment *presumptively* unreliable — but requires the landlord to give the
  tenant a chance to cure before denying. Easy to misread as a licence to deny.
- **Instruction 16 flag.** This is administrative code, not statute. Five states (KS, ND, SD, OH, CA) now
  depend on agency rules for a `REQUIRED` family, and agency rulemaking is invisible to bill-tracking. The
  legal-watch workflow needs a Civil Rights Council rulemaking watch distinct from its bill watch.
- **Scope trap, third occurrence of the WY/MN pattern.** 2 CCR §14331 is a near-identical assistance-animal
  regulation in the state-programs article, **not housing**. It contains the breed/size/weight bar and the
  direct-threat standard almost verbatim, which makes it seductive to cite. §12185 is the housing rule.

### 5.2 The accommodation regulations, and a mis-cite — the regulation's, not ours

Last turn I flagged my own note as wrong for recording the §12185(c)(2) online-certification presumption as
operating "under §12178(f)". **Having now read §12185(c)(2) section-open, the original note was right and my
correction was wrong.** The regulation says, in terms, that such a certification is "presumptively
considered not to be information from a reliable third party under section 12178(f)". I second-guessed a
faithful quotation against an inference. Reversed in the row.

**The mis-cite belongs to the regulation.** §12178(f) is the self-certification provision; the
reliable-third-party list is §12178(g) and the reliability test is §12178(h). §12185(c)(2)'s pointer does
not land where its own sentence says it does.

**Likely cause, recorded as a hypothesis and not verified:** §12185 was filed 9-16-2019 and has *never* been
amended; §12178 was amended 11-19-2021, operative 1-1-2022. A re-lettering in that amendment would leave
§12185 pointing at a pre-2022 subdivision. The pre-2022 text of §12178 has not been seen.

**New error shape for the checklist — cross-reference rot.** A cited authority can itself contain a stale
internal cross-reference when a sibling section is amended and the citing section is not. This is distinct
from every prior shape: the citation is real, operative, correctly transcribed, and still points at the
wrong text. Two practical rules follow: quote the regulation as written and footnote the discrepancy rather
than silently repairing it, and **treat divergent amendment dates between a citing and a cited section as a
flag**. It also argues against my own instinct last turn — when a note and an inference conflict, re-read the
source before "correcting" the note.

Three rules bind lease drafting directly

Three rules bind lease drafting directly, so they are a clause (`accommodation-request-rights-ca`), not only
education:

- **§12180(a)(1)** — unlawful to charge any fee, deposit or financial contribution as a condition of
  receiving, **processing**, or granting an accommodation. Broader than the §12185(d)(2) animal fee ban,
  because it reaches every accommodation.
- **§12180(a)(3)** — unlawful to request or require waiver of the right to request a **future**
  accommodation. A prohibited lease term, pairing with Civ. Code §1953(a)(2).
- **§12176(f)(5)** — a landlord may ask a tenant to use a form, but **may not refuse the request or refuse
  the interactive process because the tenant didn't use it.** Any library clause conditioning an
  accommodation on a written request on the landlord's form is unenforceable as written in CA. **Screen the
  base library for that pattern** — it is the kind of clause that looks administrative and is not.

And three operational duties with no analogue in eight prior states (`edu-accommodation-process-ca`):
**§12176(e)** confidentiality of all disability and request information; **§12177(b) and (e)** — no denial
for lack of information without first asking and allowing a reasonable opportunity, and **undue delay may
itself constitute a denial**; **§12179(d)(6)** — where the need arises from the owner's own failure to
maintain or repair as required by law, the undue-burden and fundamental-alteration defenses are
**unavailable**.

**§12176(f)(8) belongs in the legal tracker, not the lease:** failure to accommodate is an affirmative
defense to an unlawful detainer, and a request may be made during the eviction, at trial, or after judgment.

---

## 6. New topics California adds to the checklist

1. **Statutory lease-notice text prescribed verbatim, with a minimum type size and a translation duty**
   (§1946.2(f)(3) + §1632). Prior states had verbatim *notice* text; none had verbatim *lease* text carrying
   a type-size floor and a conditional duty to produce the whole lease in another language.
2. **Opt-in landlord termination right** — second confirmed instance of the CO pattern. This row already
   exists in the checklist as a CO-originated question; California is the first state to answer it "Present."
3. **Notice-service fee ban** (§1946.1(i)) — landlord may not charge for serving, posting or delivering any
   notice. Distinct from the returned-check fee cap and from ND's §47-16-20.1 payment-method fee ban. Worth
   screening the eight completed states on their next revisit. → `notice-service-fee-ban-ca`.
4. **Statute-level deference to municipal law in both directions** (§1946.2(i), §1947.12(d)(3)) — see §7.
5. **A dated sunset on the state's central tenant-protection statute** (2030-01-01). No prior state has had
   its core protections on a repeal clock, and it is a legal-watch shape a bill-tracking search will not
   surface until it is late.

---

## 7. Municipal layer — flagged, not resolved

Per scope. California's municipal layer is **materially different in kind** from CO's, MN's or OH's, not
just larger: the state statute expressly steps aside for it. §1946.2(i) gives way entirely to a just-cause
ordinance adopted on or before 2019-09-01, or to a later "more protective" ordinance with a binding local
finding, and §1946.2(i)(2) says a property is never subject to both. §1947.12(d)(3) yields to a stricter
local cap.

**Consequence for the product, which I am flagging rather than resolving:** for a covered unit in a
just-cause city, the state clause set may be displaced *wholesale* — not supplemented. In CO and OH the
municipal layer added obligations on top of state law; in CA it can substitute for it. Recorded at
`edu-municipal-layer-ca`. This is a stronger case for revisiting the municipal scope boundary than the
Minnesota entry that currently holds that title.

---

## 8. What is left, and what I need to finish it

> **SUPERSEDED.** This was the working to-do list at the point the pass was still partial. Every section
> requested below was subsequently supplied and read, and every open question in it has been resolved in
> §§5.4–5.23. Retained unedited as the audit trail. **The current open list is in §0.**


**Primary text still needed** (leginfo blocks me) — the dormant set is closed, so this is canvass and
extend-screen work now: **§1941.1(a)(8) onward** (the supplied extract stopped at (a)(7)); **§1954.600**
(unread head of the bed-bug chapter); **§1954** (entry); **§§1942/1942.5** (habitability, retaliation);
**§1950.6** (screening fees); **§1962** (identity disclosure); **§827** (rent-increase notice); **§1632**
(the translation duty two CA statutes now invoke); Gov. Code **§§12927/12955/12955.6** (FEHA — the open
assistance-animal `REQUIRED` family); CCP **§§1161/1162** (notice mechanics).

**Two genuine research-mode triggers** — tell me if you want either turned on:
1. Confirming §2924.85's repeal was never reversed, and screening whether **§2924.8** creates a live duty
   (proof-of-absence + cross-chapter gap discovery).
2. Whether California's misrepresentation and assistance-animal provisions reach **housing** specifically —
   the WY/MN scope trap, which has bitten this project twice.

**Extend screen: RUN** (2026-09-19). All 52 active base rows examined — 18 caught by a pattern screen keyed
to verified CA rules, all 18 read in full, and the 34 the screen called clean read by eye. **That eyeball
pass found five more blockers the pattern screen missed**, which is the Ohio re-screen failure mode
repeating and the reason it was run. Result: **15 blocked, 6 overrides still to build, 30 provisionally
clear, 0 tagged `CA` yet.** Four `supersedes` links set (`late-fee`, `landlords-access`,
`security-deposit-use`, `returned-payments`). See the companion manifest.

**The seven sections supplied on 2026-09-19 closed the screen.** Verdicts below; details in the manifest.

Three findings from the screen worth surfacing here:

- **`inspection-rights` has no CA basis at all.** It grants "periodic inspections of the property during the
  Term", and periodic inspection is **not among §1954(a)'s permitted entry purposes** — the only inspection
  listed is the §1950.5(f) initial inspection. Missed by the pattern screen; caught by eye.
- **The CA/Ohio divergence on `services-utilities-provided` resolved — into convergence by another route.**
  I flagged it as possibly surviving in CA because its disclaimer is limited to causes beyond the landlord's
  reasonable control, which §1953(a)(5) may not reach. **§1942.1 closes it**: any agreement waiving or
  modifying §1941 or §1942 rights is void *with respect to any condition which renders the premises
  untenantable*, and water, heat and electrical service are §1941.1 items. Ohio got there through
  §5321.13(D); CA gets there through habitability rather than the exculpation rule I first reached for.
  Same answer, different statute — which is still the argument against batching, just not the one I expected.
- **Two suspicions on `common-area-use` both confirmed.** Its ban on any sign visible from outside is
  unlawful as to **political signs** (§1940.4(a), six-square-foot limit, display locations differing by
  dwelling type), and its flat **waterbed** ban is barred by §1940.5 for any structure with a certificate of
  occupancy issued after 1973-01-01. → `political-signs-ca`, `waterbed-ca`.
- **§1940.5(g) is a third exception to the AB 12 deposit cap** — "notwithstanding Section 1950.5", a
  waterbed lets the owner increase the deposit by half a month's rent plus a reasonable administration fee.
  Cross-noted on `security-deposit-cap-ca`; one month is not an absolute ceiling in CA.
- **`smoking-policy` clears rather than blocks.** §1947.5(b)(1) requires a no-smoking lease to specify *the
  areas* where smoking is prohibited; the base row enumerates them, so it satisfies the requirement.
- **A fourth opt-in pattern, running the landlord's way this time.** CCP §1174(c)'s mandatory five-day
  post-judgment redemption window applies only where a written lease of more than one year **contains no
  forfeiture clause**. Including one removes the mandatory stay. That has to be weighed against §1174(a),
  which forfeits the lease only if the §1161 notice *elected* forfeiture. Flagged for your decision rather
  than drafted. → `edu-forfeiture-redemption-ca`.

**All overrides now built.** Eleven CA replacement rows written this session, plus
`edu-no-periodic-inspection-ca` recording the one blocked row with no replacement. Seventeen CA rows carry
`supersedes` links. The one row where CA's fix differs in kind from Ohio's is
`services-utilities-provided-ca`: **narrowed with a tenantability carve-out rather than removed**, because
outside tenantability the disclaimer waives no statutory right.

**Canvass: 36 of 69 answered** (2026-09-19). Thirty-two rows filled this pass from the 53 provisions read,
including all four Core Obligations deposit rows, both habitability rows, the tenant repair duty and remedy,
the general reasonable-accommodation duty, rent-increase and termination notice, and a compiled
required-disclosures list. **The 32 still unanswered are topics no section read this pass touches** — radon,
deposit interest, fair housing protected classes, voucher/source-of-income mandates, deposit installment
rights, confession-of-judgment, all-in pricing, unconscionability, landlord liens, tenant-death termination,
casualty, DV/stalking protections, smoke and CO alarms, EV charging, eviction record sealing, immigrant
tenant protections, and the service-animal misrepresentation penalty. Each needs its own statute; none can
be inferred from what is already read.

### 5.12 Citation-existence screen — RUN

Extracted every section number appearing in any CA row's `bodyText` or `notes` and classified it.
**83 distinct sections cited; 53 read section-open; 30 cited but not read.** No fabricated citation was
found — every number traces to text actually seen, either read directly or quoted inside a section that was.
That is a meaningful negative given this project has caught fabricated or wrong cites in every prior state,
though note the one real citation defect in CA came in through a *dormant row*, not through this pass:
`foreclosure-disclosure-ca` asserted §2924.85, repealed since 2018.

The 30 unread cites are not equivalent, and lumping them would overstate the gap:

**(a) Quoted inside statutory text I did read — not authority I rely on (9).** Pen. Code §§290.46 and 290.4
(inside the §2079.10a notice), §597.5 and §597b (inside §3482.8), §829.5 (inside §17920.3), Food & Agric.
§31601 (inside 2 CCR §12185(d)(9)(D)), IRC §856 (inside the §1947.12 exemption notice), Gov. Code §§12920
and 12935 (the CCR's own authority and reference notes). Nothing turns on reading these separately.

**(b) Deliberate non-reliance (3).** Ohio §5321.13 appears only in comparative notes. 2 CCR §14331 appears
only as the recorded scope trap — the non-housing twin of §12185 that must *not* be cited for a lease.
§2924.85 appears only as the repealed section, cited to record its repeal.

**(c) Genuine unread dependencies (18)** — each already flagged in the row that cites it:
§2924.8 (post-sale tenant notice, `foreclosure-disclosure-ca`) · H&S §§26103, 26105, 26130 (the mold
contingency predicates) · H&S §17920.10 (the other incorporation in §1941.1(a)) · §1962.5 (waterbed
insurance application content) · CCP §1010.6 (electronic service) · CCP §1179 (relief from forfeiture) ·
2 CCR §12264 et seq. (criminal history in screening — an entire untouched area) · §1353.6 (CID governing
documents) · H&S §17959.6 (accessibility features in new construction) · H&S §17973 and Civ. Code §1954.201
et seq. (the two unread entry grounds in §1954(a)(5)–(6)) · §1954.600 (unread head of the bed-bug chapter) ·
Civ. Code §§1980–1991 (abandoned property, no CA row exists) · H&S §§25400.22 and 25400.27 (the meth order
and no-further-action notice) · Rev. & Tax. §7282 (campsite exclusion).

**None of the 18 undermines a row that is currently `VERIFIED`** — each is a downstream cross-reference
recorded in `notes` as unread, not a load-bearing authority for the clause text.

**`notes` propagation screen — RUN, and it is clean by construction.** The §5a.1 multi-state edit rule
requires a written note in every tagged state's log whenever a shared clause is edited. **No shared
multi-state row was edited in this pass.** Every CA divergence was handled by writing a new CA row with a
`supersedes` link — 19 of them — leaving the base rows and the eight prior states' text untouched. So no
cross-state propagation notes are owed. That is worth recording explicitly, because "no notes owed" and "we
forgot to write the notes" look identical in a log that stays silent.

### 5.10 §1951.2 — the flag was right, and it is a fifth opt-in

I flagged §1951.2 as unread and as the section that would confirm the damages measure in
`early-termination-ca`. It did not confirm it — **it corrected it.**

**§1951.2(c)(1) makes the balance-of-term measure available only if the lease says so.** After a breach and
abandonment the landlord can recover unpaid rent earned before termination and rent from termination to
award (§1951.2(a)(1)–(2)) as of right. But **rent for the balance of the term after the award** —
§1951.2(a)(3) — is available *only* where the lease expressly provides for it, or where the landlord relet
before award and proves the reletting was reasonable and in good faith. My first draft said "actual damages
reduced by Landlord's reasonable efforts to re-rent", which tracks (a)(2) and **silently forfeited (a)(3)**.
The statutory recital is now in the body text.

**That is the fifth instance of the opt-in pattern in California**, after §1946.2(b)(2)(A)(ii) owner
move-in, CCP §1174(c)'s forfeiture clause, §827(a)'s seven-day terms-change notice, and §1942.1's
arbitration limb. The pattern has now appeared often enough in one state that it should be a standing
canvass question rather than a CO-originated curiosity: *which landlord rights does this state condition on
the lease saying so?*

Two further drafting points: **§1951.2(b)** lets the lease specify the interest rate on the pre-award
amounts, with the legal rate as the silent-lease default; and the burden of proving that loss could
reasonably have been avoided sits on the **lessee**, not the landlord, which is more favourable than a
general duty-to-mitigate framing implies. → `edu-abandonment-damages-ca`.

**§1951.2(e) remains a suspected opt-in, unresolved:** it preserves the lessor's indemnification right for
pre-termination personal injury or property damage "where the lease provides for such indemnification",
which sits in tension with §1953(a)(2) depending on whether the indemnity runs to third-party liability or
to the tenant's own claims. Those are different animals and the section does not say which.

### 5.11 §1951.4 — a seventh opt-in, and it overturns a screen verdict

§1951.4(a): the continue-the-lease-and-collect-rent remedy "is available **only if the lease provides for
this remedy**", and the statute supplies **safe-harbour wording** that satisfies the requirement.
→ `continue-lease-remedy-ca`, shipped verbatim.

**But reciting it is not enough, and that is the trap.** §1951.4(b) makes the remedy operate only if the
lease *also* satisfies one of three sublet/assignment conditions: it permits or does not restrict
subletting and assignment; or permits them subject to express standards reasonable at execution (express
standards are **presumed reasonable**, a presumption affecting the burden of proof); or permits them with
consent **not unreasonably withheld**.

**This overturns my extend-screen verdict on `no-sublet-assign`.** I marked it provisionally clear because a
sole-discretion consent requirement is lawful in a CA residential lease. That was right as far as it went
and wrong in consequence: sole discretion satisfies none of the three limbs, so a landlord using the base
clause **forfeits the §1951.4 remedy entirely** — even with the recital in the lease. The clause isn't void;
it's self-defeating, which is a defect shape the screen wasn't looking for.

**The trade-off is Taylor's call, not mine.** Keep sole discretion and retain maximum control over who
occupies the property, but lose §1951.4 and be left with §1951.2 damages after termination; or adopt "not
unreasonably withheld" and keep both remedies at the cost of having to justify a refusal. I drafted the
reasonableness version in `no-sublet-assign-ca` because it is the cheapest route and because §1951.4(c)(3)
confirms that lawfully withholding consent does not itself forfeit the remedy — **reversible on request**.
§1951.4(b)(2)'s express-standards route is the alternative if control matters more.

**Seven confirmed opt-in landlord rights in California now:** §1946.2(b)(2)(A)(ii), CCP §1174(c), §827(a),
§1942.1's arbitration limb, §1951.2(c)(1), §1951.2(b), and §1951.4(a). This is no longer a pattern the
checklist should carry as a CO-originated curiosity — it is a standing question for every state. **One flag:** Civ. Code §1951.2 is unread and would confirm the
actual-damages measure now used in `early-termination-ca`.

### 5.3 Modifications — §12181, and a second insurance-condition ban

Four landlord-side prohibitions here are lease-drafting rules, so they ship as a clause
(`reasonable-modification-ca`): **no increase to a customarily required security deposit** for an individual
with a disability and no automatic escrow (§12181(b)); **no particular contractor** may be required, and
denying a *type* of modification is unlawful absent undue burden or fundamental alteration (§12181(c));
**no liability waivers or insurance requirements** may be imposed as conditions on a modification
(§12181(f)) — a second insurance-condition ban after §12185(d)(2), and this one is not animal-specific; and
**no requiring the tenant to move to a different unit** in lieu of allowing a modification (§12181(j)).

Restoration is interiors only, only where reasonable (§12181(a)) — never exteriors, common or public use
areas. Where escrow is justified it must be negotiated, capped at the restoration cost, paid over a
reasonable period, with **interest accruing to the tenant**, and the full cost may never be demanded up
front.

### 5.4 Repair-and-deduct and retaliation

**§1942 accepts oral notice.** "Written or oral notice to the landlord or his agent" — so any clause
conditioning repair-and-deduct on *written* notice modifies a statutory right and is exposed under
§1953(b), which voids such a modification unless the lease was presented before possession.
**Screen result: zero hits.** I searched every active base row tagged to 2+ core states for a written-notice
repair requirement and found none. Clean negative, recorded so a future canvass doesn't redo it.

§1942(b)'s 30 days is a **rebuttable presumption** of reasonableness affecting the burden of producing
evidence — not a waiting period. Shorter notice is permitted where circumstances require, so a lease
reciting a flat 30-day rule would overstate the landlord's protection. Caps: one month's rent per repair,
twice per 12 months. → `repair-and-deduct-ca`.

**§1942.5 contains two distinct prohibitions that are easy to collapse into one.** Subdivision (a) is the
180-day tenantability window — limited to a tenant not in default on rent, invokable once per 12 months,
with the clock running from the *latest* applicable trigger. Subdivision (d) is separate and untimed: no
retaliation for tenant organizing or for lawfully exercising *any* right, with the burden of producing
evidence on the tenant. They have different scopes, different limits and different burdens.

Three things with no analogue in eight prior states:

- **§1942.5(c) and (e): threatening to report the tenant — or anyone the landlord knows to be associated
  with the tenant — to immigration authorities is expressly retaliatory** under both prohibitions.
  §1942.5(k) carves out compliance with federal rent-limitation or rental-assistance obligations.
- **§1942.5(a)(1) lists notice of a suspected bed bug infestation as a trigger**, tying the bed-bug chapter
  directly to the retaliation clock — a tenant's report under §1954.603 starts 180 days running.
- **§1942.5(g) is a drafting duty, not just a defence:** the landlord may act within the window for a lawful
  reason *if the notice states the good-faith ground*, and must prove it if controverted. That dovetails with
  §1946.2's just-cause statement requirement.

§1942.5(i) is also a **reciprocal fee provision**, triggered by either party requesting fees at initiation —
relevant to the `default-by-tenant` reciprocity question in the manifest. → `edu-retaliation-ca`.

### 5.5 Four more required-content and process rules

**§1962 — owner identification, and it must be *in the lease*.** The statute says "disclose **therein**", so
this is lease content, not a side notice, and the street address must be one at which personal service can
be effected — a PO box will not do. Two features to build for: §1962(a)(2)(B) lets the owner substitute a
bank account number plus the institution's name and street address **only if the institution is within five
miles of the rental property**, or EFT setup information. And §1962(c) has real teeth — the duty runs to a
**successor** owner or manager within 15 days, and a successor who hasn't complied **may not serve a CCP
§1161(2) notice or evict for nonpayment accruing during the noncompliance**, though the tenant stays liable
for the rent. A missing disclosure disarms the eviction remedy for a period. §1962 sits in **Chapter 4**,
outside the Chapter 2 provisions — fifth cross-chapter confirmation in CA. → `owner-identity-disclosure-ca`.

**§827 — the rent-increase notice applies to TPA-exempt units too.** 30 days at 10% or less, **90 days above
10%**, with the threshold measured *cumulatively* across the 12 months before the effective date — so two 6%
increases in a year push the second into the 90-day tier. This is independent of §1947.12: a landlord on an
exempt single-family home has no cap but still owes 30 or 90 days. **Do not condition this row on TPA
coverage.** §827 sits in Division 2, a third code location for CA landlord-tenant law.
→ `rent-increase-notice-ca`.

**§1941.2 is a condition on the landlord's duty, not a tenant duty clause.** The landlord's §1941/§1942
repair obligation is excused only where the tenant is in *substantial* violation **and** that contributes
*substantially* to the dilapidation. A clause reciting the five duties without both qualifiers overstates
the landlord's position, which is why the row ships as RECOMMENDED rather than REQUIRED. **Trap at
§1941.2(b):** the cleanliness and waste-disposal limbs do not apply at all where the landlord has expressly
agreed in writing to perform them — so a lease bundling janitorial or trash service silently disables two of
the five excuses. → `tenant-maintenance-obligations-ca`.

**§1950.6 — do not hardcode $30.** The cap is the lesser of actual cost plus reasonable value of time, or
$30 per applicant, but the $30 **has been CPI-adjustable annually from a 1998 base** — so the operative
figure is a landlord-computed number well above $30, not a published one. The row says "a statutory amount
adjusted annually for inflation" rather than asserting a figure the app cannot derive. §1950.6(c)(2) also
imposes a **structural choice** new to this project: the landlord must operate either a
first-come-first-considered process against written criteria supplied *with the application form*, or refund
every non-selected applicant in full. That is product workflow, not lease text. Amended by **AB 1170,
effective 2026-01-01** — the most recently changed provision in the CA set. → `edu-screening-fee-ca`.

### 5.6 The notice statutes — one open question closed, one new topic shape

**The notice-fee scope caution is resolved.** I flagged several turns ago that §1946.1(i)'s fee ban sits
inside the periodic-tenancy termination section and might not reach a CCP §1161 three-day notice. It doesn't
need to: **CCP §1161(6)** supplies a parallel ban for that family — "a landlord or its agent shall not charge
a tenant a fee for serving, posting, or otherwise delivering any notice, as described in this section" —
added by SB 611 and operative 2025-02-01. `notice-service-fee-ban-ca` widened to cover both.

**New topic shape: the same prohibition enacted twice, in two codes, by two vehicles.** Citing only one
understates the coverage, and a canvass that finds one and stops will mis-scope the rule. Worth screening the
eight completed states for duplicated prohibitions.

**§1161(2) mirrors Civ. Code §1962 almost exactly — including the five-mile financial-institution limit and
the conclusive-presumption-on-mailing proviso.** That makes the lease disclosure load-bearing twice over: it
supplies the same facts the pay-or-quit notice must recite, and §1962(c) independently bars a non-compliant
successor owner from serving a §1161(2) notice at all. **Get the lease disclosure wrong and the eviction
notice breaks too.** → `edu-three-day-notice-ca`, routed to education per the standing notice-and-cure
decision.

Details worth carrying: the three days **exclude Saturdays, Sundays and judicial holidays** in both the
§1161(2) and §1161(3) windows; a rent notice may be served up to **one year** after the rent falls due; and
the §1161(3) cure right runs not just to the tenant but to a subtenant in actual occupation, **a mortgagee
of the term**, or anyone interested in the lease's continuance.

**§1013 closes the §827 dependency:** five calendar days for mail within California, 10 if either end is
outside CA but within the US, 12 for an address-confidentiality-program address, 20 if either end is abroad.
So a mailed rent increase within CA is effectively 35 days at the lower tier and **95 days** above 10% — the
app must compute from the service method, not the tier alone.

**Not resolved:** §1946.2(c) requires a cure opportunity "pursuant to paragraph (3) of Section 1161" before
a just-cause termination for a curable breach. How that sequences against a §1161(4) no-cure ground has not
been worked through. Also note §1946.1(f) allows certified or registered mail as an alternative to §1162
service for a periodic-tenancy termination, while §1162 itself does not list mail alone — the two service
regimes differ and must not be merged in the tracker.

### 5.7 Scope — both open gaps closed, and one reading I am not asserting

**§1961 closes the §1962 question.** Chapter 4 applies to "every dwelling structure containing **one or more
units** offered to the public for rent or for lease for residential purposes." No unit-count threshold, no
owner-type exemption, no small-landlord carve-out — unlike §1950.5(c)(5) or §1947.12(d). **A single rented
house is covered.** The only boundary in the text is "offered to the public", which §1961 does not define and
which I have not researched.

**§1940 closes the §1161(7) question and is worth its own row.** The chapter reaches everyone who hires a
dwelling unit — "boarders, lodgers, and others, **however denominated**" — so calling an agreement a licence,
a room-share or a lodging arrangement does not move it outside. Two exclusions only: transient occupancy
subject to transient occupancy tax, and hotel/motel occupancy where the innkeeper retains a right of access
**and all five listed services are offered to all residents**. That test is **conjunctive** — a short-stay
operator missing any one of the five is inside the chapter and owes the full CA clause set. That is the
provision a short-term-rental operator is most likely to assume protects them.

§1940(d) is a useful construction rule: nothing limits a Chapter 2 provision's application to a tenancy in a
dwelling unit unless that provision is **so limited by its own terms**. Read the chapter broadly by default.
→ `edu-tenancy-scope-ca`.

**A reading I am flagging rather than asserting.** §1940(b)(1) contains a double negative: the transient
exclusion does not apply to "a person to whom this paragraph pertains if the person has **not** made valid
payment for all room and other related charges owing as of the last day" of taxable occupancy. On its face
that keeps a *non-paying* transient outside the chapter. But the sentence is genuinely awkward, and the
practical question — when a hotel guest who overstays becomes a tenant entitled to unlawful-detainer process
— is the kind that turns on case law rather than text. **Not researched. Do not build occupancy-type logic
on this subdivision without confirming it.**

### 5.8 The transient boundary, and the screening-fee decision that costs money

**R&T §7280 supplies the concrete line §1940(b)(1) needed.** The tax reaches occupancy of a hotel, inn,
tourist home, motel or other lodging "**unless the occupancy is for a period of more than 30 days**". Because
§1940(b)(1) excludes occupancy that *is or would be* subject to that tax, the 30-day line governs even in a
jurisdiction that never levied one. **A stay of more than 30 days is inside Chapter 2**, subject still to the
separate five-service hotel exclusion. §7280(c) also sweeps campground and RV-park spaces into "other
lodging". *The §1940(b)(1) non-payment double negative flagged in §5.7 is a separate question and remains
open.*

**§1950.1 makes accepting reusable screening reports a binary decision with a price.** A landlord need not
accept them (§1950.1(h)), but one who does may charge an applicant who supplies one **neither an access fee
nor an application screening fee at all** — §1950.1(d) applies "notwithstanding Section 1950.6". Electing to
accept forfeits screening-fee revenue from every applicant who brings one, so this belongs in the app as a
**landlord-level setting, not a per-application choice**. The report must have been prepared within the
previous 30 days at the applicant's own request *and expense*, and be available to the landlord at no cost —
a report the landlord pays to access is not a reusable report and does not trigger the ban.
→ `edu-reusable-screening-report-ca`.

§1950.1(g) is a one-way local-preemption rule: where a local policy conflicts, whichever gives **applicants**
greater protection applies. Third CA provision deferring to the municipal layer after §1946.2(i) and
§1947.12(d)(3).

**Gap-discovery find, flagged not resolved:** §1950.1(f) points at **2 CCR Article 24, §12264 et seq.** —
Civil Rights Council regulations on considering criminal history in housing — plus local ordinances. That is
an entire tenant-screening regulatory area this pass has not touched and which **is not in the canvass at
all**. It should become a checklist topic for every state.

### 5.9 §1161(4)'s nuisance list is one statewide ground, one city-only ground, and a dead pointer

I called these low priority. They weren't — reading them changes what the limb is worth.

- **Civ. Code §3482.8** (dogfighting, cockfighting) — **statewide**, and the only one of the three that is.
- **Civ. Code §3486** (controlled-substance purpose) — **applies only in the City of Los Angeles**
  (§3486(g)), and its 2014 operativity was itself conditioned on the city's reporting compliance.
- **Civ. Code §3485** (unlawful weapons or ammunition) — **appears repealed**. §3485(j) provided it would
  remain in effect only until 2024-01-01, and the codifier's note reads "Repealed as of January 1, 2024, by
  its own provisions." Corroborating but not conclusive: the text is served as the *2022* code while the
  other two came as 2025 — what a publisher does when a section has left the current code. Same evidentiary
  posture as §2924.85; confirm against the current index at sync.

**Second instance of cross-reference rot, and worse than the first.** With 2 CCR §12178(f) the target
existed but had been re-lettered. Here the target is **gone**, and CCP §1161(4) was amended by SB 611 in
2024 and made operative 2025-02-01 **while still citing it**. A recently-amended statute is not evidence its
cross-references are current.

**A genuinely new scope shape for the checklist: state law that is geographically confined to named
cities.** §3486 is not a municipal ordinance — it is a Civil Code section that operates only in the City of
Los Angeles, and repealed §3485 covered LA, Long Beach, Sacramento and Oakland. The project's municipal
boundary was drawn around *ordinances*; this sits inside state law and would be missed by that boundary
entirely. Worth screening prior states for city-limited state provisions.

**Real landlord exposure, which is why this became an education row rather than a footnote:** §3486(a)(1)(E)
puts up to **$600** of the prosecutor's costs on the owner upon accepting an assignment, and §3486(a)(3)
assesses costs against the **defendant owner**, with the abstract of judgment becoming **a lien on the
property**. An owner who ignores a 30-day notice can be joined as a defendant in an action against their own
tenant. → `edu-nuisance-eviction-assignment-ca`.

§3486(a)(1)(C) also requires the tenant notice in at least **14-point bold type** and in English plus all
§1632 languages — a fifth type-size floor and a third §1632 linkage, though that notice is the prosecutor's
to serve, not the landlord's. (habitability, retaliation); **§1950.6** (screening fees); **§1962** (identity
disclosure); **§827** (rent-increase notice); **§§1954.201 et seq.** and **H&S §17973** (the two unread
entry grounds in §1954(a)(5)–(6)); CCP **§§1161/1162**.

### ⚠️ Cross-body citation ambiguity — a new error shape, and one I caused

Two of the six sections supplied on 2026-09-19 were the right *number* in the wrong *body of law*:

- **CCP §1953** was supplied; **Civil Code §1953** was wanted. CCP §1953 defines "record" for an article on
  records destroyed by fire.
- **Gov. Code §§12176–12180** was supplied; **2 CCR §§12176–12180** was wanted. Gov. Code §12178 is a
  Secretary of State fee provision; 2 CCR §12178(f) is the accommodation-documentation reliability rule.

**The second one is my fault** — §8 listed "§§12176–12180" inside a run of Civ./Gov. Code cites without the
`2 CCR` prefix. California has a §12178 in the Government Code *and* in Title 2 of the CCR, and a §1953 in
both the Civil Code and the CCP. **A bare section number is not a citation in California.** Every CA `notes`
entry and the citations file should carry the body explicitly. This is a cousin of NE's freeze-date trap and
the WY/MN scope trap: the cite resolves cleanly, to the wrong law. Added to the checklist as a new topic.

### §§1668 and 1953 — the exculpation answer, and a correction to what I wrote last turn

§1668 alone is narrower than Ohio §5321.13(D): it reaches fraud, willful injury and violation of law, but
not on its face ordinary negligence untouched by the public interest. On that basis I said CA's fix might be
a *narrowed* clause rather than Ohio's removal. **Civil Code §1953 corrects that.**

§1953(a)(5) voids any lease provision by which the tenant waives the right to have the landlord exercise a
duty of care *imposed by law* to prevent personal injury or **personal property damage** — precisely what a
blanket "Landlord is not liable for loss or damage to Tenant's personal property" clause does. §1953(a)(2)
is broader again, voiding waiver of the right to assert *any* future cause of action against the lessor.
Together they are the close Ohio analogue, and they point to **removing** the exculpatory limb, as Ohio
required — not narrowing it. The manifest entry has been rewritten accordingly.

§1953(a)(1) also bars contracting around §1950.5 or §1954 at all, which is why `security-deposit-cap-ca`,
`security-deposit-return-ca` and `landlord-entry-ca` must track those statutes rather than vary them.

### §1953(b) — a document-timing rule with no analogue in eight prior states

Any provision modifying or waiving a statutory right, not already void under §1953(a), §1942.1, §1942.5 or
§1954, is **void unless the lease was presented to the tenant before the tenant took actual possession**.
A lease signed after move-in loses every statutory-right modification in it. Renewals carrying the same
provision forward are carved out; the section applies to leases executed on or after 1976-01-01.

**This cannot be caught by any clause-level screen** — it turns on *when the document was handed over*, not
what it says. It is app behaviour, and it is escalated rather than solved. → `edu-lease-waiver-void-ca`.

Not resolved: §1953(a)(4)'s "procedural rights in litigation" plainly reaches some jury-waiver, venue and
fee-shifting limbs, but how far is case law rather than text. §§1942.1 and 1942.5 remain unread.

**Carried forward, unresolved:** §2924.8 *[resolved §5.24]*; the §1632 translation duty as a product capability; the
type-size floor as a schema gap; retirement of the blank-`states` `security-deposit-return` base row.

### 5.13 The abuse, fair-housing and harassment batch — nine rows, and CA's most severe penalties

**§1946.7 is much broader than "domestic violence."** Subdivisions (a)(6)–(8) reach *any* crime causing
bodily injury or death, any crime involving a firearm or other deadly weapon, and any crime involving force
or the threat of force. A canvass row labelled "DV protections" understates it. Its documentation catch-all
at (b)(4) is a deliberate trade: easier for the tenant to use, but (k)(2)(B) removes statutory damages
against the landlord where the tenant relied on it alone.

**The enforcement asymmetry in this batch is the story.** Civ. Code §1940.35 imposes **mandatory statutory
damages of 6 to 12 times monthly rent, per person**, for disclosing immigration status to an agency for
harassment or eviction purposes, plus fees and a DA referral. §1946.7(k) is $100–$5,000. §1940.2(b) is
$2,000 per violation. These are the most severe landlord penalties found in any state in this project.

**§1940.2(a)(4) connects back to the entry work:** a *significant and intentional* violation of §1954 is
statutory harassment carrying the $2,000 penalty — so misuse of entry is not merely a §1954 problem.

**§1946.8 needs an affirmative clause, not silence.** Any provision limiting the right to summon emergency
assistance is void — but the way it creeps into a lease is through a nuisance or excessive-police-calls
clause. Screen for one. Note §1946.8(f)(2)'s rebuttable presumption if an unlawful detainer is filed within
30 days of assistance being summoned.

**Two rules bind the screening workflow rather than the lease**, and the app will get them wrong by default:
§12955(o)(1)(A) requires any income standard for a voucher holder to be keyed to **the tenant's portion of
rent only** — a 3x-contract-rent rule is unlawful; and §12955(o)(1)(B) requires offering **alternative
evidence of ability to pay instead of credit history**, with time to supply it.

**§§1980–1991 close a gap the project had in every state.** The procedure is optional, but §1981(e) means
skipping it forfeits the §1989 liability shield entirely, and §1984(b) requires picking correctly between
two alternative closing statements depending on whether the property will be sold or is believed worth
under $700.

**H&S §17973 is a live, already-overdue compliance item**, not a future one: first balcony inspections were
due 2026-01-01 for any building with 3+ units, and non-compliance runs **$100–$500 per day** plus a
recordable building safety lien. It also closes one of the two unread §1954(a) entry grounds.

**One flagged inference, not a holding:** §1710.2 is drafted as a *non*-disclosure safe harbour. That a
death within three years must be disclosed is an inference from the carve-out plus general materiality —
recorded as education only, with no lease clause shipped, pending case law.

**Wrong-jurisdiction supply, recorded as the fourth citation-ambiguity instance:** the batch included
**Texas** Occupations Code §1954.201 (asbestos licensing). The California §1954.201 et seq. — Chapter 2.5,
the other unread §1954(a) entry ground — is still outstanding. Same section number, different *state*.

### 5.14 Alarms, EV charging, criminal-history screening — and both §1954 entry grounds closed

**Both previously unread §1954(a) entry grounds are now identified.** §1954(a)(5) points at Chapter 2.5
(§1954.201 et seq.), which is the **water submetering** chapter for multifamily rental buildings;
§1954(a)(6) points at H&S §17973, the balcony inspection regime. Separately, **H&S §13113.7(d)(2)(A)
grants its own entry right** for smoke alarm work, outside §1954 entirely, with its own written-notice rule
and 24-hour presumption. California therefore has at least two parallel statutory entry regimes with
separately worded notice requirements — worth knowing before the builder treats §1954 as the only one.

**The alarm duty is time-triggered, not a standing one.** §13113.7(d)(2)(B) requires alarms to be
**operable at the moment a new tenancy is created**; after that the duty flips to the tenant to report, and
the owner is expressly not in violation for a defect it was never told about. That allocation is what makes
it lease text rather than education. CO devices are **conditional** — only where there is a fossil-fuel
appliance, fireplace or attached garage.

**Worth not overstating to landlords:** §17926(d) caps the CO civil remedy at **actual damages not
exceeding $100**, and §17926(c)(2) requires a 30-day notice to correct before any fine. Next to §1940.35's
6-to-12-times-monthly-rent damages, that is a reminder that CA's penalty severity is wildly uneven and
should not be described in general terms.

**§1947.6's rent-control exemption is spent.** §1947.6(b)(4) exempts rent-controlled dwellings — but by its
own terms it does not apply to any lease executed, extended or renewed on or after 2019-01-01. Coding it as
a live exemption would be wrong for essentially every current lease. A fourth "the citation resolves but the
duty doesn't apply as written" shape: **an exemption that repealed itself prospectively.**

**Criminal-history screening closes the gap flagged from §1950.1(f), and it is severe.** 2 CCR §12269(a)(5)
bans **blanket bans by name** with four worked examples, so the most common industry screening policy is per
se unlawful in California. §12269(a)(1)–(4) prohibit **seeking** — not merely acting on — arrests without
conviction, diversion participation, sealed or expunged convictions and juvenile adjudications. And
§12266(d)(4) makes **delaying the criminal-history inquiry until after financial qualifications are
verified** a factor in whether a less discriminatory alternative existed: a workflow-ordering rule that sits
alongside §1950.6(c)(2) and §1950.1.

**Fifth citation-ambiguity instance, and a new sub-shape: decimal precision.** The batch supplied Civ. Code
**§1670.50** (buyer-broker representation agreements) where **§1670.5** (unconscionability) was wanted.
§1670.5 and §1670.50 are different sections whose numbers differ only by a trailing zero. Added to the
cross-body citation-ambiguity topic: in California a citation needs the code body *and* exact decimal
precision.

### 5.15 §1942.4 — the section I should have found sooner, and two corrections

**§1942.4 bars the landlord's core economic act, not merely the eviction.** Where four conditions coexist,
a landlord may not demand rent, collect rent, issue a rent-increase notice, **or issue a three-day
pay-or-quit notice** at all. Conditions: the dwelling substantially lacks a §1941.1 characteristic, violates
H&S §17920.10, or is substandard under §17920.3 to a degree endangering health or safety; **a public officer
has inspected and notified the landlord in writing**; the conditions have gone unabated **35 days** beyond
service, without good cause; and the tenant did not cause them. Remedy: actual damages plus **special
damages of $100–$5,000**, with prevailing-party fees, and the court may order abatement and retain
jurisdiction.

**This should have surfaced during the statutory walk, not at the canvass stage.** It sits in the same
chapter as §1942 and §1942.5, both of which I read early. Two practical consequences: the public-officer
inspection is the real gate, so a tenant complaint alone does not trigger it; and **service is complete on
deposit in the mail**, not receipt, which starts the 35 days earlier than a landlord would expect. The
notice generator needs a gate here — a three-day notice issued while the bar applies is void regardless of
its §1161(2) content.

**Correction 1 — failure to deliver possession.** I recorded this as "not located" after reading §1925,
which only defines hiring. **Civ. Code §1932(1)** supplies it, one chapter over: the tenant may terminate
where the landlord fails within a reasonable time after request to secure quiet possession, put the property
into good condition, **or repair it**. That is broader than delivery of possession — a general termination
right for landlord non-performance, cumulative with §1942.

**Correction 2 — tenant death.** Also recorded as "not located". **Civ. Code §1934**: where the hiring is
terminable at the pleasure of one party, it terminates on notice of that party's death or incapacity; **in
all other cases it is not**. So a periodic tenancy ends on notice of the tenant's death and a fixed-term
lease survives it, with the estate bound.

**Both corrections share a cause worth recording:** I concluded "not located" from reading a single adjacent
section rather than sweeping the chapter. That is the recurring error shape the learnings file already names
— stopping at the first matching provision without sweeping adjacent sections — appearing here as stopping
at the first *non*-matching one.

**§1717 confirms what three rows had been assuming.** Fee reciprocity is automatic, the anti-waiver sentence
is unconditional, and the clause is read across the whole contract unless both parties had counsel and the
lease recites it. The limb landlords misjudge is **§1717(b)(2): voluntary dismissal or settlement means no
prevailing party**, so settling an unlawful detainer recovers no fees however favourable the terms.

### 5.16 Four proof-of-absence findings from a statute already read

Four deposit-adjacent canvass rows were answerable without new text, because §1950.5 was read section-open
**in full** early in the pass. Under the proof-of-absence standard that is a legitimate basis for a
confirmed absence — the governing statute read end to end, not an inference from silence elsewhere:

- **Security deposit interest — CONFIRMED ABSENT** at state level. No interest requirement appears in
  §1950.5(b), (c), (e) or (h). Municipal ordinances flagged, not resolved.
- **Move-in written inventory — CONFIRMED ABSENT** as a joint signed instrument. California substitutes two
  different mechanisms: §1950.5(f)'s tenant-requested **initial inspection in the final two weeks** (a
  move-*out* device) and §1950.5(g)(1)'s **unilateral landlord photograph duty** at the start of tenancies
  beginning on or after 2025-07-01.
- **Deposit installment right — CONFIRMED ABSENT** at state level.
- **Last-month's-rent restriction — Present**, via §1950.5(b)'s "however denominated": prepaid last month's
  rent counts toward the one-month cap rather than sitting outside it.

**§1951.5 escalated rather than researched.** Two retrieval attempts failed. A California Supreme Court
opinion cites it as providing that §§1670 and 1671 apply to a lease of real property, but a passing judicial
citation is not the section text and this project does not write rows from those. Flagged in
`late-fee-safe-harbor-ca`, `early-termination-ca` and `holdover-ca`. If it says what the citation suggests it
is **confirmatory, not corrective** — §1671(c)(2) already reaches dwelling leases on its own terms — so none
of those three rows is presently at risk.

### 5.17 §1951.5 resolved, and three more topics closed

**§1951.5 is one sentence:** "Section 1671, relating to liquidated damages, applies to a lease of real
property." **Confirmatory, not corrective**, as the earlier flag predicted — §1671(c)(2) already reached
dwelling leases on its own terms, and §1951.5 simply forecloses an argument that §1671 is confined to goods
and services. Flags cleared on `late-fee-safe-harbor-ca`, `early-termination-ca` and `holdover-ca`; no
analysis changed.

**CCP §1132 kills confession-of-judgment clauses outright** — "unenforceable and may not be entered in any
superior court", for judgments obtained or entered on or after 2023-01-01. A flat statutory bar, not merely
a §1953(a)(4) procedural-rights waiver. Screen the base library for any such clause.

**Pen. Code §365.7 is narrower than landlords will assume.** It reaches only **canines**, and only guide,
signal or service dogs — **not support animals**, which is the category landlords most often suspect. Support
animals are governed instead by 2 CCR §12185(c)(2)'s online-certification presumption. Two mechanisms,
different animals, and conflating them would tell a landlord they have a criminal remedy they do not have.
It is also criminal, so it is not a landlord remedy at all.

**H&S §17980.7 relocation benefits are enforcement-driven, not self-executing.** They follow a §17980.6
citation and a court finding — not the moment a unit becomes uninhabitable. Compensation is the **contract
rent vs HUD fair market rent differential, capped at 120 days**, which is a lookup dependency rather than a
stored constant. Two further points: on appointment of a receiver the owner is **enjoined from collecting
rent entirely** (§17980.7(c)(3)) — a second rent-collection bar alongside §1942.4; and §17980.7(e) deems the
proceeding a §1942.5(a)(4)–(5) "proceeding" or "judgment", **starting a 180-day retaliation window**.

**One deliberate non-answer.** Civ. Code §1770(a)(29) is California's all-in pricing rule, but the CLRA
reaches transactions in the "sale or lease of **goods or services**", and whether a residential tenancy is
within that turns on **§1761's definitions, unread**. Recorded as unresolved rather than answered. Assuming
a consumer-protection statute reaches rent is exactly the inference this project keeps getting burned by —
and CA regulates specific rental fees directly in at least five other places anyway.

### 5.18 The chapter sweep — and the quarantined row was real

**The `refrigerator-tenant-supplied-ca` row I quarantined and deleted was correct law.** It appeared in the
CSV on 2026-09-19 written by neither Taylor nor me, citing a "fragment supplied by Taylor" that did not
exist in the session, with its own citation marked UNKNOWN and inferred to §1941.1. Taylor confirmed he
never sent it. I quarantined it, and deleted it on his instruction.

**Civ. Code §1941.1(a)(11), added by AB 628 effective 2026-01-01, matches it exactly** — the verbatim
acknowledgment, the 30-day revocation route, the commencement date, all of it.

I still think the quarantine was right, and it is worth being precise about why. The row asserted live law
with an admittedly unknown citation and a false provenance claim. **The rule that stopped it is the same
rule that would have caught a fabrication**, and a library that ships unsourced rows because they *might*
be right has no defence the next time one isn't. The row is now **rebuilt from primary text**, not restored
— `stove-refrigerator-ca`, with the provenance recorded in its notes so the next reader knows the history.

**The canvass is complete: 69 of 69.** The final rows were answerable because Chapters 1 and 2 were swept
end to end, which is what the two earlier "not located" corrections (§1932, §1934) showed was necessary.
Three absence findings carry explicit scope limits — radon is confirmed absent *from the governing title*,
not from California law; fraudulent-misrepresentation termination is *not located* rather than absent.

**Also found in the sweep:** Civ. Code **§1946(b)** independently bans notice-service fees — a **third**
parallel enactment alongside §1946.1(i) and CCP §1161(6). **§1950** (1872, never amended) suspends the rent
obligation of *every tenant in the building* while a room is double-let. **§1945.5** makes an
automatic-renewal clause voidable unless set in eight-point boldface with a boldface recital immediately
above the signature — a **sixth** type-size floor, and the first that dictates *where on the page* text must
sit. **§1940.3(b)** bars any inquiry into immigration status at all, which is stronger and earlier in the
process than the §§1940.2/1940.35 penalties the canvass row had been answered with.

### 5.19 Backlog from the sweep — ten rows built, remainder listed

The sweep surfaced roughly twenty sections read but not rowed. **Ten rows have now been built from them.**
Findings worth surfacing:

- **§1941.3 is a free-standing security duty** — dead bolts, window devices, common-area door locks — that
  the library had no row for **in any state**. Its remedy set is unusually broad: §1942, §1942.4 and §1942.5,
  breach of contract, injunctive relief, *and* an affirmative defence in an unlawful detainer after rent
  default with CCP §1174.2 relief. → `security-devices-ca`
- **§1941.5 is the complement to §1941.6, and covers the more common case.** §1941.6 (which we already had)
  applies only where the restrained person **is a co-tenant** and requires a court order. §1941.5, re-added
  by SB 1051 effective 2025-01-01, applies where the perpetrator is **not** a co-tenant and accepts a much
  wider evidentiary basis — including **a signed statement from the tenant alone**. Carrying only §1941.6
  left the ordinary scenario uncovered. → `lock-change-non-cotenant-ca`
- **§1946.9's definition of adverse action catches compliant-looking workflows.** It includes *approving* an
  application on terms less favourable than advertised — so a higher deposit or co-signer imposed because an
  applicant was a victim of abuse, requested a lock change, or once called the police is a violation even
  though the applicant was accepted. → `edu-screening-abuse-protections-ca`
- **§1941.8(b) presumes a unit untenantable while disaster debris is present**, until a public health agency
  clears it — routing straight into §1942 and §1942.4's rent-demand bar. §1941.8(d) also fixes the tenant's
  right to return **at the pre-disaster rent**, which constrains what §1947.12(b) would otherwise allow on a
  new tenancy. Effective 2026-01-01. → `disaster-duties-ca`
- **§1954.07(g)(2) cuts against the base `application-of-payments` row**: an amount tendered toward rent may
  not be applied or credited to the rent-reporting fee. That row's fees-first ordering needs a CA screen.
- **§1951.3(h) is a trap worth flagging to the tracker**: a notice of belief of abandonment does **not**
  satisfy CCP §1161 or §1162. A landlord who serves only that and then files has no predicate notice.
- **§1942.7 bans declaw and devocalize requirements** for any mammal, bird, reptile or amphibian — not just
  cats — with a $1,000-per-animal or per-advertisement penalty. Cross-noted on `pet-policy-ca`.
- **§1940.41 cannot be satisfied by prohibition alone**: a landlord may bar in-unit storage of e-bikes and
  scooters only by *providing* secure long-term storage, defined to require on-site resident-only access,
  weather protection, one electrical connection per device, and **no charge to tenants**.

**Backlog now cleared.** Six further rows built and three existing rows annotated:
`unbundled-parking-ca` · `tenant-forward-proceedings-ca` · `edu-social-security-defense-ca` ·
`edu-habitability-presumption-ca` · `edu-disaster-displaced-guests-ca` · `edu-other-landlord-facilities-ca`,
with §1941.7, §1942.6 and §1940.1 folded into the mold, retaliation and tenancy-scope rows.

Four points from this last batch:

- **§1947.1 is a third instance of state law confined to named localities** — after §§3485–3486 by city,
  this one by **county**, and only for buildings of 16+ units with certificates of occupancy from
  2025-01-01. Where it applies, **an unpaid parking fee cannot support an unlawful detainer at all**, so a
  combined rent-and-parking three-day notice on such a property is defective.
- **§1942.3 and §1942.4 look alike and run on different clocks.** §1942.3's eviction presumption starts 60
  days from *issuance* of the officer's notice; §1942.4's rent-demand bar starts 35 days from *service*,
  complete on mailing. A property can hit the §1942.4 bar weeks before the §1942.3 presumption arises.
- **§1946.3 sunsets on January 20, 2029 — not January 1.** A bill tracker keyed to year-start sunsets would
  miss it. It is the fifth statutory affirmative defence to unlawful detainer found in CA.
- **§1954.071 moves the 30-day tenancy line to 270 days for disaster-displaced guests**, an express exception
  to the §1940(b) / R&T §7280 rule, until 2031. Seventh type-size floor (12-point).

**A correction that propagates:** the §1941.1 extract supplied early in the pass stopped at (a)(7). The full
current text has **eleven** characteristics — (a)(8) floors, stairways and railings; (a)(9) residential-hotel
mail receptacles; (a)(10)–(11) stove and refrigerator. Any row or note in this log that describes the list as
"seven characteristics" is short by four; the rows themselves have been updated where the count mattered.

**Remaining genuinely out of scope:** §§1947.7–1947.15 (rent-control administration, municipal-adjacent) ·
§1942.9 (COVID rental debt, historical) · Chapter 1.5 (car rental).

**Disclosures:** §1940.6 demolition-permit notice ($2,500 penalty) · §1940.7 former ordnance location within
one mile · §1940.8 pest-control company notice · §1940.9 shared-meter disclosure ·
**§1940.8.5 pesticide-application notice** (prescribed CAUTION text, 24 hours' advance, adjacent units).

**Tenant rights that constrain lease terms:** §1940.41 personal micromobility devices (e-bikes, scooters) ·
§1940.45 religious items on entry doors · §1940.10 personal agriculture · §1940.20 clotheslines ·
§1942.7 no declawing or devocalizing · §1942.8 internet bulk-billing opt-out (2026-01-01).

**Habitability additions not yet in any row:** §1941.1(a)(8) floors, stairways and railings · (a)(9) locking
mail receptacle · §1941.3 deadbolts and window locks · §1941.4 telephone jack · §1941.5 lock change where
the perpetrator is **not** a co-tenant (the complement to §1941.6, which we do have) · §1941.7 mold
notice-first rule · **§§1941.8 and 1941.9 disaster duties** (SB 610, 2026-01-01) · §1942.3 60-day
habitability presumption · §1942.6 tenant-organiser trespass immunity.

**Screening and reporting:** **§1946.9** — no adverse action based on abuse-related breach, a prior
lock-change request, victim status, or having summoned law enforcement ($100–$5,000) · §1954.07 mandatory
offer of positive rent reporting.

**Other:** §1947.1 unbundled parking (16+ units, 10 named counties, certificates of occupancy from
2025-01-01) · §1946.3 Social Security Tenant Protection Act · §1951.3 notice of belief of abandonment ·
§1954.071 disaster lodging 270-day rule.

**One scope note on how this batch arrived:** I asked for "§§1925–1954 end to end" and that pulled in
Chapter **1.5**, which is *rental passenger vehicles* — car rental, not tenancy. Wasted effort caused by my
phrasing, and the fourth time in this pass that a loosely worded ask cost a round trip.

### 5.20 §17920.10 — and a canvass answer I had wrong

**I had answered the lead-based-paint canvass row "Federal, applies. No CA-specific overlay located." That
was wrong.** H&S §17920.10 deems any unit or premises containing **lead hazards** in violation of the state
housing law, and §1941.1(a) incorporates it — so a lead-hazard unit is **untenantable**, which routes into
§1942 repair-and-deduct, the §1942.4 rent-demand bar, and the §1942.3 presumption. The federal rule is a
pre-1978 *disclosure* duty; California adds a *habitability standard* with quantified thresholds that
applies regardless of construction date. They are complementary and must not be collapsed.

The error shape is worth naming because it is subtle: **I answered from the provision I had rather than the
one that governs.** §17920.10 was flagged unread in three rows at the time, and the canvass row should have
said "not located — pending §17920.10" instead of asserting an absence.

**The operational trap is the one worth building for.** "Disturbing lead-based paint without containment"
is itself a lead hazard — so a landlord's *own* repair, renovation or turnover work in a unit with lead paint
can create a habitability violation, and with it the §1942.4 bar on collecting rent. That belongs in the
maintenance-tracking module as much as the lease library.

**A second agency now governs CA landlord obligations by regulation.** The definitions and levels come from
**17 CCR §35001 et seq.** (CDPH), unread, and §17920.10(e) defers new definitions until the next January 1
or July 1 at least three months after approval. The legal-watch workflow needs a CDPH rulemaking watch
alongside the Civil Rights Council one.

**17 CCR §35001 was then supplied — and it is only the definition of "abatement".** Article 1 gives each
defined term its own section, so "§35001 et seq." meant the whole article and §35001 alone does not carry
the levels. It is still useful: abatement expressly **excludes containment and cleaning**, which confirms
that a landlord who contains and cleans properly during ordinary repair work is not "abating", while one who
disturbs paint without containment has created a §17920.10 hazard regardless of intent. The chapter's
heading — "Accreditation, Certification and Work Practices" — also *suggests* a certified-worker regime for
abatement, but that is an inference from a title, recorded as a flag and not relied on.

### 5.21 §1761 — the CLRA route is closed

§1770(a)(29), California's all-in pricing rule, reaches only transactions for the sale or lease of **goods
or services**. §1761(a) defines goods as **tangible chattels** — and its only reference to land is to goods
that become affixed to real property, which confirms land and chattels are treated as distinct. §1761(b)
defines services as **work, labor and services**. A residential tenancy is a "hiring" of real property
(§1925) and is neither. **So the rule does not govern advertised rent**, and no row changes.

I had flagged this as the one open item that might still change a row; it doesn't. Recorded as its own
confirmed-absence row, `edu-no-clra-rent-pricing-ca`, so the conclusion is visible to future canvasses. Two
limits stated in the row: it is a **textual** conclusion with no case law read, and a court could treat
genuinely separable services bundled with a tenancy differently from the rent; and no rental-specific
fee-transparency statute outside the CLRA was searched for.

### 5.22 The last three open items — all resolved

**1. Mold: the standards were never adopted.** CDPH's own 2005 Report to the Legislature concluded that
science-based permissible exposure limits for indoor mold could not be established, and its 2017 Statement
on Indoor Dampness and Mold confirms nothing had changed as of 2015. **§26147 has never commenced.**
`mold-disclosure-ca` stays inactive and moves to `VERIFIED` as not in force — clearing the **last
`NEEDS_REVIEW` row in the state**. At least one 2026 secondary source still treats §26147 as operative with a
visible-mold trigger, which is exactly the misreading §26147(e) forecloses.

**2. The repeals — one confirmed, one confirmed with a live caveat.** §2924.85's sunset could be extended only
by a statute enacted *before* January 1, 2018; that window closed eight years ago, so revival would need a
fresh enactment, and none exists. Treated as confirmed. **§3485 is different: it has been repealed and revived
four times** — 2007, 2009, 2014 (after a lapse) and 2018. Two searches found every prior revival and nothing
after 2018, so it is treated as repealed, but it is the one CA row where a legal-watch hit is genuinely
likely. Both repeals are still being described as current law by live secondary sources.

**3. The case law — and it strengthens the earlier blocks rather than softening them.**

- ***Tunkl* → *Henrioulle v. Marin Ventures* (1978) 20 Cal.3d 512:** residential leases *affect the public
  interest*, so exculpation of even ordinary negligence is invalid. That closes the gap I left open in §1668's
  wording, and gives every exculpation block a **second, common-law ground** independent of §1953(a)(5).
  Narrow exception: *Lewis Operating Corp.* (2011) upheld a release for an on-site **gym**, as a non-essential
  amenity. *Whitehead v. City of Oakland* (S284303) is before the Supreme Court on how *Tunkl* applies; its
  outcome is unknown to this pass, so don't draft amenity releases until it is checked.
- **Jury waivers → *Grafton Partners* (2005) 36 Cal.4th 944:** predispute jury waivers are unenforceable
  absent statutory authorization. A lease jury waiver fails twice over — *Grafton* and §1953(a)(4). The base
  library has none, so no clause changes. **Venue left open on purpose:** *EpicentRx* (2025) enforced a
  forum-selection clause despite the loss of a jury, but in a corporate setting; whether it reaches a
  residential lease is not researched.
- **Late rent → two rules, not one.** Accepting rent with knowledge of a breach waives forfeiture (*Kern
  Sunset*, CACI 4324), avoidable by a non-waiver clause **plus contemporaneous notice** (*Karbelnig*). But once
  a *termination* notice has expired, accepting rent triggers §1945's renewal presumption, and *Baca v. Kuang*
  held that non-waiver and holdover clauses **did not rebut it**.

**That last finding bears directly on the reservation-of-rights feature on the legal-tracker roadmap.** In
California a contemporaneous reservation notice is the *Karbelnig* route and worth building — but after a
notice has run, *Baca* says reserving rights is not enough. The CA version of the feature needs a second
branch: **return the payment, don't reserve.**

### 5.23 *Whitehead* was decided — and it sharpens the exculpation rule

*Whitehead v. City of Oakland* (Cal. May 1, 2025, S284303), unanimous, opinion by Justice Evans, official text
on courts.ca.gov: **_Tunkl_ governs releases of common-law negligence only.** A release purporting to exempt a
party from liability for breaching a **statutory duty** is invalid under §1668's "violation of law" limb
directly, with no public-interest analysis at all.

That matters more for landlords than almost anyone, because **a California landlord's duties are
overwhelmingly statutory** — habitability (§§1941, 1941.1), locks (§1941.3), smoke alarms (H&S §13113.7),
building conditions (H&S §§17920.3, 17920.10), balconies (H&S §17973), entry (§1954). After *Whitehead*, no
lease release reaches a claim that any of those was breached.

*Lewis Operating Corp.*'s recreational-amenity exception survives — *Whitehead* cites it for the proposition
that ordinary negligence can sometimes be released — but **only for common-law negligence**. A gym or pool
release will not shield a landlord from a claim pleaded as a code violation, which is how most such claims can
be framed. **Do not ship an amenity release in CA as a liability shield.**

The exculpation blocks from the extend screen now rest on **three independent grounds**: §1953(a)(5),
*Henrioulle* (1978), and *Whitehead*'s statutory-duty rule.

### 5.24 §2924.8 is not a landlord duty — correcting my own framing

Last turn I put **§2924.8** back on the open list as "a live landlord duty" for the legal tracker. **That was
wrong.** §2924.8(a) puts the duty on the **trustee** (posting on the property when a notice of sale is posted)
and on the **mortgagee, trustee, beneficiary or their agent** (mailing to "Resident of property subject to
foreclosure sale"). The landlord is the borrower in that transaction, not the notifier.

I had carried the label "live duty" forward from an early flag without ever checking *whose* duty it was. The
error shape is worth naming because it is new to this pass: **attributing a statute's obligation to the party
the app serves, because that is the party the app is about.** The subject of a duty is part of the rule, and
it has to be read, not assumed.

**The correction strengthens `edu-no-foreclosure-disclosure-ca` rather than weakening it.** California now
imposes **no statutory duty on a landlord** to tell tenants or applicants about a pending foreclosure: the
pre-lease duty (§2924.85) is repealed, and the surviving notice runs through the lender side.

What §2924.8 *does* mean for a landlord, as education only: §2924.8(d) confines it to residential loans where
the billing address differs from the property address — which is to say, **precisely non-owner-occupied rental
property**. A landlord's tenants *will* receive this notice, in English and every §1632 language, if the
property goes to sale. It tells them the new owner may offer a new lease or give a 90-day notice, must honour a
fixed-term lease except in limited cases, and that their rent obligation continues. Those protections live in
**CCP §1161b and the federal Protecting Tenants at Foreclosure Act**, neither read — the notice summarises them
but is not their source.

**§3485, full 2022 text:** confirms the 2024-01-01 sunset from the section's own words, and shows it reached
**four cities** — Los Angeles, Long Beach, Sacramento and Oakland — against §3486's one. Both sibling sections
were city-confined, to different lists. It does not resolve the revival question; a 2022 text shows what was
repealed, not what may have been re-added since. The legal-watch item stands.

### 5.25 The canvass count was narrower than I said — and it hid the self-help eviction ban

I reported the canvass as "69 of 69". That was true of the **ten core tables**. It was not true of the
checklist as a whole: **nine candidate-topic tables**, where earlier states flagged topics with "check for other
states?", had never had California entered against them. About 70 topics once duplicates merge.

I found this while inventorying the rows' own `NOT READ` flags, not by re-reading my claim — which is worth
recording, because the claim was *technically* accurate and still misleading. "69 of 69" read as "the canvass
is done". It meant "the core tables are done".

**Now entered: 56 answered from text already read, 14 not checked.** Most answered cleanly from this pass's
reading. Several are worth pointing at:
- **294.2 — §1953 is nowhere near the complete list of banned lease terms.** Prohibitions sit in at least 13
  places, plus three case-law rules. A drafter who checks §1953 alone misses most of them.
- **335.5 — a disclosure failure DOES bar the eviction.** §1946.2(g) voids the termination notice for failure to
  comply with *any* provision of §1946.2, which includes the (f) lease disclosure.
- **427.7 — the statute's own form has a broken cross-reference.** §1946.7(b)(3)(B)'s verbatim Qualified Third
  Party Statement defines "victim of violent crime advocate" by pointing at **§1947.6 — the EV-charging
  section**. The parallel forms in CCP §1161.3 and §1941.5 cite §1946.7 correctly. Reproduce it verbatim anyway;
  a silently corrected form isn't the statutory form. Third instance of cross-reference rot in CA.
- **572.9 — budget bills move housing law.** H&S §17973 was amended by AB 130, a budget trailer. A bill tracker
  filtering on housing committees would miss it.

**And one real gap: 367.1–367.2, Civ. Code §789.3.** California's ban on lockouts, removing doors or windows,
and cutting utilities to force a tenant out. It is cited in passing in one row and was never read. It sits in
a different part of the Civil Code from Title 5, so "Chapters 1–2 swept end to end" was accurate and still
missed it — which is exactly the "check adjacent chapters" lesson the checklist already records at line 168
from Nebraska and North Dakota. **I didn't apply my own recorded lesson.** It is the highest-priority item left
in California.

### 5.26 §789.3 closes the gap — and one more error of my own

**The self-help eviction ban now has its row.** Civ. Code §789.3 bars a landlord, acting willfully and with
intent to end the tenancy, from interrupting any utility (whether or not the landlord controls it), changing
the locks or using a bootlock, removing outside doors or windows, or removing belongings outside the §1980
procedure. Actual damages plus **up to $100 a day with a $250 minimum per separate cause of action**, and a
repeat on a later occasion is a new cause. It sits in **Division 2** of the Civil Code — a different division
entirely from Title 5 — which is why the chapter sweep missed it. `edu-self-help-eviction-ban-ca`.

Three points worth carrying into the product:
- **The intent element does the work.** Every limb requires the act be done *willfully* and *with intent to
  terminate the occupancy*. That is why §1941.6(d) has to expressly disapply §789.3 for a court-ordered DV lock
  change — without that carve-out, excluding the restrained co-tenant would itself be a lockout.
- **Exposure accrues daily and is uncapped.** A three-week lockout is up to $2,100 before actual damages.
- **The legal tracker must never suggest a lock change, utility interruption or removal of belongings as a
  nonpayment remedy in California.**

**Another mistake of mine, caught while fixing the table.** In §5.25 I entered the lease-copy question (335.2) as
"not checked — verify §1962". But §1962 had **already been read and rowed** earlier in this session —
`owner-identity-disclosure-ca`, correct in every particular against the text you then sent. I wrote the
candidate answer from memory without checking my own CSV. That is the same shape as the error I had *just*
named in §5.25: a claim written from what I recalled rather than what the files say. Corrected in place; and it
turns out §1962(c) is a second answer to 335.5 — a successor owner who hasn't given the disclosures can't evict
for rent accrued during the lapse.

**Also resolved:** Pen. Code §365.5's criminal penalty for denying a service dog reaches public accommodations,
hotels and lodging — **not** an ordinary residential tenancy — so California has no criminal penalty for a
landlord refusing an assistance animal. And Mil. & Vet. Code §400 confirms that the §1950.5 deposit rules'
"service member" means someone **on active orders**: a reservist not called up doesn't qualify.

### 5.27 Mil. & Vet. Code §401 — not a termination right, but a rule landlords break

§401 is not the military lease-termination right. It is a set of debt-collection, credit and anti-waiver
protections — and one of them is a rule landlords commonly break. **§401(c) bars contacting a military tenant's
unit or chain of command to collect a debt, including rent, unless the member gives written consent *after* the
obligation is due.** That timing requirement means **no lease clause can supply the consent**, since anything
in the lease is given before rent falls due, and §401(e)(2) voids any waiver anyway. The protected class is
wider than the deposit rules' "service member": it covers any member of the active militia or an active *or
reserve* component, whether or not on active orders.

The screen found no chain-of-command clause in the current library, so no row changes; the new
`edu-military-tenant-protections-ca` row exists so one is never added. Two smaller points: a military discount
may not be conditioned on waiving any right (§401(e)(1)), and a tenant's use of a Chapter 7.5 stay can't by
itself be treated as inability to pay (§401(a)(1), which reaches "any lender or other person"). Misdemeanor
plus damages and fees.

**Still open:** whether California has its own military lease-termination right. It isn't in §§400–401; if it
exists it would be in §402 et seq. The federal SCRA governs termination regardless.

### 5.28 Mil. & Vet. Code §402 — a precondition on almost every eviction

§402 is California's own default-judgment protection for service members, applying in **any action** — and
most unlawful detainers end in default. Before default judgment, the landlord must declare under penalty of
perjury that the tenant is not in military service; if it can't, judgment needs a court order, and if the tenant
*is* serving the court must first appoint counsel and may require a bond. There is a **mandatory 90-day stay**
where a defense can't be presented without the tenant, and a judgment may be reopened within 90 days after
service ends.

**The detail to build around is §402(f): "in the military service" includes anyone who served within the
preceding 120 days.** A status check against current service alone is not enough in California. And a knowingly
false "not in service" declaration is a misdemeanor plus damages and fees — so a landlord who signs without
checking is exposed.

This is a **legal-tracker step**, not lease text: the eviction workflow should prompt for the declaration before
any default is requested. The federal SCRA default provision (50 U.S.C. §3931) was not read, so whether the
120-day lookback is broader than federal law isn't established — but both apply.
`edu-military-default-judgment-ca`.

**§403 adds the stays.** On the service member's application the court *must* stay the case unless service
doesn't materially affect their ability to take part — and on the same test may stay **execution of the
judgment**, which in an eviction is the writ of possession. So a landlord holding a judgment may still be unable
to recover the unit, for up to the period of service plus three months. Two further consequences: **no penalty
accrues during a stay, and a court may relieve a service member from late fees incurred while serving** (now
noted on `late-fee-safe-harbor-ca`); and where the service member is one of several co-tenants, the landlord may
proceed against the others only with the court's leave. Folded into the same row, retitled "Military tenants in
eviction", so the tracker has a single military step.

### 5.29 The full military chapter — California has its own termination right

With Chapter 7.5 read in full, three findings matter for the product:

- **§409 is a state military lease-termination right**, parallel to the federal SCRA and non-waivable under
  §401(e)(2). It triggers on entering service during the term, or on PCS or 90-day-plus deployment orders received
  after signing. For monthly rent it takes effect 30 days after the next rent due date following notice; no
  early-termination charge; advance rent back within 30 days; and holding the deposit against post-termination rent
  is a misdemeanor. Shipped as `military-lease-termination-ca`. Its definition of service reaches the state militia
  on state active duty; whether that is broader than federal law was not assessed.
- **§406 bars evicting a service member's dependents without leave of court.** Where a spouse, children or other
  dependents occupy the unit primarily as a home, no eviction may be carried out during service or for 120 days
  after release unless the court permits it. That is a *bar*, not merely a stay on application — and knowingly
  taking part is a misdemeanor. Folded into the tracker row.
- **§409.15 is a hard deadline for landlords.** Any good-faith request for relief under the chapter that the
  landlord thinks is incomplete must be answered in writing within **30 days**, naming exactly what is missing —
  or the objection is waived and the service member gets the relief. The tracker needs a 30-day clock on receipt.

Also: §409.1(b) bars enforcing storage liens on a service member's left-behind property without a court order
(noted on `edu-abandoned-property-ca`); §409.8 makes an officer's certificate prima facie evidence of service
status, which is the practical evidence behind the §402 declaration.

**Process note, recorded against myself:** I requested this chapter one section at a time — §401, then §402, then
§403 — each time naming only "the next section". That cost Taylor several round trips for a chapter I should have
asked for whole at the outset, and it is the same loose-request pattern this log has already flagged four times.
Ask for the chapter.

### 5.30 The tail — two substantive findings, then one request

Working the remaining candidate topics turned up two things that matter:

- **Megan's Law data may not be used in housing decisions.** Pen. Code §290.46(j)(2)(G) prohibits using the registry
  website's information "for purposes relating to… housing or accommodations", except to protect a person at risk.
  Liability: actual damages, up to 3x, a **$250 minimum**, fees, and exemplary damages or a civil penalty up to
  **$25,000**, with pattern-or-practice suits open to any aggrieved person. This is the reverse of Ohio, which gives
  landlords a termination route for registrants near schools. **The screening workflow must not query or ingest the
  Megan's Law website.** And it sits in deliberate tension with §2079.10a, which requires every lease to tell tenants
  the site exists. `edu-megans-law-housing-use-ca`.
- **Unreturned deposits escheat.** CCP §1520: money owed to a former tenant and unclaimed for more than three years
  escheats, and the landlord as holder reports to the Controller before November 1 each year (§1530). An uncashed
  deposit-refund check is the usual case. `edu-deposit-escheat-ca`.

Also resolved: the animal and fair-housing carve-outs **align by construction** in California — both run through
FEHA's single definition of discrimination — and **§3485's revival risk is narrowed** to the current session, since
Justia's page for it still carries the 2022 code year.

**How the remainder is being handled:** rather than asking for sections one at a time, the §0 list gives every
outstanding item as a whole unit in a single request. That is the correction for the pattern recorded in §5.29.

### 5.31 The last batch — every candidate topic answered

The consolidated request came back complete, and every remaining candidate topic is now answered. What
matters for the product:

- **Writ execution** (`edu-writ-execution-ca`): five days after service with **no extension**, a process
  server may step in if the sheriff hasn't acted in three court days, and **a tenant's bankruptcy doesn't delay
  the possession writ**. The one gap to close in the tracker: unnamed occupants can halt the lockout with a
  claim of right to possession *unless* the prejudgment claim form was served with the summons.
- **CCP §1174.2** — in a nonpayment case where the tenant proves a substantial habitability breach, the court
  cuts the rent to the unit's value in its untenantable state, **denies the landlord possession, and makes the
  tenant the prevailing party** on payment. And **§1174.21** makes a landlord who files through the §1942.4 bar
  pay the tenant's fees.
- **§1174.27** closes the last DV procedure flag: where the perpetrator is a co-tenant, the court evicts **only
  the perpetrator**, keeps the tenancy alive, and **orders the landlord to change the locks**.
- **Dormancy charges don't work in California** — the reverse of North Dakota. CCP §1522 bars any charge imposed
  because property is unclaimed, beyond a $2 notice fee. The pre-escheat notice has a verbatim heading and a
  6–12 month window.
- **§1719 read in full:** no postdated-check trap, but a certified-mail demand unlocks **treble damages
  ($100–$1,500)**, and a stop payment in a good-faith dispute defeats the fee.
- **No respondent election** in fair-housing cases, because California prosecutes them in court, not before an
  agency — and from 2026 every party must go through **mandatory dispute resolution** first.
- **Venue:** CCP §392 fixes eviction venue to the property's county, so a residential forum clause fails under
  §1953(a)(4). The *EpicentRx* question is resolved on the text.
- **17 CCR §35033** defines lead-based paint as **1.0 mg/cm² or 0.5% by weight** — the definition both
  §17920.10 paint hazards turn on. That closes the lead question for the app.

**Two corrections to my own earlier answers.** (1) I had said the assistance-animal and fair-housing carve-outs
"align by construction". That's true inside FEHA, but **Civ. Code §54.1 has its own, differently worded
exemption** for service dogs — close, not identical. (2) Pen. Code §290.46's only landlord exception turns on a
"person at risk" — and the **definition that commentary cites at §290.45(a)(8) no longer exists** in the
current, re-enacted §290.45. Recorded as cross-reference rot; the product should treat the prohibition as
absolute.

### 5.32 Two things fixed at the end: California had no shared rows, and the sublet choice

**California had no shared rows — an oversight, not a design choice.** The extend manifest deferred tagging the
provisionally-clear base rows "until the blocked set is resolved". The blocked set was resolved, and the tagging
step was never done. Every integrity check still passed, because none of them tested whether a *CA lease* would
be complete — only whether rows were well-formed. **A California lease built from the CSV would have had no
severability, entire-agreement, governing-law, notices or maintenance clauses.**

Fixed by re-screening the 30 rows against the full pass rather than tagging from the stale manifest. **29 tagged
`CA`.** Six carry CA-specific notes, the most important being **`application-of-payments`**: its fees-first
ordering is lawful only through its "unless otherwise required by applicable law" hedge, because §1954.07(g)(2)
bars applying rent payments to the rent-reporting fee, and a CA three-day notice may demand rent only.
**`parking-vehicle-rules` is held** — it authorizes towing without a legal hedge, and the Vehicle Code towing
rules were not read.

**New integrity check for every future state:** count the *active rows a lease in that state would draw on*, and
the share of them that are shared. A state with zero shared rows is almost certainly incomplete.

**The sublet choice is now the landlord's.** `no-sublet-assign-ca` (reasonable consent, the default) and
`no-sublet-assign-discretion-ca` (sole discretion) are alternatives in choice group `ca-sublet-consent`, with
`edu-sublet-consent-choice-ca` explaining the trade-off at the point of selection: reasonable consent keeps the
§1951.4 continue-the-lease remedy; sole discretion gives full control but forfeits it.

**Schema gap — the builder needs a choice-group mechanism.** Nothing in the current schema can say "include exactly
one of these". If both rows were active, a CA lease would contain both and contradict itself, so the
sole-discretion row **ships inactive** until the builder supports it. Proposed: a `choice_group` column, plus a
`is_default` flag so the builder knows which option applies when the landlord doesn't choose.

### 5.33 Checking the tagging properly — what §5.32 claimed and what it had actually done

Taylor asked the right two questions about §5.32, and the honest answers were "not fully" and "only partly":

- **The 29 rows were not all read.** The re-screen read the full text of 16; the other 13 were passed as
  boilerplate on their titles plus the early screen. Now all read. All 13 hold up; one drafting tension is noted
  on `entire-agreement` (signed-writing-only changes vs §827 change-by-notice — the specific clause controls, and
  the tension exists in every state).
- **The duplicate check was title-level only.** It caught identical titles and superseded base rows, but not two
  rows covering the same *topic* under different titles. A topical scan of every tagged row against every CA
  clause, then every CA clause against every other, found:

**One real duplicate:** `tenant-maintenance` and `tenant-maintenance-obligations-ca` both state the tenant's care
duties. The CA row, which tracks §1941.2, now **supersedes** the base row, and the base row is untagged.

**One real conflict:** `possession-delay` (terminate after 30 days) against `casualty-termination-ca` (terminate
after a reasonable time following request, §1932(1)) — two rules for one event. Replaced by **`possession-delay-ca`**,
which keeps the no-rent-before-possession and full-refund terms and defers termination to the CA clause.

**One pre-existing contradiction, not caused by the tagging:** `tpa-notice-ca` (REQUIRED) and
`tpa-exemption-notice-ca` (CONDITIONAL) tell the tenant opposite things, and nothing stops an exempt property's
lease from containing both. Same root cause as the sublet choice: **the schema cannot say "exactly one of
these."** Marked as choice group `ca-tpa-coverage`, with the TPA notice as the safe default.

Everything else the scans surfaced was complementary — rows that cross-reference each other, or state a rule the
other operates within. **Result: 27 base rows tagged `CA`, each read in full and overlap-checked.**

**New integrity checks for every future state**, beyond "zero shared rows is a red flag": (1) read every row
before tagging it, never tag on title; (2) run a *topical* overlap scan, tagged-vs-state and state-vs-state,
and adjudicate every candidate pair by reading both texts; (3) look for any pair of rows that state opposite
facts, and confirm the builder can make them mutually exclusive.

**MUST-FIX FOR THE SYNC SESSION, before any CA lease is generated:** add choice-group support to the builder
(a `choice_group` column plus an `is_default` flag). Two groups need it today: `ca-tpa-coverage` (both rows
active — a live contradiction) and `ca-sublet-consent` (alternative shipped inactive).

### 5.34 The screen's universe was narrower than "all existing clauses"

Taylor asked whether every existing clause had been tested against CA, and whether the new CA rows overlap
anything that could instead be generalised. Neither is true yet.

**What was screened:** the **52 active rows shared by two or more of the eight vetted states** (CO, WY, KS, NE,
MN, ND, SD, OH) — the generic boilerplate. 27 are now tagged CA.

**What was not:** the **462 active rows tagged to exactly one vetted state** (75 MN, 74 KS, 69 NE, 64 CO, 63 ND,
47 WY, 43 SD, 27 OH). Most implement that state's own statute and correctly do not extend to CA — and the
named-topic canvass did cover their *topics* — but no row-level screen was run.

**Near-duplicate consolidation was never attempted, and it matters.** A similarity scan of all 115 active CA-only
rows against all 486 vetted-state rows:

| Similarity | CA row | Twin |
|---|---|---|
| **1.00** | `tenants-property-insurance-ca` | `tenants-property-insurance-ks` (0.95 to `-oh`) |
| **1.00** | `storage-space-ca` | `storage-space-ks` (0.94 to `-oh`) |
| **1.00** | `parking-ca` | `parking-ks` (0.92 to `-oh`) |
| 0.86 | `landlord-maintenance-ca` | `landlord-maintenance` [CO] |
| 0.78 | `common-area-use-ca` | `common-area-use` [8 states] |

The three exact twins have the same cause: CO, KS, OH and CA all block the same exculpatory sentence, so removing
it produced **the identical clause three times under three ids**. That is library-level redundancy the per-state
method produces by design, and nothing in the per-state workflow would ever catch it — each pass only looks at
its own state. **95 of 115 CA rows have no close counterpart and are genuinely CA-specific.**

**Why this is not fixed here:** consolidating edits KS, OH and CO rows. The standing rule is that a state pass
does not modify other states' rows, and the propagation check enforces it. This needs an explicit decision, and
is better done with the whole library in the repo than in a single-state pass.

### 5.35 Consolidation, steps 1 and 2 — what merged, what did not, and what it exposed

**Authorised by Taylor**, so this section edits KS, OH and CO rows — the first time this pass has done so.

**Merged (2 of 3 exact families).** `storage-space-ks`, `-oh`, `-ca` → **`storage-space-ks-oh-ca`**;
`parking-ks`, `-oh`, `-ca` → **`parking-ks-oh-ca`**. Bodies were byte-identical and rule types matched. Four
redundant ids are gone, no state lost a clause (KS 114, OH 73, CA 143 active rows, unchanged), and each merged
row carries all three states' reasoning verbatim. Precedent followed: `default-by-tenant-ks-ne`.

**Merged (3 of 3, after Taylor's decision).** `tenants-property-insurance-ks`, `-oh`, `-ca` →
**`tenants-property-insurance-ks-oh-ca`**. The rule_type conflict (REQUIRED in KS and OH, RECOMMENDED in CA) was
resolved to **RECOMMENDED** on Taylor's call — a deliberate **behaviour change for KS and OH**, on the reasoning
that no state mandates a renter's-insurance clause, so REQUIRED overstated it. **All three exact-duplicate
families are now consolidated: six redundant ids removed, no state lost a clause.**

**Reviewed and kept separate.** `landlord-maintenance` [CO] vs `landlord-maintenance-ca` (0.86): CO requires
repair notice **in writing**; CA cannot, because §1942(a) accepts oral notice. A real divergence, not
redundancy — merging would force CA's weaker wording onto CO.

**What the merge guard exposed — library hygiene beyond CA.** The assertion that group and title must match
*failed*, and the reasons are systemic:
- **9 rows carry "(Ohio)" in the title** — a convention no other state uses.
- **23 distinct group values**, drifting by session: `Parking & Storage` (base/KS/NE/OH) vs separate `Parking`
  and `Storage` (MN/CA); `Notices & General` vs `Insurance & Liability` (MN) vs `Insurance` (CA).
  Same clause, different drawer, depending on which session created the row. Merged rows took the parent row's
  group and a plain title; the rest is unfixed and library-wide.

**Queued — 15 near-pairs not yet adjudicated**, each needing both texts read: `services-utilities-provided-ca`
vs `-mn`; `pet-policy-ca` vs `-mn` and `-ks`; `early-termination-ca` vs `-ks`; `landlord-entry-ca` vs
`landlords-access-nd` and `-sd`; `assistance-animal-accommodation-ca` vs `-oh`; `edu-double-letting-ca` vs
`edu-double-letting-prohibited-nd`; `casualty-termination-ca` vs `edu-tenant-termination-causes-sd`; plus the
CA-vs-base pairs (`common-area-use`, `pet-insurance-requirement`, `addendum-precedence`, `rent-payment`,
`due-at-signing`, `holdover`, `existing-condition`) where the question is whether the *base* row could absorb
the CA change and serve every state.

**And the bigger point: this is not a CA problem.** The three exact duplicates existed because KS, OH and CA
each independently deleted the same sentence. Nothing in the per-state method looks across states, so the same
redundancy almost certainly exists among CO/WY/KS/NE/MN/ND/SD pairs that no CA pass would ever surface. The
scan that found these took seconds; **it should be run across the whole library, not just against CA.**

### 5.36 The scan run across the whole library — and what it did *not* find

Taylor authorised running the duplicate scan beyond CA. Across all **624 active rows in all nine states**:

**Exact duplicates: three more groups, all resolved.**
- `services-utilities-provided-ks` + `-oh` → **`services-utilities-provided-ks-oh`**
- `surrender-end-of-term-mn` + `-nd` → **`surrender-end-of-term-mn-nd`**
- `surrender-end-of-term-ks` + `-ne` → **`surrender-end-of-term-ks-ne`**, with the same REQUIRED/RECOMMENDED
  conflict as the insurance family. **Resolved to RECOMMENDED by applying Taylor's precedent** rather than
  asking again — no state mandates a surrender clause either. A behaviour change for KS, flagged in the row and
  reversible.

**Total consolidation: 6 families, 12 ids reduced to 6. No state lost a single clause** — active counts for all
nine states are identical before and after.

**Near-duplicates ≥0.85: six pairs, and none should merge.** Worth recording *why*, because it is the useful
result: `early-termination-ks/-ne` (NE adds its DV protection), `assistance-animal-accommodation` KS/OH (OH bars
an additional deposit and adds care duties), `pet-policy` vs `-ks` (KS drops indemnity and exculpation under
K.S.A. 58-2547(a)(4)), `landlord-maintenance` CO/CA (CO can require written repair notice, CA cannot). These are
**real state divergences, correctly expressed as separate rows** — the method is working.

**One templating candidate, not done:** `landlord-disclosure-ks` and `-ne` differ by exactly one word —
"Kansas" vs "Nebraska", hardcoded in the body. They could collapse to one row with a `{{state}}` placeholder,
but whether that renders "Kansas" or "KS" is a builder question. Recommended, not applied.

**The honest headline: the library was in better shape than the CA collision suggested.** Six duplicate families
in 624 rows, five of them caused by the same mechanism — several states independently deleting the same
exculpatory sentence. It is worth re-running this scan after every state pass; it takes seconds.

**Still open after this:** the 15 CA near-pairs below 0.85, the **462 single-state rows never screened for CA**,
and library-wide metadata hygiene (9 "(Ohio)" titles, 23 drifting group values).

### 5.37 Screening the 462 single-state rows — by cluster, and what it really found

The 450 active single-state rows collapse to **340 topic clusters**. Screening ran in two passes because the
first was unreliable, which is worth recording:

- **Text-similarity matching failed.** It reported `security-deposit-return` and `edu-self-help-eviction-ban` as
  having no CA counterpart when CA has rows on exactly those topics. CA's rows are statute-specific and worded
  quite differently, so token overlap collapsed.
- **Id-stem matching also over-reported**, because **naming conventions drift by state**: CA wrote
  `edu-abandoned-property-ca` where six states wrote `abandoned-property`; `landlord-entry-ca` where four wrote
  `landlords-access`; `owner-identity-disclosure-ca` where three wrote `landlord-disclosure`.

Working the 2-or-more-state clusters by hand against CA's actual rows: **CA's topical coverage is complete.**
Every cluster held by multiple states has a CA equivalent under a different name, or CA has the opposite finding
(other states record *no* EV-charging right, *no* voucher protection, *no* immigrant-tenant protection — CA has
all three).

**But one real inconsistency surfaced.** Other states ship explicit **confirmed-absence rows**
(`edu-no-radon-disclosure`, `edu-no-deposit-installments`, `edu-landlord-lien-abolished`). CA had only three,
while several CA confirmed absences lived **only in the checklist and never became CSV rows** — invisible to
anyone reading the library. Five added: `edu-no-deposit-interest-ca`, `edu-no-move-in-inventory-ca`,
`edu-no-deposit-installments-ca`, `edu-no-radon-disclosure-ca`, `edu-no-postdated-check-rule-ca`.

**Deliberately not added:** landlord liens, the minor-tenant filing bar and fraudulent-misrepresentation
termination are recorded as **"not located"**, not confirmed absent — the distinction the proof-of-absence
standard exists to protect. They stay in the checklist with their scope stated rather than becoming rows that
would overstate what was checked.

**Naming convention is now a live library problem**, alongside the "(Ohio)" titles and 23 group values: the same
topic carries a different id stem in different states, which is what defeated two automated screens in a row.
A canonical topic key per cluster would make every future cross-state check trivial.

### 5.38 The near-pairs adjudicated — two absorbed, the rest are real divergence

**Absorbed into the base row, now serving all nine states.** Two CA overrides differed from their base only by
an addition that is true everywhere:
- **`addendum-precedence`** — CA added that a disclosure, notice or addendum *required by law* controls over a
  conflicting lease term. Protective in every state.
- **`pet-insurance-requirement`** — CA added that the requirement does not apply to an assistance animal and no
  liability insurance may be required for one. That is federal fair-housing law, not CA law.

Both CA overrides are deleted and the base rows amended. **This edited the clause text for the eight existing
states** — deliberately, and recorded in each row's notes.

**Kept separate, with the reason recorded.** `common-area-use` and `due-at-signing` turn on CA statutes
(waterbeds §1940.5, political signs §1940.4, the §1950.5(c) cap); `existing-condition` and `rent-payment` name
CA code sections. Cross-state: `services-utilities-provided` CA/MN (MN keeps a gross-negligence-limited waiver
CA cannot), `pet-policy` CA/MN (MN has indemnity, pet-removal entry and an ordinary-negligence waiver),
`early-termination` CA/KS, `landlord-entry` CA/ND (ND permits entry "at any time" in more circumstances).
**These are the method working** — the same clause diverging because the statutes diverge.

**Two cross-state flags raised, neither adjudicated here** (other states' statutes were not read):
1. **`rent-payment`** says rent is payable "without demand, **deduction, or setoff**". CA had to drop that —
   §1942 repair-and-deduct is not waivable. Most states have some repair-and-deduct or withholding statute, so
   this wording may purport to waive a non-waivable right in several of the other eight.
2. **`early-termination-ks`** charges **one month's rent or 30% of remaining rent, whichever is greater**. CA
   could not carry such a figure — §1671(d) voids liquidated damages in a dwelling lease, confirmed by §1951.5.
   A percentage-of-remaining-rent charge is the classic liquidated-damages target in most states.

**Also suggested, not applied:** `existing-condition` would benefit in every state from a generic version of
CA's sentence that acknowledging condition does not waive the landlord's habitability obligations.

**Honest scope note:** 11 of the 15 near-pairs were adjudicated by reading both texts. The remaining four all
sit below 0.50 similarity and are siblings of pairs already read (`pet-policy` CA/KS, `landlord-entry` CA/SD,
`assistance-animal-accommodation` CA/OH, `casualty-termination` CA/SD); they are recorded as separate on that
basis, not on a full read.

### 5.39 Metadata hygiene — normalised library-wide

**It was larger than first reported.** I said "9 rows carry '(Ohio)' in the title". The real figure was **56**:
the SD pass suffixed ~40 titles with "(South Dakota)", plus OH, ND and CO rows. One Nebraska row was titled
"No Move-In Inventory Requirement **(Unlike Kansas)**" — naming a *different* state in a landlord-facing title.

**55 titles normalised** by stripping the state-name suffix, plus the Nebraska one, with the Kansas comparison
preserved in its notes where it belongs. Checked first: no two rows in the same state collide once suffixes are
gone. Every original title is recorded in its row's notes.

**Groups: 22 values reduced to 12.** Twelve groups are used by all nine states; the other ten were session
drift, almost entirely CA and MN (`Property Condition`, `Property Use`, `Rent & Fees`, `Security Deposits`,
`Insurance & Liability`, `Parking`, `Storage`, `Utilities & Services`, `Maintenance & Repairs`, `Term &
Renewal`). **30 rows remapped** — by the parent row's group where the row supersedes one, else to the matching
canonical bucket. Each records its old value.

**Not applied — id-stem naming.** The same topic carries different id stems by state
(`edu-abandoned-property-ca` / `abandoned-property-ks`; `landlord-entry-ca` / `landlords-access-nd` /
`landlords-access-sd`; `owner-identity-disclosure-ca` / `landlord-disclosure-ne` / `landlord-identity-oh`).
This is what defeated two automated cross-state screens. **Renaming ids is not safe from here** — they may be
referenced by application code, and this pass cannot see it. **Recommended instead: a `topic_key` column**,
assigned once per cluster, leaving ids untouched. That makes every future cross-state check a group-by.

### 5.40 Wrap-up — schema, and the two cross-state flags

**Schema extended and populated**, closing the gap that blocked CA lease generation:
- **`choice_group` + `is_default`** — the library can now say "include exactly one of these".
  `ca-tpa-coverage`: `tpa-notice-ca` (default) vs `tpa-exemption-notice-ca` — this was a **live contradiction**,
  where an exempt property's lease would have told the tenant it was both covered and not covered.
  `ca-sublet-consent`: `no-sublet-assign-ca` (default) vs `no-sublet-assign-discretion-ca`, **now activated** —
  it had been held inactive only because the schema could not express exclusivity.
- **`topic_key`** — populated on every row, normalising `edu-` prefixes, state suffixes and the naming drift
  between states (`landlords-access` → `landlord-entry`, `landlord-disclosure`/`landlord-identity` →
  `owner-identity-disclosure`, `dv-lease-release` → `dv-lease-termination`, and 20 more). **474 keys, 77
  spanning two or more rows.** Ids untouched, so nothing in the application breaks. Every future cross-state
  check is now a group-by rather than the two failed screens this pass needed.

**Flag 1 — resolved by drafting.** `rent-payment` said rent is due "without demand, deduction, or setoff".
Adjudicated from the library's **own verified per-state findings** rather than new statute reading: **ND**
(§47-16-13) and **SD** (§43-32-9) have statutory repair-and-deduct; **MN** has court escrow whose rights "may
not be waived or modified" (§504B.385, §504B.465); **OH** has escrow (§5321.07). CO, WY, KS and NE have
neither, so the wording was already safe there. **Fix: "except as permitted by applicable law"** — protective
in all eight, no state-specific rewrite needed.

**Flag 2 — escalated, and wider than first recorded. THIS IS THE ONE OPEN ITEM.** The early-termination fee of
"one month's Rent **or 30% of the remaining Rent, whichever is greater**" appears identically in the base row
and its KS and NE variants — **all eight non-CA states**. CA is the only state where it was removed, under
§1671(d) (liquidated damages in a dwelling lease void unless fixing actual damages is impracticable; §1951.5
confirms §1671 reaches real-property leases). Every state applies some liquidated-damages doctrine, and a
percentage-of-remaining-rent charge is its classic target. **The identical figure in all eight suggests it was
inherited, not verified state by state.** Unlike flag 1 this **cannot be fixed by a savings clause** — where
such a term is void, the amount is what offends. It needs a per-state read of liquidated-damages law.

### 5.41 Flag 2 closed — and my escalation was the error

I recorded the 30%-of-remaining-rent early-termination fee as an unresolved eight-state legal risk needing a
fresh per-state read, and told Taylor it could not be closed in this session. **Both statements were wrong.**

**The library had already answered it.** Reading the rows' own notes rather than escalating: MN was checked
against the Plain Language Contract Act; ND against N.D.C.C. §§47-16-16/17 (no conflict); SD found the
mechanics "not statutorily mandated but not prohibited either"; **OH already carried the precise finding** —
no conflict, but real **§5321.14 unconscionability exposure**, with an explicit warning never to stack the fee
with a waiver of the mitigation duty; and the KS and NE sessions corrected the cure-period figure while
expressly leaving the tenant's voluntary 30-day-plus-fee right intact.

**The actual position is the inverse of what I flagged. California is the outlier, not the other eight.**
§1671(d) is a *per se* statutory bar on liquidated damages in a dwelling lease, and **no other state in the
library has one**. Elsewhere the ceiling is case-by-case unconscionability — statutory in KS, NE and OH,
general doctrine in SD, common law in WY and MN, with CO's express liquidated-damages prohibition confined to
the death-of-tenant context. The fee is **lawful-but-exposed** outside CA, with exposure rising with the size
of the figure. Product guidance recorded on all three rows; no further statute reading needed.

**The error worth keeping.** I found the CA divergence, correctly saw it might indicate a cross-state problem,
and then escalated *without reading what the other states' rows already said*. It is the same shape as the
lead-paint mistake in §5.20 — **answering from the provision I had in front of me rather than the one that
governs** — except here the governing material was in the library itself. **The rows' own notes are a source,
and should be read before any cross-state flag is raised.**

---

## 9. Handoff to the fresh Claude Code session

> **WRAPPED AND CLOSED (§§5.35–5.41).** Schema extended (`choice_group`, `is_default`, `topic_key`) and
> populated; both choice groups expressed in data; both cross-state legal flags closed — one by drafting, one
> by finding the library had already answered it (§5.41). **Nothing outstanding.** Exact duplicates cleared library-wide;
> CA's topical coverage confirmed complete; 5 missing confirmed-absence rows added. Remaining: 15 CA near-pairs
> below 0.85, metadata hygiene, and the `choice_group` builder change. All three exact-duplicate families merged
> (6 ids removed); 1 near-pair adjudicated and kept; **15 near-pairs queued**; the **462 single-state rows still
> unscreened**; library-wide hygiene issues found (9 "(Ohio)" titles, 23 drifting group values).
>
> **Superseded note (§5.34):** The CA screen covered only the 52 rows shared by two or
> more vetted states. The **462 single-state rows were never screened row-by-row for CA**, and **near-duplicate
> consolidation was never attempted**. A similarity scan found **three CA rows word-for-word identical to KS rows**
> (`tenants-property-insurance`, `storage-space`, `parking`) and ~17 more near pairs. Consolidating them edits other
> states' rows, which this pass is not authorised to do — needs Taylor's go-ahead.
>
> **READ FIRST — MUST-FIX BEFORE ANY CA LEASE IS GENERATED (§5.33):** the builder needs choice-group support — a
> `choice_group` column and an `is_default` flag. `ca-tpa-coverage` is a **live contradiction today** (both notices
> active, so an exempt property's lease would say it is both covered and not covered); `ca-sublet-consent` is the
> landlord's consent-standard choice, with the alternative shipped inactive. Also held for CA: `parking-vehicle-rules`,
> pending the Vehicle Code towing rules.

Four deliverables, all in `/mnt/user-data/outputs/`:

| File | State |
|---|---|
| `lease-clauses-ca.csv` | 674 rows (+107 vs input). **116 CA-specific rows, all `VERIFIED`; 27 shared base rows tagged `CA`.** Two choice groups need builder support before import — see §5.33. 19 `supersedes` links. No duplicate ids, no dangling `supersedes`, no CA display collisions, no rows lost against the input |
| `lease-clause-decision-log-CA.md` | This document |
| `lease-clause-decision-log-CA-extend-manifest.md` | 52-row screen, run and resolved |
| `lease-clause-decision-log-named-topic-checklist.md` | CA column across all ten shared tables — **all 69 answered** — plus 19 new CA-surfaced topic rows |

### Against the 4-item completion checklist

1. **Clause sync** — ready. Note the 19 `supersedes` links: the open `supersedes`-suppression question is
   now load-bearing for CA display, and the blank-`states` filter fix is still deferred.
2. **Citations file** — the citation screen (§5.12) has already classified all 83 cited sections into read,
   quoted-within-read, deliberate-non-reliance and genuinely-unread. Use that rather than re-extracting.
   Every CA `notes` entry carries the code body explicitly (Civ. Code / Gov. Code / H&S / CCP / 2 CCR / R&T)
   because **a bare section number is not a citation in California** — §1953 and §12178 each exist in two
   different bodies of law.
3. **Every open PARTIAL / CONFIRMED_ABSENT row reviewed with Taylor** — the list is short:
   - **Retired as not in force:** `foreclosure-disclosure-ca` (§2924.85, self-repealed 2018 with its extension
     window closed — treated as confirmed) and `mold-disclosure-ca` (§26147, never commenced because CDPH
     never adopted the predicate standards — confirmed from CDPH's own 2005 and 2017 documents).
   - **Confirmed absences carried as their own rows:** `edu-no-foreclosure-disclosure-ca`,
     `edu-mold-disclosure-contingency-ca`, `edu-no-periodic-inspection-ca`, `edu-no-clra-rent-pricing-ca`.
   - **Repeal with a live caveat:** `edu-nuisance-eviction-assignment-ca` — §3485 repealed 2024 but revived
     four times historically; watch for a re-add.
   - **Case-law rows resting partly on secondary sources:** `edu-waiver-by-acceptance-ca` (*Baca v. Kuang* known
     only through a law-firm alert; read the opinion before building the "return, don't reserve" branch) and
     `edu-no-jury-waiver-ca` (*EpicentRx*'s residential reach unresolved).
   - **One decision, not a defect:** `no-sublet-assign-ca` currently uses "consent not unreasonably withheld" to
     preserve the §1951.4 remedy. Sole discretion is the lawful alternative. Taylor's call.
4. **Legal-watch workflow** — CA supplies the hardest requirements yet:
   - **§§1946.2(n) and 1947.12(o) repeal the entire TPA on 2030-01-01.** Four CA rows lapse together.
   - **A rulemaking watch distinct from the bill watch**, for the Civil Rights Council (2 CCR Title 2).
     Five states now depend on agency rules for a `REQUIRED` family.
   - **Recently amended and worth watching closely:** §1950.6 (AB 1170, operative 2026-01-01), §1947.3 and
     CCP §1161 (SB 611, operative 2025-02-01), §1950.5's photo duties (2025-04-01 and 2025-07-01).
   - **A CPI-indexed figure that cannot be hardcoded:** the §1950.6 screening-fee cap, indexed annually from
     a 1998 base. Same for the §1947.12 rent cap, which is metropolitan-CPI and date-dependent.

### Product and schema work this pass surfaced, escalated not solved

- **Minimum type size** — five floors, no schema field.
- **Translation** — §1632 requires a complete translated lease, not a translated disclosure; no capability.
- **Document-timing** — §1953(b) voids statutory-right modifications unless the lease was presented before
  possession. The builder must know the delivery moment.
- **Certificate-of-occupancy date** — needed for §1940.5 (waterbeds) and the §1947.12(d) 15-year exemption.
- **Property type** — needed for §1940.4 sign locations and the §2079.10a unit-count limbs.
- **Photograph capture and storage** — §1950.5(g).
- **Screening-process choice** — §1950.6(c)(2) forces one of two processes; §1950.1 acceptance is a
  landlord-level setting that forfeits screening-fee revenue.

### Known gaps, stated plainly

**Nothing is at `NEEDS_REVIEW`**, and nothing that affects a clause is open. The mold, repeal and case-law
questions are resolved (§§5.22–5.24), the §789.3 self-help gap is closed (§5.26), the military chapter is read
in full (§5.29), and every candidate topic is answered (§5.31). What remains is legal-watch — see §0.

- **Venue:** whether *EpicentRx* (Cal. 2025), which enforced a forum-selection clause despite loss of a jury in
  a corporate setting, reaches a residential lease where §1953(a)(4) applies.
- **§3485 revival watch:** repealed 2024-01-01, but revived four times before, once after a lapse.
- **17 CCR Chapter 8 lead testing thresholds** (dust and soil levels) — the statutory paint-area thresholds
  the app needs are already in `edu-lead-hazards-ca`.

**Municipal layer:** rent-control and just-cause ordinances are flagged and unresolved by decision — and in
California that boundary is weaker than in any prior state, because §1946.2(i) lets a local ordinance
*displace* the state scheme rather than supplement it (§7). Three state provisions also apply only in named
localities (§§3485–3486 by city, §1947.1 by county), which a state-level-only pass must handle as a
separate category (checklist, "State law geographically confined to named cities").


---

# Appendix — base-clause extend manifest

> Merged in from the separately-delivered `lease-clause-decision-log-CA-extend-manifest.md` at sync time (2026-09-24), per the standing one-log-file-per-state rule. Content unchanged below; its internal "log §5.x" references point to the sections above. **Stale at sync time:** its closing "Also not applied here" note (and §9's matching line) says the blank-`states` filter fix is deferred and the `supersedes`-suppression question open — both were already closed in the app during Ohio's sync (2026-09-18/19): blank `states` on a provided template no longer matches a specific-state filter, and `supersedes` is confirmed load-bearing suppression. Choice-group builder support (§5.33's must-fix) was built in this sync.

## California — base-clause extend manifest (2026-09-19)

### Status: SCREEN RUN AND APPLIED — 27 base rows tagged `CA` (2026-09-19)

> **Update, end of pass.** The tagging below was deferred "until the blocked set is resolved" — and then missed
> after the blocked set was resolved, leaving CA with no shared rows at all. It has now been applied: the 30
> provisionally-clear rows were **re-screened against the full CA pass** (most of which post-dates this
> manifest) and 29 were tagged `CA`. A follow-up read of every tagged row plus a topical overlap scan (log §5.33) then
> **untagged two**: `tenant-maintenance` (duplicated `tenant-maintenance-obligations-ca`, which now supersedes it) and
> `possession-delay` (conflicted with `casualty-termination-ca`; replaced by `possession-delay-ca`). **Final: 27.** **`parking-vehicle-rules` is held**: its
> towing authorization has no "as permitted by law" hedge, and CA private-property towing is governed by the
> Vehicle Code (believed §22658), unread. See log §5.32.

Screened all **52 active base rows** (tagged to 2+ core states) against California primary text read this
session. Population is identical to Ohio's 52, confirming no base row was added or retired between states
#8 and #9.

Method: a pattern screen keyed to verified CA rules flagged 18 rows; all 18 were then read in full, and the
34 the screen called clean were read by eye. **That second pass found five more blockers the pattern screen
missed** — the same failure mode Ohio's re-screen hit, which is why it was run.

**No base row is tagged `CA` yet.** Fifteen are blocked, six need a CA override that does not exist, and the
rest are provisionally clear but are not tagged until the blocked set is resolved, because several share
text with blocked rows.

### Blocked — do NOT tag CA

### Exculpation: Civ. Code §1953(a)(5) and §1668 — the same four rows Ohio found

§1953(a)(5) voids any provision by which the tenant waives the right to have the landlord exercise a duty of
care *imposed by law* to prevent personal injury or **personal property damage**. §1953(a)(2) separately
voids waiver of the right to assert any future cause of action.

| Row | Offending language |
|---|---|
| `tenants-property-insurance` | "Landlord is **not liable** for any such loss or damage" |
| `parking` | "is **not liable** for damage to or theft of a vehicle or its contents" |
| `storage-space` | "Landlord is **not liable** for damage to or theft of items stored there" |
| `services-utilities-provided` | "Landlord is **not liable** for any interruption or insufficiency…" |

**The CA/Ohio divergence on the fourth row is RESOLVED — they converge, by a different route.** I flagged
`services-utilities-provided` as possibly surviving in CA because its disclaimer is limited to "causes
beyond Landlord's reasonable control", which §1953(a)(5) may not reach. **Civ. Code §1942.1 closes it**: any
agreement waiving or modifying §1941 or §1942 rights is void **with respect to any condition which renders
the premises untenantable**, and water, heat and electrical service are §1941.1 tenantability items. A
blanket disclaimer of liability for utility insufficiency modifies those rights and is void to that extent.
**Blocked** — needs a CA version carrying a tenantability carve-out. Ohio reached the same answer through
§5321.13(D); CA gets there through §1942.1 rather than the exculpation rule I first reached for.
The library already has `parking-ks` and `storage-space-ks` as precedent for per-state exculpation splits.

### Liquidated damages: Civ. Code §1671(d)

| Row | Reason |
|---|---|
| `late-fee` | A flat late fee with no impracticability recital. §1671(c)(2) routes dwellings to §1671(d), where the clause is **void** unless actual damage would be impracticable or extremely difficult to fix. **Superseded by `late-fee-safe-harbor-ca`** (link now set) |
| `early-termination` | "one month's Rent **or 30% of the remaining Rent, whichever is greater**" is a penalty on its face and faces §1671(d) directly. It also lets the landlord terminate on 30 days' notice for breach, which ignores §1946.2 just cause entirely. Needs `early-termination-ca` |
| `holdover` | "holdover damages in the **maximum amount permitted by applicable law**" — **confirmed empty referent.** CCP §1174(b) gives actual damages plus statutory damages of up to **$600 only on a finding of malice**, which is court-awarded and not a per-day figure a lease can stipulate. A stipulated per-day charge would itself face §1671(d). **`holdover-ca` now written** and supersedes this row |

### Security deposit: Civ. Code §1950.5

| Row | Reason |
|---|---|
| `due-at-signing` | Its worked example collects a **pet deposit and last month's rent** alongside the security deposit. Both are security "however denominated" under §1950.5(b), so the example invites breach of the one-month cap in §1950.5(c)(1). Needs `due-at-signing-ca` |
| `security-deposit-use` | Duplicates the deposit-amount sentence now in `security-deposit-cap-ca` and its permitted-use limb is subsumed by `security-deposit-return-ca`. **Superseded by `security-deposit-cap-ca`** (link now set) |

### Entry: Civ. Code §1954, non-waivable via §1953(a)(1)

| Row | Reason |
|---|---|
| `landlords-access` | Asserts a general "right of reasonable access" and omits the §1954(d)(1) requirement that the notice state **date, approximate time and purpose**. **Superseded by `landlord-entry-ca`** (link now set) |
| `inspection-rights` | **Found on the eyeball pass.** Grants a right to "periodic inspections of the property during the Term". **Periodic inspection is not among §1954(a)'s permitted purposes** — the only inspection listed is the §1950.5(f) initial inspection. There is no CA basis for this clause at all |

### Assistance animals: 2 CCR §12185(d)

| Row | Reason |
|---|---|
| `pet-insurance-requirement` | §12185(d)(2) bars requiring **liability insurance** in connection with an assistance animal — the only fee ban in the project that reaches insurance, and this row is tagged in all eight prior states |
| `pet-policy` | Pet deposit and pet rent (§12185(d)(2)); no breed/size/weight limits (§12185(d)(5)); an indemnity limb (§1953(a)(2)); an exculpation limb ("without liability to Tenant"); **and a right to "enter the property and remove a pet" that is not among §1954(a)'s permitted entry purposes** |
| `assistance-animal-accommodation` | **Superseded by `assistance-animal-accommodation-ca`** (link set earlier) |

### Payment mechanics — Civ. Code §1947.3 unread, both blocked pending it

| Row | Reason |
|---|---|
| `returned-payments` | Caps the fee at "the maximum permitted by applicable law", which resolves via §1719 **only for checks, drafts and orders** — for ACH or card it resolves to nothing and §1671(d) governs. It also imposes a **permanent** cashier's-check-only regime after two returns; §1947.3(a)(2) caps the analogous cash-only restriction at **three months** and requires a written notice attaching the dishonoured instrument. **Superseded by `nsf-fee-limit-ca`** for the fee limb; the payment-form limb is now covered by `payment-methods-ca` |
| `acceptable-payment-methods` | **Found on the eyeball pass, and confirmed.** §1947.3(a)(1) requires at least one form of payment that is **neither cash nor electronic funds transfer**, and §1947.3(a)(3) requires allowing **third-party** rent payment. A free-text list of accepted methods can silently breach both. Now covered by `payment-methods-ca` |

### Statutory-right waivers found on the eyeball pass

| Row | Reason |
|---|---|
| `rent-payment` | "without demand, **deduction, or setoff**" — **§1942.1 confirms this is void** as to any condition rendering the premises untenantable, since it waives the §1942 repair-and-deduct remedy. Needs a CA carve-out |
| `existing-condition` | Tenant "acknowledges that the property is in **good order and repair and satisfactory condition**" — **§1942.1 confirms** this is void as a §1941 modification to the extent it reaches untenantable conditions, and it cuts against the §1950.5(e)(2)(B) bar on deducting for preexisting conditions |
| `common-area-use` | **Both suspicions confirmed.** Its ban on "any sign, banner, or advertisement visible from outside" is unlawful as to political signs under **§1940.4(a)**, and its flat waterbed ban is barred by **§1940.5** for any structure whose certificate of occupancy issued after 1973-01-01. Needs `common-area-use-ca`; see `political-signs-ca` and `waterbed-ca` |
| `addendum-precedence` | Provides that the Lease controls over any conflicting Addendum. Several CA disclosures are **statutorily required addenda** (TPA notice, bed bug, flood, meth/fentanyl); a precedence clause subordinating them to the lease body is the wrong default in CA |

### Provisionally clear (30 rows)

`application-of-payments` · `appliances-included` · `assigned-parking-space` · `common-area-use`* ·
`default-by-tenant` · `electronic-signatures` · `entire-agreement` · `fire-safety-grilling` ·
`governing-law` · `guest-policy` · `guest-policy-day-limit` · `hoa-compliance` · `joint-liability` ·
`keys` · `landscaping-irrigation` · `lead-based-paint` · `no-alterations` · `no-disturbance` ·
`notices` · `parking-vehicle-rules` · `permitted-occupants` · `possession-delay` ·
`residential-use-only` · `severability` · `snow-removal` · `surrender-end-of-term` · `tenant-maintenance` ·
`utilities-paid-by-landlord` · `utilities-responsibility` · `utility-payment-evidence` ·
`utility-service-continuity`

Not tagged yet — several share drafting with blocked rows and should be tagged as one batch once the
overrides exist. **`no-sublet-assign` was moved out of this list on 2026-09-19** after §1951.4 showed that a
sole-discretion consent clause, while lawful, costs the landlord a remedy. Worth noting that the screen's
provisionally-clear list is only as good as the sections read at the time it was written.

**`smoking-policy` CLEARS.** §1947.5(b)(1) requires a lease entered into on or after 2012-01-01 on a
no-smoking property to "include a provision that specifies the areas on the property where smoking is
prohibited". The base row enumerates them — inside the dwelling, porches, balconies, common areas — so it
satisfies the requirement rather than breaching it. It also bans marijuana and vaping, which §1947.5 does
not authorise but does not forbid either. Tag with a note recording §1947.5 as the authority and §1947.5(b)(2)
(a new ban on a pre-2012 tenancy is a change of terms needing §827 notice).

**`possession-delay` stays provisional.** §1925 defines hiring and says nothing about delivery of
possession; no CA delivery-of-possession rule was located. Recorded as *not located*, not confirmed absent —
Chapter 1 was not swept section by section.

Three others carry notes rather than blocks: `default-by-tenant` keeps its prevailing-party fee sentence
for CA because **Civ. Code §1717 makes one-way fee clauses reciprocal** rather than void — the opposite of
Ohio §5321.13(C), so CA uses the full `default-by-tenant` and **not** `default-by-tenant-ks-ne`.
`possession-delay` is unverified against CA's delivery-of-possession rule (§1925 et seq., unread).
`application-of-payments` promises a "statutory right to cure nonpayment of base rent" which **does** have a
referent in CA (CCP §1161(2)–(3), §1179) — unlike Ohio, where that sentence was empty.

### Still to build for California

### ALL OVERRIDES BUILT — the blocked set is now resolved

Every blocked row now has a CA replacement or a recorded absence. Seventeen CA rows carry `supersedes`
links back to the base rows they displace.

| Blocked base row | CA replacement |
|---|---|
| `rent-payment` | `rent-payment-ca` — deduction/setoff waiver removed, §1942 rights expressly preserved |
| `existing-condition` | `existing-condition-ca` — acknowledges *condition*, not *good condition*, with §1941/§1941.1 and preexisting-condition carve-outs |
| `tenants-property-insurance` | `tenants-property-insurance-ca` — exculpatory sentence removed; the true statement that landlord insurance doesn't cover tenant property is kept, since §8589.45(a)(3) requires substantially that anyway |
| `parking` | `parking-ca` — exculpation removed, no-security disclosure kept |
| `storage-space` | `storage-space-ca` — exculpation removed |
| `services-utilities-provided` | `services-utilities-provided-ca` — **narrowed, not removed**: tenantability carve-out added. The one row where CA's fix differs in kind from Ohio's |
| `common-area-use` | `common-area-use-ca` — political-sign carve-out; waterbed sentence removed entirely to `waterbed-ca` |
| `pet-policy` | `pet-policy-ca` — assistance-animal carve-out, plus indemnity, exculpation and the non-§1954 pet-removal entry right all removed |
| `pet-insurance-requirement` | `pet-insurance-requirement-ca` — assistance-animal carve-out |
| `due-at-signing` | `due-at-signing-ca` — pet deposit and prepaid last month's rent removed from the example; §1950.5(c) cap stated |
| `early-termination` | `early-termination-ca` — the whichever-is-greater fee replaced with actual damages less mitigation; landlord limb deferred to §1946.2 |
| `holdover` | `holdover-ca` — actual damages and reasonable rental value; no stipulated per-day figure |
| `late-fee` | `late-fee-safe-harbor-ca` — drafted to §1671(d) |
| `returned-payments` | `nsf-fee-limit-ca` (fee) + `payment-methods-ca` (payment forms) |
| `acceptable-payment-methods` | `payment-methods-ca` |
| `landlords-access` | `landlord-entry-ca` |
| `security-deposit-use` | `security-deposit-cap-ca` + `security-deposit-return-ca` |
| `assistance-animal-accommodation` | `assistance-animal-accommodation-ca` |
| `no-sublet-assign` | `no-sublet-assign-ca` — **reclassified from "provisionally clear" after reading §1951.4.** Sole-discretion consent is lawful in CA but forfeits the §1951.4 continue-the-lease remedy. Taylor's call; see the row's notes |
| `inspection-rights` | **No replacement** — retired for CA. Recorded as `edu-no-periodic-inspection-ca` so the absence is visible to future canvasses rather than living only in this manifest |

**One flag on `early-termination-ca`:** Civ. Code **§1951.2** (landlord's damages on abandonment and the
duty to mitigate) has *not* been read, and it is the section that would confirm the actual-damages measure
the row now uses. Read it before relying on that row.

**The screen no longer needs statute text to finish.** Remaining unread sections bear on rows already
decided: Civ. Code §1962.5, §1353.6, §§1980–1991 (abandoned property, an entirely unexplored area with no CA
row), and CCP §1179.

### Also not applied here

The blank-`states` filter fix remains deferred to the CSV sync, and the `supersedes`-suppression question is
still open. Six CA rows now carry `supersedes` links, four of them set by this screen, so that question is
now load-bearing for CA display.


## Propagated from the Texas pass, 2026-09-25

Two shared rows tagged to this state were edited by the Texas pass (§5a.1 / instruction 9):

1. `no-alterations` — appended: "This Section does not limit any repair, installation, or rekeying that applicable law entitles Tenant to perform." Driven by Tex. Prop. Code §§92.0561, 92.164(a)(1), 92.165(1) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `assigned-parking-space` — reassignment is now "subject to any limits applicable law places on changing parking rules or policies during the Term." Driven by Tex. Prop. Code §92.0131(e) (TX). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.

`last_checked` on both rows reset to 2026-09-25. No other field changed. Detail: lease-clause-decision-log-TX.md §§3.1, 16. (Appended at sync, 2026-09-26.)


## Propagated at the Florida sync, 2026-09-26

A shared row tagged to this state was edited (§5a.1 / instruction 9), by Taylor's decision at the Florida sync, not by a state pass.

1. `application-of-payments`: payments are now applied **rent first**, oldest unpaid period first, and only then to fees and other charges ("unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise"). It was fees first. The cure-preserving sentence is kept. NJ and FL are folded back into this row and `application-of-payments-nj` is retired. Reason: fees first turns an unpaid fee into an apparent rent shortfall. No tagged state's research found a statute requiring fees first, and rent first is lawful on any reading. Classification: UNIFORM. It removes a landlord-favorable ordering and adds no obligation. Inherit without override.

`last_checked` reset to 2026-09-26. No other field changed. This is not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-FL.md §16. (Appended at sync, 2026-09-26.)

2. `default-by-tenant` (second propagated edit at the Florida sync, 2026-09-26): the non-rent cure promise now ends "...does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure." Driven by Florida's finding that promising a cure for every breach can contractually give up a state's no-cure termination grounds (checklist instruction 33). This is a targeted fix Taylor approved, not a re-audit. Classification: UNIFORM. It is self-limiting and adds no landlord right where no such law exists. Inherit without override. `last_checked` reset to 2026-09-26. Detail: lease-clause-decision-log-FL.md §16.

## Propagated from the Arizona pass, 2026-09-27

Not a re-audit; nothing else in this state was reviewed. Detail: lease-clause-decision-log-AZ.md §14 and §17. (Appended at sync, 2026-09-27.)

1. **Shared-row edit received from Arizona (2026-09-27, Taylor's decision) — `entire-agreement`.** The sentence "may not be changed except in writing signed by all parties" now continues ", or as applicable law permits Landlord to change it by written notice to Tenant." Driver: A.R.S. §33-1342(C), which lets an Arizona landlord amend existing leases by written notice to comply with new laws; the old wording could be read to waive such a right. Recorded as **uniform** under §5a.1: the words are self-limiting and change nothing where this state's law gives no unilateral amendment right, while preserving any right it does give (for example, rules adopted on notice or changes to a periodic tenancy on the notice the law requires). No state-specific override is needed. `last_checked` was reset to 2026-09-27.

2. **2026-09-27, AZ session — new shared row `rental-application-accuracy` tagged CA** (§5a.1; uniform text, no CA override). The tenant represents that the application information was true, correct and complete; a materially false or misleading statement is a material breach, with the remedies the lease and law provide; information the landlord may not request or consider is excluded. No landlord termination right for application misrepresentation was located. For a tenancy covered by Civ. Code §1946.2, the clause's route is the at-fault just cause for breach of a material lease term; how courts treat a past misrepresentation under that ground is untested. Criminal-history screening limits (`edu-criminal-history-screening-ca`) and local ordinances are covered by the last sentence. Remedies run through `default-by-tenant`.

---

## Gap-discovery backfill (instruction 36) — 2026-09-28

| Source | Status |
|---|---|
| Gap-discovery source 1 — statute walk | Done (§0, §1, §5.18: Civ. Code Title 5 Chapters 1–2, §§1925–1954.071, swept end to end) |
| Gap-discovery source 2 — real-lease comparison | Done (§GD.2: C.A.R. *Residential Lease or Month-to-Month Rental Agreement*, RLMM Revised 12/24, and California Apartment Association *Lease Agreement*, Form CA-041 Revised 12/24) |
| Gap-discovery source 3 — landlord-scenario screen | Done (§GD.3: 64 scenarios, Claude-generated) |
| Gap-discovery source 4 — outside-title search | Done (§GD.4: official leginfo code full-text search, all codes, run 2026-09-28) |

**Scope of this pass.** A targeted backfill of sources 2, 3 and 4 only, not a re-audit of California. Screened against the current library (`lease-clauses.csv`, 941 rows, 14 states), not against the CSV this state's original pass produced.

**What it produced.** Six new rows, seven changed rows, one substantive **correction to a shipped row**, one **previously stated open item closed**, and fourteen confirmed absences. Output: `lease-clauses-CA-delta.csv`, 13 rows. Library 941 → 947 rows; CA 151 → 157 active rows, all `VERIFIED`. No other state's count changed and no shared row's text was touched.

The three findings that matter most:

1. **`edu-mold-disclosure-contingency-ca` was wrong.** California has had a live mold **disclosure** duty since 2022-01-01 under H&S §26148, a section the original pass never read. The row asserted the opposite.
2. **A REQUIRED prescribed lease disclosure was missing entirely** — Civ. Code §1954.204, water submeter billing, ten mandatory items in at least 10-point type. `landlord-entry-ca`'s own notes had flagged that chapter as unread.
3. **Towing** (Veh. Code §22658) and **selling a tenanted property** (Civ. Code §1954(d)(2), §1950.5(i)–(k)) were both gaps — the same two the Arizona scenario screen found, which is evidence the screen generalises rather than being Arizona-specific.

---

### GD.1 Source 1 — statute walk (already complete)

Recorded at §0 and §1: Civ. Code Title 5 Chapters 1 and 2 (§§1925–1954.071) read end to end, plus roughly fifty further provisions across the Civil Code, CCP, Government, Health & Safety, Revenue & Taxation and Penal Codes and 2 CCR / 17 CCR, and five case-law authorities (§5.22). The chapter sweep itself is §5.18. Nothing was re-run.

One limit of that walk is now visible and worth recording, because it caused finding 2 above: **Chapter 2.5 commencing with §1954.201 sits immediately past §1954.071 and was outside the swept range.** §1954(a)(5) pointed at it, the pass identified it as the water submetering chapter, and then never read it. The range chosen for a sweep is itself a source of gaps.

---

### GD.2 Source 2 — real-lease comparison

#### Provenance

Two leases, both current, both real, neither a template.

**Primary — California Association of REALTORS® *Residential Lease or Month-to-Month Rental Agreement*.**
- Form code and edition printed on the form: **RLMM REVISED 12/24**. Copyright line: © 2024, California Association of REALTORS®, Inc. 9 pages plus 6 pages of attached addenda and disclosures; 48 numbered paragraphs plus signature and property-management blocks.
- Copy used: posted by **Collins Property Management**, a California property-management company, at `https://www.collinspropertymanagement.net/files/Res__Lease_Month_to_Month_Rental_Agmt___12_24.pdf`.
- **Why it qualifies:** it is the state Realtors association's own residential lease, in the copy a real property manager posts — expressly the first route in instruction 36. C.A.R.'s own hosting of Form LR on car.org is **member-restricted** (the association's PDF returns a "restricted to C.A.R. members" page to a non-member fetch), which is why a property manager's posted copy was used.

**Secondary — California Apartment Association *Lease Agreement*.**
- **Form CA-041, Revised 12/24**, "California Apartment Association Approved Form, www.caanet.org", © 2024. 17 pages, 54 numbered sections.
- Copy used: posted by the **County of Santa Clara**, a public body, at `https://files.santaclaracounty.gov/exjcpb1426/2025-02/sample-ca_041_lease_agreement.pdf`.
- **Why it qualifies:** CAA is California's apartment-industry association and CA-041 is the dominant professional apartment lease in the state; the copy is published by a public body. It was added because the C.A.R. form is drafted for single-family and small-landlord use and is markedly thinner on statutory detail — CA-041 is 17 pages to C.A.R.'s 9 and cites twenty California code sections by number. **Every finding of substance in this section came from the CAA form.**

Both are copyrighted. This section maps provisions **by topic** and reproduces no lease text. Both were used as a **lead only** (instruction 6): every statutory claim below rests on primary text read section-open on **leginfo.legislature.ca.gov** on 2026-09-28 — H&S §§26147, 26148; Civ. Code §§1689, 1954.202, 1954.204, 1954.205, 1954.206, 1954.213, 1954.214, 1954.218; Veh. Code §22658 subdivisions (a), (e)(1) and (l)(1)(A); B&P §10084.1; H&S §106750 — together with the sections already read in the original pass.

#### GD.2.1 Provision map — C.A.R. RLMM 12/24

| C.A.R. provision (by topic) | Library coverage for CA | Result |
|---|---|---|
| 1 Property; 2 Term; 24 Possession | `possession-delay-ca`, `surrender-end-of-term`, `month-to-month-notice-ca` | Covered |
| 3 Rent; 5 Move-in costs received/due | `rent-payment-ca`, `due-at-signing-ca` | Covered. Money taken **before** signing is a gap → `edu-holding-deposit-ca` (§GD.2.3) |
| 4 Security deposit | `security-deposit-cap-ca`, `security-deposit-return-ca`, `edu-deposit-photo-duty-ca` | Covered, and ours is fuller: the form cross-refers, ours states the 21 days, the $125 documentation threshold and the photo duties |
| 6 Late charge; returned checks | `late-fee-safe-harbor-ca`, `nsf-fee-limit-ca`, `edu-nsf-treble-damages-ca` | Covered. The form fixes a percentage; §1671(d) makes the *presumed-damage* framing the safer one, which ours uses |
| 7 Parking; 8 Storage | `parking-ks-oh-ca`, `storage-space-ks-oh-ca`, `assigned-parking-space`, `unbundled-parking-ca` | Covered. **Towing is a gap** → `edu-towing-ca` (§GD.3) |
| 9 Utilities | `utilities-responsibility`, `utilities-paid-by-landlord`, `services-utilities-provided-ca`, `ordnance-demolition-meter-disclosures-ca` | Covered for shared meters. **Water submetering is a gap** → `water-submeter-disclosure-ca` (§GD.2.2) |
| 10 Condition of premises; 11 Maintenance use and reporting | `existing-condition-ca`, `landlord-maintenance-ca`, `tenant-maintenance-obligations-ca`, `repair-and-deduct-ca` | Covered |
| 12 Neighborhood conditions | — | Advisory disclaimer, no statute. No row (§GD.2.4) |
| 13 Animals | `pet-policy-ca`, `pet-insurance-requirement`, `assistance-animal-accommodation-ca`, `edu-assistance-animal-documentation-ca` | Covered, and ours is stricter: 2 CCR §12185(d)(2) bars any pet fee, extra rent, deposit **or liability-insurance requirement** for an assistance animal |
| 14 Smoking | `smoking-policy` | Covered |
| 15 Rules/regulations; 45 City, county or other local requirements | `common-area-use-ca`, `edu-municipal-layer-ca` | Covered. The form's local-requirements paragraph is the same boundary this log draws at §7 |
| 16 Condominium; planned unit development | `hoa-compliance` | Covered |
| 17 Alterations; repairs | `no-alterations`, `reasonable-modification-ca` | Covered |
| 18 Keys; locks | `keys`, `security-devices-ca`, `lock-change-non-cotenant-ca` | Covered, and ours carries the §1941.3 dead-bolt and window-device duties the form does not state |
| 19 Entry | `landlord-entry-ca` | Covered |
| 20 Photographs and internet advertising | — | **No statute located.** Contract term. No row (§GD.2.4) |
| 21 Signs (landlord may post for sale/lease) | — | Absent as a statute; folded into `edu-selling-rented-property-ca` |
| 22 Assignment; subletting | `no-sublet-assign-ca`, `no-sublet-assign-discretion-ca`, `edu-sublet-consent-choice-ca` | Covered |
| 23 Joint and individual obligations | `joint-liability` | Covered |
| 25 Tenant's obligations upon vacating | `surrender-end-of-term`, `security-deposit-return-ca` | Covered |
| 26 Breach of contract; early termination | `default-by-tenant`, `early-termination-ca`, `continue-lease-remedy-ca`, `edu-abandonment-damages-ca` | Covered (§§1951.2, 1951.4 at §5.10–§5.11) |
| 27 Temporary relocation for fumigation or repairs | `pest-control-notice-ca`, `edu-relocation-benefits-ca` | Covered on notice and on enforcement-driven relocation. A contractual vacate-with-rent-credit term has no statute; no row |
| 28 Damage to premises | `casualty-termination-ca` | Covered (§§1932, 1933) |
| 29 Insurance | `tenants-property-insurance-ks-oh-ca` | Covered. Requiring renter's insurance: **confirmed absent** as a regulated matter (§GD.4) |
| 30 Waterbeds/portable washers | `waterbed-ca` | Covered (§1940.5) |
| 31 Waiver (non-waiver clause) | **deliberately none** | Correct as designed. A general non-waiver clause collides with California's two acceptance-waiver rules (`edu-waiver-by-acceptance-ca`, §1945 and the forfeiture-waiver rule) |
| 32 Notice | `notices` | Covered |
| 33 Tenant estoppel certificate (Form TEC, 3 days) | — | **Confirmed absent statute-wide** (§GD.4). Folded into `edu-selling-rented-property-ca` |
| 34 Representation; 47 Legally authorized signer | — | Contract mechanics. Probate Code §18100.5 certification-of-trust route not read; no row |
| 35 Mediation | — | **Confirmed absent** (§GD.4). No row; see the cross-state question at §GD.2.4 |
| 36 Attorney fees (capped at a stated amount) | `edu-fee-shifting-ca`, `default-by-tenant` | Covered, and ours is the more important point: §1717 makes any fee clause reciprocal whatever it says. The form's **cap** is a real drafting device that also limits the landlord — noted, not adopted |
| 37 C.A.R. form; 42 Broker compensation; 41 Agency | — | Broker mechanics, out of scope for a self-managing landlord |
| 38A Mold and dampness booklet | `edu-mold-disclosure-contingency-ca` | **CORRECTED → new row `mold-booklet-disclosure-ca`** (§GD.2.2) |
| 38B Bed bugs | `bed-bug-disclosure-ca`, `bed-bug-cooperation-ca`, `edu-bed-bug-landlord-duties-ca` | Covered, and ours carries the §1954.603 10-point-type floor |
| 38C Megan's Law | `sex-offender-registry-notice-ca`, `edu-megans-law-housing-use-ca` | Covered, and ours adds the limit the form omits: the data **may not be used** in housing decisions |
| 38D Residential Environmental Hazards Booklet | — | **No statute requires or safe-harbours it.** B&P §10084.1 only directs the Department of Real Estate to *develop* it; "environmental hazards booklet" returns 0 sections (§GD.4). Contract practice, not law. Recorded in `edu-no-radon-disclosure-ca` |
| 38E Flood hazard (Form TFHD) | `flood-disclosure-ca` | Covered, and ours is materially fuller — the form treats it as conditional on a flood zone; Gov. Code §8589.45 requires it in **every** residential lease |
| 38G RPOD: lead paint, meth, periodic pest control, water submeters, mold, asbestos, HOA, military ordnance, deaths on premises | `lead-based-paint`, `edu-lead-hazards-ca`, `meth-disclosure-ca`, `edu-meth-fentanyl-disclosure-duties-ca`, `pest-control-notice-ca`, `ordnance-demolition-meter-disclosures-ca`, `edu-death-on-premises-ca` | Covered except **water submeters** (gap, §GD.2.2) and **asbestos** (confirmed absent as a tenant duty, §GD.4) |
| 39 Servicemembers Civil Relief Act | `military-lease-termination-ca`, `edu-military-tenant-protections-ca`, `edu-military-default-judgment-ca` | Covered, and ours is much stronger: the form invokes only the federal Act, while California has **its own** termination right in Mil. & Vet. Code §409 with a **misdemeanour** for holding the deposit against post-termination rent (§5.29) |
| 40 Time of essence; entire contract; changes | `entire-agreement`, `addendum-precedence` | Covered. Time-of-essence skipped by the standing decision (AZ §16.4) |
| 43 Notice of right to receive foreign language translation | `edu-translation-duty-ca` | **Present but education-only** — see the cross-state question at §GD.2.4 |
| 44 Receipt; 48 Interpreter/translator | `edu-translation-duty-ca` | Covered as a duty; the interpreter attachment is form mechanics |
| 46 Other terms and conditions | — | Free text |

#### GD.2.2 Provision map — CAA Form CA-041 12/24 (the sections that produced findings)

| CAA provision | Library coverage for CA | Result |
|---|---|---|
| 2 AB 1482 disclosures | `tpa-notice-ca`, `tpa-exemption-notice-ca`, `rent-increase-cap-ca`, `edu-tpa-sunset-ca` | Covered |
| 7 Late fees and insufficient funds | `late-fee-safe-harbor-ca`, `nsf-fee-limit-ca` | Covered; **and the cap question is now closed** (§GD.4) |
| 8 Guarantee (guarantor liable for rent, damages, fees) | — | **No landlord-tenant guaranty statute** (§GD.4). Cross-state question at §GD.2.4 |
| 13 Disclosure of person authorised to manage; service of process | `owner-identity-disclosure-ca` | Covered (§1962) |
| 14 Renters insurance | `tenants-property-insurance-ks-oh-ca` | Covered; requirement unregulated (§GD.4) |
| 18 **Personal micromobility devices**, citing Civ. Code §1940.41 | `tenant-use-rights-ca` | Covered, **and ours is the more accurate of the two** — the form omits §1940.41(a)(2)'s condition that a landlord may ban in-unit storage only by *providing* free secure long-term storage meeting five requirements. Row notes updated |
| 22 Security devices (tenant cameras, video doorbells) | — | **Confirmed absent** (§GD.4). No row |
| 26 Spare the Air alerts | — | Regional air-district rules; same boundary as the municipal layer. No row |
| 27 Political signs | `political-signs-ca` | Covered |
| 28 Satellite dishes | — | **Confirmed absent from the California codes**; the governing rule is the federal FCC OTARD rule, **not read**. No row (§GD.4) |
| 29 Water conservation | — | State Water Resources Control Board restrictions; regulatory, not statutory. No row |
| 31 Bed bug information, reporting, prevention | `bed-bug-*` rows | Covered |
| 33 **Mold prevention**, citing H&S §26148 | `edu-mold-disclosure-contingency-ca` | **THE CORRECTION.** See below |
| 37 Smoke detection; 38 Carbon monoxide detection | `alarm-duties-ca` | Covered (H&S §§13113.7, 17926) |
| 39 Liability for packages | — | **Would be void in California.** An agreement that the landlord bears no responsibility for loss of a tenant's packages limits liability arising under law — Civ. Code §1953(a)(5), with *Henrioulle* and *Whitehead* (`edu-exculpation-case-law-ca`). The library correctly has no such clause; this is a term in a current professional form that our exculpation screen would reject |
| 42 Sale of property (Form CA-160 certification of terms, 10 days) | — | **Gap** → `edu-selling-rented-property-ca` |
| 44 Sex offender database; 45 Hazard notice (Gov. Code §8589.45) | `sex-offender-registry-notice-ca`, `flood-disclosure-ca` | Covered |
| 46 Asbestos (pre-1981 units) | — | **Confirmed absent as a tenant-facing duty**: H&S §25915 runs to **employees** of the owner in a pre-1979 building, not to tenants (§GD.4) |
| 48 Credit reports (negative reporting; authorisation) | `edu-rent-reporting-offer-ca` | Covered on the *positive* rent-reporting offer California mandates (§1954.06), which the form does not mention |
| 50 Waiver of breach | **deliberately none** | As above |
| Cites Civ. Code **§1353.6** for governing documents | `hoa-compliance` | **Cross-reference rot in the form**: §1353.6 was repealed and replaced by Civ. Code §4705. Recorded at `tenant-use-rights-ca` — the same error shape this project tracks in its own rows, found in a current professional form |

#### GD.2.3 Rows changed

**`edu-mold-disclosure-contingency-ca` — corrected; body and title revised, id kept.**

The row said California treats mold "as a habitability matter rather than a disclosure matter," and that "the mold disclosure statute at Health and Safety Code section 26147 does not operate on its own terms." The second half is right about §26147 and wrong about California.

H&S Chapter 18, **Article 4 (Disclosures), contains two sections with two different contingencies**:

- **§26147(e)** suspends the general mold disclosure until six months after the department adopts §26103/§26105 permissible exposure limits and §26130 remediation guidelines. It never has. That limb stands.
- **§26148(a)** separately requires residential landlords to "provide written disclosure to prospective tenants of the potential health risks and the health impact that may result from exposure to mold by distributing a consumer-oriented booklet developed and disseminated by the department," (b) before entering the agreement, and **§26148(c)** makes it operative on the first January 1 or July 1 at least six months after the department **approves the booklet** — not after any standards are adopted.

CDPH approved and published *Information on Dampness and Mold for Renters in California* (dated 2021-05-12), and **CDPH's own Indoor Air Quality mold page states: "As of Jan. 1, 2022, California rental housing providers are required to provide this mold booklet to prospective tenants."** That is consistent with §26148(c) on those dates.

- **New row `mold-booklet-disclosure-ca`** (REQUIRED lease clause, Disclosures, effective 2022-01-01) carries the acknowledgment and the delivery duty. The duty is **delivery of the booklet**, so a lease recital without the booklet is not compliance; the booklet's URL and edition belong on the legal watch as maintained app config, like the MyHazards address in `flood-disclosure-ca`.
- **Evidentiary limit, stated not glossed:** both statutes were read on the official revisor site, but the operative date rests on **CDPH's own statement**, not on a located approval instrument — the formal approval date was not found, and the CDPH page does not cite §26148. A different approval date would move the operative date, not the existence of the duty. This is the same class of administrative fact the row already relies on for the §26103 non-adoption.
- **How it was found:** not by any statute search, but because a landlord form cited a section we had never read. **The lease comparison caught what the statute sweep missed.**
- **Error shape, now recorded for the fourth time in California:** concluding an absence from the provision in hand rather than the one that governs — the same cause as the §1932 and §1934 corrections (§5.15) and the lead-paint canvass miss (§5.20). The specific trap: treating "the mold disclosure statute" as one section when the article has two, one live and one dead. **Lesson: where a section's operation is contingent, read the whole article before asserting the topic is absent, because a sibling may carry the same duty on a different condition.**

**`water-submeter-disclosure-ca` (new, CONDITIONAL lease clause, Disclosures, operative 2018-01-01).**

Civ. Code **§1954.204** requires a landlord who intends to charge separately from rent for water service in a property with submeters to disclose ten items, **in writing, in at least 10-point type, before executing the rental agreement**, and the statute expressly permits them to be "incorporated into the rental agreement" — which is why this ships as a clause. That is the fifth prescribed type-size floor in the California set (§4.3). All ten are mandatory, and two are easy to miss: the estimate must be computed on one of **two defined bases** (average or median of comparative units over any three of the past six months, or 200 gallons per day for a family of four plus all other monthly charges), and **contact details are required twice** — once for billing questions, once for reporting leaks — and may differ.

Scope, §1954.202: a submeter measures an individual unit in a multiunit residential or mixed-use structure and is owned and operated by the landlord or the landlord's agent; "property" means two or more dwelling units served by a single master meter; "landlord" **excludes** a tenant subletting to subtenants and **excludes** a common interest development. Operative 2018-01-01 (§1954.218). Distinct from the §1940.9 shared-meter disclosure already in `ordnance-demolition-meter-disclosures-ca`.

**`edu-water-submeter-billing-ca` (new, CONSTRAINED education, Rent & Payment).** §1954.205 is a closed list of billable items with three alternative volumetric calculations; §1954.206 sets read timing, due-date timing, an eleven-item bill-content list, and a rule that a tenant **cannot be required to pay electronically**; §1954.213 is the one that will catch landlords out — **no late fee until 25 days** after the bill is sent, **$7** first and **$10** each subsequent, all late fees in any 12-month period capped at **10 percent** of the unpaid amount, partial payments to the **oldest** bill, termination only at **180 days overdue or $200 unpaid** and then by a **three-day notice to perform covenants or quit**, **water charges are not rent**, and **no shutoff for any reason including nonpayment**. §1954.214 preserves pre-2013 local ordinances, so the municipal layer is live here too.

Three consequences for existing rows, all recorded: this is the only residential late-fee **cap** in California and it is not about rent (see `late-fee-safe-harbor-ca`); the §1954.213(c) route is **not** a pay-or-quit, because (d) takes water out of rent; and §1954.213(e) is **absolute with no intent element**, unlike Civ. Code §789.3 in `edu-self-help-eviction-ban-ca`, so a submetered-water shutoff is unlawful even where §789.3 would not reach it. The shared `application-of-payments` row is **not** in conflict: it orders payments of rent and lease charges, while §1954.213(b)(3) orders water bills among themselves.

**`edu-holding-deposit-ca` (new, CONSTRAINED education, Security Deposit).** Confirmed absent code-wide (§GD.4), with the substance drawn from sections already read: §1950.5(b) security "however denominated", §1950.5(c)(1) the one-month cap, §1950.5(n) no "non-refundable" characterisation, and §1950.6(k) the screening fee being neither security nor an advance fee. **Open, and the row says so:** whether §1950.5(b) reaches money taken *before* a tenancy begins at all, since its words are "at the beginning of the tenancy." No case read.

**`landlord-entry-ca` and `tenant-use-rights-ca` — notes only, no text change.** The first records that Chapter 2.5 is now partly read and that the §1954(d)(2) showings right now has its own row; the second records the §1940.41 completeness check, the CAA form's narrower micromobility clause, the flag-display absence and the form's stale §1353.6 citation.

#### GD.2.4 Absences recorded (no row)

Each was run on the official leginfo search (§GD.4); scope is statutes only.

- **Tenant estoppel certificates** — "estoppel certificate" and "tenant estoppel" return **0** sections. A tenant may refuse. Both forms use a deemed-acknowledgment device whose enforceability was not researched; a certificate purporting to waive §1950.5 or §1954 rights would meet Civ. Code §1953(a). Folded into `edu-selling-rented-property-ca`.
- **Mediation / ADR requirement** — "mediation of a dispute between landlord and tenant" returns **0**. No row. Note the library's existing position: jury waivers are unenforceable (`edu-no-jury-waiver-ca`, *Grafton*), which is why an ADR clause is a product decision rather than a drafting convenience.
- **Guarantor / cosigner** — no landlord-tenant guaranty statute; "guarantor" in the Civil Code returns 15 sections, the relevant family being the general suretyship law at §§2787 *et seq.* Two California specifics do bear on it and are already in the library: §1950.6(j) includes guarantors and cosigners in "applicant" for the screening fee, and 2 CCR §12180(c)(3) treats allowing a co-signer as a reasonable accommodation where disability-limited income would otherwise disqualify the applicant.
- **Renter's insurance requirement** — "renters insurance" returns 3 sections and "renter's insurance" 2; the only landlord-tenant hit is Gov. Code §8589.45, the flood disclosure's own recommendation. Unregulated either way.
- **Tenant-installed security cameras and video doorbells** — "security camera" returns 3 sections, none landlord-tenant; "video doorbell" **0**. Scope limit worth stating: Penal Code §§632 and 647(j) regulate *recording*, not installation, and were not searched under those terms.
- **Satellite dishes and antennas** — "satellite dish" returns 2 sections, both common interest development (Civ. Code §§4725, 6708). **No landlord-tenant statute**; the governing rule is the federal FCC OTARD rule, 47 C.F.R. §1.4000, **not read**.
- **Asbestos disclosure to tenants** — H&S Chapter 10.4 (§§25915–25919.7) is "Asbestos Notification," and **§25915 requires notice to "all employees of that owner working within the building"** in a building constructed before 1979, not to tenants. So a landlord with on-site staff in a pre-1979 building has a real duty, but it is an **employment** duty and out of scope, the same treatment broker mechanics got in Arizona. No tenant-facing asbestos statute located.
- **Residential Environmental Hazards Booklet** — B&P §10084.1, read section-open, only directs the Department of Real Estate to develop the booklet; "environmental hazards booklet" returns **0**. No delivery duty, no safe harbour. Recorded at `edu-no-radon-disclosure-ca`.
- **Photographing the interior of an occupied unit for marketing** — no statute located. Not asserted as confirmed absent: no dedicated phrase search was run, and California's constitutional privacy right (art. I, §1) was not researched.
- **Flag display by a tenant** — "flag of the United States" returns 20 sections; the housing ones are Civ. Code §§4705 and 6702, both common interest developments. **No landlord-tenant right**, unlike Ohio's ORC §5321.131.

#### GD.2.5 Cross-state question for Taylor (not blocking)

**`edu-translation-duty-ca` is `LANDLORD_EDUCATION` only, and the C.A.R. form puts the translation notice *in the lease*.** Civ. Code §1632(d) requires that, at the time and place a covered lease is executed, **notice in the negotiating language be provided to the tenant** — that is a delivery duty, not merely background, and §1632(k) lets the tenant **rescind** on non-compliance. Gov. Code §8589.45(b) and Civ. Code §1946.2(f)(3) each separately subject their own disclosures to §1632.

The question is a product one: **should California carry a lease-side translation clause** (a short notice of the right to a translation, in the five languages §1632(b) names — Spanish, Chinese, Tagalog, Vietnamese, Korean), or is education plus a builder workflow step the right shape? My recommendation is a **builder workflow step plus a lease-side notice**, because the rescission remedy attaches to the delivery failure and the education row cannot prevent it. This is CA-only, so it is not a shared-row change — but it is a clause decision, so it is yours.

Two smaller ones, both library-wide rather than California problems, and both I would **skip**: a mediation clause, and a guarantor/cosigner clause. Neither is required anywhere, and a guaranty raises suretyship questions this project has not researched in any state.

#### GD.2.6 Integrity

947 rows, 911 active. CA 157 active: 93 lease clauses and 64 education rows, all `VERIFIED`. No duplicate ids, no dangling `supersedes`, no CA title or `topic_key` collisions, no blank status or blank `states` on an active row except the known parent `security-deposit-return`. Still 12 canonical groups. Every other state's active count is unchanged, and **no shared multi-state row's text was modified**. No exact-duplicate active `bodyText` groups introduced.

---

### GD.3 Source 3 — landlord-scenario screen

**Method.** The everyday situations a California landlord meets, application through move-out, sale and foreclosure. Scenarios were **generated by Claude**, starting from the Arizona log's 59-scenario map (§18.1) and adding California-specific ones; Taylor was not asked about his experience, per instruction 36. Each was run against the 151 CA-active rows as they stood. Where no row answered, the official leginfo search was run and any hit read section-open.

**Result. 64 scenarios: 60 covered, 4 gaps.** The gaps are towing, selling a tenanted property, water submeter billing and the mold booklet — the last two already at §GD.2. **Four confirmed absences** (cash receipts, extended absence, holding deposits, lease termination on the tenant's death by statute — the last already answered by §1934 at §5.15).

Notably, **two of the four gaps are the same two Arizona's screen found** (towing; selling a rented property), which is the clearest evidence yet that this screen is a general instrument rather than an Arizona artefact. Instruction 36's backfill of it across the remaining states is worth the cost.

#### GD.3.1 Scenario map

| Scenario | CA coverage | Result |
|---|---|---|
| **Before the lease** | | |
| Applicant pays a holding deposit, then backs out | — | **Gap → `edu-holding-deposit-ca`** |
| Screening fee: how much, refunds, receipts | `edu-screening-fee-ca` (§1950.6, AB 1170 eff. 2026-01-01) | Covered |
| Applicant brings their own screening report | `edu-reusable-screening-report-ca` | Covered |
| Criminal history in screening | `edu-criminal-history-screening-ca`, `edu-megans-law-housing-use-ca` | Covered |
| Applicant lied on the application | `rental-application-accuracy` (shared) | Covered. Statutory **termination** right: not located; **rescission** is located (§GD.4) |
| Voucher holder applies; income standard | `edu-fair-housing-classes-ca` (Gov. Code §12955(n), (o), (p)) | Covered |
| Applicant asks for a co-signer because of disability income | `accommodation-request-rights-ca`, `edu-accommodation-process-ca` | Covered (2 CCR §12180(c)(3)) |
| Immigration or citizenship status | `immigration-status-inquiry-ca`, `edu-tenant-harassment-ca` | Covered |
| Applicant is a service member | `security-deposit-cap-ca` (§1950.5(c)(4), (c)(5)(B)) | Covered |
| Unit not ready on move-in day | `possession-delay-ca` (§1932(1)) | Covered |
| Required disclosures at signing | `tpa-notice-ca`, `owner-identity-disclosure-ca`, `flood-disclosure-ca`, `bed-bug-disclosure-ca`, `lead-based-paint`, `pest-control-notice-ca`, `sex-offender-registry-notice-ca`, `ordnance-demolition-meter-disclosures-ca`, `meth-disclosure-ca` | Covered **except the mold booklet** → **gap** (§GD.2.3) |
| Lease negotiated in Spanish, Chinese, Tagalog, Vietnamese or Korean | `edu-translation-duty-ca` | Covered as education; clause question at §GD.2.5 |
| Deposit plus first month over the cap | `due-at-signing-ca`, `security-deposit-cap-ca` | Covered |
| Property is in an HOA | `hoa-compliance` | Covered |
| **Rent and money** | | |
| Rent is late | `late-fee-safe-harbor-ca`, `default-by-tenant`, `edu-three-day-notice-ca` | Covered |
| Tenant pays part of the rent | `application-of-payments`, `edu-waiver-by-acceptance-ca` | Covered |
| Check bounces | `nsf-fee-limit-ca`, `edu-nsf-treble-damages-ca`, `payment-methods-ca` | Covered |
| Tenant offers a postdated check | `edu-no-postdated-check-rule-ca` | Covered |
| Tenant pays in cash and wants a receipt | `payment-methods-ca` | **No statute** — confirmed absent (§GD.4) |
| Landlord wants to require electronic payment only | `payment-methods-ca` (§1947.3) | Covered |
| A third party offers to pay the rent | `payment-methods-ca` (§1947.3(a)(3)) | Covered |
| Raising the rent | `rent-increase-cap-ca`, `rent-increase-notice-ca`, `edu-tpa-sunset-ca` | Covered |
| Landlord bills water through a submeter | — | **Gap → `water-submeter-disclosure-ca` + `edu-water-submeter-billing-ca`** |
| Tenant asks the landlord to report rent to credit bureaus | `edu-rent-reporting-offer-ca` (§1954.06) | Covered |
| Landlord bulk-bills internet | `internet-billing-optout-ca` | Covered |
| Landlord charges for parking | `unbundled-parking-ca` (§1947.1) | Covered |
| **During the tenancy** | | |
| Heater fails in January | `landlord-maintenance-ca`, `repair-and-deduct-ca`, `edu-habitability-presumption-ca` | Covered |
| Tenant withholds rent or repairs and deducts | `repair-and-deduct-ca`, `edu-rent-demand-bar-ca` (§1942.4) | Covered |
| Mold complaint | `edu-mold-disclosure-contingency-ca` (revised), `mold-booklet-disclosure-ca` | Covered, after the correction |
| Bed bugs | `edu-bed-bug-landlord-duties-ca`, `bed-bug-cooperation-ca` | Covered |
| Roaches, rodents; pesticide application | `pest-control-notice-ca` (§§1940.8, 1940.8.5) | Covered |
| Lead paint in a pre-1978 building | `edu-lead-hazards-ca` (H&S §17920.10) | Covered |
| Balconies and stairs need inspection | `edu-balcony-inspection-ca` (H&S §17973) | Covered |
| Stove or refrigerator breaks | `stove-refrigerator-ca` (§1941.1(a)(10)–(11), eff. 2026-01-01) | Covered |
| Tenant causes damage or won't keep the unit clean | `tenant-maintenance-obligations-ca`, `default-by-tenant` | Covered |
| Landlord needs to enter; tenant refuses | `landlord-entry-ca` (§1954) | Covered |
| Tenant changes the locks | `keys`, `security-devices-ca` | Covered |
| Tenant is a victim of abuse and wants the locks changed | `lock-change-non-cotenant-ca`, `edu-abuse-violence-protections-ca` (§1941.5) | Covered |
| Tenant calls the police repeatedly | `emergency-assistance-right-ca` (§1946.8) | Covered |
| Tenant away for a month | `edu-abandonment-belief-notice-ca` | **No statute** — confirmed absent (§GD.4) |
| Guest won't leave; unauthorised occupant | `guest-policy`, `guest-policy-day-limit`, `permitted-occupants`, `edu-tenancy-scope-ca` | Covered |
| Roommate moves out | `joint-liability` | Covered |
| Tenant sublets or lists on a short-stay site | `no-sublet-assign-ca` / `no-sublet-assign-discretion-ca`, `residential-use-only`, `edu-sublet-consent-choice-ca` | Covered (choice group, §5.32) |
| Landlord rents the same room twice | `edu-double-letting-ca` (§1950) | Covered |
| Noise and neighbour complaints | `no-disturbance` | Covered |
| Drugs, violence or other crime | `edu-nuisance-eviction-assignment-ca`, `edu-three-day-notice-ca` | Covered (§1161(4): one statewide ground, one city-only, one dead pointer — §5.9) |
| Cannabis smoking or growing | `smoking-policy` | Covered |
| Unapproved pet | `pet-policy-ca` | Covered |
| Assistance or support animal request | `assistance-animal-accommodation-ca`, `edu-assistance-animal-documentation-ca`, `edu-service-animal-misrepresentation-ca` | Covered (2 CCR §12185) |
| Disability modification request | `reasonable-modification-ca`, `edu-accommodation-process-ca` | Covered (2 CCR §§12176–12181) |
| Tenant wants an EV charger | `ev-charging-ca` (§1947.6) | Covered |
| Tenant stores an e-bike and charges it indoors | `tenant-use-rights-ca` (§1940.41) | Covered |
| Tenant installs a camera or video doorbell | — | **No statute** — confirmed absent (§GD.4). No row |
| Tenant puts up a political sign, religious item, clothesline or planters | `political-signs-ca`, `tenant-use-rights-ca` | Covered |
| Tenant brings a waterbed | `waterbed-ca` | Covered |
| Car towed from the lot | `parking-ks-oh-ca` (defers to law) | **Gap → `edu-towing-ca`** |
| Tenant's utility is shut off; landlord's master meter is shut off | `utility-service-continuity`, `utility-payment-evidence`, `edu-self-help-eviction-ban-ca` (§789.3) | Covered; submetered water adds an **absolute** bar (§1954.213(e)) |
| Adding a rule mid-lease, or the law changes | `entire-agreement` carve-out, `rent-increase-notice-ca` (§827) | Covered |
| Wildfire, flood or earthquake; evacuation order | `disaster-duties-ca`, `edu-disaster-displaced-guests-ca` | Covered — a California-specific pair with no analogue in prior states |
| Habitability repairs force the tenant out | `edu-relocation-benefits-ca` (H&S §17980.7(d)(3)) | Covered |
| **Ending the tenancy** | | |
| Tenant wants out early | `early-termination-ca`, `continue-lease-remedy-ca`, `edu-abandonment-damages-ca` | Covered |
| Abuse or violence victim wants out | `dv-lease-termination-ca` (§1946.7) | Covered |
| Tenant is deployed or called up | `military-lease-termination-ca` (Mil. & Vet. Code §409) | Covered |
| Month-to-month notice either way | `month-to-month-notice-ca` (§1946.1: owner 60 days, tenant one period) | Covered |
| Landlord needs just cause; owner move-in; substantial remodel | `tpa-notice-ca`, `owner-move-in-reservation-ca` (§1946.2) | Covered |
| Tenant stays after the term | `holdover-ca` | Covered (no statutory formula — §GD.4 unchanged) |
| Tenant disappears | `edu-abandonment-belief-notice-ca`, `edu-abandoned-property-ca` (§§1980–1991) | Covered |
| Tenant dies | `casualty-termination-ca`; §1934 (checklist) | Covered by statute; no dedicated row, and none needed |
| Fire or casualty | `casualty-termination-ca` (§§1932, 1933) | Covered |
| Eviction process; forfeiture and redemption | `edu-three-day-notice-ca`, `edu-forfeiture-redemption-ca`, `edu-writ-execution-ca` | Covered |
| Tenant is a service member facing eviction | `edu-military-default-judgment-ca` (Mil. & Vet. Code §402) | Covered |
| Tenant raises a habitability or retaliation defence | `edu-habitability-presumption-ca`, `edu-retaliation-ca` (§1942.5) | Covered |
| Tenant claims a Social Security hardship | `edu-social-security-defense-ca` | Covered |
| Belongings left after move-out or eviction | `edu-abandoned-property-ca` | Covered |
| Deposit dispute; itemisation and photographs | `security-deposit-return-ca`, `edu-deposit-photo-duty-ca` | Covered |
| Deposit refund never cashed | `edu-deposit-escheat-ca` | Covered |
| Tenant asks about the eviction record | `edu-eviction-record-access-ca` (CCP §1161.2 masking) | Covered |
| **Owner changes** | | |
| Owner sells the property with a tenant in place | `security-deposit-return-ca` in part | **Gap → `edu-selling-rented-property-ca`** |
| Lender forecloses | `edu-no-foreclosure-disclosure-ca`, `tenant-forward-proceedings-ca` | Covered (§2924.8 is a trustee duty, not the landlord's — §5.24) |
| Owner switches property managers | `owner-identity-disclosure-ca` (§1962(c)) | Covered; now also in `edu-selling-rented-property-ca` |
| City ordinance imposes rent or just-cause rules | `edu-municipal-layer-ca` | Flagged, out of scope by decision (§7) |

#### GD.3.2 Rows changed

`edu-towing-ca`, `edu-selling-rented-property-ca` and `edu-holding-deposit-ca` are new; the towing row's substance is at §GD.3.3. The water and mold rows are at §GD.2.3. No existing row's text changed in this section.

#### GD.3.3 `edu-towing-ca` — the towing gap

Veh. Code **§22658** read section-open on leginfo 2026-09-28, subdivisions (a), (e)(1) and (l)(1)(A) quoted. **The section runs about 23,000 characters and was not read in full** — the storage-facility, notice, lien, release and enforcement limbs in (b)–(d), (f)–(k) and (m)–(n) were not read.

- **§22658(a)** gives four routes: (a)(1) a sign **not less than 17 by 22 inches** with lettering **not less than one inch**, in plain view **at all entrances**, prohibiting public parking, stating vehicles will be removed at the owner's expense, and giving the local traffic law enforcement agency's telephone number **and the name and telephone number of each towing company party to a written general towing authorization agreement** — so changing tow companies means changing every sign; (a)(2) 96 hours after a parking-violation notice; (a)(3) 24 hours after notifying local traffic law enforcement about a vehicle lacking a major part needed to operate safely; (a)(4) **a parcel improved with a single-family dwelling, which needs no sign at all**.
- **§22658(e)(1)** — the owner or person in lawful possession is liable for **double the storage or towing charges** for failing to comply with (a)(1), (2) or (3), or for failing to state the grounds for removal when the vehicle's legal or registered owner asks.
- **§22658(l)(1)(A)** — a towing company may not begin a removal without the property owner's or lessee's **written authorization**, and the authorising person must **be present at the time of removal and verify the violation** — except for a **residential rental property of 15 or fewer units with no onsite owner, agent or employee**, where the **tenant** may verify and request the tow **from that tenant's own assigned space** by signed request or email (within 24 hours if requested by phone), which the owner or agent passes to the towing company within 48 hours. (l)(1)(E)(i) bars a standing authorisation to tow at the towing company's discretion, except for fire hydrant and fire lane violations.

No clause conflict: `parking-ks-oh-ca` and `assigned-parking-space` defer to law and promise no towing right. **Not read:** Veh. Code §§22651 and 22853, and local towing ordinances.

#### GD.3.4 Confirmed absences (no row)

- **Cash-rent receipt** — "receipt for rent paid in cash" and "cash rent receipt" both return **0** sections. No duty. Same result as Arizona.
- **Extended-absence notice by the tenant** (URLTA-style) — "extended absence" returns 2 sections, Civ. Code §4041 (common interest development address) and §1923.2 (reverse mortgage). No duty; abandonment runs through §§1951.3 and 1980 *et seq.*
- **Holding deposits** — see `edu-holding-deposit-ca`.
- **Lease termination on the tenant's death** — already answered in the original pass: Civ. Code **§1934** terminates a hiring terminable at one party's pleasure on the death of that party (§5.15). No new row.

#### GD.3.5 Integrity

Unchanged from §GD.2.6: 947 rows, 911 active, CA 157 active, all `VERIFIED`; no duplicate ids, dangling `supersedes`, CA title or `topic_key` collisions; no shared row's text modified; other states' counts unchanged.

---

### GD.4 Source 4 — outside-title search, completed

#### GD.4.1 How the search works

- **Official source:** `leginfo.legislature.ca.gov`, California Law → **Code Search**, Code = **All** unless noted. This is the revisor's own site and the same site whose section pages were used for every section-open read in this pass. It is normally robots-blocked to automated fetching (§1), which is why the original pass could not run it; it was run here in the browser pane with Taylor's site approval.
- **It matches exact phrases and word forms.** "renters insurance" and "renter's insurance" return different lists, so every term was run in its variants.
- Every hit's code and section number was reviewed; every landlord-plausible hit was read section-open.
- **Boundary, stated:** **statutes only.** The California Code of Regulations, local ordinances and case law were not searched. Where a results list ran past the first page of ten, that is noted and no absence is claimed from an unreviewed list.

#### GD.4.2 Found — three things the original pass did not have

**1. Civ. Code §§1954.201–1954.219, the water submetering chapter.** Found by "submeter" (31 sections). This is the single largest find of the backfill: a **REQUIRED prescribed lease disclosure** plus a billing, late-fee, non-rent, no-shutoff and termination regime. Two new rows; see §GD.2.3.

**2. H&S §26148, the mold booklet.** Found by the lease comparison rather than by search, and confirmed here. One corrected row plus one new row; see §GD.2.3.

**3. Veh. Code §22658, towing.** One new row; see §GD.3.3.

Also located and **not** landlord duties, each read section-open: **H&S §§106750–106795** (Article 2, Radon Certification — §106750 reads in full "This article establishes requirements for radon certification"; it certifies radon professionals, and none of the six mentions a lessor, landlord, tenant, rental or lease) and **B&P §10084.1** (directs the Department of Real Estate to *develop* the environmental hazards booklet, and nothing more).

#### GD.4.3 Confirmed absent — statute-wide, with the terms run

| Topic | Terms run | Result | Row |
|---|---|---|---|
| Landlord lien / security interest in tenant property | landlord's lien (1: Com. Code §9109, which excludes landlord's liens from UCC Article 9); lessor's lien (0); lien for rent (0) | **Confirmed absent** | Checklist cell upgraded; the §§1980–1991 procedure is what exists instead |
| Deposit interest | interest on security deposit (0); interest on the security deposit (3: Ins. Code §10458, Civ. Code §800.49 floating home marinas, Civ. Code §798.39 mobilehome parks) | **Confirmed absent for dwellings**, and the two carve-outs named — the likely source of a contrary belief | `edu-no-deposit-interest-ca` upgraded |
| Move-in inventory | move-in inventory (0); condition of the premises checklist (0) | **Confirmed absent code-wide.** California substitutes the landlord's own §1950.5(g) photographs for the joint checklist other states use | `edu-no-move-in-inventory-ca` upgraded |
| Radon | radon (12; the 10 shown reviewed, incl. Art. 2 certification and B&P §10084.1 read section-open); environmental hazards booklet (0) | **Confirmed absent statute-wide** (previously bounded to Title 5) | `edu-no-radon-disclosure-ca` upgraded |
| Late-fee cap on rent | late fee (CIV, 13); late charge (CIV, 23) — hits are CID assessments, mortgages, retail instalment, debt collection, and the water submeter sections | **No general cap. STATED OPEN ITEM CLOSED**, with one real exception: §1954.213 caps **submetered water** late fees | `late-fee-safe-harbor-ca` notes revised |
| Holding deposits | holding deposit (4, none landlord-tenant); application deposit (0); reservation deposit (1, Fin. Code §17312) | **Confirmed absent code-wide** | `edu-holding-deposit-ca` (new) |
| Estoppel certificates | estoppel certificate (0); tenant estoppel (0) | **Confirmed absent** | `edu-selling-rented-property-ca` |
| Renter's insurance requirement | renters insurance (3); renter's insurance (2, only Gov. Code §8589.45 is landlord-tenant) | **Confirmed absent as a regulated requirement** | `tenants-property-insurance-ks-oh-ca` (shared — notes not edited) |
| Tenant security cameras | security camera (3, none landlord-tenant); video doorbell (0) | **Confirmed absent.** Scope: Pen. Code §§632, 647(j) regulate recording and were not searched | no row |
| Satellite dishes | satellite dish (2, both CID: Civ. Code §§4725, 6708) | **Confirmed absent from the codes**; federal FCC OTARD rule not read | no row |
| Extended-absence notice | extended absence (2, neither landlord-tenant) | **Confirmed absent** | no row |
| Cash-rent receipt | receipt for rent paid in cash (0); cash rent receipt (0) | **Confirmed absent** | no row |
| Tenant flag display | flag of the United States (20; housing hits are CID only) | **Confirmed absent for rentals** | `tenant-use-rights-ca` notes |
| Asbestos disclosure to tenants | asbestos, via H&S ch. 10.4 §25915 read section-open | **Absent as a tenant duty**; §25915 runs to the owner's **employees** in pre-1979 buildings | `edu-no-radon-disclosure-ca` notes; out of scope as an employment duty |
| Mediation / ADR requirement | mediation of a dispute between landlord and tenant (0) | **Confirmed absent** | no row |

#### GD.4.4 Located, and it changes a "Not located" cell

**Fraudulent misrepresentation by the tenant.** The checklist recorded this as "Not located as a landlord termination right… No provision in Title 5 Chapters 1 and 2" — bounded to the core chapters. Searching the whole Civil Code, **Civ. Code §1689(b)(1)** (read section-open) lets a party rescind a contract where consent "was… obtained through duress, menace, **fraud**, or undue influence." So the right exists, but as **rescission, not termination**, and it is in the general contract law rather than the landlord-tenant chapters.

That distinction is the whole answer and it matters: rescission is not the unlawful-detainer route, and for a tenancy covered by §1946.2 the landlord still needs a just cause to recover possession. The lease-side route stays `rental-application-accuracy` (breach of a material term). "misrepresentation" returns 48 Civil Code sections and was **not** exhaustively reviewed; §1689 is asserted as **located**, not as the only provision. §1691's rescission procedure was not read.

#### GD.4.5 Still open after the backfill

| Item | Status |
|---|---|
| Civ. Code §§1954.203, 1954.207–1954.212, 1954.215–1954.217, 1954.219 | Not read. The two new rows state only what §§1954.202, 1954.204, 1954.205, 1954.206, 1954.213, 1954.214 and 1954.218 say |
| Water Code §§537–537.5, multiunit-structure submeter install mandate; PUC §739.5 master-meter rates | Located by the same search, **not read**. Flagged on `edu-water-submeter-billing-ca` |
| Veh. Code §22658 subdivisions (b)–(d), (f)–(k), (m)–(n) | Not read; the row says so |
| Whether CDPH has issued a mold booklet edition later than 2021-05-12, and the formal approval instrument and date | Not located. `mold-booklet-disclosure-ca` states this limit |
| Federal FCC OTARD rule, 47 C.F.R. §1.4000 | Not read. The satellite-dish absence is a **California-statutes** absence only |
| California Code of Regulations, local ordinances, case law | **Outside this search's boundary throughout.** The municipal layer remains out of scope by decision (§7), and §1954.214 shows it is live for submetering too |
| `edu-translation-duty-ca`: lease-side clause or education only | **Decision for Taylor** (§GD.2.5) |
| Currency sweep of the 2025 and 2026 California sessions against every section this state relies on | **Not run.** Arizona has one (§15.6); California does not. This is the largest remaining structural gap for CA and is not something this backfill was scoped to do |

#### GD.4.6 Integrity

947 rows, 911 active. CA 157 active (93 lease clauses, 64 education), all `VERIFIED`. No duplicate ids, no dangling `supersedes`, no CA title or `topic_key` collisions, no blank status or blank `states` on an active row except the parent `security-deposit-return`. 12 canonical groups. Per-state active counts: only CA changed, 151 → 157. No shared multi-state row modified. No exact-duplicate active `bodyText` groups introduced. Every row id named in this section exists in the delta or the base CSV.

## Propagated shared-row edits, 2026-09-28 (Taylor's decisions after the gap-discovery backfill)

Uniform under §5a.1: each edit is self-limiting, so this state needs no override. Not a re-audit; nothing else in this state was reviewed.

1. **`no-alterations`** — the carve-out now reads "any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform". It keeps disability modifications that fair-housing law requires the landlord to permit (at the tenant's expense) from reading as subject to unfettered landlord consent. Raised by the NE backfill (NE log §D.1).

## Propagated shared-row edit, 2026-09-29 (from the Pennsylvania pass)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (from the Pennsylvania pass, 2026-09-29): `severability` rewritten.** Old: 'If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.' New: 'If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.' §5a.1 judgment: UNIFORM. Generic mechanics with the same legal effect; plain-language wording prompted by Pennsylvania's Plain Language Consumer Contract Act, and lawful in this state; 'this Agreement' aligned with the library's 'this Lease'. No state-specific review owed. `last_checked` reset to 2026-09-29 (PA log §3.1, §9).

## Three-bucket scrub, 2026-09-29 (checklist instruction 66)

Not a re-audit: each row was asked one question from its own text and notes (does it belong in the lease?), with no new legal research beyond the two statute reads noted below. Every row's verdict is in the table at the end of this section. Clauses moved to education are switched off, not deleted; their content is unchanged in the education rows, and checklist mentions of them now point to those rows.

- **Moved to education (new rows):** `repair-and-deduct-ca`, `rent-increase-notice-ca`, `emergency-assistance-right-ca`, `casualty-termination-ca`, `pest-control-notice-ca`, `disaster-duties-ca`, `internet-billing-optout-ca`, `security-deposit-cap-ca`, `security-deposit-return-ca`; `political-signs-ca` and `tenant-use-rights-ca` → one row, `edu-tenant-display-and-use-rights-ca`.
- **Folded into existing education rows:** `notice-service-fee-ban-ca` (three-day notice), `accommodation-request-rights-ca` and `reasonable-modification-ca` (accommodation process), `dv-lease-termination-ca` and `lock-change-non-cotenant-ca` (abuse and violence protections), `immigration-status-inquiry-ca` (tenant harassment), `military-lease-termination-ca` (military protections).
- **Deposit use (Taylor's decision):** California keeps a deposit amount and use clause. The shared `security-deposit-use` was checked against Civ. Code § 1950.5(b) and fails ("any Tenant default" is broader than (b)'s four purposes), so it stays blocked for CA and a new `security-deposit-use-ca` replaces it: the amount plus the four permitted uses, including the personal-property use that exists only if the lease authorizes it. § 1950.5(b) read through a fetch-tool quote of the official text.
- **Trimmed:** `nsf-fee-limit-ca` (fee kept), `rent-increase-cap-ca` (now only the discount and concession listing § 1947.12(a)(1) requires in the lease, confirmed by a fetch-tool quote of the official text), `payment-methods-ca`, `due-at-signing-ca`, `stove-refrigerator-ca` (now only the tenant-supplied refrigerator acknowledgment and 30-day route), `security-devices-ca` (tenant's notice duty), `unbundled-parking-ca`.
- **Notice period (pattern 2):** `month-to-month-notice-ca` states the chosen periods; statutory rules → `edu-termination-notice-periods-ca`.
- **Optional (pattern 3):** `bed-bug-disclosure-ca`, `meth-disclosure-ca`, `mold-booklet-disclosure-ca`, `water-submeter-disclosure-ca`, `ordnance-demolition-meter-disclosures-ca`, each paired with an education row.
- **Cross-references fixed:** `possession-delay-ca` and `common-area-use-ca` referred to clauses now in education.
- **§5a.1:** only CA-only rows changed; the shared `security-deposit-use` is untouched. No propagation owed.

### Verdict for every lease clause

All 57 lease clauses written for this state alone. Shared clauses tagged with this state all stayed (generic contract terms); each row's basis is in `lease-clauses.csv`'s `lease_clause_basis` column. Basis values: `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`.

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `accommodation-request-rights-ca` | Education | — | tenant right |
| `casualty-termination-ca` | Education | — | tenant right |
| `disaster-duties-ca` | Education | — | landlord duties |
| `dv-lease-termination-ca` | Education | — | tenant right |
| `emergency-assistance-right-ca` | Education | — | tenant right |
| `immigration-status-inquiry-ca` | Education | — | landlord prohibition |
| `internet-billing-optout-ca` | Education | — | tenant right |
| `lock-change-non-cotenant-ca` | Education | — | tenant right |
| `military-lease-termination-ca` | Education | — | tenant right |
| `notice-service-fee-ban-ca` | Education | — | landlord prohibition |
| `pest-control-notice-ca` | Education | — | landlord notice duties |
| `political-signs-ca` | Education | — | tenant right |
| `reasonable-modification-ca` | Education | — | tenant right |
| `rent-increase-notice-ca` | Education | — | landlord duty, statute sets periods |
| `repair-and-deduct-ca` | Education | — | tenant remedy |
| `security-deposit-cap-ca` | Education | — | cap to edu; Taylor 2026-09-29: tag the shared security-deposit-use for CA after checking it against Civ. Code § 1950.5(b), so CA keeps a deposit amount and use clause |
| `tenant-use-rights-ca` | Education | — | tenant rights |
| `due-at-signing-ca` | Split | SERVES_LANDLORD | trim cap sentence to edu |
| `nsf-fee-limit-ca` | Split | CONSTRAINED_TERM | keep fee placeholder; cap and tenant defenses to edu |
| `payment-methods-ca` | Split | SERVES_LANDLORD | keep accepted methods and cash-only right; restated duties to edu |
| `rent-increase-cap-ca` | Split | REQUIRED_DISCLOSURE: Civ. Code § 1947.12 | keep concession listing; cap to edu |
| `security-deposit-return-ca` | Split | SERVES_LANDLORD | keep lease-choice deduction for personal property; rest edu |
| `security-devices-ca` | Split | SERVES_LANDLORD | keep tenant notice duty; landlord duty to edu |
| `stove-refrigerator-ca` | Split | REQUIRED_DISCLOSURE: Civ. Code § 1941.1(a)(11)(B) | keep tenant-supplied fridge acknowledgment; duty to edu |
| `unbundled-parking-ca` | Split | REQUIRED_DISCLOSURE: Civ. Code § 1947.1 | keep parking-not-included statement and revocation right; rest edu |
| `month-to-month-notice-ca` | Notice-period rewrite | CONSTRAINED_TERM | notice periods restated |
| `bed-bug-disclosure-ca` | Optional + education | SERVES_LANDLORD | Civ. Code 1954.603 written notice to prospective tenants; keep reporting procedure |
| `meth-disclosure-ca` | Optional + education | SERVES_LANDLORD | written notice before signing |
| `mold-booklet-disclosure-ca` | Optional + education | SERVES_LANDLORD | booklet before signing; keep tenant notice duty |
| `ordnance-demolition-meter-disclosures-ca` | Optional + education | SERVES_LANDLORD | written disclosure before execution |
| `water-submeter-disclosure-ca` | Optional + education | SERVES_LANDLORD | disclosure before execution |
| `alarm-duties-ca` | Keep | SERVES_LANDLORD | tenant duties + entry right |
| `assistance-animal-accommodation-ca` | Keep | SERVES_LANDLORD |  |
| `auto-renewal-formatting-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 1945.5 |  |
| `bed-bug-cooperation-ca` | Keep | SERVES_LANDLORD | tenant duty |
| `common-area-use-ca` | Keep | SERVES_LANDLORD |  |
| `continue-lease-remedy-ca` | Keep | SERVES_LANDLORD | opt-in 1951.4 form |
| `early-termination-ca` | Keep | SERVES_LANDLORD | opt-in 1951.2 measure |
| `ev-charging-ca` | Keep | SERVES_LANDLORD | tenant request conditions and costs |
| `existing-condition-ca` | Keep | SERVES_LANDLORD |  |
| `flood-disclosure-ca` | Keep | REQUIRED_DISCLOSURE: Gov. Code § 8589.45 |  |
| `landlord-entry-ca` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `landlord-maintenance-ca` | Keep | SERVES_LANDLORD | allocation, same as generic |
| `late-fee-safe-harbor-ca` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD | liquidated damages must be agreed |
| `no-sublet-assign-ca` | Keep | SERVES_LANDLORD |  |
| `no-sublet-assign-discretion-ca` | Keep | SERVES_LANDLORD |  |
| `owner-identity-disclosure-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 1962 |  |
| `owner-move-in-reservation-ca` | Keep | SERVES_LANDLORD | opt-in right |
| `pet-policy-ca` | Keep | SERVES_LANDLORD |  |
| `possession-delay-ca` | Keep | SERVES_LANDLORD |  |
| `rent-payment-ca` | Keep | SERVES_LANDLORD |  |
| `services-utilities-provided-ca` | Keep | SERVES_LANDLORD |  |
| `sex-offender-registry-notice-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 2079.10a |  |
| `tenant-maintenance-obligations-ca` | Keep | SERVES_LANDLORD |  |
| `tpa-exemption-notice-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 1946.2(e)(8)(B)(iii) |  |
| `tpa-notice-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code §§ 1946.2(f), 1947.12(g) |  |
| `waterbed-ca` | Keep | SERVES_LANDLORD | weak: landlord insurance/deposit/inspection rights |

- **2026-09-29, Addendum M.14 fix:** `late-fee-safe-harbor-ca` used a variable name the builder never resolves, so it printed raw; renamed to the resolved name (`{{late_fee_amount}}`). Not a scrub change; no propagation owed.

## Propagated from the Wyoming retro, 2026-10-01

1. **Shared-row edit (Claude Code, Taylor's approval) — `appliances-included`.** "which Landlord will maintain as described in this Lease's Maintenance & Repairs Section" now reads "which Landlord will maintain as provided in this Lease and applicable law". Driver: the WY retro (WY log §9 item 2) found the pointer named a section that seven states (WY, KS, NE, MN, ND, SD, OH) no longer have. Recorded as **uniform** (rule 62): the promise to maintain the listed items is unchanged, and the new wording names no section, so it can't dangle again. This state's lease keeps a Maintenance & Repairs section, which is still part of 'this Lease', so nothing changes in substance here. `last_checked` reset to 2026-10-01.

## Propagated shared-row edit, 2026-10-02 (Taylor, at the Michigan sync)

Not a re-audit; nothing else in this state was reviewed.

**Propagation note (uniform edit, rule 62): `snow-removal` rewritten.** Old: 'Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.' New: 'Unless Landlord provides snow removal, Tenant will promptly remove snow and ice from the areas of the property Tenant uses for walking, parking and access. This does not include areas shared with other residents.' Why: Taylor found the list of areas too specific (properties differ, and a list invites arguments about what it covers), and Michigan's sync showed the clause should say outright that shared areas stay with the landlord. The edit only narrows the tenant's duty; this state's existing note on the row still holds.

## Retro checks (SOP 1.31) — 2026-10-03

Circle-back in California's existing chat under rule 8. The files staged 2026-10-03 14:17 are the only source of truth: `lease-clauses.csv` checked first and verified at **2,867 data rows, 17 columns, CRLF**, so the gate passes. Where anything earlier in CA's chat conflicts with those files, the files govern and this section supersedes the earlier statement. Seven stale output files from previous turns were deleted before starting: `lease-clauses-CA-delta.csv`, `lease-clauses-CA-gap-delta.csv`, `lease-clause-decision-log-CA-gap.md`, `CA-scenario-map.md`, `CA-real-lease-comparison.md`, `CA-outside-title-search.md`, `CA-handoff-status.md`.

Scalpel, not a re-audit (rule 1): only the 21 rules and 7 fixes below were touched. Method for each: CA's log was read for the screen under another name first, and only where it was absent was the check run with the statute open (rules 11, 12, 15). The clause lists in the prompt were treated as starting points; three of the real findings are on rows the prompt did not name.

**Deliverables:** `lease-clauses-CA-retro-delta.csv` — 33 rows (9 new, 24 changed), 17 columns, CRLF, header byte-identical to the master.

### The 21 rules

- **Rule 37 — tenancy type — FIXED.** Not covered anywhere in the log: §§2.x and 5.x verify the notice *periods* per tenancy type but never screen clause text for a tenancy-type assumption. `early-termination-ca` measured the tenant's exposure on "the balance of the Term" and recited the Civ. Code §1951.2 measure — both meaningless in a periodic tenancy, and its flat 30 days would overstate the tenant's duty in a week-to-week tenancy against §1946.1(b). §§1946.1 and 1951.2 re-read section-open on leginfo. **Row changed:** `early-termination-ca` (opening scope sentence added, routing periodic tenancies to `month-to-month-notice-ca`). The other 38 California-specific lease clauses and the 37 shared bodies were screened for the same shape: no other one turns on a fixed Term.
- **Rule 39 — eviction duties — PARTLY COVERED, PARTLY NOT DONE, stated as such.** The statutory limb is already covered in **§5.15** (§1942.4), **§8** (CCP §§1161/1162 notice mechanics, §1174(c) five-day forfeiture, §1179), **§5.33** and the `edu-three-day-notice-ca` / `edu-writ-execution-ca` / `edu-termination-notice-periods-ca` rows; nothing is reopened. **The court-rules limb was NOT done and is not claimed:** "Rules of Court" and "Judicial Council" return zero hits in CA's log, and the California Rules of Court and the Judicial Council eviction forms are not on leginfo, so they were never read — neither read whole nor sampled. Public-access rules (CCP §1161.2 masking of UD records) likewise unread. Both are recorded in "Still outstanding" below rather than passed.
- **Rule 40 — formatting and placement — ALREADY COVERED in §4.3, extended with one new finding.** §4.3 ("Four type-size floors and two translation duties — now a schema gap") is the battery, with the per-statute table at log lines 236–254, and §2.3 carries the §1946.2(f)(3) 12-point finding; the 2026-09-28 backfill added §1954.204's 10-point submeter floor. Re-run code-wide this pass including the habitability and disclosure parts: `point type` and `type size` terms surface the same five floors already tabled (§1946.2(f)(3) 12-point, Gov. Code §8589.45 8-point, §1954.603 10-point, §1954.204 10-point, §1945.5 8-point boldface), plus **no placement rule beyond §1946.2(e)(8)(B)(iii)'s "in the rental agreement"**, which is now stated in `tpa-exemption-notice-ca`. **New, consolidating:** all of it is now stated in one place for the landlord. **Row added:** `edu-statutory-forms-ca`. The schema still has no type-size field — escalated, not solved, as §4.3 already says.
- **Rule 41 — just cause and end-of-term possession — FIXED, one finding, proposed not made.** All four named clauses screened with §1946.2 open: `no-alterations` and `keys` say nothing about possession; `holdover-ca` claims no possessory right, offering only damages or a month-to-month continuation "terminable only as provided by law"; `early-termination-ca` already defers ("only for a just cause stated in the notice of termination"). **The real hit is on a clause the prompt did not name:** shared `surrender-end-of-term` (12 states) tells the tenant to surrender possession "immediately" upon expiration, which for a §1946.2-covered tenancy states a duty the statute does not back — §1946.2(b)(1)(E) makes refusing to sign a renewal an at-fault *cause*, which shows the Act contemplates the tenancy continuing past the term. It is a duty clause, not a grant of possession or self-help, so the exposure is wording rather than a void term and the row stays tagged. **Row changed:** `surrender-end-of-term` (CA note segment only — shared text untouched, rule 62; the proposed edit is in "For Taylor" below).
- **Rule 41b — a `for-cause-eviction` row — FIXED.** **California was the only one of 31 states with no row carrying this topic_key**, despite having the library's strongest just-cause rule: the verdict was spread across `tpa-notice-ca`, `edu-tpa-sunset-ca`, `month-to-month-notice-ca`, `edu-termination-notice-periods-ca` and `early-termination-ca` and stated nowhere as the topic's answer. §1946.2(a) and (b)(1)(A)–(K) read section-open. **Row added:** `edu-for-cause-eviction-ca` — short, records the verdict, points at the rows holding the detail; no content moved.
- **Rule 42 — required text inside a shared clause — CHECKED, NO ISSUE.** Not in the log under any name. Every CA-tagged shared row (37 of them) was screened for a statutory lease text buried inside it: none carries one. California's required lease text sits in CA-specific rows throughout (`tpa-notice-ca`, `tpa-exemption-notice-ca`, `stove-refrigerator-ca`, `owner-identity-disclosure-ca`, `auto-renewal-formatting-ca`), which is the correct shape — a verbatim statutory statement inside a 28-state shared body would be wrong for the other 27. Recorded here so the next state's reviewer does not re-run it.
- **Rule 43 — cure promises — CHECKED, NO ISSUE for California; one shared-drafting observation.** All three named clauses read with CCP §1161(2) open. `default-by-tenant`'s rent limb ties cure to written notice, which is what §1161(2) already mandates as a pre-suit three-day notice, so the clause promises nothing the statute does not; `application-of-payments` and `early-termination-ca` contain no cure promise. The no-cure carve-out sits on the non-rent limb only, and California has no no-cure ground on the rent limb, so nothing is given away here. No row changed.
- **Rule 44 — "as agreed in the rental agreement" — CHECKED, NO ISSUE.** Rule 44's shape is a statute that converts a voluntary lease promise into a statutory duty or remedy trigger. Code-wide search: `material provision of the rental agreement` **0**, `agreed in the rental agreement` **0**, `if the lease so provides` **0**. California has no URLTA-style conversion. The one residential lease-choice found is §1950.5(b)(4) ("authorized to be applied thereto by the rental agreement", **1 section**), already carried by `security-deposit-use-ca`, and there is no Kansas-style deposit-cap uplift. No row changed.
- **Rule 45 — electronic notices — FIXED.** The log records "electronic" seven times but never the act itself; **Civ. Code §1633.3 read section-open** this pass, as rule 45 requires, not merely the landlord-tenant section referring to it. §1633.3(c) carries a free-standing sentence: *"An electronic record may not be substituted for any notice that is required to be sent pursuant to Section 1162 of the Code of Civil Procedure."* Two more landlord-tenant exclusions in the same subdivision were carried by no row: §1950.6 (screening fees) and §1983 (abandoned-property notice); §1633.3(b)(4) also disapplies the act to separately-signed text. **Clause screen: no CA clause relies on e-delivery of a §1162 notice** — shared `notices` defers twice over ("nothing in this Lease designates an alternative method of delivery for any notice governed by law") and `electronic-signatures` consents only to electronic execution of the Lease, which the act permits. **Row changed:** `edu-three-day-notice-ca`.
- **Rule 46 — the lease as the required notice — FIXED (and this is what produced fix 26).** Not screened in the log. California has two lease-as-notice duties, both pre-tenancy: §1940.8 (copy of the §8538 pest-control company notice to "each new tenant") and §1940.8.5(d)(2)(A)(ii) (routine-application notice to "each new tenant prior to entering into a lease agreement", with (d)(2)(B)(ii) permitting personal delivery). Both re-read section-open. **Row changed:** `pest-control-notice-ca` switched back on and narrowed — see fix 26.
- **Rule 47 — penalties for knowingly using a prohibited term — ALREADY COVERED in §§5.15, 5.17 and 5.21, with one limb unread.** §1717 is covered in **§5.15** (fee reciprocity automatic; the misjudged limb is §1717(b)(2), no prevailing party on voluntary dismissal or settlement); §1671(d) in **§5.17**; the CLRA route closed in **§5.21** (§1761 — a lease of real property is not "goods or services", so §1770(a)(29) does not reach rent). All five named clauses re-screened against those three findings: `notices`, `rent-payment-ca`, `existing-condition-ca`, `services-utilities-provided-ca` and `early-termination-ca` carry no knowingly-prohibited term. **One limb is unread and not claimed:** Civ. Code §1788.2 (Rosenthal Act — whether a landlord collecting its own rent is a "debt collector") — leginfo stopped responding before it could be read. B&P §17200 returns zero hits in the log and was not read either. Both in "Still outstanding".
- **Rule 48 — separate-document requirements — CHECKED, NO ISSUE, and this was a real gap in the log** (`separate document` and `separate writing` both return **zero** hits). Screened code-wide this pass. California has exactly one separate-document rule bearing on this product, and it runs the opposite way to the usual shape: §1947.1(b)(1) says parking **shall not** be included in the rental agreement and must sit in an addendum or separate agreement — already carried by `edu-unbundled-parking-ca`, whose wording was corrected under fix 23. No California statute requires a lease term to be in a separately signed document, and §1633.3(b)(4)'s carve-out for separately-initialled text has no residential-lease counterpart to attach to. No row changed beyond fix 23.
- **Rule 49 — collection-cost bans — CHECKED, NO ISSUE, and a gap in the log** (`collection cost` returns **zero** hits). `default-by-tenant` screened as named. California bans no collection cost outright but authorises none either: §1950.5(b)'s list is closed and does not include collection costs, CCP §1174(b) caps UD damages, and a contractual collection charge would be tested under §1671(d) as a penalty. §1717 then makes any such fee clause reciprocal by operation of law. This is the same body of law that answers fix 27, recorded once there. No row changed.
- **Rule 50 — "the lease controls" wording — CHECKED, NO ISSUE.** One lease-choice uplift exists in California — §1950.5(b)(4) — and a full-code search for its phrase returns that one section only, so there is no analogue to the Kansas furniture-or-pets deposit uplift that rule 50 names. The authorisation is given by `security-deposit-use-ca`, which is correct; no clause asserts that the lease controls over a statute, and shared `notices` expressly says the opposite. Recorded in `security-deposit-use-ca`'s notes with the basis upgrade.
- **Rule 51 — plain-language and consumer-contract statutes — CHECKED, NO ISSUE.** The log mentions the Plain Language Contract Act only for other states (**§5.41**), so this was unscreened for California. Screened this pass: California's plain-language statute (Civ. Code §1632) is a **translation** duty, not a readability standard, and it is already covered in **§2.3** and **§4.3** (`edu-translation-duty-ca`); the CLRA route is closed in **§5.21**. There is no California readability or plain-language drafting standard for residential leases to measure clause text against. No row changed.
- **Rule 53 — figures contradicting shared clauses — CHECKED, NO ISSUE on four of five; one real finding.** All five named rows checked against the shared bodies they sit beside. `default-by-tenant`, `holdover-ca`, `early-termination-ca` and `ev-charging-ca` carry no figure that contradicts a shared clause. `surrender-end-of-term` is the hit, and it is a *timing* contradiction rather than a number — "immediately" against §1946.2 — recorded under rule 41 above and in that row's new CA segment.
- **Rule 54 — optional clauses, general screen — CHECKED, NO ISSUE.** Not in the log as a general screen (the scrub's per-clause table at **§§2439–2514** decided optionality clause by clause). Re-run across all 11 CA `CONDITIONAL` rows (12 after the restore below): each one's condition is a real property or programme fact (a waterbed, a submeter, a periodic pest contract, a qualifying parking property, an exempt property), not a landlord preference dressed as a condition, and each states its trigger in the bracketed instruction. The restored `pest-control-notice-ca` was made `CONDITIONAL` on the same test. No row changed.
- **Rule 54t — tenant-caused damage — FIXED.** `tenant-caused-damage-tn` was read for comparison and deliberately **not** tagged. The topic is active in 25 states and was **the eighth topic California had no row for**. Rule 54t's requirement — check each abatement or exit provision separately for its own tenant-fault exception — was run, and California has one in every provision checked: §1932(2) (tenant termination only where the damage occurred without the lessee's fault), §1942(c) with §1941.2 (repair-and-deduct withheld from a tenant in breach of upkeep duties), §1942.4 (no bar on demanding rent where the tenant's §1941.2 violation caused the condition). Repair costs are statutory under §§1928 and 1929 (both read section-open), the deposit limb is §1950.5(b)(2), and the lost-rent limb §1951.2 is already in `early-termination-ca`. **Verdict: education row, no new lease clause** — a no-abatement sentence would add little where rent already continues on tenant fault, while sitting next to §1942.1, which voids any waiver of §1941/§1942 rights, so a slightly over-wide clause risks being void rather than narrowed. **Row added:** `edu-tenant-caused-damage-ca`.
- **Rule 35c — constitution screen — CHECKED, and the trap fired exactly as rule 35c describes.** The Code Search's CONS option **indexes nothing**: control terms "Legislature", "Governor" and even "the" each return 0 sections, so a search-based negative would have proved nothing. California Constitution **article I read directly** from leginfo instead, 41,093 characters. Findings: art. I §1 makes privacy an inalienable right (Prop. 7, 1974); §2(a) restrains "a law", not a private lease; and there is **no cannabis provision and no right-to-bear-arms provision** — the clean opposite of the Missouri art. XIV finding that produced rule 35c. H&S §11362.45(h) read section-open confirms the statute preserves "the ability of an individual or private entity to prohibit or restrict" cannabis conduct on privately owned property, so shared `smoking-policy` applies in California as written. **Rows changed:** `smoking-policy` (CA note segment — it had none), and the privacy finding carried into `edu-no-tenant-camera-rule-ca`.
- **Rule 27 — the seven topics no state had a row for — FIXED; California answers four of the seven differently from the field.** Full battery below. Four **PRESENT**: `algorithmic-rent-setting` (B&P §16729, AB 325, Stats. 2025 ch. 338, eff. 2026-01-01 — a Cartwright Act conspiracy limb *and* a coercion limb, "common pricing algorithm" defined at (d)(3) as a methodology used by two or more persons using **competitor data**; general antitrust, not a landlord-specific ban), `quiet-possession` (Civ. Code §1927, enacted 1872 — a **statutory** covenant, but limited by its words to "persons lawfully claiming the same", with §1940.2 supplying the broader conduct prohibitions), `statutory-forms` (present and the richest in the library — 15 prescribed-wording provisions), and `fees-as-rent` in the negative-with-exclusions sense: no general rule, but §1954.213(d) says submetered water "shall not constitute rent" and §1947.1(d)(1) bars UD for an unpaid parking fee. Three **CONFIRMED ABSENT**: `landlord-self-cure` (with §§1928/1929 supplying a statutory repair claim instead), `lease-completeness` (with §1962(a)(4)'s 15-day copy duty as the real adjacent obligation), `tenant-security-cameras`. **Rows added:** seven, one per topic.
- **Rule 79 — re-read the section before trusting a summary — FIXED on the named pair plus one the prompt did not name; three counts recorded.** `rent-increase-cap-ca` **was** in rule 79's population, but not for the reason its notes suggested: its "read 2026-09-29" record is a **fetch-tool quote**, which rule 12 says is a lead and not a section read. Re-read in full from a host copy printing the history line (2025 code year, SB 567, repealed 2030-01-01), and the quoted requirement proved **wider than the note recorded** — §1947.12(a)(1)'s final sentence covers "or any amendments to an existing lease or rental agreement", a limb the note had dropped. **`security-deposit-use-ca` has the identical defect and the prompt did not name it** — found by screening every CA row's basis wording, not by the list; §1950.5 re-read in full from a host copy printing its history line (AB 414, eff. 2026-01-01), (b)(1)–(4) and (b)(4)'s lease-choice condition confirmed verbatim. `edu-exculpation-case-law-ca` **stays as it is, marked**: its notes already disclose that *Henrioulle* was read at opinion-snippet level and that *Lewis Operating Corp.* "was NOT read" — known only through briefs and a law-firm summary — which is the honest record rule 79 wants, not a defect to paper over. **Basis accounting for all 157 CA active rows, split the three ways rule 79 requires:** 86 section-open; 1 secondary (the case-law row above); 18 provenance-only rows created by the 2026-09-29 scrub, whose fix is to carry the source row's basis forward (a provenance repair, not new research); **21 rows record no basis at all**; and separately **34 of the 37 shared rows the state is tagged on carry no CA note segment at all** — four of those are repaired in this delta as a side effect of other checks (`no-alterations`, `smoking-policy`, `surrender-end-of-term`, `tenants-property-insurance-ks-oh-ca`), leaving 30. The 21 and the 30 are a backlog item, not something a scalpel pass can close. **Rows changed:** `rent-increase-cap-ca`, `security-deposit-use-ca`.

#### Rule 27 battery — California, 2026-10-03

Corpus: the official leginfo Code Search over all codes, queried live. **Control tests, both passed the same day:** nonsense term `zqxvbnmwt` → 0 sections; and the index-proof term `shall not constitute rent`, a phrase read verbatim in the body of Civ. Code §1954.213, → that one section, so the index reaches section body text and honours phrases. **Method limit, stated:** the results page returns ten sections at a time and its paging postback (`datanavform:gotopage`, `nextTen`) could not be driven reliably — three attempts returned page 1 repeatedly, a fourth an unparseable response. So **an absence is claimed only from a term returning 0 or at most 10 sections, every one reviewed**; for a higher-count term the count is given and no absence rests on it. **Boundary:** statutes only — the California Code of Regulations, local ordinances and case law were not searched. There is no battery JSON of the Pennsylvania kind because this corpus is a live index, not a local statute dump that can be re-run offline.

| Topic | Term | Sections | Reviewed / verdict |
|---|---|---|---|
| algorithmic-rent-setting | `pricing algorithm` | 1 | B&P §16729 — the hit |
| | `common pricing algorithm` | 1 | B&P §16729 |
| | `algorithmic device` | 0 | absence |
| | `algorithmic` | 26 | count only, no absence claimed |
| | `rent-setting` | 8 | all reviewed — HSC §§53559.4, 50517.11, 53567, 53601, 50675.16, 50199.24, 53545.11; MVC §987.011. All affordable-housing programme sections, none a private-market rule |
| fees-as-rent | `deemed to be rent` | 1 | CIV §798.41 — mobilehome parks only, outside scope |
| | `additional rent` | 1 | H&S §25548.1 — environmental covenants, unrelated |
| | `shall not constitute rent` | 1 | CIV §1954.213 — the express exclusion (also the index-proof term) |
| landlord-self-cure | `landlord may make the repair` | 0 | absence |
| | `cost of the repair as rent` | 0 | absence |
| | `charge the cost to the tenant` | 0 | absence |
| lease-completeness | `blank space in the lease` | 0 | absence |
| | `blank spaces` | 51 | count only, no absence claimed; the ten reviewed are CIV §§1803.4, 1803.8, 2992; FIN §18607; WAT §§74102, 41335; H&S §1569.889; ELEC §§13212, 302; HNC §6036 — the Unruh Act's no-blank rule reaches retail instalment contracts, not a lease of real property (§5.21) |
| quiet-possession | `quiet possession` | 3 | all reviewed — CIV §1927 (the hit), CIV §1932, CCP §1172 |
| | `quiet enjoyment` | 11 | the ten reviewed: CIV §§1463, 1955, 3304, 1940.2, 54.25, 798.26, 800.32, 799.2.5; COM §9610; B&P §25612.5 |
| tenant-security-cameras | `security camera` | 3 | all reviewed — EDC §49005.8; RTC §§17053.64, 23664. None landlord-tenant |
| | `video doorbell` | 0 | absence |
| | `surveillance` | 154 | count only, no absence claimed |
| statutory-forms | — | — | compiled from 15 sections read section-open, not from a search; listed in `edu-statutory-forms-ca` |
| constitution (rule 35c) | `cannabis`, `marijuana`, `firearm`, `arms` | 0 each | in the 41,093 characters of article I **read directly**; the CONS search index is empty and was not relied on |

### The 7 targeted fixes

- **22 — the waiver sentence in `edu-payment-methods-ca` — CONFIRMED, sentence kept.** Civ. Code §1947.3 read **section-open**, every subdivision. §1947.3(f): *"A waiver of the provisions of this section is contrary to public policy, and is void and unenforceable."* The scrub did not invent the sentence — the source clause's own notes already recorded "§1947.3(f): waiver void", so the scrub surfaced into the body what the notes held. Also confirmed on the same read: (a)(1) one form that is neither cash nor EFT; (a)(2) cash-only for at most three months after a dishonoured instrument, with written notice and a copy attached, complying with §827 if it changes lease terms; (a)(3)(A)–(D) third-party payment with a signed acknowledgment in substantially the prescribed form; (b) no fee for paying by check. **Row changed:** `edu-payment-methods-ca` (notes).
- **23 — `edu-unbundled-parking-ca` applicability — CONFIRMED, plus a citation error the prompt did not ask about.** All four details confirmed against §1947.1: (e)(2)(A) requires **all three** of a certificate of occupancy issued on or after 2025-01-01, 16+ residential units, and location in one of ten named counties (Alameda, Fresno, Los Angeles, Riverside, Sacramento, San Bernardino, San Joaquin, Santa Clara, Shasta, Ventura); (b)(2) unbundling runs "for the life of the property", which is what the row's "permanently" states; (c) right of first refusal; (d)(1) no UD for an unpaid parking fee, (d)(2) revocation after 45 days. **Two corrections:** the body said parking must be "leased separately", which excluded the addendum route (b)(1) expressly allows — reworded; and the scrub's note cited **"Civ. Code §3485"** alongside §1947.1, which is the weapons-nuisance UD section, repealed as of 2024-01-01 by its own subdivision (j), with nothing to do with parking — a stray citation removed. **Row changed:** `edu-unbundled-parking-ca` (body + notes).
- **24 — six dangling note pointers — FIXED, and the sweep found seven more.** A full sweep of every CA row's bodyText and notes returned **36 pointer hits**. Rule 78's distinction was applied: a **provenance** note ("Moved from `x` by the scrub") is history and was left alone; only a **coverage pointer** naming a switched-off row was repointed. Beyond the six named: `edu-lease-waiver-void-ca` (×2), `tenant-maintenance-obligations-ca`, `waterbed-ca`, `common-area-use-ca`, `edu-criminal-history-screening-ca`, `edu-screening-abuse-protections-ca` (×2), and the CA segments of three shared rows. **Every successor confirmed `is_active=TRUE`.** Two shared rows carry their CA pointer inside an unlabelled segment, so they were repaired by targeted string replacement rather than segment logic. **Rows changed (13):** `early-termination-ca`, `edu-military-tenant-protections-ca` (pointer dropped, not repointed — this row *is* the successor), `edu-no-move-in-inventory-ca`, `edu-no-deposit-installments-ca`, `edu-lease-waiver-void-ca`, `tenant-maintenance-obligations-ca`, `waterbed-ca`, `common-area-use-ca`, `edu-criminal-history-screening-ca`, `edu-screening-abuse-protections-ca`, and the CA segments of `no-alterations`, `tenants-property-insurance-ks-oh-ca` and `possession-delay-ca`.
- **25 — eight scrub-trimmed clauses — ONE REAL RESTORE, one pass-with-reason.** Searched the state's required-content provisions, not only each clause's own citation, as the fix directs. **`nsf-fee-limit-ca` — RESTORED.** The scrub moved all of §1719's tenant-side content to education, including **three statutory exceptions**, leaving a bare "service charge of {{nsf_fee}}". The $25/$35 cap is a number a builder check catches (backlog M.13); the exceptions are **conditions**, and without them the clause tells a tenant a charge is owed in three cases where the statute says it is not. §1719(a)(3), (a)(4), (a)(5) re-read section-open and restored in the statute's own terms: stop payment to resolve a **good faith dispute** (the payee recovering only on clear and convincing evidence that no such dispute existed), written confirmation of a **financial-institution error**, and written confirmation that the shortfall came from a delayed direct deposit of a **social security or government benefit assistance** payment. The third is the New Jersey shape exactly — NJ restored the §2A:42-6.1 senior and benefit-recipient grace period to `late-fee-nj` for the same reason: a flat fee clause misstates the law against benefit recipients in particular. **`due-at-signing-ca` — checked, no change.** The scrub removed its restated deposit-cap sentence, and the aggregation point (§1950.5(b)'s "however denominated", so a pet deposit counts toward the §1950.5(c)(1) cap) is a limit a per-field number check genuinely cannot catch — but it **is** carried, by `edu-security-deposit-cap-ca`'s "caps security, however it's labeled", and the aggregation reasoning is preserved in `due-at-signing-ca`'s own notes. The limit binds regardless of the lease, so restoring a restatement would reverse the scrub for no gain; recorded as a builder requirement instead. The other six trimmed clauses lost only restatements of limits that bind regardless. **No required lease text was lost by any of the eight** — checked against §§1946.2(f)(3), 1946.2(e)(8)(B), 1941.1(a)(11)(B)(i), 1962(a), 1945.5, 1947.3(a)(3)(C) and 1954.204. **Row changed:** `nsf-fee-limit-ca` (body + notes).
- **26 — thirteen scrub-switched-off clauses — ONE REAL RESTORE.** The question is rule 78's: was the moved clause the **written notice a statute requires**? For twelve of the thirteen, no — they restate rights and duties that bind whatever the lease says, and their termination-time notices (§1950.5(f)(1), (h)(1)(A)(ii)(II)) are not lease text. **`pest-control-notice-ca` — SWITCHED BACK ON AND NARROWED.** It was the vehicle for two pre-tenancy notices: §1940.8 (a copy of the §8538 notice to "**each new tenant**") and §1940.8.5(d)(2)(A)(ii) (the prescribed routine-application notice to "**each new tenant prior to entering into a lease agreement**", with (d)(2)(B)(ii) permitting personal delivery, so delivery with the lease satisfies it, and (d)(2)(C) requiring a fresh notice if the pesticide changes). Both re-read section-open. Same shape as Arizona's retro restoring `move-in-inspection-notice-az`. **Narrowed deliberately:** the in-tenancy 24-hour notice, the adjacent-unit notice, the common-area posting and the safe harbour stay in education, because those duties do apply whatever the lease says. Made `CONDITIONAL`, not `REQUIRED` — both limbs bite only where there is a periodic contract or a routine schedule. The verbatim §1940.8.5(d)(1)(C) CAUTION statement is **not** shipped inline: it carries a property-specific county health department number the builder must assemble. **Row changed:** `pest-control-notice-ca` (`is_active`, `title`, `rule_type`, body, notes).
- **27 — rule 62 vetting of CO's proposed deletion from shared `default-by-tenant` — CALIFORNIA SUPPORTS THE DELETION; nothing given up; shared text not edited.** CO proposes dropping "and reasonable costs and expenses". **Does California limit a landlord's recovery of collection or eviction costs?** Yes, three ways: **Civ. Code §1950.5(b)**'s list of permitted deposit applications is closed and does not include collection costs; **CCP §1174(b)** caps what a UD judgment may include; and a contractual collection charge would be tested as a penalty under **Civ. Code §1671(d)**, where a dwelling-lease liquidated-damages clause is void unless actual damages were impracticable to fix (§5.17, and §1951.5 applies §1671 to leases of real property). **One-way cost awards?** Addressed, but by conversion rather than prohibition: **Civ. Code §1717** makes any contractual fee clause reciprocal by operation of law, so a one-way clause is not void, it simply runs both ways (§5.15) — California reaches C.R.S. §38-12-801(3)(a)(II)'s end by a different route. §1717(b)(2) then means a voluntarily dismissed or settled UD produces no prevailing party and no award. **Does deleting the phrase give anything up in California?** No. No California statute authorises a general "collection costs" recovery, so the phrase was never the source of the entitlement; costs recoverable in a UD come from CCP §1174(b) and the statutory cost provisions regardless of the lease, and a fee clause's reciprocity under §1717 is unaffected by deleting it. **Shared text not edited** (rule 62) — this is a vouch for the other tagged states to weigh, recorded here, not in the row.
- **28 — TPA exemption self-limiting — CHECKED, and the premise needed correcting before it could be answered.** The check supposes §1946.2(a)'s 12-month threshold is an exemption a clause might rely on, so that an exempt lease becomes covered mid-tenancy. **It is not an exemption** — it is a duration threshold on the just-cause duty, it applies to covered property, and no CA clause asserts a right that depends on it: `month-to-month-notice-ca` already defers ("or any longer notice California law requires, together with any statement California law requires in the notice"), and the overlay is in `edu-termination-notice-periods-ca` and the new `edu-for-cause-eviction-ca`. **California's real elapsed-scope problems are two others, and neither was stated anywhere a landlord would see:** (1) §§1947.12(d)(4) and 1946.2(e)(7) exempt housing with a certificate of occupancy issued **within the previous 15 years** — a rolling window, so a building exempt at signing becomes covered on its fifteenth anniversary, **mid-tenancy**; (2) **this clause's own** exemption, §1946.2(e)(8) with §1947.12(d)(5), turns not on time but on **ownership** — no REIT, corporation, or LLC with a corporate member — so a sale to a corporate owner destroys the exemption and **the statement printed in the lease becomes false**, which matters more here than elsewhere because §1946.2(e)(8)(B)(iii) requires that statement to be *in the rental agreement*. (e)(8)(A) and (B) read section-open. **`tpa-exemption-notice-ca`'s body deliberately not changed:** (B)(i) prescribes the statement **verbatim**, so wrapping it in a self-limiting sentence would break the prescribed wording — the right place for the condition is education and the builder, not the lease text. Neither exemption carries a notice duty, so there is no clause to self-limit. **Rows changed:** `tpa-exemption-notice-ca` (notes), `edu-rent-increase-cap-ca` (body + notes).

### Delta and integrity

33 rows: **9 new** — `edu-for-cause-eviction-ca`, `edu-algorithmic-rent-setting-ca`, `edu-fees-as-rent-ca`, `edu-no-landlord-self-cure-ca`, `edu-no-lease-completeness-rule-ca`, `edu-quiet-possession-ca`, `edu-statutory-forms-ca`, `edu-no-tenant-camera-rule-ca`, `edu-tenant-caused-damage-ca` — and **24 changed**, of which 18 are notes-only.

Checks run on the delta merged into the master: header byte-identical and CRLF throughout; all 33 rows 17 columns. Merged library **2,876 rows** (2,867 + 9), **no duplicate ids**, **no ids lost**, **no dangling `supersedes`**, no active row with a blank `verification_status`, and the only active row with blank `states` is the known parent exception `security-deposit-return`. **Per-state active counts: 31 states, and only California moves — 157 → 167** (9 new + `pest-control-notice-ca` restored), so no other state is disturbed. CA tagged 178 → 187, active 167, inactive 21 → 20, all `VERIFIED`. No CA title collision; one new `topic_key` pair (`pest-control-notice` on `pest-control-notice-ca` + `edu-pest-control-notice-ca`), which is the library's normal lease/education pairing. No exact-duplicate `bodyText` among CA lease clauses. **The five shared rows in the delta changed `notes` only** — no shared body text was edited (rule 62), verified column by column. All nine new rows follow California's own education-row convention (substantive `rule_type`, empty `lease_clause_basis`, statute date in `effective_from`, or the screen date where the topic has no statute, per `edu-no-radon-disclosure-ca`).

### For Taylor — three decisions I must not make (rule 62, rule 76)

1. **`surrender-end-of-term`** (shared, 12 states): qualify "Tenant will surrender possession ... immediately" with **"unless applicable law entitles Tenant to remain"**. The change should be uniform — no state requires a tenant to surrender where the law lets them stay — but it touches 12 states' text, so it is yours. Not made; CA's note segment records the tension either way.
2. **`default-by-tenant`** (shared): split the no-cure carve-out into its own sentence so it visibly attaches to the non-rent limb only. California gives nothing up as it stands, so this is drafting clarity, not a CA defect. Also carries my vouch for CO's "and reasonable costs and expenses" deletion (fix 27).
3. **`edu-translation-duty-ca`**: the lease-side clause question carried from 2026-09-28 is still open — whether §1632 gets a lease clause or stays education-only.

### Still outstanding — stated, not passed

- **California Rules of Court, the Judicial Council eviction forms, and CCP §1161.2 public-access masking** (rule 39) — not on leginfo, never read, neither whole nor sampled.
- **Civ. Code §1788.2** (Rosenthal Act — whether a landlord collecting its own rent is a "debt collector") and **B&P §17200** (rule 47) — leginfo stopped responding (three consecutive timeouts) before either could be read.
- ***Lewis Operating Corp.*** — the opinion itself still unread; `edu-exculpation-case-law-ca` says so.
- **The official-site re-read of §1947.12 and §1950.5** — both now rest on host copies printing their history lines, which rule 11 accepts, but the leginfo confirmation is not done.
- **High-count search terms** where only the first ten sections were reviewed — `algorithmic` (26), `blank spaces` (51), `surveillance` (154), `quiet enjoyment` (11). No absence rests on any of them.
- **Rule 79 backlog, beyond this pass:** 21 CA active rows record no basis at all; 30 of the 37 shared rows the state is tagged on still carry no CA note segment; 18 scrub rows are provenance-only and want the source row's basis carried forward.
- **Record discrepancy, found and not resolved:** the scrub's own table (§2452) records `security-deposit-return-ca` as "Split", but the CSV has it `is_active=FALSE` with an empty basis, and its lease-choice content actually landed in `security-deposit-use-ca`. The CSV is the source of truth per the gate, so nothing was changed — but the scrub's table misstates what happened.
- **Schema, escalated not solved:** no field expresses a minimum type size (§4.3), and nothing re-evaluates a lease-printed exemption statement when ownership changes (fix 28).

### Proposed SOP changes

1. **Rule 35c — add the empty-index control as a required step, not a caution.** The rule warns that a search excluding the constitution "returns a clean negative that proves nothing". California shows that the index can be *entirely* empty while the search UI offers the corpus as an option and returns a well-formed zero. Proposed addition: before claiming any constitutional absence, run a control term that *must* hit (a word like "Legislature" or "Governor"), and if it returns zero, read the article directly. Without the control the negative is indistinguishable from a real absence.
2. **Rule 79 — require the basis to name the artifact read, not the date.** California's two defective rows both read as compliant because their notes carried a date ("read 2026-09-29") while the artifact behind them was a fetch-tool quote, which rule 12 excludes. Proposed: a basis segment must name *what* was read — "section-open", "host copy with history line", "fetch-tool quote", "opinion snippet", "brief or secondary" — so a reviewer can grade it without re-deriving provenance. This would also have caught `security-deposit-use-ca`, which no prompt named.
3. **Rule 27 — add a presence branch to the topic screen.** The seven topics are framed as absences to confirm, and the model rows are all `edu-no-…`. Four of California's seven are **present**, and two of those (§1927's statutory quiet-possession covenant; §16729's coercion limb) are findings a state would miss if the reviewer sets out to confirm an absence. Proposed: the screen asks "present or absent", and a present answer gets an affirmative row and an id without the `no-` prefix.
4. **Rule 78 — name the pre-tenancy-notice test explicitly.** Rule 78 says to keep or restore a clause that "was the written notice a statute requires", but both real restores across the states so far (CA's pest notice, AZ's move-in inspection notice) turned on a narrower question: does the statute require the notice **before or at the start of the tenancy**? A termination-time or in-tenancy notice is never lease text. Proposed: state that test, since it decides the question in one step and would have made twelve of California's thirteen switched-off rows a quick no.
5. **Rule 11 — require the method limit to be recorded when paging fails.** The paging postback could not be driven on leginfo, which changes what an absence can rest on. Proposed: when a search UI cannot be paged, the state's notes must state the limit and claim absences only from fully enumerated results — the discipline this pass adopted, written down so it is not re-invented per state.
6. **Rule 62 — add a "vouched, no change needed" verdict.** Fix 27 asked California to vet another state's proposed deletion. The rule covers proposing an edit and overriding, but not this third case: confirming another state's edit is safe here. Proposed: record that verdict in the retro log rather than in the shared row's notes, so a 31-state row does not accumulate a vouch segment per state.

## Retro sync (Claude Code, 2026-10-03)

- **Merged** with `merge-delta.py --base 1fdc1a8` (the attached CSV is byte-identical to it): 24 rows updated and 9 new. Two shared rows (`no-alterations`, `tenants-property-insurance-ks-oh-ca`) carry their CA pointer inside an unlabelled segment, so the tool refused them; the two pointer repoints were applied by hand to the current rows (FL had added notes to both since the base), after confirming each new target is active. CA active 157 → 167 (77 lease clauses), no same-topic pairs; every other state's set unchanged.
- **At sync:** the restored `pest-control-notice-ca` arrived with a blank `lease_clause_basis`, which `check-clause-basis.py` caught; set to REQUIRED_DISCLOSURE (Civ. Code §§ 1940.8, 1940.8.5(d)(2)(A)(ii)).
- **Guards:** `check-gap-discovery.py --all`, `check-checklist-reconciliation.py`, `check-clause-basis.py`, `check-section-pointers.py` and `checkConfigIds.js` all pass.
- **Statute spot-check, 5 of 5, against leginfo.legislature.ca.gov (read by Claude Code at sync):** Civ. Code § 1633.3(c) (no electronic substitute for a CCP § 1162 notice) behind `edu-three-day-notice-ca`; Bus. & Prof. Code § 16729 (both limbs; "common pricing algorithm" uses competitor data) behind `edu-algorithmic-rent-setting-ca`; Civ. Code § 1940.8 behind the restored `pest-control-notice-ca`; Civ. Code § 1719(a)(3)-(5) (the three exceptions restored to `nsf-fee-limit-ca`); Civ. Code § 1927 behind `edu-quiet-possession-ca`.
- **Citations file:** 10 rows added (3 confirmed-absence; the restored `pest-control-notice-ca` included), changed rows dated. California's notes write "s1927" and "ss1940.8", and search hits the batteries set aside were trimmed out by hand.
- **The three "For Taylor" items:** (1) the `surrender-end-of-term` qualifier and (2) the `default-by-tenant` sentence split are drafting edits to shared rows, so they go to rule 62 vetting by each tagged state, not to Taylor; both are queued for the end-of-run circle-back (`retro-extras.csv`), and CA's vouch for CO's deletion is recorded. (3) Whether § 1632 gets a translated-lease clause is a product question and is raised with Taylor.
- **Still open:** the Rules of Court, Judicial Council forms and CCP § 1161.2 masking (rule 39); Civ. Code § 1788.2 and Bus. & Prof. Code § 17200 (rule 47); 21 no-basis rows, 30 shared rows with no CA segment and 18 provenance-only scrub rows (rule 79); the type-size schema gap and the ownership-change problem for `tpa-exemption-notice-ca`.
- **SOP 1.32:** all six proposals adopted (rules 11, 27, 35, 62, 78, 79). CA's conformance column is complete except the examples. The retro run is complete.

## Propagated shared-row edit, 2026-10-04 (at the WY circle-back sync)

- `surrender-end-of-term` (WY, SD, OH, CA, NV, TX, FL, AZ, GA, NC, TN, VA): CA's proposal merged once every tagged state had vetted it, WY last. "Tenant will surrender possession of the property and return all keys to Landlord immediately" now ends ", unless applicable law entitles Tenant to remain." The duty to surrender stays; the qualifier only stops the clause overstating it where a statute, retaliation rule, foreclosure rule or similar lets a tenant stay. Uniform; no CA override. CA's note segment on the row records it.

## Propagated shared-row edit, 2026-10-04 (at the NY circle-back sync)

- `default-by-tenant`: MN's proposal merged once every state tagged on `default-by-tenant` (18 states) and `default-by-tenant-co` (CO, NY) had vetted it, NY last. The no-cure carve-out moved out of the non-rent limb into its own sentence reaching both limbs, in the wording already merged on `default-by-tenant-ks-ne`: "Landlord need not give Tenant an opportunity to cure any breach, including a failure to pay Rent, where applicable law permits Landlord to proceed without one." It is self-limiting, so it reaches a breach only where CA law lets Landlord proceed without a cure opportunity. Uniform; no CA override.

## Cross-state decisions, 2026-10-04 (Taylor; central check by Claude Code)

- **New federal row:** `edu-cares-act-notice` is now tagged for CA. Under 15 U.S.C. § 9058(c), a landlord of a property with a federally backed mortgage, or in a covered federal housing program, may not require the tenant to vacate until 30 days after a notice to vacate; whether that still applies after the 2020 moratorium is unsettled. Any CA row that already mentions the CARES Act stays; the federal row is the library's standard explanation.
- **Shared-text edits merged centrally** (Taylor approved merging now; each only narrows the tenant's obligations or defers to applicable law, so it can't breach CA's law; to be confirmed at CA's end-of-run consistency pass):
- `smoking-policy`: Tenant pays for smoking damage caused by "Tenant, an occupant, or a guest or invitee of Tenant", no longer by anyone's smoking.
- `no-alterations`: the last sentence adds that the clause "does not change who owns an installation that applicable law makes Tenant's property".
- `addendum-precedence`: a disclosure, notice or addendum "that applicable law says controls over this Lease" now controls, as one the law requires already did.


---

# Topic gaps pass (end-of-run consistency pass, 2026-10-30): Desktop's log

# Topic gaps: California — `gaps-log-CA.md`

**Pass:** end-of-run consistency pass, 223 topics California had no row for, plus the eight named California items. Opus, high effort. Started 2026-10-30. **COMPLETE: all 14 batches delivered — 223 of 223 topics, 238 rows, 2,124 of 2,124 quoted statutory passages verified word-for-word against a read source with a citation beside them, 0 schema errors — after both rounds of the independent check and every fix they called for.** (The verified count fell from 2,196 because 88 history lines, two official index headings and one quotation attributed to an unread regulation were requoted out of the single quotes reserved for statutory wording, which is a correction and not a loss.) Eleven of the fourteen batches were canvassed by helpers, never more than two at a time (the prompt's usage budget); batches B01, B02, B03 and B06 were done by the main pass, which also cleared the whole fetch queue — **148 sections read one at a time from leginfo** — because only the main pass can reach that site. The independent check (rule 80) is at §5.

**Step A gate — passed on every figure before any work started.** The decompressed `lease-clauses.csv` is **45,669,208 bytes**, SHA-256 **`c3c8f0a3bda7d8bac0403e7b790f6fa48c5d92201a51d836c3a2aa6614a91362`**, matching the prompt exactly. It holds **12,703 data rows (12,592 active)**, **168 active rows carry CA**, across 56 jurisdictions and 364 topic keys; California's 168 active rows cover **141** topics. `missing-topics-CA.md` lists **223** topics, and all 223 are distinct and none is already covered. `corpus-CA-20261030.tar.xz` matches its `.sha256` (`c431665d…8928b`).

**Start-clean step.** Two files left in `/mnt/user-data/outputs/` by an earlier session were deleted before starting: `lease-clause-decision-log-CA-retro.md` and `lease-clauses-CA-retro-delta.csv`. The files attached with this prompt are the only source of truth; where the earlier conversation in this chat disagrees with them, they win.

---

## §1 Sources, channel and currency

### §1.1 Channel — and one strengthening of the corpus

The corpus was verified with its own manifests rather than by running its script against downloaded data: **5,750 files match, 12 listed-but-not-shipped, 0 problems**. It loads as **2,901 units / 21,456,565 characters** — 2,587 code sections from 72 whole table-of-contents nodes, the 72 assembled node files, 210 session-law prints, 5 court-rule files, 18 Judicial Council forms, 4 guides, plus the sections this pass fetched (below). The loader prints what it loaded *and* what it skipped, and the battery engine refuses to run while a skip is unexplained (rule 24).

**The corpus README records that leginfo's web pages answered every scripted request with a Cloudflare challenge, so Claude Code could compare only five pre-challenge saved pages. This pass can reach leginfo.** The built-in browser pane loads `leginfo.legislature.ca.gov` with no challenge, and same-origin `fetch` from that page drives both `codes_displaySection.xhtml` (one section) and `codes_displayText.xhtml` (a whole chapter or article). So:

- **Corpus validation widened from 5 sections to 8, by hash.** Civ. Code §§ 1950.5, 1946.2, 1927, 1719, 1942.1, Code Civ. Proc. § 1161, Health & Saf. Code § 17920.3 and Gov. Code § 12955 were pulled live, normalised (NFKC; U+FEFF and U+00A0 as whitespace; curly quotes, dashes and § folded; whitespace collapsed; lowercased) and hashed against the corpus copy with its citation header and history line stripped. **All 8 match byte-for-byte on normalised text**, and the character counts agree exactly (26,107 / 23,604 / 188 / 8,807 / 908 / 6,939 / 7,642 / 9,356). The corpus is therefore good for quotation, and rule 24's "about five sections re-fetched" is satisfied with three to spare.
- **Sections outside the 72 nodes are read section-open from leginfo, not recorded as "Not located".** Each is saved to `fetched/` with its citation header, its database history line and its source URL, and the loader indexes it beside the corpus sections, so the quote checker resolves a quote against it exactly as against a held section. Fetched so far: Civ. Code §§ 3287, 3289, 3300, 3302 and **Cal. Const., art. XV, § 1** (article XV is not among the three constitution articles the corpus holds).
- The container itself cannot reach leginfo: the agent proxy refuses `CONNECT` with 403 and the URL is not on the session allowlist. All official reads therefore go through the browser pane. Noted so the next staging knows the shell route is closed and the pane route is open.

**Still unreachable, as the corpus README says.** No California regulations are held — Westlaw (`govt.westlaw.com/calregs`, the official CCR publisher) and `calcivilrights.ca.gov` challenged every request. So 2 CCR §§ 12005–12271 (fair housing), 25 CCR (State Housing Law, mobilehome parks) and 24 CCR are **not read**, and a row needing one says so and names the title (rule 36). The Department of Real Estate's trust-fund regulations (10 CCR § 2830 ff.) are in that position already, in `edu-security-deposit-holding-ca`.

### §1.2 Currency

The code text is the Legislative Counsel's database as loaded **Sunday 25 October 2026** (newest section row updated 3 October 2026; the daily change files through 30 October hold no code-section change). It contains every 2024 and 2025 statute and the 2026 statutes already in effect; it does **not** contain the regular statutes of 2026, which take effect 1 January 2027 (Cal. Const., art. IV, § 8(c)). Those are in `session-laws/` and `currency.json`, and every row touching one states both the current rule and the 2027 rule. Currency for each row comes from the section's own history line, quoted in the row.

Carried into every batch, from the prompt's items 6 and 7 and the corpus README:

- **Two versions of a section:** Code Civ. Proc. §§ 1166, 415.20 and 415.45 (Stats. 2025, ch. 563 — current version repealed 1 January 2027, new version operative then); Gov. Code § 12999; Civ. Code § 1181.1.
- **Sunsets:** Tenant Protection Act §§ 1946.2, 1947.12, 1947.13 repealed 1 January 2030; § 1946.3 repealed 20 January 2029; § 1954.071 repealed 1 January 2031; Health & Saf. Code § 17922.4 and Civ. Code §§ 1785.28–1785.28.6 repealed 1 January 2027.
- **Gone:** the COVID-19 Tenant Relief Act (Code Civ. Proc. § 1179.01 ff.). No new row relies on it.
- **Not law:** the vetoed bills the README lists (SB 36, AB 62, AB 474, AB 306, SB 326, SB 24, AB 449; SB 403, AB 524, SB 1022, SB 731, AB 1079, AB 1832, AB 2120, SB 1292, AB 2910). ACA 7 (Res. Ch. 223, 2026) and ACA 8 (Res. Ch. 133, 2024) are proposed amendments only.

### §1.3 Instruments built for this pass

`calaw.py` (corpus loader, section reader, whole-code index reader, battery engine), `rows.py` (schema and convention validator, quote checker), `assemble.py` (cumulative delta builder). The battery engine runs its controls **in the same batch** as the terms and sets `absence_claimable=False` unless the nonsense control returns 0, a must-hit control returns more than 0, and every declared **real** positive hits (rule 19). The whole-code index (`LAW_TOC_TBL.dat`, **24,394 headings across all 30 codes**, each with its section range) answers rule 36's prior question — whether a subject is held at all — and names the chapter a missing provision would sit in.

**A method dead end, recorded rather than hidden.** A first attempt classified all 223 topics automatically by screening keywords derived from each topic's name and key. It does not discriminate: single words like "fee" or "notice" hit almost every section, so 221 of 223 came back "in corpus". The classification was dropped; topics are grouped by the statute cluster that answers them instead (14 batches of 15–16, every topic assigned exactly once, verified by script). The lesson is in "Proposed SOP changes".

---

## §2 Topics answered

**223 of 223 — complete.** One line each: topic, row id, verdict, citation.

### Batch B13 — insurance, disputes and contract (16 topics, 18 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `binding-arbitration` | `edu-binding-arbitration-ca` | Mixed → **closed**: Code Civ. Proc. § 1298's prescribed format reaches a **lease with an option to purchase**, not an ordinary dwelling lease. The one arbitration clause California expressly authorises is in the habitability statute, Civ. Code § 1942.1 ¶2 |
| `informal-dispute-resolution` | `informal-dispute-resolution-ca` | Present (clause, rule 54) |
| `landlord-liability-insurance` | `edu-no-landlord-insurance-mandate-ca` | **Confirmed absent** → **extended**: Ins. Code §§ 675–678 protect the landlord's *own* policy, but only up to **four dwelling units** |
| `tenant-insurance-claims` | `edu-tenant-insurance-claims-ca` | Mixed |
| `homestead-waiver` | `edu-homestead-waiver-ca` | **Confirmed absent** → **closed**: a tenant has no homestead to waive; Code Civ. Proc. § 704.730 sets the amount at $300,000 or county median capped at $600,000 |
| `construction-liens` | `edu-construction-liens-ca` | **Open → present**: the landlord's protection is a Civ. Code § 8444 notice of nonresponsibility, **posted *and* recorded within 10 days of knowledge**; a no-liens lease clause is void against the claimant (§ 8122) |
| `guarantor-renewal` | `edu-guarantor-renewal-ca` | **Open → present**: a continuing guaranty is **revocable as to future transactions** (Civ. Code § 2815), so a guaranty does not carry to a renewal by its own words |
| `consumer-protection-act` | (education row) | Mixed — Bus. & Prof. Code §§ 17200, 17500; the CLRA route is closed for leases by Civ. Code § 1761 |
| `smoke-drift-waiver` | `edu-smoke-drift-waiver-ca` | Mixed — Lab. Code § 6404.5 preempts local *workplace* rules and names covered parking and lobbies as enclosed space; whether a common hallway is a "place of employment" turns on § 6404.5(e), **not read** |
| (seven further topics) | see the delta | venue, UETA mechanics, notice of claim, severability and related contract rows |

### Batch B14 — subsidy, guides and residual (15 topics, 16 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `subsidy-habitability-proration` | `edu-subsidy-habitability-proration-ca` | Mixed — **FEDERAL** rule; Civ. Code § 1954.535 protects the tenant's share for 90 days when a rent-limiting agreement ends |
| `subsidy-late-fee` | `edu-subsidy-late-fee-ca` | Mixed — no subsidy rule and no cap at all |
| `rights-responsibilities-guide` | `edu-no-rights-guide-ca` | **Confirmed absent** |
| `tenant-rights-statement` | `edu-no-tenant-rights-statement-ca` | Mixed — the TPA notice is the one prescribed statement |
| `tenant-right-to-organize` | `edu-tenant-right-to-organize-ca` | Mixed — no affirmative right; Civ. Code §§ 1942.5(d), 1942.6 are strong |
| `tenant-portal` | `edu-tenant-portal-ca` | Mixed — **three non-waivable bars**: Civ. Code §§ 1947.3, 1633.5(b)–(c), 1633.3(c) |
| `tenant-employee-housing` | `edu-tenant-employee-housing-ca` | Mixed → **closed**: the Employee Housing Act needs **five or more** workers and a work connection, and applies "whether or not rent is involved" (Health & Saf. Code § 17008(a)(2)); no occupancy disclosure in it |
| `military-air-zone-disclosure` | `edu-military-air-zone-disclosure-ca` | Mixed — no noise or accident-zone duty; the Civ. Code § 1940.7 ordnance duty is present |
| `shoreline-access-disclosure` | `edu-no-shoreline-disclosure-ca` | **Confirmed absent** |
| `optional-lease-terms` | `edu-optional-lease-terms-ca` | Mixed — Code Civ. Proc. § 1174(c) and Civ. Code § 1942.1 are the two terms that change the position |
| `required-disclosures` | `edu-required-disclosures-ca` | Mixed — no consolidated statute; full inventory indexed, now including Gov. Code § 8589.45's **four** prescribed flood items and eight-point floor, and Health & Saf. Code § 25400.28(b), under which non-compliance lets the tenant **void the lease** |
| `rules-regulations` | `rules-regulations-ca` + `edu-rules-regulations-ca` | Clause under rule 54; no house-rules statute for dwellings |
| `confirmed-absences-habitability` | `edu-confirmed-absences-habitability-ca` | Roll-up index — 18 subjects plus 4 existing rows |
| `confirmed-absences-misc` | `edu-confirmed-absences-misc-ca` | Roll-up index — about 45 subjects by theme |
| `confirmed-absences-outside-title` | `edu-confirmed-absences-outside-title-ca` | Mixed → **narrowed**: no statute conditions a possession judgment on registration, licence or code compliance, but **Corp. Code § 2203(c) and Rev. & Tax. Code § 23301 condition it on the landlord entity's good standing** |

### Batch B11 — property, pets and use (16 topics, 17 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `parking-vehicle-rules` | `parking-vehicle-rules-ca` | Present (clause); Veh. Code § 22658 read whole |
| `parking-rules-notice` | `edu-parking-rules-notice-ca` | Mixed |
| `pet-fees` | `edu-pet-fees-ca` | Mixed |
| `pet-eviction-fact-sheet` | `edu-no-pet-eviction-fact-sheet-ca` | Mixed — **Civ. Code § 1942.7.5 (SB 1296) is operative 2027-04-01**, not now, and not yet in the code text |
| `animal-care-access` | `edu-no-animal-care-entry-right-ca` | **Confirmed absent**, now clean: the pet-store chapter was fetched and **disproved** as a source |
| `landlord-lien` | `edu-landlord-lien-ca` | **Present** — Civ. Code § 1861a gives apartment-house, cottage and bungalow-court keepers a lien, judicially enforceable only |
| `appliances-excluded` | `edu-appliances-excluded-ca` | Mixed |
| `furnishings-included` | `furnishings-included-ca` | Present (clause) |
| `carpet-cleaning` | `edu-carpet-cleaning-ca` | Mixed |
| `home-business` | `edu-home-business-ca` | Mixed → **absence now clean**: the cottage-food preemption binds **local government**, not a landlord, so unlike family child care it does **not** void a lease ban |
| `family-child-care` | `edu-family-child-care-ca` | Present — Health & Saf. Code § 1597.41 voids a contrary lease term |
| `farmland-hunting-rights` | `edu-no-farmland-hunting-rights-ca` | Mixed → **closed**: Fish & G. Code § 2016 requires **written** permission and accepts the tenant's |
| `cannabis` | `cannabis-restrictions-ca` + `edu-cannabis-ca` | Mixed |
| `firearms` | `edu-no-firearms-rule-ca` | **Confirmed absent** of a landlord-tenant rule; Pen. Code §§ 25100, 25605 now stated |
| `portable-solar` | `edu-tenant-solar-ca` | **Verdict changed on clearing the queue — now `PROHIBITED`.** Civ. Code § 714(a) voids a lease term restricting a solar energy system |
| `ev-charging-requirements` | `edu-ev-charging-requirements-ca` | Mixed → **closed**: Health & Saf. Code § 44268(h) excludes tenant spaces by name |

### Batch B12 — EV, HOA and registration (16 topics, 16 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `ev-charging` | `edu-ev-charging-ca` (education) | Present — Civ. Code § 1947.6 read whole |
| `ev-charging-shared-area` | `edu-ev-charging-shared-area-ca` | **Confirmed absent** |
| `hoa` | `edu-hoa-ca` | Mixed → **extended**: Civ. Code § 4041(a)(4) is an **annual duty on a landlord-owner** to tell the association the unit is rented |
| `association-obligations-disclosure` | `edu-no-association-obligations-disclosure-ca` | **Confirmed absent** as to tenants, now clean: §§ 4525 and 4530 are a **sale-side** packet |
| `accessory-dwelling-unit` | `edu-accessory-dwelling-unit-ca` | Mixed → **extended**: Gov. Code § 66323(e) makes a **longer-than-30-day** term mandatory, and § 66333(b) can force owner-occupancy for a junior ADU |
| `single-family-zone-lease-limit` | `edu-no-single-family-zone-lease-limit-ca` | **Confirmed absent** on letting → **extended**: Gov. Code § 66411.7(g)(1) conditions an urban lot split on a three-year owner-occupancy affidavit, and a parcel let to a tenant in the last three years is disqualified outright |
| `sfr-occupancy-disclosure` | (education row) | Present — the TPA exemption statement is the existing `tpa-exemption-notice-ca`; no second clause, per rule 57 |
| `landlord-registration` | `edu-landlord-registration-ca` | **Confirmed absent** at state level → Bus. & Prof. Code § 16000 confirms the power is the city's, with an apportionment limit a multi-city landlord can use |
| `nonresident-owner-agent` | `edu-nonresident-owner-agent-ca` | Mixed → **extended**: Rev. & Tax. Code § 18662(a), (b) name **lessees** and **rents**, and § 18662(d) puts the liability on whoever holds the money |
| (seven further topics) | see the delta | code-enforcement, recording, relocation and disclosure rows; Health & Saf. Code §§ 17951–17980.6 and Civ. Code §§ 4700–4753 read whole |

### Batch B09 — notices and formalities (16 topics, 17 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `actual-notice-method` | `edu-no-agreed-notice-method-ca` | **Confirmed absent** — no statute lets the parties agree a substitute service method; Code Civ. Proc. § 1162(a) is closed |
| `notice-delivery-methods` | `edu-notice-delivery-methods-ca` | Present — a closed three-method list, Code Civ. Proc. § 1162(a)(1)–(3) |
| `written-notice-required` | `edu-written-notice-required-ca` | Present, notice by notice, against a general oral baseline — Civ. Code §§ 1622, 827(a)(1) |
| `notice-to-vacate-additional-terms` | `edu-notice-to-vacate-additional-terms-ca` | Mixed — Civ. Code §§ 1946, 1946.1(h) |
| `term-change-notice` | `term-change-notice-ca` + `edu-term-change-notice-ca` | Clause offered under rule 54, because **Civ. Code § 827(a)(1) expressly authorises a written agreement cutting the period to seven days**, and § 827(a)(2) makes the served notice part of the lease of itself. Rent is carved out |
| `lease-copy` | `edu-lease-copy-ca` | Present — a 15-day copy duty with an annual repeat on request, Civ. Code § 1962(a)(4), (b); **not a defence to an eviction** |
| `lease-content-requirements` | `edu-lease-content-requirements-ca` | Mixed — no general lease-contents statute, but a scattered inventory of required terms |
| `lease-notice-initial-requirement` | `edu-no-lease-initials-requirement-ca` | **Confirmed absent** — no statute requires a tenant's initials anywhere |
| `lease-type-parity` | `edu-no-lease-type-parity-ca` | **Confirmed absent** |
| `lease-type-size` | `edu-lease-type-size-ca` | Mixed — no whole-lease minimum type size; several disclosures carry their own floor |
| `plain-language` | `edu-plain-language-ca` | Mixed → **absence now clean**: the Consumer Contract Awareness Act was fetched and read whole and sets **no** readability standard |
| `plain-language-consumer-statement` | `edu-no-plain-language-consumer-statement-ca` | **Confirmed absent**, now on the text rather than on the corpus |
| `statute-of-frauds-lease-term` | `edu-statute-of-frauds-lease-ca` | Present — Civ. Code § 1624(a), (a)(3) |
| `lease-term-limitation` | `edu-lease-term-limits-ca` | Mixed → **article now complete**: §§ 715, 717, 718, 719 in force, **§ 716 repealed** |
| `frozen-standard-incorporation` | `edu-frozen-standard-incorporation-ca` | Mixed — California's building standards are **rolling, not frozen** |
| `truth-in-renting` | `edu-no-truth-in-renting-ca` | **Confirmed absent** — no act, no handbook, no delivery duty |

### Batch B10 — termination (16 topics, 17 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `statutory-early-termination` | `edu-statutory-early-termination-ca` | Mixed — several specific rights, no general one |
| `environmental-event-termination` | `edu-no-environmental-event-termination-ca` | **Confirmed absent** as a landlord right; Civ. Code § 1933 runs the other way |
| `infirmity-termination` | `edu-infirmity-termination-ca` | Mixed — **not the clean absence expected**: Civ. Code § 1934 carries an *incapacity* limb and § 1934.5 is a non-waivable nursing-home death rule with a two-week advance-rent return |
| `tenant-death` | `edu-tenant-death-ca` + `tenant-death-notice-ca` | Clause offered under rule 54, earned by Civ. Code § 1934 ending the tenancy **on notice**, not on death |
| `tenancy-at-will` | `edu-tenancy-at-will-ca` | Present — Civ. Code §§ 789, 1944 |
| `seasonal-tenancy` | `edu-no-seasonal-tenancy-ca` | **Confirmed absent** |
| `landlord-remedies-termination` | `edu-landlord-remedies-termination-ca` | Present — Civ. Code §§ 1951–1952.6 read whole |
| `casualty-and-mitigation-waivable` | `edu-casualty-and-mitigation-waivable-ca` | Mixed — the unfitness rights and the mitigation credit differ in waivability |
| `eminent-domain` | `edu-eminent-domain-ca` | **Present and now complete** — Code Civ. Proc. §§ 1265.110–1265.160 read whole after the fetch |
| `foreclosure` | `edu-foreclosure-ca` | Present — Code Civ. Proc. §§ 1161a, 1161b |
| `conversion-notice` | `edu-conversion-notice-ca` | Mixed — Gov. Code §§ 7060 ff. (Ellis Act) and Civ. Code § 1940.6 |
| `cold-weather-vacate-notice` | `edu-no-cold-weather-vacate-notice-ca` | **Confirmed absent** — no cold-weather moratorium of any kind |
| `adverse-proceeding-notice` | `edu-adverse-proceeding-notice-ca` | Mixed — no general duty; specific ones exist |
| `limitation-of-actions` | `edu-limitation-of-actions-ca` | Mixed — Code Civ. Proc. §§ 337, 339, with the remaining periods queued |
| `tenant-bankruptcy` | `edu-tenant-bankruptcy-ca` | Mixed, **FEDERAL** for the ipso facto rule — but **not purely federal**: Code Civ. Proc. § 715.050 enforces a writ of possession despite notice of a filing, except as to money |
| `confession-of-judgment` | `edu-confession-of-judgment-void-ca` | **Verdict changed on clearing the queue** — not an absence but an **express abolition**, Code Civ. Proc. § 1132(a) (SB 688, eff. 2023-01-01) |

### Batch B06 — fees and rent (16 topics, 16 rows)

| Topic | Row | Verdict |
|---|---|---|
| `late-fee-limit` | `edu-no-late-fee-cap-ca` | **Confirmed absent** — no cap and no grace period; `grace period` returns **0 units** in the whole corpus. Civ. Code § 1671(d) governs instead |
| `collection-fee` | `edu-no-collection-fee-ca` | **Confirmed absent** as an authority — Civ. Code §§ 1950.5(b), 1671(d), 1717 |
| `notice-service-fee` | `edu-notice-service-fee-ca` | Present, flat prohibition, in **three places** — Code Civ. Proc. § 1161(6), Civ. Code §§ 1946(b), 1946.1(i) |
| `liquidated-damages` | `edu-liquidated-damages-ca` | Present — Civ. Code § 1671(a)–(d), § 1951.5 |
| `required-fees` | `edu-no-required-fees-rule-ca` | **Confirmed absent** (no all-in pricing for leases) — Civ. Code § 1761 closes the CLRA route; the regulated fees are named |
| `rent-concession` | `edu-rent-concession-ca` | Present as a lease-content and calculation rule — Civ. Code § 1947.12(a)(1) |
| `rent-escalation` | `edu-rent-escalation-ca` | Present, two regimes — Civ. Code § 827(b)(2)–(3), (c); § 1947.12(a)(1)–(2) |
| `rent-installments` | `edu-rent-installments-ca` | Present — Civ. Code § 1947 (default runs **against** the landlord), § 1962(a)(2)–(3) |
| `rent-receipts` | `edu-no-rent-receipt-duty-ca` | **Confirmed absent** — the receipt patterns return **1 unit in the whole corpus**, Pub. Util. Code § 777, and there only as evidence of tenancy. 47 states carry this topic |
| `rent-receipt-anti-waiver` | `edu-no-rent-receipt-anti-waiver-ca` | **Confirmed absent** because the right is absent — Civ. Code § 1953(a) is the general rule |
| `rent-tax` | `edu-no-rent-tax-ca` | **Confirmed absent** at state level; transient occupancy tax and business-licence tax named as **local** |
| `tax-escalation` | `edu-no-tax-escalation-ca` | **Confirmed absent** as an authority — `tax escalation\|escalation clause` **0 units** |
| `property-tax-rent-disclosure` | `edu-no-property-tax-rent-disclosure-ca` | **Confirmed absent** — Civ. Code § 1102.6b is a **seller's** disclosure |
| `government-fee-reimbursement` | `edu-no-government-fee-reimbursement-ca` | **Confirmed absent** — the one place a statute says what may be billed through is submetered water, Civ. Code § 1954.205(a) |
| `governmental-fines` | `edu-no-governmental-fines-ca` | **Confirmed absent** — the landlord's routes are Civ. Code §§ 1941.2(a), 1929, 1950.5(b)(2), Code Civ. Proc. § 1161(4) |
| `alarm-tampering-fee` | `edu-no-alarm-tampering-fee-ca` | **Confirmed absent** as to a fee; the duties are split — Health & Saf. Code § 17926.1(a)–(c) |

### Batch B07 — screening and fair housing (16 topics, 17 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `protected-class-inquiry-ban` | `edu-protected-class-inquiry-ban-ca` | Mixed — inquiry ban present and broad (Gov. Code § 12955(b)); no separate record ban |
| `source-of-income` | `edu-source-of-income-ca` | Mixed — acceptance mandate present and **unexempted**; the Civ. Code § 1947.3(a)(3)(E) carve-out does not reach Gov. Code § 12955 |
| `children-occupancy` | `edu-children-occupancy-ca` | Mixed — familial status and age both protected; no statutory occupancy standard |
| `employee-screening` | `edu-employee-screening-ca` | Mixed — no screening mandate for rental staff; a strict ban-the-box regime applies to the landlord as employer (Lab. Code § 432.7, partial) |
| `criminal-activity` | `criminal-activity-ca` + `edu-criminal-activity-ca` | Clause offered under rule 54 (`CONDITIONAL`); the statutory no-cure route is Code Civ. Proc. § 1161(4) |
| `sex-offender-occupancy` | `edu-no-sex-offender-occupancy-duty-ca` | **Answered from the statute** — Pen. Code § 3003.5(a)–(c) binds the **registrant**, not the landlord |
| `service-animal-denial-penalty` | `edu-service-animal-denial-penalty-ca` | Present — Civ. Code § 54.1(b)(6), three overlapping penalty routes |
| `religious-cultural-display` | `edu-religious-cultural-display-ca` | Mixed — express religious-display right with five exceptions (Civ. Code § 1940.45); no cultural-display right |
| `political-access` | `edu-no-political-access-right-ca` | **Confirmed absent** on candidate and canvasser access |
| `foreign-ownership` | `edu-no-foreign-ownership-restriction-ca` | **Confirmed absent**, and foreclosed constitutionally — Cal. Const. art. I, § 20 |
| `veterans-incentive` | `edu-no-veterans-incentive-ca` | **Confirmed absent** on incentives; veteran and military status **is** protected (Gov. Code §§ 12926(k), 12955(a)) |
| `senior-housing-work-card` | `edu-no-senior-housing-work-card-ca` | **Confirmed absent** |
| `student-housing` | `edu-student-housing-ca` | Mixed — the dormitory exemption is **conjunctive** ("owned and operated by"), so private and master-leased student housing stays inside the cap and just cause |
| `tenant-confidential-information` | `edu-tenant-confidential-information-ca` | Mixed — five regimes, no general confidentiality statute; Civ. Code § 1798.82 (partial) is the breach-notice duty |
| `tenant-records` | `edu-tenant-records-ca` | Mixed — no ledger or records duty; the ICRAA applicant-notice duties are stated here |
| `purpose-limitation` | `edu-purpose-limitation-ca` | Present — Civ. Code § 3482.8 is the only statewide survivor of the three sections § 3485(c)'s deeming sentence names |

### Batch B08 — domestic violence, safety and access (16 topics, 18 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `dv-confidentiality` | `edu-dv-confidentiality-ca` | Mixed — two express duties (Civ. Code §§ 1946.7(i)(1), 1161.3); **§§ 1941.5 and 1941.6 contain none at all** |
| `dv-eviction-protection` | `edu-dv-eviction-protection-ca` | Present — Code Civ. Proc. § 1161.3, Civ. Code §§ 1946.7, 1946.2 |
| `dv-lockchange` | `edu-dv-lockchange-ca` | Present — Civ. Code §§ 1941.5(a), 1941.6(a), plus Pen. Code § 136.2 |
| `dv-qualifying-documents` | `edu-dv-qualifying-documents-ca` | Present — **four lists that are not identical**, with the 180-day limits attaching to different things |
| `dv-protection-order-chapter-moved` | `edu-dv-law-citations-ca` | Mixed — chapters current; AB 2534 (Stats. 2026, ch. 950) adds forced marriage to Fam. Code § 6211 operative 2027-01-01, not yet in the code text |
| `key-control-policy` | `edu-no-key-control-policy-ca` | **Confirmed absent** — Civ. Code § 1941.3(a) is the device duty, not a key-control rule |
| `smart-access` | `edu-smart-access-ca` | **Verdict changed on clearing the fetch queue** — absent in landlord-tenant law, but **present and directly applicable** in Bus. & Prof. Code ch. 22948.30–22948.35 (SB 50, eff. 2026-01-01) |
| `trespass-notice` | `edu-trespass-notice-ca` | Present — Pen. Code §§ 602(o)(1), 602.1, 602.3 |
| `inspection-rights` | `edu-inspection-rights-ca` | Mixed — one statutory inspection of an occupied dwelling, **tenant-initiated** (Civ. Code § 1950.5(f)) |
| `law-enforcement-cooperation` | `edu-law-enforcement-cooperation-ca` | Mixed — no duty or limit; Civ. Code § 1946.8(f)(2)'s 30-day **rebuttable presumption** is the real constraint |
| `drug-free-housing-addendum` | `edu-drug-free-housing-addendum-ca` + `drug-free-housing-ca` | **Confirmed absent** as a statutory instrument; clause offered under rule 54 |
| `emergency-contact` | `edu-no-emergency-contact-rule-ca` | **Confirmed absent** in either direction |
| `extended-absence-notice` | `edu-no-extended-absence-notice-ca` + `extended-absence-notice-ca` | **Confirmed absent** as a duty; clause offered under rule 54 |
| `guest-rights` | `edu-no-guest-rights-statute-ca` | **Confirmed absent** |
| `prohibited-acts-renter` | `prohibited-acts-renter-ca` | Present — Civ. Code §§ 1954(a), 1940.2(a) |
| `tenant-statutory-duties` | `edu-tenant-statutory-duties-ca` | Mixed — duties exist (Civ. Code §§ 1941.2, 1928, 1929) but California has **no URLTA-style general obligation** |

### Batch B04 — building and safety (16 topics, 17 rows) — canvassed by a helper

| Topic | Row | Verdict |
|---|---|---|
| `asbestos-hazards` | `edu-asbestos-hazards-ca` | Mixed |
| `defective-drywall-disclosure` | `edu-no-drywall-disclosure-ca` | **Confirmed absent** — `drywall` returns 0 units in the whole corpus and no heading in any of the 30 codes matches |
| `fire-code-standard` | `edu-fire-code-standard-ca` | Present |
| `fire-sprinkler-duty` | `edu-fire-sprinkler-duty-ca` | Mixed |
| `sprinkler-disclosure` | `edu-no-sprinkler-disclosure-ca` | **Confirmed absent** |
| `pool-safety` | `edu-pool-safety-ca` | Present |
| `lead-safe-certification` | `edu-lead-safe-certification-ca` | Present |
| `lead-state-notices` | `edu-no-lead-state-notices-ca` | **Confirmed absent** (state notices; the federal duty is named and unread) |
| `window-guards` | `edu-no-window-guard-rule-ca` | Mixed |
| `water-heater-temperature` | `edu-water-heater-temperature-ca` | Mixed |
| `heating` | `edu-heating-ca` | Present |
| `steam-radiator-covers` | `edu-no-steam-radiator-covers-ca` | **Confirmed absent** |
| `common-area-lighting` | `edu-common-area-lighting-ca` **+ clause `common-area-lighting-ca`** | Present |
| `portable-cooling-device` | `edu-portable-cooling-device-ca` | Mixed |
| `hazardous-contamination-disclosure` | `edu-hazardous-contamination-disclosure-ca` | Mixed |
| `certificate-of-occupancy-disclosure` | `edu-certificate-of-occupancy-disclosure-ca` | Mixed |

**Three findings worth flagging.**

1. **The Asbestos Notification chapter does not apply to rentals at all** — and a canvasser who finds it and stops will report a disclosure duty that does not exist. *'shall not mean residential dwellings'* (Health & Saf. Code § 25919.2); the notice runs to employees, not tenants; and § 25915.5(b) says delivery or a negligent failure to deliver *"shall not constitute a breach of any covenant under the lease or rental agreement."* California's real asbestos duties for a landlord are elsewhere: the 2026 disaster-mitigation duty (Civ. Code § 1941.8(a)(2)) and the nine-month asbestos-containing-material pause in the balcony inspection regime (Health & Saf. Code § 17973(d)(2)).
2. **The window-guards topic inverts in California.** There is no window-guard law — but Health & Saf. Code §§ 17958.4 and 13113.9 regulate security and burglar bars, where the whole statutory point is the opposite of a guard: they must be able to **open**, with a safety release mechanism.
3. **A 2027 time-bomb outside the landlord-tenant code.** Civ. Code § 4738 (AB 1684, effective 1 January 2027) voids cooling-system restrictions. It sits in the Davis-Stirling common-interest-development act, but subdivision (b) is written to reach *"any … instrument affecting … any interest in[] real property"* — and a lease is one. The doubt is interpretive, so `edu-portable-cooling-device-ca` gives the cautious course (no flat ban on window units) and stays `VERIFIED` under the Part 5 policy.

### Batch B05 — utilities (16 topics, 18 rows) — canvassed by a helper

Read whole for this batch: the **water submetering chapter, Civ. Code §§ 1954.201–1954.219**, plus Civ. Code §§ 1940.9, 1942.2, 1942.8, 789.3, 1950.9; some 35 Public Utilities Code sections across the regulated-utility, municipal-utility, municipal-utility-district and public-utility-district schemes; Wat. Code §§ 512, 517, 537–537.5; and the sections fetched from leginfo for this batch (Pub. Util. Code §§ 216, 218; Pub. Resources Code §§ 25402.10, 42649.2, 42649.81; Health & Saf. Code §§ 5473, 116275).

| Topic | Row | Verdict |
|---|---|---|
| `electric-submetering-disclosure` | `edu-electric-submeter-disclosure-ca` | Mixed |
| `meter-conservation-charge` | `edu-no-meter-conservation-charge-ca` | **Confirmed absent** |
| `utility-allowance-cap` | `edu-utility-allowance-cap-ca` | Present — and the shared `utility-allowance-cap-co` was **declined for tagging** |
| `utility-apportionment` | `edu-utility-apportionment-ca` | Present |
| `utility-disclosure-attachment` | `edu-utility-disclosure-attachment-ca` | Present |
| `utility-disconnection-notice-authorization` | `edu-no-utility-shutoff-designee-ca` | **Absent for the ordinary tenant** — third-party notification exists but only for customers 65 or older or dependent adults |
| `utility-interruption-submeter` | `edu-utility-interruption-submeter-ca` | Present |
| `utility-landlord-account` | `edu-utility-landlord-account-ca` | Present |
| `utility-shutoff-statute` | `edu-utility-shutoff-statute-ca` | Present |
| `utility-transfer` | `edu-no-utility-transfer-cutoff-ca` | **Confirmed absent** as to an authorised cutoff |
| `municipal-utility-lien` | `edu-municipal-utility-lien-ca` | Present — **and it contradicts itself by supplier class** |
| `shutdown-rent-protection` | `edu-no-shutdown-rent-protection-ca` | **Confirmed absent** |
| `fee-unprovided-service` | `edu-fee-unprovided-service-ca` | Present |
| `energy-data-release` | `edu-energy-data-release-ca` **+ clause `energy-data-consent-ca`** | Present |
| `private-well-testing` | `edu-private-well-testing-ca` | Present |
| `recycling-notice` | `edu-recycling-notice-ca` **+ clause `recycling-source-separation-ca`** | Present |

**Three findings worth flagging.**

1. **California's municipal-utility-lien answer contradicts itself depending on who supplies the utility.** A city-owned utility and a municipal utility district may not pursue the owner or a later tenant for a previous tenant's residential bill and may not require owner-account service without the owner's agreement (Pub. Util. Code §§ 10009.6(b), 12822.6(b)); a **public utility district supplying water expressly may** require it (§ 16469(b)); a municipal utility district may make the owner pay for a tenant's service and record a judgment lien or go to the tax roll, except for electricity (§ 12811.1); and any entity with the right ordinance may collect sewer and water charges on the tax roll with no owner proviso at all (Health & Saf. Code § 5473). "It depends on your supplier" is the honest answer, and it is now in the row.
2. **Third-party shut-off notification is real but almost nobody qualifies.** Every regulated corporation, municipal utility, municipal utility district and public utility district must offer it — but only to "residential customers who are 65 years of age or older, or who are dependent adults" (Pub. Util. Code § 779.1(c) and its three twins). For an ordinary tenant there is no route at all, which turns the topic's "is a designation possible" question into a practical no.
3. **Two rule-54 optional clauses, both expressly authorised by statute.** Pub. Resources Code §§ 42649.2(d) and 42649.81(c) each say in terms that a property owner "may require" tenants to source separate recyclable and organic waste — so the clause is offered rather than invented. And Pub. Resources Code § 25402.10(c)(2)(B) makes written accountholder consent the sole gateway to whole-building energy data below three active accounts, and prescribes no form for it, which is exactly the gap a lease clause fills.

### Batch B03 — habitability and repair (16 topics, 16 rows)

| Topic | Row | Verdict | Citation |
|---|---|---|---|
| `habitability-materiality` | `edu-habitability-materiality-ca` | Present — two thresholds, no materiality test | Civ. Code § 1941.1(a); Code Civ. Proc. § 1174.2(c) |
| `habitability-modifiable` | `edu-habitability-modifiable-ca` | Present — the opening words are cut down | Civ. Code §§ 1941, 1942.1 |
| `habitability-statement` | `edu-no-habitability-statement-ca` | **Confirmed absent** | Civ. Code §§ 1941, 1942.1 |
| `habitability-waiver` | `edu-habitability-waiver-ca` | Present — void, with one exception | Civ. Code §§ 1942.1, 1953(a) |
| `promises-to-repair` | `edu-no-promises-to-repair-rule-ca` | **Confirmed absent** (statutes; regs unread) | Civ. Code §§ 1941, 1942(a), 1942.4(a) |
| `repair-notice` | `edu-repair-notice-ca` | Present — **a written-notice clause is void** | Civ. Code §§ 1942(a)–(b), 1942.1, 1942.3(a)(2), 1942.4(a)(2) |
| `repair-cost-termination` | `edu-no-repair-cost-termination-ca` | **Absent for the landlord**; present for the tenant | Civ. Code §§ 1932, 1942(a); § 1946.2(b)(2), (d), (g) |
| `repair-escrow-exemption-notice` | `edu-no-repair-escrow-ca` | **Confirmed absent** | Civ. Code §§ 1942(a)–(d), 1942.2 |
| `designated-repairer` | `edu-no-designated-repairer-ca` | **Confirmed absent** | Civ. Code §§ 1942(a)–(c), 1942.1 |
| `maintenance-duty-shift` | `edu-maintenance-duty-shift-ca` | Present — one door, one condition | Civ. Code §§ 1942.1, 1941.2(a)–(b) |
| `tenant-repair-agreement` | **clause `tenant-repair-agreement-ca`** | Present | Civ. Code § 1942.1 |
| `landlord-breach-remedy` | `edu-landlord-breach-remedy-ca` | Present — five cumulative routes | Civ. Code §§ 1942, 1932(1), 1942.4; Code Civ. Proc. §§ 1174.2, 1174.21 |
| `condemned-premises-rent-bar` | `edu-condemned-premises-rent-bar-ca` | Present | Civ. Code § 1942.4(a)–(e); § 1942.3 |
| `substandard-property-receivership` | `edu-substandard-property-receivership-ca` | Present | Health & Saf. Code § 17980.7(a)–(c) |
| `sanitary-code-variance` | `edu-sanitary-code-variance-ca` | Present but narrow | Health & Saf. Code § 17959.5 |
| `health-district-rental-rules` | `edu-health-district-rental-rules-ca` | Present — **with a current moratorium** | Health & Saf. Code § 17958.5(a)–(c) |

**Three findings worth flagging.**

1. **A written-repair-request clause is void in California.** Civ. Code § 1942(a) gives the repair-and-deduct remedy on "written or oral notice", and § 1942.1 voids any agreement modifying that right as to a condition rendering the home untenantable. Leases carried in from other states routinely require written notice; here the clause gives no protection, and the two statutes with the heaviest consequences (§§ 1942.3, 1942.4) turn on a *public officer's* written notice, not the tenant's.
2. **The habitability waiver question has a precise answer, and it is the consideration.** Civ. Code § 1941 opens "in the absence of an agreement to the contrary", which reads like an invitation; § 1942.1 then voids any waiver "with respect to any condition which renders the premises untenantable", leaving one exception — the tenant may undertake to improve, repair or maintain all or stipulated portions **"as part of the consideration for rental"**. That answers the topic's own question about which sentence carries the qualifier, and it is why `tenant-repair-agreement-ca` puts the rent credit on the face of the clause: a clause reciting the work without identifying what the tenant gets for it falls outside the exception and is void.
3. **A local standards moratorium that changed the usual answer in October 2025.** Health & Saf. Code § 17958.5(c), added by AB 130 (Stats. 2025, ch. 22, effective 30 June 2025), bars a city or county from modifying the Building Standards Code for residential units from 1 October 2025 to 1 June 2031 unless one of five conditions is met. A product that tells a landlord "check your local amendments" without this will send them to standards that may not lawfully apply.

### Batch B02 — eviction (16 topics, 17 rows)

**The whole unlawful-detainer chapter was read, not sampled:** Code of Civil Procedure chapter 4, §§ 1159–1179a, from the corpus's assembled node file — 92,947 characters, every section in the code's own order with its history line. That one read answers most of this batch, which is the point of grouping topics by statutory home.

| Topic | Row | Verdict | Citation |
|---|---|---|---|
| `eviction-process` | `edu-eviction-process-ca` | Present | Code Civ. Proc. §§ 1161–1162, 1166, 1167, 1170.5, 1171, 1176, 1179a, 715.010 |
| `eviction-hardship-stay` | `edu-eviction-hardship-stay-ca` | Present, two routes | Code Civ. Proc. §§ 1179, 1176(a) |
| `eviction-penalty-clause-ban` | `edu-no-eviction-penalty-clause-ca` | **Absent as a ban**; one fee banned outright | Code Civ. Proc. §§ 1161(6), 1174.27(f)(2); Civ. Code §§ 1946(b), 1946.1(i), 1953(a)(3)–(4), 1671(d), 1717 |
| `eviction-service-party` | `edu-no-eviction-service-party-ca` | **Confirmed absent** | Code Civ. Proc. §§ 1162(a), 1167(b)–(c); Civ. Code § 1633.3(c) |
| `expedited-criminal-eviction` | `edu-expedited-criminal-eviction-ca` | Mixed — no landlord fast track; a **city-prosecutor** action | Code Civ. Proc. § 1161(4); Civ. Code § 3486(a) |
| `cure-and-eviction-grounds` | `edu-cure-and-eviction-grounds-ca` | Present, two tracks | Code Civ. Proc. §§ 1161(2)–(4), 1161.5 |
| `redemption` | `edu-redemption-ca` **+ clause `forfeiture-clause-ca`** | Present | Code Civ. Proc. §§ 1174(a), (c), 1174.5, 1161.5 |
| `possession-bond` | `edu-no-possession-bond-ca` | **Confirmed absent** (all four terms 0 units) | Code Civ. Proc. § 1166a; Civ. Code § 1953(a)(2), (a)(4) |
| `rent-into-court-counterclaim` | `edu-rent-into-court-counterclaim-ca` | Mixed — not a condition of defending; three situations | Code Civ. Proc. §§ 1170.5(c)–(g), 1174.2, 1174.21, 1176(a) |
| `entity-landlord-court-representation` | `edu-entity-landlord-court-representation-ca` | Mixed — small claims yes, UD by case law | Code Civ. Proc. §§ 116.530, 116.540, 1165 |
| `minor-tenant-filing` | `edu-minor-tenant-filing-ca` | **Present — a minor cannot make a lease** | Fam. Code §§ 6500, 6501, 6700, 6701(b), 6712; Code Civ. Proc. §§ 1164, 116.410 |
| `notice-to-quit-waiver` | `edu-no-notice-to-quit-waiver-ca` | Present as a flat prohibition | Civ. Code § 1953(a)–(c); § 1946.2(g) |
| `lockout-for-rent-delinquency` | `edu-no-lockout-for-rent-ca` | **Absent as a route; prohibited with penalties** | Civ. Code § 789.3(a)–(d) |
| `unauthorized-occupant-removal` | `edu-unauthorized-occupant-removal-ca` | Mixed — one narrow lodger route only | Civ. Code § 1946.5; Pen. Code § 602.3; Code Civ. Proc. §§ 1174.3, 1174.25 |
| `good-cause-notice` | `edu-good-cause-notice-ca` | Present | Civ. Code § 1946.2(f)–(h) |
| `holdover-rate` | `edu-no-holdover-rate-cap-ca` | **Confirmed absent** (no rate, no cap) | Code Civ. Proc. §§ 1161(1), 1174(b), 1174.5; Civ. Code § 1671(d) |

**Four findings worth flagging.**

1. **A minor cannot make a California lease at all.** Fam. Code § 6701: *"A minor cannot do any of the following: … (b) Make a contract relating to real property or any interest therein."* A lease is such a contract, so this is an incapacity, not a voidable contract — stronger than the "age of majority" framing the topic's questions use, and the kind of thing a national product gets wrong by defaulting to disaffirmance rules. An adult must sign or co-sign.
2. **A forfeiture clause in the lease removes a mandatory stay.** Code Civ. Proc. § 1174(c) makes the five-day post-judgment stay of the writ mandatory where the lease "is in writing, is for a term of more than one year, and does not contain a forfeiture clause" — so omitting such a clause hands the tenant a guaranteed five extra days. Offered as the optional clause `forfeiture-clause-ca` under rule 54.
3. **A repeal proved rather than assumed.** Code Civ. Proc. § 1161(4) still cross-refers to Civ. Code § 3485(c), but § 3485 is gone. The corpus holds the node "TITLE 1. GENERAL PRINCIPLES [3479. - 3486.]" whole, and its own match record shows the official table of contents indexes 11 sections there, 11 are held, none missing and none extra — and § 3485 is not among them. So the Legislative Counsel's current index for that range no longer lists it, which is positive evidence of repeal rather than a gap in the corpus. The cross-reference in § 1161(4) is a dangling one.
4. **The notice-fee ban sits in three places, not one.** Code Civ. Proc. § 1161(6), Civ. Code § 1946(b) and Civ. Code § 1946.1(i) each carry the identical sentence barring a fee for serving, posting or delivering any notice. A product that finds only the § 1161 version will miss it on a periodic-tenancy termination.

### Batch B01 — security deposit (16 topics, 18 rows)

| Topic | Row | Verdict | Citation |
|---|---|---|---|
| `deposit-cost-schedule` | `edu-deposit-cost-schedule-ca` | **Absent as an authority, and prohibited** | Civ. Code § 1950.5(e)(2)(A)–(C), (h)(2)(A) |
| `deposit-last-month-rent` | `edu-deposit-last-month-rent-ca` | Present | Civ. Code § 1950.5(b), (c)(1), (c)(2), (n) |
| `deposit-surrender-notice` | `edu-deposit-surrender-notice-ca` | Present; "vacated" undefined | Civ. Code § 1950.5(h)(1), (h)(6), (f)(1), (h)(1)(A)(ii)(II) |
| `expedited-deposit-disposition` | `edu-no-expedited-deposit-disposition-ca` | **Confirmed absent** | Civ. Code § 1950.5(h)(3)–(5), (h)(7) |
| `fee-in-lieu-of-deposit` | `edu-no-fee-in-lieu-of-deposit-ca` | **Confirmed absent**, with the "however denominated" risk | Civ. Code §§ 1950.5(b), (c)(1), (n); 1950.6(a)–(b) |
| `nonrefundable-deposit-notice` | `edu-nonrefundable-deposit-notice-ca` | Present as a flat prohibition | Civ. Code § 1950.5(n), (c)(1), (c)(3); § 1950.6(a) |
| `nonrefundable-deposit-separate-notice` | `edu-no-nonrefundable-separate-notice-ca` | **Confirmed absent** | Civ. Code §§ 1950.5(n); 1947.1(b)(1); 1633.3(b)(4) |
| `security-deposit-holding` | `edu-security-deposit-holding-ca` | Mixed — nothing on an owner, a trust duty on an agent | Civ. Code § 1950.5(d); Bus. & Prof. Code §§ 10131(b), 10145(a)(1)–(2) |
| `security-deposit-nonwaiver` | `edu-security-deposit-nonwaiver-ca` | Present | Civ. Code § 1953(a)(1), (a)(2)–(5), (b), (c); § 1950.5(h)(4)(B) |
| `security-deposit-on-sale` | `edu-security-deposit-on-sale-ca` | Present and detailed | Civ. Code § 1950.5(i)–(l) |
| `security-deposit-penalty` | `edu-security-deposit-penalty-ca` | Present | Civ. Code § 1950.5(h)(7), (m), (o), (p) |
| `security-deposit-standards` | `edu-security-deposit-standards-ca` **+ clause `service-member-additional-security-ca`** | Mixed — no general duty; a **required lease term** for service members | Civ. Code § 1950.5(c)(4), (c)(5)(B) |
| `utility-deposit-return` | `edu-no-utility-deposit-ca` | **Confirmed absent**, with a submeter deduction route | Civ. Code §§ 1954.207(c); 1950.5(b), (c)(1) |
| `unpaid-damages-interest` | `edu-unpaid-damages-interest-ca` **+ clause `interest-on-unpaid-amounts-ca`** | Present | Civ. Code §§ 3289(a)–(b), 3287(a)–(b), 3302, 3300; Cal. Const., art. XV, § 1 |
| `dv-deposit-timing` | `edu-dv-deposit-timing-ca` | Mixed — ordinary clock, express joint-check exception | Civ. Code § 1950.5(h)(1)(C)(i), (iii); § 1946.7 |
| `statutory-caps` | `edu-statutory-caps-ca` | Present, and consolidated | Civ. Code §§ 1950.5(c)(1), (c)(5), (h)(4)(A), (m); 1940.5(g); 1950.6(b); 1719(a)(1); 1947.12(a)(1)–(2); 3289(b) |

**Two findings worth flagging up front.**

1. **A required lease term nobody had drafted.** Civ. Code § 1950.5(c)(4) ends: *"The date for return of the additional amount of security shall be included in the lease agreement."* That is the only sentence in § 1950.5 that puts text in the lease itself, it has been in force since 1 April 2025, and `edu-security-deposit-cap-ca`'s own notes record the duty as *"still undrafted"*. The new clause `service-member-additional-security-ca` carries it.
2. **The trust-account trap for managers.** An owner holding a deposit in California owes no escrow, no separate account, no interest and no depository notice — Civ. Code § 1950.5(d) is a creditor-priority rule, not a trust. But anyone who collects rent or leases for another for compensation is a real estate broker (Bus. & Prof. Code § 10131(b)), and Bus. & Prof. Code § 10145(a)(1) requires funds belonging to others to go into a neutral escrow, the principal's hands, or a trust fund account at a bank in this state. Steinoak's property-manager users are on the wrong side of that line by default.

---

## §3 Batteries

Every absence claim names its battery, which ran its controls and real positives **in the same batch** (rule 19). Common corpus and controls for batch B01: the California corpus, **statute sections only — 2,592 sections, 4,702,266 characters**; nonsense control `zqxvbnmwt` **0 units**; must-hit control `Legislature` **162 units**; real positives, the phrases "security, however denominated" and "nonrefundable", each read verbatim in the body of Civ. Code § 1950.5, each returning that section. **Boundary, stated in every row that relies on one: statutes only — no California regulations are held, and local ordinances and case law were not searched.**

| Battery | Subject | Terms → units |
|---|---|---|
| **CA-B01-001** | deposit holding, escrow, interest, depository notice | `trust account\|escrow account` 8 (all reviewed, none a residential-deposit rule); `separate account` 1 (Bus. & Prof. Code § 10145); `federally insured` 1 (Cal. Const. art. XI, § 11); `interest-bearing` 5 (only landlord-tenant one is the mobilehome rule Civ. Code § 798.39(f)); `name and address of the financial institution\|depository` 5 (none a deposit rule); `surety bond\|guarantee bond\|bond in lieu` 2 (neither a deposit rule) |
| **CA-B01-002** | expedited deposit disposition | `expedit` 11 (all reviewed, none a deposit rule); `(shorten\|accelerat)…(period\|time\|day)` 2 (neither); `upon request of the tenant … security\|deposit` **0**; `fewer than 21 days … security\|deposit` 4 (none a deposit-return rule) |
| **CA-B01-003** | fee in lieu of a deposit | `in lieu of a (security) deposit` **0**; `deposit alternative\|alternative to a security deposit` **0**; `deposit waiver\|waiver fee` **0**; `deposit insurance\|surety … deposit\|insurance … in lieu` 1 (Bus. & Prof. Code § 10145); `monthly fee … deposit` **0**; `elect\|option\|right … pay … security deposit instead` **0** |
| **CA-B01-004** | posted deposit-calculation standards | `post\|provide\|give … criteria\|standard … deposit\|security` **0**; `differing standard` **0**; `adjoining` **0**; `criteria\|standard … in writing … deposit\|security` **0** |
| **CA-B01-005** | a cost schedule pre-set in the lease | `schedule of charges\|cost schedule\|price list` 5 (all reviewed, none a deposit rule); **`carpet` 1 unit in the whole corpus** — Civ. Code § 1950.5, the prohibition; `pre-agreed cleaning charge` patterns **0** |
| **CA-B01-006** | a landlord-held utility deposit | `utility deposit\|deposit for utility` **0**; `deposit … (gas\|electric\|water\|utility) service` 1 (Civ. Code § 1954.207); `return\|refund … utility … deposit` **0** |

Every term's full unit list is in `batteries/B01-batteries.json`, and each battery is re-runnable as printed by `bat_b01.py`.

### Batch B06

Same boundary. Corpus: **statute sections only — 2,603 sections**, being the 72 held nodes plus everything fetched this pass; nonsense control `zqxvbnmwt` **0 units**; must-hit control `Legislature` **167 units**; real positives, the phrases "a provision in a contract liquidating damages for the breach of the contract is void" and "shall in and of itself operate and be effectual", read verbatim in Civ. Code §§ 1671 and 827, each returning that section.

| Battery | Subject | Terms → units |
|---|---|---|
| **CA-B06-001** | a rent-receipt duty, and a bar on waiving one | `receipt for (the\|a)? (rent\|payment)\|rent receipt\|receipt for rent` **1 unit in the whole corpus** — Pub. Util. Code § 777, and there only as evidence of tenancy; `receipt … upon request\|cash` **0**; `waiv*… receipt` **0** |
| **CA-B06-002** | a statutory late-fee cap, and a grace period | `late (fee\|charge\|payment (fee\|charge))` 7 (all reviewed — the submetered-water late-charge rules Civ. Code §§ 1954.204–1954.213, and mortgage servicing §§ 2924.11, 2937); **`grace period` 0**; the percentage and dollar patterns returned only rent-cap, mobilehome and small-claims figures, all reviewed |
| **CA-B06-003** | a collection fee chargeable to a tenant | `collection cost\|cost* of collection` 1 (Cal. Const. art. XI, § 15, irrelevant); `collection … fee\|charge` 12 (all reviewed, none authorising a charge to a tenant); `cost\|expense*… collect*… rent` **0** |
| **CA-B06-004** | reimbursement of a government fee or fine by the tenant | `pass\|charg\|reimburs*… governmental\|municipal\|city\|county fee\|charge\|fine` **0**; `administrative citation\|administrative fine` 1 (Gov. Code § 12930); `inspection fee` **0**; `fine … tenant\|lessee` 2 — **both false positives on the letters of "defined"** (Civ. Code §§ 1940.8.5, 1942) |
| **CA-B06-005** | a rent tax, and a tax-escalation pass-through | `transient occupancy tax` 1 (Civ. Code § 1864, innkeepers); `tax … on rent\|rental receipts\|gross receipts` **0**; `property tax … tenant\|lessee\|rent` 1 (Civ. Code § 1102.6b, a **seller's** disclosure); `tax escalation\|escalation clause` **0** |
| **CA-B06-006** | rent concessions and a disclosure duty for one | `concession … rent\|rent … concession` 2 (Civ. Code §§ 1939.01, 1947.12); `incentive\|discount\|credit … rent` 16 (all reviewed); `repay\|recaptur\|forfeit*… concession\|discount\|incentive` **0**, so there is no claw-back authority; `free rent\|rent free\|abatement of rent` **0** |
| **CA-B06-007** | a fee for disabling a smoke or CO alarm | `tamper*… alarm\|detector` **0**; `fee\|charge … alarm\|detector` **0**; `tenant\|occupant … smoke alarm\|smoke detector\|carbon monoxide` 2 (Health & Saf. Code §§ 13113.7, 17926.1 — the duty sections) |
| **CA-B06-008** | required fees, mandatory-fee disclosure, all-in pricing | `advertis\|display\|offer*… mandatory\|required fee` 1 (Civ. Code § 1770, the CLRA); `total price\|all-in` 1 (same); `shall not\|may not … charge\|collect … not disclosed\|undisclosed` **0**; `mandatory fee` 2 (Civ. Code §§ 1770, 1780, both CLRA — and the CLRA route is closed for leases by § 1761) |

Full unit lists in `batteries/B06-batteries.json`; re-runnable as printed by `bat_b06.py`. Batches B07 and B08's batteries are in `batteries/B07-batteries.json` and `batteries/B08-batteries.json`, each with the same controls and real positives recorded in the rows that rely on them.

### Batch B03

Same corpus and controls as B02 (2,597 sections; `zqxvbnmwt` **0**; `Legislature` **167**); real positives, the phrases "waiving or modifying his rights under Section 1941" and "substantially lacks any of the following affirmative standard characteristics", read verbatim in Civ. Code §§ 1942.1 and 1941.1. Same boundary.

| Battery | Subject | Terms → units |
|---|---|---|
| **CA-B03-001** | a lease habitability statement, and a materiality threshold | `lease\|rental agreement … fit for\|habitab` **0**; `warranty of habitability` 2; `material* … untenant\|habitab` **0** — no statutory materiality test; `substantial breach` 1; `substantially lacks` 3 |
| **CA-B03-002** | a written repair promise with a completion date | all three terms **0 units** — but the Wisconsin analogue is an *administrative rule*, and California's regulations are not held, so the absence is claimed for statutes only |
| **CA-B03-003** | a lease term requiring written repair requests | the proximity patterns returned **0** because the statute's words are "written or oral notice to the landlord or his agent" — the section was read whole instead, and the row says so, so the zero is not read as an absence; `knowledge … condition\|defect\|dilapidat` 3 (none a repair rule) |
| **CA-B03-004** | a repair escrow and an exemption notice | `escrow … rent\|repair` 1 (a mortgage definition); `withhold* … account\|escrow\|court` **0**; `exempt* … repair\|remedy … notice` **0**; small-landlord exemption **0** |
| **CA-B03-005** | a repairer named in the lease | `designat\|nam* … contractor\|repairer … repair` **0**; `licensed contractor` 9 (none a tenancy repair rule); `shall\|must use … contractor\|repair` **0** |
| **CA-B03-006** | terminating because a repair costs too much | `cost\|expense … repair … terminat` **0**; `uneconomic\|economically infeasible` 1 (a utility district); `terminat*\|elect … instead of\|rather than … repair` **0** |
| **CA-B03-007** | a local health district's own rental rules, and variances | `health (officer\|district)` 16, all reviewed — **none gives a local health district power over rentals**, so the topic's premise does not fit California, where the power sits with the city or county under the State Housing Law; `change\|modif* … building standards` 8; `variance` **1 unit in the whole corpus**; `ordinance … more stringent\|restrictive` 2 |

Full unit lists in `batteries/B03-batteries.json`; re-runnable as printed by `bat_b03.py`.

### Batch B02

Common corpus and controls: the California corpus, **statute sections only — 2,597 sections, 4,705,160 characters**; nonsense control `zqxvbnmwt` **0 units**; must-hit control `Legislature` **167 units**; real positives, the phrases "excluding Saturdays and Sundays and other judicial holidays" and "relieve a tenant against a forfeiture", read verbatim in Code Civ. Proc. §§ 1161 and 1179, each returning those sections. Same boundary.

| Battery | Subject | Terms → units |
|---|---|---|
| **CA-B02-001** | a self-help lockout for unpaid rent | `bootlock\|chang* the locks\|lockout` 4 (all reviewed: the prohibition § 789.3, the two court-ordered lock changes, the partial-eviction order); `self-help` 1 (a housing-finance section); `exclud\|deny … access\|entry … rent\|nonpayment` **0**; `24-hour … key\|access` 1 (a foreclosure notice) |
| **CA-B02-002** | squatter removal outside eviction | `squatt` 1 (a lender's vacant-property duty); `transient occupant` **0**; `sworn complaint\|affidavit … remov\|eject\|evict` **0**; `unlawful\|unauthoriz* occupan` 1 (mobilehome parks); `arrested for the offense by the owner` 1 (Pen. Code § 602.3, the lodger route); `ex parte … remov\|possession` 1 (an innkeeper's lien) |
| **CA-B02-003** | possession bond with confessed judgment | `possession bond` **0**; `confess* judgment\|judgment by confession` **0**; `undertaking\|bond … immediate possession` **0**; `cognovit` **0** — not one section on any limb |
| **CA-B02-004** | an expedited criminal-eviction track | `expedit* … evict\|unlawful detainer\|possession` **0**; `criminal activity` 7 (all reviewed, none procedural); `24-hour\|48-hour\|one-day … notice to quit` **0**; `arrest report` 1 (Civ. Code § 3486, the city action) |
| **CA-B02-005** | charging the tenant for the eviction | `fee for serving` 3 (all three the same prohibition); `charge\|recover … cost\|fee … eviction\|unlawful detainer` **0**; `eviction fee` **0**; `shall not … eviction … cost\|fee` 1 (§ 1174.27) |
| **CA-B02-006** | a lease-named party for eviction papers | `agent\|person … designat\|nam … service of process\|accept service` **0**; `accept service` 2 (neither landlord-tenant); `lease … designat\|specif … service` **0**; `address confidentiality` 2 (Code Civ. Proc. §§ 1013, 1167) |
| **CA-B02-007** | a holdover rate or a cap on one | `150\|100\|double\|twice\|treble … per diem\|daily rent\|holdover` **0**; `holdover\|holding over` 3 (none setting a rate); `use and occupancy` 2 (neither a dwelling rate); `statutory damages of up to` 2 (the deposit penalty and § 1174(b)) |
| **CA-B02-008** | a minor as tenant or defendant | `minor … lease\|tenan\|rental agreement` **0 units in the corpus** — which is why the Family Code sections had to be fetched; `age of majority` 7 (none a tenancy rule); `emancipat` 4; `guardian ad litem` 3 |
| **CA-B02-009** | a non-attorney for an entity landlord | the entity-appearance and corporation-attorney terms returned the small-claims article only; `propria persona\|self-represented` returned no landlord-tenant rule |

Full unit lists in `batteries/B02-batteries.json`; re-runnable as printed by `bat_b02.py`.

---

## §4 Decisions, and the eight California items

### Decisions taken in batch B01

1. **`security-deposit-standards` gets a clause as well as an education row.** Rule 57 allows a lease clause plus its education row under one topic key, and § 1950.5(c)(4) requires text in the lease, so the three-bucket test (rule 55) gives `REQUIRED_DISCLOSURE: Civ. Code § 1950.5(c)(4)`. The clause is `CONDITIONAL`, not `REQUIRED`: the duty bites only where the tenant is a service member *and* the security exceeds the landlord's standard or advertised amount for a tenant-related reason.
2. **`unpaid-damages-interest` gets an optional clause (rule 54).** Civ. Code § 3289(a) lets a stipulated lawful rate survive the breach, which is a term that serves the landlord; § 3289(b) supplies 10 percent without any lease term, so the clause's value is certainty, not entitlement. Basis `CONSTRAINED_TERM | SERVES_LANDLORD`, rate as `{{unpaid_amount_interest_rate}}` — an existing builder variable, reused per rule 60.
3. **Three NEEDS_REVIEW points closed under Part 5's policy, each stated in the row with the cautious course, each row `VERIFIED`:** when a tenant has "vacated" for the 21-day clock (undefined, case law only); whether a deposit-alternative fee is "security" under § 1950.5(b); and whether a landlord's claim for unpaid rent is a "loan or forbearance" or an "account after demand" within Cal. Const., art. XV, § 1 — where the cautious course is to stipulate no more than 10 percent, which satisfies both § 3289 and the article's household-purpose ceiling.
4. **`statutory-caps` consolidates and does not restate.** Each figure is quoted from its own section with its own citation, and each figure's conditions are left in that figure's own row.

### Decisions taken in batch B06

12. **`liquidated-damages` carries the general rule and six fee rows point to it.** Civ. Code § 1671(d) decides the fate of nearly every figure a California lease would like to fix in advance, so restating it in each fee row would have put the same subject in seven rows. `edu-liquidated-damages-ca` states it once, under its own topic key, and `edu-no-late-fee-cap-ca`, `edu-no-collection-fee-ca`, `edu-no-tax-escalation-ca`, `edu-no-government-fee-reimbursement-ca`, `edu-no-governmental-fines-ca` and `edu-no-alarm-tampering-fee-ca` cite it rather than repeat it.
13. **No new clause for `rent-installments`, although the statutory default runs against the landlord.** Civ. Code § 1947 makes rent payable *at the end* of the period unless the lease says otherwise, which is exactly the kind of gap rule 54 would fill — but the existing `rent-payment-ca` clause already supplies rent in advance, so a second clause would duplicate it. The education row explains why the existing clause is load-bearing rather than cosmetic.
14. **`rent-concession` is recorded as a lease-content duty, not as a concession rule.** California does not regulate what you may offer; it regulates how the lease must show it, and the consequence is on the *landlord's* side — an undisclosed discount lowers the lowest gross rental rate the next increase is measured against. The row is `REQUIRED` for that reason.
15. **The two "fine … tenant" hits are recorded as false positives, in the row.** Battery CA-B06-004 returned two units for `fine … tenant|lessee`, and both are the letters of the word "defined". Rule 19 says to print every match and review it; printing them is what caught this, and the row says so, so a later reader cannot mistake two hits for two authorities.
16. **`rent-receipts` is the cleanest confirmed absence in the pass so far, and it is recorded as unusual.** One unit in the entire corpus mentions a rent receipt, in a utility statute, as evidence of tenancy. 47 states in this library carry the topic. The row says both things, because a reader who assumes California must have a cash-receipt rule will otherwise think the row is incomplete rather than right.

### Decisions taken in batch B03

8. **`tenant-repair-agreement` gets the clause and `maintenance-duty-shift` the education row.** Both topics turn on the same sentence of Civ. Code § 1942.1, so putting the clause under one key and the explanation under the other keeps rule 57 satisfied while leaving each topic answered in its own right. Basis `CONSTRAINED_TERM | SERVES_LANDLORD`.
9. **The rent credit is inside the clause, not only in the notes.** The statutory condition is "as part of the consideration for rental", so a clause that recites the work without identifying what the tenant gets for it does not meet the exception and falls back into § 1942.1's voiding sentence. `{{tenant_maintenance_rent_credit}}` makes the consideration visible on the face of the lease — and the clause carries an express carve-out for untenantable conditions, because a clause drafted slightly too wide is void rather than narrowed.
10. **The § 1942.1 arbitration option was deliberately not bundled in.** The same section's second paragraph lets the parties, in writing, submit any dispute about an untenantable condition to arbitration with costs apportioned by the arbitrator. That is a separate subject and belongs to the `binding-arbitration` topic (batch B13); putting it in the maintenance clause would have put two subjects in one row.
11. **A battery that returned zero for the wrong reason is recorded as such.** CA-B03-003's proximity patterns came back empty because the statute's words are "written or oral notice to the landlord or his agent", which the pattern did not reach. The section was read whole instead and the row says so, so a later reader cannot mistake the zero for an absence. This is the shape of error rule 19 warns about, caught by printing the matches rather than trusting the count.

### Decisions taken in batch B02

5. **`redemption` gets an optional clause (rule 54).** Code Civ. Proc. § 1174(c)'s five-day stay of the writ is *mandatory* where the written lease runs more than a year and has no forfeiture clause, and discretionary otherwise, so a forfeiture clause is a term that serves the landlord. Basis `SERVES_LANDLORD`. The clause deliberately states its own limits — the election must be in the notice (§ 1174(a)), performance or waiver nullifies it (§ 1161.5), and forfeiture does not release the § 1951.2 rent claim (§ 1174.5) — so it cannot mislead either party.
6. **Three more NEEDS_REVIEW points closed under Part 5's policy, each row `VERIFIED`:** whether Code Civ. Proc. § 1162's three service methods are exclusive rather than permissive; whether a corporation must appear by attorney in an unlawful detainer (settled by case law this project has not read); and whether Fam. Code § 6712's necessaries rule can rescue a lease against the § 6701(b) incapacity. Each row states the cautious course.
7. **`good-cause-notice` kept separate from the existing just-cause rows.** The topic's answer is the *consequence* of a defective notice — Civ. Code § 1946.2(g) voids it outright — plus the § 1946.2(f) notification formalities and the § 1946.2(h) remedies. The causes, relocation assistance and exemptions stay in `edu-for-cause-eviction-ca`, `tpa-notice-ca`, `tpa-exemption-notice-ca` and `edu-tpa-sunset-ca`, which this row points to rather than restating.

### Decisions taken after the batches, on clearing the fetch queue

17. **`smart-access` was re-answered, and the row renamed.** `edu-no-smart-access-law-ca` became **`edu-smart-access-ca`**, `REQUIRED`, `effective_from` 2026-01-01. Fetching the queued Bus. & Prof. Code § 22948.30 turned up a chapter nobody in this project had seen — **ch. 22948.30–22948.35, added by Stats. 2025, Ch. 676, Sec. 2 (SB 50), effective January 1, 2026** — which gives a survivor of domestic violence, stalking, sexual assault or trafficking the right to require that a named person's access to a connected device or its user account be terminated, and imposes the duty on whoever runs the account. **A landlord who issues tenants app logins for a connected lock is an "account manager" within it**: the definition reaches anyone who provides an app-based user account and 'has authority to make decisions regarding user access to those user accounts' (Bus. & Prof. Code § 22948.30(a)), and "device access" expressly includes remotely manipulating 'an audio system, security system, light fixture, or other home appliance or fixture' (Bus. & Prof. Code § 22948.30(d)). The duties are hard-edged: a secure, easily navigable submission channel; **two business days** to terminate access and confirm, or to explain a full factory reset; publication of the process on the website and app; no fee, no rate increase, no approval by the other account holder; **no refusal for arrears**, so the rent ledger is irrelevant; **no notification to the person cut off**; confidentiality with secure disposal within 90 days. Exposure is up to **$2,500 per connected device**, with a private right of action and a **one-way fee provision** — only a prevailing *plaintiff* recovers costs and fees (Bus. & Prof. Code § 22948.32(b)(3), (c)) — and any waiver is void (§ 22948.33). **This is the strongest argument in the pass for the fetch queue as a method**: no battery over the held corpus could have found it, because the chapter sits in the Business and Professions Code, outside the 72 held nodes, and nothing in the Civil Code cross-references it. The companion connected-device regime, Civ. Code §§ 1798.91.04–1798.91.06, is *not* a landlord duty — it binds a 'manufacturer' only, excludes a party who merely purchases or brands a device (§ 1798.91.05(c)), and gives no private right of action (§ 1798.91.06(e)) — and the row says so, so the two are not confused. `edu-dv-lockchange-ca` and `edu-dv-confidentiality-ca` now carry a cross-reference to it.
18. **`hazardous-contamination-disclosure` closed an open limb and found a dead citation.** The B04 helper queued Health & Saf. Code § 25359.7 and noted it was "possibly recodified". It was: the Hazardous Substance Account Act moved out of Division 20, chapter 6.8 into the new **Division 45** by Stats. 2022, Ch. 257 (AB 2293), operative 2024-01-01, and a search of all 24,394 headings in all 30 codes for "25359" returns **0**. The disclosure duty is now Health & Saf. Code § 78700 — **and it binds owners of *nonresidential* real property only**, so it is a commercial-leasing duty and never reached a residential lease. The mirror duty at § 78705 *does* reach a residential tenant, and its carve-out has to be read precisely: it withholds only the lease-default consequence, not the notice duty or the **$5,000** penalty. One further trap in the same division: the residential owner's no-liability presumption at § 79790 is defined so that **an investor renting out a whole house does not qualify**, because "Owner" requires occupancy of the residence or half the duplex (§ 79780(a)).
19. **Two B04 rows moved from "queued, not read" to answered, and both absences survived.** `edu-water-heater-temperature-ca`: Health & Saf. Code §§ 108525 and 25965 are warning-label duties on the **seller of the appliance**, with the familiar 130-degree text — and they are **duplicates**, the 1982 chapter 12.5 version and the 1995 product-safety recodification both still in the code with identical wording, neither repealed. Neither is a landlord setting duty, so the confirmed absence now rests on the text rather than on the corpus. The row also names the real California water-heater duty, which is seismic rather than thermal: **every existing residential water heater** must be braced, anchored or strapped (Health & Saf. Code § 19211(a)), a violation makes the building a nuisance (§ 19211(f)), and 'An owner of a residential rental property shall not evict any person on the basis that the eviction is required in order to comply with this section.' (Health & Saf. Code § 19211(c)). `edu-pool-safety-ca`: the Swimming Pool Safety Act is **narrower than its reputation** — its two-of-seven drowning-prevention duty bites only 'when a building permit is issued for the construction of a new swimming pool or spa or the remodeling of an existing swimming pool or spa at a private single-family home' (Health & Saf. Code § 115922(a)), so it **does not reach an apartment-complex pool at all**, and the definitions confirm the division of labour (§ 115921(b)). Apartment pools stay with the public-pool duties the row already carried.


20. **`confession-of-judgment` and `plain-language` both changed character on clearing the queue, in opposite directions.** Code Civ. Proc. § 1132 turns a confirmed absence into an express abolition: 'A judgment by confession is unenforceable and may not be entered in any superior court.' (Code Civ. Proc. § 1132(a)), SB 688, effective 2023-01-01, with only pre-2023 judgments saved (§ 1132(b)). The repeal of the surrounding machinery is **proved, not assumed** — the official index gives the chapter range as a single section, and §§ 1133, 1135, 1136 and 1137 each return no section text when opened — so the row is `PROHIBITED`, not `CONSTRAINED`. The other way: the Consumer Contract Awareness Act of 1990 (Civ. Code §§ 1799.200–1799.209), which the rule 36 screen had correctly routed a plain-language question to, turns out to be **misnamed for that purpose**. It sets no readability standard, no reading level, no required summary; its operative duty is delivering a copy of the contract (§ 1799.202(a)). And it would not reach a lease anyway, for the same structural reason the CLRA does not: "Goods" means personal property and "Services" means work and labour (§ 1799.201(f), (i)), so a dwelling is outside both. The plain-language absence is now clean, on the text rather than on the corpus. Two sections of that title *are* live and belong elsewhere — Civ. Code §§ 1799.208 and 1799.209 (SB 940, eff. 2025-01-01) bar out-of-state arbitration of a California claim and give a small-claims option — and the `binding-arbitration` topic in batch B13 has been told.
21. **`eminent-domain` closed, and the statute invites a clause.** Code Civ. Proc. article 2 of chapter 10, "Leases", has six sections and all six are now read. A total taking ends the lease (§ 1265.110); a partial taking ends it as to the part taken with the allocable rent 'extinguished' (§ 1265.120); **either party** may petition the court to end the whole lease where an essential part is taken or the remainder is unsuitable (§ 1265.130), so the landlord has standing too; termination is fixed at the earlier of title passing or the order for possession (§ 1265.140); and § 1265.160 expressly preserves whatever the lease itself provides for a taking. That last sentence is a rule 54 invitation — a condemnation clause allocating the award — which this pass records as a proposed topic question rather than drafting, because rule 57 keys one subject to one row and the topic already has its education row.
22. **`lease-term-limitation`'s article is now whole, including a repeal.** Civ. Code §§ 715, 717, 718 and 719 are in force and § 716 returns no text, so the article "Duration of Leases" is fully accounted for. The limit that matters to a private landlord is § 715: a lease to commence at a time certain or on a future event 'becomes invalid if its term does not actually commence in possession within 30 years after its execution' (Civ. Code § 715) — a trap for an option or a build-to-suit, not for an ordinary tenancy.


23. **`portable-solar` changed from a confirmed absence to a prohibition, and this is the second-largest find of the pass.** `edu-no-portable-solar-right-ca` became **`edu-tenant-solar-ca`**, `PROHIBITED`, `effective_from` 2022-01-01. The B11 helper was right that no statute names a portable or balcony panel, and right to leave the limb open rather than claim an absence. The queued sections supply a general provision that reaches a lease: 'Any covenant, restriction, or condition contained in any deed, contract, security instrument, or other instrument affecting the transfer or sale of, or any interest in, real property ... that effectively prohibits or restricts the installation or use of a solar energy system is void and unenforceable.' (Civ. Code § 714(a)). A lease is a contract affecting an interest in real property, and the operative verb is **"effectively prohibits or restricts"** — so a general no-alterations clause, or consent that is never given, is exposed as much as an express ban. The definition closes the loop: § 714(d)(2) takes "solar energy system" from Civ. Code § 801.5(a)(1)–(2), which covers 'Any solar collector or other solar energy device whose primary purpose is to provide for the collection, storage, and distribution of solar energy for space heating, space cooling, electric generation, or water heating.' (Civ. Code § 801.5(a)(1)) and, as a structural feature, 'Solar racking, solar mounting, and elevated solar support structures ... regardless of whether the feature is on the ground or on a building.' (Civ. Code § 801.5(a)(2)(A)) — that last clause forecloses the obvious argument that a non-roof installation is outside it. What survives is reasonable restriction, and § 714(d)(1)(B) puts a number on it: for photovoltaics, "significantly" means more than **$1,000** over the proposed system cost or a drop of more than **10 per cent** in efficiency. **NEEDS_REVIEW closed under Part 5 with the doubt in the row:** no case law read in this project applies § 714 to a residential tenancy, and the section sits in a title about easements and servitudes, which is an argument the other way — so the row states the exposure and the cautious course (permit with conditions rather than ban), which costs a landlord nothing if § 714 does not reach leases and protects them if it does.
24. **Three absences were made clean, and three hypotheses disproved, by sections that turned out to bind someone other than a landlord.** The cottage-food preemption runs against **local government** — 'A city, county, or city and county shall not prohibit a cottage food operation ... in any residential dwellings' (Gov. Code § 51035(a)) — and contains no sentence voiding a contrary lease term, so `home-business` is the mirror image of `family-child-care`, where Health & Saf. Code § 1597.41 does exactly that. The pet-store chapter is fixed by its own definitions to retail sellers (Health & Saf. Code § 122350(i), (j)), so it carries no animal-care entry right. And the EV Open Access Act excludes the case by name: '"Publicly available parking space" shall not include a parking space that is part of, or associated with, a private residence, a parking space that is reserved for the exclusive use of ... employees, tenants, visitors, residents of a common interest development, or residents of an adjacent building' (Health & Saf. Code § 44268(h)). Each is recorded as a **disproved hypothesis** rather than quietly dropped, so a later pass does not queue the same heading again.
25. **Four new landlord duties surfaced that no California row carried.** (a) **Annual notice to the association** that the unit is let: Civ. Code § 4041(a)(4), with the sting at § 4041(c) — say nothing and association notices go to the rented unit, where the tenant receives them. (b) **A longer-than-30-day ADU rental term is mandatory on the local agency**, so there is no California city where an ADU created under that section may lawfully be let short-term: 'A local agency shall require that a rental of the accessory dwelling unit created pursuant to this section be for a term longer than 30 days.' (Gov. Code § 66323(e)). (c) **SB 9 is closed to a landlord twice over** — the three-year owner-occupancy affidavit at Gov. Code § 66411.7(g)(1), and, harder, the disqualification of any parcel that is 'Housing that has been occupied by a tenant in the last three years.' (Gov. Code § 66411.7). (d) **Rent withholding for a non-resident owner is a real question with a named victim**: Rev. & Tax. Code § 18662(a) names 'lessees', § 18662(b) names 'rents', and § 18662(d) makes whoever fails to withhold liable — so the California manager, not the out-of-state owner, carries it. The rate is in Franchise Tax Board regulation, which this corpus does not hold, so no percentage is stated anywhere in the delta.
26. **A junior ADU sharing a bathroom cannot be let while the owner lives elsewhere**, and the escape is physical rather than procedural: owner-occupancy is required where the junior ADU 'has shared sanitation facilities with the existing structure' and 'shall not be required if the junior accessory dwelling unit has separate sanitation facilities, or if the owner is another governmental agency, land trust, or housing organization.' (Gov. Code § 66333(b)). Recorded here because a landlord reading only the ADU-friendly headlines will plan the wrong building.


27. **A confirmed absence of mine was wrong, and the correction is the most instructive moment of the pass.** `edu-no-rent-receipt-duty-ca` (batch B06, written by me) claimed a clean confirmed absence: no California statute requires a rent receipt, proved by a battery whose terms returned **one** unit in the whole corpus. The battery was sound and its result still stands — *within the landlord-tenant law*. The B14 helper, answering the collector topics, found what it had never looked at: **Civ. Code § 1499, enacted 1872 and sitting in the general obligations part of the Civil Code — 'A debtor has a right to require from his creditor a written receipt for any property delivered in performance of his obligation.' (Civ. Code § 1499).** Rent is money delivered in performance of an obligation and the tenant is the debtor, so a California tenant who asks for a receipt is entitled to one. The row is renamed **`edu-rent-receipt-duty-ca`**, its `rule_type` moves from `RECOMMENDED` to `CONDITIONAL` — the duty bites on demand, not automatically — and `effective_from` becomes 1872. The companion anti-waiver row is corrected too: its absence survives, but the *reason* changes from "no right exists" to "a right exists and no statute protects it by name", with Civ. Code § 1953(b)'s pre-possession rule and its renewal carve-out quoted in full. **The method lesson, filed as a proposed SOP change: a battery over a landlord-tenant corpus can only prove an absence in that corpus. A right of general contract or obligations law needs its own screen, and the rule 36 subject screen was run over the tenancy statutes rather than over the obligations title. That is the gap, and it is the one place in this pass where the pass's own discipline produced a wrong answer rather than a cautious one.**
28. **Three more "open" rows closed on the statute, two of them with a trap attached.** `construction-liens`: the landlord's protection against a lien for work the *tenant* commissioned is a notice of nonresponsibility, and it is easy to lose — 'A notice of nonresponsibility is not effective unless, within 10 days after the person giving notice has knowledge of the work of improvement, the person both posts and records the notice.' (Civ. Code § 8444(e)). Posting alone fails, recording alone fails, and the ten days run from **knowledge**, not completion. A no-liens clause does not help: 'any term of a contract that purports to do so is void and unenforceable unless and until the claimant executes and delivers a waiver and release under this article.' (Civ. Code § 8122). `guarantor-renewal`: a guaranty drafted to cover renewals is by definition a continuing guaranty (Civ. Code § 2814), and 'A continuing guaranty may be revoked at any time by the guarantor, in respect to future transactions, unless there is a continuing consideration as to such transactions which he does not renounce.' (Civ. Code § 2815) — so the words "and any renewal" do not bind the guarantor. `binding-arbitration`: Code Civ. Proc. § 1298's prescribed "ARBITRATION OF DISPUTES" title, 8-point bold type and capitalised notice reach a **lease with an option to purchase** or a ground lease coupled with improvements, not an ordinary dwelling lease — which is why the battery found no prescribed notice in the held corpus and was right to leave that zero open.
29. **The insurance answer has a unit threshold nobody had recorded.** Ins. Code § 675(a)(1) applies the cancellation and non-renewal chapter to residential property 'which consists of not more than four dwelling units' — so a duplex, triplex or fourplex owner gets the closed five-ground cancellation list at § 676 and the 45-day renewal-or-nonrenewal notice at § 678(a)(1), and a five-unit owner gets neither. The pending-claim trap is also closed: 'an insurer may not refuse to renew a policy of insurance specified in subdivision (a) solely on the grounds that a claim is pending under the policy' (Ins. Code § 675(c)).
30. **The Legislative Counsel's own text contains a misspelling that a quote checker will trip on, and it was verified against the live page rather than assumed to be a corpus defect.** Civ. Code § 1940.7(b) reads 'shall give written notice to a prospective tenant of that knowledcge prior to the execution of a rental agreement' — "knowledcge". The B14 helper stopped its quotation before that word and said so; this pass then opened § 1940.7 on leginfo and confirmed the misspelling is in the official text. Recorded so that a later pass quoting that clause keeps the typo rather than "correcting" it into a failed match. (The same shape as the `l0-point` finding at Civ. Code § 1954.204 in §6 above.)

### The eight California items

| Item | Status |
|---|---|
| 1. Statutory waivers and fee clauses (rule 54) | **Part done.** Civ. Code § 1953 read whole; `security-deposit-nonwaiver` (B01), `notice-to-quit-waiver` and `eviction-penalty-clause-ban` (B02) all answered from it, each pointing to `edu-lease-waiver-void-ca` without changing it. Still to come: `habitability-waiver`, `smoke-drift-waiver`, `part5-nonwaivable`, `collection-fee`, `notice-service-fee`, `liquidated-damages`, `confession-of-judgment` (B03, B06, B09, B13). Civ. Code §§ 1942.1, 1671(d), 1951.5, 1950.5(m) and Code Civ. Proc. § 1174.2 are read or queued for those. |
| 2. Six `dv-` topics | **Part done.** `dv-deposit-timing` answered in B01 from Civ. Code §§ 1950.5(h)(1)(C) and 1946.7 read whole, with AB 2534 (Stats. 2026, ch. 950, forced marriage added to Fam. Code § 6211, operative 1 January 2027, not yet in the code text) noted for the legal watch. Code Civ. Proc. §§ 1161.3 and 1174.27 were then read whole in B02 — the termination bar, the documentation forms, the affirmative defence and the **partial eviction with a court-ordered lock change** — so four of the remaining five `dv-` topics already have their primary sources read. The rest is batch B08. |
| 3. Shared fee clauses — `keys`, `hoa-compliance` vs §§ 1950.5(b), 1671(d) | Pending (B06/B12). |
| 4. Three central shared edits — `smoking-policy`, `no-alterations`, `addendum-precedence` | Pending (B11/B09). |
| 5. CARES Act mentions vs the § 1161(2) three-day count | **Done.** No CA eviction row contradicts `edu-cares-act-notice`. The federal 30-day notice for a covered property is longer than, and runs alongside, the § 1161(2) three days; nothing in § 1161 as amended by SB 611 shortens a federal period, and the new weekend-and-holiday exclusion only lengthens the state one, so the two are additive and the longer governs. Recorded in `edu-eviction-process-ca`. |
| 6. 2026 statutes operative 1 January 2027 | Standing instruction recorded in §1.2; applied per batch. AB 2534 flagged in B01. |
| 7. Currency and sunsets | Recorded in §1.2; `edu-statutory-caps-ca` states the § 1947.12 repeal date from its own history line. |
| 8. `tpa-exemption-notice-ca` and TPA-exemption self-limiting | Not in this pass's scope — it was the previous (retro) pass's check 28. |


#### Item 3 — the shared fee clauses `keys` and `hoa-compliance`, against Civ. Code §§ 1950.5(b) and 1671(d)

**Both read correctly for California, and each has one California-specific limit worth recording.**

- **`keys`.** The clause charges the *actual* re-keying cost, not a fixed sum, so Civ. Code § 1671(d) is not engaged at all — there is no liquidated figure to test. The limit is on the deposit, not the charge: Civ. Code § 1950.5(b)(4) permits application of the deposit *'To remedy future defaults by the tenant in any obligation under the rental agreement to restore, replace, or return personal property or appurtenances, exclusive of ordinary wear and tear, if the security deposit is authorized to be applied thereto by the rental agreement.'* (Civ. Code § 1950.5(b)(4)) — **corrected after round 2 of the independent check, which found that this section of the log had invented the opening clause ("the failure of the tenant to return…") while quoting the tail verbatim. The misquote was confined to this log; no delta row repeated it.** — the only one of the four purposes that requires the lease to say so. Keys are appurtenances, and the clause as drafted charges the cost to the tenant without authorising the deposit to be applied to it. So in California a landlord using this clause can bill unreturned keys but cannot take them out of the deposit unless the lease separately authorises it. Worth noting too that re-keying is maintenance of a statutory device — Civ. Code § 1941.3(a)(1)–(2) requires an operable dead bolt on each main swinging entry door and operable window security or locking devices — so the cost must be real and documented.
- **`hoa-compliance`.** An association fine is the association's charge against the *owner*, and shifting the actual amount to the tenant is indemnity for a real loss, not a sum fixed in advance, so again § 1671(d) is not engaged. The limit is the same one, and **round 2 of the independent check corrected how it is reached**: the answer is not that § 1950.5(b)'s list is closed — (b) defines "security" as any payment "including, but not limited to" the listed purposes, so it cannot do the limiting work on its own — but that **§ 1950.5(e)(1) closes it**: *'the landlord may claim of the security only those amounts as are reasonably necessary for the purposes specified in subdivision (b)'* (Civ. Code § 1950.5(e)(1)). An association fine is not among those purposes, so on that route it cannot come out of the deposit. The same correction was applied to the nine delta rows that argued it from (b) alone. The clause does not claim it can, so it reads correctly; the point belongs in the landlord's understanding, not in the clause.

#### Item 4 — the three central shared edits, confirmed under California law

**All three read correctly. One line each, as the prompt asks, with the sections read.**

- **`smoking-policy` — correct, and in California the clause does statutory work.** Civ. Code § 1947.5(a) authorises a landlord of a residential dwelling unit to prohibit smoking *'on the property or in any building or portion of the building, including any dwelling unit, other interior or exterior area, or the premises on which it is located'* (Civ. Code § 1947.5(a)); and § 1947.5(b)(1) then **requires** that every lease entered into on or after January 1, 2012 on such a property *'shall include a provision that specifies the areas on the property where smoking is prohibited, if the lessee has not previously occupied the dwelling unit.'* (Civ. Code § 1947.5(b)(1)). The clause's enumeration — the dwelling, porches, balconies and any common area, that is, the whole property — specifies the areas, so using it satisfies the duty. Its "tobacco, marijuana, and vaping" triad is also exactly right under California law and not merely cautious: Health & Saf. Code § 11362.3(a)(2) withholds Proposition 64's permission to *'Smoke cannabis or cannabis products in a location where smoking tobacco is prohibited'*, so a tobacco prohibition carries cannabis with it automatically, and § 11362.3(b)(2) defines "Smoke" to include *'the use of an electronic smoking device that creates an aerosol or vapor, in any manner or in any form, or the use of any oral smoking device for the purpose of circumventing the prohibition of smoking in a place'* (Health & Saf. Code § 11362.3(b)(2)). **One caution for the landlord, not a defect in the clause:** going smoke-free mid-tenancy is governed by two different provisions depending on when the lease was made, and **round 2 of the independent check found this item had collapsed them.** For an agreement **entered into before January 1, 2012**, a prohibition where smoking was previously permitted *'shall constitute a change of the terms of tenancy, requiring adequate notice in writing, to be provided in the manner prescribed in Section 827'* (Civ. Code § 1947.5(b)(2)) — the subdivision opens with that date limit, so it does **not** supply the rule for a modern lease. For every later agreement the operative provision is § 1947.5(c): a landlord exercising the § 1947.5(a) authority *'shall be subject to federal, state, and local requirements governing changes to the terms of a lease or rental agreement for tenants with leases or rental agreements that are in existence at the time that the policy limiting or prohibiting smoking is adopted'* (Civ. Code § 1947.5(c)) — which routes to the ordinary § 827 terms-change machinery and to any local ordinance, rather than deeming the change to be one.
- **`no-alterations` — correct, and it is the final sentence that makes it so.** California gives tenants several rights to alter the premises that a bare no-alterations clause would collide with: Gov. Code § 12927(c)(1) makes "discrimination" include *'the refusal to permit, at the expense of the disabled person, reasonable modifications of existing premises occupied or to be occupied by the disabled person, if the modifications may be necessary to afford the disabled person full enjoyment of the premises'*, with the landlord permitted *'where it is reasonable to do so'* to condition permission on restoration *'(other than for reasonable wear and tear)'* (Gov. Code § 12927(c)(1)); Civ. Code § 1947.6(a) requires a lessor to *'approve a written request of a lessee to install an electric vehicle charging station at a parking space allotted for the lessee'* on a lease executed, extended or renewed on or after July 1, 2015, subject to the five exclusions in § 1947.6(b); Civ. Code § 1940.45 gives a religious-display right; and Civ. Code §§ 1941.3 and 1942 give rekeying and repair rights. The clause's carve-out — that it *"does not limit any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform, and does not change who owns an installation that applicable law makes Tenant's property"* — reaches all of them generically, including the ownership point that matters for a charging station and a religious display. No edit needed.
- **`addendum-precedence` — correct, and in California the exception limb is doing essential work.** A bare lease-controls clause would operate as a waiver of statutory rights in several places California forbids: Civ. Code § 1942.1 voids a modification of the habitability rights taken as part of the consideration for rental, § 1953(a) voids a clause by which the tenant modifies or waives the § 1950.5 or § 1954 rights, and § 1954.215 makes the submetered-water rights non-waivable. The clause's second limb — that *"any disclosure, notice, or addendum that applicable law requires, or that applicable law says controls over this Lease, will control over any conflicting term of this Lease"* — surrenders precedence exactly where California takes it, so the clause reads correctly as drafted.

### Questions for Taylor

None yet. Nothing in batch B01 needed a product decision.

---

## §5 The independent check

**Both rounds are complete and acted on.** (rule 80, scaled by the prompt to at most 2 rounds, one agent at a time). Each round was briefed from the delivered rows, the master, the SOP and the primary sources, and each was told **not** to read the canvass brief, so that it would not inherit the authors' assumptions. Round 1 was also told to write its own checks rather than run `rows.py` or `assemble.py`, because a validator that shares a blind spot with the thing it validates finds nothing — and that instruction is what produced most of what follows. It could not reach leginfo (only the main pass can, through the browser pane), so its quote verification was against this pass's own `corpus/` and `fetched/` copies, and it said so at every point where that matters.

### Round 1 — what it checked, and at what sample size

It wrote 35 scripts from scratch. It verified **all 1,648** single-quoted statutory passages carrying a citation, word for word after normalisation, and separately checked **every one of the 1,332** that carry a subdivision in the citation, with a structural paragraph parser it built for the purpose. It read the quoted provision itself for **30 rows**, weighted to the verdict changes and to the `REQUIRED` and `PROHIBITED` rows, and asked whether the body and the rule type actually followed. It re-hashed a random 30 of the 5,750 corpus files, counted the whole-code index itself (24,394 headings, 30 codes), re-ran the load-bearing absence terms over its own index, and checked all 311 id-shaped cross-references, all 200 literal `0 units` claims, all 31 partial-read markers, and every currency and sunset claim the brief named.

**Clean on the things that matter most:** coverage (all 223 topics, 223 distinct keys, no key outside the list, no collision with the master's 146 California keys, no id collision with the master's 12,703); rule 57 (all 15 doubled keys are the permitted clause-plus-education pattern); the schema and the CRLF round-trip; `lease_clause_basis` present on all 19 clauses and absent on all 219 education rows; the five new `{{variables}}` all declared. **1,639 of 1,648 quotes verbatim.** Every currency and sunset claim correct. The decisive zeros held when re-run independently.

### Round 1 — the defects, and what was done about each

**Two wrong subdivision letters.** `edu-no-knowing-use-penalty-ca` cited Civ. Code § 1940.35(d)(1) for the statutory-damages sentence; it is **§ 1940.35(b)(1)** — subdivision (d) is the judicial-notice provision. `edu-tenant-insurance-claims-ca` cited § 1952.7(c)(1)(C) for the certificate-of-insurance sentence; subdivision (c) is the definitions and has no subparagraph (C), and the words are at **§ 1952.7(f)(1)(C)**. Both verified against the corpus text and both corrected. These are the only two wrong subdivisions in 1,332 — but they are exactly the error a reader cannot catch, because the quotation is verbatim and only the address is wrong.

**A verdict correction that was not swept through.** The rent-receipt row had been renamed and its absence withdrawn (decision 27 above), and three rows still pointed at the dead id — one of them, `edu-confirmed-absences-outside-title-ca`, asserting **in its bodyText**, the text a landlord reads, that the pass had "asked for that section and have not read it, so treat the question as open" when the section had been fetched, read and acted on. All three repointed and the stale text replaced. **The lesson is that a verdict change has a blast radius, and the roll-up rows are where it lands.**

**The must-hit control was contaminated by the pass's own file headers.** Every file in `fetched/` carries a `SOURCE: https://leginfo.legislature.ca.gov/...` line that this pass wrote, and the loader indexed each file whole — so the control term `Legislature` was matching **all 148 fetched headers**, and the control count grew with the fetch queue instead of measuring statutory text. The check also proved that some batches' stated corpus size and control count could not both be true: B08's control figure is exactly B05's, and B06's is exactly B02's, so one of each pair had been carried over from a neighbouring batch rather than re-run in the same batch — the specific thing rule 19 forbids. **Fixed at the engine, not papered over:** `calaw.py` now indexes a fetched file's statute body only, and the controls were re-run over the final corpus — **2,735 statute sections, nonsense control `zqxvbnmwt` 0 units, must-hit `Legislature` 166 units**. Those figures, and the explanation, were appended to all **159** rows that state a control. **No absence claim is affected, and the reason is structural rather than reassuring: a header match can only add units to a count, never remove one, so a term that returned zero over the contaminated index returns zero over the clean one.** What is affected is any "N units, all reviewed" figure above zero, which is not a reliable count of statutory text.

**A boundary claim in this log was false.** §3 said the statutes-only boundary was stated "in every row that relies on" a battery. It was missing from **29** rows — 26 of them in B02, B03 and B06, the batches the main pass canvassed itself, which is where the discipline slipped. The sentence was added to all 29.

**Five dangling cross-references**, all from renames the pass itself made: `edu-no-smart-access-law-ca` → `edu-smart-access-ca`, `edu-no-confession-of-judgment-ca` → `edu-confession-of-judgment-void-ca` (twice), `edu-utility-shutoff-ca` → `edu-utility-shutoff-statute-ca`, and a shared master row cited as `default-by-tenant-ca` when its id carries no state suffix. All corrected.

**`effective_from` held statutory dates across all 238 rows, contrary to SOP rule 70**, which is explicit: it "is the date the row's content was verified, normally the canvass date; a law's own effective or operative date goes in the text and notes, **never** in this column". The delta was consistent with how California's existing 188 rows are populated and inconsistent with the SOP and with the ~90 per cent of the library that follows it. **The column now carries the canvass date, 2026-10-30, on all 238 rows** — and because 39 rows had a statutory date that appeared nowhere else, the date was **moved into the notes** rather than deleted, with a sentence in each row recording what it was and why it moved. The 17 formerly blank rows carry an explanation of why they were blank (the pass was using the column for a statute's date, and those rows answer topics California has no statute on). **Which convention California's existing rows should follow is a question for Taylor; the delta follows the SOP.**

**A battery hit list with two wrong entries.** `edu-deposit-cost-schedule-ca` recorded its term as returning 5 units and named Health & Saf. Code §§ 13105.7 and 17921 among them. Re-run, the term returns **3**, and neither of those sections contains any of the three phrases — what they contain is "schedule of fees", a different phrase. The count and the hit list are corrected in the row, and the verdict is unaffected because it rests on `carpet` returning 1 unit, which the check re-ran and confirmed. **An over-inclusive hit list is the same failure as an over-inclusive count: rule 19's print-every-match discipline only works if the review is done against the pattern that was run, not against its sense.**

**Smaller defects, all corrected:** a `PARTIAL READ` header on `fetched/HSC_122350.txt` claimed subdivisions (a)–(j) when the file held only (a), (b), (i) and (j); nine statute quotations rendered the statute's own internal double quotes as a single quote, leaving the quotation unbalanced; the `"Pets"` heading-screen figure in two rows does not reproduce (an exact-phrase screen returns one irrelevant Fish and Game Code heading, and the section the note names is a section, not a heading); five rows carry a zero that was true when the battery ran and is no longer true of the corpus as delivered, now flagged as dated rather than current; and `edu-smart-access-ca`'s body asserted flatly what its own notes record as an open question, now hedged to match.

### Two engine changes the check forced, and what they cost

Fixing the control contamination broke 16 history-line quotations, because a row that quotes `'Amended by Stats. 1982, Ch. 1120, Sec. 1.'` had been resolving against the header the loader no longer indexes. Rather than exempt them, the quote checker now searches each unit's stored history line as well as its text — the history line is verbatim source text, just not operative text. Separately the checker had been opening false quotes on a possessive apostrophe after a backtick (`` `edu-abandoned-property-ca`'s procedure ``) and is now guarded against it. **Both changes could in principle hide a real defect, so round 2 was told to write its own verifier from scratch and compare.** After every fix: **2,196 of 2,196 quoted passages verified, 0 schema errors.**

### What round 1 did not check, in its own words

Nothing was re-fetched from leginfo, so a file mistranscribed at the browser pane is invisible to it. It did not re-hash all 5,750 corpus files (30 at random, all matching). It did not verify every battery's real-positive controls, nor the corpus arithmetic for B04, B07, B12 and B14, whose notes use a different shape. It did not read the battery JSON or the `bat_b*.py` scripts — by design, so that where a count is unreproducible it is reporting that the **delivered record** cannot be audited, not that the engine was wrong. It did not search California regulations, local ordinances, case law or federal law, so it could not test the boundary claims from outside, only that they are stated. And it did not review §4, §5, §6, §7, the proposed SOP changes or the proposed topic questions, nor the master's existing 188 California rows. **Round 2 was briefed to cover those gaps and to verify every fix above, and was told that if round 1 got something wrong it should say so.**

### Round 2 — what it found, including five places where round 1 was wrong

Round 2 was briefed to do two things: verify every fix, and cover what round 1 said it had not checked. It was told that if round 1 got something wrong it should say so, and it did — in five places. **It graded one fix confirmed good, four incomplete, one mostly good, and the quote-checker changes safe but leaving pre-existing gaps.** That is the right outcome for a second round: round 1 found the defects, round 2 found that fixing them had been done too shallowly.

**The verdict correction had been swept through by id and not by substance.** Round 1 reported that a roll-up row asserted the withdrawn rent-receipt verdict "in its bodyText". The fix changed an id in the **notes** and left the body untouched, so the row still told a landlord the question was open — and the notes were then worse than before, naming the live row while describing the dead verdict and stating four things that were false by the time they shipped, including that Civ. Code § 1499 was "NOT HELD" and that "nothing in this row or in `edu-rent-receipt-duty-ca` states what it says". **Both roll-up rows have now had their body text and their notes segments rewritten, not just their pointers.** The lesson is sharper than round 1's version of it: a verdict change has a blast radius, and swapping an id is not the same as correcting a claim.

**There were ten dangling cross-references, not five.** The five round 1 missed are all phrased "the existing X row", so each would have been chased at sync and found to be nothing: `servicemember-rights-ca`, `disability-accommodation-ca`, `fair-housing-ca`, `retaliation-ca`, `hoa-compliance-ca`, `rent-tax-ca`, `liquidated-damages-ca`, `tenant-maintenance-ca`, `heating-ca`, `edu-tenant-repair-agreement`. Three of them point at rows **this pass itself wrote**, under the wrong name. All ten are corrected.

**The control-contamination fix had been applied to one side of the corpus only.** Round 1 found the loader indexing this pass's fetched headers and the fix stopped there — leaving all 2,587 **corpus** headers searchable, which round 2 measured: "Stats." matched 2,367 corpus sections with headers against 3 without, "Added by" 1,117 against 2. A quote of a history line was resolving as statute body because of it. The split is now done for every section file, and two further misses are fixed: the citation-line test failed on every `Code Civ. Proc. § ...` file, because that code's name itself begins with "Code", and the four earliest fetched files carry a `NODE:` line the test did not know. Header text is now unsearchable on both sides — "SOURCE:", "leginfo" and "NODE:" each return **0** section units.

**And the corrected figure round 1 appended to 159 rows was itself wrong.** It stated the must-hit control as **166**, a file count, where every neighbouring figure in this log is a citation count — `count_units()` dedupes by citation, and two Legislature-matching sections are two-version duplicates. The engine prints **164**. The authoritative figures, re-run with headers excluded on both sides, are now stated in all 159 rows with the denominator named: **2,735 statute section files, 2,723 distinct citations; nonsense control 0; must-hit control 166 files / 164 citations.**

**Round 1's reason for saying no absence was affected had a hole.** It argued that a header match can only add units, so no zero could be false. True of a search term — and empirically confirmed: round 2 re-ran **all 170 stored battery terms** under the fixed loader and found 154 unchanged and 16 moved, every one upward and none from above zero to zero. But it is **not** true of the controls, which are gates rather than counts: the engine licenses an absence only if the nonsense control is zero, the must-hit is above zero and every real positive hits, so contamination inflating a gate could turn a FAIL into a PASS, and a PASS is what permits the claim. Had "Legislature" been absent from the clean corpus, every battery in this pass would have been passing its must-hit on the pass's own metadata. **The mechanism for a false absence exists, round 1 did not name it, and the corrected text in all 159 rows now does — with the measurement that shows it did not fire here.** Round 2 also corroborated the diagnosis independently: the figures stated across the batches reconstruct exactly as 157 clean corpus citations plus the number of files fetched at the time, six for six.

**The two quote-checker changes were safe, but they were in tension with each other.** Round 2 wrote its own extractor and agreed with the shipped regex on 231 of 238 rows, with all seven disagreements being its own bug — so the possessive guard is correctly scoped. But the other change, searching each unit's `history` field, re-admitted the header block by a different door, because `history` is parsed *from* the header the body-only split removes. **The right answer was this pass's own proposed SOP change 11, which had been written and then not followed: a history line is not operative statute text, so it belongs in double quotes with a marker.** All **88** single-quoted history lines in the delta — round 1's flag count was 15, which was only those resolving through the new door — have been requoted, two index headings quoted as statutory wording have been requoted, and the checker is back to searching statute text and nothing else. If a later row single-quotes a history line, it will now be flagged, which is the point.

**One quotation was attributed to a regulation the pass never read.** `edu-employee-screening-ca` set "seek or consider" in the single quotes reserved for statutory wording and attributed it to 2 CCR § 12269(a)(1)–(4) — a California regulation, and no California regulation is held by this corpus. It resolved only because a Department of Real Estate web publication in the corpus happens to contain the phrase. **The quotation is withdrawn**; the substance stays with the row that carries that point on its own authority.

**Round 2 also found the log quoting a statute it had not quoted correctly, in the one place the checker never looks.** §4 Item 3 presented Civ. Code § 1950.5(b)(4) in single quotes with a citation and **invented its opening clause** — "the failure of the tenant to return…" where the statute reads "To remedy future defaults by the tenant in any obligation under the rental agreement to restore, replace, or return…". The misquote was confined to this log and no delta row repeated it. **The structural point is the one worth keeping: the quote checker scans row notes and has never scanned the log, which is where §4 and §6 do most of the quoting that will be acted on at sync.**

**Two substantive legal corrections, both in material this pass wrote about itself.** §4 Item 3 and nine rows reasoned that a charge outside the four deposit purposes cannot come out of the deposit *because § 1950.5(b)'s list is closed* — but (b) defines "security" as any payment "including, but not limited to" those purposes, so it cannot do the limiting work. The provision that closes it is **§ 1950.5(e)(1)**: the landlord "may claim of the security only those amounts as are reasonably necessary for the purposes specified in subdivision (b)". The answer is unchanged; the route is now right, in the log and in all nine rows. And §4 Item 4 collapsed two provisions: **§ 1947.5(b)(2) applies only to an agreement entered into before January 1, 2012**, so it is not the rule for a modern lease going smoke-free mid-tenancy; § 1947.5(c) is.

**§6's findings against the master came out well, which matters most of all, because a false accusation about an existing row gets acted on.** Round 2 tested **13** of the roughly 30 findings against the master row's own text *and* the statute: **twelve are correct**, including the ones most likely to be wrong — § 1954.207(c), § 1954.204(i) and its `l0-point` typo, § 1946.8(d)/(e)/(f)(2), Code Civ. Proc. § 1010.6's "in an action filed with the court", § 1932 cited for § 1933's rule, Veh. Code § 22658(f)'s one-hour notice falling on the owner, and § 1947.6(b) having five paragraphs against the existing row's "four exemptions". Two needed correcting and are corrected above: finding 4 attributed an "unread" note to the wrong row, and finding 20 mischaracterised § 1947.6(h) as a cap on what a lessor may require when it is a duty on the lessee with a ceiling, and omitted § 1947.6(i)'s carve-out. Finding 22's "nineteen rows" could not be reproduced — a plain search finds 45 — so the count is restated.

**One batch's arithmetic that round 1 never reached.** Round 1 skipped B04, B07, B12 and B14 because their notes use a different shape. **B04, B12 and B14 are consistent. B07 is not** — its stated control count of 180 belongs to the 2,610-section corpus of B04 and B05, so it was carried over from a neighbouring batch while its corpus size was not. And 2,597 sections is stated with three different control counts across B02/B03, B07/B08 and B09/B10, which cannot all be true. All of it is superseded by the correction now in every affected row, but §3's tables below still print the original pairs and should be read with that in mind.

**Smaller things round 2 caught and that are now fixed:** five rows still carried only part of the boundary sentence; three rows got no record of the statutory date removed from `effective_from`, and eight carried a stale sentence saying the column "was blank" immediately before one saying it now holds a date; `last_checked` read 2026-10-30 on every row when every row was edited on the 31st; round 1's five stale-zero flags named neither the term nor the section and so could not be acted on, and did not include either of the two zeros that are demonstrably stale from the battery records; the corrected figure in `edu-deposit-cost-schedule-ca` was appended while the original Terms line was left standing; and the `"Pets"` heading figure was still wrong after its first correction — it is 6 bodies not 4, and **one of its two index headings is "Product Stewardship for Carpets", an unanchored-substring hit on "Car-pets", which is exactly the error this pass filed as proposed SOP change 17, now found in its own work.**

**One claim this pass can no longer verify, and says so rather than asserting it.** The `effective_from` migration states that no statutory date was lost. Round 2 pointed out that the pre-migration column values survive nowhere in the workspace — there is no version control here — so the claim is unverifiable by anyone, including this pass. What round 2 could do was test the dates now named in the notes for plausibility: 218 name a date, 41 distinct values, and only four could not be matched to a history line in the held corpus, three of them explained. The fourth, **2020-07-01** in two rows, is unexplained, and both rows now say so.

### Round 2's own limits, in its own words

It could not reach leginfo either, so nothing was re-fetched and a file mistranscribed at the browser pane remains invisible to both rounds. It sampled 13 of about 30 §6 findings, 5 of the eight §4 California items' assertions, and 25 of the 218 named statutory dates. It did not test the 17 proposed SOP changes or the 34 proposed topic questions on their merits, did not check §10's variables against the builder's declared set, did not verify that each "N units, all reviewed" figure above zero was in fact reviewed, and did not search regulations, ordinances or case law. It left a re-fetch list of eight provisions, all of which this pass has verified against its own copies and none of which it could re-read, because the two rounds exhausted the budget the prompt set.

**Three things it flagged that are left open deliberately, and are recorded here rather than fixed.** The checker accepts a citation anywhere within 220 characters of a quote, which is loose enough that a citation belonging to a neighbouring quote could satisfy it — round 2 found no actual misattribution among the 1,378 quotes whose citation sits within four characters, and 0 in the wrong section, but the loose window is why identity cannot be checked mechanically for the other 819. The checker scans `notes` and never `bodyText` or this log. And `edu-no-rent-tax-ca`, `edu-no-tax-escalation-ca` and `edu-no-property-tax-rent-disclosure-ca` claim absences over the Revenue and Taxation Code, which is not held and was not fetched — **given the Civ. Code § 1499 lesson, that is the same shape of risk, and round 2's recommendation to fetch before sync rather than rely on a boundary sentence is the right one.** All three are now proposed SOP changes or §6 items rather than silent.

### One thing round 1 asked for that could not be done

It listed quotes it wanted re-fetched from the live site. All were resolved except by re-reading: Gov. Code § 66323's fire-sprinkler subdivision was re-opened on leginfo and **confirmed as (d)**, with the fetched file rewritten to carry (b)–(e) in full instead of a fragment; Health & Saf. Code § 122350(c)–(h) were not re-fetched, and the honest resolution was to correct the header to say they were never read. Civ. Code § 1940.7(b)'s misspelling "knowledcge" was confirmed on the live page as the Legislative Counsel's own text.

**Checks already passing on every delivered row,** by script, on each assembly:

- the master's exact 17-column header; **record separators CRLF, tested the right way** — the delivered file is byte-identical to a CRLF re-serialisation of its own parsed rows, exactly as the master is. (A first attempt tested for the absence of any bare line feed in the bytes and reported a failure: the master itself carries 6,413 of them inside quoted fields, and 614 active rows have paragraph breaks in `bodyText`, so the test was wrong, not the data.) No duplicate id, none clashing with the master;
- the twelve clause groups for a lease clause, an existing education group otherwise;
- rule 57 — one topic key per row, and no second CA row of the same content type on a topic, tested against the master as well as within the delta;
- rule 55 — a lease clause records a `lease_clause_basis`; California's education rows carry none, which is the state's own convention (91 of 91 existing rows);
- rule 60 — every `{{variable}}` is one the builder already fills, or is declared; no bracket sits next to a variable;
- rule 59 — **2,124 of 2,124 single-quoted statutory passages in the delivered notes were found word for word in a source read this pass, each with its citation beside it.** The checker allows editorial elisions (`...`, each fragment in order in the same unit), normalises subdivision spacing and typographic apostrophes, and collapses newlines so a quote written on one line matches a statute whose text wraps.

**The quote checker earned its place twice in batch B01, by catching two of my own misquotations before delivery:** I had rendered Civ. Code § 1947.1(b)(1) as *"The parking shall not be included in any residential rental agreement"* when it reads *"Off-street parking accessory to a qualifying residential property shall not be included in any residential rental agreement and shall be subject to a rental agreement addendum or provided in a separate rental agreement."*; and Cal. Const., art. XV, § 1 as *"account after demand"* when it reads *"on accounts after demand"*. Both are corrected in the delivered rows.

---

## §6 Findings on existing rows

*Reported, not fixed — the scope fence forbids editing existing rows. Claude Code fixes these at sync.*

1. **`security-deposit-use-ca` understates what the deposit may cover, for a submetered property.** The clause tells the tenant: *"Landlord may apply the Security Deposit only to: unpaid Rent; repair of damage to the property, beyond ordinary wear and tear…; cleaning needed when the tenancy ends…; and Tenant's failure to restore, replace or return personal property or appurtenances…"* — the four purposes of Civ. Code § 1950.5(b). But Civ. Code § 1954.207(c) adds a fifth for submetered water: *"The landlord may, at his or her discretion, deduct an unpaid water service bill from the security deposit during or upon termination of a tenancy, if the last water service bill showing the amount due is attached to the documentation required by Section 1950.5."* The word "only" makes the clause wrong rather than merely incomplete on a submetered property, and it gives away a right the landlord has. Suggested wording: after the fourth purpose, add *"; and, where water service to the property is submetered, an unpaid water service bill, if the last bill showing the amount due is attached to the documentation this Lease and California law require"*. (Found by battery CA-B01-006, which returned Civ. Code § 1954.207 as the only hit for a utility-service deposit.)
2. **`edu-security-deposit-cap-ca`'s open item is now closed elsewhere.** Its notes say *"The service-member written-explanation duty for above-standard security (§ 1950.5(c)(4)) is noted in the source row and still undrafted"*. It is now drafted, as `service-member-additional-security-ca` plus `edu-security-deposit-standards-ca`. The sentence should be updated to point there rather than left reading as an open gap.

---

3. **`water-submeter-disclosure-ca` omits half of Civ. Code § 1954.204(i), so the disclosure it carries is incomplete on the face of the statute.** The clause says only *"If Tenant believes that the submeter reading is inaccurate or the submeter is malfunctioning, Tenant shall first notify Landlord in writing and request an investigation."* But the same subdivision requires two further things: *'A tenant shall be provided with notice that if an alleged submeter malfunction is not resolved by the landlord, a tenant may contact the local county sealer and request that the submeter be tested.'* and *'Contact information for the county sealer shall be included in the disclosure to the tenant.'* (Civ. Code § 1954.204(i)). This is a prescribed pre-signing disclosure whose rights cannot be waived (§ 1954.215), so the omission is not cosmetic — a landlord using the clause as drafted has not made the disclosure the statute requires. **The row's notes are wrong too**: they state that all ten items are covered. Suggested wording, appended to the existing sentence: *"If Landlord does not resolve an alleged submeter malfunction, Tenant may contact the local county sealer and request that the submeter be tested. The county sealer for the county in which the Premises are located may be reached at [insert the name, address and telephone number of the county sealer for the county where the Premises are located]."*
4. **`edu-water-submeter-billing-ca` omits Civ. Code §§ 1954.210 and 1954.212 — the deemed-usage rules — and **an earlier version of this finding added "and its own notes record them as unread". Round 2 of the independent check found that false: that row's only unread items are Pub. Util. Code § 739.5 and Wat. Code §§ 537-537.5. The row whose notes record §§ 1954.207 to 1954.212 as unread is `landlord-entry-ca`.** Anyone acting on this finding should not go looking for a sentence that is not there; the omission itself is real and verified.** They have now been read whole. Where a tenant reports a leak or a fixture that will not shut off and it is rectified more than 21 days later, *'the tenant's volumetric usage for any month or months that include the period between 21 days after the initial investigation and the repair shall be deemed to be fifteen dollars ($15) or actual usage, whichever is less'*, with a landlord's option of *'fifty cents ($0.50) per day for those days between the two submeter readings or actual usage, whichever is less'* (§ 1954.210(c)); and *'If the condition remains unrectified for 180 days after investigation, no further volumetric usage charges may be imposed until the condition is repaired.'* (§ 1954.210(d)). Importantly for the landlord, neither applies where entry notice was given and *'the tenant has failed to provide access to the dwelling unit'* (§ 1954.210(e)). Section 1954.212 adds the missing-reading rule (75 per cent of a three-month average, nothing after six months). The existing row states the 21-day repair duty but not the billing consequence of missing it, nor the access defence — real money, and nowhere in the California set.
5. **`edu-lead-hazards-ca` carries an open flag this pass can now close from the statute.** Its notes say the certification inference is *"an inference from the heading alone"* and *"Do not tell a landlord certification is required on the strength of this."* The inference is right and needs no regulation: Health & Saf. Code §§ 105250–105257 were read whole, and § 105254(a) states it — *'The following persons engaged in the following types of lead construction work shall have a certificate:'* — covering paid lead hazard evaluations in residential buildings, abatement plan design, and work designed to reduce or eliminate lead hazards *'on a permanent basis (to last 20 years or more)'* (§ 105254(a)(1)–(3)). The flag should be replaced with the citation.

6. **No California row carries the pool compliance-form filing duty.** The Swimming Pool Sanitation and Safety article expressly reaches apartment-complex pools (Health & Saf. Code §§ 116049.1(a), 116064.2(a)(4)(B)) and imposes a duty to file a compliance form with the county (§ 116064.2(h)). `edu-pool-safety-ca` now states it; nothing in the existing California set did.

---

7. **`edu-screening-fee-ca` is incomplete on the applicant-notice side, and the gap is a duty a compliant-looking workflow will miss.** The row carries Civ. Code § 1950.6 in full, including the § 1950.6(f) duty to give the applicant a copy of any consumer credit report within seven days. It says nothing about the Investigative Consumer Reporting Agencies Act duties that attach to the *other* kind of screening report, both of which name tenancies expressly. Where the landlord orders an investigative consumer report — character, general reputation, personal characteristics, mode of living — rather than or in addition to a credit report, *'If an investigative consumer report is sought in connection with the hiring of a dwelling unit, as defined in subdivision (c) of Section 1940, the person procuring or causing the request to be made shall, not later than three days after the date on which the report was first requested, notify the consumer in writing that an investigative consumer report will be made regarding the consumer's character, general reputation, personal characteristics, and mode of living'* (Civ. Code § 1786.16(a)(3)), with the agency's name and address and a summary of § 1786.22; and the procurer must *'Provide the consumer a means by which the consumer may indicate on a written form, by means of a box to check, that the consumer wishes to receive a copy of any report that is prepared'* (Civ. Code § 1786.16(b)(1)). **The clock runs three days from the request, not from receipt, and it runs whether or not the application is approved.** Separately, where *'insurance for personal, family, or household purposes, employment, or the hiring of a dwelling unit involving a consumer is denied, or the charge for that insurance or the hiring of a dwelling unit is increased'*, *'the user of the investigative consumer report shall so advise the consumer against whom the adverse action has been taken and supply the name and address of the investigative consumer reporting agency making the report'* (Civ. Code § 1786.40(a)) — **an increased charge is adverse action**, which lines up with the Civ. Code § 1946.9(d)(2)(B) point already in `edu-screening-abuse-protections-ca`: approving on worse terms is adverse action under two separate California statutes. The material is in `edu-tenant-records-ca` (this pass, topic key `tenant-records`) because rule 57 bars a third California education row under `tenant-screening`, but it belongs in the screening-fee row too; Claude Code should decide where it lives.
8. **`edu-criminal-history-screening-ca` names two screening-restriction regimes; there is a third, statutory and unmentioned.** Civ. Code § 1786.18(a) limits what an investigative consumer reporting agency may report: *'Unlawful detainer actions where the defendant was the prevailing party or where the action is resolved by settlement agreement'* (Civ. Code § 1786.18(a)(4)); *'Records of arrest, indictment, information, misdemeanor complaint, or conviction of a crime that, from the date of disposition, release, or parole, antedate the report by more than seven years'* (Civ. Code § 1786.18(a)(7)), which *'shall no longer be reported if at any time it is learned that, in the case of a conviction, a full pardon has been granted or, in the case of an arrest, indictment, information, or misdemeanor complaint, a conviction did not result'* (Civ. Code § 1786.18(a)(7)); and *'Medical debt, as defined in Section 1785.3'* (Civ. Code § 1786.18(a)(9)). Subdivision (a)(4) has no analogue in the existing notes and is squarely a tenant-screening rule: **a settled or landlord-lost eviction may not appear in an investigative consumer report at all.** § 1786.18 was amended by Stats. 2024, Ch. 520, Sec. 5 (SB 1061), effective 2025-01-01, adding the medical-debt limb, so it is also a legal-watch candidate. A vendor report containing any of these is unlawful content and acting on it is exposure.
9. **`edu-emergency-assistance-right-ca` is materially incomplete, and the omission is the part that actually constrains a landlord.** The row states Civ. Code § 1946.8(b)–(c) in one sentence. It omits § 1946.8(f)(2), which is the operative rule: filing an unlawful detainer **within 30 days** of anyone summoning emergency assistance, on a notice treating the call as a lease violation or a nuisance, creates a **rebuttable presumption that the tenant has made out the defence** — triggered by the filing date alone, not by the landlord's motive. It also omits § 1946.8(d), under which no documentation of the emergency may be demanded, and § 1946.8(e), which voids a waiver. A landlord who reads only the existing row will not know that the calendar, not the merits, decides who carries the burden.
10. **No California row carries Civ. Code § 1947.5's conditional lease-content duty for a smoke-free property.** Item 4 above establishes that the shared `smoking-policy` clause satisfies § 1947.5(b)(1) as drafted, and that § 1947.5(b)(2) makes a mid-tenancy change a change of terms requiring § 827 notice. Nothing in the California set records either point, and `smoking-policy` is not in `missing-topics-CA.md` — California has the shared clause — so this pass could not add an education row for it without breaching the scope fence. Flagged for Claude Code: California warrants an `edu-smoking-policy-ca` row under the established clause-plus-education pattern of rule 57.

11. **`edu-rent-increase-notice-ca` relies on the wrong statute.** Its notes list Code Civ. Proc. § 1010.6 as a relied-on citation. That section governs **electronic service of papers in a filed action**; it has nothing to do with serving a rent-increase notice. Civ. Code § 827(b)(1) gives only personal delivery or mail under Code Civ. Proc. § 1013, and Civ. Code § 1633.3(c) bars an electronic record as a substitute for a § 1162 notice. The body of the row is right; the citation should be struck.
12. **`edu-termination-notice-periods-ca` omits Civ. Code § 1946 entirely**, and with it a genuine rule 54 opportunity: the parties may agree, **at the creation of the tenancy**, on a notice period of not less than seven days. It also does not record that **§ 1946's seven-day option is unavailable for a dwelling**, because § 1946.1 opens "Notwithstanding Section 1946" and fixes 60 or 30 days with no shortening. The contrast with § 827(a)'s seven-day *terms-change* option is exactly what a landlord gets wrong.
13. **`edu-no-foreclosure-disclosure-ca` carries `rule_type REQUIRED` on a confirmed absence**, and leaves Code Civ. Proc. § 1161b unread; batch B10 now supplies it.
14. **`edu-casualty-termination-ca` has a citation attached to the wrong section in its body** — it cites Civ. Code § 1932 for what § 1933 does.
15. **`edu-abandonment-damages-ca` still records Civ. Code § 1951.4 as unread**; batch B10 read it whole.
16. **Two statutes no California row carried, both landlord-critical.** Civ. Code § 1952(c): taking possession under a § 1174 judgment **destroys the § 1951.4 continue-the-lease election** unless the tenant obtains § 1179 relief — a pure sequencing trap sitting between two existing rows. And Code Civ. Proc. § 715.050: a writ of possession is enforced **despite notice of a tenant's bankruptcy filing**, except as to money.
17. **`water-submeter-disclosure-ca`, one more defect, and it is a search trap worth knowing.** Civ. Code § 1954.204 is printed with `l0-point` — a lowercase letter L for the digit 1 — in the Legislative Counsel's own text, so any digit search for "10-point" misses that type-size floor entirely.

18. **`residential-use-only` (CA-tagged) is wrong as written.** Its ban on "any commercial purpose" is void against a licensed family child care home under Health & Saf. Code § 1597.41(a), (c), (f), and the row carries no CA segment saying so. Replacement wording is in the answer file. This is likely to repeat in **every** state with an SB 234 analogue, so it is a library-wide check rather than a California fix.
19. **`edu-towing-ca` can be completed**, and it misses a duty on the landlord: the limbs its notes record as unread are now read, and Veh. Code § 22658(f) requires the landlord's own one-hour telephone notice to law enforcement.
20. **`ev-charging-ca` restates a statutory ceiling as the landlord's demand.** The clause requires liability coverage "in an amount not exceeding ten times the annual rent", but § 1947.6(h) is not a cap on what a lessor may require — **round 2 of the independent check corrected that framing, and it matters for the rewrite.** The subdivision imposes the duty on the tenant with a ceiling on its size: *'The lessee and each successor lessee shall obtain personal liability coverage, as described in Section 108 of the Insurance Code, in an amount not to exceed 10 times the annual rent changed for the dwelling'* (Civ. Code § 1947.6(h)). **And any rewrite must carry § 1947.6(i), which the earlier version of this finding omitted: 'Notwithstanding subdivision (h), no insurance shall be required of a lessee installing an electric vehicle charging station if both of the following are satisfied'** (Civ. Code § 1947.6(i)) — a certification-based carve-out that removes the insurance requirement entirely. The criticism of the clause stands: as drafted it demands nothing enforceable while reading to a tenant as a demand for ten times the rent. As drafted it demands nothing enforceable while reading to a tenant as a demand for ten times the rent. A `CONSTRAINED_TERM` rewrite with `{{ev_liability_coverage_amount}}` is proposed in the answer file. Its notes also say "FOUR EXEMPTIONS" for § 1947.6(b), which has five paragraphs. *Drafting note for anyone quoting § 1947.6(h) later: the statute itself reads 'the annual rent **changed** for the dwelling' — keep the typo or the quote check fails.*
21. **The two-version problem is four times larger than the brief said, and three have already switched.** Scanning every held section for the loader's own two-versions marker returns **12** sections, not 4. Three are SB 170 pairs whose first version went inoperative **1 July 2026**, so the live text today is the **second** version — the opposite of the brief's formula. The important one is **Health & Saf. Code § 50093**, the income definition that Civ. Code §§ 1946.2(e)(9) and 1947.12(d)(1) rest on; also Gov. Code § 12901 (under every fair-housing row) and Civ. Code §§ 2924f–2924h (under the foreclosure rows). Civ. Code § 1181.1 is a third pattern the brief does not describe at all — *conditionally* operative, so no date tells you which version is live.
22. **Rows in other states assume no landlord's lien exists — and the count needs restating.** The finding first said nineteen; round 2 of the independent check could not reproduce that figure and found **45** master rows asserting that no such lien exists on a plain search. Either the original count applied a narrower rule that was never stated, or it was wrong; the safe reading for sync is that the assumption appears in **tens** of rows, not nineteen, and that the counting rule has to be fixed before anyone works through them. California has one: Civ. Code § 1861a gives apartment-house, cottage and bungalow-court keepers a lien on tenants' goods, enforceable only judicially and with judgment-exempt property carved out. Raised as a topic question as well, because the assumption may be wrong elsewhere too.
23. **California puts the code-order notice duty on the enforcement agency, not the landlord** (Health & Saf. Code § 17980(d)(2)). The pressure on a landlord comes instead from the Civ. Code § 1942.4 rent-demand bar, the Health & Saf. Code § 17975 relocation benefits, and the loss of vacancy decontrol under Civ. Code § 1954.52(d) — stated so no one drafts a notice duty California does not impose.
24. **An owner-occupant who rents an ADU is outside just cause but inside the rent cap.** Civ. Code § 1946.2(e)(5)(A) includes an ADU in the owner-occupied exemption; Civ. Code § 1947.12(d) has no counterpart and § 1947.12(d)(6) excludes one. A real asymmetry, and not recorded anywhere in the California set.

25. **`edu-no-rent-receipt-duty-ca` — now corrected in this pass's own delta, and recorded here because the defect was the same shape as several in this list.** It claimed an absence proved only within the tenancy law and missed Civ. Code § 1499. See decision 27 above. No existing library row is at fault; this entry is a note against the pass itself.
26. **`edu-landlord-registration-ca` answers registration but not the "precondition to a possession judgment" limb** the collector topic names. Battery CA-B14-011 found nothing in the held corpus conditioning a possession judgment on registration, licence or code compliance — but Corp. Code § 2203(c) and Rev. & Tax. Code § 23301 condition it on the landlord *entity's* good standing, which is a different subject and is now carried by `edu-confirmed-absences-outside-title-ca`.
27. **`landlord-entry-ca` lists two sections as unread that are not inert.** Civ. Code § 1954.211 is a separate entry grant whose subdivision (b) expressly closes § 1954(d)(3)'s oral route for reading a submeter, and Civ. Code § 1954.215 voids any waiver of that whole chapter — a second anti-waiver the row does not cite. Proposed notes wording is in the answer file; nothing was touched.
28. **`edu-no-periodic-inspection-ca`'s "only inspection" sentence overstates the absence** — Civ. Code § 1954(a)(5) and (6) are further entry grounds.
29. **`edu-no-habitability-statement-ca`** — the absence is right, but Civ. Code § 1942.1 ¶2 *permits* the statement and makes setting it out the price of the arbitration option, which the row does not say.
30. **`edu-no-clra-rent-pricing-ca` needs the same treatment for a second statute.** It closes the CLRA route for leases on Civ. Code § 1761. The Consumer Contract Awareness Act has a **broader** "Goods" definition (personal property, tangible and intangible: Civ. Code § 1799.201(f)) and the same conclusion has to be reached separately for it — which this pass did, in `edu-plain-language-ca`.

## §7 Findings for other states

None yet.

---

## §10 New `{{variables}}`

| Variable | What the landlord supplies | States |
|---|---|---|
| `{{additional_security_amount}}` | the part of the security charged above the landlord's standard or advertised amount | CA |
| `{{additional_security_return_date}}` | the date that additional security is returned, within six months of the start of residency | CA |
| `{{tenant_maintenance_scope}}` | the portions of the property the tenant undertakes to improve, repair or maintain | CA |
| `{{tenant_maintenance_rent_credit}}` | the monthly rent reduction that is the consideration for that work | CA |
| `{{rule_change_notice_days}}` | the days' written notice the landlord will give before a new or amended house rule takes effect. **Deliberately not set to a statutory number**: California has no house-rules statute, but a change to the terms of a periodic tenancy needs Civ. Code § 827 notice, so the row tells the landlord not to set it below 30 | CA |

`{{unpaid_amount_interest_rate}}` was **reused**, not created (rule 60).

---

## Proposed SOP changes

1. **Rule 24 — say that a corpus the downloader could not validate may be validated by the pass, and how.** California's corpus shipped with an explicit weakness: leginfo challenged every scripted request, so Claude Code could compare only five pages saved before the challenge. The built-in browser pane reaches the same site with no challenge, and same-origin `fetch` from it drives both the section and the whole-node endpoints. Proposed: where a corpus README records a source as unreachable, the pass tries that source through the browser pane before accepting the limitation, and records the result in §1.1 either way — here it turned "five pre-challenge pages" into eight live byte-for-byte matches and opened every section outside the 72 held nodes.
2. **Rule 36 — a fetched section is not "Not located".** The rule's Not-located verdict assumes the pass cannot reach what the corpus lacks. Where it can, the better answer is to read the section and say where it came from. Proposed: Not located is for a source that cannot be reached by *any* channel the pass has, and a pass that fetches outside its corpus keeps those reads in a directory the quote checker indexes beside the corpus, each file carrying its citation, history line and source URL.
3. **Rule 19/36 — automatic topic triage by derived keywords does not work; say so.** Screening 223 topics with keywords derived from their own names and keys classified 221 as "in corpus", because single words like "fee" and "notice" appear in almost every section. Proposed: a one-line warning that a keyword screen derived from a topic's *name* is not a substitute for the subject screen rule 36 describes, and that batching topics by the statute cluster that answers them is what makes one chapter read serve many.
4. **Rule 59 — specify the quote checker's normalisation, because two plausible omissions let real misquotations through.** A checker that collapses only spaces and tabs will fail every correct quote of a statute whose text wraps, which hides the quotes that are genuinely wrong among dozens of false alarms; and one that looks for a citation only *after* a quote flags every history line. Proposed: the checker collapses **all** whitespace including newlines, normalises subdivision spacing and typographic apostrophes, accepts a citation immediately before or after the quote, and supports `...` elision by requiring each fragment in order within one unit. With those four, batch B01 went from 104 flags to 0 — and the two flags that survived the first three were both real errors of mine.
5. **Rule 27/80 — helpers should hand back rows as data, not as code.** Writing notes as concatenated Python string literals makes the SOP's own quoting convention (single quotes for statute wording, double for library text) collide with the host language's string delimiters; four separate syntax failures in batch B01 came from nothing but that. Proposed: canvass helpers write each row as a JSON object and the main pass assembles, so no escaping can corrupt a quotation and the quote checker sees exactly what will ship.

6. **Rule 27 — run the helper brief's own output path, not only its commands.** This pass ran every command in the canvass brief once as written before it shipped, as rule 27 requires, and still shipped a brief whose §8 self-check could not pass: the assembler skipped only `tag` objects, so it raised `KeyError: 'id'` on the finding and proposal objects §2 told helpers to put in the same array. Both helpers hit it; one worked around it with a local copy and reported the defect. Proposed: the pre-ship check covers a **sample output file containing one of every object kind the brief asks for**, not just the commands in isolation — a brief that asks for a shape its own validator rejects is a reproducibility defect of exactly the kind rule 80 says to fix before delivery.
7. **Rule 36 — say that a queued section does not excuse an unanswered topic.** A helper reported the gap: when a subject screen returns "outside the held nodes" and the section is queued, the topic still needs a row, and the row still needs a verdict once the section arrives. Proposed: state that queuing is a step inside answering a topic, never an answer to it, and that the pass's completeness figure counts topics answered, not topics attempted.

8. **Rule 26 — the tag-before-you-draft step and the §8 self-check currently contradict each other, and the contradiction silently suppresses every tag.** Rule 26 permits tagging an existing shared row with CA where it answers a missing topic, changing only `states` and `notes`. But the quote checker revalidates a tagged row's **entire inherited notes** against the state's own corpus, and a shared row's notes carry the Kansas, Tennessee, Virginia, Iowa, New Mexico and Montana segments from earlier passes — none of which can be found in the California corpus. The B08 helper drafted and tested a tag of `extended-absence-notice-ks`, which reads correctly for California on the merits, and got 18 unfixable failures; since the scope fence forbids editing the existing row's text, no tag can pass the self-check. That is almost certainly why batches B01–B08 shipped **zero tags** between them. Proposed: the quote checker validates **only the segment the pass adds**, and a tagged row's inherited notes are out of scope for it — and the SOP says so, because a rule that cannot be satisfied without breaching another rule reads to a canvasser as a rule not to use.

9. **Rule 54 — say that a statute which preserves "whatever the lease provides" is itself the authority for a clause.** Two provisions in this pass do exactly that and would otherwise read as mere savings language: Code Civ. Proc. § 1265.160 preserves the parties' own condemnation terms, and Civ. Code § 827(a)(1) authorises a written agreement cutting the terms-change notice to seven days. Proposed: rule 54's test adds a third trigger — a statute that expressly defers to the lease on a subject is an invitation to draft on that subject, and the pass should say so even where it leaves the drafting to a later one.
10. **Rule 26 again, from a second helper, on the merits rather than the tooling.** `electronic-notice-ma` cannot be tagged for California at all: Civ. Code § 1633.5(b) provides that an agreement to transact electronically 'may not be contained in a standard form contract that is not an electronic record' and 'may not be conditioned upon' the contract. A clause sitting inside the printed lease therefore creates no agreement in California. California's instrument has to be a separate optional addendum — a shape the library has no row for. Proposed: the tag step should ask not only whether the text is *correct* for the state but whether the *vehicle* is, and the library needs a row shape for a term that must stand outside the lease.
11. **Rule 59 — a quoted index heading is not statute wording, and the checker should say which it wants.** Two rows in this pass quoted a heading from the official whole-code table of contents to prove a repeal. Quoted as statute wording it fails the checker, because the index is not a statute unit; quoted as library text it loses the fact that the words are the Legislative Counsel's. Proposed: the convention names a third case — material quoted from the official index goes in double quotes with "(LAW_TOC_TBL)" beside it — and the checker ignores those. Related and smaller: a history line quoted inside a row needs the same treatment, since it is not operative text either.

12. **Rule 27 — `assemble.py <BATCH>`, the brief's own §8 self-check command, silently truncated the cumulative findings file.** The `json.dump` of the side objects sat outside the write branch, so a batch-scoped run replaced `findings.json` with that batch's objects alone. The B12 helper caught it, measured it (52,491 bytes down to 11,779) and repaired it by running the assembler with no argument. **My defect, and the second of this shape** — the first was the `KeyError` on those same side objects. Fixed: a batch-scoped run now leaves the file alone and says so. Proposed: rule 27's pre-ship check covers not only that each documented command *runs* but that running it does not damage state another command produced — a self-check that corrupts the artefact it is checking is worse than no self-check.
13. **Rule 59 — the quote checker opened false quotes on a possessive apostrophe after a non-alphanumeric character.** `` `edu-abandoned-property-ca`'s procedure `` and `[1950.5]'s clock` both satisfy the "not preceded by a letter or digit" guard, and the existing in-word exception does not cover them because the preceding character is a backtick or a bracket. Once a correctly paired quote appeared later in the same row, the false opener swallowed everything between and the real quote was reported as unfound — three such flags in one row. Fixed by also refusing to open a quote on an apostrophe immediately followed by a possessive "s": the count went **up** by four afterwards, which is the right direction, because the fix recovered real quotes rather than suppressing checks. Proposed: the convention names this case explicitly, since a row that cites its own library rows by id in backticks is the normal case, not an edge one.
14. **Rule 24 — a `fetched/` file's citation header must be validated against the loader before it is written, not after.** Two files this pass were rejected on load for using a citation form the loader did not know (`Labor Code` for `Lab. Code`, and `Fish & G. Code`), and in both cases the file had already been written and the quotes already drafted against it. The loud failure is the right design and it worked, but the cost is a round trip each time. Proposed: the fetch writer resolves the code name through the loader's own table as it writes, and fails at write time with the list of accepted forms.

15. **Rule 19 — say that a battery proves an absence only within the corpus it ran over.** This is the one place in this pass where the method produced a *wrong answer* rather than a cautious one: a confirmed absence on rent receipts rested on a battery across the landlord-tenant statutes, and the right turned out to live in the general obligations part of the Civil Code (Civ. Code § 1499, enacted 1872). The battery was correct and the conclusion was not. Proposed: for any topic whose subject is a **general contract or obligations right wearing a tenancy label** — receipts, acknowledgments, notices, interest, set-off, assignment, agency — rule 19 requires a second screen over the obligations and contracts titles before an absence may be claimed, and rule 36's subject screen is run over *both*. The tell is that the topic could be stated without the words "landlord" or "tenant".
16. **Rule 24 — a loader that aborts on one bad file takes down every concurrent worker.** `fetched/FGC_2016.txt` was written with a code name the loader did not know, and the loader's `SystemExit` meant **every** script importing it failed for **every** helper then running — it blocked the middle of two batches, and one helper had to rebuild a shadow corpus to continue. The loud failure was the right instinct and it caught two real header errors, but the blast radius was wrong. Fixed two ways: the loader now skips an unparseable file with a warning to stderr and records it under its skipped-groups list, so the failure surfaces at the row that quotes it rather than everywhere at once; and a new `fetchwrite.py` builds the header from the loader's own `CODE_NAMES` table and refuses an unknown code key **at write time**, before any quote is drafted against the file. Proposed: rule 24 distinguishes a **fatal** defect (the corpus itself is not what it claims to be) from a **local** one (one file is unreadable), and says that shared instruments must fail locally.
17. **Rule 19 — anchor a short battery stem, or a count of hits is a false presence.** A helper's `mediat\w*` term returned 19 units, **every one** of them the word "immediate" or "immediately". Had the count alone been reported, the row would have asserted a mediation regime California does not have — a false *presence*, which is the error rule 19's print-every-match discipline is for, and the mirror image of the "defined"/"fine" false positives in batch B06. Proposed: a stem shorter than about six characters is anchored with a word boundary or paired with a second term, and the rule says so.

## Proposed topic questions

1. **`security-deposit-holding`** — add: *"Does the state's real-estate licensing law require an agent or property manager who collects a tenant's deposit to hold it in a trust or escrow account, even where the owner-landlord has no such duty?"* California's answer is yes (Bus. & Prof. Code §§ 10131(b), 10145(a)(1)) while the owner's is no (Civ. Code § 1950.5(d)), and the existing question set asks only about brokers in Puerto Rico's terms.
2. **`deposit-cost-schedule`** — add: *"Does the state instead **prohibit** charging the tenant or the deposit for professional cleaning unless reasonably necessary to restore the move-in condition?"* The present question asks only whether a schedule is permitted, which cannot capture California's answer (Civ. Code § 1950.5(e)(2)(C)).
3. **`unpaid-damages-interest`** — add: *"Does a constitutional usury provision cap the rate the lease may stipulate, and does it reach a landlord's claim for unpaid rent at all?"* California's art. XV, § 1 covers "the loan or forbearance of any money … or on accounts after demand", and whether that reaches unpaid rent is unsettled on the text.
4. **`municipal-utility-lien`** — add: *"Does the answer turn on which class of public supplier serves the property, and do the classes conflict?"* California's four schemes disagree with each other (see §6 above and the B05 batch note), so a single state-level answer is misleading.
5. **`utility-disconnection-notice-authorization`** — add: *"Is the state's third-party notification service limited by the customer's age or dependent-adult status, and does any route exist for a landlord?"* California offers it only to customers 65 or older or dependent adults, which turns a yes into a practical no for the ordinary tenant.
6. **`asbestos-hazards`** — add: *"Does the state's asbestos notification or survey statute define the buildings it covers so as to exclude ordinary residential rental property?"*
7. **`portable-cooling-device`** — add: *"Has the state given a cooling-device right to mobilehome or manufactured-housing residents without extending it to ordinary tenants?"*
8. **`window-guards`** — add: *"Does the state regulate security or burglar bars — labelling, a safety release mechanism, a bar on unopenable coverings — rather than window guards as such?"*

7. **`portable-cooling-device`** — add: *"Has the state given a tenant a right to install a portable cooling device, and does any statute set a maximum indoor temperature for a rented dwelling?"*
8. **`window-guards`** — add: *"Does the state regulate security or burglar bars rather than child window-guards — and if so, does it require them to **open** from the inside rather than requiring them at all?"* California's answer inverts the topic as drafted (Health & Saf. Code §§ 17958.4, 13113.9).
9. **`religious-cultural-display`** — add: *"Does the religious-display statute borrow its definition of 'landlord' from an unrelated section, and does the companion common-interest-development section cross-reference the wrong statute?"* California's Civ. Code § 1940.45(c)(1)(D) defines "property owner" by reference to Civ. Code § 1940.8.5 — the **pesticide-notification** section, whose definitions are expressly "For purposes of this section" — and Civ. Code § 4706(a) opens *'Except as restricted in Section 1940.5'*, the **waterbed** section, where § 1940.45 was plainly intended. Both § 1940.45 and § 4706 were added by the same act (Stats. 2019, Ch. 154, SB 652).
10. **`student-housing`** — add: *"Is the state's student-housing rule an **exemption** rather than a duty, and does it require the institution to both own **and** operate the housing — so that privately owned or master-leased student buildings get no benefit from it?"* California's Civ. Code §§ 1946.2(e)(3) and 1947.12(d)(2) exclude *'Dormitories owned and operated by an institution of higher education or a kindergarten and grades 1 to 12, inclusive, school'* from both just cause and the rent cap, conjunctively.
11. **`source-of-income`** — add: *"Does a separate statute about third-party rent payments contain a carve-out saying the landlord need not enter into a housing-assistance contract, and is that carve-out confined to its own statute rather than qualifying the discrimination ban?"* California's Civ. Code § 1947.3(a)(3)(E) says "in this paragraph" and does not touch Gov. Code § 12955.
12. **`law-enforcement-cooperation`** — add: *"Does a statute create a rebuttable presumption against the landlord based on **when** an eviction is filed after a call for emergency assistance?"* California's Civ. Code § 1946.8(f)(2) does, on a 30-day clock.
13. **`dv-qualifying-documents`** — add: *"Where a state has more than one abuse-and-violence provision, are the qualifying-document lists identical, and does each freshness limit attach to the document or to the notice?"* California's four lists differ, and only three carry a 180-day limit — Civ. Code § 1941.5(d) has none and accepts a signed tenant statement.
14. **`key-control-policy`** — add: *"Does the state's security-device statute expressly preserve the landlord's general duty of care, so that a key-control failure is litigated as negligence rather than as a statutory breach?"* California's Civ. Code § 1941.3(d) does exactly that, naming Civ. Code § 1714.
15. **`smart-access`** — add: *"Does the state give a domestic-violence survivor a statutory right to have another person's access to a connected device or its user account terminated, and does that duty fall on whoever administers the account rather than on the device's maker?"* California's Bus. & Prof. Code ch. 22948.30–22948.35 (SB 50, eff. 2026-01-01) does exactly this, and it sits outside the landlord-tenant code entirely — a state searched only in its landlord-tenant title will be answered "no" when the answer is yes.
16. **`hazardous-contamination-disclosure`** — add: *"Is the state's hazardous-substance release disclosure confined to **nonresidential** property, and does a mirror provision put the notice duty on the **tenant**?"* California's Health & Saf. Code §§ 78700 and 78705 split exactly that way, and the residential carve-out in § 78705(b)(1) removes only the lease-default consequence, not the duty or the penalty.

17. **`eminent-domain`** — add: *"Does the condemnation statute expressly preserve whatever the lease provides for a taking, and may the **landlord** as well as the tenant petition to terminate on a partial taking?"* California's Code Civ. Proc. §§ 1265.160 and 1265.130 answer yes to both, which turns the topic from an information duty into a drafting opportunity.
18. **`confession-of-judgment`** — add: *"Has the state **abolished** confession of judgment outright rather than merely restricting it, and if so does the abolition reach every court and every contract type?"* California's Code Civ. Proc. § 1132(a) does, from 2023-01-01, with the surrounding chapter repealed.
19. **`plain-language`** — add: *"Does the state have a statute whose **title** promises consumer contract clarity but whose content is a copy-delivery duty rather than a readability standard?"* California's Consumer Contract Awareness Act of 1990 is exactly that, and a pass that stops at the heading will record a plain-language rule the state does not have.
20. **`tenant-bankruptcy`** — add: *"Does state law say whether a writ of possession may still be enforced after notice of a bankruptcy filing?"* California's Code Civ. Proc. § 715.050 does, so the topic is not purely federal.
21. **`infirmity-termination`** — add: *"Does the state's death-of-a-party provision carry an **incapacity to contract** limb alongside death, and is there a separate non-waivable rule for a tenant who moves to a nursing or convalescent home?"* California has both (Civ. Code §§ 1934, 1934.5), so a screen aimed only at senior or disability provisions misses them.

22. **`portable-solar`** — add: *"Does a general solar-access statute void a **lease** term restricting a solar energy system, and is its definition of that term wide enough to include a tenant's portable or balcony panel?"* California's Civ. Code § 714(a) reaches any instrument affecting "any interest in" real property, and Civ. Code § 801.5(a)(2)(A) covers mounting "regardless of whether the feature is on the ground or on a building" — so a state searched only in its landlord-tenant title will be answered "no".
23. **`landlord-lien`** — add: *"Does the state give a residential landlord a statutory lien on the tenant's goods, and is it enforceable only through the courts?"* California's Civ. Code § 1861a does, for apartment houses, cottages and bungalow courts — and **nineteen rows in other states assume no such lien exists**, so this question may be mis-answered across the library.
24. **`home-business`** — add: *"Does the state's home-occupation or cottage-food provision preempt **local zoning** only, or does it also void a contrary lease term?"* California's Gov. Code § 51035 does the first and not the second, while Health & Saf. Code § 1597.41 does both for family child care — the same state, opposite answers, and the distinction decides whether a lease ban is enforceable.
25. **`accessory-dwelling-unit`** — add: *"Does state law impose a minimum rental term on an ADU, and can a junior ADU carry an owner-occupancy condition that prevents letting it at all?"* California answers yes to both (Gov. Code §§ 66323(e), 66333(b)), and the 30-day floor is a duty on the local agency, so no city may permit short-term letting of such a unit.
26. **`single-family-zone-lease-limit`** — add: *"Is the state's lot-split or two-unit scheme closed to a landlord by an owner-occupancy affidavit **or** by a recent-tenancy disqualification?"* California has both (Gov. Code § 66411.7(g)(1) and the three-year tenant-occupancy exclusion), and the second is the harder gate.
27. **`nonresident-owner-agent`** — add: *"Does state tax law name **lessees** as withholding agents for **rent** paid to a non-resident owner, and does it put the liability on whoever holds the money?"* California's Rev. & Tax. Code § 18662(a), (b) and (d) do exactly that, with the rate left to regulation.

28. **`rent-receipts`** — add: *"Does a general obligations or contracts provision outside the landlord-tenant law give a debtor the right to require a written receipt, so that a tenant may demand one even where the tenancy statutes are silent?"* California's Civ. Code § 1499 does, and it defeated a confirmed absence in this pass. **This question should be asked of every state before any rent-receipt absence is recorded.**
29. **`construction-liens`** — add: *"Does the state give a landlord a notice of nonresponsibility for work the tenant commissioned, and what is the clock and the service method?"* California's Civ. Code § 8444(e) requires the notice to be **both posted and recorded within 10 days of knowledge** of the work, and § 8122 makes a no-liens lease clause void against the claimant.
30. **`guarantor-renewal`** — add: *"Is a continuing guaranty revocable by the guarantor as to future transactions, so that a guaranty cannot bind across a renewal by its own words?"* California's Civ. Code §§ 2814 and 2815 answer yes, which makes a fresh guaranty at each renewal the only reliable course.
31. **`binding-arbitration`** — add: *"Does the state's prescribed arbitration-notice format apply to a lease **with an option to purchase** rather than to an ordinary dwelling lease?"* California's Code Civ. Proc. § 1298(a) names leases with options and ground leases coupled with improvements and omits the plain tenancy — so a state answered "no prescribed format" may still have one for a lease-option.
32. **`landlord-liability-insurance`** — add: *"Is the state's insurance cancellation and non-renewal protection limited by the number of dwelling units?"* California's Ins. Code § 675(a)(1) stops at four.
33. **`optional-lease-terms`** — add: *"Does a lease with an option to purchase make the landlord a 'seller' owing the full transfer and natural-hazard disclosure statements **before the option contract is made**, with waiver void?"* California answers yes (Civ. Code §§ 1102(a), 1102.3(b), 1102(c)).
34. **`tenant-portal`** — add: *"Does the state's electronic-transactions act bar an electronic record from standing in for a statutory eviction notice, and say that the agreement to transact electronically may not be varied by agreement?"* California answers yes on both limbs (Civ. Code §§ 1633.3(c), 1633.5(b)–(c)).

---

## Gaps-pass sync review (Claude Code, 2026-10-30)

Merged with `merge-delta.py --base 7b4d302`: 238 new rows (19 lease clauses), no shared rows tagged, nothing refused. All 223 missing topics are answered; the pass delivered no NEEDS_REVIEW rows. California now carries 407 active rows, every one VERIFIED; the new rows carry the canvass date in `effective_from` (SOP rule 70).

**Source used at sync:** the Legislature's official bulk database (pubinfo_2025.zip, loaded October 25, 2026), which Claude Code downloaded to build the corpus, holds every code section in force. Sections outside the corpus were read from it. It confirmed the 261 quotations the pass took from its browser, and showed Pen. Code §§ 288a and 597f and Civ. Code §§ 716 and 2924.85 are no longer in force. No California regulation could be read: Westlaw and the Civil Rights Department challenge scripts. Rows that name a regulation, or list cross-referenced sections as not read, keep that as a stated boundary.

**Rows the pass had left "queued":** all 51 active CA rows that mentioned a queued section were checked; about 30 changed. Among the corrections:
- `edu-eminent-domain-ca`: Code Civ. Proc. § 1265.160 says the lease does govern, so the body now states §§ 1265.110-1265.160.
- `edu-construction-liens-ca`: § 8442(b)'s knowledge test, not consent.
- `edu-service-animal-denial-penalty-ca`: Pen. Code § 365.5 is a misdemeanor; whether it reaches a refusal to rent is a doubt with the cautious course.
- `edu-utility-landlord-account-ca`: Gov. Code § 60371's 10-day notice even for master-metered buildings.
- `edu-no-rent-tax-ca`: Rev. & Tax. Code § 7280's 30-day cap on occupancy tax.
- `edu-fire-sprinkler-duty-ca`: § 13143.2 for pre-1975 multi-storey apartment houses.
- `edu-hazardous-contamination-disclosure-ca`: recorded restrictions bind the tenant (Civ. Code § 1471(b)).
- `edu-conversion-notice-ca`: Gov. Code § 66427.1's notices and purchase right.
- `edu-hoa-ca`: the § 4041 owner notice.
- ADU and SB 9 rules: only units created under § 66323 carry its rental rule; a split is barred only where it "would require demolition or alteration of" recently tenant-occupied housing.

**Findings on existing rows (§6) and the items:** checked against the statute; about 40 changes.
- **Overrides and new rows:**
  - `security-deposit-use-ca`: adds § 1954.207(c)'s submetered-water purpose.
  - `water-submeter-disclosure-ca`: restores five pieces of § 1954.204's required notice that were dropped.
  - `landlord-entry-ca`: its "only" list of entry grounds now includes § 1954(a)(5)-(6) (submeters, balcony inspections).
  - `residential-use-only-ca`: replaces the shared clause for California, whose "any commercial purpose" ban is void against a family daycare home (Health & Saf. Code § 1597.41).
  - New `edu-smoking-policy-ca`: § 1947.5's lease-content duty, cannabis and vaping.
  - `ev-charging-ca`: § 1947.6(h)'s insurance cap, with a new variable.
- **Other fixes:**
  - § 1786.18's limits on investigative reports;
  - § 1946.8's 30-day presumption needs a notice treating the call as a violation;
  - § 1946's seven-day agreement is unavailable for a dwelling;
  - the § 1933 destruction rule;
  - Health & Saf. Code § 105254 (lead), including its July 1, 2027 firm-certification duty;
  - `edu-towing-ca`: the owner's one-hour call to law enforcement (Veh. Code § 22658(f)).
- **`keys` and `hoa-compliance`:** California notes only, no override. § 1953(a) voids only its listed waivers; association fines are capped at $100 per violation, with notice and a hearing (§§ 5850, 5855).
- **`early-termination-ca`:** the 30-day exit carried no price, so a fixed-term tenant could leave owing nothing (Taylor's lesson 2). It is now an option at a flat one month's Rent. Whether § 1671(d) treats that price as damages only case law could settle; the clause works under either reading, since a void fee leaves the tenant where the old text did.

**Edited-after rows:** every row round 2 changed was read in full, and all 1,725 cited quotations in the new rows were checked by script against the corpus and the bulk database: no misquotes. 46 fixes, among them:
- § 1950.5(b)'s "including, but not limited to" list isn't closed by (e)(1), stated as a doubt;
- the § 1947.5(b)(2)/(c) mix-up carried into the rows;
- § 1940.2's $2,000 penalty versus § 789.3's daily damages;
- `edu-portfolio-thresholds-ca` wrongly shut out family-trust owners;
- the owner-occupied duplex exemption kept its conditions;
- pet rent added mid-tenancy is a rent increase;
- SB 611's weekend exclusion is in § 1161(2)-(3), not (4);
- § 1166's 2027 version.

No new clause has guidance outside brackets.

**Spot check:**
- **Statutes checked:** deposits (§ 1950.5 as amended by AB 12 and AB 414), entry (§ 1954), habitability and nonwaiver (§§ 1941-1942.1, 1953), retaliation (§ 1942.5), the Tenant Protection Act (§§ 1946.2, 1947.12; sunset January 1, 2030) and unlawful detainer (§§ 1161, 1166, 1167, 1170.5), across all California rows.
- **Consistency:** consistent apart from the fixes above. `tpa-notice-ca` and `tpa-exemption-notice-ca` match the statutory wording.

**Decisions (§4):** no product questions for Taylor. The `effective_from` difference (statutory dates on the 168 older rows, canvass dates on the new ones) stays: older rows aren't re-audited, and rule 70 governs new and edited rows.

**Other:**
- New `{{variables}}` to M.14: `additional_security_amount`, `additional_security_return_date`, `tenant_maintenance_scope`, `tenant_maintenance_rent_credit`, `ev_liability_coverage_amount`.
- SOP 1.93 takes up the pass's 17 proposals as 6 grouped additions, all [Fwd]. Rule 24's global refusal on an unexplained skip [MN-gaps 6] was kept, not narrowed.
- 23 topic questions added; the ten resting on sections outside the corpus were re-read from the bulk database and corrected first.
- The citations file gained 240 rows.

## Federal row: HUD assistance-animal enforcement change (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12: the assistance-animal clause stays as written (an animal a tenant needs for a disability, trained or not, is an accommodation, not a pet), and a new federal education row, `edu-assistance-animals-federal-enforcement`, is tagged here and in every jurisdiction but CO. It explains HUD's September 17, 2025 withdrawal of its assistance-animal guidance (91 Fed. Reg. 17291) and FHEO's May 22, 2026 memorandum limiting Fair Housing Act charges to trained animals, and what neither changes: the Act, 24 C.F.R. § 100.204, private suits, Section 504 and ADA complaints, and state law. No clause text changed.

## Federal rows: foreclosure tenants, screening-report notice, voucher leases (Claude Code, 2026-11-12)

Taylor's decision 2026-11-12 (Ohio gaps product item P1): three federal education rows are tagged here and in every jurisdiction, each read from the official federal text: `edu-ptfa-foreclosure-tenants` (Protecting Tenants at Foreclosure Act, 12 U.S.C. § 5220 note), `edu-fcra-adverse-action-notice` (Fair Credit Reporting Act adverse-action notice, 15 U.S.C. § 1681m) and `edu-voucher-tenancy-addendum` (Housing Choice Voucher lease and termination rules, 24 C.F.R. §§ 982.308, 982.310). This state's existing rows on these laws stay; no clause text changed.
