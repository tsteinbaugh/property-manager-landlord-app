# Three-bucket scrub — verdicts (2026-09-29)

Checklist instruction 66 applied to every active lease clause (513): does it belong in the lease at all? Classification only, from each row's own text, notes and log. No new legal research, so not a re-audit. **Verdicts are recorded here and in `lease-clauses.csv`'s `lease_clause_basis` column; the row changes are applied state by state in later commits.**

## How to read this

- **Keep:** passes; the basis is recorded.
- **Education:** moves to a landlord education row. The lease clause is switched off (`is_active: FALSE`), not deleted, so a future "comprehensive lease" option could restore it.
- **Split:** the part that belongs stays in the clause; the restated law moves to education.
- **Optional + education** (Taylor's pattern 3): a disclosure owed before signing or on request. The clause becomes optional, paired with an education row explaining it can go in the lease or be given on request. Where a statute requires it in the lease, the clause is REQUIRED instead.
- **Notice-period rewrite** (pattern 2): the statute sets a notice floor, so the clause states the landlord's chosen period and the builder checks it (Addendum M.13).
- **Needs Taylor:** a decision only Taylor can make.

**Rule for restatements (Taylor, 2026-09-29):** restating a tenant duty or a landlord right serves the landlord and stays; restating a tenant right or a landlord duty is education unless a statute requires it in the lease or it carries a lease choice. Pattern 1: tenant-right restatements go to education only.

**Basis values:** `REQUIRED_DISCLOSURE: <statute>`, `CONSTRAINED_TERM`, `SERVES_LANDLORD`, or `PENDING_SCRUB: …` until a row's change is applied. `check-clause-basis.py` enforces them.

**Not applied yet:** cap removals depend on builder limit checks (Addendum M.13), which are on the pre-launch builder list.

The 67 multi-state rows all stay (generic contract terms; `lead-based-paint` is `REQUIRED_DISCLOSURE: 40 CFR 745.113`).

**Totals (446 single-state rows):** Keep 285, Education 87, Split 51, Optional + education 17, Notice-period rewrite 6, Needs Taylor 0.

## CO

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `late-fee-limit-co` | Education | — | cap + 7-day floor restated; 180-day notice is a landlord duty; §38-12-105(1)(c) in-lease disclosure met by late-fee |
| `nsf-fee-limit-co` | Education | — | returned-payments sets the fee; not-Rent sentence restates law |
| `habitability-timeline-co` | Education | — | restates §38-12-503 duties |
| `dv-stalking-termination-co` | Education | — | tenant right §38-12-402 |
| `ev-charging-rights-co` | Education | — | tenant right §38-12-601 |
| `subsidy-late-fee-co` | Education | — | subsidy protection |
| `subsidy-habitability-proration-co` | Education | — | subsidy protection |
| `landlords-access-co` | Split | SERVES_LANDLORD | keep access right + 24h written notice; 48h bed-bug rule to edu |
| `utility-submetering-disclosure-co` | Split | REQUIRED_DISCLOSURE: C.R.S. § 6-1-737(4.5)(d) | method must be in lease; fee cap -> landlord chosen fee |
| `security-deposit-return-co` | Split | SERVES_LANDLORD | keep 30/60-day lease choice; itemization & wear-tear to edu |
| `habitability-notice-co` | Split | SERVES_LANDLORD | keep written-notice channel; restated warranty/retaliation to edu |
| `rent-increase-notice-co` | Split | CONSTRAINED_TERM | keep notice period; 12-month cap to edu |
| `month-to-month-notice-co-exempt` | Notice-period rewrite | SERVES_LANDLORD | tiers are statutory floors; keep exemption statement |
| `month-to-month-notice-co-covered` | Notice-period rewrite | CONSTRAINED_TERM | tiers restated; for-cause restriction to edu |
| `bed-bug-disclosure-co` | Optional + education | SERVES_LANDLORD | owed on request to prospective tenant |
| `ev-charging-requirements-co` | Keep | SERVES_LANDLORD |  |
| `ev-charging-shared-area-co` | Keep | SERVES_LANDLORD |  |
| `ev-charging-end-of-tenancy-co` | Keep | SERVES_LANDLORD | weak: adds tenant damage duty |
| `radon-disclosure-co` | Keep | REQUIRED_DISCLOSURE: C.R.S. § 38-12-803 |  |
| `assistance-animal-accommodation-co` | Keep | SERVES_LANDLORD | documentation procedure, damage duty, required warning |
| `utility-allowance-cap-co` | Keep | CONSTRAINED_TERM |  |
| `environmental-event-termination-co` | Keep | SERVES_LANDLORD | opt-in right only if lease permits |
| `source-of-income-statement-co` | Keep | REQUIRED_DISCLOSURE: C.R.S. § 38-12-801(2.5) | optional (small-landlord exemption); track statutory wording |

## WY

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-safe-homes-wy` | Education | — | tenant defense |
| `habitability-baseline-wy` | Education | — | landlord duty |
| `utility-deposit-return-wy` | Education | — | landlord duty |
| `security-deposit-return-wy` | Split | SERVES_LANDLORD | keep tenant forwarding-address duty; timeline to edu |
| `renter-duties-wy` | Keep | SERVES_LANDLORD |  |
| `prohibited-acts-renter-wy` | Keep | SERVES_LANDLORD |  |
| `nonrefundable-deposit-notice-wy` | Keep | REQUIRED_DISCLOSURE: Wyo. Stat. § 1-21-1207 |  |
| `unpaid-damages-interest-wy` | Keep | SERVES_LANDLORD | landlord right |
| `abandoned-property-wy` | Keep | SERVES_LANDLORD | landlord disposal right |
| `assistance-animal-accommodation-wy` | Keep | SERVES_LANDLORD |  |
| `periodic-tenancy-notice-wy` | Keep | CONSTRAINED_TERM | no WY statutory period; lease supplies it |
| `agent-capacity-designation-wy` | Keep | SERVES_LANDLORD | opt-out only works in the rental agreement |
| `casualty-termination-wy` | Keep | SERVES_LANDLORD | contract choice, no WY statute |

## KS

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-ks` | Education | — | landlord duty |
| `habitability-baseline-ks` | Education | — | landlord duty |
| `dv-housing-protections-ks` | Education | — | tenant right |
| `possession-delay-ks` | Education | — | tenant remedies incl 1.5x |
| `fire-casualty-termination-ks` | Education | — | tenant right |
| `security-deposit-use-ks` | Keep | SERVES_LANDLORD | bars applying deposit to last month |
| `landlord-disclosure-ks` | Keep | REQUIRED_DISCLOSURE: K.S.A. 58-2551 |  |
| `tenant-duties-ks` | Keep | SERVES_LANDLORD |  |
| `abandoned-property-ks` | Keep | SERVES_LANDLORD |  |
| `late-fee-ks` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `move-in-inventory-ks` | Keep | SERVES_LANDLORD | joint inventory documents condition for deductions |
| `identity-change-liability-ks` | Keep | SERVES_LANDLORD |  |
| `pet-policy-ks` | Keep | SERVES_LANDLORD |  |
| `smoke-detectors-ks` | Keep | SERVES_LANDLORD | tenant maintenance duty |

## NE

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-ne` | Education | — | landlord duty |
| `dv-lease-release-ne` | Education | — | tenant right |
| `dv-perpetrator-removal-ne` | Education | — | tenant right |
| `dv-lockchange-ne` | Education | — | tenant right |
| `habitability-baseline-ne` | Education | — | landlord duty |
| `possession-delay-ne` | Education | — | tenant remedies incl 3x |
| `casualty-termination-ne` | Education | — | tenant right |
| `landlord-disclosure-ne` | Keep | REQUIRED_DISCLOSURE: Neb. Rev. Stat. § 76-1417 |  |
| `extended-absence-notice-ne` | Keep | SERVES_LANDLORD |  |
| `abandoned-property-ne` | Keep | SERVES_LANDLORD |  |
| `tenant-duties-ne` | Keep | SERVES_LANDLORD |  |
| `early-termination-ne` | Keep | SERVES_LANDLORD |  |
| `smoke-detector-duty-ne` | Keep | SERVES_LANDLORD |  |
| `tenants-property-insurance-ne` | Keep | SERVES_LANDLORD |  |
| `parking-ne` | Keep | SERVES_LANDLORD |  |
| `storage-space-ne` | Keep | SERVES_LANDLORD |  |
| `pet-policy-ne` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-ne` | Keep | SERVES_LANDLORD |  |
| `carbon-monoxide-alarm-duty-ne` | Keep | SERVES_LANDLORD | tenant maintenance allocation |

## MN

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-mn` | Education | — | landlord duty |
| `termination-infirmity-mn` | Education | — | tenant right |
| `possession-delay-mn-new-construction` | Education | — | landlord duty / tenant options |
| `dv-lease-termination-mn` | Education | — | tenant right |
| `fire-casualty-termination-mn` | Education | — | tenant right |
| `cash-rent-receipt-mn` | Education | — | landlord duty |
| `prelease-deposit-application-mn` | Education | — | landlord duty |
| `utility-apportionment-mn` | Split | SERVES_LANDLORD | keep estimated-final-bill right and method; caps/no-disconnect to edu |
| `habitability-baseline-mn` | Split | SERVES_LANDLORD | keep tenant written repair notice; rest edu |
| `foreclosure-disclosure-mn` | Optional + education | SERVES_LANDLORD | written notice owed before entering lease |
| `initial-final-inspection-mn` | Optional + education | SERVES_LANDLORD | inspection-option notice owed at commencement |
| `landlords-access-mn` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `termination-death-of-tenant-mn` | Keep | SERVES_LANDLORD | weak: includes landlord termination right |
| `abandoned-property-mn` | Keep | SERVES_LANDLORD |  |
| `tenants-property-insurance-mn` | Keep | SERVES_LANDLORD |  |
| `pet-policy-mn` | Keep | SERVES_LANDLORD | REQUIRED_DISCLOSURE: Minn. Stat. § 504B.113 subd. 3(b) |  |
| `parking-mn` | Keep | SERVES_LANDLORD |  |
| `storage-space-mn` | Keep | SERVES_LANDLORD |  |
| `services-utilities-provided-mn` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-mn` | Keep | SERVES_LANDLORD |  |
| `smoke-detector-duty-mn` | Keep | SERVES_LANDLORD |  |
| `carbon-monoxide-alarm-duty-mn` | Keep | SERVES_LANDLORD |  |
| `landlord-disclosure-mn` | Keep | REQUIRED_DISCLOSURE: Minn. Stat. § 504B.181 |  |
| `deposit-last-month-rent-mn` | Keep | SERVES_LANDLORD |  |
| `lease-copy-receipt-mn` | Keep | SERVES_LANDLORD | statute blesses in-lease acknowledgment |
| `utility-billing-schedule-mn` | Keep | REQUIRED_DISCLOSURE: Minn. Stat. § 504B.215 |  |
| `cold-weather-vacate-notice-mn` | Keep | SERVES_LANDLORD |  |

## ND

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-nd` | Education | — | landlord duty |
| `termination-by-death-nd` | Education | — | estate right |
| `fire-casualty-termination-nd` | Education | — | tenant right |
| `dv-lease-release-nd` | Education | — | tenant right |
| `landlord-maintenance-nd` | Split | SERVES_LANDLORD | keep tenant written repair notice; rest edu |
| `termination-notice-nd` | Notice-period rewrite | CONSTRAINED_TERM | statutory one-month period restated |
| `assistance-animal-accommodation-nd` | Keep | SERVES_LANDLORD |  |
| `abandoned-property-nd` | Keep | SERVES_LANDLORD |  |
| `smoke-detector-duty-nd` | Keep | SERVES_LANDLORD |  |
| `tenant-maintenance-nd` | Keep | SERVES_LANDLORD |  |
| `lease-notice-initial-requirement-nd` | Keep | REQUIRED_DISCLOSURE: N.D.C.C. § 47-16-15(4) |  |
| `landlords-access-nd` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `tenant-notice-of-adverse-proceeding-nd` | Keep | SERVES_LANDLORD |  |

## SD

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-sd` | Education | — | landlord duty + forfeiture |
| `dv-lease-release-sd` | Education | — | tenant right |
| `edu-tenant-termination-causes-sd` | Education | — | tenant right (already edu- id) |
| `landlord-maintenance-sd` | Split | SERVES_LANDLORD | keep tenant repair-notice duty; rest edu |
| `meth-disclosure-sd` | Optional + education | SERVES_LANDLORD | disclosure owed before tenant is obligated |
| `assistance-animal-accommodation-sd` | Keep | SERVES_LANDLORD | $1,000 false-claim fee |
| `abandoned-property-sd` | Keep | SERVES_LANDLORD |  |
| `default-by-tenant-sd` | Keep | SERVES_LANDLORD | SDCL 21-16-1(7): lease must specify violation terminates |
| `fire-casualty-rent-abatement-sd` | Keep | SERVES_LANDLORD | contract choice |
| `landlords-access-sd` | Keep | CONSTRAINED_TERM |  |
| `holdover-sd` | Keep | SERVES_LANDLORD | weak: restates renewal presumption |
| `pet-policy-sd` | Keep | SERVES_LANDLORD |  |

## OH

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-interest-oh` | Education | — | landlord interest duty |
| `flag-display-oh` | Education | — | tenant right |
| `landlord-maintenance-oh` | Education | — | landlord-duty restatement; Taylor 2026-09-29: apply the rule (reverses the 2026-09-28 add) |
| `fire-casualty-termination-oh` | Education | — | tenant right |
| `security-deposit-return-oh` | Split | SERVES_LANDLORD | keep forwarding-address duty and its consequence; timeline to edu |
| `termination-notice-oh` | Notice-period rewrite | CONSTRAINED_TERM | statutory periods restated |
| `holdover-oh` | Keep | CONSTRAINED_TERM | stipulated rate |
| `landlord-identity-oh` | Keep | REQUIRED_DISCLOSURE: R.C. 5321.18 |  |
| `repair-escrow-exemption-notice-oh` | Keep | REQUIRED_DISCLOSURE: R.C. 5321.07(C) | exemption applies only if landlord gives notice |
| `sex-offender-occupancy-oh` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-oh` | Keep | SERVES_LANDLORD |  |

## CA

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-cap-ca` | Education | — | cap to edu; Taylor 2026-09-29: tag the shared security-deposit-use for CA after checking it against Civ. Code § 1950.5(b), so CA keeps a deposit amount and use clause |
| `notice-service-fee-ban-ca` | Education | — | landlord prohibition |
| `accommodation-request-rights-ca` | Education | — | tenant right |
| `reasonable-modification-ca` | Education | — | tenant right |
| `repair-and-deduct-ca` | Education | — | tenant remedy |
| `rent-increase-notice-ca` | Education | — | landlord duty, statute sets periods |
| `political-signs-ca` | Education | — | tenant right |
| `dv-lease-termination-ca` | Education | — | tenant right |
| `emergency-assistance-right-ca` | Education | — | tenant right |
| `casualty-termination-ca` | Education | — | tenant right |
| `immigration-status-inquiry-ca` | Education | — | landlord prohibition |
| `tenant-use-rights-ca` | Education | — | tenant rights |
| `pest-control-notice-ca` | Education | — | landlord notice duties |
| `disaster-duties-ca` | Education | — | landlord duties |
| `lock-change-non-cotenant-ca` | Education | — | tenant right |
| `internet-billing-optout-ca` | Education | — | tenant right |
| `military-lease-termination-ca` | Education | — | tenant right |
| `nsf-fee-limit-ca` | Split | CONSTRAINED_TERM | keep fee placeholder; cap and tenant defenses to edu |
| `security-deposit-return-ca` | Split | SERVES_LANDLORD | keep lease-choice deduction for personal property; rest edu |
| `rent-increase-cap-ca` | Split | REQUIRED_DISCLOSURE: Civ. Code § 1947.12 | keep concession listing; cap to edu |
| `payment-methods-ca` | Split | SERVES_LANDLORD | keep accepted methods and cash-only right; restated duties to edu |
| `due-at-signing-ca` | Split | SERVES_LANDLORD | trim cap sentence to edu |
| `stove-refrigerator-ca` | Split | REQUIRED_DISCLOSURE: Civ. Code § 1941.1(a)(11)(B) | keep tenant-supplied fridge acknowledgment; duty to edu |
| `security-devices-ca` | Split | SERVES_LANDLORD | keep tenant notice duty; landlord duty to edu |
| `unbundled-parking-ca` | Split | REQUIRED_DISCLOSURE: Civ. Code § 1947.1 | keep parking-not-included statement and revocation right; rest edu |
| `month-to-month-notice-ca` | Notice-period rewrite | CONSTRAINED_TERM | notice periods restated |
| `bed-bug-disclosure-ca` | Optional + education | SERVES_LANDLORD | Civ. Code 1954.603 written notice to prospective tenants; keep reporting procedure |
| `meth-disclosure-ca` | Optional + education | SERVES_LANDLORD | written notice before signing |
| `ordnance-demolition-meter-disclosures-ca` | Optional + education | SERVES_LANDLORD | written disclosure before execution |
| `water-submeter-disclosure-ca` | Optional + education | SERVES_LANDLORD | disclosure before execution |
| `mold-booklet-disclosure-ca` | Optional + education | SERVES_LANDLORD | booklet before signing; keep tenant notice duty |
| `late-fee-safe-harbor-ca` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD | liquidated damages must be agreed |
| `flood-disclosure-ca` | Keep | REQUIRED_DISCLOSURE: Gov. Code § 8589.45 |  |
| `sex-offender-registry-notice-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 2079.10a |  |
| `tpa-notice-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code §§ 1946.2(f), 1947.12(g) |  |
| `tpa-exemption-notice-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 1946.2(e)(8)(B)(iii) |  |
| `owner-move-in-reservation-ca` | Keep | SERVES_LANDLORD | opt-in right |
| `bed-bug-cooperation-ca` | Keep | SERVES_LANDLORD | tenant duty |
| `assistance-animal-accommodation-ca` | Keep | SERVES_LANDLORD |  |
| `landlord-entry-ca` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `owner-identity-disclosure-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 1962 |  |
| `tenant-maintenance-obligations-ca` | Keep | SERVES_LANDLORD |  |
| `waterbed-ca` | Keep | SERVES_LANDLORD | weak: landlord insurance/deposit/inspection rights |
| `rent-payment-ca` | Keep | SERVES_LANDLORD |  |
| `existing-condition-ca` | Keep | SERVES_LANDLORD |  |
| `services-utilities-provided-ca` | Keep | SERVES_LANDLORD |  |
| `common-area-use-ca` | Keep | SERVES_LANDLORD |  |
| `pet-policy-ca` | Keep | SERVES_LANDLORD |  |
| `early-termination-ca` | Keep | SERVES_LANDLORD | opt-in 1951.2 measure |
| `continue-lease-remedy-ca` | Keep | SERVES_LANDLORD | opt-in 1951.4 form |
| `no-sublet-assign-ca` | Keep | SERVES_LANDLORD |  |
| `alarm-duties-ca` | Keep | SERVES_LANDLORD | tenant duties + entry right |
| `ev-charging-ca` | Keep | SERVES_LANDLORD | tenant request conditions and costs |
| `auto-renewal-formatting-ca` | Keep | REQUIRED_DISCLOSURE: Civ. Code § 1945.5 |  |
| `no-sublet-assign-discretion-ca` | Keep | SERVES_LANDLORD |  |
| `possession-delay-ca` | Keep | SERVES_LANDLORD |  |
| `landlord-maintenance-ca` | Keep | SERVES_LANDLORD | allocation, same as generic |

## NV

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `possession-delay-nv` | Education | — | tenant remedies |
| `dv-lease-termination-nv` | Education | — | tenant right |
| `infirmity-death-termination-nv` | Education | — | tenant right |
| `property-tax-rent-disclosure-nv` | Education | — | annual landlord statement duty |
| `late-fee-nv` | Split | CONSTRAINED_TERM | REQUIRED_DISCLOSURE: NRS 118A.200(3) | keep fee; 3-day floor and 5% cap to edu |
| `security-deposit-cap-nv` | Split | SERVES_LANDLORD | keep surety-bond option; cap to edu |
| `security-deposit-return-nv` | Split | SERVES_LANDLORD | keep nonrefundable cleaning charge statement and forwarding address; rest edu |
| `rent-increase-notice-nv` | Split | SERVES_LANDLORD | keep no-increase-during-term; notice period to edu |
| `casualty-termination-nv` | Split | SERVES_LANDLORD | keep landlord termination right; tenant rights to edu |
| `foreclosure-disclosure-nv` | Optional + education | SERVES_LANDLORD | written disclosure before entering lease |
| `rent-single-figure-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200 |  |
| `move-in-inventory-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(k) |  |
| `owner-identity-disclosure-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.260 |  |
| `tenant-maintenance-nv` | Keep | SERVES_LANDLORD |  |
| `pet-policy-nv` | Keep | SERVES_LANDLORD | REQUIRED_DISCLOSURE: NRS 118A.200(3)(c) |  |
| `payment-methods-nv` | Keep | CONSTRAINED_TERM | REQUIRED_DISCLOSURE: NRS 118A.200 |  |
| `returned-payments-nv` | Keep | CONSTRAINED_TERM | REQUIRED_DISCLOSURE: NRS 118A.200(3)(g) |  |
| `abandoned-property-nv` | Keep | SERVES_LANDLORD |  |
| `flag-display-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(n) |  |
| `religious-display-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(o) |  |
| `nuisance-reporting-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(l)-(m) |  |
| `sfr-occupancy-disclosure-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(4) |  |
| `smoke-detector-duty-nv` | Keep | SERVES_LANDLORD |  |
| `children-occupancy-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3)(c) |  |
| `required-fees-nv` | Keep | REQUIRED_DISCLOSURE: NRS 118A.200(3) |  |
| `tenant-repair-agreement-nv` | Keep | SERVES_LANDLORD | opt-in |
| `designated-repairer-nv` | Keep | SERVES_LANDLORD | opt-in |

## TX

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `late-fee-safe-harbor-tx` | Split | CONSTRAINED_TERM | keep fee and liquidated-damages agreement; floor, cap and statement duty to edu |
| `nsf-fee-limit-tx` | Split | CONSTRAINED_TERM | keep fee; $30 cap to edu |
| `utility-submetering-disclosure-tx` | Split | REQUIRED_DISCLOSURE: 16 Tex. Admin. Code § 24.279 | keep disclosures; charge limits to edu |
| `security-deposit-return-tx` | Split | SERVES_LANDLORD | keep forwarding-address and e-mail designation; rest edu |
| `emergency-phone-tx` | Optional + education | SERVES_LANDLORD | statute requires the number, not in the lease |
| `habitability-timeline-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code § 92.056(g) |  |
| `flood-disclosure-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code § 92.0135 |  |
| `keys-tx` | Keep | SERVES_LANDLORD |  |
| `acceptable-payment-methods-tx` | Keep | CONSTRAINED_TERM |  |
| `deposit-surrender-notice-tx` | Keep | SERVES_LANDLORD | opt-in |
| `deposit-last-month-rent-tx` | Keep | SERVES_LANDLORD |  |
| `tenant-repair-agreement-tx` | Keep | SERVES_LANDLORD | opt-in |
| `security-devices-tx` | Keep | SERVES_LANDLORD | bold statement extends cure time; written-request rule |
| `smoke-alarm-tx` | Keep | SERVES_LANDLORD | remedies need the bold notice |
| `early-termination-rights-statement-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code §§ 92.016(f), 92.0161(g) |  |
| `owner-management-disclosure-tx` | Keep | SERVES_LANDLORD | inclusion in lease is full compliance |
| `casualty-loss-tx` | Keep | SERVES_LANDLORD | weak: mutual termination; insurance-proceeds timing |
| `lockout-rent-delinquency-tx` | Keep | SERVES_LANDLORD | opt-in |
| `parking-rules-tx` | Keep | REQUIRED_DISCLOSURE: Tex. Prop. Code § 92.0131 |  |
| `electric-submeter-interruption-tx` | Keep | SERVES_LANDLORD | opt-in |
| `deceased-tenant-contact-tx` | Keep | SERVES_LANDLORD |  |
| `landlord-lien-tx` | Keep | SERVES_LANDLORD | opt-in |
| `electronic-notice-consent-tx` | Keep | SERVES_LANDLORD | opt-in |
| `notice-to-vacate-period-tx` | Keep | CONSTRAINED_TERM |  |
| `parking-vehicle-rules-tx` | Keep | SERVES_LANDLORD |  |
| `electric-submeter-disclosure-tx` | Keep | SERVES_LANDLORD |  |
| `abandoned-property-tx` | Keep | SERVES_LANDLORD | opt-in definition |

## NJ

**Applied 2026-09-29.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-interest-nj` | Education | — | landlord duties |
| `casualty-nj` | Education | — | restates statutory abatement |
| `security-deposit-return-nj` | Split | SERVES_LANDLORD | keep deposit amount; cap and return duties to edu |
| `late-fee-nj` | Split | CONSTRAINED_TERM | keep fee; senior grace rule to edu |
| `acceptable-payment-methods-nj` | Split | CONSTRAINED_TERM | keep methods; receipt and post-warrant duties to edu |
| `holdover-nj` | Split | SERVES_LANDLORD | keep double-rent remedies; Anti-Eviction restatement to edu |
| `surrender-end-of-term-nj` | Split | SERVES_LANDLORD | keep surrender duties; property procedure to edu |
| `private-well-test-results-nj` | Split | SERVES_LANDLORD | keep acknowledgment; testing duty to edu |
| `pet-policy-nj` | Keep | SERVES_LANDLORD |  |
| `window-guard-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.A.C. 5:10-27.1 |  |
| `flood-insurance-lease-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 46:8-50(c) |  |
| `flood-risk-disclosure-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 46:8-50 |  |
| `truth-in-renting-statement-nj` | Keep | SERVES_LANDLORD | acknowledgment of required delivery |
| `landlord-registration-disclosure-nj` | Keep | SERVES_LANDLORD | acknowledgment of required delivery |
| `lead-safe-certification-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 52:27D-437.16 |  |
| `conversion-statement-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 2A:18-61.9 |  |
| `rent-control-exemption-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 2A:42-84.1 et seq. |  |
| `tenant-supplied-heat-nj` | Keep | SERVES_LANDLORD | written agreement shifts heat |
| `right-of-reentry-nj` | Keep | SERVES_LANDLORD | opt-in |
| `default-by-tenant-nj` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-nj` | Keep | SERVES_LANDLORD |  |
| `returned-payments-nj` | Keep | CONSTRAINED_TERM |  |
| `steam-radiator-cover-notice-nj` | Keep | REQUIRED_DISCLOSURE: N.J.S.A. 52:27D-198.20 |  |

## FL

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `casualty-damage-fl` | Education | — | tenant right |
| `security-deposit-return-fl` | Split | CONSTRAINED_TERM | keep holding-method choice; restated duties to edu |
| `nsf-fee-limit-fl` | Keep | CONSTRAINED_TERM | fee stated as the term |
| `flood-disclosure-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 83.50(2) |  |
| `security-deposit-notice-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 83.49(2) |  |
| `fee-in-lieu-of-deposit-fl` | Keep | SERVES_LANDLORD | opt-in |
| `landlords-access-fl` | Keep | SERVES_LANDLORD |  |
| `early-termination-fl` | Keep | SERVES_LANDLORD |  |
| `early-termination-addendum-fl` | Keep | SERVES_LANDLORD | opt-in |
| `end-of-term-notice-fl` | Keep | SERVES_LANDLORD | opt-in |
| `electronic-notice-addendum-fl` | Keep | SERVES_LANDLORD | opt-in |
| `landlord-address-disclosure-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 83.50(1) |  |
| `pet-policy-fl` | Keep | SERVES_LANDLORD |  |
| `flotation-bedding-fl` | Keep | SERVES_LANDLORD |  |
| `abandoned-property-release-fl` | Keep | SERVES_LANDLORD | opt-in |
| `default-by-tenant-fl` | Keep | SERVES_LANDLORD |  |
| `radon-disclosure-fl` | Keep | REQUIRED_DISCLOSURE: Fla. Stat. § 404.056(5) |  |
| `assistance-animal-accommodation-fl` | Keep | SERVES_LANDLORD |  |
| `common-area-use-fl` | Keep | SERVES_LANDLORD |  |
| `maintenance-allocation-fl` | Keep | SERVES_LANDLORD | opt-in |
| `no-liens-fl` | Keep | SERVES_LANDLORD | opt-in |
| `association-approval-fl` | Keep | SERVES_LANDLORD |  |

## AZ

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-cap-az` | Education | — | cap |
| `move-in-inspection-az` | Education | — | landlord duty |
| `possession-delay-az` | Education | — | tenant remedies |
| `dv-lease-termination-az` | Education | — | tenant right |
| `casualty-termination-az` | Education | — | tenant right |
| `security-deposit-return-az` | Split | SERVES_LANDLORD | keep application right and tenant demand; timeline to edu |
| `foreclosure-notice-az` | Optional + education | SERVES_LANDLORD | notice owed before lease |
| `nonrefundable-fees-az` | Keep | REQUIRED_DISCLOSURE: A.R.S. § 33-1321(B) |  |
| `landlords-access-az` | Keep | SERVES_LANDLORD |  |
| `late-fee-az` | Keep | CONSTRAINED_TERM | SERVES_LANDLORD |  |
| `pet-policy-az` | Keep | SERVES_LANDLORD |  |
| `authorized-person-contact-az` | Keep | SERVES_LANDLORD | opt-in |
| `landlord-disclosure-az` | Keep | REQUIRED_DISCLOSURE: A.R.S. § 33-1322 |  |
| `bedbug-obligations-az` | Keep | SERVES_LANDLORD |  |
| `utility-billing-disclosure-az` | Keep | REQUIRED_DISCLOSURE: A.R.S. § 33-1314.01 |  |
| `pool-safety-notice-az` | Keep | SERVES_LANDLORD | acknowledgment of required notice |
| `maintenance-allocation-az` | Keep | SERVES_LANDLORD | opt-in |
| `crime-free-addendum-az` | Keep | SERVES_LANDLORD |  |
| `smoke-detector-duty-az` | Keep | SERVES_LANDLORD | written notice shifts duty to tenant |

## GA

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-cap-ga` | Education | — | cap |
| `dv-lease-termination-ga` | Education | — | tenant right |
| `security-deposit-return-ga` | Split | SERVES_LANDLORD | keep sign-or-dissent duty; rest edu |
| `flood-disclosure-ga` | Optional + education | SERVES_LANDLORD | separate notice before signing |
| `security-deposit-escrow-ga` | Keep | REQUIRED_DISCLOSURE: O.C.G.A. § 44-7-31 |  |
| `move-in-damage-list-ga` | Keep | SERVES_LANDLORD | signed list is conclusive |
| `landlord-disclosure-ga` | Keep | REQUIRED_DISCLOSURE: O.C.G.A. § 44-7-3 |  |
| `assistance-animal-accommodation-ga` | Keep | SERVES_LANDLORD |  |
| `rent-escalation-ga` | Keep | SERVES_LANDLORD | opt-in |
| `serious-misconduct-prohibition-ga` | Keep | SERVES_LANDLORD |  |
| `holdover-rate-ga` | Keep | CONSTRAINED_TERM |  |
| `casualty-termination-ga` | Keep | SERVES_LANDLORD | contract choice |

## NC

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-cap-nc` | Education | — | cap |
| `security-deposit-return-nc` | Education | — | landlord duty |
| `dv-lease-termination-nc` | Education | — | tenant right |
| `late-fee-limit-nc` | Split | CONSTRAINED_TERM | keep fee; cap and rules to edu |
| `security-deposit-use-nc` | Keep | SERVES_LANDLORD |  |
| `security-deposit-holding-nc` | Keep | REQUIRED_DISCLOSURE: N.C. Gen. Stat. § 42-50 |  |
| `eviction-fees-nc` | Keep | SERVES_LANDLORD | opt-in |
| `partial-payment-nonwaiver-nc` | Keep | SERVES_LANDLORD | opt-in |
| `criminal-activity-nc` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-nc` | Keep | SERVES_LANDLORD |  |
| `pet-policy-nc` | Keep | SERVES_LANDLORD |  |
| `casualty-termination-nc` | Keep | SERVES_LANDLORD | contract choice |
| `renters-insurance-nc` | Keep | SERVES_LANDLORD |  |
| `emergency-contact-nc` | Keep | SERVES_LANDLORD |  |
| `smoke-co-alarms-nc` | Keep | SERVES_LANDLORD |  |
| `utility-billing-nc` | Keep | SERVES_LANDLORD | opt-in |
| `periodic-tenancy-notice-nc` | Keep | CONSTRAINED_TERM |  |
| `holdover-rate-nc` | Keep | CONSTRAINED_TERM |  |

## SC

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `possession-delay-sc` | Education | — | tenant remedies |
| `dv-lease-termination-sc` | Education | — | tenant right |
| `casualty-termination-sc` | Education | — | tenant right |
| `security-deposit-return-sc` | Split | SERVES_LANDLORD | keep forwarding-address duty; rest edu |
| `security-deposit-standards-sc` | Optional + education | SERVES_LANDLORD | statement before signing |
| `landlord-disclosure-sc` | Keep | REQUIRED_DISCLOSURE: S.C. Code Ann. § 27-40-420 |  |
| `nonpayment-notice-sc` | Keep | SERVES_LANDLORD | opt-in |
| `pet-policy-sc` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-sc` | Keep | SERVES_LANDLORD |  |
| `casualty-landlord-termination-sc` | Keep | SERVES_LANDLORD | opt-in |
| `holdover-rate-sc` | Keep | CONSTRAINED_TERM |  |
| `periodic-services-entry-sc` | Keep | SERVES_LANDLORD | opt-in |
| `tenant-repair-agreement-sc` | Keep | SERVES_LANDLORD | opt-in |
| `appliances-excluded-sc` | Keep | SERVES_LANDLORD | opt-in |
| `smoke-detectors-sc` | Keep | SERVES_LANDLORD |  |
| `meter-conservation-charge-notice-sc` | Keep | REQUIRED_DISCLOSURE: S.C. Code Ann. § 58-37-50(H)(3) |  |
| `abandoned-property-sc` | Keep | SERVES_LANDLORD |  |

## TN

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `dv-lease-termination-tn` | Education | — | tenant right |
| `late-fee-limit-tn` | Split | CONSTRAINED_TERM | keep fee; grace and cap to edu |
| `security-deposit-return-tn-act` | Split | SERVES_LANDLORD | keep account-location statement; rest edu |
| `security-deposit-return-tn-other` | Split | SERVES_LANDLORD | keep forwarding-address duty; rest edu |
| `casualty-termination-tn` | Split | SERVES_LANDLORD | keep landlord termination right; tenant rights to edu |
| `periodic-tenancy-notice-tn` | Notice-period rewrite | CONSTRAINED_TERM | statutory periods restated |
| `late-fee-tn-other` | Keep | CONSTRAINED_TERM |  |
| `landlords-access-tn-act` | Keep | SERVES_LANDLORD |  |
| `landlords-access-tn-other` | Keep | SERVES_LANDLORD |  |
| `nonpayment-notice-waiver-tn` | Keep | SERVES_LANDLORD | opt-in |
| `landlord-disclosure-tn` | Keep | REQUIRED_DISCLOSURE: Tenn. Code Ann. § 66-28-302 |  |
| `renters-insurance-advisory-tn` | Keep | REQUIRED_DISCLOSURE: prescribed advisory (Tenn. Code Ann. § 66-28-201(a)) |  |
| `assistance-animal-accommodation-tn` | Keep | SERVES_LANDLORD |  |
| `holdover-rate-tn` | Keep | CONSTRAINED_TERM |  |
| `abandoned-property-tn` | Keep | SERVES_LANDLORD |  |
| `tenant-repair-agreement-tn` | Keep | SERVES_LANDLORD | opt-in |
| `utility-transfer-tn` | Keep | SERVES_LANDLORD | opt-in |
| `electronic-notice-tn` | Keep | SERVES_LANDLORD | opt-in |
| `smoke-alarms-tn` | Keep | SERVES_LANDLORD |  |
| `firearm-carry-rules-tn` | Keep | SERVES_LANDLORD |  |
| `pet-policy-tn` | Keep | SERVES_LANDLORD |  |
| `eviction-service-party-tn` | Keep | SERVES_LANDLORD | opt-in |
| `possession-bond-tn` | Keep | SERVES_LANDLORD | opt-in |
| `household-goods-lien-tn` | Keep | SERVES_LANDLORD | opt-in |

## VA

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-va` | Education | — | cap and landlord duties |
| `redemption-rights-va` | Education | — | tenant right |
| `renewal-notice-va` | Education | — | landlord duty |
| `portable-solar-va` | Education | — | tenant right |
| `dv-lease-termination-va` | Education | — | tenant right |
| `military-lease-termination-va` | Education | — | tenant right |
| `foreclosure-notice-va` | Education | — | landlord duty, tenant remedy |
| `late-fee-limit-va` | Split | CONSTRAINED_TERM | keep fee (must be in lease to be charged); cap to edu |
| `returned-payments-va` | Split | CONSTRAINED_TERM | keep fee; $50 cap to edu |
| `acceptable-payment-methods-va` | Split | CONSTRAINED_TERM | keep methods; receipt and fee rules to edu |
| `casualty-termination-va` | Split | SERVES_LANDLORD | keep landlord termination right; tenant rights to edu |
| `meth-disclosure-va` | Optional + education | SERVES_LANDLORD | disclosure before signing |
| `defective-drywall-disclosure-va` | Optional + education | SERVES_LANDLORD | disclosure before signing |
| `military-air-zone-disclosure-va` | Optional + education | SERVES_LANDLORD | disclosure before signing |
| `mold-disclosure-va` | Keep | SERVES_LANDLORD | report deemed correct unless tenant objects |
| `acceptable-payment-methods-va-small` | Keep | SERVES_LANDLORD | opt-in |
| `expedited-deposit-disposition-va` | Keep | SERVES_LANDLORD | opt-in |
| `move-in-inspection-va` | Keep | SERVES_LANDLORD | report deemed correct unless tenant objects |
| `tenant-rights-statement-va` | Keep | SERVES_LANDLORD | acknowledgment of required statement |
| `fee-disclosure-statement-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1204 |  |
| `landlord-disclosure-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1216 |  |
| `nonresident-owner-agent-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1211 |  |
| `renters-insurance-notice-va` | Keep | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1206(D) |  |
| `damage-insurance-va` | Keep | SERVES_LANDLORD |  |
| `landlords-access-va` | Keep | SERVES_LANDLORD |  |
| `no-sublet-assign-va` | Keep | SERVES_LANDLORD |  |
| `holdover-rate-va` | Keep | CONSTRAINED_TERM | opt-in |
| `redemption-limit-va-small` | Keep | SERVES_LANDLORD | opt-in |
| `renewal-notice-va-small` | Keep | CONSTRAINED_TERM |  |
| `portable-solar-va-small` | Keep | SERVES_LANDLORD | opt-in |
| `tenant-duties-va` | Keep | SERVES_LANDLORD |  |
| `smoke-co-alarms-va` | Keep | SERVES_LANDLORD |  |
| `abandoned-property-va` | Keep | SERVES_LANDLORD |  |
| `periodic-tenancy-notice-va` | Keep | CONSTRAINED_TERM | lease may set the period |
| `emergency-contact-va` | Keep | SERVES_LANDLORD |  |
| `utility-billing-va` | Keep | SERVES_LANDLORD | REQUIRED_DISCLOSURE: Va. Code Ann. § 55.1-1212 | opt-in |
| `tenant-repair-agreement-va` | Keep | SERVES_LANDLORD | opt-in |
| `assistance-animal-accommodation-va` | Keep | SERVES_LANDLORD |  |
| `pet-policy-va` | Keep | SERVES_LANDLORD |  |
| `electronic-notices-va` | Keep | SERVES_LANDLORD | opt-in |
| `homestead-waiver-va` | Keep | SERVES_LANDLORD | opt-in |

## AL

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `possession-delay-al` | Education | — | tenant remedies |
| `casualty-termination-al` | Education | — | tenant right |
| `security-deposit-return-al` | Split | SERVES_LANDLORD | keep forwarding-address duty; rest edu |
| `security-deposit-cap-al` | Split | REQUIRED_DISCLOSURE: Ala. Code § 35-9A-201(a) | keep additional-security statement; cap to edu (confirm the statute requires the statement in the lease) |
| `landlord-disclosure-al` | Keep | REQUIRED_DISCLOSURE: Ala. Code § 35-9A-202 |  |
| `default-by-tenant-al` | Keep | SERVES_LANDLORD |  |
| `landlords-access-al` | Keep | SERVES_LANDLORD |  |
| `pet-policy-al` | Keep | SERVES_LANDLORD |  |
| `assistance-animal-accommodation-al` | Keep | SERVES_LANDLORD |  |
| `casualty-landlord-termination-al` | Keep | SERVES_LANDLORD | opt-in |
| `holdover-rate-al` | Keep | CONSTRAINED_TERM |  |
| `extended-absence-notice-al` | Keep | SERVES_LANDLORD | opt-in |
| `tenant-repair-agreement-al` | Keep | SERVES_LANDLORD | opt-in |
| `abandoned-property-al` | Keep | SERVES_LANDLORD |  |
| `sex-offender-statement-al` | Keep | REQUIRED_DISCLOSURE: Ala. Code § 13A-11-204(a) |  |
| `exemption-waiver-al` | Keep | SERVES_LANDLORD | opt-in |

## PA

**Not applied yet.**

| Row | Verdict | Basis | Note |
|---|---|---|---|
| `security-deposit-return-pa` | Split | SERVES_LANDLORD | keep forwarding-address duty; forfeiture and double damages to edu |
| `security-deposit-holding-pa` | Split | REQUIRED_DISCLOSURE: 68 P.S. § 250.511b(a) | keep institution notice; interest duty to edu |
| `abandoned-property-pa` | Keep | SERVES_LANDLORD | lease controls over statute |
| `notice-to-quit-waiver-pa` | Keep | SERVES_LANDLORD | opt-in |
| `consumer-restrictions-statement-pa` | Keep | REQUIRED_DISCLOSURE: 73 P.S. § 2205(d) |  |
| `assistance-animal-accommodation-pa` | Keep | SERVES_LANDLORD |  |
| `pet-policy-pa` | Keep | SERVES_LANDLORD |  |
| `carbon-monoxide-alarm-duty-pa` | Keep | SERVES_LANDLORD | weak: tenant replacement allocation |
| `holdover-rate-pa` | Keep | CONSTRAINED_TERM |  |
| `casualty-termination-pa` | Keep | SERVES_LANDLORD | contract choice |
| `periodic-tenancy-notice-pa` | Keep | CONSTRAINED_TERM |  |
