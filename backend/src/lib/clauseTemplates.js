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
// straight from the source Rules Addendum. The Colorado guest/squatter's-
// rights clause is Taylor's own real-world addition, not sourced verbatim
// from this document — flagged with its own state tag and written from the
// general rule Taylor described, not a verified statutory citation; Taylor
// should confirm it against their own addendum wording before relying on
// it in a real lease.
const CLAUSE_TEMPLATES = [
  // Rent & Payment
  {
    id: "rent-payment",
    title: "Rent Payment",
    group: "Rent & Payment",
    state: null,
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand, deduction, or setoff. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fee",
    title: "Late Fee",
    group: "Rent & Payment",
    state: null,
    bodyText:
      "If Tenant fails to pay Monthly Rent or any other Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "returned-payments",
    title: "Returned Checks / Dishonored Payments",
    group: "Rent & Payment",
    state: null,
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by a cashier's check, certified check, or money order, and may charge Tenant any fee associated with the failed payment. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent be made by cashier's check, certified check, or money order.",
  },
  {
    id: "due-at-signing",
    title: "Amounts Due Upfront",
    group: "Rent & Payment",
    state: null,
    bodyText:
      "Tenant will pay Landlord the following amounts, at the time specified for each: [specify what is due and when here, e.g. first month's Monthly Rent ({{monthly_rent}}) due at signing; Security Deposit ({{security_deposit}}) due at signing; Pet Deposit ({{pet_deposit}}) due at signing; last month's Monthly Rent due on the Start Date]. These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
  },
  {
    id: "application-of-payments",
    title: "Application of Payments",
    group: "Rent & Payment",
    state: null,
    bodyText:
      "All payments received shall be applied first to outstanding fees, charges, costs, utilities, or other amounts due under this Lease, and then to base rent, unless otherwise required by applicable law. Nothing in this provision limits Tenant's statutory right to cure nonpayment of base rent.",
  },

  // Security Deposit
  {
    id: "security-deposit-use",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    state: null,
    bodyText:
      "Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit to remedy a Tenant default under this Lease, including past due Rent, to repair damage to the property caused by Tenant or Tenant's guests beyond ordinary wear and tear, and to pay cleaning costs required to return the property to the condition it was in at the start of the Term. The Security Deposit will not relieve Tenant of any obligation to pay Rent due under this Lease prior to its termination.",
  },
  {
    id: "security-deposit-return",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    state: null,
    bodyText:
      "The Security Deposit, less any lawful deductions, will be returned to Tenant within the time period required by applicable law after Tenant vacates the property upon expiration or earlier termination of this Lease. Any deductions will be described in an itemized statement provided with the returned portion of the deposit. Tenant will provide Landlord a forwarding address to which the Security Deposit and itemized statement should be sent.",
  },

  // Tenant Responsibilities
  {
    id: "residential-use-only",
    title: "Residential Use Only",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant will use and occupy the property for residential purposes only and will not use or permit the use of the property for any non-residential, illegal, or otherwise inappropriate purpose, including any commercial purpose.",
  },
  {
    id: "existing-condition",
    title: "Existing Condition of Property",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant has examined the property and, by signing this Lease, acknowledges that the property is in good order and repair and satisfactory condition (Existing Condition), except as otherwise noted in this Lease. Landlord will deliver possession of the property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.",
  },
  {
    id: "permitted-occupants",
    title: "Permitted Occupants",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "The property will be occupied only by {{tenant_names}}, together with {{occupant_names}}. Tenant will notify Landlord promptly if any additional occupant takes up residence at the property.",
  },
  {
    id: "no-disturbance",
    title: "No Disturbance or Nuisance",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant will not, and will not permit any occupant or guest to: make any unreasonably loud or otherwise unreasonable use of the property; allow any condition on the property that poses a threat of injury to persons or property; or otherwise interfere with the rights, comfort, safety, or enjoyment of neighboring properties or other tenants.",
  },
  {
    id: "smoking-policy",
    title: "Smoking Policy",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted anywhere on the property, including inside the dwelling, on porches, balconies, or in any common area. Tenant will be responsible for any cost Landlord incurs to remediate odor, staining, or damage caused by smoking in violation of this Section, and a violation may be treated as a default under this Lease.",
  },
  {
    id: "utilities-responsibility",
    title: "Utilities Paid by Tenant",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Except for any utility Landlord agrees in this Lease to provide, Tenant is responsible for arranging and paying directly to the service provider for all other utilities and services to the property, including electricity, gas, telephone, cable, and internet, as applicable.",
  },
  {
    id: "utility-service-continuity",
    title: "Utility Service Continuity",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant will not cause water, gas, electricity, sewer, or trash service to the property to be interrupted during the Term. This requirement does not apply to telephone, cable, or internet service.",
  },
  {
    id: "utility-payment-evidence",
    title: "Evidence of Utility Payment",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Upon Landlord's reasonable request, Tenant will provide Landlord with reasonable evidence that any utility specified as Tenant's responsibility under this Lease has been paid.",
  },
  {
    id: "acceptable-payment-methods",
    title: "Acceptable Forms of Payment",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Rent and other amounts due under this Lease must be paid by one of the following methods: [list accepted payment methods here, e.g. check or money order, electronic payment service, online payment portal]. Landlord may change the accepted payment methods on reasonable written notice to Tenant.",
  },
  {
    id: "tenant-maintenance",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant will keep and maintain the property in a clean, safe, and sanitary condition; regularly dispose of garbage and waste in a clean and safe manner; use all appliances, fixtures, and equipment in a safe and reasonable manner consistent with their intended purpose; not obstruct access to doors and windows; and maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear.",
  },
  {
    id: "no-sublet-assign",
    title: "No Subletting or Assignment",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written consent of Landlord, in Landlord's sole discretion. Tenant will not rent the property, or any portion of the property, through any short-term rental program such as Airbnb, VRBO, or similar service, and doing so will be cause for termination of this Lease by Landlord. Any attempted sublease or assignment without such consent will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  {
    id: "no-alterations",
    title: "No Alterations",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "Tenant will not perform any alterations or improvements to the property, including adding, changing, or removing appliances, fixtures, shelving, wallpaper, or paint, without the prior written consent of Landlord. If Landlord approves an alteration, Tenant understands it will remain part of the property at the end of the Term unless Landlord requires its removal.",
  },
  {
    id: "joint-liability",
    title: "Joint & Several Liability",
    group: "Tenant Responsibilities",
    state: null,
    bodyText:
      "If more than one individual signs this Lease as Tenant, all such individuals are jointly and severally liable for the performance of all agreements, covenants, and obligations of Tenant under this Lease. Rent is due in full regardless of how Tenant chooses to divide payment among themselves.",
  },

  // Landlord Responsibilities
  {
    id: "services-utilities-provided",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    state: null,
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Tenant waives all liability of Landlord for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control.",
  },
  {
    id: "utilities-paid-by-landlord",
    title: "Utilities Paid by Landlord",
    group: "Landlord Responsibilities",
    state: null,
    bodyText:
      "Landlord will arrange and pay for the following utilities and services to the property, which are included in Monthly Rent unless this Lease states otherwise: [list utilities Landlord provides here, e.g. water, sewer, and trash removal].",
  },
  {
    id: "appliances-included",
    title: "Appliances & Equipment Included",
    group: "Landlord Responsibilities",
    state: null,
    bodyText:
      "The property includes the following appliances and equipment as of the Start Date, which Landlord will maintain as described in this Lease's Maintenance & Repairs Section: {{appliance_list}}.",
  },
  {
    id: "landlord-maintenance",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    state: null,
    bodyText:
      "Subject to Tenant's own maintenance obligations under this Lease, Landlord will maintain the property, including its structural elements, roof, and systems, in good order and repair, and will be responsible for repairing the appliances, fixtures, and equipment located at the property, except where repair is necessary due to improper use by Tenant or a guest of Tenant. Tenant will notify Landlord promptly in writing of any condition requiring repair or maintenance, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },

  // Access & Entry
  {
    id: "landlords-access",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    state: null,
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' notice, or the notice period required by applicable law if longer, prior to entry.",
  },

  // Default & Termination
  {
    id: "possession-delay",
    title: "Possession Delay",
    group: "Default & Termination",
    state: null,
    bodyText:
      "If Landlord is unable to deliver possession of the property to Tenant by the Start Date, through no fault of Landlord, this Lease will remain in full force, but Tenant will not be obligated to pay Monthly Rent for the period Tenant is unable to take possession. If Landlord has not delivered possession within 30 days after the Start Date, Tenant may terminate this Lease by written notice to Landlord, in which case all amounts paid to Landlord by Tenant will be returned and both parties will be released from further obligation under this Lease.",
  },
  {
    id: "default-by-tenant",
    title: "Default by Tenant",
    group: "Default & Termination",
    state: null,
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. Landlord may also recover from Tenant Landlord's court costs and reasonable attorneys' fees and expenses incurred in enforcing this Lease against Tenant.",
  },
  {
    id: "surrender-end-of-term",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    state: null,
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates may, to the extent permitted by applicable law, be treated as abandoned and disposed of at Tenant's cost.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    group: "Default & Termination",
    state: null,
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, or due to the property becoming uninhabitable through no fault of Tenant.",
  },
  {
    id: "holdover",
    title: "Holdover Tenancy",
    group: "Default & Termination",
    state: null,
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession, and will be entitled to recover from Tenant double the Monthly Rent, prorated on a daily basis, for each day Tenant remains in possession after the end of the Term (or the maximum amount allowed under applicable law, if less). Alternatively, Landlord may accept Tenant's continued payment of Rent, in which case this Lease will be deemed to continue on a month-to-month basis on the same terms and conditions, terminable by either party upon written notice as required by applicable law.",
  },

  // Notices & General
  {
    id: "notices",
    title: "Notices",
    group: "Notices & General",
    state: null,
    bodyText:
      "Any notice of termination, notice of default, or other notice required to be given in writing under this Lease or applicable law will be delivered to the addresses specified in this Lease, or to any updated address either party provides in writing to the other.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    group: "Notices & General",
    state: null,
    bodyText:
      "This Lease will be governed by the laws of the State of {{state}}, and any additional applicable laws of the city or county in which the property is located.",
  },
  {
    id: "severability",
    title: "Severability",
    group: "Notices & General",
    state: null,
    bodyText:
      "If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.",
  },
  {
    id: "tenants-property-insurance",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    state: null,
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property, and Landlord is not liable for any such loss or damage. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    group: "Notices & General",
    state: null,
    bodyText:
      "This Lease, along with any attached addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties. This Lease is binding on and inures to the benefit of the permitted heirs, legal representatives, and assigns of the parties.",
  },
  {
    id: "addendum-precedence",
    title: "Addendum Precedence",
    group: "Notices & General",
    state: null,
    bodyText:
      "Tenant acknowledges that the legal disclosures and addenda attached to this Lease are part of this legal agreement. The terms of this Lease will control in the event of any conflict between the terms of an Addendum and the terms of this Lease.",
  },
  {
    id: "electronic-signatures",
    title: "Electronic Signatures",
    group: "Notices & General",
    state: null,
    bodyText:
      "All individuals indicated in the Basic Terms as comprising Tenant will sign this Lease and related attached Addenda where indicated. Each of Landlord and Tenant consents to the other party's execution of this Lease by electronic signature. Delivery of this Lease containing the electronic signature of a party or otherwise by facsimile through electronic means or as a digital copy will have the same full force and effect as a manually executed original version.",
  },

  // Pets
  {
    id: "pet-policy",
    title: "Pets",
    group: "Pets",
    state: null,
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet, without liability to Tenant, if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  {
    id: "pet-insurance-requirement",
    title: "Pet Insurance Requirement",
    group: "Pets",
    state: null,
    bodyText:
      "If Tenant keeps an approved pet at the property, Tenant will maintain renter's insurance that includes coverage for pet-related liability, and will name Landlord as an interested party on the policy upon Landlord's request.",
  },

  // Parking & Storage
  {
    id: "parking",
    title: "Parking",
    group: "Parking & Storage",
    state: null,
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents.",
  },
  {
    id: "assigned-parking-space",
    title: "Assigned Parking Space(s)",
    group: "Parking & Storage",
    state: null,
    bodyText:
      "Tenant is assigned the following parking space(s) for Tenant's exclusive use during the Term: [identify assigned space number(s)/location here]. Landlord may reassign a different space of comparable convenience on reasonable notice to Tenant.",
  },
  {
    id: "parking-vehicle-rules",
    title: "Parking & Vehicle Requirements",
    group: "Parking & Storage",
    state: null,
    bodyText:
      "Only operable, currently registered passenger vehicles may be parked at the property; commercial vehicles, recreational vehicles, trailers, and oversized vehicles are not permitted without Landlord's prior written consent. Landlord may require Tenant to provide vehicle registration information and may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant. Landlord may have a vehicle towed, at the vehicle owner's expense, if it is illegally parked, abandoned, inoperable, or has expired registration. Vehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.",
  },
  {
    id: "storage-space",
    title: "Storage Space",
    group: "Parking & Storage",
    state: null,
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space, and Landlord is not liable for damage to or theft of items stored there.",
  },

  // Rules & Regulations
  {
    id: "keys",
    title: "Keys",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or requires a replacement, Landlord may re-key the applicable locks and charge the cost to Tenant. Tenant may not duplicate keys without Landlord's consent.",
  },
  {
    id: "guest-policy",
    title: "Guest Policy",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "Guests are welcome for reasonable, non-continuous stays. A guest who stays beyond the period specified by Landlord within a given time frame will be considered an unauthorized occupant and subject to Landlord's prior written consent under this Lease's occupancy terms.",
  },
  {
    id: "guest-policy-colorado",
    title: "Guest Policy — Colorado",
    group: "Rules & Regulations",
    state: "CO",
    bodyText:
      "Tenant will not permit a guest to stay at the property for more than 14 consecutive days, or more than 14 total days within any rolling 6-month period, without Landlord's prior written consent to add that person to this Lease as an occupant or Tenant.",
  },
  {
    id: "common-area-use",
    title: "Use of Property & Common Areas",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep a waterbed or other water-filled furniture at the property, or any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor, without Landlord's prior written consent. Tenant will not burn wax candles at the property. Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent.",
  },
  {
    id: "fire-safety-grilling",
    title: "Fire Safety & Grilling",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "Tenant will not cook or use a barbecue, grill, or other open-flame device on a porch, balcony, or within 15 feet of any building, and will not keep or use any flammable chemical or other material at the property that increases the risk of fire, except in quantities and manner consistent with normal household use.",
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "Unless Landlord provides landscaping service, Tenant is responsible for reasonable upkeep of the property's landscaping, including lawn mowing and leaf raking. If Landlord has set an irrigation schedule, Tenant will not modify it, and will promptly inform Landlord of any irrigation or landscaping issue, such as a leak or watering deficiency.",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.",
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    group: "Rules & Regulations",
    state: null,
    bodyText:
      "Tenant will allow Landlord to perform periodic inspections of the property during the Term, and at move-out, upon reasonable notice consistent with this Lease's Access & Entry terms.",
  },

  // Disclosures
  {
    id: "lead-based-paint",
    title: "Lead-Based Paint Disclosure",
    group: "Disclosures",
    state: null,
    bodyText:
      "Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards if not managed properly, and is especially harmful to young children and pregnant women. If the property was built before 1978, Landlord must disclose any known lead-based paint or lead-based paint hazards, and Tenant must receive a copy of the federally approved pamphlet, Protect Your Family from Lead in Your Home. By signing this Lease, Tenant acknowledges receipt of any required disclosures and the pamphlet.",
  },
  {
    id: "hoa-compliance",
    title: "Homeowner / Condominium Association Compliance",
    group: "Disclosures",
    state: null,
    bodyText:
      "If the property is located within a homeowner or condominium association, Tenant will comply with the association's rules and regulations applicable to the property. Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
