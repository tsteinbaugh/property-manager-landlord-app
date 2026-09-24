// Static starter clauses for the Lease Builder's template library. Not DB
// rows -- a fixed reference list has no need for per-user/global template
// modeling; "using" one just snapshots it onto a lease, and "copying" one
// creates a normal, fully editable Clause the landlord owns. Locked by
// construction: there is no edit/delete endpoint that ever touches this
// list, so nothing can silently modify what we ship while it still reads as
// "provided" -- landlords who want changes copy first.
//
// Generated from `lease-clauses.csv` (repo root) -- that CSV, plus the
// per-state decision logs (`lease-clause-decision-log-CO.md`,
// `-WY.md`, `-KS.md`, `-NE.md`, `-MN.md`, `-ND.md`, `-SD.md`, `-OH.md`, plus
// Ohio's own extend manifest, `-OH-extend-manifest.md`), the consolidated
// `lease-clause-decision-log-named-topic-checklist.md`, and
// `lease-clause-decision-log-architecture-review.md` (methodology, schema
// decisions, and standing process rules -- read this one first) are the
// actual source of truth. This file is their compiled output -- do not hand-
// edit a clause here without updating the CSV first, and do not treat a
// state's log narrative as authoritative if it disagrees with the CSV (see
// the architecture-review log's Addendum L §L.3: "a log entry is not a
// library change" -- the CSV is the fact).
//
// **2026-09-24 refresh (California, state #9):** regenerated wholesale from
// the CA pass's CSV -- 191 -> 242 shipped LEASE_CLAUSE rows (90 tagged CA:
// 57 CA-specific plus 33 shared). The CA pass also edited other states'
// rows, deliberately and with Taylor's sign-off (CA log §§5.35-5.40): 12
// byte-identical per-state copies merged into 6 multi-state rows (e.g.
// `parking-ks`/`-oh`/`-ca` -> `parking-ks-oh-ca`; no state lost a clause);
// `rent-payment`, `addendum-precedence`, and `pet-insurance-requirement`
// got uniform, protective text edits now shipping in every tagged state;
// state-name suffixes stripped from titles library-wide. Two new template
// fields: `choiceGroup`/`choiceGroupDefault` mark mutually exclusive
// alternatives (see `clauseChoiceGroups.js`) -- a lease may carry at most
// one member of a group. The CSV's research-only "Compliance & Prohibited
// Terms" group (5 CA rows) is remapped to "Notices & General" at
// generation time, per the closed-taxonomy rule for `CLAUSE_GROUPS`.
//
// **2026-09-19 correction:** `application-of-payments` (shared across all 8
// states) asserted "Tenant's statutory right to cure nonpayment of base
// rent" as if it exists everywhere -- it doesn't (Ohio has none; a CO
// citation note had already separately flagged South Dakota lacks one too,
// never fixed). Softened to "any statutory right Tenant may have," the same
// self-limiting pattern as the `holdover` "double rent" fix below -- a
// uniform correction, safe for every tagged state, needing no per-state
// override or re-verification.
//
// **2026-09-19 addition:** `assistance-animal-accommodation-oh` added,
// closing a real gap the `lease-clause-citations-OH.csv` pass surfaced --
// Ohio's own research (canvass items #61/#62/#74/#127/#128/#129) had
// already confirmed OAC 4112-5-07(C)'s no-extra-charge duty for an
// assistance animal, but no clause row was ever built from it, unlike CO/
// WY/NE/MN/ND/SD, which each have their own override. Without it, Ohio's
// `pet-policy`/`pet-insurance-requirement` clauses had no carve-out
// available for an assistance animal -- same "asserted covered in the
// research, never actually built" failure shape already seen once each in
// Minnesota's and North Dakota's domestic-violence-clause gaps.
//
// **2026-09-18 refresh:** the CSV grew from a 7-state, 179-clause pass to an
// 8-state pass (CO, WY, KS, NE, MN, ND, SD, OH) with 190 shipped
// LEASE_CLAUSE rows -- regenerated wholesale from the updated CSV, not
// hand-patched. Ohio's own pass closed out the `security-deposit-return`
// latent-trap finding flagged below: Ohio wrote `security-deposit-return-oh`
// (supersedes: "security-deposit-return") exactly like every state before
// it, and separately, Ohio's research independently re-derived and then
// verified by direct execution of the actual filter code (not just
// re-reading it) that `supersedes` really is load-bearing suppression
// logic, not documentary metadata -- see `lease-clause-decision-log-OH.md`'s
// closing sections for the full trace. Taylor's resulting decision (also
// implemented this session): the filter's blank-`states` handling was
// flipped so blank only matches "All states" browsing, not a specific-state
// filter (`ClauseLibraryPage.jsx`, `LeaseBuilderSection.jsx`,
// `leases.routes.js`'s `appliesToThisLease`) -- aligning the code with the
// policy meaning declared back in Aug 2026 ("not yet verified for any
// state"), permanently closing the gap for any future state, not just Ohio.
//
// **2026-09-13 refresh:** the CSV grew from a CO+WY-only, 85-clause set to a
// 7-state pass (CO, WY, KS, NE, MN, ND, SD) with 180 shipped LEASE_CLAUSE
// rows -- regenerated wholesale from the updated CSV, not hand-patched.
// Real corrections landed in this pass that any earlier copy of this file
// did not have, most notably: the generic `holdover` clause's hardcoded
// "double rent" figure was removed (it had no statutory basis in ANY tagged
// state -- see the architecture-review log's Addendum K §K.3, the strongest
// single finding in the project to date) in favor of self-limiting "the
// maximum amount permitted by applicable law" language; `security-deposit-
// return` is deliberately blank on `states` (every state that reached
// it wrote its own override, so the parent is a template with nothing left
// to display -- see Addendum M §M.11 for the original "latent risk" framing,
// now closed per the 2026-09-18 refresh above).
//
// Per the architecture-review log: NOT ALL EIGHT STATES CARRY THE SAME
// CONFIDENCE LEVEL. CO, WY, KS, and NE have each been re-audited once at
// higher research rigor after their original pass, and every single re-audit
// found real errors that had shipped as VERIFIED. MN, ND, and SD are still
// on their original single-pass verification only; Ohio's state-#8 pass ran
// its own two-round canvass (an initial pass plus a second full re-canvass
// against all 133 named-topic-checklist rows) before shipping. Treat
// "VERIFIED" here as "verified to the process's current standard," not as a
// guarantee no further correction is coming -- see the architecture-review
// log's Addendum C/H for the full reasoning ("four tests, four failures...
// the reasonable prior is now that an un-re-audited state contains at least
// one shipped VERIFIED error").
//
// `states` semantics (unchanged from the CO pass): blank/`[]` means "not
// yet verified against any state" for a normal clause, EXCEPT for a small
// set of `REQUIRED` parents (like `security-deposit-return` above) that are
// blank because every real tag has been superseded away, not because no one
// has looked. A state-tagged clause was independently verified for every
// state it carries -- two or more states agreeing a clause is generic is
// still not treated as proof of universality (architecture-review log §K.2/
// the original WY-pass caution) -- "universal" stays an earned status
// requiring all 50 states, not a shortcut.
//
// A state-specific clause that fully replaces a universal one's content can
// set `supersedes: "<universal-clause-id>"`; when the library or attach
// picker is filtered to a specific state, the superseded universal clause is
// hidden in favor of its replacement. Confirmed 2026-09-18 by directly
// executing the filter logic against this file's real shipped data (not
// just re-reading the source): `supersedes` is genuinely load-bearing, not
// documentary -- it is the ONLY thing preventing a blank-`states` parent
// (which wildcard-matches every state under "All states" browsing is
// skipped, but under a specific-state filter still passes the state-match
// check) from showing alongside its state-specific override. It's
// redundant, not inert, in the majority of override/parent pairs where the
// parent's own `states` already excludes the overriding state.
//
// Per-clause research metadata (rule type, content-type bucket, verification
// status, effective/last-checked dates, and full research notes) lives in
// the sibling file `clauseResearchMetadata.js`, keyed by clause id -- kept
// deliberately separate from this array so it never flows through
// `GET /api/clause-templates`, which spreads these objects directly into
// the API response.
//
// IMPORTANT: this is a well-researched snapshot as of Sep 2026, not a
// substitute for an attorney or a fresh check of current law before relying
// on it in a real lease. Several underlying rules change on their own
// legislative cycles (see each state's decision log for specifics already
// known to be time-sensitive) -- the architecture-review log recommends an
// annual re-verification cadence, not yet formally scheduled for any state.

