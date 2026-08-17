// Static starter clauses for the Lease Builder's template library. Generic,
// non-jurisdiction-specific language — a starting point the landlord edits
// to match their own lease and state, not legal advice (same "information,
// not advice" spirit as the AI roadmap's legal-notice-drafter rule, just
// applied to fixed starter text instead of AI-generated text). Not DB rows:
// a fixed reference list has no need for per-user or global template
// modeling — "importing" one just creates a normal Clause the landlord owns
// and can edit freely.
//
// The Early Termination clause exists because of Taylor's own lesson: a past
// lease stated the term but had no explicit early-termination penalty, and a
// tenant abandoned it mid-term and stopped paying rent as a result.
const CLAUSE_TEMPLATES = [
  {
    id: "rent-payment",
    title: "Rent Payment",
    sectionNumber: "1",
    category: "Rent",
    isEarlyTermination: false,
    bodyText:
      "Tenant shall pay Landlord monthly rent in the amount and on the due date specified in this Lease, without demand, deduction, or setoff. Rent shall be paid by the method(s) designated by Landlord. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fees",
    title: "Late Fees",
    sectionNumber: "2",
    category: "Rent",
    isEarlyTermination: false,
    bodyText:
      "If rent is not received within the grace period specified in this Lease, Tenant shall pay a late fee in the amount specified in this Lease. Acceptance of a late fee does not waive Landlord's right to pursue any other remedy available under this Lease or applicable law.",
  },
  {
    id: "security-deposit",
    title: "Security Deposit",
    sectionNumber: "3",
    category: "Security Deposit",
    isEarlyTermination: false,
    bodyText:
      "Tenant shall pay Landlord a security deposit in the amount specified in this Lease prior to occupancy. The deposit secures Tenant's performance under this Lease and may be applied toward unpaid rent, damage beyond normal wear and tear, or other amounts owed under this Lease. Landlord shall return the deposit, less any lawful deductions, within the time period required by applicable state law, together with an itemized statement of any deductions.",
  },
  {
    id: "pets",
    title: "Pets",
    sectionNumber: "4",
    category: "Pets",
    isEarlyTermination: false,
    bodyText:
      "No pet shall be kept on the premises without Landlord's prior written consent. If pets are permitted, Tenant shall pay any pet rent or pet deposit specified in this Lease and shall be responsible for all damage, waste removal, and disturbance caused by the pet. Landlord may revoke consent for a specific pet if it becomes a nuisance or safety concern.",
  },
  {
    id: "occupancy",
    title: "Occupancy Limits",
    sectionNumber: "5",
    category: "Occupancy",
    isEarlyTermination: false,
    bodyText:
      "The premises shall be occupied only by Tenant and the occupants disclosed to Landlord in writing. No other person may occupy the premises for more than a reasonable number of consecutive or cumulative days per year without Landlord's prior written consent.",
  },
  {
    id: "maintenance-repairs",
    title: "Maintenance & Repairs",
    sectionNumber: "6",
    category: "Maintenance",
    isEarlyTermination: false,
    bodyText:
      "Tenant shall promptly notify Landlord of any needed repairs or conditions affecting habitability. Tenant shall maintain the premises in a clean and sanitary condition and shall be responsible for damage caused by Tenant's negligence or misuse. Landlord shall maintain the premises in habitable condition and make repairs required by applicable law within a reasonable time after notice.",
  },
  {
    id: "utilities",
    title: "Utilities",
    sectionNumber: "7",
    category: "Utilities",
    isEarlyTermination: false,
    bodyText:
      "Tenant is responsible for establishing and paying for all utilities and services not expressly provided by Landlord under this Lease, including but not limited to electricity, gas, water, sewer, trash, and internet/cable, as applicable.",
  },
  {
    id: "renewal-rent-increase",
    title: "Renewal & Rent Increases",
    sectionNumber: "8",
    category: "Renewal",
    isEarlyTermination: false,
    bodyText:
      "This Lease may be renewed by mutual written agreement of the parties. Any rent increase upon renewal shall not exceed the cap, if any, specified in this Lease. Absent a signed renewal or new lease, and where permitted by applicable law, tenancy may continue on a month-to-month basis under the same terms.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    sectionNumber: "9",
    category: "Termination",
    isEarlyTermination: true,
    bodyText:
      "Tenant may not terminate this Lease before the end of the term except as expressly permitted by this Lease or applicable law. If Tenant vacates or abandons the premises before the end of the term without Landlord's written consent, Tenant remains liable for all rent due through the end of the term, subject to Landlord's duty to mitigate damages under applicable law, and Tenant shall additionally pay an early termination fee in the amount specified in this Lease.",
  },
  {
    id: "default-termination",
    title: "Default & Termination for Cause",
    sectionNumber: "10",
    category: "Termination",
    isEarlyTermination: false,
    bodyText:
      "If Tenant fails to pay rent when due or otherwise breaches a material term of this Lease, Landlord may pursue all remedies available under applicable law, including termination of this Lease and eviction, after providing any notice required by applicable state law.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    sectionNumber: "11",
    category: "General",
    isEarlyTermination: false,
    bodyText:
      "This Lease shall be governed by and construed in accordance with the laws of the state in which the premises are located. If any provision of this Lease is held invalid or unenforceable, the remaining provisions shall continue in full force and effect.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
