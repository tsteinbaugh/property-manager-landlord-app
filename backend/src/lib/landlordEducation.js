// Landlord-education content from the state-by-state clause-library
// verification passes (Aug-Sep 2026, now 8 states: CO, WY, KS, NE, MN, ND,
// SD, OH) -- real, verified state law that doesn't belong in tenant-facing
// lease text (see `lease-clause-decision-log-CO.md` §7's three-bucket
// screening test: LEASE_CLAUSE / LANDLORD_EDUCATION / OUT_OF_SCOPE, reused
// unchanged by every state since, including Ohio). Typical reasons an item
// lands here instead of `clauseTemplates.js`: it states a legal ceiling/
// floor with no upside to telling the tenant; it's a standing rule that
// applies regardless of what the lease says (rent-increase frequency,
// retaliation, a police-call-waiver ban); it's an operational duty, not
// lease-drafting content (a landlord-identity-change notice, an escheat
// filing calendar); or it's a **documented absence** -- a state simply has
// no equivalent to another state's protection (no deposit cap, no
// entry-notice statute, no for-cause eviction tenure threshold, etc.),
// logged here so that finding isn't silently lost the way an unrecorded
// "checked, found nothing" tends to be. Per the architecture-review log's
// Addendum H, a verified absence is treated as equally load-bearing as a
// verified presence throughout this project -- do not treat these
// "no such rule" rows as filler.
//
// Not currently wired into any route, UI, or the Lease Builder -- nothing
// attaches these to a lease, and nothing serves them to the frontend today.
// This file exists purely to hold each state pass's verified findings as
// real, structured, code-readable data so a future landlord-facing
// guide/notes feature has something real to build on instead of starting
// research from zero.
//
// Source of truth is `lease-clauses.csv` (repo root) plus each state's own
// `lease-clause-decision-log-<STATE>.md` (Ohio: `-OH.md` plus its
// `-OH-extend-manifest.md` companion) and `lease-clause-decision-log-
// architecture-review.md` -- this file is their compiled copy, regenerated
// wholesale from the CSV (2026-09-18 refresh, Ohio added: 309 -> 324
// entries across the now-8-state pass).
//
// Same field shape as `clauseTemplates.js` where it overlaps (id, title,
// group, states, bodyText) for consistency, plus `ruleTypes` (array --
// REQUIRED/CONDITIONAL/PROHIBITED/CONSTRAINED/RECOMMENDED), `verificationStatus`,
// and `notes` inline rather than in a separate metadata file -- there's no
// `GET` route serving this data yet, so there's no leak risk to guard
// against the way `clauseResearchMetadata.js` does for the shipped clause
// templates. `group` here follows the CSV's research-side categorization
// as-is (a few finer buckets -- e.g. "Compliance & Prohibited Terms",
// "Insurance & Liability" -- exist only in this file, since nothing
// validates this field against the app's fixed `CLAUSE_GROUPS` list the way
// `Clause.group`/`clauseTemplates.js` are).
//
// `verificationStatus` for the CO-only rows whose value was moved out of
// `lease-clauses.csv` into `lease-clause-citations-CO.csv` (see the Known
// Issues entry on the CO citation-extraction project) is backfilled from
// that citations file at generation time when the main CSV's own column is
// blank -- same rule, and the same regeneration-time fix, as
// `clauseResearchMetadata.js`.

const LANDLORD_EDUCATION = [
  // Security Deposit
  {
    id: "edu-security-deposit-cap-co",
    title: "Security Deposit Maximum (Landlord Reference)",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado law caps the security deposit you can charge at two months' rent (C.R.S. section 38-12-102.5). This is a ceiling on what you're allowed to collect - it's not something your lease needs to tell the tenant, since stating the legal maximum only gives them a number to hold you to. The actual deposit amount you're charging this specific tenant is already captured in your lease through the Security Deposit clause. Use this as a guardrail when entering the deposit amount for a Colorado lease: if you type in more than two months' rent, that number is not enforceable.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Landlord Responsibilities
  {
    id: "edu-retaliation-co",
    title: "Retaliation Is Prohibited",
    group: "Landlord Responsibilities",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado law prohibits taking action against a tenant - raising rent, cutting services, declining to renew, or starting an eviction - because they reported an unsafe condition, exercised a right under the lease, or joined a tenant organization (C.R.S. section 38-12-509). This applies whether or not your lease mentions it, so there's no need to include it in tenant-facing text. What matters practically: if you have an independent, legitimate reason to raise rent or not renew (the lease naturally ending, a real violation, etc.), document that reason - having a clear paper trail is what protects you if a tenant later claims a decision was retaliatory.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Rent & Payment
  {
    id: "edu-rent-increase-frequency-co",
    title: "Rent Can't Be Raised More Than Once a Year",
    group: "Rent & Payment",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "No matter what your lease says, you cannot raise a tenant's rent more than once every 12 months in Colorado (C.R.S. section 38-12-702). This applies to month-to-month tenancies as much as fixed terms. Keep this in mind if you ever build a rent-escalation or annual-increase clause - the 12-month floor overrides anything the lease tries to specify.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Default & Termination
  {
    id: "edu-for-cause-eviction-co",
    title: "For-Cause Eviction Rules (After 12 Months)",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Once a tenant has lived in a property for 12 months or more, Colorado generally requires you to have a specific legal reason - 'cause' (like nonpayment or a lease violation) or a defined 'no-fault' reason (such as selling the property or doing major renovations, with 90 days' notice) - before you can end the tenancy or decline to renew (C.R.S. section 38-12-1301 et seq.). This does NOT apply if the property is your own primary residence or directly adjacent to it, a short-term rental, a mobile home lot, or employer-provided housing. Check which of your properties fall into an exempt category - this determines which version of the month-to-month termination clause applies.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Notices & General
  {
    id: "edu-police-call-waiver-co",
    title: "Never Waive a Tenant's Right to Call Police",
    group: "Notices & General",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado law makes it void for any lease to contain language that waives, discourages, or penalizes a tenant for calling police or emergency services (C.R.S. section 38-12-402). This mainly matters if you're ever tempted to add a 'crime-free housing' or repeated-nuisance-call type clause - that pattern is exactly what this law targets, and any such clause would be unenforceable.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-dv-confidentiality-co",
    title: "Confidentiality Duty for a Tenant Who Is a DV/Stalking Victim",
    group: "Notices & General",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant qualifies for early termination as a victim of domestic violence, stalking, or sexual assault, you have a legal duty not to disclose their status or new address to anyone without their consent, except where the law specifically requires it (C.R.S. section 38-12-401/402). This obligation exists regardless of whether the lease mentions it.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-immigration-status-co",
    title: "Never Ask About Immigration or Citizenship Status",
    group: "Notices & General",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado's Immigrant Tenant Protection Act prohibits asking a tenant about their immigration or citizenship status, disclosing or threatening to disclose it, or using it to harass, intimidate, or deny housing (C.R.S. section 38-12-1201 et seq.). Violations carry real penalties - up to $2,000 per violation plus attorney's fees. Any lease provision attempting to waive these protections is void, even if the tenant agrees to it in writing.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Default & Termination
  {
    id: "edu-fee-shifting-co",
    title: "Attorney Fee Clauses Must Work Both Ways",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A lease clause that only lets the landlord recover attorney's fees and court costs - but not the tenant, if the tenant wins - is void under Colorado law (C.R.S. section 38-12-801(3)(a)(II)). Any attorney-fee provision needs to say the prevailing party recovers fees, not just the landlord. This was actually found and fixed in the Default by Tenant clause during this review - worth double-checking any custom clause you write yourself for the same issue.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-death-of-tenant-co",
    title: "If a Tenant Dies During the Lease",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado's 'Letty's Act' (C.R.S. section 38-12-801(3.5)) prohibits charging liquidated damages, accelerating rent beyond the end of the month (or 10 business days after the unit is vacated, whichever is later), clawing back move-in concessions, or any other early-termination penalty when a lease ends because a tenant died. You can retain enough of the security deposit to cover any damage related to the death, and you can take possession without filing an eviction once the estate's representative surrenders the unit, or automatically 30 days after death if rent is unpaid or the unit has been cleared out.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Notices & General
  {
    id: "edu-identity-change-notice-co",
    title: "Notify Tenants If Your Identity or Agent Changes",
    group: "Notices & General",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you (or your authorized agent) change - for example, a property changes management companies, or ownership transfers - Colorado law requires the new landlord or agent to notify each tenant within 1 business day, either in writing/electronically or by posting the new information conspicuously at the property (C.R.S. section 38-12-801(2)). This is an ongoing operational duty, not something that needs to be in the lease itself.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Rent & Payment
  {
    id: "edu-fee-unprovided-service-co",
    title: "Don't Charge for a Service You Don't Actually Provide",
    group: "Rent & Payment",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado's Honest Pricing law prohibits charging a fee for any service you don't actually provide (C.R.S. section 6-1-737). This is a good general check for any fee-based clause you write yourself: make sure the fee corresponds to something real.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-fee-free-payment-method-co",
    title: "Offer at Least One Fee-Free Way to Pay Rent",
    group: "Rent & Payment",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You can't charge a rent payment processing fee unless you also offer at least one payment method with no fee attached (C.R.S. section 6-1-737). When you list your accepted payment methods in the lease, make sure at least one of them is genuinely free to the tenant.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Disclosures
  {
    id: "edu-total-price-disclosure-co",
    title: "Advertised Rent Must Show the Full Price",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "When you advertise or list a property, Colorado's Honest Pricing law requires showing a single all-in price including mandatory fees, displayed more prominently than any broken-out fee amounts - not itemized separately (C.R.S. section 6-1-737). This applies to marketing and listings, not lease text, and becomes relevant if Steinoak ever adds a listing/marketing feature.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-rubs-uncertainty-co",
    title: "Utility Billing Rules Are Still Being Clarified",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you use a shared or master utility meter and allocate costs among tenants by formula (RUBS), Colorado now has a statutory safe harbor (C.R.S. 6-1-737(4.5), added by HB26-1013). You may allocate utility costs this way if: the total you bill across all tenants does not exceed what the utility provider charged for the whole premises; you add no markup, surcharge, or administrative fee beyond what C.R.S. 38-12-801(3)(a)(VI) allows (either 2% of the billed amount or a flat $10 per month, not both); common-area and shared-facility costs are excluded from the allocation; and the allocation method is clearly disclosed in the lease or an addendum. This replaces the interim Attorney General enforcement guidance issued in late 2025.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-radon-lease-length-co",
    title: "Radon Disclosure Risk Changes With Lease Length",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The radon disclosure itself is required on every lease regardless of term length. But if you don't make a reasonable effort to fix elevated radon within 180 days of being notified, the consequence is different depending on the lease term: a tenant can void the lease over it if the term is longer than one year, but that specific remedy doesn't apply to a lease of one year or less (effective for leases signed on or after January 1, 2026). If you're offering a tenant a renewal longer than a year, this is a real new exposure to be aware of.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-voucher-acceptance-co",
    title: "You Must Accept Housing Vouchers",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado law requires every residential landlord to accept applicants using a housing voucher - there is no exemption for small landlords anymore (HB25-1240 removed it). Refusing an applicant solely because they use a voucher is source-of-income discrimination and can carry penalties of $5,000 to $50,000 per violation. You can still decline a voucher applicant for legitimate, consistently-applied reasons - credit, income, rental history - just never because of the voucher itself. You also can't refuse to cooperate with the approval process (inspection, paperwork) as a way of avoiding this duty.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-voucher-process-mechanics-co",
    title: "How the Voucher Approval Process Actually Works",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A voucher applicant doesn't move in until the unit is inspected and the Housing Assistance Payment contract is signed - you're not required to let someone occupy the unit before that happens. If a tenant does move in early anyway, standard guidance puts them on the hook for full, unsubsidized rent until the contract is finalized - you're not left holding the shortfall. The multi-year wait some landlords worry about is the tenant's wait to be issued a voucher in the first place; once a voucher holder actually applies to your specific unit, the approval process itself typically takes days to a few weeks, not years.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Security Deposit
  {
    id: "edu-deposit-nonwaiver-co",
    title: "Security Deposit Rights Can Never Be Waived",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A tenant cannot waive their rights regarding return of the security deposit, whether orally or in writing - any lease provision attempting this is unenforceable (C.R.S. section 38-12-103(7)). Keep this in mind for any custom security deposit language you write yourself.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Landlord Responsibilities
  {
    id: "edu-alt-housing-co",
    title: "Alternate Housing May Be Required During Major Repairs",
    group: "Landlord Responsibilities",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "This is triggered by the TENANT'S REQUEST, not automatically. If a condition materially interferes with a tenant's life, health, or safety (or is a condition under C.R.S. 38-12-505(4)(l)), and the tenant requests it, you must provide - within 24 hours of that request, at no cost to the tenant - either a comparable dwelling unit or a hotel room, your choice which. Requirements: at least as many beds as the tenant uses; habitable; accessible if the tenant has a disability; within 5 miles of the unit unless the tenant consents otherwise (you may go 5-10 miles if substantially cheaper, and if nothing is available within 10 miles, the nearest available). If the stay runs past 48 hours, the place must have a refrigerator with a freezer and a range stove or oven - OR you pay each tenant a per diem for meals and incidentals at least equal to the Colorado state employee intrastate travel per diem, paid when you first reasonably expect the stay to exceed 48 hours and every 24 hours after. Beyond the per diem, you pay only reasonable relocation costs such as storage and transportation. Two things that protect you: the tenant still owes rent during the relocation and for the rest of the term; and if you put a tenant in a hotel and the condition cannot be fixed within 60 consecutive days for reasons outside your reasonable control, you can cap the hotel at 60 consecutive days - but only if you give written notice at the earliest opportunity stating that it cannot be fixed in 60 days, the end date for hotel coverage (no earlier than 60 days in), and that the tenant may terminate the lease with no liability or penalty, AND you return the tenant's full security deposit on or before you give that notice.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Pets
  {
    id: "edu-pet-caps-co",
    title: "Pet Deposit and Pet Rent Limits",
    group: "Pets",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado caps what you can charge for a pet: the pet security deposit can't exceed $300 and must be fully refundable - you can no longer charge a non-refundable 'pet fee.' Pet rent can't exceed $35 per month or 1.5% of the monthly rent, whichever is greater (C.R.S. section 38-12-106, HB 23-1068). The actual amounts you charge a specific tenant are entered in your lease's Pets clause - use these numbers as the ceiling when entering them for a Colorado property.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Security Deposit
  {
    id: "edu-carpet-damage-co",
    title: "Carpet Damage Has a Special Rule",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You can't deduct from a security deposit for carpet being \"substantially and irreparably damaged\" unless the carpet has not been replaced with new carpet within the ten years preceding the end of the lease or surrender of the premises (C.R.S. 38-12-103(11)(c), as amended by HB25-1249, effective January 1, 2026). Even then, you may retain only the minimum amount necessary to replace the carpet - or to repaint - in the specific area that is damaged, not the full room or unit and not the full replacement cost (C.R.S. 38-12-103(11)(a)-(b)). Keep this in mind at move-out before assuming worn or stained carpet justifies a deduction.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-bad-faith-deposit-co",
    title: "What Counts as \"Bad Faith\" When Withholding a Deposit",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you retain 125% or more of a tenant's actual documented damages from their security deposit, Colorado law presumes you did so in bad faith (HB 25-1249). Bad-faith withholding also includes retaining a deposit without cause, or for an unlawful, retaliatory, or discriminatory reason. Bad-faith withholding exposes you to treble damages - document your actual costs carefully before making a deduction.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-walkthrough-co",
    title: "Either Party Can Request a Move-Out Walkthrough",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Either you or the tenant can request a walkthrough inspection near the end of the lease (in person or by video) to identify anything beyond normal wear and tear before move-out (HB 25-1249). Doing a walkthrough does not legally lock you out of charging for genuine damage discovered afterward - the law's definition of 'wrongfully withheld' doesn't reference walkthrough completeness at all. That said, missing something during a walkthrough could still work against you if a dispute goes to court, since a tenant could argue you'd have caught it if it were real damage.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-wear-tear-void-co",
    title: "Never Charge a Tenant for Normal Wear and Tear or Preexisting Issues",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Any lease provision assigning a tenant a fee or charge for repairs, cleaning, or other work due to normal wear and tear, or for damage/defective conditions that existed before their tenancy began, is void under Colorado law (HB 25-1249). This was actually the reason the Use of Security Deposit clause got corrected during this review - worth keeping in mind for any custom deposit-related language you write yourself.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Disclosures
  {
    id: "edu-safe-homes-nondiscrimination-wy",
    title: "Can't Terminate a Tenancy Solely for Domestic Abuse / Sexual Violence Victim Status",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming law prohibits terminating a tenancy based solely on a tenant's, applicant's, or household member's status as a victim of domestic abuse or sexual violence (W.S. 1-21-1303(c)). This does not prevent an adverse housing decision based on other lawful factors you're otherwise aware of — it specifically targets using victim status itself as the reason. Also logged as a standing cross-check: any future WY clause or custom termination language should be checked against this rule before use.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1303(c). Dual-logged as both content and a standing validation check, same pattern as CO's Part 4 police-call rule. Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-13/section-1-21-1303/.",
  },
  {
    id: "edu-safe-homes-nonwaiver-wy",
    title: "Safe Homes Act Rights Can Never Be Waived or Modified",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The protections in Wyoming's Safe Homes Act (W.S. 1-21-1301 through 1304) cannot be waived or modified by a lease or any separate agreement between landlord and tenant (W.S. 1-21-1304). Keep this in mind for any custom termination or waiver language you write yourself — attempting to contract around these protections would be unenforceable. Also logged as a standing cross-check, same pattern as CO's deposit-nonwaiver rule.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1304. Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-13/section-1-21-1304/. Note absence flagged separately: unlike CO's version of this protection, WY's Safe Homes Act (W.S. 1-21-1301–1304, read in full) contains no landlord confidentiality duty regarding victim status/new address — treated as a genuine state difference, not a research gap, pending any future correction.",
  },
  // Landlord Responsibilities
  {
    id: "edu-repair-cost-termination-wy",
    title: "You May Refuse an Uneconomical Repair and Terminate Instead",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant notifies you of a habitability issue and the cost to fix it would be unreasonable relative to the rent charged and the nature of the property, Wyoming law lets you refuse the repair and terminate the rental agreement instead (W.S. 1-21-1203(d)). You must notify the tenant in writing and give them no less than 10 and no more than 20 days to find substitute housing. Rent is prorated to the tenant's move-out date, and any balance plus the deposit gets refunded per the standard deposit-return rules. This is a real option worth knowing about for a low-rent unit facing a major, disproportionate repair cost — not something to state to the tenant in the lease itself, since it only becomes relevant if you choose to invoke it.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1203(d). Classified LANDLORD_EDUCATION per Taylor's 2026-08-21 call (overrode initial LEASE_CLAUSE recommendation). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1203/.",
  },
  // Security Deposit
  {
    id: "edu-nonrefundable-deposit-separate-notice-wy",
    title: "Give Separate Written Notice of Nonrefundable Deposit at Collection Time",
    group: "Security Deposit",
    states: ["WY"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming law requires you to give the tenant separate written notice that a portion of their deposit is nonrefundable at the time you actually collect the deposit — not just state it in the lease itself (W.S. 1-21-1207). Stating it in the lease satisfies one part of the requirement; you should also hand or send the tenant a standalone written notice when you take the deposit, to be safe.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1207. Companion item to nonrefundable-deposit-notice-wy — covers the process/timing half of the same statutory requirement.",
  },
  // Notices & General
  {
    id: "edu-abandoned-property-notice-methods-wy",
    title: "Valid Ways to Serve the Abandoned-Property Notice",
    group: "Notices & General",
    states: ["WY"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming law recognizes three valid ways to serve the abandoned-property notice: certified mail to an address the tenant gave you in writing for this purpose, personal service under Wyoming Rule of Civil Procedure 4, or publication in a newspaper published in or widely circulated in the county where the property is located (W.S. 1-21-1210(a)(i)). Any of the three starts the 7-day clock — publication is a useful fallback if a tenant vanishes without leaving a forwarding address.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1210(a)(i)(A)-(C). Companion item to abandoned-property-wy.",
  },
  // Landlord Responsibilities
  {
    id: "edu-habitability-materiality-wy",
    title: "Habitability Duties Don't Cover Trivial Issues",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming's habitability requirements don't apply to breakage, malfunctions, or conditions that don't materially affect the physical health or safety of an ordinary renter (W.S. 1-21-1202(c)). A minor cosmetic issue or trivial malfunction isn't a habitability violation under this statute — useful context if a tenant frames something minor as a habitability problem.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1202(c). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1202/.",
  },
  {
    id: "edu-habitability-modifiable-wy",
    title: "Habitability Duties Can Be Reassigned by Written Agreement",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike some states, Wyoming lets you reassign or modify the habitability-related duties under this article by explicit written agreement signed by both parties (W.S. 1-21-1202(d)) — for example, shifting responsibility for a specific utility or system to the tenant where that makes practical sense for a given property. This flexibility isn't automatic; it requires an explicit written agreement, not just silence in the lease.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1202(d). Flagged as a genuinely useful and WY-specific flexibility — worth revisiting if Steinoak ever supports per-property custom duty-reassignment clauses.",
  },
  {
    id: "edu-repair-notice-process-wy",
    title: "How to Respond to a Tenant's Habitability Notice",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant who is current on rent gives you written notice of a suspected habitability problem, you must either start fixing it or notify them in writing that you dispute the claim, within a reasonable time — sent by certified mail or in the manner used for eviction notices (W.S. 1-21-1203(b)). You are not required to fix anything caused by the tenant's own misuse of the property (§1203(c)), and you are never liable under this article for a tenant's claims of mental suffering or anguish (§1203(e)).",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1203(a)-(c),(e). Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1203/. Companion education item to edu-repair-cost-termination-wy, added prior session (covers §1203(d)).",
  },
  {
    id: "edu-renter-repair-remedy-wy",
    title: "Tenants Have No Self-Help Repair-and-Deduct Remedy",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming gives tenants no self-help repair-and-deduct remedy. If you don't fix a notified habitability issue, the tenant's only recourse is to send a follow-up 'notice to repair or correct condition' giving you 3 more days to act, then file a civil action in circuit court (W.S. 1-21-1206). If a court finds you unreasonably refused or failed to use due diligence to correct the condition, it can award the tenant costs, damages (including rent improperly retained), and affirmative relief — including terminating the lease and ordering you to refund the rent balance and deposit within 30 days, with the tenant required to vacate 10 to 20 days after that court-ordered termination.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1206. Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1206/.",
  },
  // Disclosures
  {
    id: "edu-successor-owner-bound-wy",
    title: "Deposit Duties Carry Over to a New Owner",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you sell the property or transfer your interest in it, whoever holds the owner's interest at the time a rental agreement terminates is bound by the nonrefundable-deposit-notice and deposit-deduction rules (W.S. 1-21-1207, 1-21-1208) — meaning deposit obligations carry over to a buyer or successor, not just to you as the original landlord. Worth flagging in any sale or transfer paperwork so a new owner knows they're inheriting this duty.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1209. Source: law.justia.com/codes/wyoming/title-1/chapter-21/article-12/section-1-21-1209/. Parallel to CO's edu-identity-change-notice-co, though the WY version is narrower — only binds the successor to the deposit-related duties (1207/1208), not a broader notice-to-tenant duty the way CO's identity-change rule works.",
  },
  // Security Deposit
  {
    id: "edu-deposit-noncompliance-penalty-wy",
    title: "Penalty for Unreasonably Withholding the Deposit",
    group: "Security Deposit",
    states: ["WY"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you unreasonably fail to return the deposit balance and itemization within the required time, Wyoming law allows the tenant to recover the full deposit plus court costs (W.S. 1-21-1208(c)) — not just the disputed amount. If you're the prevailing party and a court finds the tenant acted unreasonably in bringing the claim, you may recover your own court costs. Worth a calendar reminder for the 30-day (or 60-day, if there's damage) deadline, since missing it carries real exposure.",
    notes: "WY added 2026-08-21. Citation: W.S. 1-21-1208(c). Companion item to security-deposit-return-wy.",
  },
  {
    id: "edu-no-deposit-cap-interest-account-wy",
    title: "No Deposit Cap, No Interest Requirement, No Separate-Account Requirement",
    group: "Security Deposit",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming law places no cap on the amount you can charge for a security deposit, does not require you to pay the tenant interest on it, and does not require you to hold it in a separate or interest-bearing account (W.S. 1-21-1207–1211, read in full — none of these appear anywhere in the article). You can set the deposit amount at your discretion and hold the funds however you choose.",
    notes: "WY added 2026-08-21, proof-of-absence pass. Confirmed by direct full-text read of W.S. 1-21-1207 through 1211 (no cap/interest/account language anywhere) plus 8 independent secondary sources in agreement. One source (hemlane.com/resources/wyoming-security-deposit-laws) claimed a 2023 amendment requiring interest-bearing accounts and a 2/3-month deposit cap — this claim contradicts the primary statute text directly, and contradicts a DIFFERENT paragraph on that same page which states the opposite. Treated as a fabricated/unreliable claim, not a real amendment; explicitly rejected rather than adopted.",
  },
  // Access & Entry
  {
    id: "edu-no-entry-notice-statute-wy",
    title: "No Statutory Advance-Notice Period for Landlord Entry",
    group: "Access & Entry",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming law does not set a specific number of hours or days of advance notice you must give before entering the property — the only statutory rule is that Tenant can't unreasonably deny you access for repairs, inspection, or showing the unit (W.S. 1-21-1205(a)(iii)). Many landlords choose to state a specific notice window (commonly 24–48 hours) in the lease itself as a practical courtesy and to set clear expectations, but Wyoming law does not require it.",
    notes: "WY added 2026-08-21, proof-of-absence pass. Confirmed by direct full-text read of W.S. 1-21-1201–1205 (no numeric notice period anywhere). Secondary sources disagree with each other on what's \"reasonable\" (24 hours, 48 hours, 2 days all cited by different sites) with none citing an actual statute section establishing a number — that disagreement is itself evidence no such statute exists, since a real requirement would produce citation convergence.",
  },
  // Rent & Payment
  {
    id: "edu-no-rent-increase-statute-wy",
    title: "No Statutory Rent-Increase Cap, Frequency Limit, or Notice Period",
    group: "Rent & Payment",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming has no rent control, no cap on how much you can raise rent, no limit on how often you can raise it, and no statute requiring a specific notice period before a rent increase takes effect. Rent can't be increased during a fixed-term lease unless the lease itself allows it; for month-to-month tenancies, most landlords give at least one full rental period's notice (commonly 30 days) as a matter of practice — tied to the same convention used to end a month-to-month tenancy — but this is not a codified requirement.",
    notes: "WY added 2026-08-21, proof-of-absence pass. Confirmed by multiple higher-quality sources explicitly stating \"no statute\" (Nolo's legal encyclopedia, LegalClarity, apartments.com's state-law reference table, AAOA) rather than merely omitting the topic. Broader finding than originally scoped: the original absence list only named a \"rent-increase-frequency cap\"; this pass also confirmed no notice-period statute exists either — flagging the wider finding rather than only answering the narrower original question.",
  },
  // Disclosures
  {
    id: "edu-no-mobile-home-park-act-wy",
    title: "No Separate Mobile-Home-Park Landlord-Tenant Act",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike some states, Wyoming does not have a distinct landlord-tenant act specifically for mobile-home-park lot rentals — mobile home lot tenancies fall under the same Residential Rental Property Act (Article 12) as any other rental. Separate rules exist for mobile homes, but they aren't landlord-tenant law: titling and taxation of the home itself falls under Title 31, Chapter 2, and health/sanitation standards for parks fall under Title 35; siting and zoning are handled locally by individual cities and counties.",
    notes: "WY added 2026-08-21, proof-of-absence pass. Confirmed via direct search for a named/numbered \"Wyoming Mobile Home Parks Act\" — found no such act; found instead Title 31 Ch.2 Art.5 (titling/taxation) and Title 35 Ch.4 Art.2 (health/sanitation, largely eliminated per §35-4-224) plus local zoning ordinances (e.g. Evanston, Dayton, Cody municipal codes). One source (generisonline.com) and one Hemlane page both described a Wyoming \"Mobile Home Parks Act\" with rent-increase protections — this appears to be either fabricated or conflated with Colorado's actual, differently-named Mobile Home Park Act (C.R.S. Title 38, Art. 12, Part 2); treated as unreliable, not adopted.",
  },
  {
    id: "edu-no-anti-retaliation-statute-wy",
    title: "No Comprehensive Anti-Retaliation Statute",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming does not have a standalone statute prohibiting retaliatory rent increases, service reductions, or eviction threats in response to a tenant exercising a legal right (such as reporting a habitability issue). This is different from most states. That said, courts generally disfavor retaliatory conduct as a matter of common-law principle, and a tenant facing eviction may still be able to raise retaliation as a defense if they can show the landlord's action was motivated by the tenant exercising a protected right — so the practical exposure isn't zero even without a codified statute.",
    notes: "WY added 2026-08-21, proof-of-absence pass. Confirmed by two independent higher-quality sources (LegalClarity, LeaseLenses) explicitly stating no comprehensive statute exists, both also noting the common-law retaliation-defense nuance — included in bodyText so this doesn't read as a blanket \"no exposure\" statement, which would be inaccurate.",
  },
  // Landlord Responsibilities
  {
    id: "edu-carbon-monoxide-detector-building-code-wy",
    title: "Carbon Monoxide Detectors Come from Building Code, Not the Rental Statute",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming does not address smoke or carbon monoxide detectors anywhere in the Residential Rental Property Act (Article 12). The requirement instead comes from Wyoming's adoption of the International Residential Code, which generally applies to new construction with fuel-burning appliances or an attached garage — not automatically to existing rental housing. Enforcement and any additional requirements are set locally by individual cities and counties, not by one uniform state rule. Practically: don't assume a detector requirement doesn't exist just because it's absent from the landlord-tenant statute, and check your specific city/county's building and fire code rather than relying on a single statewide answer.",
    notes: "WY added 2026-08-21, 4th gap-discovery source pass (law outside Title 1). Confirmed via multiple sources agreeing this is IRC-adoption/building-code, not a Title 1 landlord-tenant statute — genuinely outside the scope a pure Article 12 statute-walk would catch, which is exactly what this gap-discovery source exists to find. Flagged as jurisdiction-variable rather than drafted as a uniform LEASE_CLAUSE, since a single statewide clause would misrepresent how enforcement actually works here — same category of caution as the Denver/Boulder municipal-ordinance gap on the CO side, though smaller in scope.",
  },
  // Disclosures
  {
    id: "edu-no-radon-disclosure-wy",
    title: "No Statutory Radon Disclosure Requirement",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, which requires a radon disclosure on every lease regardless of term length, Wyoming has no statutory radon disclosure requirement at all — not even the lighter-weight version some states use (a standard disclosure form promoted by the state real estate association rather than by statute). Wyoming is one of only a handful of states with no radon disclosure obligation of any kind. This doesn't mean radon isn't a real risk in Wyoming housing — it just means there's no legal requirement to test for it or disclose it before renting the property.",
    notes: "WY added 2026-08-21, backlog item #1 from session 5's full-library audit (§11). Confirmed via 6 independent sources: a dedicated radon-industry resource (radonresources.com) explicitly lists WY among 7 states with zero radon disclosure requirement, whether statutory or association-form-based; 5 further sources listing WY's actual required disclosures (Innago, Nolo, Azibo, AAOA, lpmccasper.com) each name exactly 2 items — lead paint and nonrefundable-deposit notice — with radon absent from all of them.",
  },
  {
    id: "edu-no-bed-bug-disclosure-wy",
    title: "No Statutory Bed Bug Disclosure Requirement",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, which requires disclosing a property's bed bug history within the past 8 months, Wyoming has no statutory bed bug disclosure requirement. Wyoming's only two state-mandated lease disclosures are the federal lead-based-paint disclosure and the written notice of any nonrefundable portion of the security deposit. If your property is within a city or county that has its own bed bug or pest-notice ordinance, that would be a local requirement layered on top — not something imposed by Wyoming state law.",
    notes: "WY added 2026-08-21, backlog item #2 from session 5's full-library audit (§11). Confirmed via 6 independent sources consistently naming only 2 WY-mandated disclosures (Innago, Nolo, Azibo, AAOA, lpmccasper.com, LeaseLenses), none including bed bugs. One outlier (iPropertyManagement) listed a 'bed bug disclosure' and 'mold disclosure' as items to include — reads as generic template content reused across the site's other state pages rather than a WY-specific legal citation; not corroborated by any other source and one source (lpmccasper.com) explicitly frames any such requirement as local/municipal, not state law. Treated as unreliable, not adopted, consistent with the pattern of outlier sources already caught this session (Hemlane, generis, LeaseWisely).",
  },
  // Parking & Storage
  {
    id: "edu-no-ev-charging-right-wy",
    title: "No Statutory Right for Tenants to Install EV Charging",
    group: "Parking & Storage",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, Wyoming has no 'right-to-charge' statute giving tenants a legal right to install an electric vehicle charging system at a rental property. You're not obligated to allow, accommodate, or reasonably consider a tenant's request to install one — whether to permit it, and on what terms, is entirely your call. If you do choose to allow it, spelling out the terms (who pays for installation, who owns the equipment, what happens at move-out) in the lease is still a good idea, since nothing in Wyoming law will fill those gaps for you.",
    notes: "WY added 2026-08-21, backlog item #3 from session 5's full-library audit (§11). Confirmed via a dedicated right-to-charge tracker (getevservice.com) covering all 50 states, explicitly listing Wyoming among states with no such legislation as of June 2026, alongside a clear list of 30+ states that do have it (including CO and OR, consistent with this project's existing knowledge). Related but distinct finding: Wyoming passed EV-related legislation for 2026 (HB 0024) — a per-kWh tax on DC fast charging plus annual EV registration decal fees — but this is consumer/tax law for public charging infrastructure, not a tenant-rights statute, and isn't relevant to this clause library. CO's 4 EV-charging clauses (ev-charging-rights-co, -requirements-co, -shared-area-co, -end-of-tenancy-co) correctly remain CO-only; no WY equivalents drafted since the underlying legal right doesn't exist here.",
  },
  // Disclosures
  {
    id: "edu-no-voucher-protection-wy",
    title: "No Source-of-Income Protection — Voucher Applicants May Be Declined",
    group: "Disclosures",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where accepting Housing Choice Voucher (Section 8) applicants is legally mandatory, Wyoming has no source-of-income protection law. You are free to decline an applicant solely because they use a housing voucher, and doing so is not a form of discrimination under Wyoming or federal fair housing law. If you do choose to accept a voucher tenant voluntarily — which some landlords find attractive for the guaranteed, predictable monthly payment — none of Colorado's specific subsidy-tenant protections apply here: there's no Wyoming equivalent to a capped late fee for subsidized tenants or a mandated habitability-proration formula. Ordinary lease terms and Wyoming's standard Article 12 rules govern the tenancy the same as any other.",
    notes: "WY added 2026-08-21, backlog item #4 from session 5's full-library audit (§11). Confirmed via a dedicated Wyoming tenant-screening resource (tenantscreeningbackgroundcheck.com) stating directly, in Q&A form: 'Can Wyoming landlords refuse Housing Choice Voucher (Section 8) holders? Yes – No source of income protections.' Corroborated by voucherready.com (Section-8-focused resource) framing WY voucher acceptance as landlord-optional. CO's 4 subsidy/voucher clauses (subsidy-late-fee-co, subsidy-habitability-proration-co, edu-voucher-acceptance-co, edu-voucher-process-mechanics-co) correctly remain CO-only — they regulate a mandatory-acceptance regime that doesn't exist in Wyoming.",
  },
  // Security Deposit
  {
    id: "edu-no-deposit-installments-wy",
    title: "No Statutory Right to Pay the Deposit in Installments",
    group: "Security Deposit",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where a tenant has a statutory right to elect to pay the security deposit in installments over at least six months, Wyoming has no such right. You can require the full deposit upfront before occupancy, or choose to offer an installment arrangement voluntarily — but nothing in Wyoming law obligates you to accept installments if a tenant asks.",
    notes: "WY added 2026-08-21, backlog item #5 from session 5's full-library audit (§11). Confirmed via 6+ independent, detailed sources on WY deposit collection/process (Hemlane, Rentable, iPropertyManagement, Obligo, LeaseRunner, GoWhale, AAOA) — none mention an installment right, despite covering the deposit process in significant detail. Note: Hemlane's page on this topic contained a second fabricated claim this session (a false '75% interest payment' requirement, contradicted by every other source and by Hemlane's own other WY page) — second time this domain has been caught inventing WY deposit-interest content; treated as a systematically unreliable source for this topic going forward, not just a one-off error.",
  },
  // Rent & Payment
  {
    id: "edu-no-rental-fee-transparency-law-wy",
    title: "No Rental-Fee-Specific Transparency Law — General Consumer Protection Act Only",
    group: "Rent & Payment",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming has no rental-fee-specific transparency law comparable to Colorado's Honest Pricing Act. There's no requirement to display a single all-in advertised price including mandatory fees, no requirement to offer at least one fee-free payment method, and no specific statutory prohibition on charging a fee for a service you don't actually provide. Wyoming does have a general Consumer Protection Act (Wyo. Stat. § 40-12-101 et seq., enacted 1973) that prohibits broadly deceptive trade practices — misrepresenting what you're offering, in general terms — and a tenant or the Attorney General's office could theoretically pursue a complaint under it if a rental fee practice were clearly deceptive. But this is a much weaker, more general protection than Colorado's specific mandates, not a real substitute for them.",
    notes: "WY added 2026-08-21, backlog item #7 from session 5's full-library audit (§11) — explicitly named as a to-do after session 3 and not followed up on until now. Confirmed via primary-source read of Wyo. Stat. § 40-12-105 (unlawful practices list — misrepresentation of source/origin/sponsorship/approval, general consumer-fraud framing) plus confirmation the Act dates to 1973 and has no rental-specific fee provisions. Corroborated by the Wyoming AG's own Consumer Protection and Antitrust Unit resolved-matters page, which shows general consumer-fraud enforcement (subscription cancellation, unauthorized practice of law) with nothing rental-fee-specific. Maps to CO's edu-fee-unprovided-service-co, edu-fee-free-payment-method-co, edu-total-price-disclosure-co, and edu-rubs-uncertainty-co — none of which have a WY equivalent. Note: edu-fee-shifting-co (one-sided attorney-fee provisions) is a DIFFERENT CO statute (C.R.S. 38-12-801, not the Honest Pricing Act) and remains a separate unresolved backlog item, not addressed by this finding.",
  },
  // Default & Termination
  {
    id: "edu-no-for-cause-eviction-wy",
    title: "No Tenure-Based Cause Requirement — Landlords Can End Without Cause at Any Point",
    group: "Default & Termination",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where a tenant who has lived in a property for 12 months or more generally can't be removed without a specific legal cause or defined no-fault reason, Wyoming has no tenure-based cause requirement of any kind. You can end a month-to-month tenancy without cause by giving written notice, and you can decline to renew a fixed-term lease without cause once it expires — regardless of how long the tenant has lived there. No length of tenancy changes this.",
    notes: "WY added 2026-08-21, backlog item #8 from session 5's full-library audit (§11). Confirmed via multiple independent sources (Nolo, iPropertyManagement, LegalClarity, DoorLoop) consistently describing no-cause termination as available for both month-to-month tenancies and fixed-term non-renewals, with no tenure threshold mentioned anywhere.",
  },
  {
    id: "edu-no-tenant-death-statute-wy",
    title: "No Dedicated Tenant-Death Lease-Termination Statute",
    group: "Default & Termination",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado's 'Letty's Act,' Wyoming has no dedicated statute addressing what happens to a lease when a tenant dies during the term. Article 12 (all 11 sections) never addresses tenant death. In practice, if a tenant dies mid-lease, the estate generally remains liable for the remaining lease term under ordinary contract principles, subject to your general duty to make reasonable efforts to re-rent the unit (a broad contract-law mitigation-of-damages principle, not a landlord-tenant-specific statutory duty). There's no Wyoming equivalent to Colorado's specific protections against liquidated damages, accelerated rent, or clawed-back move-in concessions when a lease ends this way.",
    notes: "WY added 2026-08-21, backlog item #9 from session 5's full-library audit (§11). Confirmed via full-text read of all 11 Article 12 sections (session 1) plus a targeted search finding no WY-specific tenant-death statute anywhere — unlike Minnesota's 504B.265, which does exist and was checked as a reference point for what such a statute looks like when a state has one.",
  },
  // Landlord Responsibilities
  {
    id: "edu-no-alt-housing-requirement-wy",
    title: "No Requirement to Provide Alternate Housing During Major Repairs",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, which can require you to provide comparable alternate housing or a hotel room at your own cost when a condition materially interferes with a tenant's health, life, or safety, Wyoming has no such requirement. A Wyoming tenant's only remedy for an uncorrected habitability issue is the judicial path described elsewhere in this library — sue for costs and damages, or seek a court order — not a self-help or automatic alternate-housing obligation on your part.",
    notes: "WY added 2026-08-21, backlog item #10 from session 5's full-library audit (§11). Confirmed via multiple sources describing WY's full range of tenant remedies for habitability failures (sue for costs, seek court-ordered repair, potentially void the lease) with no mention anywhere of a landlord alternate-housing obligation. Companion item to edu-renter-repair-remedy-wy, added in an earlier session, which covers the judicial remedy path itself.",
  },
  // Security Deposit
  {
    id: "edu-no-deposit-nonwaiver-statute-wy",
    title: "No General Deposit-Rights Nonwaivability Statute",
    group: "Security Deposit",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, which makes it explicitly unenforceable for a lease to waive a tenant's security deposit rights, Wyoming has no equivalent statute making deposit-related rights nonwaivable. This is separate from the Safe Homes Act's own nonwaiver provision, which only covers domestic-abuse-related protections, not deposit rights generally. That said, a lease provision that conflicts with a mandatory requirement — like the 30-day return deadline — would likely still be unenforceable under ordinary contract-law principles, even without an explicit statutory nonwaiver rule; Wyoming just hasn't codified that protection the way Colorado has.",
    notes: "WY added 2026-08-21, backlog item #11 from session 5's full-library audit (§11). Confirmed via full-text read of §1207/1208 (session 1) plus this session's search — no source mentions any anti-waiver language for deposit rights. Process note: the Hemlane WY security-deposit page produced a THIRD distinct fabricated claim in this session (fictional new DV-related deposit provisions), on top of the fake interest-bearing-account mandate and fake 75% interest-payment rule already caught earlier — this specific page is now treated as systematically unreliable, not an occasional-error source.",
  },
  // Notices & General
  {
    id: "edu-no-broad-identity-change-notice-wy",
    title: "No Broad Notice Requirement When Ownership or Management Changes",
    group: "Notices & General",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where any change of landlord or property management company triggers a requirement to notify each tenant within 1 business day, Wyoming's only related rule is narrower: a successor owner is bound by the nonrefundable-deposit-notice and deposit-deduction duties under W.S. 1-21-1207 and 1-21-1208 (see this library's edu-successor-owner-bound-wy). There's no broader Wyoming statute requiring you to proactively notify tenants of a change in ownership or management generally. Doing so anyway is still good practice — tenants need to know who to pay and who to contact — but nothing in Wyoming law requires it on a specific timeline the way Colorado's rule does.",
    notes: "WY added 2026-08-21, backlog item #12 from session 5's full-library audit (§11) — the final item, closing out the full-library-audit backlog. Confirmed via direct full-text read of §1209 (session 1–2) plus this session's broader search, which surfaced nothing beyond the deposit-duty-succession rule already logged. Companion item to edu-successor-owner-bound-wy, clarifying the scope difference from CO's broader rule explicitly so the narrower WY scope isn't assumed to match CO's.",
  },
  {
    id: "edu-prohibited-lease-terms-ks",
    title: "Lease Provisions That Are Void Under Kansas Law",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas law voids four categories of lease provision outright (K.S.A. 58-2547): a clause where either party waives rights or remedies under the Kansas Residential Landlord and Tenant Act; a confession-of-judgment clause; any provision requiring either party to pay the other's attorney's fees — unlike Colorado, which only requires attorney-fee clauses to be mutual, Kansas does not allow one at all, in either direction; and broad exculpation, liability-limitation, or indemnification language, except that a tenant may agree to limit the landlord's liability for fire, theft, or breakage specifically in common areas. If a landlord knowingly uses a lease containing a prohibited provision, the tenant can recover actual damages. Standing rule: check every clause in this library against this list before tagging it for a Kansas lease — this specifically rules out ever adding a mutual attorney-fee clause, or general liability/indemnification language, to a KS lease.",
    notes: "Dual-logged as standing validation rule + LANDLORD_EDUCATION, same pattern as CO's police-call and rent-frequency rules. Open item, still unresolved as a CSV edit: does tenants-property-insurance's 'Landlord is not liable' language fall under the (a)(4) exculpation prohibition? Practical exposure assessed as low (K.S.A. 58-2547(b): unenforceable-only unless landlord knowingly used a known-prohibited term); Taylor decided to extend tenants-property-insurance to KS as-is.",
  },
  // Security Deposit
  {
    id: "edu-security-deposit-cap-ks",
    title: "Security Deposit Amount Limits",
    group: "Security Deposit",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas caps the security deposit at one month's rent for an unfurnished unit, up to 1.5 months' rent if you're renting it furnished with your own furniture, plus up to an additional half-month's rent if you allow pets (K.S.A. 58-2550(a)) — these stack, so a furnished, pet-friendly unit could allow up to 2 months' rent total. This is a ceiling, not something the lease needs to recite to the tenant; enter your actual amount in the Security Deposit clause. A separate schedule applies to certain subsidized municipal-housing-authority tenancies — not relevant to a typical Steinoak lease.",
    notes: "K.S.A. 58-2550(a).",
  },
  {
    id: "edu-security-deposit-noncompliance-penalty-ks",
    title: "Penalty for Mishandling a Security Deposit",
    group: "Security Deposit",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you don't comply with Kansas's return and itemization requirements (K.S.A. 58-2550(b)), the tenant can recover the wrongfully withheld amount plus damages equal to 1.5 times that amount (K.S.A. 58-2550(c)).",
    notes: "K.S.A. 58-2550(c).",
  },
  {
    id: "edu-security-deposit-successor-owner-ks",
    title: "A New Owner Inherits Your Deposit Obligations",
    group: "Security Deposit",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you sell or transfer the property, whoever holds your interest in it at the time the tenancy ends is bound by Kansas's security deposit rules (K.S.A. 58-2550(f)) — the obligation follows the property, not just the original landlord.",
    notes: "K.S.A. 58-2550(f).",
  },
  // Notices & General
  {
    id: "edu-disclosure-noncompliance-ks",
    title: "What Happens If You Don't Keep Your Disclosure Current",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you don't disclose (or don't keep current) the manager and owner information Kansas law requires, whoever signed the lease on your behalf becomes your tenant's implied agent for service of legal process and for receiving notices and demands (K.S.A. 58-2551(c)) — not a result most landlords want. Update the Landlord and Manager Disclosure clause promptly whenever this information changes.",
    notes: "K.S.A. 58-2551(c).",
  },
  // Landlord Responsibilities
  {
    id: "edu-habitability-duty-delegation-ks",
    title: "When You Can Shift Maintenance Duties to a Tenant",
    group: "Landlord Responsibilities",
    states: ["KS"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas allows a landlord and tenant to agree in writing that the tenant will perform some of the landlord's duties — trash removal and water/heat systems, plus specified repairs, maintenance, or remodeling — but only in a property with 4 or fewer households sharing common areas, and only if the arrangement is genuinely good-faith rather than a way to dodge your obligations (K.S.A. 58-2553(b)). For any other multi-unit property (not a single-family home), tenant-performed repairs are allowed under narrower conditions: a separate written agreement with real consideration, work that isn't needed to fix a building-code violation, and no effect on your duties to other tenants (K.S.A. 58-2553(c)). Either way, you can't make the tenant's cooperation with this separate agreement a condition of the main lease itself (K.S.A. 58-2553(d)). Not currently used in the standard Steinoak lease template — flagging as available if you ever want it for a specific property.",
    notes: "K.S.A. 58-2553(b),(c),(d).",
  },
  // Access & Entry
  {
    id: "edu-entry-standard-ks",
    title: "Kansas's Entry Standard Has No Fixed Notice Period",
    group: "Access & Entry",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas law only requires 'reasonable notice' and 'reasonable hours' for landlord entry (K.S.A. 58-2557(a)) — there's no codified number of hours, despite what some landlord-advice sites claim. Entry without the tenant's consent is allowed only for an extreme hazard involving potential loss of life or severe property damage (58-2557(b)) — narrower than a general emergency exception. You may not abuse the right of access or use it to harass the tenant (58-2557(c)). The lease's 24-hour standard satisfies 'reasonable' under common practice, but there's no statutory floor forcing that specific number.",
    notes: "K.S.A. 58-2557. Decision: rely on the existing self-limiting landlords-access clause ('...or the notice period required by applicable law if longer') rather than a KS-specific override. Implementation step still needed: extend landlords-access states field to include KS.",
  },
  // Tenant Responsibilities
  {
    id: "edu-dv-housing-protections-violation-ks",
    title: "Consequences of Violating the DV/SA Housing Protection",
    group: "Tenant Responsibilities",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you violate the domestic-violence/sexual-assault housing protections (K.S.A. 58-25,137), a court can award the tenant $1,000 in statutory damages plus reasonable attorney fees and costs — this is a court-awarded remedy for violating the statute, not a lease provision, so it doesn't conflict with Kansas's general ban on attorney-fee clauses. Submission of false information by an applicant or tenant claiming this protection can itself be grounds for denying tenancy or pursuing eviction.",
    notes: "K.S.A. 58-25,137(d),(i).",
  },
  // Default & Termination
  {
    id: "edu-tenant-noncompliance-notice-ks",
    title: "Notice Periods for Tenant Noncompliance",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "For a material lease violation or a health/safety-related violation (K.S.A. 58-2555), give written notice describing the breach and stating the lease will terminate at least 30 days after receipt if not remedied within 14 days. If the tenant cures in good faith within that 14-day window, the lease continues — but if the same or a similar breach recurs after that window, you can terminate on 30 days' notice without offering another chance to cure (K.S.A. 58-2564(a)). For nonpayment of rent, give written notice of the unpaid rent and your intent to terminate if not paid within 3 days; that 3-day period is counted as three consecutive 24-hour periods starting at personal delivery, delivery to a resident over 12, or conspicuous posting — add 2 extra days if you mail the notice instead (K.S.A. 58-2564(b)).",
    notes: "K.S.A. 58-2564(a),(b).",
  },
  {
    id: "edu-holdover-ks",
    title: "Kansas Holdover Damages Reference",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If Tenant's holdover is willful and not in good faith, Kansas caps recovery at 1.5 times periodic Rent or 1.5 times actual damages, whichever is greater (K.S.A. 58-2570(c)) — lower than the 'double the Monthly Rent' figure in the standard holdover clause. The clause's self-limiting language ('or the maximum amount allowed under applicable law, if less') already caps this correctly for Kansas, so no separate KS override is needed.",
    notes: "K.S.A. 58-2570(c). Decision: rely on existing self-limiting holdover clause rather than a KS-specific override. Implementation step still needed: extend holdover states field to include KS.",
  },
  // Notices & General
  {
    id: "edu-notice-to-vacate-additional-terms-ks",
    title: "Additional-Terms Warning on a Notice-to-Vacate Document",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you give a tenant a document to sign as their written notice of intent to vacate, and it includes any terms not already in the lease, Kansas law requires this exact statement in at least 10-point boldface type: 'YOUR SIGNATURE ON THIS DOCUMENT MAY BIND YOU TO ADDITIONAL TERMS NOT IN YOUR ORIGINAL LEASE AGREEMENT. IF YOUR LEASE REQUIRES YOU TO GIVE WRITTEN NOTICE OF YOUR INTENT TO VACATE, YOU HAVE THE RIGHT TO DECLINE TO SIGN THIS DOCUMENT AND TO PROVIDE WRITTEN NOTICE IN ANOTHER FORM.' (K.S.A. 58-2570(e)). Without that statement, the added terms don't bind the tenant even if they sign.",
    notes: "K.S.A. 58-2570(e).",
  },
  {
    id: "edu-retaliation-prohibition-ks",
    title: "Retaliation Against a Tenant Is Prohibited",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas law bars you from raising rent or cutting services because a tenant complained to a government agency about a health/safety code violation, complained to you about a habitability issue, or organized or joined a tenants' union (K.S.A. 58-2572(a)). This doesn't stop a genuine, good-faith rent increase to cover rising costs like utilities, property taxes, or other operating expenses, as long as it doesn't conflict with the current lease (58-2572(c)) — and it doesn't stop you from pursuing possession if the code violation was actually caused by the tenant's own lack of care, the tenant is behind on rent, or fixing the violation would require work that effectively ends the tenant's ability to use the unit (58-2572(d)).",
    notes: "K.S.A. 58-2572.",
  },
  // Rules & Regulations
  {
    id: "edu-rules-regulations-enforceability-ks",
    title: "When Landlord Rules Are Enforceable",
    group: "Rules & Regulations",
    states: ["KS"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A rule or regulation you adopt about a tenant's use of the property is only enforceable if it serves a legitimate purpose (tenant convenience/safety/welfare, protecting your property, or fair distribution of shared services), is reasonably related to that purpose, applies equally to all tenants, and is specific enough to fairly tell a tenant what is and isn't allowed (K.S.A. 58-2556). If the tenant had notice of the rule at signing, it's part of the rental agreement. A new rule adopted afterward that substantially modifies the deal the tenant signed up for is only enforceable if the tenant consents in writing — Kansas sets no specific advance-notice period for this in the standard Act (unlike the Mobile Home Park Act's parallel section, which requires 30 days' notice of rule changes).",
    notes: "K.S.A. 58-2556.",
  },
  // Notices & General
  {
    id: "edu-landlord-lien-abolished-ks",
    title: "No Landlord Lien on Tenant Property",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas abolished a landlord's ability to claim a lien or security interest in a tenant's household goods, furnishings, or other personal property (unless perfected before the 1975 Act took effect), and abolished distraint for rent entirely, except as allowed under the abandoned-property procedure at K.S.A. 58-2565 (K.S.A. 58-2567). Don't include a clause purporting to give you a lien on tenant property for unpaid rent or damages — it wouldn't be enforceable.",
    notes: "K.S.A. 58-2567.",
  },
  // Rent & Payment
  {
    id: "edu-late-rent-acceptance-waiver-ks",
    title: "Accepting Late Rent Can Waive Your Right to Act on It",
    group: "Rent & Payment",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas law says accepting late rent, rent with knowledge of a default, or any performance that varies from the lease terms, without reservation, waives your right to terminate the lease for that specific breach — unless you and the tenant agree otherwise after the breach has already occurred (K.S.A. 58-2566). See edu-late-rent-reservation-fix-ks for a drafting approach addressing this.",
    notes: "K.S.A. 58-2566. Full text confirmed to include 'without reservation' qualifier, initially missed due to a truncated primary-source fetch — corrected in edu-late-rent-reservation-fix-ks.",
  },
  {
    id: "edu-late-rent-reservation-fix-ks",
    title: "Drafting Fix for the Late-Rent Waiver Issue",
    group: "Rent & Payment",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "K.S.A. 58-2566's actual text says accepting late rent 'without reservation' waives your right to act on that breach — not that acceptance always waives it. Framing the lease's non-waiver language as an express, standing reservation of rights (rather than a flat 'acceptance doesn't waive anything' statement) tracks the statute's own wording and gives you a real textual argument that late-rent acceptance is never 'without reservation' under this lease. Suggested replacement language: 'Any acceptance by Landlord of a late or partial payment, or of performance that varies from this Lease, is accepted with reservation of Landlord's rights and remedies under this Lease and applicable law, and does not waive Landlord's right to require timely and full performance in the future or to pursue any remedy for the breach.' This is a textually grounded fix, not a certainty — a court could still read 'reservation' as requiring something more contemporaneous than standing boilerplate, so this is a reasonable drafting choice rather than a guarantee. Also worth noting: Schutt v. Foster (Kan. Sup. Ct.) involved a $20/day late fee found unconscionable by the Court of Appeals after compounding to $21,240 — the Supreme Court reversed on a procedural technicality without reaching the merits, so uncapped/compounding daily late fees carry real unconscionability risk in Kansas.",
    notes: "K.S.A. 58-2566; Schutt v. Foster (Kan. Sup. Ct.). Open item: whether to actually apply this replacement language to the late-fee clause for KS is still Taylor's call — not yet made.",
  },
  // Security Deposit
  {
    id: "edu-no-security-deposit-interest-ks",
    title: "No Interest Required on Security Deposits",
    group: "Security Deposit",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Connecticut, Maryland, Massachusetts, New Jersey, or Ohio, Kansas doesn't require you to hold a tenant's security deposit in an interest-bearing account or pay the tenant any interest on it — you can keep whatever interest the funds happen to earn.",
    notes: "Confirmed absent from K.S.A. 58-2550 primary text; corroborated by secondary sources.",
  },
  // Disclosures
  {
    id: "edu-no-radon-disclosure-ks",
    title: "No Radon Disclosure Requirement",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, Kansas has no statewide requirement to disclose radon information to tenants before signing a lease. Kansas does have a radon disclosure statute, K.S.A. 58-3078a, but it applies to SELLERS of residential real property, not to landlords. If you're aware of an elevated radon reading at the property, general habitability principles could still create exposure if you say nothing and a tenant is harmed — but there's no specific statutory disclosure form or notice period to follow here.",
    notes: "Confirmed absent — cross-checked two independent legal-reference sources listing the small number of states with rental-specific radon disclosure statutes; Kansas not among them. | STRENGTHENED 2026-08-30 (v59): the absence is now AFFIRMATIVE rather than inferred. K.S.A. 58-3078a exists and is sale-only, so Kansas legislated on radon disclosure and chose not to extend it to leases - a stronger finding than 'no statute located.'",
  },
  {
    id: "edu-no-bed-bug-disclosure-ks",
    title: "No Residential Bed Bug Disclosure Statute",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, California, or Maine, Kansas has no bed bug disclosure or fixed inspection/treatment-timeline statute for residential rentals. Kansas's bed bug regulations (K.A.R. 4-27 series - bed bugs are an 'imminent health hazard' under 4-27-2(f); 4-27-5 requires ceasing operations and notifying within 12 hours; 4-27-9 bars renting an infested guest room) apply to hotels and lodging establishments, not standard leases — a residential bed bug infestation is handled under the general habitability duty (K.S.A. 58-2553) instead. Note: online sources describing a specific inspection/treatment timeline for 'Kansas' landlords are often actually describing Kansas City, Missouri's separate municipal ordinance, not Kansas state law — worth double-checking which side of the state line any cited rule applies to.",
    notes: "Confirmed absent for residential rentals. K.A.R. 4-27 series applies to lodging establishments only. | CITATION REFINED 2026-08-30 (v59): operative sections confirmed and now cited specifically instead of the generic 'series' reference. Lodging-only scope re-confirmed against primary text during the citation screen.",
  },
  {
    id: "edu-fair-housing-ks",
    title: "Fair Housing Protected Classes in Kansas",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The Kansas Act Against Discrimination tracks the federal Fair Housing Act's protected classes: race, color, national origin, religion, sex, familial status, and disability. Kansas hasn't added source of income, sexual orientation, or gender identity as a state-level protected class. If your property happens to be in the Kansas City metro, note that any source-of-income protections you may have heard about are Kansas City, Missouri municipal ordinances — they don't apply on the Kansas side of the state line.",
    notes: "Kansas Act Against Discrimination; no added state-level protected classes or source-of-income protection confirmed.",
  },
  // Pets
  {
    id: "edu-service-animal-fraud-ks",
    title: "Service Animal Misrepresentation Penalty Does Not Reach Housing",
    group: "Pets",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas's service-animal misrepresentation crime is real but does not reach rental housing. K.S.A. 39-1112 makes misrepresentation a class A nonperson misdemeanor, but by its own terms it applies only to misrepresenting a right to be accompanied by an assistance dog \"in or upon any place listed in K.S.A. 39-1101\" - common carriers, hotels and lodging places, places of public accommodation, and other places to which the general public is invited - or, for a professional therapy dog, places listed in K.S.A. 39-1110. Residential rental housing appears on neither list. The housing rights are granted separately by K.S.A. 39-1102 (guide dog), 39-1107 (hearing assistance dog) and 39-1108 (service dog), each of which adds \"the acquisition and use of rental, residential housing\" on top of the 39-1101 places rather than being part of that list. A tenant who misrepresents a service animal to a landlord therefore does not commit this offense. The same limit applies to the statutory verification procedure at K.S.A. 39-1111, which is also scoped to the 39-1101 and 39-1110 place lists: Kansas extended the substantive rights into housing but extended neither the verification procedure nor the misrepresentation penalty. Kansas also has no emotional-support-animal misrepresentation crime in housing - a bill creating one was introduced four times and never passed.",
    notes: "K.S.A. 39-1112(a), 39-1101, 39-1110, 39-1111; scope confirmed against full primary text of Ch. 39 Art. 11. | MATERIAL CORRECTION 2026-08-29 (v58), KS re-audit. This row previously shipped VERIFIED asserting 39-1112 as a Kansas landlord-education item and describing it as \"parallel to Wyoming's Wyo. Stat. 35-13-203(b) finding.\" The parallel was FALSE in the one respect that determines relevance. Wyoming's 35-13-203(b) scoped its penalty to rights \"set forth in this article\" and the residential-leasing right (35-13-201(c)) sits in that article, so it reaches housing. Kansas scoped by PLACE LIST instead of by act, and the place list excludes housing. Same question, opposite answer, purely structural. | ERROR CLASS: valid citation, false characterization - same class as the CO re-audit's assistance-animal-accommodation-co \"criminal offense\" finding. A citation-existence screen CANNOT catch this; 39-1112 exists and was quoted accurately. Only reading the section's scope language catches it. Third consecutive re-audit to surface an error that shipped VERIFIED. | rule_type changed CONSTRAINED -> RECOMMENDED to match the library's confirmed-absence convention; the operative content is now that a penalty is NOT available in housing. | Failed-bill history (proof of absence at the project's strongest standard - not silence but repeated legislative refusal): HB 2523 (2019); SB 360 (2022, died in committee 2022-05-23); S Sub HB 2057 (2022, died in conference 2022-05-23); SB 170 (2025, no corresponding K.S.A. section). CAUTION: the text of these bills circulates on ESA-letter sites as though enacted. That is a BILL, not law - the same failure mode as the CO carpet-lookback error (superseded draft read as enacted text). | Prior fabricated-citation history on this row retained below for the audit trail. | PRIOR NOTE: one weaker source claimed K.S.A. 58-25,138 gives landlords blanket immunity from assistance-animal injury/damage liability. RESOLVED, confirmed false: 58-25,137 is the LAST section in Article 25. No 58-25,138 exists. | PRIOR NOTE: STALE CROSS-REFERENCE CORRECTED 2026-08-28 (v57): previously cited Wyo. Stat. 35-13-207, which does not exist (article ends at 35-13-206); correct cite is 35-13-203(b). Survived because the screen ran against bodyText, not notes.",
  },
  // Disclosures
  {
    id: "edu-no-mold-disclosure-ks",
    title: "No Mold Disclosure Requirement",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas has no statutory mold disclosure requirement or required disclosure form. A mold problem caused by a landlord-controlled moisture source (a roof or plumbing leak, for example) falls under the general habitability duty (K.S.A. 58-2553) instead — no separate disclosure obligation, but still a real repair obligation once you're on notice.",
    notes: "Confirmed absent via multiple independent, mutually-agreeing sources. Closes the mold-disclosure item flagged as unchecked in the original decision log.",
  },
  // Parking & Storage
  {
    id: "edu-no-ev-charging-right-ks",
    title: "No EV Right-to-Charge Statute",
    group: "Parking & Storage",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado and a growing list of other states, Kansas has no right-to-charge statute giving tenants a legal right to install an EV charging station at their rental. Whether to allow one, and on what terms, is entirely up to you.",
    notes: "Confirmed absent. A multi-state right-to-charge tracker names roughly 14 states with such laws (10 owner/HOA-only, plus CO, CT, IL, OR, WA as the stronger tenant-inclusive group); Kansas doesn't appear in either group.",
  },
  // Disclosures
  {
    id: "edu-no-voucher-protection-ks",
    title: "No Housing-Voucher Acceptance Mandate",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas doesn't require landlords to accept Housing Choice Vouchers (Section 8) or any other subsidy source — you can decline an applicant because of how they intend to pay, the same way you can screen on any other lawful criterion. If your property is in the Kansas City metro, note that voucher-acceptance mandates you may have heard about were a Kansas City, Missouri municipal ordinance, since struck down by Missouri state law (HB 595, effective August 2025) — never applicable in Kansas, and no longer in force even on the Missouri side.",
    notes: "Confirmed absent, distinct topic from the general fair-housing/source-of-income finding already logged (edu-fair-housing-ks) — this closes the specific voucher-acceptance question the way Wyoming's edu-no-voucher-protection-wy did. Naming trap reconfirmed: KC-Missouri ordinances keep surfacing in Kansas-labeled searches.",
  },
  // Security Deposit
  {
    id: "edu-no-deposit-installments-ks",
    title: "No Deposit Installment-Payment Right",
    group: "Security Deposit",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas doesn't give tenants a statutory right to pay the security deposit in installments — you can require it up front. One source claimed a general 2-month installment right, but that claim wasn't supported by the actual statute text (K.S.A. 58-2550) or by any other source, and its own wording suggests it was describing a subsidized municipal-housing-authority-specific provision, not a rule for ordinary Kansas tenancies.",
    notes: "Confirmed absent — verified against the already-pulled primary text of 58-2550, which contains no installment provision. One contradicting source (PayRent) found and rejected as likely conflating a municipal-housing-authority-specific rule with general Kansas law; every other source on Kansas deposit rules is silent on installments. Same pattern as Wyoming's edu-no-deposit-installments-wy.",
  },
  // Notices & General
  {
    id: "edu-unconscionability-ks",
    title: "Court Can Void an Unconscionable Lease Provision",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas courts can refuse to enforce an entire rental agreement, a single unconscionable provision, or limit a provision's effect, if they find it was unconscionable when made (K.S.A. 58-2544). This is a real, live doctrine in Kansas landlord-tenant practice — in Schutt v. Foster, a Kansas Court of Appeals panel found a $20/day late fee that compounded to $21,240 over 1,062 days unconscionable and cut it to $1,700; the Kansas Supreme Court later reversed only on a procedural technicality (a briefing-preservation rule), not on the merits, so the underlying unconscionability finding was never actually overturned. Keep late fees, and any other open-ended dollar-amount clause, at a level that could survive this kind of scrutiny.",
    notes: "K.S.A. 58-2544; Schutt v. Foster (Kan. Sup. Ct., 2025). Closes a section flagged in the very first pass of this project ('Likely LANDLORD_EDUCATION — URLTA-standard unconscionability doctrine') but never actually resolved with primary-source text until this session.",
  },
  {
    id: "edu-consumer-protection-act-ks",
    title: "Kansas Consumer Protection Act as a Backstop",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Beyond the KRLTA's own unconscionability rule (K.S.A. 58-2544), Kansas has a broader Consumer Protection Act (K.S.A. 50-623 et seq.; the unconscionable-acts provision is K.S.A. 50-627 and the deceptive-acts provision is K.S.A. 50-626) covering 'deceptive and unconscionable' trade practices generally, which can independently apply to landlord-tenant disputes when the KRLTA doesn't already address the issue — Kansas courts have held the more specific KRLTA controls where the two overlap, but the KCPA can still fill gaps. Unlike Colorado's Honest Pricing Act, Kansas has no rental-fee-specific transparency law (no all-in-pricing mandate, no free-payment-method requirement, no unprovided-service-fee ban) — the KCPA's protection here is the general unconscionability standard, not a fee-disclosure regime.",
    notes: "K.S.A. 50-623 et seq.; Chelsea Plaza Homes, Inc. v. Moore (KRLTA takes precedence over KCPA where they overlap). Closes the 'Kansas analog to CO's Honest Pricing Act' question the way Wyoming's edu-no-rental-fee-transparency-law-wy did — answer here is more nuanced than Wyoming's clean absence: no fee-transparency law, but a real general-purpose unconscionability backstop exists and has real teeth (see edu-unconscionability-ks / Schutt v. Foster). | CITATION REFINED 2026-08-30 (v59), from the scope-59 citation screen: the row cited only 'K.S.A. 50-623 et seq.' - correct as an act citation, but the Kansas Revisor's own annotation to K.S.A. 84-2-302 names K.S.A. 50-627 as the KCPA's unconscionability provision (50-626 covers deceptive acts). Specific sections now stated. Imprecision, not error; found only because verification forced reading what the sections say.",
  },
  // Default & Termination
  {
    id: "edu-no-tenant-death-statute-ks",
    title: "No Tenant-Death Lease-Termination Statute",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas has no statute letting a deceased tenant's estate terminate the lease early without liability (unlike some states' 'Letty's Act'-style protections). A tenant's death doesn't end the lease — the estate remains liable for rent through the end of the term under ordinary contract principles, subject to your duty to mitigate damages by making reasonable efforts to re-rent.",
    notes: "Confirmed absent — no KRLTA section addresses tenant death, and secondary sources agree the estate remains liable under general contract law. Same pattern as Wyoming's edu-no-tenant-death-statute-wy.",
  },
  // Landlord Responsibilities
  {
    id: "edu-no-alt-housing-requirement-ks",
    title: "No Alternate-Housing Requirement During Repairs",
    group: "Landlord Responsibilities",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nothing in the KRLTA requires you to house a tenant or pay relocation costs while repairs are underway. A tenant's real options during a habitability failure are the notice-and-cure process (K.S.A. 58-2559) and, if the property is damaged or destroyed by fire or casualty specifically, the immediate-vacate or partial-vacate rights in K.S.A. 58-2562 (see fire-casualty-termination-ks) — not a right to alternate housing at your expense.",
    notes: "Confirmed absent. Same pattern as Wyoming's edu-no-alt-housing-requirement-wy.",
  },
  // Default & Termination
  {
    id: "edu-no-for-cause-eviction-ks",
    title: "No Tenure-Based For-Cause Eviction Protection",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where a tenant who has lived in a property for 12 months or more generally can't be removed without a specific legal cause or defined no-fault reason, Kansas has no tenure-based just-cause requirement at all. A month-to-month tenancy can be ended with plain 30-day written notice regardless of how long the tenant has lived there, no reason required (K.S.A. 58-2570(b)) — subject only to the retaliation prohibition (K.S.A. 58-2572) and fair housing law. Ending a tenancy mid-lease still requires cause, the same as any state, since that's ordinary contract law, not a tenure-based protection.",
    notes: "Confirmed absent — two independent sources (Nolo, DocDraft) agree, consistent with the already-verified K.S.A. 58-2570(b) text (30-day notice, no cause requirement stated) and with Wyoming's identical finding (edu-no-for-cause-eviction-wy). Closes the last unchecked item from Wyoming's own named-topic checklist, surfaced when Taylor pushed back on completeness claims rather than accepting them at face value.",
  },
  // Disclosures
  {
    id: "edu-no-immigrant-tenant-protection-ks",
    title: "No Immigrant Tenant Protection Act",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado's Immigrant Tenant Protection Act, Kansas has no state law specifically barring a landlord from asking about, collecting, or threatening to disclose a tenant's immigration or citizenship status. General federal Fair Housing protections against national-origin discrimination still apply (see edu-fair-housing-ks), but that's a different, narrower protection than Colorado's dedicated statute.",
    notes: "Confirmed absent. Only California (2017), Illinois (2020), and Colorado (2020) were found to have dedicated Immigrant Tenant Protection Act-style statutes; Kansas doesn't appear among them across a reasonably thorough search. Closes an item that was a CO standing rule but had never been explicitly re-checked for WY or KS.",
  },
  // Notices & General
  {
    id: "edu-no-right-to-call-police-statute-ks",
    title: "No State-Level Right-to-Call-Police Statute",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado's non-waivable right to call police or emergency services, and unlike states such as Minnesota with a dedicated statute (Minn. Stat. § 504B.205), Kansas has no state-level law specifically barring a landlord from penalizing a tenant for calling police or emergency assistance, or requiring that right to be non-waivable. Kansas's domestic-violence housing protection (K.S.A. 58-25,137, see dv-housing-protections-ks) covers denial of tenancy and eviction based on victim status, but doesn't itself address calling the police as a protected act the way Minnesota's statute does. Local nuisance/crime-free-housing ordinances, which can effectively penalize tenants for police calls, are a municipal-level issue in Kansas, not state law — the same category of city-by-city complexity that's keeping Ohio deliberately deferred in this project, and not audited here.",
    notes: "Confirmed absent at the state statutory level — no dedicated Kansas statute found across several comprehensive sources including Kansas Legal Services' own landlord handbook. Weaker corroboration than some other absence findings in this project (no multi-state tracker confirming Kansas's absence the way EV charging had); flagged honestly rather than overstated. Closes the second CO standing rule that had never been re-checked for WY or KS. Municipal nuisance-ordinance layer explicitly named as unaudited, not silently assumed clean.",
  },
  {
    id: "edu-disclosure-noncompliance-ne",
    title: "What Happens If You Don't Keep Your Disclosure Current",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you don't disclose (or don't keep current) the manager and owner information Nebraska law requires, whoever signed the lease on your behalf becomes your tenant's implied agent for service of legal process and for receiving notices and demands, and for performing your obligations under the Lease and Nebraska law (§76-1417(3)) — not a result most landlords want. Update the Landlord and Manager Disclosure clause promptly whenever this information changes.",
    notes: "Neb. Rev. Stat. §76-1417(3). Mirrors edu-disclosure-noncompliance-ks.",
  },
  {
    id: "edu-prohibited-lease-terms-ne",
    title: "Lease Provisions That Are Void Under Nebraska Law",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska law voids four categories of lease provision outright (§76-1415): a clause where the tenant waives rights or remedies under the Uniform Residential Landlord and Tenant Act; a confession-of-judgment clause; any provision requiring either party to pay the other's attorney's fees; and a clause exculpating or limiting the landlord's liability for the landlord's own active, actionable negligence (narrower than Kansas's broader exculpation ban — Nebraska's trigger is negligence-specific, not any liability limitation). A prohibited provision is simply unenforceable; the tenant can recover actual damages and attorney fees only if you deliberately used a provision you knew was prohibited. Every future Nebraska clause needs to be checked against this list, the same way every Kansas clause is checked against edu-prohibited-lease-terms-ks.",
    notes: "Neb. Rev. Stat. §76-1415. Dual-logged as standing validation rule + LANDLORD_EDUCATION, same pattern as CO/KS. | NE RE-AUDIT 2026-08-31: §76-1415 re-read verbatim; the four listed prohibitions are CONFIRMED accurate. But this row implied §76-1415 is the complete list of things a Nebraska lease may not do, and it is not — §76-1413(9) (Laws 2025, LB185) separately bars requiring a tenant to accept electronic delivery as a lease term or renewal condition. See edu-electronic-notice-regime-ne. Also confirmed from the annotations: Bedrosky v. Hiner, 230 Neb. 200 (1988) holds the URLTA reaches residential leases only and does NOT prohibit exculpatory clauses in COMMERCIAL leases — relevant if Steinoak ever scopes commercial product.",
  },
  {
    id: "edu-statutory-attorney-fee-actions-ne",
    title: "Statutory Attorney-Fee Awards Are Different From a Lease Clause",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska bans any lease clause that promises attorney fees to either party (§76-1415(1)(c)) — don't draft one. Separately, several sections of the Uniform Residential Landlord and Tenant Act award attorney fees directly by statute when a party proves specific violations (for example, a landlord's noncompliance with the security-deposit return requirements at §76-1416, or a tenant's willful noncompliance with the lease). Nebraska courts have held that a prevailing tenant's fee award under §76-1416 is mandatory, not discretionary, once noncompliance is proven — this is a statutory remedy the court applies regardless of what the lease says, not something the lease itself creates, so it doesn't conflict with the attorney-fee-clause ban.",
    notes: "Neb. Rev. Stat. §76-1416(3); Black v. Brooks, 285 Neb. 440 (2013); Lomack v. Kohl-Watts, 13 Neb. App. 14 (2004). Resolves Flag 2 from the session-1 discussion — distinguishes the lease-clause ban from mandatory statutory fee-shifting in specific causes of action.",
  },
  // Security Deposit
  {
    id: "edu-security-deposit-cap-ne",
    title: "Security Deposit Amount Limits",
    group: "Security Deposit",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska caps the security deposit at one month's rent, plus an optional pet deposit of up to one-quarter month's rent when appropriate (§76-1416(1)) — simpler than Kansas's stacked structure and lower than Colorado's 2-month cap. This cap doesn't apply to properties operated by a housing agency under the Nebraska Housing Agency Act. This is a ceiling, not something the lease needs to recite; enter your actual amount in the Security Deposit clause.",
    notes: "Neb. Rev. Stat. §76-1416(1).",
  },
  {
    id: "edu-security-deposit-noncompliance-penalty-ne",
    title: "Penalty for Mishandling a Security Deposit",
    group: "Security Deposit",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you don't comply with Nebraska's 14-day return and itemization requirement (§76-1416(2)), the tenant can recover the property and money due, court costs, and reasonable attorney fees (§76-1416(3)) — and Nebraska courts treat this fee award as mandatory once noncompliance is shown, not left to the court's discretion. If your noncompliance is willful and not in good faith, the tenant can also recover liquidated damages equal to one month's rent or twice the deposit amount, whichever is less.",
    notes: "Neb. Rev. Stat. §76-1416(3); Lomack v. Kohl-Watts, 13 Neb. App. 14 (2004).",
  },
  // Access & Entry
  {
    id: "edu-entry-notice-content-ne",
    title: "What Nebraska's Entry Notice Must Include",
    group: "Access & Entry",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska's 24-hour written entry notice requirement (§76-1423(3)) — matched by the self-limiting landlords-access clause — must include the intended purpose for entry and a reasonable window during which you anticipate entering, and must be provided to each individual unit. Repeated lawful-but-harassing entry demands, and entry in an unreasonable manner, are both independently prohibited even when notice is technically given.",
    notes: "Neb. Rev. Stat. §76-1423(3).",
  },
  // Default & Termination
  {
    id: "edu-tenant-noncompliance-notice-ne",
    title: "Notice Periods for Tenant Noncompliance",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "For a material lease violation or a health/safety-related violation (§76-1421), give written notice describing the breach and stating the lease will terminate at least 30 days after receipt if not remedied within 14 days. If the tenant cures in good faith within that window, the lease continues — but if the same or a similar breach recurs within 6 months, you can terminate on 14 days' notice without offering another chance to cure (§76-1431(1)). For nonpayment of rent, give written notice of the unpaid rent and your intent to terminate; the tenant then has 7 calendar days from that notice to pay before you can terminate (§76-1431(2)) — a longer window than Kansas's 3-day pay-or-quit period.",
    notes: "Neb. Rev. Stat. §76-1431(1),(2).",
  },
  {
    id: "edu-violent-crime-eviction-ne",
    title: "Fast-Track Eviction for Violent Crime or Drug Sales — No Cure Right",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska gives you a faster eviction path — 5 days' written notice, with no right for the tenant to cure — if the tenant, a household member, a guest, or anyone under the tenant's control engages in violent criminal activity, illegal drug sales, or other conduct that threatens the health or safety of other tenants, you, or your employees, on the premises (§76-1431(4)). This is a statutory power, not something your lease needs to create. Important carve-out: you can't use this against a tenant who is themselves a domestic-violence victim if they've taken protective steps (a protective order, a police report, or DV certification from a qualified third party) — and if both the victim and the perpetrator are co-tenants, this fast-track path can only be used against the perpetrator (§76-1431(5)).",
    notes: "Neb. Rev. Stat. §76-1431(4),(5). Landlord-side statutory remedy, no CO/WY/KS analog — logged as education only per session-1 discussion (Flag 4), not a lease clause, since it applies regardless of lease language.",
  },
  {
    id: "edu-no-for-cause-eviction-ne",
    title: "No Tenure-Based For-Cause Eviction Protection",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where a tenant who has lived in a property for 12 months or more generally can't be removed without a specific legal cause or defined no-fault reason, Nebraska has no tenure-based just-cause requirement. A month-to-month tenancy can be ended with plain 30 days' written notice regardless of how long the tenant has lived there, no reason required (§76-1437(2)) — subject only to the retaliation prohibition (§76-1439) and fair housing law.",
    notes: "Neb. Rev. Stat. §76-1437(2). Confirmed absent, consistent with the CO/WY/KS pattern already logged — closes this item from the consolidated checklist.",
  },
  // Notices & General
  {
    id: "edu-landlord-lien-abolished-ne",
    title: "No Landlord Lien on Tenant Property",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska abolished a landlord's ability to claim a lien or security interest in a tenant's household goods, and abolished distraint for rent entirely (§76-1434). Don't include a clause purporting to give you a lien on tenant property for unpaid rent or damages — it wouldn't be enforceable.",
    notes: "Neb. Rev. Stat. §76-1434.",
  },
  {
    id: "edu-retaliation-prohibition-ne",
    title: "Retaliation Against a Tenant Is Prohibited",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska law bars you from raising rent, cutting services, or bringing (or threatening) an eviction action because a tenant complained to a government agency about a health/safety code violation, or organized or joined a tenants' union (§76-1439(1)). This doesn't stop a genuine rent increase or service change unrelated to the complaint, and it doesn't stop you from pursuing possession if the code violation was actually caused by the tenant's own lack of care, the tenant is behind on rent, or fixing the violation would require work that effectively deprives the tenant of use of the unit (§76-1439(3)).",
    notes: "Neb. Rev. Stat. §76-1439.",
  },
  {
    id: "edu-five-year-lease-exclusion-ne",
    title: "Long-Term Leases (5+ Years) Fall Outside This Act",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A lease of residential land for a term of five years or more is excluded from Nebraska's Uniform Residential Landlord and Tenant Act entirely (§76-1408(8)) — a state-specific carve-out with no CO/WY/KS analog. If you're drafting a lease with an initial term of 5 years or longer, none of the Act's protections or requirements (security deposit rules, notice-and-cure mechanics, habitability duties, etc.) apply by statute — ordinary contract and property law governs instead. Not relevant for Steinoak's typical fixed-term or month-to-month leases, but worth flagging if a long-term lease template is ever built.",
    notes: "Neb. Rev. Stat. §76-1408(8). Genuinely new finding — no equivalent exclusion identified in CO, WY, or KS.",
  },
  // Default & Termination
  {
    id: "edu-holdover-ne",
    title: "Nebraska's Holdover Damages Ceiling Is Higher Than the Standard Clause",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska allows a landlord to recover up to three months' periodic rent or threefold the actual damages, whichever is greater, from a tenant whose holdover is willful and not in good faith — a higher ceiling than Colorado's double-rent figure and Kansas's 1.5x cap. Nebraska's holdover statute also awards the landlord reasonable attorney's fees on top of that figure (§76-1437(3)) — a genuine statutory fee award tied to this specific remedy, not a lease-clause promise, so it doesn't conflict with the attorney-fee-shifting ban. The standard holdover clause requests double the Monthly Rent with no fee-shifting language, which is comfortably within Nebraska's higher damages ceiling, so no override is needed for the damages figure — you're simply requesting less than the maximum Nebraska law would allow. The attorney-fee award happens automatically by statute regardless of what the lease says.",
    notes: "Neb. Rev. Stat. §76-1437(3). Per Taylor's call (session 1, Flag 6): the generic holdover clause's fixed 'double rent' figure remains valid in NE since it requests less than NE's 3x ceiling — no supersedes needed, states field extended directly. Revisit the double-rent baseline once more states are surveyed and recalibrate to whatever figure is most common across all 50. | CORRECTED (gap-discovery source #2, real lease-product comparison): the attorney's-fees component of §76-1437(3) was missed in the original session-1 statute read — caught when a real Nebraska commercial lease product (ILRG/PublicLegal, attorney-reviewed) included it and the citation was re-verified directly against primary source, confirming the commercial product was right and this clause's original session-1 version was incomplete. | *** NUMERIC ERROR CORRECTED 2026-08-31 (NE re-audit), full URLTA read verbatim from nebraskalegislature.gov. *** Statute: 'an amount not more than THREE MONTHS' PERIODIC RENT or threefold the actual damages sustained by him, whichever is greater, and reasonable attorney's fees.' The row said '3 times periodic rent.' NOT THE SAME. 'Three months' periodic rent' is TIME-based; '3x periodic rent' is a MULTIPLIER. They coincide only for month-to-month. For a week-to-week roomer under §76-1414(4) — a tenancy Nebraska expressly contemplates — periodic rent is WEEKLY, so three months' periodic rent is ~13 weeks' rent, not 3 weeks'. The prior wording understated landlord recovery ~4x in the tenancy where it matters most. The multiplier form ('threefold') applies ONLY to the actual-damages branch, which is why the two branches read differently and why collapsing both into '3x' loses the distinction. Cite: §76-1437(3). | CORRECTED 2026-09-03: this row described double monthly rent as 'Colorado's double-rent figure.' That attribution is WRONG. Colorado has NO holdover multiplier — C.R.S. §13-40-123 gives the prevailing party damages, costs, and (residential only if the lease so provides) attorney fees, with damages measured as reasonable rental value per Behr v. Burge, 940 P.2d 1084 (Colo. App. 1996). See edu-holdover-co. The comparison drawn in this row's body text should be read as against the old generic clause's figure, not against Colorado law.",
  },
  // Tenant Responsibilities
  {
    id: "edu-dv-protections-procedure-ne",
    title: "Domestic Violence Protection Documentation and Landlord Costs",
    group: "Tenant Responsibilities",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Qualifying documentation for any of the three DV protections above is either a protective order/restraining order, or certification from a qualified third party (a nonprofit or tribal DV/sexual-assault services organization with a state affiliation agreement) under the federal Violence Against Women Reauthorization Act. You can charge the tenant for the actual, reasonable cost of a lock change. If the perpetrator fails to vacate within the notice period, you may recover court costs and attorney fees from the perpetrator specifically (not from the innocent tenant) once you win the resulting possession suit — this is a statutory fee award tied to the DV removal process, not a general lease attorney-fee clause, so it doesn't conflict with the attorney-fee-shifting ban.",
    notes: "Neb. Rev. Stat. §76-1410(11) (qualified third party definition), §76-1431.02(4)(c).",
  },
  // Landlord Responsibilities
  {
    id: "edu-habitability-duty-delegation-ne",
    title: "You Can Delegate Some Maintenance Duties to the Tenant, Under Conditions",
    group: "Landlord Responsibilities",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska lets you and the tenant agree, in writing and for good consideration, that the tenant will perform your waste-removal and water/heat-supply duties for a single-family residence (§76-1419(2)), or specified repairs/maintenance/alterations for any dwelling unit if the agreement is a separate signed writing supported by adequate consideration and doesn't diminish your obligations to other tenants (§76-1419(3)). Either path requires genuine good faith — not a workaround to evade your duties. Not used in the current Steinoak template; logged as available if you want to offer it.",
    notes: "Neb. Rev. Stat. §76-1419(2),(3). Mirrors edu-habitability-duty-delegation-ks in spirit; Nebraska's version is somewhat more permissive (allows delegating repairs/alterations generally, not just in small buildings like Kansas's ≤4-household carve-out).",
  },
  // Rent & Payment
  {
    id: "edu-late-rent-reservation-fix-ne",
    title: "What Accepting a Late Payment Actually Costs You in Nebraska",
    group: "Rent & Payment",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you accept rent knowing the tenant is in default, Nebraska law treats that as waiving one specific thing: your right to TERMINATE the lease for that particular breach (§76-1433). That is narrower than it sounds, and worth being precise about. You do NOT lose the late fee. You do not lose the rent, any damages claim, your right to insist on full and timely payment going forward, your right to charge a late fee next time, or your right to terminate for any different or continuing breach. What you lose is the ability to evict over that one late payment after you have taken the money for it. The statute also gives you a way to keep even that: it applies 'unless otherwise agreed after the breach has occurred.' Note the timing — the agreement has to come AFTER the breach, so no sentence written into the lease at signing can do this work, because the lease predates every breach under it. If you want to accept a late payment and still preserve the right to terminate for it, get the tenant's written agreement to that at the time you accept the payment. A short signed acknowledgment accompanying the receipt or late-fee charge is the practical form. This is a landlord practice question, not something lease drafting can solve — which is why your Nebraska late-fee clause is deliberately drafted to preserve only what survives automatically, and does not claim to preserve termination.",
    notes: "Neb. Rev. Stat. §76-1433. Open implementation item, mirrors the still-unresolved KS flag from the KS log §4 item 4 — logged here rather than silently extending late-fee to NE. | RESOLVED (session 6): Taylor's call — this is landlord education, not a lease-drafting problem. The generic late-fee clause is extended to NE as-is, no override. A proposed 'process clause' committing the landlord to send a reservation notice with every late payment was considered and rejected as unnecessary — restates the same guidance as a rule rather than as advice, without adding real protection, since a lease-level commitment to send notices is still a pre-breach agreement either way. | CORRECTED 2026-08-31 (NE re-audit) on primary text of §76-1433. Prior version said the waiver cost the landlord the ability 'to act on a late payment' — an overstatement that would make a Nebraska landlord over-worry about a narrow rule. The waiver reaches TERMINATION FOR THAT BREACH only. Prior version also asserted the generic clause 'is not prohibited' — see late-fee-ne notes; that was asserted, not tested, and is at minimum arguable under §76-1415(1)(a). The statute's trigger also requires acceptance 'with knowledge of a default,' and its subject matter is broader than late rent — it reaches acceptance of any performance varying from the agreement or from subsequently adopted rules. NOT COVERED HERE, flagged rather than silently omitted: common-law accord and satisfaction is a separate doctrine that could affect a late fee where a tenant tenders a payment expressly as payment in full. That is outside §76-1433 and was not researched this session.",
  },
  // Disclosures
  {
    id: "edu-no-radon-tenant-disclosure-ne",
    title: "No Tenant-Facing Radon Disclosure Requirement, But Read the Nuance",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska doesn't require landlords to disclose radon information to tenants — only four states (Colorado, Florida, Illinois, Maine) currently require that. Two adjacent Nebraska rules are easy to confuse with a tenant-disclosure duty and aren't the same thing: a real-estate seller disclosure statute (§76-2,120) that applies to property sales, not leases; and a radon measurement/mitigation professional certification law that imposes civil/criminal penalties on radon *professionals* who misrepresent readings, not on landlords generally.",
    notes: "Confirmed via National Radon Program Services and Nolo (2025) — only CO/FL/IL/ME require tenant disclosure. Neb. Rev. Stat. §76-2,120 (seller disclosure, real estate transactions only). | NE RE-AUDIT 2026-08-31 — CITATION CONFIRMED, CHARACTERIZATION INCOMPLETE. §76-2,120 read verbatim. It IS a real-estate seller disclosure statute, so the row's core point (no tenant-facing radon disclosure duty) HOLDS. Two corrections. (1) The row said it applies to 'property sales, not leases.' That is not quite right: §76-2,120(1)(d) defines 'seller' to include an owner who sells or attempts to sell 'INCLUDING LEASE WITH OPTION TO PURCHASE,' and (2) states the requirements 'shall also apply ... to any lease with the option to purchase residential real property.' So a lease-option agreement DOES trigger the full seller disclosure statement. Not relevant to Steinoak's current straight-rental product, but it is a live gap the moment a lease-option or rent-to-own template is built — flagged now rather than rediscovered later. (2) Radon is not named anywhere in the disclosure content list at §76-2,120(4)(a)-(k); it would fall under (4)(g), 'hazardous conditions, including substances, materials, and products on the real property which may be an environmental hazard.' So even in a sale, Nebraska has no radon-SPECIFIC disclosure item — which strengthens the row's confirmed-absent conclusion rather than weakening it. Incidental find: §76-2,120(4)(k) requires the seller statement to address carbon monoxide alarm compliance under §§76-604 and 76-605, a cross-reference confirming those sections are the SELLER-facing ones — independent corroboration of the §76-606 finding corrected earlier today.",
  },
  {
    id: "edu-no-bed-bug-disclosure-ne",
    title: "No Statewide Bed Bug Disclosure Requirement",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no statewide bed bug disclosure statute. A dedicated Bed Bug Detection and Treatment Act has been introduced in the Legislature multiple times (2020, 2021, 2024) and failed to pass each time (indefinitely postponed). Landlords remain responsible for pest issues generally under the ordinary habitability duty (§76-1419), including bed bugs the tenant didn't cause — just no separate disclosure mandate.",
    notes: "Confirmed via multiple failed Nebraska Legislature bills (LB864 2020, LB553 2021, LB846 2024), all indefinitely postponed per nebraskalegislature.gov bill history.",
  },
  {
    id: "edu-no-mold-disclosure-ne",
    title: "No Statewide Mold Disclosure Requirement",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no specific mold disclosure statute. Mold issues are handled through the ordinary habitability duty (§76-1419) and general misrepresentation/disclosure principles rather than a dedicated mold statute — the practical standard is whether you respond within a reasonable time after written notice and fix the moisture source.",
    notes: "Confirmed absent — no dedicated NE mold disclosure statute identified.",
  },
  {
    id: "edu-no-move-in-inventory-requirement-ne",
    title: "No Move-In Inventory Requirement (Unlike Kansas)",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Kansas's 5-day written move-in inventory requirement (K.S.A. 58-2548), Nebraska landlords aren't required to document the property's condition at move-in to collect a security deposit. Still strongly recommended as a practical matter — it's your best evidence at move-out — just not a legal prerequisite in Nebraska the way it is in Kansas.",
    notes: "Confirmed absent — explicitly stated by iPropertyManagement's NE landlord-tenant guide: 'Landlords are not required to document the condition of the rental unit at the start of the lease term.'",
  },
  {
    id: "edu-fair-housing-classes-ne",
    title: "Nebraska's Protected Classes Match Federal Law, With Municipal Exceptions",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The Nebraska Fair Housing Act protects race, color, religion, national origin, disability, familial status, and sex — and, since 2025, MILITARY OR VETERAN STATUS, which has no federal analog. That class was added by Laws 2025, LB150 and now appears throughout the operative prohibition at §20-318(1)-(5) and (8), in the disability provisions' companion sections, and in §20-322(1). A related safe harbor at §20-322(6) lets you offer housing, favorable loan or lease terms, or other benefits LIMITED to veterans, servicemembers, or their family members without that being discrimination. Nebraska still has no statewide protection for marital status, source of income, sexual orientation, or gender identity. Lincoln and Omaha each add sexual orientation and gender identity locally, and Lincoln adds source of income via a 2025 voter-approved measure — municipal complexity not resolved here.",
    notes: "Neb. Rev. Stat. §§20-301 to 20-344. Municipal source-of-income protection in Lincoln (approved May 2025 ballot measure) is, as of this session, contested — opponents are pursuing a Fourth Amendment legal challenge and a possible state preemption bill. Worth revisiting if that litigation resolves. | *** NE RE-AUDIT 2026-08-31 — PROBABLE ERROR IN A SHIPPED VERIFIED ROW. *** This row asserts Nebraska has 'no statewide addition' beyond the federal protected classes. Primary text of §20-322 (read this session) lists 'race, color, national origin, disability, familial status, sex, or MILITARY OR VETERAN STATUS,' and adds a new subsection (6) safe-harbouring benefits limited to veterans and servicemembers — both added by Laws 2025, LB150, §16. §49-801(13), amended by the same bill at §92, supplies the statewide definition of 'military or veteran status.' That is a state-law protected class with no federal analog, and LB150 (2025) PREDATES the original NE pass (2026-08-23), so this is a research miss, not a currency lapse. Downgraded to NEEDS_REVIEW pending §20-318/§20-319 primary text to confirm the class appears in the operative prohibition sections and not only in the exemption section's proviso. Fourth consecutive re-audited state to find an error inside a row that shipped VERIFIED. | *** ERROR CONFIRMED AND CORRECTED 2026-08-31 (NE re-audit). *** §20-318 primary text read directly: 'military or veteran status' appears in the OPERATIVE prohibition at subsections (1), (2), (3), (4), (5) and (8) — not merely in §20-322's proviso — added by Laws 2025, LB150, §13. §49-801(13) supplies the definition (LB150, §92); §20-322(6) adds the veterans-benefit safe harbor (LB150, §16). The prior row asserted 'no statewide addition' beyond federal classes and shipped VERIFIED. LB150 is a 2025 law and the original NE pass ran 2026-08-23, so this was a RESEARCH MISS, not a currency lapse. The row's list of classes Nebraska does NOT add (marital status, source of income, sexual orientation, gender identity) re-checked against §20-318 and remains correct.",
  },
  {
    id: "edu-no-voucher-mandate-ne",
    title: "No Statewide Housing-Voucher Acceptance Mandate",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no statewide law requiring landlords to accept housing vouchers (Section 8 or otherwise) — a state-level bill to add source-of-income as a protected class (LB223) has been proposed but not enacted as of this session. Lincoln has a local voter-approved ordinance (May 2025) requiring source-of-income acceptance within city limits specifically, currently facing a legal challenge — a municipal-only requirement, not a statewide one.",
    notes: "LB223 (proposed, not enacted as of this session) would amend the Nebraska Fair Housing Act. Lincoln voter-approved ordinance, May 2025 special election, ~67% in favor — status contested.",
  },
  // Security Deposit
  {
    id: "edu-no-deposit-installments-ne",
    title: "No Deposit Installment-Payment Right",
    group: "Security Deposit",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska law doesn't give tenants a right to pay the security deposit in installments — the deposit can be required up front, same as the general rule in CO/WY/KS.",
    notes: "Confirmed absent — no installment-payment provision found in §76-1416 or elsewhere in the URLTA.",
  },
  // Notices & General
  {
    id: "edu-unconscionability-ne",
    title: "General Unconscionability Doctrine Is Built Into the Base Act",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska's unconscionability doctrine (§76-1412) is written directly into the Uniform Residential Landlord and Tenant Act itself, not a separate consumer-protection statute the way Kansas's KCPA backstop is. A court that finds a rental agreement or any provision unconscionable when made can refuse to enforce it, sever the unconscionable provision, or limit its application — a real backstop against unfair lease terms even where a specific statute doesn't address the exact provision.",
    notes: "Neb. Rev. Stat. §76-1412. Structurally different from Kansas's finding (edu-consumer-protection-act-ks, a separate Consumer Protection Act backstop) — Nebraska's version is native to the URLTA itself, a more direct analog to CO's unconscionability principles than KS's external-statute approach.",
  },
  {
    id: "edu-no-immigrant-tenant-protection-ne",
    title: "No Immigration-Status Inquiry Prohibition",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no statute prohibiting landlords from inquiring about immigration status. Only California, Illinois, and Colorado have been found to have a dedicated statute of this kind.",
    notes: "Confirmed absent — consistent with the WY and KS findings on this same item; only CA (2017), IL (2020), and CO (2020) identified with dedicated statutes.",
  },
  {
    id: "edu-no-right-to-call-police-statute-ne",
    title: "No State-Level Right-to-Call-Police Statute",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no state-level statute establishing a non-waivable tenant right to call police or emergency services. Any protection here would exist, if at all, at the municipal nuisance-ordinance level — the same category of city-by-city complexity keeping Ohio deliberately deferred in this project. Not audited here.",
    notes: "Confirmed absent at the state level, consistent with the CO/WY/KS pattern — same weaker corroboration standard already flagged for those findings (no multi-state tracker the way EV charging had).",
  },
  // Pets
  {
    id: "edu-no-service-animal-fraud-broad-statute-ne",
    title: "No Broad Service-Animal-Misrepresentation Penalty — Don't Trust the Confident Secondary Sources",
    group: "Pets",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Kansas (K.S.A. 39-1112) and Wyoming, Nebraska does NOT have a broad statute criminalizing misrepresenting a pet as a service or emotional-support animal to a landlord. The only related Nebraska criminal provision, §28-1313, is much narrower: it makes it a Class III misdemeanor for a sighted person to carry or display a white cane or use a guide dog to falsely appear blind — aimed at impersonating a blind person, not at a tenant exaggerating a pet's status. A 2021 bill (LB309) that would have created the broader prohibition Kansas and Wyoming actually have was considered and not enacted. Multiple confident-sounding secondary sources misstate this as a general $1,000-fine, six-month-jail service-animal-fraud law — it isn't; that figure appears to come from conflating several states' laws.",
    notes: "Neb. Rev. Stat. §28-1313 (verified directly from nebraskalegislature.gov). LB309 (2021), not enacted. Same overconfident-secondary-source pattern already flagged in the WY log (Hemlane) and the KS log (fabricated §58-25,138 citation) — worth remembering this pattern isn't state-specific to either of those states. | NE RE-AUDIT 2026-08-31 — CONFIRMED, and strengthened. Independent research found a SECOND failed bill: LB553 (2019, 106th Leg.), the 'Assistance Animal Integrity in Housing Act,' referred to Judiciary 2019-01-24, heard 2019-02-20, indefinitely postponed 2020-08-13 — companion to the LB309 (2021) already logged. Both by Sen. Robert Clements; LB309 opposed by Disability Rights Nebraska. Two refusals, not one — proof of absence by legislative refusal, same standard applied to Kansas's four rejected ESA bills. This row's warning about the bogus '$1,000 fine / six months jail' figure is independently CONFIRMED: those numbers correspond to a Class I/II misdemeanor and appear to derive from the text of the FAILED LB309, not from enacted law. Bill histories are from secondary sources, not the Legislature's journal.",
  },
  // Parking & Storage
  {
    id: "edu-no-ev-charging-right-ne",
    title: "No EV Charging Access Right",
    group: "Parking & Storage",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no tenant right-to-charge statute for electric vehicles. No EV-charging-access requirement identified in any Nebraska statute or regulation.",
    notes: "Confirmed absent, consistent with WY/KS findings — CO remains the only state in this project with an EV charging access right.",
  },
  // Default & Termination
  {
    id: "edu-no-tenant-death-statute-ne",
    title: "No Tenant-Death Lease-Termination Statute",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no 'Letty's Act'-style statute automatically terminating a lease or excusing the estate from further rent liability upon a tenant's death. §76-1414(5) addresses a narrower, different question — the process for retrieving a deceased tenant's personal property — not lease termination or estate rent liability. The estate remains liable under ordinary contract principles.",
    notes: "Neb. Rev. Stat. §76-1414(5). Confirmed absent for lease-termination purposes specifically, consistent with CO/WY/KS findings — don't confuse with the tenant-death property-retrieval mechanic, which is a different and unrelated provision.",
  },
  // Landlord Responsibilities
  {
    id: "edu-alt-housing-self-help-ne",
    title: "Nebraska Gives the Tenant a Self-Help Remedy, Not a Landlord Relocation Mandate",
    group: "Landlord Responsibilities",
    states: ["NE"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where a serious habitability failure can require you to affirmatively provide alternate housing within 24 hours at your own cost (C.R.S. §38-12-503), Nebraska takes a different approach: if you deliberately or negligently fail to supply heat, water, or essential services, the tenant may procure reasonable substitute housing themselves and is excused from paying rent during that period, and — if your failure was deliberate — may also recover the actual cost of that substitute housing up to one month's rent, plus attorney fees (§76-1427(1)(c)). This is a tenant self-help option triggered by the tenant's own choice, not an affirmative relocation duty that falls on you the moment a serious condition arises.",
    notes: "Neb. Rev. Stat. §76-1427(1)(c). Genuinely different architecture from CO's landlord-mandate version (edu-alt-housing-co) — not a clean 'confirmed absent,' since Nebraska does have an alternate-housing mechanic, just structured as a tenant remedy rather than a landlord obligation. Flag this nuance for the next state rather than recording a flat absence.",
  },
  // Notices & General
  {
    id: "edu-no-tenant-screening-fairness-act-ne",
    title: "No Dedicated Tenant-Screening Fairness Act Identified",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no rental-application or tenant-screening fairness statute. Application fees are uncapped and non-refundable, with no requirement that the fee track the actual cost of a background/credit check. A bill (LB17) that would cap application fees at the actual consumer-report cost, bar charging a fee when no unit is available, and limit late/returned-check fees has been introduced but not enacted as of this session — worth monitoring, since it would meaningfully change this area if passed. Federal Fair Credit Reporting Act obligations still apply regardless of state law.",
    notes: "Confirmed absent with high confidence — five independent, consistent sources (Landlord Studio, RentPrep, TurboTenant, Nolo, Azibo) all agree no state statute limits application fees. Upgraded from pass-1's lower-confidence note after dedicated pass-2 research; LB17 (pending, not enacted) tracked via Abrahams Kaslow & Cassman LLP legislative summary.",
  },
  // Landlord Responsibilities
  {
    id: "edu-carbon-monoxide-alarm-requirement-ne",
    title: "Carbon Monoxide Alarms - Nearly Every Nebraska Rental Turnover Triggers This",
    group: "Landlord Responsibilities",
    states: ["NE"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If your rental has a fuel-fired heater or appliance, a fireplace, or an attached garage, Nebraska's Carbon Monoxide Safety Act almost certainly applies to you. There is a section written specifically for rental property (§76-606), and it has two independent triggers. The first is any interior alteration, repair, fuel-fired appliance replacement, or addition requiring a permit on or after January 1, 2017. The second is the one that catches nearly everyone: for an EXISTING rental, a CHANGE IN TENANT OCCUPANCY on or after January 1, 2017 (§76-606(2)). Every turnover since that date is a trigger. The age of the building is irrelevant, and no sale or renovation is needed. Once triggered, an operational alarm must be installed on each habitable floor, or wherever an applicable building code specifies. Before each new tenancy you must replace any alarm that was stolen, removed, missing, or non-operational after the last occupancy, and provide the tenant with any batteries needed to make it operational at move-in. During the tenancy the tenant must keep, test and maintain the alarms and notify you of any that go missing or stop working, or of a deficiency they cannot fix - and you must then replace or repair. Helpfully, outside those specific duties the statute says you are NOT responsible for ongoing maintenance, repair, replacement, or battery care (§76-606(3)(b)). Nobody may remove batteries or disable an alarm except to inspect, maintain, repair or replace it.",
    notes: "Neb. Rev. Stat. §76-603 to 76-606 (Carbon Monoxide Safety Act, Laws 2015, LB34), full primary text supplied by Taylor and read 2026-08-31. *** ERROR CONFIRMED AND CORRECTED - THE PRIOR ROW WAS BACKWARDS ON ITS CENTRAL POINT. *** It told landlords that 'a landlord renting out an older, unaltered, unsold unit isn't automatically swept in by this specific Act,' and framed the triggers as 2017+ construction (§76-603), sale (§76-604(1)), or permitted alteration (§76-604(2)). Those three sections govern NEW CONSTRUCTION and SELLERS. The original pass never reached §76-606, titled 'Owner of certain rental property; duties' - the section that actually governs landlords - and §76-606(2) makes a CHANGE IN TENANT OCCUPANCY after 2017-01-01 an independent trigger for existing rentals. The row reassured Nebraska landlords they were outside a mandate that in practice reaches essentially all of them. Given that carbon monoxide is lethal and the error ran in the direction of under-warning, this is the most consequential single finding of the re-audit. Root cause: the original pass at default settings read the first sections of a six-section act and stopped before the one addressed to its own audience. Same shape as the §81-5,142 subsection error corrected earlier today - partial reading of a multi-part trigger - which is why the suspicion was flagged rather than acted on, and why primary text was requested under §5a.2 instead of a third search. §76-606(3) and (4) also contain a full landlord/tenant duty allocation the library had no clause for at all; see carbon-monoxide-alarm-duty-ne, created this session.",
  },
  // Rent & Payment
  {
    id: "edu-bad-check-restitution-vs-nsf-fee-ne",
    title: "A Criminal Bad-Check Remedy Exists Separately From Your Lease's NSF Fee",
    group: "Rent & Payment",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska's bad-check statute (§28-611) is a CRIMINAL statute, and it gives the payee of a dishonored check — including a landlord — two routes to a small fixed recovery. Under §28-611(5), a person in violation who makes voluntary restitution must also pay ten dollars to the injured party plus any reasonable handling fee the injured party's financial institution charged. Under §28-611(7), a person convicted may be ordered to make restitution and pay the same ten dollars plus that handling fee. Note what the ten dollars is not: it is not a cap on what your lease may charge as a returned-payment fee. Several secondary sources describe it as 'the maximum NSF fee a Nebraska landlord can charge,' which conflates a criminal restitution amount with your civil contractual fee. Nebraska has no general statutory cap on a lease NSF or returned-payment fee; the outer limit is the ordinary rule that such a fee must be a reasonable estimate of your actual harm rather than a penalty. Also note this track requires the criminal elements — knowingly writing a check without sufficient funds — so it is not available for every bounced rent check.",
    notes: "Neb. Rev. Stat. §28-611(7). Pass-2 canvass catch (session 2) — also resolves confusion with the earlier-rejected §45-918.01 candidate (payday-loan-only, unrelated). Multiple secondary sources (Innago, Landlord Studio) mischaracterize this criminal restitution figure as a civil fee cap; verified directly against a description consistent across three independent sources but the legal characterization corrected here. | NE RE-AUDIT 2026-08-31 — CITATION CONFIRMED, SUBSECTION ATTRIBUTION AND MECHANICS CORRECTED. §28-611 read verbatim. Three fixes. (1) The row cited only subsection (7). There are TWO paths: (5) voluntary restitution and (7) court-ordered restitution on conviction. Both carry the same ten dollars plus handling fee. (2) The row said the payee gets the money 'if the check-writer doesn't make it good within 10 days of notice.' That conflated the restitution provisions with §28-611(6), which is an EVIDENTIARY PRESUMPTION for prosecution (notice within 30 days of issuance, failure to cure within 10 days of notice raises a permissible inference of knowledge) — a different thing entirely, and per the annotation in State v. Hruza, 223 Neb. 837 (1986), only a permissible inference of fact, not a conclusive presumption. (3) The row said 'reasonable service charges'; the statute says 'any reasonable handling fee imposed on the injured party by a FINANCIAL INSTITUTION' — i.e. the landlord's actual bank charge, not a general service fee. The row's central and most important point — that the ten dollars is a criminal-restitution figure and NOT a civil cap on a lease NSF fee — is CONFIRMED correct and is retained.",
  },
  // Notices & General
  {
    id: "edu-negligence-carveout-flag-ne",
    title: "A Real NE Lease Narrows Its Liability Disclaimer to 'Ordinary' Negligence — Worth Considering",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A real, attorney-reviewed Nebraska commercial lease product deliberately limits its liability disclaimer to the landlord's *ordinary* negligence, explicitly preserving liability for gross negligence or willful misconduct. That tracks Nebraska's actual exculpation ban precisely (§76-1415(1)(d) voids a liability-limitation clause only for the landlord's own active, actionable negligence — not all negligence). The current `tenants-property-insurance` clause's blanket 'Landlord is not liable for any such loss or damage' sentence doesn't carve out gross negligence or willful misconduct the way this real NE product does — a real commercial precedent that this gap matters enough for a working Nebraska lease to address it explicitly.",
    notes: "Found via gap-discovery source #2 (real lease-product comparison, ILRG/PublicLegal Nebraska residential lease, attorney-reviewed, current through 2023). Echoes the same open question already flagged in the KS log for this same clause (edu-prohibited-lease-terms-ks's notes: does tenants-property-insurance's blanket language fall under an exculpation prohibition?) — now with a real-world data point suggesting it's a live concern, not a theoretical one. Judgment call for Taylor: draft a NE-specific (and possibly KS-specific) override with an explicit ordinary/gross negligence carve-out, or leave as-is given low practical enforcement risk.",
  },
  {
    id: "edu-no-prohibited-lease-provisions-statute-wy",
    title: "No General Prohibited-Lease-Provisions Statute in Wyoming",
    group: "Notices & General",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado (C.R.S. §38-12-801), Kansas (K.S.A. 58-2547), and Nebraska (§76-1415), Wyoming has no equivalent statute banning categories of lease provisions outright — no attorney-fee-shifting ban, no confession-of-judgment ban, no exculpation/liability-limitation ban. All 11 sections of Article 12 (W.S. 1-21-1201–1211) were read directly from primary source during Wyoming's original verification pass, and no such section exists. This means the liability-disclaimer exposure found for Kansas and Nebraska in `tenants-property-insurance`, `services-utilities-provided`, `parking`, `storage-space`, and `pet-policy` doesn't apply to Wyoming — those clauses' generic language is safe to keep as-is for WY leases.",
    notes: "W.S. 1-21-1201–1211 (full text read directly from primary source, WY session 3). Genuine confirmed absence, not merely unchecked — closes the question raised by the cross-state liability audit (sessions 5–6 of the Nebraska work) for Wyoming specifically.",
  },
  {
    id: "edu-no-immigrant-tenant-protection-wy",
    title: "No Immigration-Status Inquiry Prohibition",
    group: "Notices & General",
    states: ["WY"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming has no statute prohibiting landlords from inquiring about immigration status. Only California, Illinois, and Colorado have been found to have a dedicated statute of this kind.",
    notes: "Confirmed absent — consistent with the KS and NE findings on this same item; multiple independent Wyoming landlord-tenant law overviews consistently describe protected classes as federal-only with no state additions, and none mention immigration status. Closes the last open state for this checklist item (CO: present/standing rule, WY/KS/NE: confirmed absent).",
  },
  {
    id: "edu-no-right-to-call-police-statute-wy",
    title: "No State-Level Right-to-Call-Police Statute",
    group: "Notices & General",
    states: ["WY"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming has no state-level statute establishing a non-waivable tenant right to call police or emergency services. Any protection here would exist, if at all, at the municipal level — not audited here, consistent with how this category of question has been treated for other states in this project.",
    notes: "Confirmed absent at the state level — consistent with the KS and NE findings, though this rests on absence-of-mention across multiple general-overview sources rather than an explicit 'no such law' statement, the same weaker-evidence caveat already flagged for the equivalent KS/NE findings. Closes the last open state for this checklist item.",
  },
  {
    id: "edu-no-tenant-screening-fairness-act-wy",
    title: "No Dedicated Tenant-Screening Fairness Act",
    group: "Notices & General",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming has no rental-application or tenant-screening fairness statute — application fees are uncapped, with no requirement that the fee track the actual cost of a background/credit check. Landlords do not need tenant consent to run background and credit checks. Federal Fair Credit Reporting Act obligations still apply regardless of state law.",
    notes: "Confirmed absent with reasonable confidence — Landlord Studio's WY guide explicitly states 'despite there being no statute' regarding application fees, an affirmative statement rather than mere silence. Closes the last open state for this checklist item (CO: deferred, WY: confirmed absent, KS: not yet checked, NE: confirmed absent).",
  },
  // Rent & Payment
  {
    id: "edu-returned-check-fee-cap-wy",
    title: "Returned Check Fee Cap",
    group: "Rent & Payment",
    states: ["WY"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming caps the fee a landlord can collect for a dishonored check at $30, on top of the check's face value, after making written demand for payment (Wyo. Stat. §1-1-115(b)). This is a general bad-check statute, not landlord-tenant-specific, but it applies to a bounced rent check the same as any other dishonored check. The `returned-payments` clause doesn't hardcode a dollar figure, so it isn't in conflict — just be aware the fee you actually set for a Wyoming lease is capped at $30 by this statute, regardless of what the lease might otherwise allow.",
    notes: "Wyo. Stat. §1-1-115(b). Confirmed via 7+ independent sources all citing the same statute, including one (iPropertyManagement) quoting the operative statutory language directly — a materially stronger evidence base than the misattributed $15 NE returned-check figure rejected during the Nebraska liability audit (that one turned out to govern payday-loan licensees only). This is a real, general Wyoming statute, correctly attributed.",
  },
  // Landlord Responsibilities
  {
    id: "edu-utility-disclosure-attachment-mn",
    title: "Required Utility Disclosure Attachment for Apportioned Billing",
    group: "Landlord Responsibilities",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you apportion natural gas or water/sewer costs to tenants in a shared-metered building, Minnesota law (Minn. Stat. § 504B.216, subd. 10) requires you to attach specific disclosure language to leases entered into or renewed on or after January 1, 2025, explaining how the bill is calculated, what tenants are and aren't charged for, the fee caps, and tenants' right to a payment plan and to dispute resolution through the Public Utilities Commission. This is close to a verbatim statutory text requirement, not just a general-content requirement — using your own paraphrase instead of the statute's language creates real compliance risk. This is a lease-attachment feature, not lease clause text; flag for the lease builder when attachments are supported.",
    notes: "MN added (Minnesota session, statute walk): companion to utility-apportionment-mn. Full statutory text captured in the statute walk this session and available on request when Taylor is ready to build the attachment feature — not reproduced here to keep this education entry focused on the compliance obligation rather than duplicating the exact wording in two places in the library.",
  },
  // Access & Entry
  {
    id: "edu-entry-notice-content-mn",
    title: "What Minnesota's Entry Notice Must Include",
    group: "Access & Entry",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota's entry-notice statute (Minn. Stat. § 504B.211) is more prescriptive than most states: notice must be at least 24 hours in advance, must specify a time or window, and entry is restricted to 8:00 a.m.-8:00 p.m. unless you and the tenant agree otherwise. 'Reasonable business purpose' is not open-ended — the statute lists nine specific categories (showing the unit to prospective tenants/buyers/insurers, maintenance, code inspections, tenant-caused disturbance, reasonable suspicion of a lease violation, prearranged housekeeping in qualifying senior housing, reasonable belief of unauthorized occupancy, and after the tenant has vacated). Emergency entry without notice is allowed only for injury/security/law-enforcement necessity, tenant-safety checks, or compliance with local unlawful-activity ordinances — and if you enter without the tenant present and without prior notice, you must leave written disclosure of the entry in the unit. One more thing that trips landlords up: the notice right is doubly protected. The tenant cannot waive it in advance, AND you cannot require the tenant to waive it as a condition of signing or keeping the lease. A lease paragraph saying 'Landlord may enter at any time for inspection' is not just unenforceable — putting it in the lease and asking for a signature is itself the conduct the statute prohibits. What IS allowed is real-time consent: a tenant may let you in on shorter notice in the moment if they want to. And the $500 civil penalty attaches per violation, so a pattern of unannounced entries compounds rather than capping out.",
    notes: "MN added (Minnesota session, statute walk): companion to landlords-access-mn. Full 9-category purpose list and 3-category emergency-exception list confirmed directly from Minn. Stat. § 504B.211, subds. 3-5. | MN re-audit 2026-09-03: §504B.211 subd. 2 non-waiver language read directly. DOUBLE BAR confirmed — 'A residential tenant may not waive and the landlord may not require the residential tenant to waive the residential tenant's right to prior notice of entry under this section as a condition of entering into or maintaining the lease.' Two distinct prohibitions: prospective tenant waiver is void, AND landlord conditioning lease formation OR continuation on waiver is itself prohibited conduct. The prior version of this row stated the notice requirement but not the non-waiver, so a landlord could have read it and still believed a broad access clause was merely unenforceable rather than affirmatively violative. Real-time tenant consent to shorter notice remains permitted and is already reflected in landlords-access-mn. Penalty is per-violation, not per-tenancy.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-right-to-call-police-mn",
    title: "Never Waive a Tenant's Right to Call Police",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has a standalone statute (Minn. Stat. § 504B.205) prohibiting any lease provision, policy, or penalty that bars or limits a tenant's right to call police or emergency assistance, including in response to domestic abuse or a mental-health or health crisis. The right is explicitly non-waivable, and this is one of the more directly codified versions of this rule seen across the states checked so far — Minnesota gives tenants a private right of action for $250 or actual damages plus attorney fees, and the attorney general has independent enforcement authority.",
    notes: "MN added (Minnesota session, statute walk): satisfies universal standing rule #1 (never waive tenant's right to call police) directly and explicitly — Minnesota is the first state in this project where the right is its own dedicated statute rather than inferred from a broader prohibited-provisions list (CO) or confirmed absent (WY/KS/NE).",
  },
  {
    id: "edu-attorney-fee-mutuality-mn",
    title: "Attorney Fee Mutuality Is Automatic Under Minnesota Law",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If your lease lets you recover attorney's fees from the tenant under certain circumstances, Minnesota law (Minn. Stat. § 504B.172) automatically gives the tenant the same right against you, to the same extent, if the tenant prevails in the same type of action. This happens by operation of law regardless of what the lease says — unlike Colorado, where the lease itself must be drafted to say fees are mutual, or Kansas, where fee-shifting is flatly prohibited. You don't need special mutuality language in a Minnesota lease for this protection to apply, but you also can't draft around it.",
    notes: "MN added (Minnesota session, statute walk): third distinct pattern for this topic seen across the project — CO requires mutual drafting, KS flatly prohibits fee-shifting, MN makes mutuality automatic by statute regardless of lease language. No lease clause change needed; pure landlord-facing awareness.",
  },
  // Landlord Responsibilities
  {
    id: "edu-screening-fee-rules-mn",
    title: "Minnesota's Applicant Screening Fee Rules",
    group: "Landlord Responsibilities",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota law (Minn. Stat. § 504B.173) restricts when and how you can charge and keep an applicant screening fee: you can't charge one if you know no unit is or will reasonably soon be available, you must give a written receipt on request, and you can't cash or deposit the fee until all earlier applicants have been screened and rejected or offered the unit. You must return the fee if you reject the applicant for a reason not disclosed in advance, if an earlier applicant gets the unit instead, or for any portion not actually used for screening. You must disclose your screening service and criteria in writing before accepting the fee, and notify a rejected applicant within 14 days of the criteria they failed to meet. You also can't deny an application based on a pending eviction case, a sealed/expunged court file, or an eviction that didn't end in a writ of recovery.",
    notes: "MN added (Minnesota session, statute walk): pre-lease/application-stage requirement, not lease clause text — logged as landlord education per this project's established pattern for procedural obligations that precede lease signing.",
  },
  {
    id: "edu-prohibited-fees-disclosure-mn",
    title: "Minnesota's Total Monthly Payment Disclosure Requirement",
    group: "Landlord Responsibilities",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota law (Minn. Stat. § 504B.120) requires you to disclose all nonoptional fees in the lease, and to state the sum of rent plus nonoptional fees as the 'Total Monthly Payment' on the first page of the lease. Any unit advertisement must also disclose nonoptional fees and whether utilities are included. This is a formatting/placement requirement as much as a content requirement — violating it carries treble damages plus possible attorney fees. FLAG FOR TAYLOR: this is a product-level requirement (first-page placement, specific 'Total Monthly Payment' label) rather than something a lease clause alone can satisfy — relevant to the lease builder's layout for MN leases, not just its clause selection.",
    notes: "MN added (Minnesota session, statute walk): flagged as a product/UI implication, not just a content gap, consistent with how utility-apportionment-mn's disclosure attachment was also flagged. Recommend Taylor track these lease-formatting requirements (MN's page-1 placement, MN's verbatim utility attachment) somewhere the lease-builder team will see them, separate from pure clause content.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-tenant-right-to-organize-mn",
    title: "Tenants Have a Statutory Right to Organize",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota law (Minn. Stat. § 504B.212) gives tenants the right to form and operate a tenant association, and requires you to allow tenants and tenant organizers to distribute information in common areas and to individual units, contact tenants by mail/phone/electronically, and convene meetings in a space at the building. You are not required to hand over tenant contact information, and a tenant association must stay independent of ownership/management (your representatives can't attend meetings unless invited). This isn't lease clause content to include or exclude — it's a landlord conduct restriction that exists regardless of what the lease says, and there's no lawful way to draft around it.",
    notes: "MN added (Minnesota session, statute walk): genuinely new named-topic, not present in CO/WY/KS/NE or the existing checklist. Effective Jan 5, 2025 per session law. Recommend adding 'tenant right to organize' to the named-topic checklist for future states, alongside infirmity termination.",
  },
  {
    id: "edu-cannabis-possession-mn",
    title: "Tenants' Right to Legally Possess Cannabis and Hemp Products",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota law (Minn. Stat. § 504B.171(c)) prohibits you from banning a tenant's legal possession of cannabis products, lower-potency hemp edibles, or hemp-derived consumer products, or their use of cannabinoid or hemp-derived products — this right is non-waivable. You can still prohibit consumption by combustion or vaporization (smoking or vaping) specifically, which is exactly what Steinoak's Smoking Policy clause does — it doesn't touch possession or non-smoking use, so it stays compliant. Where landlords get this wrong is writing a broader 'no marijuana' or 'no cannabis' clause instead of a smoking/vaping-specific one — that broader version would violate this statute.",
    notes: "MN added (Minnesota session, CO;WY-scoping resolution follow-up): companion education entry for the finding logged in §18 of the decision log. Checked directly against `smoking-policy` (already MN-tagged) — confirmed no conflict, since that clause is scoped to smoking/vaping only. This entry exists specifically to prevent a landlord from drafting a broader custom clause that would violate the statute.",
  },
  {
    id: "edu-plain-language-contract-mn",
    title: "Minnesota's Plain-Language Lease Requirement",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If your lease term is three years or less, Minnesota's Plain Language Contract Act (Minn. Stat. §§ 325G.29-.37) applies to it, separately from the landlord-tenant code. It requires the lease to be written in clear and coherent language using words with common, everyday meanings, and to be appropriately divided and captioned. A violation is treated as a violation of law under Minn. Stat. § 8.31, which brings attorney general enforcement and a private right of action, and a court may reform or limit an offending provision to avoid an unfair result — rewriting the term rather than just reading it against you — where a material provision violates the Act, the tenant was substantially confused about rights, obligations, or remedies, and financial detriment resulted or is likely.\n\nThe limits matter as much as the rule. Making a good faith and reasonable effort to comply is a defense to civil penalties, and a landlord who made that effort may not be assessed attorney's fees or investigation costs at all — so a sincere attempt at plain drafting is a real safe harbor, not just mitigation. A tenant may recover actual damages only if the violation left them substantially confused. Class action fees against one landlord are capped at $10,000 total. Claims must be raised within six years of the tenant signing. Most importantly for you: a violation of this Act is NOT a defense to a claim arising from the tenant's own breach, and NOT a defense to an eviction action — a tenant cannot escape nonpayment by pointing at your lease's prose. Reformation relief is also unavailable once the lease's obligations have been fully performed, so the exposure is during the tenancy, not years after it ends. One timing note for month-to-month landlords: for purposes of this Act, periodic tenancies renew at the commencement of each rental period.",
    notes: "MN added (Minnesota session, CO;WY-scoping resolution follow-up): companion education entry for the finding logged in §22 of the decision log (Minn. Stat. § 325G.30, subd. 2(3) defines 'consumer' to include anyone leasing residential premises for a term not exceeding three years, pulling most MN leases into this Act's coverage). This entry documents the obligation; it does NOT constitute an audit of Steinoak's clause library against § 325G.31's specific drafting requirements. FLAG FOR TAYLOR: a full plain-language audit of the library's drafting style is a separate, substantial future undertaking, not completed this session, and potentially relevant beyond Minnesota if other states have similar consumer-contract statutes not yet discovered. | CORRECTED 2026-09-03, same session: §325G.33 and §325G.37 read from primary text (revisor.mn.gov). THE PRIOR VERSION MISSTATED THE REMEDY. It said a violating lease 'isn't automatically void, but a court will construe any resulting ambiguity against you' — that is contra proferentem, a general contract doctrine, and is NOT what the statute provides. §325G.33 actually provides: (1) 'Any violation of section 325G.31 is a violation of a law under section 8.31, subdivision 1' — pulling in AG enforcement AND §8.31 subd. 3a's private-attorney-general right of action with costs and attorney fees, limited per §325G.34; and (2) 'In addition to the remedies provided in section 8.31, a court reviewing a consumer contract may reform or limit a provision so as to avoid an unfair result' on a three-part test — material provision violates §325G.31, the violation caused the consumer to be SUBSTANTIALLY CONFUSED about rights/obligations/remedies, and it has caused or is likely to cause FINANCIAL DETRIMENT. The court 'shall also make orders necessary to avoid unjust enrichment.' Bringing such a claim does not let the tenant withhold performance of an otherwise valid obligation. Judicial REFORMATION is a materially stronger remedy than adverse construction and the row understated it. NEW FINDING from §325G.37: 'For the purposes of this section periodic tenancies renew at the commencement of each rental period' — so a month-to-month lease is renewed monthly and re-subjected to the Act each period. Relevant to the Act's own grandfathering (contracts executed before 1983-07-01 are exempt, but renewals after that date are covered). STILL UNREAD, FLAGGED: §325G.34 'Limits on Remedies' — its text was not reached. The row references the limits' existence without characterizing them. Read before relying on the remedy description. §325G.35 (AG review) and §325G.16 (confession of judgment, previously resolved as scoped to consumer credit sales of personal property and not reaching real property leases) also remain unread in full. | COMPLETED 2026-09-03: §325G.34 'Limits on Remedies' read in full from revisor.mn.gov — the item flagged as unread in the previous note is now discharged, and the limits are substantial enough that omitting them made the row alarmist. Subd. 1: good faith and reasonable effort to comply is a DEFENSE to civil penalties. Subd. 2: a party who made that effort 'shall not be assessed attorney's fees or costs of investigation' — a genuine safe harbor, not merely mitigation. Subd. 3: class-action attorney fees and investigation costs against one person capped at $10,000 across any class action or series of class actions arising from a particular contract. Subd. 4: 'Violation of section 325G.31 is not a defense to a claim arising from a consumer's breach of a consumer contract or to an action for eviction' — LANDLORD-FAVORABLE AND IMPORTANT, a tenant cannot use lease prose to defeat a nonpayment eviction; and actual damages are recoverable only where the violation caused substantial confusion. Subd. 5: six-year statute of limitations running from the date the consumer executes the contract. Also captured from §325G.33 subd. 2's final sentence, missed in the prior pass: 'No relief shall be granted pursuant to this subdivision unless the claim is brought before the obligations of the contract have been fully performed' — reformation is a during-tenancy remedy only. NET EFFECT ON THE EARLIER RECOMMENDATION: the library-wide plain-language audit flagged at MN §27 item 5 and RA-9 item 2 remains worth doing, but its urgency drops — good-faith drafting effort is an affirmative defense to penalties and fees, and the Act cannot be used to defeat an eviction. Downgrading from a compliance risk to a quality issue. Still unread: §325G.35 (AG review) and §325G.16 (confession of judgment, previously resolved as not reaching real property leases).",
  },
  {
    id: "edu-late-rent-reservation-fix-mn",
    title: "Reserve Your Rights Every Time You Accept Late Rent",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota follows a common-law rule: if you accept rent knowing the tenant has already breached the lease, you waive your ability to EVICT for that particular past breach. What survives is broader than most landlords assume — the late fee, the rent itself, damages, your right to insist on timely payment going forward, and eviction for any later or repeated breach all remain available. The doctrine reaches only past breaches you already knew about when you accepted payment. If the tenant repeats the conduct, you may bring a new eviction action. Two practical points from the Minnesota Supreme Court's September 2025 decision in Hook & Ladder Apartments v. Nalewaja: first, what matters is your objective conduct, not what you privately intended, and simply receiving a payment and doing nothing counts as accepting it. Second, you can avoid acceptance by acting promptly — telling the tenant (or the housing agency) that you do not accept the payment, attempting to return it, segregating it, placing it in escrow, or not spending it. Whether a standing non-waiver clause in your lease defeats the doctrine is an OPEN question in Minnesota — the Supreme Court expressly declined to decide it and sent it back to the district court. Do not rely on lease boilerplate alone; act promptly at the time of acceptance.",
    notes: "MN CORRECTED (MN re-audit 2026-09-03). Prior version was wrong in BOTH directions, the same failure shape the NE re-audit found, because it was inherited from NE reasoning rather than researched on Minnesota law (see MN log §5a.1 propagation note). (1) OVERSTATED the loss: prior text said the landlord waives the right to evict 'or otherwise act on that specific breach.' Hook & Ladder Apartments, L.P. v. Nalewaja, A23-1048 (Minn. Sept. 24, 2025), full opinion read directly, confirms the doctrine bars only eviction for that past known breach; footnote 5 expressly limits it to evictions for material breach and distinguishes the separate waiver rules for holdover and nonpayment. Gluck v. Elkan (1886) and Zotalis v. Cannellos (1917): waiver of a past breach does not relieve future performance or bar eviction for repeated breaches. (2) UNDERSTATED/OVERSTATED certainty on the fix: prior text asserted flatly that 'this isn't something a standing lease clause can fix.' That is NOT settled Minnesota law — Hook & Ladder squarely raised the lease's non-waiver clause and the Court said 'We decline to address this issue, which should be decided in the first instance by the district court.' Minnesota's answer to the KS-style standing-clause question is genuinely OPEN, exactly as MN §16 originally left it. RULE TYPE: common law, not statutory — differs from NE (§76-1433) and confirms MN never had a statutory analog. Hook & Ladder also overruled Westminster Corp. v. Anderson (Minn. App. 1995), extending the doctrine to Section 8 / public-housing-agency payments. NOTE ON TIMING: this decision issued 2025-09-24, ELEVEN MONTHS BEFORE MN's original session (2026-08-23) — a research miss, not a currency lapse.",
  },
  // Security Deposit
  {
    id: "edu-security-deposit-cap-nd",
    title: "Security Deposit Amount Limits",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota caps the security deposit at one month's rent, with two distinct paths to two months: you may choose to accept up to two months from a tenant with a felony conviction, as an incentive to rent to them, or you may demand up to two months from a tenant who has a prior judgment against them for violating a previous rental agreement. This is different from a general \"poor credit\" exception — several online guides get this wrong.",
    notes: "N.D.C.C. § 47-16-07.1(1)(a)-(b).",
  },
  {
    id: "edu-security-deposit-pet-cap-nd",
    title: "Separate Pet Deposit Cap",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You may charge a separate pet security deposit, capped at the greater of $2,500 or two months' rent. This deposit cannot be charged for a service or companion animal required as a disability accommodation.",
    notes: "N.D.C.C. § 47-16-07.1(2).",
  },
  {
    id: "edu-security-deposit-interest-required-nd",
    title: "Deposit Must Be Held in an Interest-Bearing Account",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota requires you to hold the security deposit in a federally insured, interest-bearing savings or checking account for the tenant's benefit. If the tenant occupied the property nine months or longer, you must pay them the accrued interest when the deposit is returned.",
    notes: "N.D.C.C. § 47-16-07.1(1). Second state (after MN) requiring this — underlying calculation feature is a shared product-backlog item, not a per-state one.",
  },
  {
    id: "edu-security-deposit-successor-owner-nd",
    title: "A New Owner Inherits Your Deposit Obligations",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you sell or transfer the property, the security deposit and accrued interest transfer to the new owner. You aren't released from liability until that transfer actually happens, and the new owner is bound by North Dakota's deposit rules even though they didn't originally receive the deposit.",
    notes: "N.D.C.C. § 47-16-07.1(5).",
  },
  {
    id: "edu-security-deposit-noncompliance-penalty-nd",
    title: "Penalty for Withholding the Deposit Without Justification",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you withhold security deposit money without reasonable justification, North Dakota law makes you liable for treble (triple) damages.",
    notes: "N.D.C.C. § 47-16-07.1(4).",
  },
  // Default & Termination
  {
    id: "edu-self-help-eviction-ban-nd",
    title: "Self-Help Eviction Is Prohibited",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota law imposes treble (triple) damages on anyone who forcibly ejects or excludes another person from possession of real property. This applies to a landlord who locks out a tenant, shuts off utilities, or otherwise forces a tenant out without going through the court eviction process — you're exposed to three times the tenant's actual damages.",
    notes: "N.D.C.C. § 32-03-29, full primary text confirmed (provided directly by Taylor): \"For forcibly ejecting or excluding a person from the possession of real property, the measure of damages is three times such a sum as would compensate for the detriment caused to the person by the act complained of.\" This is a general Title 32 damages-measure statute, not a landlord-tenant-specific provision enumerating locks/utility shutoffs by name -- the broad \"excluding a person from possession\" language covers those tactics as applied to a landlord-tenant self-help eviction, but the statute itself doesn't name them individually. Upgraded from the earlier weaker-evidence-tier sourcing (a quote-styled secondary source) to full primary-source verification.",
  },
  // Access & Entry
  {
    id: "edu-entry-notice-content-nd",
    title: "What North Dakota's Entry Rules Require",
    group: "Access & Entry",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota doesn't set a specific number of hours of advance notice for landlord entry. Instead, unless it's impractical, you must first notify the tenant and get their consent — which can't be unreasonably withheld — and your notice must identify a specific time. If the tenant doesn't object after receiving notice of that time, consent is presumed. Entry is limited to reasonable hours and manner, and only for specific purposes: inspecting the premises, making necessary or agreed repairs, supplying necessary or agreed services, or showing the unit to prospective purchasers, insurers, mortgagees, agents, tenants, or workers. You may not abuse the right of access or use it to harass or intimidate the tenant.",
    notes: "N.D.C.C. § 47-16-07.3. No numeric notice-hours requirement (structurally similar to Wyoming's absence-of-a-number finding), but more prescriptive than WY on process: actual consent required (not just notice), tied to a specific ('time certain') entry window, with an enumerated purpose list. Emergency-entry exception referenced by secondary sources (e.g. citing subsection (1)) but exact statutory emergency-entry language not yet independently confirmed from primary text — flagged for follow-up.",
  },
  // Notices & General
  {
    id: "edu-limited-retaliation-protection-nd",
    title: "Retaliation Protection Is Narrower Than in Other States",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota has no general law protecting tenants from retaliation for exercising ordinary lease or habitability rights -- unlike Colorado, Kansas, and Nebraska. A tenant who simply reports a maintenance problem or code violation has no statutory retaliation protection. Two narrower protections do exist. Under the housing discrimination chapter it is a discriminatory practice to coerce, intimidate, threaten, or interfere with anyone for exercising or enjoying a right granted by that chapter, or for having aided or encouraged someone else to do so. And separately, a narrow protection applies to tenants and applicants connected to a domestic violence lease termination -- see the guidance on domestic violence information and non-disclosure for that duty and the damages a court may award for breaching it.",
    notes: "CORRECTED at ND re-audit 2026-09-06 -- WRONG CHAPTER. The prior version cited N.D.C.C. § 14-02.4-18 (Human Rights, 'Retaliation prohibited') for housing-discrimination retaliation, on J.J. Keller sourcing. Primary text of BOTH chapters now read (ndlegis.gov/cencode/t14c02-4.pdf and t14c02-5.pdf). § 14-02.4-18 protects a person who opposed an unlawful practice or complained 'in violation of this chapter' / 'under this chapter' -- and ch. 14-02.4's HOUSING sections are REPEALED: 14-02.4-12 (Discriminatory housing practices by owner or agent) repealed S.L. 1999 ch. 134 § 4; 14-02.4-12.1 repealed S.L. 2001 ch. 145 § 14; 14-02.4-13 (financial institution or lender) repealed S.L. 1999 ch. 134 § 4. Housing moved to ch. 14-02.5. So § 14-02.4-18 no longer reaches a housing complaint at all, and the row cited a live section that does not cover the conduct described. CORRECT CITATION IS § 14-02.5-45(2): 'It is a discriminatory practice to coerce, intimidate, threaten, or interfere with any individual in the exercise or enjoyment of, or on account of the individual having exercised or enjoyed, or on account of the individual having aided or encouraged any other individual in the exercise or enjoyment of, any right granted or protected by this chapter.' Note it is BROADER than the old framing in one respect -- it protects exercising ANY right under ch. 14-02.5, not only filing a complaint -- and § 14-02.5-45(1) makes force-or-threat intimidation a class A misdemeanour. § 14-02.4-01's policy statement still recites 'housing', which is likely what misled the secondary source; a policy statement is not an operative prohibition. The row's core holding -- ND has NO general habitability/rights-exercise retaliation statute -- survives unchanged and is now primary-verified. Second protection (§ 47-16-17.1(10)) unchanged; operative duty and remedy at edu-dv-confidentiality-nd. | 2026-09-06, Taylor's direction: the § 47-16-17.1(10) duty is no longer restated here. edu-dv-confidentiality-nd is canonical for it and carries the remedy (§ 47-16-17.1(11)); this row now cross-references rather than duplicating, preserving both reader entry points -- 'what retaliation rules apply in ND?' and 'what do I owe a DV-terminating tenant?' -- with one source of truth. This row's own holding (ND has NO general habitability/rights-exercise retaliation statute, and § 14-02.5-45(2) is the discrimination-side protection) is unchanged.",
  },
  // Default & Termination
  {
    id: "edu-nonpayment-notice-nd",
    title: "Notice Required Before Filing for Nonpayment",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant hasn't paid rent within three days of the due date, you may pursue eviction — but you must first give three days' written notice of intent to evict before filing in district court.",
    notes: "N.D.C.C. §§ 47-32-01(4), 47-32-02, both confirmed from primary FindLaw/LawServer text. No statutory cure right for nonpayment — straight to eviction filing after the 3-day notice expires.",
  },
  // Disclosures
  {
    id: "edu-fair-housing-additions-nd",
    title: "North Dakota Adds Protected Classes Beyond Federal Fair Housing Law",
    group: "Disclosures",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Beyond the federal Fair Housing Act's protected classes (race, color, religion, sex, familial status, national origin, disability), North Dakota law also prohibits housing discrimination based on age, marital status, and receipt of public assistance.",
    notes: "N.D.C.C. Chapter 14-02.5 (Housing Discrimination Act), confirmed via primary ndlegis.gov text (definitions section lists race, color, religion, sex, disability, age, familial status, national origin, or status with respect to marriage or public assistance). Statewide protection, not municipal-only — a stronger version of the pattern Nebraska showed only at the Lincoln/Omaha level. IMPORTANT: this prohibition is subject to the § 14-02.5-09 exemptions -- see edu-fair-housing-exemptions-nd. The original row stated the prohibition flatly with no exemption, which for Steinoak's core customer (a small landlord) may overstate the duty. Primary text of the whole chapter read 2026-09-06 (ndlegis.gov/cencode/t14c02-5.pdf); the substantive holding of this row is CONFIRMED CORRECT and is now primary-sourced rather than secondary-sourced.",
  },
  {
    id: "edu-housing-voucher-protection-nd",
    title: "Cannot Refuse Applicants Receiving Public Assistance, Including Vouchers",
    group: "Disclosures",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You may not refuse to rent to a prospective tenant because they receive public assistance, and North Dakota defines that to expressly include a tenant receiving federal, state, or local rental subsidies, rental assistance, or rent supplements -- which covers housing choice vouchers. This is a source-of-income protection under the fair housing law, not a requirement that you enrol in HUD's voucher programme, but you cannot decline an applicant for planning to pay with one. It is subject to the small-landlord exemptions in the same chapter.",
    notes: "N.D.C.C. § 14-02.5-02, confirmed via Nolo (a reliable secondary legal-reference source), corroborated against the primary § 14-02.5 protected-class list already confirmed for edu-fair-housing-additions-nd. Several industry guides cite this to the wrong subsection (§14-02.5-07, which is actually 'Residential real estate-related transaction') — logged to warn off the same error in the future. IMPORTANT: this prohibition is subject to the § 14-02.5-09 exemptions -- see edu-fair-housing-exemptions-nd. The original row stated the prohibition flatly with no exemption, which for Steinoak's core customer (a small landlord) may overstate the duty. Primary text of the whole chapter read 2026-09-06 (ndlegis.gov/cencode/t14c02-5.pdf); the substantive holding of this row is CONFIRMED CORRECT and is now primary-sourced rather than secondary-sourced. Miscitation warning retained: § 14-02.5-07 is 'Residential real estate-related transaction' (selling, brokering, appraising, lending) -- now confirmed from primary text, so the industry guides citing it for a rental rule were definitively wrong. Operative section is § 14-02.5-02(1)-(2). | UPGRADED 2026-09-06 from inference to EXPRESS TEXT. The original row reasoned that 'public assistance' plausibly covered voucher holders. It does so expressly: § 14-02.5-01 provides that 'the definitions in section 14-02.4-02 may be used to supplement the definitions in this chapter', and § 14-02.4-02(19) defines 'status with regard to public assistance' as 'the condition of being a recipient of federal, state, or local assistance, including medical assistance, or of being a tenant receiving federal, state, or local subsidies, including rental assistance or rent supplements.' The voucher case is named in the definition, not inferred into it. Caveat preserved honestly: 14-02.5-01 says the 14-02.4-02 definitions 'MAY be used to supplement' -- permissive, not mandatory incorporation. No ND case law located construing that phrase; recorded rather than resolved.",
  },
  // Rent & Payment
  {
    id: "edu-payment-method-fee-ban-nd",
    title: "Cannot Charge a Fee for Accepting Cash, Check, or Money Order",
    group: "Rent & Payment",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You may not charge a tenant a fee just for accepting cash, a check, or a money order as payment of rent or any other payment required under the lease. This is separate from a returned or bounced-check fee, which is a different topic governed by general banking law, not this section.",
    notes: "N.D.C.C. § 47-16-20.1, full enacted text: \"A landlord may not charge a tenant a fee to accept cash, a check, or a money order for the payment of rent or any other payment required by the landlord under a lease for real property.\" Text provided directly by Taylor, confirming this session's earlier hypothesis (this section bans payment-method acceptance fees, not returned-check/NSF fees, which remain governed separately by Title 6 § 6-08-16). Resolves one of the three previously-blocked 2025 legislative items flagged earlier in this decision log.",
  },
  // Landlord Responsibilities
  {
    id: "edu-double-letting-prohibited-nd",
    title: "Double-Letting a Room Is Prohibited",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you rent out a room as a dwelling to more than one tenant, the first tenant you rented any part of it to is entitled to the whole room for their full term. Every other tenant in the building under your ownership is relieved of all rent obligations for as long as the double-letting continues.",
    notes: "N.D.C.C. § 47-16-26, full primary text confirmed via complete Chapter 47-16 text provided directly by Taylor. Genuinely new finding — no CO/WY/KS/NE/MN analog on the consolidated named-topic checklist. Narrow but real: a rent-abatement remedy for double-booking a single room, applying building-wide under the same landlord for as long as the double-letting continues.",
  },
  // Default & Termination
  {
    id: "edu-early-termination-grounds-nd",
    title: "Grounds for Early Termination Outside the Eviction Process",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Beyond the formal eviction process, North Dakota law gives each party an independent right to end the lease early in narrow circumstances. You may terminate if Tenant uses the property in a way contrary to the lease, or fails to make repairs Tenant is responsible for within a reasonable time after a request. Tenant may terminate if you don't fulfill your obligations (quiet possession, habitable condition, repairs) within a reasonable time after a request, or if the greater or most important part of the property is destroyed through no fault of Tenant.",
    notes: "N.D.C.C. §§ 47-16-16, 47-16-17, full primary text confirmed via complete Chapter 47-16 text provided directly by Taylor. Distinct from the Chapter 47-32 eviction process (nonpayment, holdover, lease violation) — these are direct contractual termination rights under Chapter 47-16 itself, available to either party without going through eviction.",
  },
  {
    id: "edu-no-cure-eviction-grounds-nd",
    title: "Eviction Grounds and Which Ones Require Notice",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota law lists eight grounds for eviction. Only four of them require you to give notice first: holdover or nonpayment of rent, holdover after a sale or contract-for-deed cancellation, wrongful possession after a partition judgment or judicial sale, and violation of a material term of a written lease. For those four you must give three days' written notice of intention to evict before filing. The other four grounds -- forcible or fraudulent entry, turning out the occupant by force, holding possession by force or threats, and a tenant or their guest acting in a manner that unreasonably disturbs other tenants' peaceful enjoyment -- require no advance notice at all. In no case does North Dakota law give the tenant a right to cure: the three-day notice is a notice of intention to evict, not a notice to fix the problem.",
    notes: "CORRECTED at ND re-audit 2026-09-06 against primary text of N.D.C.C. ch. 47-32 (ndlegis.gov/cencode/t47c32.pdf, full chapter read). The prior version of this row was materially FABRICATED: it described eviction without a cure opportunity for 'drug-related criminal activity, violence or threats of violence, or other conduct presenting an immediate threat to health, safety, or property.' No such ground exists in 47-32-01. That grounds list is Kansas/Nebraska architecture imported wholesale from secondary sources during ND's original pass and shipped VERIFIED. Actual 47-32-01 grounds: (1) forcible/intimidation/fraud/stealth entry and detainer; (2) turning out the possessor by force, threats, or menacing conduct after peaceable entry; (3) holding possession by force or menaces and threats of violence; (4) lessee holds over after termination/expiration, or fails to pay rent for three days after rent is due; (5) possession continued after judicial sale/redemption expiry/deed delivery/contract-for-deed cancellation; (6) wrongful possession after partition judgment or court-ordered sale; (7) lessee or person present with lessee's consent unreasonably disturbs other tenants' peaceful enjoyment; (8) lessee violates a material term of the WRITTEN lease. 47-32-02 attaches the three-day notice to subsections 4, 5, 6, and 8 only -- grounds 1, 2, 3 and 7 require none. Ground 7 is ND's real fast-track: no notice whatsoever. Note ground 8 reaches only WRITTEN leases. The prior row's second sentence (no general cure right) was correct and is retained. Also removes a Python tuple-repr serialization artifact that had leaked into this row's notes field.",
  },
  // Landlord Responsibilities
  {
    id: "edu-carbon-monoxide-alarm-requirement-nd",
    title: "Carbon Monoxide Alarm Requirement",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a dwelling unit has a fuel-fired appliance installed, or has an attached garage, an approved carbon monoxide alarm must be installed outside each sleeping area in the immediate vicinity of the bedrooms, on every habitable level, and in each bedroom or its attached bathroom containing a fuel-fired appliance. If more than one alarm is required in a unit, they must be interconnected so that one activating sets off all of them. Alarm systems must be installed under the supervision of a master or class B electrician.",
    notes: "N.D. Admin. Code § 24.1-06-01-40(3), read from the OFFICIAL Legislative Council PDF at ndlegis.gov/information/acdata/pdf/24.1-06-01.pdf on 2026-09-06. State Electrical Board rule under the State Building Code framework, not a Century Code statute -- a different source of law from smoke-detector-duty-nd (N.D.C.C. § 23-13-15). K.4 STALE-SOURCE CATCH: the original row was sourced from regulations.justia.com, whose banner read 'Current through Supplement No. 394, October, 2024'. The rule's own history line reads 'Effective April 1, 2017; amended effective October 1, 2020; July 1, 2024; July 1, 2026.' The original source therefore PREDATED the July 1, 2026 amendment and was stale by construction at the time it was relied on. The substance checks out against current text, so no substantive correction is required -- but the row was carrying a figure-accurate holding on a source that could not have known about the most recent amendment. Now primary and current-cite. ADDED: the chapeau's installation requirement (master or class B electrician supervision), previously omitted. ALSO IN THE SECTION, not folded into this row: new construction alarm systems must draw primary power from building wiring with battery backup on interruption, wiring permanent and without a disconnecting switch other than overcurrent protection; and § 24.1-06-01-40(4) requires smoke alarms, premise-powered and interconnected, in rooms and areas of dwelling units, basements and attached garages containing an ENERGY STORAGE SYSTEM (battery/solar storage) -- a modern requirement with no analogue in any other state's rows in this library.",
  },
  // Notices & General
  {
    id: "edu-fraudulent-misrepresentation-nd",
    title: "A Lease Induced by Fraud Can Be Terminated",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant entered into this lease based on fraudulent misrepresentations, they may terminate the lease and are entitled to the return of their security deposit plus any accrued interest.",
    notes: "N.D.C.C. § 47-16-07.4, full primary text confirmed via complete Chapter 47-16 text provided directly by Taylor. Landlord-facing awareness item rather than lease-clause language, since this is a tenant remedy for landlord misconduct (fraud in inducement) rather than something the lease itself needs to grant or restrict.",
  },
  // Default & Termination
  {
    id: "edu-eviction-record-sealing-nd",
    title: "Tenants Can Petition to Seal Eviction Records",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A tenant subject to an eviction order for nonpayment of rent or damage to the premises, who has resolved all nonpayment and damage claims, may move to seal the eviction court records seven years after the order has been satisfied -- provided they have not been evicted from another property during the seven years following the eviction. Separately, a tenant who was subjected to domestic violence during the tenancy and was evicted because of a domestic violence incident may move to seal immediately, once the assailant is convicted of domestic violence or becomes subject to a disorderly conduct restraining order, sexual assault restraining order, or domestic violence protection order. Sealing is the tenant's motion to make; it imposes no duty on you.",
    notes: "N.D.C.C. § 47-32-05, full primary text confirmed at ND re-audit 2026-09-06 (ndlegis.gov/cencode/t47c32.pdf). UPGRADE: the original row could not name the codified section (2025 SB 2238 was known to create 'a new section to chapter 47-32' but the section number was never pulled). Now confirmed as 47-32-05. SB 2238 signed 2025-03-26; as a non-emergency 2025 regular-session act, effective 2025-08-01. Two precision fixes to the original body text: (a) the seven-year clock runs from satisfaction of the order, while the no-further-eviction condition is measured over the seven years following THE EVICTION -- two different anchor dates, previously collapsed into one; (b) the DV path is not any 'restraining order' generally but three enumerated orders (disorderly conduct restraining order, sexual assault restraining order, domestic violence protection order) or a domestic violence conviction. 'Domestic violence' takes its § 14-07.1-01 definition. | § 14-07.1-01 read from primary 2026-09-06: the same family-or-household-member limitation applies to the sealing path in § 47-32-05(2), which takes its 'domestic violence' definition from that section.",
  },
  // Rent & Payment
  {
    id: "edu-returned-check-fee-cap-nd",
    title: "Returned Check: Collection Fee and Civil Penalty",
    group: "Rent & Payment",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant's check is returned for insufficient funds you may recover collection fees or costs of up to $40, on top of the amount of the instrument itself. That $40 carries no advance-notice or disclosure precondition. A larger civil penalty is available but only if you first mail the statutory notice of dishonor and the tenant fails to pay the instrument plus your collection fee within ten days of receiving it -- then you may sue for the lesser of $200 or three times the amount of the instrument. Two traps: if you knowingly accepted a postdated check, or agreed not to present a check until a specified time, the statute does not apply at all and none of these remedies are available to you. And if you use the ACH network to collect the fee, you must comply with that network's rules.",
    notes: "N.D.C.C. § 6-08-16, WHOLE SECTION read at ND re-audit 2026-09-06 (previously only subsection (2)(a) had been read). SD-FLAG RESOLVED: the ND/SD divergence flagged in the SD log is CORRECT, not an error. The $40 collection fee under 6-08-16(2)(a) is recoverable 'in addition to the criminal penalty' with NO notice, disclosure, demand, or waiting-period precondition. SD's conspicuous-disclosure condition arises from a genuinely different statute (SDCL Title 57A, UCC Art. 3) and does not transfer. Do not propagate SD's condition to ND. UNDER-CLAIM CORRECTED: the original row recorded only the $40 ceiling and omitted 6-08-16(2)(c) entirely, forfeiting a materially larger recovery. The civil penalty is the LESSER of $200 or 3x the instrument, gated on the 6-08-16(4) notice of dishonor plus a ten-day cure window. Critically, that notice is PERMISSIVE not mandatory -- 6-08-16(4) says a notice of dishonor 'may be mailed,' and State v. Ohnstad, 392 N.W.2d 389, 390 (N.D. 1986) states the notice is optional. So the notice is a precondition to the civil penalty only, never to the $40 fee. 6-08-16(4) supplies the notice form verbatim. One carve-out: where the holder or state's attorney determines the identified issuer is a fraud victim, written notice of the fraud must be given and the fee may not be collected. Title 6 is Banks and Banking -- this is a general bad-check statute of universal application, not landlord-tenant law. Distinct from § 47-16-20.1 (edu-payment-method-fee-ban-nd), which bans charging a fee to ACCEPT a payment method; this governs a payment that failed. | WHOLE SECTION RE-READ DIRECTLY FROM PRIMARY 2026-09-06 (ndlegis.gov/cencode/t06c08.pdf). The v101 correction is CONFIRMED: no precondition on the $40; the ten-day notice-of-dishonor gate gates only the (2)(c) civil penalty. Two further landlord-facing provisions were still missing and are now in the body. (1) POSTDATED-CHECK CARVE-OUT, § 6-08-16(3): 'The making of a postdated check knowingly received as such, or of a check issued under an agreement with the payee that the check would not be presented for payment for a time specified, does not violate this section.' A landlord who accepts postdated rent checks -- a common practice -- forfeits the ENTIRE remedy scheme: no $40 fee, no civil penalty, no criminal referral. This is the most practically consequential provision in the section for a residential landlord and it had never been recorded. (2) ACH COMPLIANCE DUTY, § 6-08-16(2)(a): 'If the holder ... uses the automated clearinghouse network to collect the collection fees or costs, that person shall comply with the network's rules and requirements.' Directly relevant to Steinoak, which processes rent payments -- an in-product NSF-fee auto-collection feature would sit squarely inside this duty. PRODUCT FLAG for Taylor. ALSO NOW RECORDED, not in body: § 6-08-16(1) applies where funds are insufficient at making OR at presentation if presented within fourteen days of original delivery. Criminal grading under (1)(a)-(d) runs infraction (not more than $100) / class B misdemeanour (over $100 to $500, or a prior violation within three years) / class A misdemeanour (over $500 to $1,000, or two priors within three years) / class C felony (over $1,000, or three or more priors within five years); (2) permits grading by aggregate totals. § 6-08-16(5): a criminal complaint must be executed within 120 days after dishonor or the criminal charge is barred. § 6-08-16.4: on full payment the check must be returned to the issuer if they appear and request it or supply a stamped self-addressed envelope. § 6-08-16.2 is a DIFFERENT offence (no account at all, as opposed to insufficient funds) carrying its own $40 cap and $200/3x civil penalty -- do not merge the two; a closed-account or no-account instrument runs under .2, not this section.",
  },
  // Security Deposit
  {
    id: "edu-security-deposit-cap-sd",
    title: "Security Deposit Cap (South Dakota)",
    group: "Security Deposit",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota caps a residential security deposit at one month's rent (SDCL 43-32-6.1). A larger deposit may be agreed between landlord and tenant only where special conditions pose a danger to the maintenance of the premises (e.g., a pet, waterbed, or similar elevated-risk factor) - this is a mutual-agreement exception, not a unilateral landlord right, so it should be documented as a negotiated term, not just charged.",
    notes: "SD session 1. SDCL 43-32-6.1. 'Special conditions pose a danger to maintenance of the premises' is the statute's own phrase - not defined further by statute or (found so far) by case law; secondary sources uniformly cite pets as the example. Not turned into a numeric formula since the statute doesn't provide one.",
  },
  {
    id: "edu-security-deposit-itemized-accounting-sd",
    title: "Security Deposit Itemized Accounting & Bad-Faith Penalty (South Dakota)",
    group: "Security Deposit",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a South Dakota tenant requests an itemized accounting of any withheld security deposit, the landlord must provide it within 45 days after termination of the tenancy - a separate, longer deadline than the 21-day return/withholding-notice window. A landlord who fails to comply with the deposit-return requirements forfeits all rights to withhold any portion of the deposit. Bad-faith retention of a deposit (including failure to provide the required written statement or itemized accounting) exposes the landlord to punitive damages up to $200, in addition to the forfeited deposit.",
    notes: "SD session 1. SDCL 43-32-24. The $200 punitive-damages cap is notably low compared to other states in this project (e.g., ND's treble-damages approach under a different statute) - flagged as a genuine cross-state architecture difference for the named-topic checklist, not an error. | CORRECTION 2026-09-07: '2-week' -> '21-day' per SDCL 43-32-24 as amended by SL 2026 ch 179 S1. Same defect as security-deposit-return-sd. 45-day accounting, forfeiture and $200 cap re-confirmed correct.",
  },
  // Default & Termination
  {
    id: "edu-self-help-eviction-ban-sd",
    title: "Self-Help Eviction Prohibited (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota law prohibits a residential landlord from unlawfully removing or excluding a tenant from the premises, or willfully diminishing services by interrupting electric, gas, water, or other essential service, as a way to force a tenant out. A tenant subjected to this may sue for an injunction, sue to recover possession, or terminate the rental agreement - and in any case may recover damages equal to two months' rent plus the return of any advance rent and deposit paid.",
    notes: "SD session 1. SDCL 43-32-6, 2nd paragraph. Architecturally distinct from every other state closed in this project so far: the self-help-eviction remedy sits directly inside the core landlord-tenant chapter itself (43-32-6, the same section as the lessor's basic quiet-enjoyment obligation) with its own specific damages measure (2 months' rent + return of advance rent/deposit), rather than being a general Title-32-style damages statute (ND) or a criminal-code provision (WY/KS pattern) or silent/secondary-source-only. Flagged as a new architecture finding for the named-topic checklist. Eviction procedure itself (SDCL Title 21-16, Forcible Entry and Detainer, including the 2024 SB 89/SB 90 amendments - see session summary) has NOT been independently primary-sourced this session; this row covers only the self-help prohibition and its damages measure, which is squarely inside Chapter 43-32 and fully primary-sourced.",
  },
  // Notices & General
  {
    id: "edu-retaliation-prohibition-sd",
    title: "Retaliation Prohibited (South Dakota)",
    group: "Notices & General",
    states: ["SD"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A South Dakota landlord may not retaliate against a tenant - by raising rent above fair market value, decreasing electric, gas, water, or sewer service, or giving a notice to vacate not based on a lease breach - within 180 days after the tenant has, in good faith: reported a building or housing code violation to a government agency, given the landlord written notice of a condition requiring repair, or organized or joined a tenant's union or organization. A landlord's decision not to renew a lease at its natural expiration is not itself retaliation. A tenant harmed by retaliation is entitled to the same remedies available for unlawful exclusion (see self-help eviction prohibition) plus reasonable, court-awarded attorney's fees.",
    notes: "SD session 1. SDCL 43-32-27 and 43-32-28. The 180-day rebuttable-presumption window is longer than most states surveyed in this project so far. Triggering events list is close to CO/KS/NE's pattern (code complaint, repair-notice, tenant-organizing) but SD is unusual in also naming rent increases above 'fair market value' and utility-service decreases as retaliatory acts in their own right, not just adverse notices to vacate - worth flagging for the checklist as a broader retaliatory-act definition than most.",
  },
  {
    id: "edu-dv-confidentiality-sd",
    title: "Domestic Abuse Contact Information Confidentiality (South Dakota)",
    group: "Notices & General",
    states: ["SD"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant terminates under South Dakota's domestic-abuse/stalking early-termination provision and provides the landlord a forwarding address or other contact information, the landlord may not disclose that information to any person except with the tenant's consent or as required by law.",
    notes: "SD session 1. SDCL 43-32-19.2. Same confidentiality-obligation pattern already present for CO (edu-dv-confidentiality-co); confirmed as its own distinct code section for SD rather than folded into 19.1.",
  },
  // Access & Entry
  {
    id: "edu-entry-notice-content-sd",
    title: "Entry Notice Requirements (South Dakota)",
    group: "Access & Entry",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Except in an emergency or where it is impracticable, a South Dakota landlord must give the tenant reasonable notice of intent to enter and may enter only at reasonable times. Twenty-four hours' written notice is presumed reasonable unless the lease sets a different method or timing by mutual agreement. The notice must specify the date(s) of entry, a time period during normal business hours for the entry, the purpose of the entry, and a means by which the tenant may request to reschedule.",
    notes: "SD session 1. SDCL 43-32-32. Structurally close to ND's entry-notice statute (24-hour presumed-reasonable notice, specific content requirements) but SD adds a tenant right to request rescheduling that ND's text (as read in that session) did not explicitly carry - worth a side-by-side note on the checklist rather than treating the two as identical. No fixed 'reasonable hours' window given (unlike MN's 8am-8pm) - SD leaves 'reasonable times' undefined by statute.",
  },
  // Rent & Payment
  {
    id: "edu-month-to-month-modification-notice-sd",
    title: "Month-to-Month Lease Modification Notice (South Dakota)",
    group: "Rent & Payment",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "To modify the terms of a South Dakota month-to-month lease - including a rent increase - the landlord must give the tenant at least 30 days' written notice before the end of the month; the new terms take effect at the expiration of that month if the tenant continues to hold the premises. A tenant who receives such a notice may instead terminate the tenancy, effective the first day of the next month, by giving the landlord written notice within 15 days after receiving the landlord's modification notice.",
    notes: "SD session 1. SDCL 43-32-13. IMPORTANT - do not conflate with SD's separate 15-day general tenancy-at-will termination notice (SDCL 43-8-8, amended by 2024 SB 89, see edu-tenancy-at-will-termination-sd): §43-32-13's 30-day/15-day structure governs modifying or being notified of a change to specific month-to-month lease terms (including rent); §43-8-8's 15-day rule governs a landlord simply ending an at-will tenancy outright with no modification involved. Multiple secondary sources (Nolo, LeaseRunner, WeekendLandlords) correctly distinguish these two statutes when read carefully, but a careless read of the 'SD notice = 15 days' headline claim risks collapsing them into one rule - flagged explicitly, same category of near-miss as this project's prior secondary-source conflation catches (WY/ND).",
  },
  // Default & Termination
  {
    id: "edu-tenancy-at-will-termination-sd",
    title: "Tenancy-at-Will Termination Notice (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Outside the modification-notice mechanics of a month-to-month lease, South Dakota law separately allows a landlord to terminate a residential tenancy at will (a tenancy with no agreed end date) by giving the tenant at least 15 days' written notice. If the tenancy is the residence of a tenant on active military service, or of an immediate family member (spouse or minor child) of a tenant on active military service, the landlord must instead give at least two months' written notice - unless the tenant has engaged in sustained conduct that is disruptive, illegal, destructive, negligent toward maintaining the property, or a material breach of the lease, or unless the landlord has sold the property or the property has passed into the landlord's estate. The notice must be in writing and served by delivering it to the tenant or to some person of discretion residing on the premises; if neither can be found with reasonable diligence, it may be served by affixing it to a conspicuous part of the premises where it can conveniently be read.",
    notes: "SD session 1. SDCL 43-8-8, as amended by 2024 SB 89 (reduced from 30 to 15 days) - found via gap-discovery source #4 (explicit search for landlord-relevant law outside the main landlord-tenant chapter, since §43-8-8 sits in Title 43, Chapter 8, general property law, not Chapter 43-32). Not yet independently read from the primary sdlegislature.gov text of §43-8-8 itself this session (confirmed via three consistent secondary sources plus a dedicated 2024 industry write-up describing the bill's legislative history/intent) - flagged as a weaker-evidence-tier item pending a direct primary-source read, same caution level ND applied to its own secondary-sourced items before closing. | UPGRADED to VERIFIED (South Dakota session 1, continuation): independently confirmed from primary source - sdlegislature.gov's own current statute text (Codified_Laws/2065057, mirrored in search results since the page itself is JS-rendered and not directly fetchable), titled '43-8-8. Estate at will--Residential property--Termination by notice--Extended notice for active military service.' Confirms the 15-day figure (post-2024-SB-89) and adds detail this project didn't have before: the statute is expressly scoped to residential property, the military-notice extension has two specific carve-outs (tenant misconduct; sale or estate-passage), and 'immediate family member' is statutorily defined as spouse or minor child only - narrower than a layperson might assume. bodyText revised to reflect the fuller confirmed text. No longer weaker-evidence tier. | RE-AUDIT 2026-09-07: bodyText CONFIRMED CORRECT against primary text - 15-day floor, two-month active-military extension, both carve-outs, and 'immediate family member is a spouse or minor child' all match SDCL 43-8-8. Logged because a re-audit that confirms a row is a finding, not a null result. CITATION CORRECTED: notes attributed the 30-to-15-day reduction to '2024 SB 89'; the source line reads SL 2011 ch 197 S1; SL 2024 ch 178 S1. Cite the session law. DEPENDENCY CLOSED: 43-8-8 requires notice 'in the manner prescribed by S 43-8-9', twice; 43-8-9 confirms 'must be in writing' and supplies three service methods now added to bodyText. The 'written notice' assertion had been right by luck rather than by verification.",
  },
  {
    id: "edu-eviction-grounds-sd",
    title: "Eviction Grounds (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A South Dakota landlord may bring a forcible entry and detainer (FED) action against a tenant who: holds over after the lease term ends or fails to pay rent for three days after it is due; commits waste on the premises; or does or fails to do any act which, under the lease's own terms, operates to terminate the lease. (Additional grounds cover forcible/fraudulent entry and post-foreclosure or post-partition holdovers, which are not typical residential-lease scenarios.) For the lease-violation ground to be available, the lease itself must state that the specific violation terminates the tenancy - South Dakota law does not independently define which lease violations justify eviction.",
    notes: "SD session 1. SDCL 21-16-1, full 7-subdivision list read from primary source (Justia's 2025-codification mirror of the official text; cross-checked against sdlegislature.gov's own section index for section numbering/repeal status). Practical implication for lease drafting: because the lease-violation eviction ground is lease-defined rather than statute-defined, Steinoak's lease clauses that state a violation 'operates to terminate this Lease' are doing real legal work in SD, not just restating a default - worth flagging to landlords drafting from the clause library. | RE-AUDIT 2026-09-07 - CONFIRMED CORRECT against SDCL 21-16-1 primary text. The three residentially-relevant grounds are stated accurately: holdover; failure to pay rent for three days after due (subdivision 4); and waste, or doing/failing to do any act which under the terms of the lease operates to terminate it (subdivision 7). The lease-defined character of ground (7) is confirmed verbatim. Minor unread dependency: 21-16-1 defines 'occupied structure' via subdivision 22-1-2(28), immaterial to residential leases.",
  },
  {
    id: "edu-eviction-procedure-sd",
    title: "Eviction Procedure (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota no longer requires a landlord to serve a separate statutory notice to quit before filing a forcible entry and detainer (FED) action - that requirement, formerly SDCL 21-16-2, was repealed effective 2024. A landlord may file once a FED ground exists, such as rent unpaid for three days. If the lease itself specifies a notice period, the landlord must still honor that contract term. The complaint must be in writing, verified, and served with a summons. Service is not a single event: the sheriff or other authorized server must make a minimum of two service attempts, at least one week apart, with both attempts falling within thirty days. On the second attempt the summons may be posted conspicuously on the property, delivered to a person residing there if one can be found, and sent by first class mail to the tenant at the property. The landlord may also publish the summons once in a legal newspaper on the same day as the first attempted service. The tenant's time to appear and plead is five days from service, or thirty days after publication, whichever occurs sooner; a continuance beyond fourteen days requires the tenant to post an undertaking with surety for accruing rent and costs. If the landlord prevails, the court awards possession, rents and profits or damages, and costs, and may tax reasonable attorney fees as costs to the prevailing party - either party - if that party is represented by a licensed attorney. An execution for possession may only be served during the daytime.",
    notes: "SD session 1. SDCL 21-16-2 (repeal confirmed via both sdlegislature.gov's own current section index and Justia's 2025 codification, which independently agree the section is repealed); 21-16-6/6.1 (verified complaint, service); 21-16-7 (5-day appearance window, amended from 4 to 5 days by SL 2024, ch 75, §2 - matches secondary-source claims about 'SB 90'); 21-16-10 (judgment contents); 21-16-11 (attorney's fees - **mutual**, awarded 'to the prevailing party', not landlord-only). The mutual fee-shifting finding resolves South Dakota's own instance of this project's standing cross-state fee-shifting-mutuality question (open since CO) - SD joins ND in having confirmed-mutual fee-shifting language; the broader CO/WY/KS/NE/MN/ND/SD consolidation (checking whether every state's own clause is internally worded to reflect its statute) remains a separate, not-yet-done undertaking. Attorney fee-shifting language not yet added as its own lease-clause row (would parallel edu-fee-shifting-co's PROHIBITED framing for CO, but SD's version is naturally mutual so there's no one-way clause to prohibit) - flagged as a possible future edu row if Taylor wants explicit lease language about this. | SD session 1 (final continuation): §21-16-12 ('No execution for possession can be served except in the daytime') added to bodyText - simple, fully primary-sourced (Justia's codification and sdlegislature.gov's section index agree), closes out the last unread section of Title 21-16. | GAP-DISCOVERY SOURCE #2 (South Dakota, real lease product): compared against a real, in-use South Dakota residential lease (South Dakota Achieve, a SD nonprofit corporation, published via the SD Dept. of Human Services' own HCBS-settings-rule toolkit - a genuine professional lease product, not a template-mill sample). That lease's own attorney-fee clause is a ONE-WAY, tenant-pays-landlord provision covering 'any action enforcing the terms of this Lease' - broader in scope and one-directional, unlike SDCL 21-16-11's MUTUAL fee-shifting. Clarifying: §21-16-11's mutual rule is scoped specifically to the FED/eviction court process; it doesn't reach general contract-enforcement disputes outside that process, where ordinary freedom-of-contract principles (and SD's confirmed absence of an unconscionability-specific statute, `edu-unconscionability-doctrine-sd`) leave room for a one-way fee-shifting clause. Worth flagging so a future reader doesn't assume the mutual eviction-context rule extends to every kind of lease dispute. | CORRECTION 2026-09-07 (Title 21-16 primary text supplied by Taylor; the whole chapter was Tier C in the citation screen - cited, never read). (1) OMITTED SERVICE REGIME: row described service only as 'verified and served with a summons'. SDCL 21-16-6 (SL 2020 ch 74 S1) requires a MINIMUM OF TWO SERVICE ATTEMPTS, AT LEAST ONE WEEK APART, both within thirty days, with conspicuous posting plus first-class mail on the second. That builds roughly a week's floor into every SD eviction; its absence made the process look faster than it is. 21-16-6.1's single-publication option also missing. (2) INCOMPLETE APPEARANCE RULE: 'five days to appear' omitted the alternative trigger (thirty days after publication, whichever sooner) and the continuance-undertaking rule in the same section - read-the-whole-section failure on a section whose opening clause answered the question asked. (3) CITATION: the 21-16-2 repeal is SL 2024 ch 75 S1, not '2024 SB 90'; the SAME session law S2 made the 4-to-5-day change to 21-16-7. One session law, not two bills. Second bill-number error in this state after 'SB 89' -> SL 2024 ch 178. CONFIRMED CORRECT: the repeal; the 3-day nonpayment ground (21-16-1(4)); mutual attorney fees (21-16-11, discretionary 'may tax', conditioned on licensed-attorney representation); daytime-only execution (21-16-12). UNREAD DEPENDENCIES (L.5): 21-16-10 awards damages 'including those authorized by S 21-3-8'; 21-16-1 defines 'occupied structure' by reference to S 22-1-2(28). Neither material to claims made; both logged. | CROSS-REFERENCE 2026-09-07: SDCL 21-16-11's fee provision is confirmed to be exactly the kind of 'specific statute' SDCL 15-17-38 requires before attorney fees may be taxed as disbursements - SD's general rule is that fees are NOT recoverable, and 15-17-37's enumerated disbursements list excludes them. The mutual fee-shifting recorded in this row is therefore a narrow statutory exception to a strict American Rule, not an instance of a general fee-shifting norm. See edu-attorney-fee-clause-limit-sd.",
  },
  // Landlord Responsibilities
  {
    id: "edu-habitability-duty-sd",
    title: "Habitability & Repair Duty (South Dakota)",
    group: "Landlord Responsibilities",
    states: ["SD"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota landlords have a non-waivable duty to keep residential premises and common areas in reasonable repair, fit for human habitation, and in good and safe working order throughout the tenancy - including the electrical, plumbing, and heating systems - except where the disrepair is caused by the tenant's own negligent, willful, or malicious conduct. Landlord and tenant may agree that the tenant will perform specified repairs or maintenance in lieu of rent. If a landlord fails to repair a condition within a reasonable time after the tenant gives notice, the tenant may repair it and deduct the cost from rent (or otherwise recover it), or may vacate and be discharged from further rent and lease obligations. If the necessary repair cost exceeds one month's rent, the tenant may instead withhold rent and deposit it into a separate bank or savings-and-loan account (with written evidence of the deposit provided to the landlord) until the landlord makes the repairs or the tenant accumulates enough to have the repairs made.",
    notes: "SD session 1 (continuation). SDCL 43-32-8 (duty, non-waivable) and 43-32-9 (tenant remedies: repair-and-deduct, vacate-and-discharge, or rent-escrow for repairs exceeding 1 month's rent). The rent-escrow mechanism is notable - a middle option between repair-and-deduct and full withholding that this project hasn't seen with this exact structure in CO/WY/KS/NE/MN/ND (closest analog is ND's own repair-and-deduct right, which didn't include an escrow-account mechanic on the same terms). Not turned into a LEASE_CLAUSE row since it states a mandatory, non-waivable landlord duty rather than negotiable lease language - matches this project's established landlord-behavior-belongs-in-education convention (e.g., Nebraska's reservation-of-rights finding).",
  },
  // Rent & Payment
  {
    id: "edu-returned-check-fee-cap-sd",
    title: "Returned Check Fee Cap (South Dakota)",
    group: "Rent & Payment",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota does not give a landlord an automatic right to charge a returned-check fee. SDCL 57A-3-421 makes the issuer of a dishonored check liable for all reasonable costs and expenses of collection - reasonable only if they do not exceed sixty dollars plus any applicable sales tax - but the liability arises only where the payee is a merchant or place of business that has either conspicuously posted a notice on its premises, or regularly extends credit and prints a notice on its customer statements of such size and location as to be conspicuous, stating that a fee will be assessed against returned checks. Liability attaches only where the check was dishonored because the drawer's account is closed, has insufficient funds, or the drawer lacks sufficient credit. Whether a residential landlord is a merchant or place of business for this purpose, and how a landlord would satisfy a posting-or-customer-statement condition written for retail and credit businesses, are not settled. A landlord should not assume that stating a fee in the lease satisfies the statute, because a lease term is not one of the two mechanisms the statute names.",
    notes: "SD session 1 (continuation). SDCL 57A-3-421, part of Title 57A (Uniform Commercial Code, Article 3 - Negotiable Instruments), not Chapter 43-32 - same general-commercial-law architecture this project found for ND's analogous $40 figure (there, under a different general banking statute). Corroboration method for this row is slightly weaker than a direct statute-text read: sdlegislature.gov's own section pages for 57A-3-421 render via JavaScript and returned no fetchable text; the statute's existence, number, and subject matter (costs/expenses for a dishonored check) are independently confirmed via a *different* primary source - SDCL 22-30A-27, the bad-check criminal statute, which explicitly cross-references 'the costs and expenses provided for in § 57A-3-421' - combined with six mutually consistent secondary sources (Innago, PayRent, LeaseRunner, Apartments.com, MyRentalSpot, WeekendLandlords, LegalDocs) all citing the same $40 figure and sales-tax add-on. Treated as VERIFIED given the cross-referencing primary corroboration, but flagged as not a direct primary-text read of the dollar figure itself - if a future session gets a working fetch of the actual 57A-3-421 text, worth a quick confirming pass. | CORRECTION 2026-09-07 - THREE defects; primary text supplied by Taylor. (1) WRONG NUMBER: cap is SIXTY dollars, not forty; source line ends SL 2024 ch 199 S1. The row's notes recorded SEVEN mutually consistent secondary sources all carrying $40 - all stale, and their agreement was treated as corroboration (L.6). (2) FABRICATED PRECONDITION: row said the fee 'should be conspicuously stated in the lease (or otherwise provided to the tenant in writing), consistent with how the statute is applied in practice'. The statute names two mechanisms and a lease term is neither - conspicuous posting ON PREMISES, or a conspicuous notice ON CUSTOMER STATEMENTS by a business regularly extending credit. The row invented the route and flagged its own invention as practice-based, then shipped VERIFIED. This vindicates the pre-existing SD re-audit flag raised in the MN session. (3) MISSED SUBSECTIONS: the three enumerated dishonor reasons were never recorded. ROOT CAUSE: the amount was 'corroborated' via SDCL 22-30A-27's cross-reference to 'the costs and expenses provided for in S 57A-3-421' - that cross-reference carries neither the figure nor the conditions. ND's $40/civil-penalty defect exactly, except the section was never read at all. CROSS-STATE: the SD/ND $40 parity in the prior notes is now FALSE - ND's $40 is N.D.C.C. 6-08-16(2)(a), SD's is UCC Art.3 and now $60. They matched until 2024 and the coincidence is part of why SD's felt confirmed. ND's row unaffected; no S5a.1 propagation owed. OPEN: whether a residential landlord is a 'merchant or place of business' at all - if not, SD may have NO statutory returned-check charge for residential rent and this becomes a confirmed-absence row.",
  },
  // Disclosures
  {
    id: "edu-fair-housing-additions-sd",
    title: "Fair Housing Protected Classes (South Dakota)",
    group: "Disclosures",
    states: ["SD"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "In addition to the federally protected classes, South Dakota's own fair housing law prohibits housing discrimination based on creed and ancestry. The full list under SDCL 20-13-20 is race, color, creed, religion, sex, ancestry, disability, familial status, and national origin. South Dakota has not extended source-of-income (housing voucher) protection, and has not added sexual orientation or gender identity at the state level. South Dakota's refusal-to-rent and discriminatory-terms prohibitions do not apply to rooms or units in a dwelling containing living quarters for no more than two families living independently of each other, if the owner maintains and occupies one of those living quarters as the owner's residence. Two points about that exemption matter in practice. First, it does not reach discriminatory advertising, which remains prohibited regardless of building size or owner-occupancy. Second, it is NARROWER than the federal Fair Housing Act's four-unit owner-occupied exemption - so an owner-occupied three- or four-unit building can fall outside the federal exemption while still being fully covered by South Dakota law. A landlord relying on an owner-occupied exemption in South Dakota should count to two, not to four.",
    notes: "SD session 1 (continuation). SDCL 20-13-20 (owner/agent housing discrimination) and 20-13-1(16) (statutory definition of 'unfair or discriminatory practice'), both read from primary source (sdlegislature.gov mirrors, cross-checked against Justia's codification) - protected-class list matches exactly across both sections: race, color, creed, religion, sex, ancestry, disability, familial status, national origin. Confirms two additions beyond the 7 federal categories (creed, ancestry) - a narrower addition than CO/MN's broader state lists in this project, and notably narrower than the ~23-state group (per a Wikipedia-sourced secondary summary, not independently verified) that includes voucher/source-of-income protection - SD is not among them. No SOGI protection found either. Application-fee cap / tenant-screening-fairness-act and day-one landlord-identity disclosure were also searched this round and confirmed absent for SD (multiple consistent secondary sources: 'No state statute' on both, matching the established very-landlord-friendly SD pattern) - not committed as their own rows per this project's confirmed-absent convention. | RESOLVED (South Dakota session 1, continuation): the small-landlord fair-housing exemption flagged as an open discrepancy is now CONFIRMED PRESENT from primary source. SDCL 20-13-20's own text (read via sdlegislature.gov, full section) states the refusal-to-rent (subdivision 1), discriminatory-terms (subdivision 2), and a fourth listed prohibition (subdivision 4) 'do not apply to rooms or units in dwellings that contain living quarters for no more than two families living independently of each other, if the owner maintains and occupies one of the living quarters as the owner's residence.' Notably narrower than the federal Mrs. Murphy exemption's 4-unit threshold - SD's own exemption caps at 2 units. The statute also separately exempts school/university dormitories and officially recognized fraternity/sorority housing (not reflected in bodyText - out of scope for Steinoak's residential-lease product). bodyText revised to reflect the confirmed exemption. Also resolved this round: the landlord-identity/management-disclosure discrepancy flagged alongside this one. RocketRent's specific citation (SDCL 43-32-2) was checked directly against primary source and is simply wrong - §43-32-2 is the agricultural-land/municipal-lot lease-term cap (already captured in this project's §2 statute walk), not a disclosure requirement. Combined with AAOA's 'no state statute' finding and the absence of any such requirement in consumer.sd.gov's own official FAQ, this project now treats 'no SD statutory landlord-identity-disclosure requirement' as CONFIRMED ABSENT with reasonable confidence - not committed as its own row per the standing confirmed-absent convention. | UPGRADED 2026-09-07 - citation screen Tier B -> Tier A. SDCL 20-13-20's exemption paragraph read directly, identical in Justia's codification and on sdlegislature.gov: 'The provisions of subdivisions (1), (2), and (4) do not apply to rooms or units in dwellings that contain living quarters for no more than two families living independently of each other, if the owner maintains and occupies one of the living quarters as the owner's residence.' 2-unit threshold CONFIRMED; protected-class list confirmed. SUBDIVISION DETAIL justifying the advertising carve-out: the exemption is scoped to (1),(2),(4) and pointedly OMITS (3), the discriminatory-advertising prohibition - visible only by reading which subdivisions are enumerated. NEW SUBSTANTIVE POINT: the practical consequence of SD's exemption being narrower than the federal four-unit exemption (42 U.S.C. 3603(b)(2)) was never stated - an owner-occupied THREE- or FOUR-unit building is exempt federally but NOT under SD law, so for that band SD is MORE protective and a landlord applying the familiar federal rule will be wrong. ALSO CONFIRMED, excluded from bodyText as out of product scope: dormitory residences and officially recognized fraternity/sorority dwellings are exempt. UNREAD TAIL (L.5): the section closes with 'Nothing in this statute may be construed to displace federal, state, or local guidelines setting reasonable stan...', truncated in both reproductions; no claim here depends on it.",
  },
  // Rent & Payment
  {
    id: "edu-rent-control-preemption-sd",
    title: "Rent Control Preempted (South Dakota)",
    group: "Rent & Payment",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota state law preempts local rent control: no county, municipality, or other local government in South Dakota may enact, maintain, or enforce an ordinance or resolution that would control the amount of rent charged for leasing private residential property. This does not limit a local government's ability to manage rents on residential property it owns.",
    notes: "SD session 1 (continuation). SDCL 6-1-13, read from primary source (both sdlegislature.gov and Justia's codification agree exactly), sits in Title 6 (Local Government Generally), outside Chapter 43-32 - a gap-discovery-source-#4 find. Useful, genuinely new architecture fact for the checklist: confirms South Dakota is a rent-control-preemption state, meaning Steinoak's municipal-ordinance-risk messaging for SD landlords can be more confident than the standard 'check local ordinances' hedge used for states without this preemption - rent-amount control specifically cannot exist at the municipal level in SD, regardless of what any individual city might otherwise attempt. Other categories of municipal ordinance (noise, occupancy limits, etc.) remain untouched by this section and are still out of scope per this project's standing municipal-ordinance boundary. | RE-AUDIT 2026-09-07 - CONFIRMED CORRECT against SDCL 6-1-13 primary text, including the carve-out preserving a local government's right to manage residential property in which it holds a property interest. Source: SL 1990 ch 51 S2, unamended. Citation screen: Tier C -> Tier A.",
  },
  // Notices & General
  {
    id: "edu-right-to-call-police-sd",
    title: "Right to Call Police / Emergency Assistance (South Dakota)",
    group: "Notices & General",
    states: ["SD"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A South Dakota landlord may not penalize or take adverse action against a tenant for calling the police or other emergency assistance in response to domestic abuse, unlawful sexual behavior, or stalking. A tenant cannot waive this right, and any lease provision purporting to waive it is unenforceable.",
    notes: "SD session 1 (continuation). SDCL 43-32-18.1, already identified in this project's original statute walk (§2) but not previously committed as its own row or cross-checked against the broader 'right to call police' checklist topic the way MN/KS defined it. Now resolved: South Dakota's protection is scoped specifically to domestic abuse/unlawful sexual behavior/stalking-related emergency calls - narrower than Minnesota's 504B.205, which extends to 'any other conduct, including but not limited to mental health or health crises' (not DV-limited). Flagged for the checklist as a genuine scope difference, not an oversight: SD has no general, non-DV-specific right-to-call-police protection. Landlord lien/security-interest over tenant property was also searched this round - no dedicated statute found in Title 44 (SD's general lien-law title) or Chapter 43-32 specifically abolishing or granting a residential landlord's lien; treated as confirmed absent (not committed as its own row per convention - SD's abandoned-property provisions, already captured as abandoned-property-sd, are the only property-retention mechanism found). Last-month's-rent deposit-application restriction and a dedicated Compliance/Prohibited-Terms/unconscionability statute were also searched without a hit - SD appears to rely on general common-law unconscionability doctrine rather than a dedicated consumer-protection statute for leases, consistent with its overall minimal-statute, lease-terms-control pattern; not committed as rows.",
  },
  // Default & Termination
  {
    id: "edu-holdover-mechanics-sd",
    title: "Holdover Tenancy Mechanics (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota has no statutory holdover-damages multiplier - no automatic 'double rent' or similar penalty for a tenant who remains after the lease term ends. Instead, if a tenant holds over and Landlord accepts rent, the law presumes the parties have renewed the tenancy on the same terms, for the same length of time, capped at one year. If Landlord does not want to renew on holdover, the practical remedy is to decline further rent and proceed under South Dakota's eviction process rather than rely on a statutory penalty.",
    notes: "SD session 1 (pass 2 finding). SDCL 43-32-14, already read in the original statute walk (§2) but not previously cross-checked against this project's holdover-damages-formula checklist topic. Genuinely different architecture from every other state closed in this project: CO has a 'double rent' multiplier, KS caps at 1.5x, NE caps at 3x, ND imposes straight rent-through-term liability - SD has none of these; its only mechanic is presumed renewal on rent acceptance. Confirmed via a dedicated primary-source-adjacent industry source stating plainly 'South Dakota has no holdover multiplier, no double rent and no statutory holdover damages of any kind,' consistent with SDCL 43-32-14's actual text. This project's generic holdover-damages clause (if one exists tagged for other states) should NOT be extended to SD.",
  },
  // Landlord Responsibilities
  {
    id: "edu-detector-duty-scope-sd",
    title: "Smoke and Carbon Monoxide Detector Requirements (South Dakota)",
    group: "Landlord Responsibilities",
    states: ["SD"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota has no single smoke-detector statute covering all rentals, but it does have three administrative rules, and one of them reaches ordinary rental housing. A multifamily residence housing six or more families must have at least one smoke detector in each family living unit, located on the ceiling or wall of the main room or a sleeping room; in new construction the detector must draw primary power from the building wiring with battery backup. A lodging establishment - a hotel, motel or similar - must have smoke detectors in each sleeping room. A manufactured home must have at least one operable smoke detector and one carbon monoxide detector on each floor, including basement and attic, located in common areas or hallways. What is NOT covered is the gap that matters: a single-family rental house, a duplex, or any multifamily building housing fewer than six families falls outside all three rules, and South Dakota imposes no detector requirement on it beyond the general habitability duty. Carbon monoxide detectors are required only in manufactured homes; no rule requires them in a conventional rental of any size. Enforcement of the multifamily rule is by written notice with thirty days to comply.",
    notes: "SD session 1 (pass 2 continuation). Two administrative rules found, both read from primary source (sdlegislature.gov's own rules pages and a Justia mirror): SD Admin. R. 61:15:01:14 (Dept. of Public Safety, Fire Safety, authority SDCL 34-29B-2) scoped explicitly to 'lodging establishments' as defined in SDCL 34-18-1(7) - the same lodging-establishment-only pattern this project already logged for Kansas's bed bug regulations, a real cross-state architecture echo worth noting. SD Admin. R. 46:04:01:20 (authority SDCL 27B-2-26, South Dakota's manufactured-housing regulatory chapter based on the citation numbering) is scoped to manufactured/mobile homes specifically. Neither is a general residential-lease requirement. This resolves the pass-2 downgrade from session 1's vaguer 'no dedicated statute found' claim with real primary-source specificity - the correct finding is 'present but narrowly scoped,' not a flat absence. | MATERIAL CORRECTION 2026-09-07 - SECOND ERROR INTRODUCED IN THIS RE-AUDIT, NOT INHERITED. The row asserted that SD's only detector rules are ARSD 61:15:01:14 (lodging establishments) and 46:04:01:20 (manufactured homes), and that 'Neither rule reaches a typical single-family or apartment lease.' WRONG as to apartments. **ARSD 61:15:01:15, 'Smoke detectors required in multifamily residences', is the very next rule in the same chapter and was never read**: 'Each family living unit of a multifamily residence which houses six or more families shall contain at least one smoke detector installed in accordance with the manufacturer's instructions and this section. A smoke detector shall be located on the ceiling or wall of the main room or sleeping room in each dwelling unit of an existing multifamily residence. In new construction each smoke detector shall receive primary power from the building wiring and shall be equipped with a battery backup... If a violation of this section is found, a written notice confirming such findings shall be issued and served upon the owner, operator, or other person responsible for the violation. Any notice or order issued pursuant to this section shall require compliance within 30 days of the date of notice.' General Authority and Law Implemented: SDCL 34-29B-2. So a landlord of a 6+ unit building in SD DOES have an affirmative, enforceable detector duty that this row previously told them did not exist. ROOT CAUSE: read the rule that answered the question asked (61:15:01:14, found by searching 'smoke detector') and stopped, without reading the adjacent rules in the same chapter. This is the same failure shape as the 20-13-23.2 error earlier in this session - stopping at the provision that resolves the immediate query - and it is the project's standing 'read whole sections' rule failing one level up, at chapter rather than section scale. Two instances of the same error shape in one session; per the standing instruction, this is the point to stop pattern-matching and treat adjacent-provision sweeps as mandatory rather than discretionary. Recorded to Addendum L.12. SCOPE NOW STATED PRECISELY: covered = 6+ family multifamily (smoke), lodging establishments (smoke), manufactured homes (smoke + CO). NOT covered = single-family rentals, duplexes, and multifamily under six families - the band most Steinoak landlords actually own. CO detectors remain required ONLY in manufactured homes; no SD rule requires CO detectors in a conventional rental of any size, which is itself worth stating affirmatively. rule_type raised CONDITIONAL -> REQUIRED because for the 6+ band the duty is mandatory. CURRENCY: 61:15:01:14 source 18 SDR 107 eff. 1992-01-01, 23 SDR 32 eff. 1996-09-11; 46:04:01:20 source 44 SDR 93 eff. 2017-12-04. Text identical on sdlegislature.gov's own rules API, Cornell LII, and Justia (the latter 'current through Register Vol. 51, p. 43, September 23, 2024') - three independent reproductions agreeing, with the official one among them.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-unconscionability-doctrine-sd",
    title: "Unconscionable Lease Terms (South Dakota)",
    group: "Compliance & Prohibited Terms",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota has no dedicated landlord-tenant statute voiding unconscionable lease clauses. Three things fill that gap. First and most directly, SDCL 53-9-3 voids any contract term whose object is to exempt a party from responsibility for its own fraud, willful injury, or violation of law. Second, South Dakota's Deceptive Trade Practices and Consumer Protection Act prohibits deceptive acts in connection with the sale or lease of goods and services, which could reach a deceptively-presented lease term, though it is not an unconscionability provision as such. Third, common-law unconscionability remains available as a general contract-law backstop; South Dakota has struck a liability limitation as an unconscionable adhesion term where the bargaining disparity was severe.",
    notes: "SD session 1 (pass 2 continuation). Checked against SDCL Title 37, Chapter 24 (Deceptive Trade Practices and Consumer Protection Act) directly - confirmed via consumer.sd.gov's own official 'Laws' page (listing SDCL 37-24, 43-32, and 21-16 as the applicable landlord-tenant-adjacent statutes, with no separate unconscionability provision listed) plus primary-source Title 37-24 text (Justia mirror) confirming the chapter's scope is general deceptive/fraudulent trade practices, not a lease-specific unconscionability or prohibited-clause list the way KS's K.S.A. 58-2544, NE's §76-1412, or ND's §47-16-13.3 are. This properly resolves the pass-2 downgrade from session 1's weaker, non-primary-sourced 'confirmed absent' claim - now backed by an actual title-and-scope check rather than a general search impression. | CORRECTION 2026-09-07: prior text named only the Deceptive Trade Practices Act and common law, omitting SDCL 53-9-3 entirely - the one statutory provision on point. Same root cause as edu-no-prohibited-terms-list-sd (search confined to ch.43-32 and Title 37-24; Title 53 never reached). Common-law backstop now anchored to Rozeboom v. Nw. Bell Tel. Co., 358 N.W.2d 241, 245 (S.D. 1984), carried at secondary confidence.",
  },
  // Notices & General
  {
    id: "edu-landlord-lien-absence-sd",
    title: "No General Landlord Lien (South Dakota)",
    group: "Notices & General",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota does not give a residential landlord a general lien or security interest over a tenant's personal property to secure unpaid rent or other lease obligations. The only lien-like mechanism found in South Dakota's landlord-tenant statute is narrower and different in purpose: when handling higher-value abandoned property left behind by a tenant (see the abandoned-property provisions), a landlord has a lien limited to the reasonable costs of handling and storing that property - not a general security interest usable to collect unpaid rent from a tenant who is still in possession.",
    notes: "SD session 1 (pass 2 continuation). No general landlord's-lien statute was found in Title 44 (SD's general lien-law title) or Chapter 43-32 after a second, more targeted search this pass; no evidence surfaced of one ever having existed or being explicitly abolished (unlike KS's K.S.A. 58-2567 or NE's §76-1434, which are explicit abolition statutes - a stronger evidentiary posture than SD's apparent never-existed pattern). The only lien found is the narrow abandoned-property handling-cost lien already captured in `abandoned-property-sd` (SDCL 43-32-26). This is a reasonable, though not maximally strong, confirmed-absent finding for the general topic - flagged honestly as resting on absence-of-evidence across two search rounds rather than an explicit statutory abolition.",
  },
  // Rent & Payment
  {
    id: "edu-late-rent-waiver-absence-sd",
    title: "No Reservation-of-Rights Requirement for Late Rent (South Dakota)",
    group: "Rent & Payment",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota does not impose a statutory rule requiring a landlord to reserve its rights when accepting late rent in order to preserve a later right to terminate for that same late payment - unlike the reservation-of-rights requirements found in some neighboring states. This is architecturally consistent with South Dakota's broader 2024 shift away from a mandated notice-and-cure framework for nonpayment (see the eviction-procedure findings): because South Dakota does not require a landlord to give notice-and-an-opportunity-to-cure before pursuing eviction for nonpayment in the first place, there is correspondingly no waiver-by-acceptance doctrine tied to such a framework.",
    notes: "SD session 1 (pass 2 continuation). No SD-specific late-rent-acceptance-waiver or reservation-of-rights statute found across multiple targeted searches this pass, in contrast to Nebraska's §76-1433 ('after the breach' framing) and Kansas's 'without reservation' rule, both of which created a real, logged conflict with this project's generic non-waiver boilerplate for those states. The absence finding here is bolstered by an architecture-based inference, not just absence-of-evidence: South Dakota's repeal of its own notice-to-quit requirement (2024 SB 90, §9-10 of this log) removed the very framework that NE/KS's waiver rules exist to police, making it unsurprising SD never developed (or has since abandoned) an equivalent doctrine. Flagged as reasoned-absence rather than a flat unverified claim.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-no-prohibited-terms-list-sd",
    title: "No Enumerated Prohibited-Terms List (South Dakota)",
    group: "Compliance & Prohibited Terms",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota's landlord-tenant chapter does not contain an enumerated list of prohibited lease provisions of the kind Kansas and Nebraska have - no specific statutory ban on a confession-of-judgment clause, and no enumerated ban on an exculpatory or liability-limitation/indemnification clause. South Dakota follows the North Dakota pattern. That absence is not the whole picture: a general contract statute, SDCL 53-9-3, independently voids any contract term whose object is to exempt a party from responsibility for its own fraud, willful injury to the person or property of another, or violation of law. Two further limits sit outside chapter 43-32: SDCL 43-32-8 makes the landlord's repair and habitability duty expressly non-waivable, and SDCL 15-17-39 voids attorney-fee-on-default provisions contained in an evidence of debt.",
    notes: "SD session 1 (pass 2 continuation). Confirmed via this project's own complete, primary-sourced index of Chapter 43-32's 37 sections (established in the original statute walk, §2 of this log) - no section addresses confession-of-judgment or exculpation/indemnification clauses. This is a well-supported absence claim because it's based on positive knowledge of the chapter's complete contents, not just a failed search - a stronger evidentiary posture than most of this session's other confirmed-absent findings. Consistent with, and reinforces, `edu-unconscionability-doctrine-sd`'s finding that SD relies on general doctrine rather than an enumerated statutory list, matching the architecture WY and ND both have for this same topic ('confirmed absent as an enumerated statutory ban - only general unconscionability doctrine applies'). | CORRECTION 2026-09-07: prior text said an exculpatory clause 'would instead be tested... under South Dakota's general consumer-protection and common-law unconscionability doctrine rather than an enumerated statutory prohibition.' WRONG - SDCL 53-9-3 is squarely on point and was never located. The narrow claim (no enumerated list in ch.43-32) was and remains CORRECT; the affirmative claim about what governs INSTEAD was never checked outside ch.43-32. Title 53 never reached. L.7 failure shape at chapter scale. Note the prior notes asserted unusually strong grounding ('positive knowledge of the chapter's complete contents... a stronger evidentiary posture than most of this session's other confirmed-absent findings') - warranted for the absence, unwarranted for the substitute rule stated beside it. GROUND CONFIRMED: the ND pattern holds and DOES support extending the parking/storage/pet/property-insurance family to SD, subject to the 53-9-3 ceiling.",
  },
  // Default & Termination
  {
    id: "edu-death-incapacity-lease-survival-sd",
    title: "Lease Survival on Death or Incapacity (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a South Dakota lease is terminable at the pleasure of either party (a true at-will arrangement), it terminates upon notice to the other party of that party's death or incapacity to contract. In every other case - including an ordinary fixed-term residential lease - the lease is NOT terminated by a party's death or incapacity; it survives and continues to bind the deceased or incapacitated party's estate or successor.",
    notes: "SD session 1 (pass 2 continuation). SDCL 43-32-23, full text confirmed from primary source (consumer.sd.gov's chapter PDF and multiple Justia mirrors agree exactly): 'If a lease is terminable at the pleasure of one of the parties, it is terminated by notice to the other of such party's death or incapacity to contract. In other cases it is not terminated by such death or incapacity.' IMPORTANT - this is the opposite of a tenant-protective early-termination-on-death right (the kind ND's own tenant-death-termination finding describes, per the master checklist). South Dakota's rule instead binds a deceased or incapacitated party's estate to an ordinary fixed-term lease - it's a lease-survival/estate-binding rule, not a release mechanism. Flagged explicitly so this doesn't get conflated with ND's genuinely different, tenant-protective architecture when the checklist gets updated.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-service-animal-prohibition-criminal-penalty-sd",
    title: "Criminal Penalty for Prohibiting a Service Animal in Housing (South Dakota)",
    group: "Compliance & Prohibited Terms",
    states: ["SD"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota makes it a crime for a landlord to prohibit a service animal in residential housing. Under SDCL 20-13-23.4, no landlord may prohibit, by lease or otherwise, the keeping of a service animal by a person who is totally or partially physically disabled, totally or partially blind, or totally or partially deaf, in an apartment or other rented or leased residential property. A violation is a Class 2 misdemeanor. Note two things about the reach of this section. First, it is a direct restriction on lease content - a no-pets or no-animals clause that operates to bar a service animal for a covered tenant is prohibited by the statute itself, not merely unenforceable. Second, the disability categories it lists are narrower than those in South Dakota's public-accommodations service-animal provision, which also covers psychiatric and mental disability; a tenant whose qualifying disability is psychiatric or mental appears to fall outside this criminal provision, though the landlord's civil obligations under SDCL 43-32-33 through 43-32-36 and under federal fair housing law are unaffected and remain the primary source of duty. Separately, SDCL 20-13-23.7 requires good faith efforts to reasonably accommodate a disabled person in housing unless the accommodation would impose undue hardship.",
    notes: "SD session 1 (pass 2 continuation). SDCL 20-13-23.2, found via a search targeting the checklist's 'criminal penalty for service-animal misrepresentation' topic - but this turns out to be a genuinely different-direction finding than that topic describes. WY's and KS's criminal statutes penalize a *tenant's* fraudulent service-animal claim; SD's §20-13-23.2 instead criminalizes a *landlord's* wrongful prohibition of a legitimate service animal - the opposite party, opposite conduct. For the checklist's actual topic (a criminal, not just civil, penalty for a tenant's fraudulent claim), no SD analog was found - SDCL 43-32-36 (already captured in `assistance-animal-accommodation-sd`) remains a civil $1,000 damage-fee remedy only, with no separate criminal statute located. Both findings are logged: this row for the newly-found landlord-facing criminal prohibition, and a confirmed-absent note (§25 of the decision log) for the tenant-fraud criminal-penalty topic specifically. | MATERIAL CORRECTION 2026-09-07 - THIS ERROR WAS INTRODUCED IN THIS RE-AUDIT, NOT INHERITED. The row asserted, as VERIFIED, that SD 'makes it a crime for a landlord to prohibit... a service animal in a rented residential property.' SDCL 20-13-23.2 scopes its misdemeanor to 'a place listed in S 20-13-23.1', which was NEVER READ. 20-13-23.1 reads: 'Any person with a disability is entitled to reasonably equal accommodations... of all hotels, lodging places, places of public accommodation, amusement or resort, and other places to which the general public is invited' (SL 1976 ch 153 S1; SL 1986 ch 170 S18). A public-accommodations list. The claim is WITHDRAWN and inverted into a confirmed-absence finding, which is the more useful row - it stops a future canvass re-opening the question and stops anyone re-deriving the same error from 20-13-23.2 read alone. ROOT CAUSE: textbook L.5, and the exact failure the handoff prompt illustrated with ND's DV clause - committed while writing up findings about that rule. AGGRAVATING: the row was framed as a striking two-direction finding ('opposite party, opposite conduct from WY/KS'); that novelty is part of why it went unchallenged. A finding that INVERTS the expected pattern deserves more verification than one that confirms it. STATUS HELD UNVERIFIED: 20-13-23.1's text is from the Michigan State University College of Law Animal Legal & Historical Center compilation, which carries the source line and is corroborated twice, but is not sdlegislature primary text. The asymmetry matters - the row now tells a landlord a criminal penalty does NOT apply, and being wrong in that direction is worse than the original overstatement. THIRD instance in SD of a rule that looks landlord-facing but is scoped to TRANSIENT LODGING (with ARSD 61:15:01:14 and SDCL 43-32-37). | SECOND WITHDRAWAL 2026-09-07 - THE ABSENCE CLAIM IS ALSO WRONG, AND THIS IS THE THIRD INSTANCE OF THE SAME ERROR SHAPE IN ONE SESSION. History of this row: (a) originally asserted, as VERIFIED, that SD criminalises a landlord's refusal of a service animal in housing; (b) withdrawn when 20-13-23.2 proved scoped to 20-13-23.1's public-accommodations list, and REWRITTEN as a confirmed-absence row saying SD has NO criminal penalty in housing; (c) that absence claim is now ALSO withdrawn. Retrieving 20-13-23.1 surfaced the chapter INDEX, which lists **SDCL 20-13-23.4, 'Right to keep guide dog in rented or leased residence--Violation as misdemeanor'** - on its face the housing-specific criminal provision the absence claim denied existed. Also listed: 20-13-23.7, 'Good faith efforts made to accommodate disabled persons', which per the chapter text applies to 'employment, public accommodation, public service, and education or housing... unless the accommodation would impose undue hardship'. Neither section's TEXT has been read. ROOT CAUSE: L.12 exactly - I read 20-13-23.1 and 20-13-23.2, the two sections that matched the query, and did not sweep the adjacent sections of the same chapter. This is the third occurrence in this session after 20-13-23.2 itself and ARSD 61:15:01:15, and it happened THREE PASSES AFTER writing L.12, which prescribes exactly the sweep that would have caught it. Writing down a rule is not the same as operating under it. STOPPING RATHER THAN RESOLVING: the standing instruction is that if the same error shape appears twice in one session, stop and ask rather than pattern-match a third time. It has now appeared three times, so this row is NOT being resolved from the index title. A title is not text - that is the L.8 lesson - and 'guide dog' may be materially narrower than 'service animal'. Escalated to Taylor for 20-13-23.4 and 20-13-23.7 primary text. The row is left in an explicitly OPEN state rather than asserting either direction, because both prior assertions were wrong and a third guess is not warranted. 20-13-23.1 ITSELF IS NOW CONFIRMED at primary-source standard: text identical across sdlegislature.gov's own chapter page, Justia, LawServer and the MSU Animal Legal & Historical Center compilation, with source line SL 1976, ch 153, S 1; SL 1986, ch 170, S 18 appearing on the official page. That sub-finding stands; it is the inference drawn from it about the whole chapter that was unsound. | RESOLVED 2026-09-07 with SDCL 20-13-23.4 primary text supplied by Taylor: 'No landlord may prohibit by lease or otherwise the keeping of a service animal by a person who is totally or partially physically disabled, totally or partially blind, or totally or partially deaf in an apartment or other rented or leased residential property. A violation of this section is a Class 2 misdemeanor.' Source: SDCL S 20-13-23.2 as added by SL 1980 ch 172 S1; SL 1994 ch 160 S4; SL 1995 ch 118 S2. THE ORIGINAL CLAIM WAS SUBSTANTIALLY CORRECT AND I FALSIFIED IT BY CHECKING THE WRONG SECTION. The row as first written said SD 'makes it a crime for a landlord to prohibit, by lease or otherwise, a legitimately disabled tenant from keeping a service animal in a rented residential property... a Class 2 misdemeanor' - which tracks 20-13-23.4 almost verbatim. Its defect was the CITATION (it cited 20-13-23.2) and the absence of a scope check, not the substance. When 20-13-23.2 proved scoped to public accommodations, I concluded the CLAIM was wrong rather than that the CITATION was wrong, and rewrote a correct statement into a confirmed absence. The 'correction' made the library worse than the error, and the second correction made it worse again. LESSON: when a cited authority fails to support a claim, the next question is whether a DIFFERENT authority supports it - not whether the claim is false. Disconfirming one citation disconfirms that citation. Recorded to Addendum L.13. TITLE-VS-TEXT, corroborating L.8: the section is titled 'Right to keep GUIDE DOG in rented or leased residence' but its operative text says SERVICE ANIMAL - broadened by the 1994/1995 amendments without the catchline being updated. Had this been resolved from the index title, as was briefly tempting, the row would have been narrowed to guide dogs and been wrong again. SUBSTANTIVE NUANCE, not previously anywhere in the library: 20-13-23.4's disability categories (physically disabled, blind, deaf) are NARROWER than 20-13-23.2's, which SL 2020 ch 71 broadened to include psychiatric and mental disability. So the CRIMINAL provision appears not to reach a landlord who refuses a service animal to a tenant with a psychiatric or mental disability, even though the CIVIL duties under 43-32-33 to -36 and the FHA plainly do. Stated in the row as an apparent limit rather than a safe harbour, because relying on it would be reckless. ARCHITECTURE CONSEQUENCE: this is a THIRD lease-content restriction in SD, and it sits OUTSIDE ch. 43-32. R3 of this log recorded that the chapter contains only two (43-32-8's non-waiver and 43-32-18.1's DV eviction bar) - true of the chapter, and now visibly incomplete as a statement about South Dakota. Reinforces the K.2 boundary rejection at R16. Row moved from group Pets to Compliance & Prohibited Terms accordingly.",
  },
  // Rent & Payment
  {
    id: "edu-advance-rent-vs-deposit-sd",
    title: "Advance Rent Treated Separately From Security Deposit (South Dakota)",
    group: "Rent & Payment",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Whether money a South Dakota landlord collects up front is a 'security deposit' turns on what the money does, not what the lease calls it. SDCL 43-32-6.1 provides that any deposit of money whose function is to secure the performance of a residential rental agreement, or any part of it, is deemed to be a security deposit. So a payment labeled 'last month's rent' that is genuinely held and applied as rent for the final month is advance rent and does not count against the one-month deposit cap. But the same payment, if in fact held as security against damage, unpaid charges, or other nonperformance, is deemed a security deposit no matter what the lease calls it - and it then counts against the one-month cap and carries all the deposit rules, including the twenty-one-day return-or-written-statement deadline, the forty-five-day itemized accounting on request, forfeiture of all withholding rights for noncompliance, and exposure to punitive damages for bad-faith retention. Collecting both a full one-month deposit and a last month's rent payment is therefore safe only if the latter really is applied as rent.",
    notes: "SD session 1 (post-close correction, prompted by Taylor's follow-up question on the last-month's-rent checklist topic). Upgrades this project's earlier 'Inconclusive' finding (§20/§32 of the decision log) to a real answer, though a narrower one than the checklist topic originally asked: SDCL 43-32-6 (self-help eviction damages: 'return of any advance rent and deposit paid') and SDCL 43-32-24 (deposit return mechanics, which never mentions advance rent) both consistently treat 'advance rent' and 'deposit' as two separate legal concepts throughout Chapter 43-32, never conflating them. consumer.sd.gov's own official FAQ independently confirms the practical result: 'A landlord has the discretion to collect various deposits as well as some rent in advance... These advance payments generally vary in amount.' What remains genuinely unresolved (true Inconclusive, not just under-researched): whether any common-law or general-contract-law principle would treat an advance-rent payment functionally as a deposit if a landlord tried to use it as security against damage rather than future rent - no case law was found either way this session. Flagged as the one item in this log that stays partially open rather than fully closed. | CORRECTION 2026-09-07 (surfaced by the checklist fold-in) - TWO defects. (1) OVERSTATED CATEGORICAL CLAIM: the row asserted advance rent and security deposit are 'separate categories under South Dakota law, not two names for the same protected fund', flatly and unconditioned. SDCL 43-32-6.1's opening sentence supplies a FUNCTIONAL test the row never quoted: 'Any deposit of money, the function of which is to secure the performance of a residential rental agreement or any part of such an agreement, shall be deemed to be a security deposit.' Function, not label, controls. The row's own recorded 'open question' is substantially answered by the statute it cited for the cap but never read past. L.5 pattern: 43-32-6.1 was cited in edu-security-deposit-cap-sd for the one-month figure and the definitional sentence governing SCOPE never travelled to the row that needed it. (2) STALE DEADLINE: row still said 'two-week return deadline'. The post-write sweep for 'two weeks'/'2-week' reported CLEAN and missed the hyphenated 'two-week' form - see L.9.",
  },
  // Default & Termination
  {
    id: "notice-and-cure-sd",
    title: "Notice and Cure Is a Landlord Decision, Not a Lease Term (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota law gives a landlord broad discretion over whether, and how much, opportunity to cure a default a tenant receives before Landlord pursues eviction - there is no statutory requirement to offer one, for nonpayment or for an ordinary lease violation. Whether to give written notice and a set number of days to fix a curable problem before filing is therefore a case-by-case enforcement decision, not a fixed lease term. A real, in-use South Dakota lease reviewed for this project (South Dakota Achieve's residential lease) reflects this directly - its own default/eviction section states only that eviction will comply with SDCL Ch. 21-16, without building in any separate cure mechanism. Landlords who want to offer a cure opportunity consistently, rather than deciding fresh each time, should consider adopting - and following - a documented internal practice (for example, always giving written notice and a stated number of days before filing for an ordinary lease violation), since South Dakota law leaves this entirely to the landlord's own judgment and consistency at the point of enforcement.",
    notes: "SD session 1 (post-close correction, round 2). Companion clause to `default-by-tenant-sd`, added because South Dakota imposes no statutory notice-and-cure period (2024 SB 90 repealed the prior notice-to-quit requirement, see §9-10) and, before this correction, nothing in the lease filled that gap either. Structure (separate rent-cure and violation-cure day counts, plus a no-cure carve-out for drug activity/violence/safety-endangering conduct) proposed by Claude and approved by Taylor in chat. The carve-out isn't invented from nothing - it mirrors how the real South Dakota lease found for gap-discovery source #2 (South Dakota Achieve's lease) treats illegal drug activity and violent/aggressive behavior as immediate material breaches with no cure offered, and is consistent with the eviction grounds already captured in `edu-eviction-grounds-sd`. Day counts are deliberately left as landlord-fillable bracket placeholders ([insert number of days, e.g. N]), matching the existing non-schema bracket convention used elsewhere in the CSV (e.g. the habitability-notice and utility-allocation rows) rather than the schema-backed {{curly_brace}} convention, since no schema field exists for a cure-period day count and Taylor explicitly did not want a hardcoded number forced on landlords - South Dakota law doesn't specify one, so the product shouldn't pretend to either. The 3-day/10-day figures shown in the bracket examples are illustrative, not binding: 3 echoes SD's own pre-2024 repealed notice period and the number of days rent must be overdue before an eviction ground even exists (SDCL 21-16-1(4)); 10 is a common industry default for a curable lease-violation window, not a South Dakota statutory figure. Flagged for retroactive cross-state check: does any other state's default-by-tenant clause have a similar gap (a reference to a nonexistent or non-functional cure mechanism)? Not yet checked - Taylor's explicit instruction was to scope this fix to SD for now and revisit other states if the same pattern turns up. | CORRECTION 2026-08-25 (round 3, Taylor's review): pulled out of the active lease-clause set. Taylor's challenge: eviction/nonpayment/cure mechanics are procedural, enforcement-time matters, not terms the two parties are agreeing to at signing - closer to Nebraska's reservation-of-rights finding (flagged for the not-yet-built Legal Tracker feature, not a standing lease clause) than to an ordinary substantive lease term. The real South Dakota lease found for gap-discovery source #2 (South Dakota Achieve's) supported this directly - it doesn't build a cure mechanism into the lease at all, just defers to the statute. content_type changed from LEASE_CLAUSE to LANDLORD_EDUCATION (was: LEASE_CLAUSE) and rule_type changed from REQUIRED to RECOMMENDED, since this project's schema treats LANDLORD_EDUCATION content as reference material for the landlord rather than text inserted into a generated lease. This is now a Legal Tracker feature candidate: a prompt or reminder helping a landlord apply a consistent cure practice at the moment of enforcement, rather than a clause baked into the lease at signing. Bracket-style day-count placeholders ([insert number of days, e.g. N]) removed from the bodyText since this is no longer lease text a landlord fills in once - if built as a Legal Tracker feature, day counts would more naturally live as a configurable landlord preference/setting, not lease-document placeholders. `default-by-tenant-sd` revised in the same pass to stop referencing a lease section that no longer exists. Prior LEASE_CLAUSE version of this row's bodyText retained for the record: If Tenant fails to pay Rent when due, Landlord will give Tenant written notice of the amount owed, and Tenant may cure the default by paying the full amount within [insert number of days, e.g. 3] days after the notice is given. If Tenant fails to comply with any other obligation under this Lease that is capable of being cured, Landlord will give Tenant written notice describing the violation, and Tenant may cure the default by remedying the violation within [insert number of days, e.g. 10] days after the notice is given. If Tenant does not cure within the applicable period, Landlord may pursue all remedies available under this Lease and South Dakota law, including termination and eviction. This cure period does not apply to a violation involving illegal drug activity, violence or threats of violence, or conduct that endangers the health or safety of others or the property, for which Landlord may pursue termination and eviction immediately.",
  },
  // Pets
  {
    id: "edu-esa-federal-state-divergence-co",
    title: "Federal ESA Enforcement Changed in 2026 - Colorado Law Did Not",
    group: "Pets",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Federal and Colorado law have pulled apart on emotional support animals, and it would be easy to read the federal news and get this wrong. On September 17, 2025 HUD withdrew its assistance-animal guidance, and on May 22, 2026 it went further: HUD's Office of Fair Housing and Equal Opportunity now says it will pursue Fair Housing Act accommodation complaints only for animals individually trained to do work or tasks for a disability - the ADA service-animal standard - and will no longer expect landlords to automatically accommodate untrained emotional support animals. HUD says it intends to go through formal rulemaking. Here is what that does NOT change for you in Colorado. First, it is a change in how one agency prioritizes enforcement, not a change in the Fair Housing Act itself; the statute and its regulations are unchanged, and a tenant can still bring a private FHA claim, as can the Department of Justice. Second, and more directly: Colorado has its own law. C.R.S. 24-34-502 makes it a discriminatory housing practice to refuse a reasonable accommodation that a person with a disability needs to use and enjoy a dwelling, and that covers assistance animals including ESAs. That statute never depended on HUD guidance and was not affected by any of this. So in Colorado, continue to treat a documented ESA as an assistance animal, not a pet: no pet deposit, no pet rent, no breed or size restriction, and no demand for details about the nature or severity of the disability. The tenant stays responsible for actual damage, and you may still deny where the specific animal is a direct threat or would cause substantial property damage that cannot be otherwise addressed. Watch for HUD's rulemaking, but do not change your Colorado practice on the strength of the enforcement memo alone.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Landlord Responsibilities
  {
    id: "edu-habitability-operational-duties-co",
    title: "Habitability: Your Operational Duties Beyond the Repair Itself",
    group: "Landlord Responsibilities",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "C.R.S. 38-12-503 imposes several duties that have nothing to do with the repair work itself, and missing them can independently establish a breach. Communication: contact the tenant within 24 hours of having notice (72 hours if the premises are inaccessible due to an environmental public health event), stating what you intend to do and when it will start and finish - and you must affirmatively tell the tenant about your obligation to provide a comparable unit or hotel room at no cost. Records: keep all written notices, correspondence, and documentation about the condition and your remedial action for the entire tenancy plus 3 years, and produce any of it to the tenant within 10 calendar days of a request. Mold and dampness: within 72 hours of notice you must install containment, stop active water sources, and install HEPA filtration, then maintain containment through remediation, dry and decontaminate affected materials, test after remediation, and reassemble to prevent recurrence. Gas: you must hire a professional (as defined in C.R.S. 38-12-104(3)) for any hazardous condition involving gas piping, facilities, appliances, or equipment. Timelines to watch: a rebuttable presumption that you failed to act on time attaches at 7 days for life/health/safety conditions and 14 days for uninhabitable conditions.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-part5-nonwaivable-co",
    title: "Nothing in the Habitability Rules Can Be Waived",
    group: "Landlord Responsibilities",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "C.R.S. 38-12-503(10): except as Part 5 itself allows, any agreement waiving or modifying ANY right, remedy, obligation, or prohibition in Part 5 is void as contrary to public policy. This is broader than the other non-waiver rules already tracked - it is not limited to a specific right, it covers the entire habitability regime. Practical effect: no lease language can shorten the 24/72-hour response windows, waive the relocation obligation, disclaim the warranty of habitability, or contract around the record-keeping and notice duties. Also note the reverse: 38-12-503(3)(f)(II) says designating a verbal notice method in the lease waives YOUR right to insist on written notice - one of the few places where lease language can cost you something under Part 5.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Disclosures
  {
    id: "edu-rental-application-fairness-co",
    title: "Rules on Application Fees and Tenant Screening",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado's Rental Application Fairness Act (C.R.S. 38-12-901 et seq.) constrains the application stage, before any lease exists. In short: an application fee must reflect your actual cost to process the application, must be the same for every applicant for that property, and must be itemized on request. If an applicant provides a portable tenant screening report, you generally may not charge them an application fee at all - and you must tell applicants whether you accept portable reports. When screening, you generally may not consider rental or credit history older than 7 years, or criminal history older than 5 years, except for certain enumerated offenses (methamphetamine manufacture, offenses requiring sex-offender registration, homicide, and stalking). None of this belongs in the lease itself, but it governs how you get to a lease.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-source-of-income-exemption-trap-co",
    title: "Small-Landlord Exemption Applies to the Statement, Not the Duty",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Two different Colorado rules govern housing vouchers and they now have different exemptions - this is an easy trap. (1) The requirement to PRINT a source-of-income non-discrimination statement in the lease (C.R.S. 38-12-801(2.5)) still exempts landlords with five or fewer single-family rental homes and no more than five total units. (2) The requirement to actually ACCEPT vouchers (C.R.S. 24-34-502) no longer has any small-landlord exemption - HB25-1240 removed it effective May 29, 2025. So a small landlord may be exempt from printing the statement while still being fully obligated to accept vouchers. Being exempt from the disclosure is not being exempt from the duty.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Notices & General
  {
    id: "edu-tenant-insurance-claims-co",
    title: "You Cannot Push Habitability Repairs Onto the Tenant's Renter's Insurance",
    group: "Notices & General",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "C.R.S. 38-12-503(13): you may not require a tenant to submit a claim to their renter's insurance carrier to cover a cost or expense related to remedial action you are responsible for paying, and you may not file a claim against a tenant's renter's insurance policy at all without the tenant's express written permission given at the time the claim is submitted. Requiring renter's insurance in the lease remains fine - what you cannot do is treat that policy as a funding source for repairs Part 5 makes your responsibility.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Landlord Responsibilities
  {
    id: "edu-written-notice-strictly-required-co",
    title: "Habitability Notice Must Be Written - and Your Lease Can Accidentally Give That Up",
    group: "Landlord Responsibilities",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado requires WRITTEN notice before the habitability clock starts against you, and the courts enforce that strictly: Anderson v. Shorter Arms Investors, LLC, 2023 COA 71, 537 P.3d 831 holds that substantial compliance does not apply and that a tenant's oral notices are insufficient as a matter of law. That is a real protection - but C.R.S. 38-12-503(3)(f)(II) lets you throw it away by accident: if your lease or your property rules say a tenant may or must give notice verbally, you have waived your right to written notice. Never designate a phone number or any verbal method as the habitability-notice channel. Note also that 'written notice' is broad and does not have to come from the tenant - notice from a government entity, a third party, another tenant about a condition affecting multiple units, tenant correspondence with maintenance, or your own written observations can all count under (3)(e). Anderson also held that notice of mold or dampness not presently interfering with life, health, or safety must include permission to enter in order to be sufficient.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Default & Termination
  {
    id: "edu-no-fee-reciprocity-wy",
    title: "No Reciprocal Attorney-Fee Statute — One-Sided Fee Clauses Are Enforceable",
    group: "Default & Termination",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Colorado, where a lease clause awarding attorney's fees only to the landlord is void (C.R.S. 38-12-801(3)(a)(II)), Wyoming has no reciprocity statute. Wyoming follows the American Rule - each side pays its own fees unless a contract or statute says otherwise - and the Wyoming Supreme Court requires that a contract 'unequivocally provide' for fee recovery before fees can be awarded. A landlord-only fee provision would be enforceable in Wyoming. Note that your Steinoak lease nonetheless uses mutual prevailing-party language, which gives the tenant a reciprocal right Wyoming does not require. That is a deliberate choice, not a legal obligation.",
    notes: "WY added 2026-08-28, closing the edu-fee-shifting-co counterpart question. Confirmed: Circle Resources v. Hassler (2023 WY); Cowardin v. Finnerty (1999 WY, citing Coulter v. City of Rawlins). WY is NOT among the seven reciprocity states (CA, FL, HI, MT, OR, UT, WA); Drake Law Review survey places WY among 31 states with no protection against one-sided fee provisions. No WY analog to C.R.S. 38-12-801(3)(a)(II). | CHARACTERISATION TIGHTENED 2026-09-06 (from the ND re-audit session, at Taylor's direction, on the fee-shifting consolidation). This row described the Wyoming Supreme Court as requiring a contract to 'unequivocally provide' for fee recovery. The cases read differently and less strictly: the test is EXPRESS statutory or contractual AUTHORISATION -- Cowardin v. Finnerty (Wyo. 1999) ('absent statutory or contract language expressly authorizing recovery of attorney fees'); Emken, 2006 WY 112, ¶ 8; Thorkildsen v. Belden, 2012 WY 8, ¶ 10; Circle Resources v. Hassler, 2023 WY 22, ¶ 8. The reported failures are contracts SILENT on fees, not contracts whose fee language was insufficiently emphatic. WHY THE DIFFERENCE MATTERED: 'unequivocally provide' reads as a heightened magic-words standard and, applied to the shared default-by-tenant clause, generated a false flag that nearly produced an unnecessary WY-specific override and a permanent fork in a four-state clause. The row's substantive holding -- WY has no fee-reciprocity statute, follows the American Rule, and requires contractual or statutory authorisation -- is CORRECT and unchanged. Addendum E scoping: targeted correction to this row's characterisation of the standard only. No other WY holding was reviewed; this is not a WY re-audit and WY's last_checked should not be read as one.",
  },
  // Pets
  {
    id: "edu-service-animal-denial-penalty-ks",
    title: "Criminal Penalty for Denying a Service Animal in Rental Housing",
    group: "Pets",
    states: ["KS"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "In Kansas the criminal exposure around assistance animals runs toward the landlord, not the tenant. K.S.A. 39-1103 makes it a misdemeanor for any person, or the agent of any person, to deny or interfere with the rights recognized in K.S.A. 39-1101, 39-1102, 39-1107, 39-1108 and 39-1109 - and 39-1102 (guide dog), 39-1107 (hearing assistance dog) and 39-1108 (service dog) each expressly extend their right to \"the acquisition and use of rental, residential housing and... the purchase and use of residential housing without being required to pay an extra charge\" for the dog. Refusing one of these dogs in a rental, or charging a pet fee, deposit or pet rent for one, is therefore a crime in Kansas, not merely a fair housing violation. K.S.A. 39-1103 does not state a class, so it is an unclassified misdemeanor sentenced as a class C misdemeanor under K.S.A. 21-6602(a)(4): up to 1 month in county jail and a fine of up to $500. The tenant remains liable for any damage the dog does to the premises, which each of the three sections preserves expressly. This applies only to individually trained dogs - K.S.A. 39-1113(a) defines \"assistance dog\" as only a guide dog, hearing assistance dog or service dog, each \"specially selected, trained and tested,\" and 39-1113(f) excludes an animal kept for comfort, protection or personal defense. The act also covers dogs only, so a non-canine assistance animal falls outside it entirely and is governed by the Kansas Act Against Discrimination and federal fair housing law instead.",
    notes: "K.S.A. 39-1103, 39-1102, 39-1107, 39-1108, 39-1113(a),(f), 21-6602(a)(4), 21-6611. Full primary text read 2026-08-29. | NEW FINDING, KS re-audit. This INVERTS what the library previously recorded. The library carried Kansas's criminal exposure as running toward the tenant (39-1112 misrepresentation); the primary text shows the tenant-facing penalty does not reach housing at all, while a landlord-facing penalty does. See edu-service-animal-fraud-ks. | Class C default confirmed via K.S.A. 21-6602(a)(4) (unclassified misdemeanor with no penalty specified is sentenced as class C) and 21-6602(a)(3) (class C = up to 1 month). Fine ceiling per K.S.A. 21-6611. | CALIBRATION: no instance of 39-1103 being charged in a residential-landlord context was located, and no Kansas case law construing 39-1103 or 39-1112's housing reach exists. This is a textual determination on unambiguous scoping language, not a litigated one. Recorded as such. | The no-extra-charge rule here is express statutory text, so the no-pet-fee sentence in assistance-animal-accommodation rests on independent Kansas state law for individually trained dogs regardless of the federal position.",
  },
  // Disclosures
  {
    id: "edu-kaad-accommodation-duty-ks",
    title: "Kansas's Own Reasonable Accommodation and Modification Duties",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Separate from federal fair housing law, the Kansas Act Against Discrimination imposes its own housing duties. K.S.A. 44-1016(h)(3)(B) makes it discrimination to refuse to make reasonable accommodations in rules, policies, practices or services when necessary to afford a person with a disability equal opportunity to use and enjoy residential real property - this is the provision a request to waive a no-pets policy for an assistance animal falls under, and it does not mention animals or reference federal law. K.S.A. 44-1016(h)(3)(A) is a separate and narrower duty: permitting reasonable modifications of the existing premises, at the tenant's own expense, where necessary for full enjoyment. K.S.A. 44-1016(h)(7) preserves the ability to decline where the tenancy would constitute a direct threat to the health or safety of others or would result in substantial physical damage to the property of others. K.A.R. 21-60-16 bars requiring an increased security deposit from a person with a disability. Complaints are handled by the Kansas Human Rights Commission. Two limits worth knowing: the KAAD's disability definition excludes current illegal use of a controlled substance in housing discrimination (K.S.A. 44-1002(j)), and K.S.A. 44-1018(d) permits acting against a person convicted two or more times of the illegal manufacture or distribution of a controlled substance. These duties do not apply to a landlord who falls inside the small-landlord exemptions - see the Small-Landlord Exemptions item.",
    notes: "K.S.A. 44-1016(h)(3)(A),(B), (h)(7), 44-1002(j),(k), 44-1015(h), 44-1018(d); K.A.R. 21-60-16. Full primary text of 44-1016 and 44-1002 read 2026-08-29. | ESA/ASSISTANCE-ANIMAL DETERMINATION (KS re-audit). Kansas does not fit the three-way classification (independent statute / federally-tethered / no basis) used for CO and WY. Kansas SPLITS by animal type: (1) trained service animals have a STRONG independent basis - express housing rights in K.S.A. 39-1102/1107/1108 with a statutory no-fee rule and criminal backing at 39-1103; (2) ESAs are EXPRESSLY EXCLUDED from that statute by 39-1113(f), whose definitions apply to 39-1101 through 39-1109 per its own preamble, so the exclusion reaches the housing sections. An ESA basis, if it exists, runs only through this generic 44-1016(h)(3)(B) duty. | COMPARATIVE: WY's 35-13-201(c) permits the animal \"in accordance with the federal Fair Housing Act\" - federally tethered. Kansas's housing accommodation duty contains NO federal reference in its text, so on independence-from-federal-law Kansas is arguably STRONGER than Wyoming; on animal-specificity it is weaker than both CO and WY, since it never mentions animals. | OPEN / UNRESOLVED, do not overstate: (a) NO Kansas court - state or federal - has held the KAAD HOUSING provisions are construed in lockstep with the FHA. Employment-side lockstep is well established (Kinchion v. Cessna Aircraft Co., 504 F. Supp. 2d 1137, 1142 (D. Kan. 2007); Allen v. Garden City Co-op, 651 F. Supp. 2d 1249 (D. Kan. 2009)) but no decision extends it to housing. (b) NO Kansas case applies 44-1016(h)(3)(B) to an assistance animal or ESA. (c) Whether 44-1002(k)(1)'s employment-flavored \"reasonable accommodation\" definition constrains the housing duty is unresolved on the text and has never been litigated. (d) KHRC is HUD-certified \"substantially equivalent,\" which is real evidence of federal-facing practice notwithstanding independent text. Net position: textually independent, practically federal-facing, judicially untested. | Kansas rejected a dedicated ESA housing act four times (HB 2523/2019; SB 360 and S Sub HB 2057/2022; SB 170/2025) - proof of absence by legislative refusal, not silence.",
  },
  {
    id: "edu-kaad-housing-exemptions-ks",
    title: "Small-Landlord Exemptions from Kansas Fair Housing Duties",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas's housing discrimination provisions open with \"Subject to the provisions of K.S.A. 44-1018,\" so the exemptions are built into the operative section itself rather than sitting elsewhere as a separate limit. K.S.A. 44-1018(b) exempts two situations: the sale or rental of a single-family house by an owner who owns or has an interest in no more than three single-family houses at any one time and rents it without a real estate broker, agent or salesperson (limited to one such sale in any 24-month period if the owner was not the resident or most recent resident); and rooms or units in a building containing living quarters for no more than four families living independently, where the owner actually maintains and occupies one of those units as a residence. A landlord inside either exemption is outside K.S.A. 44-1016 in its entirety, including its disability accommodation and modification duties. One provision survives the exemption: the ban on discriminatory advertising, notices, statements and applications at K.S.A. 44-1016(c) applies regardless. The federal Fair Housing Act carries broadly parallel owner-occupied and single-family exemptions, so a landlord may fall outside both - but the two sets are not identical, and each must be checked on its own terms rather than assumed to match.",
    notes: "K.S.A. 44-1018(b),(c),(d), 44-1016 opening clause, 44-1016(c). Full primary text read 2026-08-29. | NEW FINDING, KS re-audit - was on no prior list. High practical impact given Steinoak's target user: a meaningful share of small Kansas landlords may have no state accommodation duty at all, which is a materially different analysis from the one in edu-kaad-accommodation-duty-ks. | The 44-1016 opening clause (\"Subject to the provisions of K.S.A. 44-1018\") was only visible once the full section was read; it strengthens the finding, because the exemption is incorporated by reference into the first clause of the operative section rather than being an external carve-out. | TRAP CLASS: identical in shape to the CO re-audit's source-of-income finding, where the lease-statement duty and the acceptance duty had MISMATCHED exemptions and one could not be assumed to cover the other. Here the accommodation duty is exempted but the advertising ban is not. | PROPOSED STANDING CANVASS ROW (not yet added to the checklist, awaiting Taylor): where a state has a housing accommodation or anti-discrimination duty, check its EXEMPTIONS separately from the duty itself. | NOT YET CHECKED: whether the federal FHA exemption boundaries actually align with 44-1018(b)'s in any given fact pattern. Stated in the row as a caution, not resolved.",
  },
  // Landlord Responsibilities
  {
    id: "edu-smoke-detector-requirements-ks",
    title: "Kansas Smoke Detector Rules and the Two Shields They Carry",
    group: "Landlord Responsibilities",
    states: ["KS"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Placement (K.S.A. 31-162(a)-(b)): every single-family residence needs at least one smoke detector on every story of the dwelling unit. A structure with multiple dwelling units, or a mixed-use structure containing at least one dwelling unit, needs at least one detector at the uppermost ceiling of each interior stairwell plus one on every story in each dwelling unit. Power source (31-162(d)): detectors in units that existed on January 1, 1999 may be battery-powered or wired and need not be interconnected, but detectors in units CONSTRUCTED AFTER January 1, 1999 must be wired permanently into the structure's electrical system - a hard threshold worth checking against your build year before assuming battery units are compliant. Two provisions work in your favor. First, K.S.A. 31-162(g): evidence that an owner failed to provide an operational smoke detector, and evidence that an occupant failed to properly maintain one, are both inadmissible in any action for the purpose of determining any aspect of civil liability. Second, K.S.A. 31-162(h): the Smoke Detector Act cannot be used as grounds to offset, reduce, or deny payment under any insurance contract or policy. Enforcement officials also may not enter a dwelling solely to check compliance, except during a pre-occupancy or building-permit inspection, when responding to a real fire, or during an owner- or occupant-requested home safety inspection (31-162(f)). Manufactured homes follow federal construction and safety standards instead, but their owners and occupants remain subject to the Act's testing and maintenance rules (31-162(e)).",
    notes: "K.S.A. 31-160 through 31-162; definitions at 31-161. Subsections (a)-(f) read from ksrevisor.gov 2026-08-29; (g) and (h) obtained 2026-08-30 via research and quoted from the Revisor's text. | The (g) and (h) shields were not visible in the section text initially retrieved and were found only by pursuing the section TITLE's reference to 'certain evidence inadmissible; insurance payments not affected.' Worth generalizing: read section titles for provisions the retrieved body text may have truncated. | (g) is unusually broad - it bars the evidence in ANY action for ANY aspect of civil liability, and it cuts both ways, protecting owner and occupant alike.",
  },
  {
    id: "edu-no-co-alarm-requirement-ks",
    title: "No Carbon Monoxide Alarm Requirement",
    group: "Landlord Responsibilities",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas has no state law requiring carbon monoxide alarms in residential rental property. Unlike the smoke detector duty, which is statutory, CO alarms in a Kansas rental are entirely voluntary as a matter of state law. Kansas does regulate CO detection in lodging establishments - hotels and motels - under K.A.R. 4-27-8, but that does not reach residential leases. Two cautions. A widely circulated claim that Kansas landlords must install CO alarms 'at the request of the renter' appears on at least one alarm manufacturer's website and is not supported by any Kansas statute. And if your property is in the Kansas City metro, check which side of the state line it sits on: Kansas City, Missouri municipal requirements do not apply in Kansas. Installing CO alarms anyway remains a reasonable safety decision, and a local ordinance may require them even though state law does not.",
    notes: "CONFIRMED ABSENT at the strongest available standard - not inference from silence. The complete section list of K.S.A. Chapter 31, Article 1 (Fire Safety and Prevention) was retrieved and contains NO carbon-monoxide section anywhere: 31-132, 31-132a, 31-133, 31-133a, 31-134, 31-134a, 31-135 through 31-139, 31-150, 31-150a, 31-157, 31-158, 31-159, then the Smoke Detector Act at 31-160/31-161/31-162. The Smoke Detector Act addresses smoke detectors only. | SOURCE REJECTED: Kidde (a CO alarm MANUFACTURER's marketing page) asserts Kansas landlords 'shall install carbon monoxide alarms at the request of the renter.' Unsupported by any primary source, contradicted by the statutory structure, and Kidde's own page carries a disclaimer that its summary is not authoritative. A Kansas City Fire Department battalion chief stated publicly that in a Kansas rental CO detectors are 'totally up to the landlord,' which matches the actual law. | This resolves the 5a.2 escalation raised during canvass pass 1: two searches produced conflicting sources and no primary text, so the question was escalated rather than searched a third time or shipped at VERIFIED. | K.A.R. 4-27-8 (lodging establishments) confirmed as the only Kansas CO regulation - same lodging-only scope as the bed bug regulations at K.A.R. 4-27.",
  },
  // Default & Termination
  {
    id: "edu-eviction-record-sealing-ks",
    title: "Eviction Expungement and Mediation — and Your Right to Object",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas changed its eviction law effective July 1, 2026 (Substitute for HB 2357), for eviction actions under the Residential Landlord and Tenant Act. Expungement is NOT automatic. A tenant must file for it electronically with the clerk of the district court, at no cost, under the docket number of the original eviction action, and must serve process on you by return receipt delivery. You then have 30 days after delivery to file an objection. If you do not object, the court decides without a hearing and PRESUMES any money judgment you were owed has been satisfied - so missing the 30-day window can cost you. If you do object, the court must hold a hearing. The court must grant expungement only if all three are met: three years have passed since judgment was entered; the tenant shows any money judgments owed to you are satisfied; and the tenant has no additional judgment in a covered eviction action within that three-year period. Two provisions work strongly in your favor. An unsatisfied money judgment blocks expungement entirely unless you agree to it. And if the tenant picks up another eviction judgment during the three years, the earlier judgment cannot be expunged until the later one becomes eligible. Expungement also does not wipe out the debt: it does not satisfy, extinguish, or otherwise affect any monetary obligation from the tenancy, and you keep the right to bring a separate action for rent or damages. On mediation, the court must consider mediation unless it finds mediation would not materially aid both parties or is impracticable. Trial in an RLTA eviction must still occur within 14 days of the appearance date, but where both parties are in court-ordered mediation the court may order a continuance of up to 14 days from the date of the mediation order. The Judicial Council is to develop the expungement form.",
    notes: "Substitute for HB 2357 (2026), effective 2026-07-01. Verified against the Kansas Legislative Research Department's 2026 Summary of Legislation, supplied by Taylor 2026-08-30 - the authoritative summary of the ENACTED substitute. | RESOLVED FROM NEEDS_REVIEW. Waiting period confirmed: THREE YEARS, not two. The two-year figure came from the INTRODUCED bill and did not survive into the Substitute. | MATERIAL CORRECTION - the v59/v60 row was wrong on the MECHANISM, not just the number. Prior row described automatic sealing of court files 'accessible only to the tenant, the court, and the clerk,' automatic sealing where a case is dismissed or the tenant prevails, limited public-housing-authority access, and KCPA liability for disseminating sealed data. NONE of that appears in the enacted substitute as summarized by KLRD. The enacted law is a DEFENDANT-INITIATED EXPUNGEMENT process, not an automatic sealing regime. Those features were in the introduced version and were dropped or restructured in substitute. | ROOT CAUSE, worth recording: the v59 row was built from a research summary that blended reporting on the introduced bill with reporting on the enacted one. This is the same failure mode as the CO carpet-lookback error (superseded draft read as enacted text), now recurring at the bill-substitute level rather than the bill-draft level. A bill that becomes a Substitute must be re-read in its enacted form; reporting on the introduced version is not evidence of what passed. | MISSED ENTIRELY by the prior row, and the single most landlord-relevant feature of the law: the 30-day right to OBJECT, and the presumption AGAINST the landlord (money judgment presumed satisfied) that applies if no objection is filed. Also missed: unsatisfied money judgment blocks expungement absent landlord agreement; a subsequent eviction judgment tolls expungement of the earlier one; expungement does not extinguish the debt or bar a separate action; the 14-day mediation continuance. | CITATION CAUTION: Taylor also supplied the current published text of K.S.A. 61-3804, 61-3806 and 61-3807 from ksrevisor.gov. NONE shows a 2026 amendment - 61-3807's history ends at L. 2010, and its continuance provision does not contain the new 14-day mediation continuance. So either the expungement provisions were enacted as NEW sections rather than amendments to these, or the Revisor's published text does not yet reflect the 2026 session. DO NOT cite K.S.A. 61-3804/61-3806/61-3807 for these rules until the amended text is actually published; cite Substitute for HB 2357 (2026). | STILL UNREAD: the enrolled bill text itself. The KLRD summary is authoritative and detailed but is still a summary. Exact statutory language and section numbers should be confirmed when the Revisor publishes the 2026 amendments.",
  },
  // Rent & Payment
  {
    id: "edu-nsf-fee-cap-ks",
    title: "Returned-Check Service Charge Capped at $30",
    group: "Rent & Payment",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas caps the service charge on a dishonored check at $30 (K.S.A. 60-2610(g)). Separately, K.S.A. 60-2610(a) creates civil liability for a worthless check: you may recover the amount of the check, court costs, the service charge, interest at the statutory rate, collection costs including reasonable attorney fees, plus the greater of (i) treble damages capped at the check amount plus $500 or (ii) $100 - but only after making a written demand and allowing 14 days for payment (60-2610(b)). Note that the attorney-fee recovery here comes from this statute, not from a lease provision, so it does not conflict with Kansas's flat ban on attorney-fee clauses in leases.",
    notes: "K.S.A. 60-2610(a),(b),(g), read from ksrevisor.gov. | Refutes the '$20 statutory cap' claim that was found circulating and repeated by secondary sources during a prior state's session. The correct figure is $30. | RELATED DECISION (Taylor, 2026-08-30): the generic returned-payments clause says Landlord 'may charge Tenant any fee associated with the failed payment,' with no cap and no self-limiting language. Flagged as a possible conflict with this $30 figure. Taylor's call: LEAVE AS IS. Reasoning recorded - 60-2610(g) caps the service charge the drawee/vendor imposes, and the landlord under this clause is recovering that charge as a pass-through loss rather than setting a fee of its own, so the effective ceiling is $30 regardless. No override written; no self-limiting language added. | The 14-day written demand at 60-2610(b) is a precondition to the enhanced damages, not to recovering the check amount - worth not conflating.",
  },
  {
    id: "edu-rent-control-preemption-ks",
    title: "Rent Control Is Preempted Statewide",
    group: "Rent & Payment",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "No Kansas county, city, or township may enact or enforce rent control, or control the purchase price of real estate (K.S.A. 12-16,120). This is a statewide preemption, so no Kansas municipality can impose a rent cap or rent-stabilization ordinance on your property. Kansas also has no state rent-increase notice statute: a rent increase on a month-to-month tenancy is effected through the same 30-day written notice used to terminate that tenancy (K.S.A. 58-2570(b)), and rent under a fixed-term lease cannot be raised mid-term unless the lease itself provides for it.",
    notes: "K.S.A. 12-16,120 (Chapter 12, Cities and Municipalities - outside the KRLTA); K.S.A. 58-2570(b). | Closes the CO re-audit canvass row on rent-increase notice. Colorado's C.R.S. 38-12-701(2) 60-day notice applies ONLY where there is no written agreement, creating a gap for written month-to-month leases. Kansas has NO analogous gap because it has no dedicated rent-increase statute at all - the 30-day mechanism at 58-2570(b) is not conditioned on the absence of a written agreement. | CITATION CAUTION: RentCheckMe miscited the preemption statute as both '12-16,128' and '58-2545' in different places on its own site. The correct citation is 12-16,120. Another instance of the overconfident-secondary-source pattern. | Note 58-2570(b) also provides a shortened 15-day notice for military tenants under orders - not yet captured in any KS clause; flagged for a future pass. | The Mobile Home Parks Act has its own written-rent-increase-notice provision at 58-25,109, but that act is deprioritized by product decision and does not govern ordinary residential rentals.",
  },
  // Notices & General
  {
    id: "edu-lease-term-limitation-ks",
    title: "One-Year Cap on Leases Formed by Conduct",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a rental agreement takes effect through conduct rather than full signature - because you accepted rent without reservation, or because the tenant took possession under an agreement you signed and delivered but they did not - Kansas caps its term at one year. K.S.A. 58-2546(c): if such an agreement provides for a term longer than one year, it is effective only for one year. This does NOT cap a fully signed and delivered written lease; the KRLTA imposes no maximum term on those. The practical point is narrow but real: a long-term arrangement that was never properly executed by both parties will not hold for its stated term.",
    notes: "K.S.A. 58-2546(a),(b),(c). | Closes the NE-originated 'long-term lease exclusion / limitation on term' canvass row. The answer is narrower than Nebraska's - Kansas does not exclude long-term leases from the KRLTA; it caps only agreements given effect by operation of 58-2546. | Interacts with 58-2566's 'without reservation' language, already captured in edu-late-rent-acceptance-waiver-ks and edu-late-rent-reservation-fix-ks - the same phrase governs both lease formation by conduct and waiver by accepting late rent. Worth noting that a single statutory phrase carries two distinct consequences in Kansas.",
  },
  // Landlord Responsibilities
  {
    id: "edu-habitability-notice-written-ks",
    title: "Tenant Habitability Notice Must Be in Writing",
    group: "Landlord Responsibilities",
    states: ["KS"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A Kansas tenant's right to terminate for a habitability breach requires WRITTEN notice as a strict element. K.S.A. 58-2559(a) provides that the tenant may deliver a written notice specifying the acts and omissions constituting the breach and stating that the rental agreement will terminate on a periodic rent-paying date not less than 30 days after receipt - and your 14-day period to cure runs from that written notice. An oral complaint does not start the clock. Kansas imposes no operational duties beyond the repair itself: no deadline to contact the tenant with your intentions or an estimate, no duty to inform the tenant of any relocation right, no record-retention requirement, no mold containment protocol, and no licensed-professional requirement for specific hazards. Kansas also imposes no obligation to house a tenant or pay relocation costs during repairs.",
    notes: "K.S.A. 58-2559(a); K.S.A. 58-2553. | Closes TWO CO re-audit canvass rows at once. (1) Verbal-notice waiver trap: CONFIRMED ABSENT. Colorado's C.R.S. 38-12-503(3)(f)(II) means designating a phone number as the notice method surrenders the landlord's right to insist on written notice - Kansas has no counterpart, and no Kansas case law analogous to Anderson v. Shorter Arms, 2023 COA 71 was found holding oral notice insufficient or addressing lease-designated verbal methods. Recorded as 'no authority found,' not as law affirmatively permitting verbal designation. (2) Operational duties beyond the repair: CONFIRMED ABSENT - none of Colorado's 24-hour contact, relocation-notification, record-retention, 72-hour mold/HEPA, or gas-hazard licensing duties exist in Kansas, and no K.A.R. or KDHE layer was found imposing them. | Practical implication worth flagging for a future pass: because 58-2559 requires written notice, a KS lease should not invite a phone number as the habitability notice method - the CO trap does not apply as a matter of law, but the drafting habit is still worth avoiding.",
  },
  // Disclosures
  {
    id: "edu-no-rental-application-regulation-ks",
    title: "No Rental Application or Tenant Screening Regulation",
    group: "Disclosures",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas does not regulate the rental application or tenant screening process at all. There is no cap on application fees and no prohibition on charging them, no portable-screening-report rule, no limit on how far back criminal or rental history may be considered, and no state adverse-action or denial-notice requirement. Kansas also has no statute restricting consideration of an applicant's criminal history. The constraints that do apply come from elsewhere: the federal Fair Credit Reporting Act governs adverse-action notices where a consumer report is used, and federal fair housing law together with the Kansas Act Against Discrimination limits screening practices that discriminate against a protected class or produce a discriminatory effect.",
    notes: "CONFIRMED ABSENT. Closes a checklist row that had been carried forward unresolved for Kansas across multiple sessions and was explicitly flagged as LOWER RESEARCH CONFIDENCE than the equivalent WY and ND findings. Now resolved definitively rather than inferred from silence: multiple independent sources including Nolo state affirmatively that Kansas has no application-fee law or cap and no statute prohibiting consideration of applicants' criminal histories. | Kansas has no analog to Colorado's Rental Application Fairness Act. | Note this is an APPLICATION-STAGE topic; the CO log treats application-stage rules as out of scope for lease content, so this row is reference education rather than a lease-clause driver.",
  },
  // Tenant Responsibilities
  {
    id: "edu-no-renters-insurance-restriction-ks",
    title: "Renter's Insurance Is Unregulated in Kansas",
    group: "Tenant Responsibilities",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas neither requires renter's insurance nor restricts your ability to require it. You may make renter's insurance a lease condition and may require that you be named as an additional insured. Kansas also has no equivalent to Colorado's rule barring a landlord from requiring a tenant to claim on the tenant's own policy for landlord-responsible repair costs, or from filing against that policy without the tenant's express written permission. This is an unregulated area in Kansas, so the lease governs.",
    notes: "CONFIRMED ABSENT. Closes the CO re-audit canvass row on C.R.S. 38-12-503(13). No Kansas statute restricts pushing landlord-responsible remedial costs onto a tenant's renter's policy, and none restricts requiring the coverage. Corroborated by multiple independent insurer sources (GEICO, Farmers, American Family) confirming Kansas does not mandate renter's insurance but permits landlords to require it by lease. | The CO row's companion instruction was to confirm no state's tenants-property-insurance clause crosses the CO line. For Kansas the line does not exist, so no conflict - but note tenants-property-insurance-ks remains flagged separately for the 58-2547(a)(4) exculpation question (see edu-prohibited-lease-terms-ks), which is a different issue.",
  },
  // Default & Termination
  {
    id: "edu-no-environmental-event-termination-ks",
    title: "No Environmental-Event Termination Right",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas gives a landlord no statutory right to terminate a lease because of a sudden environmental public health event, a government order rendering occupancy impossible or unlawful, or condemnation. The only Kansas casualty-termination provision is K.S.A. 58-2562, which covers fire or casualty damage and grants the right to the TENANT, not the landlord. Unlike Colorado - where the landlord's environmental-event termination right exists only if the lease provides for it, so a silent lease forfeits it - there is no Kansas statutory right here to opt into. If you want any termination right in these circumstances, it has to be built as a contract term and will stand or fall on ordinary contract principles.",
    notes: "CONFIRMED ABSENT. Closes the CO re-audit canvass row on C.R.S. 38-12-503(11). Full Article 25 section list reviewed; no section addresses environmental events, public-health orders, government-ordered closure, or condemnation. | This row matters because the CO finding was framed as HIGH VALUE precisely on the theory that a silent lease might be forfeiting a statutory right. For Kansas the answer is that there is no right to forfeit - so the library is not silently costing Kansas landlords anything here.",
  },
  {
    id: "edu-no-expedited-criminal-eviction-ks",
    title: "No Expedited Eviction Track for Criminal Activity",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas has no expedited or shortened eviction procedure for drug activity, violent crime, or other criminal conduct on the premises. An eviction based on criminal activity proceeds on the ordinary track: the notice requirements of K.S.A. 58-2564 and the limited-actions procedure in Chapter 61. There is no faster hearing window and no immediate-eviction trigger. A 1998 bill that would have created a 'Kansas expedited eviction of drug traffickers act' with a 7-day hearing window died in the legislature and was never enacted.",
    notes: "CONFIRMED ABSENT. Closes the NE-originated canvass row. Kansas SB 668 (1998) proposed the act; the bill text is retrievable but the measure died and appears nowhere in the K.S.A. Nothing in the KRLTA, Chapter 61, or Chapter 22 enacts it. | PROOF OF ABSENCE BY LEGISLATIVE REFUSAL, the strongest standard this project recognizes - the same posture as the four failed Kansas assistance-animal housing bills. | NAMING TRAP, flagged for future states: Pennsylvania (1995 Act 23) and North Carolina (G.S. 42-59 through 42-76) DO have enacted 'Expedited Eviction of Drug Traffickers' acts, and they dominate search results for this phrase. Do not let another state's enacted act be read as Kansas law. | Prior sessions attributed this row to 'HB 668'; the measure was SB 668. Corrected here.",
  },
  {
    id: "edu-military-termination-notice-ks",
    title: "Termination Notice Periods for Periodic Tenancies",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas sets three different notice periods for ending a periodic tenancy, all under K.S.A. 58-2570. A week-to-week tenancy: either party may terminate on at least 7 days' written notice before the termination date stated in the notice (58-2570(a)). A month-to-month tenancy: either party may terminate by written notice stating the tenancy ends on a periodic rent-paying date not less than 30 days after receipt (58-2570(b)). Military exception: not more than 15 days' written notice is needed to end a periodic tenancy where the tenant is in the military service of the United States AND termination is necessitated by military orders. Two limits on that exception are worth noting. It runs to the TENANT only - it does not shorten the notice a landlord must give a military tenant. And it requires both conditions, military service and orders necessitating the termination, not merely military status. This sits alongside, and is separate from, the federal Servicemembers Civil Relief Act termination rights referenced in the Early Termination clause. Finally, a rental agreement for a definite term of more than 30 days is not a month-to-month tenancy even if rent is payable at 30-day intervals (58-2570(b)).",
    notes: "K.S.A. 58-2570(a),(b). Full subsection text read 2026-08-30 from ksrevisor.gov, corroborated verbatim by FindLaw, Justia and LawServer. | RESOLVED FROM NEEDS_REVIEW. Shipped at NEEDS_REVIEW in v60 because the 15-day military figure came from a research summary rather than primary text. Reading the statute corrected TWO things the v60 row got wrong or left uncertain: the exception runs to the TENANT ONLY (v60 left open whether it bound both parties), and it requires BOTH military service AND orders necessitating termination, not military status alone. | NEW FINDING IN THE SAME SUBSECTION, not previously captured for Kansas: 58-2570(a)'s 7-day week-to-week termination notice. The library had no KS week-to-week notice period at all. Found only because resolving the NEEDS_REVIEW flag required reading the whole section rather than the one clause in question - the same lesson as the smoke-detector (g)/(h) recovery earlier this session. | Also captured: the definite-term-over-30-days carve-out, which prevents a fixed-term lease being treated as month-to-month merely because rent is paid monthly. | ADDED TO CHECKLIST as a new canvass row. CO, WY, NE, MN, SD and ND have never been checked for either a military-shortened notice period or a distinct week-to-week notice period.",
  },
  // Notices & General
  {
    id: "edu-no-double-letting-ks",
    title: "No Double-Letting Rent Relief",
    group: "Notices & General",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas has no statute addressing double-letting - renting the same room to more than one tenant. Unlike North Dakota, where the first tenant is entitled to the whole room and every other tenant in the building under that landlord is relieved of all rent obligations for as long as the double-letting continues, Kansas imposes no statutory penalty of that kind. A double-letting dispute in Kansas would be resolved under ordinary contract and possession principles.",
    notes: "CONFIRMED ABSENT. No analog to N.D.C.C. 47-16-26. Full K.S.A. Chapter 58 Article 25 section list reviewed; nothing addresses double-letting. | Row created 2026-08-30 (v60). Originally judged too low-value to warrant a library row and recorded in the decision log only. Taylor overruled that call, correctly: a logged-only absence is invisible in the library, so a future state's canvass would have to re-derive it - which is the specific failure the every-absence-gets-a-row standard exists to prevent.",
  },
  // Default & Termination
  {
    id: "edu-no-fraud-termination-statute-ks",
    title: "No Statutory Fraud-Inducement Termination Right",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas has no statute letting a party who was induced into a lease by fraudulent misrepresentation terminate it and recover the deposit plus accrued interest. North Dakota has such a provision; Kansas does not. A Kansas party claiming fraudulent inducement relies on general contract and common-law fraud principles - rescission and damages - and potentially the Kansas Consumer Protection Act, which treats residential leasing as a consumer transaction and prohibits deceptive and unconscionable acts.",
    notes: "CONFIRMED ABSENT. No analog to N.D.C.C. 47-16-07.4. | The KCPA fallback is real and worth noting rather than treating this as a bare absence: K.S.A. 50-623 et seq. applies to residential leasing, with unconscionable acts at 50-627 and deceptive acts at 50-626. See edu-consumer-protection-act-ks. | Row created 2026-08-30 (v60), same reasoning as edu-no-double-letting-ks.",
  },
  // Rent & Payment
  {
    id: "edu-no-payment-method-fee-ban-ks",
    title: "No Restriction on Payment-Method Fees",
    group: "Rent & Payment",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas does not restrict what a landlord may charge in connection with a particular rent payment method. North Dakota bars charging a fee merely for accepting cash, a check, or a money order; Kansas has no equivalent, so a convenience or processing fee tied to a payment method is a matter for the lease. This is separate from a returned-payment charge, where Kansas does impose a limit - see the Returned-Check Service Charge item.",
    notes: "CONFIRMED ABSENT. No analog to N.D.C.C. 47-16-20.1 (2025). | Deliberately cross-references edu-nsf-fee-cap-ks so the two are not conflated: Kansas is unregulated on payment-method fees but DOES cap the dishonored-check service charge at $30 under K.S.A. 60-2610(g). The ND statute itself draws this same distinction. | Row created 2026-08-30 (v60); previously noted only on returned-payments.",
  },
  // Default & Termination
  {
    id: "edu-termination-outside-eviction-ks",
    title: "Termination Mechanisms Outside the Eviction Process",
    group: "Default & Termination",
    states: ["KS"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "For a residential tenancy governed by the Kansas Residential Landlord and Tenant Act, termination runs through the Act's own notice-and-cure structure - K.S.A. 58-2564 for tenant noncompliance and K.S.A. 58-2559 for landlord noncompliance - followed, if necessary, by the limited-actions eviction procedure in Chapter 61. Kansas does not provide a separate direct-termination mechanism for KRLTA tenancies of the kind North Dakota gives its landlords and tenants. Kansas does retain an older body of termination provisions at K.S.A. 58-2501 through 58-2533, covering tenancies at will, year-to-year tenancies, and farm and pastureland tenancies, with their own notice rules. Those govern arrangements that fall outside the KRLTA rather than standard residential leases, and where the two overlap the KRLTA controls.",
    notes: "MIXED VERDICT, not a clean absence - which is why it earns a row rather than a log line. No analog to N.D.C.C. 47-16-16/47-16-17 for KRLTA tenancies, but Kansas does retain the pre-1975 block at 58-2501 through 58-2533 (58-2501 tenancies at will; 58-2504 termination of tenancy at will; 58-2505 year-to-year; 58-2506/2506a farm and pastureland; 58-2507 leases of three months or longer; 58-2508 tenancies under three months for nonpayment; 58-2509 when notice to quit is unnecessary; 58-2510 service of notice). | That pre-1975 block is DEPRIORITIZED by product decision (farm/agricultural tenancies are not an expected use case for target landlords, revisitable on customer demand) and has never been audited section by section. This row records its existence and function without claiming its contents are verified. | Row created 2026-08-30 (v60).",
  },
  // Landlord Responsibilities
  {
    id: "edu-no-modification-duty-ne",
    title: "Nebraska's Service-Animal Statute Requires No Property Modification — But Federal Law Still Might",
    group: "Landlord Responsibilities",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska's service-animal housing statute expressly does not require you to modify your property: 'Nothing in sections 20-131.01 to 20-131.04 shall require any person who rents, leases, or provides housing accommodations for compensation to modify such person's property in any way to accommodate the special needs of any lessee' (§20-131.03). Read that narrowly — it limits the STATE SERVICE-ANIMAL scheme only. The Nebraska Fair Housing Act, a different statute, separately makes it discrimination to refuse 'to permit, at the expense of the person with a disability, reasonable modifications of existing premises' where necessary for full enjoyment (§20-319(2)(a)) — though in a rental you may, where reasonable, condition permission on the tenant restoring the interior afterward, reasonable wear and tear excepted. So: you need not modify at your own cost under the service-animal statute, but you generally must PERMIT tenant-funded modification under the Fair Housing Act. Treating §20-131.03 as a general 'no modifications' rule would be a serious misread.",
    notes: "Neb. Rev. Stat. §20-131.03 (primary text read directly). NOT surfaced by the research pass — found only by reading the sub-scheme's sections in sequence rather than jumping to the operative one. Landlord-favorable on its face, which is exactly why it needs the federal-law boundary stated alongside it. The federal modification citation (42 U.S.C. §3604(f)(3)(A)) is from general knowledge, NOT read from primary source this session — verify before relying. | UPGRADED 2026-08-31: §20-319(2)(a) primary text now read directly, so the counterpart duty is cited to NEBRASKA law rather than to an unverified federal recollection. The tension is INTRA-state (§20-131.03 vs §20-319(2)(a)), which is a sharper finding than the state-vs-federal framing this row originally carried. The restoration-condition allowance is express in the statute and is landlord-favorable — now stated. | 2026-09-06 (ND re-audit session): repaired a Python tuple-repr serialization artifact in bodyText -- the field opened with a parenthesis-quote and closed with quote-comma-parenthesis, i.e. shipped landlord-facing text carrying stray delimiters. Text content is UNCHANGED; only the wrapping delimiters and escaped quotes were removed. Found incidentally during ND's trunk verification. Per Addendum E this is a repair to another state's row made from an ND session: no substantive NE legal content was reviewed, revised, or re-verified, and this edit does not constitute re-verification of the row's NE holdings.",
  },
  // Pets
  {
    id: "edu-assistance-animal-carveout-mismatch-ne",
    title: "Two Different Owner-Occupied Carve-Outs That Do Not Line Up",
    group: "Pets",
    states: ["NE"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has two separate owner-occupied carve-outs with DIFFERENT scopes, and they do not align. (1) The service-animal housing scheme excludes, by definition, 'any single-family residence in which the owner lives and in which any room is rented, leased, or provided for compensation to persons other than the owner or primary tenant' (§20-131.02(1)) — with NO cap on the number of rooms. (2) The Nebraska Fair Housing Act separately lets a person refuse to rent 'a room or rooms in his or her own home for any reason or for no reason,' but that exception stops applying to anyone renting 'more than four sleeping rooms' (§20-322(3)). Consequence: if you live in your own single-family home and rent out five rooms, the Fair Housing Act applies to you — including its reasonable-accommodation duty — while the service-animal statute's no-additional-deposit rule does not, because your property was never a 'housing accommodation' under that scheme at all. Do not assume one carve-out implies the other.",
    notes: "Neb. Rev. Stat. §20-131.02(1) and §20-322(3), both read from primary text. Directly answers the KS re-audit canvass row 'Housing anti-discrimination duty — check the EXEMPTIONS separately from the duty.' Kansas's trap was that KAAD §44-1018(b) exempts small landlords from the duty while the advertising ban survives. Nebraska's trap is a different shape: two carve-outs in two different acts, covering overlapping but non-identical populations, neither of which is a federal-style Mrs. Murphy exemption. §20-322 read in full — it contains NO exemption for owners of a limited number of single-family houses rented without a broker, and none for owner-occupied multi-unit buildings. Nebraska did not adopt the federal exemptions.",
  },
  {
    id: "edu-service-animal-denial-penalty-ne",
    title: "Denying a Service Animal Is a Crime in Nebraska — and the Exposure Runs at You",
    group: "Pets",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska attaches criminal liability to the LANDLORD, not the tenant. Under §20-129(1), a person who 'denies or interferes with' the rights of a person with a disability 'under section 20-127 or sections 20-131.01 to 20-131.04' is guilty of a Class III misdemeanor — and that section list expressly names the housing sections, so it reaches rental housing directly. A Class III misdemeanor carries up to three months' imprisonment and a $500 fine. There is NO Nebraska statute penalizing a tenant for misrepresenting a pet as a service or assistance animal. If you are weighing whether to challenge an animal, the asymmetry matters: wrongly refusing carries criminal exposure; being deceived does not give you a criminal remedy. One narrow limit worth knowing: §20-129(2)'s protection for a bona fide service-animal TRAINER is scoped only to §20-127 (public facilities) and does not extend to the housing sections.",
    notes: "Neb. Rev. Stat. §20-129 (primary text read directly). SCOPING ANSWER for the KS re-audit canvass row 'Does the misrepresentation-penalty statute reach HOUSING? (scoped by place-list vs by act)': Nebraska follows the WYOMING pattern — scoped by SECTION LIST, and the list expressly includes 20-131.01 to 20-131.04, so it reaches housing. Opposite of Kansas, whose 39-1112 is scoped to 'any place listed in K.S.A. 39-1101' and does not reach housing. Also answers the KS row 'Landlord-facing criminal penalty for DENYING an assistance animal' — PRESENT in Nebraska, same inversion Kansas found. Class III misdemeanor penalty figures (3 months / $500) are from §28-106, NOT read from primary source this session — verify. The trainer-scope limit in §20-129(2) was found by reading the full section, not the summary.",
  },
  {
    id: "edu-esa-federal-only-ne",
    title: "Emotional Support Animals Get No Nebraska State-Law Housing Right",
    group: "Pets",
    states: ["NE"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska's service-animal housing right (§§20-131.01 to 20-131.04) turns on the term 'service animal,' which Nebraska defines statewide by reference to 28 C.F.R. 36.104 'as such regulation existed on January 1, 2008' (§49-801(20)) — a frozen definition that did NOT follow later federal changes. The 2008 text covers 'any guide dog, signal dog, or other animal individually trained to do work or perform tasks' for a person with a disability. Two consequences, and neither matches what you'd get from reading today's federal rule: (1) SPECIES IS OPEN. Nebraska's definition is not limited to dogs. A trained cat, miniature horse, or other animal can qualify. The federal dogs-only limit arrived in 2010, two years after Nebraska's freeze date, and never entered Nebraska law. This is broader than Kansas, whose assistance-animal act is dogs-only. (2) EMOTIONAL SUPPORT ANIMALS ARE STILL OUTSIDE THE STATE RIGHT, but only by implication — the animal must be 'individually trained to do work or perform tasks,' and an untrained comfort animal is not. The 2008 text contains no express emotional-support exclusion; that sentence was also added in 2010. So the exclusion is weaker and less explicit than Kansas's, which names comfort animals directly. None of this lets you refuse an ESA. The federal Fair Housing Act's reasonable-accommodation duty and the Nebraska Fair Housing Act's own duty (§20-319(2)(b)), enforced by the Nebraska Equal Opportunity Commission, both still reach assistance animals including ESAs. What changed federally is HUD's ENFORCEMENT posture, not the law: HUD withdrew its assistance-animal guidance on 2025-09-17 and on 2026-05-22 narrowed FHEO enforcement to individually-trained animals. Private suits and NEOC enforcement are not bound by HUD's enforcement priorities. Accommodating documented ESAs remains the safe course.",
    notes: "Neb. Rev. Stat. §49-801(20) read from primary text and CONFIRMED verbatim. Definitional linkage to §20-131.04 is strong: Laws 2008, LB806 amended BOTH §49-801 (§12, adding the service-animal definition) and §20-131.04 (§10) in the same bill — so the definition was enacted alongside the housing section, not imported across unrelated acts. Caveat: §49-801's preamble is 'Unless the context is shown to intend otherwise,' so it is a rebuttable default. *** NEEDS_REVIEW REASON — §5a.2 corollary. *** The ESA-exclusion conclusion and the species-scope conclusion BOTH rest entirely on the content of 28 C.F.R. 36.104 as it existed 2008-01-01, which was NOT read from primary source this session. Recollection is that the pre-2011 text read 'any guide dog, signal dog, or other animal individually trained to do work or perform tasks' — species-OPEN but training-GATED, which would make Nebraska broader than Kansas on species (KS is dogs-only) and equivalent on ESA exclusion by a different mechanism (KS excludes ESAs expressly at 39-1113(f); NE excludes them silently via the training requirement). That is a load-bearing federal-regulation snapshot standing on memory. Do not ship VERIFIED until the 2008-vintage C.F.R. text is read. The HUD two-event timeline is from secondary sources (NLIHC, practitioner blogs) with FR Docket FR-6571-N-01 cited but not read. | *** 2026-08-31 — VERSION TRAP IDENTIFIED, AND IT IS THE DANGEROUS KIND. *** The 28 C.F.R. 36.104 text supplied is the CURRENT version, not the January 1, 2008 version Nebraska froze to. Its own amendment history settles which version applies: '[Order No. 1513-91, 56 FR 35592, July 26, 1991, as amended by AG Order No. 3181-2010, 75 FR 56250, Sept. 15, 2010; 76 FR 13287, Mar. 11, 2011; AG Order 3702-2016, 81 FR 53240, Aug. 11, 2016]' — the FIRST amendment after 1991 was in 2010. Therefore the regulation as it existed 2008-01-01 IS the original 1991 text at 56 FR 35592, unamended. THE TRAP: the CURRENT text reads 'any DOG that is individually trained' and expressly states that 'provision of emotional support, well-being, comfort, or companionship do not constitute work or tasks.' Anyone reading the current C.F.R. and applying it to §49-801(20) would conclude Nebraska is DOGS-ONLY with an EXPRESS ESA exclusion. That is very likely wrong — the dog-only limitation and the express ESA sentence both entered via the 2010 order, two years AFTER Nebraska's freeze date. Same error shape as CO's carpet-lookback (superseded/wrong-version text read as operative) and KS's HB 2357 (introduced bill read as enacted) — third occurrence, first time via a statutory freeze-date mechanism. STILL NEEDS_REVIEW: the 1991 text itself has not been read. Recollection is 'any guide dog, signal dog, or other animal individually trained to do work or perform tasks' — species-OPEN, training-GATED, and WITHOUT the express ESA sentence. If so, the ESA conclusion survives (by implication from 'individually trained') but the SPECIES conclusion flips to open, making Nebraska broader than Kansas's dogs-only act. Need: 28 C.F.R. 36.104 as published at 56 FR 35592 (July 26, 1991). | *** RESOLVED 2026-08-31 — VERIFIED, species conclusion FLIPPED to open. *** Chain of proof, recorded because the reasoning is what makes this reliable, not any single document: (1) Neb. §49-801(20) freezes to 28 C.F.R. 36.104 as of 2008-01-01 [PRIMARY, read]. (2) The current C.F.R.'s own amendment history shows the first amendment after the 1991 original was AG Order No. 3181-2010, 75 FR 56250 (Sept. 15, 2010) [PRIMARY, read] — so no amendment was in force between 1991 and 2010, and the 2008-01-01 text IS the 1991 original. (3) DOJ's own Title III NPRM, published in the Federal Register 2008-05-30 — five months AFTER the freeze date and while the text was still in force — quotes 'the current regulation' verbatim as 'any guide dog, signal dog, or other animal individually trained to do work or perform tasks... including, but not limited to, guiding individuals with impaired vision, alerting individuals with impaired hearing to intruders or sounds, providing minimal protection or rescue work, pulling a wheelchair, or fetching dropped items' [QUASI-PRIMARY: the promulgating agency quoting its own regulation contemporaneously, in an official rulemaking document; read via a Federal Register archive reproduction, not the bound CFR volume]. (4) animallaw.info independently reports identical 1991 language for the parallel Title II regulation at 28 C.F.R. 35.104 [SECONDARY corroboration]. The residual gap is narrow and recorded: the bound 1991 CFR page itself has not been read, and the 2008 annual CFR edition exists only as non-searchable scans. Given (2) forecloses any intervening amendment and (3) is the agency's own contemporaneous quotation, this meets the VERIFIED bar; a further chase would add provenance, not accuracy. VERSION TRAP CONFIRMED AND AVOIDED: today's §36.104 reads 'any DOG that is individually trained' and expressly excludes 'emotional support, well-being, comfort, or companionship.' Both features arrived in 2010. Anyone applying the current federal text to §49-801(20) would wrongly conclude Nebraska is dogs-only with an express ESA carve-out. Third instance in this project of a wrong-version reading (CO's carpet lookback: superseded draft; KS's HB 2357: introduced vs. enacted), and the first arriving through a statutory freeze-date mechanism — a distinct failure mode worth its own canvass row, since any 'as it existed on [date]' incorporation by reference creates it.",
  },
  // Disclosures
  {
    id: "edu-protected-class-inquiry-ban-ne",
    title: "Nebraska Bars You From Even ASKING About Protected Characteristics",
    group: "Disclosures",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska goes further than a bare non-discrimination rule. Under §20-318(5) it is unlawful to 'cause to be made any written or oral inquiry or record concerning the race, color, religion, national origin, disability, familial status, sex, or military or veteran status of a person seeking to purchase, rent, or lease any housing.' This bans the INQUIRY and the RECORD, not just the decision — so a rental application form, a screening questionnaire, or a note-to-file capturing any of these characteristics is itself unlawful, regardless of whether it ever influenced an outcome. Review your application forms and any CRM or note-taking fields against this list. Separately, §20-318(6) bans including, honoring, or attempting to honor any restrictive covenant pertaining to housing — worth checking against HOA documents you pass through to tenants.",
    notes: "Neb. Rev. Stat. §20-318(5), (6) — primary text read directly 2026-08-31. GENUINELY NEW TOPIC, on no prior state's canvass and not in the checklist. An inquiry-and-record ban is materially broader than the federal FHA's structure and has direct product consequences for tenant-screening forms — a class of exposure the library has never modelled. Add as a new canvass row: check every state for an inquiry/record ban distinct from its discrimination ban. Note also that §20-318 is prefaced 'Except as exempted by section 20-322,' so the ADVERTISING ban at §20-318(3) is SUBJECT TO the §20-322 exemptions rather than surviving them — the opposite of the federal rule, where 42 U.S.C. §3604(c) survives the Mrs. Murphy exemptions.",
  },
  // Landlord Responsibilities
  {
    id: "edu-smoke-detector-scope-ne",
    title: "Which Nebraska Buildings the Smoke Detector Mandate Reaches — Effectively All of Them",
    group: "Landlord Responsibilities",
    states: ["NE"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Two Nebraska sections work together. §81-5,144 says WHO is responsible: the owner supplies, installs, maintains and tests; the tenant tests and reports deficiencies once occupying for a month or more; the tenant replaces batteries, but they must be working at move-in. §81-5,142 creates the requirement to HAVE detectors, and it reaches essentially every residential building through three subsections: (1) dwelling units, apartment houses, lodging-house guest rooms and dormitories constructed or remodeled on or after January 1, 1982; (2) guest rooms and dormitories constructed before that date, which had to comply by January 1, 1984; and (3) dwelling units in dwellings and apartment houses constructed before January 1, 1982, plus mobile homes and modular housing units. The 1982 date is a phase-in boundary, not a coverage limit — all the deadlines are decades past, so assume the mandate applies to your Nebraska rental regardless of when it was built. Detectors must meet the State Fire Marshal's rules and regulations.",
    notes: "Neb. Rev. Stat. §§81-5,142 and 81-5,144, both read from nebraskalegislature.gov. *** SELF-CORRECTION, SAME SESSION. *** This row was created earlier today at NEEDS_REVIEW carrying a caveat that a pre-1982, never-remodeled building might fall OUTSIDE the smoke-detector mandate entirely. That caveat was WRONG. It rested on an NCSL-sourced multistate compilation that quoted only §81-5,142(1) — the post-1982 subsection — and I treated a partial quotation as if it were the whole section. Reading §81-5,142 directly shows subsections (2) and (3) sweep in pre-1982 lodging houses, dormitories, dwelling units, mobile homes, and modular housing units, with compliance deadlines now decades expired. Coverage is effectively universal and the original clause's unconditional statement of the duty was correct. Worth recording as a methodology data point: this is the same failure mode this session documented elsewhere (reading part of a text and generalizing from it), committed BY the re-audit rather than found by it, and caught only because the row was parked at NEEDS_REVIEW rather than shipped. The over-include-and-flag discipline is what surfaced it. Residual gap: subsection (3)'s exact compliance deadline was truncated in the retrieved text. Immaterial — every deadline in the section is long past and the coverage conclusion does not turn on it.",
  },
  // Notices & General
  {
    id: "edu-electronic-notice-regime-ne",
    title: "Nebraska's 2025 Electronic Notice Rules — Including One More Thing Your Lease Cannot Do",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska added a detailed electronic-notice regime in 2025 (§76-1413, Laws 2025, LB185). Notices and documents under a rental agreement may be delivered electronically, but only on strict conditions. Start with the one that constrains your lease: you may not require a tenant to accept electronic delivery as part of the rental agreement or as a condition of entering into or renewing it (§76-1413(9)). That is a prohibition on lease terms sitting OUTSIDE the main prohibited-provisions section, so it is easy to miss. To use electronic delivery you need the tenant's affirmative, un-withdrawn consent, given after you provide a clear statement of: their right to withdraw consent at any time with no conditions or consequences; which notices it covers; their right to a paper copy by mail and how to get one; and how to withdraw consent or update their address. The tenant must also receive your hardware and software requirements beforehand and must consent in a way demonstrating they can actually access that format. If those requirements later change materially, you must re-disclose and re-obtain consent. Where a law requires verification or acknowledgment of receipt, electronic delivery is permitted only if your method provides it — and if you don't get it, you must send by mail. If two electronic communications bounce within a thirty-day period, all future notices must go by first-class or other mail until the tenant re-consents in a way showing they can receive them. You must also fall back to another method if you have reason to believe a notice wasn't received or learn the address is no longer valid. Withdrawal of consent does not retroactively invalidate notices already delivered.",
    notes: "Neb. Rev. Stat. §76-1413, read verbatim from the full-act fetch 2026-08-31. Laws 2025, LB185, §2. *** ENTIRELY ABSENT FROM THE LIBRARY BEFORE THIS SESSION — no NE row cited §76-1413 at all. *** A 2025 statute of real operational significance, and §76-1413(9) is in substance a FIFTH prohibited lease provision that does not live in §76-1415 — which is exactly why edu-prohibited-lease-terms-ne, built off §76-1415 alone, missed it. Generalizable lesson for every state: a prohibited-provisions section is not necessarily the complete list of things a lease may not do. NO CONFLICT with existing clauses — the shared `notices` and `electronic-signatures` clauses were checked and neither REQUIRES electronic delivery of notices, so neither trips §76-1413(9). `electronic-signatures` concerns EXECUTION of the lease, a different question from DELIVERY of notices under it. Transition provisions at §76-1413(13)-(14) (consent on file before 2025-09-03) noted, not restated.",
  },
  // Access & Entry
  {
    id: "edu-ouster-and-entry-remedies-ne",
    title: "What Self-Help and Bad Entry Practice Actually Cost in Nebraska",
    group: "Access & Entry",
    states: ["NE"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Two Nebraska remedies carry hard numbers worth knowing before you act. UNLAWFUL OUSTER OR CUTTING OFF ESSENTIAL SERVICES (§76-1430): if you unlawfully remove or exclude a tenant, or willfully and wrongfully interrupt electricity, gas, water, or another essential service, the tenant may recover possession or terminate — and in either case recover an amount equal to three months' periodic rent as liquidated damages, plus a reasonable attorney's fee. Liquidated means they need not prove actual loss. Separately, §76-1436 bars recovering possession by any means other than a court action, abandonment, or surrender, and names service interruption as a prohibited means. There is no lawful self-help lockout in Nebraska. ABUSE OF ENTRY (§76-1438(2)): if you enter unlawfully, enter lawfully but in an unreasonable manner, or make repeated lawful-but-harassing demands for entry, the tenant may obtain an injunction or terminate the lease, and may recover actual damages of not less than one month's rent, plus reasonable attorney's fees. Note the floor — a minimum recovery whether or not any real loss is proven. The mirror provision at §76-1438(1) protects you: if a tenant refuses lawful access, you may compel it or terminate and recover actual damages and fees.",
    notes: "Neb. Rev. Stat. §§76-1430, 76-1436, 76-1438, read verbatim 2026-08-31. NO NE ROW CITED ANY OF THESE BEFORE THIS SESSION. Both remedies are landlord-facing exposure with STATUTORY FLOORS rather than proof-of-loss damages, making them materially more dangerous than the library previously conveyed. edu-entry-notice-content-ne already covered the §76-1423(3) anti-harassment rule but stated no consequence for breaching it; this row supplies the number. Cross-check: §76-1430's measure is 'three months' periodic rent' — the same time-based construction mis-paraphrased as a multiplier in the holdover and possession-delay rows — stated correctly here from the outset.",
  },
  // Default & Termination
  {
    id: "edu-periodic-termination-notice-ne",
    title: "Termination Notice for Periodic Tenancies - Two Different Periods",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska sets two different notice periods depending on the tenancy. A week-to-week tenancy ends on at least SEVEN days' written notice; a month-to-month tenancy ends on at least THIRTY days' written notice (§76-1437(1)-(2)). Either party may give it. There is a drafting difference between the two that is easy to miss: the seven-day clock runs to 'the termination date specified in the notice,' but the thirty-day clock runs to 'the periodic rental date specified in the notice.' So a month-to-month termination notice must be keyed to a rent-due date, not an arbitrary calendar date - getting that wrong can invalidate the notice.",
    notes: "Neb. Rev. Stat. §76-1437(1),(2), primary text. NEW ROW - the library had no NE periodic-termination-notice row at all. edu-no-for-cause-eviction-ne referenced the 30-day month-to-month figure in passing while making a different point, and the week-to-week 7-day period appeared nowhere. Answers the checklist row 'Distinct week-to-week termination notice' - PRESENT for NE. The termination-date vs periodic-rental-date distinction is in the statutory text and was not previously captured anywhere in the library.",
  },
  {
    id: "edu-servicemember-termination-ne",
    title: "Servicemember Early Termination - Nebraska's Statute Is Narrower Than the Federal One",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has its own servicemember termination statute at §55-702, separate from the URLTA and expressly in addition to the federal Servicemembers Civil Relief Act. Where it applies: the servicemember gives written or electronic notice plus a copy of the orders. For a monthly-rent lease, termination takes effect thirty days after the first date the next rent payment is due after notice is delivered; for any other rental agreement, it takes effect on the last day of the month following the month notice was delivered. You may not impose an early-termination charge. Within sixty days of the termination date you must refund all rent paid for any period past that date, and the deposit is returned subject to §76-1416. The servicemember still owes anything already due and unpaid at termination. One provision to watch: if the servicemember re-rents from you within ninety days of returning from service, you may not charge any penalty, fee, loss of deposit, or additional cost because of the earlier termination — only the usual and customary charges any other tenant would pay. The statute does not impair contracts in existence before July 19, 2018. SCOPE: for residential leases this section is understood to reach only the case where the servicemember is required to move into government-owned or leased housing. For the far more common deployment or PCS situation out of a civilian rental, the operative right is the FEDERAL SCRA, not this statute.",
    notes: "Neb. Rev. Stat. §55-702 (Chapter 55, Laws 2018, LB682). NEW ROW - no NE row cited it; early-termination-ne referenced only the federal SCRA generically. FIFTH adjacent chapter to yield a real NE finding (Ch. 20, 81, 76-6xx, 28, now 55), now the single most reliable pattern of this re-audit. SOURCE CONFLICT FLAGGED: at least one legal-content site (DocDraft) states Nebraska adds no state servicemember early-termination right - true of the URLTA but wrong as to Nebraska law overall. The opposite error is likelier in practice: treating §55-702 as a general deployment-termination right for civilian rentals, which its government-housing limitation does not support. | PARTIALLY VERIFIED AGAINST PRIMARY TEXT 2026-08-31. Subsections (4) through (9) read verbatim and now reflected in the body: (4) no early-termination charge; (5) sums already due and unpaid remain owed; (6) the ninety-day re-rental protection barring any penalty, fee, loss of deposit or additional cost — previously ABSENT from this row and genuinely landlord-relevant; (7) sixty-day refund of rent paid past the termination date, deposit under §76-1416; (8) TWO effective-date rules, monthly leases thirty days after the next rent due date and all OTHER rental agreements the last day of the following month — the second rule was previously missing entirely; (9) pre-2018-07-19 contracts unimpaired. *** STILL UNVERIFIED: subsection (2)(f). *** The supplied text references '(2)(f)' repeatedly but does not contain it, and (2)(f) is the load-bearing subsection — the entire government-housing scope limitation rests on it and remains sourced to the research pass, not primary text. The scope sentence in the body is deliberately hedged ('is understood to reach') rather than stated flatly. Resolve by reading §55-702(1)-(3) before relying on the scope limit in either direction; the optimistic misread (treating this as a general deployment right) is the more dangerous one. | CONFIRMED 2026-09-17 via Claude Browser primary-source verification, closing the last PARTIAL item from the NE re-audit. §55-702(2)(f) quoted verbatim: 'A lease of residential rental property... if the servicemember is required to move into government-owned or leased housing.' The scope limitation is exactly as this row's body text was hedged to describe -- CONFIRMED, not just assumed. STRUCTURAL TRAP worth recording for future states: §55-702(1) states a broad relocation trigger that reads like a general right; the narrowing condition for LEASES specifically lives one level down, in subdivision (2)(f) -- the other five contract types in (2)(a)-(e) get the broad trigger with no such condition. Reading only (1) and stopping reaches the wrong (broader) answer. Same failure shape as the carbon-monoxide-alarm-requirement-ne error (reading §§76-603/604/605 and never reaching §76-606, the general provisions of an act rather than the one written for landlords) -- extend the project's 'read whole sections' rule to mean reading every subdivision of a scope provision, not just the operative subsection above it.",
  },
  // Rent & Payment
  {
    id: "edu-rent-increase-and-rent-control-ne",
    title: "Raising Rent, and Nebraska's 2025 Rent-Control Preemption",
    group: "Rent & Payment",
    states: ["NE"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no dedicated rent-increase notice statute for ordinary rentals. During a fixed term you cannot raise rent unless the lease allows it. On a periodic tenancy you change rent through the same mechanism you would use to end it - thirty days' written notice for month-to-month, seven for week-to-week (§76-1437) - and Nebraska draws no distinction between an oral and a written month-to-month tenancy for this purpose. Watch a common trap: many sources state a flat sixty-day rent-increase requirement for Nebraska. That sixty-day rule is §76-1490 and applies to MOBILE HOME space tenancies only, not to ordinary rentals. Separately, since 2025 Nebraska preempts local rent control. §13-331 bars any city, village, or county from enacting or enforcing an ordinance imposing rent controls on private property, applies notwithstanding any home rule charter, and makes a violating ordinance null and void. It carves out ordinances that increase affordable-housing supply through land-use or inclusionary-housing requirements, and voluntary programs where an owner agrees to rent restrictions.",
    notes: "Neb. Rev. Stat. §76-1437, §76-1490, §13-331 (Laws 2025, LB266). NEW ROW - the library had NOTHING on NE rent increases or rent control. §13-331 sits in CHAPTER 13 (political subdivisions), not Chapter 18 or 76 - a sixth adjacent chapter. Two secondary-source traps recorded: (1) the 60-day figure is mobile-home-only, and mobile home parks are a standing out-of-scope category for this library, so importing it would be wrong twice over; (2) pre-2025 pages still say Nebraska does not preempt local rent control - outdated. Answers the CO re-audit checklist row on rent-increase notice for oral vs written month-to-month: Nebraska has NO such split, unlike Colorado.",
  },
  // Default & Termination
  {
    id: "edu-no-eviction-record-sealing-ne",
    title: "No Eviction Record Sealing in Nebraska",
    group: "Default & Termination",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no statute allowing sealing, expungement, or restricted access to eviction (forcible entry and detainer) records. Two attempts failed: LB175 in 2024, defeated by filibuster, and LB92, the Residential Tenant Clean Slate Act, introduced January 2025, carried over, and indefinitely postponed on April 17, 2026. Because no statute exists, there is also no landlord right to object to a sealing petition - the question does not arise. Eviction filings remain publicly accessible court records.",
    notes: "CONFIRMED ABSENT. Checked Chapter 76 and Chapter 25. LB92 (DocumentID 59109) final status 'Indefinitely Postponed' 2026-04-17 per the Legislature's bill history. Proof of absence by legislative refusal, twice - the same standard applied to Kansas's rejected ESA bills and Nebraska's own failed assistance-animal bills. MONITOR: reintroduction would flip this row. Note this is a genuinely recent event (April 2026), well after the original NE pass, so it would have been unknowable then. | SCOPED DOWN 2026-08-31 per §5a.2 corollary: the ABSENCE is the claim and it rests on a direct review of Chapters 76 and 25 — that stays VERIFIED. The BILL HISTORY detail (LB175 filibustered 2024; LB92 DocumentID 59109 indefinitely postponed 2026-04-17) is corroborating colour sourced to the research pass, NOT read from the Legislature's bill-history page by this session. Treat the dates and document number as unconfirmed; the conclusion does not depend on them.",
  },
  // Landlord Responsibilities
  {
    id: "edu-confirmed-absences-habitability-ne",
    title: "Colorado-Style Habitability Protections Nebraska Does Not Have",
    group: "Landlord Responsibilities",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Four habitability-adjacent protections that exist in Colorado have no Nebraska equivalent. (1) NO BLANKET NON-WAIVER: Nebraska has no habitability-specific non-waivability section. Habitability rights are non-waivable only through the general bar at §76-1415(1)(a), and §76-1419(2)-(3) actually permits shifting certain maintenance duties to the tenant by separate written agreement for good consideration, provided it is not a device to evade your obligations. (2) NO VERBAL-NOTICE RULE: Nebraska does not address whether a lease may designate oral notice as sufficient. The URLTA specifies 'written notice' wherever it matters (§§76-1425, 76-1427, 76-1431, 76-1437), so oral notice will not satisfy those provisions regardless. (3) NO RENTER'S-INSURANCE BAN: Nebraska does not prohibit requiring renter's insurance, and does not specifically bar pushing landlord-responsible repairs onto it - though §76-1415(1)(d) independently voids clauses exculpating or indemnifying you for your own active and actionable negligence. (4) NO OPERATIONAL DUTIES: Nebraska imposes no duty to respond within a set time, communicate, document, or give notice of remediation. Its structure is tenant-remedy-triggered - the tenant gives written notice and statutory clocks then govern the tenant's remedies.",
    notes: "CONFIRMED ABSENT x4, closing four CO re-audit checklist rows for NE. Full URLTA reviewed. Recorded as one row rather than four because they share a root: Nebraska is a light-touch 1974 URLTA state that never received Colorado's 2019-2024 habitability overlay. Contrast noted for the mobile home act, §76-1475(2), which EXPRESSLY permits requiring tenant liability insurance naming the landlord - covering tenant negligence, not landlord-responsible repairs; do not read that as authority for the general rental case, and mobile homes are out of scope regardless.",
  },
  // Notices & General
  {
    id: "edu-confirmed-absences-misc-ne",
    title: "Other Provisions Nebraska Does Not Have",
    group: "Notices & General",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "NEEDS_REVIEW",
    bodyText:
      "Four more confirmed absences, each of which exists in a neighboring state. (1) NO PAYMENT-METHOD FEE BAN IDENTIFIED: no Nebraska statute was found prohibiting or capping a convenience fee for a particular rent payment method. The only Nebraska convenience-fee statutes, §13-609 and §81-118.01, govern GOVERNMENT payees and do not reach private landlords. Any such fee remains subject to the unconscionability doctrine at §76-1412. (2) NO FRAUDULENT-MISREPRESENTATION TERMINATION: unlike North Dakota, Nebraska has no statutory right to terminate for a false rental application. Your route is to incorporate the application into the lease as a representation, making a material falsehood a breach under §76-1431(1), backed by common-law fraud and rescission preserved by §76-1403. (3) NO DOUBLE-LETTING STATUTE: no Nebraska analog to North Dakota's ban on letting the same room twice with a rent-abatement remedy; the nearest provision is the general failure-to-deliver-possession remedy at §76-1426. (4) NO SMOKE-DETECTOR EVIDENTIARY OR INSURANCE SHIELD: unlike Kansas, whose statute makes non-compliance inadmissible on civil liability and bars insurers from reducing payment, Nebraska's series contains no such protection. Its only liability-adjacent language is the narrow no-violation-without-notice defense in §81-5,144.",
    notes: "CONFIRMED ABSENT x4, closing ND and KS re-audit checklist rows for NE. Checked Chapters 76, 45, 13, 81 and the full URLTA. The smoke-detector finding is the sharpest: Kansas's K.S.A. 31-162(g)-(h) shields have NO Nebraska counterpart in §§81-5,132 to 81-5,146, so a Nebraska landlord's non-compliance carries civil-liability exposure a Kansas landlord's does not - which makes carbon-monoxide-alarm-duty-ne and smoke-detector-duty-ne MORE important in NE than the same clauses would be in KS. OPEN, flagged not hidden: the exact penalty grade in §81-5,146 ('Violations; penalty') was not retrieved from primary source - the Legislature site's comma-formatted URL mis-resolves to §81-146, a repealed section. Existence, title, and absence of any shield are confirmed; only the misdemeanor class is open. | DOWNGRADED TO NEEDS_REVIEW 2026-08-31 per §5a.2 corollary. Three of the four absences here rest on this session's own direct reading: double-letting and fraudulent-misrepresentation termination on the full URLTA read, and the smoke-detector shield absence on §81-5,144 plus the §§81-5,132 to 81-5,146 series structure. Those are solid. The PAYMENT-METHOD FEE BAN absence is different: it rests on the research pass's review of Chapter 45, which this session did not read. Chapter 45 is large and a fee provision could sit in it unread. Language softened from 'Nebraska does not prohibit' to 'no Nebraska statute was found,' which is what is actually supported. A negative cannot be closed by pasting text — resolve by a targeted Chapter 45 read, or leave standing as an identified-not-proven absence.",
  },
  // Rent & Payment
  {
    id: "edu-no-all-in-pricing-law-ne",
    title: "No All-In Pricing or Fee-Transparency Law in Nebraska",
    group: "Rent & Payment",
    states: ["NE"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Nebraska has no analog to Colorado's Honest Pricing Act or any other statute requiring that advertised rent disclose mandatory fees, or that fees be bundled into a single all-in price. You may advertise base rent and disclose mandatory fees separately in the lease. Three real limits still apply. Nebraska's unconscionability doctrine sits inside the URLTA itself at §76-1412, letting a court refuse to enforce an unconscionable agreement or provision. Separately, §76-1415(2) makes a prohibited provision unenforceable and exposes you to actual damages and attorney's fees if you deliberately use one you know is prohibited. And federal unfair-and-deceptive-practices rules on fee disclosure apply regardless of state law. Disclosing mandatory recurring fees clearly and up front is the safer practice even though Nebraska does not compel it.",
    notes: "CONFIRMED ABSENT. *** CANVASS PASS 2 CATCH - a proof-of-absence violation, not a research gap. *** The consolidated checklist already recorded this topic as 'Confirmed absent' for NE from the original pass, but NO CSV ROW WAS EVER CREATED. That is precisely the failure the proof-of-absence standard exists to prevent: a logged-only absence is invisible to every future canvass, because a canvass reads the library, not the checklist's prose. Pass 1 of this re-audit did not catch it either - pass 1 worked from the structurally-unchecked set and the research batch, and this row sat in the 49 'carrying original-pass values' bucket that was supposed to be treated as suspect. Pass 2's lexical coverage sweep over the whole NE corpus found it. Direct vindication of the two-pass rule AND of Taylor's instruction to treat the 49 as suspect rather than done. Nebraska's unconscionability doctrine (§76-1412) is native to the URLTA, structurally unlike Kansas's external Consumer Protection Act backstop - so the KS row's 'real nuance not a clean absence' caveat does NOT transfer to Nebraska in the same form.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-fair-housing-protected-classes-mn",
    title: "Minnesota's Protected Classes Go Beyond Federal Law",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The Minnesota Human Rights Act (Minn. Stat. § 363A.09) protects more classes in housing than federal law does. In addition to the federal list, Minnesota protects creed, marital status, status with regard to public assistance, sexual orientation, gender identity, and familial status. 'Status with regard to public assistance' is the one that most often catches landlords out — refusing an applicant because they pay with a Section 8 voucher or other housing assistance is a protected-class problem in Minnesota, not a neutral business decision. Narrow exemptions exist (§§ 363A.21, 363A.22, 363A.26), mainly for a resident owner-occupier renting a room in a one-family home and for certain nonprofit and religious housing.",
    notes: "MN added (MN re-audit 2026-09-03) — PROOF-OF-ABSENCE VIOLATION FIX. MN log §13 recorded this as 'Present, broader than federal' with the note 'Not yet logged as its own row/education entry — flag for a future session,' and it never was. Zero MN rows mentioned §363A, fair housing, or protected classes before this row. Same failure shape as the NE re-audit's rental-fee-transparency catch, but WORSE: a confirmed-absent topic with no row is merely invisible to future canvasses, whereas a PRESENT topic with no row means the generated MN lease is missing content it should carry. Protected-class list confirmed against §363A.09 operative text; the list was NOT expanded by 2024-2026 session laws. | MN re-audit 2026-09-03, canvass pass 2: 'source-of-income lease-statement duty vs acceptance duty, and whether the exemptions differ' canvass topic resolved for MN. Minnesota has NO separate source-of-income lease-STATEMENT duty — 'status with regard to public assistance' is simply an enumerated protected class in §363A.09, so the acceptance duty and any statement obligation arise from the same provision and carry the SAME exemptions (§§363A.21, .22, .26). This differs from states that impose a standalone voucher-acceptance statute with its own exemption set. Recorded here rather than as a separate row because the answer is a property of this row's own statute.",
  },
  {
    id: "edu-protected-class-inquiry-record-ban-mn",
    title: "Minnesota Bans Protected-Class Inquiries and Records, Not Just Discrimination",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Separately from the ban on discriminating, Minn. Stat. § 363A.09 subd. 1(3) and subd. 2(3) make it unlawful to make or cause to be made any record or inquiry, written or oral, in connection with a prospective rental that expresses any limitation or discrimination as to a protected class. This reaches your application form, your screening questions, and the notes and custom fields in your property-management software — not just your rental decision. A field that records an applicant's religion, national origin, or public-assistance status is a problem even if you never act on it. Unlike the federal rule, Minnesota's inquiry and advertising ban IS subject to the statutory exemptions in §§ 363A.21, 363A.22, and 363A.26, so a landlord who genuinely qualifies for one of those narrow exemptions is outside it.",
    notes: "MN added (MN re-audit 2026-09-03): resolves one of the ten NE re-audit canvass rows previously marked 'not checked for any state but NE' — the protected-class INQUIRY AND RECORD ban, NE analog §20-318(5). MN answer: PRESENT, at §363A.09 subd. 1(3) and 2(3). Also resolves the companion NE row 'does the advertising ban SURVIVE the exemptions, or is it subject to them?' — for MN it is SUBJECT TO them (the statutory NOTE to §363A.09 states exemptions are covered under §§363A.21, 363A.22, 363A.26), which is the same answer NE reached and the OPPOSITE of the federal rule, where 42 U.S.C. §3604(c) survives the Mrs. Murphy exemption. Directly relevant to Steinoak product design (application forms, CRM fields), not only lease text.",
  },
  {
    id: "edu-retaliation-protections-mn",
    title: "Minnesota's Retaliation Rules, Including Immigration Reporting",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota bars retaliating against a tenant for complaining about a violation or for organizing. Under Minn. Stat. § 504B.441 you may not evict, increase obligations, or decrease services as a penalty for a tenant's good-faith complaint, and § 504B.285 subd. 2 gives the tenant a retaliation defense in an eviction action. If the adverse action falls within 90 days of the protected activity, the burden is on YOU to show a non-retaliatory reason. Minnesota added a tenant-organizing provision in 2024 (§ 504B.212 subd. 2) that also expressly bars contacting federal or state law enforcement about a tenant's immigration status in retaliation — penalty up to $1,000 per occurrence plus attorney fees. The practical takeaway: document your non-retaliatory reason contemporaneously, because the 90-day window puts the burden on you.",
    notes: "MN added (MN re-audit 2026-09-03) — second PROOF-OF-ABSENCE VIOLATION FIX. MN log §13 recorded retaliation as Present (§504B.441 + §504B.285 subd. 2 + the 2024 immigration-reporting addition) with 'Not yet logged as its own CSV row — candidate for a future session'; never done. Zero MN rows mentioned retaliation before this row. The immigration-reporting bar is at §504B.212 subd. 2 (2024 c 118), i.e. inside the tenant-organizing section — note this is a DIFFERENT provision from the immigration-status-INQUIRY bans, which in Minnesota are municipal (Minneapolis, April 2026), not statewide. Do not conflate the two; MN's statewide protection is retaliation-based only.",
  },
  {
    id: "edu-rent-control-preemption-mn",
    title: "Minnesota Lets Cities Adopt Rent Control by Referendum",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minn. Stat. § 471.9996 bars cities, counties, and towns from adopting rent control on private residential property — but with a significant exception: a local rent-control ordinance IS permitted if it is approved at a general election. Minnesota is therefore not a clean preemption state. St. Paul has an enacted, in-effect rent-stabilization ordinance adopted under this exception; Minneapolis voters authorized rent stabilization in 2021 but no ordinance has been enacted, so no cap currently applies there. If you operate in St. Paul, check the current ordinance before setting any increase.",
    notes: "MN added (MN re-audit 2026-09-03): resolves the NE re-audit canvass row 'rent-control preemption' (NE §13-331, KS 12-16,120) for MN. MN's answer is materially DIFFERENT from NE and KS — those are flat preemption; §471.9996 subd. 2 carves out voter-approved local ordinances, which is why St. Paul's Chapter 193A exists at all. Do not record MN as 'preemption present' without this qualifier. St. Paul specifics (3% standard cap, permanent post-2004 new-construction exemption adopted May 2025) are municipal and flagged, not resolved, consistent with the standing municipal-scope boundary.",
  },
  // Pets
  {
    id: "edu-service-animal-misrepresentation-scope-mn",
    title: "Minnesota's Service-Animal Fraud Crime Does Not Reach Housing",
    group: "Pets",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has a criminal penalty for misrepresenting an animal as a service animal (Minn. Stat. § 609.833), but it is written for a 'place of public accommodation' — defined as a business, accommodation, refreshment, entertainment, recreation, or transportation facility whose goods or services are made available to the public. A leased dwelling is very unlikely to fit: the Human Rights Act treats housing and real property as a separate category from public accommodations, and a tenancy is not extended to the public at large. So you should not expect this crime to cover a tenant who misrepresents a pet as a service or support animal, and you should not threaten a tenant or applicant with criminal prosecution over a rental application. Your actual remedy is the one in § 504B.113: where documentation is fraudulent or the tenant knowingly misrepresents a disability or the need for an animal, you may deny the application or the accommodation request, and nothing in that section prevents an eviction based on a breach of the lease.",
    notes: "MN added (MN re-audit 2026-09-03): confirms and now formally logs the scope caveat MN §24 reached but never gave its own row. ALSO RESOLVES A FREEZE-DATE TRAP (NE re-audit canvass row, previously unchecked for MN): §609.833 subd. 1(2) defines 'service animal' by reference to 28 C.F.R. §36.104 'as amended through March 1, 2018' — a FROZEN incorporation. By contrast §504B.113 subd. 1(b), the housing statute, uses 'as amended' — a DYNAMIC reference tracking current federal text. So Minnesota's two service-animal definitions can diverge over time. This is the opposite of Nebraska's problem (NE froze its HOUSING definition to the 2008 C.F.R.); in MN the freeze sits on the criminal statute, which does not reach housing anyway, so the practical exposure is low — but the divergence is real and should not be flattened. | REFINED 2026-09-03: §363A.03 subd. 34 read from primary text — the definition relied on for this row's scope conclusion. Full text: 'a business, accommodation, refreshment, entertainment, recreation, or transportation facility of any kind, whether licensed or not, whose goods, services, facilities, privileges, advantages or accommodations are extended, offered, sold, or otherwise made available to the public.' THE PRIOR VERSION OVERSTATED CERTAINTY. It asserted flatly that the crime 'does not cover' a tenant misrepresenting a pet. The statute contains NO express housing carve-out, and the word 'accommodation' appears inside the definition — a litigant could argue from it. The conclusion is a STRUCTURAL INFERENCE, well supported but not express: (a) the MHRA treats housing/real property (§363A.09) and public accommodations (§363A.11) as separate categories with separate prohibitions and separate policy declarations at §363A.02; and (b) a leased dwelling is not 'made available to the public.' Row now says 'very unlikely to fit' and 'should not expect,' which is what the text supports. GENUINE NUANCE NOT PREVIOUSLY CONSIDERED, flagged rather than buried: a public-facing LEASING OFFICE plausibly IS a place of public accommodation in its own right, so a misrepresentation made there during an application is not as cleanly outside §609.833 as a misrepresentation by a sitting tenant. This does not change the practical advice — do not threaten prosecution — but it means the negative should not be stated as categorical. The freeze-date finding (§609.833 subd. 1(2) locks 'service animal' to 28 C.F.R. §36.104 as amended through March 1, 2018, while §504B.113 subd. 1(b) is dynamic) is unaffected and stands as previously logged.",
  },
  {
    id: "edu-esa-independent-basis-mn",
    title: "Minnesota Has Its Own Support-Animal Law, Independent of Federal Guidance",
    group: "Pets",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota does not leave assistance animals to federal law alone. Minn. Stat. § 504B.113 independently regulates both service animals and support animals in housing, and it defines a support animal as one providing emotional support that alleviates symptoms of a disability, expressly noting such an animal 'does not need to be trained to perform a specific disability-related task.' You may not charge a pet deposit, pet rent, or other pet fee for a qualifying animal, you may request documentation only from a 'licensed professional' as the statute defines that term, and you may not demand medical records or access to the tenant's providers. Minnesota also uses its own state definition of disability rather than a federal one. One important limit: the statute defines 'reasonable accommodation' as a waiver of a no-pets or pet-fee policy 'consistent with the Fair Housing Act ... and section 504 of the Rehabilitation Act,' so while Minnesota's support-animal definition and documentation rules are its own, the accommodation standard itself still tracks federal law. Watch federal developments rather than assuming Minnesota fully insulates you.",
    notes: "MN added (MN re-audit 2026-09-03): resolves the CO re-audit's ESA-independent-basis canvass row for MN, previously unchecked. CLASSIFICATION: category 1 — independent, animal-specific, housing-express statute (same category as NE; stronger than KS, which has a generic duty and expressly excludes ESAs, and stronger than WY, which is federally tethered). Species-open: §504B.113 does not limit support animals to dogs, unlike K.S.A. 39-1102's dogs-only scope. QUALIFIER, surfaced rather than smoothed over: §504B.113 subd. 1's definition of 'reasonable accommodation' still cross-references the federal Fair Housing Act and Rehabilitation Act, so while the ESA DEFINITION is independent, the accommodation TRIGGER remains partly federally tethered. MN is therefore strong but not fully insulated. | CORRECTED 2026-09-03, same session: §504B.113 read in full (revisor.mn.gov PDF) after this row was drafted from the extended-research summary. MY EARLIER FRAMING OVERSTATED MINNESOTA'S INSULATION. The prior body text told landlords their ESA obligations 'rest on state law and are not affected by' HUD's 2025 guidance withdrawal and 2026 narrowed enforcement standard. That is too strong. Subd. 1(f) defines 'reasonable accommodation' as a waiver of a no-pets or pet-fee policy 'consistent with the Fair Housing Act, United States Code, title 42, sections 3601 to 3619, AS AMENDED, and section 504 of the Rehabilitation Act of 1973 ... AS AMENDED.' The reference is DYNAMIC, so a narrowing of the federal accommodation standard plausibly narrows Minnesota's trigger too. WHAT IS GENUINELY INDEPENDENT: the support-animal definition (subd. 1(c), no training required), the closed licensed-professional list (subd. 1(e), which expressly excludes anyone 'who operates primarily to provide certification' — i.e. ESA mills), the fee prohibition (subd. 3(a)), the bar on demanding medical records (subd. 2(b)), and the disability definition, which uses MN §363A.03 subd. 12 rather than a federal one. CLASSIFICATION HELD as category 1 (independent animal-specific housing-express statute) but with the accommodation trigger correctly described as federally tethered rather than glossed over.",
  },
  // Landlord Responsibilities
  {
    id: "edu-ouster-utility-floor-remedies-mn",
    title: "Utility Shutoff and Lockout Damages Are a Floor, Not a Ceiling",
    group: "Landlord Responsibilities",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you interrupt a tenant's electricity, heat, gas, or water, or lock a tenant out, Minnesota does not make the tenant prove actual losses. Under Minn. Stat. § 504B.221 and § 504B.231 the tenant recovers treble damages OR $500, whichever is greater, plus reasonable attorney fees — a statutory floor that applies even where actual damages are small. Intentional shutoffs and lockouts are also a misdemeanor under § 504B.225, which presumes unlawful intent once the tenant shows you interrupted service intentionally, putting the burden on you to rebut it. None of these rights can be waived by anything in a lease. Never use utility interruption or a lock change as leverage — use the eviction process.",
    notes: "MN added (MN re-audit 2026-09-03): resolves the NE re-audit canvass row 'statutory-floor remedies for ouster and abusive entry' (NE §76-1430 / §76-1438(2)) for MN. MN answer: PRESENT, treble-or-$500 floor at §504B.221(a) and §504B.231(a), confirmed directly from revisor.mn.gov. Non-waiver language in §504B.221(b) read from primary source and is what drove the carve-out correction to services-utilities-provided-mn this session.",
  },
  {
    id: "edu-alarm-duty-split-mn",
    title: "Minnesota Splits Smoke and CO Alarm Duties in Opposite Directions",
    group: "Landlord Responsibilities",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota assigns smoke alarm and carbon monoxide alarm responsibility to different parties, and getting this backwards is a common and consequential mistake. For SMOKE alarms (Minn. Stat. § 299F.362 subd. 5), wherever the occupant is not the owner, YOU are responsible for maintenance — in every rental, including a rented single-family house. Your tenant's only duty is to tell you within 24 hours of finding one nonfunctioning, and if they fail to tell you, that failure does not increase their liability. For CARBON MONOXIDE alarms (§ 299F.51), the allocation flips: in multifamily housing YOU provide and install, and you replace any alarm rendered inoperable during a PRIOR tenancy, but the current occupant maintains it during their own occupancy, including batteries. Two further points worth knowing: an insurer cannot deny a fire loss claim because you failed to comply with the smoke alarm statute, and while local governments generally cannot set different smoke alarm standards, they CAN adopt stricter installation rules for single-family homes and enforce them through a truth-in-housing inspection.",
    notes: "MN added (MN re-audit 2026-09-03): companion to smoke-detector-duty-mn and carbon-monoxide-alarm-duty-mn. Exists specifically because the two statutes allocate maintenance in opposite directions, which is exactly the kind of detail a single merged 'alarms' clause would flatten and get wrong. Both sections read in full from revisor.mn.gov rather than the subdivision needed, per the standing whole-section rule.",
  },
  // Default & Termination
  {
    id: "edu-abandoned-property-retake-duty-mn",
    title: "You Must Let a Tenant Retake Property Within 24 Hours of Written Demand",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Holding a tenant's belongings after they leave carries a deadline most landlords do not know about. Under Minn. Stat. § 504B.271 subd. 2, once the tenant makes written demand you must allow them to retake their property within 24 hours — or within 48 hours excluding weekends and holidays if you moved the property to storage somewhere other than the premises. Miss that window and the tenant recovers punitive damages of up to twice the actual damages or $1,000, whichever is greater, on top of actual damages and reasonable attorney fees. Courts weigh the value of the property, the effect losing it had on the tenant, whether you took it unlawfully, and whether you acted in bad faith. If you took possession unlawfully, you also pay the removal, storage, and care costs yourself rather than charging them to the tenant. None of this can be waived by a lease.",
    notes: "MN added (MN re-audit 2026-09-03): found while primary-reading §504B.271 in full to re-verify the 28-day and 14-day figures in abandoned-property-mn. Subd. 2's retake-on-demand duty and punitive-damages exposure appeared NOWHERE in the library — the original MN session cited §504B.271 but read only the subdivision that answered the disposal-timing question, which is precisely the partial-read failure mode the NE re-audit identified. The 24h/48h split turns on whether the property was stored ON the premises or moved elsewhere. Housing-authority landlords are exempt from the punitive-damages remedy but must still permit retaking (subd. 2, final paragraph). Non-waivable per subd. 4.",
  },
  {
    id: "edu-infirmity-termination-accessible-unit-mn",
    title: "You Can Defeat an Infirmity Termination by Offering an Accessible Unit",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota lets a tenant end a lease early on two months' notice when a medical professional finds they need to move into certain licensed care facilities (Minn. Stat. § 504B.266). What most landlords miss is the exception: if the tenant's need is for an ACCESSIBLE unit, and you can offer one in the same complex that becomes available within two months of their request, the statute does not apply and the tenant may not terminate. This is worth knowing before you accept a termination notice — if you have an accessible unit coming open, offering it keeps the tenancy. Note this only works for the accessible-unit situation; it does not help where the tenant is genuinely moving into a nursing home, assisted living, or another enumerated facility.",
    notes: "MN added (MN re-audit 2026-09-03): companion to the termination-infirmity-mn correction. Found only by reading §504B.266 in full rather than the subdivision stating the notice period — the original session captured subd. 3's two-month mechanics and never reached subd. 2(b)'s defeasance. Same partial-read failure mode as the §504B.271 subd. 2 miss logged at RA-12. 'Accessible unit' is defined at §363A.40 subd. 1.",
  },
  {
    id: "edu-writ-execution-property-duties-mn",
    title: "After an Eviction Writ, Where You Store the Property Changes the Law That Applies",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "When a sheriff executes a writ of recovery in Minnesota, one decision changes everything that follows: whether the tenant's belongings stay on the premises or go to storage elsewhere. If they stay ON the premises, Minn. Stat. § 504B.365 subd. 3(d) applies § 504B.271 — the 28-day hold with a 14-day pre-sale notice — and you must prepare a written inventory, signed and dated in the officer's presence, listing each item and its condition, the date, your signature, the name and phone number of someone authorized to release the property, and the officer's name and badge number. Mail a copy to the tenant's last known address. If instead the property goes to storage OFF the premises, you get a lien for your removal and storage costs, you may hold the property until paid, and if no payment comes for 60 days after the writ is executed you may hold a public sale under §§ 514.18 to 514.22 — a different and longer clock. Three duties apply either way: you must notify the tenant of the date and approximate time the officer will act, by first class mail AND a good-faith attempt by telephone; you are responsible for proper storage and care and liable for loss or damage if you fail to exercise reasonable care; and unless the premises were genuinely abandoned, removing property outside this process is an unlawful ouster under § 504B.231 with a criminal penalty under § 504B.225. None of this can be waived or modified by your lease.",
    notes: "MN added (MN re-audit 2026-09-03): §504B.365 read in full from revisor.mn.gov PDF, confirming the two-track structure that was flagged as an unverified secondary-source claim at RA-12. Subd. 5 makes the whole section non-waivable — 'This section may not be waived or modified by lease or other agreement' — so no lease clause can alter any of it, which is why this is education rather than clause text. METHODOLOGICAL NOTE FOR TAYLOR: this finding sits inside the eviction-procedure sections the project has deliberately deprioritized across all seven states as 'procedural, not clause-relevant.' That blanket assumption is wrong at least here — §504B.365 imposes affirmative landlord duties (inventory contents, dual-channel notice, care standard) with ouster-level exposure for getting them wrong. Recommend the deprioritization be narrowed from 'eviction sections are out of scope' to 'eviction sections are out of scope for LEASE_CLAUSE purposes but still screened for landlord duties.' Not applied to other states this session.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-dv-information-confidentiality-mn",
    title: "Victim Information Is Confidential and Overrides Anything They Signed",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant gives you notice terminating under Minnesota's victims-of-violence statute, Minn. Stat. § 504B.206 subd. 2 makes four things confidential: the information in the tenant's notice, anything in the qualifying document, the address or location the tenant relocates to, and the tenant's status as a victim. None of it may go into a shared database or be given to any person or entity. Two points landlords routinely get wrong. First, these confidentiality duties are expressly paramount and supersede any other document or form the tenant previously signed — a release or information-sharing consent buried in your application or lease does not override this. Second, violating it carries statutory damages of $2,000 plus attorney fees, regardless of whether the tenant proves any actual loss. Limited exceptions exist: the information may be used where required as evidence in an eviction action, an action for unpaid rent or damages, a security deposit claim, with the tenant's consent, or as otherwise required by law.",
    notes: "MN added (MN re-audit 2026-09-03): companion to dv-lease-termination-mn, §504B.206 subd. 2. The 'paramount and supersedes any other document or form previously signed by the tenant' language is directly relevant to Steinoak product design — any consent, release, or data-sharing term in an application or lease is void against this. The $2,000 figure is statutory damages, not a cap on actual damages. Non-waivable.",
  },
  // Default & Termination
  {
    id: "edu-landlord-mitigation-duty-mn",
    title: "You Must Try to Re-Rent After a Tenant Leaves Early",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota codified a landlord duty to mitigate damages at Minn. Stat. § 504B.154, effective 2024. If a residential tenant breaks the lease and moves out early, you must make reasonable efforts to re-rent the unit at a fair rental value rather than letting it sit empty and billing the departed tenant for the full remaining term. This reversed Minnesota's older common-law rule from Markoe v. Naiditch & Sons (1975), which had said no such duty existed — so any guidance, template, or advice predating 2024 that tells you otherwise is now wrong. Commercial leases continue to follow the older no-mitigation rule; this change applies to residential tenancies. Document your re-rental efforts, because they are what limit your recoverable damages.",
    notes: "MN added (MN re-audit 2026-09-03): §504B.154, codified 2024 for residential tenancies, reversing Markoe v. Naiditch & Sons (1975). NO row anywhere in the library covered a Minnesota mitigation duty; the generic default-by-tenant clause (CO;MN;ND;WY) touches mitigation only in passing and states no statutory duty. This is a live example of the version-trap risk the project tracks: a common-law rule reversed by statute means pre-2024 secondary sources are affirmatively wrong, not merely incomplete. CROSS-STATE FLAG: whether CO, WY, KS, NE, SD, or ND have a codified or common-law mitigation duty has never been canvassed for any state — recommend adding 'landlord duty to mitigate on early termination' as a named-topic checklist row.",
  },
  {
    id: "edu-pre-eviction-notice-nonpayment-mn",
    title: "Minnesota's 14-Day Pre-Eviction Notice Has Mandatory Contents",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Before filing an eviction for nonpayment of rent or another unpaid financial obligation, Minnesota requires a written pre-filing notice under Minn. Stat. § 504B.321 subd. 1a, effective January 1, 2024. The notice must state the total amount due, give a specific accounting of unpaid rent, late fees, and other charges, name the person authorized to receive rent and their address, and include statutory language about the tenant's options and available assistance. If the tenant corrects the delinquency or vacates within 14 days of delivery or mailing, no eviction follows — and if a local government requires a longer notice period, that longer period controls. The part that bites: you must attach a copy of the notice to your complaint, and the court SHALL dismiss the action without prejudice for failure to provide it AND grant expungement of the eviction file. A defective or missing notice does not just delay you; it erases the filing. Note this requirement applies only to nonpayment — Minnesota has no general statutory cure notice for other lease violations.",
    notes: "MN added (MN re-audit 2026-09-03): §504B.321 subd. 1a, primary-confirmed. MN §18 recorded the 14-day figure but no row ever captured the MANDATORY CONTENT requirements or the dismissal-plus-expungement consequence, which is the operative risk. Confirms MN §18's separate finding that MN has no general cure period for non-nonpayment violations. Local-government longer-period override is a municipal hook (Minneapolis has used it).",
  },
  {
    id: "edu-no-state-servicemember-termination-mn",
    title: "Minnesota Has No State Military Lease-Termination Right — Federal SCRA Controls",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant enters active military service or receives deployment or permanent-change-of-station orders, the federal Servicemembers Civil Relief Act (50 U.S.C. § 3955) is the authority — Minnesota provides no separate state lease-termination right layered on top of it. Chapter 504B contains no servicemember termination provision, and Minnesota's military protections statute covers postsecondary students, professional and driver's license renewal, motor vehicle registration, and unpaid leave to attend military ceremonies or care for injured family members. None of it reaches residential leases. Under the federal act the tenant gives written notice with a copy of their orders, and the tenancy ends 30 days after the next rent due date for a monthly lease, with no early-termination charge permitted. Note that 'military orders' includes separation and retirement, so a tenant leaving the service can use this too — a point that is widely missed.",
    notes: "MN added (MN re-audit 2026-09-03) — resolves NE re-audit canvass row #8 (state SCRA analog, narrower than federal?) for MN: CONFIRMED ABSENT. Logged as a row rather than left as a log-only absence, per the standing proof-of-absence rule — a confirmed absence with no CSV row is invisible to every future canvass, which is exactly the failure this re-audit found three times in MN (RA-4, RA-17). RESOLUTION PATH: §5a.2 was triggered and Taylor supplied primary text for both candidate sections. §192.501 is 'FINANCIAL INCENTIVES FOR NATIONAL GUARD MEMBERS' — enlistment/reenlistment/medic-recertification/reclassification/referral bonuses and tuition-and-textbook reimbursement grants. It has no landlord-tenant content of any kind. §192.502 'PROTECTIONS' covers postsecondary students (subd. 1), professional license, driver's license and motor vehicle registration renewal (subd. 2), unpaid leave for military ceremonies (subd. 3), and unpaid leave for families of injured or deceased members (subd. 4). NO residential lease-termination right in either. SOURCE-QUALITY FINDING: a secondary legal-template site asserted 'Minnesota provides additional protections for state active service under Minn. Stat. 192.501.' That is wrong on both the section number AND the subject matter — §192.501 is a Guard bonus-and-tuition statute. The attorney-authored source that contradicted it was correct, including its characterization of §192.502's contents. Another instance of the project's recurring pattern: confident secondary assertions with a real-looking citation attached, defeated only by reading the cited section. CROSS-STATE: NE has edu-servicemember-termination-ne. MN's generic early-termination clause (CO;MN;ND;SD;WY) already references the federal SCRA, so lease coverage exists; this row supplies the landlord-facing 'no state layer' answer that was missing.",
  },
  {
    id: "edu-dv-qualifying-documents-mn",
    title: "What Counts as a Qualifying Document, and What One Notice Does to Everyone's Lease",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Two things about Minnesota's victims-of-violence termination catch landlords off guard. First, the statute defines exactly five qualifying documents and you cannot demand something else: a valid order for protection; a no contact order currently in effect; a signed writing from a court official; a signed writing from a city, county, state, or tribal law enforcement official; or a Statement by Qualified Third Party on the form set out in the statute, signed by a licensed health care professional, a domestic abuse advocate, or a sexual assault counselor. A police report by itself is not on the list, and a tenant does not need a conviction or even a filed case. Second, and easy to miss: if there are several tenants on the lease and one of them terminates, the lease ends for ALL of them at the later of the end of the month or the end of the rent interval, every tenant relinquishes their claim to the security deposit, and every tenant is released from the rest of the term. A remaining tenant who wants to stay must reapply for a new lease — they do not simply continue. Finally, you may not bring an eviction action against a tenant who terminated under this statute, and neither you nor the tenant can waive any of it.",
    notes: "MN added (MN re-audit 2026-09-03): §504B.206 subds. 3, 5, 6 read in full. Qualifying-document list is subd. 6(3), five closed categories including the verbatim STATEMENT BY QUALIFIED THIRD PARTY form reproduced in the statute — PRODUCT IMPLICATION: Steinoak could supply this form directly, similar to the verbatim utility-disclosure attachment flagged for §504B.216 subd. 10. 'Qualified third party' is defined at subd. 6(2) as a licensed health care professional, a domestic abuse advocate (§595.02 subd. 1(l)), or a sexual assault counselor (§595.02 subd. 1(k)); 'court official' at subd. 6(1). Subd. 3(d) confirmed: 'a landlord may not commence an eviction action against a tenant who has terminated a lease as provided in this section,' except as provided in §504B.285 subd. 1(b) — this independently confirms the attorney-source claim noted at RA-19 that I had declined to rely on unverified. Subd. 5 waiver prohibition runs both ways: the tenant may not waive and the landlord may not require waiver.",
  },
  // Pets
  {
    id: "edu-animal-fairhousing-exemption-mismatch-mn",
    title: "Minnesota's Animal Rules Have No Small-Landlord Exemption",
    group: "Pets",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota's fair housing law and its service-and-support-animal law do not have the same reach, and the gap matters if you are a small landlord. The Human Rights Act's housing provisions (Minn. Stat. § 363A.09) are subject to statutory exemptions — most notably for a resident owner-occupier renting out a room in a one-family home, and for certain nonprofit and religious housing. Minn. Stat. § 504B.113, which governs service and support animal documentation, pet fees, and what you may ask for, contains NO exemptions at all. So a landlord who is genuinely exempt from parts of the fair housing statute is still fully bound by the animal statute: no pet fee or deposit for a qualifying animal, documentation only from a statutorily listed licensed professional, and no demanding medical records. Do not reason from a fair housing exemption to an animal-rule exemption.",
    notes: "MN added (MN re-audit 2026-09-03): RESOLVES NE re-audit canvass row #7 for MN — 'do the assistance-animal carve-out and the fair-housing carve-out ALIGN in scope?' MN ANSWER: NO, THEY DO NOT ALIGN. §363A.09 is expressly subject to exemptions at §§363A.21, 363A.22, 363A.26 (statutory NOTE to §363A.09). §504B.113, read in full from primary text, contains no exemption provision of any kind — no owner-occupier carve-out, no unit-count threshold, no nonprofit or religious exemption. The two statutes therefore diverge exactly where a small landlord would most likely assume they align. Related definitional split worth noting: §504B.113 borrows 'disability' from MN §363A.03 subd. 12 (state law) but borrows the 'reasonable accommodation' standard from the federal FHA and Rehabilitation Act (subd. 1(f)) — mixed tethering within a single section. NE canvass rows now 9 of 10 resolved for MN; only row #3 (electronic notice/delivery regime) remains.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-notice-delivery-methods-mn",
    title: "Minnesota Sets Delivery Method Notice-by-Notice — Email Is Not a Safe Default",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has no general rule about serving lease notices electronically. Instead each statute names its own delivery method, and they differ in ways that matter. The 14-day pre-eviction notice for nonpayment must be delivered personally or by first class mail — there is no electronic option, and because a missing or defective notice means the court dismisses your case and expunges the file, sending it only by email or through a tenant portal can cost you the filing. Death-of-tenant and infirmity terminations require hand delivery or first class prepaid mail. Abandoned-property sale notice requires personal service or first class AND certified mail, plus posting on the premises. Post-writ notice of the sheriff's arrival requires first class mail plus a good-faith telephone attempt. By contrast, a tenant terminating for domestic violence may use mail, in-person delivery, or whatever form of written communication they normally use with you — which does include email or text. The practical rule: never assume a lease clause designating email or a portal as the notice method satisfies a statute that names a different one. Match the method to the specific notice.",
    notes: "MN added (MN re-audit 2026-09-03): RESOLVES NE re-audit canvass row #3 (electronic notice/delivery regime) for MN — completing 10 of 10. MN ANSWER: NO COMPREHENSIVE REGIME, and that is itself the finding. Minnesota does not regulate electronic service generally, does not require affirmative tenant consent to electronic delivery, and does not bar a lease from designating an electronic method. Instead delivery is specified PER SECTION and the specifications conflict: §504B.321 subd. 1a(b) personal or first class mail only (with dismissal + expungement as the consequence of failure); §504B.265 subd. 2 hand delivery or first class prepaid mail; §504B.271 subd. 1(d) personal service OR first class AND certified mail, plus conspicuous posting; §504B.365 subd. 3(g) first class mail PLUS a good-faith telephone attempt; §504B.206 subd. 1(c) mail, in person, or a form of written communication the tenant regularly uses (the only clearly electronic-permissive one, and it runs tenant-to-landlord). §504B.181 requires written disclosure 'in the rental agreement or otherwise in writing.' CONSEQUENCE FOR STEINOAK: a generic lease clause designating email or a tenant portal as THE method for all notices would be actively misleading for MN. The generic `notices` clause (CO;KS;MN;NE;WY) should be checked against this for every state, not just MN — flagged as a cross-state item, not fixed this session because a shared-clause edit triggers §5a.1 across five states.",
  },
  // Rent & Fees
  {
    id: "edu-returned-check-fee-cap-mn",
    title: "Minnesota Caps the Dishonored-Check Service Charge at $30",
    group: "Rent & Fees",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant's rent check bounces, Minnesota's general bad-check statute (Minn. Stat. § 604.113) caps the service charge you may impose at $30, and only one such charge may be imposed per dishonored check. Two things to understand about how it works. First, the immediate $30 charge is conditioned on having conspicuously displayed notice of the service charge on the premises when the check was issued, and that displayed notice must also warn that civil penalties may follow — a requirement written with storefronts in mind that fits awkwardly when rent arrives by mail. Second, and separately, if the check still is not paid 30 days after you mail a proper notice of dishonor, you may pursue the face amount, the service charge, and a civil penalty of up to $100 or the value of the check, whichever is greater, plus judgment-rate interest, and attorney fees if that tenant has bounced more than $1,250 in checks to all payees within six months. That civil penalty is a court remedy you sue for — it is not a fee you may simply add to the ledger.",
    notes: "MN added (MN re-audit 2026-09-03) — GAP FOUND, and it completes this topic across all seven states. CO has nsf-fee-limit-co; WY, ND, SD have edu-returned-check-fee-cap-{state}; KS has edu-nsf-fee-cap-ks; NE has edu-bad-check-restitution-vs-nsf-fee-ne. MN HAD NOTHING. Minn. Stat. §604.113 subd. 2, confirmed from revisor.mn.gov and corroborated independently by multiple Minnesota county and state agency notice forms that cite and apply it operationally (BCA, Kittson County, Winona, Renville County) — independent confirmation in the sense the project requires, not aggregator repetition of one source. §604.113 is in the CIVIL LIABILITY chapter, not Ch. 504B — another §E adjacent-chapter finding, matching WY's pattern where the equivalent lived in a general bad-check statute. AMBIGUITY SURFACED, NOT RESOLVED: subd. 2(c) states the subdivision 'prevails over any provision of law limiting, prohibiting, or otherwise regulating service charges authorized by this subdivision, but does not nullify charges for dishonored checks, which do not exceed the charges in paragraph (a) or terms or conditions for imposing the charges which have been agreed to by the parties in an express contract.' Read one way, an express contract (the lease) may set the terms and conditions for imposing the charge but not exceed $30; read another, express-contract terms are preserved independently of the cap. This row takes the CONSERVATIVE reading ($30 is the ceiling) and flags the alternative rather than asserting a landlord-favorable interpretation. FLAG FOR TAYLOR: worth a lawyer's eye if Steinoak ever surfaces a suggested NSF amount. Also note the storefront-oriented 'conspicuously displayed on the premises when the check was issued' precondition sits awkwardly on a mailed rent check — another reason not to promise landlords the $30 is automatic.",
  },
  // Disclosures
  {
    id: "edu-no-radon-rental-disclosure-mn",
    title: "No Radon Disclosure Duty for Minnesota Rentals",
    group: "Disclosures",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota's radon disclosure law applies to SALES and transfers of residential real property, not to ordinary rentals. Minn. Stat. §§ 513.61 and 144.496 reach a transfer of an interest in residential real estate, and the sale-disclosure duty expressly excludes a transfer to a tenant already in possession. Bills to extend radon testing and disclosure to rental housing have been introduced repeatedly and have not been enacted. Be skeptical of online guidance stating that Minnesota landlords must test for or disclose radon — that claim circulates widely and is not what the statute says. Nothing stops you from testing voluntarily.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §16 recorded radon as CONFIRMED ABSENT for rentals and specifically flagged an overconfident secondary source claiming the opposite. Confirmed again this session against §513.61/§144.496. Rental-specific bills failed 2019, 2021, 2024; none enacted 2025-2026.",
  },
  {
    id: "edu-no-bedbug-mold-disclosure-mn",
    title: "No Bed Bug or Mold Disclosure Statute in Minnesota",
    group: "Disclosures",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has no dedicated bed bug disclosure or treatment-timeline law and no dedicated mold disclosure law. Both are handled under the general habitability covenant in Minn. Stat. § 504B.161, which requires you to keep the premises in reasonable repair — and which since 2023 expressly includes extermination of insects, rodents, vermin, and other pests. So there is no disclosure form to hand over, but an infestation or a moisture problem is still your repair obligation, and the habitability covenant cannot be waived.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §18 recorded both as confirmed absent as dedicated statutes. Note CO, CA, and ME carry bed-bug-disclosure rows, so MN's absence is a real cross-state difference rather than an unexamined gap. The 2023 amendment adding pest extermination to §504B.161 subd. 1(2) is the operative hook.",
  },
  // Landlord Responsibilities
  {
    id: "edu-no-ev-charging-right-mn",
    title: "No EV Charging Access Right in Minnesota",
    group: "Landlord Responsibilities",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota is not among the states that give tenants a statutory right to install or demand access to electric vehicle charging. Colorado has such a law; Minnesota does not. You may permit, restrict, or condition tenant EV charging by lease terms, subject to your ordinary obligations around electrical safety and utility billing — and if the building is shared-metered, remember that Minnesota prohibits apportioning electricity to tenants at all.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §16 recorded EV charging as CONFIRMED ABSENT. CO has ev-charging-rights-co; MN does not. Cross-reference to §504B.216 subd. 5(a)'s electricity-apportionment ban added because EV charging is the most likely real-world trigger for that prohibition.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-no-unconscionability-statute-mn",
    title: "Minnesota Has No Landlord-Tenant Unconscionability Statute",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Unlike Kansas and Nebraska, whose landlord-tenant acts contain express unconscionability provisions letting a court refuse to enforce an unconscionable lease or clause, Minnesota's Chapter 504B has no such provision. That does not mean anything goes — Minnesota courts apply general common-law contract doctrine, the Plain Language Contract Act reaches leases of three years or less, and Chapter 504B contains roughly eighteen separate non-waiver provisions that void specific lease terms. Minnesota simply regulates unfair lease terms through scattered specific prohibitions rather than one general standard.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §18 recorded this as confirmed absent as a dedicated landlord-tenant statute (contrast K.S.A. 58-2544, Neb. Rev. Stat. §76-1412). Consistent with the RA-5 finding that MN uses ~18 scattered per-section non-waiver rules instead of a consolidated prohibited-provisions section.",
  },
  {
    id: "edu-no-confession-of-judgment-bar-mn",
    title: "Minnesota's Confession-of-Judgment Ban Does Not Reach Leases",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota does have a confession-of-judgment prohibition, but it is scoped to consumer credit sales of PERSONAL property (Minn. Stat. § 325G.16), and the governing definitions exclude real property. No separate provision bars a confession-of-judgment or cognovit clause in a residential lease. That said, do not read this as an invitation: such a clause would face Minnesota's general contract doctrine, the Plain Language Contract Act, and the eviction statute's own procedural requirements, which cannot be contracted around.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. Resolved in the prior MN session and re-confirmed on scope this session. §325G.16's operative definitions ('consumer credit sale', 'goods' = tangible personal chattels) exclude real property. FLAGGED: §325G.16's full text was not read end to end — the scope conclusion rests on the definitional sections. Read in full before relying on the negative.",
  },
  // Default & Termination
  {
    id: "edu-no-holdover-damages-multiplier-mn",
    title: "Minnesota Has No Holdover Damages Multiplier",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Some states let a landlord recover double or treble rent from a tenant who stays past the end of the term. Minnesota does not. Minn. Stat. § 504B.141 confirms that holding over does not by itself create a new tenancy, but neither it nor the eviction chapter provides any damages multiplier. Your recovery for a holdover period is ordinary rent and actual damages. Note that Steinoak's generic Holdover clause references double rent capped at whatever applicable law allows — in Minnesota that cap is effectively ordinary rent, so do not rely on the doubling language here.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §24 recorded this as confirmed absent after reading §504B.141 and §504B.285. IMPORTANT INTERACTION FLAGGED: the generic `holdover` clause (CO;KS;MN;NE;WY) provides for 'double the Monthly Rent ... or the maximum amount allowed under applicable law, if less.' The self-limiting language saves the clause from being unlawful in MN, but it is misleading to a MN landlord reading it. Adds to the shared-clause backlog alongside `notices` and `returned-payments`.",
  },
  // Security Deposit
  {
    id: "edu-no-deposit-cap-statewide-mn",
    title: "No Statewide Deposit Cap — But Minneapolis Has One",
    group: "Security Deposit",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota sets no statewide limit on the amount you may collect as a security deposit, and no statewide right for a tenant to pay it in installments. Minneapolis does both by ordinance: the deposit is capped at one month's rent, drops to half a month if you also collect prepaid rent up front, and in that case must be payable in installments. Saint Paul caps the deposit at one month's rent with a narrow exception. If you operate in either city, the municipal rule governs and is stricter than state law.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §13 recorded 'no statutory cap' plus the Minneapolis ordinance, and §16 recorded no statewide installment right — neither ever became a row. §504B.178 contains no cap. Municipal specifics are flagged, not resolved, consistent with the standing municipal-scope boundary; they are named here only because the state-level answer is meaningless to a Twin Cities landlord without them.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-farm-and-mhp-scope-mn",
    title: "Farm Tenancies and Manufactured Home Parks Are Governed Elsewhere",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Two categories of Minnesota tenancy sit outside Chapter 504B and outside what a standard residential lease should be used for. Manufactured home parks are governed by Chapter 327C, and Chapter 504B repeatedly carves them out — the entry-notice statute, the foreclosure-disclosure statute, and others expressly do not apply to them. Agricultural tenancies run on separate machinery too, including a landlord's lien on growing crops under Chapter 514 that has no residential counterpart, since Minnesota abolished distress for rent for ordinary tenancies. If you are renting a lot in a manufactured home park or leasing farmland, this lease is the wrong instrument.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §13 and §20 recorded the MHP cross-references (§504B.211 subd. 7, §504B.151(c), §504B.001 references to §327C.015) and the Ch. 514 crop-lien carve-out confirming farm tenancies are separately governed. Neither became a row. Both remain deliberately OUT OF SCOPE as product decisions, revisitable on customer demand — this row documents the boundary rather than reopening it.",
  },
  {
    id: "edu-statute-of-frauds-lease-term-mn",
    title: "Leases Longer Than One Year Must Be in Writing",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota's Statute of Frauds (Minn. Stat. §§ 513.04 and 513.05) requires a lease for a term longer than one year to be in writing and signed to be enforceable. Chapter 504B separately requires a written lease in some circumstances and requires you to give the tenant a copy. Note that Minnesota does not exclude long-term leases from tenant-protection coverage the way the original checklist question anticipated — a five-year residential lease still gets the full protection of Chapter 504B.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 1) — PROOF-OF-ABSENCE ROW. This topic was adjudicated in MN's decision log but never given a CSV row, making it invisible to every future canvass. MN log §20 flagged that the checklist's 'long-term lease exclusion (5+ years)' topic did not map onto Minnesota: what exists is an ordinary Statute of Frauds writing requirement at one year, NOT an exclusion of long leases from tenant-protection coverage. That distinction was logged and never given a row. Recommend the checklist row itself be re-worded, since it appears to have been framed from whichever state originated it.",
  },
  // Security Deposit
  {
    id: "edu-inspection-notice-penalty-mn",
    title: "Skipping the Inspection Notice Can Double Your Deposit Exposure",
    group: "Security Deposit",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota ties a hard penalty to the inspection-notice duty, and it is easy to trip because the trigger is the NOTICE, not the inspection. Under Minn. Stat. § 504B.178 subd. 4, a landlord who fails to give the tenant notice of the initial and move-out inspection options required by § 504B.182 — or who fails to actually complete an inspection the tenant requested — is liable for damages equal to the portion of the deposit withheld plus interest, AS A PENALTY, on top of returning the wrongfully withheld portion itself. In practice that means the same withheld amount can come out of your pocket twice. The tenant does not have to request anything for you to be exposed: your duty to NOTIFY them of the option is what triggers it, at the start of the tenancy and again before it ends. If the tenant declines to request an inspection, your duties are discharged — but only if you offered.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2): companion to initial-final-inspection-mn. §504B.178 subd. 4(4) read from revisor.mn.gov — the penalty is listed alongside the other deposit-withholding failures and carries the same 'in addition to the portion wrongfully withheld' doubling structure. PRODUCT IMPLICATION, FLAGGED FOR TAYLOR: this is a DATED, EVENT-DRIVEN landlord obligation (notify within 14 days of occupancy; notify again before termination) that a lease clause alone cannot discharge — the lease can state the option, but someone has to actually send the second notice months or years later. This is the clearest candidate yet for the legal tracker feature already on the roadmap, alongside the reservation-of-rights notice from the NE work.",
  },
  {
    id: "edu-deposit-successor-transfer-mn",
    title: "Selling the Property Starts a 60-Day Deposit Clock",
    group: "Security Deposit",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If your interest in the property ends — by sale, assignment, death, or appointment of a receiver — Minn. Stat. § 504B.178 subd. 5 gives you 60 days, or until the successor must account for the deposit, whichever comes first, to do one of two things: transfer the deposit with interest to your successor and then notify the tenant of the transfer and the transferee's name and address, or return it with interest to the tenant. Doing either relieves you of further liability; doing neither exposes you to the same doubling penalty that applies to other deposit failures. If you are the BUYER, subd. 6 gives you all the landlord's rights and obligations for that deposit — with one protection worth using: if you give the tenant written notice of the deposit amount being transferred or assumed, and the tenant does not object within 20 days, your obligation is capped at the amount stated in your notice. That notice must include a stamped envelope addressed to you, and may be mailed or personally served.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'successor-owner bound by deposit obligations' canvass topic for MN. §504B.178 subds. 5 and 6, read in full. MN had no row. The 20-day objection window with the stamped-envelope requirement is a genuine buyer-side protection that a landlord acquiring property would otherwise not know to invoke — over-included deliberately since the project tracks landlord-facing knowledge, not only tenant-facing clause text. Failure under subd. 5 is one of the four triggers for subd. 4's doubling penalty, and also triggers subd. 7's bad-faith presumption.",
  },
  // Disclosures
  {
    id: "edu-landlord-disclosure-consequences-mn",
    title: "Skipping the Landlord Disclosure Can Block Your Eviction",
    group: "Disclosures",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The landlord-disclosure duty in Minn. Stat. § 504B.181 has a consequence most landlords never see coming. Under subd. 4, no action to recover rent or possession may be maintained unless you disclosed the required information the way the statute requires — or unless the tenant already knew it or you disclosed it at least 30 days before starting the action. In other words, a missing disclosure can stop an eviction or a rent claim before it starts, and the 30-day cure means fixing it on the courthouse steps does not help. One narrower point in your favor: failing to post the attorney-general-statement notice specifically does NOT block an action. Two other effects worth knowing. If you have not complied, subd. 3 deems your caretaker, manager, or whoever collects the rent to be your agent for service of process — so you can be served through someone you never authorized, and they must forward it to you personally or by certified mail. And under subd. 5, a tenant who moves out or subleases without giving you at least 30 days written notice voids this section as to that tenant. The duty also binds any successor landlord.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2): §504B.181 read in full from revisor.mn.gov, discharging the flag left on landlord-disclosure-mn. SUBD. 4 IS THE SIGNIFICANT FINDING and appeared in no MN row: it is a MAINTENANCE BAR on any action to recover rent or possession — the disclosure failure defeats the eviction itself, with a 30-day-prior-disclosure or actual-knowledge escape. Carve-out: failure to post the subd. 2(b) AG-statement notice, or a §471.9995 notice, does NOT prevent the action. Subd. 3: noncompliance deems the caretaker, manager, or rent recipient an agent for service of process, who must forward personally or by certified mail RRR. Subd. 5: a tenant who moves or subleases without 30 days written notice VOIDS the section as to that tenant — a genuine landlord-side defense. Subd. 6: the section binds successor landlords, which resolves the 'broader landlord-identity-change notice' canvass topic as PRESENT-BUT-DIFFERENT — the duty transfers, but MN imposes no proactive notice-on-sale obligation like the KS/NE architecture. CROSS-STATE FLAG: a disclosure failure that bars an eviction action is a severe, easily-missed consequence. Worth checking whether KS's landlord-disclosure-ks and NE's landlord-disclosure-ne carry an equivalent maintenance bar that those states' rows also failed to capture.",
  },
  // Default & Termination
  {
    id: "edu-tenancy-at-will-notice-mn",
    title: "Ending a Tenancy at Will in Minnesota",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A tenancy at will in Minnesota is ended by either party giving written notice, and the notice period must be at least as long as the interval between rent due dates, or three months, whichever is SHORTER. For a typical month-to-month tenancy that means one month's written notice, not three. Note that Minnesota no longer provides a separate short notice-to-quit for nonpayment on a tenancy at will — nonpayment now runs through the general 14-day pre-eviction notice, which has its own mandatory contents and whose omission gets your case dismissed and expunged. Remember also that the notice period you give a tenant cannot be shorter than the notice your lease requires the tenant to give you, and the tenant may elect to use whichever period is longer.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'distinct week-to-week termination notice period' canvass topic for MN: there is no separate week-to-week rule; §504B.135's single formula (interval between rent due dates, or three months, whichever is LESS) scales automatically, so a week-to-week tenancy takes one week's notice. VERSION CORRECTION — a stale citation in MN's earlier log is now caught. MN log §20 stated '§504B.135(b) gives 14 days notice to quit for nonpayment on a tenancy at will specifically.' That paragraph (b) EXISTED in the 2019 statute but was REMOVED by 2023 c 52 art 19 s 97. Current §504B.135 is a single undesignated paragraph with no nonpayment provision at all. The earlier finding was drawn from an archived version of the revisor page — the same trap as the §504B.206 'fax' error I made at RA-22, and the second confirmed instance this session of an archived-version citation being read as current law. Nonpayment on a tenancy at will now runs through §504B.321 subd. 1a. Cross-referenced to §504B.147's tenant-election rule (notice to landlord may not exceed notice from landlord; tenant may use either period).",
  },
  {
    id: "edu-eviction-expungement-mn",
    title: "Most Minnesota Eviction Records Get Expunged Automatically",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Filing an eviction in Minnesota does not reliably leave a lasting public record, and the rules changed substantially in 2024. Under Minn. Stat. § 484.014 subd. 3, the court must order expungement — WITHOUT any motion from the tenant — in most of the situations where you do not win outright, including where the tenant prevailed on the merits, where the complaint is dismissed for ANY reason, and where the parties agreed to expungement. Two further categories require the tenant to move: where the case was filed in violation of the statute barring eviction of a tenant who terminated for domestic violence, and where the case settled and the tenant met the settlement terms. So dismissing your own case, or settling it successfully, generally ends with the record removed. The discretionary standard also loosened: a court may now expunge simply where that is clearly in the interests of justice and not outweighed by the public's interest in knowing — you no longer get to defeat expungement merely by having had a colorable claim. Practically, you have very little ability to object, and you should not assume an eviction filing will show up in a future landlord's screening.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'eviction record sealing / expungement, and the landlord's right to OBJECT' canvass topic for MN. Minn. Stat. §484.014 (current). MN had no row; the topic was referenced only in passing inside edu-screening-fee-rules-mn. ANSWER ON THE LANDLORD-OBJECTION HALF OF THE TOPIC: essentially none. Subd. 3(a) mandates expungement 'without motion by any party' except for clauses (6) and (7), so for the common categories there is no adversarial step at which a landlord objects. The only weighing happens in the discretionary track (subd. 2), against 'the public's interest in knowing about the record.' ARCHIVED-VERSION TRAP, LIVE: this search returned the 2010 and 2019 revisor pages carrying the OLD discretionary standard — expungement 'only upon motion of a defendant' and only if 'the plaintiff's case is sufficiently without basis in fact or law.' That test was STRUCK by Laws 2023 c 52 art 19 s 117 effective 2024-01-01. An attorney source notes the repealed test is still widely repeated by housing organizations and law firms. This is the THIRD archived-version instance this session (after my §504B.206 'fax' error and the §504B.135(b) error in MN's earlier log) and the first where the stale text was landlord-favorable — precisely the direction in which it would not get questioned. Subd. 3(b) additionally requires expungement of cases commenced on §504B.171 grounds or any other breach claim, regardless of when ordered, where the tenant could receive automatic expungement under §609A.055 or the breach was based solely on possession of marijuana or tetrahydrocannabinols — which ties back to the cannabis-possession protection at §504B.171(c) logged in edu-cannabis-possession-mn. NOT FULLY READ, FLAGGED: subd. 3(a) clause (5) was truncated in the sources reached and is not characterized here.",
  },
  // Rent & Fees
  {
    id: "edu-no-payment-method-fee-ban-mn",
    title: "Minnesota Does Not Ban Payment-Method Fees — But You Must Disclose Them",
    group: "Rent & Fees",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has no statute prohibiting a fee for paying rent by a particular method, such as a surcharge for paying by card or a convenience fee for an online portal. What Minnesota does require is disclosure. Minn. Stat. § 504B.120 — despite being titled 'Prohibited Fees' — prohibits nothing. It requires you to disclose all nonoptional fees in the lease, to state the sum of rent plus nonoptional fees as the 'Total Monthly Payment' on the FIRST PAGE of the lease, to disclose nonoptional fees in any advertisement or posting, and to say whether utilities are included. Violation carries TREBLE damages plus possible attorney fees. The practical line: if a payment-method fee is unavoidable for the tenant, it is nonoptional and belongs in the Total Monthly Payment. If a genuinely free payment method is available, the fee is optional and does not. Separately, if a tenant pays rent in cash you must give a written receipt.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'payment-method fee ban (fee just for paying by cash/check/money order)' canvass topic for MN: CONFIRMED ABSENT. §504B.120 read in full from revisor.mn.gov — it is only two subdivisions and, notwithstanding its title 'PROHIBITED FEES,' contains NO prohibition of any fee. It is purely a disclosure statute. FLAGGING THE TITLE TRAP explicitly: a canvass that resolved this topic from the section title alone would record MN as HAVING a prohibited-fees regime, which is the opposite of the truth. History: 2023 c 52 art 19 s 84. The optional/nonoptional line drawn in the body text is an inference from the statute's own terms, not an express statutory test — flagged as reasoning, not black letter.",
  },
  // Disclosures
  {
    id: "edu-lease-copy-defense-mn",
    title: "Not Giving the Tenant a Lease Copy Is a Defense — and a Crime",
    group: "Disclosures",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Failing to give a tenant a copy of their signed lease carries two consequences in Minnesota that landlords rarely anticipate. First, under Minn. Stat. § 504B.115 subd. 2, in any legal action to enforce a written lease it is a DEFENSE for the tenant to prove you did not give them a copy. The defense does not apply to actions for nonpayment of rent, disturbing the peace, malicious destruction of property, or unlawful-activity violations — but it does apply to enforcement of ordinary lease terms, which is most of what a lease is for. You can overcome the defense by proving the tenant had actual knowledge of the specific term your action is based on, but that is a fact fight you would rather avoid. Second, under § 504B.111 a landlord who fails to provide a lease as required is guilty of a PETTY MISDEMEANOR — an actual criminal penalty, not a civil one. The fix is trivial: include a signed, dated acknowledgment of receipt in the lease itself, which the statute treats as prima facie evidence that you complied.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2): companion to lease-copy-receipt-mn. Resolves the item flagged at RA-37 that I declined to draft from a truncated sentence — full text now read. §504B.115 subd. 2 in full: 'In any legal action to enforce a written lease, except for nonpayment of rent, disturbing the peace, malicious destruction of property, or a violation of section 504B.171, it is a defense for the tenant to prove that the landlord failed to comply with subdivision 1. This defense may be overcome if the landlord proves that the tenant had actual knowledge of the term or terms of the lease upon which any legal action is based.' §504B.111: 'A landlord who fails to provide a lease, as required under this section, is guilty of a petty misdemeanor.' History 1999 c 199 art 1 s 3; 1Sp2019 c 1 art 6 s 56. This is a LANDLORD-FACING CRIMINAL PENALTY — relevant to the checklist topic of that shape, which had only been framed around assistance-animal denial. [RESOLVED 2026-09-03 at RA-39 and RA-41 — scope confirmed as 12+ unit buildings, and Taylor supplied full primary text confirming HF 1648 was not enacted. Original flag retained below for traceability.] PRIOR-FLAG TEXT (superseded): §504B.111's operative requirement — which landlords/buildings must provide a written lease at all — was NOT reached; only its penalty sentence was. The scope trigger (believed tied to building size or to a tenant request) is uncharacterized here. Read §504B.111 subd. 1 in full before relying on the written-lease requirement itself. The DEFENSE and PENALTY findings above do not depend on that scope question. | SCOPE FLAG PARTIALLY DISCHARGED 2026-09-03: §504B.111's operative requirement confirmed — 'A landlord of a residential building with 12 OR MORE residential units must have a written lease for each unit rented to a residential tenant.' Below 12 units an oral agreement does not violate this section (AG handbook confirms). Current text also requires that 'The written lease must identify the specific unit the residential tenant will occupy before the residential tenant signs the lease,' and permits the landlord to ask for the tenant's full name and date of birth on the lease and application notwithstanding any contrary state law or city ordinance. NOTE the interaction: the §504B.115 lease-copy duty and its enforcement DEFENSE are NOT limited to 12+ unit buildings — they apply 'where there is a written lease,' so a small landlord who chooses to use a written lease takes on the copy duty and the defense exposure even though §504B.111 never required them to have a lease at all. UNRESOLVED — see decision log RA-39: whether 2025 HF 1648's further amendments to §504B.111 were enacted. | §5a.2 RESOLVED 2026-09-03, Taylor supplied primary text of §504B.111 in full. 2025 HF 1648 WAS NOT ENACTED into this section. The history line runs '1999 c 199 art 1 s 3; 1Sp2019 c 1 art 6 s 56' and stops — no 2025 chapter. There is no paragraph (a) no-unilateral-amendment rule, no paragraph (c) treble-damages remedy, and no estates-at-will renewal provision in current law. MY RA-39 INFERENCE WAS WRONG AND IS RETRACTED: I reasoned that because HF 1648's 'identify the specific unit' sentence appeared in the current text, part of the bill must have been enacted. That sentence actually came from the 2019 amendment (1Sp2019 c 1 art 6 s 56) and predates HF 1648 entirely. Bills reproduce existing statutory language alongside proposed additions; rendered as plain text the existing language is indistinguishable from new language. Escalating rather than guessing was correct — the guess I was tempted toward was wrong in the direction of over-reporting a constraint that does not exist. FULL CURRENT SCOPE, now confirmed: written lease required only for a residential building with 12 OR MORE residential units; the lease must identify the specific unit before signing; and 'Notwithstanding any other state law or city ordinance to the contrary, a landlord may ask for the tenant's full name and date of birth on the lease and application.' Failure to provide a lease is a petty misdemeanor. NOTABLE — EXPRESS MUNICIPAL PREEMPTION: the full-name/date-of-birth sentence expressly overrides contrary CITY ORDINANCES. This is the only express local-preemption language found anywhere in Chapter 504B this session, and it sits directly adjacent to Minneapolis's and St. Paul's inclusive-screening ordinances. It preempts only this narrow point (asking name and DOB), not screening ordinances generally — flagged so the two are not conflated.",
  },
  // Insurance & Liability
  {
    id: "edu-renters-insurance-limits-mn",
    title: "You Can Require Renter's Insurance — But Not to Shift Your Own Repairs",
    group: "Insurance & Liability",
    states: ["MN"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has no statute prohibiting you from requiring renter's insurance, and a clearly stated lease requirement is enforceable. What you cannot do is use it to move your own obligations onto the tenant. The habitability covenant in Minn. Stat. § 504B.161 cannot be waived, and the attorney general states the point plainly: even if the lease says the tenant must perform maintenance or repairs, that term is not enforceable. So requiring a tenant to claim a landlord-responsible repair on their own renter's policy, or treating their coverage as a substitute for your duty to repair, does not work — the underlying duty stays with you regardless of what the lease says or what insurance the tenant carries. Requiring coverage for the tenant's own belongings and their personal liability is the legitimate use.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'prohibition on requiring tenants to claim landlord-responsible repairs on their renter's insurance' canvass topic for MN: NO DEDICATED STATUTE, CONFIRMED ABSENT. The protection instead comes indirectly and robustly from §504B.161's non-waivability (subd. 1(b)) — the AG's official handbook states a lease term making the tenant perform maintenance or repairs 'is not enforceable.' Requiring renter's insurance itself is lawful in MN; no statute restricts it. Cross-check: tenants-property-insurance-mn already requires coverage and was revised at RA-5-era work for the exculpatory-clause issue; no conflict with this finding.",
  },
  // Default & Termination
  {
    id: "edu-no-double-letting-statute-mn",
    title: "No Minnesota Statute on Double-Letting a Room",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota has no statute addressing double-letting — renting the same unit or room to two different tenants for overlapping periods. If it happens, the consequences run through ordinary contract law and through the new-construction and delivery-of-possession provisions, not through a dedicated statute. Note that if you are subject to the written-lease requirement, the lease must identify the specific unit the tenant will occupy before they sign, which is the closest Minnesota comes to addressing the problem.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'double-letting of a room' canvass topic for MN: CONFIRMED ABSENT. No provision found across the leasing-and-rent sections (§§504B.101-.154) read in full or in part this session. The §504B.111 'identify the specific unit before signing' requirement is the nearest analog and is noted as such rather than being claimed as a double-letting rule. Logged as an individual row rather than bundled into a combined confirmed-absences row — the library's one such bundle, edu-confirmed-absences-misc-ne, currently sits at NEEDS_REVIEW, which is reason enough not to repeat the pattern.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-written-notice-required-mn",
    title: "A Lease Cannot Downgrade a Statutory Written Notice to a Verbal One",
    group: "Compliance & Prohibited Terms",
    states: ["MN"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota specifies the form of notice statute by statute, and where a statute says the notice must be written, a lease term purporting to allow verbal notice instead does not override it. Terminating a tenancy at will requires written notice. The victims-of-violence termination requires signed written notice. The pre-eviction notice for nonpayment must be written and delivered personally or by first class mail. The landlord-disclosure duty must be satisfied in the lease or otherwise in writing. Many of these sections also carry their own non-waiver language, and the ones that do not still cannot be satisfied by a form the statute does not authorize. Treat every statutory notice as requiring the exact form the statute names.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'lease language designating VERBAL notice waives the landlord's right to written notice' canvass topic for MN: CONFIRMED ABSENT as a permission — Minnesota nowhere authorizes a lease to substitute verbal for statutorily-required written notice, and the per-section writing requirements (§504B.135, §504B.206 subd. 1(b)-(c), §504B.321 subd. 1a(b), §504B.181 subd. 1) are backed in several cases by explicit non-waiver provisions. Companion to edu-notice-delivery-methods-mn, which covers the delivery-METHOD question; this row covers the notice-FORM question, which the checklist treats as a distinct topic.",
  },
  // Pets
  {
    id: "edu-no-criminal-penalty-animal-denial-mn",
    title: "No Criminal Penalty for Wrongly Denying an Assistance Animal",
    group: "Pets",
    states: ["MN"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Minnesota does not criminalize a landlord's wrongful denial of a service or support animal. Minn. Stat. § 504B.113 is enforced civilly — a tenant may recover pet fees wrongly charged where you failed to disclose the fee prohibition, and a denial that amounts to disability discrimination is actionable under the Minnesota Human Rights Act. The criminal statute in this area, § 609.833, runs the other direction: it penalizes a person who misrepresents an animal as a service animal, and it applies in places of public accommodation rather than housing. So the exposure for getting an accommodation decision wrong is civil, not criminal — which is not a reason to be casual about it, since Human Rights Act remedies and attorney fees are substantial.",
    notes: "MN added (MN re-audit 2026-09-03, canvass pass 2) — resolves the 'landlord-facing criminal penalty for DENYING an assistance animal' canvass topic for MN: CONFIRMED ABSENT. §504B.113 was read in full at RA-23 and contains no criminal provision; its remedies are the subd. 3(c) fee-recovery action and the subd. 4-5 landlord-side misrepresentation remedies. §609.833 is the only criminal statute in this area and runs against tenants, in public accommodations, not housing (see edu-service-animal-misrepresentation-scope-mn). NOTE: Minnesota DOES have a landlord-facing criminal penalty elsewhere — §504B.111's petty misdemeanor for failing to provide a required written lease (see edu-lease-copy-defense-mn). So the answer to this checklist topic is 'absent for animals, present elsewhere,' which is worth carrying to future states as a reason to ask the criminal-penalty question topic-by-topic rather than once per state.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-self-help-eviction-ban-co",
    title: "Colorado's Self-Help Eviction Penalty Is Severe",
    group: "Compliance & Prohibited Terms",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado makes it unlawful to remove or exclude a tenant from a dwelling unit without going through court process, and the penalty is one of the harshest in this library. Under C.R.S. § 38-12-510, a landlord who willfully and unlawfully removes a tenant — or willfully and unlawfully cuts off heat, running water, hot water, electricity, gas, or other essential services — owes the tenant statutory damages equal to the tenant's ACTUAL damages PLUS the greater of three times the monthly rent or $5,000, plus attorney fees and costs. The court may also order possession restored to the tenant. That means changing the locks, pulling the meter, or hauling belongings to the curb can cost you five figures on a unit renting for a fraction of that, and can put the tenant back in the property. A writ of restitution executed by an officer is the only lawful route.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-self-help-eviction-ban-ks",
    title: "Kansas Penalizes Lockouts and Utility Shutoffs Directly",
    group: "Compliance & Prohibited Terms",
    states: ["KS"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Kansas gives a tenant a direct money remedy when a landlord takes matters into their own hands. Under K.S.A. 58-2563, if the landlord unlawfully removes or excludes the tenant from the premises, or willfully diminishes services by interrupting electric, gas, water, or another essential service, the tenant may recover possession OR terminate the rental agreement — and in either case recover the greater of one and one-half months' periodic rent or their actual damages. If the tenant terminates, you must also return the recoverable portion of the security deposit. Kansas courts have allowed punitive damages on top where the landlord's conduct was wanton and malicious. Two things worth knowing: this remedy does not require the tenant to give you the 30-day notice that the habitability statute requires, so a lockout or deliberate shutoff is actionable immediately; and the same remedy is what attaches to a retaliatory rent increase or service cut under the retaliation statute.",
    notes: "KS added (eviction-duty screen, 2026-09-03) — MAJOR GAP. Kansas had ZERO rows touching self-help eviction, ouster, lockout, or utility shutoff before this row, despite KS having been re-audited on 2026-08-29/30. K.S.A. 58-2563, text confirmed from the Kansas Office of Revisor of Statutes (ksrevisor.gov). Remedy: possession OR termination, plus the greater of 1.5 months' periodic rent or actual damages, plus return of the recoverable security deposit portion under K.S.A. 58-2550. Punitive damages available where acts are wanton and malicious (Geiger v. Wallace, 233 Kan.). No 30-day notice precondition, unlike the habitability track under §58-2559. §58-2572(b) routes the retaliation remedy through this same section, so the 1.5-month figure also attaches to retaliatory rent increases and service cuts. CROSS-STATE COMPARISON now possible across four states: CO actual + greater of 3x monthly rent or $5,000 (§38-12-510); KS greater of 1.5 months' rent or actual (§58-2563); MN treble or $500 whichever greater plus fees, and a misdemeanor (§§504B.221/.225/.231); NE and WY already carried rows. Colorado's is by far the most severe.",
  },
  // Default & Termination
  {
    id: "edu-holdover-co",
    title: "Colorado Has No Holdover Rent Multiplier",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado does not give landlords a doubled or trebled rent remedy against a holdover tenant. Under C.R.S. § 13-40-123 the prevailing party in a forcible entry and detainer action recovers damages, costs, and — for residential tenancies — attorney fees only if the lease provides for them. Colorado courts have measured those damages as the reasonable rental value of the premises for the period of unlawful detention. So your recovery for a holdover period is ordinary rental value plus costs, not a penalty multiple. If you want attorney fees available in a Colorado holdover case, the lease must contain a fee provision — the statute withholds them from residential parties otherwise.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-holdover-wy",
    title: "Wyoming Has No Holdover Rent Multiplier",
    group: "Default & Termination",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming does not provide a doubled or trebled rent penalty against a holdover tenant. A holdover is grounds for a three-day notice to vacate and a forcible entry and detainer action, and Wyoming's residential rental statutes contain no holdover damages formula at all — so plan on recovering the rental value of the holdover period and your costs through ordinary damages, not a penalty multiple. Do not confuse this with Wyo. Stat. § 1-21-1211(b), which is about PROPERTY DAMAGE: if the renter damages the unit, you may apply the deposit and the renter stays liable for damages beyond it, plus ten percent annual interest on unpaid amounts. That provision says nothing about rent for a holdover period.",
    notes: "WY added (2026-09-03, follow-up to the shared-clause pass). Holdover is a ground for a 3-day notice under Wyo. Stat. §1-21-1002(a)(i)/§1-21-1003. The actual-damages-plus-10%-interest measure is attributed to Wyo. Stat. §1-21-1211(b). NO MULTIPLIER FOUND. CONFIDENCE: LOWER THAN THE CO ROW AND FLAGGED AS SUCH. The §1-21-1211(b) figure comes from a single secondary source (PayRent, last updated 2022) and was NOT confirmed against the Wyoming statute directly; the surrounding negative (no multiplier) rests on absence across several secondary overviews rather than a primary read of Article 10. This project has already been burned by Wyoming secondary sources specifically (the WY log records Hemlane and LeaseWisely as unreliable). RECOMMEND primary-verifying §1-21-1211 before this row is relied on, and treat the 10% interest figure as provisional. | CORRECTED 2026-09-03, PRIMARY-VERIFIED. §1-21-1211 read in full from wyoleg.gov (Wyoming Legislature's own site) and cross-confirmed against Justia's 2024 codification — identical text, two independent source families. The confidence caveat in the prior note is discharged, but the read found an ERROR IN MY OWN ROW written one turn earlier. THE ERROR: the prior body text presented §1-21-1211(b)'s 'actual damages plus 10% interest' as the measure applying when a holdover tenant's liability exceeds the deposit. That is a MISAPPLICATION. Subsection (b) opens 'If the renter DAMAGES the rental property' — it governs PROPERTY DAMAGE, not holdover rent. It says nothing about liability for a holdover period. I took a figure from a secondary source that had correctly cited the section, and attached it to the wrong subject. THIS IS EXACTLY THE FAILURE MODE WYOMING'S OWN RE-AUDIT ADDED TO THE CHECKLIST — 'a correct citation can still be described wrongly.' A citation-existence screen passes it; only reading the section catches it. Second time this session I have committed a failure mode I had just finished documenting. THE UNDERLYING NEGATIVE STANDS AND IS NOW STRONGER: Wyoming has NO holdover damages formula. That conclusion no longer rests on a misread provision — it rests on §1-21-1211 being the residential rental article's damages section and containing no holdover measure. NEW FINDING from subd. (a), relevant to the eviction-duty screen: 'If the renter does not vacate the premises as required by a court order ... the sheriff may remove the renter's possessions and prevent the renter from reentering the premises WITHOUT FURTHER ACTION BY THE COURT.' Wyoming imposes NO storage, inventory, care, or notice duty on the owner for removed possessions — a stark contrast with Minnesota's §504B.365 (mandatory inventory, dual-channel notice, care standard, two disposal tracks) and with §504B.271. See edu-post-writ-possessions-wy.",
  },
  {
    id: "edu-post-writ-possessions-wy",
    title: "Wyoming Imposes No Storage Duty on Removed Possessions",
    group: "Default & Termination",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming is unusually spare about what happens to a tenant's belongings after an eviction. Under Wyo. Stat. § 1-21-1211(a), if the renter does not vacate as a court order requires, the sheriff may remove the renter's possessions and prevent the renter from reentering, without any further action by the court. Wyoming's residential rental statutes impose no storage period, no inventory requirement, no duty of care over removed property, and no notice-before-disposal obligation on the owner. That is far less prescriptive than neighboring states — Minnesota, for example, requires a signed inventory prepared in the officer's presence, mailed notice, a care standard, and either a 28-day hold or a 60-day lien-and-sale track depending on where the property is stored. Wyoming's silence is not permission to be careless: ordinary conversion and bailment principles still apply, and documenting what was removed and its condition protects you if the tenant later claims property was lost or destroyed.",
    notes: "WY added (2026-09-03, eviction-duty screen follow-up). Wyo. Stat. §1-21-1211(a), primary-verified from wyoleg.gov and Justia's 2024 codification. Found while primary-verifying §1-21-1211(b) for the holdover row — an incidental read that produced a screen-relevant finding, which is itself an argument for the whole-section rule. THE FINDING IS AN ABSENCE, and it is stated as one: no storage period, inventory, care duty, or pre-disposal notice appears in Article 12. The eviction-duty screen recorded WY as having 0 post-writ property rows; this row fills that with a confirmed-absent answer rather than leaving it invisible, per the proof-of-absence rule. CONTRAST logged deliberately: MN §504B.365 (inventory contents, dual-channel notice, care standard, two tracks keyed to storage location) and §504B.271 (28-day hold, 14-day sale notice, 24h/48h retake duty). CO's §38-12-126 remains unverified (flagged in the eviction-duty screen). The closing caution about conversion and bailment is general common-law reasoning, NOT a Wyoming statutory finding — flagged as such.",
  },
  {
    id: "edu-post-writ-possessions-co",
    title: "Colorado Gives You No Storage Duty — and Broad Immunity",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado is unusually protective of landlords once a writ of restitution is executed. Under C.R.S. § 13-40-122(3) you have no duty to store or maintain a tenant's personal property removed from the premises, and even if you choose to store it you have no duty to inventory it, to determine who owns it, or to note its condition. Storing it creates neither an express nor an implied bailment, and the statute makes you immune from liability for loss or damage. A landlord who follows the lawful directions of the officer executing the writ is immune from both civil and criminal liability for acts or omissions involving the removed property. If you do elect to store, § 13-40-122(4) lets you charge the tenant reasonable storage costs, recovered either through your lien rights under title 38 or by requiring payment before the tenant reclaims the property. If you do not store it, the property must remain available for the tenant to reclaim from the public right-of-way. Two timing rules bind the officer, not you, but affect your schedule: a writ may only be executed between sunrise and sunset, no earlier than ten days after judgment — and no earlier than thirty days if the tenant receives SSI or Social Security disability benefits.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-writ-pet-animal-duties-co",
    title: "Pets Are the One Post-Eviction Duty Colorado Does Impose",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado relieves you of almost every duty toward a tenant's belongings after a writ is executed — but pet animals are the exception, and the duties are affirmative. Under C.R.S. § 13-40-122 you must give the local animal control authority access to the premises to remove or secure any pet animals in a timely manner, and provide the tenant's name and contact information if you have it. You must post notice at the premises, in a visible place, naming the organization the animals were taken to and how to contact it, and give the tenant that same information on request. No pet animal may be removed from the premises during execution of the writ and left unattended on public or private property. This is a genuine carve-out from the broad immunity elsewhere in the section: the statute treats leaving a pet on the curb the way it does not treat leaving furniture there.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-holdover-damages-nd",
    title: "Holdover Damages: Two Statutory Double-Damages Measures",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant gave you notice they intended to leave and then failed to give up the premises, the measure of damages is double the rent they would otherwise owe. Separately, if a tenant willfully holds over after the end of the term, and after you have duly given notice of intention to evict and made demand for possession, the measure is double the yearly value of the property for the time of withholding, plus compensation for the detriment caused. Outside those two specific situations an evicted tenant simply remains liable for rent for the remainder of the term, and your duty to mitigate applies throughout.",
    notes: "N.D.C.C. §§ 32-03-27, 32-03-28, read from primary text at ND re-audit 2026-09-06 (ndlegis.gov/cencode/t32c03.pdf, whole chapter). CORRECTS A RECORDED ABSENCE. ND's row in the consolidated named-topic checklist read 'Holdover damages formula | New architecture -- § 47-16-13.7 imposes straight rent liability through the lease term (subject to mitigation), no multiplier at all, unlike CO's double-rent, KS's 1.5x, or NE's 3x.' That is wrong. ND has TWO double-damages measures; they sit in Title 32 (Judicial Remedies) rather than Title 47, which is exactly the adjacent-chapter failure the checklist's own instruction warns about, committed by this project in ND's original pass. WORDING DISCIPLINE (per the NE re-audit's 'three months periodic rent' vs '3x periodic rent' finding): 32-03-28 is 'double the YEARLY VALUE of the property for the time of withholding' -- a rate measure annualised then prorated, NOT 'double the rent.' 32-03-27 is 'double the rent which the tenant otherwise ought to pay.' The two are different measures with different triggers and must not be merged. 32-03-27 triggers on the TENANT's own notice of intention to leave; 32-03-28 triggers on willfulness plus LANDLORD's notice of intention to evict plus demand for possession. 32-03-21 supplies the residual measure (value of use, not exceeding six years) for wrongful occupation not covered by 32-03-22, -27, -28 or -29. Interacts with § 47-16-13.7 (evicted lessee liable for rent for remainder of term) and § 47-16-13.5 (mitigation duty). NOT propagated to the generic `holdover` clause: ND is untagged there, and per the holdover provenance finding the removed 'double the Monthly Rent' figure must not be reintroduced -- ND's measures are statutory, differently worded, and trigger-gated, so they belong in this ND-specific row rather than in generic clause text.",
  },
  {
    id: "edu-eviction-hardship-stay-nd",
    title: "The Court Can Stay Execution for Hardship",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If the court rules for you it must enter judgment for immediate restitution of the premises. But if the tenant shows that immediate restitution would work a substantial hardship on them or their family, the court may stay the special execution for up to five days. That stay is unavailable if the eviction judgment rests in whole or in part on a disturbance of the peace.",
    notes: "N.D.C.C. § 47-32-04, primary text confirmed at ND re-audit 2026-09-06. Found by the eviction-duty screen, which had never run against ND. Landlord-facing timing expectation: the five-day cap is a ceiling, and the peace-disturbance carve-out ties back to 47-32-01(7), which is itself a no-notice ground. Same section also bars joining an eviction with other actions except for accrued rents and profits or damages arising from the defendant's possession, and bars counterclaims except as setoff to such a demand.",
  },
  {
    id: "edu-no-utility-shutoff-statute-nd",
    title: "No Separate Utility-Shutoff Penalty (But Shutoff Is Still Exposure)",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota has no statute making a landlord's utility shutoff its own offence with its own penalty. That does not make it safe: cutting utilities to force a tenant out is exposure under the general forcible-exclusion measure, which is treble damages. You also have an affirmative duty to supply running water, reasonable hot water, and reasonable heat.",
    notes: "CONFIRMED ABSENCE recorded as a row per the standing rule that log-only absences are invisible to future canvasses. Eviction-duty screen, ND re-audit 2026-09-06. Whole of ch. 47-32 read from primary text: contains no landlord-conduct prohibition of any kind. No distinct utility-interruption tort or offence located in ND law. Exposure routes through § 32-03-29 (treble damages, forcible ejection or exclusion) -- see edu-self-help-eviction-ban-nd. Affirmative supply duty is § 47-16-13.1(1)(f), subject to its stated exceptions (building not required by law to be so equipped; heat or hot water within tenant's exclusive control via direct utility connection; utility supply failure).",
  },
  {
    id: "edu-post-writ-property-duties-nd",
    title: "After the Writ: What You May Do With Belongings Left Behind",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota imposes no post-writ inventory, storage, notice, or care-standard duty on you or the sheriff for a tenant's remaining belongings. The abandoned-property rules govern instead. One provision applies specifically after eviction: if you remove abandoned property from the unit after obtaining a judgment of eviction and after the special execution has been served, you have a lien on that property for the reasonable amount of storage and moving expenses, and may keep possession until those charges are paid. That lien does not have priority over a prior perfected security interest in the property.",
    notes: "N.D.C.C. § 47-16-30.1, final two sentences. Eviction-duty screen, ND re-audit 2026-09-06. PROMOTED FROM NOTES TO A ROW: this post-writ lien was already recorded, but only inside abandoned-property-nd's notes field, where no canvass could see it -- the self-sealing shape the MN session found three times. The screen's baseline count for ND on post-writ duties was 0 rows precisely because of this. CONFIRMED ABSENCE of everything else: ch. 47-32 read in full from primary text and imposes no post-writ property duty; no separate storage/inventory/notice statute located. § 11-15-11 covers a sheriff's expense of preserving property taken under attachment or execution generally, not an eviction-specific tenant-property duty. Note the interaction the original row missed: 47-16-30.1's self-help disposal route (value not more than $2,500, 28-day wait) is the general path, while this lien route is specifically post-judgment-and-post-special-execution. They are different procedures keyed to different triggers, and the lien route carries no stated value ceiling.",
  },
  {
    id: "edu-no-post-writ-animal-duty-nd",
    title: "No Statutory Procedure for Animals Left After an Eviction",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota law says nothing about what happens to a tenant's animals after an eviction -- no animal-control notification route, no notice-posting requirement, no unattended-animal rule, and no duty assigned to you or the sheriff.",
    notes: "CONFIRMED ABSENCE recorded as a row. Eviction-duty screen, ND re-audit 2026-09-06. Ch. 47-32 read in full from primary text; no animal provision. Ch. 47-16 likewise. ND's animal-cruelty provisions (ch. 36-21.2) are of general applicability and are not triggered by, or tailored to, eviction. SCOPE DECISION 2026-09-06: an earlier draft of this row closed with the sentence 'General animal-cruelty law still applies to you as it does to anyone, and an animal is not property you can simply leave in a locked unit.' That was Claude's legal INFERENCE, not a located rule -- no ND statute says cruelty law survives an eviction judgment, because no ND statute addresses the intersection at all. Removed on Taylor's review so the row states only the verified absence. The underlying practical exposure is real but unsourced and therefore not recorded as verified content.",
  },
  // Notices & General
  {
    id: "edu-dv-confidentiality-nd",
    title: "Domestic Violence Information: Non-Disclosure Duty and Damages",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant gives you information documenting domestic violence in support of a lease termination, you may not disclose it. It may not be entered into any shared database or given to any person. You may use it as evidence in an eviction proceeding, in a claim for unpaid rent or damages arising out of the tenancy, or where the law otherwise requires. You also may not refuse to rent to someone, refuse to negotiate for a rental with them, otherwise make a dwelling unavailable to them, or retaliate, solely because they or a household member exercised this termination right. That duty reaches applicants, not just current tenants, so it applies at the screening stage as well as during a tenancy. A court may award $1,000 in statutory damages for a violation, plus actual damages, reasonable attorney's fees, costs, and disbursements.",
    notes: "N.D.C.C. § 47-16-17.1(4),(10),(11). Full primary text supplied directly by Taylor 2026-09-06. The $1,000 figure is STATUTORY DAMAGES the court 'may award' -- discretionary, not automatic, and stacked on top of actual damages plus fees and costs rather than in lieu of them. Wording preserved per the NE re-audit's paraphrase finding: 'may award statutory damages of one thousand dollars', not 'a $1,000 penalty'. The (10) anti-retaliation duty reaches APPLICANTS as well as tenants ('refuse to rent, refuse to negotiate for the rental of'), so it is a screening-stage duty, not only a tenancy-stage one. OVERLAP NOTE: edu-limited-retaliation-protection-nd already references § 47-16-17.1(10) as one of ND's two narrow retaliation protections. That row remains correct and is not edited; this row records the operative duty and its remedy, which that row does not. Flagged for Taylor in case a single consolidated retaliation row is preferred. | 2026-09-06, Taylor's direction: THIS ROW IS NOW CANONICAL for N.D.C.C. § 47-16-17.1(10). The duty was previously stated in near-identical words here and in edu-limited-retaliation-protection-nd. No display collision arises (both are education rows on different topics and both render), but duplicated substance drifts -- if (10) is amended, two rows need changing and only one might get it, the same shape as the log-says-one-thing-CSV-says-another failures found elsewhere in this re-audit. This row carries the duty and its remedy; the retaliation row now points here. APPLICANT-STAGE REACH SURFACED INTO THE BODY: (10)'s 'refuse to rent, refuse to negotiate for the rental of' language reaches APPLICANTS. That was previously recorded only in notes on both rows, so a landlord reading either body would reasonably have concluded the duty bit only once someone was a tenant.",
  },
  // Security Deposit
  {
    id: "edu-dv-deposit-timing-nd",
    title: "Deposit Return Timing After a Domestic Violence Termination",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "When a tenant terminates under North Dakota's domestic violence provision, the clock for returning the security deposit does not start the way it normally would. If the departing victim is the only tenant (counting their minor children), the deposit timing is triggered on the first day of the month following the date they vacate. If other tenants remain bound by the lease, it is triggered on expiration of the lease instead.",
    notes: "N.D.C.C. § 47-16-17.1(8), full primary text supplied directly by Taylor 2026-09-06. INTERACTION THE LIBRARY PREVIOUSLY MISSED: security-deposit-return-nd states the ordinary § 47-16-07.1 rule (30 days after termination of the lease and delivery of possession). § 47-16-17.1(8) displaces that trigger in DV terminations, and in the co-tenant case pushes it out to LEASE EXPIRATION -- potentially far later than 30 days after the victim vacates. Recorded as landlord education rather than folded into the clause text, since the clause is tenant-facing and this is a conditional timing rule; flagged for Taylor if a cross-reference in security-deposit-return-nd is preferred.",
  },
  // Default & Termination
  {
    id: "edu-tenancy-type-notice-nd",
    title: "Weekly and Room Tenancies Follow Different Rules",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota does not treat every residential tenancy the same way. If you rent lodgings for an unspecified term, the tenancy is presumed to run for whatever period you use to set the rent -- rent at a weekly rate presumes a one-week tenancy. Termination notice for an unspecified-term lease is measured by the length of the term itself, capped at one calendar month, so a weekly tenancy takes roughly a week's notice, not a month's. Only where there is no agreement about the rent period does the tenancy default to monthly. The automatic-renewal notice rule applies only to leases with a specified term of two months or more, and the mid-tenancy term-change right applies only to month-to-month tenancies.",
    notes: "N.D.C.C. §§ 47-16-05, 47-16-15(1)-(2), 47-16-19, 47-16-20, 47-16-06.1, 47-16-07. Primary text. THIS IS THE ADDENDUM K.2 RESULT FOR THE ND RE-AUDIT. Boundary re-examined: tenancy type -- the inherited assumption that ch. 47-16 is one undifferentiated residential regime and that every ND answer could be given as though the tenancy were a whole-dwelling month-to-month or fixed-term lease. VERDICT: BOUNDARY WRONG. ND draws tenancy-type distinctions in at least six places, and the original pass recorded none of them: (1) 47-16-05 presumes a one-year term for leases of real property OTHER THAN LODGINGS; (2) 47-16-19 presumes a lodgings tenancy runs for the rent-estimation period, expressly 'renting at a weekly rate of rent is presumed to be for one week'; (3) 47-16-20 sets three different default rent-payment regimes -- agricultural yearly, lodgings monthly, other rents quarterly; (4) 47-16-15(1) scales termination notice to the term of the hiring, capped at one calendar month, whereas 47-16-15(2)'s flat one-calendar-month rule is expressly limited to month-to-month tenancies; (5) 47-16-06.1's automatic-renewal notice duty applies only to leases 'of a specified term of two months or more'; (6) 47-16-07's term-change right applies only to leases 'from month to month'. MATERIALITY: this is the same error shape as the NE re-audit's 'three months periodic rent' vs '3x periodic rent' finding -- measures that coincide in a monthly tenancy and diverge sharply outside one. Had ND's termination-notice clause been written during the original pass it would almost certainly have stated a flat one calendar month, overstating a weekly tenant's notice obligation roughly fourfold. The clause was never written, so no shipped row carried the error -- the boundary produced an omission rather than a misstatement. CROSS-STATE: no other state has been examined for tenancy-type sensitivity. CO, WY, KS, NE, MN and SD rows all rest on the same untested inherited assumption. Recommended as a candidate screen, not actioned here.",
  },
  // Notices & General
  {
    id: "edu-automatic-renewal-notice-nd",
    title: "Automatic Renewal Clauses Require 30 Days Written Notice",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If your lease has a specified term of two months or more and contains an automatic renewal clause, you cannot enforce that clause unless you notified the tenant in writing of the automatic renewal provision -- personally or by first-class mail -- at least thirty days before the current lease expires. If you don't give that notice, the lease simply expires and the terms convert to a month-to-month tenancy.",
    notes: "N.D.C.C. § 47-16-06.1. Primary text. GAP FILLED: this section was READ during ND's original statute walk and explicitly listed in that session's own notes as a section on the map, but was never converted into a row. A second instance of the same failure as the DV clause (R.10) in the same state -- read, summarised, never committed. The sanction is unusual and worth landlord attention: non-compliance does not void the lease, it defeats the renewal and drops the parties into month-to-month on the latest lease's terms. Tenancy-type gated: 'specified term of two months or more' -- see edu-tenancy-type-notice-nd. Interacts with 47-16-06, which separately provides that a residential lessee who holds over and pays accepted rent is presumed to have converted to month-to-month (non-residential: renewed on the same terms, not exceeding one year).",
  },
  {
    id: "edu-term-change-notice-nd",
    title: "Changing Lease Terms Mid-Tenancy",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "In a month-to-month tenancy you may change the terms of the lease -- including rent -- effective at the expiration of the month, by giving written notice at least thirty days before the end of that month. Notice may be served in any reasonable manner that actually informs the tenant of the changes. If the tenant stays past the end of the month, the new terms become part of the lease. A tenant who receives such a notice may instead terminate at the end of the month by giving at least twenty-five days' notice.",
    notes: "N.D.C.C. §§ 47-16-07 and 47-16-15(3). Primary text. GAP FILLED: no ND row addressed mid-tenancy term changes or rent increases. NOTE THE ASYMMETRY, which is easy to misread: the landlord's change notice is THIRTY DAYS before the end of the month (47-16-07), while the tenant's responsive termination notice is TWENTY-FIVE DAYS (47-16-15(3)). The tenant's shorter window is deliberate -- it lets a tenant who receives a 30-day change notice still exit at the same month-end rather than being locked into the new terms for a further month. Tenancy-type gated: 47-16-07 applies to leases 'from month to month' only. RENT-INCREASE INTERACTION: this is ND's rent-increase notice rule by operation, since rent is a term of the lease. § 47-16-02.1 separately preempts political subdivisions from rent control, so no local rule can shorten or lengthen this. Recorded here because ND has no separate rent-increase statute and a canvass looking for one would find nothing.",
  },
  // Disclosures
  {
    id: "edu-fair-housing-exemptions-nd",
    title: "You May Be Exempt From Parts of North Dakota Fair Housing Law",
    group: "Disclosures",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota's housing discrimination chapter exempts some small landlords. If you rent rooms or units in a building with no more than four families living independently, and you occupy one of those units as your own residence, the sale-or-rental prohibitions do not apply to you. There is also an owner-occupied single-family exemption: it covers an owner of no more than three single-family houses who does not use a broker or agent, and it is limited to one sale or rental in any twenty-four-month period where you were not the most recent resident. Two warnings. The advertising prohibition is NOT exempted -- you may not publish a notice or advertisement indicating any discriminatory preference, whatever your exemption. And federal fair housing law applies separately and does not necessarily exempt you on the same terms.",
    notes: "N.D.C.C. § 14-02.5-09(1)-(2), full chapter primary text read 2026-09-06 (ndlegis.gov/cencode/t14c02-5.pdf). MATERIAL OMISSION IN SHIPPED WORK. edu-fair-housing-additions-nd and edu-housing-voucher-protection-nd both stated flat, unqualified prohibitions. Neither mentioned that ch. 14-02.5 carries exemptions, and the exemptions land precisely on Steinoak's core customer: an owner-occupant of a small multi-unit, or an owner of three or fewer single-family houses. Telling that landlord they are unconditionally bound is a substantive error in a landlord-facing library, not a nuance. EXEMPTION SCOPE IS ASYMMETRIC AND EASY TO MISREAD, which is why it is spelled out in the body: 14-02.5-09(2) exempts § 14-02.5-02 and §§ 14-02.5-04 through -08, but conspicuously NOT § 14-02.5-03 (Publication). An exempt landlord who advertises 'no children' or 'Christian tenants preferred' still violates the chapter. 14-02.5-09(1) has four cumulative conditions (ownership cap of three single-family houses; no broker/agent/dealer involvement; no prohibited advertising; one sale-or-rental per 24 months where the owner was not the most recent resident) plus a definitional trap: a person is 'in the business' -- and so outside the exemption -- if they own any dwelling designed for or occupied by FIVE OR MORE families, or hit the 3-transaction/2-agency thresholds in 12 months. FEDERAL OVERLAY NOT ANALYSED. The federal FHA has its own, differently-drawn exemptions. This row deliberately warns of the overlay without characterising it; a federal analysis has never been in this project's scope.",
  },
  // Default & Termination
  {
    id: "dv-state-housing-program-protection-nd",
    title: "Victims in State Housing Programs Cannot Be Denied or Evicted On That Basis",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If your rental is part of a state housing program, you may not deny admission to, deny assistance under, terminate participation of, or evict an applicant or tenant on the basis that they are or have been a victim of domestic violence, dating violence, sexual assault, or stalking, provided they otherwise qualify.",
    notes: "N.D.C.C. § 14-02.5-02(3), primary text read 2026-09-06. NEVER PREVIOUSLY ROWED, and not discoverable from ch. 47-16: it sits in the housing discrimination chapter. DISTINCT FROM § 47-16-17.1 (dv-lease-release-nd), which is a TENANT'S termination right of general application. This is a LANDLORD PROHIBITION limited to housing that is part of a state housing program -- different trigger, different duty-holder, different scope. Both apply where the property is in such a program. The four enumerated categories (domestic violence, dating violence, sexual assault, stalking) are broader than § 47-16-17.1's 'domestic violence' alone -- notably 'dating violence' and 'stalking' appear here and not there. 'State housing program' is not defined in the chapter; scope of that term is UNRESOLVED and flagged rather than assumed. Enforcement runs through the ch. 14-02.5 machinery, so the penalties in edu-fair-housing-enforcement-nd attach. Whether the § 14-02.5-09 exemptions can reach a state-programme property is not addressed by the text.",
  },
  // Landlord Responsibilities
  {
    id: "edu-disability-modification-nd",
    title: "Reasonable Modifications and Accommodations for Disability",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You may not refuse to permit a reasonable modification of the premises made at the tenant's own expense where it may be necessary for them to fully enjoy the property -- though in a rental you may, where reasonable, condition permission on the tenant restoring the interior to its prior condition afterwards, ordinary wear and tear excepted. Separately, you may not refuse a reasonable accommodation in your rules, policies, practices, or services where the accommodation may be necessary to give the tenant equal opportunity to use and enjoy the dwelling. Neither duty requires you to house someone whose tenancy would be a direct threat to others' health or safety.",
    notes: "N.D.C.C. § 14-02.5-06(3)(a)-(b), (6), primary text read 2026-09-06. NEVER PREVIOUSLY ROWED FOR ND. The modification/accommodation split matters and is the same distinction the NE library already draws (edu-no-modification-duty-ne): MODIFICATION is physical and at the TENANT's expense -- you must permit, not fund; ACCOMMODATION is a change to rules or policies and carries no expense carve-out in the text. Supports assistance-animal-accommodation-nd, which relies on the accommodation duty but cited only § 47-16-07.5/07.6 (the documentation-limits sections) and never the underlying state accommodation obligation. 14-02.5-06(3)(c) adds adaptive-design construction requirements for covered multifamily dwellings (4+ units with an elevator, or ground-floor units in other 4+ unit buildings), inapplicable to buildings first occupied on or before 1991-03-13, with ANSI A117.1 (1986) compliance deemed sufficient. Construction-stage duty, out of lease scope, recorded here rather than rowed separately.",
  },
  // Disclosures
  {
    id: "edu-fair-housing-enforcement-nd",
    title: "What a Fair Housing Violation Actually Costs",
    group: "Disclosures",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A tenant or applicant can complain to the Department of Labor and Human Rights within one year of the discriminatory practice, or file a civil action in district court within two years. In court, a judge may award actual and punitive damages, reasonable attorney's fees, and court costs. Through the administrative route the Department may order actual damages, fees and costs, and on top of that assess civil penalties rising with your history of prior findings. Using force or threat of force to intimidate or interfere with someone exercising these housing rights is a class A misdemeanour, and coercing, intimidating, threatening or interfering with anyone exercising rights under the chapter is itself a discriminatory practice.",
    notes: "N.D.C.C. §§ 14-02.5-18(1), 14-02.5-32, 14-02.5-37, 14-02.5-39(1), 14-02.5-41, 14-02.5-44, 14-02.5-45. Primary text 2026-09-06. NEVER PREVIOUSLY ROWED: ND's fair housing rows stated duties with no consequence attached. FIGURES DELIBERATELY KEPT OUT OF bodyText and recorded here instead, because the tiering is intricate enough that a paraphrase would misstate it -- the exact NE-re-audit failure mode. § 14-02.5-32(2): up to $11,000 where the respondent has a prior finding; up to $27,000 for one other discriminatory housing practice in the five-year period ending on the filing of charges; up to $55,000 for two or more in the seven-year period ending on filing. § 14-02.5-32(3) removes the lookback windows entirely where the same INDIVIDUAL committed the earlier acts. § 14-02.5-37(2) pattern-or-practice penalties are separate: up to $50,000 first violation, $100,000 second or subsequent. § 14-02.5-44 fee-shifting is MUTUAL ('prevailing party'), consistent with ND's § 47-16-13.6 posture -- a second data point for the standing cross-state fee-shifting-mutuality question. § 14-02.5-41 allows PUNITIVE damages in the civil route; the administrative route (14-02.5-32(1)) does not mention them. Materially different exposure depending on the forum the complainant elects under § 14-02.5-30.",
  },
  // Landlord Responsibilities
  {
    id: "edu-smoke-alarm-portfolio-exemption-nd",
    title: "When You Are Exempt From the Visual Alarm Requirement",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You must provide an approved visual smoke detection system or other visual fire alarm if a deaf tenant requests one in writing. You are exempt from that requirement only if your rental property does not exceed one building and that building does not exceed four residential dwelling units. Both conditions must be met -- owning a single six-unit building does not exempt you, and neither does owning two four-unit buildings. Separately, lodging establishments and assisted living facilities are outside this statute altogether and follow the Department of Health's rules instead.",
    notes: "N.D.C.C. §§ 23-13-15(1)-(2), 23-09-02.1. Primary text 2026-09-06. Split out of smoke-detector-duty-nd, where the exemption had been recited in TENANT-FACING clause text. It is a fact about the landlord's portfolio, not a term of the tenancy, and belongs in landlord education. The conjunctive reading ('does not exceed one building AND that building does not exceed four residential dwelling units') is stated explicitly in the body because the two-limb structure is the kind of thing a landlord reads as either/or. No ND case law located construing it; the conjunctive reading is the plain text.",
  },
  // Rent & Payment
  {
    id: "edu-postdated-check-forfeits-remedies-nd",
    title: "Accepting a Postdated Check Forfeits Your Bad-Check Remedies",
    group: "Rent & Payment",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you knowingly accept a postdated rent check, or agree with the tenant that a check will not be presented until a specified time, North Dakota's bad-check statute does not apply to that check at all. You lose the $40 collection fee, the civil penalty, and the ability to refer the matter for criminal prosecution. If you want those remedies available, do not agree to hold a check.",
    notes: "N.D.C.C. § 6-08-16(3), primary text 2026-09-06. Split into its own row because it is a behaviour rule the landlord acts on BEFORE a breach occurs, not a remedy they look up afterwards -- the same reasoning behind the reservation-of-rights item on the Steinoak feature backlog. Buried in a definitional subsection ('The word credit as used in this section means...'), which is why a subsection-targeted read misses it. Applies to the § 6-08-16 insufficient-funds offence. Whether the same carve-out reaches § 6-08-16.2 (no-account instruments) is NOT stated in that section and has not been resolved -- flagged, not assumed.",
  },
  // Landlord Responsibilities
  {
    id: "edu-alarm-requirements-by-building-type-nd",
    title: "Alarm Requirements Differ by Building Type",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota's electrical code sets alarm requirements that vary with the kind of building you own. Smoke alarms are required in each sleeping room, outside each separate sleeping area near the bedrooms, and on each additional story including basements and habitable attics; where more than one is required in a unit they must be interconnected. If you own a two-family dwelling -- a duplex -- each unit must additionally have a notification device connected to the smoke alarm system in the other unit. Apartment houses, hotels, and congregate residences must have a manual and automatic fire alarm system. In new construction, an approved heat alarm must be installed in an attached single-tenant garage and interconnected with the residence's smoke alarms.",
    notes: "N.D. Admin. Code § 24.1-06-01-40, chapeau and subsections (1), (1)(b), (2). Official ndlegis.gov PDF, 2026-09-06. NEVER PREVIOUSLY ROWED, and a genuine gap: smoke-detector-duty-nd rests on N.D.C.C. § 23-13-15, which says only that systems must comply with 'applicable national fire protection standards as defined by rules adopted by the state fire marshal' and specifies NO PLACEMENT AT ALL. The electrical code supplies the actual placement rules. A landlord reading only the statute learns that alarms are required but not where to put them. THE DUPLEX RULE IS THE STANDOUT for Steinoak's customer base: § 24.1-06-01-40(2)'s second sentence -- 'For two-family dwellings, a notification device connected to a smoke alarm system in the other dwelling unit must be provided in each dwelling unit' -- means a duplex owner must cross-connect notification between units. Easy to miss and squarely aimed at the small-multi-unit owner. SOURCE-OF-LAW CAUTION: this is a State Electrical Board rule (General Authority NDCC 43-09-05; Law Implemented NDCC 43-09-21, 43-09-22), enforced through electrical licensing and inspection, not through landlord-tenant law. It creates no tenant remedy under ch. 47-16 and is landlord education only -- deliberately NOT drafted as lease clause text. Whether local codes impose more (the rule repeatedly defers to 'locally adopted codes or the State Building Code and state fire code') is the municipal-ordinance layer, which remains out of scope by standing product decision.",
  },
  // Security Deposit
  {
    id: "edu-unclaimed-deposit-holder-duties-nd",
    title: "What You Must Do With an Unclaimed Security Deposit",
    group: "Security Deposit",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A security deposit, including its interest, that stays unclaimed for more than one year after the lease ends is presumed abandoned and you become a holder under North Dakota's unclaimed property act. That carries real duties. If you have a usable address for the tenant and the deposit is worth $25 or more, you must mail them notice by first-class mail no more than 120 days before you file your report, using the wording the statute prescribes. You must file the report electronically before November 1 each year, covering the twelve months ending the previous July 1, and pay the money over when you file. You must keep the records for ten years. If you miss the deadlines the state can charge interest and a civil penalty for each day you are late, and deliberately evading the duty carries far steeper penalties. Paying over in good faith after giving proper notice releases you from further liability to the tenant.",
    notes: "N.D.C.C. §§ 47-30.2-04(15), 47-30.2-21, 47-30.2-22, 47-30.2-23, 47-30.2-24, 47-30.2-26, 47-30.2-27, 47-30.2-32, 47-30.2-33, 47-30.2-65, 47-30.2-66. Primary text 2026-09-06. NEVER PREVIOUSLY ROWED. The entire escheat obligation existed in this library as a single trailing sentence inside security-deposit-return-nd's tenant-facing clause text ('Landlord will report and remit it as required by North Dakota's unclaimed property law'). That sentence is accurate and useless -- it tells the landlord a duty exists and nothing about what it is. A landlord holding an unclaimed deposit is a statutory HOLDER with reporting, notice, record-retention and remittance duties and day-rate penalties. FIGURES KEPT IN NOTES, not body, per the NE paraphrase discipline: § 47-30.2-65 interest accrues at an annual rate of one percent of the sum for each thirty-day period of delinquency or fraction thereof; civil penalty $200 per day to a cumulative maximum of $5,000. § 47-30.2-66: willful evasion or failure to perform, $1,000 per day to a cumulative maximum of $25,000 PLUS twenty-five percent of the amount that should have been reported; fraudulent report, same day-rate and cap plus twenty-five percent. § 47-30.2-67 allows a waiver request within thirty days of the assessment notice; the commissioner may waive up to $25,000, above which the board decides. DRAFTING OPPORTUNITY FLAGGED FOR TAYLOR: § 47-30.2-31 permits a holder to deduct a DORMANCY CHARGE from property before remitting, but ONLY if an enforceable WRITTEN CONTRACT between holder and apparent owner authorises the charge for failure to claim within a specified time, AND the holder regularly imposes it and regularly does not reverse or cancel it. That is a lease-drafting hook -- a clause could create the authorisation -- but it also imposes a consistency-of-practice condition a landlord can fail by being lenient. Not drafted as a clause; surfaced for decision. § 47-30.2-33 good-faith safe harbour: paying or delivering in full in good faith with substantial compliance with the notice sections relieves the holder of liability to the extent of the value delivered, and the state indemnifies.",
  },
  // Notices & General
  {
    id: "edu-dv-protection-order-chapter-moved-nd",
    title: "North Dakota Moved Its Protection Order Law in 2025",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota's domestic violence protection order provisions were repealed from the domestic violence chapter in 2025 and now live in the civil protection orders chapter. The definition of domestic violence itself did not move and still sits in the domestic violence chapter, so a lease that cites it remains correct. If you rely on any guidance written before 2025 that cites the old protection order sections, those citations are dead.",
    notes: "N.D.C.C. ch. 14-07.1 read from primary text 2026-09-06. §§ 14-07.1-02 (Domestic violence protection order), 14-07.1-03, 14-07.1-03.1, 14-07.1-04, 14-07.1-05, 14-07.1-05.1, 14-07.1-06, 14-07.1-07 and 14-07.1-08 were all REPEALED by S.L. 2025, ch. 145, § 17. The protection-order machinery now sits in ch. 14-07.7 (Civil Protection Orders). § 14-07.1-01 (Definitions) SURVIVES. THIS DEFINITIVELY CLOSES the § 47-16-17.1 currency question that was open from ND's original session through most of this re-audit. The vLex 'Effective 1/1/2026' index entry is now explained: S.L. 2025 ch. 145 is the 2025 protection-order act. § 47-16-17.1's own cross-references are CORRECT and CURRENT as written -- it cites ch. 14-07.7 for civil protection orders (the new home) and § 14-07.1-01 for the definition (which did not move). No amendment to § 47-16-17.1 was needed and none is outstanding. Recorded as a row rather than log-only because a landlord or advisor working from pre-2025 material will hit dead citations, and because this library's own ND rows cite § 14-07.1-01 in three places.",
  },
  // Rent & Payment
  {
    id: "edu-no-cash-receipt-duty-nd",
    title: "No Duty to Give a Receipt for Cash Rent",
    group: "Rent & Payment",
    states: ["ND"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota does not require you to give a tenant a written receipt for rent paid in cash. Giving one anyway is worth doing: without a receipt a cash payment leaves no record either party can produce, and in a nonpayment dispute the absence cuts against whoever carries the burden on that point.",
    notes: "CONFIRMED ABSENCE recorded as a row per the standing rule that log-only absences are invisible to future canvasses. Whole of ch. 47-16 read from primary text this session; no receipt provision anywhere. § 47-16-20.1 bans charging a FEE to accept cash, a check or a money order, but imposes no receipt duty -- adjacent subject, different rule, and the pair is easy to conflate. Canvass topic inherited from the MN session; ND had never been checked against it. One secondary source (real-estate.laws.com) asserts a ND cash-receipt requirement. Unsupported by any primary text and expressly rejected here. The closing sentence of the body is practical advice, not a legal duty, and is phrased so it cannot be read as one.",
  },
  // Notices & General
  {
    id: "edu-no-lease-copy-duty-nd",
    title: "No Statutory Duty to Give the Tenant a Copy of the Lease",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota does not require you to deliver a copy of the signed lease to the tenant, and failing to do so is not a defence the tenant can raise against enforcement. You are separately required to provide a signed statement describing the condition of the premises at the time the rental agreement is entered into.",
    notes: "CONFIRMED ABSENCE recorded as a row. Whole of ch. 47-16 read from primary text; no lease-copy delivery duty and no consequence attached to its absence. Canvass topic inherited from the MN session (which asks both whether the duty exists and whether failure is a defence to enforcement) -- ND had never been checked against either limb. The one adjacent affirmative duty is § 47-16-07.2's move-in condition statement, which must be agreed and signed by both parties at the time of entering the rental agreement and is prima facie proof of condition. That is a document the tenant participates in signing, not a copy of the lease, and its sanction is evidentiary (loss of the prima-facie benefit) rather than a bar to enforcement -- see security-deposit-return-nd and the move-in inventory row. | CROSS-REFERENCE 2026-09-07: this row's closing sentence carried N.D.C.C. 47-16-07.2's signed-condition-statement duty. That duty now has its own row, `edu-condition-statement-nd`, because a REQUIRED affirmative duty producing prima facie proof should not be discoverable only under a heading about the absence of a lease-copy duty. **This row's text is unchanged and remains accurate** - the sentence is retained deliberately, since the two duties genuinely sit side by side in the statute and a reader arriving here should still learn of the other.",
  },
  // Default & Termination
  {
    id: "edu-no-disclosure-bar-to-eviction-nd",
    title: "A Disclosure Failure Does Not Block Your Eviction",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota has no general rule that failing to make a required disclosure bars you from bringing an eviction. There is also no repair-and-deduct defence to a nonpayment eviction: a tenant cannot resist eviction for unpaid rent on the ground that you failed to make repairs. The one statutory exception is narrow and concerns mobile home parks.",
    notes: "CONFIRMED ABSENCE (general) recorded as a row. Ch. 47-32 read in full from primary text: the only defence the chapter creates is § 47-32-01.1 (mobile home park). No disclosure-failure bar exists. Canvass topic from the MN session -- 'whether a landlord disclosure failure bars the eviction action itself' -- ND never checked. The no-repair-defence point is supported by the ND Courts' own eviction self-help guide rather than by an express statutory negative; recorded at that confidence level and NOT as primary-verified. It is consistent with the structure of ch. 47-32, which enumerates grounds and creates only the one defence, and with § 47-16-13's repair-and-deduct remedy being framed as an affirmative tenant remedy rather than a defence to possession. Flagged as the weakest-sourced claim in ND's current row set.",
  },
  {
    id: "edu-mobile-home-park-eviction-defence-nd",
    title: "Mobile Home Park Evictions Carry a Statutory Tenant Defence",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you evict from a mobile home park, the tenant may raise as a defence that you violated the mobile home park requirements in the mobile home chapter. If the court finds you did, it may not order the eviction. In a second or later eviction proceeding the tenant may only raise violations arising after a prior order between you was entered, or violations the court did not know about when it made that order.",
    notes: "N.D.C.C. § 47-32-01.1, primary text read this session, cross-referencing § 47-10-28. NEVER PREVIOUSLY ROWED. SCOPE: mobile home parks are a deprioritized product layer by standing decision, not a gap. Rowed anyway under the over-include-with-reasoning rule because (a) it lives in ch. 47-32, the general eviction chapter every ND landlord is subject to, not in the mobile home chapter, so a landlord reading the eviction law encounters it; and (b) it is the ONLY statutory defence to eviction anywhere in ND law, which makes it load-bearing for edu-no-disclosure-bar-to-eviction-nd's claim that no general bar exists. § 47-10-28 itself NOT READ -- the substance of the mobile-home-park requirements is out of scope. This row records the existence and structure of the defence, not its content. The second-proceeding limitation is an issue-preclusion rule and is stated in the body because a landlord facing a repeat filing needs to know the tenant cannot re-litigate old violations.",
  },
  // Landlord Responsibilities
  {
    id: "edu-fire-code-standard-nd",
    title: "What \"Fire Marshal Standards\" Actually Means",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "When North Dakota law says your smoke detection system must comply with fire marshal standards, that resolves to the State Fire Code: the fire-safe construction and operation provisions of the State Building Code, plus the International Fire Code, 2021 edition, as modified by the state. Those are privately published model codes -- you obtain them from the International Code Council or the National Fire Protection Association, not from a free state webpage. The fire code supplements the statutes rather than replacing them, and where the two conflict the Century Code wins. Two points worth knowing: sprinklers are not required in single-family dwellings or residential buildings of no more than two dwelling units with no higher-risk occupancy in the same building; and a condition that was lawful when the code was adopted may continue even if it no longer strictly complies, but only so long as the state fire marshal does not consider it a distinct hazard to life or property.",
    notes: "N.D. Admin. Code §§ 45-18-01-01 through 45-18-01-05, primary text 2026-09-06, effective 2024-01-01. CLOSES the incorporation-by-reference gap in smoke-detector-duty-nd, whose compliance standard (N.D.C.C. § 23-13-15's 'applicable national fire protection standards as defined by rules adopted by the state fire marshal') had never been traced to an actual document in this project. MATERIAL POINT FOR A LANDLORD-FACING LIBRARY: the operative standard is NOT publicly readable. § 45-18-01-05 lists the ICC and NFPA as the sources. A landlord told to 'comply with fire marshal standards' cannot look them up for free. Steinoak can state the duty and its source but cannot reproduce the standard; flagged so no future session mistakes the absence of quotable text for absence of a rule. § 45-18-01-02(3): where the chapter conflicts with the Century Code, the CENTURY CODE PREVAILS -- so § 23-13-15's single-family tenant-maintenance split is not displaced by anything in the fire code. § 45-18-01-02(1): supplements all NDCC fire-safety law and applies to all persons unless specifically exempted. GRANDFATHERING, § 45-18-01-02(2): conditions legally in existence at adoption and not in strict compliance may continue ONLY IF, in the state fire marshal's opinion, they do not constitute a distinct hazard to life or property. That is a discretionary, revocable safe harbour, not a vested right -- stated in the body because a landlord will otherwise read 'grandfathered' as permanent. SPRINKLER EXEMPTION, IFC 903.2.8 as modified: 'Sprinklers are not required in single family dwellings or residential buildings that contain no more than two dwelling units and no higher risk occupancy within the same building.' Directly relevant to Steinoak's small-landlord customer; note the third condition (no higher-risk occupancy in the same building) which a landlord with a ground-floor commercial unit could fail. ALSO MODIFIED, not rowed: IFC 112.4 (Violation penalties) 'Does not apply' -- the model code's own penalty provision is struck, so enforcement runs through NDCC, not the IFC. IFC 907.8.3 (fire alarm system interface) deleted entirely. NOT A SMOKE-ALARM PLACEMENT SOURCE: ch. 45-18-01's enumerated ND modifications contain no dwelling smoke-alarm placement rule. Placement comes from N.D. Admin. Code § 24.1-06-01-40 (State Electrical Board) -- see edu-alarm-requirements-by-building-type-nd -- and from the unmodified IFC/IBC text itself.",
  },
  // Default & Termination
  {
    id: "edu-no-state-military-termination-nd",
    title: "Military Lease Termination Runs on Federal Law Only",
    group: "Default & Termination",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota has no state military lease-termination statute and no state analogue to the federal Servicemembers Civil Relief Act. A servicemember tenant's rights come entirely from the federal Act: written notice with a copy of the orders, and termination effective thirty days after the next rent due date. North Dakota adds nothing on top -- no shortened notice period for periodic tenancies, no state-law supplement of the kind some other states provide.",
    notes: "CONFIRMED ABSENCE recorded as a row. Two canvass topics resolved together -- KS's 'military-shortened termination notice for periodic tenancies' (K.S.A. 58-2570(b), 15 days, tenant-only) and NE's 'state SCRA analog' (Neb. Rev. Stat. § 55-702). ND has neither. EVIDENCE: ch. 47-16 read in full from primary text this session -- no military provision anywhere. Corroborated by two independent 2026 secondary sources making AFFIRMATIVE negative statements rather than merely omitting the topic: tenantrightsinfo.com ('North Dakota does not have a separate state-level military lease termination statute beyond the federal SCRA protections') and docdraft.ai ('North Dakota servicemembers do not get the supplemental state protections available in Washington (RCW 38.42.160)'). An affirmative negative from an independent source is a stronger evidentiary posture than absence-of-mention, per the WY-session standard. Federal SCRA (50 U.S.C. §§ 3901-4043, termination at § 3955) applies of its own force and is not restated as ND law. MISCITATION LOGGED: payrent.com attributes ND's domestic-violence termination right to '§ 47-16-07.1'. That is the SECURITY DEPOSIT section; the DV right is § 47-16-17.1. Same shape as the § 14-02.5-07 and § 47-32-06 miscitations already logged for ND -- three distinct fabricated or misplaced cites from ND secondary sources this session.",
  },
  // Notices & General
  {
    id: "edu-no-electronic-notice-regime-nd",
    title: "No Statutory Framework for Electronic Notice",
    group: "Notices & General",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota has no statutory regime governing electronic notice or delivery between landlord and tenant -- nothing requiring affirmative consent, pre-consent disclosures, a hardware and software statement, or re-consent when your systems change. Where the statutes do address delivery they are permissive: a landlord's change-of-terms notice may be served in any reasonable manner that actually informs the tenant, and a domestic violence termination notice may be delivered by mail, facsimile, or in person.",
    notes: "CONFIRMED ABSENCE recorded as a row. Canvass topic from the NE re-audit (Neb. Rev. Stat. § 76-1413, Laws 2025 -- affirmative consent, pre-consent disclosures, hardware/software statement, re-consent on material change). ND has no equivalent. Ch. 47-16 read in full from primary text; no electronic-notice provision. The two delivery provisions that do exist point the opposite way: § 47-16-07 ('notice may be served in any reasonable manner which actually informs the tenant of the changes') is a functional standard, not a formal one; § 47-16-17.1(3) enumerates mail, facsimile communication, or in person for a DV termination notice -- and notably does NOT list email, so a DV notice by email alone may not satisfy the statute even though the general standard is permissive. That asymmetry is the practically important point and is why this is a row rather than a log line. § 47-16-07's permissive standard has NOT been tested against email in any ND case located; recorded as untested.",
  },
  // Landlord Responsibilities
  {
    id: "edu-frozen-standard-incorporation-nd",
    title: "Some Duties Are Frozen to a Specific Edition of an Outside Standard",
    group: "Landlord Responsibilities",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Several North Dakota requirements are defined by reference to an outside technical standard fixed at a particular edition rather than to whatever the current version happens to be. Accessible-design requirements for covered multifamily dwellings are measured against the 1986 ANSI standard, and the state fire code adopts the 2021 edition of the International Fire Code. Reading the current edition of one of those standards can give you the wrong answer about what North Dakota actually requires.",
    notes: "Canvass topic from the NE re-audit ('statutory freeze-date incorporation by reference'), where NE freezes 'service animal' to the 2008 C.F.R. ND's answer is PRESENT BUT IN DIFFERENT PLACES -- not in its animal provisions. § 14-02.5-06(3)(c): compliance with 'ANSI A117.1 (1986)' is deemed to satisfy the adaptive-design requirements for covered multifamily dwellings; the same subsection excludes buildings first occupied on or before 1991-03-13. N.D. Admin. Code § 45-18-01-04: the State Fire Code adopts the International Fire Code, 2021 edition, and the State Building Code effective 2023-01-01 -- fixed editions, advanced only by rulemaking. ND's service/assistance animal provisions (§§ 47-16-07.5, -07.6) contain NO frozen federal definition, so the specific NE trap does not exist here. Recorded because the GENERAL trap does: a landlord or a future session reading a current edition of ANSI A117.1 or the IFC will not be reading the standard ND enforces. NOT EXHAUSTIVE: only chapters read from primary this session were screened for frozen incorporations (47-16, 47-32, 32-03, 14-02.4, 14-02.5, 23-13, 6-08, 47-30.2, 14-07.1, 24.1-06-01, 45-18-01). Other titles unscreened.",
  },
  // Disclosures
  {
    id: "edu-no-protected-class-inquiry-ban-nd",
    title: "No Separate Ban on Asking About Protected Characteristics",
    group: "Disclosures",
    states: ["ND"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota has no statute separately prohibiting you from asking an applicant about a protected characteristic, or from recording one. What is prohibited is discriminating on the basis of one, and publishing any notice, statement, or advertisement indicating a preference or limitation. The practical effect is much the same: an inquiry that has no lawful purpose is evidence of the discrimination itself, and a written record of the answer is evidence a complainant can use. The absence of a separate inquiry ban is not permission to ask.",
    notes: "CONFIRMED ABSENCE recorded as a row. Canvass topic from the NE re-audit, where Neb. Rev. Stat. § 20-318(5) makes it unlawful to 'cause to be made any written or oral inquiry' concerning a protected class -- a duty distinct from, and additional to, the discrimination ban itself. ND has no analogue. Verified two ways: ch. 14-02.5 read in full from primary text this session, and the chapter's section list confirmed structurally (14-02.5-01 Definitions, -02 Sale or rental, -03 Publication, -04 Inspection, -05 Entry into neighborhood, -06 Disability, -07 Residential real estate-related transaction, -08 Brokerage services, -09/-10/-11 exemptions, -12 Effect on other law, -13 onward administrative). No inquiry or record-keeping section exists anywhere in the chapter. The nearest provision is § 14-02.5-03 (Publication), which reaches notices, statements and advertisements rather than inquiries. The closing sentence of the body is a deliberate guard: recording a bare absence here without it would invite a landlord to read 'no inquiry ban' as 'inquiries are safe', when an unexplained inquiry into a protected characteristic is ordinary evidence of discriminatory intent under § 14-02.5-02. Framing chosen because this row's content_type is LANDLORD_EDUCATION and its rule_type PROHIBITED -- the absence is real but the practical advice is not permissive.",
  },
  // Pets
  {
    id: "edu-exemption-does-not-reach-animal-rules-nd",
    title: "The Small-Landlord Exemption and the Assistance Animal Rules",
    group: "Pets",
    states: ["ND"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The small-landlord exemption in North Dakota's housing discrimination chapter does not switch off the state's assistance animal documentation rules, because those rules sit in a different title and the exemption only lists sections of its own chapter. But the two do not actually collide. The documentation rules govern how you may verify a request for an assistance animal that some other law requires you to consider -- they apply where a tenant asserts an accommodation is required under any provision of law. If you are genuinely exempt from both the state and federal accommodation duties, there is no request you are obliged to grant, and the documentation limits have nothing to operate on. If you are not exempt, they apply in full. Do not treat the exemption as a general licence around assistance animals: the federal exemption is drawn differently from the state one, and this has not been analysed.",
    notes: "RESOLVES the carve-out misalignment flagged earlier in this re-audit (§ 14-02.5-09(2) exempts owner-occupied <=4-family landlords, while §§ 47-16-07.5/-07.6 carry no carve-out). Resolved STRUCTURALLY from primary text rather than by further searching; one search was run and returned only sources conflating the FEDERAL Mrs. Murphy exemption with the state one, none addressing the interaction. ANSWER: not a conflict, a level distinction. (1) § 14-02.5-09(2) exempts '§ 14-02.5-02 and §§ 14-02.5-04 through -08' -- an enumeration of sections WITHIN ITS OWN CHAPTER. On its face it cannot reach Title 47. (2) §§ 47-16-07.5/-07.6 do not CREATE an accommodation duty. § 47-16-07.5 is a LIMIT on landlord verification, and is expressly conditional: it operates 'if the tenant asserts a disability requiring a service animal or assistance animal be allowed as an accommodation on the rented premises UNDER ANY PROVISION OF LAW.' § 47-16-07.6 penalises the tenant's fraud. So the documentation rules presuppose an accommodation obligation arising elsewhere; where none exists they have no work to do, and where one exists they apply regardless of the ch. 14-02.5 exemption. FEDERAL LIMB EXPRESSLY NOT ANALYSED. Whether an owner-occupant ends up with NO accommodation duty at all turns on the federal FHA exemption (42 U.S.C. § 3603(b)), which is drawn differently from § 14-02.5-09 and has never been in this project's scope. The body therefore warns against reading the state exemption as a general licence rather than asserting an outcome. SECONDARY-SOURCE HAZARD LOGGED: every ESA guide located (fastesaletter, animalofthings, pettable, usaservicedogs, mypetcerts) recites 'owner-occupied buildings with four or fewer units are exempt from FHA requirements' as though the federal and ND exemptions were one rule. They are separate provisions in separate bodies of law that happen to share a unit threshold. Do not let their agreement read as corroboration.",
  },
  // Default & Termination
  {
    id: "edu-fixed-term-nonrenewal-notice-co",
    title: "You Can No Longer Skip Notice Just Because the Lease Ends on a Set Date",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado used to excuse both parties from giving notice where the lease term ended at a time certain. Since the 2024 amendments, only the tenant is excused: no written termination notice is necessary from a tenant with a fixed-term tenancy that ends at an agreed time. As a landlord, electing not to renew a fixed-term tenancy is something you must do by written notice that expires at the end of the term, with the notice period scaled to how long the tenancy has run -- which for a tenancy of a year or longer is at least 91 days.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  {
    id: "edu-no-statutory-termination-notice-wy",
    title: "No Statutory Notice Period to End a Periodic Tenancy",
    group: "Default & Termination",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming sets no statutory notice period for ending a periodic tenancy -- not for month-to-month, not for week-to-week, and not for a periodic tenancy of a year or more. The widely repeated \"30 days\" is common-law practice and the expectation of Wyoming courts, not a statute you can cite. The common-law rule scales with the tenancy: one full rental period's notice, with the termination date falling at the start of a new period. So month-to-month runs about thirty days and week-to-week about seven. Because there is no statute, the lease itself is doing the work -- state the notice period in writing rather than relying on a default that does not exist.",
    notes: "CONFIRMED ABSENCE recorded as a row. Found by the cross-state tenancy-type screen 2026-09-06: WY had NO termination-notice row of any kind. EVIDENCE, and it is affirmative rather than absence-of-mention: apartments.com's structured WY chart returns 'No statute' for all four categories -- fixed end date, periodic of a year or more, month-to-month, and week-to-week. Nolo states 'Neither the landlord nor the tenant is required by statute to give notice to end a month-to-month tenancy.' Consistent with WY's general statutory thinness already established in this project. THE COMMON-LAW RULE IS TENANCY-TYPE SCALED, which is why this row exists rather than a bare 'no statute' line: one full rental period, terminating at the start of a new period. A landlord told only '30 days' will apply it to a weekly tenancy and be wrong by a factor of four -- the same error shape the ND K.2 finding exposed. The 30-day figure is NOT statutory and the row says so expressly. No WY case fixing the common-law rule was located and none is cited; the rule is stated at practice-level confidence, not primary-source confidence. DISTINGUISH the 3-day notice under Wyo. Stat. § 1-21-1002/1003, which is the pre-suit eviction notice for nonpayment or lease violation, NOT a periodic-tenancy termination period. Added from the ND re-audit session at Taylor's direction following the cross-state tenancy-type screen; per Addendum E this is a targeted addition on the termination-notice topic only. It is NOT a re-audit of this state, no other holding was reviewed, and this state's last_checked should not be read as a full re-verification date.",
  },
  {
    id: "edu-tenancy-at-will-termination-notice-mn",
    title: "Notice to End a Tenancy at Will Scales With the Rent Interval",
    group: "Default & Termination",
    states: ["MN"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A tenancy at will -- which includes an ordinary month-to-month tenancy -- may be ended by either you or the tenant with written notice. The notice must be at least as long as the interval between the times rent is due, or three months, whichever is less. So a month-to-month tenancy takes a month's notice and a week-to-week tenancy takes a week's, while the three-month figure operates only as a ceiling for unusually long rent intervals. Length is only half of it: the notice must also run a FULL rental period and take effect at the END of one. Serving a \"30-day notice\" on the tenth of the month does not end the tenancy on the ninth of the next -- it runs through the following full rental period. Note also that the old fourteen-day notice to quit for unpaid rent on a tenancy at will was repealed and no longer exists.",
    notes: "Minn. Stat. § 504B.135, read from the Revisor's official publication (revisor.mn.gov/statutes/cite/504B.135/pdf, MINNESOTA STATUTES 2025). Found by the cross-state tenancy-type screen 2026-09-06: MN had NO termination-notice row of any kind. THIS IS THE PUREST EXAMPLE THE SCREEN FOUND of why a flat figure cannot work. The statute states no number at all -- 'at least as long as the interval between the time rent is due or three months, whichever is less' is a FORMULA. Any row stating 'MN requires X days' would be wrong for every tenancy whose rent interval is not X. 'WHICHEVER IS LESS' means three months is a CEILING, not a floor -- a common misreading in the other direction. REPEAL RECORDED: the section formerly carried a second paragraph ('If a tenant neglects or refuses to pay rent due on a tenancy at will, the landlord may terminate the tenancy by giving the tenant 14 days notice to quit in writing'), struck by 2023 Minn. Laws ch. 52, art. 19, § 97, effective 2024-01-01 and applying to leases entered into or renewed on or after that date. The current official text has no subdivision designations at all, confirming the deletion; the history line reads '1999 c 199 art 1 s 8; 2023 c 52 art 19 s 97'. Any secondary source still citing a MN 14-day notice to quit on a tenancy at will is stale. K.4 archived-version trap: Justia's 2013/2016 versions still show the '(a)' designation and would mislead. COUNTING RULE ADDED TO BODY 2026-09-06, at secondary-source confidence, expressly flagged as such. The substance is corroborated by three independent sources including two Minnesota attorney publications: notice must equal a FULL rental period AND expire at the END of a rental period, so service mid-month does not terminate thirty days later but at the close of the following full period. One source states the rule has been settled since 1891 and characterises it as 'the half everyone gets wrong'. THE 1891 AUTHORITY WAS NOT LOCATED. Two searches were run and neither surfaced the case name or its text; per the standing rule this was escalated to Taylor rather than searched a third time. The rule is therefore recorded WITHOUT a citation and must not be represented as primary-verified. It is stated in the body notwithstanding, because the alternative -- a landlord satisfying the length requirement and still serving ineffective notice -- is a worse failure than citing at secondary confidence, and because the practical instruction ('run a full period, end at a period boundary') is safe even if the underlying authority is later found to be narrower than described. OUTSTANDING: Taylor to supply the 1891 case, or a session to locate it, before this row is treated as primary-sourced. Added from the ND re-audit session at Taylor's direction following the cross-state tenancy-type screen; per Addendum E this is a targeted addition on the termination-notice topic only. It is NOT a re-audit of this state, no other holding was reviewed, and this state's last_checked should not be read as a full re-verification date.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-exculpatory-clause-limit-sd",
    title: "Limits on Exculpatory and Indemnity Clauses (South Dakota)",
    group: "Compliance & Prohibited Terms",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota has no enumerated list of prohibited lease provisions, but a general contract statute limits how far an exculpatory, hold-harmless, or indemnification clause can reach. SDCL 53-9-3 provides that all contracts whose object is, directly or indirectly, to exempt anyone from responsibility for their own fraud, willful injury to the person or property of another, or violation of law whether willful or negligent, are against the policy of the law. In practice a clause releasing the landlord for ordinary negligence is generally enforceable if clear and unambiguous, but the same clause is void to the extent it reaches fraud, willful or wanton conduct, or a violation of law. A blanket release for any and all claims risks being read against the landlord. Separately, no exculpatory language can waive the landlord's repair and habitability duty, which SDCL 43-32-8 makes non-waivable.",
    notes: "SD re-audit 2026-09-07. SDCL 53-9-3 verbatim: 'All contracts which have for their object, directly or indirectly, to exempt anyone from responsibility for his own fraud or willful injury to the person or property of another or from violation of law whether willful or negligent, are against the policy of the law.' Source: CivC 1877 S954 ... SDC 1939 S10.0702 - unamended since 1939, no currency risk. SD's counterpart to Cal. Civ. Code S1668 and, critically for this project, to N.D.C.C. 9-08-02 - so the ND ground for extending the exculpatory clause family TRANSFERS to SD rather than being defeated. Enforceable-for-ordinary-negligence / void-for-willful from Holzer v. Dakota Speedway, 2000 S.D. 65, 610 N.W.2d 787, 793 para 16, applied in Domson v. Kadrmas Lee & Jackson, 2018 S.D. 67, 918 N.W.2d 396 para 16. OPEN QUESTION recorded: no SD appellate decision applies 53-9-3 to a LANDLORD'S exculpatory clause in a RESIDENTIAL LEASE - Holzer is a motorsport spectator release, Domson an engineering contract, and Davies v. GPHC, 2022 S.D. 55 is landlord premises-liability with no exculpatory clause. The ordinary-negligence half is an extrapolation, not a holding. Cases carried at secondary confidence. CHECKED AND EXCLUDED: SDCL 56-3-18 voids certain sole-negligence indemnity provisions but is construction-contract specific.",
  },
  {
    id: "edu-attorney-fee-clause-limit-sd",
    title: "Attorney Fee Clauses Are Restricted (South Dakota)",
    group: "Compliance & Prohibited Terms",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota follows a strict American Rule, and it places the limit on attorney fee clauses in the costs chapter rather than the landlord-tenant chapter. SDCL 15-17-38 leaves attorney compensation to the agreement of the parties, but allows fees to be taxed as disbursements only where a specific statute permits it - and the statutory list of recoverable disbursements in SDCL 15-17-37 does not include attorney fees. The specific authorizations SDCL 15-17-38 does give are for family law matters, trusts, probate and guardianship, and mortgage foreclosures; none covers a residential lease. SDCL 15-17-39 then makes any provision in a note, bond, mortgage, or other evidence of debt providing for attorney fees on default or foreclosure against public policy and void, except as authorized by specific statute. Whether a residential lease is an evidence of debt for this purpose has not been squarely decided, so a fee-on-default clause in a lease carries real risk of being unenforceable. Note where fees ARE available: SDCL 21-16-11 lets a court tax reasonable attorney fees to the prevailing party in an eviction, either party, if represented by a licensed attorney; and SDCL 43-32-28 lets a court award a prevailing tenant reasonable fees in a retaliatory-conduct action. Both are the kind of specific statute SDCL 15-17-38 contemplates. A landlord gains little from a lease fee clause that may be void, when the eviction statute already supplies a mutual fee remedy.",
    notes: "SD re-audit 2026-09-07. SDCL 15-17-38 and 15-17-39, found via gap-discovery source 4 during the prohibited-provisions ground check; neither had any SD row before this write. The evidence-of-debt question is genuinely open: Credit Collection Services v. Pesicka, 2006 S.D. 81, 721 N.W.2d 474, 476 restates that fees are recoverable when stipulated by contract OR statutorily authorized, and reversed a denial of contractually-stipulated fees on a contract that was not an evidence of debt - implying leases may fall outside 15-17-39, but not holding it. Recorded as risk, not prohibition. Pesicka at secondary confidence. CROSS-STATE: KS and NE ban lease attorney-fee clauses outright and the CSV carries a standing assertion that zero LEASE_CLAUSE rows tagged KS or NE contain fee language. SD is a THIRD posture - not a flat ban but a void-if-evidence-of-debt risk. If a fee clause is ever added to the generic library, SD needs its own treatment rather than inheriting either the KS/NE ban or an unrestricted default. | L.12 ADJACENT-PROVISION SWEEP 2026-09-07, run before escalating: the SDCL ch. 15-17 section index was retrieved from sdlegislature.gov's own chapter endpoint. Section TEXT for 15-17-38 and 15-17-39 remains unretrieved after two attempts (the chapter endpoint returns titles only for this chapter, unlike ch. 20-13 which returned full text) - escalated to Taylor under S5a.2 rather than attempted a third time. THE SWEEP ITSELF PRODUCED FINDINGS: three adjacent sections bear on this row and none has been read. **15-17-42 'Application of chapter'** is the most important - it may scope whether ch. 15-17 reaches a residential lease fee clause at all, which is the precise open question this row records as undecided. If 15-17-42 limits the chapter to taxation of disbursements in litigation, the evidence-of-debt analysis in this row may be misdirected. **15-17-37 'Prevailing party recovery--Taxation'** and **15-17-40 'Recovery limited'** also bear directly on what a prevailing landlord can actually recover and were never considered. Also unread and potentially relevant: 15-17-36 (costs not an indemnity) and 15-17-44 (taxation discretionary). This row's substantive claims are unchanged and remain accurate as far as they go - 15-17-38 and 15-17-39 were quoted from a reliable reproduction - but the row should be treated as INCOMPLETE rather than merely unverified: it states a rule without having established the rule's scope. Recorded as an open dependency rather than silently carried. NOTE the sweep is doing what L.12 predicts: run on a chapter reached for one reason, it surfaced a scope question nobody had asked. | COMPLETED 2026-09-07 with full ch. 15-17 primary text supplied by Taylor. The row moves from INCOMPLETE to complete; the earlier scope worry is resolved, and three refinements are added. (1) 15-17-37's enumerated disbursements list - telephonic hearings, fax, witness fees, interpreter, officers, printers, service of process, filing, telephone, copying, transcripts and reporter's attendance, court-appointed experts - CONTAINS NO ATTORNEY FEES. Combined with 15-17-36 abolishing costs-as-indemnity, this makes SD's American Rule stricter than the row previously conveyed: fees are not a default recoverable cost at all, only a statutory exception. (2) 15-17-38's specific authorizations are enumerated - divorce, annulment, paternity, custody, visitation, separate maintenance, support, alimony; trusts administered through the court; probate and guardianship; and mortgage foreclosures by action or advertisement. NONE reaches a residential lease. That absence is now recorded affirmatively rather than left implicit. (3) 15-17-42 'Application of chapter' - THE SCOPE QUESTION, RESOLVED BUT WORTH RECORDING. Its literal text reads: 'This chapter applies to any civil action or special proceeding in which the State of South Dakota or any of its divisions, departments or political subdivisions is a party including counties, municipalities, school districts, townships, and other governmental entities.' Read as a LIMIT, the chapter would not reach a private landlord-tenant dispute at all and this row would be misdirected. Read as an EXTENSION - confirming governmental parties are not exempt from disbursement taxation - the chapter applies generally. The extension reading is correct, on two grounds: every other operative section (15-17-36, -37, -38, -39, -40) is drafted generally, speaking of 'a civil action or special proceeding' with no governmental qualifier, which would be incoherent drafting if -42 confined the chapter; and the South Dakota Supreme Court applied 15-17-38 in Credit Collection Services v. Pesicka, 2006 S.D. 81, a purely private dispute with no governmental party. Recorded rather than silently resolved because the literal text is genuinely odd and a future reader encountering -42 alone could reasonably reach the opposite conclusion. The evidence-of-debt question for leases REMAINS open - Pesicka reversed a denial of contractually-stipulated fees on a contract that was not an evidence of debt, implying leases may fall outside 15-17-39, but does not hold it. Unchanged from the prior version of this row. L.12 NOTE: sections -36, -37, -40 and -42 were all reached only by sweeping the chapter index rather than by retrieving the two sections originally sought. The sweep changed the row's substance in three places.",
  },
  // Default & Termination
  {
    id: "edu-termination-notice-scaling-sd",
    title: "Termination Notice Scales to the Length of the Term (South Dakota)",
    group: "Default & Termination",
    states: ["SD"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Where a South Dakota tenancy runs for a term the parties never specified, the notice required to end it scales to the length of the term rather than being a fixed number of days. SDCL 43-32-15 provides that such a hiring is deemed renewed at the end of the term implied by law unless one of the parties gives the other notice of intent to terminate at least as long before expiration as the term of the hiring itself, not exceeding one month. The length of that term comes from SDCL 43-32-4: a hiring of lodgings for an unspecified term is presumed to run for whatever period the parties adopt to estimate the rent, so a weekly rent rate presumes a one-week term, and a hiring is presumed monthly only where no rent interval was agreed. A month-to-month tenancy therefore takes about a month's notice, a week-to-week tenancy takes about a week's, and the one-month ceiling means no unspecified-term tenancy ever requires more than a month. The rule runs both ways - either party may give the notice. This is separate from the modification-notice mechanics of SDCL 43-32-13 and from the fifteen-day rule for a tenancy at will under SDCL 43-8-8.",
    notes: "SD re-audit 2026-09-07. SDCL 43-32-15 supplied by Taylor after two failed retrievals (S5a.2): 'A hiring of real property for a term not specified by the parties is deemed to be renewed as stated in S 43-32-14 at the end of the term implied by law unless one of the parties gives notice to the other of his intention to terminate the same at least as long before the expiration thereof as the term of the hiring itself, not exceeding one month.' Source CivC 1877 S1119 ... SDC 1939 S38.0416, unamended. WHY THIS ROW EXISTS: the library carried NO termination-notice clause for any tenancy type except tenancy at will (15 days). The inherited 'every tenancy is monthly' assumption meant a week-to-week SD tenancy had its notice period represented nowhere - an OMISSION, not a misstatement; the same failure shape as ND's K.2 tenancy-type verdict and the 46 untagged generics. SECTION-NUMBER CORRECTION: DocDraft and another secondary source cite 43-32-14 for this rule; the official chapter index titles -14 'Retention of possession... Acceptance of rent... Renewal' and -15 'Renewal of hiring of real property presumed unless notice given of termination'. -15 supplies the notice rule and points back to -14. DEPENDENCY CLOSED: 43-32-4 read - 'A hiring of lodgings for an unspecified term is presumed to have been made for such length of time as the parties adopt for the estimation of the rent. Thus a hiring at a weekly rate of rent is presumed to be for one week...' 43-32-3 also read: non-lodgings hirings presumed for ONE YEAR. The 43-32-4 + 43-32-15 chain is primary-verified end to end. LOG ERROR CORRECTED: the original SD statute walk described SS43-32-1 to -5 as including the lodgings/rent-interval presumption AND the statute of frauds. 43-32-5 is ONLY the statute of frauds; the presumption is 43-32-4. The walk compressed five sections into one bullet and fused two. [Source-integrity: full ch.43-32 text via consumer.sd.gov/docs/LLTen_Statutes43-32.pdf, CONFIRMED STALE as to 43-32-24 (prints 'two weeks', source line omits SL 2026 ch 179). All other sections used carry source lines ending 1939-2022 and were unamended 2024-2026. See Addendum L.8.]",
  },
  // Notices & General
  {
    id: "edu-post-writ-property-duties-sd",
    title: "Tenant Belongings After an Eviction (South Dakota)",
    group: "Notices & General",
    states: ["SD"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota imposes no post-writ inventory, storage, notice, or care-standard duty specific to eviction. The general abandoned-property rules govern instead, and they are triggered by the tenant having quit the premises rather than by service of a writ. Property with a total reasonable value of five hundred dollars or less, left for ten days after the tenant has quit, is presumed abandoned and may be disposed of. Property worth more than five hundred dollars must be stored, and Landlord has a lien on it to the extent of the costs of handling and storing the property; after storing it for thirty days or more, Landlord may treat it as abandoned and dispose of it. Because the trigger is the tenant quitting rather than the writ, the same timeline applies whether the tenant leaves voluntarily or is removed.",
    notes: "SD re-audit 2026-09-07, eviction-duty screen (item 7, never run against SD before). The screen found CO and KS carrying ZERO self-help rows despite substantial remedies; against SD it found self-help/ouster covered, willful utility shutoff covered by the same row via 43-32-6's 'willfully diminishes services' limb, and writ-execution timing covered - but NO row on post-writ property duties and none on post-writ animal duties. Primary text: SDCL 43-32-25 and 43-32-26. CROSS-STATE COMPARISON recorded as comparison not inheritance (Dakota-ancestry rule): ND's equivalent describes a materially similar structure, but ND's lien is expressly subordinated to a prior perfected security interest and SD's 43-32-26 contains NO such priority carve-out. Similar architecture, non-identical text. CONFIDENCE CAVEAT: the ch.43-32 half is primary-verified (43-32-25/26 read in full; source lines end SL 2008 ch 227, unaffected by the L.8 staleness). The TITLE 21-16 half - that SD's eviction chapter imposes no post-writ duty of its own - now rests on the full 21-16 text supplied by Taylor, which contains no post-writ property or animal provision across 21-16-1 to 21-16-12.",
  },
  {
    id: "edu-no-post-writ-animal-duty-sd",
    title: "No Rules for Tenant Animals After an Eviction (South Dakota)",
    group: "Notices & General",
    states: ["SD"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota law says nothing about what happens to a tenant's animals after an eviction. There is no animal-control notification route, no notice-posting requirement, no unattended-animal rule, and no duty assigned to Landlord or to the sheriff. The abandoned-property provisions are written for property and are a poor fit for a live animal, so a landlord facing this situation has no statutory procedure to follow and should contact local animal control.",
    notes: "SD re-audit 2026-09-07, eviction-duty screen. Confirmed absence, given its own row per the standing rule that a log-only absence is invisible to every future canvass. Coverage: the full ch.43-32 was read section-by-section this session and contains no animal provision outside the service-animal group at 43-32-33 to -36, which concerns accommodation and fraudulent-claim damages, not post-eviction custody. Matches ND's edu-no-post-writ-animal-duty-nd; CO is the outlier with an affirmative duty, so the absence is the regional norm. The closing practical note is guidance, not a statement of law, because no law exists to state. CONFIDENCE CAVEAT: the ch.43-32 half is primary-verified (43-32-25/26 read in full; source lines end SL 2008 ch 227, unaffected by the L.8 staleness). The TITLE 21-16 half - that SD's eviction chapter imposes no post-writ duty of its own - now rests on the full 21-16 text supplied by Taylor, which contains no post-writ property or animal provision across 21-16-1 to 21-16-12.",
  },
  // Landlord Responsibilities
  {
    id: "edu-reasonable-accommodation-duty-sd",
    title: "Reasonable Accommodation of Disabled Tenants (South Dakota)",
    group: "Landlord Responsibilities",
    states: ["SD"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "South Dakota imposes its own reasonable-accommodation duty in housing, separate from federal fair housing law. SDCL 20-13-23.7 provides that for purposes of employment, public accommodation, public service, and education or housing, good faith efforts shall be made to reasonably accommodate a disabled person unless the accommodation would impose undue hardship. The standard is framed as good faith efforts subject to an undue-hardship limit, and the statute does not define either term or set out a request-and-response procedure, so in practice a landlord should document what was requested, what was considered, and why any accommodation was or was not made.",
    notes: "SD re-audit 2026-09-07. SDCL 20-13-23.7 verbatim: 'For purposes of employment, public accommodation, public service, and education or housing, good faith efforts shall be made to reasonably accommodate the disabled person unless the accommodation would impose undue hardship.' Source: SL 1986 ch 170 S4, unamended. Primary text supplied by Taylor. GENUINELY NEW - nothing in the library recorded a STATE-level reasonable-accommodation duty for SD; the assistance-animal rows carry SD's animal-specific documentation rules (43-32-33 to -36) and the fair-housing row carries the protected classes, but neither reaches accommodation generally. Found only because the chapter index was finally swept after the third L.12 failure - i.e. the sweep that was overdue produced a second finding beyond the one it was run for. SCOPE NOTE: the section is a general Title 20 human-rights provision covering five contexts at once, of which housing is one. Recorded as LANDLORD_EDUCATION rather than a lease clause because it states a standard of conduct, not a term the parties agree to - and because a lease clause purporting to define 'undue hardship' in the landlord's favour would be a poor idea in a state whose only limit on such terms is the general 53-9-3 / unconscionability backstop. RELATIONSHIP TO FEDERAL LAW: the FHA's reasonable-accommodation requirement is broader and better developed; this row records that SD ALSO has one at state level, not that it displaces or narrows the federal duty. No attempt is made here to map where the two diverge - that is a real question and is NOT answered by this row.",
  },
  // Security Deposit
  {
    id: "edu-deposit-documentation-co",
    title: "Deposit Documentation on Tenant Request (Colorado)",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "From January 1, 2026, a Colorado tenant may make a written request for the documentation behind any amount you retained from a security deposit, and you must provide it within 14 days. The duty covers documentation in your possession relevant to the retention - photographs, inspection forms or reports, receipts, invoices, and estimates. Keep this material as you go rather than assembling it after a dispute starts: the same statute deems a withholding wrongful where your written statement fails to list exact reasons, and the landlord carries the burden of proving both that a retention was not wrongful and what the actual damages were.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Disclosures
  {
    id: "edu-condition-statement-nd",
    title: "Signed Condition Statement Required at Move-In (North Dakota)",
    group: "Disclosures",
    states: ["ND"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota requires you to provide the tenant, at the time the rental agreement is entered into, a statement describing the condition of the premises and of any furnishings or appliances you supply. The statement must be agreed to and signed by both you and the tenant, and each of you keeps a copy. **It then constitutes prima facie proof of the condition of the premises at the start of the tenancy** — which makes it the single most useful document you will have in any later dispute about damage, because without it you are arguing about the starting condition from memory while the tenant does the same. Complete it carefully and specifically rather than treating it as a formality, and keep it with the lease.",
    notes: "Added 2026-09-07 (cross-state core-obligations canvass, run during the SD re-audit). N.D.C.C. 47-16-07.2, read in full from the official chapter PDF at ndlegis.gov/cencode/t47c16.pdf. **NOT A CORRECTNESS FIX - A FINDABILITY FIX, and recorded as such.** The duty was already in the library, but as the closing sentence of `edu-no-lease-copy-duty-nd`, a row titled 'No Duty to Give a Lease Copy'. That row is accurate and is unchanged. The problem is that a REQUIRED affirmative duty, whose output is PRIMA FACIE PROOF in exactly the deposit and damage disputes where it matters, was filed under a heading announcing the ABSENCE of a different duty. A landlord reading ND guidance on deposits or move-in would not reach it. ND's own decision log records this failure shape from the ND re-audit - an entire escheat regime under ch. 47-30.2 that 'existed in the library as one trailing sentence of clause text'. Same shape, smaller scale. WHY IT MATTERS EVIDENTIALLY: the prima facie effect shifts who has to prove what. ND's deposit remedy is TREBLE damages for withholding without reasonable justification (47-16-07.1(4)), so a landlord without a signed condition statement faces the worst combination available - a high penalty and no presumption. CROSS-STATE CONTEXT from the canvass: three of seven states mandate a move-in document - ND 47-16-07.2, MN 504B.182 (initial and final inspections, with a deposit-DOUBLING penalty attached to the notice failure), KS 58-2548 (joint five-day inventory). SD and WY have none; CO's 38-12-103(1.5) walkthrough right is on-request rather than mandatory. S5a.1: new ND-only row; no shared clause touched; no propagation owed. ALSO CHECKED THIS PASS AND FOUND ALREADY COVERED - no action taken: N.D.C.C. 47-16-20.1's payment-method fee ban is fully carried by edu-payment-method-fee-ban-nd and cross-cited in returned-payments and acceptable-payment-methods. That flag from the canvass was a FALSE POSITIVE, raised because the canvass looked for a dedicated row and reasoned from its absence. Recorded so the flag is not re-raised.",
  },
  {
    id: "edu-lease-copy-duty-co",
    title: "You Must Give the Tenant a Signed Copy Within Seven Days (Colorado)",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If there is a written rental agreement, you must give the tenant a copy signed by both you and the tenant no later than the seventh day after the tenant signs. An electronic copy is sufficient unless the tenant asks for a paper copy, in which case you must provide one on paper. The agreement must also state the name and address of the landlord or the landlord's authorized agent.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-eviction-penalty-clause-ban-co",
    title: "No Penalty Clause Tied to an Eviction (Colorado)",
    group: "Compliance & Prohibited Terms",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A Colorado written rental agreement must not include a clause that assigns a penalty to a party stemming from an eviction notice or an eviction action resulting from a violation of the rental agreement. Any provision included in violation of this rule is void and unenforceable. This is separate from the rent and damages a court may award in an eviction proceeding - what is prohibited is a lease term imposing its own penalty because a notice was served or an action was filed.",
    notes: "See lease-clause-citations.csv for citation, verification-date, and research-note detail (CO).",
  },
  // Security Deposit
  {
    id: "edu-mobile-home-park-carveout-co",
    title: "Mobile-Home-Park Leases Are Exempt From the Walkthrough and Carpet/Paint Rules",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If the property is a mobile-home-park rental agreement, two specific security-deposit rules do not apply: the move-out walkthrough right, and the special carpet/paint deduction rules (the ten-year carpet lookback and the minimum-necessary, damaged-area-only repaint rule). Ordinary security-deposit rules still apply to a mobile-home-park agreement - only these two specific rules are carved out.",
    notes: "Surfaced 2026-09-13 (Claude Browser follow-up) while correcting edu-carpet-damage-co's citation - confirmed via primary text of C.R.S. 38-12-103(12) alongside that correction. Not linked to any mobile-home-specific product logic since mobile-home-park leases aren't deeply modeled in this app yet; flag for any future mobile-home-lot handling.",
  },
  // Pets
  {
    id: "edu-service-animal-fraud-penalty-nd",
    title: "Service-Animal Misrepresentation Penalty Is Conviction-Gated",
    group: "Pets",
    states: ["ND"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "North Dakota makes it an infraction to knowingly claim a pet is a service or assistance animal, or to knowingly submit fraudulent supporting documentation, in order to obtain a reasonable accommodation (N.D.C.C. § 47-16-07.6(1)). The penalty that actually matters practically is separate and conditional: only where the tenant pleads guilty to, or is convicted of, that infraction may the landlord evict the tenant and recover a damage fee of up to $1,000 (§ 47-16-07.6(2)) -- a landlord cannot simply assess this fee based on their own belief that a claim is fraudulent; a criminal disposition has to happen first. Read narrowly, subsection (2)'s fee is tied to a tenant who \"provides fraudulent disability documentation\" specifically, which is narrower than subsection (1)'s two grounds (a false claim OR fraudulent documentation) -- on the statute's own words, the $1,000 fee may not be available for a bare false claim that isn't accompanied by fraudulent paperwork. No North Dakota authority resolves that gap; treat it as an open drafting question rather than a settled one.",
    notes: "N.D.C.C. § 47-16-07.6(1)-(2), confirmed via Claude Browser primary-source verification 2026-09-17, closing out a PARTIAL item from this project's ND citation-extraction pass (see assistance-animal-accommodation-nd, which intentionally left this penalty unstated as a specific number pending verification). Genuinely new to the library -- no prior ND row recorded these mechanics. Also resolves the same session's other open question: a 2025 bill, SB 2222, was believed to have amended §§ 47-16-07.5/-07.6 via corroborating secondary sources -- WRONG. SB 2222 failed on second reading in the ND Senate, 2025-02-17 (yeas 1, nays 44), and never amended anything; both sections are unchanged from what assistance-animal-accommodation-nd already cites.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-one-way-delegation-oh",
    title: "Ohio Duty-Shifting Runs One Direction Only",
    group: "Compliance & Prohibited Terms",
    states: ["OH"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You can agree to take on your tenant's obligations. Your tenant cannot agree to take on yours. R.C. 5321.13(A) makes the whole of Chapter 5321 non-waivable except through division (F), and (F) permits only one move: the landlord assuming the tenant's 5321.05 duties. There is no route in the other direction. So a clause making the tenant responsible for a duty Chapter 5321 assigns to you is void, however it is worded and whatever the tenant agreed to. R.C. 5321.13(E) closes the obvious workaround by barring any agreement that lets you receive rent free of the obligation to comply with 5321.04.",
    notes: "OH: R.C. 5321.13(A),(E),(F). INVERSE of the KS/ND/NE structured-delegation architecture, where duty-shifting runs toward the tenant under conditions. Do not import those states' delegation clauses into Ohio. Answers Core Obligations row 'is that duty waivable' for OH: no, and uniquely one-directional.",
  },
  // Default & Termination
  {
    id: "edu-mandatory-drug-termination-oh",
    title: "Drug Activity Is a Duty to Act, Not an Option",
    group: "Default & Termination",
    states: ["OH"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "In most situations Ohio leaves eviction to your discretion. Drug activity is the exception. Under R.C. 5321.04(A)(9), once you have actual knowledge of - or reasonable cause to believe - that the tenant, a household member, or a guest has used, sold, or manufactured a controlled substance on the premises, you SHALL give the three-day termination notice under 5321.17(C) and SHALL promptly bring an eviction action. This is framed as a landlord obligation, not a landlord right, and the matching eviction ground sits at 1923.02(A)(6). Serving the 5321.17(C) notice also satisfies the ordinary three-day notice requirement under 1923.04(B), so no second notice is needed. R.C. 1923.051 puts this track on an accelerated schedule. Note what you do NOT need: the notice may be given whether or not the tenant or other person has been charged with, has pleaded guilty to, or has been convicted of anything. Reasonable cause to believe is the trigger, and once you have it the statute says you SHALL act.",
    notes: "OH: R.C. 5321.04(A)(9); 5321.17(C); 1923.02(A)(6); 1923.04(B); 1923.051. Chain verified section-open 2026-09-18: 5321.05(A)(9) is the tenant duty; 5321.05(A)(2) directs that the landlord 'promptly shall give' the 5321.17(C) notice; 5321.17(C) states the tenancy terminates three days after the notice is given and that it may be given regardless of charge, plea or conviction; if the tenant does not vacate within three days the landlord 'promptly shall comply with' 5321.04(A)(9). The accelerated service and trial deadlines in 1923.051 remain chapter-level - verify section-open before stating specific day counts to a landlord. The DUTY framing is the finding - no other state in this library makes eviction mandatory.",
  },
  {
    id: "edu-minor-tenant-filing-oh",
    title: "Never Name a Minor on an Ohio Eviction Complaint",
    group: "Default & Termination",
    states: ["OH"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you list a minor tenant as a defendant on an eviction complaint alongside a parent or adult guardian, the court SHALL dismiss the action without prejudice and SHALL order you to pay the minor tenant's reasonable attorneys' fees. Naming every occupant is ordinary practice in most states; in Ohio it costs you the filing and the other side's legal bill. A 'minor tenant' is a tenant under eighteen who is not emancipated. Note that this fee award is statutory, so Ohio's general ban on attorney-fee agreements does not protect you from it.",
    notes: "OH: R.C. 1923.05(B),(C) with the 'minor tenant' definition at 1923.01(C)(15). ADDED BY SB 237 (135th GA), effective 2025-04-09 - recent, and unlikely to be reflected in older Ohio landlord guidance. Same act added the two-year limitations period for FED actions at 1923.01(B). If Steinoak ever generates eviction filings or occupant lists, this is a hard validation rule, not an education note.",
  },
  {
    id: "edu-three-day-notice-language-oh",
    title: "Ohio Prescribes the Words of Your Notice",
    group: "Default & Termination",
    states: ["OH"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Most states tell you how long to wait. Ohio also tells you what to say. Every notice you give to recover residential premises must contain, printed or written in a conspicuous manner, the following statement verbatim: \"You are being asked to leave the premises. If you do not leave, an eviction action may be initiated against you. If you are in doubt regarding your legal rights and obligations as a tenant, it is recommended that you seek legal assistance.\" Serve it at least three days before you file, by certified mail return receipt requested, by personal delivery, or by leaving it at the tenant's usual place of abode or at the premises. A notice missing this exact language will not support the action.",
    notes: "OH: R.C. 1923.04(A). VERBATIM TEXT ADDED 2026-09-19, replacing the earlier paraphrase: confirmed via two independent official Ohio state sources (codes.ohio.gov and legislature.ohio.gov), fetched separately and returning byte-identical quoted language both times: \"You are being asked to leave the premises. If you do not leave, an eviction action may be initiated against you. If you are in doubt regarding your legal rights and obligations as a tenant, it is recommended that you seek legal assistance.\" This is a step below this project's usual primary-text-read standard (a fetch-and-summarize tool, not a direct read of the codified text) -- reasonably reliable given two independent official sources agreed exactly, but re-verify directly against the primary text before this exact wording is ever baked into a real notice-generator feature that ships to users, not just an internal reference row. Local practice glosses 'three or more days' variously as three BUSINESS days excluding the posting date, or a full 72 hours excluding weekends and holidays; the statute itself says only 'three or more days'. R.C. 1923.06(B) prescribes a second script for the summons, but that one is court-issued.",
  },
  // Notices & General
  {
    id: "edu-fair-housing-election-oh",
    title: "Electing Out of the Civil Rights Commission Can Cost You More",
    group: "Notices & General",
    states: ["OH"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If the Ohio Civil Rights Commission issues a housing discrimination complaint against you, you - not just the complainant - may elect to move the matter into common pleas court. Think before you do. In the administrative track the commission MAY award damages and fees, and the civil penalty is capped ($10,000, rising to $25,000 with one prior violation in five years and $50,000 with two or more in seven). In court, R.C. 4112.055(D) says the court SHALL award actual damages, reasonable attorneys' fees, court costs, expert witness fees and other litigation expenses, and MAY add punitive damages - with no cap and a right to a jury. Electing out trades a capped penalty for uncapped exposure. The election must be mailed certified, return receipt requested, within thirty days of the notice.",
    notes: "OH: R.C. 4112.055(A)(2),(D) and 4112.05(B)(5),(G)(1)(b); OAC 4112-3-05(C)(2). Current 4112.055 effective 2025-09-30, amended by HB 96 (136th GA) - the biennial BUDGET bill, which is how Ohio has repeatedly moved this body of law. Filing windows: one year for a commission charge (4112.05(B)(1)) AND one year for a private civil action (4112.055(A)(1)); the two-year figure in circulation is the EMPLOYMENT window at 4112.051 and does not apply to housing.",
  },
  // Disclosures
  {
    id: "edu-alarm-duty-fire-code-oh",
    title: "Ohio Has No Alarm Statute - the Duty Comes From Code",
    group: "Disclosures",
    states: ["OH"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Do not go looking for an Ohio smoke or carbon monoxide alarm statute for rentals. There isn't one. The duty reaches you indirectly: R.C. 5321.04(A)(1) requires you to comply with all applicable building, housing, health and safety codes that materially affect health and safety, and those codes - the Ohio Fire Code and your local ordinances - are what actually specify alarms. R.C. 5321.19(B)(1) deliberately preserves local housing, building, health and safety codes from the chapter's otherwise strong preemption, so the local layer genuinely matters here. Practical effect: your alarm obligation is whatever your jurisdiction's code says, and it can change without any bill passing.",
    notes: "OH: R.C. 5321.04(A)(1); 5321.19(B)(1). Confirmed absent from ORC on a full-chapter read of 5321 plus secondary agreement for the rest of the Code. DIFFERENT ARCHITECTURE from NE (Neb. Rev. Stat. 81-5,144) and ND (N.D.C.C. 23-13-15), which both have statutory duties - do not adapt those rows. TRAP LOGGED: OAC 3701-33-13 surfaces in search and reads like an on-point rental alarm rule; it is Chapter 3701-33 AGRICULTURAL LABOR CAMPS under R.C. 3733.42, those units are excluded from ch. 5321 by 5321.01(C)(7), and its alarm provisions sit under division (B) VOLUNTARY standards. Verified by opening the rule 2026-09-18. The specific Ohio Fire Code cite (OAC 1301:7-7) is from secondary sources - verify before quoting it to a landlord.",
  },
  // Compliance & Prohibited Terms
  {
    id: "edu-bilateral-fee-ban-oh",
    title: "Ohio Voids Attorney-Fee Clauses Both Ways",
    group: "Compliance & Prohibited Terms",
    states: ["OH"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A prevailing-party or fee-shifting clause does nothing for you in Ohio. R.C. 5321.13(C) provides that no agreement to pay the landlord's OR the tenant's attorney's fees shall be recognised in any residential rental agreement, or in any other agreement between a landlord and tenant. Making the clause mutual does not rescue it - mutuality is the fix in some states, and it is irrelevant here. Hedging it with 'to the extent permitted by applicable law' does not rescue it either; the statute says such an agreement is not recognised, so the sentence is inoperative at best and misleading to a tenant at worst. Fees are still available to either side where a STATUTE awards them - 5321.15(C), 5321.04(B), 5321.16(C) and 4112.055(D) all do - because those are statutory awards, not agreements.",
    notes: "OH: R.C. 5321.13(C). BROADER than K.S.A. 58-2547(a)(3) and Neb. Rev. Stat. 76-1415(1)(c) because of the final limb reaching any OTHER agreement between landlord and tenant, not just the lease. Drives the decision to withhold the generic default-by-tenant from OH and use default-by-tenant-ks-ne instead.",
  },
  // Rent & Payment
  {
    id: "edu-bad-check-cure-windows-oh",
    title: "Two Cure Windows Before a Bounced Payment Costs Anything",
    group: "Rent & Payment",
    states: ["OH"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Ohio gives you no statutory returned-check fee cap - the $30-or-10% figure you will find quoted in Ohio lease templates is R.C. 1319.16, which caps what a COLLECTION AGENCY may charge, and 1319.12(A)(2) excludes a landlord collecting its own account. Your fee rides on the lease. As for going after the tenant: recovery under R.C. 2307.61 requires a THEFT OFFENCE, which means purpose to defraud plus knowledge - insufficient funds alone is not one. On top of that the tenant has two cure windows you cannot contract away: paying within ten days of notice of dishonour defeats the presumption of knowledge (2913.11(C)(2)), and paying within thirty days of your written demand bars the civil action outright (2307.61(D)). And 2307.61(B) cuts back at you - if you pursue costs and fees and the tenant wins, you pay the tenant's fees and defence costs.",
    notes: "OH: R.C. 1319.16; 1319.12(A)(2); 2913.11(B),(C)(2); 2307.61(A),(B),(C),(D),(H)(2)(b). 2307.61(H)(2)(b) includes the bank's charges in the 'value' that gets trebled. 2307.61(C) prescribes required notice content for the written demand - re-read section-open before building a demand-letter generator. 2913.11(A)(1)(b) defines 'check' to include ACH and card transactions, so a failed electronic rent payment is inside this framework. 2913.11 measures from 'the time of issue OR THE STATED DATE, whichever is later' - Ohio accommodates postdated checks rather than penalising them, the inverse of the ND-derived checklist row.",
  },
  // Default & Termination
  {
    id: "edu-waiver-by-acceptance-oh",
    title: "Taking Rent After Your Notice Can Void It",
    group: "Default & Termination",
    states: ["OH"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "The line is about WHICH PERIOD the money covers. Accepting rent for obligations already incurred at the time of your three-day notice does not waive it. Accepting rent for a FUTURE period after serving the notice waives the notice as a matter of law, and you cannot proceed on it - you start over. Holding the payment is not a safe middle ground: a landlord who sits on checks without telling the tenant they are not being accepted has accepted them. If you do not want the money, say so in writing and return it. Two further cautions: a pattern of quietly accepting late or partial rent can waive the due date in your lease, and accepting the current month's rent BEFORE you serve the notice can jeopardise the action too. A 'no waiver' clause in your lease will not save you here, because the three-day notice is jurisdictional and parties cannot confer jurisdiction by contract.",
    notes: "OH: King v. Dolton, 9th Dist. No. 02CA0041, 2003-Ohio-2423, para 12; Bristol Court v. Jones, 4th Dist. 1994; N. Face Properties v. Lin, 2013-Ohio-2281 (12th Dist.) (holding checks silently then cashing = acceptance), citing Associated Estates v. Bartell, 24 Ohio App.3d 6; OZ Property Mgt. v. Williams, 2025-Ohio-318 (12th Dist.) (pre-notice acceptance of current month); Premiere Mgt. v. Nutt, 2010-Ohio-1255 (3d Dist.). CASE LAW, not statute (Instructions item 16). 2d, 3d, 4th, 9th and 12th Districts agree - statewide consensus, not district variation. Holdings confirmed as quoted verbatim in published opinions; individual opinions not read end to end.",
  },
  // Security Deposit
  {
    id: "edu-deposit-on-sale-oh",
    title: "Selling the Property Does Not Get You Off the Deposit",
    group: "Security Deposit",
    states: ["OH"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Ohio has no statute transferring deposit liability to a buyer, and no safe harbour for doing it properly - unlike states where handing the deposit over plus notifying the tenant relieves you. Ohio treats a security deposit as a personal obligation in the nature of a PLEDGE between you and your tenant. The liability to return it does not run with the property. It stays with you unless the buyer either assumes the obligation or receives a credit on the purchase price for the deposits. So the thing that protects you is not moving the money - it is what the purchase and sale agreement says. Get the deposits itemised in the PSA and on the rent roll, name them, and confirm assumption or a price credit in writing. Pet and other deposits count, and get missed.",
    notes: "OH: Castlebrook, Ltd. v. Dayton Properties Ltd. Partnership, 78 Ohio App.3d 340, 348 (2d Dist. 1992), citing Tuteur v. P. & F. Enterprises, Inc., 21 Ohio App.2d 122, 133 (8th Dist. 1970); applied in Grisham v. Meadow Ridge Cincinnati Assocs. (12th Dist.), which turned on whether a PET deposit fell inside the PSA's 'Tenant Deposit' definition and appeared on the rent roll. CASE LAW, not statute (Instructions item 16). Tuteur adopted the New Jersey pledge rule because no Ohio law existed in 1970. PRODUCT NOTE: this belongs in the ownership-transfer workflow, not only the lease. Secondary sources conflict and at least one asserts the successor is automatically liable - the statutory silence does not support that.",
  },
  // Default & Termination
  {
    id: "edu-no-abandoned-property-safe-harbor-oh",
    title: "Ohio Gives You No Way to Deal With Left-Behind Belongings",
    group: "Default & Termination",
    states: ["OH"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If a tenant leaves possessions behind, Ohio hands you nothing. There is no notice-and-disposal procedure for an ordinary residential tenancy - the detailed machinery of notice, valuation affidavit, county auditor sign-off and sale in R.C. 1923.12 to 1923.14 applies only to manufactured home parks. Meanwhile R.C. 5321.15(B) forbids you from seizing a tenant's furnishings or possessions for rent except under a court order, and 5321.15(C) exposes you to actual damages plus reasonable attorneys' fees if you do. The practical consequence is that there is no statutory step you can follow that makes disposal safe, so get a court order, or get the property out through the writ process rather than on your own initiative.",
    notes: "OH: confirmed absent on FULL-CHAPTER primary reads of both R.C. ch. 5321 and ch. 1923 (2026-09-18). 5321.15(B),(C). 1923.12-.14 are park-only. There is also no post-writ duty regarding a tenant's PET left at the property - a gap worth noting separately. A commercial form vendor states 'No statute' for Ohio on this; that happens to be right, but it was confirmed here from the chapters rather than adopted from the vendor.",
  },
  // Landlord Responsibilities
  {
    id: "edu-portfolio-thresholds-oh",
    title: "Ohio Has Four Different Small-Landlord Thresholds",
    group: "Landlord Responsibilities",
    states: ["OH"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "There is no general 'small landlord' concept in Ohio law. Four separate provisions use four different portfolio tests, so you have to check the one attached to the duty in front of you. Fair housing under Chapter 4112 has NO small landlord exemption at all - every landlord is covered regardless of size. The rent-escrow remedy at R.C. 5321.07(C) does not reach a landlord party to agreements covering three or fewer dwelling units WHO GIVES WRITTEN NOTICE OF THAT FACT. The active-duty stay at R.C. 1923.062(C) does not apply to a landlord operating fewer than four residential premises. And the waste receptacle duty at R.C. 5321.04(A)(5) applies only where you are party to agreements covering four or more dwelling units in the same structure. Never reuse a size-keyed clause across provisions.",
    notes: "OH: R.C. 4112.024 (exemption list contains no portfolio test; 4112.01(A)(1) 'person' sweeps in any owner, lessor, manager or agent); 5321.07(C); 1923.062(C); 5321.04(A)(5). CONTRAST WITH KANSAS, which exempts the small landlord from fair housing entirely (K.S.A. 44-1018(b)) - Ohio does not. Caveat recorded: 4112.01 and 4112.024 were read in full, the rest of ch. 4112 was not, so an exemption elsewhere in the chapter has not been ruled out.",
  },
  // Rent & Payment
  {
    id: "edu-no-statutory-caps-oh",
    title: "Most Ohio Limits You Expect Do Not Exist",
    group: "Rent & Payment",
    states: ["OH"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Ohio is a thin-statute state on money terms. There is no security deposit cap, no late fee cap, no returned check fee cap that binds a landlord, no holdover damages formula, and no required mold, radon, bed bug, meth, asbestos or flood disclosure. Your only mandated lease disclosure is the owner and agent identity under R.C. 5321.18, plus the federal lead paint requirement for pre-1978 housing. That freedom is real but it is not unlimited: R.C. 5321.14 lets a court refuse to enforce an unconscionable clause or limit its application, and it is the only ceiling on every one of these terms. Set numbers you could defend to a judge, because nothing else will do it for you.",
    notes: "OH: absences confirmed on a full-chapter read of ch. 5321 plus secondary agreement across the Code; 5321.16 has no cap (the $50-or-one-month figure is the INTEREST THRESHOLD, widely misreported as a cap); 5321.18; 5321.14. R.C. 5302.30 is a SALES disclosure form and does not apply to rentals - the likeliest trap on an 'Ohio disclosure' search. Pending but NOT enacted: HB 841 (introduced 2026-04-30) would create a mold/lead/radon/CO awareness program; it would not create a disclosure duty even if passed.",
  },
  {
    id: "edu-rent-increase-notice-gap-oh",
    title: "Ohio Sets No Rent-Increase Notice Period",
    group: "Rent & Payment",
    states: ["OH"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Chapter 5321 contains no rent-increase notice provision at all. The '30 days' you will see quoted everywhere is R.C. 5321.17(B), which is the notice required to TERMINATE a month-to-month tenancy - a different thing. For a periodic tenancy the practical route to a higher rent is to terminate on the statutory notice and offer new terms. For a fixed-term written lease, the rent is whatever the lease says for the term, and a mid-term increase needs the tenant's agreement. If you want a defined mid-term or renewal increase mechanic, it has to be in the lease, because the statute will not supply one.",
    notes: "OH: confirmed absent on a full-chapter read of ch. 5321; 5321.17(B). SAME ERROR SHAPE as the Nebraska row - a widely-cited notice period that is actually the termination rule being reported as a rent-increase rule.",
  },
  // Default & Termination
  {
    id: "edu-casualty-and-mitigation-waivable-oh",
    title: "Two Ohio Defaults You Are Allowed to Contract Around",
    group: "Default & Termination",
    states: ["OH"],
    ruleTypes: ["CONDITIONAL"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Most of Ohio's landlord-tenant rules cannot be waived - R.C. 5321.13(A) makes the whole of Chapter 5321 non-waivable except in one narrow direction. But two rules that matter to you sit OUTSIDE Chapter 5321, and both are default rules you may contract around. R.C. 5301.11 says a tenant whose building is destroyed or made unfit for occupancy through no fault of their own stops owing rent - 'unless otherwise expressly provided by written agreement or covenant' - and the tenant must surrender possession to get the benefit. And Ohio's duty to re-rent after a tenant abandons comes from case law that applies 'barring contrary contract provisions'. Because neither lives in Chapter 5321, 5321.13(A) does not protect them. R.C. 5321.14 unconscionability still does.",
    notes: "OH: R.C. 5301.11 (Title 53 ch. 5301 Conveyances - an ADJACENT-TITLE find, invisible to a ch. 5321 read; effective 1953-10-01, sole version, unamended); Frenchtown Square Partnership v. Lemstone, 99 Ohio St.3d 254, 2003-Ohio-3648. IMPORTANT: Lemstone's holding is expressly limited to a COMMERCIAL lease - the Court said so in framing the issue - and every decision upholding a mitigation waiver is commercial. Whether a RESIDENTIAL mitigation waiver survives 5321.14 is untested. DECISION 2026-09-18 (Taylor): no mitigation waiver in the default Ohio lease; surface it here as available-but-untested. Failure to mitigate is an affirmative defence, burden on the tenant. Surrender under 5301.11 means yielding all that remains - a tenant cannot stop paying and leave belongings in place.",
  },
];

module.exports = { LANDLORD_EDUCATION };