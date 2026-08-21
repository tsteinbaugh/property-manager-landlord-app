// Landlord-education content from the CO clause-library verification pass
// (Aug 2026) — real, verified Colorado law that doesn't belong in
// tenant-facing lease text (see `lease-clause-decision-log-CO.md` §7's
// three-bucket screening test: LEASE_CLAUSE / LANDLORD_EDUCATION /
// OUT_OF_SCOPE). Typical reasons an item lands here instead of
// `clauseTemplates.js`: it states a legal ceiling/floor with no upside to
// telling the tenant (e.g. the security deposit cap — the lease already
// states the landlord's actual chosen amount); it's a standing rule that
// applies regardless of what the lease says (rent-increase frequency,
// retaliation, the police-call-waiver ban); or it's an operational duty, not
// lease-drafting content (the landlord-identity-change notice).
//
// Not currently wired into any route, UI, or the Lease Builder — nothing
// attaches these to a lease, and nothing serves them to the frontend today.
// This file exists purely to hold the CO research pass's verified findings
// as real, structured, code-readable data (per Taylor's explicit ask) so a
// future landlord-facing guide/notes feature (see decisions log) has
// something real to build on instead of starting research from zero.
// Source of truth is `lease-clauses-CO.csv` (repo root) plus
// `lease-clause-decision-log-CO.md` — this file is their compiled copy.
//
// Same field shape as `clauseTemplates.js` where it overlaps (id, title,
// group, states, bodyText) for consistency, plus `ruleTypes` (array —
// REQUIRED/CONDITIONAL/PROHIBITED/CONSTRAINED/RECOMMENDED, see the decision
// log §3), `verificationStatus`, and `notes` inline rather than in a
// separate metadata file — there's no `GET` route serving this data yet, so
// there's no leak risk to guard against the way `clauseResearchMetadata.js`
// does for the shipped clause templates.

const LANDLORD_EDUCATION = [
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-fee-unprovided-service-co",
    title: "Don't Charge for a Service You Don't Actually Provide",
    group: "Rent & Payment",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Colorado's Honest Pricing law prohibits charging a fee for any service you don't actually provide (C.R.S. section 6-1-737). This is a good general check for any fee-based clause you write yourself: make sure the fee corresponds to something real.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-deposit-nonwaiver-co",
    title: "Security Deposit Rights Can Never Be Waived",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A tenant cannot waive their rights regarding return of the security deposit, whether orally or in writing - any lease provision attempting this is unenforceable (C.R.S. section 38-12-103(7)). Keep this in mind for any custom security deposit language you write yourself.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-carpet-damage-co",
    title: "Carpet Damage Has a Special Rule",
    group: "Security Deposit",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "You can't deduct from a security deposit for carpet being 'substantially and irreparably damaged' unless the carpet hasn't been replaced with new carpet in the past 5 years - and even then, you can only retain the minimum amount actually necessary, not the full replacement cost (HB 25-1249). Keep this in mind at move-out before assuming worn or stained carpet automatically justifies a deduction.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-alt-housing-co",
    title: "Alternate Housing May Be Required During Major Repairs",
    group: "Landlord Responsibilities",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "NEEDS_REVIEW",
    bodyText:
      "If a condition materially interferes with a tenant's health, life, or safety, you may be required to provide comparable alternate housing or a hotel room within 24 hours, at your own cost, until the condition is fixed. If the displacement runs past 48 hours, you may also need to provide full kitchen access or cover meal costs (part of the 2024 habitability law overhaul, C.R.S. section 38-12-503). This isn't currently reflected in the Repair Timeline clause - worth knowing as a real cost/logistics exposure separate from the repair deadline itself.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-fee-shifting-co",
    title: "Attorney Fee Clauses Must Work Both Ways",
    group: "Default & Termination",
    states: ["CO"],
    ruleTypes: ["PROHIBITED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "A lease clause that only lets the landlord recover attorney's fees and court costs - but not the tenant, if the tenant wins - is void under Colorado law (C.R.S. section 38-12-801(3)(a)(II)). Any attorney-fee provision needs to say the prevailing party recovers fees, not just the landlord. This was actually found and fixed in the Default by Tenant clause during this review - worth double-checking any custom clause you write yourself for the same issue.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-identity-change-notice-co",
    title: "Notify Tenants If Your Identity or Agent Changes",
    group: "Notices & General",
    states: ["CO"],
    ruleTypes: ["REQUIRED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "If you (or your authorized agent) change - for example, a property changes management companies, or ownership transfers - Colorado law requires the new landlord or agent to notify each tenant within 1 business day, either in writing/electronically or by posting the new information conspicuously at the property (C.R.S. section 38-12-801(2)). This is an ongoing operational duty, not something that needs to be in the lease itself.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
  {
    id: "edu-rubs-uncertainty-co",
    title: "Utility Billing Rules Are Still Being Clarified",
    group: "Disclosures",
    states: ["CO"],
    ruleTypes: ["CONSTRAINED"],
    verificationStatus: "NEEDS_REVIEW",
    bodyText:
      "If you use a shared or master utility meter and bill tenants a proportional share (RUBS), be aware that Colorado's Attorney General issued guidance in November 2025 acknowledging real uncertainty in how the Honest Pricing law's fee rules apply to this billing method, and said enforcement will be flexible in the meantime. The legislature is expected to pass a clarifying fix in the 2026 session - worth revisiting this note once that happens.",
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
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
    notes: "NEW - LANDLORD_EDUCATION item, added 2026-08-20 per Taylor's direction to track these with the same schema as lease clauses",
  },
];

module.exports = { LANDLORD_EDUCATION };
