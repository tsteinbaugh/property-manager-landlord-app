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
// already modeled in this app (smoking policy, per-utility responsibility,
// specific guest-day limits) is left as plain generic text for the landlord
// to edit per lease. Generic, non-jurisdiction-specific language — a
// starting point, not legal advice.
const CLAUSE_TEMPLATES = [
  // Rent & Payment
  {
    id: "rent-payment",
    title: "Rent Payment",
    group: "Rent & Payment",
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand, deduction, or setoff. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fee",
    title: "Late Fee",
    group: "Rent & Payment",
    bodyText:
      "If Tenant fails to pay Monthly Rent or any other Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "returned-payments",
    title: "Returned Checks / Dishonored Payments",
    group: "Rent & Payment",
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by a cashier's check, certified check, or money order, and may charge Tenant any fee associated with the failed payment. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent be made by cashier's check, certified check, or money order.",
  },

  // Security Deposit
  {
    id: "security-deposit-use",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    bodyText:
      "Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit to remedy a Tenant default under this Lease, including past due Rent, to repair damage to the property caused by Tenant or Tenant's guests beyond ordinary wear and tear, and to pay cleaning costs required to return the property to the condition it was in at the start of the Term. The Security Deposit will not relieve Tenant of any obligation to pay Rent due under this Lease prior to its termination.",
  },
  {
    id: "security-deposit-return",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    bodyText:
      "The Security Deposit, less any lawful deductions, will be returned to Tenant within the time period required by applicable law after Tenant vacates the property upon expiration or earlier termination of this Lease. Any deductions will be described in an itemized statement provided with the returned portion of the deposit. Tenant will provide Landlord a forwarding address to which the Security Deposit and itemized statement should be sent.",
  },

  // Tenant Responsibilities
  {
    id: "residential-use-only",
    title: "Residential Use Only",
    group: "Tenant Responsibilities",
    bodyText:
      "Tenant will use and occupy the property for residential purposes only and will not use or permit the use of the property for any non-residential, illegal, or otherwise inappropriate purpose, including any commercial purpose.",
  },
  {
    id: "permitted-occupants",
    title: "Permitted Occupants",
    group: "Tenant Responsibilities",
    bodyText:
      "The property will be occupied only by {{tenant_names}} and any Occupants identified in this Lease, subject to applicable law. Tenant will notify Landlord promptly if any additional occupant takes up residence at the property.",
  },
  {
    id: "no-disturbance",
    title: "No Disturbance or Nuisance",
    group: "Tenant Responsibilities",
    bodyText:
      "Tenant will not, and will not permit any occupant or guest to: make any unreasonably loud or otherwise unreasonable use of the property; allow any condition on the property that poses a threat of injury to persons or property; or otherwise interfere with the rights, comfort, safety, or enjoyment of neighboring properties or other tenants.",
  },
  {
    id: "utilities-responsibility",
    title: "Utilities",
    group: "Tenant Responsibilities",
    bodyText:
      "Except for any utility Landlord has agreed in writing to provide, Tenant is responsible for arranging and paying for all utilities and services to the property, including electricity, gas, water, sewer, trash, telephone, cable, and internet, as applicable. Tenant will not cause any utility to be interrupted during the Term.",
  },
  {
    id: "tenant-maintenance",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    bodyText:
      "Tenant will keep and maintain the property in a clean, safe, and sanitary condition; regularly dispose of garbage and waste in a clean and safe manner; use all appliances, fixtures, and equipment in a safe and reasonable manner consistent with their intended purpose; not obstruct access to doors and windows; and maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear.",
  },
  {
    id: "no-sublet-assign",
    title: "No Subletting or Assignment",
    group: "Tenant Responsibilities",
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written consent of Landlord, in Landlord's sole discretion. Any attempted sublease or assignment without such consent will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  {
    id: "no-alterations",
    title: "No Alterations",
    group: "Tenant Responsibilities",
    bodyText:
      "Tenant will not perform any alterations or improvements to the property, including adding, changing, or removing appliances, fixtures, shelving, wallpaper, or paint, without the prior written consent of Landlord. If Landlord approves an alteration, Tenant understands it will remain part of the property at the end of the Term unless Landlord requires its removal.",
  },
  {
    id: "joint-liability",
    title: "Joint & Several Liability",
    group: "Tenant Responsibilities",
    bodyText:
      "If more than one individual signs this Lease as Tenant, all such individuals are jointly and severally liable for the performance of all agreements, covenants, and obligations of Tenant under this Lease. Rent is due in full regardless of how Tenant chooses to divide payment among themselves.",
  },

  // Landlord Responsibilities
  {
    id: "services-utilities-provided",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Tenant waives all liability of Landlord for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control.",
  },
  {
    id: "landlord-maintenance",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    bodyText:
      "Subject to Tenant's own maintenance obligations under this Lease, Landlord will maintain the property, including its structural elements, roof, and systems, in good order and repair, and will be responsible for repairing the appliances, fixtures, and equipment located at the property, except where repair is necessary due to improper use by Tenant or a guest of Tenant. Tenant will notify Landlord promptly in writing of any condition requiring repair or maintenance, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },

  // Access & Entry
  {
    id: "landlords-access",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' notice, or the notice period required by applicable law if longer, prior to entry.",
  },

  // Default & Termination
  {
    id: "default-by-tenant",
    title: "Default by Tenant",
    group: "Default & Termination",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit.",
  },
  {
    id: "surrender-end-of-term",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates may, to the extent permitted by applicable law, be treated as abandoned and disposed of at Tenant's cost.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    group: "Default & Termination",
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, or due to the property becoming uninhabitable through no fault of Tenant.",
  },
  {
    id: "holdover",
    title: "Holdover Tenancy",
    group: "Default & Termination",
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession, or may accept Tenant's continued payment of Rent, in which case this Lease will be deemed to continue on a month-to-month basis on the same terms and conditions, terminable by either party upon written notice as required by applicable law.",
  },

  // Notices & General
  {
    id: "notices",
    title: "Notices",
    group: "Notices & General",
    bodyText:
      "Any notice of termination, notice of default, or other notice required to be given in writing under this Lease or applicable law will be delivered to the addresses specified in this Lease, or to any updated address either party provides in writing to the other.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    group: "Notices & General",
    bodyText:
      "This Lease will be governed by the laws of the State of {{state}}, and any additional applicable laws of the city or county in which the property is located. If any provision of this Lease is held invalid or unenforceable, the remaining provisions will remain in full force and effect.",
  },
  {
    id: "tenants-property-insurance",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property, and Landlord is not liable for any such loss or damage. Tenant is encouraged to obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term.",
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    group: "Notices & General",
    bodyText:
      "This Lease, along with any attached addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties. This Lease is binding on and inures to the benefit of the permitted heirs, legal representatives, and assigns of the parties.",
  },

  // Pets
  {
    id: "pet-policy",
    title: "Pets",
    group: "Pets",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern.",
  },

  // Parking
  {
    id: "parking",
    title: "Parking",
    group: "Parking",
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents.",
  },

  // Rules & Regulations
  {
    id: "keys",
    title: "Keys",
    group: "Rules & Regulations",
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or requires a replacement, Landlord may re-key the applicable locks and charge the cost to Tenant. Tenant may not duplicate keys without Landlord's consent.",
  },
  {
    id: "guest-policy",
    title: "Guest Policy",
    group: "Rules & Regulations",
    bodyText:
      "Guests are welcome for reasonable, non-continuous stays. A guest who stays beyond the period specified by Landlord within a given time frame will be considered an unauthorized occupant and subject to Landlord's prior written consent under this Lease's occupancy terms.",
  },
  {
    id: "common-area-use",
    title: "Use of Property & Common Areas",
    group: "Rules & Regulations",
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent.",
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation",
    group: "Rules & Regulations",
    bodyText:
      "Unless Landlord provides landscaping service, Tenant is responsible for reasonable upkeep of the property's landscaping, including lawn mowing and leaf raking. If Landlord has set an irrigation schedule, Tenant will not modify it, and will promptly inform Landlord of any irrigation or landscaping issue, such as a leak or watering deficiency.",
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    group: "Rules & Regulations",
    bodyText:
      "Tenant will allow Landlord to perform periodic inspections of the property during the Term, and at move-out, upon reasonable notice consistent with this Lease's Access & Entry terms.",
  },

  // Disclosures
  {
    id: "lead-based-paint",
    title: "Lead-Based Paint Disclosure",
    group: "Disclosures",
    bodyText:
      "Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards if not managed properly, and is especially harmful to young children and pregnant women. If the property was built before 1978, Landlord must disclose any known lead-based paint or lead-based paint hazards, and Tenant must receive a copy of the federally approved pamphlet, Protect Your Family from Lead in Your Home. By signing this Lease, Tenant acknowledges receipt of any required disclosures and the pamphlet.",
  },
  {
    id: "hoa-compliance",
    title: "Homeowner / Condominium Association Compliance",
    group: "Disclosures",
    bodyText:
      "If the property is located within a homeowner or condominium association, Tenant will comply with the association's rules and regulations applicable to the property. Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
