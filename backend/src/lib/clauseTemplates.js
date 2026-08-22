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
// **Aug 2026 — replaced by a rigorous, per-clause, per-state verification
// pass, state by state (backend and this file only ever held CO + a
// scattered set of unverified other-state clauses before this).** Colorado
// went first; Wyoming is the second state, run specifically to test whether
// the CO-built process/schema/screening rules generalize to a second state
// before trusting them further. Full methodology, statute-by-statute
// findings, and every correction made along the way live in
// `lease-clause-decision-log-CO.md` and `lease-clause-decision-log-WY.md`
// (repo root) — read both before touching this file. `lease-clauses.csv`
// (repo root, renamed from `lease-clauses-CO.csv` once it stopped being
// CO-only) is the structured source of truth this file is generated from;
// treat the CSV + decision logs as authoritative and this file as their
// compiled output. Each future state gets its own decision log rather than
// growing one ever-larger file — see the WY log's §13 for why, and for the
// state #3 pick (Kansas).
//
// `states` redefined during the CO pass: it is no longer "blank = universal."
// A clause only carries a state once that state's law has actually been
// checked against it — blank/`[]` now means "not yet verified against any
// state," not "safe everywhere." Practical effect: most clauses below are
// tagged `["CO"]`, `["WY"]`, or `["CO", "WY"]` — CO and WY are the only two
// states that have gone through the full pass so far. A property in any
// other state will see a mostly-empty Provided Clauses pool until that state
// gets its own verified pass — deliberate, not a bug (see the CO decision
// log's §2 for the tradeoff). The ~51 clauses that only ever went through an
// earlier, high-level, unverified nationwide pass (other states' late
// fee/NSF/deposit/disclosure variants) have been pulled out of this shipped
// file entirely rather than displayed unverified — their content isn't lost,
// it's preserved in the CSV/decision logs as a roadmap for whenever that
// state gets its own real pass.
//
// A clause tagged `["CO", "WY"]` earned both tags independently — either it
// was drafted and verified against both states' statutes directly, or (the
// common case for generic contract-mechanics clauses like Rent Payment or
// Keys) it was verified against CO first, then cross-checked during WY's
// full-library audit (WY decision log §10) and found to contain nothing
// CO-specific that would conflict with WY law. Two states agreeing is not
// treated as proof of universality — see the WY log's own explicit caution
// on this (§7) — so these clauses stay tagged `CO;WY`, not promoted to
// blank/universal.
//
// A state-specific clause that fully replaces a universal one's content
// (not just adds a number, but restates everything the universal clause
// covers) can set `supersedes: "<universal-clause-id>"`. When the library or
// attach picker is filtered to a specific state, a superseded universal
// clause is hidden in favor of its more specific replacement.
//
// Per-clause research metadata (rule type, content-type bucket,
// verification status, and research notes from the CO pass) lives in the
// sibling file `clauseResearchMetadata.js`, keyed by clause id — kept
// deliberately separate from this array (rather than added as fields here)
// so it never flows through `GET /api/clause-templates`, which spreads
// these objects directly into the API response. It's there for future
// automated consistency checks (e.g. "no rent-related clause implies a rent
// increase more than once per 12 months"), not for the UI.
//
// IMPORTANT: several of the underlying Colorado rules specifically changed
// within the last 1-2 years (deposit cap Jan 2026, HB 25-1249 wear-and-tear
// rules, HB 25-1090 "Honest Pricing" utility/fee rules Jan 2026, entry
// notice reframing, month-to-month for-cause reform 2024) — this is a
// well-researched snapshot as of Aug 2026, not a substitute for an attorney
// or a fresh check of current law before relying on it in a real lease. The
// decision log proposes an annual re-verification cadence in late summer.

