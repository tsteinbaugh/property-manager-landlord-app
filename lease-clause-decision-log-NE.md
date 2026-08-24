## Decision Log: Clause Library Verification Workflow — Nebraska (State #4)

**Date started:** 2026-08-23
**Status:** 🔄 Session 1 in progress — core URLTA scope-defining, prohibited-terms, security deposit, disclosure, entry, notice-and-cure, holdover, DV protections, retaliation, and abandoned-property sections resolved. Whole-library generic-clause audit, gap-discovery sources 2–4, and the named-topic canvass (both passes) still outstanding — see §7.
**Companion documents:** `decision-log-clause-library-verification.md` (Colorado, state #1), `decision-log-clause-library-verification-wyoming.md` (Wyoming, state #2), `decision-log-clause-library-verification-kansas.md` (Kansas, state #3) — same schema, same methodology, same standing rules. This file only records what's specific to Nebraska. Written incrementally, as-you-go, per the standing instruction from the KS log's housekeeping note.

---

### 1. Why Nebraska, and the statute's actual structure

Nebraska is another 1970s URLTA adoption — same family as Kansas — read directly from primary source (nebraskalegislature.gov). Nebraska Revised Statutes Chapter 76, Article 14 turned out to have **two sub-parts**, plus a third, genuinely separate chapter cross-referenced by the core act:

1. **§§76-1401–1449** — the Uniform Residential Landlord and Tenant Act (URLTA) itself. This is the KRLTA/CO-Title-38/WY-Article-12 equivalent, and where essentially every clause candidate came from.
2. **§§76-1450–76-14,111** — a separate Mobile Home Landlord and Tenant Act, structurally mirroring the core URLTA section-for-section. **Deprioritized by product decision** (not an expected use case for target landlords right now, revisitable on demand) — Taylor confirmed (Flag 8, session 1). Same treatment as CO's Mobile Home Park Act, WY's confirmed absence of one, and KS's Mobile Home Parks RLTA.
3. **Neb. Rev. Stat. §§69-2301–2314 (Chapter 69, Article 23)** — the **Disposition of Personal Property Landlord and Tenant Act**, a genuinely free-standing statute (different chapter entirely, not a section inside the core URLTA) governing property left behind after a tenancy ends. Cross-referenced directly by the core Act at §76-1414(5) (tenant-death property) and §76-1441/§76-1446 (post-eviction property). **Confirmed in-scope, not a deprioritize-like-mobile-homes candidate** (Flag 7, session 1) — Taylor asked this be double-checked against CO/WY/KS's own abandoned-property treatment before proceeding. Checked against the consolidated named-topic checklist: CO, WY, and KS all handle abandoned/left-behind property as a section *inside* their own core landlord-tenant act (WY's three alternative notice methods, KS's publication-and-mail requirement at K.S.A. 58-2565). None of them has a free-standing separate-chapter version. **Nebraska's Chapter 69 architecture is genuinely new to this project** — first state where abandoned-property procedure lives outside the core act entirely.

One other structural note with no CO/WY/KS analog: **§76-1408(8) excludes any lease of residential land for a term of five years or more** from the Act entirely. Logged as `edu-five-year-lease-exclusion-ne` — not relevant to Steinoak's typical fixed-term/month-to-month leases, but a real trap if a long-term lease template is ever built.

---

### 2. Resolved: scope-defining and prohibited-terms sections

**§76-1408 (exclusions).** Functionally identical to KS §58-2541: institutional residence, contract-of-sale occupancy, fraternal/social org housing, hotel/motel transient occupancy, employment-conditioned housing, condo/co-op owner-occupancy, and agricultural-use tenancies are excluded. Plus the 5-year-lease exclusion noted above (Nebraska-only). A standard Steinoak lease is squarely inside the Act. No clause needed — this just confirms scope.

**§76-1415 (prohibited provisions) — the single biggest Nebraska-specific finding, same shape as Kansas.** Nebraska voids: waiver of Act rights; confession of judgment; **any attorney's-fee-shifting clause at all, one-way or mutual** (matches K.S.A. 58-2547(a)(3)'s flat ban, stricter than CO's mutual-only rule); and exculpation/liability-limitation/indemnification for the landlord's own active negligence — narrower trigger than KS's broader exculpation ban (Nebraska's is negligence-specific, not any liability limitation). Remedy: unenforceable-only, with actual damages + attorney fees only if the landlord *deliberately* uses a rental agreement containing a known-prohibited provision — same knowledge-based structure as KS.

Logged as `edu-prohibited-lease-terms-ne`, dual-purposed as a standing validation rule the same way CO's and KS's prohibited-terms sections were.

**Flag 1, resolved by Taylor: combine with Kansas.** `default-by-tenant-ks` renamed to `default-by-tenant-ks-ne`, states field extended to `KS;NE`, since both states ban attorney-fee-shifting clauses outright with materially identical effect (K.S.A. 58-2547(a)(3) and Neb. Rev. Stat. §76-1415(1)(c)). No content changes needed beyond the citation update in notes.

**Flag 2, resolved by Taylor: agreed.** Logged as `edu-statutory-attorney-fee-actions-ne` — distinguishes the lease-clause ban (§76-1415(1)(c), never draft a fee-shifting clause) from Nebraska's *mandatory* statutory attorney-fee award in specific causes of action (e.g., a prevailing tenant's fee award under §76-1416(3) for deposit-return noncompliance, confirmed "as a matter of right" by *Lomack v. Kohl-Watts*, 13 Neb. App. 14 (2004), not left to the court's discretion). This is a genuinely new pattern — no CO/WY/KS state had a statute-level mandatory fee award layered on top of a flat clause-level ban.

---

### 3. Resolved: security deposits, disclosure, habitability

**§76-1416 (security deposits; prepaid rent).** Cap: 1 month's rent + optional pet deposit up to ¼ month, not applicable to Nebraska Housing Agency Act properties. Simpler structure than KS's stacked 1/1.5/+0.5 approach, lower than CO's flat 2-month cap. Return: **flat 14 days**, no CO/KS-style 14-day/30-day branching — mailed to last-known address if no forwarding instructions given, and unclaimed balances escheat to the State Treasurer under the Uniform Disposition of Unclaimed Property Act after 1 year (a mechanic with no CO/WY/KS analog). Noncompliance: actual amount + court costs + mandatory attorney fees, plus liquidated damages of 1 month's rent or 2× the deposit (whichever is *less*) if willful/bad-faith. → `security-deposit-return-ne` (supersedes `security-deposit-return`), `edu-security-deposit-cap-ne`, `edu-security-deposit-noncompliance-penalty-ne`.

