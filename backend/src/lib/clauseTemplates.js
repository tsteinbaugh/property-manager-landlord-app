// Static starter clauses for the Lease Builder's template library. Not DB
// rows — a fixed reference list has no need for per-user/global template
// modeling; "using" one just snapshots it onto a lease, and "copying" one
// creates a normal, fully editable Clause the landlord owns. Locked by
// construction: there is no edit/delete endpoint that ever touches this
// list, so nothing can silently modify what we ship while it still reads as
// "provided" — landlords who want changes copy first.
//
// Genericized from a real signed Colorado lease (Zillow-drafted, plus
// Taylor's own hand-added Early Termination clause, added via a Rules
// Addendum because the Zillow template itself can't be edited — the actual
// reason this feature exists). Dates, dollar amounts, and names are removed
// in favor of {{variable}} placeholders resolved from the lease's own linked
// Property/Tenant/Entity/numeric fields at generation time; anything not
// already modeled in this app (per-property acceptable payment methods,
// per-property utility list, specific parking/storage space identifiers)
// is left as plain generic text — some with a "[bracketed prompt]" the
// landlord fills in per lease — for the landlord to edit.
//
// `state` is an optional two-letter code (e.g. "CO") marking a clause's
// language as specific to that state's law, or null for generic/universal
// clauses. It's a content tag only — filters the library view and "Add my
// default clauses" by the lease's property state — not a Legal Tracker
// notice-period/deadline engine.
//
// Expanded a second time after Taylor did a careful line-by-line review
// against the real signed lease (all 26 pages of lease + addenda, not just
// the body) and cross-referenced it against the first-pass 33-clause set.
// Real gaps found and added: due-upfront summary, occupant/appliance/pet-
// deposit/insurance-minimum variables, a split utilities clause (landlord-
// paid vs tenant-paid, plus a utility-continuity duty correctly scoped to
// only water/gas/electric/sewer/trash — not cable/phone/internet), Existing
// Condition, Possession Delay, mitigation-of-damages + attorneys'-fees
// language in Default by Tenant, a strengthened Holdover clause (double
// rent, matching the source lease's actual teeth), Severability pulled out
// of Governing Law into its own clause, Addendum Precedence, Electronic
// Signatures, Application of Payments, a short-term-rental (Airbnb/VRBO)
// prohibition, assigned parking/storage, granular parking-vehicle rules,
// pet emergency-removal + pet-specific insurance, smoking policy, snow
// removal, fire-safety/grilling rules, and a handful of concrete property
// rules (waterbeds, heavy furniture, candles, exterior signage) pulled
// straight from the source Rules Addendum. The Guest Policy clause with its
// 14-day/6-month guest limit is Taylor's own real-world practice, not
// sourced from this document — researched afterward and found to NOT trace
// to any actual Colorado statute (the "14 days / 6 months" figure appears
// verbatim across landlord-content sites for Colorado, California, AND
// Florida alike, which is itself evidence of copied marketing content, not
// independently verified law — the actual CO statute usually cited,
// § 13-40-104, contains no such provision). Left untagged (states: [])
// for that reason — it's enforceable as a plain contract term regardless of
// jurisdiction, just not presented as reflecting any specific state's law.
//
// Two rounds of state-specific legal research (Aug 2026) added the
// state-tagged clauses below. Round 1 covered Colorado + one California
// example. Round 2, prompted by Taylor asking to add "anything required by
// actual state statutes," went broader (28 states) but specifically
// VERIFIED each candidate against a primary source (a state's official
// statute text via a .gov site, law.justia.com, or casetext.com) rather
// than trusting secondary landlord-content sites, precisely because the
// guest-policy mistake above showed how easily a wrong number spreads
// across those sites. Several round-1 secondary-sourced claims were
// corrected or dropped in round 2 when checked against primary text (e.g.
// Virginia's mold disclosure has no "10 sq ft" threshold — that was
// invented by a content site; a rumored 2026 Colorado mold-disclosure law,
// a specific state for asbestos disclosure, and Arkansas's deposit-return
// deadline — which turned out to only apply to landlords with 6+ units or a
// property manager, not this app's small-landlord audience — were all
// dropped rather than shipped on weak sourcing). A few remaining nuances
// worth knowing when reading these clauses: Tennessee's late fee cap only
// applies in URLTA counties (population > 75,000); Texas's late-fee and
// repair-timeline numbers are legal "safe harbor"/rebuttable-presumption
// figures, not hard mandatory deadlines; Oregon's late fee allows a choice
// of three fee structures, simplified here to the plain-language summary;
// Virginia's late-fee-cap source was dated "effective July 1, 2027" in the
// citation found, which is odd enough to double-check before relying on it.
// IMPORTANT: several of the underlying Colorado rules specifically changed
// within the last 1-2 years (deposit cap Jan 2026, entry notice 2026,
// month-to-month notice 2024) — every state-tagged clause here is a
// well-researched starting point, not a substitute for checking current law
// or an attorney before relying on it in a real lease.
const CLAUSE_TEMPLATES = [
  // Rent & Payment
  {
    id: "rent-payment",
    title: "Rent Payment",
    group: "Rent & Payment",
    states: [],
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand, deduction, or setoff. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fee",
    title: "Late Fee",
    group: "Rent & Payment",
    states: [],
    bodyText:
      "If Tenant fails to pay Monthly Rent or any other Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "returned-payments",
    title: "Returned Checks / Dishonored Payments",
    group: "Rent & Payment",
    states: [],
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by a cashier's check, certified check, or money order, and may charge Tenant any fee associated with the failed payment. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent be made by cashier's check, certified check, or money order.",
  },
  {
    id: "due-at-signing",
    title: "Amounts Due Upfront",
    group: "Rent & Payment",
    states: [],
    bodyText:
      "Tenant will pay Landlord the following amounts, at the time specified for each: [specify what is due and when here, e.g. first month's Monthly Rent ({{monthly_rent}}) due at signing; Security Deposit ({{security_deposit}}) due at signing; Pet Deposit ({{pet_deposit}}) due at signing; last month's Monthly Rent due on the Start Date]. These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
  },
  {
    id: "application-of-payments",
    title: "Application of Payments",
    group: "Rent & Payment",
    states: [],
    bodyText:
      "All payments received shall be applied first to outstanding fees, charges, costs, utilities, or other amounts due under this Lease, and then to base rent, unless otherwise required by applicable law. Nothing in this provision limits Tenant's statutory right to cure nonpayment of base rent.",
  },
  {
    id: "late-fee-limit-co",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed the greater of $50.00 or 5% of the amount of Rent past due, and no late fee will be assessed until at least 7 days after Rent is due, as required by Colorado law.",
  },
  {
    id: "nsf-fee-limit-co",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "Any fee charged for a dishonored or returned payment under this Lease will not exceed $20.00 per occurrence, as required by Colorado law.",
  },
  {
    id: "late-fee-limit-ny",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["NY"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed the lesser of $50.00 or 5% of Monthly Rent, and no late fee will be assessed until at least 5 days after Rent is due, as required by New York law.",
  },
  {
    id: "late-fee-limit-md",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["MD"],
    bodyText: "Any late fee assessed under this Lease will not exceed 5% of the amount of Rent past due, as required by Maryland law.",
  },
  {
    id: "late-fee-limit-mn",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["MN"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed 8% of the overdue payment, and must be agreed to in writing by both parties, as required by Minnesota law.",
  },
  {
    id: "late-fee-limit-hi",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["HI"],
    bodyText: "Any late fee assessed under this Lease will not exceed 8% of the Rent due, as required by Hawaii law.",
  },
  {
    id: "late-fee-limit-tn",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["TN"],
    bodyText:
      "In a county to which Tennessee's Uniform Residential Landlord and Tenant Act applies (generally a county with a population over 75,000), any late fee assessed under this Lease will not exceed 10% of the Rent past due, and no late fee will be assessed until at least 5 days after Rent is due, as required by Tennessee law.",
  },
  {
    id: "late-fee-limit-va",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["VA"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed the lesser of 10% of the periodic Rent or 10% of the remaining balance due under this Lease, as required by Virginia law.",
  },
  {
    id: "late-fee-limit-nc",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["NC"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed the greater of $15.00 or 5% of Monthly Rent, and no late fee will be assessed until at least 5 days after Rent is due, as required by North Carolina law.",
  },
  {
    id: "late-fee-limit-me",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["ME"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed 4% of one month's Rent, and no late fee will be assessed until at least 15 days after Rent is due. Landlord will provide Tenant written notice of this late fee policy at signing, as required by Maine law.",
  },
  {
    id: "late-fee-safe-harbor-tx",
    title: "Late Fee Safe Harbor",
    group: "Rent & Payment",
    states: ["TX"],
    bodyText:
      "Any late fee assessed under this Lease is intended to be a reasonable estimate of Landlord's damages from a late payment of Rent, consistent with Texas law, and will not exceed 12% of one rental period's Rent for a property with 4 or fewer units, or 10% of one rental period's Rent for a property with more than 4 units. No late fee will be assessed until at least 2 days after Rent is due.",
  },
  {
    id: "late-fee-limit-de",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["DE"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed 5% of Monthly Rent, and no late fee will be assessed until at least 5 days after Rent is due (8 days if Landlord has no office in the county where the property is located), as required by Delaware law.",
  },
  {
    id: "late-fee-limit-or",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["OR"],
    bodyText:
      "Any late fee assessed under this Lease will follow one of the fee structures permitted under Oregon law: a single reasonable flat fee, a daily fee not exceeding 6% of a reasonable flat fee, or 5% of Rent assessed no more than once per 5-day period Rent remains unpaid. No late fee will be assessed until at least 4 days after Rent is due.",
  },
  {
    id: "late-fee-safe-harbor-ca",
    title: "Late Fee Guidance",
    group: "Rent & Payment",
    states: ["CA"],
    bodyText:
      "California does not set a statutory cap on late fees, but any late fee under this Lease is intended to be a reasonable estimate of Landlord's actual damages from a late payment — a fee significantly higher than Landlord's actual costs risks being unenforceable as a penalty under California law.",
  },
  {
    id: "nsf-fee-limit-ca",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["CA"],
    bodyText:
      "Any fee charged for a dishonored or returned payment under this Lease will not exceed $25.00 for a first occurrence or $35.00 for each subsequent occurrence, as required by California law.",
  },
  {
    id: "nsf-fee-limit-fl",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["FL"],
    bodyText:
      "Any fee charged for a dishonored or returned payment under this Lease will not exceed $25.00 for a check of $50.00 or less, $30.00 for a check between $50.01 and $300.00, or the greater of $40.00 or 5% of the check amount for a check over $300.00, as required by Florida law.",
  },
  {
    id: "nsf-fee-limit-or",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["OR"],
    bodyText:
      "Any fee charged for a dishonored or returned payment under this Lease will not exceed $35.00, plus any actual bank charges Landlord incurs as a result, as required by Oregon law.",
  },
  {
    id: "nsf-fee-limit-pa",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["PA"],
    bodyText:
      "Any fee charged for a dishonored or returned payment under this Lease will not exceed $50.00, or the actual fee Landlord's bank charges if higher, as required by Pennsylvania law.",
  },
  {
    id: "nsf-fee-limit-tx",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["TX"],
    bodyText:
      "Any processing fee charged for a dishonored or returned payment under this Lease will not exceed $30.00, in addition to any fee the bank itself assesses, as required by Texas law.",
  },
  {
    id: "nsf-fee-limit-hi",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["HI"],
    bodyText: "Any fee charged for a dishonored or returned payment under this Lease will not exceed $30.00, as required by Hawaii law.",
  },

  // Security Deposit
  {
    id: "security-deposit-use",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    states: [],
    bodyText:
      "Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit to remedy a Tenant default under this Lease, including past due Rent, to repair damage to the property caused by Tenant or Tenant's guests beyond ordinary wear and tear, and to pay cleaning costs required to return the property to the condition it was in at the start of the Term. The Security Deposit will not relieve Tenant of any obligation to pay Rent due under this Lease prior to its termination.",
  },
  {
    id: "security-deposit-return",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: [],
    bodyText:
      "The Security Deposit, less any lawful deductions, will be returned to Tenant within the time period required by applicable law after Tenant vacates the property upon expiration or earlier termination of this Lease. Any deductions will be described in an itemized statement provided with the returned portion of the deposit. Tenant will provide Landlord a forwarding address to which the Security Deposit and itemized statement should be sent.",
  },
  {
    id: "security-deposit-cap-co",
    title: "Security Deposit Cap",
    group: "Security Deposit",
    states: ["CO"],
    bodyText:
      "The Security Deposit under this Lease will not exceed one month's Monthly Rent, as required by Colorado law. The Security Deposit will be returned to Tenant within 30 days after Tenant vacates the property, or within 60 days if this Lease so provides.",
  },
  {
    id: "security-deposit-cap-ga",
    title: "Security Deposit Cap",
    group: "Security Deposit",
    states: ["GA"],
    bodyText:
      "The Security Deposit under this Lease, including any pet deposit or other refundable deposit, will not exceed two months' Monthly Rent, as required by Georgia law. The Security Deposit will be returned to Tenant within 30 days after Tenant vacates the property.",
  },
  {
    id: "security-deposit-cap-md",
    title: "Security Deposit Cap",
    group: "Security Deposit",
    states: ["MD"],
    bodyText:
      "The Security Deposit under this Lease will not exceed one month's Monthly Rent, as required by Maryland law.",
  },
  {
    id: "security-deposit-cap-ct",
    title: "Security Deposit Cap",
    group: "Security Deposit",
    states: ["CT"],
    bodyText:
      "The Security Deposit under this Lease will not exceed two months' Monthly Rent, or one month's Monthly Rent if Tenant is 62 years of age or older at the time the Security Deposit is paid, as required by Connecticut law.",
  },
  {
    id: "security-deposit-return-ny-hi",
    title: "Security Deposit Return Deadline",
    group: "Security Deposit",
    states: ["NY", "HI"],
    bodyText:
      "The Security Deposit, less any lawful deductions, will be returned to Tenant within 14 days after Tenant vacates the property, as required by law in these states.",
  },
  {
    id: "security-deposit-return-wv",
    title: "Security Deposit Return Deadline",
    group: "Security Deposit",
    states: ["WV"],
    bodyText:
      "The Security Deposit, less any lawful deductions, will be returned to Tenant within 60 days after Tenant vacates the property, or within 45 days if a new tenant takes possession of the property sooner, as required by West Virginia law.",
  },
  {
    id: "security-deposit-interest-ct",
    title: "Security Deposit Interest",
    group: "Security Deposit",
    states: ["CT"],
    bodyText:
      "Landlord will hold the Security Deposit in an escrow account and will pay Tenant interest on the Security Deposit, less an administrative fee of up to 1%, as required by Connecticut law.",
  },
  {
    id: "security-deposit-interest-md",
    title: "Security Deposit Interest",
    group: "Security Deposit",
    states: ["MD"],
    bodyText: "Landlord will pay Tenant interest on the Security Deposit at the rate required by Maryland law.",
  },
  {
    id: "security-deposit-interest-ma",
    title: "Security Deposit Interest",
    group: "Security Deposit",
    states: ["MA"],
    bodyText:
      "Landlord will hold the Security Deposit in a separate interest-bearing account and will pay Tenant interest on the Security Deposit, as required by Massachusetts law.",
  },
  {
    id: "security-deposit-interest-nj",
    title: "Security Deposit Interest",
    group: "Security Deposit",
    states: ["NJ"],
    bodyText:
      "Landlord will hold the Security Deposit in an insured interest-bearing account and will pay Tenant interest on the Security Deposit annually, as required by New Jersey law.",
  },
  {
    id: "security-deposit-interest-oh",
    title: "Security Deposit Interest",
    group: "Security Deposit",
    states: ["OH"],
    bodyText:
      "If the Term of this Lease exceeds 6 months, Landlord will pay Tenant interest on the Security Deposit at the rate required by Ohio law.",
  },

  // Tenant Responsibilities
  {
    id: "residential-use-only",
    title: "Residential Use Only",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant will use and occupy the property for residential purposes only and will not use or permit the use of the property for any non-residential, illegal, or otherwise inappropriate purpose, including any commercial purpose.",
  },
  {
    id: "existing-condition",
    title: "Existing Condition of Property",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant has examined the property and, by signing this Lease, acknowledges that the property is in good order and repair and satisfactory condition (Existing Condition), except as otherwise noted in this Lease. Landlord will deliver possession of the property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.",
  },
  {
    id: "permitted-occupants",
    title: "Permitted Occupants",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "The property will be occupied only by {{tenant_names}}, together with {{occupant_names}}. Tenant will notify Landlord promptly if any additional occupant takes up residence at the property.",
  },
  {
    id: "no-disturbance",
    title: "No Disturbance or Nuisance",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant will not, and will not permit any occupant or guest to: make any unreasonably loud or otherwise unreasonable use of the property; allow any condition on the property that poses a threat of injury to persons or property; or otherwise interfere with the rights, comfort, safety, or enjoyment of neighboring properties or other tenants.",
  },
  {
    id: "smoking-policy",
    title: "Smoking Policy",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted anywhere on the property, including inside the dwelling, on porches, balconies, or in any common area. Tenant will be responsible for any cost Landlord incurs to remediate odor, staining, or damage caused by smoking in violation of this Section, and a violation may be treated as a default under this Lease.",
  },
  {
    id: "utilities-responsibility",
    title: "Utilities Paid by Tenant",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Except for any utility Landlord agrees in this Lease to provide, Tenant is responsible for arranging and paying directly to the service provider for all other utilities and services to the property, including electricity, gas, telephone, cable, and internet, as applicable.",
  },
  {
    id: "utility-service-continuity",
    title: "Utility Service Continuity",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant will not cause water, gas, electricity, sewer, or trash service to the property to be interrupted during the Term. This requirement does not apply to telephone, cable, or internet service.",
  },
  {
    id: "utility-payment-evidence",
    title: "Evidence of Utility Payment",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Upon Landlord's reasonable request, Tenant will provide Landlord with reasonable evidence that any utility specified as Tenant's responsibility under this Lease has been paid.",
  },
  {
    id: "acceptable-payment-methods",
    title: "Acceptable Forms of Payment",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Rent and other amounts due under this Lease must be paid by one of the following methods: [list accepted payment methods here, e.g. check or money order, electronic payment service, online payment portal]. Landlord may change the accepted payment methods on reasonable written notice to Tenant.",
  },
  {
    id: "tenant-maintenance",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant will keep and maintain the property in a clean, safe, and sanitary condition; regularly dispose of garbage and waste in a clean and safe manner; use all appliances, fixtures, and equipment in a safe and reasonable manner consistent with their intended purpose; not obstruct access to doors and windows; and maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear.",
  },
  {
    id: "no-sublet-assign",
    title: "No Subletting or Assignment",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written consent of Landlord, in Landlord's sole discretion. Tenant will not rent the property, or any portion of the property, through any short-term rental program such as Airbnb, VRBO, or similar service, and doing so will be cause for termination of this Lease by Landlord. Any attempted sublease or assignment without such consent will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  {
    id: "no-alterations",
    title: "No Alterations",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "Tenant will not perform any alterations or improvements to the property, including adding, changing, or removing appliances, fixtures, shelving, wallpaper, or paint, without the prior written consent of Landlord. If Landlord approves an alteration, Tenant understands it will remain part of the property at the end of the Term unless Landlord requires its removal.",
  },
  {
    id: "joint-liability",
    title: "Joint & Several Liability",
    group: "Tenant Responsibilities",
    states: [],
    bodyText:
      "If more than one individual signs this Lease as Tenant, all such individuals are jointly and severally liable for the performance of all agreements, covenants, and obligations of Tenant under this Lease. Rent is due in full regardless of how Tenant chooses to divide payment among themselves.",
  },

  // Landlord Responsibilities
  {
    id: "services-utilities-provided",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: [],
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Tenant waives all liability of Landlord for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control.",
  },
  {
    id: "utilities-paid-by-landlord",
    title: "Utilities Paid by Landlord",
    group: "Landlord Responsibilities",
    states: [],
    bodyText:
      "Landlord will arrange and pay for the following utilities and services to the property, which are included in Monthly Rent unless this Lease states otherwise: [list utilities Landlord provides here, e.g. water, sewer, and trash removal].",
  },
  {
    id: "appliances-included",
    title: "Appliances & Equipment Included",
    group: "Landlord Responsibilities",
    states: [],
    bodyText:
      "The property includes the following appliances and equipment as of the Start Date, which Landlord will maintain as described in this Lease's Maintenance & Repairs Section: {{appliance_list}}.",
  },
  {
    id: "landlord-maintenance",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    states: [],
    bodyText:
      "Subject to Tenant's own maintenance obligations under this Lease, Landlord will maintain the property, including its structural elements, roof, and systems, in good order and repair, and will be responsible for repairing the appliances, fixtures, and equipment located at the property, except where repair is necessary due to improper use by Tenant or a guest of Tenant. Tenant will notify Landlord promptly in writing of any condition requiring repair or maintenance, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },
  {
    id: "habitability-timeline-co",
    title: "Repair Timeline",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "For a condition that materially affects health or safety, Landlord will begin remedial action within 24 hours of receiving notice from Tenant, as required by Colorado law. For any other condition Landlord is responsible to repair under this Lease, Landlord will begin remedial action within 72 hours. If a repair will reasonably take longer than 60 consecutive days to complete, Landlord will notify Tenant in writing of the expected timeline.",
  },
  {
    id: "habitability-timeline-fl",
    title: "Repair Timeline",
    group: "Landlord Responsibilities",
    states: ["FL"],
    bodyText:
      "If a condition Landlord is responsible to repair under this Lease materially affects Tenant's health or safety, Landlord will begin remedial action within 7 days after receiving written notice from Tenant, as required by Florida law.",
  },
  {
    id: "habitability-timeline-az",
    title: "Repair Timeline",
    group: "Landlord Responsibilities",
    states: ["AZ"],
    bodyText:
      "For a condition that materially affects Tenant's health or safety, Landlord will begin remedial action within 5 days of receiving notice from Tenant. For any other essential-service repair Landlord is responsible for under this Lease, Landlord will begin remedial action within 10 days, as required by Arizona law.",
  },
  {
    id: "habitability-timeline-tx",
    title: "Repair Timeline",
    group: "Landlord Responsibilities",
    states: ["TX"],
    bodyText:
      "A repair completed within 7 days after Landlord receives notice from Tenant is presumed reasonable under Texas law. Landlord will make a diligent effort to repair conditions it is responsible for under this Lease within that time, recognizing that a longer period may be reasonable depending on the nature of the repair and the availability of parts or labor.",
  },
  {
    id: "habitability-timeline-or",
    title: "Repair Timeline",
    group: "Landlord Responsibilities",
    states: ["OR"],
    bodyText:
      "For a condition affecting an essential service (such as heat, water, electricity, or plumbing), Landlord will remedy the condition within 7 days of receiving notice from Tenant, or Tenant may terminate this Lease. For any other condition Landlord is responsible to repair under this Lease, Landlord will remedy it within 30 days. If the loss of an essential service poses an imminent and serious threat to Tenant's health or safety, Tenant may terminate this Lease on 48 hours' written notice if Landlord does not remedy it, as required by Oregon law.",
  },

  // Access & Entry
  {
    id: "landlords-access",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: [],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' notice, or the notice period required by applicable law if longer, prior to entry.",
  },
  {
    id: "landlords-access-co",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["CO"],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' written notice prior to entry, as required by Colorado law, or at least 48 hours' notice prior to an inspection or treatment related to bed bugs.",
  },
  {
    id: "landlords-access-de",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["DE"],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 48 hours' notice, between 8:00 a.m. and 9:00 p.m., prior to entry, as required by Delaware law.",
  },
  {
    id: "landlords-access-hi-ky-ri-dc",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["HI", "KY", "RI", "DC"],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 48 hours' notice prior to entry, as required by law in these states.",
  },
  {
    id: "landlords-access-vt",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["VT"],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 48 hours' notice, between 9:00 a.m. and 9:00 p.m., prior to entry, as required by Vermont law.",
  },
  {
    id: "landlords-access-wa",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["WA"],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations. Except in the case of an emergency, Landlord will provide Tenant at least 2 days' notice prior to entry for repairs or inspection, or at least 1 day's notice prior to showing the property to a prospective tenant or purchaser, as required by Washington law.",
  },

  // Default & Termination
  {
    id: "possession-delay",
    title: "Possession Delay",
    group: "Default & Termination",
    states: [],
    bodyText:
      "If Landlord is unable to deliver possession of the property to Tenant by the Start Date, through no fault of Landlord, this Lease will remain in full force, but Tenant will not be obligated to pay Monthly Rent for the period Tenant is unable to take possession. If Landlord has not delivered possession within 30 days after the Start Date, Tenant may terminate this Lease by written notice to Landlord, in which case all amounts paid to Landlord by Tenant will be returned and both parties will be released from further obligation under this Lease.",
  },
  {
    id: "default-by-tenant",
    title: "Default by Tenant",
    group: "Default & Termination",
    states: [],
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. Landlord may also recover from Tenant Landlord's court costs and reasonable attorneys' fees and expenses incurred in enforcing this Lease against Tenant.",
  },
  {
    id: "surrender-end-of-term",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    states: [],
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates may, to the extent permitted by applicable law, be treated as abandoned and disposed of at Tenant's cost.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    group: "Default & Termination",
    states: [],
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, or due to the property becoming uninhabitable through no fault of Tenant.",
  },
  {
    id: "holdover",
    title: "Holdover Tenancy",
    group: "Default & Termination",
    states: [],
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession, and will be entitled to recover from Tenant double the Monthly Rent, prorated on a daily basis, for each day Tenant remains in possession after the end of the Term (or the maximum amount allowed under applicable law, if less). Alternatively, Landlord may accept Tenant's continued payment of Rent, in which case this Lease will be deemed to continue on a month-to-month basis on the same terms and conditions, terminable by either party upon written notice as required by applicable law.",
  },
  {
    id: "month-to-month-notice-co",
    title: "Month-to-Month Termination Notice",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "Either Landlord or Tenant may terminate a month-to-month tenancy under this Lease by providing at least 21 days' written notice to the other party, as required by Colorado law, ending on the last day of a rental period.",
  },
  {
    id: "month-to-month-notice-ca",
    title: "Month-to-Month Termination Notice",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "Either Landlord or Tenant may terminate a month-to-month tenancy under this Lease by providing written notice: at least 30 days if Tenant has occupied the property for less than one year, or at least 60 days if Tenant has occupied the property for one year or more, as required by California law.",
  },

  // Notices & General
  {
    id: "notices",
    title: "Notices",
    group: "Notices & General",
    states: [],
    bodyText:
      "Any notice of termination, notice of default, or other notice required to be given in writing under this Lease or applicable law will be delivered to the addresses specified in this Lease, or to any updated address either party provides in writing to the other.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    group: "Notices & General",
    states: [],
    bodyText:
      "This Lease will be governed by the laws of the State of {{state}}, and any additional applicable laws of the city or county in which the property is located.",
  },
  {
    id: "severability",
    title: "Severability",
    group: "Notices & General",
    states: [],
    bodyText:
      "If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.",
  },
  {
    id: "tenants-property-insurance",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: [],
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property, and Landlord is not liable for any such loss or damage. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    group: "Notices & General",
    states: [],
    bodyText:
      "This Lease, along with any attached addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties. This Lease is binding on and inures to the benefit of the permitted heirs, legal representatives, and assigns of the parties.",
  },
  {
    id: "addendum-precedence",
    title: "Addendum Precedence",
    group: "Notices & General",
    states: [],
    bodyText:
      "Tenant acknowledges that the legal disclosures and addenda attached to this Lease are part of this legal agreement. The terms of this Lease will control in the event of any conflict between the terms of an Addendum and the terms of this Lease.",
  },
  {
    id: "electronic-signatures",
    title: "Electronic Signatures",
    group: "Notices & General",
    states: [],
    bodyText:
      "All individuals indicated in the Basic Terms as comprising Tenant will sign this Lease and related attached Addenda where indicated. Each of Landlord and Tenant consents to the other party's execution of this Lease by electronic signature. Delivery of this Lease containing the electronic signature of a party or otherwise by facsimile through electronic means or as a digital copy will have the same full force and effect as a manually executed original version.",
  },

  // Pets
  {
    id: "pet-policy",
    title: "Pets",
    group: "Pets",
    states: [],
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet, without liability to Tenant, if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  {
    id: "pet-insurance-requirement",
    title: "Pet Insurance Requirement",
    group: "Pets",
    states: [],
    bodyText:
      "If Tenant keeps an approved pet at the property, Tenant will maintain renter's insurance that includes coverage for pet-related liability, and will name Landlord as an interested party on the policy upon Landlord's request.",
  },

  // Parking & Storage
  {
    id: "parking",
    title: "Parking",
    group: "Parking & Storage",
    states: [],
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents.",
  },
  {
    id: "assigned-parking-space",
    title: "Assigned Parking Space(s)",
    group: "Parking & Storage",
    states: [],
    bodyText:
      "Tenant is assigned the following parking space(s) for Tenant's exclusive use during the Term: [identify assigned space number(s)/location here]. Landlord may reassign a different space of comparable convenience on reasonable notice to Tenant.",
  },
  {
    id: "parking-vehicle-rules",
    title: "Parking & Vehicle Requirements",
    group: "Parking & Storage",
    states: [],
    bodyText:
      "Only operable, currently registered passenger vehicles may be parked at the property; commercial vehicles, recreational vehicles, trailers, and oversized vehicles are not permitted without Landlord's prior written consent. Landlord may require Tenant to provide vehicle registration information and may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant. Landlord may have a vehicle towed, at the vehicle owner's expense, if it is illegally parked, abandoned, inoperable, or has expired registration. Vehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.",
  },
  {
    id: "storage-space",
    title: "Storage Space",
    group: "Parking & Storage",
    states: [],
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space, and Landlord is not liable for damage to or theft of items stored there.",
  },

  // Rules & Regulations
  {
    id: "keys",
    title: "Keys",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or requires a replacement, Landlord may re-key the applicable locks and charge the cost to Tenant. Tenant may not duplicate keys without Landlord's consent.",
  },
  {
    id: "guest-policy",
    title: "Guest Policy",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Guests are welcome for reasonable, non-continuous stays. A guest who stays beyond the period specified by Landlord within a given time frame will be considered an unauthorized occupant and subject to Landlord's prior written consent under this Lease's occupancy terms.",
  },
  {
    id: "guest-policy-day-limit",
    title: "Guest Policy (14-Day Limit)",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Tenant will not permit a guest to stay at the property for more than 14 consecutive days, or more than 14 total days within any rolling 6-month period, without Landlord's prior written consent to add that person to this Lease as an occupant or Tenant.",
  },
  {
    id: "common-area-use",
    title: "Use of Property & Common Areas",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep a waterbed or other water-filled furniture at the property, or any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor, without Landlord's prior written consent. Tenant will not burn wax candles at the property. Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent.",
  },
  {
    id: "fire-safety-grilling",
    title: "Fire Safety & Grilling",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Tenant will not cook or use a barbecue, grill, or other open-flame device on a porch, balcony, or within 15 feet of any building, and will not keep or use any flammable chemical or other material at the property that increases the risk of fire, except in quantities and manner consistent with normal household use.",
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Unless Landlord provides landscaping service, Tenant is responsible for reasonable upkeep of the property's landscaping, including lawn mowing and leaf raking. If Landlord has set an irrigation schedule, Tenant will not modify it, and will promptly inform Landlord of any irrigation or landscaping issue, such as a leak or watering deficiency.",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.",
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    group: "Rules & Regulations",
    states: [],
    bodyText:
      "Tenant will allow Landlord to perform periodic inspections of the property during the Term, and at move-out, upon reasonable notice consistent with this Lease's Access & Entry terms.",
  },

  // Disclosures
  {
    id: "lead-based-paint",
    title: "Lead-Based Paint Disclosure",
    group: "Disclosures",
    states: [],
    bodyText:
      "Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards if not managed properly, and is especially harmful to young children and pregnant women. If the property was built before 1978, Landlord must disclose any known lead-based paint or lead-based paint hazards, and Tenant must receive a copy of the federally approved pamphlet, Protect Your Family from Lead in Your Home. By signing this Lease, Tenant acknowledges receipt of any required disclosures and the pamphlet.",
  },
  {
    id: "hoa-compliance",
    title: "Homeowner / Condominium Association Compliance",
    group: "Disclosures",
    states: [],
    bodyText:
      "If the property is located within a homeowner or condominium association, Tenant will comply with the association's rules and regulations applicable to the property. Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility.",
  },
  {
    id: "bed-bug-disclosure-co",
    title: "Bed Bug Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "As required by Colorado law, Landlord discloses the property's bed bug history within the past 8 months, if any: [describe any known infestation and treatment, or state 'none known']. Tenant acknowledges receipt of this disclosure.",
  },
  {
    id: "utility-submetering-disclosure-co",
    title: "Utility Allocation Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "If utilities at the property are not individually metered and Tenant's utility charges are calculated using a ratio or formula rather than a dedicated meter, Landlord will clearly disclose the calculation method in this Lease, as required by Colorado law: [describe the utility allocation method used]. Any administrative fee for this billing method will not exceed the greater of $10.00 per month or 2% of the utility charge, and Landlord will not add any markup to the utility cost itself.",
  },
  {
    id: "bed-bug-disclosure-ca",
    title: "Bed Bug Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "As required by California law, Landlord provides Tenant the following information about bed bugs: information on their identification, behavior, biology, and prevention; the importance of prompt reporting; Landlord's process for investigating a suspected infestation; and the danger of self-treating with pesticides. Tenant acknowledges receipt of this disclosure.",
  },
  {
    id: "bed-bug-disclosure-me",
    title: "Bed Bug Disclosure",
    group: "Disclosures",
    states: ["ME"],
    bodyText:
      "As required by Maine law, Landlord discloses whether, to Landlord's knowledge, a unit adjacent to the property is currently infested with bed bugs or is being treated for a bed bug infestation: [describe, or state 'none known']. Tenant may request the date of the property's most recent bed bug inspection.",
  },
  {
    id: "meth-disclosure-va",
    title: "Methamphetamine Contamination Disclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "If Landlord has actual knowledge that the property was used to manufacture methamphetamine and has not been cleaned up in accordance with applicable state standards, Landlord must disclose that fact to Tenant, as required by Virginia law. Landlord discloses: [describe any known contamination and remediation, or state 'none known']. If this disclosure is not made when required, Tenant may have the right to terminate this Lease within 60 days.",
  },
  {
    id: "meth-disclosure-ca",
    title: "Methamphetamine Contamination Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "If the property is subject to an order prohibiting occupancy due to methamphetamine contamination that has not been satisfied, Landlord must disclose that fact to Tenant, as required by California law. Landlord discloses: [describe any known contamination order, or state 'none known'].",
  },
  {
    id: "mold-disclosure-ca",
    title: "Mold Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "If Landlord knows, or has reasonable cause to believe, that mold is present at the property in an amount that may exceed exposure limits recommended by a health authority, Landlord must disclose that condition to Tenant in writing, as required by California law. Landlord discloses: [describe any known mold condition, or state 'none known'].",
  },
  {
    id: "mold-disclosure-wa",
    title: "Mold Disclosure",
    group: "Disclosures",
    states: ["WA"],
    bodyText:
      "As required by Washington law, Landlord provides Tenant the Washington State Department of Health's mold information notice, addressing the health effects of indoor mold exposure and the respective responsibilities of Landlord and Tenant for preventing and addressing mold growth. Tenant acknowledges receipt of this disclosure.",
  },
  {
    id: "mold-disclosure-va",
    title: "Mold Disclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "As part of the move-in inspection report for this Lease, Landlord discloses any visible evidence of mold observed at the property, as required by Virginia law: [describe any visible mold observed, or state 'none observed'].",
  },
  {
    id: "flood-disclosure-ca",
    title: "Flood Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "If the property is located within a special flood hazard area as designated by the Federal Emergency Management Agency, Landlord must disclose that fact to Tenant and recommend that Tenant consider obtaining renter's insurance covering flood damage, as required by California law.",
  },
  {
    id: "flood-disclosure-tx",
    title: "Flood Disclosure",
    group: "Disclosures",
    states: ["TX"],
    bodyText:
      "Landlord discloses the property's flood history and flood risk, as required by Texas law: [describe whether the property is located in a 100-year floodplain and any known prior flooding, or state 'Landlord is not aware the property is located in a floodplain or has previously flooded'].",
  },
  {
    id: "flood-disclosure-fl",
    title: "Flood Disclosure",
    group: "Disclosures",
    states: ["FL"],
    bodyText:
      "As a separate written disclosure required by Florida law, Landlord discloses the property's flood zone designation and, if known, its flood history: [describe, or state 'Landlord is not aware the property is located in a flood zone or has previously flooded']. If Landlord fails to provide this disclosure and the property floods, Tenant may have the right to terminate this Lease.",
  },
  {
    id: "utility-submetering-disclosure-tx",
    title: "Utility Allocation Disclosure",
    group: "Disclosures",
    states: ["TX"],
    bodyText:
      "If utilities at the property are billed using a ratio or formula rather than a dedicated meter, Landlord will disclose that fact and the calculation method used in this Lease, as required by Texas law: [describe the utility allocation method used].",
  },
  {
    id: "foreclosure-disclosure-nv",
    title: "Foreclosure Disclosure",
    group: "Disclosures",
    states: ["NV"],
    bodyText:
      "If the property is subject to a pending foreclosure proceeding, Landlord must disclose that fact to Tenant in writing, as required by Nevada law. Landlord discloses: [describe any known foreclosure proceeding, or state 'none known'].",
  },
  {
    id: "foreclosure-disclosure-ca",
    title: "Foreclosure Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "If a notice of default has been recorded against the property, Landlord must post or deliver notice of that fact, as required by California law. Landlord discloses: [describe any known foreclosure proceeding, or state 'none known'].",
  },
  {
    id: "sex-offender-registry-notice-ca",
    title: "Sex Offender Registry Notice",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "As required by California law, Landlord provides Tenant the following notice: information about specified registered sex offenders is made available to the public via an internet website maintained by the Department of Justice. Depending on an offender's criminal history, this information will include either the offender's address or the community of residence and ZIP Code.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
