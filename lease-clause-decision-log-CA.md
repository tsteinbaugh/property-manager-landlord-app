# California — lease-clause decision log (state #9)

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