No NE-specific override needed for `security-deposit-use` — unlike Kansas, Nebraska's statute doesn't restrict applying the deposit to last month's rent, so the existing CO generic (states: `CO`) wasn't extended or overridden this session; revisit during the whole-library audit (§7).

**§76-1417 (disclosure).** Day-one written landlord/manager-identity disclosure, same shape as K.S.A. 58-2551 — same implied-agency consequence for noncompliance. Clean mirror. → `landlord-disclosure-ne`, `edu-disclosure-noncompliance-ne`.

**§76-1419/§76-1420 (habitability, limitation of liability).** Standard URLTA baseline; successor-owner and successor-manager liability shields on written notice to the tenant, same species as CO/KS's identity-change provisions but framed as a landlord-protective liability cutoff rather than a tenant-notification duty (same framing KS used at K.S.A. 58-2554). Not drafted into its own clause this session — the existing generic `landlord-maintenance` clause covers the substantive habitability duty without conflict; the liability-shield mechanic is a landlord-protective legal fact rather than something the lease needs to state. Flagged for the whole-library audit to confirm this treatment is right, rather than deciding unilaterally that no clause is warranted.

---

### 4. Resolved: access, notices, termination

**§76-1423 (access) — matches CO's approach, not WY/KS's.** Nebraska has a **fixed 24-hour written notice** requirement (not "reasonable notice" like WY/KS), plus a requirement that the notice state the entry purpose and a reasonable entry window, and an explicit anti-harassment provision.

**Flag 3, resolved by Taylor: extend `landlords-access` directly.** States field extended from `CO;WY;KS` to `CO;WY;KS;NE` — the clause's built-in 24-hour figure already matches Nebraska's statutory number exactly, no override needed. → `edu-entry-notice-content-ne` for the purpose/window/anti-harassment detail the base clause doesn't capture.

**§76-1425/§76-1431 (noncompliance, notice-and-cure).** Symmetric for both parties: 30-day termination notice with a 14-day cure right for general breach; if substantially the same breach recurs within 6 months, only 14 days' notice is required with no further cure right. Nonpayment: **7 calendar days'** written notice, pay-or-quit — longer than KS's 3-day mechanic. → `edu-tenant-noncompliance-notice-ne`.

**§76-1431(4)–(5) — no CO/WY/KS analog at all.** A landlord may evict on 5 days' notice with no cure right for violent criminal activity, illegal drug sales, or other health/safety-threatening conduct by the tenant, household member, or guest — with an explicit carve-out protecting a DV victim-tenant who's taken protective measures, and an express bar on using this against the victim if both victim and perpetrator are co-tenants.

**Flag 4, resolved by Taylor: logged as `LANDLORD_EDUCATION` only, not a lease clause.** This is a landlord's own statutory remedy that applies automatically regardless of lease language — same treatment as CO/KS's retaliation-prohibition findings (`edu-retaliation-prohibition-[state]`). → `edu-violent-crime-eviction-ne`.

**§76-1424/§76-1432 (extended absence, abandonment).** 7-day advance-notice trigger for anticipated extended absence (same number as KS's `extended-absence-notice-ks`), but a **different abandonment threshold**: total unnotified absence for one full rental period or 30 days, whichever is *less* — not KS's "10-day rent default + substantial belongings removed" test. Explicitly flagged in the CSV notes not to merge the two states' abandonment mechanics. → `extended-absence-notice-ne`.

**§76-1434 (landlord liens).** Distraint and any landlord lien in tenant household goods abolished — clean mirror of K.S.A. 58-2567. → `edu-landlord-lien-abolished-ne`.

**§76-1437 (holdover).** Willful bad-faith holdover: 3× periodic rent or 3× actual damages, whichever *greater* — higher ceiling than CO's "double rent" generic and KS's 1.5× cap.

**Flag 6, resolved by Taylor:** the existing `double rent` figure in the generic `holdover` clause is still valid in Nebraska, since it requests *less* than Nebraska's 3× ceiling — no override needed, no conflict with the statutory maximum. States field extended from `CO;WY;KS` to `CO;WY;KS;NE`. → `edu-holdover-ne` logs the actual 3× figure for landlord awareness, plus a forward-looking note (Taylor's suggestion): once more states are surveyed, revisit the "double rent" baseline and recalibrate the generic clause's default figure to whichever multiplier is most common across all 50 states, rather than keeping Colorado's originating number as the permanent default.

**§76-1439 (retaliation).** Standard structure — code complaint or tenant-union activity trigger, with cost-driven and tenant-fault carve-outs. Clean mirror. → `edu-retaliation-prohibition-ne`.

**§76-1437(2) (no-cause termination).** Confirmed absent, same as CO/WY/KS pattern: no tenure-based just-cause requirement, month-to-month tenancy endable on plain 30-day notice regardless of tenancy length. → `edu-no-for-cause-eviction-ne`. Closes this item on the consolidated checklist for Nebraska in the same session it was first checked (no second-pass miss, unlike the KS session-7 near-miss).

---

### 5. Resolved: domestic violence protections (split clause, Flag 5)

Nebraska's DV protections (§§76-1431.01–76-1431.04) are the richest in this project so far — four distinct procedural mechanics, not a single summary provision the way CO/WY/KS's `dv-housing-protections-[state]` rows were built:

1. **Tenant-victim lease release** (§76-1431.01) — 14–30 day effective window, no post-release liability, doesn't extend to non-household-member co-tenants.
2. **Removal of a co-tenant perpetrator** (§76-1431.02) — structured 5-day process, landlord good-faith immunity.
3. **Mandatory lock change for non-cotenant perpetrators** (§76-1431.03/.04) — 24-hour landlord compliance window, tenant self-help remedy if landlord fails to act.
4. Procedural/documentation details (qualified-third-party definition, cost allocation, perpetrator-specific fee-shifting) that apply across all three.

