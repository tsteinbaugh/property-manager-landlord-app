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
// **2026-09-29 three-bucket scrub, Wyoming/Kansas/Nebraska:** 506 -> 491
// shipped LEASE_CLAUSE rows (WY 3, KS 5, NE 7 switched off; content moved
// to education).
//
// **2026-09-29 three-bucket scrub, Colorado:** 513 -> 506 shipped LEASE_CLAUSE
// rows. Seven CO clauses that restated tenant rights or landlord duties were
// switched off and moved to education; several others trimmed. See
// lease-clause-scrub-verdicts.md.
//
// **2026-09-29 refresh (Pennsylvania, state #21):** regenerated from the
// 21-state CSV -- 502 -> 513 shipped LEASE_CLAUSE rows. One shared clause
// text changed (`severability`, plain language, all states); 52 shared rows
// only gained a PA tag. The PA deposit cap ships as education, not a clause.
//
// **2026-09-28 refresh (Alabama, state #20):** regenerated from the
// 20-state CSV -- 486 -> 502 shipped LEASE_CLAUSE rows. No shared clause
// text changed; 50 shared rows only gained an AL tag.
//
// **2026-09-28 refresh (Virginia, state #19):** regenerated from the
// 19-state CSV -- 445 -> 486 shipped LEASE_CLAUSE rows. No shared clause
// text changed; 52 shared rows only gained a VA tag. Four VA unit-count
// pairs are choice groups (the more-than-4-units variant is the default).
//
// **2026-09-28 refresh (Tennessee, state #18):** regenerated from the
// 18-state CSV -- 421 -> 445 shipped LEASE_CLAUSE rows. No shared clause
// text changed; 52 shared rows only gained a TN tag. Three TN county pairs
// are choice groups (Act-county variant is the group default).
//
// **2026-09-28 refresh (South Carolina, state #17):** regenerated from the
// 17-state CSV -- 404 -> 421 shipped LEASE_CLAUSE rows. No shared clause
// text changed; 52 shared rows only gained an SC tag.
//
// **2026-09-28 refresh (North Carolina, state #16):** regenerated from the
// 16-state CSV -- 386 -> 404 shipped LEASE_CLAUSE rows (incl. holdover-rate-nc). No shared clause
// text changed; 51 shared rows only gained an NC tag.
//
// **2026-09-28 refresh (Georgia, state #15):** regenerated from the
// 15-state CSV -- 374 -> 386 shipped LEASE_CLAUSE rows (GA shows 66). No
// shared clause text changed; 54 shared rows only gained a GA tag.
//
// **2026-09-28 refresh (gap-discovery backfill, 12 states):** regenerated
// from the merged CSV -- 351 -> 371 shipped LEASE_CLAUSE rows. No shared
// clause text changed.
//
// **2026-09-27 refresh (Arizona, state #14):** regenerated wholesale from
// the AZ pass's CSV -- 331 -> 351 shipped LEASE_CLAUSE rows (70 visible for
// AZ), plus the new shared `rental-application-accuracy` row for all 14
// states and a uniform `entire-agreement` text edit.
//
// **2026-09-26 refresh (New Jersey, state #12):** regenerated wholesale
// from the NJ pass's CSV -- 291 -> 312 shipped LEASE_CLAUSE rows (64 tagged
// NJ: 21 NJ-specific plus 43 existing clauses that earned an NJ tag). No
// shared row's text changed. Several NJ rows carry layout directives
// (boldface, capitals, first clause, separate rider, attached exhibit) the
// builder cannot enforce yet -- see the NJ log §4 and Addendum M.12.
//
// **2026-09-26 refresh (Texas, state #11):** regenerated wholesale from
// the TX pass's CSV -- 265 -> 291 shipped LEASE_CLAUSE rows (75 tagged TX:
// 26 TX-specific plus 49 existing clauses that earned a TX tag). Three
// shared rows got uniform, self-limiting text edits now shipping in every
// tagged state: `tenant-maintenance`, `no-alterations`, and
// `assigned-parking-space` (lease-clause-decision-log-TX.md §3.1). Several
// TX rows carry bracketed layout directives (bold/underline/heading) that
// the builder cannot enforce yet -- see the TX log §5 and Addendum M.12.
//
// **2026-09-25 refresh (Nevada, state #10):** regenerated wholesale from
// the NV pass's CSV -- 242 -> 265 shipped LEASE_CLAUSE rows (70 tagged NV,
// most of them existing clauses that earned an NV tag). Two shared rows got
// uniform, self-limiting text edits now shipping in every tagged state:
// `common-area-use` (a savings sentence for displays the law protects, such
// as the flag) and `parking-vehicle-rules` ("in accordance with applicable
// law" on towing). No other state's clause set changed.
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
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant shall pay Landlord monthly rent of {{monthly_rent}} (Monthly Rent) in advance on the due date specified in this Lease, without demand, deduction, or setoff, except as permitted by applicable law. If the due date falls on a weekend or legal holiday, rent is due on the next business day.",
  },
  {
    id: "late-fee",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["CO", "WY", "MN", "ND", "SD", "OH", "FL", "GA", "SC", "PA"],
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "returned-payments",
    title: "Returned Checks / Dishonored Payments",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "AZ", "GA", "NC", "SC", "TN", "AL", "PA"],
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by a cashier's check, certified check, or money order, and may charge Tenant a fee associated with the failed payment, not to exceed the maximum amount permitted by applicable law. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent be made by cashier's check, certified check, or money order.",
  },
  {
    id: "due-at-signing",
    title: "Amounts Due Upfront",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will pay Landlord the following amounts, at the time specified for each: [specify what is due and when here, e.g. first month's Monthly Rent ({{monthly_rent}}) due at signing; Security Deposit ({{security_deposit}}) due at signing; Pet Deposit ({{pet_deposit}}) due at signing; last month's Monthly Rent due on the Start Date]. These amounts are due in addition to, and are not credited against, Rent due for any other month of the Term.",
  },
  {
    id: "application-of-payments",
    title: "Application of Payments",
    group: "Rent & Payment",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Each payment Tenant makes will be applied first to the Monthly Rent due for the current or oldest unpaid rental period, and only then to any other fees, charges, or amounts due under this Lease, unless Tenant directs otherwise in writing for a particular payment or applicable law requires otherwise. Nothing in this provision limits any statutory right Tenant may have to cure nonpayment of Rent.",
  },
  {
    id: "late-fee-limit-tn",
    title: "Late Fee (Tennessee URLTA Counties)",
    group: "Rent & Payment",
    states: ["TN"],
    supersedes: "late-fee",
    choiceGroup: "tn-urlta-late-fee",
    choiceGroupDefault: true,
    bodyText:
      "If any Rent is not paid in full by the end of the grace period, Tenant will owe a late fee of {{late_fee_amount}}. The grace period is five days, beginning on and counting the day the Rent is due. If the last day of the grace period falls on a Sunday or on a legal holiday under Tenn. Code Ann. § 15-1-101 (which includes days set apart for county, state or national elections), no late fee will be charged if the Rent is paid on the next business day. A late fee, however described, will never exceed ten percent (10%) of the amount of Rent past due. Landlord's acceptance of a late payment does not change the due date of any later payment.",
  },
  {
    id: "late-fee-limit-va",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["VA"],
    supersedes: "late-fee",
    bodyText:
      "If Tenant does not pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, Tenant will owe a late charge of {{late_fee_amount}}. As Virginia law requires, a late charge will never exceed the lesser of ten percent (10%) of the periodic Rent or ten percent (10%) of the remaining balance due and owed by Tenant, and Landlord will not charge any late charge that this written Lease does not provide for. Landlord's acceptance of a late payment does not change the due date of any later payment.",
  },
  {
    id: "late-fee-limit-nc",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["NC"],
    supersedes: "late-fee",
    bodyText:
      "If any payment of Monthly Rent is five or more calendar days late, counting from the day after it was due, Tenant will owe a late fee of {{late_fee_amount}}. The late fee will not exceed $15.00 or five percent (5%) of the monthly Rent, whichever is greater (for Rent due weekly, $4.00 or five percent (5%) of the weekly Rent, whichever is greater); if Tenant's Rent is subsidized by a federal, State or local government housing program, the late fee will be calculated on Tenant's share of the Rent only. A late fee may be charged only once for each late payment, will not be deducted from a later Rent payment so as to make that payment late, and will not be charged because Tenant has not paid for water or sewer service Landlord provides. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  {
    id: "late-fee-safe-harbor-tx",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["TX"],
    supersedes: "late-fee",
    bodyText:
      "If any portion of the Rent for a rental period remains unpaid after the later of (a) two full days after the date the Rent was originally due or (b) {{late_fee_grace_days}} days after that date, Tenant will pay a late fee consisting of an initial fee of {{late_fee_amount}}[, plus a daily fee of {{late_fee_daily_amount}} for each additional day any portion of that Rent remains unpaid]. The initial fee and any daily fees for a rental period are a single late fee and together will not exceed 12 percent of the Rent for that rental period if the dwelling is located in a structure that contains not more than four dwelling units, or 10 percent of the Rent for that rental period if the structure contains more than four dwelling units. Landlord and Tenant agree the late fee is a reasonable estimate of uncertain damages to Landlord related to the late payment of rent. On Tenant's request, Landlord will provide a written statement of whether Tenant owes a late fee and, if so, its amount. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
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
  {
    id: "nsf-fee-limit-fl",
    title: "Returned Payments",
    group: "Rent & Payment",
    states: ["FL"],
    supersedes: "returned-payments",
    bodyText:
      "If any payment Tenant makes under this Lease by check, draft, order of payment, debit card order, or electronic funds transfer is refused by the drawee because of lack of funds, lack of credit, or lack of an account, or if Tenant stops payment on it with intent to defraud, Tenant will pay Landlord the bank fees Landlord actually incurred in tendering the payment, plus a service charge of $25 if the face value does not exceed $50, $30 if the face value exceeds $50 but does not exceed $300, or $40 if the face value exceeds $300, or 5 percent of the face value, whichever is greater. Landlord may require that the payment be replaced by a cashier's check, certified check, or money order. If more than two of Tenant's payments during the Term are returned, Landlord may require all future payments of Rent to be made by cashier's check, certified check, or money order. This Section does not limit any other remedy Florida law gives Landlord for a dishonored payment.",
  },
  {
    id: "nsf-fee-limit-tx",
    title: "Returned Payments",
    group: "Rent & Payment",
    states: ["TX"],
    supersedes: "returned-payments",
    bodyText:
      "If any payment of Rent or other amount due under this Lease is dishonored and returned unpaid, Tenant will pay Landlord a processing fee of {{nsf_fee}}, which will not exceed $30 for each dishonored payment. Landlord may require that the payment be replaced by a cashier's check, certified check, or money order. If more than two of Tenant's payments during the Term are returned unpaid, Landlord may require all future payments of Rent to be made by cashier's check, certified check, or money order.",
  },
  // Security Deposit
  {
    id: "security-deposit-use",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    states: ["CO", "NE", "MN", "ND", "SD", "WY", "OH", "NV", "TX", "FL", "AZ", "GA", "SC", "TN", "VA", "AL", "PA"],
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
    id: "security-deposit-cap-ga",
    title: "Security Deposit Limit",
    group: "Security Deposit",
    states: ["GA"],
    bodyText:
      "The total of all refundable deposits Landlord demands or receives under this Lease, including the Security Deposit and any damage deposit, pet deposit or advance rent deposit, will not exceed two months' Monthly Rent. Nonrefundable fees, and money that is to be applied toward the payment of Rent or to reimburse services or utilities provided to Tenant, are not deposits for this purpose. However, any amount Tenant pays in advance toward Rent for the last month of the Term is an advance rent deposit: it counts toward this limit and is held, applied and returned as part of the Security Deposit, unless this Lease states that the amount is Rent for a specific calendar month.",
  },
  {
    id: "security-deposit-interest-nj",
    title: "Security Deposit: Holding, Notice and Interest",
    group: "Security Deposit",
    states: ["NJ"],
    bodyText:
      "Landlord will hold the Security Deposit in trust for Tenant and will not mingle it with Landlord's own property. Landlord will deposit or invest it in an interest-bearing account or fund of the kind New Jersey law requires, located in New Jersey. Within 30 days after receiving the Security Deposit, Landlord will notify Tenant in writing of the name and address of the institution or fund holding it, the type of account, the current interest rate, and the amount deposited. Landlord will give the same notice within 30 days after moving the deposit to another institution, fund or account, within 30 days after any transfer of ownership or control of the property, and with each annual interest payment. The interest earned belongs to Tenant and will be paid to Tenant in cash each year, or credited toward Rent due on the renewal or anniversary of this Lease or, if Landlord has given Tenant written notice, on January 31 of each year. If Landlord fails to hold the deposit, give a required notice, or pay interest as described here, Tenant may give Landlord written notice to apply the Security Deposit, plus interest at 7 percent per year, toward Rent due, after which Landlord may not demand a further security deposit; for a missed annual payment or annual notice alone, Tenant must first give written notice and allow Landlord 30 days to comply.",
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
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will use and occupy the property for residential purposes only and will not use or permit the use of the property for any non-residential, illegal, or otherwise inappropriate purpose, including any commercial purpose.",
  },
  {
    id: "existing-condition",
    title: "Existing Condition of Property",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant has examined the property and, by signing this Lease, acknowledges that the property is in good order and repair and satisfactory condition (Existing Condition), except as otherwise noted in this Lease. Landlord will deliver possession of the property to Tenant on the Start Date in the same or better condition as the Existing Condition, except for ordinary wear and tear.",
  },
  {
    id: "permitted-occupants",
    title: "Permitted Occupants",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "The property will be occupied only by {{tenant_names}}, together with {{occupant_names}}. Tenant will notify Landlord promptly if any additional occupant takes up residence at the property.",
  },
  {
    id: "no-disturbance",
    title: "No Disturbance or Nuisance",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will not, and will not permit any occupant or guest to: make any unreasonably loud or otherwise unreasonable use of the property; allow any condition on the property that poses a threat of injury to persons or property; or otherwise interfere with the rights, comfort, safety, or enjoyment of neighboring properties or other tenants.",
  },
  {
    id: "smoking-policy",
    title: "Smoking Policy",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Smoking of any kind, including tobacco, marijuana, and vaping, is not permitted anywhere on the property, including inside the dwelling, on porches, balconies, or in any common area. Tenant will be responsible for any cost Landlord incurs to remediate odor, staining, or damage caused by smoking in violation of this Section, and a violation may be treated as a default under this Lease.",
  },
  {
    id: "utilities-responsibility",
    title: "Utilities Paid by Tenant",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Except for any utility Landlord agrees in this Lease to provide, Tenant is responsible for arranging and paying directly to the service provider for all other utilities and services to the property, including electricity, gas, telephone, cable, and internet, as applicable.",
  },
  {
    id: "utility-service-continuity",
    title: "Utility Service Continuity",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will not cause water, gas, electricity, sewer, or trash service to the property to be interrupted during the Term. This requirement does not apply to telephone, cable, or internet service.",
  },
  {
    id: "utility-payment-evidence",
    title: "Evidence of Utility Payment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Upon Landlord's reasonable request, Tenant will provide Landlord with reasonable evidence that any utility specified as Tenant's responsibility under this Lease has been paid.",
  },
  {
    id: "acceptable-payment-methods",
    title: "Acceptable Forms of Payment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "FL", "AZ", "GA", "NC", "SC", "TN", "AL", "PA"],
    bodyText:
      "Rent and other amounts due under this Lease must be paid by one of the following methods: [list accepted payment methods here, e.g. check or money order, electronic payment service, online payment portal]. Landlord may change the accepted payment methods on reasonable written notice to Tenant.",
  },
  {
    id: "tenant-maintenance",
    title: "Tenant Maintenance & Cleanliness",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "MN", "SD", "OH", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will keep and maintain the property in a clean, safe, and sanitary condition, and will regularly dispose of garbage and waste in a clean and safe manner. Tenant will use all appliances, fixtures, and equipment in a safe and reasonable manner consistent with their intended purpose, will not obstruct access to doors and windows, and will maintain the property in the same condition as it was delivered to Tenant, except for ordinary wear and tear and any condition that applicable law requires Landlord to repair or remedy.",
  },
  {
    id: "no-sublet-assign",
    title: "No Subletting or Assignment",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "AL", "PA"],
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written consent of Landlord, in Landlord's sole discretion. Tenant will not rent the property, or any portion of the property, through any short-term rental program such as Airbnb, VRBO, or similar service, and doing so will be cause for termination of this Lease by Landlord. Any attempted sublease or assignment without such consent will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  {
    id: "no-alterations",
    title: "No Alterations",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will not perform any alterations or improvements to the property, including adding, changing, or removing appliances, fixtures, shelving, wallpaper, or paint, without the prior written consent of Landlord. If Landlord approves an alteration, Tenant understands it will remain part of the property at the end of the Term unless Landlord requires its removal. This Section does not limit any repair, installation, rekeying, or reasonable modification that applicable law entitles Tenant to perform.",
  },
  {
    id: "joint-liability",
    title: "Joint & Several Liability",
    group: "Tenant Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "If more than one individual signs this Lease as Tenant, all such individuals are jointly and severally liable for the performance of all agreements, covenants, and obligations of Tenant under this Lease. Rent is due in full regardless of how Tenant chooses to divide payment among themselves.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: ["CO", "WY", "NE", "ND", "SD", "TX", "NJ", "FL", "GA", "NC", "SC"],
    bodyText:
      "Landlord will provide only the services and utilities expressly specified in this Lease, and as otherwise required by applicable law. Landlord is not liable for any interruption or insufficiency of a service or utility resulting from causes beyond Landlord's reasonable control.",
  },
  {
    id: "utilities-paid-by-landlord",
    title: "Utilities Paid by Landlord",
    group: "Landlord Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Landlord will arrange and pay for the following utilities and services to the property, which are included in Monthly Rent unless this Lease states otherwise: [list utilities Landlord provides here, e.g. water, sewer, and trash removal].",
  },
  {
    id: "appliances-included",
    title: "Appliances & Equipment Included",
    group: "Landlord Responsibilities",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "The property includes the following appliances and equipment as of the Start Date, which Landlord will maintain as described in this Lease's Maintenance & Repairs Section: {{appliance_list}}.",
  },
  {
    id: "landlord-maintenance",
    title: "Maintenance & Repairs",
    group: "Landlord Responsibilities",
    states: ["CO", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Subject to Tenant's own maintenance obligations under this Lease, Landlord will maintain the property, including its structural elements, roof, and systems, in good order and repair, and will be responsible for repairing the appliances, fixtures, and equipment located at the property, except where repair is necessary due to improper use by Tenant or a guest of Tenant. Tenant will notify Landlord promptly in writing of any condition requiring repair or maintenance, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
  },
  {
    id: "habitability-timeline-tx",
    title: "Repairs — Tenant's Statutory Remedies",
    group: "Landlord Responsibilities",
    states: ["TX"],
    bodyText:
      "[This entire Section must be printed in bold or underlined type. Tex. Prop. Code §92.056(g).]\nREPAIRS AND TENANT'S STATUTORY REMEDIES. If Landlord fails to repair or remedy a condition that materially affects the physical health or safety of an ordinary tenant, Tenant may have remedies under Sections 92.056 and 92.0561 of the Texas Property Code. In general, Tenant must give notice of the condition to the person to whom, or at the place where, Rent is normally paid, and must not be delinquent in Rent when any required notice is given. Unless Tenant sends the first notice by certified mail, return receipt requested, by registered mail, or by another form of mail that allows tracking of delivery by the United States Postal Service or a private delivery service, Tenant must give Landlord a subsequent written notice after Landlord has had a reasonable time to repair. Seven days is presumed to be a reasonable time to repair; that presumption may be rebutted based on the date Landlord received the notice, the severity and nature of the condition, and the reasonable availability of materials, labor, and utilities. If Landlord is liable under Section 92.056, Tenant may: (1) terminate this Lease; (2) have the condition repaired or remedied and deduct the cost from Rent as provided by Section 92.0561; and (3) obtain judicial remedies under Section 92.0563. Repair and deduct is available only under the conditions in Section 92.0561, which include limits on the amount that may be deducted (in any one month, not more than one month's Rent or $500, whichever is greater), a requirement that the repair be made by an independent contractor or repairman who is licensed where the city requires it and in compliance with building codes, and a requirement that Tenant give Landlord a copy of the repair bill and receipt with the balance of the Rent.",
  },
  // Access & Entry
  {
    id: "landlords-access",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["WY", "KS", "NE", "OH", "NV", "TX", "NJ", "GA", "NC", "SC", "PA"],
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
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' written notice prior to entry, consistent with Tenant's right to quiet enjoyment of the property. Before entering to inspect for or treat bed bugs, Landlord will give Tenant at least [state the notice period, e.g. 48] hours' written or electronic notice.",
  },
  // Default & Termination
  {
    id: "possession-delay",
    title: "Possession Delay",
    group: "Default & Termination",
    states: ["CO", "WY", "MN", "ND", "SD", "OH", "TX", "NJ", "FL", "GA", "NC", "TN", "VA", "PA"],
    bodyText:
      "If Landlord is unable to deliver possession of the property to Tenant by the Start Date, through no fault of Landlord, this Lease will remain in full force, but Tenant will not be obligated to pay Monthly Rent for the period Tenant is unable to take possession. If Landlord has not delivered possession within 30 days after the Start Date, Tenant may terminate this Lease by written notice to Landlord, in which case all amounts paid to Landlord by Tenant will be returned and both parties will be released from further obligation under this Lease.",
  },
  {
    id: "default-by-tenant",
    title: "Default by Tenant",
    group: "Default & Termination",
    states: ["CO", "WY", "MN", "ND", "CA", "NV", "TX", "AZ", "GA", "SC", "TN", "VA", "PA"],
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord. Tenant will also be in default if Tenant fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. To the extent permitted under applicable law, the prevailing party may recover from the other party court costs and reasonable attorneys' fees and expenses incurred in connection with any legal proceedings related to this Lease.",
  },
  {
    id: "surrender-end-of-term",
    title: "Surrender at End of Term",
    group: "Default & Termination",
    states: ["CO", "WY", "SD", "OH", "CA", "NV", "TX", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL"],
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates may, to the extent permitted by applicable law, be treated as abandoned and disposed of at Tenant's cost.",
  },
  {
    id: "early-termination",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["CO", "WY", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "AZ", "GA", "NC"],
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by providing Landlord at least 30 days' written notice. Tenant will pay an early termination fee equal to one month's Rent ({{monthly_rent}}) or 30% of the remaining Rent due under the Term, whichever is greater, and remains responsible for Rent and other obligations up to the termination date. Landlord may terminate this Lease early by providing Tenant at least 30 days' written notice if Tenant breaches a material term of this Lease and fails to cure the breach within 10 days of receiving written notice, or if Tenant vacates or abandons the property without notifying Landlord. Nothing in this Section limits any right either party has under applicable law. This includes a Tenant's right to terminate without penalty due to active military service under the Servicemembers Civil Relief Act, due to the property becoming uninhabitable through no fault of Tenant, or — except as prohibited by law in the case of a Tenant's death — any other termination right or limitation provided by applicable law.",
  },
  {
    id: "holdover",
    title: "Holdover Tenancy",
    group: "Default & Termination",
    states: ["CO", "WY", "KS", "NE", "MN", "FL", "AZ"],
    bodyText:
      "If Tenant does not vacate the property by the end of the Term, Landlord may pursue any remedy allowed by applicable law to recover possession. Landlord will also be entitled to recover from Tenant holdover damages in the maximum amount permitted by applicable law for each day Tenant remains in possession after the end of the Term. Alternatively, Landlord may accept Tenant's continued payment of Rent, in which case this Lease will be deemed to continue on a month-to-month basis on the same terms and conditions, terminable by either party upon the written notice required by applicable law or, where applicable law sets no notice period, by this Lease.",
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
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Any notice of termination, notice of default, or other notice required to be given in writing under this Lease or applicable law will be delivered to the addresses specified in this Lease, or to any updated address either party provides in writing to the other. Where applicable law requires a particular method, form, timing, or content for a notice, that requirement will control over this Section, and nothing in this Lease designates an alternative method of delivery for any notice governed by law.",
  },
  {
    id: "governing-law",
    title: "Governing Law",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "This Lease will be governed by the laws of the State of {{state}}, and any additional applicable laws of the city or county in which the property is located.",
  },
  {
    id: "severability",
    title: "Severability",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "If a court decision, statute or rule makes any part of this Lease invalid or unenforceable, the rest of this Lease still applies.",
  },
  {
    id: "tenants-property-insurance",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: ["CO", "WY", "SD"],
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property, and Landlord is not liable for any such loss or damage. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  {
    id: "entire-agreement",
    title: "Entire Agreement",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "This Lease, along with any attached addenda and legal disclosures, contains the entire agreement between Landlord and Tenant and may not be changed except in writing signed by all parties, or as applicable law permits Landlord to change it by written notice to Tenant. This Lease is binding on and inures to the benefit of the permitted heirs, legal representatives, and assigns of the parties.",
  },
  {
    id: "addendum-precedence",
    title: "Addendum Precedence",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant acknowledges that the legal disclosures and addenda attached to this Lease are part of this legal agreement. The terms of this Lease will control in the event of any conflict between the terms of an Addendum and the terms of this Lease, except that any disclosure, notice, or addendum required by law will control over any conflicting term of this Lease.",
  },
  {
    id: "electronic-signatures",
    title: "Electronic Signatures",
    group: "Notices & General",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "All individuals indicated in the Basic Terms as comprising Tenant will sign this Lease and related attached Addenda where indicated. Each of Landlord and Tenant consents to the other party's execution of this Lease by electronic signature. Delivery of this Lease containing the electronic signature of a party or otherwise by facsimile through electronic means or as a digital copy will have the same full force and effect as a manually executed original version.",
  },
  // Pets
  {
    id: "pet-policy",
    title: "Pets",
    group: "Pets",
    states: ["CO", "WY", "ND", "OH", "TX", "GA"],
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern, and may enter the property and remove a pet, without liability to Tenant to the extent applicable law permits, if the pet becomes vicious or displays symptoms of severe illness, or if Tenant dies, becomes incapacitated, or is otherwise unable to care for the pet and Landlord believes in good faith that the pet is being abused or neglected.",
  },
  {
    id: "pet-insurance-requirement",
    title: "Pet Insurance Requirement",
    group: "Pets",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "If Tenant keeps an approved pet at the property, Tenant will maintain renter's insurance that includes coverage for pet-related liability, and will name Landlord as an interested party on the policy upon Landlord's request. This requirement does not apply to an assistance animal, and Tenant will not be required to carry liability insurance in connection with an assistance animal.",
  },
  // Parking & Storage
  {
    id: "parking",
    title: "Parking",
    group: "Parking & Storage",
    states: ["CO", "WY", "SD"],
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area and is not liable for damage to or theft of a vehicle or its contents.",
  },
  {
    id: "assigned-parking-space",
    title: "Assigned Parking Space(s)",
    group: "Parking & Storage",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant is assigned the following parking space(s) for Tenant's exclusive use during the Term: [identify assigned space number(s)/location here]. Landlord may reassign a different space of comparable convenience on reasonable notice to Tenant, subject to any limits applicable law places on changing parking rules or policies during the Term.",
  },
  {
    id: "parking-vehicle-rules",
    title: "Parking & Vehicle Requirements",
    group: "Parking & Storage",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Only operable, currently registered passenger vehicles may be parked at the property; commercial vehicles, recreational vehicles, trailers, and oversized vehicles are not permitted without Landlord's prior written consent. Landlord may require Tenant to provide vehicle registration information and may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant. Landlord may, in accordance with applicable law, have a vehicle towed at the vehicle owner's expense if it is illegally parked, abandoned, inoperable, or has expired registration. Vehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.",
  },
  {
    id: "storage-space",
    title: "Storage Space",
    group: "Parking & Storage",
    states: ["CO", "WY", "SD"],
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space, and Landlord is not liable for damage to or theft of items stored there.",
  },
  // Rules & Regulations
  {
    id: "keys",
    title: "Keys",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. If Tenant fails to return all keys or requires a replacement, Landlord may re-key the applicable locks and charge the cost to Tenant. Tenant may not duplicate keys without Landlord's consent.",
  },
  {
    id: "guest-policy",
    title: "Guest Policy",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Guests are welcome for reasonable, non-continuous stays. A guest who stays beyond the period specified by Landlord within a given time frame will be considered an unauthorized occupant and subject to Landlord's prior written consent under this Lease's occupancy terms.",
  },
  {
    id: "guest-policy-day-limit",
    title: "Guest Policy (14-Day Limit)",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will not permit a guest to stay at the property for more than 14 consecutive days, or more than 14 total days within any rolling 6-month period, without Landlord's prior written consent to add that person to this Lease as an occupant or Tenant.",
  },
  {
    id: "common-area-use",
    title: "Use of Property & Common Areas",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep a waterbed or other water-filled furniture at the property, or any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor, without Landlord's prior written consent. Tenant will not burn wax candles at the property. Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent. Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner.",
  },
  {
    id: "fire-safety-grilling",
    title: "Fire Safety & Grilling",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will not cook or use a barbecue, grill, or other open-flame device on a porch, balcony, or within 15 feet of any building, and will not keep or use any flammable chemical or other material at the property that increases the risk of fire, except in quantities and manner consistent with normal household use.",
  },
  {
    id: "landscaping-irrigation",
    title: "Landscaping & Irrigation",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Unless Landlord provides landscaping service, Tenant is responsible for reasonable upkeep of the property's landscaping, including lawn mowing and leaf raking. If Landlord has set an irrigation schedule, Tenant will not modify it, and will promptly inform Landlord of any irrigation or landscaping issue, such as a leak or watering deficiency.",
  },
  {
    id: "snow-removal",
    title: "Snow Removal",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Unless Landlord provides snow removal service, Tenant is responsible for prompt, reasonable removal of snow and ice from any walkway, driveway, porch, or entrance at the property that Tenant uses, to help keep those areas safe and passable.",
  },
  {
    id: "inspection-rights",
    title: "Inspection Rights",
    group: "Rules & Regulations",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant will allow Landlord to perform periodic inspections of the property during the Term, and at move-out, upon reasonable notice consistent with this Lease's Access & Entry terms.",
  },
  // Disclosures
  {
    id: "lead-based-paint",
    title: "Lead-Based Paint Disclosure",
    group: "Disclosures",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "LEAD WARNING STATEMENT. Housing built before 1978 may contain lead-based paint. Lead from paint, paint chips, and dust can pose health hazards if not managed properly. Lead exposure is especially harmful to young children and pregnant women. Before renting pre-1978 housing, lessors must disclose the presence of known lead-based paint and/or lead-based paint hazards in the dwelling. Lessees must also receive a federally approved pamphlet on lead poisoning prevention. Landlord's disclosure: [state either that Landlord has no knowledge of lead-based paint or lead-based paint hazards in the dwelling, or describe all known lead-based paint and lead-based paint hazards]. Records and reports: [state either that Landlord has no reports or records pertaining to lead-based paint or lead-based paint hazards in the dwelling, or list all available records and reports and confirm they have been provided to Tenant]. Tenant acknowledges receipt of the information above and of the federally approved pamphlet Protect Your Family from Lead in Your Home. Landlord and Tenant each certify, to the best of their knowledge, that the information they have provided is true and accurate.",
  },
  {
    id: "hoa-compliance",
    title: "Homeowner / Condominium Association Compliance",
    group: "Disclosures",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "If the property is located within a homeowner or condominium association, Tenant will comply with the association's rules and regulations applicable to the property. Any fines incurred due to Tenant's violation of association rules will be Tenant's responsibility.",
  },
  {
    id: "bed-bug-disclosure-co",
    title: "Bed Bug Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "Bed bug disclosure. Landlord discloses whether the property has had a known bed bug infestation within the past 8 months, and the most recent date, if any, the property was inspected for bed bugs: [describe any known infestation and treatment, and the most recent inspection date, or state 'none known']. Tenant acknowledges receipt of this disclosure.",
  },
  {
    id: "utility-submetering-disclosure-co",
    title: "Utility Allocation Disclosure",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "If utilities at the property are not individually metered and Tenant's utility charges are calculated using a ratio or formula rather than a dedicated meter, the calculation method is: [describe the utility allocation method used]. Landlord's administrative fee for this billing method is [state one: 2% of the utility charge / a flat amount of no more than $10.00 per month / none].",
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
    id: "meth-disclosure-va",
    title: "Prior Methamphetamine Manufacture Disclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "[Use only if Landlord has actual knowledge that the property was previously used to manufacture methamphetamine and has not been cleaned up in accordance with the guidelines established under Virginia law.] Before Tenant signs this Lease, Landlord discloses in writing that the property was previously used to manufacture methamphetamine and has not been cleaned up in accordance with the Virginia Department of Health guidelines: [describe what Landlord knows].",
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
    id: "mold-disclosure-va",
    title: "Mold Disclosure in the Move-In Report",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "As part of the move-in inspection report, Landlord will state in writing whether there is any visible evidence of mold in areas readily accessible within the interior of the property. A statement that there is no visible evidence of mold will be considered correct unless Tenant objects in writing within five days after receiving the report. If the report states that there is visible evidence of mold, Tenant may choose to terminate this Lease and not take possession or not remain in possession. If Tenant chooses to take or remain in possession, Landlord will promptly remediate the mold condition, no later than five business days after Tenant's choice, reinspect the property, and give Tenant a new report stating that there is no visible evidence of mold.",
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
    id: "flood-disclosure-tx",
    title: "Flood Disclosure Notice",
    group: "Disclosures",
    states: ["TX"],
    bodyText:
      "[Required for a lease with a term of 30 days or more. Landlord checks one box in each statement. Landlord and Tenant must both sign the document containing this notice; if it appears in this Lease, their signatures on this Lease satisfy that requirement. Tex. Prop. Code §92.0135.]\nFLOOD DISCLOSURE NOTICE\n{{landlord_name}} ( ) is or ( ) is not aware that the dwelling you are renting is located in a 100-year floodplain. If neither box is checked, you should assume the dwelling is in a 100-year floodplain. Even if the dwelling is not in a 100-year floodplain, the dwelling may still be susceptible to flooding. The Federal Emergency Management Agency (FEMA) maintains a flood map on its Internet website that is searchable by address, at no cost, to determine if a dwelling is located in a flood hazard area. Most tenant insurance policies do not cover damages or loss incurred in a flood. You should seek insurance coverage that would cover losses caused by a flood.\n{{landlord_name}} ( ) is or ( ) is not aware that the dwelling you are renting has flooded at least once within the last five years.",
  },
  {
    id: "flood-disclosure-fl",
    title: "Flood Disclosure",
    group: "Disclosures",
    states: ["FL"],
    bodyText:
      "[Separate document. Required for a rental agreement with a term of 1 year or longer; give it to the prospective tenant at or before execution of the rental agreement.]\n\nFLOOD DISCLOSURE\n\nFlood Insurance: Renters' insurance policies do not include coverage for damage resulting from floods. Tenant is encouraged to discuss the need to purchase separate flood insurance coverage with Tenant's insurance agent.\n\n1. Landlord has ☐ has no ☐ knowledge of any flooding that has damaged the dwelling unit during Landlord's ownership of the dwelling unit.\n\n2. Landlord has ☐ has not ☐ filed a claim with an insurance provider relating to flood damage in the dwelling unit, including, but not limited to, a claim with the National Flood Insurance Program.\n\n3. Landlord has ☐ has not ☐ received assistance for flood damage to the dwelling unit, including, but not limited to, assistance from the Federal Emergency Management Agency.\n\n4. For the purposes of this disclosure, the term \"flooding\" means a general or temporary condition of partial or complete inundation of the dwelling unit caused by any of the following:\na. The overflow of inland or tidal waters.\nb. The unusual and rapid accumulation of runoff or surface waters from any established water source, such as a river, stream, or drainage ditch.\nc. Sustained periods of standing water resulting from rainfall.",
  },
  {
    id: "utility-submetering-disclosure-tx",
    title: "Submetered or Allocated Water Billing",
    group: "Disclosures",
    states: ["TX"],
    bodyText:
      "[Include only if the property is an apartment house (five or more interconnected dwelling units rented monthly or longer), a condominium, or a manufactured home rental community, and Landlord bills Tenant for water or wastewater service that is submetered or allocated from a master meter. At the time this Lease is discussed, Landlord must give Tenant a copy of the Public Utility Commission's submetering and allocation rules (16 Tex. Admin. Code ch. 24, subch. I). 16 Tex. Admin. Code §24.279.]\nWATER AND WASTEWATER BILLING. Tenant will be billed by Landlord for [submetered / allocated] utility service. The following utility services will be included in the bill issued by Landlord: [list, e.g., water and wastewater]. Any dispute relating to the computation of Tenant's bill or the accuracy of any submetering device will be between Tenant and Landlord. For all dwelling units in the previous calendar year, the average monthly bill was ${{utility_avg_bill}}, the highest month's bill was ${{utility_high_bill}}, and the lowest month's bill was ${{utility_low_bill}}. [If allocated rather than submetered:] Landlord allocates the cost of master-metered service among tenants using the following formula: [clear description of the formula, which must be one of the methods approved by 16 Tex. Admin. Code §24.281(e)]. Meter reading dates, billing dates, and due dates are: [describe]. Landlord will repair leaks in Tenant's unit [and in common areas, if common areas are not submetered] within [state period]. Tenant has the right to receive information from Landlord to verify the utility bill. [Submetered service in an apartment house or manufactured home rental community only: state the service charge percentage, if any, which may not exceed 9 percent of Tenant's submetered water and wastewater charge and may not be charged to a resident of a unit that received low income housing tax credits or a resident receiving Section 8 tenant-based voucher assistance. No service charge may be added to allocated billing.] Landlord will not charge Tenant more than the charges the law permits for this service, will not pass through any deposit, disconnect, reconnect, late payment, or similar fee the utility bills to Landlord, and any late fee on a water bill will not exceed five percent of the bill paid late.",
  },
  {
    id: "foreclosure-disclosure-nv",
    title: "Foreclosure Disclosure",
    group: "Disclosures",
    states: ["NV"],
    bodyText:
      "Foreclosure Disclosure. Before Tenant entered into this Lease, Landlord disclosed to Tenant in writing whether the property is the subject of any foreclosure proceedings. Landlord's disclosure: [state that the property is the subject of foreclosure proceedings and describe them, or state that the property is not the subject of any foreclosure proceedings].",
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
      "Landlord will return the Security Deposit to Tenant, together with a written statement listing the exact reasons for retaining any portion, within [choose: 30 days / a longer period, not more than 60 days] after the later of the termination of this Lease or Tenant's surrender of the property.",
  },
  // Default & Termination
  {
    id: "month-to-month-notice-co-exempt",
    title: "Termination Notice (Property Exempt from For-Cause Requirements)",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "Either Landlord or Tenant may terminate a periodic tenancy under this Lease at the end of a tenancy period, or elect not to renew a fixed-term tenancy at the end of the term, by giving the other written notice at least [state the notice period in days] days before that date, or any longer notice Colorado law requires for the length of the tenancy. Because [describe the applicable exemption here - see C.R.S. section 38-12-1302(1)(a), (1)(b), (1)(d), (1)(e), or (1)(f)], this tenancy is not subject to Colorado's for-cause eviction requirements under C.R.S. section 38-12-1301 et seq.",
  },
  {
    id: "month-to-month-notice-co-covered",
    title: "Termination Notice (Subject to For-Cause Requirements)",
    group: "Default & Termination",
    states: ["CO"],
    bodyText:
      "Tenant may terminate a periodic tenancy under this Lease at the end of a tenancy period, or elect not to renew a fixed-term tenancy at the end of the term, by giving Landlord written notice at least [state the notice period in days] days before that date, or any longer notice Colorado law requires for the length of the tenancy.",
  },
  // Parking & Storage
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
    states: ["KS", "NV", "TX", "AZ"],
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
      "To report a condition that may affect the habitability of the property, Tenant will give written notice to Landlord at: [insert landlord's designated WRITTEN habitability-notice address, e.g. email address or mailing address - do not designate a phone number or any verbal method].",
  },
  {
    id: "utility-allowance-cap-co",
    title: "Utility Allowance with Tenant-Paid Overage",
    group: "Landlord Responsibilities",
    states: ["CO"],
    bodyText:
      "Landlord's obligation to pay for [specify utility, e.g. water and sewer] under this Lease's Utilities Paid by Landlord Section is limited to [insert monthly utility allowance amount] per month. If the actual utility cost for a given month exceeds this amount, Tenant will reimburse Landlord for the excess within [insert number of days, e.g. 15] days of receiving a copy of the utility provider's bill showing the actual charges for that month. This reimbursement is a separate obligation from Rent: it is not subject to any late fee applicable to Rent under this Lease, will not be characterized as Rent for purposes of any remedy available for nonpayment of Rent, and Landlord's remedies for Tenant's failure to pay it are limited to those otherwise available under this Lease for breach of an obligation other than Rent.",
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
      "Tenant will notify Landlord in writing, within 30 days after termination of this Lease, of the address where the balance of the Security Deposit and any notice about it should be sent.",
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
  // Tenant Responsibilities
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
    states: ["KS", "NE", "OH", "NC"],
    supersedes: "default-by-tenant",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law.",
  },
  // Tenant Responsibilities
  {
    id: "extended-absence-notice-ks",
    title: "Notice of Extended Absence",
    group: "Tenant Responsibilities",
    states: ["KS", "TN", "VA"],
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
    id: "early-termination-ks",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["KS", "SC", "TN", "VA", "AL", "PA"],
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
      "If the property is part of a shared-metered residential building, Landlord will remain the bill payer and customer of record for utility service to the building. Landlord will not apportion or bill Tenant for electricity usage; electricity may only be submetered in accordance with applicable law. If Landlord apportions natural gas or water and sewer service to Tenant, Landlord will do so only using the method required by Minnesota law, will bill Tenant no less frequently than Landlord is billed by the utility, and will provide Tenant, upon request, copies of the underlying utility bills being apportioned. Any administrative billing charge will not exceed $8 per billing period, and any late payment charge for utilities billed separately from rent will not exceed $5 per month and will not compound. If Tenant vacates before Landlord receives the actual utility bill for the final period, Landlord may issue an estimated final utility bill calculated as permitted by applicable law, based on the immediately preceding billing period and prorated to the date Tenant vacates, without additional fees or charges beyond those applicable law allows. Landlord will not disconnect or cause the disconnection of Tenant's utility service for nonpayment of utility charges.",
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
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space. Except to the extent applicable law does not allow Landlord's liability to be limited, and except for loss or damage caused by Landlord's own gross negligence or willful misconduct, Landlord is not liable, including for ordinary negligence, for damage to or theft of items stored there.",
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
      "Landlord will keep the property and all common areas fit for the use intended by the parties and in reasonable repair. This includes maintaining heat at a minimum of 68 degrees Fahrenheit in all places intended for habitation, including kitchens and bathrooms, from October 1 through April 30, unless a utility company requires and instructs that the heat be reduced. It also includes extermination of insects, rodents, vermin, or other pests. These duties do not apply where the disrepair is caused by Tenant's own willful, malicious, or irresponsible conduct or that of a person under Tenant's direction or control. Landlord will keep the property and common areas in compliance with applicable health and safety laws, including any applicable local rental-licensing ordinance. Landlord will make the property and common areas reasonably energy efficient where doing so is cost-effective under applicable law. Tenant will notify Landlord promptly in writing of any condition requiring repair, and Landlord will undertake required repairs within a reasonable time, consistent with applicable law.",
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
      "Tenant will comply with all applicable building and housing codes materially affecting health and safety, and will keep the part of the property Tenant occupies as clean and safe as its condition permits. Tenant will periodically remove ashes, garbage, rubbish, and other waste in a clean and safe manner, and will keep all plumbing fixtures used by Tenant as clean as their condition permits. Tenant will use all electrical, plumbing, sanitary, heating, ventilating, air-conditioning, and other facilities and appliances in a reasonable manner, and will not deliberately or negligently destroy, deface, damage, or impair any part of the property or knowingly permit any other person to do so. Tenant will conduct themselves, and require any guests to conduct themselves, in a manner that does not disturb neighboring tenants' peaceful enjoyment of the property. Tenant will use ordinary care to preserve the property in safety and keep it in good condition, and will repair all deteriorations or injuries to the property caused by Tenant's ordinary negligence.",
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
      "If this Lease continues on a month-to-month basis, Landlord will provide Tenant at least [specify notice period, e.g. 60] days' written notice before any increase in Monthly Rent takes effect.",
  },
  // Disclosures
  {
    id: "source-of-income-statement-co",
    title: "Source of Income Non-Discrimination Statement",
    group: "Disclosures",
    states: ["CO"],
    bodyText:
      "Section 24-34-502 (1) of the Colorado Revised Statutes prohibits source of income discrimination and requires a non-exempt landlord to accept any lawful and verifiable source of money paid directly, indirectly, or on behalf of a person, including income derived from any lawful profession or occupation and income or rental payments derived from any government or private assistance, grant, or loan program.",
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
    states: ["NE", "AL"],
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
    states: ["CA", "NV", "TX", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
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
    states: ["CA", "TX", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
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
    states: ["KS", "ND", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    supersedes: "storage-space",
    bodyText:
      "Tenant is assigned the following storage space for Tenant's exclusive use during the Term: [identify storage space/location here]. Tenant will not store any hazardous, flammable, or perishable materials in the storage space.",
  },
  {
    id: "parking-ks-oh-ca",
    title: "Parking",
    group: "Parking & Storage",
    states: ["KS", "ND", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    supersedes: "parking",
    bodyText:
      "Tenant may park only in the area(s) designated by Landlord, subject to any parking rules or addendum attached to this Lease. Landlord does not provide security for the parking area.",
  },
  // Notices & General
  {
    id: "tenants-property-insurance-ks-oh-ca",
    title: "Tenant's Property & Renter's Insurance",
    group: "Notices & General",
    states: ["KS", "ND", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    supersedes: "tenants-property-insurance",
    bodyText:
      "Landlord's insurance does not cover loss or damage to Tenant's personal property. Tenant will obtain and maintain renter's insurance covering Tenant's personal property and liability throughout the Term, with liability coverage of at least {{tenant_insurance_minimum}}, and will provide Landlord with evidence of coverage upon request.",
  },
  // Landlord Responsibilities
  {
    id: "services-utilities-provided-ks-oh",
    title: "Services & Utilities Provided by Landlord",
    group: "Landlord Responsibilities",
    states: ["KS", "OH", "NV", "AZ", "TN", "VA", "AL", "PA"],
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
    states: ["KS", "NE", "PA"],
    supersedes: "surrender-end-of-term",
    bodyText:
      "Upon the expiration or earlier termination of this Lease, Tenant will surrender possession of the property and return all keys to Landlord immediately. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of all personal property of Tenant and any occupants. Personal property left at the property after Tenant vacates will be handled in accordance with this Lease's Handling of Property Left Behind Section.",
  },
  // Rent & Payment
  {
    id: "rent-single-figure-nv",
    title: "Total Monthly Rent Disclosure",
    group: "Rent & Payment",
    states: ["NV"],
    bodyText:
      "The Monthly Rent of {{monthly_rent}} stated in this Lease is the maximum total amount of periodic rent due under this Lease and includes every mandatory fee Tenant must pay in addition to base rent. Landlord will not charge Tenant periodic rent greater than this amount. [Include only if a utility exception applies, as a statement on the same page as the Monthly Rent figure, keyed to it by an asterisk or other reference symbol at least half the font size of that figure: \"*The [electric / natural gas / water] service in your unit is not included in the Monthly Rent. {{utility_provider_name}} ({{utility_provider_phone}}) is unable to contract with you directly for that service, so the monthly bill for the service provided in your unit will be charged to you as a separate monthly fee equal to the cost of that bill.\" For a master-metered water system instead: \"*This unit is served by a master-metered water system. A fee for water service will be charged to you as a separate monthly fee equal to the cost of the water service provided in your unit.\"]",
  },
  {
    id: "late-fee-nv",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["NV"],
    supersedes: "late-fee",
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. No late fee will be charged until at least 3 calendar days after the date rent is due. The late fee for any late payment will not exceed 5 percent of the Monthly Rent, and the maximum late fee will not be increased based on any late fee previously imposed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  // Security Deposit
  {
    id: "security-deposit-cap-nv",
    title: "Limit on Total Security",
    group: "Security Deposit",
    states: ["NV"],
    bodyText:
      "The total amount or value of all security deposits and any surety bond under this Lease, including any Monthly Rent paid in advance for the last month of the Term and any pet or cleaning deposit, will not exceed three months' Monthly Rent. Tenant may, if Landlord consents, purchase a surety bond in place of all or part of the Security Deposit; Landlord is not required to accept one and will not require Tenant to purchase one.",
  },
  {
    id: "security-deposit-return-nv",
    title: "Security Deposit Return",
    group: "Security Deposit",
    states: ["NV"],
    supersedes: "security-deposit-return",
    bodyText:
      "Upon termination of the tenancy by either party for any reason, Landlord may claim from the Security Deposit, or any surety bond, only amounts reasonably necessary to remedy Tenant's default in paying Rent, to repair damage to the property caused by Tenant other than normal wear, and to pay the reasonable costs of cleaning. No later than 30 days after the termination of the tenancy, Landlord will provide Tenant an itemized, written accounting of the disposition of the Security Deposit and any surety bond, and will return any remaining portion of the Security Deposit by handing it to Tenant personally at the place where Rent is paid or by mailing it to Tenant's present address or, if that address is unknown, Tenant's last known address. Except for any nonrefundable cleaning charge in a reasonable amount stated in this Lease, no part of the Security Deposit is nonrefundable. Tenant is asked to give Landlord a forwarding address in writing.",
  },
  // Landlord Responsibilities
  {
    id: "move-in-inventory-nv",
    title: "Move-In Inventory and Condition Record",
    group: "Landlord Responsibilities",
    states: ["NV"],
    bodyText:
      "Landlord and Tenant have completed and signed a written record of the inventory and condition of the premises under Tenant's exclusive custody and control. That signed record is attached to and forms part of this Lease.",
  },
  // Disclosures
  {
    id: "owner-identity-disclosure-nv",
    title: "Manager, Agent and Owner Disclosure",
    group: "Disclosures",
    states: ["NV"],
    bodyText:
      "Persons authorized to manage the premises: {{manager_name}}, {{manager_address}}. Person within the state authorized to act for Landlord for service of process and for receiving notices and demands: {{owner_agent_name}}, {{owner_agent_address}}. Principal or corporate owner: {{owner_name}}, {{owner_address}}. Emergency telephone number of a responsible person who resides in the county, or within 60 miles, where the premises are located: {{emergency_phone}}. Landlord will keep this information current.",
  },
  // Default & Termination
  {
    id: "possession-delay-nv",
    title: "Delay in Delivering Possession",
    group: "Default & Termination",
    states: ["NV"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord fails to deliver possession of the property to Tenant as required by this Lease, Rent abates until possession is delivered, and Tenant may: (a) terminate this Lease on at least 5 days' written notice to Landlord, in which case Landlord will return all prepaid Rent, the Security Deposit to the extent recoverable by Tenant, and any payment, deposit, fee or charge made to secure the execution of this Lease; (b) demand performance of this Lease and, if Tenant elects, bring an action for possession against Landlord or any person wrongfully in possession and recover actual damages, except that Landlord is not liable for damages if Landlord exercised due diligence to evict a holdover tenant or remedy the condition keeping Tenant from taking possession; or (c) pursue any other remedy available to Tenant, including recovery of actual damages.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-maintenance-nv",
    title: "Tenant Maintenance Obligations",
    group: "Tenant Responsibilities",
    states: ["NV"],
    supersedes: "tenant-maintenance",
    bodyText:
      "Tenant will: keep the part of the premises Tenant occupies and uses as clean and safe as the condition of the premises permits; dispose of all ashes, garbage, rubbish and other waste from the dwelling unit in a clean and safe manner; keep all plumbing fixtures in the dwelling unit as clean as their condition permits; use all electrical, plumbing, sanitary, heating, ventilating, air-conditioning and other facilities and appliances, including elevators, in a reasonable manner; not deliberately or negligently render the premises uninhabitable or destroy, deface, damage, impair or remove any part of the premises, or knowingly permit any person to do so; and conduct himself or herself, and require other persons on the premises with Tenant's consent to conduct themselves, in a manner that will not disturb a neighbor's peaceful enjoyment of the premises. Tenant will pay for repairs, maintenance or other work needed because of a condition caused by the deliberate or negligent act or omission of Tenant, a member of Tenant's household, or another person on the premises with Tenant's consent.",
  },
  // Pets
  {
    id: "pet-policy-nv",
    title: "Pet Policy",
    group: "Pets",
    states: ["NV"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any pet deposit is part of the Security Deposit, is refundable as provided in this Lease, and counts toward the limit on total security. Any monthly pet fee is a mandatory fee included in the Monthly Rent stated in this Lease and is not charged in addition to it. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as permitted by this Lease's Access & Entry terms and applicable law, including without notice in an emergency. This Section does not apply to an assistance animal.",
  },
  // Rent & Payment
  {
    id: "payment-methods-nv",
    title: "Payment Methods",
    group: "Rent & Payment",
    states: ["NV"],
    supersedes: "acceptable-payment-methods",
    bodyText:
      "Rent and other amounts due under this Lease may be paid by the following methods: [list accepted payment methods]. At least one listed method does not require Tenant to pay any fee or charge for using it or to provide information about a bank account of Tenant (payment by a check that contains such information is permitted). If Tenant may pay through an Internet website or online portal, the fee Landlord charges Tenant for using it is [state amount, or \"none\"], which does not exceed the fee charged by the operator of the website or portal. Landlord may change the accepted methods on reasonable written notice, but will always keep at least one method that meets the requirements of this Section.",
  },
  {
    id: "returned-payments-nv",
    title: "Returned Payments",
    group: "Rent & Payment",
    states: ["NV"],
    supersedes: "returned-payments",
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Tenant will pay a returned-payment charge of [state amount; $25 or less], not to exceed the maximum amount permitted by applicable law. Landlord may then require that the payment be replaced by a cashier's check, certified check, money order, or another payment method that does not require Tenant to pay a fee or provide bank account information. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments to be made by those methods. Landlord will continue to accept at least one method of payment that does not require Tenant to pay a fee or provide bank account information.",
  },
  {
    id: "rent-increase-notice-nv",
    title: "Rent Increase Notice",
    group: "Rent & Payment",
    states: ["NV"],
    bodyText:
      "Landlord will not increase the Monthly Rent unless Landlord serves Tenant with written notice at least 60 days in advance of the first rental payment to be increased or, for any periodic tenancy of less than one month, at least 30 days in advance. During the Term, the Monthly Rent will not be increased except as this Lease expressly provides.",
  },
  // Default & Termination
  {
    id: "casualty-termination-nv",
    title: "Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["NV"],
    bodyText:
      "If the property is damaged or destroyed by fire or casualty to an extent that Tenant's enjoyment of it is substantially impaired, Landlord may terminate this Lease, and Tenant may, in addition to any other remedy: (a) immediately vacate and notify Landlord within 7 days afterward of Tenant's intention to terminate, in which case this Lease terminates as of the date Tenant vacated; or (b) if continued occupancy is lawful, vacate any part rendered unusable, in which case Rent is reduced in proportion to the reduction in fair rental value or lack of use. If this Lease terminates, Landlord will return all prepaid Rent and any recoverable Security Deposit, with Rent accounted for as of the date the property was vacated. This Section does not apply if the fire or casualty was caused by the deliberate or negligent act of Tenant, a member of Tenant's household, or another person on the property with Tenant's consent.",
  },
  {
    id: "abandoned-property-nv",
    title: "Property Left After Tenancy",
    group: "Default & Termination",
    states: ["NV"],
    bodyText:
      "If Tenant abandons the property or leaves personal property on it after an eviction or the end of the rental period, Landlord will reasonably provide for the safe storage of that property for 30 days and may charge the reasonable and actual costs of inventory, moving and storage before releasing it to Tenant or Tenant's authorized representative within that period. After the 30-day period, Landlord may dispose of the property and recover reasonable costs out of the property or its value, but only after making reasonable efforts to locate Tenant, mailing Tenant written notice of the intention to dispose of it (to Tenant's present address or, if unknown, last known address), and waiting 14 days after that notice. Vehicles will be handled as the law provides for abandoned vehicles. For 5 days after any eviction or lockout, Landlord will give Tenant a reasonable opportunity to retrieve essential personal effects, including medication, baby formula, basic clothing and personal care items. In the absence of notice of abandonment, Tenant is presumed to have abandoned the property if absent for one-half of a rental period, unless Rent is current or Tenant has notified Landlord in writing of an intended absence.",
  },
  {
    id: "dv-lease-termination-nv",
    title: "Termination for Domestic Violence, Harassment, Sexual Assault or Stalking",
    group: "Default & Termination",
    states: ["NV"],
    bodyText:
      "If Tenant, a cotenant, or a household member (a person related by blood or marriage and actually residing with Tenant or a cotenant) is the victim of domestic violence, harassment, sexual assault or stalking, as those terms are defined by applicable law, Tenant or any cotenant may terminate this Lease by giving Landlord written notice, effective at the end of the current rental period or 30 days after the notice is provided, whichever occurs sooner. The notice must describe the reason for termination and be accompanied by: for domestic violence, a copy of an order for protection, a written law enforcement report showing the victim notified the agency of the domestic violence, or an affidavit in the form the law prescribes signed by a qualified third party; for harassment, sexual assault or stalking, a written law enforcement report or a copy of a temporary or extended protective order. This right applies only if the events occurred within the 90 days immediately before the notice. A terminating Tenant or cotenant is liable only for Rent owed through the date of termination and any other outstanding obligations; Landlord may keep prepaid Rent for the rental period in which this Lease terminates, refunding any amount exceeding what is owed for that period; and the Security Deposit will not be withheld because of the early termination. Landlord will not give the adverse party any information about the whereabouts of Tenant, a cotenant or a household member. After giving notice, Tenant, a cotenant or a household member may require Landlord to install a new lock at their cost, which Landlord may do by rekeying a lock in good working condition or replacing the locking mechanism with one of equal or superior quality; Landlord will not give the adverse party a key to the new lock, or access to the dwelling to reclaim property unless a law enforcement officer is present. Landlord will not disclose, describe or characterize a termination under this Section as an early termination to a prospective landlord.",
  },
  {
    id: "infirmity-death-termination-nv",
    title: "Termination for Relocation for Care or Death of a Cotenant",
    group: "Default & Termination",
    states: ["NV"],
    bodyText:
      "Notwithstanding anything else in this Lease: (a) if a physical or mental condition of a Tenant who is 60 years of age or older or has a physical or mental disability requires that Tenant to relocate because of a need for care or treatment that cannot be provided in the dwelling, that Tenant may terminate this Lease by giving Landlord 30 days' written notice within 60 days after relocating, and a cotenant may do the same if the cotenant is 60 years of age or older or has a physical or mental disability, or became a tenant on or after the date the relocating Tenant signed; and (b) upon the death of the spouse or cotenant of a Tenant who is 60 years of age or older or has a physical or mental disability, that Tenant may terminate this Lease by giving Landlord 60 days' written notice within 3 months after the death. The notice must set forth the facts showing the right to terminate and, for a relocation, include reasonable verification of the condition and of the need to relocate for care or treatment. The death of a Tenant does not by itself give Landlord a right to terminate this Lease.",
  },
  // Rules & Regulations
  {
    id: "flag-display-nv",
    title: "Display of the United States Flag",
    group: "Rules & Regulations",
    states: ["NV"],
    bodyText:
      "Landlord will not prohibit Tenant from displaying the flag of the United States within the portion of the premises Tenant has the right to occupy and use exclusively, where the flag is made of cloth, fabric or paper, is displayed from a pole or staff or in a window, and is displayed consistently with federal flag law. This right does not cover commercial advertising or a depiction of the flag made of balloons, flora, lights, paint, paving, roofing, siding or other building, decorative or landscaping components. Landlord may adopt rules that reasonably restrict the placement and manner of display. In any action to enforce this right, the prevailing party may recover reasonable attorney's fees and costs.",
  },
  {
    id: "religious-display-nv",
    title: "Display of Religious or Cultural Items",
    group: "Rules & Regulations",
    states: ["NV"],
    bodyText:
      "This Lease does not prohibit Tenant from displaying religious or cultural items on the entry door or doorframe of the dwelling or otherwise in or on the dwelling, meaning items displayed or affixed because of sincerely held religious or cultural beliefs, practices or traditions. The right does not extend to a display that is larger than 36 by 12 inches or larger than the door on which or whose frame it is displayed; a display larger than 36 by 12 inches immediately adjacent or affixed to the entry; or a display that threatens public health, safety or welfare, hinders opening or closing an entry door, violates any law, promotes discriminatory behavior, or is obscene or otherwise illegal. Landlord may adopt policies that reasonably restrict placement and manner. If Landlord must work on the entry door or doorframe, Landlord will give at least 7 days' written notice except in an emergency, and may either require Tenant to remove the display temporarily or, if Tenant consents or does not respond within a reasonable period, remove it and store it respectfully; the display may be returned within 72 hours after the work is completed. In any action to enforce this right, the prevailing party may recover reasonable attorney's fees and costs.",
  },
  // Disclosures
  {
    id: "nuisance-reporting-nv",
    title: "Nuisance Law Summary and Reporting Procedure",
    group: "Disclosures",
    states: ["NV"],
    bodyText:
      "Summary of the public nuisance law: A person commits a misdemeanor who commits or maintains a public nuisance (as defined by state law) for which no special punishment is prescribed, willfully omits or refuses to perform any legal duty relating to removal of such a nuisance, or lets or permits any building or portion of it to be used knowing it is intended to be or is being used for committing or maintaining such a nuisance. Reporting: Tenant may report a nuisance to [name and contact information of the local law enforcement or code enforcement agency], and may report a violation of a building, safety or health code or regulation to [name and contact information of the local building, code enforcement or health authority].",
  },
  {
    id: "sfr-occupancy-disclosure-nv",
    title: "Single-Family Residence Occupancy Disclosure",
    group: "Disclosures",
    states: ["NV"],
    bodyText:
      "[Place at the top of the first page of the Lease, in a font size at least two times larger than any other font size in the Lease. Include only if the property is a single-family residence (a structure of not more than four units, other than a manufactured home) and this Lease is not signed by an authorized agent of Landlord who holds a permit to engage in property management:] NOTICE: State law contains rebuttable presumptions that a tenant does not have lawful occupancy of the dwelling unless the rental agreement (1) is notarized or is signed by an authorized agent of the landlord who holds a property management permit, and (2) includes the current address and telephone number of the landlord or the landlord's authorized representative. This agreement is valid and enforceable against the landlord and the tenant regardless of whether it is notarized or signed by such an agent, and regardless of whether it includes that address and telephone number.",
  },
  {
    id: "property-tax-rent-disclosure-nv",
    title: "Property Tax Portion of Rent",
    group: "Disclosures",
    states: ["NV"],
    bodyText:
      "Landlord will deliver to Tenant, in July of each year and whenever the Monthly Rent changes, a written statement showing separately, for each periodic payment of Rent, the amount that represents property taxes paid by Landlord and the remainder of that payment. If the property is one of several on which Landlord pays property taxes together, the property-tax amount will be apportioned among the rented properties according to their areas and reduced to the rent period.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-detector-duty-nv",
    title: "Smoke Detectors",
    group: "Landlord Responsibilities",
    states: ["NV"],
    bodyText:
      "Landlord has equipped the property with one or more smoke detectors and will ensure they are in working order when Tenant takes possession. [If the property is a dwelling unit in an apartment building with at least three dwelling units, state law requires a smoke detector in the unit, placed as approved by the fire authority.] Tenant will test the smoke detectors periodically as the manufacturer recommends, replace batteries as needed during the Term, and promptly notify Landlord in writing of any detector that does not work after a battery change. Tenant will not remove, disconnect or disable any smoke detector. Landlord will repair or replace a detector that does not work within a reasonable time after notice.",
  },
  // Rules & Regulations
  {
    id: "keys-tx",
    title: "Keys and Rekeying",
    group: "Rules & Regulations",
    states: ["TX"],
    supersedes: "keys",
    bodyText:
      "At the start of the Term, Tenant will receive the keys specified by Landlord and will sign a receipt acknowledging the number and type of keys provided. Tenant will return all keys to Landlord at the end of the Term. Landlord will rekey, at Landlord's expense, each security device operated by a key, card, or combination not later than the seventh day after each tenant turnover date. At Tenant's request, Landlord will perform additional rekeying or change a security device at Tenant's expense. Tenant may not duplicate keys without Landlord's consent, and may not remove, change, rekey, replace, or alter a security device without Landlord's permission, except as the Texas Property Code allows Tenant to do if Landlord fails to comply with its security device requirements.\n[Optional. Effective only if this sentence is printed in bold or underlined type. Tex. Prop. Code §92.156(e).] If Tenant vacates the property in breach of this Lease, Landlord may deduct from the Security Deposit the reasonable cost Landlord incurs to rekey the security devices as required by law.\n[Optional. Effective only if this sentence is UNDERLINED; bold alone is not named by the statute. Tex. Prop. Code §92.162(b).] Tenant will pay for the repair or replacement of a security device necessitated by misuse or damage by Tenant, a member of Tenant's family, an occupant, or a guest, and not by normal wear and tear.",
  },
  // Tenant Responsibilities
  {
    id: "acceptable-payment-methods-tx",
    title: "Acceptable Payment Methods",
    group: "Tenant Responsibilities",
    states: ["TX"],
    supersedes: "acceptable-payment-methods",
    bodyText:
      "Rent and other amounts due under this Lease must be paid by one of the following methods: [list accepted payment methods here. If Landlord will not accept cash, the list must require payment by check, money order, or another traceable or negotiable instrument]. If Landlord accepts a cash payment, Landlord will give Tenant a written receipt and record the payment date and amount in a record book maintained by Landlord.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-tx",
    title: "Security Deposit Refund",
    group: "Security Deposit",
    states: ["TX"],
    supersedes: "security-deposit-return",
    bodyText:
      "Landlord will refund the Security Deposit to Tenant on or before the 30th day after the date Tenant surrenders the property. Before refunding it, Landlord may deduct damages and charges for which Tenant is legally liable under this Lease or as a result of breaching this Lease, but will not retain any portion of the Security Deposit to cover normal wear and tear. If Landlord retains all or part of the Security Deposit, Landlord will give Tenant the balance, if any, together with a written description and itemized list of all deductions; no description and itemized list is required if Tenant owes Rent when Tenant surrenders possession and there is no controversy about the amount of Rent owed. Landlord is not obligated to refund the Security Deposit or to give Tenant a written description of damages and charges until Tenant gives Landlord a written statement of Tenant's forwarding address for the purpose of refunding the Security Deposit, but Tenant does not forfeit the right to a refund or to the description merely by failing to give a forwarding address. Notices and other communications about the Security Deposit may be sent by e-mail if Tenant and Landlord or Landlord's agent have previously communicated by e-mail, and Landlord may designate a specific e-mail address for Tenant to use for that purpose.",
  },
  {
    id: "deposit-surrender-notice-tx",
    title: "Advance Notice of Surrender",
    group: "Security Deposit",
    states: ["TX"],
    bodyText:
      "[Optional. Effective only if this entire provision is underlined or printed in conspicuous bold print. Tex. Prop. Code §92.103(b).] Tenant must give Landlord at least {{surrender_notice_days}} days' advance written notice of surrender as a condition for refunding the Security Deposit.",
  },
  {
    id: "deposit-last-month-rent-tx",
    title: "Security Deposit Is Not Last Month's Rent",
    group: "Security Deposit",
    states: ["TX"],
    bodyText:
      "Tenant may not withhold payment of any portion of the last month's Rent on the grounds that the Security Deposit is security for unpaid Rent. A Tenant who does so is presumed to have acted in bad faith, and a Tenant who in bad faith withholds Rent on that ground is liable to Landlord for three times the Rent wrongfully withheld and Landlord's reasonable attorney's fees in a suit to recover the Rent.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-repair-agreement-tx",
    title: "Tenant Payment for Certain Repairs",
    group: "Tenant Responsibilities",
    states: ["TX"],
    bodyText:
      "[Optional. To be effective this entire Section must be underlined or printed in bold, must be specific and clear, and must be agreed knowingly, voluntarily, and for consideration. It may appear in this Lease or in a separate signed addendum. Tex. Prop. Code §92.006(e)(4), (f).] Except for conditions caused by the negligence of Landlord, Tenant will pay for the repair of the following conditions that occur during the Term or any renewal or extension: (1) damage from wastewater stoppages caused by foreign or improper objects in lines that exclusively serve Tenant's dwelling; (2) damage to doors, windows, or screens; and (3) damage from windows or doors left open. This Section does not affect Landlord's duty to repair or remedy, at Landlord's expense, wastewater stoppages or backups caused by deterioration, breakage, roots, ground conditions, faulty construction, or malfunctioning equipment.",
  },
  // Landlord Responsibilities
  {
    id: "security-devices-tx",
    title: "Security Devices",
    group: "Landlord Responsibilities",
    states: ["TX"],
    bodyText:
      "[Print this entire Section in bold or underlined type. If it is, Landlord has seven days, rather than three, to comply with Tenant's written request before Tenant may terminate or sue under Section 92.164(a)(2) or (4) of the Texas Property Code (the extra time does not apply where the request reports a recent unauthorized entry or crime of personal violence). Tex. Prop. Code §92.164(b)-(c).]\nSECURITY DEVICES. Landlord, at Landlord's expense, is required to equip the dwelling, when Tenant takes possession, with the security devices required by Subchapter D of Chapter 92 of the Texas Property Code: a window latch on each exterior window; a doorknob lock or keyed dead bolt on each exterior door; a sliding door pin lock and a sliding door handle latch or sliding door security bar on each exterior sliding glass door; and a keyless bolting device and a door viewer on each exterior door. Landlord is not required to install a doorknob lock or keyed dead bolt at Landlord's expense if, when Tenant agrees to lease the dwelling, at least one exterior door usable for normal entry has both a keyed dead bolt and a keyless bolting device and all other exterior doors have a keyless bolting device, each installed as the law requires. Landlord is not required to install a keyless bolting device at Landlord's expense on an exterior door if Landlord is expressly required or permitted to periodically check on the well-being or health of Tenant under this Lease or another written agreement and the other conditions of Section 92.153(e) are met. Tenant has the right to install or rekey a security device required by Subchapter D and deduct the reasonable cost from Tenant's next Rent payment, as provided by Section 92.164(a)(1).\n[Optional; effective only if bold or underlined. Tex. Prop. Code §92.159. If the dwelling is in a multiunit rental complex with a pool, or opens into a pool yard, print this sentence in capital letters and underlined, or in at least 10-point bold type, so that it also covers pool-yard door and window latches. Tex. Health & Safety Code §§757.009(b), 757.013.] Tenant's requests and notices about security devices must be in writing.",
  },
  {
    id: "smoke-alarm-tx",
    title: "Smoke Alarms",
    group: "Landlord Responsibilities",
    states: ["TX"],
    bodyText:
      "Landlord has installed smoke alarms in the dwelling as required by Subchapter F of Chapter 92 of the Texas Property Code and has determined that each is in good working order at the beginning of Tenant's possession. During the Term, Landlord will inspect and repair a smoke alarm if Tenant gives Landlord notice of a malfunction or requests an inspection or repair, within a reasonable time considering the availability of material, labor, and utilities. Landlord has no duty to repair damage to or a malfunction of a smoke alarm caused by Tenant, Tenant's family, or Tenant's guests or invitees, unless Tenant pays in advance the reasonable repair or replacement cost. Landlord is not obligated to provide batteries for a battery-operated smoke alarm after Tenant takes possession. If requested by Tenant as an accommodation for a person with a hearing-impairment disability, a smoke alarm must also be capable of alerting a hearing-impaired person in the bedrooms it serves.\n[The following notice must be underlined or in bold print for Landlord to have the remedies of Section 92.2611(e). Tex. Prop. Code §92.2611(d)(1).] Tenant must not disconnect or intentionally damage a smoke alarm or remove the battery without immediately replacing it with a working battery. Tenant may be subject to damages, civil penalties, and attorney's fees under Section 92.2611 of the Texas Property Code for not complying with this notice.\n[Optional. Tex. Prop. Code §92.259(b).] Tenant's initial request for installation, inspection, or repair of a smoke alarm must be in writing.",
  },
  // Default & Termination
  {
    id: "early-termination-rights-statement-tx",
    title: "Statutory Early Termination Rights",
    group: "Default & Termination",
    states: ["TX"],
    bodyText:
      "Tenants may have special statutory rights to terminate the lease early in certain situations involving family violence or a military deployment or transfer.\nTenants may have special statutory rights to terminate the lease early in certain situations involving certain sexual offenses or stalking.",
  },
  // Landlord Responsibilities
  {
    id: "emergency-phone-tx",
    title: "Emergency Contact Number",
    group: "Landlord Responsibilities",
    states: ["TX"],
    bodyText:
      "To report an emergency related to a condition of the property that materially affects the physical health or safety of an ordinary tenant, Tenant may call {{emergency_phone}}. [If Landlord has an on-site management or superintendent's office for the property, this number must be answered 24 hours a day and must also be posted prominently outside that office. Tex. Prop. Code §92.020.]",
  },
  // Disclosures
  {
    id: "owner-management-disclosure-tx",
    title: "Ownership and Management",
    group: "Disclosures",
    states: ["TX"],
    bodyText:
      "The holder of record title to the dwelling, according to the deed records in the county clerk's office, is {{owner_name}}, {{owner_address}}. [If an entity located off-site from the dwelling is primarily responsible for managing the dwelling:] The management company is {{management_company_name}}, {{management_company_street_address}}. Landlord will correct this information if a name or address changes.",
  },
  // Default & Termination
  {
    id: "casualty-loss-tx",
    title: "Casualty Loss",
    group: "Default & Termination",
    states: ["TX"],
    bodyText:
      "If, after a casualty loss not caused by the negligence or fault of Tenant, a member of Tenant's family, or a guest or invitee of Tenant, the property is as a practical matter totally unusable for residential purposes, either Landlord or Tenant may terminate this Lease by giving written notice to the other at any time before repairs are completed. If this Lease is terminated, Tenant is entitled only to a pro rata refund of Rent from the date Tenant moves out and to a refund of any Security Deposit otherwise required by law. If after such a casualty loss the property is partially unusable for residential purposes, Rent will be reduced in proportion to the extent the property is unusable because of the casualty. If a condition results from an insured casualty loss, such as fire, smoke, hail, explosion, or a similar cause, the period for repair does not begin until Landlord receives the insurance proceeds.",
  },
  {
    id: "lockout-rent-delinquency-tx",
    title: "Lock Change for Delinquent Rent",
    group: "Default & Termination",
    states: ["TX"],
    bodyText:
      "[Optional. Landlord has this right only if it is placed in the lease. Tex. Prop. Code §92.0081(d)(1).] If Tenant is delinquent in paying all or part of the Rent, Landlord may change the door locks on the door to Tenant's individual unit. Landlord will do so only in compliance with Section 92.0081 of the Texas Property Code, including by giving Tenant the advance written notice it requires, and will not change the locks while Tenant or any other lawful occupant is in the dwelling, more than once during a rental payment period, or on a day, or the day before a day, on which Landlord or its designated representative is not available, or any on-site management office is not open, for Tenant to tender the delinquent Rent. Landlord will provide Tenant a key to the new lock at any hour, regardless of whether Tenant pays the delinquent Rent, and will not prevent Tenant from entering any common area.",
  },
  // Parking & Storage
  {
    id: "parking-rules-tx",
    title: "Parking Rules",
    group: "Parking & Storage",
    states: ["TX"],
    bodyText:
      "[Include if the property is in a multiunit complex (two or more dwellings under common ownership or management on the same or adjacent lots) and Landlord has vehicle towing or parking rules. The heading of this paragraph must read \"Parking\" or \"Parking Rules\" and be capitalized, underlined, or printed in bold. Tex. Prop. Code §92.0131(c).]\nPARKING RULES. Landlord's vehicle towing and parking rules [are stated in this paragraph / are attached to this Lease as the Parking Rules Addendum, which is part of this Lease and signed by Tenant]. As a condition of parking, Landlord may require only the make, model, color, year, license number, and state of registration of each vehicle to be parked. If Landlord changes the towing or parking rules during the Term, Landlord will give Tenant written notice of the change, and the change will not take effect before the 14th day after the notice is delivered, unless it results from a construction or utility emergency. A change made during the Term will apply to all of Landlord's tenants in the same complex and will be based on necessity, safety or security of tenants, reasonable requirements for construction on the premises, or respect for other tenants' parking rights, unless Tenant consents to it in writing. Any parking permit issued to Tenant will be for a term coterminous with this Lease and will not be terminated or suspended before Tenant's right of possession ends.",
  },
  // Tenant Responsibilities
  {
    id: "electric-submeter-interruption-tx",
    title: "Submetered Electricity: Interruption for Nonpayment",
    group: "Tenant Responsibilities",
    states: ["TX"],
    bodyText:
      "[Include only if Landlord submeters electricity or allocates or prorates nonsubmetered master-metered electricity, and wants the right to interrupt electric service for nonpayment. Tex. Prop. Code §92.008(h).] If Tenant does not pay an electric bill issued by Landlord on or before the 12th day after the date it is issued, Landlord may interrupt electric service to the dwelling, but only as permitted by and in compliance with Section 92.008 of the Texas Property Code, including its advance-notice requirements, the days and weather conditions on which interruption is prohibited, and Tenant's right to avoid interruption where it would cause a resident to become seriously ill. A payment Tenant makes to avoid interruption or to restore service will not be applied to Rent or any other amount owed under this Lease.\n[Include only if a reconnection fee will be charged; state the exact dollar amount, which may not exceed $10 and must reflect Landlord's average reconnection cost. Tex. Prop. Code §92.008(r).] If electric service is interrupted for nonpayment, Tenant will pay a reconnection fee of ${{reconnection_fee}}. No reconnection fee applies to a deferred payment plan.",
  },
  // Notices & General
  {
    id: "deceased-tenant-contact-tx",
    title: "Contact in the Event of Tenant's Death",
    group: "Notices & General",
    states: ["TX"],
    bodyText:
      "Upon Landlord's written request, Tenant will provide Landlord with the name, address, and telephone number of a person to contact in the event of Tenant's death, and will sign a statement authorizing Landlord, in the event of Tenant's death, to: (a) grant that person access to the property at a reasonable time and in the presence of Landlord or Landlord's agent; (b) allow that person to remove any of Tenant's property found at the property; and (c) refund Tenant's Security Deposit, less lawful deductions, to that person. Tenant may provide this information without Landlord's request.",
  },
  // Default & Termination
  {
    id: "landlord-lien-tx",
    title: "Landlord's Lien",
    group: "Default & Termination",
    states: ["TX"],
    bodyText:
      "[Optional. A contractual landlord's lien is not enforceable unless this entire Section is underlined or printed in conspicuous bold print. Tex. Prop. Code §54.043(a).]\nLANDLORD'S LIEN. Landlord has a lien for unpaid Rent that is due on Tenant's nonexempt personal property in the dwelling or stored by Tenant in a storage room. The lien does not attach to property exempt under Section 54.042 of the Texas Property Code, including wearing apparel; tools, apparatus, and books of a trade or profession; schoolbooks; a family library; family portraits and pictures; one couch, two living room chairs, and a dining table and chairs; beds and bedding; kitchen furniture and utensils; food and foodstuffs; medicine and medical supplies; one automobile and one truck; agricultural implements; children's toys not commonly used by adults; goods Landlord knows are owned by someone other than Tenant or an occupant; and goods Landlord knows are subject to a recorded chattel mortgage or financing agreement. Landlord may seize nonexempt property only if seizure can be accomplished without a breach of the peace, and will immediately leave in a conspicuous place in the dwelling a written notice of entry and an itemized list of the items removed, stating the amount of delinquent Rent, the name, address, and telephone number of the person Tenant may contact about the amount owed, and that the property will be promptly returned on full payment of the delinquent Rent. Tenant will pay reasonable charges for packing, removing, and storing seized property. Landlord may sell seized property after giving Tenant written notice by both first class mail and certified mail, return receipt requested, at Tenant's last known address, not later than the 30th day before the sale, as required by Section 54.045. Tenant may redeem the property at any time before sale by paying all delinquent Rent and reasonable packing, moving, storage, and sale costs.",
  },
  // Notices & General
  {
    id: "electronic-notice-consent-tx",
    title: "Electronic Delivery of Eviction Notices",
    group: "Notices & General",
    states: ["TX"],
    bodyText:
      "[Optional. Tex. Prop. Code §24.005(f-3)(4).] Tenant agrees that a notice to vacate or a notice to pay rent or vacate may be delivered to Tenant by e-mail at {{tenant_email}}, in addition to any other method permitted by law.",
  },
  // Default & Termination
  {
    id: "notice-to-vacate-period-tx",
    title: "Notice to Vacate Period",
    group: "Default & Termination",
    states: ["TX"],
    bodyText:
      "[Optional. Without this Section, Texas law requires at least three days' written notice. Tex. Prop. Code §24.005(a).] Before filing an eviction suit because Tenant has defaulted or is holding over beyond the end of the Term, Landlord will give Tenant at least {{notice_to_vacate_days}} day(s) written notice to vacate, or notice to pay Rent or vacate where the law requires that form. A notice to vacate for holding over will also comply with any notice required to terminate the tenancy.",
  },
  // Parking & Storage
  {
    id: "parking-vehicle-rules-tx",
    title: "Vehicle Rules and Towing",
    group: "Parking & Storage",
    states: ["TX"],
    supersedes: "parking-vehicle-rules",
    bodyText:
      "[In a multiunit complex, this text is part of the Parking Rules paragraph and must appear under its required heading. Tex. Prop. Code §92.0131(c); see parking-rules-tx.]\nOnly operable, currently registered passenger vehicles may be parked at the property. Commercial vehicles, recreational vehicles, oversized vehicles, and semitrailers, trailers, and truck-tractors are not permitted without Landlord's prior written consent. As a condition of parking, Landlord may require Tenant to provide the make, model, color, year, license number, and state of registration of each vehicle, and may issue parking tags, decals, or access cards, the cost of which may be charged to Tenant. Landlord may have an unauthorized vehicle towed at the vehicle owner's or operator's expense only as permitted by Chapter 2308 of the Texas Occupations Code, including its sign and notice requirements.\n[Apartment complex:] Landlord will not have a vehicle towed merely because it does not display an unexpired license plate or registration insignia unless Landlord first gives the vehicle's owner or operator at least 10 days' written notice stating that the vehicle does not display an unexpired license plate or registration insignia, that the vehicle will be towed at the owner's or operator's expense if it does not display one, and a telephone number answered 24 hours a day to locate the vehicle. The notice will be delivered in person, sent by certified mail, return receipt requested, or attached to the vehicle's front windshield or driver's side window (or, if the vehicle has neither, to a conspicuous part of the vehicle).\nVehicle repairs are not permitted at the property except minor emergency repairs necessary to move the vehicle, and vehicles may be washed only in areas Landlord designates, if any.",
  },
  // Disclosures
  {
    id: "electric-submeter-disclosure-tx",
    title: "Submetered Electricity",
    group: "Disclosures",
    states: ["TX"],
    bodyText:
      "[Include only if Landlord submeters electricity to the dwelling in an apartment house of more than five units, a condominium, or a mobile home park. At the time this Lease is signed, Landlord must give Tenant a copy of 16 Tex. Admin. Code §25.142 or a narrative summary approved by the Public Utility Commission. 16 Tex. Admin. Code §25.142(d).]\nSUBMETERED ELECTRICITY. The dwelling is submetered for electricity, and Landlord will issue bills to Tenant for electricity measured by the submeter. Electrical consumption charges for all common areas and common facilities are the responsibility of Landlord and not of Tenant. Any dispute relating to the computation of Tenant's bill or the accuracy of the submetering device will be between Tenant and Landlord.\n[Optional. No late penalty may be charged unless this sentence states the exact dollar or percentage amount, not more than 5 percent. 16 Tex. Admin. Code §25.142(d)(1)(F)(i).] If a submetered electric bill is delinquent, Tenant will pay a one-time late penalty of {{electric_late_penalty}}.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-nj",
    title: "Security Deposit: Amount, Use and Return",
    group: "Security Deposit",
    states: ["NJ"],
    supersedes: "security-deposit-return",
    bodyText:
      "Tenant will pay a Security Deposit of {{security_deposit}}, which will not exceed one and one-half times one month's Rent. If Landlord later requires additional security, the additional amount collected in any year will not exceed 10 percent of the then-current Security Deposit. Landlord may use the Security Deposit only for charges permitted by this Lease, including unpaid Rent and damage beyond ordinary wear and tear, and will make no deduction from it while Tenant remains in possession of the property. Within 30 days after this Lease terminates, Landlord will return the Security Deposit plus the interest earned on it, less any lawful charges, by personal delivery or by registered or certified mail, with an itemized statement of the interest and of each deduction. If Tenant is displaced by fire, flood, condemnation or evacuation as described in N.J.S.A. 46:8-21.1, or ends this Lease as a victim of domestic violence under N.J.S.A. 46:8-9.6, Landlord will make the net Security Deposit available on the shorter timetable that statute requires. Any Lease provision waiving Tenant's rights under the New Jersey Rent Security Deposit Act is void.",
  },
  // Rent & Payment
  {
    id: "late-fee-nj",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["NJ"],
    supersedes: "late-fee",
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. If Rent is due on the first day of the month and any Tenant is a senior citizen receiving Social Security Old Age benefits, Railroad Retirement or another governmental pension in lieu of Social Security Old Age benefits, or receives Social Security Disability Benefits, Supplemental Security Income or Work First New Jersey benefits, no late charge will be made until after a grace period of five business days (excluding Saturdays, Sundays and State or federal holidays). Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  // Tenant Responsibilities
  {
    id: "acceptable-payment-methods-nj",
    title: "Acceptable Payment Methods",
    group: "Tenant Responsibilities",
    states: ["NJ"],
    supersedes: "acceptable-payment-methods",
    bodyText:
      "Rent and other amounts due under this Lease may be paid by any of the following methods: [list accepted payment methods here, which must include at least one method that is not an electronic funds transfer, e.g. check or money order]. Landlord will not require Tenant to pay by electronic funds transfer, including automatic recurring transfers. For each cash payment, Landlord will give Tenant a printed or emailed receipt stating the amount, the purpose, the date received, the printed or typed names of Landlord and Tenant, and who accepted the payment. If a warrant for removal has been posted or a lockout executed for nonpayment, Landlord will accept payment of all Rent due within the following three business days by cash, certified check or money order, or from a government rental assistance program or bona fide charitable organization, and will give Tenant a dated receipt. Landlord may change the accepted methods on reasonable written notice, consistent with this Section.",
  },
  // Default & Termination
  {
    id: "holdover-nj",
    title: "Holdover",
    group: "Default & Termination",
    states: ["NJ"],
    supersedes: "holdover",
    bodyText:
      "If Tenant remains in possession after the end of the Term and Landlord accepts Rent, the tenancy will continue from month to month on the terms of this Lease unless the parties agree otherwise. Where the New Jersey Anti-Eviction Act (N.J.S.A. 2A:18-61.1 et seq.) applies to the property, the end of the Term does not by itself end Tenant's right to remain, and Tenant may be removed only for good cause established under that Act. If Tenant gives Landlord written notice of Tenant's intention to vacate on a stated date and does not vacate on that date, Tenant will pay double the Rent from that date for as long as Tenant remains, to the extent N.J.S.A. 2A:42-5 applies. Where the Anti-Eviction Act does not apply and Tenant willfully remains after the Term has ended and after Landlord's written demand for possession, Tenant will be liable for double the yearly value of the property for the period Tenant remains, as provided in N.J.S.A. 2A:42-6.",
  },
  {
    id: "surrender-end-of-term-nj",
    title: "Surrender of Property",
    group: "Default & Termination",
    states: ["NJ"],
    supersedes: "surrender-end-of-term",
    bodyText:
      "When Tenant's tenancy ends, whether because Tenant gives notice and vacates, Landlord and Tenant agree to end it, or a court enters a judgment for possession that is lawfully executed, Tenant will surrender possession of the property and return all keys to Landlord. The property will be left in the same condition as at the start of the Term, except for ordinary wear and tear, and free of Tenant's personal property. If Tenant leaves personal property behind after a warrant for removal has been executed or after Tenant has given written notice of voluntarily giving up possession, Landlord will handle it only as N.J.S.A. 2A:18-72 through 2A:18-84 allow: Landlord will first send Tenant written notice, will store the property with reasonable care, and will not sell or dispose of it until at least 30 days after the notice is delivered (75 days for a manufactured or mobile home). Tenant may reclaim the property within that time without paying any unpaid Rent, but must reimburse Landlord's reasonable storage and removal costs.",
  },
  // Pets
  {
    id: "pet-policy-nj",
    title: "Pet Policy",
    group: "Pets",
    states: ["NJ"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern. If the property is a dwelling unit in a senior citizen housing project as defined in N.J.S.A. 2A:42-103, a senior citizen tenant may, on written notice to Landlord, keep a domesticated animal, subject to Landlord's reasonable written rules on the care and maintenance of animals, and Landlord will not require that the animal be spayed or neutered. Nothing in this Section limits the rights of a person with a disability to keep a service or assistance animal.",
  },
  // Disclosures
  {
    id: "window-guard-notice-nj",
    title: "Window Guard Notice",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "[BUILDER: print this Section in prominent boldface type.] The owner (landlord) is required by law to provide, install and maintain window guards in the apartment if a child or children 10 years of age or younger is, or will be, living in the apartment or is, or will be, regularly present there for a substantial period of time if the tenant gives the owner (landlord) a written request that the window guards be installed. The owner (landlord) is also required, upon the written request of the tenant, to provide, install and maintain window guards in the hallways to which persons in the tenant's unit have access without having to go out of the building. If the building is a condominium, cooperative or mutual housing building, the owner (landlord) of the apartment is responsible for installing and maintaining window guards in the apartment and the association is responsible for installing and maintaining window guards in hallway windows. Window guards are only required to be provided in first floor windows where the window sill is more than six feet above grade or there are other hazardous conditions that make installation of window guards necessary to protect the safety of children.",
  },
  {
    id: "flood-insurance-lease-notice-nj",
    title: "Renter Flood Insurance Notice",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "Flood insurance may be available to renters through FEMA's National Flood Insurance Program to cover your personal property and contents in the event of a flood. A standard renter's insurance policy does not typically cover flood damage. You are encouraged to examine your policy to determine whether you are covered.",
  },
  {
    id: "flood-risk-disclosure-nj",
    title: "Flood Risk Disclosure Rider",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "[BUILDER: deliver as a separate rider, before the lease or renewal is signed, individually signed by Tenant, in type no smaller than 12 point, reproducing the Department of Community Affairs model form below.] FLOOD RISK NOTICE. This Notice is provided pursuant to N.J.S.A. 46:8-50, and is applicable to the rental property located at: {{property_address}}; {{municipality}}, {{county}}, Block {{block}}, Lot {{lot}}. 1. Is any or all of the rental property located wholly or partially in the Special Flood Hazard Area (\"100-year/1% Annual Chance Flood Plain\") according to FEMA's current flood insurance rate maps for the leased premises area? Yes, effective map ___ Yes, preliminary map ___ No ___ 2. Is any or all of the rental property located wholly or partially in a Moderate Risk Flood Hazard Area (\"500-year/0.2% Annual Chance Flood Plain\") according to FEMA's current flood insurance rate maps for the leased premises area? Yes, effective map ___ Yes, preliminary map ___ No ___ 3. Has the rental premises or any portion of the parking areas of the real property containing the rental premises subject to the lease ever experienced any flood damage, water seepage, or pooled water due to a natural flood event? Yes ___ No ___ Unknown ___ If the answer is Yes, how many times has such an event occurred: ___ If the answer is Yes, describe each such event, including date of event: ___ Tenant: ___ Date: ___ Landlord: ___ Date: ___ NOTE: Flood risks in New Jersey are growing due to the effects of climate change. Coastal and inland areas may experience significant flooding now and in the near future, including in places that were not previously known to flood. For example, by 2050, it is likely that sea-level rise will meet or exceed 2.1 feet above 2000 levels, placing over 40,000 New Jersey properties at risk of permanent coastal flooding. In addition, precipitation intensity in New Jersey is increasing at levels significantly above historic trends, placing inland properties at greater risk of flash flooding. These and other coastal and inland flood risks are expected to increase within the life of a typical mortgage originated in or after 2020. To learn more about these impacts, including the flood risk to your property, visit flooddisclosure.nj.gov. To learn more about how to prepare for a flood emergency, visit nj.gov/njoem/planprepare/floods. FLOOD INSURANCE: Flood insurance may be available to renters through FEMA's National Flood Insurance Program to cover your personal property and contents in the event of a flood. A standard renter's insurance policy does not typically cover flood damage. You are encouraged to examine your policy to determine whether you are covered.",
  },
  {
    id: "truth-in-renting-statement-nj",
    title: "Truth in Renting Statement",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "Tenant acknowledges receiving, at or before the time Tenant takes occupancy, a copy of the current Truth in Renting statement of tenants' and landlords' rights and responsibilities published by the New Jersey Department of Community Affairs. Landlord will keep a current copy posted in a prominent location accessible to tenants.",
  },
  {
    id: "landlord-registration-disclosure-nj",
    title: "Landlord Registration Statement",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "Tenant acknowledges receiving, at the creation of this tenancy, a copy of the certificate of registration Landlord has filed under N.J.S.A. 46:8-28 identifying the record owner, managing agent, emergency contact and other required information. Landlord will give Tenant a copy of any amended certificate within seven days after it is filed or validated. Landlord also advises Tenant that the municipal clerk maintains a list of residents who ask to be identified as needing special assistance in an emergency, and has given Tenant a notice explaining how to be added to that list.",
  },
  {
    id: "lead-safe-certification-nj",
    title: "Lead-Safe Certification Exhibit",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "[BUILDER: attach a copy of the valid lead-safe certification to this Lease as an exhibit.] A copy of the lead-safe certification for the property, issued under N.J.S.A. 52:27D-437.16, is attached to this Lease as an exhibit, and Tenant acknowledges receiving it.",
  },
  {
    id: "conversion-statement-nj",
    title: "Condominium or Cooperative Conversion Statement",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "[BUILDER: this must be the FIRST clause of the lease, printed in capital letters as shown, and also given to the tenant as a separate written statement at application and at signing.] STATEMENT: THIS BUILDING (PARK) IS BEING CONVERTED TO OR IS A CONDOMINIUM OR COOPERATIVE (OR FEE SIMPLE OWNERSHIP OF THE SEVERAL DWELLING UNITS OR PARK SITES). YOUR TENANCY CAN BE TERMINATED UPON 60 DAYS' NOTICE IF YOUR APARTMENT (PARK SITE) IS SOLD TO A BUYER WHO SEEKS TO PERSONALLY OCCUPY IT. IF YOU MOVE OUT AS A RESULT OF RECEIVING SUCH A NOTICE, AND THE LANDLORD ARBITRARILY FAILS TO COMPLETE THE SALE, THE LANDLORD SHALL BE LIABLE FOR TREBLE DAMAGES AND COURT COSTS.",
  },
  {
    id: "rent-control-exemption-notice-nj",
    title: "Rent Control Exemption Notice",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "The building in which the property is located is a newly constructed multiple dwelling that is exempt, under N.J.S.A. 2A:42-84.1 et seq., from municipal rent control, rent leveling or rent stabilization ordinances for the remainder of the exemption period, which ends on {{rent_control_exemption_end_date}}.",
  },
  // Landlord Responsibilities
  {
    id: "tenant-supplied-heat-nj",
    title: "Tenant-Supplied Heat",
    group: "Landlord Responsibilities",
    states: ["NJ"],
    bodyText:
      "Tenant agrees in writing to supply heat to the property. Landlord represents that the property is served by its own exclusive heating equipment, the energy for which is separately metered and billed to Tenant. Landlord remains responsible for maintaining the heating system in good operating condition.",
  },
  // Default & Termination
  {
    id: "right-of-reentry-nj",
    title: "Reservation of Right of Reentry",
    group: "Default & Termination",
    states: ["NJ"],
    bodyText:
      "Landlord reserves a right of reentry for Tenant's substantial violation or breach of any covenant or agreement in this Lease. Landlord will exercise this right only through the court procedures, notices and grounds required by New Jersey law, including N.J.S.A. 2A:18-61.1 et seq., and never by self-help.",
  },
  {
    id: "default-by-tenant-nj",
    title: "Default by Tenant",
    group: "Default & Termination",
    states: ["NJ"],
    supersedes: "default-by-tenant",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not cure the failure within the time period specified by applicable law after receiving written notice from Landlord. Tenant will also be in default if Tenant fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. To the extent permitted under applicable law, the prevailing party may recover from the other party court costs and reasonable attorneys' fees and expenses incurred in connection with any legal proceedings related to this Lease. [BUILDER: print the next sentence in bold type at least one point larger than the rest of this Section, and never smaller than 11 point.] IF THE TENANT IS SUCCESSFUL IN ANY ACTION OR SUMMARY PROCEEDING ARISING OUT OF THIS LEASE, THE TENANT SHALL RECOVER ATTORNEY'S FEES OR EXPENSES, OR BOTH FROM THE LANDLORD TO THE SAME EXTENT THE LANDLORD IS ENTITLED TO RECOVER ATTORNEY'S FEES OR EXPENSES, OR BOTH AS PROVIDED IN THIS LEASE.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-nj",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["NJ"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service dog, guide dog, or other assistance animal that Tenant or an Occupant needs because of a disability is not considered a pet under this Lease, and any pet prohibition, breed, weight, or size restriction stated elsewhere in this Lease does not apply to it. This includes a service or guide dog that has retired from service and is kept as a pet by the person it served. Landlord will not charge a pet deposit, an additional security deposit, pet rent, or any other extra compensation for a service dog, guide dog, or assistance animal. If the disability and the disability-related need for an assistance animal are not readily apparent, Landlord may request reliable documentation confirming the need for the accommodation, to the extent permitted by applicable law. Tenant remains responsible for any damage to the property caused by the animal.",
  },
  // Rent & Payment
  {
    id: "returned-payments-nj",
    title: "Returned Payments",
    group: "Rent & Payment",
    states: ["NJ"],
    supersedes: "returned-payments",
    bodyText:
      "If any payment of Rent is returned for insufficient funds or otherwise fails, Landlord may require that the payment be replaced by cash, a cashier's check, a certified check, or a money order, and Tenant will pay a returned-payment fee of {{returned_payment_fee}}. If more than two of Tenant's payments during the Term are returned for insufficient funds, Landlord may require all future payments of Rent to be made by cashier's check, certified check, or money order. This Section does not limit any remedy New Jersey law gives Landlord for a dishonored check or electronic funds transfer.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-fl",
    title: "Security Deposit: Holding and Return",
    group: "Security Deposit",
    states: ["FL"],
    supersedes: "security-deposit-return",
    bodyText:
      "Landlord will hold the Security Deposit and any advance rent as Florida law requires, by the following method: {{deposit_holding_method}} [choose one: (a) in a separate non-interest-bearing account in a Florida financial institution; (b) in a separate interest-bearing account in a Florida financial institution, in which case Tenant will receive interest of at least 75 percent of the annualized average interest rate paid on the account, or 5 percent per year simple interest, as Landlord elects; or (c) by posting the surety bond Fla. Stat. §83.49(1)(c) describes, in which case Landlord will pay Tenant interest of 5 percent per year simple interest]. Landlord will not commingle these funds with Landlord's other funds, or pledge or otherwise use them, until they are actually due to Landlord. Where interest is owed, Landlord will pay it to Tenant, or credit it against the current month's Rent, at least once a year; no interest is owed to a Tenant who wrongfully terminates the tenancy before the end of the Term. If Landlord does not intend to impose a claim on the Security Deposit, Landlord will return it, with any interest owed, within 15 days after this Lease terminates and Tenant vacates. If Landlord intends to impose a claim, Landlord will, within 30 days after this Lease terminates, give Tenant written notice of the claim and the reason for it, by certified mail to Tenant's last known mailing address or by e-mail if the parties have signed an electronic-notice addendum under Fla. Stat. §83.505, in the form Fla. Stat. §83.49(3)(a) prescribes. If Landlord does not give that notice within 30 days, Landlord forfeits the right to impose a claim on the Security Deposit and may not set off against it, but may sue for damages after returning it. Tenant may object to the claim in writing, at the address stated in the notice, within 15 days after receiving it. If Tenant does not object in time, Landlord may deduct the claim and will send Tenant the balance within 30 days after the date of the notice; Tenant's failure to object does not waive Tenant's right to sue for damages. In any lawsuit over the Security Deposit, the prevailing party may recover court costs and a reasonable attorney's fee. If Tenant vacates before the end of the Term, or vacates a periodic tenancy, Tenant will give Landlord at least 7 days' written notice by certified mail or personal delivery before vacating, including an address where Tenant can be reached. If Tenant does not, Landlord is relieved of the notice requirement above, but Tenant keeps any right Tenant has to the Security Deposit. A renewal of this Lease is a new rental agreement, and any Security Deposit carried forward is a new security deposit. If the property is sold or the rental agent changes, the Security Deposit, any advance rent and any earned interest will be transferred to the new owner or agent with an accounting of the amounts credited to Tenant.",
  },
  {
    id: "security-deposit-notice-fl",
    title: "Security Deposit and Advance Rent Notice",
    group: "Security Deposit",
    states: ["FL"],
    bodyText:
      "[Required when Landlord rents five or more dwelling units. This notice may be given in this Lease or in a separate written notice within 30 days after Landlord receives the Security Deposit or advance rent.] Landlord is holding Tenant's Security Deposit of {{security_deposit}} and advance rent of {{advance_rent}} {{deposit_location_statement}} [state the name and address of the Florida financial institution where the funds are held, or state that Landlord has posted a surety bond as provided by law]. Tenant {{deposit_interest_statement}} [state 'is' or 'is not'] entitled to interest on the deposit. If Landlord later changes the manner or location in which the funds are held, Landlord will notify Tenant within 30 days after the change.\n\nYOUR RENTAL AGREEMENT REQUIRES PAYMENT OF CERTAIN DEPOSITS. THE LANDLORD MAY TRANSFER ADVANCE RENTS TO THE LANDLORD'S ACCOUNT AS THEY ARE DUE AND WITHOUT NOTICE. WHEN YOU MOVE OUT, YOU MUST GIVE THE LANDLORD YOUR NEW ADDRESS SO THAT THE LANDLORD CAN SEND YOU NOTICES REGARDING YOUR DEPOSIT. THE LANDLORD MUST PROVIDE YOU WRITTEN NOTICE IN PERSON, BY MAIL, OR BY E-MAIL IN ACCORDANCE WITH SECTION 83.505, FLORIDA STATUTES, WITHIN 30 DAYS AFTER YOU MOVE OUT, OF THE LANDLORD'S INTENT TO IMPOSE A CLAIM AGAINST THE DEPOSIT. IF YOU DO NOT REPLY TO THE LANDLORD STATING YOUR OBJECTION TO THE CLAIM WITHIN 15 DAYS AFTER RECEIPT OF THE LANDLORD'S WRITTEN NOTICE, THE LANDLORD WILL COLLECT THE CLAIM AND MUST MAIL YOU THE REMAINING DEPOSIT, IF ANY.\n\nIF THE LANDLORD FAILS TO TIMELY PROVIDE YOU NOTICE, THE LANDLORD MUST RETURN THE DEPOSIT BUT MAY LATER FILE A LAWSUIT AGAINST YOU FOR DAMAGES. IF YOU FAIL TO TIMELY OBJECT TO A CLAIM, THE LANDLORD MAY COLLECT FROM THE DEPOSIT, BUT YOU MAY LATER FILE A LAWSUIT CLAIMING A REFUND.\n\nYOU SHOULD ATTEMPT TO INFORMALLY RESOLVE ANY DISPUTE BEFORE FILING A LAWSUIT. GENERALLY, THE PARTY IN WHOSE FAVOR A JUDGMENT IS RENDERED WILL BE AWARDED COSTS AND ATTORNEY FEES PAYABLE BY THE LOSING PARTY.\n\nTHIS DISCLOSURE IS BASIC. PLEASE REFER TO PART II OF CHAPTER 83, FLORIDA STATUTES, TO DETERMINE YOUR LEGAL RIGHTS AND OBLIGATIONS.",
  },
  {
    id: "fee-in-lieu-of-deposit-fl",
    title: "Fee in Lieu of Security Deposit",
    group: "Security Deposit",
    states: ["FL"],
    bodyText:
      "[Optional. Use only if Landlord offers, and Tenant chooses, a fee in lieu of a security deposit. This agreement must be signed by Landlord or Landlord's agent and by Tenant. If Landlord offers this option, Landlord must offer it to all new tenants on the same premises until Landlord ends the option for all new rental agreements, and may not use a prospective tenant's choice to approve or deny an application.] Instead of paying the Security Deposit of {{security_deposit}} stated in this Lease, Tenant agrees to pay Landlord a fee of {{fee_in_lieu_amount}}, which will not increase during the Term, payable {{fee_in_lieu_schedule}} [monthly on the date Rent is due, or on the schedule stated here], by {{fee_in_lieu_method}}. The fee {{fee_in_lieu_refundable}} [is nonrefundable / state refund terms]. Landlord notifies Tenant that: (a) Tenant may choose to pay the Security Deposit instead of the fee at any time; (b) Tenant may at any time end this agreement and instead pay the Security Deposit stated in this Lease; (c) Tenant may choose to pay the Security Deposit in monthly installments of {{deposit_installment_amount}} while participating in the fee program; (d) the following additional charges apply to options (a) and (b): {{fee_in_lieu_option_charges}} [state 'none' if none]; (e) the fee is only for securing occupancy without paying a required security deposit; (f) the fee does not limit or change Tenant's obligation to pay Rent and fees under this Lease or the cost of repairing damage beyond normal wear and tear; and (g) if Landlord uses any part of the fee to buy insurance, Tenant is not insured, is not a beneficiary of that coverage, and the insurance does not change those obligations. If Tenant defaults in paying the fee, Tenant must pay the Security Deposit stated in this Lease within {{fee_in_lieu_default_days}} days after Landlord's written demand; if Tenant pays it on time, the default will not adversely affect Tenant's credit rating. Tenant may end this agreement at any time by paying the Security Deposit stated in this Lease, and if Tenant does so, neither the ending of this agreement nor any earlier default in paying the fee will adversely affect Tenant's credit report. Within 30 days after the tenancy ends, Landlord will notify Tenant of any unpaid rent, fees, repair costs or other amounts due, and will not submit a claim for them to an insurer until at least 15 days after giving that notice.\n\nFEE IN LIEU OF SECURITY DEPOSIT\n\nTHIS FEE IS NOT A SECURITY DEPOSIT AND PAYMENT OF THE FEE DOES NOT ABSOLVE THE TENANT OF ANY OBLIGATIONS UNDER THE RENTAL AGREEMENT, INCLUDING THE OBLIGATION TO PAY RENT AS IT BECOMES DUE AND ANY COSTS AND DAMAGES BEYOND NORMAL WEAR AND TEAR WHICH THE TENANT OR HIS OR HER GUESTS MAY CAUSE.\n\nTHE TENANT MAY TERMINATE THIS AGREEMENT AT ANY TIME AND STOP PAYING THE FEE AND INSTEAD PAY THE SECURITY DEPOSIT AS PROVIDED IN SECTION 83.491, FLORIDA STATUTES.\n\nTHIS AGREEMENT HAS BEEN ENTERED INTO VOLUNTARILY BY BOTH PARTIES AND THE TENANT AGREES TO PAY THE LANDLORD A FEE IN LIEU OF A SECURITY DEPOSIT AS AUTHORIZED UNDER SECTION 83.491, FLORIDA STATUTES. IF THE LANDLORD USES ANY PORTION OF THE TENANT'S FEE TO PURCHASE INSURANCE, THE TENANT IS NOT INSURED AND IS NOT A BENEFICIARY OF SUCH COVERAGE, AND THE INSURANCE DOES NOT CHANGE THE TENANT'S FINANCIAL OBLIGATIONS UNDER THE RENTAL AGREEMENT.\n\nTHIS DISCLOSURE IS BASIC. PLEASE REFER TO PART II OF CHAPTER 83, FLORIDA STATUTES, TO DETERMINE YOUR LEGAL RIGHTS AND OBLIGATIONS.",
  },
  // Access & Entry
  {
    id: "landlords-access-fl",
    title: "Landlord's Access to the Property",
    group: "Access & Entry",
    states: ["FL"],
    supersedes: "landlords-access",
    bodyText:
      "Tenant will not unreasonably withhold consent to Landlord's entry into the property from time to time to inspect it; to make necessary or agreed repairs, decorations, alterations or improvements; to supply agreed services; or to show it to prospective or actual purchasers, mortgagees, tenants, workers or contractors. Landlord may enter the property at any time to protect or preserve it. Landlord may enter to make repairs on at least 24 hours' notice to Tenant, between 7:30 a.m. and 8:00 p.m. Landlord may enter for the other purposes listed above with Tenant's consent, in an emergency, when Tenant unreasonably withholds consent, or when Tenant has been absent from the property for a period equal to one-half of the time between Rent payments; however, if the Rent is current and Tenant has notified Landlord of an intended absence, Landlord may enter during that absence only with Tenant's consent or to protect or preserve the property. Except in an emergency or to protect or preserve the property, Landlord will give Tenant at least 24 hours' notice before any entry. Landlord will not abuse this right of access or use it to harass Tenant.",
  },
  // Default & Termination
  {
    id: "early-termination-fl",
    title: "Early Termination",
    group: "Default & Termination",
    states: ["FL"],
    supersedes: "early-termination",
    bodyText:
      "Tenant may terminate this Lease before the end of the Term by giving Landlord at least {{early_termination_notice_days}} days' written notice [not more than 60 days if an early termination fee applies]. If Tenant signed the Early Termination Fee Addendum to this Lease and agreed in it to liquidated damages or an early termination fee, Tenant will pay the amount stated in that Addendum, which does not exceed two months' Rent; Landlord will then not seek Rent beyond the month in which Landlord retakes possession, but may recover Rent and other charges accrued through the end of that month and charges for damage to the property. If Tenant did not agree to liquidated damages or an early termination fee, Landlord may seek damages as provided by law. Landlord may terminate this Lease early only as this Lease's Tenant Default terms and applicable law permit. Nothing in this Section limits any right either party has under applicable law, including a servicemember's right to terminate under Fla. Stat. §83.682 or the Servicemembers Civil Relief Act, Tenant's rights when the property is damaged or destroyed by a casualty or when Landlord fails to maintain it as the law requires, and Tenant's right to terminate after flood damage when a required flood disclosure was not given.",
  },
  {
    id: "early-termination-addendum-fl",
    title: "Early Termination Fee Addendum",
    group: "Default & Termination",
    states: ["FL"],
    bodyText:
      "[Separate addendum to be signed by Tenant at the time this Lease is made. Include only if Landlord offers liquidated damages or an early termination fee. The amount may not exceed two months' Rent.]\n\n☐ I agree, as provided in the rental agreement, to pay ${{early_termination_fee}} (an amount that does not exceed 2 months' rent) as liquidated damages or an early termination fee if I elect to terminate the rental agreement, and the landlord waives the right to seek additional rent beyond the month in which the landlord retakes possession.\n\n☐ I do not agree to liquidated damages or an early termination fee, and I acknowledge that the landlord may seek damages as provided by law.",
  },
  {
    id: "end-of-term-notice-fl",
    title: "Notice Before Vacating at End of Term",
    group: "Default & Termination",
    states: ["FL"],
    bodyText:
      "[Optional.] Tenant will notify Landlord in writing at least {{end_of_term_notice_days}} days [not less than 30 nor more than 60] before the end of the Term if Tenant intends to vacate at the end of the Term. Landlord will notify Tenant, in a manner permitted by Fla. Stat. §83.56(4), at least the same number of days before the end of the Term if this Lease will not be renewed. If Tenant fails to give the required notice before vacating at the end of the Term, Tenant will be liable for liquidated damages of {{end_of_term_liquidated_damages}}, but only if Landlord, no later than 15 days before the notice period begins, has given Tenant written notice, delivered as Fla. Stat. §83.56(4) requires, stating Tenant's obligations under this Section, the date this Lease terminates, and all fees, penalties and other charges that apply.",
  },
  // Notices & General
  {
    id: "electronic-notice-addendum-fl",
    title: "Electronic Delivery of Notices Addendum",
    group: "Notices & General",
    states: ["FL"],
    bodyText:
      "[Separate addendum. Optional. Both parties must sign it and each must give a valid e-mail address for notices to be delivered by e-mail.]\n\nLandlord election:\nNotices from a tenant may contain time-sensitive information about the tenant's housing. The election to receive notices from the tenant by e-mail is voluntary.\n☐ I {{landlord_name}}, the landlord or the landlord's agent, agree to receive notices required by the rental agreement or under part II of chapter 83, Florida Statutes, from the tenant by e-mail. I designate the following e-mail address for receipt of notices from the tenant: {{landlord_email}}.\n☐ I do not agree to receive notices by e-mail.\nI may revoke my agreement to receive notices by e-mail by providing written notice to the tenant which is effective upon delivery of such written notice and does not affect the validity of any notice that was previously sent by e-mail.\nI may update my e-mail address designated for electronic delivery at any time by providing written notice to the tenant specifying the new e-mail address, which takes effect upon delivery of such notice.\n\nTenant election:\nNotices from a landlord may contain time-sensitive information about a tenant's housing. The election to receive notices from the landlord by e-mail is voluntary.\n☐ I {{tenant_name}}, the tenant, agree to receive notices required by the rental agreement or under part II of chapter 83, Florida Statutes, from the landlord by e-mail. I designate the following e-mail address for receipt of notices from the landlord: {{tenant_email}}.\n☐ I do not agree to receive notices by e-mail.\nI may revoke my agreement to receive notices by e-mail by providing written notice to the landlord which is effective upon delivery of such written notice and does not affect the validity of any notice that was previously sent by e-mail.\nI may update my e-mail address designated for electronic delivery at any time by providing written notice to the landlord specifying the new e-mail address, which takes effect upon delivery of such notice.",
  },
  {
    id: "landlord-address-disclosure-fl",
    title: "Landlord's Name and Address",
    group: "Notices & General",
    states: ["FL"],
    bodyText:
      "The name and address of Landlord, or of the person authorized to receive notices and demands on Landlord's behalf, is: {{landlord_notice_name}}, {{landlord_notice_address}}. That person keeps this authority until Tenant is notified otherwise. Notice of any change to this name or address will be delivered to Tenant at the property, or to another address Tenant specifies in writing, or by e-mail if the parties have signed an electronic-notice addendum under Fla. Stat. §83.505.",
  },
  // Pets
  {
    id: "pet-policy-fl",
    title: "Pet Policy",
    group: "Pets",
    states: ["FL"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord. Tenant will pay Landlord a pet deposit, if applicable, and pet rent of {{pet_rent_amount}} per month. Any pet deposit will be held and returned under this Lease's Security Deposit terms. Tenant is responsible for all damage, waste removal, odor, and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms and applicable law permit. This Section does not apply to a service animal or other assistance animal.",
  },
  // Tenant Responsibilities
  {
    id: "flotation-bedding-fl",
    title: "Waterbeds and Flotation Bedding",
    group: "Tenant Responsibilities",
    states: ["FL"],
    bodyText:
      "Tenant may use a flotation bedding system at the property only if it complies with applicable building codes. While any flotation bedding system is at the property, Tenant will carry, in Tenant's own name, flotation insurance as is standard in the industry, in an amount of at least {{flotation_insurance_amount}}, to protect Tenant and the owner against personal injury and property damage to the dwelling units, and the policy will carry a loss payable clause to the owner of the building. Tenant will provide evidence of this coverage on request.",
  },
  // Default & Termination
  {
    id: "casualty-damage-fl",
    title: "Casualty Damage",
    group: "Default & Termination",
    states: ["FL"],
    bodyText:
      "If the property is damaged or destroyed, other than by the wrongful or negligent act of Tenant, so that Tenant's enjoyment of it is substantially impaired, Tenant may terminate this Lease and immediately vacate the property. Tenant may instead vacate the part of the property made unusable by the casualty, in which case Tenant's Rent is reduced by the fair rental value of that part. If this Lease is terminated, Landlord will handle the Security Deposit as this Lease's Security Deposit terms require. Landlord will give Tenant either the opportunity to collect Tenant's belongings from the property when it is safe to do so, or notice of the date by which Tenant will be able to collect them, which will be within a reasonable time.",
  },
  {
    id: "abandoned-property-release-fl",
    title: "Tenant Property After Surrender or Abandonment",
    group: "Default & Termination",
    states: ["FL"],
    bodyText:
      "BY SIGNING THIS RENTAL AGREEMENT, THE TENANT AGREES THAT UPON SURRENDER, ABANDONMENT, OR RECOVERY OF POSSESSION OF THE DWELLING UNIT DUE TO THE DEATH OF THE LAST REMAINING TENANT, AS PROVIDED BY CHAPTER 83, FLORIDA STATUTES, THE LANDLORD SHALL NOT BE LIABLE OR RESPONSIBLE FOR STORAGE OR DISPOSITION OF THE TENANT'S PERSONAL PROPERTY.",
  },
  {
    id: "default-by-tenant-fl",
    title: "Tenant Default",
    group: "Default & Termination",
    states: ["FL"],
    supersedes: "default-by-tenant",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not pay it within 3 days, excluding Saturdays, Sundays and court-observed legal holidays, after delivery of Landlord's written demand for payment of the Rent or possession of the property. Tenant will also be in default if Tenant materially fails to comply with Tenant's maintenance duties under Florida law, a material provision of this Lease, or reasonable rules, other than by failing to pay Rent, and: (a) for noncompliance of a kind Tenant should be given an opportunity to cure, Tenant does not cure it within 7 days after delivery of Landlord's written notice; or (b) for noncompliance of a kind Tenant should not be given an opportunity to cure, such as intentional destruction, damage or misuse of Landlord's or other tenants' property, fraudulent entry of a residential dwelling unit, or a subsequent or continued unreasonable disturbance, or for similar noncompliance repeated within 12 months after Landlord's written warning, Landlord delivers written notice terminating this Lease, in which case Tenant will have 7 days after delivery to vacate. If noncompliance that Tenant was given an opportunity to cure recurs within 12 months after the notice, Landlord may proceed without a further notice. Landlord will give these notices in the form and manner Florida law requires. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under applicable law, including terminating this Lease, regaining possession of the property through the courts, and recovering unpaid Rent, late fees, and reasonable costs and expenses, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law. In any lawsuit to enforce this Lease or Florida's Residential Landlord and Tenant Act, the prevailing party may recover reasonable attorney's fees and court costs from the other party.",
  },
  // Disclosures
  {
    id: "radon-disclosure-fl",
    title: "Radon Gas Notification",
    group: "Disclosures",
    states: ["FL"],
    bodyText:
      "RADON GAS: Radon is a naturally occurring radioactive gas that, when it has accumulated in a building in sufficient quantities, may present health risks to persons who are exposed to it over time. Levels of radon that exceed federal and state guidelines have been found in buildings in Florida. Additional information regarding radon and radon testing may be obtained from your county health department.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-fl",
    title: "Service and Emotional Support Animals",
    group: "Pets",
    states: ["FL"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or emotional support animal that Tenant or an Occupant with a disability needs is not a pet under this Lease, regardless of any pet policy, breed, weight or size restriction stated elsewhere in this Lease, and Landlord will not charge a pet deposit, pet rent, pet fee or any other extra compensation for it. Tenant remains liable for any damage the animal does to the premises or to another person on the premises. For a service animal, meaning an animal trained to do work or perform tasks directly related to a person's disability, Landlord may request proof of compliance with vaccination requirements. An emotional support animal may be kept on Tenant's request and Landlord's approval of it as a reasonable accommodation. If the disability, or the disability-related need for the particular emotional support animal, is not readily apparent, Landlord may request reliable information that reasonably supports it, and, if more than one animal is requested, information about the need for each one; Landlord may also require proof of compliance with state and local licensing and vaccination requirements for each animal. Landlord will not request information disclosing the diagnosis or severity of a disability or any medical records, will not require a specific form or a notarized statement, and will not deny a request solely because Tenant did not follow Landlord's usual process. An emotional support animal registration, certificate, identification card or patch obtained from the Internet is not by itself enough. Landlord may deny an emotional support animal that poses a direct threat to the safety or health of others, or a direct threat of physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  // Rules & Regulations
  {
    id: "common-area-use-fl",
    title: "Property and Common Area Use",
    group: "Rules & Regulations",
    states: ["FL"],
    supersedes: "common-area-use",
    bodyText:
      "Tenant will not, without Landlord's written consent, drill holes, use nails, hooks, or screws on the property, or fasten anything to its fixtures, appliances, or interior or exterior surfaces. Tenant will comply with any weight restrictions on balconies or porches and will not use them to store personal belongings without Landlord's consent. Tenant will not keep water-filled furniture other than a flotation bedding system, or any item (such as a piano or safe) whose weight Landlord has not agreed is reasonable for the floor, at the property without Landlord's prior written consent. Tenant may use a flotation bedding system as this Lease's Waterbeds and Flotation Bedding terms provide. Tenant will not burn wax candles at the property. Tenant will not post or display any sign, banner, or advertisement visible from outside the property without Landlord's consent. Nothing in this Section restricts any display that applicable law entitles Tenant to make, such as the display of the flag of the United States or of religious or cultural items, subject to any lawful limits on its size, placement, and manner.",
  },
  // Landlord Responsibilities
  {
    id: "maintenance-allocation-fl",
    title: "Tenant-Maintained Items (Single-Family Home or Duplex)",
    group: "Landlord Responsibilities",
    states: ["FL"],
    bodyText:
      "[Optional. Use only for a single-family home or duplex.] Notwithstanding this Lease's Maintenance & Repairs terms, Landlord and Tenant agree in writing that Tenant, at Tenant's expense, will be responsible for the following items: {{tenant_maintained_items}} [check each that applies: ☐ lawn and landscaping care; ☐ pest control for rats, mice, roaches, ants and bedbugs (not wood-destroying organisms such as termites); ☐ replacing heating and air-conditioning filters on the manufacturer's schedule; ☐ replacing smoke detector batteries after the start of the Term; ☐ clearing drain and toilet clogs; ☐ pool or spa care; ☐ garbage removal and outside receptacles; ☐ replacing light bulbs; ☐ repairing screen damage after the start of the Term]. Tenant will perform these items promptly, in a workmanlike manner, and in compliance with applicable codes. Landlord remains responsible for every item not checked above, and in all cases for the roof, windows, doors, floors, steps, porches, exterior walls, foundation and other structural components; the plumbing, electrical, heating, air-conditioning and water-heating systems (other than filters); installing working smoke detection devices at the start of the Term; and compliance with applicable building, housing and health codes. Tenant is not responsible under this Section for any condition caused by Landlord, by a failure of those systems or components, or by a casualty not caused by Tenant.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-az",
    title: "Security Deposit: Application and Return",
    group: "Security Deposit",
    states: ["AZ"],
    supersedes: "security-deposit-return",
    bodyText:
      "When the tenancy ends, Landlord may apply property or money held as prepaid Rent and security to all Rent due and, subject to Landlord's duty to mitigate, to all charges specified in this Lease or provided by the Arizona Residential Landlord and Tenant Act, including damages Landlord has suffered because Tenant did not meet Tenant's maintenance obligations. Within 14 days, excluding Saturdays, Sundays and other legal holidays, after the tenancy ends, Tenant delivers possession (returns the keys and vacates) and Tenant demands return of the deposit, Landlord will provide Tenant an itemized list of all deductions together with the amount due to Tenant, if any. Unless Tenant makes other arrangements in writing, Landlord will mail the itemized list and any amount due by first class mail to Tenant's last known place of residence. Tenant is asked to give Landlord a forwarding address in writing, and may include Tenant's demand for return of the deposit with it. If Tenant does not dispute the deductions or the amount due within 60 days after the itemized list and amount due are mailed, the amount stated is final and any further claims by Tenant are waived. At the end of the tenancy all refundable deposits will be refunded as provided in this Section. Whoever holds Landlord's interest in the property when the tenancy ends is bound by this Section.",
  },
  {
    id: "security-deposit-cap-az",
    title: "Limit on Total Security",
    group: "Security Deposit",
    states: ["AZ"],
    bodyText:
      "The total of all security, however named, that Landlord demands or receives under this Lease, including the Security Deposit, any refundable pet or other deposit, and any prepaid Rent (other than Rent for the first rental period), will not exceed one and one-half months' Monthly Rent. This limit does not prevent Tenant from voluntarily paying more than one and one-half months' Rent in advance. A reasonable charge for cleaning or redecorating is not security.",
  },
  {
    id: "nonrefundable-fees-az",
    title: "Nonrefundable Fees and Deposits",
    group: "Security Deposit",
    states: ["AZ"],
    bodyText:
      "The following fees or deposits are nonrefundable, and the purpose of each is stated here: {{nonrefundable_fees_and_purposes}} [list each nonrefundable fee or deposit, its amount and its purpose, e.g. a cleaning fee of $__ to clean the property after Tenant moves out; or state 'None']. Any fee or deposit not designated as nonrefundable in this Section is refundable.",
  },
  // Landlord Responsibilities
  {
    id: "move-in-inspection-az",
    title: "Move-In Form and Move-Out Inspection",
    group: "Landlord Responsibilities",
    states: ["AZ"],
    bodyText:
      "At move-in, Landlord will give Tenant a signed copy of this Lease and a move-in form on which Tenant may specify any existing damage to the property. Tenant may be present at Landlord's move-out inspection, and if Tenant asks, Landlord will tell Tenant when the move-out inspection will occur. Landlord is not required to conduct a joint move-out inspection with Tenant if Tenant is being evicted for a material and irreparable breach and Landlord has reasonable cause to fear violence or intimidation by Tenant.",
  },
  // Access & Entry
  {
    id: "landlords-access-az",
    title: "Landlord's Right of Entry",
    group: "Access & Entry",
    states: ["AZ"],
    supersedes: "landlords-access",
    bodyText:
      "Tenant will not unreasonably withhold consent to Landlord's entry into the property to inspect it; to make necessary or agreed repairs, decorations, alterations or improvements; to supply necessary or agreed services; or to show it to prospective or actual purchasers, mortgagees, tenants, workers or contractors. Except in an emergency or where it is impracticable to do so, Landlord will give Tenant at least two days' notice of Landlord's intent to enter and will enter only at reasonable times. Landlord may enter without Tenant's consent in an emergency. When Tenant asks Landlord in writing for maintenance or a repair, that request is Tenant's permission for Landlord to enter the property for the sole purpose of acting on the request, and Tenant waives any separate notice of that entry. Landlord has no other right of access except by court order, to do work Tenant has failed to do after notice as Arizona law permits, under Arizona's abandonment procedure, or if Tenant has abandoned or surrendered the property. Landlord will not abuse this right of access or use it to harass Tenant.",
  },
  // Default & Termination
  {
    id: "possession-delay-az",
    title: "Failure to Deliver Possession",
    group: "Default & Termination",
    states: ["AZ"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord fails to deliver physical possession of the property to Tenant at the start of the Term, Rent abates until possession is delivered, and Tenant may either: (a) terminate this Lease on at least 5 days' written notice to Landlord, in which case Landlord will return all prepaid Rent and security; or (b) demand that Landlord perform this Lease and, if Tenant chooses, bring an action for possession against Landlord or any person wrongfully in possession and recover the damages Tenant sustains. If a person's failure to deliver possession is willful and not in good faith, Tenant may recover from that person an amount up to the greater of two months' periodic Rent or twice Tenant's actual damages. If possession is delivered but the property is not in the condition Arizona law requires, Rent does not abate on that account, and Tenant has the remedies Arizona law provides for Landlord's noncompliance.",
  },
  // Rent & Payment
  {
    id: "late-fee-az",
    title: "Late Fee",
    group: "Rent & Payment",
    states: ["AZ"],
    supersedes: "late-fee",
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. The late fee is a charge under this Lease and is not Rent. Landlord is not required to accept a partial payment of Rent or other charges. If Landlord accepts a partial payment, the terms of that payment, including the date the balance is due, will be set out in a written agreement Tenant signs at the time of the payment.",
  },
  // Pets
  {
    id: "pet-policy-az",
    title: "Pets",
    group: "Pets",
    states: ["AZ"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any refundable pet deposit is security under this Lease and counts toward the limit on total security. Any nonrefundable pet fee is nonrefundable only if it is listed, with its purpose, in this Lease's nonrefundable fees terms. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms and Arizona law permit, including without notice in an emergency. If Tenant dies or becomes incapacitated, Tenant's pet will be handled as provided in this Lease's authorized-person terms, if completed, and Arizona law. This Section does not apply to a service animal or other assistance animal.",
  },
  // Default & Termination
  {
    id: "authorized-person-contact-az",
    title: "Authorized Person if Tenant Dies or Is Incapacitated",
    group: "Default & Termination",
    states: ["AZ"],
    bodyText:
      "[Optional.] Tenant names the following person, whom Tenant authorizes to enter the property to retrieve and store Tenant's personal property, including Tenant's animal, if Tenant dies or is otherwise incapacitated: {{authorized_person_name_address_phone}}. Tenant will keep this information updated. Before removing any of Tenant's property or animal, the authorized person must show Landlord a valid government-issued identification confirming the person's identity. The authorized person will have 20 days after Landlord's first written contact, or until the last date for which Rent is paid, whichever is longer, to remove items from the property and return the keys during regular business hours. If Landlord cannot reach the authorized person at the address and telephone number Tenant provided, or the authorized person does not respond within one day for an animal or ten days for other property after Landlord's first written contact, Landlord may dispose of the property, or treat the animal as abandoned and release it to an animal shelter or boarding facility, as Arizona law provides, and may release an animal to a relative of Tenant where Arizona law permits. As Arizona law provides, if Landlord lets the authorized person enter and remove Tenant's belongings, Landlord has no further liability to Tenant, Tenant's estate or Tenant's heirs for items lost, damaged or stolen. These arrangements apply to Tenant's personal property only if periodic Rent is unpaid and outstanding for at least five days, and to Tenant's animal only if Tenant has died or is otherwise incapacitated.",
  },
  // Notices & General
  {
    id: "landlord-disclosure-az",
    title: "Owner, Manager and Landlord-Tenant Act Disclosure",
    group: "Notices & General",
    states: ["AZ"],
    bodyText:
      "Landlord discloses to Tenant, as Arizona law requires: the name and address of the person authorized to manage the property is [manager name and address]; and the name and address of an owner of the property, or a person authorized to act for and on behalf of the owner for service of process and for receiving and receipting for notices and demands, is [owner or agent name and address]. The Arizona Residential Landlord and Tenant Act is available on the Arizona Department of Housing's website. Landlord will keep this information current and will give it to Tenant again on request.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-az",
    title: "Early Termination: Domestic Violence or Sexual Assault",
    group: "Default & Termination",
    states: ["AZ"],
    bodyText:
      "A Tenant who is a victim of domestic violence, as Arizona law defines it, or who was the victim of sexual assault in the property, may terminate this Lease by giving Landlord a written notice requesting release from this Lease, with a mutually agreed release date within the next 30 days, accompanied by either (a) a copy of a protective order issued to Tenant (Landlord may also ask for a receipt or signed statement that the order has been submitted to an authorized officer of a court for service), or (b) a copy of a written law enforcement report stating that Tenant notified the agency that Tenant was a victim. This right applies only if the events occurred within the 30 days immediately before the notice, unless Landlord waives that limit. Landlord may ask Tenant in writing for the name and address of the person named in the order or report, if Tenant knows it. A terminating Tenant is liable only for Rent owed or paid through the termination date and any earlier obligations outstanding on that date, payable on or before the date Tenant vacates, and will not owe future Rent or any early termination penalty or fee. Landlord may keep prepaid Rent for the month in which this Lease terminates. Landlord will not withhold the Security Deposit because of the early termination, but may withhold it for damages caused by Tenant's failure to maintain the property. If this Lease has more than one tenant, the tenancy of all tenants ends; tenants who are not victims, other than the person named in the order or report, may be released from their financial obligations under this Lease and may be allowed to enter a new lease if they meet Landlord's current application requirements. A Tenant who is a victim may require Landlord to install a new lock at Tenant's cost; Landlord may rekey a lock in good working condition or replace the locking mechanism with one of equal or better quality, may keep a key, and may refuse to give a key to the person named in the order or report. Landlord will not give that person access to the property to reclaim property if that person has been served with an order of protection naming them and Landlord has received a copy, unless a law enforcement officer escorts them. A law enforcement officer protected by an injunction against harassment issued within the 30 days before notice to Landlord may terminate this Lease in the same manner, but must first repay any lease concession or benefit actually received or used. This Section does not limit Landlord's right to terminate this Lease for reasons unrelated to the domestic violence or sexual assault.",
  },
  // Disclosures
  {
    id: "bedbug-obligations-az",
    title: "Bedbugs: Information and Obligations",
    group: "Disclosures",
    states: ["AZ"],
    bodyText:
      "[Use for any dwelling unit other than a single family residence.] Landlord has provided Tenant with bedbug educational materials. Landlord does not know the property to have a current bedbug infestation. Tenant will not knowingly move materials infested with bedbugs into the property. If Tenant knows bedbugs are present, Tenant will notify Landlord in writing or electronically.",
  },
  {
    id: "utility-billing-disclosure-az",
    title: "Utilities Billed by Landlord (Submetering or Ratio Billing)",
    group: "Disclosures",
    states: ["AZ"],
    bodyText:
      "[Use if Landlord charges Tenant separately for gas, water, wastewater, solid waste removal or electricity through a submetering system or a ratio utility billing system.] Landlord charges Tenant separately for the following utility services: {{separately_charged_utilities}}. Billing method: {{utility_billing_method}} [state 'submetering', or give a specific description of the ratio utility billing method used: per tenant; proportionately by livable square footage; per type of unit; per number of water fixtures; for water and wastewater, by individually submetered hot water use; or another method, described here, that fairly allocates the charges]. Landlord will recover only the charges the utility provider imposes on Landlord plus an administrative fee of {{utility_admin_fee}} for Landlord's actual administrative costs only, and will impose no other utility charges. Each bill will separately state the charges for the period, with the opening and closing meter readings and the dates of those readings, and will show the administrative fee. [Optional: During the Term, Landlord may begin charging separately for a utility listed in this Lease through submetering or ratio utility billing after giving Tenant at least 90 days' notice.] If Tenant disputes a utility bill, Tenant will first object to Landlord in writing.",
  },
  {
    id: "foreclosure-notice-az",
    title: "Notice of Possible Foreclosure",
    group: "Disclosures",
    states: ["AZ"],
    bodyText:
      "[Use if a foreclosure action on the property was initiated before this Lease is entered into. Does not apply to multifamily residential rental units consisting of four or more connected units.] This property is undergoing foreclosure. For more information on this action, you should contact {{foreclosure_contact}} (name, address and phone number of the court where the action is filed or trustee, attorney or other responsible party). A sale at auction may or may not occur as a result of this foreclosure. Currently, the sale of this property has been set for {{foreclosure_sale_time_date_place}} (time, date and place) or no date for sale of this property has been established.",
  },
  {
    id: "pool-safety-notice-az",
    title: "Pool Safety Notice",
    group: "Disclosures",
    states: ["AZ"],
    bodyText:
      "[Use if the dwelling has a swimming pool or other contained body of water.] Tenant acknowledges receiving, with this Lease, the pool safety notice approved by the Arizona Department of Health Services, which explains safety education and the responsibilities of pool ownership.",
  },
  // Landlord Responsibilities
  {
    id: "maintenance-allocation-az",
    title: "Tenant Maintenance Agreement",
    group: "Landlord Responsibilities",
    states: ["AZ"],
    bodyText:
      "[Optional. Use for a property that is NOT a single family residence; this agreement must be a separate writing signed by Landlord and Tenant, not a section of the Lease. For a single family residence, landscaping and snow removal are covered by the Lease's Landscaping & Irrigation and Snow Removal sections, and this agreement may be used for other tasks.] Landlord and Tenant agree, in good faith and not to evade Landlord's obligations, that Tenant will perform the following tasks: {{tenant_maintained_items}} [check each that applies: ☐ lawn and landscaping care, keeping to any irrigation schedule Landlord sets, and promptly reporting irrigation leaks or watering problems; ☐ prompt, reasonable removal of snow and ice from walkways, driveways, porches and entrances Tenant uses; ☐ pool or spa care; ☐ replacing heating and air-conditioning filters; ☐ replacing light bulbs; ☐ taking garbage to the collection point; ☐ other specified task: ____]. In exchange for these tasks, {{maintenance_consideration}} [state the consideration Tenant receives, e.g. a Monthly Rent reduction of $__]. This agreement does not make Tenant responsible for any work needed to comply with building codes materially affecting health and safety or to put and keep the property in a fit and habitable condition, which remains Landlord's responsibility, and it does not reduce Landlord's obligations to any other tenant.",
  },
  // Default & Termination
  {
    id: "casualty-termination-az",
    title: "Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["AZ"],
    bodyText:
      "If the property is damaged or destroyed by fire or casualty to an extent that Tenant's enjoyment of it is substantially impaired, Tenant may either: (a) immediately vacate the property and notify Landlord in writing within 14 days afterward of Tenant's intention to terminate this Lease, in which case this Lease terminates as of the date Tenant vacated; or (b) if continued occupancy is lawful, vacate any part of the property made unusable by the fire or casualty, in which case Tenant's Rent is reduced in proportion to the reduction in the fair rental value of the property. If this Lease is terminated, Landlord will return all security recoverable by Tenant, and Rent will be accounted for as of the date Tenant vacates all or part of the property.",
  },
  // Rules & Regulations
  {
    id: "crime-free-addendum-az",
    title: "Crime-Free Lease Addendum",
    group: "Rules & Regulations",
    states: ["AZ"],
    bodyText:
      "[Optional.] Tenant, each occupant, and each guest or other person on the property with Tenant's consent will not engage in criminal activity, including drug-related criminal activity, on or near the property, and will not permit the property to be used to facilitate criminal activity. A violation is a material noncompliance with this Lease. Where Arizona law treats the violation as a material and irreparable breach, Landlord may deliver a notice of immediate termination as that law provides; otherwise Landlord will give the notice Arizona law requires before terminating. Tenant is responsible for a guest's violation to the extent Arizona law makes a tenant responsible for a guest's actions. This Section does not apply to criminal activity of which Tenant or a member of Tenant's household is the victim, including domestic violence or sexual assault, and nothing in this Section penalizes Tenant or any other person for summoning a law enforcement officer or other emergency assistance.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-detector-duty-az",
    title: "Smoke Detectors",
    group: "Landlord Responsibilities",
    states: ["AZ"],
    bodyText:
      "Tenant will maintain and keep operable each smoke detector at the property, including replacing batteries, unless Tenant gives Landlord written notice that a smoke detector is malfunctioning. After receiving that notice, Landlord will repair the smoke detector. This Section is Landlord's written notice to Tenant of Tenant's responsibilities for smoke detectors under Arizona law.",
  },
  // Default & Termination
  {
    id: "rental-application-accuracy",
    title: "Accuracy of Rental Application",
    group: "Default & Termination",
    states: ["CO", "WY", "KS", "NE", "MN", "ND", "SD", "OH", "CA", "NV", "TX", "NJ", "FL", "AZ", "GA", "NC", "SC", "TN", "VA", "AL", "PA"],
    bodyText:
      "Tenant represents that the information Tenant gave Landlord in Tenant's rental application and during screening was true, correct and complete when given, and Tenant acknowledges that Landlord relied on that information in entering into this Lease. If any of that information was materially false or misleading, Tenant is in material breach of this Lease, and Landlord may exercise the remedies this Lease and applicable law provide for a material breach. This Section does not apply to information that Landlord was not permitted by law to request or consider.",
  },
  // Disclosures
  {
    id: "water-submeter-disclosure-ca",
    title: "Water Submeter Billing Disclosure",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Water Submeter Billing. [Include this section only if Landlord will bill Tenant for water service separately from Rent through a submeter. It must be given in at least 10-point type before this Lease is executed.] Tenant will be billed for water service separately from Rent. Landlord estimates the monthly bill for water service for dwelling units at the property at {{water_bill_estimate}}, based on {{water_bill_estimate_basis}}. Bills are due {{water_bill_due_dates}} and are paid as follows: {{water_bill_payment_procedure}}. Tenant may contact Landlord or Landlord's billing agent with questions about water service billing at {{water_billing_address}}, {{water_billing_email}} and {{water_billing_phone}}. The monthly bill for water service may include only the following charges: the amount due for the usage measured by the submeter, charged at allowable rates; a portion of the fixed fee charged by the water purveyors for water service; a fee for Landlord's or the billing agent's costs; and any late fee, with the amounts and times assessed. Tenant shall notify Landlord of any leaks, drips, water fixtures that do not shut off properly, including a toilet, or other problems with the water system, including problems with water-saving devices, and Landlord is required to investigate and, if necessary, repair these problems within 21 days. Tenant may report any leaks, drips or water fixtures that do not shut off properly to Landlord or Landlord's agent at {{water_repair_address}}, {{water_repair_email}} and {{water_repair_phone}}. Landlord will provide any of the following if Tenant asks: the location of the submeter, the calculations used to determine a monthly bill, and the date the submeter was last certified for use together with the date it is next scheduled for certification. If Tenant believes that the submeter reading is inaccurate or the submeter is malfunctioning, Tenant shall first notify Landlord in writing and request an investigation. This disclosure is only a general overview of the laws regarding submeters, and those laws can be found at Chapter 2.5 (commencing with Section 1954.201) of Title 5 of Part 4 of Division 3 of the Civil Code.",
  },
  {
    id: "mold-booklet-disclosure-ca",
    title: "Mold Booklet Delivery",
    group: "Disclosures",
    states: ["CA"],
    bodyText:
      "Dampness and Mold. Before signing this Lease, Landlord gave Tenant the consumer-oriented booklet on dampness and mold for renters published by the California Department of Public Health, which describes the potential health risks and the health impact that may result from exposure to mold, and Tenant acknowledges receiving it. Landlord is not required to conduct air or surface testing of the unit or the building for mold. Tenant will promptly notify Landlord of any dampness, water intrusion, leak or visible mold in the unit.",
  },
  // Tenant Responsibilities
  {
    id: "no-liens-fl",
    title: "No Liens for Tenant Improvements",
    group: "Tenant Responsibilities",
    states: ["FL"],
    bodyText:
      "The interest of Landlord in the property will not be subject to liens for improvements made by Tenant, whether or not Landlord has consented to the improvements. Before any work begins, Tenant will notify every contractor, subcontractor and supplier that makes or furnishes any improvement to the property for Tenant of this provision.",
  },
  // Disclosures
  {
    id: "association-approval-fl",
    title: "Association Approval of This Lease",
    group: "Disclosures",
    states: ["FL"],
    bodyText:
      "[Use only if the property is in a condominium, cooperative or homeowners' association whose governing documents require the association to approve a lease or a tenant.] This Lease is contingent on the association's approval. Tenant will apply promptly, give the association the information it reasonably requires, and cooperate in the approval process. The association's application fee will be paid by {{association_fee_payer}}. If approval has not been given by {{association_approval_deadline}}, either party may end this Lease by written notice to the other before approval is given, and Landlord will then return all amounts Tenant has paid under this Lease. Tenant will not owe Rent for any period before approval during which Tenant is not permitted to take possession. Any security deposit the association requires of Tenant is separate from the Security Deposit under this Lease.",
  },
  // Security Deposit
  {
    id: "prelease-deposit-application-mn",
    title: "Prelease Deposit Applied to Deposit or Rent",
    group: "Security Deposit",
    states: ["MN"],
    bodyText:
      "If Tenant paid Landlord any money to hold the property before this Lease was signed, Landlord will apply that money to Tenant's security deposit or to Rent. Landlord will not keep it as a separate charge and will not treat it as a nonrefundable fee.",
  },
  // Landlord Responsibilities
  {
    id: "utility-billing-schedule-mn",
    title: "When Utility Bills Will Be Issued",
    group: "Landlord Responsibilities",
    states: ["MN"],
    bodyText:
      "If Landlord bills Tenant separately from Rent for electricity or natural gas in a shared-metered residential building, Landlord will issue those bills on the following schedule: [state when utility bills will be issued]. Landlord will not bill Tenant less frequently than Landlord is billed by the utility provider.",
  },
  // Tenant Responsibilities
  {
    id: "cold-weather-vacate-notice-mn",
    title: "Cold Weather Notice Before Vacating",
    group: "Tenant Responsibilities",
    states: ["MN"],
    bodyText:
      "Between November 15 and April 15, if Tenant removes from, abandons, or vacates the property or any part of it while the Term is still running, Tenant will first give Landlord at least three days' written notice of Tenant's intention to do so. This Section does not apply where the tenancy is ending. Tenant understands that the property contains plumbing and other pipes that can be damaged by freezing, and that Minnesota law makes failure to give this notice a criminal offense.",
  },
  // Notices & General
  {
    id: "tenant-notice-of-adverse-proceeding-nd",
    title: "Notice of Claims Against the Property",
    group: "Notices & General",
    states: ["ND"],
    bodyText:
      "If Tenant receives notice of any proceeding to recover the property or its possession -- including a foreclosure action, a tax proceeding, or a claim by any person other than Landlord -- Tenant will inform Landlord immediately and deliver the notice to Landlord. Tenant is responsible to Landlord for all damages Landlord sustains because Tenant failed to inform Landlord of a written notice or failed to deliver it. Tenant will not recognize or attorn to any person other than Landlord as the owner or landlord of the property without Landlord's consent or a judgment of a court of competent jurisdiction.",
  },
  // Disclosures
  {
    id: "steam-radiator-cover-notice-nj",
    title: "Steam Radiator Cover Notice",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "[BUILDER: attach as a rider to the lease wherever the unit has steam radiators; Landlord must also give this notice in writing at least once a year and post it in the common area where tenant notices are posted.] Steam Radiator Covers. Tenant may ask Landlord in writing to cover each steam radiator in Tenant's unit with an insulating material or cover that protects tenants, occupants and others from burns caused by contact with the radiator. Landlord will install the covers within 90 days after receiving Tenant's written request.",
  },
  {
    id: "private-well-test-results-nj",
    title: "Private Well Water Test Results",
    group: "Disclosures",
    states: ["NJ"],
    bodyText:
      "The property's drinking water comes from a private well. Tenant acknowledges receiving a written copy of the most recent water test results for the property under the New Jersey Private Well Testing Act. Landlord will have the water tested at least once every five years as the Act requires, and will give Tenant a written copy of each new test result within 30 days after Landlord receives it.",
  },
  // Landlord Responsibilities
  {
    id: "casualty-nj",
    title: "Fire and Other Casualty",
    group: "Landlord Responsibilities",
    states: ["NJ"],
    bodyText:
      "If the property is damaged by fire without the fault of Tenant, Landlord will repair it as quickly as possible, and Rent will stop until the property has been fully repaired. If the building is totally destroyed by fire or otherwise without the fault of Tenant, Rent will be paid up to the date of destruction, and this Lease will then end.",
  },
  // Tenant Responsibilities
  {
    id: "children-occupancy-nv",
    title: "Occupancy by Children",
    group: "Tenant Responsibilities",
    states: ["NV"],
    bodyText:
      "Children who are members of Tenant's household may live at the property. Each child who will live at the property is to be listed with the other occupants under this Lease's occupancy terms. Landlord places no restriction on occupancy by children other than those occupancy terms, which apply to every occupant regardless of age. [If the property is housing for older persons that qualifies for the fair-housing exemption for such housing, replace this Section with a statement of the property's age requirements for occupancy.]",
  },
  // Rent & Payment
  {
    id: "required-fees-nv",
    title: "Required Fees",
    group: "Rent & Payment",
    states: ["NV"],
    bodyText:
      "In addition to the Monthly Rent and any deposit stated in this Lease, Tenant is required to pay the following fees, for the purposes stated: [list each required fee - its amount, when it is due and the purpose for which it is required, e.g. \"a nonrefundable cleaning charge of $___, due at signing, to pay for cleaning the premises after Tenant vacates\" - or state \"None\"]. Any required fee that is payable every rental period is included in the Monthly Rent and is not charged in addition to it, except a utility fee that this Lease identifies with the Monthly Rent as the law allows. No charge applies to a late or partial payment of Rent, or to a dishonored check or other returned payment, except a late fee or returned-payment charge stated in this Lease.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-repair-agreement-nv",
    title: "Tenant-Performed Repairs and Maintenance",
    group: "Tenant Responsibilities",
    states: ["NV"],
    bodyText:
      "[Optional. Include only if Landlord and Tenant agree that Tenant will perform specified tasks.] Tenant agrees to perform the following specified repairs, maintenance tasks or minor remodeling: [list each task specifically, e.g. replace heating and air-conditioning filters every [number] months with filters Landlord provides; replace light bulbs; keep the pool clean and its water balanced]. Landlord and Tenant make this agreement in good faith. Tenant is not entering into it because Landlord or Landlord's agent refused to perform any repair, maintenance task or remodeling that Landlord is required by law to perform, and it does not reduce Landlord's obligations to any other tenant. Landlord remains responsible for keeping the property habitable as applicable law requires, and nothing in this Section requires Tenant to pay any fee or charge for work that is Landlord's duty, except work needed because of a condition caused by the deliberate or negligent act or omission of Tenant, a member of Tenant's household, or another person on the premises with Tenant's consent.",
  },
  // Landlord Responsibilities
  {
    id: "designated-repairer-nv",
    title: "Designated Repairer for Tenant Repairs",
    group: "Landlord Responsibilities",
    states: ["NV"],
    bodyText:
      "[Optional. Include only if Landlord wants to designate who performs this work.] If applicable law permits Tenant to have work done at Landlord's expense because Landlord failed to make a repair or to supply an essential service after notice, that work must be performed by [name the person or firm, or describe a class of persons or firms qualified to do the work, e.g. \"a contractor holding a Nevada license for that type of work\"], and Tenant will comply with this specification. This Section does not otherwise limit any remedy applicable law gives Tenant.",
  },
  // Default & Termination
  {
    id: "abandoned-property-tx",
    title: "Abandonment and Property Left Behind",
    group: "Default & Termination",
    states: ["TX"],
    bodyText:
      "[Optional. Texas law does not define when a residential tenant has abandoned the dwelling; this Section supplies the definition. Tex. Prop. Code §§92.0081(b)(2), 54.044(d).]\nABANDONMENT. The dwelling is abandoned only when all of the following have occurred: (a) Landlord reasonably believes that all occupants have moved out, based on facts such as the removal of substantially all of Tenant's belongings or the disconnection of utility service in Tenant's name; (b) Rent is delinquent; and (c) Landlord has posted a written notice on the inside of the main entry door, and mailed a copy to Tenant at the dwelling and to any other address Tenant has given Landlord (and e-mailed a copy if Tenant has given Landlord an e-mail address), stating that Landlord considers the dwelling abandoned, and Tenant has not responded in writing or in person within 5 days after the notice was posted. Once the dwelling is abandoned, Landlord may enter, take possession, change the locks, and remove any personal property left in the dwelling. Landlord will store that property for at least 30 days after the dwelling is abandoned and will release it to Tenant, or to a person Tenant designates in writing, on request during that period. Landlord may charge Tenant the reasonable cost of removing and storing the property but will not refuse to release the property because that cost is unpaid. After the 30-day period, Landlord may donate the property to a charitable organization or discard it. Landlord may discard trash, perishable food, and items that pose a health or safety hazard at any time. Nothing in this Section allows Landlord to exclude Tenant from the dwelling except as Section 92.0081 of the Texas Property Code permits. If Tenant is the sole occupant and dies, Section 92.014 of the Texas Property Code and the provisions of this Lease on the death of Tenant apply instead of this Section.",
  },
  {
    id: "periodic-tenancy-notice-wy",
    title: "Notice to End a Month-to-Month Tenancy",
    group: "Default & Termination",
    states: ["WY"],
    bodyText:
      "If this Lease continues as a month-to-month or other periodic tenancy, either Landlord or Tenant may end it by giving the other at least 30 days' written notice, with the termination taking effect on the last day of a rental period. If notice is given fewer than 30 days before the end of a rental period, the tenancy ends at the close of the following rental period instead. Rent remains payable through the termination date. This Section does not limit either party's right to end this Lease earlier where this Lease or applicable law allows it.",
  },
  // Notices & General
  {
    id: "agent-capacity-designation-wy",
    title: "Agent Not Authorized to Receive Notices",
    group: "Notices & General",
    states: ["WY"],
    bodyText:
      "Any managing agent, leasing agent, or resident manager identified in this Lease is not authorized to receive notices or other communications on Landlord's behalf. All notices and demands under this Lease, or under Wyoming's Residential Rental Property Act, must be directed to Landlord at the address stated in this Lease.",
  },
  // Default & Termination
  {
    id: "casualty-termination-wy",
    title: "Fire or Other Casualty",
    group: "Default & Termination",
    states: ["WY"],
    bodyText:
      "If the property is damaged or destroyed by fire or other casualty through no fault of Tenant, and the damage makes the property uninhabitable or substantially impairs Tenant's use of it, either Landlord or Tenant may terminate this Lease by written notice to the other, effective on the date Tenant vacates. Rent will be prorated to that date, any prepaid Rent refunded, and the Security Deposit returned as this Lease and Wyoming law provide. If the casualty makes only part of the property unusable and Tenant stays in possession, Rent will be reduced in proportion to the part of the property Tenant cannot use until Landlord completes repairs.",
  },
  // Landlord Responsibilities
  {
    id: "landlord-maintenance-oh",
    title: "Landlord's Maintenance Obligations",
    group: "Landlord Responsibilities",
    states: ["OH"],
    bodyText:
      "Landlord will: comply with all applicable building, housing, health and safety codes that materially affect health and safety; make all repairs and do whatever is reasonably necessary to put and keep the property in a fit and habitable condition; keep all common areas of the property in a safe and sanitary condition; maintain in good and safe working order and condition all electrical, plumbing, sanitary, heating, ventilating and air conditioning fixtures and appliances, and elevators, supplied or required to be supplied by Landlord; and supply running water, reasonable amounts of hot water and reasonable heat at all times, except where the building is not required by law to be equipped for that purpose or where the dwelling unit is so constructed that heat or hot water is generated by an installation within Tenant's exclusive control and supplied by a direct public utility connection. Where Landlord is a party to rental agreements covering four or more dwelling units in the same structure, Landlord will also provide and maintain appropriate receptacles for ashes, garbage, rubbish and other waste and arrange for their removal.",
  },
  // Default & Termination
  {
    id: "fire-casualty-termination-oh",
    title: "Damage or Destruction by Fire or Casualty",
    group: "Default & Termination",
    states: ["OH"],
    bodyText:
      "If the property is destroyed or so injured by fire or other casualty as to be unfit for occupancy, and the destruction or injury was not caused by Tenant's fault or neglect, Tenant is not liable to pay Rent accruing after that destruction or injury, and Tenant will thereupon surrender possession of the property to Landlord. Rent already accrued and unpaid before the destruction or injury remains payable. To be relieved of Rent under this Section, Tenant must surrender possession of all of the property that remains; Tenant may not stop paying Rent while leaving personal property at the property or otherwise retaining possession.",
  },
  {
    id: "termination-notice-oh",
    title: "Notice to Terminate a Periodic Tenancy",
    group: "Default & Termination",
    states: ["OH"],
    bodyText:
      "Either Landlord or Tenant may terminate or decline to renew a week-to-week tenancy by giving the other notice at least seven days before the termination date stated in the notice. Either Landlord or Tenant may terminate or decline to renew a month-to-month tenancy by giving the other notice at least thirty days before the periodic rental date. This Section does not apply to a termination based on a breach of this Lease or of a duty imposed by law, and it does not limit Landlord's obligation to give any shorter notice Ohio law requires where a tenant has violated R.C. 5321.05(A)(9).",
  },
  // Security Deposit
  {
    id: "security-deposit-return-ga",
    title: "Security Deposit Inspection and Return",
    group: "Security Deposit",
    states: ["GA"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within 3 business days after this Lease ends and Tenant vacates the property, or after Landlord accepts Tenant's surrender of the property, whichever happens first, Landlord or Landlord's agent will inspect the property and prepare a written list of any damage that is the basis for a charge against the Security Deposit, with the estimated dollar value of each item. On request, Tenant may inspect the property and the list within 5 business days after the end of the Lease and vacancy (or surrender and acceptance) and that inspection. If Tenant is present at the inspection, Landlord and Tenant will both sign the list, and the signed list is conclusive evidence of its accuracy; if Tenant disagrees with any item, Tenant must state in writing the specific items Tenant disputes and sign that statement. The list will include written notice of Tenant's duty to sign it or to dissent from it. If Tenant vacates or surrenders the property without notifying Landlord, Landlord will inspect, prepare and sign the list within a reasonable time after discovering the vacancy. Within 30 days after Landlord obtains possession, Landlord will return the full Security Deposit or, if Landlord keeps any part of it, give Tenant a written statement identifying the exact reasons, including the damage list where any amount is kept for damage, together with payment of the difference. Landlord will not keep any part of the Security Deposit for ordinary wear and tear from the intended use of the property, provided there was no negligence, carelessness, accident or abuse by Tenant, members of Tenant's household or their invitees or guests. Landlord may keep amounts for unpaid Rent or late fees, abandonment of the property, unpaid utility charges, repair work or cleaning Tenant contracted for with third parties, unpaid pet fees, and actual damages caused by Tenant's breach, which Landlord will attempt to mitigate. Landlord will mail the statement and any payment by first-class mail to Tenant's last known address, so Tenant should give Landlord a forwarding address in writing. If the letter containing the payment is returned undelivered and Landlord cannot locate Tenant after reasonable effort, the payment becomes Landlord's property 90 days after it was mailed.",
  },
  {
    id: "security-deposit-escrow-ga",
    title: "Where the Security Deposit Is Held",
    group: "Security Deposit",
    states: ["GA"],
    bodyText:
      "Landlord will hold the Security Deposit in trust for Tenant [choose one: in an escrow account used only for security deposits at {{deposit_bank_name}}, {{deposit_bank_address}} / by maintaining a surety bond that Landlord has posted with the clerk of the Superior Court of {{county}} County, Georgia, in place of an escrow account].",
  },
  {
    id: "move-in-damage-list-ga",
    title: "Move-In Damage List",
    group: "Security Deposit",
    states: ["GA"],
    bodyText:
      "Before Tenant pays the Security Deposit, Landlord will give Tenant a comprehensive written list of any existing damage to the property, which Tenant may keep permanently. Tenant may inspect the property to check the accuracy of the list before moving in. Landlord and Tenant will sign the list, and the signed list is conclusive evidence of its accuracy, but not as to latent defects. If Tenant refuses to sign the list, Tenant will state in writing the specific items on the list Tenant disputes and sign that statement. The list will include written notice of Tenant's duty to sign it or to dissent from it.",
  },
  // Notices & General
  {
    id: "landlord-disclosure-ga",
    title: "Owner and Manager Disclosure",
    group: "Notices & General",
    states: ["GA"],
    bodyText:
      "Landlord discloses to Tenant, as Georgia law requires: the owner of record of the property, or a person authorized to act for and on behalf of the owner for the purposes of serving of process and receiving and receipting for demands and notices, is [name and address]; and the person authorized to manage the property is [name and address]. If any of these names or addresses changes, Landlord will advise Tenant of the change within 30 days, either in writing or by posting a notice of the change in a conspicuous place.",
  },
  // Disclosures
  {
    id: "flood-disclosure-ga",
    title: "Flooding Notice",
    group: "Disclosures",
    states: ["GA"],
    bodyText:
      "[Separate written notice. Required only if flooding has damaged any part of the living space covered by this Lease at least three times during the five years immediately before the date of this Lease. Give it to the prospective tenant BEFORE the written lease is signed.] FLOODING NOTICE: The property has a propensity to flood. Flooding has damaged part of the living space covered by this Lease at least three times during the five-year period immediately before the date of this Lease. In this notice, 'flooding' means the inundation of a portion of the living space covered by the lease which was caused by an increased water level in an established water source such as a river, stream, or drainage ditch or as a ponding of water at or near the point where heavy or excessive rain fell. Tenant acknowledges receiving this notice before signing the Lease.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-ga",
    title: "Service Dogs and Other Assistance Animals",
    group: "Pets",
    states: ["GA"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service dog or other assistance animal that Tenant or an Occupant with a disability needs is not a pet under this Lease, regardless of any pet policy, breed, weight or size restriction stated elsewhere in this Lease, and Landlord will not charge a pet deposit, pet rent, pet fee or any other extra compensation for it. Tenant remains liable for any damage the animal does to the property. A service dog, meaning a dog individually trained to do work or perform tasks that directly assist a person with a physical or mental impairment and directly relate to that person's disability (or a dog still in training that is operating under a trainer's guidance), is entitled to full and equal access to the property; Landlord is not required to modify the property or to provide a higher degree of care because of it. Any other assistance animal, including an emotional support animal, may be kept at Tenant's request as a reasonable accommodation for a disability. If the disability or the disability-related need for that animal is not readily apparent, Landlord may request reliable documentation of the disability and of the need, to the extent permitted by applicable law. Landlord may deny or withdraw that accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-ga",
    title: "Early Termination: Family Violence or Stalking Order",
    group: "Default & Termination",
    states: ["GA"],
    bodyText:
      "Tenant may terminate this Lease effective 30 days after giving Landlord written notice of termination if a civil family violence order, civil stalking order, criminal family violence order or criminal stalking order, as Georgia law defines those terms, has been issued protecting Tenant or Tenant's minor child, including where Tenant is a joint tenant, even if the protected Tenant had no obligation to pay rent to Landlord. The notice must be accompanied by a copy of the order and, if the order is an ex parte temporary protective order, a copy of the police report. Tenant may occupy the property until the termination is effective. Tenant will be liable for the Rent due under this Lease prorated to the effective date of termination, payable when it would otherwise have been due, and for any delinquent or unpaid Rent or other sums owed to Landlord before termination, but not for any other fees, Rent or damages because of the early termination. If Tenant terminates under this Section 14 or more days before occupancy, no damages or penalties of any kind will be assessed. This Section may not be waived or modified by agreement.",
  },
  // Rent & Payment
  {
    id: "rent-escalation-ga",
    title: "Rent Escalation for Utilities, Taxes or Insurance",
    group: "Rent & Payment",
    states: ["GA"],
    bodyText:
      "Monthly Rent may increase during the Term by the amount of any increase, after the Start Date, in [choose one or more: utility charges Landlord pays for the property / real estate taxes on the property / Landlord's insurance premiums for the property], allocated to the property as follows: [describe the calculation]. Landlord will give Tenant at least {{escalation_notice_days}} days' written notice before an increase takes effect, with a statement showing how it was calculated.",
  },
  // Tenant Responsibilities
  {
    id: "serious-misconduct-prohibition-ga",
    title: "No Criminal Acts or Serious Misconduct",
    group: "Tenant Responsibilities",
    states: ["GA"],
    bodyText:
      "Tenant, members of Tenant's household, and Tenant's guests and invitees will not commit criminal acts or other serious misconduct at the property or in any common area, including threatening by word or conduct the personal safety of Landlord, Landlord's employees or another tenant, and intentionally damaging property. A violation of this Section is a material breach of this Lease, for which Landlord may terminate this Lease and pursue the remedies this Lease and applicable law provide.",
  },
  // Default & Termination
  {
    id: "holdover-rate-ga",
    title: "Holdover Charge",
    group: "Default & Termination",
    states: ["GA"],
    bodyText:
      "If Tenant remains in possession after the end of the Term, and Landlord has not agreed in writing to a continued tenancy or accepted Rent for one under the Holdover section of this Lease, then, in place of the actual damages and reasonable rental value described in that section, Tenant will pay Landlord a holdover charge of {{holdover_daily_rate}} for each day Tenant remains in possession. Landlord and Tenant agree that Landlord's loss from a holdover, including delay in making the property available to a new tenant, is difficult to estimate accurately in advance, that this charge is a reasonable estimate of that loss, and that it is not a penalty. Landlord's acceptance of a holdover charge is not acceptance of Rent for a continued tenancy. This Section does not limit Landlord's right to recover possession, unpaid Rent and other amounts due for the period before the Term ended, or damages for harm to the property.",
  },
  {
    id: "casualty-termination-ga",
    title: "Fire or Other Casualty",
    group: "Default & Termination",
    states: ["GA"],
    bodyText:
      "If the property is damaged or destroyed by fire or other casualty not caused by Tenant, members of Tenant's household, or Tenant's guests or invitees, and the damage makes the property unfit to live in or substantially impairs Tenant's use of it, either Landlord or Tenant may terminate this Lease by written notice to the other, effective on the date Tenant vacates. Rent will be prorated to that date, any prepaid Rent refunded, and the Security Deposit returned as this Lease and Georgia law provide. If the casualty makes only part of the property unusable and Tenant stays in possession, Rent will be reduced in proportion to the part of the property Tenant cannot use until Landlord completes repairs. This Section applies in place of Georgia's statutory rule that fire or casualty does not reduce Rent (O.C.G.A. § 44-7-15).",
  },
  // Security Deposit
  {
    id: "security-deposit-use-nc",
    title: "Use of Security Deposit",
    group: "Security Deposit",
    states: ["NC"],
    supersedes: "security-deposit-use",
    bodyText:
      "Tenant shall pay Landlord a security deposit of {{security_deposit}} (Security Deposit) prior to occupancy. Landlord may apply the Security Deposit only to: (1) unpaid Rent, and unpaid charges for water, sewer or electric service that Landlord provides to Tenant as North Carolina law permits; (2) damage to the property, including damage to or destruction of smoke alarms or carbon monoxide alarms; (3) damages resulting from Tenant's failure to complete the rental period, except where Tenant ended this Lease under a North Carolina military or domestic-violence termination right, was forced to leave because Landlord unlawfully removed or tried to remove Tenant, or was constructively evicted by Landlord's failure to meet its repair and fitness duties; (4) unpaid bills that become a lien against the property because of Tenant's occupancy; (5) the costs of re-renting the property after Tenant's breach, including reasonable fees or commissions paid to a licensed real estate broker to re-rent it; (6) the costs of removing and storing Tenant's property after a summary ejectment proceeding; (7) court costs; and (8) any fee North Carolina law permits Landlord to charge under this Lease. Landlord will not apply the Security Deposit to normal wear and tear and will not keep more than Landlord's actual damages. The Security Deposit will not relieve Tenant of any obligation to pay Rent due under this Lease prior to its termination.",
  },
  {
    id: "security-deposit-cap-nc",
    title: "Security Deposit Limit",
    group: "Security Deposit",
    states: ["NC"],
    bodyText:
      "The Security Deposit, together with any other refundable deposit Landlord holds as security under this Lease (including any refundable pet deposit), will not exceed two weeks' Rent if this is a week-to-week tenancy, one and one-half months' Rent if this is a month-to-month tenancy, or two months' Rent if the Term is longer than month to month. A reasonable nonrefundable pet fee is not a security deposit and does not count toward this limit. Any amount Tenant pays in advance toward Rent for the last month of the Term counts toward this limit and is held, applied and returned as part of the Security Deposit, unless this Lease states that the amount is Rent for a specific calendar month.",
  },
  {
    id: "security-deposit-holding-nc",
    title: "Where the Security Deposit Is Held",
    group: "Security Deposit",
    states: ["NC"],
    bodyText:
      "Landlord will [choose one: deposit the Security Deposit in a trust account with {{deposit_bank_name}}, {{deposit_bank_address}}, a licensed and federally insured depository institution or trust institution authorized to do business in North Carolina / furnish a bond for the Security Deposit from {{deposit_bond_insurer}}, an insurance company licensed to do business in North Carolina]. If the Security Deposit is held in a trust account outside North Carolina, Landlord will also furnish an adequate bond in the amount of the deposit. If this information is not completed when this Lease is signed, Landlord will give Tenant the name and address of the institution where the Security Deposit is located, or the name of the insurance company providing the bond, in writing within 30 days after the beginning of the Term.",
  },
  {
    id: "security-deposit-return-nc",
    title: "Security Deposit Accounting and Return",
    group: "Security Deposit",
    states: ["NC"],
    supersedes: "security-deposit-return",
    bodyText:
      "When the tenancy ends and Tenant delivers possession of the property to Landlord, Landlord may apply the Security Deposit as this Lease permits and will refund the balance to Tenant. No later than 30 days after the tenancy ends and Tenant delivers possession, Landlord will mail or deliver to Tenant a written itemization of any damage and any other amounts deducted, together with the balance of the Security Deposit. If the extent of Landlord's claim against the Security Deposit cannot be determined within those 30 days, Landlord will provide an interim accounting within the 30 days and a final accounting within 60 days after the tenancy ends and Tenant delivers possession. Landlord will not withhold any part of the Security Deposit for normal wear and tear or keep more than Landlord's actual damages. Tenant should give Landlord a forwarding address in writing. If Tenant's address is unknown, Landlord may apply the Security Deposit as this Lease permits after 30 days and will hold any balance for Tenant to collect for at least six months. If Landlord's interest in the property ends, for example by sale, Landlord will within 30 days either transfer the remaining Security Deposit to Landlord's successor and notify Tenant by mail of the transfer and of the successor's name and address, or return it to Tenant.",
  },
  // Default & Termination
  {
    id: "eviction-fees-nc",
    title: "Eviction Fees and Litigation Costs",
    group: "Default & Termination",
    states: ["NC"],
    bodyText:
      "If Tenant is in default and Landlord files a complaint for summary ejectment or money owed, or both, Tenant will pay the following amounts, as North Carolina law permits. (a) One administrative fee, and only one for that complaint: a complaint-filing fee of up to $15.00 or five percent (5%) of the monthly Rent, whichever is greater, if Tenant cures the default after the complaint is filed and served and Landlord dismisses it before judgment; or a court-appearance fee of ten percent (10%) of the monthly Rent, if Landlord files, serves and successfully prosecutes the complaint in small claims court (the fee is vacated if the magistrate's judgment is vacated on appeal); or a second-trial fee of up to twelve percent (12%) of the monthly Rent, if Landlord prevails in a new trial after an appeal from the magistrate's judgment. (b) Court filing fees and the costs of service of process. (c) Landlord's reasonable attorneys' fees actually paid or owed, not to exceed fifteen percent (15%) of the amount Tenant owes, or fifteen percent (15%) of the monthly Rent if the eviction is based on a default other than nonpayment of Rent. If Tenant appeals a summary ejectment judgment to district court and Landlord prevails, Landlord may also recover all actual reasonable attorneys' fees paid or owed if the court finds that Tenant knew or should have known the appeal was frivolous, unreasonable, without foundation, in bad faith or solely for delay. Landlord may include these amounts in the amount required to cure a default, but will not deduct an administrative fee from a later Rent payment or treat nonpayment of an administrative fee as a default in a later eviction. If Tenant's Rent is subsidized by a government housing program, any fee based on Rent will be calculated on Tenant's share only. Landlord will not charge any other administrative fee, out-of-pocket expense or litigation cost for filing a complaint for summary ejectment or money owed.",
  },
  // Rent & Payment
  {
    id: "partial-payment-nonwaiver-nc",
    title: "Partial Payments Do Not Waive a Breach",
    group: "Rent & Payment",
    states: ["NC"],
    bodyText:
      "Landlord's acceptance of a partial payment of Rent, or of a partial housing subsidy payment, does not waive any breach by Tenant for which this Lease allows Landlord to terminate this Lease and reenter the property, and Landlord may accept such a payment and still pursue summary ejectment for that breach.",
  },
  // Tenant Responsibilities
  {
    id: "criminal-activity-nc",
    title: "No Criminal Activity",
    group: "Tenant Responsibilities",
    states: ["NC"],
    bodyText:
      "Tenant, members of Tenant's household and Tenant's guests will not engage in criminal activity on or in the immediate vicinity of the property. Criminal activity means any violation of North Carolina's controlled substances law other than simple possession, or a conspiracy to commit one, and any other criminal activity that threatens the health, safety or right of peaceful enjoyment of the premises by other residents or by Landlord's employees. Such criminal activity is a breach of this Lease for which Landlord may terminate this Lease and seek possession without giving Tenant an opportunity to cure, in addition to any remedy North Carolina law provides. This Section controls over any other provision of this Lease that would require notice and an opportunity to cure.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-nc",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["NC"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant with a disability needs is not a pet under this Lease, regardless of any pet policy, breed, weight or size restriction stated elsewhere in this Lease, and Landlord will not charge a pet deposit, pet rent, pet fee or any other extra compensation for it. Tenant remains liable for any damage the animal does to the property. A person with a disability has the right to keep on the property a service animal trained to assist the person with the person's specific disability; Tenant may show this with the animal's North Carolina service animal registration tag, or by showing that the animal is being trained or has been trained as a service animal. Any other assistance animal, including an emotional support animal, may be kept at Tenant's request as a reasonable accommodation for a disability. If the disability or the disability-related need for that other animal is not readily apparent, Landlord may request reliable documentation of the disability and of the need, to the extent permitted by applicable law. Landlord may deny or withdraw that accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  {
    id: "pet-policy-nc",
    title: "Pets",
    group: "Pets",
    states: ["NC"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Tenant will pay Landlord a nonrefundable pet fee of {{nonrefundable_pet_fee}}, if applicable, which will be reasonable. Any refundable pet deposit is part of the Security Deposit, counts toward the limit on security deposits, and will be held, applied and returned with it. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet, and will indemnify Landlord from claims arising from Tenant's pet(s). Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms and applicable law permit, and will not seize or remove a pet except through a court process or with the help of animal control or law enforcement. This Section does not apply to a service animal or other assistance animal.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-nc",
    title: "Domestic Violence, Sexual Assault or Stalking: Early Termination and Lock Changes",
    group: "Default & Termination",
    states: ["NC"],
    bodyText:
      "A protected tenant, meaning a tenant or household member who is a victim of domestic violence, sexual assault or stalking as North Carolina law defines those terms, may terminate this Lease by giving Landlord written notice of termination effective on a date stated in the notice that is at least 30 days after Landlord receives it. The notice must be accompanied by a copy of (a) a valid order of protection issued by a court under Chapter 50B or 50C of the North Carolina General Statutes, other than an ex parte order, (b) a criminal order that restrains a person from contact with the protected tenant, or (c) a valid Address Confidentiality Program card issued to the victim or to a minor member of Tenant's household. A victim of domestic violence or sexual assault must also include a copy of a safety plan, dated during this tenancy, from a qualifying domestic violence or sexual assault program, that recommends relocation. The released Tenant owes Rent prorated to the termination date, payable when it would otherwise be due, and no other rent or fees because of the early termination; if Tenant terminates 14 or more days before occupancy, Tenant owes no damages or penalties. Landlord will not apply the Security Deposit to damages from the early termination. If other tenants remain in the property, the tenancy continues for them, and a perpetrator excluded by court order remains liable under this Lease with any other tenant for Rent and damage to the property. Any tenant may also give Landlord oral or written notice that a protected tenant is a victim and ask for the locks to be changed. If the perpetrator is not a tenant of the property, no documentation is required and Landlord will change the locks or allow the protected tenant to change them within 48 hours. If the perpetrator is a tenant of the property, Tenant must first give Landlord a copy of a court order directing the perpetrator to stay away from the property, and Landlord will change the locks or allow them to be changed within 72 hours; unless a court order allows the perpetrator to return for belongings, Landlord then has no duty to give the perpetrator access or keys. The protected tenant pays for the lock change; if Landlord does not act in time, the protected tenant may change the locks without Landlord's permission and must give Landlord a key within 48 hours. Landlord will not terminate, refuse to renew or otherwise retaliate against Tenant because of Tenant's or a household member's status as a victim or because Tenant used this termination right. The termination rights in this Section cannot be waived or modified by agreement.",
  },
  {
    id: "casualty-termination-nc",
    title: "Fire or Other Casualty",
    group: "Default & Termination",
    states: ["NC"],
    bodyText:
      "If the property is damaged or destroyed by fire or other casualty not caused by Tenant, members of Tenant's household, or Tenant's guests or invitees, and the damage makes the property unfit to live in or substantially impairs Tenant's use of it, either Landlord or Tenant may terminate this Lease by written notice to the other, effective on the date Tenant vacates. Rent will be prorated to that date, any prepaid Rent refunded, and the Security Deposit returned as this Lease and North Carolina law provide. If the casualty makes only part of the property unusable and Tenant stays in possession, Rent will be reduced in proportion to the part of the property Tenant cannot use until Landlord completes repairs. This Section is the parties' agreement for such a case in place of N.C. Gen. Stat. § 42-12, and it does not limit Landlord's duty under North Carolina law to keep the property fit and habitable.",
  },
  // Notices & General
  {
    id: "renters-insurance-nc",
    title: "Renter's Insurance: Carrier Choice and Proof",
    group: "Notices & General",
    states: ["NC"],
    bodyText:
      "If this Lease requires Tenant to carry insurance, Tenant may obtain it from any insurance company or agent Tenant chooses. If Tenant does not provide proof of the required coverage within three business days after Landlord requests it, Landlord may obtain the required coverage and charge Tenant the actual cost Landlord incurs to obtain it, plus an administrative fee of up to $50.00 per year.",
  },
  {
    id: "emergency-contact-nc",
    title: "Authorized Contact on Tenant's Death or Emergency",
    group: "Notices & General",
    states: ["NC"],
    bodyText:
      "Tenant names the following person as the authorized person for Landlord to contact if Tenant dies or has an emergency: {{authorized_person_name_address_phone}}. Tenant will tell Landlord in writing if this information changes. If Tenant is the sole occupant and dies leaving belongings in the property, Landlord will make a good-faith attempt to contact this person, and will send this person any affidavit or notice North Carolina law requires, before dealing with Tenant's belongings as North Carolina law permits.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-co-alarms-nc",
    title: "Smoke and Carbon Monoxide Alarms",
    group: "Landlord Responsibilities",
    states: ["NC"],
    bodyText:
      "Landlord will provide operable smoke alarms and, if the property has a fossil-fuel burning heater, appliance or fireplace or an attached garage, at least one operable carbon monoxide alarm on each level, and will make sure each alarm is operable and in good repair at the start of the tenancy. Landlord will put new batteries in any battery-operated alarm at the start of the tenancy, and Tenant will replace batteries as needed during the tenancy, except that a tamper-resistant 10-year lithium battery smoke alarm does not need battery replacement. Tenant will not disable or damage any alarm, and will notify Landlord in writing when an alarm needs to be repaired or replaced; Landlord will repair or replace it within 15 days after receiving that written notice. If an alarm is disabled or damaged other than by Landlord, Landlord's agents or an act of God, Tenant will reimburse Landlord the reasonable and actual cost of repairing or replacing it within 30 days after receiving Landlord's written notice.",
  },
  {
    id: "utility-billing-nc",
    title: "Utilities Billed by Landlord",
    group: "Landlord Responsibilities",
    states: ["NC"],
    bodyText:
      "[Use only if Landlord bills Tenant for water or sewer, electric, or natural gas service, or for a central system.] Landlord will bill Tenant for the following utility services that Landlord provides: {{separately_charged_utilities}}, using the following billing method: {{utility_billing_method}}, as authorized by the North Carolina Utilities Commission, plus any administrative fee the Commission allows ({{utility_admin_fee}}). Landlord will not disconnect or terminate any of these services because Tenant has not paid for them, will not charge a late fee under this Lease's late fee terms for unpaid water or sewer charges, and will not end this Lease because of unpaid water, sewer or electric charges. Unless Tenant designates otherwise, each payment Tenant makes will be applied first to Rent and then to these charges. If Landlord learns from the water system or another reliable source that water supplied to the property exceeds a maximum contaminant level, Landlord will notify Tenant.",
  },
  // Default & Termination
  {
    id: "periodic-tenancy-notice-nc",
    title: "Notice to End a Month-to-Month Tenancy",
    group: "Default & Termination",
    states: ["NC"],
    bodyText:
      "If this Lease continues as a month-to-month tenancy, either Landlord or Tenant may end it by giving the other written notice at least {{notice_to_vacate_days}} days before the end of a monthly rental period, and never less than the seven days North Carolina law requires. For a week-to-week tenancy, notice must be given at least two days before the end of a weekly period, and for a year-to-year tenancy at least one month before the end of the year. Rent remains payable through the termination date.",
  },
  {
    id: "holdover-rate-nc",
    title: "Holdover Charge",
    group: "Default & Termination",
    states: ["NC"],
    bodyText:
      "If Tenant remains in possession after the end of the Term, and Landlord has not agreed in writing to a continued tenancy or accepted Rent for one under the Holdover section of this Lease, then, in place of the actual damages and reasonable rental value described in that section, Tenant will pay Landlord a holdover charge of {{holdover_daily_rate}} for each day Tenant remains in possession. Landlord and Tenant agree that Landlord's loss from a holdover, including delay in making the property available to a new tenant, is difficult to estimate accurately in advance, that this charge is a reasonable estimate of that loss, and that it is not a penalty. Landlord's acceptance of a holdover charge is not acceptance of Rent for a continued tenancy. This Section does not limit Landlord's right to recover possession, unpaid Rent and other amounts due for the period before the Term ended, or damages for harm to the property.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-sc",
    title: "Security Deposit Accounting and Return",
    group: "Security Deposit",
    states: ["SC"],
    supersedes: "security-deposit-return",
    bodyText:
      "When the tenancy ends, Landlord may withhold from the Security Deposit and any prepaid Rent only accrued Rent and the damages Landlord has suffered because Tenant did not comply with Tenant's obligations under this Lease and the South Carolina Residential Landlord and Tenant Act, and will return the balance to Tenant. Landlord will not withhold any amount for ordinary wear and tear. Tenant will give Landlord in writing a forwarding or new address to which the written notice and any amount due may be sent. Within 30 days after the later of (a) the end of the tenancy and Tenant's delivery of possession, or (b) Tenant's demand for the return of the Security Deposit, Landlord will send Tenant a written notice itemizing each deduction, together with the amount due to Tenant, if any. If Tenant has not given Landlord a forwarding address and Landlord has no notice of Tenant's whereabouts, Landlord will mail the notice and any amount due to Tenant's last known address. If Landlord sells the property, Landlord remains responsible for the Security Deposit unless it is transferred to the buyer and Tenant is notified in writing within a reasonable time, in which case the buyer is responsible; whoever holds Landlord's interest in the property when the tenancy ends is bound by this Section.",
  },
  {
    id: "security-deposit-standards-sc",
    title: "Security Deposit Calculation Standards",
    group: "Security Deposit",
    states: ["SC"],
    bodyText:
      "Landlord rents more than four adjoining dwelling units on the premises and uses different standards to calculate the security deposits required of different tenants. Those standards are: [state the standards by which security deposits are calculated]. Tenant acknowledges that Landlord provided this statement to Tenant before this Lease was signed.",
  },
  // Disclosures
  {
    id: "landlord-disclosure-sc",
    title: "Owner and Agent Disclosure",
    group: "Disclosures",
    states: ["SC"],
    bodyText:
      "Landlord discloses to Tenant, as South Carolina law requires, the name and address of an owner of the property, or of a person authorized to act on the owner's behalf as agent, among other things for service of process and for receiving and receipting for notices and demands: [owner or authorized agent name and address]. Landlord will keep this information current, and this obligation extends to any successor landlord, owner or manager.",
  },
  // Default & Termination
  {
    id: "nonpayment-notice-sc",
    title: "If You Do Not Pay Your Rent on Time",
    group: "Default & Termination",
    states: ["SC"],
    bodyText:
      "IF YOU DO NOT PAY YOUR RENT ON TIME\n\nThis is your notice. If you do not pay your rent within five days of the due date, the landlord can start to have you evicted. You will get no other notice as long as you live in this rental unit.\n\nThis Section is the written notice of nonpayment and of Landlord's intention to terminate this Lease if Rent is not paid within that period, and it is the written notice for nonpayment of Rent referred to in this Lease's Default by Tenant Section. It continues to apply if Tenant remains in the property on a month-to-month basis after the Term ends.",
  },
  {
    id: "possession-delay-sc",
    title: "Possession Delay",
    group: "Default & Termination",
    states: ["SC"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord does not deliver possession of the property to Tenant at the start of the Term as this Lease requires, Rent abates until possession is delivered, and Tenant may either: (a) terminate this Lease on at least 5 days' written notice to Landlord, in which case Landlord will return all prepaid Rent and the Security Deposit; or (b) demand that Landlord perform this Lease and, if Tenant chooses, bring an action for possession against Landlord or any person wrongfully in possession and recover Tenant's actual damages. If Landlord cannot deliver possession because a previous tenant has stayed in possession without Landlord's consent after that tenant's rental agreement ended or was terminated, Landlord is not liable for those damages if Landlord made reasonable efforts to obtain possession. If a person's failure to deliver possession is wilful and not in good faith, Tenant may recover from that person up to the greater of three months' periodic Rent or twice Tenant's actual damages, plus reasonable attorney's fees.",
  },
  // Pets
  {
    id: "pet-policy-sc",
    title: "Pets",
    group: "Pets",
    states: ["SC"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any refundable pet deposit ({{pet_deposit}}, if applicable) is part of the Security Deposit and will be held, applied and returned with it. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet, and will reimburse Landlord for claims caused by Tenant's pet, except to the extent a claim arises from Landlord's own negligence or other liability Landlord has under law. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms and South Carolina law permit, including without notice in an emergency, and will not seize or remove a pet except through a court process or with the help of animal control or law enforcement. This Section does not apply to a service animal or other assistance animal.",
  },
  {
    id: "assistance-animal-accommodation-sc",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["SC"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant with a disability needs is not a pet under this Lease, regardless of any pet policy, breed, weight or size restriction stated elsewhere in this Lease, and Landlord will not charge a pet deposit, pet rent, pet fee or any other extra compensation for it. Tenant remains liable for any damage the animal does to the property. A person with a disability who has an assistance dog is entitled to full and equal access to the property with the dog. Any other assistance animal, including an emotional support animal, may be kept at Tenant's request as a reasonable accommodation for a disability. For such an animal, Landlord may ask whether the person seeking to live with the animal has a disability that is a physical or mental impairment that substantially limits one or more major life activities, and whether that person has a disability-related need for the animal, and may request documentation verifying the answers; documentation is sufficient if it establishes that the person has a disability and that the animal will provide some type of disability-related assistance or emotional support. Landlord may deny or withdraw that accommodation if the specific animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-sc",
    title: "Domestic Violence Lease Termination",
    group: "Default & Termination",
    states: ["SC"],
    bodyText:
      "If Tenant is a protected tenant under South Carolina law, meaning a tenant who is the victim of domestic abuse or violence committed by another person who is also a tenant on this Lease for this property, documented by a restraining order or an order of protection or by the perpetrator's conviction, Tenant may terminate Tenant's future obligations under this Lease by written notice to Landlord given within 60 days after the documented incident. The notice must be accompanied by documentation of the incident, such as the restraining order, the order of protection or evidence of the conviction. The termination takes effect on the date stated in the notice, which must be at least 30 days after Landlord receives it unless Landlord agrees in writing to an earlier date. Tenant must give up possession and remains responsible for Rent and other amounts owed through the termination date and for any damage Tenant caused to the property, but owes no fee or penalty for the early termination. Any Security Deposit due to be returned will be returned at the end of the Term. Any other Tenant on this Lease remains responsible for the full Rent for the rest of the Term; if the perpetrator is the only remaining Tenant, Landlord may terminate this Lease on 5 days' written notice and recover its actual damages from the perpetrator. Landlord will not require the protected tenant to leave before the 60-day period ends, except by agreement, and will not retaliate against Tenant for terminating under this Section.",
  },
  {
    id: "casualty-termination-sc",
    title: "Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["SC"],
    bodyText:
      "If the property is damaged or destroyed by fire or casualty to the extent that normal use and occupancy of the property is substantially impaired, Tenant may either: (a) immediately vacate the property and notify Landlord in writing within 7 days afterward of Tenant's intention to terminate this Lease, in which case this Lease terminates as of the date Tenant vacated; or (b) if continued occupancy is lawful, vacate any part of the property made unusable by the fire or casualty, in which case Tenant's Rent is reduced in proportion to the reduction in the property's fair-market rental value. Rent will be accounted for as of the date of the fire or casualty. If this Lease terminates, Landlord will return the Security Deposit recoverable by Tenant and all prepaid Rent, unless the fire or casualty was due to Tenant's negligence or was otherwise caused by Tenant, in which case Landlord may withhold the Security Deposit and prepaid Rent but will still give Tenant the itemized written notice this Lease's Security Deposit terms require.",
  },
  {
    id: "casualty-landlord-termination-sc",
    title: "Landlord's Option to End the Lease After a Fire or Casualty",
    group: "Default & Termination",
    states: ["SC"],
    bodyText:
      "If the property is damaged or destroyed by fire or other casualty to the extent that normal use and occupancy of the property is substantially impaired, and the fire or casualty was not caused by Landlord's deliberate or negligent act, Landlord may terminate this Lease by written notice to Tenant, effective on the date stated in the notice or, if Tenant has already vacated, on the date Tenant vacated. Rent will be accounted for as of the date of the fire or casualty, and prepaid Rent and the Security Deposit will be returned as this Lease's Fire or Casualty Damage and Security Deposit terms provide. This Section is in addition to Tenant's rights under this Lease's Fire or Casualty Damage terms and South Carolina law and does not reduce them.",
  },
  {
    id: "holdover-rate-sc",
    title: "Holdover Charge",
    group: "Default & Termination",
    states: ["SC"],
    bodyText:
      "If Tenant remains in possession after the end of the Term, and Landlord has not agreed in writing to a continued tenancy or accepted Rent for one under the Holdover section of this Lease, then, in place of the actual damages and reasonable rental value described in that section, Tenant will pay Landlord a holdover charge of {{holdover_daily_rate}} for each day Tenant remains in possession. Landlord and Tenant agree that Landlord's loss from a holdover, including delay in making the property available to a new tenant, is difficult to estimate accurately in advance, that this charge is a reasonable estimate of that loss, and that it is not a penalty. Landlord's acceptance of a holdover charge is not acceptance of Rent for a continued tenancy. This Section does not limit Landlord's right to recover possession, unpaid Rent and other amounts due for the period before the Term ended, or damages for harm to the property.",
  },
  // Access & Entry
  {
    id: "periodic-services-entry-sc",
    title: "Entry for Regularly Scheduled Services",
    group: "Access & Entry",
    states: ["SC"],
    bodyText:
      "Landlord or Landlord's agent may enter the property without Tenant's consent between 9:00 a.m. and 6:00 p.m. to provide the following regularly scheduled periodic services: [list the services and their schedule, such as changing furnace and air-conditioning filters every [number] months, or termite, insect or pest treatment every [number] months]. Before entering, Landlord or Landlord's agent will announce the intent to enter to perform the services.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-repair-agreement-sc",
    title: "Tenant-Performed Repairs and Maintenance",
    group: "Tenant Responsibilities",
    states: ["SC"],
    bodyText:
      "Tenant agrees to perform the following specified repairs, maintenance tasks, alterations or remodeling: [list each task specifically]. If the property is a single-family residence, this list may include Landlord's duty to maintain in reasonably good and safe working order the electrical, gas, plumbing, sanitary, heating, ventilating, air-conditioning and other facilities and appliances Landlord supplies. For any other dwelling unit, the list does not include work needed to bring the property into compliance with building and housing codes materially affecting health and safety. Landlord and Tenant make this agreement in good faith and not to evade Landlord's obligations under South Carolina law, and it does not diminish or affect Landlord's obligations to any other tenant of the premises. Landlord remains responsible for its other duties under South Carolina law, including keeping the property fit and habitable.",
  },
  // Landlord Responsibilities
  {
    id: "appliances-excluded-sc",
    title: "Appliances Not Supplied by Landlord",
    group: "Landlord Responsibilities",
    states: ["SC"],
    bodyText:
      "The following appliances present at the property are not supplied by Landlord, and Landlord is not responsible for maintaining them: [list each excluded appliance]. This Section does not exclude any appliance or facility necessary to provide essential services, which are sanitary plumbing or sewer services, electricity, gas used for heat, hot water or cooking, running water, and reasonable amounts of hot water and heat.",
  },
  // Rules & Regulations
  {
    id: "smoke-detectors-sc",
    title: "Smoke Detectors",
    group: "Rules & Regulations",
    states: ["SC"],
    bodyText:
      "Landlord has supplied and installed smoke detectors at the property, and when Tenant takes possession Landlord will give Tenant instructions for testing the detectors and, for any battery-operated detector, for replacing its batteries. Tenant will test the detectors as instructed, will replace the batteries in any battery-operated detector as needed, and will not disable, tamper with or damage any detector. Tenant will notify Landlord in writing of any deficiency in a detector's performance, delivered to the place where Tenant pays Rent or any other place Landlord designates for notices, and Landlord will repair or replace a deficient detector within 15 days after receiving that notice. If Landlord determines on inspection or testing that a detector was deliberately tampered with, damaged or destroyed by Tenant or a person Tenant authorized to live at the property, Landlord will notify Tenant in writing and may charge Tenant the actual cost of repairing or replacing it.",
  },
  // Disclosures
  {
    id: "meter-conservation-charge-notice-sc",
    title: "Notice of Meter Conservation Charge",
    group: "Disclosures",
    states: ["SC"],
    bodyText:
      "Landlord gives Tenant notice that the utility account for the property carries a meter conservation charge, permitted by South Carolina law, to recover the cost of energy efficiency and conservation measures installed at the property: {{meter_conservation_charge_details}}. The charge is billed on the utility account for the property, which Tenant pays under this Lease.",
  },
  // Default & Termination
  {
    id: "abandoned-property-sc",
    title: "Abandonment and Property Left Behind",
    group: "Default & Termination",
    states: ["SC"],
    bodyText:
      "If Rent is unpaid and Tenant is absent from the property without explanation for 15 days, Tenant will be considered to have abandoned the property; if Tenant has voluntarily terminated the utilities and is absent without explanation after failing to pay Rent, the abandonment is immediate. If Tenant abandons the property, Landlord will make reasonable efforts to rent it at a fair rental, and if Landlord rents it for a term beginning before this Lease would have ended, this Lease ends when the new tenancy begins, subject to Landlord's remedies for Tenant's breach. When the property has been abandoned, or this Lease has ended, and Tenant has removed a substantial portion of Tenant's belongings or has voluntarily and permanently terminated the utilities, Landlord may enter the property and dispose of personal property left there with a fair-market value of $500 or less. Other personal property left behind will be removed only through the court procedure South Carolina law provides.",
  },
  // Rent & Payment
  {
    id: "late-fee-tn-other",
    title: "Late Fee (Tennessee Counties Outside the URLTA)",
    group: "Rent & Payment",
    states: ["TN"],
    supersedes: "late-fee",
    choiceGroup: "tn-urlta-late-fee",
    choiceGroupDefault: false,
    bodyText:
      "If Tenant fails to pay Monthly Rent in full within {{late_fee_grace_days}} days after it is due, a late fee of {{late_fee_amount}} will be assessed. Acceptance of a late payment does not waive Landlord's right to require full payment of Rent on the date it is due or to pursue any other remedy available under this Lease.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-tn-act",
    title: "Security Deposit Account, Inspection and Refund (Tennessee URLTA Counties)",
    group: "Security Deposit",
    states: ["TN"],
    supersedes: "security-deposit-return",
    choiceGroup: "tn-urlta-deposit-return",
    choiceGroupDefault: true,
    bodyText:
      "Landlord will keep the Security Deposit in an account used only for security deposits, at a bank or other lending institution regulated by the State of Tennessee or an agency of the United States. The account is located at: [name and address of the bank or institution; the account number need not be given]. When Landlord asks Tenant to vacate, or within five days after Landlord receives Tenant's written notice of intent to vacate, Landlord will notify Tenant of Tenant's right to be present at an inspection of the property to determine any damage that is the basis for a charge against the Security Deposit, and Tenant may request an inspection time during normal working hours. The inspection will take place on the day Tenant completely vacates or within four calendar days afterward, once Tenant is ready to surrender possession and has returned all means of access. At a joint inspection Landlord and Tenant will list any presently ascertainable damage and the estimated cost of repair, and both will sign the list; if Tenant refuses to sign, Tenant will state specifically in writing each item Tenant disputes. NOTICE OF WAIVER: if Tenant schedules an inspection after receiving Landlord's written notice of the right to be present, and then fails to attend it, Tenant waives the right to contest any damages Landlord finds at that inspection. If Tenant has vacated without written notice, abandoned the property, been judicially removed, not contacted Landlord after the notice, failed to appear at the arranged inspection, not requested an inspection, or is otherwise inaccessible, Landlord will inspect and list the damage and estimated repair costs without Tenant, and will send Tenant a copy by certificate of mailing if Tenant asks for one in writing. If Tenant vacates owing Rent or other amounts, Landlord may apply the Security Deposit to them. If Tenant owes nothing and a refund is due, Landlord will send notice of the amount of the refund to Tenant's last known or reasonably determinable address and will pay the refund promptly when Tenant responds; if Tenant does not respond within 60 days after the notice is sent, Landlord may retain the deposit. Landlord may also recover contractual damages, and the cost of physical damage discovered after the inspection if Landlord discovers it before the earlier of 30 days after Tenant vacated or seven days after a new tenant takes possession. If Landlord sells the property in good faith and transfers the Security Deposit to the buyer with written notice to Tenant, the buyer becomes responsible for it.",
  },
  {
    id: "security-deposit-return-tn-other",
    title: "Security Deposit Return (Tennessee Counties Outside the URLTA)",
    group: "Security Deposit",
    states: ["TN"],
    supersedes: "security-deposit-return",
    choiceGroup: "tn-urlta-deposit-return",
    choiceGroupDefault: false,
    bodyText:
      "Within 30 days after this Lease ends and Tenant has vacated the property and returned all keys, Landlord will return the Security Deposit to Tenant, less any deductions for unpaid Rent and other amounts due under this Lease and for damage to the property beyond ordinary wear and tear, together with a written statement itemizing each deduction. Tenant may ask to be present when Landlord inspects the property after Tenant vacates. Tenant will give Landlord a forwarding address in writing; if Tenant does not, Landlord will send the statement and any refund to Tenant's last known address. If Landlord sells the property, Landlord remains responsible for the Security Deposit unless it is transferred to the buyer and Tenant is notified in writing, in which case the buyer is responsible for it.",
  },
  // Access & Entry
  {
    id: "landlords-access-tn-act",
    title: "Landlord's Access (Tennessee URLTA Counties)",
    group: "Access & Entry",
    states: ["TN"],
    supersedes: "landlords-access",
    choiceGroup: "tn-urlta-landlord-entry",
    choiceGroupDefault: true,
    bodyText:
      "Tenant will not unreasonably withhold consent to Landlord, its agents and contractors entering the property to inspect it, make necessary or agreed repairs, decorations, alterations or improvements, supply necessary or agreed services, or show it to prospective or actual purchasers, mortgagees, workers or contractors. Except in an emergency, Landlord will ask for entry at reasonable times and give Tenant at least 24 hours' notice. Landlord may enter without Tenant's consent: in an emergency, meaning a sudden, generally unexpected occurrence or set of circumstances demanding immediate action; if utilities have been turned off through no fault of Landlord, to inspect for and repair damage resulting from the lack of utilities; by court order; at times reasonably necessary during any absence of Tenant of more than seven days; if Tenant has abandoned or surrendered the property; if Tenant is deceased, incapacitated or incarcerated; and to do maintenance work Tenant has failed to do after written notice, as this Lease and Tennessee law allow. During the final 30 days of this Lease, Landlord may also enter to show the property to prospective tenants, after giving Tenant at least 24 hours' notice. Landlord will not abuse the right of access or use it to harass Tenant.",
  },
  {
    id: "landlords-access-tn-other",
    title: "Landlord's Access (Tennessee Counties Outside the URLTA)",
    group: "Access & Entry",
    states: ["TN"],
    supersedes: "landlords-access",
    choiceGroup: "tn-urlta-landlord-entry",
    choiceGroupDefault: false,
    bodyText:
      "Landlord, its agents, and contractors will have the right of reasonable access to the property during normal business hours to perform maintenance and repair obligations and to show the property to prospective tenants or purchasers. Except in the case of an emergency, Landlord will provide Tenant at least 24 hours' notice, or the notice period required by applicable law if longer, prior to entry.",
  },
  // Default & Termination
  {
    id: "nonpayment-notice-waiver-tn",
    title: "Waiver of Nonpayment Notice (Tennessee URLTA Counties Only)",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "Waiver of notice for nonpayment of Rent. Tenant waives the written notice of nonpayment of Rent that Tenn. Code Ann. § 66-28-505 would otherwise require. If Rent is not paid by the end of the five-day grace period in this Lease, Landlord may file a detainer warrant to recover possession immediately, without first giving Tenant written notice of the nonpayment. This waiver does not shorten the grace period. It applies notwithstanding any other provision of this Lease that refers to written notice of nonpayment, including the Default by Tenant Section.",
  },
  // Disclosures
  {
    id: "landlord-disclosure-tn",
    title: "Owner and Manager Disclosure",
    group: "Disclosures",
    states: ["TN"],
    bodyText:
      "As Tennessee law requires, Landlord discloses: (a) the name and address of the agent authorized to manage the property, which may be a property management company: [name and address]; (b) the name and address of an owner of the property, or of a person or agent authorized to act for the owner, for accepting service of process and receiving notices and demands: [name and address]; and (c) for maintenance requests: [a telephone number or e-mail address for maintenance services, or an online portal for landlord-tenant communication]. Landlord will keep this information current, and this obligation extends to any successor landlord, owner or manager.",
  },
  // Notices & General
  {
    id: "renters-insurance-advisory-tn",
    title: "Tenant's Personal Property Insurance Notice",
    group: "Notices & General",
    states: ["TN"],
    bodyText:
      "Landlord is not responsible for, and will not provide, fire or casualty insurance for Tenant's personal property.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-tn",
    title: "Service and Support Animals",
    group: "Pets",
    states: ["TN"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or support animal that Tenant or an Occupant with a disability needs is not a pet under this Lease. Tenant or a prospective tenant may request an exception to any policy in this Lease that prohibits or limits animals or requires a payment for an animal, and Landlord will not charge a pet deposit, pet rent or pet fee for an animal allowed as an accommodation. If the disability is not readily apparent or known to Landlord, Landlord may ask for reliable documentation of the disability and of the disability-related need for the animal; if the disability is apparent or known but the need is not, Landlord may ask for reliable documentation of the need. Reliable documentation comes from a health care provider, a licensed or certified professional serving people with disabilities, or a caregiver, reliable third party or government entity, in each case with actual knowledge of the disability; a certificate, registration or similar document from a website whose main purpose is to sell such documents does not qualify. Landlord may verify the documentation but will not ask for confidential medical records, and may deny the request if accurate, reliable documentation is not provided after Landlord asks for it. A totally or partially blind person with a guide dog will not be required to pay any deposit or extra compensation for the dog. Tenant remains liable for any damage the animal causes to the property. Landlord may deny or withdraw an accommodation for a specific animal that poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation. If Tenant misrepresents that there is a disability or a disability-related need for a service animal or support animal, or provides documentation that falsely states an animal is a service animal or support animal, that is a material noncompliance with and default under this Lease, and Landlord may terminate the tenancy and recover damages, including reasonable attorney's fees.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-tn",
    title: "Early Termination by a Victim of Domestic Abuse, Sexual Assault or Stalking",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "If Tenant or a member of Tenant's family who lives in the same household is a domestic abuse victim, sexual assault victim or stalking victim, whether an adult or a child, Tenant may terminate this Lease (if it was entered into or renewed on or after July 1, 2021) by giving Landlord: (a) written notice requesting release from this Lease; (b) a mutually agreed release date within 30 days after the date of the notice; and (c) either a copy of a valid order of protection issued or extended after a hearing at which the court found by a preponderance of the evidence that the tenant or household member is such a victim, or documentation of a criminal charge of domestic abuse, sexual assault or stalking, based on a police report reflecting that the tenant or household member was subjected to it. The documentation must be dated no more than 60 days before Tenant's notice. Tenant will vacate within 30 days after giving notice, or at another time Landlord and Tenant agree. Tenant remains responsible for the Rent for the full month in which the tenancy ends and for obligations outstanding on the termination date, but not for future Rent or for early termination penalties or fees. Termination under this Section does not release any other party to this Lease. Unless required by law or a court, Landlord will not reveal information that could reasonably be used to locate the former tenant or household member without that tenant's written consent. Landlord will not terminate the tenancy or evict a tenant solely because the tenant or a household member is a victim of domestic abuse, sexual assault or stalking.",
  },
  {
    id: "casualty-termination-tn",
    title: "Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "If the property is damaged or destroyed by fire or casualty so that its use is substantially impaired, including where a governmental authority has deemed it unfit for human habitation, or so that it is untenantable and unfit for occupancy, Tenant may immediately vacate the property and notify Landlord in writing within 14 days afterward of Tenant's intention to terminate this Lease, in which case this Lease terminates as of the date Tenant vacated. If restoring the property to its undamaged condition requires Tenant to vacate, Landlord may terminate this Lease within 14 days after giving Tenant written notice. If this Lease terminates under this Section, Landlord will return all prepaid Rent and the Security Deposit recoverable by Tenant, and Rent will be accounted for as of the date Tenant returns the keys or actually vacates, whichever is earlier. This Section does not relieve Tenant of liability for damage caused by the fault or neglect of Tenant or anyone at the property with Tenant's consent.",
  },
  {
    id: "holdover-rate-tn",
    title: "Holdover Charge (Optional)",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "If Tenant remains in possession after the end of the Term, and Landlord has not agreed in writing to a continued tenancy or accepted Rent for one under the Holdover section of this Lease, then, in place of the actual damages and reasonable rental value described in that section, Tenant will pay Landlord a holdover charge of {{holdover_daily_rate}} for each day Tenant remains in possession. Landlord and Tenant agree that Landlord's loss from a holdover, including delay in making the property available to a new tenant, is difficult to estimate accurately in advance, that this charge is a reasonable estimate of that loss, and that it is not a penalty. Landlord's acceptance of a holdover charge is not acceptance of Rent for a continued tenancy. This Section does not limit Landlord's right to recover possession, unpaid Rent and other amounts due for the period before the Term ended, or damages for harm to the property.",
  },
  {
    id: "periodic-tenancy-notice-tn",
    title: "Ending a Month-to-Month or Week-to-Week Tenancy",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "If this Lease continues as a month-to-month tenancy, either Landlord or Tenant may end it by written notice given to the other at least 30 days before the periodic rental date specified in the notice as the termination date. If this Lease continues as a week-to-week tenancy, either party may end it by written notice given to the other at least 10 days before the termination date specified in the notice. Rent remains payable through the termination date. This Section does not limit either party's right to end this Lease earlier where this Lease or applicable law allows it.",
  },
  {
    id: "abandoned-property-tn",
    title: "Abandonment and Property Left Behind",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "Tenant's unexplained or extended absence from the property for 30 days or more without paying Rent as due is prima facie evidence that Tenant has abandoned the property, and Landlord may then reenter and take possession. Nonpayment of Rent for 15 days past the due date, together with other reasonable factual circumstances indicating that Tenant has permanently vacated (such as Tenant's removal of substantially all of Tenant's possessions or Tenant's voluntary termination of utility service), is also prima facie evidence of abandonment. In that case Landlord will post a notice at the property and send it to Tenant by regular mail, postage prepaid, at the property address, stating that Landlord believes Tenant has abandoned the property; that Landlord intends to reenter and take possession unless Tenant contacts Landlord within 10 days after the posting and mailing; that if Tenant does not, Landlord intends to remove any possessions left at the property and rerent it; and that Landlord intends to dispose of possessions not reclaimed within 30 days after Landlord takes possession of them. The notice will give a telephone number and mailing address at which Landlord can be contacted. If Tenant contacts Landlord within the 10 days and intends to remain, Landlord will recover possession only through the court process. When Landlord takes possession after abandonment, Landlord will remove and store Tenant's possessions for at least 30 days, during which Tenant may reclaim them; after that Landlord may sell or otherwise dispose of them and apply the proceeds to unpaid Rent, damages, storage fees, sale costs and attorney's fees, holding any balance for Tenant for six months after the sale. If Tenant abandons the property, Landlord will use reasonable efforts to rerent it at a fair rental, and if Landlord rents it for a term beginning before this Lease would have ended, this Lease ends when the new tenancy begins.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-repair-agreement-tn",
    title: "Tenant-Performed Repairs by Separate Agreement",
    group: "Tenant Responsibilities",
    states: ["TN"],
    bodyText:
      "Tenant agrees to perform the following specified repairs, maintenance tasks, alterations or remodeling: [list each task specifically]. Landlord and Tenant make this agreement in good faith and not for the purpose of evading Landlord's obligations. This agreement is separate from the rest of this Lease, and Landlord will not treat Tenant's performance of it as a condition of any obligation or performance under this Lease. Landlord remains responsible for Landlord's other duties under Tennessee law, including complying with building and housing codes materially affecting health and safety and keeping the property fit and habitable.",
  },
  {
    id: "utility-transfer-tn",
    title: "Utilities in Tenant's Name (Tennessee URLTA Counties Only)",
    group: "Tenant Responsibilities",
    states: ["TN"],
    bodyText:
      "Tenant will have the following utility services placed in Tenant's name within three days after Tenant takes occupancy: [list each utility service - water, electricity, sewer or natural gas]. If Tenant fails to do so, Landlord may have any of those services that are in Landlord's name terminated.",
  },
  // Notices & General
  {
    id: "electronic-notice-tn",
    title: "E-mail Notices (Optional for Tenant)",
    group: "Notices & General",
    states: ["TN"],
    bodyText:
      "Tenant may, but is not required to, provide an e-mail address for notices: [Tenant's e-mail address, if Tenant chooses to provide one]. If Tenant provides one, Landlord may send any notice to Tenant by e-mail to that address, except a notice that Tennessee law requires to be given in another form. Providing an e-mail address is not a condition of this Lease.",
  },
  // Rules & Regulations
  {
    id: "smoke-alarms-tn",
    title: "Smoke Alarms",
    group: "Rules & Regulations",
    states: ["TN"],
    bodyText:
      "Landlord has installed an approved smoke alarm in the dwelling unit that, when activated, sounds a warning audible in the sleeping rooms, and has made sure it is operational before Tenant's occupancy. Tenant will maintain the smoke alarm in accordance with the manufacturer's instructions, including testing it and replacing batteries as those instructions direct, and will not tamper with, disable or remove any smoke alarm or any of its components. Tenant will promptly notify Landlord if a smoke alarm is not working.",
  },
  {
    id: "firearm-carry-rules-tn",
    title: "Firearms in Common Areas (Optional)",
    group: "Rules & Regulations",
    states: ["TN"],
    bodyText:
      "Tenant may lawfully possess, carry, transport and store firearms, firearm parts and ammunition within the dwelling unit, in a vehicle in the parking area provided for tenants, and in other areas Landlord controls to the extent necessary to go directly between them. Landlord requires that Tenant transport a firearm between a vehicle and the dwelling unit only while it is concealed or holstered on Tenant or stored in a carrying container, and keep any firearm concealed, holstered or stored in a carrying container while in other common areas, including elevators and shared hallways. If Tenant does not comply with this requirement, Landlord may ask that the conduct stop or be brought into compliance, and may treat a continued failure to comply after written notice as a breach of this Lease; no remedy under this Section will prohibit Tenant's lawful possession of firearms within the dwelling unit.",
  },
  // Pets
  {
    id: "pet-policy-tn",
    title: "Pets",
    group: "Pets",
    states: ["TN"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any refundable pet deposit ({{pet_deposit}}, if applicable) is part of the Security Deposit and will be held, applied and returned with it. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet, and will reimburse Landlord for claims caused by Tenant's pet, except to the extent a claim arises from Landlord's own negligence or other liability Landlord has under law. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms and Tennessee law permit, including without consent in an emergency, and will not seize or remove a pet except through a court process or with the help of animal control or law enforcement. This Section does not apply to a service animal or support animal allowed under this Lease's terms for those animals.",
  },
  // Default & Termination
  {
    id: "eviction-service-party-tn",
    title: "Person Named to Accept Eviction Papers (Optional)",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "Person named to accept service in a possession action. Tenant names the following adult as a person on whom a summons in any detainer action to recover possession of the property may be served: Name: [name]. Address: [street address]. Telephone: [number]. Service of the summons on that person is good and sufficient for Landlord to regain possession of the property, in addition to every other method of service the law allows. This naming applies only to recovering possession of the property, not to any claim for money. Tenant may name a different adult by written notice to Landlord giving that person's name and address; the change takes effect when Landlord receives the notice.",
  },
  {
    id: "possession-bond-tn",
    title: "Bond to Deliver Possession at End of Term (Non-URLTA Counties Only, Optional)",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "Bond to deliver possession at the end of the term. Tenant binds Tenant to deliver possession of the property at [full street address, and legal description or other description sufficient to identify the premises] to Landlord on [date], the day this Lease names as the end of its term. If Tenant does not deliver possession on that day, Tenant authorizes Landlord, or [name of another person] as Tenant's attorney for this purpose, to appear on any day of the [name the term of the court] term of the [name of the court having jurisdiction, for example: General Sessions Court of ______ County, Tennessee] and there, in Tenant's name, confess a judgment for possession of the property. This bond covers only possession at the end of the term named above. It does not authorize a judgment for rent or any other money, and it does not apply if this Lease ends early for any reason. This Section does not apply to property in Anderson, Blount, Bradley, Davidson, Hamilton, Knox, Madison, Maury, Montgomery, Rutherford, Sevier, Shelby, Sullivan, Sumner, Washington, Williamson or Wilson County.",
  },
  {
    id: "household-goods-lien-tn",
    title: "Security Interest in Tenant's Household Goods (Tennessee URLTA Counties Only, Optional)",
    group: "Default & Termination",
    states: ["TN"],
    bodyText:
      "Security interest in household goods. To secure payment of Rent and every other amount Tenant owes under this Lease, Tenant grants Landlord a security interest in the following household goods of Tenant kept at the property: [list each item specifically, with a description and any serial number]. This security interest is enforceable only if Landlord perfects it by filing a Uniform Commercial Code financing statement with the Tennessee Secretary of State, and Tenant authorizes Landlord to file one. Landlord will not take, remove or hold any of Tenant's property to enforce this security interest except through court process. Landlord will release the security interest, including by filing a termination statement, at the expiration or termination of this Lease. This Lease creates no other lien on Tenant's property.",
  },
  // Rent & Payment
  {
    id: "returned-payments-va",
    title: "Returned Checks and Failed Electronic Payments",
    group: "Rent & Payment",
    states: ["VA"],
    supersedes: "returned-payments",
    bodyText:
      "If a check or electronic funds transfer Tenant gives Landlord is refused or rejected because of insufficient funds or because there is no account, or because a stop-payment order was placed in bad faith, Tenant will pay Landlord a processing fee of {{nsf_fee}}, which will not exceed $50, together with any other amounts Virginia law allows Landlord to recover for a dishonored payment. If the dishonored payment was for Rent, Landlord may give Tenant written notice requiring payment within 14 days by cash, cashier's check, certified check or a completed electronic funds transfer, and may terminate this Lease as Virginia law provides if Tenant does not pay within that period.",
  },
  // Tenant Responsibilities
  {
    id: "acceptable-payment-methods-va",
    title: "Acceptable Forms of Payment",
    group: "Tenant Responsibilities",
    states: ["VA"],
    supersedes: "acceptable-payment-methods",
    choiceGroup: "va-size-payment-methods",
    choiceGroupDefault: true,
    bodyText:
      "Landlord accepts payment of Rent and the Security Deposit by personal check and by money order, and also by the following methods: [list any other accepted methods, e.g. online payment portal, ACH transfer, debit or credit card]. Landlord will give Tenant a written receipt whenever Tenant pays Rent in cash or by money order. Landlord will not charge Tenant a fee for collecting or processing any payment of Rent, the Security Deposit or any other amount unless Landlord also offers a payment method that has no added fee, and any fee Landlord charges for a payment by credit card, debit card or other electronic payment will not exceed the actual out-of-pocket cost a third party charges Landlord to process that payment. The accepted payment methods may be changed only by a written agreement signed by Landlord and Tenant.",
  },
  {
    id: "acceptable-payment-methods-va-small",
    title: "Acceptable Forms of Payment (Landlord With Four or Fewer Virginia Units)",
    group: "Tenant Responsibilities",
    states: ["VA"],
    supersedes: "acceptable-payment-methods",
    choiceGroup: "va-size-payment-methods",
    choiceGroupDefault: false,
    bodyText:
      "Landlord owns four or fewer rental dwelling units in Virginia (or up to a 10 percent interest in four or fewer). Landlord accepts payment of Rent and the Security Deposit by personal check and by money order, and also by the following methods: [list any other accepted methods, e.g. online payment portal or ACH transfer]. Landlord does not accept payment of Rent or the Security Deposit by debit or credit card. Landlord will give Tenant a written receipt whenever Tenant pays Rent in cash or by money order. Landlord will not charge Tenant a fee for collecting or processing any payment of Rent, the Security Deposit or any other amount unless Landlord also offers a payment method that has no added fee, and any fee Landlord charges for a payment by credit card, debit card or other electronic payment will not exceed the actual out-of-pocket cost a third party charges Landlord to process that payment. The accepted payment methods may be changed only by a written agreement signed by Landlord and Tenant.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-va",
    title: "Security Deposit: Limit, Use, Inspection and Return",
    group: "Security Deposit",
    states: ["VA"],
    supersedes: "security-deposit-return",
    bodyText:
      "The Security Deposit, including any pet deposit, will not exceed two months' periodic Rent, and if any damage insurance or renter's insurance premiums are paid to Landlord before this Lease begins, the Security Deposit and those premiums together will not exceed two months' periodic Rent. When the tenancy ends or Tenant vacates, whichever is later, Landlord may apply the Security Deposit only to accrued Rent (including reasonable late charges stated in this Lease), damages caused by Tenant's failure to meet Tenant's maintenance obligations under Virginia law less reasonable wear and tear, other damages or charges provided for in this Lease, and actual damages for breach of this Lease. Tenant may not use the Security Deposit as a credit against Rent owed. Within 45 days after the tenancy terminates or Tenant vacates, whichever occurs last, Landlord will give Tenant a written notice itemizing the Security Deposit and any deductions, damages and charges, together with any amount due to Tenant. If damages exceed the Security Deposit and require a third-party contractor, Landlord will give Tenant written notice of that within the 45 days and will then have 15 more days to itemize the damages and the cost of repair. When Landlord asks Tenant to vacate, or within five days after Landlord receives Tenant's notice of intent to vacate, Landlord will notify Tenant in writing of Tenant's right to be present at the move-out inspection; if Tenant tells Landlord in writing that Tenant wants to be present, Landlord will tell Tenant the date and time, and the inspection will be made within 72 hours after Tenant delivers possession. Tenant will give Landlord a forwarding address in writing. Unless every Tenant agrees otherwise in writing, any refund will be made by one check payable to all Tenants and sent to a forwarding address one of them provides; if no forwarding address is given, Landlord may continue to hold the deposit and, one year after the 45-day period ends, may remit it to the State Treasurer as unclaimed property. If Tenant owes a third-party provider for water, sewer or another utility that is Tenant's obligation under this Lease, Landlord may withhold a reasonable portion of the deposit to cover it only after giving Tenant the advance written notice Virginia law requires, and will refund any balance within 10 days after the bill is paid. Landlord will notify Tenant in writing, within 30 days, of any deduction from the Security Deposit made during the tenancy.",
  },
  {
    id: "expedited-deposit-disposition-va",
    title: "Expedited Security Deposit Disposition (Optional)",
    group: "Security Deposit",
    states: ["VA"],
    bodyText:
      "If Tenant asks, in a written document separate from this Lease, that Landlord make the disposition of the Security Deposit before the end of the 45-day period Virginia law allows, Landlord may do so and may charge Tenant an administrative fee of {{expedited_deposit_fee}} for the expedited processing.",
  },
  // Landlord Responsibilities
  {
    id: "move-in-inspection-va",
    title: "Move-In Inspection Report",
    group: "Landlord Responsibilities",
    states: ["VA"],
    bodyText:
      "Within five days after Tenant takes occupancy, Landlord will give Tenant a written report itemizing any damages to the property existing at move-in. The report will be considered correct unless Tenant objects to it in writing within five days after receiving it. [Use only if Landlord has adopted a written policy allowing it: Tenant may instead prepare the move-in report and give Landlord a copy, in which case it will be considered correct unless Landlord objects in writing within five days after receiving it; or Landlord and Tenant may prepare the report together, and it will be considered correct once both have signed it and received a copy.] Landlord is not required to repair damages listed in the report except as Virginia law requires.",
  },
  // Disclosures
  {
    id: "defective-drywall-disclosure-va",
    title: "Defective Drywall Disclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "[Use only if Landlord has actual knowledge that the property contains defective drywall that has not been remediated.] Before Tenant signs this Lease, Landlord discloses in writing that the property contains defective drywall, as defined in Virginia law, that has not been remediated: [describe what Landlord knows].",
  },
  {
    id: "military-air-zone-disclosure-va",
    title: "Military Air Installation Noise or Accident Potential Zone Disclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "[Use only if the property is in a locality in which a military air installation is located and the property is in a noise zone or accident potential zone shown on the locality's official zoning map.] Before Tenant signs this Lease, Landlord discloses in writing that, according to the official zoning map of {{locality}}, the property is located in the following zone or zones: [state the noise zone and/or accident potential zone, as designated on the map].",
  },
  {
    id: "tenant-rights-statement-va",
    title: "Statement of Tenant Rights and Responsibilities",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "With this Lease, Landlord has given Tenant the Statement of Tenant Rights and Responsibilities developed by the Virginia Department of Housing and Community Development, and Landlord and Tenant will sign the Department's form acknowledging that Tenant received it. Landlord will give Tenant a copy of this signed Lease and of the Statement within 10 business days after this Lease takes effect. Once a year, on Tenant's request, Landlord will give Tenant an additional copy of this Lease, or will keep this Lease available to Tenant electronically at no charge.",
  },
  // Rent & Payment
  {
    id: "fee-disclosure-statement-va",
    title: "Fee Disclosure Statement (First Page)",
    group: "Rent & Payment",
    states: ["VA"],
    bodyText:
      "No additional security deposits or rent shall be charged unless they are listed below or incorporated into this agreement by way of a separate addendum after execution of this rental agreement.\n(i) Security deposit: {{security_deposit}} [itemize each component, e.g. security deposit, pet deposit]\n(ii) Rent due per payment period for the lease period: {{monthly_rent}} [itemize each charge that makes up the periodic Rent, e.g. base rent, pet rent, utility or insurance charges billed as rent]\n(iii) One-time charges due before the commencement date, or included in the first rental payment: [itemize each charge and amount]",
  },
  // Disclosures
  {
    id: "landlord-disclosure-va",
    title: "Owner and Manager Disclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "As Virginia law requires, Landlord discloses, for purposes of service of process and receiving and issuing receipts for notices and demands: (a) the name and address of the person authorized to manage the property: [name and address]; and (b) the name and address of an owner of the property, or of a person authorized to act for and on behalf of the owner: [name and address]. Landlord will keep this information current. If the property is sold, Landlord will notify Tenant of the sale and give Tenant the name and address of the purchaser and a telephone number at which the purchaser can be reached. [If the property is a multifamily dwelling unit and an application to register it as a condominium or cooperative has been filed with the Real Estate Board, or there is an existing plan, to take effect within six months, to displace tenants because of demolition, substantial rehabilitation, or conversion to office, hotel or motel use or a planned unit development, Landlord discloses: (describe).]",
  },
  {
    id: "nonresident-owner-agent-va",
    title: "Virginia Agent of Nonresident Owner",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "[Use if an owner of the property is an individual who does not reside in Virginia.] The owner designates the following agent, who is a Virginia resident (or an entity authorized to transact business in Virginia) and maintains a business office in Virginia, to receive service of any process, notice, order or demand required or permitted by law to be served on the owner: {{va_resident_agent_name}}, {{va_resident_agent_office_address}}.",
  },
  // Notices & General
  {
    id: "renters-insurance-notice-va",
    title: "Renter's Insurance and Flood Notice",
    group: "Notices & General",
    states: ["VA"],
    bodyText:
      "Landlord is not responsible for Tenant's personal property. Landlord's insurance coverage does not cover Tenant's personal property. If Tenant wishes to protect Tenant's personal property, Tenant should obtain renter's insurance. Any renter's insurance Tenant obtains does not cover flood damage. For information on whether the property is located in a special flood hazard area, Tenant should contact the Federal Emergency Management Agency (FEMA) or visit the websites for FEMA's National Flood Insurance Program or the Virginia Department of Conservation and Recreation's Flood Risk Information System. If Tenant asks for a translation of this notice from English into another language, Landlord may help Tenant obtain a translator or refer Tenant to an electronic translation service, at no charge.",
  },
  // Security Deposit
  {
    id: "damage-insurance-va",
    title: "Damage Insurance in Place of a Security Deposit (Optional)",
    group: "Security Deposit",
    states: ["VA"],
    bodyText:
      "Landlord will permit Tenant to provide damage insurance in place of all or part of the Security Deposit, if the coverage (a) is issued by a provider licensed or approved by the Virginia State Corporation Commission, (b) takes effect when the first premium is paid and remains in effect for the entire Lease term, (c) provides coverage per claim of not less than the Security Deposit Landlord requires, (d) obligates the provider to approve or deny payment of a claim, and (e) obligates the provider to notify Landlord within 10 days if the policy lapses or is canceled. Tenant may at any time, without Landlord's consent, pay the full Security Deposit instead of maintaining the damage insurance, and Landlord will not change the terms of this Lease if Tenant does so. Damage insurance premiums are Rent, not a security deposit. [If Landlord obtains damage insurance for Tenant: Tenant has the right to obtain a separate policy instead; Landlord will give Tenant a summary of the policy or a certificate of coverage before this Lease is signed and a copy of the policy on request; the policy will cover Tenant as an insured; and Landlord will recover from Tenant the actual cost of the coverage and an administrative fee of {{damage_insurance_admin_fee}}.]",
  },
  // Access & Entry
  {
    id: "landlords-access-va",
    title: "Landlord's Access",
    group: "Access & Entry",
    states: ["VA"],
    supersedes: "landlords-access",
    bodyText:
      "Tenant will not unreasonably withhold consent for Landlord, its agents and contractors to enter the property to inspect it; make necessary or agreed repairs, decorations, alterations or improvements; supply necessary or agreed services; or show it to prospective or actual purchasers, mortgagees, tenants, workmen or contractors. Except in an emergency or where it is impractical, Landlord will give Tenant notice of Landlord's intent to enter and will enter only at reasonable times. For routine maintenance that Tenant has not requested, Landlord will give Tenant at least 72 hours' notice unless that is impractical, the work will be performed within 14 days after the notice is delivered, and the notice will state the last date on which the work may be performed; no notice is needed for maintenance Tenant requests. Landlord may enter without Tenant's consent in an emergency, and during any absence of Tenant of more than seven days at times reasonably necessary to protect Landlord's property. Landlord will give Tenant at least 48 hours' written notice before applying an insecticide or pesticide in the property, unless Tenant requested the application or agrees to a shorter period; Tenant will prepare the property as Landlord's written instructions direct and will tell Landlord in writing, at least 24 hours before a scheduled application, of any concern about a specific product. If Tenant, without reasonable justification, declines to permit Landlord or Landlord's agent to show the property for sale or lease, Landlord may recover damages, costs and reasonable attorney fees. Landlord will not abuse the right of access or use it to harass Tenant.",
  },
  // Tenant Responsibilities
  {
    id: "no-sublet-assign-va",
    title: "No Subletting or Assignment Without Approval",
    group: "Tenant Responsibilities",
    states: ["VA"],
    supersedes: "no-sublet-assign",
    bodyText:
      "Tenant will not sublease or assign all or any portion of the property or this Lease without the prior written approval of Landlord. To ask for approval, the proposed subtenant or assignee must submit a written application on Landlord's form; Landlord will approve or disapprove the proposed subtenant or assignee within 10 business days after receiving it, and if Landlord does not act within that time the request will be treated as approved. Tenant will not rent the property, or any portion of it, through any short-term rental program such as Airbnb, VRBO or a similar service, and doing so will be cause for termination of this Lease by Landlord. Any attempted sublease or assignment without approval will be void and cause for termination of this Lease. No sublease will release Tenant from any obligation under this Lease.",
  },
  // Default & Termination
  {
    id: "holdover-rate-va",
    title: "Holdover Liquidated Damages (Optional)",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "If Tenant remains in the property without Landlord's consent after the termination date specified in Landlord's notice (or after this Lease otherwise ends), Tenant will pay Landlord, as liquidated damages in place of Landlord's actual damages for those days, {{holdover_daily_rate}} for each day Tenant remains after that date. This daily amount will not exceed 150 percent of the per diem of the monthly Rent, or, if the property is a public housing unit or other housing subject to regulation by the U.S. Department of Housing and Urban Development, the per diem of the monthly Rent. This Section does not limit Landlord's right to recover possession, reasonable attorney fees and court costs as Virginia law allows, unpaid Rent and other amounts due for the period before the termination date, or damages for harm to the property.",
  },
  {
    id: "redemption-rights-va",
    title: "Right of Redemption",
    group: "Default & Termination",
    states: ["VA"],
    choiceGroup: "va-size-redemption",
    choiceGroupDefault: true,
    bodyText:
      "Under Virginia law, if Landlord files an eviction case for nonpayment of Rent, Tenant (or someone paying on Tenant's behalf) may have the case dismissed by paying Landlord, Landlord's attorney or the court all Rent due as of the court date, other charges and fees, late charges, reasonable attorney fees and court costs at or before the first return date, or may present a written commitment from a local government or nonprofit entity to pay those amounts within 10 days. After the first return date, Tenant may still have a scheduled eviction canceled by paying all amounts claimed, including sheriff fees, at least 48 hours before the scheduled eviction. These rights do not apply if the case is also based on grounds other than nonpayment of Rent. On Tenant's written request, Landlord will give Tenant a written statement of all amounts owed. Payments to redeem must be made by cashier's check, certified check or money order.",
  },
  {
    id: "redemption-limit-va-small",
    title: "Right of Redemption Limited to Once per Lease Period (Landlord With Four or Fewer Virginia Units)",
    group: "Default & Termination",
    states: ["VA"],
    choiceGroup: "va-size-redemption",
    choiceGroupDefault: false,
    bodyText:
      "Landlord owns four or fewer rental dwelling units in Virginia (or up to a 10 percent interest in four or fewer). As Virginia law allows such a landlord, this Section is Landlord's written notice that Tenant may use the right of redemption described below only once during each lease period. Under Virginia law, if Landlord files an eviction case for nonpayment of Rent, Tenant (or someone paying on Tenant's behalf) may have the case dismissed by paying Landlord, Landlord's attorney or the court all Rent due as of the court date, other charges and fees, late charges, reasonable attorney fees and court costs at or before the first return date, or may present a written commitment from a local government or nonprofit entity to pay those amounts within 10 days. After the first return date, Tenant may still have a scheduled eviction canceled by paying all amounts claimed, including sheriff fees, at least 48 hours before the scheduled eviction. These rights do not apply if the case is also based on grounds other than nonpayment of Rent. On Tenant's written request, Landlord will give Tenant a written statement of all amounts owed. Payments to redeem must be made by cashier's check, certified check or money order.",
  },
  // Rent & Payment
  {
    id: "renewal-notice-va",
    title: "Notice of Rent Increase or Nonrenewal",
    group: "Rent & Payment",
    states: ["VA"],
    choiceGroup: "va-size-renewal",
    choiceGroupDefault: true,
    bodyText:
      "If this Lease gives Tenant an option to renew or renews automatically, Landlord will give Tenant written notice of any increase in Rent for the next term at least 60 days before the end of the current term; beginning July 1, 2027, that notice will be given at least 90 days before the end of the current term and will state a deadline, not sooner than 30 days after Tenant receives the notice, by which Tenant must tell Landlord whether Tenant will renew. If Landlord does not intend to renew this Lease, Landlord will give Tenant written notice of nonrenewal at least 60 days before the end of the term.",
  },
  {
    id: "renewal-notice-va-small",
    title: "Notice of Rent Increase or Nonrenewal (Landlord With Four or Fewer Virginia Units)",
    group: "Rent & Payment",
    states: ["VA"],
    choiceGroup: "va-size-renewal",
    choiceGroupDefault: false,
    bodyText:
      "Landlord owns four or fewer rental dwelling units in Virginia (or up to a 10 percent interest in four or fewer). If this Lease gives Tenant an option to renew or renews automatically, Landlord will give Tenant written notice of any change in Rent or other terms for the next term, or of Landlord's decision not to renew, at least {{renewal_notice_days}} days before the end of the current term.",
  },
  // Rules & Regulations
  {
    id: "portable-solar-va",
    title: "Plug-In Solar Devices",
    group: "Rules & Regulations",
    states: ["VA"],
    choiceGroup: "va-size-solar",
    choiceGroupDefault: true,
    bodyText:
      "Beginning January 1, 2027, Tenant may install a small portable solar generation device (a movable photovoltaic device with a maximum output of not more than 1,200 watts per dwelling unit that plugs into an electrical outlet and meets the safety and certification requirements of Virginia law) on the exterior of Tenant's premises, subject to Landlord's reasonable restrictions on its size, place and manner of placement. Tenant will give Landlord written notice at least seven days before installing it, with documentation that the device meets those requirements and the proposed location. Landlord may prohibit or restrict installation elsewhere on the property. Tenant is responsible for any damage the device causes. Tenant may not install a device if the property's utilities are billed under a ratio utility billing system, and may not install any device that would require alterations to the building's premises, wiring or electrical panels without Landlord's express written approval.",
  },
  {
    id: "portable-solar-va-small",
    title: "Plug-In Solar Devices (Landlord With Four or Fewer Virginia Units)",
    group: "Rules & Regulations",
    states: ["VA"],
    choiceGroup: "va-size-solar",
    choiceGroupDefault: false,
    bodyText:
      "Landlord owns four or fewer rental dwelling units in Virginia (or up to a 10 percent interest in four or fewer). Tenant will not install any solar generation device, including a plug-in or portable device, anywhere on the property without Landlord's prior written consent.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-duties-va",
    title: "Tenant's Statutory Duties",
    group: "Tenant Responsibilities",
    states: ["VA"],
    bodyText:
      "In addition to Tenant's other obligations under this Lease, Tenant will: keep the part of the property Tenant occupies free from insects and pests and promptly notify Landlord of any; pay the added cost of treatment or extermination caused by Tenant's unreasonable delay in reporting insects or pests, and the cost of treatment caused by Tenant's fault in failing to prevent an infestation; keep on at all times any utility service Tenant pays for; not remove or tamper with a properly functioning smoke alarm or carbon monoxide alarm installed by Landlord, including by removing working batteries, and maintain those alarms as the Statewide Fire Prevention Code and the Uniform Statewide Building Code require, including interim testing; use reasonable efforts to prevent the accumulation of moisture and the growth of mold, and promptly notify Landlord of any moisture accumulation or visible evidence of mold; use reasonable care to prevent any dog or other animal kept by Tenant, an occupant or a guest from injuring anyone or damaging the property; be responsible for the conduct of persons on the premises with Tenant's consent so that neighbors' peaceful enjoyment is not disturbed; and abide by all reasonable rules and regulations Landlord adopts.",
  },
  // Landlord Responsibilities
  {
    id: "smoke-co-alarms-va",
    title: "Smoke and Carbon Monoxide Alarms",
    group: "Landlord Responsibilities",
    states: ["VA"],
    bodyText:
      "Landlord will give Tenant a certificate stating that all smoke alarms are present, have been inspected and are in good working order, no more than once every 12 months. Except for alarms in public or common areas, Tenant is responsible for interim testing, repair and maintenance of the smoke alarms in the property and will notify Landlord in writing when an alarm needs repair or replacement. On Tenant's written request, Landlord will install a carbon monoxide alarm in the property within 90 days and may charge Tenant a reasonable fee to recover the cost of the equipment and installation. If Tenant or a person living with Tenant is deaf or hard of hearing, Landlord will provide on request a smoke alarm appropriate for persons who are deaf or hard of hearing; Landlord may require a refundable deposit not exceeding the original or replacement cost of that alarm, whichever is greater, and will not increase the Rent because of it.",
  },
  // Default & Termination
  {
    id: "dv-lease-termination-va",
    title: "Early Termination by a Victim of Family Abuse, Sexual Abuse, Stalking or Trafficking",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "Tenant may terminate Tenant's obligations under this Lease if Tenant is a victim of family abuse, sexual abuse or other criminal sexual assault, stalking, or human trafficking, as those terms are used in Virginia law, and (a) Tenant has obtained a protective order during the term of this Lease and gives the notice below during the period of the order or any extension, or (b) during the term of this Lease a court has convicted the perpetrator of, or a magistrate, law-enforcement agency, grand jury or court has issued a warrant, summons, information or indictment charging a person with, such a crime against Tenant. To terminate, Tenant will give Landlord written notice of termination, which will be effective 28 days after Tenant gives it, together with a copy of the protective order or of the conviction order, warrant, summons, information or indictment. Tenant will pay Rent as it comes due through the effective date and will continue to meet Tenant's maintenance obligations until then. Landlord will not charge any liquidated damages. Any co-tenant on this Lease remains responsible for the Rent for the rest of the term. If the perpetrator is the only remaining tenant obligated on this Lease, Landlord may terminate this Lease and recover actual damages from the perpetrator.",
  },
  {
    id: "military-lease-termination-va",
    title: "Early Termination by Military Personnel",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "A Tenant who is a member of the Armed Forces of the United States, or a member of the National Guard serving on full-time duty or as a civil service technician with the National Guard, may terminate this Lease if Tenant (a) receives permanent change of station orders, (b) receives temporary duty orders of more than three months, (c) is discharged or released from active duty or from full-time National Guard duty or technician status, (d) is ordered to report to government-supplied quarters resulting in forfeiture of the basic allowance for quarters, or (e) receives a stop movement order in response to a local, national or global emergency, effective for an indefinite period or for at least 30 days, that prevents Tenant from occupying the property as a residence. Tenant will give Landlord written notice of termination stating an effective date not less than 30 days after the first date on which the next rental payment is due after the notice is given, and before that date will give Landlord a copy of the official orders or a signed letter confirming them from Tenant's commanding officer. Landlord will not charge any liquidated damages. Tenant's maintenance obligations continue until the termination date. This Section does not limit any right Tenant has under the federal Servicemembers Civil Relief Act.",
  },
  {
    id: "abandoned-property-va",
    title: "Abandonment and Property Left Behind",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "If Landlord cannot determine whether Tenant has abandoned the property, Landlord may give Tenant written notice requiring Tenant to tell Landlord in writing within seven days that Tenant intends to remain in occupancy; if Tenant does not do so and Landlord does not otherwise determine that Tenant remains in occupancy, the property will be presumed abandoned and this Lease will terminate at the end of the seven days, and Landlord will mitigate its damages. After this Lease has terminated and possession has been delivered to Landlord, Landlord may treat personal property left in the property, on the premises or in any storage area Landlord provided as abandoned and dispose of it as Landlord sees fit, but only after Landlord has given Tenant (a) a termination notice stating that personal property left behind will be disposed of within 24 hours after termination, (b) the seven-day notice described above, stating that personal property left behind will be disposed of within 24 hours after the seven days end, or (c) a separate written notice stating that personal property left behind will be disposed of within 24 hours after a 10-day period from the date of the notice. Tenant may remove Tenant's property at reasonable times during the 24-hour period after termination, or until Landlord disposes of it. Any proceeds from a sale of the property will be applied to amounts Tenant owes Landlord, including reasonable costs of selling, storing or safekeeping it, and any remainder will be treated as part of the Security Deposit. This Section does not apply to property removed when a writ of eviction is executed, which is governed by Virginia law.",
  },
  {
    id: "casualty-termination-va",
    title: "Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "If the property or premises is damaged or destroyed by fire or casualty to an extent that Tenant's use and enjoyment of the property is substantially impaired, or the required repairs can be made only if Tenant vacates, either Tenant or Landlord may terminate this Lease. Tenant may terminate by vacating and, within 14 days afterward (21 days if Tenant vacates on or after January 1, 2027), giving Landlord written notice of intent to terminate, and this Lease will end on the date Tenant vacated. Landlord may terminate by giving Tenant 14 days' notice (21 days' notice on or after January 1, 2027) based on Landlord's determination that the damage requires Tenant's removal and that use of the property is substantially impaired. On and after January 1, 2027, before giving that notice Landlord will meet or make a reasonable effort to meet with Tenant about the extent of the damage and any reasonable alternatives to termination, and will offer Tenant any substantially similar unit in the same complex that is available within a reasonable time on the terms of this Lease, unless Landlord has determined that Tenant's violation of Tenant's maintenance obligations caused the damage; within seven days after receiving Landlord's notice, Tenant may ask in writing that Landlord reevaluate the damage and habitability with Tenant's involvement. If this Lease is terminated, Landlord will return the Security Deposit as Virginia law requires and any prepaid Rent, with any accrued interest recoverable by law, unless Landlord reasonably believes Tenant, an occupant or a guest caused the damage, in which case Landlord will give Tenant a written statement for them based on the damage. Rent will be prorated as of the date of the casualty. If continued occupancy is lawful, Rent will be reasonably reduced for the period of impairment as Virginia law provides.",
  },
  {
    id: "periodic-tenancy-notice-va",
    title: "Ending a Month-to-Month or Week-to-Week Tenancy",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "If Tenant rents month to month, either Landlord or Tenant may end the tenancy by written notice served on the other at least 30 days before the next Rent due date [or state a different notice period here, which will then apply to both parties]. If Tenant rents week to week, either may end the tenancy by written notice served at least seven days before the next Rent due date. Landlord and Tenant may also agree in writing to end this Lease early. If Tenant stays on with Landlord's agreement after this Lease ends and no new lease is signed, the terms of this Lease continue to govern, except that the Rent will be either the Rent under this Lease or the amount stated in a written notice from Landlord, which will not take effect until the next Rent due date that comes at least 30 days after the notice.",
  },
  // Notices & General
  {
    id: "emergency-contact-va",
    title: "Authorized Contact on Tenant's Death or Emergency",
    group: "Notices & General",
    states: ["VA"],
    bodyText:
      "Tenant names the following person as the person authorized for Landlord to contact if Tenant dies or has an emergency: {{authorized_person_name_address_phone}}. Tenant will tell Landlord in writing if this changes. If Tenant is the sole tenant under this Lease, still living in the property, and dies, and no one has been authorized by a circuit court order to handle probate matters for Tenant, Landlord may dispose of Tenant's personal property left in the property after giving at least 10 days' written notice to this authorized person (or, if none is named, to Tenant at the property) stating that personal property not claimed within 10 days will be treated as abandoned. The authorized person may, on reasonable proof of identity, have access to the property and to Tenant's records and claim Tenant's personal property. This Lease will be treated as terminated on the date of the sole Tenant's death, authorized occupants and guests must leave before the 10-day period ends, and Tenant's estate remains liable for actual damages, which Landlord will mitigate.",
  },
  // Disclosures
  {
    id: "foreclosure-notice-va",
    title: "Notice of Mortgage Default or Foreclosure",
    group: "Disclosures",
    states: ["VA"],
    bodyText:
      "If the property is a single-family residence, Landlord will give Tenant written notice within five business days after Landlord receives written notice from a lender of a mortgage default, mortgage acceleration or foreclosure sale relating to the loan on the property. If Landlord fails to give that notice, Tenant may terminate this Lease by giving Landlord written notice at least five business days before the termination date, and Landlord will then handle the Security Deposit as Virginia law and this Lease provide.",
  },
  // Landlord Responsibilities
  {
    id: "utility-billing-va",
    title: "Utilities Billed by Landlord (Submetering, Allocation or Ratio Billing)",
    group: "Landlord Responsibilities",
    states: ["VA"],
    bodyText:
      "[Use only if Landlord bills Tenant separately for utilities through submetering, energy allocation equipment or a ratio utility billing system, or allocates local government fees.] Landlord will bill Tenant for the following utilities: {{separately_charged_utilities}}, using this method: {{utility_billing_method}}. Landlord will bill Tenant for the same billing period as the utility serving the building unless this Lease states otherwise. Tenant will pay these additional service charges, which cover Landlord's actual administrative and billing costs charged by a third-party provider: {{utility_admin_fees}}. If Tenant does not pay a utility bill when due, which will be at least 15 days after the bill is mailed or delivered, Tenant will pay a late charge of up to $5. [If Landlord allocates local government fees such as stormwater, recycling, trash collection, elevator or fire safety testing or rental inspection fees: those fees will be allocated among the tenants of the building using this method: (describe).] Amounts billed under a ratio utility billing system, and allocated local government fees and their administrative charges, are Rent. On request, Landlord will test energy allocation equipment without charge no more than once in 24 months, and Tenant may inspect and copy Landlord's billing records for the property during reasonable business hours.",
  },
  // Tenant Responsibilities
  {
    id: "tenant-repair-agreement-va",
    title: "Tenant-Performed Duties and Repairs by Written Agreement",
    group: "Tenant Responsibilities",
    states: ["VA"],
    bodyText:
      "[Use only if Landlord and Tenant agree that Tenant will perform some of Landlord's duties.] Tenant agrees to perform the following, in place of Landlord: [list each specifically, choosing only from: keeping common areas shared by two or more units clean and safe; providing and maintaining waste receptacles and arranging waste removal; supplying running water, hot water, heat or air conditioning; and specified repairs, maintenance tasks, alterations or remodeling]. Landlord and Tenant make this agreement in good faith and not for the purpose of evading Landlord's obligations, and it does not diminish or affect Landlord's obligations to other tenants on the premises. Landlord remains responsible for Landlord's other duties under Virginia law, including complying with building and housing codes materially affecting health and safety and keeping the property fit and habitable.",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-va",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["VA"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant with a disability needs is not a pet under this Lease, whether it works, provides assistance or performs tasks, or provides emotional support that alleviates one or more identified symptoms or effects of the disability; it need not be individually trained or certified. Tenant may ask for a reasonable accommodation to keep an assistance animal. Landlord will not charge a pet fee, pet deposit or additional rent for an assistance animal. If the disability or the need for the animal is obvious or already known to Landlord, Landlord will not ask for more verification of it; if the disability is known but the need is not, Landlord may ask for verification of the need; otherwise Landlord may ask for reliable documentation of the disability and the disability-related need, which may come from anyone with whom the person has or had a therapeutic relationship, such as a mental health service provider, a licensed or certified professional serving people with disabilities, a free peer support group member with actual knowledge, or a caregiver, reliable third party or government entity with actual knowledge. Landlord will evaluate each request and its documentation case by case. Tenant will comply with the rules of this Lease that apply to all residents and do not interfere with Tenant's equal opportunity to use and enjoy the property, and is responsible for physical damage the animal causes to the same extent residents with pets are. Landlord may deny a request if there is no disability or disability-related need, if the accommodation would impose an undue financial and administrative burden or fundamentally alter Landlord's operations, or if the specific animal poses a clear and present threat of substantial harm to others or to the property that is not based solely on its breed, size or type and cannot be reduced or eliminated by another reasonable accommodation; where a request may impose an undue burden or fundamental alteration, Landlord will first offer to discuss an effective alternative accommodation.",
  },
  {
    id: "pet-policy-va",
    title: "Pets",
    group: "Pets",
    states: ["VA"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any refundable pet deposit ({{pet_deposit}}, if applicable) is part of the Security Deposit, counts toward the Virginia limit of two months' periodic Rent, and will be held, applied and returned with it. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet, will use reasonable care to prevent a pet from injuring anyone or damaging the property, and will reimburse Landlord for claims caused by Tenant's pet, except to the extent a claim arises from Landlord's own negligence or other liability Landlord has under law. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access terms and Virginia law permit, including without consent in an emergency, and will not seize or remove a pet except through a court process or with the help of animal control or law enforcement. This Section does not apply to a service animal or assistance animal allowed under this Lease's terms for those animals.",
  },
  // Notices & General
  {
    id: "electronic-notices-va",
    title: "Electronic Notices (Optional)",
    group: "Notices & General",
    states: ["VA"],
    bodyText:
      "Landlord and Tenant agree that either may send notices under this Lease in electronic form to the e-mail address the other provides for that purpose: Tenant: [e-mail address]; Landlord: [e-mail address]. Tenant may at any time, by notice to Landlord, elect to send and receive notices in paper form instead. A party sending a notice electronically will keep sufficient proof of the electronic delivery, such as an electronic delivery receipt or a certificate of service confirming the electronic delivery.",
  },
  // Default & Termination
  {
    id: "homestead-waiver-va",
    title: "Waiver of Homestead Exemption (Optional)",
    group: "Default & Termination",
    states: ["VA"],
    bodyText:
      "I (or we) waive the benefit of my (or our) exemption as to this obligation. Tenant understands that, by this waiver, Tenant gives up, for amounts owed under this Lease, the homestead exemption that Virginia law otherwise allows a householder to claim against creditors, except the exemptions that Virginia law does not allow to be waived.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-al",
    title: "Security Deposit Accounting and Return",
    group: "Security Deposit",
    states: ["AL"],
    supersedes: "security-deposit-return",
    bodyText:
      "When the tenancy ends and Tenant delivers possession, Landlord may apply the Security Deposit only to accrued Rent and to damages Landlord has suffered because Tenant did not meet Tenant's statutory duties to keep and use the property properly, and will refund the balance. Landlord will not withhold any amount for ordinary wear and tear. When Tenant vacates, Tenant will give Landlord a valid forwarding address in writing. Within 60 days after the tenancy ends and Tenant delivers possession, Landlord will mail to that address by first-class mail the refund of the Security Deposit or, if Landlord does not refund all of it, an itemized list of the amounts withheld together with any balance due. If Tenant does not give a valid forwarding address, Landlord will mail them by first-class mail to Tenant's last known address or, if there is none, to Tenant at the property address. Under Alabama law, a deposit refund or refund check that Tenant does not claim within 90 days is forfeited. Whoever holds Landlord's interest in the property when the tenancy ends is bound by this Section, and a Landlord who sells the property remains liable to Tenant for the Security Deposit and any prepaid Rent.",
  },
  {
    id: "security-deposit-cap-al",
    title: "Security Deposit Limit",
    group: "Security Deposit",
    states: ["AL"],
    bodyText:
      "The Security Deposit will not exceed one month's periodic Rent. Landlord may require additional security only for pets, for changes to the property, or for increased liability risks to Landlord or the property, and any such additional security and its purpose are stated in this Lease: [state any additional security, its amount and its purpose, or state 'None']. Rent that Tenant pays in advance for a specific rental period is prepaid Rent, not security.",
  },
  // Disclosures
  {
    id: "landlord-disclosure-al",
    title: "Owner and Manager Disclosure",
    group: "Disclosures",
    states: ["AL"],
    bodyText:
      "As Alabama law requires, Landlord discloses: (a) the name and business address of the person authorized to manage the property: [name and business address]; and (b) the name and business address of an owner of the property, or of a person authorized to act for the owner for service of process and for receiving and receipting for notices and demands: [name and business address]. Landlord will keep this information current, and this obligation extends to any successor landlord, owner or manager.",
  },
  // Default & Termination
  {
    id: "default-by-tenant-al",
    title: "Tenant Default",
    group: "Default & Termination",
    states: ["AL"],
    supersedes: "default-by-tenant",
    bodyText:
      "Tenant will be in default under this Lease if Tenant fails to pay Rent when due and does not pay it within the time period specified by applicable law after receiving written notice from Landlord, or fails to comply with any other obligation under this Lease and does not cure the failure after receiving written notice, except where applicable law permits Landlord to proceed without giving Tenant an opportunity to cure. Except as required by applicable law, Tenant's failure to pay an assessed late fee, apart from the underlying Rent itself, will not by itself entitle Landlord to terminate this Lease or pursue eviction. If Tenant is in default, Landlord may exercise all rights and remedies available under Alabama law, including terminating this Lease, regaining possession of the property through the courts, and recovering unpaid Rent and actual damages, less amounts obtained from the Security Deposit. Landlord will use reasonable efforts to mitigate damages resulting from Tenant's default to the extent required by applicable law.",
  },
  // Access & Entry
  {
    id: "landlords-access-al",
    title: "Landlord's Access",
    group: "Access & Entry",
    states: ["AL"],
    supersedes: "landlords-access",
    bodyText:
      "Tenant will not unreasonably withhold consent to Landlord, its agents and contractors entering the property to inspect it, make necessary or agreed repairs, decorations, alterations or improvements, supply necessary or agreed services, or show it to prospective or actual purchasers, mortgagees, tenants, workers or contractors. Except in an emergency, or where it is impracticable, Landlord will give Tenant at least two days' notice of the intended time and purpose of an entry and will enter only at reasonable times. Landlord may give this notice by posting a note on the primary entry door of the property. If Landlord gives Tenant, separately from this Lease, a general notice or advance schedule of more than two days for repairs, maintenance, pest control or services relating to health or safety, no additional notice is needed for those entries. When Tenant asks for a repair, maintenance or improvement, Tenant consents to Landlord entering to do the requested work. Landlord may enter without Tenant's consent only in an emergency, under a court order, to do maintenance work Tenant has failed to do after written notice as Alabama law permits, at times reasonably necessary during any absence of Tenant of more than 14 days, when Landlord reasonably believes Tenant has abandoned or surrendered the property, and, if Tenant has signed a separate general notice permitting it, to show the property within the last four months of this Lease to a prospective tenant or purchaser, in that person's company and after the notice described above. Landlord will not abuse the right of access or use it to harass Tenant.",
  },
  // Default & Termination
  {
    id: "possession-delay-al",
    title: "Failure to Deliver Possession",
    group: "Default & Termination",
    states: ["AL"],
    supersedes: "possession-delay",
    bodyText:
      "If Landlord does not deliver possession of the property to Tenant at the start of the Term as this Lease requires, Rent abates until possession is delivered, and Tenant may either: (a) terminate this Lease by written notice to Landlord, in which case Landlord will return all prepaid Rent and the Security Deposit within five days after the notice; or (b) demand that Landlord perform this Lease and, if Tenant chooses, bring an action for possession against any person wrongfully in possession and recover Tenant's actual damages. If a person's failure to deliver possession is willful and not in good faith, Tenant may recover from that person up to the greater of three months' periodic Rent or Tenant's actual damages, plus reasonable attorney's fees.",
  },
  // Pets
  {
    id: "pet-policy-al",
    title: "Pets",
    group: "Pets",
    states: ["AL"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any refundable pet deposit ({{pet_deposit}}, if applicable) is additional security for pets and will be held, applied and returned with the Security Deposit. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet, and will reimburse Landlord for claims caused by Tenant's pet, except to the extent a claim arises from Landlord's own negligence or other liability Landlord has under law. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms and Alabama law permit, including without consent in an emergency, and will not seize or remove a pet except through a court process or with the help of animal control or law enforcement. This Section does not apply to a service animal or other assistance animal.",
  },
  {
    id: "assistance-animal-accommodation-al",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["AL"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs because of a disability is not a pet under this Lease, and no pet policy, breed, weight or size restriction applies to it. Landlord will not charge a pet deposit, pet rent or any other extra payment for it. For a service animal, Landlord may ask for proof that its vaccinations are current. For any other assistance animal, if the disability or the disability-related need for the animal is not readily apparent or known to Landlord, Landlord may ask for reliable documentation from the medical provider of the person who needs the animal, and will keep that documentation confidential. Tenant is responsible for any damage the animal causes to the property or to another person on the property. Landlord may deny or withdraw approval of a specific assistance animal that is not a service animal only as the federal Fair Housing Act allows, such as where that animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  // Default & Termination
  {
    id: "casualty-termination-al",
    title: "Fire or Casualty Damage",
    group: "Default & Termination",
    states: ["AL"],
    bodyText:
      "If the property is damaged or destroyed by fire or casualty not caused by Tenant, to an extent that Tenant's enjoyment of it is substantially impaired, Tenant may either: (a) immediately vacate the property and notify Landlord in writing within 14 days afterward of Tenant's intention to terminate this Lease, in which case this Lease terminates as of the date Tenant vacated; or (b) if continued occupancy is lawful, vacate any part of the property made unusable by the fire or casualty, in which case Tenant's Rent is reduced in proportion to the reduction in the fair rental value of the property. If this Lease is terminated under this Section, Landlord will return all of the Security Deposit recoverable by Tenant and all unearned prepaid Rent. Rent will be accounted for as of the date of the fire or casualty.",
  },
  {
    id: "casualty-landlord-termination-al",
    title: "Landlord's Option to End the Lease After a Fire or Casualty",
    group: "Default & Termination",
    states: ["AL"],
    bodyText:
      "If the property is damaged or destroyed by fire or other casualty to the extent that normal use and occupancy of the property is substantially impaired, and the fire or casualty was not caused by Landlord's deliberate or negligent act, Landlord may terminate this Lease by written notice to Tenant, effective on the date stated in the notice or, if Tenant has already vacated, on the date Tenant vacated. Rent will be accounted for as of the date of the fire or casualty, and prepaid Rent and the Security Deposit will be returned as this Lease's Fire or Casualty Damage and Security Deposit terms provide. This Section is in addition to Tenant's rights under this Lease's Fire or Casualty Damage terms and Alabama law and does not reduce them.",
  },
  {
    id: "holdover-rate-al",
    title: "Holdover Charge",
    group: "Default & Termination",
    states: ["AL"],
    bodyText:
      "If Tenant remains in possession after the end of the Term, and Landlord has not agreed in writing to a continued tenancy or accepted Rent for one under the Holdover section of this Lease, then, in place of the actual damages and reasonable rental value described in that section, Tenant will pay Landlord a holdover charge of {{holdover_daily_rate}} for each day Tenant remains in possession. Landlord and Tenant agree that Landlord's loss from a holdover, including delay in making the property available to a new tenant, is difficult to estimate accurately in advance, that this charge is a reasonable estimate of that loss, and that it is not a penalty. Landlord's acceptance of a holdover charge is not acceptance of Rent for a continued tenancy. This Section does not limit Landlord's right to recover possession, unpaid Rent and other amounts due for the period before the Term ended, or damages for harm to the property.",
  },
  // Tenant Responsibilities
  {
    id: "extended-absence-notice-al",
    title: "Notice of Extended Absence",
    group: "Tenant Responsibilities",
    states: ["AL"],
    bodyText:
      "Tenant will occupy the property only as a dwelling unit unless otherwise agreed. If Tenant anticipates being away from the property for more than 14 days, Tenant will notify Landlord of the absence no later than the fifth day of the absence. If Tenant willfully fails to give this notice, Landlord may recover actual damages resulting from the failure. During any absence of Tenant of more than 14 days, Landlord may enter the property at times reasonably necessary.",
  },
  {
    id: "tenant-repair-agreement-al",
    title: "Tenant-Performed Repairs and Maintenance",
    group: "Tenant Responsibilities",
    states: ["AL"],
    bodyText:
      "[Use only if Landlord and Tenant agree that Tenant will perform some of Landlord's duties. For any property other than a single-family residence, this agreement must be set out in a separate writing signed by both parties and supported by adequate consideration.] Tenant agrees to perform the following: [list each task specifically]. If the property is a single-family residence, this list may include removing garbage and other waste, supplying running water, hot water and heat, and specified repairs, maintenance tasks, alterations and remodeling. For any other dwelling unit, the list may include only specified repairs, maintenance tasks, alterations or remodeling that are not needed to bring the property into compliance with building and housing codes materially affecting health and safety, and this agreement does not diminish or affect Landlord's obligations to other tenants. Landlord will not treat Tenant's performance of this agreement as a condition of any obligation or performance under this Lease. Landlord remains responsible for its other duties under Alabama law, including complying with building and housing codes materially affecting health and safety and keeping the property habitable.",
  },
  // Default & Termination
  {
    id: "abandoned-property-al",
    title: "Abandonment and Property Left Behind",
    group: "Default & Termination",
    states: ["AL"],
    bodyText:
      "If Tenant abandons the property, Landlord will make reasonable efforts to rent it at a fair rental, although Landlord may first rent other vacant units it has. If Landlord rents the property for a term beginning before this Lease would have ended, this Lease ends when the new tenancy begins, subject to Landlord's remedies for Tenant's breach. In addition to any other way Landlord determines that Tenant has abandoned the property, the property is considered abandoned if electric service to it has been terminated for seven consecutive days. If Tenant leaves personal property in the property more than 14 days after this Lease ends, Landlord has no duty to store or protect it and may dispose of it without obligation to Tenant.",
  },
  // Disclosures
  {
    id: "sex-offender-statement-al",
    title: "Tenant Statement (Birmingham Properties)",
    group: "Disclosures",
    states: ["AL"],
    bodyText:
      "[Use only for property located in a Class 1 municipality (the City of Birmingham).] Each Tenant states, by signing this Lease, that Tenant is not a convicted sex offender.",
  },
  // Default & Termination
  {
    id: "exemption-waiver-al",
    title: "Waiver of Personal Property Exemptions (Optional)",
    group: "Default & Termination",
    states: ["AL"],
    bodyText:
      "To the extent Alabama law allows, Tenant waives Tenant's right to claim the exemption of personal property from levy and sale under execution or other process to collect any amount Tenant owes under this Lease. This waiver does not apply to the homestead, to any limit on garnishing wages, or to the following property, which Alabama law protects despite any waiver: cooking utensils, cooking stoves, table, tableware, chairs, bed and bed clothing in actual use by the family; wearing apparel; a vehicle used by and essential to Tenant's business; tools used personally by and essential to Tenant's business; and Tenant's library. Landlord may rely on this waiver only in a court action in which it is pleaded and declared in the judgment.",
  },
  // Security Deposit
  {
    id: "security-deposit-return-pa",
    title: "Security Deposit Accounting and Return",
    group: "Security Deposit",
    states: ["PA"],
    supersedes: "security-deposit-return",
    bodyText:
      "Within 30 days after this Lease ends, or after Landlord accepts Tenant's surrender of the property if that happens first, Landlord will give Tenant a written list of any damage to the property that Landlord says Tenant must pay for. With the list, Landlord will pay Tenant the Security Deposit, plus any unpaid interest on it, minus the actual cost of the damage Tenant caused. Landlord may also keep all or part of the Security Deposit, including unpaid interest, for Rent Tenant has not paid or for Tenant's breach of another term of this Lease. If Landlord does not give Tenant the list within those 30 days, Landlord loses all rights to keep any part of the Security Deposit, including unpaid interest, and the right to sue Tenant for damage to the property. If Landlord does not pay Tenant the amount owed within those 30 days, Landlord may have to pay Tenant double the amount by which the Security Deposit, with unpaid interest, is more than the actual damage Tenant caused. Landlord must prove the damage. When this Lease ends or Tenant surrenders the property, Tenant will give Landlord Tenant's new address in writing. If Tenant does not, Pennsylvania law relieves Landlord of liability under the statute that sets these deadlines and penalties.",
  },
  {
    id: "security-deposit-holding-pa",
    title: "Where the Security Deposit Is Held, and Interest",
    group: "Security Deposit",
    states: ["PA"],
    bodyText:
      "Landlord will [choose one: hold the Security Deposit in an escrow account at {{deposit_bank_name}}, {{deposit_bank_address}}, a bank or savings institution regulated by a federal or Pennsylvania banking regulator as Pennsylvania law requires. The amount deposited is {{security_deposit}} / secure the return of the Security Deposit, with any interest owed, by a guarantee bond from a bonding company authorized to do business in Pennsylvania, in place of an escrow account]. If Landlord moves the Security Deposit to another institution, Landlord will tell Tenant in writing the new institution's name and address and the amount deposited. Beginning with the second anniversary of the deposit, Landlord will hold any Security Deposit of more than $100 in an interest-bearing account. Tenant will receive the interest it earns, less an administrative fee equal to 1% per year of the deposit that Landlord may keep, paid to Tenant each year on the anniversary of the start of this Lease.",
  },
  // Default & Termination
  {
    id: "abandoned-property-pa",
    title: "Handling of Property Left Behind",
    group: "Default & Termination",
    states: ["PA"],
    bodyText:
      "When this Lease ends or Tenant gives up possession, Tenant will remove all of Tenant's personal property from the property. Personal property left at the property may be treated as abandoned only if: (a) Tenant has moved out after the end of this written Lease; (b) a court has entered an eviction order or order for possession for Landlord, and Tenant has moved out and removed substantially all of Tenant's property; (c) an eviction order or order for possession for Landlord has been carried out; (d) Tenant has given Landlord a forwarding address in writing, moved out and removed substantially all of Tenant's property; or (e) Tenant has moved out without saying Tenant intends to return, Rent is more than 15 days past due, and Landlord has then posted a notice of Tenant's rights regarding the property. Before removing or disposing of abandoned property, Landlord will send Tenant a written notice of Tenant's rights, by first class mail to the property address and to any forwarding address Tenant has given, including any address given for emergencies, in the form Pennsylvania law sets. Tenant will have 10 days from the postmark date of the notice to collect the property or to ask Landlord to store it. If Tenant asks, Landlord will store it for up to 30 days from the date of the notice, at a place Landlord chooses, and Tenant will pay the storage costs. Landlord will use ordinary care with the property and make it reasonably available for Tenant to collect. Landlord will never dispose of or take control of property in a unit that someone still lives in without Tenant's express permission. If an eviction order has been carried out and Landlord knows of a protection-from-abuse order protecting Tenant or a member of Tenant's immediate family, Landlord will not dispose of the property for 30 days from the date of the notice and, if asked, will store it for up to 30 days. If Tenant dies, Tenant's property is handled under Pennsylvania estate law instead of this Section.",
  },
  {
    id: "notice-to-quit-waiver-pa",
    title: "Waiver of Notice to Quit",
    group: "Default & Termination",
    states: ["PA"],
    bodyText:
      "TENANT GIVES UP (WAIVES) THE NOTICE TO QUIT. [Choose one: Tenant gives up the written notice to quit (notice to move out) that Pennsylvania law would otherwise require before Landlord files in court to recover possession of the property / The written notice to quit that Pennsylvania law would otherwise require before Landlord files in court to recover possession of the property is shortened to {{notice_to_quit_days}} days]. This applies when this Lease ends, when Tenant does not pay Rent when due, and when Landlord ends this Lease because Tenant breaches it. It does not give up any written notice of default or chance to cure that this Lease gives Tenant, any notice a federal law requires, or Tenant's right to a court hearing. Landlord may remove Tenant only through a court eviction. Tenant's initials: ________",
  },
  // Notices & General
  {
    id: "consumer-restrictions-statement-pa",
    title: "Statement of Consumer Restrictions",
    group: "Notices & General",
    states: ["PA"],
    bodyText:
      "STATEMENT OF CONSUMER RESTRICTIONS. What Tenant could lose if Tenant does not meet Tenant's obligations under this Lease: Landlord may keep all or part of the Security Deposit, and any interest on it, for unpaid Rent and for damage Tenant causes, as this Lease and Pennsylvania law allow. Landlord may ask a court to remove Tenant from the property and to order Tenant to pay unpaid Rent, damages and court costs. A court judgment against Tenant may be collected from Tenant's money and property, and a judgment arising out of this Lease may in some cases be collected by taking part of Tenant's wages, as Pennsylvania law allows. Personal property Tenant leaves behind may be removed or disposed of as this Lease's Handling of Property Left Behind section describes. Rights Tenant gives up in this Lease: [list each waiver of Tenant's rights in this Lease and the section where it appears, for example 'Tenant gives up the notice to quit (Waiver of Notice to Quit section)', or state 'This Lease does not ask Tenant to give up any rights.']",
  },
  // Pets
  {
    id: "assistance-animal-accommodation-pa",
    title: "Service and Assistance Animals",
    group: "Pets",
    states: ["PA"],
    supersedes: "assistance-animal-accommodation",
    bodyText:
      "A service animal or other assistance animal that Tenant or an Occupant needs because of a disability is not a pet under this Lease, and no pet policy, breed, weight, size or number limit applies to it. Landlord will not charge a pet deposit, pet rent or any other pet fee for it. Landlord may ask for documentation of the disability and the disability-related need for the animal only if the disability or the need is not readily apparent or known to Landlord. Any documentation must be in writing, be reliable and based on direct knowledge of the person's disability and disability-related need for the animal, and describe that need. Tenant is responsible for any damage the animal causes to the property. Landlord may deny or withdraw approval of a specific animal only as federal and Pennsylvania fair housing law allows, such as where that animal poses a direct threat to the health or safety of others, or would cause substantial physical damage to the property of others, that cannot be reduced or eliminated by another reasonable accommodation.",
  },
  {
    id: "pet-policy-pa",
    title: "Pets",
    group: "Pets",
    states: ["PA"],
    supersedes: "pet-policy",
    bodyText:
      "Tenant may keep only pets identified in writing to and approved by Landlord: [list approved pets, or state that no pets are permitted]. Any refundable pet deposit ({{pet_deposit}}, if applicable) is part of the Security Deposit, counts toward the Pennsylvania limit on security deposits, and will be held, applied and returned with it. Tenant will pay pet rent of {{pet_rent_amount}} per month, if applicable. Tenant is responsible for all damage, waste removal, odor and disturbance caused by a pet, and will reimburse Landlord for claims caused by Tenant's pet, except to the extent a claim arises from Landlord's own negligence or other liability Landlord has under law. Landlord may revoke approval of a pet that becomes a nuisance or safety concern. Landlord may enter the property in connection with a pet only as this Lease's Access & Entry terms permit, or without notice in an emergency, and will not seize or remove a pet except through a court process or with the help of animal control or law enforcement. This Section does not apply to a service animal or assistance animal.",
  },
  // Landlord Responsibilities
  {
    id: "carbon-monoxide-alarm-duty-pa",
    title: "Carbon Monoxide Alarms",
    group: "Landlord Responsibilities",
    states: ["PA"],
    bodyText:
      "This Section applies if the property is an apartment in a building with three or more households living in separate apartments, and the apartment has a fossil fuel-burning heater or appliance, a fireplace or an attached garage. Landlord has installed an operational, approved carbon monoxide alarm in a central location near the bedrooms and the fuel-burning heater or fireplace. Before Tenant moves in, Landlord will replace any carbon monoxide alarm that was stolen, removed, missing or made inoperable during an earlier occupancy, and will make sure the batteries of each alarm are working when Tenant moves in. During the Term, Tenant will keep each carbon monoxide alarm in good repair, test it, replace its batteries as needed, replace any alarm that is stolen, removed, missing or made inoperable during Tenant's occupancy, and tell Landlord in writing about any problem with an alarm. Except as this Section states, Landlord is not responsible for maintaining, repairing or replacing a carbon monoxide alarm, or for its batteries, while Tenant lives in the property.",
  },
  // Default & Termination
  {
    id: "holdover-rate-pa",
    title: "Holdover Charge",
    group: "Default & Termination",
    states: ["PA"],
    bodyText:
      "If Tenant remains in possession after the end of the Term, and Landlord has not agreed in writing to a continued tenancy or accepted Rent for one under the Holdover section of this Lease, then, in place of the actual damages and reasonable rental value described in that section, Tenant will pay Landlord a holdover charge of {{holdover_daily_rate}} for each day Tenant remains in possession. Landlord and Tenant agree that Landlord's loss from a holdover, including delay in making the property available to a new tenant, is difficult to estimate accurately in advance, that this charge is a reasonable estimate of that loss, and that it is not a penalty. Landlord's acceptance of a holdover charge is not acceptance of Rent for a continued tenancy. This Section does not limit Landlord's right to recover possession, unpaid Rent and other amounts due for the period before the Term ended, or damages for harm to the property.",
  },
  {
    id: "casualty-termination-pa",
    title: "Fire or Other Casualty",
    group: "Default & Termination",
    states: ["PA"],
    bodyText:
      "If the property is damaged or destroyed by fire or other casualty not caused by Tenant, members of Tenant's household, or Tenant's guests, and the damage makes the property unfit to live in or substantially impairs Tenant's use of it, either Landlord or Tenant may end this Lease by written notice to the other, effective on the date Tenant moves out. Rent will be prorated to that date, any prepaid Rent refunded, and the Security Deposit returned as this Lease and Pennsylvania law provide. If the casualty makes only part of the property unusable and Tenant stays in possession, Rent will be reduced in proportion to the part of the property Tenant cannot use until Landlord completes repairs. This Section does not limit any other right Tenant has under Pennsylvania law.",
  },
  {
    id: "periodic-tenancy-notice-pa",
    title: "Notice to End a Month-to-Month Tenancy",
    group: "Default & Termination",
    states: ["PA"],
    bodyText:
      "If this Lease continues as a month-to-month tenancy, Tenant may end it by giving Landlord written notice at least {{m2m_notice_days}} days before the last day of a rental month, and the tenancy will end on that last day. Landlord may end it by giving Tenant the written notice to quit that Pennsylvania law requires, unless this Lease's Waiver of Notice to Quit section applies. Rent remains payable through the date the tenancy ends. This Section does not limit either party's right to end this Lease earlier where this Lease or Pennsylvania law allows it.",
  },
];

module.exports = { CLAUSE_TEMPLATES };
