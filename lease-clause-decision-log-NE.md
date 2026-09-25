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


---

# ===== RE-AUDIT: 2026-08-31 (v62 → v63) =====

**Higher-effort re-run of state #4.** Everything above is the original pass (2026-08-23, default settings, sessions 1–7) plus its follow-on sessions. Nothing above has been deleted; where the re-audit found an entry wrong, the correction is recorded below and in the row's `notes`, and the original reasoning is left standing so the error is legible rather than erased.

**Headline: four for four.** CO, WY, KS and now NE have each surfaced errors that shipped as `VERIFIED`. Nebraska's were the most severe to date — including one whose central reassurance was backwards on a lethal hazard.

## 0. Gating checks

**CSV confirmed before any work.** 415 rows; CO 106 / WY 96 / NE 95 / KS 113 / MN 70 / SD 37 / ND 33 — all seven exact. Correct trunk; branch safe. (Two prior re-audits branched off the wrong trunk and cost a session to reconcile.)

**Denominator — 81, not the 73 supplied in the prompt.** Extraction rule: every markdown table row in the checklist file, excluding separator rows and header rows detected by a first cell matching `topic|layer|row|new topic`; further excluding the 12-row "Status corrections" table, whose entries restate topics present elsewhere rather than introducing distinct ones. Result: **81** (72 pre-dating the KS re-audit + that pass's 9 additions). Taylor's independent extraction under a slightly different header rule returned **82**; per Taylor's direction the ±1 is recorded, not chased — two careful extractions disagreeing by one *is* the finding, and a bare number cannot be authoritative because the count depends on a rule the number does not carry.

73 was wrong twice over: stale (pre-dated the KS re-audit's own nine additions) and differently measured (deduplicated distinct labels, not rows). **The checklist instruction has been rewritten this session** — "state the denominator explicitly" is replaced by "never carry a denominator forward; derive it from the file at every pass, state the extraction rule alongside it, and record disagreement rather than reconciling it." Fourth instance in this project of a completeness claim failing on scope rather than research.

**Substantive split for this re-audit:** of the 81 rows, **32 are structurally unchecked for NE** (5 ND new-topic rows marked "Not logged" + 27 rows in the CO/WY/KS re-audit sections that carry no NE column). The remaining **49 carry values from the original default-settings pass and are treated as suspect, not done** — all three prior re-audits found errors inside rows that looked settled.

---

## 1. `assistance-animal-accommodation` — RESOLVED, and the original pass missed an entire statutory scheme

The row shipped at `NEEDS_REVIEW` with Nebraska the sole blocker. Two things blocked it: NE's four-way classification, and whether the HUD dates were two events or two accounts of one.

**The library had ZERO rows on Neb. Rev. Stat. §§20-131.01 to 20-131.04** — an express service-animal HOUSING statute. Fourth consecutive state where a real finding sat outside the core landlord-tenant chapter (this is Ch. 20, not Ch. 76).

**Four-way classification: CATEGORY 1 — independent, animal-specific, housing-express.** Stronger than Kansas (generic KAAD duty only) *and* stronger than Wyoming, whose §35-13-201(c) is expressly tethered "in accordance with the federal Fair Housing Act"; Nebraska's operative housing sections contain no federal cross-reference. §20-131.01 confers full and equal access to "all housing accommodations offered for rent, lease, or compensation." §20-131.04 carries **two distinct fee prohibitions** — no "extra compensation" and no "additional deposit" — plus express tenant liability for animal-caused damage. The generic row stated a pet-fee ban but neither the additional-deposit ban nor the damage allocation.

**Penalty scoping — Wyoming pattern, opposite of Kansas.** §20-129(1) is scoped by *section list* and expressly names "sections 20-131.01 to 20-131.04," so it reaches rental housing. Kansas's §39-1112 is scoped to "any place listed in K.S.A. 39-1101" and does not. Nebraska therefore answers the KS canvass row affirmatively. **The exposure runs at the landlord**: denying is a Class III misdemeanor; there is no tenant misrepresentation offence. Found by reading the whole section: §20-129(2)'s protection for a bona fide *trainer* is scoped only to §20-127 and does **not** extend to housing.

**Species — FLIPPED to open, via a version trap.** §49-801(20) freezes "service animal" to 28 C.F.R. 36.104 "as such regulation existed on January 1, 2008." The current federal text reads "any **dog**" and expressly excludes emotional support. **Both features arrived in 2010.** Chain of proof: (a) §49-801(20) [primary, read]; (b) the current C.F.R.'s own amendment history — first amendment after the 1991 original was Sept. 15, 2010 — so the 2008 text *is* the 1991 text [primary, read]; (c) DOJ's Title III NPRM, Federal Register 2008-05-30, five months after the freeze date, quoting "the current regulation" verbatim as "any guide dog, signal dog, or **other animal** individually trained to do work or perform tasks" [quasi-primary: promulgating agency quoting its own regulation contemporaneously]; (d) animallaw.info corroborating identical 1991 language for the parallel Title II rule [secondary]. Residual gap recorded: the bound 1991 CFR page itself is unread and the 2008 annual edition exists only as non-searchable scans; (b) forecloses any intervening amendment, so this meets the VERIFIED bar and a further chase would add provenance, not accuracy.

Consequences: **Nebraska is species-open** (broader than Kansas's dogs-only act), and **ESAs are excluded only by implication** from "individually trained," not by the express exclusion Kansas has — a weaker, softer exclusion. Third wrong-version reading in this project (CO carpet lookback: superseded draft; KS HB 2357: introduced vs. enacted), and the **first arriving through a statutory freeze-date mechanism** — a distinct failure mode, since any "as it existed on [date]" incorporation by reference creates it. Added as a canvass row.

**HUD — two sequential events, confirmed.** 2025-09-17 withdrawal of FHEO-2020-01 and FHEO 2013-01 (later formalized at Fed. Reg. Docket FR-6571-N-01); then a separate 2026-05-22 FHEO memo narrowing enforcement to individually-trained animals. Neither touched the FHA statute; private suits and NEOC enforcement are unaffected.

**Drafting posture (Taylor's decision):** draft to the higher federal floor. `assistance-animal-accommodation-ne` covers assistance animals generally, not the narrower state "service animal" class, because the federal duty still reaches ESAs regardless of HUD's enforcement posture.

**Row disposition.** NE removed from `assistance-animal-accommodation`; it is now KS-only and flipped to `VERIFIED` (both blockers resolved). §5a.1: states-field change only, bodyText untouched — no clause propagation owed, **but a status-flip note is owed in the KS log.**

**Rows added:** `assistance-animal-accommodation-ne` (LEASE_CLAUSE), `edu-service-animal-housing-right-ne` content folded into it, `edu-no-modification-duty-ne`, `edu-assistance-animal-carveout-mismatch-ne`, `edu-service-animal-denial-penalty-ne`, `edu-esa-federal-only-ne`.

### 1a. Findings the research pass did not surface — all from reading sections in sequence

- **§20-131.03 — no modification duty**, and the tension is *intra-state*: §20-319(2)(a) separately makes it discrimination to refuse to *permit* tenant-funded modification, with an express landlord-favorable restoration condition available in rentals. Reading §20-131.03 as a general "no modifications" rule would be a serious misread.
- **Two owner-occupied carve-outs that do not align.** §20-131.02(1) excludes owner-occupied single-family room rentals from the service-animal scheme with **no room cap**; §20-322(3) exempts "rooms in his or her own home" from the NFHA but only up to **four sleeping rooms**. Rent five rooms in your own home: the Fair Housing Act applies to you, the no-additional-deposit rule does not. Answers the KS canvass row "check the EXEMPTIONS separately from the duty" in a shape different from Kansas's.
- **§20-322 read in full: Nebraska did NOT adopt the federal Mrs. Murphy exemptions.** No carve-out for owners of a limited number of single-family houses rented without a broker, none for owner-occupied multi-unit buildings.

### 1b. ERROR CONFIRMED in a shipped `VERIFIED` row — fourth state, fourth error

`edu-fair-housing-classes-ne` asserted Nebraska has "no statewide addition" beyond the federal protected classes. **§20-318 primary text carries "military or veteran status" in the operative prohibition at (1), (2), (3), (4), (5) and (8)** — not merely in §20-322's proviso — added by Laws 2025, LB150 §13, with the definition at §49-801(13) (§92) and a veterans-benefit safe harbor at §20-322(6) (§16). LB150 is a 2025 law and the original NE pass ran 2026-08-23: **research miss, not currency lapse.** Row corrected and returned to `VERIFIED`; its negative list (no marital status, source of income, sexual orientation, gender identity) re-checked against §20-318 and holds.

### 1c. New topic, on no prior state's canvass

**§20-318(5) bans the INQUIRY and the RECORD**, not just the decision — unlawful to "cause to be made any written or oral inquiry or record concerning" any protected characteristic of a person seeking to rent. Reaches application forms and CRM fields directly; structurally broader than the federal FHA and a class of exposure the library has never modelled. Also **§20-318(6)** bans including *or honoring* restrictive covenants. And because §20-318 is prefaced "Except as exempted by section 20-322," Nebraska's **advertising ban at (3) is subject to the exemptions** — the opposite of the federal rule, where 42 U.S.C. §3604(c) survives Mrs. Murphy. → `edu-protected-class-inquiry-ban-ne`.

---

## 2. Live exculpation exposure — both diagnoses changed on reading the statute

**§76-1415(1) read verbatim from nebraskalegislature.gov.** (d) bars a provision under which the tenant "agrees to the exculpation or limitation of any liability of the landlord arising due to **active and actionable negligence** of the landlord **or to indemnify the landlord for that liability** arising due to active and actionable negligence or the costs connected therewith." Two features matter: it is **negligence-gated**, and it is **landlord-only** (Kansas's §58-2547(a)(4) reaches *either party*).

**`services-utilities-provided` (CO;WY;NE) — the flagged diagnosis was wrong; the clause was exposed under a different subsection.** The concern going in was a missing negligence carve-out under (d). But the clause is already self-limited to "causes beyond Landlord's reasonable control," and a cause beyond the landlord's reasonable control is by definition not the landlord's active and actionable negligence — **the original NE session's (d) reasoning was correct, and no carve-out is needed.** That is precisely why this clause differs from `tenants-property-insurance-ne`, `parking-ne`, and `storage-space-ne`: those three carried *blanket* disclaimers with no limiting qualifier and genuinely needed carve-outs. The "fixed four of five" asymmetry is not an oversight — the fifth needed a different and smaller fix.

The real exposure is **§76-1415(1)(a)**, which bars the tenant agreeing to "waive or forego rights or remedies under the Act." The clause opened "**Tenant waives** all liability of Landlord" — waiver-framed language that invites the (a) argument for free even where practical scope is narrow. Recast as an allocation: "Landlord is not liable…". Substance unchanged, exposure removed.

**§5a.1 propagation judgment — UNIFORM, not state-driven.** Applied to all three tagged states. CO: §38-12-801(3) voids waivers of quiet enjoyment and of good faith and fair dealing, so waiver-framed phrasing is mildly worse there too — beneficial. WY: no prohibited-provisions statute at all (confirmed in the WY re-audit) — neutral. No state disadvantaged; **no NE-only override created, deliberately**, because the improvement is not Nebraska-specific. **Notes owed in the CO and WY logs.**

**`pet-policy-ne` indemnity — narrowed, not deleted.** The original session left it on the reasoning that it "covers the tenant's own pet's actions, not Landlord's negligence." Directionally right but **incomplete**: "claims arising from Tenant's pet(s)" was *unqualified*, so a claim in which the landlord was itself actively negligent (knew a pet was vicious, failed to act) would still arise from the tenant's pet and be swept in — reaching exactly what (d) prohibits. Overbroad at the margin, not prohibited at its core; fix is a carve-out. **Contrast with Kansas, and why the rows must stay separate:** K.S.A. 58-2547(a)(4) bars indemnifying *either party*, so `pet-policy-ks` correctly deleted the indemnity outright; Nebraska's (d) is landlord-only and negligence-gated, so Nebraska keeps it with a carve-out. Do not merge.

---

## Running state

421 rows (from 415). NE 100 (from 95). Zero `NEEDS_REVIEW` outstanding. No duplicate IDs (asserted after every write).

**Propagation debts owed (§5a.1):** KS log — `assistance-animal-accommodation` status flip. CO and WY logs — `services-utilities-provided` uniform reword.

**Still to do:** item 3 (`late-fee` / §76-1433), item 4 (citation screen incl. `notes`), item 5 (canvass ×2 against 81), item 6 (adjacent chapters — Ch. 20 now done, Ch. 28/44/76-outside-URLTA outstanding), plus targeted re-verification of every hard number from the original pass.

---

## 3. `late-fee` / §76-1433 — original conclusion wrong in BOTH directions

§76-1433 read verbatim: acceptance of rent with knowledge of a default "constitutes a waiver of his right to **terminate the rental agreement for that breach**, unless otherwise agreed after the breach has occurred."

**Overstated.** The prior education row warned landlords not to rely on the clause "to preserve your right to act on a late payment." The waiver reaches termination-for-that-breach *only*. Late fee, rent, damages, future timeliness, and termination for any different breach all survive. The row would have made a Nebraska landlord worry about something narrow.

**Understated.** The prior conclusion — "not prohibited, just insufficient" — was asserted, not tested. The generic's unqualified "or to pursue any other remedy available under this Lease" purports to preserve exactly the termination right the statute waives. Two independent problems: §76-1433 expressly permits agreement "after the breach has occurred," so expressly specifying *when* implies a pre-breach clause does not qualify (expressio unius); and it is **arguable** that a provision under which the tenant forgoes the §76-1433 protection is prohibited by §76-1415(1)(a), which matters because §76-1415(2) awards damages and fees where a landlord "deliberately uses" a provision known to be prohibited.

**Judgment surfaced, not resolved:** whether §76-1433's protection is a tenant "right or remedy under the Act" is genuinely uncertain — it reads as a default rule of construction constraining the landlord rather than a conferred tenant right. The argument is available, not airtight. The fix does not depend on settling it.

**§5a.1 — STATE-DRIVEN.** `late-fee-ne` created; NE removed from the generic (now `CO;WY;MN`). Deliberately **not** propagated: a non-waiver clause preserving termination is genuinely valuable where contract can preserve it, and none of CO/WY/MN has been shown to carry Nebraska's express timing rule. Narrowing all four to solve one state's problem would surrender real protection in three. Structurally matches Kansas taking its own `late-fee-ks`.

## 4. Citation screen — run against `notes` as well as `bodyText`

**Method changed mid-item, deliberately.** Rather than screen 45 URLTA citations individually, the full act was fetched from nebraskalegislature.gov and every hard number in the library checked against it. A citation-existence screen cannot catch a valid citation described wrongly — the KS re-audit's material finding, and confirmed again here four times over.

- **Cross-state cites in NE notes are legitimate** comparative references, not misattributions. The known-dead WY cite `35-13-207` appears in **no** NE row. `58-25,138` (the fabricated KS cite) appears only in correction language — false positive under the carve-out, deprioritized not excluded.
- **`§76-1437(3)` / `§76-1426` numeric error** — see checklist. One paraphrase reused across two sections.
- **`§76-1413` entirely absent** from the library. 2025 electronic-notice regime including a fifth prohibited lease provision at (9).
- **`§§76-1430, 76-1436, 76-1438` entirely absent.** Statutory-floor remedies; self-help lockouts foreclosed.
- **`§81-5,144`** citation correct, clause materially incomplete (four omissions).
- **`§81-5,142`** — *the re-audit's own error*, introduced and corrected within the session. See methodology lesson 2.
- **`§§76-603–606`** — the CO-alarm error. Flagged rather than acted on because §81-5,142 had just failed the same way; primary text requested under §5a.2 rather than a third search; text confirmed the problem was worse than suspected.
- **`§76-2,120`** and **`§28-611`** — citations confirmed, characterizations corrected.

## 5. Named-topic canvass ×2 — denominator derived fresh at each pass

Both passes: **81**. Pass 1 detected headers by keyword match; pass 2 segmented into contiguous table blocks and treated each block's first row as header structurally. Two independent implementations converging is stronger than one rule run twice. Taylor's independent extraction returned **82** — recorded, not reconciled.

Split: **32 structurally unchecked** (5 ND rows marked "Not logged" + 27 re-audit rows with no NE column) / **49 carrying original-pass values, treated as suspect**.

**Pass 2 caught what pass 1 did not**, and the reason is instructive: pass 1 worked from the structurally-unchecked set plus the research batch; the all-in-pricing row sat in the 49 "looked settled" bucket. Pass 2's lexical sweep over the entire NE corpus surfaced it. Direct vindication of both the two-pass rule and the instruction to treat the 49 as suspect.

## 6. Adjacent chapters — now the most reliable pattern in this project

**Six chapters outside the URLTA yielded real Nebraska findings**: Ch. 20 (civil rights / fair housing — the entire service-animal housing scheme, the inquiry ban), Ch. 81 (smoke detectors), Ch. 76 outside the URLTA article (carbon monoxide), Ch. 28 (bad check), Ch. 55 (servicemember termination), Ch. 13 (rent-control preemption). A pass confined to the core act's table of contents would have missed all six.

---

## §5a.1 propagation debts owed

| Log | Debt |
|---|---|
| **KS** | `assistance-animal-accommodation` — NE removed, row now KS-only and flipped `NEEDS_REVIEW` → `VERIFIED`. States-field change only, bodyText untouched; status-flip note owed. |
| **CO, WY** | `services-utilities-provided` — uniform reword, "Tenant waives all liability of Landlord" → "Landlord is not liable." Judged uniform: beneficial in CO (§38-12-801(3) voids quiet-enjoyment and good-faith waivers), neutral in WY (no prohibited-provisions statute). |
| **CO, WY, MN** | `late-fee` — NE removed (now `CO;WY;MN`). No text change to the generic; judged state-driven and deliberately not propagated. |

## Running state at close

**433 rows** (from 415). **NE 111** (from 95). Zero `NEEDS_REVIEW`. No duplicate IDs — asserted after every write.

**Open, flagged not hidden:** exact penalty grade in §81-5,146 ("Violations; penalty") — the Legislature site's comma-formatted URL mis-resolves to §81-146, a repealed section. Existence, title, and absence of any Kansas-style evidentiary/insurance shield are confirmed; only the misdemeanor class is unresolved.

**Verdict: four for four.** Every re-audited state has surfaced errors shipped as `VERIFIED`. Nebraska's were the most severe to date — one wrong in a direction that under-warned about a lethal hazard, one numeric error understating recovery ~4x, one entire statutory scheme absent, one 2025 statute absent, and a protected class missing from a fair-housing row.

---

## 7. Closing pass — 49-row re-verification, §5a.1 debts paid, over-claimed rows downgraded

### 7a. The 49-row re-verification (Taylor approved, 2026-08-31)

Extracted programmatically: exactly **49** rows carry an original-pass NE column value — independently matching the 32/49 split derived at session open, which is a useful confirmation that the two derivations were consistent.

**Found: four checklist entries still carrying errors this session had already corrected in the CSV.** The library was fixed; the checklist was not.

| Checklist row | Stale entry | Corrected |
|---|---|---|
| Holdover damages formula | "3× rent or 3× actual damages" | three months' periodic rent / threefold actual damages |
| Failure-to-deliver-possession | "3x damages not 1.5x" | same correction, §76-1426 |
| Fair housing protected classes | "Tracks federal only statewide" | adds military or veteran status (LB150, 2025) |
| Carbon monoxide alarm | "narrowly triggered — only new construction (2017+), sale, or alteration" | effectively universal; §76-606(2) turnover trigger |

**This is the substantive result of the 49-pass, and it is a distinct failure mode from anything else found today.** The checklist *is* the canvass instrument — the next state reads it, not the CSV. Four wrong Nebraska benchmarks would have propagated outward from a document that had already been superseded in the library. Recorded as methodology lesson 7: fixing a CSV row is not finishing the job.

Also updated: the late-rent-waiver row (was stale, said the clause was "not yet corrected for either" state) and the returned-check row (now carries the real §28-611 answer rather than only the rejected §45-918.01 candidate).

**A denominator finding.** The 49-pass surfaced a genuine **duplicate topic**: "Returned/dishonored check fee cap" and "Genuinely new: returned-check-fee cap (candidate, investigated)" are the same subject occupying two counted rows in two sections. This explains why row-counting and distinct-label-counting diverge structurally rather than by an off-by-one — Taylor's 73 was a deduplicated count, and deduplication legitimately returns a smaller number. Concrete evidence for the amended rule. **Left in place deliberately**: merging them would silently change the denominator again, which is the behaviour the rule exists to prevent.

### 7b. §5a.1 propagation debts — PAID

| Log | Written |
|---|---|
| **MN** | Substantive, not routine. MN §25 resolved its late-fee question by applying Nebraska's reasoning **directly** — reasoning this re-audit overturned in both directions — and MN §16 records that Minnesota's own rule was never independently confirmed. MN's resolution is now **unsupported rather than wrong**, and its open question reverts to open. Two specific checks recorded for MN's own re-audit, plus a standing caution that MN carries pre-re-audit confidence and three of this session's ten new canvass rows likely bear on it. |
| **KS** | `assistance-animal-accommodation` status flip recorded; states-field only, bodyText untouched, so no clause propagation owed. Two contrast findings offered: penalty scoping came out opposite to Kansas (section-list, reaches housing), and species scope diverges via the freeze-date mechanism Kansas does not have. |
| **CO** | `services-utilities-provided` reword — judged **beneficial**, since C.R.S. §38-12-801(3) voids quiet-enjoyment and good-faith waivers and the old wording was waiver-framed. `late-fee` NE removal — state-driven, deliberately not propagated. |
| **WY** | Same reword — judged **neutral**, since the WY re-audit confirmed Wyoming has no prohibited-lease-provisions statute at all. `late-fee` unchanged. |

*Process note:* the MN note was initially appended to a newly-created empty file rather than the real MN log. Caught on inspection and merged; original 66KB content verified intact, note verified at end.

### 7c. Over-claimed rows corrected under the §5a.2 corollary

Three rows had shipped `VERIFIED` on research-pass findings this session had not itself confirmed against primary text. Given this session's own record on secondary sources, that was more generous than the corollary allows.

- **`edu-servicemember-termination-ne` — now PARTIALLY VERIFIED, and materially expanded.** Taylor supplied §55-702(4)–(9), read verbatim. Three provisions were missing from the row entirely: the **ninety-day re-rental protection** (no penalty, fee, loss of deposit or additional cost if the servicemember re-rents within 90 days of returning), the **sixty-day refund** duty, and a **second effective-date rule** for non-monthly agreements (last day of the following month). **§55-702(2)(f) remains unread** — the supplied text references it repeatedly but does not contain it, and the entire government-housing scope limitation rests on it. The body's scope sentence is deliberately hedged rather than stated flatly.
- **`edu-no-eviction-record-sealing-ne` — scoped down.** The absence rests on a direct review of Chapters 76 and 25 and stays `VERIFIED`; the LB175/LB92 bill-history detail is research-sourced corroboration and is now marked unconfirmed. The conclusion does not depend on it.
- **`edu-confirmed-absences-misc-ne` — downgraded to `NEEDS_REVIEW`.** Three of its four absences rest on this session's own reading and are solid. The **payment-method fee ban** absence rests on the research pass's review of Chapter 45, unread here; language softened from "Nebraska does not prohibit" to "no Nebraska statute was found." A negative cannot be closed by pasting text — resolve by a targeted Chapter 45 read, or leave standing as identified-not-proven.


---

## §5a.1 PROPAGATION NOTE — Shared-clause pass, 2026-09-03 (v93 → v94)

Three shared multi-state clauses were edited. Per §5a.1, this note is recorded in **every tagged state's log**, with the uniform-vs-state-driven judgment for each.

### 1. `notices` — EDIT — judgment: **UNIFORM**

Added a saving clause: where applicable law requires a particular method, form, timing, or content for a notice, that requirement controls over the clause, and the lease does not designate an alternative delivery method for any notice governed by law.

**Uniform**, therefore safe to inherit with no per-state override. Every tagged state specifies notice delivery per-statute, so deferring is correct in all of them.

**Trigger:** the Minnesota re-audit found MN specifies delivery section by section with conflicting requirements — the 14-day pre-eviction notice is personal or first class mail **only** and failure means dismissal plus expungement; abandoned-property sale needs personal service **or** first class **and** certified mail **plus** posting; post-writ notice needs mail **plus** a telephone attempt. The prior text named only *where* notices go and was silent on *how*.

**Correction to the original flag:** the concern as first raised (that the clause designated email or a portal) was overstated — the clause never designated anything. It was silent, not wrong. The edit closes a silence rather than fixing an assertion.

### 2. `returned-payments` — EDIT — judgment: **UNIFORM**

"may charge Tenant **any** fee associated with the failed payment" → "may charge Tenant **a** fee ... **not to exceed the maximum amount permitted by applicable law**."

**Uniform**, safe to inherit, no per-state override. The self-limiting formulation is correct in every tagged state regardless of each state's figure.

**Trigger:** all six tagged states have a cap and already carry a row recording it — CO `nsf-fee-limit-co`, WY `edu-returned-check-fee-cap-wy`, KS `edu-nsf-fee-cap-ks`, NE `edu-bad-check-restitution-vs-nsf-fee-ne`, ND `edu-returned-check-fee-cap-nd`, MN `edu-returned-check-fee-cap-mn` ($30, Minn. Stat. §604.113). The unbounded word "any" was therefore wrong in **all six states simultaneously** — the clause promised landlords something no tagged state permits.

### 3. `holdover` — EDIT — judgment: **STATE-DRIVEN figure, uniform-safe edit**

Removed the hardcoded "double the Monthly Rent ... or the maximum amount allowed under applicable law, if less" and replaced it with a pure deferral to the statutory maximum.

The figure is genuinely state-driven, but no per-state override is needed because each state's figure is already carried by its own education row.

**The old text was wrong in BOTH directions, which is why leaving it was not an option:**

- **Over-promised in MN.** Minnesota has **no holdover multiplier at all**. "Double the Monthly Rent" described a remedy that does not exist. The self-limiting tail kept it lawful but misleading.
- **Under-claimed in NE.** Nebraska allows **three months' periodic rent or threefold actual damages, whichever is greater, plus statutory attorney fees** (§76-1437(3)) — all of which **exceed** double monthly rent. The old "or the maximum allowed ... if less" language could only cap **downward**, so a Nebraska landlord relying on the clause would recover materially less than the statute allows.

**The general lesson worth carrying:** a ceiling-only formulation silently forfeits recovery in any state whose statutory figure is *higher* than the hardcoded one. Self-limiting language protects against unlawfulness but not against under-claiming.

KS is unaffected either way — its 1.5× cap (K.S.A. 58-2570(c)) already sits below double.

**GAP SURFACED, NOT CLOSED:** **CO and WY have no holdover-damages education row**, and their statutory figures have never been verified in this project. The "double" figure appears to have originated as Colorado's, but that has not been confirmed against C.R.S. Recommend verifying both and adding `edu-holdover-co` / `edu-holdover-wy` to match KS, NE, and MN.

**Relevance to Nebraska — the most material of the five.** The `holdover` edit **increases** what a Nebraska landlord can claim. The prior ceiling-only text capped recovery at double monthly rent, while §76-1437(3) allows three months' periodic rent or threefold actual damages, whichever is greater, **plus attorney fees**. Nebraska landlords using the prior clause were under-claiming by lease design. This is a landlord-detriment error, the opposite direction from the errors this project usually finds.

**CSV: v93 → v94 (484 rows, unchanged count — body text and notes only).** No new rows; no display collisions introduced.


---

## HOLDOVER FIGURE — PROVENANCE FINDING, 2026-09-03 (v96 → v97)

Follow-up to the shared-clause pass, which removed "double the Monthly Rent" from the generic `holdover` clause and flagged that CO's and WY's figures had never been verified.

**Both are now checked. The result: the "double" figure had no statutory basis in ANY of the five tagged states.**

| State | Actual rule | vs. "double" |
|---|---|---|
| **CO** | No multiplier. C.R.S. §13-40-123 — damages, costs, and attorney fees (residential only if the lease provides). Damages measured as **reasonable rental value** (*Behr v. Burge*, 940 P.2d 1084 (Colo. App. 1996)) | Too high |
| **WY** | No multiplier. Actual damages plus 10% annual interest (§1-21-1211(b), **provisional — see caveat**) | Too high |
| **KS** | 1.5× cap (K.S.A. 58-2570(c)) | Too high |
| **NE** | Three months' periodic rent or threefold actual damages, whichever greater, **plus attorney fees** (§76-1437(3)) | Too **low** |
| **MN** | No multiplier at all | Baseless |

**Wrong in every direction at once** — too high in three states, too low in one, and baseless in the two where it was assumed to have originated.

**The shared-clause pass hypothesized the figure "appears to have originated as Colorado's." That hypothesis is disproved.** Colorado has no multiplier. The number appears to be generic template boilerplate that entered the library before any state-specific research and was never questioned — and it survived four state re-audits.

**Why this one is worth recording as a pattern, not just a fix:** nothing in the library ever asserted a source for "double." Each state's own research quietly contradicted it — KS logged a 1.5× cap, NE logged a higher ceiling, MN logged none — and no pass ever compared the state findings back against the shared clause they were supposed to be qualifying. The self-limiting tail ("or the maximum allowed under applicable law, if less") made the clause lawful everywhere, which is exactly what stopped anyone from looking.

**Also corrected:** `edu-holdover-ne` described double monthly rent as "Colorado's double-rent figure." That attribution was wrong and is now flagged in the row.

New rows: `edu-holdover-co`, `edu-holdover-wy`.

### Confidence caveats, stated plainly

- **CO** — statute text and case annotation both from the Justia codification rather than the Colorado Revisor directly. Sound, but a single source family, and the "no multiplier" conclusion is an **absence finding across Article 40** rather than an express statutory statement. Confirm on the next CO pass.
- **WY — lower confidence, flagged.** The §1-21-1211(b) actual-damages-plus-10%-interest figure comes from **one secondary source last updated in 2022** and was not confirmed against the Wyoming statute. The surrounding negative rests on absence across secondary overviews, not a primary read of Article 10. **This project has already recorded Wyoming secondary sources as unreliable specifically** (the WY log flags Hemlane and LeaseWisely). Primary-verify §1-21-1211 before relying on this row; treat the 10% figure as provisional.


---

## § 5a.1 PROPAGATION NOTE — received from the ND re-audit session, 2026-09-06

**Shared clause edited: `lead-based-paint`.** Its `states` field changed from `CO;WY;KS;NE;MN` to `CO;WY;KS;NE;MN;ND;SD`. **The clause TEXT did not change.** No re-review is owed on this state's existing tag and this state's `last_checked` is unaffected.

**Why the edit happened.** A checklist-to-CSV reconciliation screen — built and first run during the ND re-audit — found that this `REQUIRED` / `LEASE_CLAUSE` row was never tagged ND or SD, even though the consolidated named-topic checklist recorded lead-paint disclosure as "Present (federal)" for ND. Because the `states` field is the display source of truth, a Steinoak-generated ND or SD lease for pre-1978 target housing was **omitting the federally mandated Lead Warning Statement entirely**. Exposure per this row's own record: 42 U.S.C. § 4852d(b)(5), inflation-adjusted to **$22,263 per violation** (24 CFR 30.65(b)), plus treble damages and fees.

**§ 5a.1 judgment: UNIFORM, safe to inherit.** The requirement is federal (40 CFR 745.113(b)) with no state-specific variation — the same judgment already recorded for the KS propagation when the Lead Warning Statement was corrected to verbatim text.

**The transferable lesson, not the tag change, is the reason this note is here.** The checklist asserted coverage the library did not have. That assertion was true about the *law* and false about the *library*, and nothing in the process compared the two. Two new standing screens were earned from it:

1. **Checklist-to-CSV reconciliation** — for every topic marked Present, assert a matching CSV row exists.
2. **Exhaustive generic-clause audit by group** — enumerate every generic clause and test each state's tag, adjudicating misses rather than trusting a keyword probe.

**This state's result on screen 2, run 2026-09-06 across all seven states:** every generic lease clause not tagged to this state has a state-specific override in place. **No defect found here.** The defect was confined to ND (43 clauses, since fixed) and SD (45 clauses, outstanding — flagged for the SD session).

---

# CORE-OBLIGATIONS CANVASS — 2026-09-07 (PARTIAL — deposit block)

Appended during the **South Dakota** re-audit session. Context: SD's re-audit found the consolidated named-topic checklist had **no topic row** for several universal landlord obligations — **Addendum L.10**, accretion bias. A `CORE OBLIGATIONS` section was added; SD, ND, MN, KS and CO have been canvassed. **Nebraska is the sixth state; this pass covers the four security-deposit rows.**

## LB 433 (2019) changed the return trigger — and Nebraska moved away from the architecture Kansas kept

**§ 76-1416(2), current text:** the balance and a written itemization must be delivered or mailed **"within fourteen days after the date of termination of the tenancy."** If the tenant provides no mailing address or instructions, the landlord must mail the balance by **first-class mail**.

**The pre-2019 text read:** *"within fourteen days after **demand and designation of the location** where payment may be made or mailed."*

**LB 433 (2019)** — *"to amend sections 76-1416 and 76-1431 … to change provisions relating to the return of security deposits and damages and the period of time relating to a written notice to quit"* — replaced the demand trigger with a termination trigger and added the liquidated-damages provision.

**This is directly comparable to a Kansas finding recorded earlier in this canvass.** KS § 58-2550(b) still keys its outer deadline to *"termination of the tenancy, delivery of possession, and demand by the tenant."* Both states began from the same URLTA-derived demand architecture; **Nebraska abandoned it in 2019 and Kansas retained it.** A landlord operating in both, or a clause library treating the two as siblings, would get this wrong. Neither state's individual canvass surfaced it — it is visible only because both were run against the same row.

Nebraska's own case law had already been pulling the same direction: *Hilliard v. Robertson*, 253 Neb. 232, construed the fourteen days as the landlord's return period rather than a deadline by which the tenant had to demand.

## Other deposit findings

- **Liquidated damages are a ceiling, not a multiplier.** § 76-1416(3): where the failure is **willful and not in good faith**, the tenant may recover **one month's periodic rent or two times the deposit, whichever is LESS.** **The only "whichever is less" formulation among the five states** — every other jurisdiction canvassed uses a multiplier or a floor. Against CO treble plus fees, ND treble, MN double plus $500 punitive, KS 1½×, SD forfeiture plus a $200 cap, **Nebraska is the least exposed.**
- **Attorney fees are a matter of right.** *Lomack v. Kohl-Watts*, 13 Neb. App. 14, holds the § 76-1416(3) fee award is not discretionary, provided the tenant puts on evidence sufficient for a meaningful award. *Mason v. Schumacher*, 231 Neb. 929, addresses the demand element under the older text.
- **Cap: one month, plus a pet deposit not exceeding one-fourth of one month's rent** — 1¼ months maximum. **Three completely different pet-deposit architectures now recorded**: NE a fraction of rent; **CO a flat $300, refundable**; **ND the greater of $2,500 or two months' rent.** Nothing about one predicts another.
- **"Security, however denominated"** (§ 76-1416(1)) is label-proof like ND's, but lacks the explicit *function* test MN § 504B.178(1) and SD § 43-32-6.1 both use.
- **Successor liability is express** — § 76-1416(5), as in KS § 58-2550(f).
- Housing agencies under the Nebraska Housing Agency Act are excluded from the cap.

## Eleven cells still NOT CANVASSED for Nebraska

Habitability duty and waivability; tenant repair duty; tenant remedy for failure to repair; both assistance-animal rows; general reasonable-accommodation duty; required state disclosures; rent-modification notice; periodic-tenancy termination notice; state-wide lease-content restrictions.

**Section leads from the official act index:** § 76-1411 (obligation of good faith), **§ 76-1412 (unconscionability)**, § 76-1414 (terms and conditions; death of tenant; removal of personal property), **§ 76-1415 (prohibited provisions)**, **§ 76-1417 (disclosure)**, § 76-1418 (landlord to supply possession), **§ 76-1419 (landlord duties)**, § 76-1421 (tenant duties), § 76-1423 (entry — 24-hour rule), § 76-1425/1427 (tenant remedies), § 76-1426 (failure to deliver possession), **§ 76-1431 (notice to quit — also amended by LB 433)**, § 76-1437 (termination of periodic tenancy).

**Note for the next pass:** the whole act is retrievable in one document at `nebraskalegislature.gov/laws/display_html.php?begin_section=76-1401&end_section=76-1449`.

## No CSV changes

Canvass and record only; **no §5a.1 propagation owed.**

### Correction to this entry — a row-destruction bug, found and repaired

The NE deposit cells recorded above were **not actually written on the first attempt**. The fill script aborted on an assertion, and the log entry above was appended anyway — so for one turn this log described cells that did not exist. That is the ND defect this whole project exists to prevent (*"the log described a library that did not exist"*), reproduced in miniature. Recorded rather than quietly fixed.

**Root cause was worse than the abort.** The assertion failed because the *"Security deposit — noncompliance consequence"* row was **malformed — three pipes where there should be nine.** An earlier edit in this session, which replaced Colorado's cell text to resolve the willful/wrongful flag, matched a fragment running to the **end of the line** rather than to the end of the cell. It therefore **overwrote the KS, NE, ND, MN and SD cells on that row**, destroying content already verified from primary text.

**The abort is what saved it.** Had the NE fill not asserted on cell count, the damage would have persisted silently — a row that renders in Markdown without complaint while carrying two cells instead of eight.

**Repaired**: the row was reconstructed with all seven state cells restored from the source text of the earlier writes, and a structural check now confirms **every row in the core-obligations table carries exactly nine pipes**.

**Method lesson, logged to the architecture review as part of L.3's family:** a cell-level edit must be performed by **splitting the row on its delimiter and replacing the indexed cell**, never by string-matching a fragment of the row's text. Every other fill in this canvass used the split-and-index method and none was affected; the one edit that used fragment-matching destroyed five cells. **Post-write column-count verification should run after every table edit, not only after adding rows.**

## §§ 76-1415, 76-1419, 76-1425, 76-1437 — six more cells

**Source:** the Legislature's own act display at `nebraskalegislature.gov`, which renders the whole URLTA in one document; §§ 76-1415 and 76-1437 quoted verbatim from it.

### § 76-1415 verifies the CSV's KS/NE assertion for Nebraska as well

The trunk carries a standing integrity check that **zero `LEASE_CLAUSE` rows tagged KS or NE contain attorney-fee language.** § 58-2547(a)(3) was verified earlier in this canvass for Kansas; **§ 76-1415(1)(c) now verifies it for Nebraska** — and, like Kansas, it is **bilateral**: no agreement may provide that the tenant agrees to pay *"the landlord's or tenant's attorney's fees."* A tenant-favourable fee clause is equally void in both states. The CSV assertion does not record that.

**But the two states' exculpation bans are materially different, and this is the finding worth carrying.**

| | Scope of the exculpation ban |
|---|---|
| **KS** § 58-2547(a)(4) | **"any liability of either party arising under law"**, with a narrow carve-out permitting a limitation of the landlord's liability for **fire, theft or breakage in common areas** |
| **NE** § 76-1415(1)(d) | only liability **"arising due to ACTIVE AND ACTIONABLE NEGLIGENCE of the landlord"** |

Kansas bans broadly and carves out narrowly; Nebraska bans narrowly and carves out nothing. **Nebraska's ban does not on its face reach a limitation of liability for passive negligence, or for anything other than the landlord's own negligence.** Two states that the library treats as a pair on fee clauses are **not** a pair on exculpation — and the exculpatory clause family (`parking`, `storage-space`, `tenants-property-insurance`) is currently excluded from both. That exclusion is verified correct for KS; **for NE it may be over-cautious.** Flagged for NE's next clause review, not actioned.

*Bedrosky v. Hiner*, 230 Neb. 200, is recorded alongside: the Act applies only to residential leases and does not prohibit exculpatory clauses in commercial ones.

### Waivability: Nebraska is the narrowest of the three delegating states — and pairs delegation with an anti-waiver rule

§ 76-1419 permits the tenant to assume the landlord's waste-removal, heat and repair duties **only for a single-family residence**, on conditions including a separate written agreement signed by both. Against the others: **KS § 58-2553(b)** allows delegation in buildings of up to **four households**; **ND § 47-16-13.1(4)–(5)** allows it for single-family by written agreement and for other units on separate-writing-plus-consideration terms.

But Nebraska differs from both in a second way: **§ 76-1415(1)(a) independently voids any provision by which the tenant waives or foregoes rights or remedies under the Act.** ND and KS permit delegation without any such companion prohibition. Nebraska permits the narrowest delegation *and* backs it with an express anti-waiver rule — closer in effect to the non-waivable states than the delegation grouping suggests.

**This complicates the 3–2 split recorded in the CO entry.** On the face of the habitability sections the split is CO/MN/SD non-waivable against ND/KS/NE delegating. **On substance Nebraska sits between**, and a future pass should not treat the grouping as clean.

### Tenant remedy — and a holding that changes how the notice works

§ 76-1425(1): written notice specifying the breach, agreement terminating **not less than 30 days after receipt if not remedied within 14 days**. § 76-1425(2): damages **or** injunctive relief.

***Vasquez v. CHI Properties*, 302 Neb. 742, 925 N.W.2d 304 (2019)** holds that so long as the tenant gave the notice § 76-1419 requires, **the tenant may seek damages or injunctive relief under (2) without ever sending the (1) termination notice** — the conjunction "and" *"serves to vest a tenant with two distinct options for relief"* and does not require both be pursued in order to pursue either. A landlord reading § 76-1425 alone would expect the 30-day notice to be a precondition to any remedy. It is not.

**No repair-and-deduct and no escrow**, as in Kansas.

### Termination notice

§ 76-1437: **7 days** week-to-week, **30 days** month-to-month, either party, running to the periodic rental date specified in the notice. **Functionally identical to KS § 58-2570's 7/30 split** — the two URLTA states align here, against the three scaling states (ND and SD capping at one month, MN at three) and against CO, whose tiers reach 91 days and which since HB 24-1098 bars a residential landlord from using the notice route at all. Separate fire/casualty route at § 76-1429.

## Nebraska status

**Ten of fifteen cells filled.** Remaining `NOT CANVASSED`: both assistance-animal rows; general reasonable-accommodation duty; required state disclosures (**§ 76-1417 is the lead**); rent-modification notice.

**Tiered below the rest:** the tenant-duty cell, enumerated from the official act index and concordant description rather than from § 76-1421's own text.

## §§ 76-1417, 76-1410(7) and the remaining cells — Nebraska canvass complete

**§ 76-1417 — one disclosure, and the sanction for omitting it is unlike any other state's.**

> "(1) The landlord or any person authorized to enter into a rental agreement on his or her behalf **shall disclose to the tenant in writing at or before the commencement of the tenancy** the name and address of: (a) The person authorized to manage the premises; and (b) An owner of the premises or a person authorized to act for and on behalf of the owner for the purpose of service of process and for the purpose of receiving and receipting for notices and demands.
> (2) The information required to be furnished by this section **shall be kept current** and this section **extends to and is enforceable against any successor landlord, owner, or manager.**"

**The sanction is definitional, and it is severe.** § 76-1410(7): *"Landlord means the owner, lessor, or sublessor of the dwelling unit … and it also means **a manager of the premises who fails to disclose as required by section 76-1417**."*

A manager who omits the disclosure **becomes the landlord** for every purpose of the Act — assuming the habitability duties, the deposit obligations, and the liability. **Kansas § 58-2551 makes the non-discloser the landlord's *agent*; Nebraska makes them the *landlord*.** Two URLTA states that align almost exactly on termination notice and fee-clause bans diverge sharply here, and the divergence is buried in a definitions section rather than the disclosure section itself — invisible to a canvass that reads only the provision naming the topic.

Neither Dakota nor MN has a comparable consequence. MN requires the same disclosure **plus conspicuous posting on the premises**; Nebraska requires no posting but attaches a heavier penalty.

**Rent-modification: Nebraska has no statutory rent-increase notice at all.** Nothing in the Act prescribes one. During a fixed term rent cannot be raised unless the lease permits it; for a periodic tenancy the only route is the § 76-1437 termination notice, which **ends the tenancy rather than modifying it**. Nebraska also has no rent control, no statutory late-fee cap, and no mandatory grace period.

Across the six states now canvassed on this row: **CO** limits the *frequency* of increases (once per twelve months, § 38-12-702) and requires 60 days' notice absent a written agreement; **ND** § 47-16-07 and **SD** § 43-32-13 both require 30 days, SD adding a 15-day tenant counter-right; **MN** § 504B.135 addresses termination rather than modification; **NE** and **KS** prescribe nothing.

### Three cells recorded as "not located" rather than confirmed absent

**Assistance-animal documentation** and **fee/penalty**: nothing in the URLTA, and no Nebraska analogue found to ND § 47-16-07.5, MN § 504B.113, SD § 43-32-35, or Colorado's provider-side rule at § 12-245-229. The federal FHA standard governs through the Nebraska Fair Housing Act. **Recorded as *not located*, not confirmed absent** — Title 20's disability provisions were not searched section by section, and the SD session's § 20-13-23.4 episode is the standing reason not to convert a failed search into an affirmative absence.

**General reasonable accommodation**: the **Nebraska Fair Housing Act, § 20-318 et seq.**, is consistently described as reaffirming the FHA in housing and is enforced by the Nebraska Equal Opportunity Commission. **No § 20-318 text was read from primary source.** Same tier as Kansas's KAAD and North Dakota's unsearched Title 14-02.4. **SD § 20-13-23.7 remains the only primary-verified accommodation duty of the six states.**

## Nebraska status — canvass complete

**Fifteen of fifteen cells carry a status.** Ten filled from primary text at the Legislature's own act display; two tiered below that and marked; three recorded as *not located* with the search boundary stated.

**No CSV changes.** Canvass and record only; **no §5a.1 propagation owed.** One clause-level question is flagged for NE's next review: whether the exculpatory clause family's exclusion from NE is over-cautious, given § 76-1415(1)(d) reaches only *active and actionable negligence of the landlord* where KS § 58-2547(a)(4) reaches any liability of either party.

## CORRECTION to this log's waivability finding — the 4–3 split was wrong

The § 76-1415 entry above qualified a **"4–3 split"** on habitability waivability, noting that Nebraska sits between the groups because it pairs the narrowest delegation with § 76-1415(1)(a)'s express anti-waiver rule. **That qualification stands and was correct. The underlying split did not.**

It counted Wyoming in the non-waivable group on the strength of a secondary source. **Wyo. Stat. § 1-21-1202(d)**, read from wyoleg.gov: *"Any duty or obligation in this article may be assigned to a different party or modified by explicit written agreement signed by the parties."* Wyoming permits **everything** to be modified — it belongs at the opposite pole.

**Corrected picture — three groups:**

| Non-waivable | Structured delegation permitted | Fully modifiable |
|---|---|---|
| CO · MN · SD | **NE** (narrowest delegation, plus an anti-waiver rule) · ND · KS | WY |

**Nebraska's own position is unchanged** and the observation that it sits closest to the non-waivable group within its own tier is, if anything, reinforced: NE is now the most protective member of the middle group, with Wyoming occupying a third category alone rather than sharing the protective end.

**Recorded rather than silently amended**, since the earlier split was stated as a finding in this log.

## Exculpatory family — the flag was framed on a false premise, and the real defect was narrower (v135)

**First, the error.** This canvass flagged that NE's exclusion from `parking`, `storage-space` and `tenants-property-insurance` might be over-cautious, and presented Taylor with three options on the stated premise that **"Nebraska landlords currently get none of these clauses."**

**That premise was false.** `parking-ne`, `storage-space-ne` and `tenants-property-insurance-ne` all already existed. So do the Kansas equivalents. The premise came from reading the **generic's** `states` field — `CO;WY;ND;SD` — and inferring that NE and KS had no coverage.

**That is the L.14 error, committed for the third time in this session, minutes after L.14 was written.** A decision was put to Taylor on the strength of it. The rule L.14 states — *query the CSV for overrides before raising a clause-level flag* — would have resolved this in one query, and did resolve it the moment it was finally run.

**Second, checking properly found a real defect — a narrower one than the flag described.**

The existing NE overrides carved the exculpation as:

> "…except to the extent caused by Landlord's **gross negligence or willful misconduct**."

**Gross negligence is a higher bar than the statute's.** § 76-1415(1)(d) voids exculpation of liability *"arising due to **active and actionable negligence** of the landlord."* A landlord who leaves a gate open, or ignores a known broken lock, is **actively and actionably negligent without being grossly negligent** — so the carve-out left the clause purporting to exculpate precisely the band the statute voids, and void pro tanto in that band.

**Corrected** in all three overrides to track the statutory phrase: *"except to the extent caused by Landlord's active and actionable negligence, or Landlord's willful misconduct."*

**Deliberately not widened to "any negligence."** Nebraska voids only **active** and actionable negligence; a blanket negligence carve-out would surrender **passive** negligence that Nebraska permits. The same reasoning that ruled out amending the generic rules out over-carving the override.

**The generic was considered and left alone**, on the analysis Taylor and I worked through: its blanket not-liable sentence is **currently enforceable in all four tagged states** — SD (§ 53-9-3 reaches only fraud, willful injury and violation of law; *Holzer* and *Domson* confirm ordinary-negligence exculpation stands), ND (N.D.C.C. 9-08-02, the direct counterpart), WY (§ 1-21-1202(d) makes every duty modifiable), CO (§ 38-12-801 bans enumerated waivers, not negligence exculpation generally). Amending it would have surrendered protection those four states affirmatively allow in order to fix a fifth. **§5a.1: state-driven, not uniform.**

**Still open, and it bears on how bad a non-compliant clause would be:** § 76-1415(2)'s consequence for *including* a prohibited provision has not been read. Kansas's analogue, § 58-2547(b), gives the tenant **actual damages** where the landlord "deliberately uses" a rental agreement containing provisions known to be prohibited. Nebraska's equivalent is unknown.


## Propagated from the Nevada pass, 2026-09-24

Two shared rows tagged to this state were edited by the Nevada pass (§5a.1 / instruction 9):

1. `common-area-use` — appended: "Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner." Driven by NRS 118A.325 / 118A.327 (NV). Classification: UNIFORM — self-limiting, adds no obligation where no such law exists. Inherit without override.
2. `parking-vehicle-rules` — inserted "in accordance with applicable law" before the landlord's towing authority. Driven by NRS 487.038 (NV). Classification: UNIFORM — self-limiting. Inherit without override.

`last_checked` on both rows reset to 2026-09-24. No other field changed. Detail: lease-clause-decision-log-NV.md §§3.1, 11.6, 16. (Appended at sync, 2026-09-25.)