**Flag 5, resolved by Taylor: splitting is fine.** Built as `dv-lease-release-ne`, `dv-perpetrator-removal-ne`, `dv-lockchange-ne` (all `LEASE_CLAUSE`), plus `edu-dv-protections-procedure-ne` (`LANDLORD_EDUCATION`) covering documentation standards and the perpetrator-specific attorney-fee mechanic (itself a small echo of the Flag 2 pattern — a statutory fee award tied to a specific cause of action, not a general lease attorney-fee clause, so no conflict with §76-1415's ban).

---

### 6. Resolved: abandoned property (Chapter 69, Flag 7)

See §1 above for the scope resolution. Substance of §§69-2303–69-2308: written notice describing the property, delivered personally or by first-class mail to the tenant's (or believed owner's) last-known address; claim window is 7 days after personal delivery or 14 days after mailing; unclaimed property may then be sold at public sale after published notice, per the Act's own notice-content and sale-procedure requirements. → `abandoned-property-ne`.

Explicitly not merged with `abandoned-property-ks` (KS requires publication AND mail, not alternatives) or WY's three-alternative-method structure — three procedurally distinct systems now on file across three states, each flagged in its own CSV notes not to be conflated with the others.

---

### 7. What's still open after session 1

- **Whole-library generic-clause audit** — the full pass through every existing `CO;WY;KS`-style generic clause (extend/leave/flag for NE) has **not** been run yet. Only `landlords-access`, `holdover`, and (via the Flag 1 rename) the `default-by-tenant` lineage have been touched. This is a required exercise before Nebraska can be called complete — not optional, per the standing rule established in the KS log (§12).
- **Named-topic absence canvass** — has not been run at all yet, let alone twice. Every row in `steinoak-named-topic-checklist.md` needs an explicit Present/Confirmed Absent/Not Yet Checked status for Nebraska. A few items were resolved incidentally during the primary-source read this session (no-for-cause-eviction confirmed absent, DV protections confirmed present and richer than any prior state) but that's not a substitute for running the actual checklist row by row, twice, per the KS-session-7 lesson.
- **Gap-discovery sources 2–4** — no real lease-product comparison run yet, no confirmed-absence sweep for radon/bed bug/mold/security-deposit-interest/immigration-status/right-to-call-police/EV-charging/voucher-protection/tenant-death/alternate-housing, per the consolidated checklist's still-open items.
- **`security-deposit-use` generic** — flagged above (§3) as needing a decision during the whole-library audit: does NE need its own override, or does the CO-only generic extend cleanly? Not resolved this session.
- **Landlord liability-shield mechanic (§76-1420)** — flagged above (§3) as a possible gap; decided informally not to need its own clause this session, but that call should be revisited during the whole-library audit rather than treated as final.
- **Mobile Home Landlord and Tenant Act** (§§76-1450–76-14,111) — deprioritized by product decision (Flag 8, confirmed by Taylor), not audited section-by-section. Revisit if customer demand emerges — not a portfolio-relevance call, consistent with the CO/KS framing correction.

**CSV changes this session:** 21 new rows (7 `LEASE_CLAUSE`, 14 `LANDLORD_EDUCATION`), all `VERIFIED`. 1 row renamed and combined (`default-by-tenant-ks` → `default-by-tenant-ks-ne`, states `KS;NE`). 2 generics extended to include NE without override (`landlords-access`, `holdover`, both now `CO;WY;KS;NE`). No duplicate IDs found after edit — checked programmatically. **Running total: 258 rows in the library, 24 NE-tagged.**

---

### 8. Session 2 — whole-library generic-clause audit

Ran the full pass through every existing `CO;WY;KS`/`CO;WY`-tagged generic clause (50 rows total), per the standing rule (KS log §12): decide extend/leave/flag for Nebraska on each.

**43 rows extended directly, no conflict:** all the purely mechanical clauses with no NE-specific statutory number or language — rent mechanics (`rent-payment`, `returned-payments`, `due-at-signing`, `application-of-payments`, `acceptable-payment-methods`), tenant-conduct clauses (`residential-use-only`, `existing-condition`, `permitted-occupants`, `no-disturbance`, `smoking-policy`, `no-sublet-assign`, `no-alterations`, `joint-liability`), utilities (`utilities-responsibility`, `utility-service-continuity`, `utility-payment-evidence`, `services-utilities-provided`, `utilities-paid-by-landlord`, `appliances-included`), boilerplate (`notices`, `governing-law`, `severability`, `entire-agreement`, `addendum-precedence`, `electronic-signatures`), pets/parking/rules groups (`pet-policy`, `pet-insurance-requirement`, `parking`, `assigned-parking-space`, `parking-vehicle-rules`, `storage-space`, `keys`, `guest-policy`, `guest-policy-day-limit`, `common-area-use`, `fire-safety-grilling`, `landscaping-irrigation`, `snow-removal`, `inspection-rights`), and disclosures/misc (`lead-based-paint` — federal, `hoa-compliance`, `tenants-property-insurance`, `assistance-animal-accommodation` — federal ADA/FHA-based).

`tenants-property-insurance` extended with the same reasoning Taylor already applied for KS: its exculpation-adjacent "Landlord is not liable" sentence is even lower-risk in Nebraska than in Kansas, since Nebraska's exculpation ban (§76-1415(1)(d)) is negligence-specific and narrower than Kansas's broader ban — didn't re-flag for Taylor given the KS precedent already settled the underlying judgment call.

**5 rows needed real NE-specific overrides, genuine numeric/mechanical conflicts:**

- **`habitability-baseline-ne`** (supersedes `landlord-maintenance`) — Nebraska's habitability duty (§76-1419) carries a "written or actual notice" trigger and a housing-code-materially-affecting-health-safety ceiling the generic clause doesn't state precisely. → `edu-habitability-duty-delegation-ne` for the tenant-delegation option Nebraska allows.
- **`tenant-duties-ne`** (supersedes `tenant-maintenance`) — Nebraska's tenant-duty section (§76-1421), like Kansas's, explicitly covers guest-caused damage responsibility and a no-disturbance-of-other-tenants duty the generic doesn't capture.
- **`possession-delay-ne`** (supersedes `possession-delay`) — real numeric conflict: the generic gives a 30-day-delay termination right; Nebraska gives a 5-day-notice right immediately, plus rent abatement and a 3x willful-bad-faith damages remedy (§76-1426).
- **`early-termination-ne`** (supersedes `early-termination`) — same conflict pattern as `early-termination-ks`: the generic's flat "10 days to cure" doesn't match Nebraska's actual 14-day cure period (§76-1431(1)), and contractually shortening a statutory cure period is arguably itself a prohibited rights waiver (§76-1415(1)(a)).
- **`surrender-end-of-term-ne`** (supersedes `surrender-end-of-term`) — same rationale as KS: cross-references the detailed `abandoned-property-ne` clause instead of restating vague "to the extent permitted by applicable law" language that understates Nebraska's actual Chapter 69 procedure.

