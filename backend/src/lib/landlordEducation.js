// Landlord-education content from the state-by-state clause-library
// verification passes (Aug 2026, Colorado then Wyoming) — real, verified
// state law that doesn't belong in tenant-facing lease text (see
// `lease-clause-decision-log-CO.md` §7's three-bucket screening test:
// LEASE_CLAUSE / LANDLORD_EDUCATION / OUT_OF_SCOPE, reused unchanged for
// Wyoming). Typical reasons an item lands here instead of
// `clauseTemplates.js`: it states a legal ceiling/floor with no upside to
// telling the tenant (e.g. a security deposit cap — the lease already
// states the landlord's actual chosen amount); it's a standing rule that
// applies regardless of what the lease says (rent-increase frequency,
// retaliation, a police-call-waiver ban); it's an operational duty, not
// lease-drafting content (a landlord-identity-change notice); or — new in
// the Wyoming pass, which was thin enough on statute that absences became
// as important as presences — it's a **documented absence**: Wyoming simply
// has no equivalent to some Colorado protection (no deposit cap, no entry-
// notice statute, no for-cause eviction tenure threshold, etc.), logged here
// so that finding isn't silently lost the way an unrecorded "checked, found
// nothing" tends to be.
//
// Not currently wired into any route, UI, or the Lease Builder — nothing
// attaches these to a lease, and nothing serves them to the frontend today.
// This file exists purely to hold each state pass's verified findings as
// real, structured, code-readable data (per Taylor's explicit ask) so a
// future landlord-facing guide/notes feature (see decisions log) has
// something real to build on instead of starting research from zero.
// Source of truth is `lease-clauses.csv` (repo root, covers CO + WY so far)
// plus `lease-clause-decision-log-CO.md` and `lease-clause-decision-log-WY.md`
// — this file is their compiled copy.
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
  {
    id: "edu-co-detector-building-code-wy",
    title: "Carbon Monoxide Detectors Come from Building Code, Not the Rental Statute",
    group: "Landlord Responsibilities",
    states: ["WY"],
    ruleTypes: ["RECOMMENDED"],
    verificationStatus: "VERIFIED",
    bodyText:
      "Wyoming does not address smoke or carbon monoxide detectors anywhere in the Residential Rental Property Act (Article 12). The requirement instead comes from Wyoming's adoption of the International Residential Code, which generally applies to new construction with fuel-burning appliances or an attached garage — not automatically to existing rental housing. Enforcement and any additional requirements are set locally by individual cities and counties, not by one uniform state rule. Practically: don't assume a detector requirement doesn't exist just because it's absent from the landlord-tenant statute, and check your specific city/county's building and fire code rather than relying on a single statewide answer.",
    notes: "WY added 2026-08-21, 4th gap-discovery source pass (law outside Title 1). Confirmed via multiple sources agreeing this is IRC-adoption/building-code, not a Title 1 landlord-tenant statute — genuinely outside the scope a pure Article 12 statute-walk would catch, which is exactly what this gap-discovery source exists to find. Flagged as jurisdiction-variable rather than drafted as a uniform LEASE_CLAUSE, since a single statewide clause would misrepresent how enforcement actually works here — same category of caution as the Denver/Boulder municipal-ordinance gap on the CO side, though smaller in scope.",
  },
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
];

module.exports = { LANDLORD_EDUCATION };