const CLAUSE_TEMPLATES = [
  // Rent & Payment
  {
    id: "rent-payment",
    title: "Rent Payment",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand, deduction, or setoff, except as permitted by applicable law. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fee",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["CO", "WY", "MN", "ND", "SD", "OH"],
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "returned-payments",
    title: "Returned Checks / Dishonored Payments",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by a cashier's check, certified check, or money order, and may charge Tenant a fee associated with the failed payment, not to exceed the maximum amount permitted by applicable law. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent be made by cashier's check, certified check, or money order.",
  },
  {
    id: "due-at-signing",
    title: "Amounts Due Upfront",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant will pay Landlord the following amounts, at the time specified for each: [specify what is due and when here, e.g. first month's Monthly Rent ({{monthly_rent}}) due at signing; Security Deposit ({{security_deposit}}) due at signing; Pet Deposit ({{pet_deposit}}) due at signing; last month's Monthly Rent due on the Start Date]. These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
  },
  {
    id: "application-of-payments",
    title: "Application of Payments",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "All payments received shall be applied first to outstanding fees, charges, costs, utilities, or other amounts due under this Lease, and then to base rent, unless otherwise required by applicable law. Nothing in this provision limits any statutory right Tenant may have to cure nonpayment of base rent.",
  },
  {
    id: "late-fee-limit-co",
    title: "Late Fee Limit",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "Any late fee assessed under this Lease will not exceed the greater of $50.00 or 5% of the amount of Rent past due, and no late fee will be assessed until at least 7 days after Rent is due, as required by Colorado law. Landlord will provide Tenant written notice of any late fee within 180 days after the date the related Rent payment was due.",
  },
  {
    id: "nsf-fee-limit-co",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "If any payment under this Lease is dishonored or returned unpaid, Tenant will be responsible for a reasonable returned-payment charge, consistent with Colorado's dishonored-instrument statute (C.R.S. 13-21-109), plus any actual bank charges Landlord incurs. This charge is not Rent, is not subject to any late fee applicable to Rent, and will not be characterized as Rent for purposes of any remedy available for nonpayment of Rent.",
  },
  {
    id: "late-fee-safe-harbor-ca",
    title: "Late Fee Guidance",
    group: "Rent & Payment",
    states: ["CA"],
    supersedes: "late-fee",
    bodyText:
      "Landlord and Tenant agree that if Tenant fails to pay rent when due, the actual damage to Landlord from that late payment would, from the nature of the case, be impracticable or extremely difficult to fix. Landlord and Tenant therefore agree that {{late_fee}} shall be presumed to be the amount of damage sustained by Landlord from a late payment of rent. This amount is a presumed measure of Landlord's actual damages and is not a penalty.",
  },
  {
    id: "nsf-fee-limit-ca",
    title: "NSF Fee Limit",
    group: "Rent & Payment",
    states: ["CA"],
    supersedes: "returned-payments",
    bodyText:
      "If Tenant pays rent or any other amount due under this Lease by check, draft or order for payment and it is not honored for lack of funds, because Tenant has no account with the drawee, or because Tenant stops payment, Tenant shall be liable to Landlord for the amount of the payment and a service charge of {{nsf_fee}}, not to exceed $25 for the first such instrument and $35 for each subsequent one. No service charge is owed if Tenant stopped payment to resolve a good faith dispute with Landlord, if Tenant provides written confirmation from Tenant's financial institution that the instrument was returned due to an error by that institution, or if Tenant provides written confirmation that the account had insufficient funds because of a delay in a regularly scheduled direct deposit of a social security or government benefit assistance payment.",
  },
  // Security Deposit
  {
    id: "security-deposit-use",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    states: ["CO", "NE", "MN", "ND", "SD", "WY", "OH"],
    bodyText:
      "Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit to remedy a Tenant default under this Lease, including past due Rent, and to repair damage to the property caused by Tenant or Tenant's guests beyond ordinary wear and tear. Landlord will not apply the Security Deposit to normal wear and tear or to any damage or defective condition that preexisted the tenancy. Landlord may apply the Security Deposit to cleaning costs only if the property is substantially less clean at the end of the Term than it was at the start of the Term. The Security Deposit will not relieve Tenant of any obligation to pay Rent due under this Lease prior to its termination.",
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
    id: "security-deposit-interest-oh",
    title: "Security Deposit Interest",
    group: "Security Deposit",
    states: ["OH"],
    bodyText:
      "If the Security Deposit exceeds fifty dollars or one month's Rent, whichever is greater, the portion of the Security Deposit in excess of that amount will bear interest at the rate of five per cent per annum for any period during which Tenant remains in possession of the property for six months or more. Landlord will compute and pay that interest to Tenant annually. No interest is owed on the portion of the Security Deposit at or below fifty dollars or one month's Rent, whichever is greater.",
  },
  // Tenant Responsibilities
  {
    id: "residential-use-only",
    title: "Residential Use Only",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant will use and occupy the property for residential purposes only and will not use or permit the use of the property for any non-residential, illegal, or otherwise inappropriate purpose, including any commercial purpose.",
  },
  {
    id: "existing-condition",
    title: "Existing Condition of Property",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant has examined the property and, by signing this Lease, acknowledges that the property is in good order and repair and satisfactory condition (Existing Condition), except as otherwise noted in this Lease. Landlord will deliver possession of the property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.",
  },
  {
    id: "permitted-occupants",
    title: "Permitted Occupants",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "The property will be occupied only by {{tenant_names}}, together with {{occupant_names}}. Tenant will notify Landlord promptly if any additional occupant takes up residence at the property.",
  },
  {
    id: "no-disturbance",
    title: "No Disturbance or Nuisance",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant will not, and will not permit any occupant or guest to: make any unreasonably loud or otherwise unreasonable use of the property; allow any condition on the property that poses a threat of injury to persons or property; or otherwise interfere with the rights, comfort, safety, or enjoyment of neighboring properties or other tenants.",
  },
  {
    id: "smoking-policy",
    title: "Smoking Policy",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted anywhere on the property, including inside the dwelling, on porches, balconies, or in any common area. Tenant will be responsible for any cost Landlord incurs to remediate odor, staining, or damage caused by smoking in violation of this Section, and a violation may be treated as a default under this Lease.",
  },
  {
    id: "utilities-responsibility",
    title: "Utilities Paid by Tenant",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Except for any utility Landlord agrees in this Lease to provide, Tenant is responsible for arranging and paying directly to the service provider for all other utilities and services to the property, including electricity, gas, telephone, cable, and internet, as applicable.",
  },
  {
    id: "utility-service-continuity",
    title: "Utility Service Continuity",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant will not cause water, gas, electricity, sewer, or trash service to the property to be interrupted during the Term. This requirement does not apply to telephone, cable, or internet service.",
  },
  {
    id: "utility-payment-evidence",
    title: "Evidence of Utility Payment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Upon Landlord's reasonable request, Tenant will provide Landlord with reasonable evidence that any utility specified as Tenant's responsibility under this Lease has been paid.",
  },
  {
    id: "acceptable-payment-methods",
    title: "Acceptable Forms of Payment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Rent and other amounts due under this Lease must be paid by one of the following methods: [list accepted payment methods here, e.g. check or money order, electronic payment service, online payment portal]. Landlord may change the accepted payment methods on reasonable written notice to Tenant.",
  },
  {
    id: "tenant-maintenance",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "MN", "SD", "OH"],
    bodyText:
      "Tenant will keep and maintain the property in a clean, safe, and sanitary condition, and will regularly dispose of garbage and waste in a clean and safe manner. Tenant will use all appliances, fixtures, and equipment in a safe and reasonable manner consistent with their intended purpose, will not obstruct access to doors and windows, and will maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear.",
  },
  {
    id: "no-sublet-assign",
    title: "No Subletting or Assignment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written consent of Landlord, in Landlord's sole discretion. Tenant will not rent the property, or any portion of the property, through any short-term rental program such as Airbnb, VRBO, or similar service, and doing so will be cause for termination of this Lease by Landlord. Any attempted sublease or assignment without such consent will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  {
    id: "no-alterations",
    title: "No Alterations",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant will not perform any alterations or improvements to the property, including adding, changing, or removing appliances, fixtures, shelving, wallpaper, or paint, without the prior written consent of Landlord. If Landlord approves an alteration, Tenant understands it will remain part of the property at the end of the Term unless Landlord requires its removal.",
  },
  {
    id: "joint-liability",
    title: "Joint & Several Liability",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "If more than one individual signs this Lease as Tenant, all such individuals are jointly and severally liable for the performance of all agreements, covenants, and obligations of Tenant under this Lease. Rent is due in full regardless of how Tenant chooses to divide payment among themselves.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: ["CO", "WY", "NE", "ND", "SD"],
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Landlord is not liable for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control.",
  },
  {
    id: "utilities-paid-by-landlord",
    title: "Utilities Paid by Landlord",
    group: "Landlord Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Landlord will arrange and pay for the following utilities and services to the property, which are included in Monthly Rent unless this Lease states otherwise: [list utilities Landlord provides here, e.g. water, sewer, and trash removal].",
  },
  {
    id: "appliances-included",
    title: "Appliances & Equipment Included",
    group: "Landlord Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "The property includes the following appliances and equipment as of the Start Date, which Landlord will maintain as described in this Lease's Maintenance & Repairs Section: {{appliance_list}}.",
  },
  {
    id: "landlord-maintenance",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "Subject to Tenant's own maintenance obligations under this Lease, Landlord will maintain the property, including its structural elements, roof, and systems, in good order and repair, and will be responsible for repairing the appliances, fixtures, and equipment located at the property, except where repair is necessary due to improper use by Tenant or a guest of Tenant. Tenant will notify Landlord promptly in writing of any condition requiring repair or maintenance, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },
  {
    id: "habitability-timeline-co",
    title: "Repair Timeline",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "For a condition that materially interferes with Tenant's life, health, or safety, Landlord will commence remedial action within 24 hours of having notice, as required by Colorado law. For a condition rendering the property uninhabitable or otherwise requiring repair, Landlord will commence remedial action within 72 hours. Landlord will contact Tenant within 24 hours of having notice of the condition to describe Landlord's intended remedial action and an estimate of when it will commence and be completed, and will inform Tenant of Landlord's obligation to provide a comparable dwelling unit or hotel room at no cost to Tenant upon Tenant's request. Except where the condition imminently threatens life, health, or safety or poses an active and ongoing threat of substantial damage to the property, Landlord will give Tenant at least 24 hours' written notice before entering to commence or maintain remedial action.",
  },
  // Access & Entry
  {
    id: "landlords-access",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["WY", "KS", "NE", "OH"],
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
    states: ["CO", "WY", "MN", "ND", "SD", "OH"],
    bodyText:
      "If Landlord is unable to deliver possession of the property to Tenant by the Start Date, through no fault of Landlord, this Lease will remain in full force, but Tenant will not be obligated to pay Monthly Rent for the period Tenant is unable to take possession. If Landlord has not delivered possession within 30 days after the Start Date, Tenant may terminate this Lease by written notice to Landlord, in which case all amounts paid to Landlord by Tenant will be returned and both parties will be released from further obligation under this Lease.",
  },
  {
    id: "default-by-tenant",
    title: "Default by Tenant",
    group: "Default & Termination",
    states: ["CO", "WY", "MN", "ND", "CA"],
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord. Tenant will also be in default if Tenant fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. To the extent permitted under applicable law, the prevailing party may recover from the other party court costs and reasonable attorneys' fees and expenses incurred in connection with any legal proceedings related to this Lease.",
  },
  {
    id: "surrender-end-of-term",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    states: ["CO", "WY", "SD", "OH", "CA"],
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates may, to the extent permitted by applicable law, be treated as abandoned and disposed of at Tenant's cost.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["CO", "WY", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law. This includes a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, due to the property becoming uninhabitable through no fault of Tenant, or — except as prohibited by law in the case of a Tenant's death — any other termination right or limitation provided by applicable law.",
  },
  {
    id: "holdover",
    title: "Holdover Tenancy",
    group: "Default & Termination",
    states: ["CO", "WY", "KS", "NE", "MN"],
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession. Landlord will also be entitled to recover from Tenant holdover damages in the maximum amount permitted by applicable law for each day Tenant remains in possession after the end of the Term. Alternatively, Landlord may accept Tenant's continued payment of Rent, in which case this Lease will be deemed to continue on a month-to-month basis on the same terms and conditions, terminable by either party upon written notice as required by applicable law.",
  },
  {
    id: "month-to-month-notice-ca",
    title: "Month-to-Month Termination Notice",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "Either party may terminate a month-to-month tenancy by written notice served as provided in Code of Civil Procedure section 1162 or by certified or registered mail. Tenant must give notice at least as long as the period of the tenancy (30 days for a month-to-month tenancy), regardless of how long Tenant has resided at the property. Landlord must give at least 60 days' written notice, except that 30 days' notice is sufficient if Tenant has resided at the property for less than one year, or if the conditions in Civil Code section 1946.1(d) are met (unit separately alienable, sold to a natural-person bona fide purchaser in escrow, notice given within 120 days of escrow, no prior notice given, and purchaser intends to reside there at least one year). Landlord's notice must include the statutory abandoned-property statement required by Civil Code section 1946.1(h). Where this property is subject to Civil Code section 1946.2, notice alone is not sufficient: after the qualifying occupancy period Landlord must also state a just cause for termination.",
  },
  // Notices & General
  {
    id: "notices",
    title: "Notices",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Any notice of termination, notice of default, or other notice required to be given in writing under this Lease or applicable law will be delivered to the addresses specified in this Lease, or to any updated address either party provides in writing to the other. Where applicable law requires a particular method, form, timing, or content for a notice, that requirement will control over this Section, and nothing in this Lease designates an alternative method of delivery for any notice governed by law.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "This Lease will be governed by the laws of the State of {{state}}, and any additional applicable laws of the city or county in which the property is located.",
  },
  {
    id: "severability",
    title: "Severability",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "If any provision of this Agreement shall be held or made invalid by a court decision, statute or rule, or shall be otherwise rendered invalid, the remainder of this Agreement shall not be affected thereby.",
  },
  {
    id: "tenants-property-insurance",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: ["CO", "WY", "ND", "SD"],
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property, and Landlord is not liable for any such loss or damage. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "This Lease, along with any attached addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties. This Lease is binding on and inures to the benefit of the permitted heirs, legal representatives, and assigns of the parties.",
  },
  {
    id: "addendum-precedence",
    title: "Addendum Precedence",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant acknowledges that the legal disclosures and addenda attached to this Lease are part of this legal agreement. The terms of this Lease will control in the event of any conflict between the terms of an Addendum and the terms of this Lease, except that any disclosure, notice, or addendum required by law will control over any conflicting term of this Lease.",
  },
  {
    id: "electronic-signatures",
    title: "Electronic Signatures",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "All individuals indicated in the Basic Terms as comprising Tenant will sign this Lease and related attached Addenda where indicated. Each of Landlord and Tenant consents to the other party's execution of this Lease by electronic signature. Delivery of this Lease containing the electronic signature of a party or otherwise by facsimile through electronic means or as a digital copy will have the same full force and effect as a manually executed original version.",
  },
  // Pets
  {
    id: "pet-policy",
    title: "Pets",
    group: "Pets",
    states: ["CO", "WY", "ND", "OH"],
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet, without liability to Tenant, if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  {
    id: "pet-insurance-requirement",
    title: "Pet Insurance Requirement",
    group: "Pets",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "If Tenant keeps an approved pet at the property, Tenant will maintain renter's insurance that includes coverage for pet-related liability, and will name Landlord as an interested party on the policy upon Landlord's request. This requirement does not apply to an assistance animal, and Tenant will not be required to carry liability insurance in connection with an assistance animal.",
  },
  // Parking & Storage
  {
    id: "parking",
    title: "Parking",
    group: "Parking & Storage",
    states: ["CO", "WY", "ND", "SD"],
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents.",
  },
  {
    id: "assigned-parking-space",
    title: "Assigned Parking Space(s)",
    group: "Parking & Storage",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant is assigned the following parking space(s) for Tenant's exclusive use during the Term: [identify assigned space number(s)/location here]. Landlord may reassign a different space of comparable convenience on reasonable notice to Tenant.",
  },
  {
    id: "parking-vehicle-rules",
    title: "Parking & Vehicle Requirements",
    group: "Parking & Storage",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Only operable, currently registered passenger vehicles may be parked at the property; commercial vehicles, recreational vehicles, trailers, and oversized vehicles are not permitted without Landlord's prior written consent. Landlord may require Tenant to provide vehicle registration information and may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant. Landlord may have a vehicle towed, at the vehicle owner's expense, if it is illegally parked, abandoned, inoperable, or has expired registration. Vehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.",
  },
  {
    id: "storage-space",
    title: "Storage Space",
    group: "Parking & Storage",
    states: ["CO", "WY", "ND", "SD"],
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space, and Landlord is not liable for damage to or theft of items stored there.",
  },
  // Rules & Regulations
  {
    id: "keys",
    title: "Keys",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or requires a replacement, Landlord may re-key the applicable locks and charge the cost to Tenant. Tenant may not duplicate keys without Landlord's consent.",
  },
  {
    id: "guest-policy",
    title: "Guest Policy",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Guests are welcome for reasonable, non-continuous stays. A guest who stays beyond the period specified by Landlord within a given time frame will be considered an unauthorized occupant and subject to Landlord's prior written consent under this Lease's occupancy terms.",
  },
  {
    id: "guest-policy-day-limit",
    title: "Guest Policy (14-Day Limit)",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant will not permit a guest to stay at the property for more than 14 consecutive days, or more than 14 total days within any rolling 6-month period, without Landlord's prior written consent to add that person to this Lease as an occupant or Tenant.",
  },
  {
    id: "common-area-use",
    title: "Use of Property & Common Areas",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep a waterbed or other water-filled furniture at the property, or any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor, without Landlord's prior written consent. Tenant will not burn wax candles at the property. Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent.",
  },
  {
    id: "fire-safety-grilling",
    title: "Fire Safety & Grilling",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Tenant will not cook or use a barbecue, grill, or other open-flame device on a porch, balcony, or within 15 feet of any building, and will not keep or use any flammable chemical or other material at the property that increases the risk of fire, except in quantities and manner consistent with normal household use.",
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Unless Landlord provides landscaping service, Tenant is responsible for reasonable upkeep of the property's landscaping, including lawn mowing and leaf raking. If Landlord has set an irrigation schedule, Tenant will not modify it, and will promptly inform Landlord of any irrigation or landscaping issue, such as a leak or watering deficiency.",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.",
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH"],
    bodyText:
      "Tenant will allow Landlord to perform periodic inspections of the property during the Term, and at move-out, upon reasonable notice consistent with this Lease's Access & Entry terms.",
  },
  // Disclosures
  {
    id: "lead-based-paint",
    title: "Lead-Based Paint Disclosure",
    group: "Disclosures",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "LEAD WARNING STATEMENT. Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards if not managed properly. Lead exposure is especially harmful to young children and pregnant women. Before renting pre-1978 housing, lessors must disclose the presence of known lead-based paint and/or lead-based paint hazards in the dwelling. Lessees must also receive a federally approved pamphlet on lead poisoning prevention. Landlord's disclosure: [state either that Landlord has no knowledge of lead-based paint or lead-based paint hazards in the dwelling, or describe all known lead-based paint and lead-based paint hazards]. Records and reports: [state either that Landlord has no reports or records pertaining to lead-based paint or lead-based paint hazards in the dwelling, or list all available records and reports and confirm they have been provided to Tenant]. Tenant acknowledges receipt of the information above and of the federally approved pamphlet Protect Your Family from Lead in Your Home. Landlord and Tenant each certify, to the best of their knowledge, that the information they have provided is true and accurate.",
  },
  {
    id: "hoa-compliance",
    title: "Homeowner / Condominium Association Compliance",
    group: "Disclosures",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA"],
    bodyText:
      "If the property is located within a homeowner or condominium association, Tenant will comply with the association's rules and regulations applicable to the property. Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility.",
  },
  {
    id: "bed-bug-disclosure-co",
    title: "Bed Bug Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "Upon request, Colorado law entitles Tenant to disclosure of the property's bed bug history within the past 8 months and the most recent date, if any, the property was inspected for bed bugs. Landlord discloses the following: [describe any known infestation and treatment, and the most recent inspection date, or state 'none known']. Tenant acknowledges receipt of this disclosure.",
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
    id: "bed-bug-disclosure-ca",
    title: "Bed Bug Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Information about Bed Bugs. Bed bug Appearance: Bed bugs have six legs. Adult bed bugs have flat bodies about 1/4 of an inch in length. Their color can vary from red and brown to copper colored. Young bed bugs are very small. Their bodies are about 1/16 of an inch in length. They have almost no color. When a bed bug feeds, its body swells, may lengthen, and becomes bright red, sometimes making it appear to be a different insect. Bed bugs do not fly. They can either crawl or be carried from place to place on objects, people, or animals. Bed bugs can be hard to find and identify because they are tiny and try to stay hidden. Life Cycle and Reproduction: An average bed bug lives for about 10 months. Female bed bugs lay one to five eggs per day. Bed bugs grow to full adulthood in about 21 days. Bed bugs can survive for months without feeding. Bed bug Bites: Because bed bugs usually feed at night, most people are bitten in their sleep and do not realize they were bitten. A person's reaction to insect bites is an immune response and so varies from person to person. Sometimes the red welts caused by the bites will not be noticed until many days after a person was bitten, if at all. Common signs and symptoms of a possible bed bug infestation: • Small red to reddish brown fecal spots on mattresses, box springs, bed frames, mattresses, linens, upholstery, or walls. • Molted bed bug skins, white, sticky eggs, or empty eggshells. • Very heavily infested areas may have a characteristically sweet odor. • Red, itchy bite marks, especially on the legs, arms, and other body parts exposed while sleeping. However, some people do not show bed bug lesions on their bodies even though bed bugs may have fed on them. For more information, see the Internet Web sites of the United States Environmental Protection Agency and the National Pest Management Association. Tenant shall report any suspected bed bug infestation to Landlord promptly and in writing, using the following procedure: {{bed_bug_reporting_procedure}}.",
  },
  {
    id: "meth-disclosure-ca",
    title: "Methamphetamine or Fentanyl Contamination Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Methamphetamine or Fentanyl Contamination Disclosure. [If a local health officer has issued a remediation order affecting this property and no notice requiring no further action has since been received, state that fact here and attach a copy of the order to this Lease; otherwise state 'Landlord has received no remediation order affecting this property under Health and Safety Code section 25400.22 or 25400.25.'] Tenant acknowledges in writing receipt of this notice and of a copy of any pending order. Tenant signature: ____________________ Date: __________",
  },
  {
    id: "flood-disclosure-ca",
    title: "Flood Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Flood Hazard Disclosure. [If Landlord has actual knowledge that the property is located in a special flood hazard area or an area of potential flooding, state that fact here; otherwise state 'Landlord has no actual knowledge that the property is located in a special flood hazard area or an area of potential flooding.'] Tenant may obtain information about hazards, including flood hazards, that may affect the property from the Internet Web site of the Office of Emergency Services, including the MyHazards tool at {{myhazards_url}}. Landlord's insurance does not cover the loss of Tenant's personal possessions, and it is recommended that Tenant consider purchasing renter's insurance and flood insurance to insure Tenant's possessions from loss due to fire, flood, or other risk of loss. Landlord is not required to provide additional information concerning the flood hazards to the property, and the information provided pursuant to Government Code section 8589.45 is deemed adequate to inform Tenant.",
  },
  {
    id: "sex-offender-registry-notice-ca",
    title: "Sex Offender Registry Notice",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Notice: Pursuant to Section 290.46 of the Penal Code, information about specified registered sex offenders is made available to the public via an Internet Web site maintained by the Department of Justice at www.meganslaw.ca.gov. Depending on an offender's criminal history, this information will include either the address at which the offender resides or the community of residence and ZIP Code in which the offender resides.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-co",
    title: "Security Deposit Return Timeline",
    group: "Security Deposit",
    states: ["CO"],
    supersedes: "security-deposit-return",
    bodyText:
      "The Security Deposit will be returned to Tenant, together with a written statement listing the exact reasons for retaining any portion, within 30 days after the later of the termination of this Lease or Tenant's surrender of the property, or within 60 days after that date if this Lease so provides. Landlord will not retain any portion of the Security Deposit for normal wear and tear or for any damage or defective condition that existed before the start of the Term.",
  },
  // Default & Termination
  {
    id: "month-to-month-notice-co-exempt",
    title: "Termination Notice (Property Exempt from For-Cause Requirements)",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "Either Landlord or Tenant may terminate a periodic tenancy under this Lease at the end of a tenancy period, or elect not to renew a fixed-term tenancy at the end of the term, by serving written notice that expires at the end of that period or term. The required notice depends on how long the tenancy has run: at least 91 days for a tenancy of one year or longer; at least 28 days for a tenancy of six months or longer but less than a year; at least 21 days for a tenancy of one month or longer but less than six months; at least 3 days for a tenancy of one week or longer but less than one month, or a tenancy at will; and at least 1 day for a tenancy of less than one week. The notice must describe the property and the particular date the tenancy will terminate, and must be signed by the party giving it or their agent or attorney. Because [describe the applicable exemption here - see C.R.S. section 38-12-1302(1)(a), (1)(b), (1)(d), (1)(e), or (1)(f)], this tenancy is not subject to Colorado's for-cause eviction requirements under C.R.S. section 38-12-1301 et seq.",
  },
  {
    id: "month-to-month-notice-co-covered",
    title: "Termination Notice (Subject to For-Cause Requirements)",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "Tenant may terminate a periodic tenancy under this Lease at the end of a tenancy period, or elect not to renew a fixed-term tenancy at the end of the term, by serving written notice that expires at the end of that period or term. The required notice depends on how long the tenancy has run: at least 91 days for a tenancy of one year or longer; at least 28 days for a tenancy of six months or longer but less than a year; at least 21 days for a tenancy of one month or longer but less than six months; at least 3 days for a tenancy of one week or longer but less than one month, or a tenancy at will; and at least 1 day for a tenancy of less than one week. Landlord's ability to end this tenancy is separately restricted: once Tenant has occupied the property for 12 months or more, Landlord may terminate or decline to renew only for cause, or for a qualifying no-fault reason, as defined under C.R.S. section 38-12-1301 et seq., and will provide the notice and the statement of legal and factual basis that law requires.",
  },
  {
    id: "dv-stalking-termination-co",
    title: "Early Termination - Victim of Unlawful Sexual Behavior, Stalking, or Domestic Violence",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "A Tenant who is a victim of unlawful sexual behavior, stalking, domestic violence, or domestic abuse may terminate this Lease and vacate the property without further obligation, upon providing Landlord written notice and the documentation required under Colorado law (a police report written within the preceding 60 days, a valid protective or restraining order, or a qualifying advocate's written statement). Notwithstanding this Lease's Early Termination Section, Landlord's compensation for actual damages resulting from a termination under this Section is limited to no more than one month's Rent ({{monthly_rent}}), and Landlord must provide Tenant a written statement of those damages within 30 days of the termination date.",
  },
  // Parking & Storage
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
  // Rent & Payment
  {
    id: "subsidy-late-fee-co",
    title: "Late Fee - Tenant Receiving a Housing Subsidy",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "If Tenant's Rent is paid in whole or in part by a housing subsidy program, Landlord will not impose a late fee against Tenant for the late payment or nonpayment of any portion of Rent that the subsidy provider, rather than Tenant, is responsible for paying, as required by Colorado law.",
  },
  // Landlord Responsibilities
  {
    id: "subsidy-habitability-proration-co",
    title: "Habitability Proration - Tenant Receiving a Housing Subsidy",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "If Tenant's Rent is paid in whole or in part by a housing subsidy program and the property becomes partially uninhabitable, Rent will be proportionally reduced based on the portion of the property affected, calculated on the total Rent for the property including both the tenant-paid and subsidy-paid portions. If Rent has already been paid for the affected period, Tenant will receive a prorated refund, as required by Colorado law.",
  },
  // Disclosures
  {
    id: "radon-disclosure-co",
    title: "Radon Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "Residential real property may present exposure to dangerous levels of indoor radon gas, which may place occupants at risk of developing radon-induced lung cancer. The Colorado Department of Public Health and Environment strongly recommends that all tenants have an indoor radon test performed before leasing residential real property, and recommends having radon levels mitigated if elevated concentrations are found. Elevated radon concentrations can be reduced by a radon mitigation professional. Landlord discloses the following regarding radon testing, concentrations, or mitigation systems at the property, if known: [describe any known radon testing results, concentrations, or mitigation systems, or state 'none known']. Tenant acknowledges receipt of this disclosure and the Colorado Department of Public Health and Environment's radon brochure, attached to this Lease, as required by Colorado law.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["KS"],
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
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, but will not require details about the nature or severity of Tenant's disability beyond what is necessary to verify the need for the accommodation, as required by Colorado law. If the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation. Tenant is hereby warned, as required for enforcement under Colorado law, that intentionally misrepresenting an animal as a service animal or assistance animal to obtain a right or privilege under this Section is unlawful under C.R.S. sections 18-13-107.3 and 18-13-107.7, punishable by escalating fines.",
  },
  // Landlord Responsibilities
  {
    id: "habitability-notice-co",
    title: "Notice of Habitability Rights",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "Every tenant is entitled to safe and habitable housing under Colorado's warranty of habitability, as described in this Lease's Maintenance & Repairs Section. Colorado law prohibits Landlord from retaliating against Tenant in any manner for reporting an unsafe or uninhabitable condition, exercising any right under this Lease, or participating in a tenant organization. To report a condition that may affect the habitability of the property, Tenant should provide written notice to Landlord at: [insert landlord's designated WRITTEN habitability-notice address, e.g. email address or mailing address - do not designate a phone number or any verbal method].",
  },
  {
    id: "utility-allowance-cap-co",
    title: "Utility Allowance with Tenant-Paid Overage",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "Landlord's obligation to pay for [specify utility, e.g. water and sewer] under this Lease's Utilities Paid by Landlord Section is limited to [insert monthly utility allowance amount] per month. If the actual utility cost for a given month exceeds this amount, Tenant will reimburse Landlord for the excess within [insert number of days, e.g. 15] days of receiving a copy of the utility provider's bill showing the actual charges for that month. This reimbursement is a separate obligation from Rent: it is not subject to any late fee applicable to Rent under this Lease, will not be characterized as Rent for purposes of any remedy available for nonpayment of Rent, and Landlord's remedies for Tenant's failure to pay it are limited to those otherwise available under this Lease for breach of an obligation other than Rent.",
  },
  // Default & Termination
  {
    id: "dv-safe-homes-wy",
    title: "Domestic Abuse / Sexual Violence — Rent Liability After Vacating",
    group: "Default & Termination",
    states: ["WY"],
    bodyText:
      "Wyoming's Safe Homes Act provides Tenant a defense against a claim for unpaid rent under certain circumstances. If Tenant or a member of Tenant's household vacates the property because of a credible imminent threat of domestic abuse or sexual violence at the property, or because Tenant or a household member was a victim of domestic abuse or sexual violence occurring at the property within the preceding 60 days, Tenant will not be liable for rent accruing after the date Tenant vacates. If hospitalization, or seeking shelter or counseling related to the abuse or violence, prevented Tenant from giving notice within that 60-day window, Tenant may still give notice as soon as practicable afterward. To use this protection, Tenant must provide Landlord written notice at least 7 days before vacating, stating the reason for vacating and, where applicable, the date of the incident along with supporting medical, court, or police evidence. This Section does not excuse rent owed for any period before Tenant vacated and gave the required notice, and does not limit Landlord's other lawful remedies for nonpayment of rent accruing before that date.",
  },
  // Landlord Responsibilities
  {
    id: "habitability-baseline-wy",
    title: "Habitability Baseline",
    group: "Landlord Responsibilities",
    states: ["WY"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Landlord will maintain the property in a safe and sanitary condition fit for human habitation, including operational electrical, heating, and plumbing systems, with hot and cold running water, unless otherwise agreed in writing by both parties. Tenant will cooperate in maintaining the property consistent with this Section.",
  },
  // Tenant Responsibilities
  {
    id: "renter-duties-wy",
    title: "Tenant's Duties",
    group: "Tenant Responsibilities",
    states: ["WY"],
    bodyText:
      "Tenant will keep the property clean and safe and not unreasonably burden any common area; dispose of all garbage and waste in a clean and safe manner; keep all plumbing fixtures as sanitary as their condition permits; and use all electrical, plumbing, sanitary, heating, and other facilities and appliances in a reasonable manner. Tenant will also occupy the property only in the manner for which it was designed, not increase the number of occupants above what this Lease specifies without Landlord's prior written permission, remain current on all payments required under this Lease, and comply with all lawful requirements of this Lease. Before vacating, Tenant will remove all property and garbage belonging to Tenant or Tenant's guests and clean the property to the condition it was in at the start of this Lease.",
  },
  {
    id: "prohibited-acts-renter-wy",
    title: "Prohibited Acts by Tenant",
    group: "Tenant Responsibilities",
    states: ["WY"],
    bodyText:
      "Tenant will not intentionally or negligently destroy, deface, damage, or impair any part of the property, or knowingly permit any other person to do so; interfere with another person's peaceful enjoyment of the property; or unreasonably deny access to, refuse entry to, or withhold consent to enter the property to Landlord or Landlord's agent for the purpose of making repairs, inspecting the property, or showing it for rent or sale.",
  },
  // Security Deposit
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
      "Within 30 days after termination of this Lease, or within 15 days after receiving Tenant's forwarding address, whichever is later, Landlord will deliver or mail to Tenant the balance of Tenant's deposit and any prepaid rent, along with a written itemization of any deductions and the reasons for them. If the property is damaged, this period is extended by an additional 30 days. Tenant will notify Landlord in writing, within 30 days after termination, of the address where payment and notice should be sent.",
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
  // Default & Termination
  {
    id: "abandoned-property-wy",
    title: "Property Abandoned After Termination",
    group: "Default & Termination",
    states: ["WY"],
    bodyText:
      "Upon regaining lawful possession of the property after termination of this Lease, Landlord may immediately dispose of any trash or property Landlord reasonably believes to be hazardous, perishable, or valueless and abandoned. Any property remaining in the unit after termination is presumed valueless and abandoned. For any other property of apparent value, Landlord will provide Tenant written notice describing the property and stating that it will be disposed of seven (7) days after the notice is served unless Tenant takes possession of the property or notifies Landlord in writing of an intent to do so within that period. If Tenant responds in writing within seven (7) days stating an intent to take possession, Landlord will hold the property for an additional seven (7) days after receiving that response; if Tenant has not taken possession by the end of that additional period, the property is conclusively deemed abandoned. Landlord may charge Tenant the actual or reasonable cost of removing and storing the property, and Tenant must pay these costs before removing the property. Landlord is not responsible for any loss to Tenant resulting from storage.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-wy",
    title: "Assistance Animal Accommodation",
    group: "Pets",
    states: ["WY"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law; if the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation. Tenant is hereby advised that knowingly and intentionally misrepresenting an animal as a service animal or assistance animal to obtain a right or privilege under this Section is a misdemeanor under Wyoming law, punishable by a fine of up to $750 (Wyo. Stat. § 35-13-203(b)).",
  },
  // Security Deposit
  {
    id: "security-deposit-return-ks",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["KS"],
    supersedes: "security-deposit-return",
    bodyText:
      "If Landlord proposes to retain any portion of the Security Deposit for damages or other legally allowable charges other than rent, Landlord will return the balance of the Security Deposit to Tenant within 14 days after determining the amount to be retained, but in no event later than 30 days after termination of this Lease, delivery of possession, and Tenant's demand for return of the deposit. If Tenant does not demand return of the deposit within 30 days after termination of this Lease, Landlord will mail the balance due to Tenant's last known address. Any amount retained will be itemized in a written notice delivered to Tenant.",
  },
  {
    id: "security-deposit-use-ks",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    states: ["KS"],
    supersedes: "security-deposit-use",
    bodyText:
      "Landlord may apply the Security Deposit to accrued and unpaid Rent and to damages Landlord suffers due to Tenant's noncompliance with Tenant's duties under this Lease or Kansas law, as itemized in a written notice delivered to Tenant. Except as Landlord may otherwise agree in writing, Tenant will not apply or deduct any portion of the Security Deposit from the last month's Rent, and will not use the Security Deposit in place of paying Rent at any time. If Tenant violates this restriction, the Security Deposit is forfeited, and Landlord may still recover the Rent due as though the Security Deposit had not been applied.",
  },
  // Notices & General
  {
    id: "landlord-disclosure-ks",
    title: "Landlord and Manager Disclosure",
    group: "Notices & General",
    states: ["KS"],
    bodyText:
      "Landlord discloses to Tenant the following, as required by Kansas law: the name and address of the person authorized to manage the property is [manager name and address], and the name and address of the owner, or person authorized to act for the owner for service of process and for receiving notices and demands, is [owner/agent name and address]. Landlord will keep this information current throughout the Term.",
  },
  // Landlord Responsibilities
  {
    id: "habitability-baseline-ks",
    title: "Landlord's Habitability Duties",
    group: "Landlord Responsibilities",
    states: ["KS"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Except when prevented by an act of God, failure of public utility services, or other conditions beyond Landlord's control, Landlord will: comply with applicable building and housing codes materially affecting health and safety; exercise reasonable care in maintaining common areas; and keep all electrical, plumbing, sanitary, heating, ventilating, and air-conditioning systems supplied by Landlord in good and safe working order. Landlord will also provide and maintain appropriate trash and waste receptacles for common use and arrange for their removal, except where a government entity provides this, and will supply running water and reasonable hot water and heat at all times, except where the building isn't required by law to be so equipped or the unit's heat or hot water is generated by a tenant-controlled installation on a direct utility connection. Landlord will not interfere with or refuse Tenant access to a municipally franchised cable or communication service.",
  },
  // Tenant Responsibilities
  {
    id: "dv-housing-protections-ks",
    title: "Housing Protections for Domestic Violence, Sexual Assault, Human Trafficking, and Stalking Survivors",
    group: "Tenant Responsibilities",
    states: ["KS"],
    bodyText:
      "Kansas law protects a tenant or applicant who has been, is, or is in imminent danger of becoming a victim of domestic violence, sexual assault, human trafficking, or stalking within the preceding 12 months. Landlord will not deny tenancy to, evict, or find a lease violation against a tenant or applicant based on that status, provided the person otherwise qualifies for the tenancy. A tenant who requests early lease termination under this protection is not liable for rent after vacating the property, though Landlord may charge a reasonable early-termination fee of up to one month's rent. Landlord may request supporting documentation as allowed by law. If a tenant's lease terminates under this provision, the lease continues for any remaining co-tenants. Neither party may waive a tenant's rights under this provision.",
  },
  {
    id: "tenant-duties-ks",
    title: "Tenant's Duties",
    group: "Tenant Responsibilities",
    states: ["KS"],
    supersedes: "tenant-maintenance",
    bodyText:
      "Tenant will: comply with all obligations building and housing codes impose primarily on tenants that materially affect health and safety; keep the portion of the property Tenant occupies and uses as clean and safe as its condition permits; remove ashes, rubbish, garbage, and other waste from the dwelling unit in a clean and safe manner; keep all plumbing fixtures Tenant uses as clean as their condition permits; use all electrical, plumbing, sanitary, heating, ventilating, air-conditioning, and other facilities and appliances in a reasonable manner; and maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear. Tenant is also responsible for any destruction, defacement, damage, impairment, or removal of any part of the property caused by Tenant or by any person, animal, or pet on the property with Tenant's express or implied permission or consent. Tenant will not engage in, or allow any such person, animal, or pet to engage in, conduct that disturbs the quiet and peaceful enjoyment of the property by other tenants.",
  },
  // Default & Termination
  {
    id: "default-by-tenant-ks-ne",
    title: "Tenant Default",
    group: "Default & Termination",
    states: ["KS", "NE", "OH"],
    supersedes: "default-by-tenant",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law.",
  },
  // Tenant Responsibilities
  {
    id: "extended-absence-notice-ks",
    title: "Notice of Extended Absence",
    group: "Tenant Responsibilities",
    states: ["KS"],
    bodyText:
      "Tenant will occupy the property only as a dwelling unit unless otherwise agreed. If Tenant anticipates being away from the property for more than 7 consecutive days, Tenant will notify Landlord no later than the first day of the absence. If Tenant willfully fails to give this notice, Landlord may recover actual damages resulting from the failure.",
  },
  // Default & Termination
  {
    id: "abandoned-property-ks",
    title: "Handling of Property Left Behind",
    group: "Default & Termination",
    states: ["KS"],
    bodyText:
      "If Tenant is at least 10 days in default on Rent and has removed a substantial portion of Tenant's belongings from the property, Landlord may presume the property has been abandoned, unless Tenant has notified Landlord otherwise. During any Tenant absence exceeding 30 days, Landlord may enter the property at reasonably necessary times. If Tenant leaves personal property behind after Landlord regains possession, Landlord may take possession of it, store it at Tenant's expense, and sell or dispose of it after 30 days, provided Landlord publishes notice of the sale in a newspaper of general circulation in the county at least 15 days beforehand, and mails a copy of that notice to Tenant's last known address within 7 days after publication. Tenant may redeem the property any time before sale by paying Landlord's reasonable expenses of taking, holding, and preparing it for sale, plus any amount owed for Rent or otherwise.",
  },
  // Rent & Payment
  {
    id: "late-fee-ks",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["KS"],
    supersedes: "late-fee",
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Any acceptance by Landlord of a late or partial payment, or of performance that varies from this Lease, is accepted with reservation of Landlord's rights and remedies under this Lease and applicable law, and does not waive Landlord's right to require timely and full performance in the future or to pursue any remedy for the breach.",
  },
  // Landlord Responsibilities
  {
    id: "move-in-inventory-ks",
    title: "Move-In Inventory",
    group: "Landlord Responsibilities",
    states: ["KS"],
    bodyText:
      "Within 5 days of the Start Date or delivery of possession, whichever is later, Landlord and Tenant will jointly complete a written inventory documenting the condition of the property and any furnishings or appliances provided. Landlord and Tenant will each sign a copy of the inventory, and Landlord will provide Tenant with a copy.",
  },
  // Default & Termination
  {
    id: "possession-delay-ks",
    title: "Delay in Delivering Possession",
    group: "Default & Termination",
    states: ["KS"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord fails to deliver possession of the property to Tenant as required by this Lease, Rent abates until possession is delivered, and Tenant may: (a) upon at least 5 days' written notice to Landlord, terminate this Lease, in which case Landlord will return the full Security Deposit; or (b) demand that Landlord perform this Lease and, if Tenant elects, pursue an action for possession against Landlord or any person wrongfully in possession, and recover damages sustained. If Landlord's failure to deliver possession is willful and not in good faith, Tenant may recover an amount up to 1.5 times the periodic Rent or 1.5 times actual damages, whichever is greater.",
  },
  {
    id: "early-termination-ks",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["KS"],
    supersedes: "early-termination",
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, due to the property becoming uninhabitable through no fault of Tenant, or, except as prohibited by law in the case of a Tenant's death, any other termination right or limitation provided by applicable law.",
  },
  // Notices & General
  {
    id: "identity-change-liability-ks",
    title: "Landlord or Manager Change — Liability Shift",
    group: "Notices & General",
    states: ["KS"],
    bodyText:
      "If Landlord conveys the property in a good-faith sale to a bona fide purchaser, or a manager's management of the property is terminated, Landlord or the outgoing manager is relieved of liability under this Lease and Kansas law for events occurring after Landlord gives Tenant written notice of the conveyance or termination of management — except that Landlord remains liable to Tenant for any portion of the Security Deposit Tenant is entitled to under this Lease.",
  },
  // Default & Termination
  {
    id: "fire-casualty-termination-ks",
    title: "Damage or Destruction by Fire or Casualty",
    group: "Default & Termination",
    states: ["KS"],
    bodyText:
      "If the property is damaged or destroyed by fire or casualty to an extent that substantially impairs its use and habitability, Tenant may: (a) vacate the property immediately and notify Landlord in writing within 5 days of Tenant's intention to terminate this Lease, in which case this Lease terminates as of the date Tenant vacates; or (b) if continued occupancy is lawful, vacate only the unusable part of the property, in which case Tenant's Rent is reduced in proportion to the resulting reduction in the property's fair rental value. If this Lease terminates under this Section, Landlord will return the portion of the Security Deposit Tenant is entitled to, and rent will be accounted for as of the date Tenant vacates.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-ne",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["NE"],
    supersedes: "security-deposit-return",
    bodyText:
      "If Landlord proposes to retain any portion of the Security Deposit, Landlord will deliver or mail to Tenant, within 14 days after the date of termination of this Lease, the balance of the Security Deposit, if any, along with a written itemization of amounts withheld. If Tenant does not provide Landlord a forwarding address or delivery instructions, Landlord will mail the balance due and the written itemization to Tenant's last known address by first-class mail. If that mailing is returned as undeliverable, or if the returned balance remains unclaimed for one year, Landlord will report and remit it to the State Treasurer as unclaimed property, as required by Nebraska law.",
  },
  // Notices & General
  {
    id: "landlord-disclosure-ne",
    title: "Landlord and Manager Disclosure",
    group: "Notices & General",
    states: ["NE"],
    bodyText:
      "Landlord discloses to Tenant the following, as required by Nebraska law: the name and address of the person authorized to manage the property is [manager name and address], and the name and address of the owner, or person authorized to act for the owner for service of process and for receiving notices and demands, is [owner/agent name and address]. Landlord will keep this information current throughout the Term.",
  },
  // Tenant Responsibilities
  {
    id: "dv-lease-release-ne",
    title: "Lease Release for Domestic Violence Victims",
    group: "Tenant Responsibilities",
    states: ["NE"],
    bodyText:
      "A tenant, or a tenant whose household member, is a victim of an act of domestic violence may obtain a release from this Lease by providing Landlord a copy of a qualifying protective order or third-party domestic-violence certification, along with written notice stating the desired release date (at least 14 days, and no more than 30 days, after the notice is given) and identifying any household members to also be released. The releasing tenant remains liable for rent for the month in which the Lease is terminated, but is not liable for rent or damages after the release date, and is not subject to any fee solely because of the release. This release does not extend to any other tenant on the Lease who is not a household member of the releasing tenant.",
  },
  {
    id: "dv-perpetrator-removal-ne",
    title: "Removal of a Domestic Violence Perpetrator Who Is a Co-Tenant",
    group: "Tenant Responsibilities",
    states: ["NE"],
    bodyText:
      "If a tenant or household member is the victim of an act of domestic violence committed by a cotenant or other occupant of the same dwelling unit, the victim may have the perpetrator removed from this Lease, and excluded from the property, by providing Landlord a copy of a qualifying protective order or third-party domestic-violence certification, along with written notice identifying the perpetrator and the requested notice date. Landlord will then proceed against the perpetrator only under Nebraska's expedited removal procedure. Landlord is not liable for actions taken in good faith under this clause.",
  },
  {
    id: "dv-lockchange-ne",
    title: "Lock Change for Domestic Violence Victims",
    group: "Tenant Responsibilities",
    states: ["NE"],
    bodyText:
      "If a tenant or household member is the victim of an act of domestic violence committed by someone who is not a cotenant or occupant of the dwelling unit, the tenant may require Landlord to change the locks to the dwelling unit by providing Landlord a copy of a qualifying protective order or third-party domestic-violence certification, along with a written request. Landlord will change the locks within 24 hours after receiving the request. If Landlord fails to do so, Tenant may change the locks in a workmanlike manner with locks of similar or better quality, must promptly notify Landlord of the change, and must provide Landlord a new key or entry code by a mutually agreed method.",
  },
  {
    id: "extended-absence-notice-ne",
    title: "Notice of Extended Absence",
    group: "Tenant Responsibilities",
    states: ["NE"],
    bodyText:
      "Tenant will occupy the property only as a dwelling unit unless otherwise agreed. If Tenant anticipates being away from the property for more than 7 consecutive days, Tenant will notify Landlord no later than the first day of the absence. If Tenant willfully fails to give this notice, Landlord may recover actual damages resulting from the failure. Total absence from the property without notice to Landlord for one full rental period or 30 days, whichever is less, constitutes abandonment.",
  },
  // Default & Termination
  {
    id: "abandoned-property-ne",
    title: "Handling of Property Left Behind",
    group: "Default & Termination",
    states: ["NE"],
    bodyText:
      "If Tenant leaves personal property on the premises after this Lease terminates or expires and the premises have been vacated, Landlord will give Tenant (and anyone else Landlord reasonably believes may own the property) written notice describing the property, personally delivered or sent by first-class mail to Tenant's last known address. Unless Tenant claims the property and pays Landlord's reasonable storage costs within 7 days after personal delivery of the notice, or 14 days after the notice is mailed, Landlord may dispose of the property as allowed under Nebraska's Disposition of Personal Property Landlord and Tenant Act, including public sale after published notice.",
  },
  // Landlord Responsibilities
  {
    id: "habitability-baseline-ne",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    states: ["NE"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Except when prevented by an act of God, failure of public utility services, or other conditions beyond Landlord's control, Landlord will: substantially comply, after written or actual notice, with applicable minimum housing codes materially affecting health and safety; make all repairs and do whatever is necessary, after written or actual notice, to keep the property in a fit and habitable condition; keep all common areas clean and safe; and maintain all electrical, plumbing, sanitary, heating, ventilating, and air-conditioning systems and appliances supplied by Landlord in good and safe working order. Landlord will also provide and maintain appropriate waste receptacles and arrange for their removal, and will supply running water and reasonable hot water and heat at all times, except where the building isn't required by law to be so equipped or the unit's heat or hot water is generated by a tenant-controlled installation on a direct utility connection.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-duties-ne",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    states: ["NE"],
    supersedes: "tenant-maintenance",
    bodyText:
      "Tenant will: comply with all obligations building and housing codes impose primarily on tenants that materially affect health and safety; keep the portion of the property Tenant occupies and uses as clean and safe as its condition permits, and upon termination of the tenancy leave the property as clean as when the tenancy commenced, except for ordinary wear and tear; dispose of ashes, rubbish, garbage, and other waste in a clean and safe manner; keep all plumbing fixtures Tenant uses as clean as their condition permits; and use all electrical, plumbing, sanitary, heating, ventilating, air-conditioning, and other facilities and appliances in a reasonable manner. Tenant is also responsible for any deliberate or negligent destruction, defacement, damage, or impairment of any part of the property caused by Tenant or by any person Tenant permits on the property. Tenant will not, and will not permit any such person to, disturb the peaceful enjoyment of the property by other tenants.",
  },
  // Default & Termination
  {
    id: "possession-delay-ne",
    title: "Failure to Deliver Possession",
    group: "Default & Termination",
    states: ["NE"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord fails to deliver possession of the property to Tenant as required by this Lease, Rent abates until possession is delivered, and Tenant may: (a) upon at least 5 days' written notice to Landlord, terminate this Lease, in which case Landlord will return all prepaid Rent and the full Security Deposit; or (b) demand that Landlord perform this Lease and, if Tenant elects, pursue an action for possession against Landlord or any person wrongfully in possession, and recover damages sustained. If Landlord's failure to deliver possession is willful and not in good faith, Tenant may recover an amount up to three months' periodic Rent or threefold the actual damages, whichever is greater.",
  },
  {
    id: "early-termination-ne",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["NE"],
    supersedes: "early-termination",
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early in accordance with this Lease's Tenant Default and notice provisions, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law, including a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, due to the property becoming uninhabitable through no fault of Tenant, or any Nebraska domestic-violence housing protection, or, except as prohibited by law in the case of a Tenant's death, any other termination right or limitation provided by applicable law.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-detector-duty-ne",
    title: "Smoke Detectors",
    group: "Landlord Responsibilities",
    states: ["NE"],
    bodyText:
      "Landlord is responsible for supplying, installing, maintaining, and testing the smoke detectors at the property, and will provide Tenant with written instructions for testing the device. Where Tenant occupies the property for one month or more, Tenant will perform the tests recommended by the manufacturer's instructions and will immediately notify Landlord in writing of any deficiency. A worn battery or other replaceable energy unit is not a deficiency: Tenant is responsible for replacing batteries and replaceable energy units during the Term, and Landlord is responsible for ensuring each is in operating condition at the time Tenant takes possession. Landlord will correct any deficiency Tenant reports. Tenant will not disable, obstruct, or tamper with any smoke detector.",
  },
  // Notices & General
  {
    id: "tenants-property-insurance-ne",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: ["NE"],
    supersedes: "tenants-property-insurance",
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property. Landlord is not liable for any such loss or damage, except to the extent caused by Landlord's active and actionable negligence, or Landlord's willful misconduct. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  // Parking & Storage
  {
    id: "parking-ne",
    title: "Parking",
    group: "Parking & Storage",
    states: ["NE"],
    supersedes: "parking",
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents, except to the extent caused by Landlord's active and actionable negligence, or Landlord's willful misconduct.",
  },
  {
    id: "storage-space-ne",
    title: "Storage Space",
    group: "Parking & Storage",
    states: ["NE"],
    supersedes: "storage-space",
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space, and Landlord is not liable for damage to or theft of items stored there, except to the extent caused by Landlord's active and actionable negligence, or Landlord's willful misconduct.",
  },
  // Pets
  {
    id: "pet-policy-ks",
    title: "Pet Policy",
    group: "Pets",
    states: ["KS"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet. Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  {
    id: "pet-policy-ne",
    title: "Pet Policy",
    group: "Pets",
    states: ["NE"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s), except to the extent the claim arises from Landlord's own negligence. Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet, without liability to Tenant except to the extent caused by Landlord's gross negligence or willful misconduct, if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  // Access & Entry
  {
    id: "landlords-access-mn",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["MN"],
    supersedes: "landlords-access",
    bodyText:
      "Landlord may enter the property only for a reasonable business purpose, and will make a good faith effort to give Tenant notice of the intent to enter of not less than 24 hours in advance, unless Tenant permits entry with less notice. Any notice will specify a time or window of entry, and Landlord will enter only between 8:00 a.m. and 8:00 p.m., unless Landlord and Tenant agree to a different time. However, Landlord may enter without prior notice if Landlord reasonably believes immediate entry is necessary to prevent injury to persons or property, to determine Tenant's safety, or to comply with local ordinances regarding unlawful activity on the property. If Landlord enters while Tenant is not present and prior notice was not given, Landlord will leave written disclosure of the entry in a conspicuous place on the property.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-mn",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["MN"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within three weeks after termination of this Lease, and after receiving Tenant's mailing address or delivery instructions, Landlord will return the Security Deposit, together with simple interest as required by Minnesota law, or will provide Tenant a written statement showing the specific reason for withholding the deposit or any portion of it. Landlord may withhold only amounts reasonably necessary to remedy a Tenant default in the payment of rent or other funds due under this Lease, or to restore the property to its condition at the commencement of the tenancy, ordinary wear and tear excepted.",
  },
  // Default & Termination
  {
    id: "termination-death-of-tenant-mn",
    title: "Termination of Lease Upon Death of Tenant",
    group: "Default & Termination",
    states: ["MN"],
    bodyText:
      "If Tenant dies during the term of this Lease (or, if there is more than one Tenant, upon the death of all Tenants), either Landlord or the personal representative of Tenant's estate may terminate this Lease upon at least two months' written notice, effective on the last day of a calendar month, delivered by hand or by first-class prepaid mail to the address of the other party. Termination under this section does not relieve Tenant's estate of liability for rent or other sums owed before or during the notice period, or for amounts necessary to restore the property to its condition at the commencement of the tenancy, ordinary wear and tear excepted.",
  },
  {
    id: "termination-infirmity-mn",
    title: "Termination of Lease Upon Infirmity of Tenant",
    group: "Default & Termination",
    states: ["MN"],
    bodyText:
      "If Tenant (or, if there is more than one Tenant, all Tenants) has been found by a medical professional to need to move into a nursing home, a boarding care home, a supervised living facility, an assisted living facility, or any other facility or accessible unit qualifying under Minnesota law, Tenant or Tenant's authorized representative may terminate this Lease before it expires. This Section does not apply, and Tenant may not terminate under it, where Tenant requires an accessible unit and Landlord can provide an accessible unit in the same complex in which Tenant currently resides that is available within two months of Tenant's request. Tenant must give at least two months' written notice, effective on the last day of a calendar month, delivered by hand or by first-class prepaid mail. The notice must include a copy of the medical professional's written documentation of the need to relocate, along with documentation that Tenant has been accepted as a resident, or has a pending application, at the facility. Termination under this section does not relieve Tenant of liability for rent or other sums owed before or during the notice period, or for amounts necessary to restore the property to its condition at the commencement of the tenancy, ordinary wear and tear excepted.",
  },
  {
    id: "abandoned-property-mn",
    title: "Property Abandoned After Termination",
    group: "Default & Termination",
    states: ["MN"],
    bodyText:
      "If Tenant abandons the property, Landlord may take possession of Tenant's personal property remaining on the property and will store and care for it. Landlord has a claim against Tenant for the reasonable costs and expenses of removing, storing, and caring for the property. Landlord may sell or otherwise dispose of the property 28 days after Landlord receives actual notice of the abandonment, or 28 days after it reasonably appears to Landlord that Tenant has abandoned the property, whichever is later. Before selling the property, Landlord will make reasonable efforts to notify Tenant of the sale at least 14 days in advance, by personal service or by first-class and certified mail to Tenant's last known address, and by posting notice of the sale in a conspicuous place on the property at least two weeks before the sale. Landlord may apply a reasonable amount of the sale proceeds to the removal, storage, and care costs described above, or to any amount properly withheld from the Security Deposit.",
  },
  // Landlord Responsibilities
  {
    id: "utility-apportionment-mn",
    title: "Shared-Metered Utility Billing",
    group: "Landlord Responsibilities",
    states: ["MN"],
    bodyText:
      "If the property is part of a shared-metered residential building, Landlord will remain the bill payer and customer of record for utility service to the building. Landlord will not apportion or bill Tenant for electricity usage; electricity may only be submetered in accordance with applicable law. If Landlord apportions natural gas or water and sewer service to Tenant, Landlord will do so only using the method required by Minnesota law, will bill Tenant no less frequently than Landlord is billed by the utility, and will provide Tenant, upon request, copies of the underlying utility bills being apportioned. Any administrative billing charge will not exceed $8 per billing period, and any late payment charge for utilities billed separately from rent will not exceed $5 per month and will not compound. Landlord will not disconnect or cause the disconnection of Tenant's utility service for nonpayment of utility charges.",
  },
  // Notices & General
  {
    id: "tenants-property-insurance-mn",
    title: "Tenant's Property Insurance",
    group: "Notices & General",
    states: ["MN"],
    supersedes: "tenants-property-insurance",
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property. Except for loss or damage caused by Landlord's own gross negligence or willful misconduct, Landlord is not liable, including for ordinary negligence, for loss or damage to Tenant's personal property. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  // Pets
  {
    id: "pet-policy-mn",
    title: "Pet Policy",
    group: "Pets",
    states: ["MN"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected. Except for loss caused by Landlord's own gross negligence or willful misconduct, Landlord is not liable, including for ordinary negligence, for any resulting loss to Tenant. A service animal or support animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not a pet under this Lease, and Minnesota law prohibits Landlord from requiring any additional fee, charge, or deposit for such an animal. Tenant remains responsible for any damage to the property caused by a service or support animal.",
  },
  // Parking & Storage
  {
    id: "parking-mn",
    title: "Parking",
    group: "Parking & Storage",
    states: ["MN"],
    supersedes: "parking",
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area. Except for loss or damage caused by Landlord's own gross negligence or willful misconduct, Landlord is not liable, including for ordinary negligence, for damage to or theft of a vehicle or its contents.",
  },
  {
    id: "storage-space-mn",
    title: "Storage Space",
    group: "Parking & Storage",
    states: ["MN"],
    supersedes: "storage-space",
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space. Except for loss or damage caused by Landlord's own gross negligence or willful misconduct, Landlord is not liable, including for ordinary negligence, for damage to or theft of items stored there.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided-mn",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: ["MN"],
    supersedes: "services-utilities-provided",
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Except for interruptions or insufficiencies caused by Landlord's own gross negligence or willful misconduct, Tenant waives all liability of Landlord, including for ordinary negligence, for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control. Nothing in this Section waives, limits, or modifies any right or remedy Tenant has under Minnesota Statutes sections 504B.221, 504B.225, or 504B.231, or under any other provision of Minnesota law that may not be waived by a tenant.",
  },
  {
    id: "habitability-baseline-mn",
    title: "Habitability Baseline",
    group: "Landlord Responsibilities",
    states: ["MN"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Landlord will keep the property and all common areas fit for the use intended by the parties and in reasonable repair, including maintaining heat at a minimum of 68 degrees Fahrenheit from October 1 through April 30, and extermination of insects, rodents, vermin, or other pests, except where the disrepair is caused by Tenant's own willful, malicious, or irresponsible conduct or that of a person under Tenant's direction or control. Landlord will keep the property and common areas in compliance with applicable health and safety laws, and will make the property and common areas reasonably energy efficient where doing so is cost-effective under applicable law. Tenant will notify Landlord promptly in writing of any condition requiring repair, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-mn",
    title: "Assistance Animal Accommodation",
    group: "Pets",
    states: ["MN"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for a qualifying assistance animal. If the disability or the disability-related need for the animal is not readily apparent, Landlord may request documentation from a licensed professional confirming the disability and the need for the animal, as permitted under Minnesota law. Tenant remains responsible for any damage to the property caused by the animal beyond ordinary wear and tear. Misrepresenting a disability or an animal's status as a service or support animal may result in denial of Tenant's application or request.",
  },
  // Default & Termination
  {
    id: "possession-delay-mn-new-construction",
    title: "Delayed Occupancy Due to New Construction",
    group: "Default & Termination",
    states: ["MN"],
    bodyText:
      "If the property is new construction, including a new building, rehabilitation, reconstruction, or an addition, and Landlord knows the property will not be ready for occupancy by the Start Date, Landlord will notify Tenant in writing at least seven days before the Start Date. The notice will offer Tenant a choice of: (1) alternative housing provided by Landlord, reasonably equivalent in size, amenities, and location, until the property is ready; (2) a payment from Landlord equal to the Rent, to help cover the cost of alternative housing Tenant arranges; or (3) the right to terminate this Lease. If Tenant chooses option (1) or (2) and the property is still not ready within 90 days of the original Start Date, Tenant may then terminate this Lease.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-nd",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["ND"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within thirty days after termination of this Lease and delivery of possession of the property -- or, where North Dakota law sets a different trigger for the start of that period, within thirty days after that trigger -- Landlord will deliver or mail to Tenant the Security Deposit, together with any interest required by North Dakota law, less any lawful deductions, along with a written itemization of any amounts withheld. If the Security Deposit remains unclaimed by Tenant for one year after termination of this Lease, Landlord will report and remit it as required by North Dakota's unclaimed property law.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-nd",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["ND"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for a qualifying assistance animal. Landlord may not request documentation of the disability or the disability-related need for the animal if it is readily apparent or already known to Landlord. If Landlord requests documentation, it must come from a medical or other qualified professional who does not operate solely to provide certifications for service or assistance animals. Tenant remains responsible for any damage to the property caused by the animal beyond ordinary wear and tear. Knowingly making a false claim that a pet is a service or assistance animal, or knowingly providing fraudulent supporting documentation, is a violation of North Dakota law and may result in denial of Tenant's request.",
  },
  // Default & Termination
  {
    id: "abandoned-property-nd",
    title: "Property Abandoned After Termination",
    group: "Default & Termination",
    states: ["ND"],
    bodyText:
      "If Tenant abandons property with a total estimated value of $2,500 or less on the premises after termination of this Lease, Landlord may retain and dispose of it without legal process 28 or more days after Landlord received actual notice, or it reasonably appears to Landlord, that Tenant has vacated the premises. Landlord is entitled to the proceeds from any sale of the property and may recover from the Security Deposit any storage and moving expenses in excess of those proceeds.",
  },
  {
    id: "termination-by-death-nd",
    title: "Termination Upon Death of Tenant",
    group: "Default & Termination",
    states: ["ND"],
    bodyText:
      "If Tenant dies, either a surviving co-tenant or Tenant's estate may elect to terminate this Lease. If terminated under this option, the Lease ends on the last day of the month following the month in which Tenant died, unless the Lease term would have expired sooner. Tenant's estate remains responsible for rent through that termination date.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-detector-duty-nd",
    title: "Smoke Detector Requirement",
    group: "Landlord Responsibilities",
    states: ["ND"],
    bodyText:
      "The property will be equipped with a smoke detection system or other approved alarm system, installed and maintained in compliance with applicable national fire protection standards as adopted by the State Fire Marshal. If the property is a single-family rental dwelling, Tenant is responsible for maintaining and inspecting the system. In any other dwelling, Landlord is responsible for installation and for ensuring the system operates properly upon Tenant's occupancy, and Tenant is responsible for maintaining it during the tenancy. If Tenant is deaf and requests one in writing, Landlord will provide an approved visual smoke detection system or other visual fire alarm system.",
  },
  // Default & Termination
  {
    id: "fire-casualty-termination-nd",
    title: "Termination Due to Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["ND"],
    bodyText:
      "If the greater part of the property, or the part that was Tenant's material reason for entering into this Lease, is destroyed or damaged through no fault of Tenant, Tenant may terminate this Lease. This Lease also terminates automatically if the property is destroyed.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-maintenance-nd",
    title: "Tenant Maintenance Obligations",
    group: "Tenant Responsibilities",
    states: ["ND"],
    supersedes: "tenant-maintenance",
    bodyText:
      "Tenant will comply with all applicable building and housing codes materially affecting health and safety, and will keep the part of the property Tenant occupies as clean and safe as its condition permits. Tenant will periodically remove ashes, garbage, rubbish, and other waste in a clean and safe manner, and will keep all plumbing fixtures used by Tenant as clean as their condition permits. Tenant will use all electrical, plumbing, sanitary, heating, ventilating, air-conditioning, and other facilities and appliances in a reasonable manner, and will not deliberately or negligently destroy, deface, damage, or impair any part of the property or knowingly permit any other person to do so. Tenant will conduct themselves, and require any guests to conduct themselves, in a manner that does not disturb neighboring tenants' peaceful enjoyment of the property.",
  },
  // Landlord Responsibilities
  {
    id: "landlord-maintenance-nd",
    title: "Landlord Maintenance Obligations",
    group: "Landlord Responsibilities",
    states: ["ND"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Landlord will comply with applicable building and housing codes materially affecting health and safety, will make all repairs necessary to keep the property in a fit and habitable condition, and will keep all common areas clean and safe. Landlord will maintain in good and safe working order all electrical, plumbing, sanitary, heating, ventilating, air-conditioning, and other facilities and appliances Landlord supplies or is required to supply, and will provide and maintain appropriate waste receptacles and arrange for waste removal. Landlord will supply running water and reasonable hot water and heat at all times, except where the building isn't required by law to be so equipped or where heat or hot water is within Tenant's exclusive control via a direct utility connection. Tenant will notify Landlord promptly in writing of any condition requiring repair, and Landlord will undertake required repairs within a reasonable time.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-sd",
    title: "Security Deposit Return",
    group: "Security Deposit",
    states: ["SD"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within twenty-one days after the termination of the tenancy and Landlord's receipt of Tenant's mailing address or delivery instructions, Landlord will return the Security Deposit to Tenant or provide Tenant a written statement showing the specific reason for withholding the deposit or any portion of it. Landlord may withhold only amounts reasonably necessary to remedy Tenant's default in payment of rent or other amounts due under this Lease, or to restore the property to its condition at the start of the Term, ordinary wear and tear excepted. If Tenant requests an itemized accounting of any amount withheld, Landlord will provide it within forty-five days after termination of the tenancy. Landlord's failure to comply with this section forfeits Landlord's right to withhold any portion of the deposit.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-sd",
    title: "Assistance Animal Accommodation",
    group: "Pets",
    states: ["SD"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, or other pet-related fee for an assistance animal. If Tenant's disability or disability-related need for the animal is not readily apparent or already known to Landlord, Landlord may require reliable supporting documentation confirming the disability and the relationship between the disability and the need for the animal; the documentation must originate from a licensed health care provider who does not operate in South Dakota solely to provide such certifications. If Landlord already knows of the disability and need, Landlord will not require documentation. Tenant remains responsible for any damage to the property caused by an assistance animal. A tenant who knowingly makes a false claim of disability requiring a service or assistance animal, or knowingly provides fraudulent supporting documentation, may be evicted and is liable to Landlord for a damage fee of up to $1,000.",
  },
  // Notices & General
  {
    id: "abandoned-property-sd",
    title: "Abandoned Property",
    group: "Notices & General",
    states: ["SD"],
    bodyText:
      "Property left on the premises by Tenant after Tenant has vacated is handled as follows: property with a total reasonable value of $500 or less, left for ten days after Tenant has quit the premises, is presumed abandoned and Landlord may dispose of it. Property with a total reasonable value exceeding $500 will instead be stored by Landlord, who has a lien on the property for the reasonable costs of handling and storage; after storing the property for thirty days or more, Landlord may treat it as abandoned and dispose of it.",
  },
  // Default & Termination
  {
    id: "dv-lease-release-sd",
    title: "Domestic Abuse / Stalking Early Termination",
    group: "Default & Termination",
    states: ["SD"],
    bodyText:
      "If Tenant or a member of Tenant's household is the victim of alleged domestic abuse, unlawful sexual behavior, or stalking, Tenant may terminate this Lease and vacate the property without penalty for early termination, effective on a specified date, by providing Landlord written notice stating that the termination is due to fear of imminent danger or injury to Tenant or a household member, together with one of the following, each dated within the thirty days before the notice: a signed police report regarding the incident; a protection order issued in response to the incident; or documentation signed by a licensed health care provider stating that the provider examined Tenant or the household member within their scope of practice and has reasonable cause to believe the person was a victim of the alleged conduct. A tenant who terminates under this provision is not liable for any otherwise-applicable early termination fee or for rent for the month following the month in which Tenant vacates.",
  },
  // Disclosures
  {
    id: "meth-disclosure-sd",
    title: "Prior Methamphetamine Manufacturing Disclosure",
    group: "Disclosures",
    states: ["SD"],
    bodyText:
      "If Landlord has actual knowledge that methamphetamine was previously manufactured on the property, Landlord will disclose that fact to Tenant before Tenant becomes obligated under this Lease. If the property consists of two or more housing units, this disclosure applies only to the specific unit as to which Landlord has such knowledge.",
  },
  // Default & Termination
  {
    id: "default-by-tenant-sd",
    title: "Tenant Default",
    group: "Default & Termination",
    states: ["SD"],
    supersedes: "default-by-tenant",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due, fails to make a repair required by this Lease within a reasonable time after Landlord's request, or fails to comply with any other obligation under this Lease - including obligations concerning Tenant's use of the property and Tenant's conduct on the property (such as any quiet-enjoyment, no-disturbance, or lawful-use provisions stated elsewhere in this Lease). South Dakota does not impose a statutory notice-and-cure period before a nonpayment or lease-violation default may be pursued through eviction; whether and how much opportunity to cure Tenant receives, if any, is a decision Landlord makes at the time of enforcement under South Dakota's forcible entry and detainer procedure, not a term fixed by this Lease.",
  },
  {
    id: "edu-tenant-termination-causes-sd",
    title: "Tenant Early-Termination Causes",
    group: "Default & Termination",
    states: ["SD"],
    bodyText:
      "In addition to the domestic abuse/stalking termination right, a South Dakota tenant may terminate this Lease if: Landlord does not, within a reasonable time after Tenant's written request, fulfill Landlord's obligations to place and secure Tenant in quiet possession of the premises or to put the premises into good condition or repair them; or the greater part of the leased premises - or the part that was a material inducement to Tenant entering into this Lease, as Landlord had reason to know at the time of leasing - is destroyed by any cause other than Tenant's ordinary negligence.",
  },
  // Landlord Responsibilities
  {
    id: "fire-casualty-rent-abatement-sd",
    title: "Fire/Casualty Rent Abatement",
    group: "Landlord Responsibilities",
    states: ["SD"],
    bodyText:
      "If the property, or any part of it, is damaged by fire or other casualty not caused by Tenant's negligence or willful act, Rent will be reduced in proportion to the extent and duration the property is unusable. If Landlord decides not to rebuild or repair the damage, this Lease will end and Rent will be prorated to the date of the damage.",
  },
  // Default & Termination
  {
    id: "environmental-event-termination-co",
    title: "Termination After an Environmental Public Health Event",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "If the property is damaged as a result of a sudden environmental public health event, or by an action taken by a governmental authority, and continued occupancy of the property becomes impossible or unlawful, Landlord may terminate this Lease without further liability to either party, provided that Landlord was not already in breach of the warranty of habitability before the event or government action and it would be impracticable for Landlord to repair the property into compliance with the warranty of habitability. Landlord will give Tenant at least 30 days' written notice of termination under this Section and will comply with all of Landlord's obligations under Colorado law through the termination date. Landlord will grant Tenant or Tenant's representative access to retrieve Tenant's personal property before termination, or, if entry is unsafe before then, will agree in writing to grant access at the earliest time it is safe to do so. Landlord will return Tenant's Security Deposit on or before the termination date, and will provide a prorated discount or refund of rent for any period the property was uninhabitable and no comparable dwelling unit or hotel room was provided to Tenant.",
  },
  // Rent & Payment
  {
    id: "rent-increase-notice-co",
    title: "Notice of Rent Increase",
    group: "Rent & Payment",
    states: ["CO"],
    bodyText:
      "If this Lease continues on a month-to-month basis, Landlord will provide Tenant at least [specify notice period, e.g. 60] days' written notice before any increase in Monthly Rent takes effect. Rent will not be increased more than once in any twelve-month period, as required by Colorado law.",
  },
  // Disclosures
  {
    id: "source-of-income-statement-co",
    title: "Source of Income Non-Discrimination Statement",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "As required by Colorado law, Landlord provides the following statement: section 24-34-502 (1) of the Colorado Revised Statutes prohibits discrimination against a prospective tenant based on the tenant's source of income, and requires a landlord to accept any lawful and verifiable source of income used to pay rent, including a housing subsidy or voucher.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-detectors-ks",
    title: "Smoke Detectors",
    group: "Landlord Responsibilities",
    states: ["KS"],
    bodyText:
      "Landlord has supplied and installed all smoke detectors required by Kansas law. After Tenant takes possession of the property, Tenant will test and maintain all smoke detectors in the dwelling unit, including replacing batteries as needed. Tenant will not disable, remove, paint over, or otherwise interfere with any smoke detector. Tenant will promptly notify Landlord if a smoke detector is missing, damaged, or fails to operate for any reason other than a dead battery, and Landlord will repair or replace it.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-ne",
    title: "Assistance Animals & Reasonable Accommodation",
    group: "Pets",
    states: ["NE"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, an additional deposit, pet rent, extra compensation, or any other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law; if the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by the animal, and for keeping the animal under control and cared for.",
  },
  // Rent & Payment
  {
    id: "late-fee-ne",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["NE"],
    supersedes: "late-fee",
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full and timely payment of Rent in the future, to assess a late fee for any subsequent late payment, or to pursue any remedy for a different or continuing breach.",
  },
  // Landlord Responsibilities
  {
    id: "carbon-monoxide-alarm-duty-ne",
    title: "Carbon Monoxide Alarms",
    group: "Landlord Responsibilities",
    states: ["NE"],
    bodyText:
      "Where the property has a fuel-fired heater or appliance, a fireplace, or an attached garage, Landlord will ensure an operational carbon monoxide alarm is installed on each habitable floor of the property, or in a location specified by any applicable building code. Before Tenant's occupancy begins, Landlord will replace any carbon monoxide alarm that was stolen, removed, found missing, or found not operational after the previous occupancy, and will provide Tenant with any batteries necessary to make each alarm operational at the time Tenant takes residence. Tenant will keep, test, and maintain all carbon monoxide alarms in good repair, and will notify Landlord if any alarm is stolen, removed, found missing, or found not operational during the Term, or of any deficiency Tenant cannot correct. Landlord will replace or repair any alarm upon receiving such notice. Except as stated in this Section, Landlord is not responsible for the maintenance, repair, or replacement of a carbon monoxide alarm or for the care and replacement of its batteries. Neither party will remove batteries from, or otherwise render inoperable, any carbon monoxide alarm, except as part of inspecting, maintaining, repairing, or replacing the alarm or its batteries.",
  },
  {
    id: "smoke-detector-duty-mn",
    title: "Smoke Alarms",
    group: "Landlord Responsibilities",
    states: ["MN"],
    bodyText:
      "The property is equipped with smoke alarms conforming to the State Fire Code. Landlord is responsible for maintaining the smoke alarms. Tenant will inform Landlord of a nonfunctioning smoke alarm within 24 hours of discovering that it is not functioning. Tenant will not disable, remove, or otherwise render any smoke alarm nonfunctioning.",
  },
  {
    id: "carbon-monoxide-alarm-duty-mn",
    title: "Carbon Monoxide Alarms",
    group: "Landlord Responsibilities",
    states: ["MN"],
    bodyText:
      "Landlord will provide the property with an approved and operational carbon monoxide alarm installed within ten feet of each room lawfully used for sleeping, in working order at the commencement of the tenancy. Tenant is responsible for maintaining the carbon monoxide alarm during Tenant's occupancy, including replacing batteries as needed and replacing any alarm that is stolen, removed, found missing, or rendered inoperable during Tenant's occupancy. Tenant will not disable or remove any carbon monoxide alarm, and will notify Landlord promptly if an alarm cannot be restored to working order.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-mn",
    title: "Right of Victims of Violence to Terminate Lease",
    group: "Default & Termination",
    states: ["MN"],
    bodyText:
      "Tenant may terminate this Lease without penalty or liability if Tenant or another authorized occupant fears imminent violence after being subjected to domestic abuse, criminal sexual conduct, sexual extortion, or harassment, as those terms are defined under Minnesota law. To do so, Tenant must give Landlord signed and dated advance written notice stating that Tenant fears imminent violence from a person indicated in a qualifying document, stating that Tenant needs to terminate the tenancy, providing the date on which this Lease will terminate, and providing written instructions for the disposition of any remaining personal property. The notice must be delivered before termination of the tenancy by mail, in person, or by a form of written communication Tenant regularly uses to communicate with Landlord, and must be accompanied by a qualifying document. Vacating the property before the date stated in the notice does not by itself terminate the tenancy. Landlord may ask Tenant to disclose the name of the perpetrator in order to protect other residents, but Tenant may decline for safety reasons, and disclosure is not a condition of terminating this Lease.\n\nIf Tenant is the sole tenant, Tenant is responsible for rent for the full month in which the tenancy terminates, relinquishes all claims for return of the Security Deposit, and is relieved of any other obligation for rent or other charges for the remaining term. If there is more than one tenant and one of them terminates under this Section, this Lease terminates as to all tenants at the later of the end of the month or the end of the rent interval in which that termination takes effect; all tenants are responsible for rent for that full month, all tenants relinquish all claims for return of the Security Deposit, and all tenants are relieved of any other obligation for the remaining term. A tenant whose tenancy ends in this way may reapply to enter into a new lease with Landlord. Termination under this Section does not affect liability for delinquent or unpaid rent or other amounts owed to Landlord before termination.\n\nLandlord will not disclose Tenant's written notice, the contents of any qualifying document, the address or location to which Tenant has relocated, or Tenant's status as a victim of violence, except as permitted by Minnesota law.",
  },
  // Disclosures
  {
    id: "foreclosure-disclosure-mn",
    title: "Notice of Pending Foreclosure or Contract for Deed Cancellation",
    group: "Disclosures",
    states: ["MN"],
    bodyText:
      "If Landlord has received notice of a contract for deed cancellation or notice of a mortgage foreclosure sale affecting the property, Landlord has notified Tenant in writing of that fact, and of the date on which the contract cancellation period or the mortgagor's redemption period ends, before entering into this Lease and before accepting any rent or Security Deposit from Tenant.",
  },
  // Security Deposit
  {
    id: "initial-final-inspection-mn",
    title: "Initial and Move-Out Inspections",
    group: "Security Deposit",
    states: ["MN"],
    bodyText:
      "At the commencement of the tenancy, or within 14 days of Tenant occupying the property, Landlord will notify Tenant of Tenant's option to request an initial inspection of the property to identify existing deficiencies, so that those deficiencies do not later result in deductions from the Security Deposit. In lieu of an initial or move-out inspection, if Tenant agrees, Landlord may provide Tenant written acknowledgment of photos or videos of the property and the parties may agree to its condition at the start or end of the tenancy. Within a reasonable time after either party gives notice of intention to terminate the tenancy, or before the end of the Term, Landlord will notify Tenant in writing of Tenant's option to request a move-out inspection and of Tenant's right to be present at it. If Tenant requests a move-out inspection, Landlord will make the inspection at a reasonable time, no earlier than five days before termination, the end of the lease date, or the day Tenant plans to vacate, so that Tenant has the opportunity to remedy identified deficiencies and avoid deductions from the Security Deposit. If Tenant chooses not to request an inspection, Landlord's duties under this Section are discharged.",
  },
  // Disclosures
  {
    id: "landlord-disclosure-mn",
    title: "Disclosure of Landlord and Manager",
    group: "Disclosures",
    states: ["MN"],
    bodyText:
      "The name and address of the person authorized to manage the property, and of Landlord or an agent authorized to accept service of process and to receive and give receipt for notices and demands, are disclosed to Tenant in this Lease. Landlord will post this information in a conspicuous place on the property, together with notice that a copy of the statement of tenant rights and responsibilities prepared by the Minnesota Attorney General is available to any residential tenant upon request.",
  },
  // Security Deposit
  {
    id: "deposit-last-month-rent-mn",
    title: "Security Deposit May Not Be Used as Last Month's Rent",
    group: "Security Deposit",
    states: ["MN"],
    bodyText:
      "Tenant may not withhold payment of all or any part of the rent for the last payment period of this Lease on the grounds that the Security Deposit should serve as payment for that rent. Withholding all or part of the rent for the last payment period creates a rebuttable presumption that Tenant did so on that basis. This Section does not apply to a month-to-month tenancy for which neither party has served a notice to quit, or to the last month of a contract for deed cancellation period or a mortgage foreclosure redemption period. If Tenant remains in violation after Landlord's written demand and notice of this restriction, Tenant is liable to Landlord for a penalty equal to the portion of the Security Deposit Landlord would be entitled to withhold for reasons other than Tenant's default in the payment of rent, plus interest on the whole deposit, in addition to the rent withheld.",
  },
  // Default & Termination
  {
    id: "fire-casualty-termination-mn",
    title: "Destroyed or Uninhabitable Property",
    group: "Default & Termination",
    states: ["MN"],
    bodyText:
      "If the property is destroyed, or becomes uninhabitable or unfit for occupancy, through no fault or neglect of Tenant or any occupant, Tenant may vacate and surrender the property. Rent will be prorated to the date Tenant vacates, and Tenant will not be liable for rent accruing after that date. Nothing in this Section limits Landlord's obligations under Minnesota law to keep the property fit for its intended use and in reasonable repair, which cannot be waived.",
  },
  // Rent & Payment
  {
    id: "cash-rent-receipt-mn",
    title: "Receipt for Rent Paid in Cash",
    group: "Rent & Payment",
    states: ["MN"],
    bodyText:
      "If Tenant pays rent or any other payment under this Lease in cash, Landlord will provide Tenant a written receipt for the payment immediately upon receipt if the payment is made in person, or within three business days if the cash payment is not made in person.",
  },
  // Disclosures
  {
    id: "lease-copy-receipt-mn",
    title: "Receipt of Copy of Lease",
    group: "Disclosures",
    states: ["MN"],
    bodyText:
      "Tenant acknowledges that Landlord has given Tenant a copy of this Lease. Tenant's signature and the date below constitute Tenant's acknowledgment of receipt.",
  },
  // Default & Termination
  {
    id: "dv-lease-release-nd",
    title: "Domestic Violence Early Termination",
    group: "Default & Termination",
    states: ["ND"],
    bodyText:
      "If Tenant is a victim of domestic violence by a family or household member, or fears imminent domestic violence against Tenant or Tenant's minor children by such a person should they remain on the premises, Tenant may terminate this Lease without penalty or liability by giving Landlord advance written notice stating that Tenant fears imminent domestic violence from a person named in a court order, an order prohibiting contact, a civil protection order, or other record filed with a court; that Tenant needs to terminate the tenancy; and the specific date the tenancy will terminate. Notice must be delivered by mail, facsimile, or in person before the tenancy terminates. Tenant remains responsible for rent for the full month in which the tenancy terminates plus an additional amount equal to one month's rent, subject to Landlord's duty to mitigate, and that additional amount must be paid on or before termination for Tenant to be relieved of the remaining term. Tenant remains liable for rent and other amounts already owed before termination. The tenancy, including the right of possession, ends on the date stated in Tenant's notice. If other tenants are bound by this Lease, the tenancy continues for them.",
  },
  {
    id: "termination-notice-nd",
    title: "Notice to Terminate the Tenancy",
    group: "Default & Termination",
    states: ["ND"],
    bodyText:
      "For a month-to-month tenancy, either party may terminate at any time by giving at least one calendar month's written notice, unless the parties have agreed in writing to a longer notice period or a different notice time. Rent is due and payable to and including the date of termination. If the term of this Lease is not specified, either party may terminate by giving notice as long before the end of the term as the term of the hiring itself, up to a maximum of one calendar month. If this Lease converts to a month-to-month tenancy, either party may terminate on the last day of a month with at least one calendar month's notice.",
  },
  // Notices & General
  {
    id: "lease-notice-initial-requirement-nd",
    title: "Extended Notice Requirement Must Be Initialled",
    group: "Notices & General",
    states: ["ND"],
    bodyText:
      "Tenant's initials: ______   Tenant acknowledges the notice requirement stated in this Lease for terminating the tenancy, which exceeds one calendar month from the end of a month.",
  },
  // Access & Entry
  {
    id: "landlords-access-nd",
    title: "Landlord Access to the Property",
    group: "Access & Entry",
    states: ["ND"],
    supersedes: "landlords-access",
    bodyText:
      "Landlord may enter the property at any time in an emergency, or if Landlord reasonably believes Tenant has abandoned the premises or is in substantial violation of this Lease. Otherwise Landlord may enter only during reasonable hours and in a reasonable manner, and only to inspect the property, make necessary or agreed repairs, decorations, alterations or improvements, supply necessary or agreed services, or show the property to actual or prospective purchasers, insurers, mortgagees, real estate agents, tenants, workers or contractors. Unless it is impractical to do so, Landlord will first notify Tenant and obtain Tenant's consent, which Tenant will not unreasonably withhold, and the notice will identify a specific time. Consent is presumed if Tenant does not object after receiving notice of a specific entry time. Notice may be given personally, by posting it conspicuously in or about the property for a reasonable period, or by any other method that results in actual notice to Tenant. Landlord will not abuse the right of access or use it to harass or intimidate Tenant.",
  },
  {
    id: "landlords-access-sd",
    title: "Landlord Access and Entry",
    group: "Access & Entry",
    states: ["SD"],
    supersedes: "landlords-access",
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in an emergency or where it is impracticable to do so, Landlord will give Tenant reasonable notice of Landlord's intent to enter and will enter only at reasonable times. Twenty-four hours' written notice is presumed reasonable. Each notice of entry will specify the date or dates of entry, a period of time during normal business hours for the entry, the purpose of the intended entry, and a means by which Tenant may request to reschedule the entry.",
  },
  // Default & Termination
  {
    id: "holdover-sd",
    title: "Holdover",
    group: "Default & Termination",
    states: ["SD"],
    supersedes: "holdover",
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession. If Tenant remains in possession and Landlord accepts Rent, this Lease will be presumed renewed on the same terms and for the same period as the original Term, not exceeding one year. Where the renewed term is one the parties did not specify, either party may terminate it by giving the other notice at least as long before its expiration as the length of the term itself, not exceeding one month.",
  },
  // Landlord Responsibilities
  {
    id: "landlord-maintenance-sd",
    title: "Landlord Maintenance and Repair",
    group: "Landlord Responsibilities",
    states: ["SD"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Landlord will keep the property and all common areas in reasonable repair, fit for human habitation, and in good and safe working order throughout the Term, and will maintain in good and safe working order and condition all electrical, plumbing, and heating systems, except where the disrepair has been caused by the negligent, willful, or malicious conduct of Tenant or a person under Tenant's direction or control. Tenant will notify Landlord promptly of any condition requiring repair, and Landlord will undertake required repairs within a reasonable time. Landlord and Tenant may not waive or modify Landlord's obligations under this section, except that Landlord and Tenant may agree that Tenant will perform specified repairs or maintenance in lieu of rent. Nothing in this Lease limits Tenant's remedies if Landlord fails to make required repairs within a reasonable time after notice.",
  },
  // Pets
  {
    id: "pet-policy-sd",
    title: "Pet Policy",
    group: "Pets",
    states: ["SD"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern. If the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected, Landlord may enter the property and remove the pet. Any such entry will be made in accordance with the Access and Entry section of this Lease, except that in an emergency, or where giving notice is impracticable, Landlord may enter without prior notice.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-oh",
    title: "Return of Security Deposit",
    group: "Security Deposit",
    states: ["OH"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within thirty days after the termination of this Lease and delivery of possession of the property, Landlord will deliver or mail to Tenant the Security Deposit, less any amounts properly applied under this Lease, together with a written itemization of any deductions and the reasons for them. Tenant will provide Landlord with Tenant's forwarding address in writing. If Tenant does not provide a forwarding address in writing, Tenant remains entitled to the return of any balance due, but is not entitled to damages or attorneys' fees for Landlord's failure to comply with this Section.",
  },
  // Default & Termination
  {
    id: "holdover-oh",
    title: "Holdover",
    group: "Default & Termination",
    states: ["OH"],
    supersedes: "holdover",
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession, and may join in that action a claim for Rent and other amounts due under this Lease. For each day Tenant remains in possession after the end of the Term, Tenant will pay holdover rent at the daily rate of {{holdover_daily_rate}}, which the parties agree is a reasonable estimate of Landlord's loss and not a penalty.",
  },
  // Disclosures
  {
    id: "landlord-identity-oh",
    title: "Owner and Agent Identity",
    group: "Disclosures",
    states: ["OH"],
    bodyText:
      "The name and address of the owner of the property, and of any person authorized to manage the property or to act as the owner's agent, are stated in this Lease. Landlord will notify Tenant in writing of any change to that information.",
  },
  // Rules & Regulations
  {
    id: "flag-display-oh",
    title: "Flag Display",
    group: "Rules & Regulations",
    states: ["OH"],
    bodyText:
      "Nothing in this Lease restricts Tenant's right to display the flag of the United States, the National League of Families POW/MIA flag, the flag of the State of Ohio, or a service flag approved by the United States Secretary of Defense, where the flag is displayed in accordance with applicable federal, state, or local law and the applicable patriotic customs. Before installing a flag pole, or a bracket to be permanently affixed to the unit, for display of the flag of the United States or the POW/MIA flag, Tenant will contact Landlord with reasonable notice to discuss placement and size. Tenant remains obligated to return the property at the end of the Term in the same condition as when Tenant took possession.",
  },
  // Landlord Responsibilities
  {
    id: "repair-escrow-exemption-notice-oh",
    title: "Three-or-Fewer-Units Notice",
    group: "Landlord Responsibilities",
    states: ["OH"],
    bodyText:
      "Landlord is a party to rental agreements covering three or fewer dwelling units, and Landlord gives Tenant notice of that fact. Tenant's remedies under Ohio Revised Code section 5321.07 do not apply to Landlord.",
  },
  // Tenant Responsibilities
  {
    id: "sex-offender-occupancy-oh",
    title: "Occupancy by a Registered Offender",
    group: "Tenant Responsibilities",
    states: ["OH"],
    bodyText:
      "If the property is located within one thousand feet of any school premises, preschool or child care center premises, children's crisis care facility premises, or residential infant care center premises, Tenant will not allow any person to occupy the property if both of the following apply to that person: the person's name appears on the state registry of sex offenders and child-victim offenders, and the registry indicates the person was convicted of or pleaded guilty to a sexually oriented offense that is not registration-exempt, or to a child-victim oriented offense, and was not sentenced to a serious youthful offender dispositional sentence. If Tenant allows occupancy in violation of this Section, Landlord may terminate this Lease as to Tenant and all other occupants.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-oh",
    title: "Assistance Animal Accommodation",
    group: "Pets",
    states: ["OH"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs as a reasonable accommodation for a disability is not considered a pet under this Lease, regardless of any pet policy, breed, weight, or size restriction stated elsewhere in this Lease. Landlord will not charge a pet deposit, pet rent, additional deposit, or any other pet-related fee for an assistance animal. If the disability and the disability-related need for the animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law; if the disability and need are readily apparent, Landlord will not require such documentation. Tenant remains responsible for any damage to the property caused by the animal, and for keeping the animal under control and cared for. Landlord may deny or withdraw this accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  // Disclosures
  {
    id: "tpa-notice-ca",
    title: "Tenant Protection Act Notice",
    group: "Disclosures",
    states: ["CA"],
    choiceGroup: "ca-tpa-coverage",
    choiceGroupDefault: true,
    bodyText:
      "California law limits the amount your rent can be increased. See Section 1947.12 of the Civil Code for more information. California law also provides that after all of the tenants have continuously and lawfully occupied the property for 12 months or more or at least one of the tenants has continuously and lawfully occupied the property for 24 months or more, a landlord must provide a statement of cause in any notice to terminate a tenancy. See Section 1946.2 of the Civil Code for more information.",
  },
  {
    id: "tpa-exemption-notice-ca",
    title: "Tenant Protection Act Exemption Notice",
    group: "Disclosures",
    states: ["CA"],
    choiceGroup: "ca-tpa-coverage",
    choiceGroupDefault: false,
    bodyText:
      "This property is not subject to the rent limits imposed by Section 1947.12 of the Civil Code and is not subject to the just cause requirements of Section 1946.2 of the Civil Code. This property meets the requirements of Sections 1947.12 (d)(5) and 1946.2 (e)(8) of the Civil Code and the owner is not any of the following: (1) a real estate investment trust, as defined by Section 856 of the Internal Revenue Code; (2) a corporation; or (3) a limited liability company in which at least one member is a corporation.",
  },
  // Default & Termination
  {
    id: "owner-move-in-reservation-ca",
    title: "Owner or Relative Occupancy Reservation",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "Landlord reserves the right to terminate this Lease, in accordance with Civil Code section 1946.2, if Landlord or Landlord's spouse, domestic partner, child, grandchild, parent or grandparent unilaterally decides to occupy the property as that person's primary residence for at least 12 continuous months. Any such termination is subject to all requirements of Civil Code section 1946.2, including the notice contents, the relocation assistance or final-month rent waiver, and Landlord's obligation to re-offer the unit and reimburse moving expenses if the intended occupant does not take occupancy within 90 days or does not occupy for 12 consecutive months.",
  },
  // Security Deposit
  {
    id: "security-deposit-cap-ca",
    title: "Security Deposit Amount",
    group: "Security Deposit",
    states: ["CA"],
    supersedes: "security-deposit-use",
    bodyText:
      "The security deposit for this Lease is {{security_deposit}}. Under Civil Code section 1950.5(c), Landlord may not demand or receive a security deposit, however denominated, greater than one month's rent, in addition to the first month's rent paid on or before initial occupancy. No portion of the security deposit is non-refundable.",
  },
  {
    id: "security-deposit-return-ca",
    title: "Security Deposit Return",
    group: "Security Deposit",
    states: ["CA"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within 21 calendar days after Tenant vacates, Landlord shall furnish Tenant an itemized statement of any amounts deducted from the security deposit and return the balance. Landlord may deduct only for unpaid rent, repair of damage beyond ordinary wear and tear, cleaning necessary to return the unit to the level of cleanliness at the inception of the tenancy, and, if this Lease so provides, replacement of personal property or appurtenances. Landlord may not charge for ordinary wear and tear or for preexisting conditions, and may not require Tenant to pay for professional carpet or other professional cleaning unless reasonably necessary. Where deductions for repairs and cleaning exceed $125, Landlord shall include copies of bills, invoices or receipts, and photographs of the unit, with the itemized statement. Tenant may request an initial inspection during the final two weeks of the tenancy and be present for it, and Landlord shall notify Tenant in writing of that right and give at least 48 hours' written notice of the inspection.",
  },
  // Rent & Payment
  {
    id: "rent-increase-cap-ca",
    title: "Rent Increase Limit",
    group: "Rent & Payment",
    states: ["CA"],
    bodyText:
      "Where this property is subject to Civil Code section 1947.12, Landlord may not increase the rent over any 12-month period by more than 5 percent plus the percentage change in the cost of living, or 10 percent, whichever is lower, measured against the lowest rent charged for the unit in the 12 months before the increase takes effect, and may not impose more than two increases in any 12-month period. Any rent discount, incentive, concession or credit is excluded from that calculation and shall be listed separately in this Lease. Landlord shall give notice of any increase as required by Civil Code section 827.",
  },
  // Notices & General
  {
    id: "notice-service-fee-ban-ca",
    title: "No Fee for Serving Notices",
    group: "Notices & General",
    states: ["CA"],
    bodyText:
      "Landlord shall not charge Tenant any fee for serving, posting or otherwise delivering any notice relating to this tenancy, including any notice terminating a periodic tenancy and any three-day notice to pay rent, perform covenants or quit.",
  },
  // Tenant Responsibilities
  {
    id: "bed-bug-cooperation-ca",
    title: "Bed Bug Inspection Cooperation",
    group: "Tenant Responsibilities",
    states: ["CA"],
    bodyText:
      "Tenant shall cooperate with any inspection to facilitate the detection and treatment of bed bugs, including the inspection of Tenant's unit and any followup inspections of surrounding units until bed bugs are eliminated, and shall provide the pest control operator with requested information necessary to facilitate detection and treatment. Landlord's entry to inspect shall comply with Civil Code section 1954.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-ca",
    title: "Assistance Animal Accommodation",
    group: "Pets",
    states: ["CA"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "Landlord will make reasonable accommodations for assistance animals, which include both service animals and support animals and are not pets. Tenant will not be charged any pet fee, additional rent, additional security deposit, liability insurance requirement or other additional fee in connection with an assistance animal. No breed, size or weight limitation applies to an assistance animal. Tenant remains responsible for the cost of repairing damage the animal causes to the premises, excluding ordinary wear and tear, and for keeping the animal under control, including reasonable conditions on waste disposal and on behavior that would constitute a nuisance, provided those conditions are no more restrictive than those applied to other animals on the property and do not interfere with the animal's work. An assistance animal need not be allowed if that specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, and the threat cannot be sufficiently mitigated by another reasonable accommodation.",
  },
  // Access & Entry
  {
    id: "landlord-entry-ca",
    title: "Landlord Entry",
    group: "Access & Entry",
    states: ["CA"],
    supersedes: "landlords-access",
    bodyText:
      "Landlord may enter the dwelling unit only in an emergency; to make necessary or agreed repairs, decorations, alterations or improvements, supply necessary or agreed services, exhibit the unit to prospective or actual purchasers, mortgagees, tenants, workers or contractors, or make an initial inspection under Civil Code section 1950.5(f); when Tenant has abandoned or surrendered the premises; or pursuant to court order. Except in an emergency or after abandonment or surrender, Landlord will give Tenant reasonable written notice stating the date, approximate time and purpose of entry, and will enter only during normal business hours unless Tenant consents at the time of entry to a different time. Twenty-four hours is presumed reasonable notice; notice mailed at least six days before entry is presumed reasonable. No notice is required to respond to an emergency, where Tenant is present and consents at the time of entry, or after Tenant has abandoned or surrendered the unit. Landlord will not abuse the right of access or use it to harass Tenant.",
  },
  // Notices & General
  {
    id: "accommodation-request-rights-ca",
    title: "Disability Accommodation Requests",
    group: "Notices & General",
    states: ["CA"],
    bodyText:
      "Tenant, a family member, or anyone Tenant authorizes to act on Tenant's behalf may request a reasonable accommodation or reasonable modification because of a disability at any time, orally or in writing, and need not use any particular words, form or procedure. Landlord will not charge any fee, deposit or other financial contribution as a condition of receiving, processing or granting such a request. Nothing in this Lease requires Tenant to give up the right to request a reasonable accommodation or modification in the future.",
  },
  {
    id: "reasonable-modification-ca",
    title: "Reasonable Modifications",
    group: "Notices & General",
    states: ["CA"],
    bodyText:
      "Tenant may make reasonable modifications to the premises at Tenant's expense where necessary because of a disability. Landlord may ask Tenant for a reasonable description of the proposed work and reasonable assurances that it will be done competently and that any required building permits will be obtained, but will not require that the work be done by any particular contractor. Landlord will not increase any customarily required security deposit, require a liability waiver or insurance, or require Tenant to move to a different unit, as a condition of a modification. Where it is reasonable to do so, Landlord may require Tenant to restore the interior of the premises to its prior condition at the end of the tenancy, reasonable wear and tear excepted; Landlord will not require restoration of exterior modifications or modifications to common or public use areas.",
  },
  // Landlord Responsibilities
  {
    id: "repair-and-deduct-ca",
    title: "Repair and Deduct",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "If Tenant gives Landlord or Landlord's agent written or oral notice of dilapidations rendering the premises untenantable that Landlord ought to repair, and Landlord neglects to repair them within a reasonable time, Tenant may either repair them and deduct the cost from rent when due, so long as the cost does not exceed one month's rent, or vacate the premises, in which case Tenant is discharged from further rent and other conditions as of the date of vacating. Tenant may use this remedy no more than twice in any 12-month period. This remedy is not available where the condition was caused by Tenant's own violation of Civil Code section 1929 or 1941.2. Nothing in this Lease limits any other remedy available to Tenant.",
  },
  // Disclosures
  {
    id: "owner-identity-disclosure-ca",
    title: "Owner and Manager Identification",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Person authorized to manage the premises: {{manager_name}}, {{manager_phone}}, {{manager_street_address}}. Owner, or person authorized to act for the owner for service of process and for receiving and receipting all notices and demands: {{owner_agent_name}}, {{owner_agent_phone}}, {{owner_agent_street_address}}. Rent is payable to {{rent_payee_name}} at {{rent_payee_address}}, {{rent_payee_phone}}, in the following form or forms: {{rent_payment_forms}}. If rent may be paid personally, it may be paid on {{rent_payment_days_hours}}. Landlord will give Tenant a copy of this Lease within 15 days after Tenant signs it, and, once each calendar year on Tenant's request, an additional copy within 15 days.",
  },
  // Rent & Payment
  {
    id: "rent-increase-notice-ca",
    title: "Rent Increase Notice",
    group: "Rent & Payment",
    states: ["CA"],
    bodyText:
      "For a tenancy from week to week, month to month, or any period less than a month, Landlord may increase the rent only on written notice delivered to Tenant personally or served by mail under Code of Civil Procedure section 1013. If the increase, by itself or combined with any other increases in the 12 months before its effective date, is 10 percent or less of the rent charged at any time during those 12 months, the notice will be delivered at least 30 days before the increase takes effect. If it is greater than 10 percent, the notice will be delivered at least 90 days before the increase takes effect. Where any other statute, regulation, recorded regulatory agreement or contract requires a longer notice period, that longer period applies.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-maintenance-obligations-ca",
    title: "Tenant Care of Premises",
    group: "Tenant Responsibilities",
    states: ["CA"],
    supersedes: "tenant-maintenance",
    bodyText:
      "Tenant shall keep the part of the premises Tenant occupies and uses clean and sanitary as the condition of the premises permits; dispose of all rubbish, garbage and other waste from the dwelling unit in a clean and sanitary manner; properly use and operate all electrical, gas and plumbing fixtures and keep them as clean and sanitary as their condition permits; neither do, nor permit any person on the premises with Tenant's permission to do, anything that willfully or wantonly destroys, defaces, damages, impairs or removes any part of the structure or dwelling unit or its facilities, equipment or appurtenances; and use the premises as Tenant's abode, using portions of it for living, sleeping, cooking or dining only as those portions were designed or intended to be used. Tenant shall repair deteriorations or injuries to the premises caused by Tenant's want of ordinary care.",
  },
  // Rent & Payment
  {
    id: "payment-methods-ca",
    title: "Permitted Payment Methods",
    group: "Rent & Payment",
    states: ["CA"],
    supersedes: "acceptable-payment-methods",
    bodyText:
      "Landlord will allow Tenant to pay rent and the security deposit by at least one form of payment that is neither cash nor electronic funds transfer, and will allow Tenant to pay rent through a third party who provides a signed acknowledgment that they are not a tenant of the premises and that acceptance of the payment does not create a new tenancy. Landlord will not charge Tenant any fee for paying rent or the security deposit by check. If Tenant attempts to pay with a check drawn on insufficient funds or instructs the drawee to stop payment, Landlord may require cash as the exclusive form of payment for a period of up to three months, but only after giving Tenant written notice that the instrument was dishonored, stating the length of the cash-only period, and attaching a copy of the dishonored instrument.",
  },
  // Tenant Responsibilities
  {
    id: "political-signs-ca",
    title: "Political Signs",
    group: "Tenant Responsibilities",
    states: ["CA"],
    bodyText:
      "Tenant may post or display political signs relating to an election or legislative vote, the initiative, referendum or recall process, or issues before a public commission, board or elected local body. In a multifamily dwelling such signs may be posted in the window or on the door of the premises; in a single-family dwelling they may also be posted from the yard, window, door, balcony or outside wall. Landlord may prohibit a political sign only if it is more than six square feet in size, if posting it would violate a local, state or federal law, or if it would violate a lawful provision of a common interest development governing document. Tenant will post and remove political signs within the time limits set by any local ordinance, or otherwise within the period Landlord reasonably establishes, which will begin at least 90 days before the election or vote and end at least 15 days after it.",
  },
  {
    id: "waterbed-ca",
    title: "Waterbeds and Liquid-Filled Bedding",
    group: "Tenant Responsibilities",
    states: ["CA"],
    bodyText:
      "If the structure received its valid certificate of occupancy after January 1, 1973, Landlord will not refuse to rent to Tenant, or refuse to continue renting to Tenant, solely because Tenant has a waterbed or other liquid-filled bedding, provided Tenant meets the requirements of Civil Code section 1940.5. Those include furnishing Landlord, before installation, a waterbed insurance policy for property damage of at least $100,000 written by a carrier licensed in California and maintained until the bedding is removed; conforming to the floor load capacity and distributing the weight on a pedestal or frame substantially the dimensions of the mattress; installing, maintaining and removing the bedding per manufacturer, retailer or state standards, whichever is safest; and giving Landlord 24 hours' written notice before installing, removing or moving it. Landlord may inspect the installation on notice under Civil Code section 1954, may increase the security deposit by one-half of one month's rent, and may charge a reasonable administration fee.",
  },
  // Default & Termination
  {
    id: "holdover-ca",
    title: "Holdover",
    group: "Default & Termination",
    states: ["CA"],
    supersedes: "holdover",
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by law to recover possession and may recover the actual damages caused by Tenant's continued possession, including the reasonable rental value of the property for the period Tenant remains. Alternatively, Landlord may accept Tenant's continued payment of Rent, in which case this Lease will continue on a month-to-month basis on the same terms, terminable only as provided by law.",
  },
  // Rent & Payment
  {
    id: "rent-payment-ca",
    title: "Rent Payment",
    group: "Rent & Payment",
    states: ["CA"],
    supersedes: "rent-payment",
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand. If the due date falls on a weekend or legal holiday, rent is due on the next business day. Nothing in this Lease limits Tenant's rights under Civil Code sections 1941 and 1942, including Tenant's right to repair and deduct the cost from rent.",
  },
  // Tenant Responsibilities
  {
    id: "existing-condition-ca",
    title: "Existing Condition",
    group: "Tenant Responsibilities",
    states: ["CA"],
    supersedes: "existing-condition",
    bodyText:
      "Tenant has examined the property and, by signing this Lease, acknowledges its condition as of the Start Date (Existing Condition), except as otherwise noted in this Lease or in any move-in inspection record. This acknowledgment does not waive or modify Landlord's obligations under Civil Code sections 1941 and 1941.1, does not apply to any condition rendering the premises untenantable, and does not affect Tenant's rights regarding any condition that existed before the tenancy began. Landlord will deliver possession of the property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided-ca",
    title: "Services and Utilities Provided",
    group: "Landlord Responsibilities",
    states: ["CA"],
    supersedes: "services-utilities-provided",
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Except as to any condition that renders the premises untenantable, Landlord is not liable for an interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control. Nothing in this Lease waives or modifies Landlord's obligations under Civil Code sections 1941 and 1941.1 or Tenant's rights under Civil Code section 1942.",
  },
  // Rules & Regulations
  {
    id: "common-area-use-ca",
    title: "Property and Common Area Use",
    group: "Rules & Regulations",
    states: ["CA"],
    supersedes: "common-area-use",
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor without Landlord's prior written consent. Tenant will not burn wax candles at the property. Except for political signs displayed as permitted by this Lease and by Civil Code section 1940.4, Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent.",
  },
  // Pets
  {
    id: "pet-policy-ca",
    title: "Pet Policy",
    group: "Pets",
    states: ["CA"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. This Section does not apply to an assistance animal, meaning a service animal or a support animal that Tenant or an occupant needs as a reasonable accommodation for a disability: no pet deposit, pet rent, additional security deposit, liability insurance or other additional fee may be charged in connection with an assistance animal, and no breed, size or weight limitation applies to one. Tenant remains responsible for the cost of repairing damage an assistance animal causes, excluding ordinary wear and tear.",
  },
  // Rent & Payment
  {
    id: "due-at-signing-ca",
    title: "Amounts Due at Signing",
    group: "Rent & Payment",
    states: ["CA"],
    supersedes: "due-at-signing",
    bodyText:
      "Tenant will pay Landlord the following amounts, at the time specified for each: first month's Monthly Rent ({{monthly_rent}}) due at signing, and the Security Deposit ({{security_deposit}}) due at signing. The Security Deposit, together with any pet deposit or other amount taken to secure Tenant's performance, may not exceed the limit set by Civil Code section 1950.5(c). These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
  },
  // Default & Termination
  {
    id: "early-termination-ca",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["CA"],
    supersedes: "early-termination",
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by giving Landlord at least 30 days' written notice. Tenant remains responsible for Rent and other obligations up to the termination date. If this Lease terminates because Tenant breaches it and abandons the property, or because Landlord terminates Tenant's right to possession for breach, Landlord may recover the damages provided by Civil Code section 1951.2. Those damages include the worth at the time of award of the amount by which the unpaid rent for the balance of the Term after the time of award exceeds the amount of the rental loss that Tenant proves could be reasonably avoided. Unpaid rent earned before termination, and rent that would have been earned between termination and the award, shall bear interest at {{judgment_interest_rate}} or, if no rate is stated, at the legal rate. Landlord may terminate this Lease early only as permitted by law, including, where this property is subject to Civil Code section 1946.2, only for a just cause stated in the notice of termination, and only after giving Tenant an opportunity to cure where the law requires one. Nothing in this Section limits any right either party has under applicable law, including Tenant's right to terminate without penalty due to active military service, or due to the property becoming uninhabitable through no fault of Tenant.",
  },
  {
    id: "continue-lease-remedy-ca",
    title: "Continuation of Lease After Abandonment",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "The lessor has the remedy described in California Civil Code Section 1951.4 (lessor may continue lease in effect after lessee's breach and abandonment and recover rent as it becomes due, if lessee has right to sublet or assign, subject only to reasonable limitations).",
  },
  // Tenant Responsibilities
  {
    id: "no-sublet-assign-ca",
    title: "Subletting and Assignment (Reasonable Consent)",
    group: "Tenant Responsibilities",
    states: ["CA"],
    supersedes: "no-sublet-assign",
    choiceGroup: "ca-sublet-consent",
    choiceGroupDefault: true,
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without Landlord's prior written consent, which Landlord will not unreasonably withhold. Tenant will not rent the property, or any portion of it, on any short-term rental or home-sharing platform.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-ca",
    title: "Termination by a Victim of Abuse or Violence",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "Tenant may terminate this Lease if Tenant, a household member, or an immediate family member was the victim of domestic violence, sexual assault, stalking, human trafficking, abuse of an elder or dependent adult, a crime that caused bodily injury or death, a crime involving a firearm or other deadly weapon, or a crime involving the use or threat of force. Tenant must give Landlord written notice with one of the following attached: a copy of a qualifying restraining or protective order; a copy of a written report by a peace officer stating that a report has been filed; documentation from a qualified third party in the form set out in Civil Code section 1946.7; or any other documentation that reasonably verifies the act or crime occurred. Notice must be given within 180 days of the order, the report, or the act or crime. Tenant is responsible for rent for no more than 14 calendar days after giving notice, prorated if the property is re-rented sooner, and is released without penalty from any further obligation. Tenant will not forfeit any security deposit or advance rent because of the termination, and the termination is not a breach of this Lease. Any other tenant remains bound by this Lease.",
  },
  // Notices & General
  {
    id: "emergency-assistance-right-ca",
    title: "Right to Summon Emergency Assistance",
    group: "Notices & General",
    states: ["CA"],
    bodyText:
      "Nothing in this Lease prohibits or limits Tenant, any resident, or any other person from summoning law enforcement assistance or emergency assistance on behalf of a victim of abuse, a victim of crime, or an individual in an emergency. Landlord will not impose or threaten any fee, fine, penalty, termination, non-renewal, or inferior terms of tenancy because such assistance was summoned.",
  },
  // Landlord Responsibilities
  {
    id: "alarm-duties-ca",
    title: "Smoke and Carbon Monoxide Alarms",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "Landlord has installed smoke alarms approved and listed by the State Fire Marshal, and, if the property has a fossil fuel burning heater or appliance, a fireplace, or an attached garage, a carbon monoxide device. Landlord has ensured that the smoke alarms are operable as of the start of this tenancy. Tenant shall notify Landlord or the manager if Tenant becomes aware that any alarm is inoperable, and Tenant shall not disable, remove or obstruct any alarm. Landlord will correct any reported deficiency. Landlord or Landlord's agent may enter the property to install, repair, test and maintain alarms on reasonable written notice, during normal business hours, except in an emergency.",
  },
  // Rules & Regulations
  {
    id: "ev-charging-ca",
    title: "Electric Vehicle Charging Station",
    group: "Rules & Regulations",
    states: ["CA"],
    bodyText:
      "If Tenant has an allotted parking space, Landlord will approve Tenant's written request to install an electric vehicle charging station at that space where the request meets the requirements of Civil Code section 1947.6 and complies with Landlord's procedural approval process for modifications to the property. Tenant's request must include Tenant's consent to a written agreement covering Landlord's requirements for installation, use, maintenance and removal, a complete financial analysis and scope of work, a written description of the proposed modifications, Tenant's obligation to pay all costs associated with the installation and its infrastructure before any work is done, and Tenant's obligation to pay as part of rent the cost of electricity used and of any damage, maintenance, repair, removal and replacement. Tenant and any successor must maintain personal liability coverage in an amount not exceeding ten times the annual rent, covering property damage and personal injury caused by the installation or operation of the station, unless the station is certified by an OSHA-approved Nationally Recognized Testing Laboratory and the work is performed by a licensed electrician. Landlord is not required to provide an additional parking space, and may charge monthly rent for a space that becomes reserved as a result.",
  },
  // Default & Termination
  {
    id: "casualty-termination-ca",
    title: "Damage, Destruction and Failure to Deliver",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "Tenant may terminate this Lease before the end of the Term if Landlord does not, within a reasonable time after Tenant's request, fulfill Landlord's obligations to place and secure Tenant in quiet possession of the property, to put it into good condition, or to repair it. Tenant may also terminate if the greater part of the property, or the part that was the material inducement to Tenant entering this Lease, is destroyed by any cause other than Tenant's want of ordinary care. If the property is destroyed, this Lease terminates.",
  },
  // Landlord Responsibilities
  {
    id: "stove-refrigerator-ca",
    title: "Stove and Refrigerator",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "Landlord will provide and maintain in good working order a stove capable of safely generating heat for cooking and a refrigerator capable of safely storing food. A stove or refrigerator subject to a recall by the manufacturer or a public entity is not considered capable of safe operation, and Landlord will repair or replace it within 30 days of receiving notice of the recall. [If Tenant has asked to supply their own refrigerator, include the following acknowledgment:] \"Under state law, the landlord is required to provide a refrigerator in good working order in your unit. By checking this box, you acknowledge that you have asked to bring your own refrigerator and that you are responsible for keeping that refrigerator in working order.\" If Tenant supplies their own refrigerator, Tenant may on 30 days' written notice inform Landlord that Tenant no longer wishes to keep it, and at the end of that 30-day period Landlord will install a refrigerator in good working order. Landlord will not condition this tenancy on Tenant providing a refrigerator and is not responsible for maintaining a refrigerator Tenant supplies.",
  },
  // Notices & General
  {
    id: "immigration-status-inquiry-ca",
    title: "No Immigration or Citizenship Status Inquiry",
    group: "Notices & General",
    states: ["CA"],
    bodyText:
      "Landlord will not inquire about the immigration or citizenship status of Tenant, any prospective tenant, or any occupant or prospective occupant, will not require any of them to disclose or certify that status, and will not disclose information about that status to any person or entity for the purpose of harassing or intimidating them, retaliating against them for exercising their rights, influencing them to vacate, or recovering possession. Landlord may request information or documentation necessary to determine or verify financial qualifications or identity, and may comply with any obligation under federal law or a subpoena, warrant or court order.",
  },
  // Default & Termination
  {
    id: "auto-renewal-formatting-ca",
    title: "Automatic Renewal Provision",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "[Any provision automatically renewing or extending this Lease if Tenant remains in possession after expiration, or fails to give notice of intent not to renew, must appear here in at least eight-point boldface type, and a recital that such a provision is contained in the body of this Lease must appear in at least eight-point boldface type immediately above the place where Tenant signs.]",
  },
  // Landlord Responsibilities
  {
    id: "security-devices-ca",
    title: "Locks and Security Devices",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "Landlord has installed and will maintain an operable dead bolt lock on each main swinging entry door, operable window security or locking devices on windows designed to be opened, and locking mechanisms complying with fire and safety codes on exterior doors providing access to common areas in multifamily buildings. Tenant shall notify Landlord when Tenant becomes aware that any dead bolt lock or window security device in the unit is inoperable, and Landlord will correct it within a reasonable time.",
  },
  // Rules & Regulations
  {
    id: "tenant-use-rights-ca",
    title: "Tenant Use Rights Landlord Cannot Prohibit",
    group: "Rules & Regulations",
    states: ["CA"],
    bodyText:
      "Nothing in this Lease prohibits Tenant from displaying a religious item on the entry door or door frame of the dwelling, subject to the limits in Civil Code section 1940.45; from owning a personal micromobility device, or storing and recharging up to one such device per occupant in the unit where it meets the applicable safety standard or is insured, unless Landlord provides secure long-term storage; from using a clothesline or drying rack in Tenant's private area on the conditions in Civil Code section 1940.20; or, where the property contains no more than two units and Tenant has a ground-level private outdoor area, from personal agriculture in portable containers on the conditions in Civil Code section 1940.10.",
  },
  // Disclosures
  {
    id: "pest-control-notice-ca",
    title: "Pest Control and Pesticide Notices",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "If a contract for periodic pest control service is in place, Landlord will give Tenant a copy of the notice provided by the registered structural pest control company. If Landlord or Landlord's agent applies any pesticide without a licensed pest control operator, Landlord will give Tenant written notice at least 24 hours in advance identifying the pest to be controlled, the name and brand of the pesticide, the approximate date, time and frequency of application, the statutory caution statement, and notice that the date, time and frequency may change. Where Landlord makes a broadcast application or uses a total release fogger or aerosol spray, Landlord will give the same notice to tenants of adjacent units that could reasonably be affected.",
  },
  {
    id: "ordnance-demolition-meter-disclosures-ca",
    title: "Ordnance, Demolition and Shared Utility Disclosures",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Former ordnance location: [If Landlord has actual knowledge of a former federal or state ordnance location within one mile of the property, disclose it here; otherwise state that Landlord has no such knowledge.] Demolition: [If Landlord has applied for a permit to demolish the unit, state the earliest approximate demolition date and the approximate date Landlord will terminate the tenancy.] Shared utility service: [If gas or electric service through Tenant's meter also serves areas outside the unit, disclose that here; a separate written agreement governs payment for it.]",
  },
  // Landlord Responsibilities
  {
    id: "disaster-duties-ca",
    title: "Disaster Damage, Evacuation and Rent",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "If a declared disaster damages the property, Landlord will remove debris caused by the disaster and mitigate hazards arising from it, including mold, smoke, smoke residue, smoke odor, ash, asbestos and water damage, within a reasonable time and following any government cleaning protocols. Landlord will notify Tenant in writing that this has been done and that Tenant may view and request copies of any environmental studies, testing or reports. Unless this Lease is lawfully terminated, the tenancy remains in effect and Tenant may return at the same rent as soon as it is safe and practicable. Tenant's obligation to pay rent is discharged for any period Tenant cannot occupy the unit under a mandatory evacuation order, and Landlord will return any rent already paid for that period within 10 calendar days after the order is lifted, or Tenant may deduct it from the next month's rent. If this Lease terminates because the property was destroyed or because Tenant terminated under Civil Code section 1932(2), Landlord will return any advance rent covering a period after termination within 21 days.",
  },
  {
    id: "lock-change-non-cotenant-ca",
    title: "Lock Change After Abuse or Violence",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "If a person who has committed or is alleged to have committed abuse or violence against Tenant, or against Tenant's immediate family or household member, is not a tenant of the same unit, Landlord will change the locks of the unit at Landlord's own expense within 24 hours of Tenant's written request accompanied by any one of the forms of documentation listed in Civil Code section 1941.5(d), and will give Tenant a key. If Landlord does not, Tenant may change the locks without Landlord's permission, and Landlord will reimburse Tenant within 21 days, provided Tenant uses locks of similar or better quality, notifies Landlord within 24 hours and provides a key.",
  },
  {
    id: "internet-billing-optout-ca",
    title: "Bulk-Billed Internet Opt-Out",
    group: "Landlord Responsibilities",
    states: ["CA"],
    bodyText:
      "If this tenancy is on a month-to-month or other periodic basis and Landlord offers internet service through a bulk-billing arrangement or other subscription with a third-party internet service provider in connection with the tenancy, Tenant may opt out of paying for that subscription. Landlord will not retaliate against Tenant for doing so. If Landlord does not honour Tenant's opt-out, Tenant may deduct the cost of the subscription from rent.",
  },
  // Parking & Storage
  {
    id: "unbundled-parking-ca",
    title: "Unbundled Parking",
    group: "Parking & Storage",
    states: ["CA"],
    bodyText:
      "Off-street parking is not included in the rent for this unit and is not part of this Lease. Any parking space is leased under a separate parking agreement or addendum. Tenant has a right of first refusal to parking spaces built for this property. Tenant's failure to pay a fee under a separate parking agreement will not be the basis of any unlawful detainer action; if the fee remains unpaid 45 days after it is owed, Landlord may revoke Tenant's right to lease that space.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-forward-proceedings-ca",
    title: "Notice of Proceedings Against the Property",
    group: "Tenant Responsibilities",
    states: ["CA"],
    bodyText:
      "If Tenant receives notice of any proceeding to recover the property or its possession, Tenant shall immediately inform Landlord of the proceeding and deliver the notice to Landlord if it is in writing.",
  },
  // Default & Termination
  {
    id: "military-lease-termination-ca",
    title: "Military Lease Termination",
    group: "Default & Termination",
    states: ["CA"],
    bodyText:
      "Tenant may terminate this Lease at any time after Tenant enters military service during the Term, or, if Tenant signed this Lease while already in military service, after Tenant receives military orders for a permanent change of station or to deploy with a military unit or in support of a military operation for at least 90 days. Tenant must deliver written notice of termination and a copy of the military orders to Landlord or Landlord's agent by hand delivery, private business carrier, or mail with return receipt requested. Where rent is payable monthly, termination takes effect 30 days after the first date on which the next rent payment is due following delivery of the notice. Rent for the period before termination is prorated. Landlord will not impose any early termination charge, although Tenant remains responsible for other amounts due under this Lease at termination, including reasonable charges for excess wear. Landlord will refund any rent paid in advance for a period after termination within 30 days. Termination also ends the obligations of Tenant's dependents under this Lease. Landlord will not hold Tenant's belongings or security deposit to satisfy a claim for rent accruing after termination. If Landlord believes a request under this section is incomplete, Landlord will respond in writing within 30 days identifying what is missing.",
  },
  // Tenant Responsibilities
  {
    id: "no-sublet-assign-discretion-ca",
    title: "Subletting and Assignment (Landlord's Sole Discretion)",
    group: "Tenant Responsibilities",
    states: ["CA"],
    supersedes: "no-sublet-assign",
    choiceGroup: "ca-sublet-consent",
    choiceGroupDefault: false,
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without Landlord's prior written consent, which Landlord may grant or withhold in Landlord's sole discretion. Tenant will not rent the property, or any portion of it, on any short-term rental or home-sharing platform.",
  },
  // Default & Termination
  {
    id: "possession-delay-ca",
    title: "Possession Delay",
    group: "Default & Termination",
    states: ["CA"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord is unable to deliver possession of the property to Tenant on the Start Date, Tenant will not owe Monthly Rent for any period before possession is delivered. If Tenant terminates this Lease because Landlord did not deliver possession, as permitted by the Damage, Destruction and Failure to Deliver section of this Lease, Landlord will return all amounts Tenant paid to Landlord.",
  },
  // Landlord Responsibilities
  {
    id: "landlord-maintenance-ca",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    states: ["CA"],
    supersedes: "landlord-maintenance",
    bodyText:
      "Subject to Tenant's own maintenance obligations under this Lease, Landlord will maintain the property, including its structural elements, roof, and systems, in good order and repair, and will be responsible for repairing the appliances, fixtures, and equipment located at the property, except where repair is necessary due to improper use by Tenant or a guest of Tenant. Tenant will notify Landlord promptly of any condition requiring repair or maintenance; notice may be given orally or in writing, though written notice is encouraged. Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },
  // Parking & Storage
  {
    id: "storage-space-ks-oh-ca",
    title: "Storage Space",
    group: "Parking & Storage",
    states: ["KS", "OH", "CA"],
    supersedes: "storage-space",
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space.",
  },
  {
    id: "parking-ks-oh-ca",
    title: "Parking",
    group: "Parking & Storage",
    states: ["KS", "OH", "CA"],
    supersedes: "parking",
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area.",
  },
  // Notices & General
  {
    id: "tenants-property-insurance-ks-oh-ca",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: ["KS", "OH", "CA"],
    supersedes: "tenants-property-insurance",
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided-ks-oh",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: ["KS", "OH"],
    supersedes: "services-utilities-provided",
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law.",
  },
  // Default & Termination
  {
    id: "surrender-end-of-term-mn-nd",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    states: ["MN", "ND"],
    supersedes: "surrender-end-of-term",
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates will be handled as described in this Lease's provision governing property abandoned after termination.",
  },
  {
    id: "surrender-end-of-term-ks-ne",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    states: ["KS", "NE"],
    supersedes: "surrender-end-of-term",
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates will be handled in accordance with this Lease's Handling of Property Left Behind Section.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