**1 open item flagged, not resolved — mirrors an already-unresolved KS item:** `late-fee` remains `CO;WY`-only, **not** extended to Nebraska. Nebraska's late-rent waiver rule (§76-1433) requires an agreement made *after* the breach to avoid waiver, differently framed from Kansas's "without reservation" standing-clause language — and Kansas's own version of this problem (`edu-late-rent-reservation-fix-ks`) was flagged in the KS log but never actually applied to the `late-fee` clause itself. Logged as `edu-late-rent-reservation-fix-ne` as an explicit open item rather than silently extending the clause on an unverified assumption. **This is a genuine loose end carried forward for both states, not just Nebraska.**

**CSV changes this session (audit):** 43 generics extended to `CO;WY;KS;NE` or equivalent. 5 new NE-specific override rows (`LEASE_CLAUSE`), 2 new education rows (`edu-habitability-duty-delegation-ne`, `edu-late-rent-reservation-fix-ne`). Running total: 265 rows, 74 NE-tagged.

---

### 9. Session 2 — named-topic absence canvass, pass 1

Ran the consolidated checklist (`steinoak-named-topic-checklist.md`) against Nebraska, row by row, per the standing rule requiring a first pass before the required second pass. **This is pass 1 only — pass 2 has not yet been run.** Treat nothing in this section as final until pass 2 confirms it, per the KS-session-7 lesson (a first pass missed an item even when believed complete).

| Checklist item | Nebraska status |
|---|---|
| Radon disclosure (tenant-facing) | Confirmed absent — only CO/FL/IL/ME require this; NE's real §76-2,120 disclosure is a real-estate-sale statute, not a lease requirement |
| Bed bug disclosure | Confirmed absent — 3 separate bills (2020, 2021, 2024) failed to pass |
| Mold disclosure | Confirmed absent |
| Security deposit interest requirement | Confirmed absent |
| Lead-based paint disclosure | Present (federal, applies regardless of state) |
| Move-in written inventory requirement | Confirmed absent (unlike Kansas) |
| Day-one landlord/manager identity disclosure | Present — §76-1417, already resolved session 1 |
| Fair housing protected classes beyond federal | Confirmed absent at state level; Lincoln and Omaha municipal ordinances add sexual orientation/gender identity, Lincoln adds source of income (contested, in litigation) |
| Housing-voucher/subsidy acceptance mandate | Confirmed absent statewide; Lincoln has a local, currently-contested ordinance |
| Deposit amount cap | Present — §76-1416(1), already resolved session 1 |
| Deposit installment-payment right | Confirmed absent |
| Last-month's-rent deposit-application restriction | Confirmed absent (no KS-style restriction found) |
| Successor-owner bound by deposit obligations | Present — §76-1416(5) |
| Attorney-fee-shifting rule | Present, flat ban — already resolved session 1 |
| Confession-of-judgment clause prohibition | Present — §76-1415(1)(b), already resolved session 1 |
| Broad exculpation/liability-limitation prohibition | Present, narrower (negligence-specific) — already resolved session 1 |
| Rental-fee transparency / all-in-pricing law | Confirmed absent — no Honest-Pricing-Act analog found |
| General unconscionability doctrine | Present — §76-1412, built into the base URLTA itself, more directly than KS's separate-statute KCPA backstop |
| Late-rent acceptance waiver rule | Present, real conflict — resolved via the open `late-fee` flag above (§8) |
| Landlord entry notice period | Present, fixed 24-hour — already resolved session 1 |
| Broader landlord-identity-change notice | Present, liability-shield framing — already resolved session 1 |
| Landlord lien/security interest in tenant property | Confirmed abolished — §76-1434, already resolved session 1 |
| For-cause eviction protection after 12 months | Confirmed absent — already resolved session 1 |
| Retaliation prohibition | Present — §76-1439, already resolved session 1 |
| Tenant-death lease-termination protection | Confirmed absent — don't confuse with the unrelated tenant-death property-retrieval mechanic at §76-1414(5) |
| Alternate housing during habitability failure | **Not a clean absence** — Nebraska gives the tenant a self-help substitute-housing remedy (§76-1427(1)(c)), genuinely different architecture from CO's landlord-mandate version |
| Fire/casualty damage — tenant termination/rent-reduction right | Present — §76-1429, already resolved via statute walk |
| Failure-to-deliver-possession tenant remedy | Present — §76-1426, already resolved session 2 (§8) |
| Holdover damages formula | Present — §76-1437(3), 3x — already resolved session 1 |
| Tenant noncompliance notice-and-cure mechanics | Present — already resolved session 1 |
| Nonpayment pay-or-quit notice mechanics | Present, 7 days — already resolved session 1 |
| Abandoned-property disposal procedure | Present, distinct free-standing-chapter architecture — already resolved session 1 |
| DV/SA/trafficking/stalking housing protections | Present, richest version in this project — already resolved session 1 |
| Immigration-status inquiry prohibition | Confirmed absent |
| Right to call police / emergency services (non-waivable) | Confirmed absent at the state level |
| Criminal penalty for service-animal misrepresentation | **Confirmed absent for a broad landlord-facing penalty** — §28-1313 is narrow (guide-dog/white-cane impersonation only); a 2021 bill to create the broader KS/WY-style penalty was not enacted. Several confident secondary sources overstate this — same overconfident-source pattern flagged for WY (Hemlane) and KS (fabricated citation) |
| EV charging access right | Confirmed absent |
| Mobile home park act | Present, deprioritized (Flag 8, confirmed by Taylor) |
| Farm/agricultural tenancy carve-out | Present — §76-1408(7) |
| Rental application / tenant screening fairness act | Not found — genuinely lower research depth on this item, flagged as an open question rather than a confident absence |
| Immigrant tenant protection act | Same as immigration-status inquiry above — confirmed absent |
| Municipal ordinance complexity | Present and real — Lincoln/Omaha source-of-income and LGBTQ+ protections noted above, not resolved further, same treatment as CO's Denver/Boulder gap |