const CLAUSE_TEMPLATES = [
  // Rent & Payment
  {
    id: "rent-payment",
    title: "Rent Payment",
    group: "Rent & Payment",
    states: ["CO", "WY"],
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand, deduction, or setoff. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fee",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["CO", "WY"],
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "returned-payments",
    title: "Returned Checks / Dishonored Payments",
    group: "Rent & Payment",
    states: ["CO", "WY"],
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by a cashier's check, certified check, or money order, and may charge Tenant any fee associated with the failed payment. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent be made by cashier's check, certified check, or money order.",
  },
  {
    id: "due-at-signing",
    title: "Amounts Due Upfront",
    group: "Rent & Payment",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will pay Landlord the following amounts, at the time specified for each: [specify what is due and when here, e.g. first month's Monthly Rent ({{monthly_rent}}) due at signing; Security Deposit ({{security_deposit}}) due at signing; Pet Deposit ({{pet_deposit}}) due at signing; last month's Monthly Rent due on the Start Date]. These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
  },
  {
    id: "application-of-payments",
    title: "Application of Payments",
    group: "Rent & Payment",
    states: ["CO", "WY"],
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
    id: "subsidy-late-fee-co",
    title: "Late Fee - Tenant Receiving a Housing Subsidy",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "If Tenant's Rent is paid in whole or in part by a housing subsidy program, any late fee assessed under this Lease against Tenant will not exceed $20.00, regardless of the late fee amount otherwise stated in this Lease, as required by Colorado law.",
  },
  // Security Deposit
  {
    id: "security-deposit-use",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    states: ["CO"],
    bodyText:
      "Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit to remedy a Tenant default under this Lease, including past due Rent, and to repair damage to the property caused by Tenant or Tenant's guests beyond ordinary wear and tear. Landlord will not apply the Security Deposit to normal wear and tear or to any damage or defective condition that preexisted the tenancy. Landlord may apply the Security Deposit to cleaning costs only if the property is substantially less clean at the end of the Term than it was at the start of the Term. The Security Deposit will not relieve Tenant of any obligation to pay Rent due under this Lease prior to its termination.",
  },
  {
    id: "security-deposit-return",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["CO"],
    bodyText:
      "The Security Deposit, less any lawful deductions, will be returned to Tenant within the time period required by applicable law after Tenant vacates the property upon expiration or earlier termination of this Lease. Any deductions will be described in an itemized statement provided with the returned portion of the deposit. Tenant will provide Landlord a forwarding address to which the Security Deposit and itemized statement should be sent.",
  },
  {
    id: "security-deposit-return-co",
    title: "Security Deposit Return Timeline",
    group: "Security Deposit",
    states: ["CO"],
    supersedes: "security-deposit-return",
    bodyText:
      "The Security Deposit will be returned to Tenant within 30 days after Tenant vacates the property, or within 60 days if this Lease so provides, as required by Colorado law.",
  },
  {
    id: "security-deposit-installments-co",
    title: "Security Deposit Paid in Installments",
    group: "Security Deposit",
    states: ["CO"],
    bodyText:
      "In lieu of paying the Security Deposit in full prior to occupancy, Tenant has elected to pay the Security Deposit in installments of [specify installment amount] due [specify schedule, e.g. on the 1st of each month], over a period of at least six months, as permitted by Colorado law. If Tenant fails to pay an installment when due, Landlord may pursue a civil action to recover the unpaid amount, but Landlord may not terminate this Lease or pursue eviction based solely on a missed installment payment.",
  },
  {
    id: "nonrefundable-deposit-notice-wy",
    title: "Nonrefundable Portion of Deposit",
    group: "Security Deposit",
    states: ["WY"],
    bodyText:
      "Of Tenant's total security deposit of {{security_deposit}}, {{nonrefundable_deposit_amount}} is nonrefundable and will not be returned to Tenant regardless of the condition of the property at the end of this Lease. (If no portion of the deposit is nonrefundable, this amount is $0.)",
  },
  {
    id: "security-deposit-return-wy",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["WY"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within 30 days after termination of this Lease, or within 15 days after receiving Tenant's forwarding address, whichever is later, Landlord will deliver or mail to Tenant the balance of Tenant's deposit and any prepaid rent, along with a written itemization of any deductions and the reasons for them. If the property is damaged, this period is extended by an additional 30 days. Landlord may apply the deposit to accrued rent, damage to the property beyond reasonable wear and tear, the cost to clean the property to the condition it was in at the start of this Lease, and any other costs this Lease provides for. Tenant will notify Landlord in writing, within 30 days after termination, of the address where payment and notice should be sent.",
  },
  {
    id: "utility-deposit-return-wy",
    title: "Return of Separate Utility Deposit",
    group: "Security Deposit",
    states: ["WY"],
    bodyText:
      "If Landlord holds a deposit identified separately as a utility deposit, Landlord will refund it within 10 days after Tenant provides a satisfactory showing that all utility charges Tenant incurred have been paid. If Tenant has not made that showing within 45 days after termination of this Lease, Landlord will apply the utility deposit toward Tenant's outstanding utility debt within 15 days after that period ends, and will refund any remaining balance within 7 days after applying it, or within 15 days after receiving Tenant's forwarding address, whichever is later.",
  },
  {
    id: "unpaid-damages-interest-wy",
    title: "Interest on Unpaid Damages Beyond the Deposit",
    group: "Security Deposit",
    states: ["WY"],
    bodyText:
      "If Tenant damages the property, Landlord may apply the security deposit to those damages as provided in this Lease's security deposit section. Tenant remains liable for any damages beyond what the deposit covers, plus interest at ten percent (10%) per year on any unpaid amount, and Landlord may pursue any other legal action available to recover damages Tenant caused to the property.",
  },
  // Tenant Responsibilities
  {
    id: "residential-use-only",
    title: "Residential Use Only",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will use and occupy the property for residential purposes only and will not use or permit the use of the property for any non-residential, illegal, or otherwise inappropriate purpose, including any commercial purpose.",
  },
  {
    id: "existing-condition",
    title: "Existing Condition of Property",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant has examined the property and, by signing this Lease, acknowledges that the property is in good order and repair and satisfactory condition (Existing Condition), except as otherwise noted in this Lease. Landlord will deliver possession of the property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.",
  },
  {
    id: "permitted-occupants",
    title: "Permitted Occupants",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "The property will be occupied only by {{tenant_names}}, together with {{occupant_names}}. Tenant will notify Landlord promptly if any additional occupant takes up residence at the property.",
  },
  {
    id: "no-disturbance",
    title: "No Disturbance or Nuisance",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not, and will not permit any occupant or guest to: make any unreasonably loud or otherwise unreasonable use of the property; allow any condition on the property that poses a threat of injury to persons or property; or otherwise interfere with the rights, comfort, safety, or enjoyment of neighboring properties or other tenants.",
  },
  {
    id: "smoking-policy",
    title: "Smoking Policy",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted anywhere on the property, including inside the dwelling, on porches, balconies, or in any common area. Tenant will be responsible for any cost Landlord incurs to remediate odor, staining, or damage caused by smoking in violation of this Section, and a violation may be treated as a default under this Lease.",
  },
  {
    id: "utilities-responsibility",
    title: "Utilities Paid by Tenant",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Except for any utility Landlord agrees in this Lease to provide, Tenant is responsible for arranging and paying directly to the service provider for all other utilities and services to the property, including electricity, gas, telephone, cable, and internet, as applicable.",
  },
  {
    id: "utility-service-continuity",
    title: "Utility Service Continuity",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not cause water, gas, electricity, sewer, or trash service to the property to be interrupted during the Term. This requirement does not apply to telephone, cable, or internet service.",
  },
  {
    id: "utility-payment-evidence",
    title: "Evidence of Utility Payment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Upon Landlord's reasonable request, Tenant will provide Landlord with reasonable evidence that any utility specified as Tenant's responsibility under this Lease has been paid.",
  },
  {
    id: "acceptable-payment-methods",
    title: "Acceptable Forms of Payment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Rent and other amounts due under this Lease must be paid by one of the following methods: [list accepted payment methods here, e.g. check or money order, electronic payment service, online payment portal]. Landlord may change the accepted payment methods on reasonable written notice to Tenant.",
  },
  {
    id: "tenant-maintenance",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will keep and maintain the property in a clean, safe, and sanitary condition; regularly dispose of garbage and waste in a clean and safe manner; use all appliances, fixtures, and equipment in a safe and reasonable manner consistent with their intended purpose; not obstruct access to doors and windows; and maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear.",
  },
  {
    id: "no-sublet-assign",
    title: "No Subletting or Assignment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written consent of Landlord, in Landlord's sole discretion. Tenant will not rent the property, or any portion of the property, through any short-term rental program such as Airbnb, VRBO, or similar service, and doing so will be cause for termination of this Lease by Landlord. Any attempted sublease or assignment without such consent will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  {
    id: "no-alterations",
    title: "No Alterations",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not perform any alterations or improvements to the property, including adding, changing, or removing appliances, fixtures, shelving, wallpaper, or paint, without the prior written consent of Landlord. If Landlord approves an alteration, Tenant understands it will remain part of the property at the end of the Term unless Landlord requires its removal.",
  },
  {
    id: "joint-liability",
    title: "Joint & Several Liability",
    group: "Tenant Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "If more than one individual signs this Lease as Tenant, all such individuals are jointly and severally liable for the performance of all agreements, covenants, and obligations of Tenant under this Lease. Rent is due in full regardless of how Tenant chooses to divide payment among themselves.",
  },
  {
    id: "renter-duties-wy",
    title: "Tenant's Duties",
    group: "Tenant Responsibilities",
    states: ["WY"],
    bodyText:
      "Tenant will keep the property clean and safe and not unreasonably burden any common area; dispose of all garbage and waste in a clean and safe manner; keep all plumbing fixtures as sanitary as their condition permits; use all electrical, plumbing, sanitary, heating, and other facilities and appliances in a reasonable manner; occupy the property only in the manner for which it was designed, and not increase the number of occupants above what this Lease specifies without Landlord's prior written permission; remain current on all payments required under this Lease; comply with all lawful requirements of this Lease; and, before vacating, remove all property and garbage belonging to Tenant or Tenant's guests and clean the property to the condition it was in at the start of this Lease.",
  },
  {
    id: "prohibited-acts-renter-wy",
    title: "Prohibited Acts by Tenant",
    group: "Tenant Responsibilities",
    states: ["WY"],
    bodyText:
      "Tenant will not intentionally or negligently destroy, deface, damage, or impair any part of the property, or knowingly permit any other person to do so; interfere with another person's peaceful enjoyment of the property; or unreasonably deny access to, refuse entry to, or withhold consent to enter the property to Landlord or Landlord's agent for the purpose of making repairs, inspecting the property, or showing it for rent or sale.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Tenant waives all liability of Landlord for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control.",
  },
  {
    id: "utilities-paid-by-landlord",
    title: "Utilities Paid by Landlord",
    group: "Landlord Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "Landlord will arrange and pay for the following utilities and services to the property, which are included in Monthly Rent unless this Lease states otherwise: [list utilities Landlord provides here, e.g. water, sewer, and trash removal].",
  },
  {
    id: "appliances-included",
    title: "Appliances & Equipment Included",
    group: "Landlord Responsibilities",
    states: ["CO", "WY"],
    bodyText:
      "The property includes the following appliances and equipment as of the Start Date, which Landlord will maintain as described in this Lease's Maintenance & Repairs Section: {{appliance_list}}.",
  },
  {
    id: "landlord-maintenance",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    states: ["CO", "WY"],
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
    id: "subsidy-habitability-proration-co",
    title: "Habitability Proration - Tenant Receiving a Housing Subsidy",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "If Tenant's Rent is paid in whole or in part by a housing subsidy program and the property becomes partially uninhabitable, Rent will be proportionally reduced based on the portion of the property affected, calculated on the total Rent for the property including both the tenant-paid and subsidy-paid portions. If Rent has already been paid for the affected period, Tenant will receive a prorated refund, as required by Colorado law.",
  },
  {
    id: "habitability-notice-co",
    title: "Notice of Habitability Rights",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "Every tenant is entitled to safe and habitable housing under Colorado's warranty of habitability, as described in this Lease's Maintenance & Repairs Section. Colorado law prohibits Landlord from retaliating against Tenant in any manner for reporting an unsafe or uninhabitable condition, exercising any right under this Lease, or participating in a tenant organization. To report a condition that may affect the habitability of the property, Tenant should contact Landlord at: [insert landlord's designated habitability-notice contact method, e.g. phone, email, or mailing address].",
  },
  {
    id: "utility-allowance-cap-co",
    title: "Utility Allowance with Tenant-Paid Overage",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "Landlord's obligation to pay for [specify utility, e.g. water and sewer] under this Lease's Utilities Paid by Landlord Section is limited to [insert monthly utility allowance amount] per month. If the actual utility cost for a given month exceeds this amount, Tenant will reimburse Landlord for the excess within [insert number of days, e.g. 15] days of receiving a copy of the utility provider's bill showing the actual charges for that month. This reimbursement is a separate obligation from Rent: it is not subject to any late fee applicable to Rent under this Lease, will not be characterized as Rent for purposes of any remedy available for nonpayment of Rent, and Landlord's remedies for Tenant's failure to pay it are limited to those otherwise available under this Lease for breach of an obligation other than Rent.",
  },
  {
    id: "habitability-baseline-wy",
    title: "Habitability Baseline",
    group: "Landlord Responsibilities",
    states: ["WY"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Landlord will maintain the property in a safe and sanitary condition fit for human habitation, including operational electrical, heating, and plumbing systems, with hot and cold running water, unless otherwise agreed in writing by both parties. Tenant will cooperate in maintaining the property consistent with this Section.",
  },
  // Access & Entry
  {
    id: "landlords-access",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["CO", "WY"],
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' notice, or the notice period required by applicable law if longer, prior to entry.",
  },
  {
    id: "landlords-access-co",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["CO"],
    supersedes: "landlords-access",
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' written notice prior to entry, consistent with Tenant's right to quiet enjoyment of the property, or at least 48 hours' notice prior to an inspection or treatment related to bed bugs, as required by Colorado law.",
  },
  // Default & Termination
  {
    id: "possession-delay",
    title: "Possession Delay",
    group: "Default & Termination",
    states: ["CO", "WY"],
    bodyText:
      "If Landlord is unable to deliver possession of the property to Tenant by the Start Date, through no fault of Landlord, this Lease will remain in full force, but Tenant will not be obligated to pay Monthly Rent for the period Tenant is unable to take possession. If Landlord has not delivered possession within 30 days after the Start Date, Tenant may terminate this Lease by written notice to Landlord, in which case all amounts paid to Landlord by Tenant will be returned and both parties will be released from further obligation under this Lease.",
  },
  {
    id: "default-by-tenant",
    title: "Default by Tenant",
    group: "Default & Termination",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. To the extent permitted under applicable law, the prevailing party may recover from the other party court costs and reasonable attorneys' fees and expenses incurred in connection with any legal proceedings related to this Lease.",
  },
  {
    id: "surrender-end-of-term",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    states: ["CO", "WY"],
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates may, to the extent permitted by applicable law, be treated as abandoned and disposed of at Tenant's cost.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["CO", "WY"],
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, due to the property becoming uninhabitable through no fault of Tenant, or, except as prohibited by law in the case of a Tenant's death, any other termination right or limitation provided by applicable law.",
  },
  {
    id: "holdover",
    title: "Holdover Tenancy",
    group: "Default & Termination",
    states: ["CO", "WY"],
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession, and will be entitled to recover from Tenant double the Monthly Rent, prorated on a daily basis, for each day Tenant remains in possession after the end of the Term (or the maximum amount allowed under applicable law, if less). Alternatively, Landlord may accept Tenant's continued payment of Rent, in which case this Lease will be deemed to continue on a month-to-month basis on the same terms and conditions, terminable by either party upon written notice as required by applicable law.",
  },
  {
    id: "month-to-month-notice-co-exempt",
    title: "Month-to-Month Termination Notice (Property Exempt from For-Cause Requirements)",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "Either Landlord or Tenant may terminate a month-to-month tenancy under this Lease by providing at least 21 days' written notice to the other party, as required by Colorado law, ending on the last day of a rental period. Because [describe the applicable exemption here - e.g. the property is Landlord's primary residence / a short-term rental / an accessory dwelling unit meeting the criteria of C.R.S. section 38-12-1302], this tenancy is not subject to Colorado's for-cause eviction requirements under C.R.S. section 38-12-1301 et seq.",
  },
  {
    id: "month-to-month-notice-co-covered",
    title: "Month-to-Month Termination Notice (Subject to For-Cause Requirements)",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "For the first 12 months of Tenant's occupancy, either Landlord or Tenant may terminate a month-to-month tenancy under this Lease by providing at least 21 days' written notice to the other party, ending on the last day of a rental period. After Tenant has occupied the property for 12 months or more, Landlord may terminate this tenancy or decline to renew it only for cause, or for a qualifying no-fault reason, as defined under C.R.S. section 38-12-1301 et seq., and will provide the notice and statement of legal and factual basis that law requires.",
  },
  {
    id: "dv-stalking-termination-co",
    title: "Early Termination - Victim of Unlawful Sexual Behavior, Stalking, or Domestic Violence",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "A Tenant who is a victim of unlawful sexual behavior, stalking, domestic violence, or domestic abuse may terminate this Lease and vacate the property without further obligation, upon providing Landlord written notice and the documentation required under Colorado law (a police report from the preceding 120 days, a valid protective or restraining order, or a qualifying advocate's written statement). Notwithstanding this Lease's Early Termination Section, Landlord's compensation for actual damages resulting from a termination under this Section is limited to no more than one month's Rent ({{monthly_rent}}), and Landlord must provide Tenant a written statement of those damages within 30 days of the termination date.",
  },
  {
    id: "dv-safe-homes-wy",
    title: "Domestic Abuse / Sexual Violence — Rent Liability After Vacating",
    group: "Default & Termination",
    states: ["WY"],
    bodyText:
      "Wyoming's Safe Homes Act provides Tenant a defense against a claim for unpaid rent under certain circumstances. If Tenant or a member of Tenant's household vacates the property because of a credible imminent threat of domestic abuse or sexual violence at the property, or because Tenant or a household member was a victim of domestic abuse or sexual violence occurring at the property within the preceding 60 days (or as soon as practicable afterward if hospitalization, or seeking shelter or counseling related to the abuse or violence, prevented earlier notice), and Tenant provides Landlord written notice at least 7 days before vacating stating the reason for vacating — including, where applicable, the date of the incident and supporting medical, court, or police evidence — Tenant will not be liable for rent accruing after the date Tenant vacates. This Section does not excuse rent owed for any period before Tenant vacated and gave the required notice, and does not limit Landlord's other lawful remedies for nonpayment of rent accruing before that date.",
  },
  {
    id: "abandoned-property-wy",
    title: "Property Abandoned After Termination",
    group: "Default & Termination",
    states: ["WY"],
    bodyText:
      "Upon regaining lawful possession of the property after termination of this Lease, Landlord may immediately dispose of any trash or property Landlord reasonably believes to be hazardous, perishable, or valueless and abandoned. Any property remaining in the unit after termination is presumed valueless and abandoned. For any other property of apparent value, Landlord will provide Tenant written notice describing the property and stating that it will be disposed of seven (7) days after the notice is served unless Tenant takes possession of the property or notifies Landlord in writing of an intent to do so within that period. If Tenant responds in writing within seven (7) days stating an intent to take possession, Landlord will hold the property for an additional seven (7) days after receiving that response; if Tenant has not taken possession by the end of that additional period, the property is conclusively deemed abandoned. Landlord may charge Tenant the actual or reasonable cost of removing and storing the property, and Tenant must pay these costs before removing the property. Landlord is not responsible for any loss to Tenant resulting from storage.",
  },
  // Notices & General
  {
    id: "notices",
    title: "Notices",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "Any notice of termination, notice of default, or other notice required to be given in writing under this Lease or applicable law will be delivered to the addresses specified in this Lease, or to any updated address either party provides in writing to the other.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "This Lease will be governed by the laws of the State of {{state}}, and any additional applicable laws of the city or county in which the property is located.",
  },
  {
    id: "severability",
    title: "Severability",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.",
  },
  {
    id: "tenants-property-insurance",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property, and Landlord is not liable for any such loss or damage. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "This Lease, along with any attached addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties. This Lease is binding on and inures to the benefit of the permitted heirs, legal representatives, and assigns of the parties.",
  },
  {
    id: "addendum-precedence",
    title: "Addendum Precedence",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "Tenant acknowledges that the legal disclosures and addenda attached to this Lease are part of this legal agreement. The terms of this Lease will control in the event of any conflict between the terms of an Addendum and the terms of this Lease.",
  },
  {
    id: "electronic-signatures",
    title: "Electronic Signatures",
    group: "Notices & General",
    states: ["CO", "WY"],
    bodyText:
      "All individuals indicated in the Basic Terms as comprising Tenant will sign this Lease and related attached Addenda where indicated. Each of Landlord and Tenant consents to the other party's execution of this Lease by electronic signature. Delivery of this Lease containing the electronic signature of a party or otherwise by facsimile through electronic means or as a digital copy will have the same full force and effect as a manually executed original version.",
  },
  // Pets
  {
    id: "pet-policy",
    title: "Pets",
    group: "Pets",
    states: ["CO", "WY"],
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet, without liability to Tenant, if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  {
    id: "pet-insurance-requirement",
    title: "Pet Insurance Requirement",
    group: "Pets",
    states: ["CO", "WY"],
    bodyText:
      "If Tenant keeps an approved pet at the property, Tenant will maintain renter's insurance that includes coverage for pet-related liability, and will name Landlord as an interested party on the policy upon Landlord's request.",
  },
  {
    id: "assistance-animal-accommodation",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["CO", "WY"],
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law; if the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  {
    id: "assistance-animal-accommodation-co",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["CO"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, but will not require details about the nature or severity of Tenant's disability beyond what is necessary to verify the need for the accommodation, as required by Colorado law. If the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation. Tenant is hereby warned, as required for enforcement under Colorado law, that intentionally misrepresenting an animal as a service animal or assistance animal to obtain a right or privilege under this Section is a criminal offense under C.R.S. sections 18-13-107.3 and 18-13-107.7, punishable by escalating fines.",
  },
  {
    id: "assistance-animal-accommodation-wy",
    title: "Assistance Animal Accommodation",
    group: "Pets",
    states: ["WY"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law; if the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation. Tenant is hereby advised that knowingly and intentionally misrepresenting an animal as a service animal or assistance animal to obtain a right or privilege under this Section is a misdemeanor under Wyoming law, punishable by a fine of up to $750 (Wyo. Stat. § 35-13-207).",
  },
  // Parking & Storage
  {
    id: "parking",
    title: "Parking",
    group: "Parking & Storage",
    states: ["CO", "WY"],
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents.",
  },
  {
    id: "assigned-parking-space",
    title: "Assigned Parking Space(s)",
    group: "Parking & Storage",
    states: ["CO", "WY"],
    bodyText:
      "Tenant is assigned the following parking space(s) for Tenant's exclusive use during the Term: [identify assigned space number(s)/location here]. Landlord may reassign a different space of comparable convenience on reasonable notice to Tenant.",
  },
  {
    id: "parking-vehicle-rules",
    title: "Parking & Vehicle Requirements",
    group: "Parking & Storage",
    states: ["CO", "WY"],
    bodyText:
      "Only operable, currently registered passenger vehicles may be parked at the property; commercial vehicles, recreational vehicles, trailers, and oversized vehicles are not permitted without Landlord's prior written consent. Landlord may require Tenant to provide vehicle registration information and may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant. Landlord may have a vehicle towed, at the vehicle owner's expense, if it is illegally parked, abandoned, inoperable, or has expired registration. Vehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.",
  },
  {
    id: "storage-space",
    title: "Storage Space",
    group: "Parking & Storage",
    states: ["CO", "WY"],
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space, and Landlord is not liable for damage to or theft of items stored there.",
  },
  {
    id: "ev-charging-rights-co",
    title: "Electric Vehicle Charging Systems",
    group: "Parking & Storage",
    states: ["CO"],
    bodyText:
      "Notwithstanding any other provision of this Lease, Tenant may install a Level 1 or Level 2 electric vehicle charging system at the property, at Tenant's own expense, for Tenant's own use, subject to the registration and safety requirements below. Landlord will not charge Tenant a fee for the placement or use of the charging system, other than reimbursement for the actual cost of electricity used or a reasonable access fee in place of metering, except as provided below for shared-area installations. Landlord will not restrict Tenant's parking based on Tenant's vehicle being a plug-in hybrid or electric vehicle, as required by Colorado law.",
  },
  {
    id: "ev-charging-requirements-co",
    title: "Electric Vehicle Charging System Requirements",
    group: "Parking & Storage",
    states: ["CO"],
    bodyText:
      "Tenant will register any electric vehicle charging system with Landlord within 30 days after installation, and will comply with Landlord's bona fide safety requirements consistent with applicable building codes, and with Landlord's reasonable requirements governing the dimensions, placement, and external appearance of the system: [describe any specific safety or aesthetic requirements here]. Tenant will maintain, for as long as the charging system remains installed, an insurance policy covering Tenant's obligations under this Section, naming Landlord as an additional insured. If Landlord places or causes the charging system to be installed at Tenant's request, Landlord may require Tenant to reimburse the cost of installation, including any necessary wiring upgrades.",
  },
  {
    id: "ev-charging-shared-area-co",
    title: "Electric Vehicle Charging System in a Shared Area",
    group: "Parking & Storage",
    states: ["CO"],
    bodyText:
      "If Tenant wishes to install a charging system in a parking area accessible to other tenants, Landlord may charge Tenant a reasonable fee to reserve the specific parking spot where the system is installed. Unless otherwise agreed in writing, Tenant, and any tenant who later has exclusive rights to that space, is responsible for any damage to the charging system or other property resulting from its installation, maintenance, repair, removal, or replacement.",
  },
  {
    id: "ev-charging-end-of-tenancy-co",
    title: "Electric Vehicle Charging System - End of Tenancy",
    group: "Parking & Storage",
    states: ["CO"],
    bodyText:
      "A charging system installed at Tenant's expense remains Tenant's property. Upon termination of this Lease, if the charging system is removable, Tenant may remove it, or sell it to Landlord or another tenant at an agreed price - Landlord is under no obligation to purchase it. Tenant is responsible for any damage to the property or the charging system resulting from its removal, consistent with this Lease's Surrender at End of Term Section.",
  },
  // Rules & Regulations
  {
    id: "keys",
    title: "Keys",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or requires a replacement, Landlord may re-key the applicable locks and charge the cost to Tenant. Tenant may not duplicate keys without Landlord's consent.",
  },
  {
    id: "guest-policy",
    title: "Guest Policy",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Guests are welcome for reasonable, non-continuous stays. A guest who stays beyond the period specified by Landlord within a given time frame will be considered an unauthorized occupant and subject to Landlord's prior written consent under this Lease's occupancy terms.",
  },
  {
    id: "guest-policy-day-limit",
    title: "Guest Policy (14-Day Limit)",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not permit a guest to stay at the property for more than 14 consecutive days, or more than 14 total days within any rolling 6-month period, without Landlord's prior written consent to add that person to this Lease as an occupant or Tenant.",
  },
  {
    id: "common-area-use",
    title: "Use of Property & Common Areas",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep a waterbed or other water-filled furniture at the property, or any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor, without Landlord's prior written consent. Tenant will not burn wax candles at the property. Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent.",
  },
  {
    id: "fire-safety-grilling",
    title: "Fire Safety & Grilling",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will not cook or use a barbecue, grill, or other open-flame device on a porch, balcony, or within 15 feet of any building, and will not keep or use any flammable chemical or other material at the property that increases the risk of fire, except in quantities and manner consistent with normal household use.",
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Unless Landlord provides landscaping service, Tenant is responsible for reasonable upkeep of the property's landscaping, including lawn mowing and leaf raking. If Landlord has set an irrigation schedule, Tenant will not modify it, and will promptly inform Landlord of any irrigation or landscaping issue, such as a leak or watering deficiency.",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.",
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    group: "Rules & Regulations",
    states: ["CO", "WY"],
    bodyText:
      "Tenant will allow Landlord to perform periodic inspections of the property during the Term, and at move-out, upon reasonable notice consistent with this Lease's Access & Entry terms.",
  },
  // Disclosures
  {
    id: "lead-based-paint",
    title: "Lead-Based Paint Disclosure",
    group: "Disclosures",
    states: ["CO", "WY"],
    bodyText:
      "Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards if not managed properly, and is especially harmful to young children and pregnant women. If the property was built before 1978, Landlord must disclose any known lead-based paint or lead-based paint hazards, and Tenant must receive a copy of the federally approved pamphlet, Protect Your Family from Lead in Your Home. By signing this Lease, Tenant acknowledges receipt of any required disclosures and the pamphlet.",
  },
  {
    id: "hoa-compliance",
    title: "Homeowner / Condominium Association Compliance",
    group: "Disclosures",
    states: ["CO", "WY"],
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
      "If utilities at the property are not individually metered and Tenant's utility charges are calculated using a ratio or formula rather than a dedicated meter, Landlord will clearly disclose the calculation method in this Lease, as required by Colorado law: [describe the utility allocation method used]. Landlord may charge an administrative fee for this billing method, not to exceed either 2% of the utility charge or a flat $10.00 per month — Landlord may use only one of these two methods, not both. Landlord will not add any markup to the utility cost itself.",
  },
  {
    id: "radon-disclosure-co",
    title: "Radon Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "Residential real property may present exposure to dangerous levels of indoor radon gas, which may place occupants at risk of developing radon-induced lung cancer. The Colorado Department of Public Health and Environment strongly recommends that all tenants have an indoor radon test performed before leasing residential real property, and recommends having radon levels mitigated if elevated concentrations are found. Elevated radon concentrations can be reduced by a radon mitigation professional. Landlord discloses the following regarding radon testing, concentrations, or mitigation systems at the property, if known: [describe any known radon testing results, concentrations, or mitigation systems, or state 'none known']. Tenant acknowledges receipt of this disclosure and the Colorado Department of Public Health and Environment's radon brochure, attached to this Lease, as required by Colorado law.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