**New topic surfaced this session, not on the original checklist — flag for every future state:** a candidate "returned check fee cap" finding was investigated and **rejected**. A statute (§45-918.01) capping returned-check fees at $15 turned out to govern only "delayed deposit transaction" (payday-loan) licensees under a completely different regulatory chapter — not general landlord-tenant returned rent checks. Multiple secondary sources incorrectly attribute this cap to general Nebraska landlord-tenant law. No actual returned-check-fee cap applies to a standard Nebraska lease. Logged here so the next state's researcher doesn't get tripped by the same secondary-source error, and so this candidate topic doesn't silently disappear.

**CSV changes this session (canvass pass 1):** 15 new `LANDLORD_EDUCATION` rows, all `VERIFIED`. No `LEASE_CLAUSE` rows needed — every canvass finding this pass was either a confirmed absence or already captured by an existing clause. Running total: 280 rows, 89 NE-tagged.

---

### 10. What's still open after session 2

- **Named-topic canvass pass 2** — not yet run. Per the standing rule, pass 1 alone is provisional, not sufficient to call Nebraska complete. Needs a full independent second pass against the same checklist before any completeness claim.
- **Gap-discovery source #2** — no real lease-product comparison (the KCRAR-equivalent exercise run for Kansas) has been done for Nebraska yet.
- **Gap-discovery source #3 (personal landlord experience)** — not applicable to Nebraska per the established rule (Taylor's personal landlord experience is CO-only).
- **Gap-discovery source #4** — partially satisfied incidentally through the canvass process above, but not run as its own dedicated exercise the way it was for Kansas.
- **`security-deposit-use` generic** — still flagged from session 1 (§3): does Nebraska need its own override, or does the CO-only generic extend cleanly? Not resolved.
- **`edu-late-rent-reservation-fix-ne`** — open implementation item (§8): the `late-fee` clause itself hasn't been corrected for either Kansas or Nebraska's actual waiver-avoidance language.
- **Municipal complexity (Lincoln/Omaha)** — noted, not resolved, consistent with the project's established treatment of this category of finding.
### 11. Session 3 — named-topic canvass, pass 2 (independent re-check)

Ran the checklist a second time, independently, per the standing rule that a first pass has been shown to miss things even when believed complete. This pass focused on chasing down leads pass 1 surfaced but didn't fully confirm, and deliberately looking outside the core landlord-tenant title (Chapter 76, Article 14) — the same blind spot that made Kansas's service-animal-fraud statute (Chapter 39) easy to miss on a first pass.

**Two genuine misses from pass 1, confirmed via primary source:**

- **Smoke detectors** — Nebraska has a real statutory landlord duty (§81-5,144, State Fire Marshal statutes, Chapter 81) to supply, install, maintain, and test smoke detectors, with a corresponding tenant duty to test them during occupancy and report deficiencies in writing. **This topic wasn't on the original checklist at all** — no CO/WY/KS analog has been logged in this project to date. Added `smoke-detector-duty-ne` as a `LEASE_CLAUSE` and flagged as a new canvass row for every future state.
- **Carbon monoxide alarms** — a real statute exists (Carbon Monoxide Safety Act, §§76-601–606), but it's narrower than several secondary sources suggest: the requirement only triggers on new construction (built 2017+), a sale, or a permitted interior alteration — not a blanket "every rental needs one" rule. Verified directly against §§76-602/603/604 after a secondary source (Safe Kids Nebraska) overstated it as a general landlord duty. Added as `edu-co-alarm-requirement-ne`, framed precisely around the actual trigger.

**One correction to a pass-1 finding:**

- The returned-check-fee investigation from session 2 correctly rejected the $15 payday-loan-statute figure — but pass 2 turned up a *different*, genuinely applicable statute: §28-611(7), Nebraska's bad-check criminal restitution provision, which entitles a check payee (including a landlord) to $10 plus reasonable service charges if the check-writer doesn't make it good within 10 days of notice. Several secondary sources (Innago, Landlord Studio) describe this as "the maximum NSF fee a landlord can charge" — that's a mischaracterization; it's a separate criminal-restitution track, not a cap on the `returned-payments` clause's civil fee. Added `edu-bad-check-restitution-vs-nsf-fee-ne` to state the distinction precisely rather than let either the wrong number or the wrong legal characterization stand.

**One confidence upgrade:**

- **Rental application / tenant-screening fairness act** — pass 1 flagged this as "not found, genuinely lower research depth." A dedicated pass-2 search turned up five independent, mutually consistent sources confirming no such statute exists — application fees are uncapped and non-refundable, no consumer-report-cost tether. Also surfaced a pending bill (LB17) that would create exactly this kind of regulation (fee cap tied to actual report cost, late-fee cap of 5%/$50, returned-check-fee cap tied to actual bank charge) — not enacted as of this session, worth monitoring. Upgraded `edu-no-tenant-screening-fairness-act-ne` from a hedge to a confirmed-absent finding with citations.

**Everything else re-checked in pass 2 held up** — no other changes to the pass-1 findings in §9's table.

**CSV changes this session:** 3 new rows (1 `LEASE_CLAUSE`, 2 `LANDLORD_EDUCATION`), all `VERIFIED`. 1 existing row (`edu-no-tenant-screening-fairness-act-ne`) upgraded in place — content and notes both rewritten, no new row. Running total: 283 rows, 92 NE-tagged.

---

### 12. What's still open after session 3

- **Gap-discovery source #2** — no real lease-product comparison run yet for Nebraska.
- **`security-deposit-use` generic** — still flagged from session 1, not resolved.
- **`edu-late-rent-reservation-fix-ne`** — open implementation item, `late-fee` clause not yet corrected for either KS or NE.
- **Municipal complexity (Lincoln/Omaha)** — noted, not resolved.
- **Consolidated named-topic checklist file** — updated with the NE column and the two new topic rows (smoke detectors, CO alarms) discovered this session; handed forward for Ohio or whichever state comes next.

With pass 2 complete and no further pass-1 findings overturned (only extended — two genuine misses caught, one correction, one confidence upgrade), **Nebraska's named-topic canvass can now be considered done** per the standing two-pass rule. The remaining open items above (gap-discovery source #2, the two flagged-but-unresolved clause questions) are separate from the canvass itself and don't block that specific completeness claim, but do mean Nebraska isn't fully closed out as a state yet.

---

### 13. Session 4 — gap-discovery source #2, real lease-product comparison

**First, a correction to how this source was described for earlier states.** Taylor flagged that only the CO pass used Taylor's own real lease. Checked the actual WY and KS logs rather than assume:

- **KS** used the Kansas City Regional Association of Realtors' actual dual-state (KS/MO) lease form — a genuine real-world professional-association product.
- **WY** compared against several online lease-template-provider *sites* (ezLandlordForms, Steadily, PandaDoc, ILRG, AAOA, PropMgmtForms) — closer to the "generic template mill" category KS's own log explicitly contrasted itself against, not a real regional/professional lease product. Weaker than KS's source, though the WY log's own language ("real WY lease products") oversold what it actually was.

For Nebraska: the Nebraska Realtors Association's own forms library and the Omaha Area Board of Realtors' forms are both member/subscription-gated (Form Simplicity, DotLoop, or ZipForms login required) — the actual text isn't publicly accessible, which is likely the same constraint that pushed the WY session toward template sites in the first place. Rather than fall back to a marketing-page template mill and call it equivalent, found something at a meaningfully higher tier: **ILRG/PublicLegal's Nebraska residential lease** — a paid ($9.99), attorney-reviewed, 33-section lease product from a legal-forms publisher operating since 1995, with real operative clause language and specific Nebraska statutory citations woven throughout (not marketing copy). Fetched and read the complete document.

**Strong corroboration on most points** — the real lease's mechanics for security deposit (14-day return, 1-month cap, ¼-month pet deposit, §76-1416), extended-absence notice (7 days), tenant duties (guest/pet damage responsibility, no-disturbance), entry notice (24-hour, purpose + window stated, §76-1423), default/cure mechanics (14-day cure, 7-day pay-or-quit, §76-1431), no-sublet/short-term-rental ban, and the negligence-specific liability-limitation framing all matched what this project had already found independently. Good validation of the underlying research.

**Three genuine findings, not just corroboration:**

1. **A real correction to this project's own work.** Nebraska's holdover statute (§76-1437(3)) awards the landlord "reasonable attorney's fees" on top of the 3x damages figure — a genuine statutory fee award, missed in session 1's original read of that section. The real lease product had this right; re-verified directly against primary source and confirmed. **Corrected `edu-holdover-ne`** to include the fee award.
2. **A place where the "real" product itself looks wrong.** The ILRG lease's Non-Delivery of Possession clause uses old-style generic multistate boilerplate (30-day landlord grace period, automatic termination on failure, no citation) that doesn't reflect Nebraska's actual current §76-1426 mechanic (5-day tenant termination right, rent abatement, 3x willful-bad-faith damages) — the only clause in the document without a specific NE statutory citation, which is itself a tell. `possession-delay-ne` (session 2) already reflects the correct current mechanic and wasn't changed. Worth remembering: a paid, attorney-reviewed product can still carry stale boilerplate for a state-specific remedy — primary-source verification doesn't stop being necessary just because a source looks more credible than a marketing page.
3. **A live judgment call, not a clean finding.** The real lease deliberately narrows its liability disclaimer to the landlord's *ordinary* negligence, explicitly preserving liability for gross negligence and willful misconduct — tracking Nebraska's actual negligence-specific exculpation ban (§76-1415(1)(d)) precisely. The current `tenants-property-insurance` generic's blanket "Landlord is not liable" sentence doesn't make that distinction. This is the same open question already sitting unresolved in the KS log for this exact clause — now with a real-world data point suggesting a working Nebraska lease treats it as worth addressing. Logged as `edu-negligence-carveout-flag-ne`, a judgment call surfaced for Taylor rather than decided unilaterally.

**Minor items surfaced, not drafted as clauses** — general product-completeness candidates rather than Nebraska-specific legal requirements, so not force-fit into overrides: a mortgage-subordination clause, a quiet-enjoyment clause, an anti-recording clause, a hazardous-materials clause, a pre-expiration "for sale/rent" sign-posting right, and a cluster of granular apartment-house-rules items (AC filter maintenance, plumbing-misuse cost responsibility, hallway/entrance obstruction, laundry-hanging restrictions, lock/hook restrictions, noise/entertainment-volume language). None of these trace to a Nebraska statute — they're common professional-lease boilerplate that could apply as universal library additions across all states, not something specific to this session. Flagging the list rather than drafting six new clauses unprompted.

**CSV changes this session:** 1 existing row corrected in place (`edu-holdover-ne`). 1 new row (`edu-negligence-carveout-flag-ne`). Running total: 284 rows, 93 NE-tagged.

**Gap-discovery source #2 is now complete for Nebraska.**

---

### 14. Session 4 (continued) — `edu-negligence-carveout-flag-ne` resolved

Taylor's decision: draft the override rather than leave the blanket generic in place.

**`tenants-property-insurance-ne`** (supersedes `tenants-property-insurance`) — narrows the generic's blanket "Landlord is not liable for any such loss or damage" to exclude only *ordinary* negligence, explicitly preserving liability for Landlord's gross negligence or willful misconduct. Tracks Nebraska's negligence-specific exculpation ban (§76-1415(1)(d)) precisely, and mirrors the carve-out the real ILRG/PublicLegal commercial lease uses for the same clause.

**Left open, not resolved here:** the parallel Kansas question, still sitting in the KS log's own notes on this same clause. Kansas's exculpation ban is broader than Nebraska's negligence-specific trigger, so the same fix might not transfer cleanly — worth a dedicated look if the KS log is revisited, not assumed to be automatically solved by the NE version.

**CSV changes this session:** 1 new row (`tenants-property-insurance-ne`). Running total: 285 rows, 94 NE-tagged.

---

### 15. Session 5 — full liability/exculpation audit and fixes across the library

Taylor asked to run a full audit for the same exposure pattern found in `tenants-property-insurance`, rather than treat it as an isolated clause. Searched every `LEASE_CLAUSE` row in the library for liability-limitation, waiver, and indemnification language, cross-checked against each tagged state's actual prohibition.

**Found five exposed clauses total, not one:**

| Clause | States exposed | Issue |
|---|---|---|
| `tenants-property-insurance` | KS (NE already fixed) | blanket "not liable" |
| `services-utilities-provided` | KS only | "Tenant waives all liability" — exposed under **both** KS's exculpation ban (§58-2547(a)(4)) and its separate flat waiver-of-rights ban (§58-2547(a)(1)), since it uses "waives" directly |
| `parking` | KS, NE | "not liable for damage to or theft of a vehicle" |
| `storage-space` | KS, NE | "not liable for damage to or theft of items stored" |
| `pet-policy` | KS, NE | **two separate issues in one clause** — a tenant-indemnifies-Landlord sentence (K.S.A. 58-2547(a)(4) bars indemnification obligations for either party, not just landlord exculpation, so this direction is exposed in Kansas too) and a "without liability to Tenant" pet-removal sentence |

**One genuine legal nuance surfaced and deliberately not acted on.** Kansas's statute has a narrow exception: a tenant may agree to limit landlord's liability for fire, theft, or breakage **in common areas**. A shared parking lot plausibly qualifies; an assigned, exclusive-use storage space is a weaker fit. Whether Kansas courts would treat either as a "common area" is an untested interpretive question with no case law or authoritative source found either way. Taylor's decision (session 5): don't guess on live product content — default to the conservative fix (drop the liability-limiting language entirely) for both clauses in Kansas, rather than attempt to preserve either through this argument. The reasoning is documented in each Kansas override's notes in case a real attorney review revisits it later.

**Kansas fixes — conservative, language dropped entirely, no negligence-tier carve-out attempted (Kansas's ban isn't negligence-gated, so a carve-out wouldn't necessarily cure it anyway):**
- `services-utilities-provided-ks` (supersedes `services-utilities-provided`) — drops the waiver sentence.
- `tenants-property-insurance-ks` (supersedes `tenants-property-insurance`) — drops the liability disclaimer.
- `parking-ks` (supersedes `parking`) — drops the liability disclaimer, keeps the no-security-provided statement.
- `storage-space-ks` (supersedes `storage-space`) — drops the liability disclaimer.
- `pet-policy-ks` (supersedes `pet-policy`) — drops both the indemnification sentence and the "without liability" pet-removal sentence.

**Nebraska fixes — negligence-tier carve-out, same pattern as `tenants-property-insurance-ne`:**
- `parking-ne`, `storage-space-ne` — narrow the blanket disclaimer to exclude only ordinary negligence.
- `pet-policy-ne` — narrows only the "without liability" pet-removal sentence; the indemnification sentence is left unchanged, since it covers the tenant's own pet's actions, not Landlord's negligence, and Nebraska's ban is negligence-specific.

**No Nebraska override needed for `services-utilities-provided`** — its existing "causes beyond Landlord's reasonable control" qualifier already self-limits to non-negligence causes, which already tracks Nebraska's negligence-specific ban without a rewrite.

**A real bug caught in the process:** `tenants-property-insurance` still had NE in its `states` field even after `tenants-property-insurance-ne` was created three sessions ago to supersede it — exactly the display-collision the schema's own documentation warns about (blank/unremoved states means both versions would show simultaneously). Fixed as part of this session's cleanup, not a new finding but a real correction to earlier work.

**Verified after all edits:** no clause ID appears with the same state tagged on both a generic and its state-specific override anywhere in the library — checked programmatically, not just visually.

**Process lesson, logged for every future state:** this exposure pattern survived the original KS section-by-section statute walk, the KS whole-library audit, and both passes of the KS/NE named-topic canvass — three separate passes, all missed it — because none of those steps ever cross-checked a state's *newly documented* prohibition against clauses that *already existed* in the shared library for other states. The methodology checked new statutes against new clauses, and existing clauses against the canvass checklist, but never ran "does this newly-confirmed rule invalidate something already shipping." Recommend this becomes an explicit, named step for every future state: after documenting any new PROHIBITED-type finding, immediately grep the existing library for language that pattern might invalidate — don't wait for it to surface in conversation.

**CSV changes this session:** 8 new override rows (5 for KS, 3 for NE — `services-utilities-provided` needed no NE override). 5 existing generic rows had KS and/or NE removed from their `states` field. 1 pre-existing display-collision bug fixed (`tenants-property-insurance`/NE). Running total: 293 rows, 93 KS-tagged, 93 NE-tagged.

---

### 16. Session 6 — closing out the remaining state-status questions

Taylor asked whether all four states were actually done. They weren't, evenly — worked through the open items in order.

**Colorado — checked and confirmed clean.** A secondary source had suggested Colorado has a broad exculpation/hold-harmless prohibition similar to Kansas's or Nebraska's. Pulled the actual current statute (C.R.S. §38-12-801(3), as amended through 2025) rather than trust the summary. It's a long, specific prohibited-clauses list — one-way attorney fees, jury trial waivers, class-action waivers, good-faith-and-fair-dealing waivers, quiet enjoyment waivers, mandatory mediation waivers, non-renewal penalties, third-party billing markups, voucher-nonpayment evictions — but **no general exculpation/liability-limitation ban**. The secondary source's claim doesn't match the real statute and is being treated as unreliable, not adopted as a finding. Notably, the statute's own quiet-enjoyment carve-out uses almost identical framing to Steinoak's existing "beyond Landlord's reasonable control" language, reinforcing that the CO-tagged versions of `services-utilities-provided`, `tenants-property-insurance`, `parking`, `storage-space`, and `pet-policy` don't need the Kansas/Nebraska treatment. **No changes made for Colorado.**

**Kansas — a correction to the record, not new work.** Earlier in this conversation, `late-fee-ks` was repeatedly described as an unresolved open item — "flagged but never actually applied." That was wrong. Checked the actual CSV rather than the KS decision log's own (apparently stale) framing, and `late-fee-ks` already exists, already supersedes `late-fee`, and already has the reservation-of-rights fix applied, from a KS session that predates this conversation. **No changes needed — Kansas's late-fee question was already closed before this session started.** Correcting the record here so the decision log doesn't perpetuate the error.

**Nebraska — resolved as landlord education, not a lease-drafting problem.** Nebraska's actual requirement (§76-1433: the waiver-avoiding agreement must be made *after* the breach) can't be satisfied by any standing lease clause, since lease language is by definition agreed to before any breach occurs — the Kansas-style "reservation of rights" wording doesn't transfer here because the problem was never about wording, it was about timing. Taylor's call: this is a landlord-behavior question, not a clause question. `late-fee` is extended to Nebraska as-is (no override — the clause isn't prohibited there, it's just insufficient alone), and `edu-late-rent-reservation-fix-ne` is rewritten from an open-item flag into actual guidance: document the reservation of rights *at the time* each late payment is accepted, not through lease boilerplate. A proposed "process clause" committing the landlord to send a reservation notice with every late payment was considered and rejected — it would just restate the same advice as a rule without adding real protection, since a lease-level commitment is still a pre-breach agreement either way.

**Product idea flagged for later, not acted on now:** Taylor noted that an after-the-fact reservation-of-rights notice — sent to the tenant at the moment a late payment is accepted — is a natural candidate feature for the not-yet-built legal tracker functionality, rather than something to solve in the clause library. Logged to memory for continuity across sessions; no clause library or CSV work involved.

**CSV changes this session:** `late-fee` extended to `CO;WY;NE`. `edu-late-rent-reservation-fix-ne` rewritten in place from an open flag to resolved guidance. No new rows. Running total: 293 rows, unchanged.

---

### 17. Current state-by-state status, as of session 6

- **Colorado** — checked against the exculpation/liability pattern found this session; clean, no changes needed. Otherwise treated as settled from its original session.
- **Wyoming** — still has known open items: immigration-status inquiry and right-to-call-police both remain "not yet checked" on the consolidated checklist; the tenant-screening-fairness-act row is unresolved; gap-discovery source #2 was template-mill sites, not a real professional product, and is arguably still owed a stronger source.
- **Kansas** — the five liability-clause fixes from session 5 are applied. The late-fee reservation question, previously thought open, was already resolved before this conversation. No other known open items beyond what's already logged in the original KS decision log.
- **Nebraska** — the most thoroughly worked state to date (full statute walk, whole-library audit, two-pass canvass, real gap-discovery source #2, the liability audit, and now the late-fee resolution). Remaining open item: `security-deposit-use` (flagged session 1, still not resolved — does NE need its own override or not). Lincoln/Omaha municipal ordinance complexity is noted but not dug into further, consistent with how CO's Denver/Boulder gap and WY/KS's own municipal items have been treated throughout this project.

---

### 18. Session 6 (continued) — closing Nebraska's last open item

**`security-deposit-use`, resolved: extends cleanly, no override needed.** Pulled Neb. Rev. Stat. §76-1416(2) directly: the deposit "may be applied to the payment of rent and the amount of damages which the landlord has suffered by reason of the tenant's noncompliance with the rental agreement or section 76-1421" — substantively the same rent-plus-damages-beyond-wear-and-tear framing the generic clause already uses, with no restriction comparable to Kansas's last-month's-rent rule. States field extended from `CO` to `CO;NE`.

**Two things noticed while resolving this, flagged but not acted on — outside Nebraska's scope:**

1. **Wyoming has no `security-deposit-use`-type clause at all.** The generic was never `CO;WY` — it's been `CO`-only this whole time, and no `security-deposit-use-wy` override exists either. That means a Wyoming lease currently has no clause governing what the deposit can be applied to. Genuine gap, not something this session created or is positioned to fix — flagged for whenever Wyoming's open items get worked.
2. **A second pre-existing display-collision bug**, same shape as the `tenants-property-insurance`/NE bug caught in session 5: `security-deposit-return` and `security-deposit-return-co` both currently have `states = CO`, even though the latter supersedes the former — both would display simultaneously on a Colorado lease. Not fixed here since it's a Colorado issue unrelated to closing out Nebraska, but worth a quick correction whenever CO is next touched.

**With this resolved, every item tracked in Nebraska's own decision log (sessions 1 through 6) is now closed.** Nebraska's clause library work is complete as of this session: statute walk, prohibited-terms and core-section resolution, whole-library generic-clause audit, two-pass named-topic canvass, real gap-discovery source #2, the cross-state liability audit and fixes, and the late-fee reservation-language resolution. The two items surfaced just above (Wyoming's missing clause, Colorado's display bug) are new findings for those states, not unfinished Nebraska work.

**CSV changes this session:** `security-deposit-use` extended to `CO;NE`. No new rows. Running total: 293 rows, 94 NE-tagged.

---

### 19. Session 7 — full-library display-collision audit (Colorado, but checked everywhere)

Taylor asked to fix the `security-deposit-return`/`security-deposit-return-co` collision noted at the end of session 6. Rather than patch that one instance, ran a full programmatic check of every `supersedes` relationship in the library (36 total) for the same class of bug: a child row's `states` overlapping with its parent's `states`, which means both versions display simultaneously on the same state's lease.

**Found five, not one:**

| Child (override) | Parent (generic) | State(s) removed from parent |
|---|---|---|
| `security-deposit-return-co` | `security-deposit-return` | CO |
| `landlords-access-co` | `landlords-access` | CO |
| `assistance-animal-accommodation-co` | `assistance-animal-accommodation` | CO |
| `assistance-animal-accommodation-wy` | `assistance-animal-accommodation` | WY |
| `habitability-baseline-wy` | `landlord-maintenance` | WY |

All five fixed by removing the overlapping state from the parent's `states` field. `security-deposit-return`'s `states` field is now empty — all four states (CO, WY, KS, NE) have their own override at this point, so the base row correctly displays nowhere but remains on file as the row every override's `supersedes` points to. `assistance-animal-accommodation` now reads `KS;NE` (CO and WY both have their own versions). `landlord-maintenance` now reads `CO` only (WY and NE both have overrides; CO doesn't need one).

**Re-verified programmatically after the fix: zero collisions remain anywhere in the library**, not just in the five found — checked all 36 supersedes relationships, not a visual scan.

These bugs predate this conversation and aren't specific to any one state's session — they accumulated gradually as overrides got added without the corresponding generic being cleaned up each time, the same root cause as the `tenants-property-insurance`/NE bug caught in session 5. Worth treating "does the parent's states field still overlap with any override that supersedes it" as a standard check to run after any session that adds a state-specific override, not just something to catch by luck when a person asks about a specific clause.

**CSV changes this session:** 4 additional `states` field corrections (5 total collisions fixed, counting the one already flagged from session 6). No new rows. Running total: 293 rows, unchanged.
