# Applicability questions (draft for Taylor's review, 2026-11-22)

Every question the app would ask so it can tell which situational clauses a lease needs. Built from the 2026-11-22 reads of the 1,130 situational clauses (391 depend on facts) and of the other 983 Recommended and Optional clauses (237 depend on facts; most use the questions below, and a Recommended or Optional clause whose fact isn't true is hidden from the picker, never added) and the design agreed with Taylor the same day (`docs/backlog.md`, "Fact design agreed").

**How to read this**
- **Type:**
  - **Yes/No**: a picker that starts blank. Used where the answer can make a Required or Legal duty clause apply. Blank means not answered, so the clause stays in.
  - **Checkbox**: for facts that only affect Recommended or Optional clauses.
  - **Pick one** or **Pick any**: a list of choices.
  - **Number**: a count.
  - **Derived**: the app works it out from data it already has, so nothing is asked.
- **Who sees it:**
  - **Everyone**: the question shows for every property.
  - **A list of states**: it shows only for properties in those states. Each state's list is generated from the rules, never kept by hand.
- **Clauses:** roughly how many clauses the answer decides, with how many of them are Required or Legal duty. The counts come from the 2026-11-22 read, and each is checked against the statute when its rule is written.
- **Where it lives and when it's asked:** every question except the last section's is a field on an information page (property, utilities, entity, lease, tenant). That is the property profile, filled in whenever the landlord likes. The lease builder's fill-in-the-gaps panel shows the same questions, but only those this lease needs that are still blank, and saves each answer back to its page. The last section's questions are asked only in the builder.
- **Things you'd know about:** laws that turn on what the landlord knows are worded "To your best knowledge", with the answers "Yes" and "No, not to my knowledge". Either is an answer; only blank makes the builder ask.

## Property page

### The building

| # | Question (as the landlord sees it) | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P1 | What kind of property is this? Single-family house / Apartment (including a unit in a duplex, triplex or fourplex) / Condo unit / Co-op unit / Townhouse / Accessory dwelling unit (ADU) / Manufactured home / Room in the owner's home | Pick one (replaces the free-text property type) | Everyone | about 35 (25) |
| P2 | How many units are in this building? Count every unit, no matter who owns it. | Number (shown for an apartment, condo, co-op or townhouse) | Everyone | 26 (20) |
| P3 | Does the owner live in the building? | Yes/No (shown only for multi-unit types and a room in the owner's home) | Everyone | 9 (9) |
| P4 | Year built | Number (exists) | Everyone | 13 (11) |
| P5 | Which floor is this unit on? (Ground floor is 1) | Number | IL, MD | 2 (2) |
| P6 | Is the building four or more stories, or taller than 45 feet? Does it have a complete sprinkler system? | Yes/No, two questions | MD; sprinklers also CT | 2 (2) |
| P7 | County | Pick one (the state's counties from the Census list, preselected from the zip code where the zip code is in only one county) | Everyone | 8 (5) |

### Association

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P8 | Is the property part of an association? None / HOA / Condo association / Co-op / Metro district | Pick one (the existing name and contact fields stay) | Everyone | about 23 (14) |
| P9 | Must the association approve leases or tenants? | Checkbox | Everyone (shown when P8 isn't None) | 4 (0) |
| P10 | Is this unit being converted to a condo or co-op, or have tenants been given a conversion notice? | Yes/No | NJ, MD, FL, CO | 4 (2) |

### Water, sewer and site

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P11 | Water comes from: Public water / Private well | Pick one, blank to start | Everyone | 7 (4) |
| P12 | Sewer type: Public sewer / Septic system | Pick one, blank to start | Everyone | (none yet) |
| P13 | Water features: None / Pool / Hot tub or spa / Other (pond, fountain) | Pick any, blank to start (None is an answer) | Everyone | 9 (1) |
| P14 | Parking: Garage / Driveway / Assigned space / Lot / Street only / None | Pick any (the existing description stays) | Everyone | 5 (0) |
| P15 | How many parking spaces does the property have? Do you charge for parking separately from rent? (Spaces assigned to a tenant go on the lease, L7.) | Number; Checkbox | Everyone | 4 (0) |
| P16 | Do you enforce parking or towing rules? | Yes/No | CO, SC, TX | 3 (1) |

### Heat, appliances and furnishings

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P17 | Does the tenant control the thermostat? | Checkbox, ticked by default | Everyone | 6 (0) |
| P18 | Fireplace or wood stove | Checkbox | Everyone | 2 (0) |
| P19 | Fuel type, on each appliance in Property Specs: Gas / Electric / Propane / Oil / Wood | Pick one, per appliance | Everyone | used with P18 |
| P20 | Which appliances does the rental provide? For each: Refrigerator / Range or stove / Dishwasher / Microwave / Washer / Dryer / Freezer / Garage door opener / Other: Provided, covered by the lease (you maintain and repair it) / Provided as-is, not covered by the lease (the tenant may use it; you won't repair or replace it) / Not provided | Pick one per appliance (later linked to the appliance records in Property Specs). What a tenant brings in isn't tracked. | Everyone | 5 (0) |
| P21 | Furnished | Checkbox (the furniture list goes with move-in and move-out inspections) | Everyone | 11 (0) |
| P21b | Yard: is there a yard or landscaping the tenant can use? | Checkbox | Everyone | 3 (0) |
| P21c | Rural or farm land where hunting, fishing or grazing is possible | Checkbox | Everyone | 7 (0) |
| P21d | Carpet | Derived from the flooring records in Property Specs (type carpet); a checkbox if there are none | Everyone | 3 (0) |
| P21a | On-site storage: None / Included with the rent / Storage units rented for a separate fee (how many) | Pick one; a unit and fee assigned to a lease go on the lease (L9) | Everyone | the storage-space clauses (all Recommended) |
| P22 | Smart lock or electronic entry (keypad, fob, app) | Checkbox; it shows the electronic-entry clauses in the picker (all Recommended) | Everyone | 5 (0) |

### What you know about the property

Each answer can make a required disclosure apply, so these are all Yes/No.

| # | Question | Who sees it | Clauses |
|---|---|---|---|
| P23 | To your best knowledge, is there a recorded environmental restriction on the land: an environmental covenant, use limitation, easement or cleanup notice in the land records? (Your title insurance papers from the purchase list recorded restrictions.) | Everyone | about 18 (14) |
| P24 | To your best knowledge, was the property used to make or use meth or other illegal drugs, or has a health officer ordered a cleanup? | CA, IA, KY, MI, MO, NH, OK, UT, WV | 11 (11) |
| P25 | To your best knowledge, is there mold, or has the building been tested for mold? | MT | 1 (1) |
| P26 | To your best knowledge, are there open housing or building code violations at the property? | RI, WI | 2 (2) |
| P27 | Has a lead hazard order or lead mitigation notice been issued for the property? | NH, IL | 2 (2) |
| P27a | Has the unit been certified lead-free by an accredited inspector? (If not, Maryland's lead notice and inspection certificate go with the lease.) | MD, when built before 1978 | 1 (1) |
| P27b | Has your water system sent you a notice that the property has a lead service line? | NJ | 1 (1) |
| P28 | Is the property in a FEMA special flood hazard area? Has it flooded in the last 5 years? | Flood zone: IN, OR, PR. Flooded: OK | 4 (4) |
| P29 | To your best knowledge, does this unit, or a unit next to it, have bed bugs, or is one being treated now? | ME | 1 (1) |
| P30 | Does a pest-control company treat this property on a set schedule (for example, quarterly) under a service contract? Don't count treatments you order when a problem comes up. | CA | 1 (1) |
| P31 | Other state-specific facts, one question each where that state's rule needs it: defective drywall and military air zone (VA), within 1,000 feet of a school or child care (OH), smoking allowed in nearby units (UT, WV), a local rental registration or inspection fee (NY), energy benchmarking (CA, DC), shoreline (RI, GU), within 3 miles of a military installation (IN), special or business improvement district (ID, MS, PR, WV), groundwater management area (OR), asbestos disposal site (NH), noise waiver recorded (IL), uncovered steam radiators (NJ), sanitary code variance (MA), state safety exception (NJ), urea-formaldehyde materials (MN), access-controlled community (PR) | Only those states | about 15 (14) |

### Temporary facts (asked again at every lease)

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P32 | Is a foreclosure under way on this property right now? | Yes/No, asked in the builder every time | AZ, LA, MN, OR | 4 (4) |

### Program housing

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P33 | Is this unit in any of these programs? Rent-controlled or rent-stabilized / Housing Choice Voucher tenant / Project-based subsidy / Low-income housing tax credit (LIHTC) / Senior housing / Student housing | Pick any (absorbs the existing "Accepts Section 8" box) | Everyone | about 9 (5) |

### Property manager (new section)

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| P34 | Property manager: company, contact name, phone, email, address | Text fields | Everyone | — |
| P35 | Does the manager sign leases? Does the manager hold a real estate license? | Checkboxes | Everyone | about 9 (5) |
| P36 | Address for lease notices | Text, starts as a copy of the entity's mailing address; can be overridden on each lease | Everyone | used by the owner-identity clauses in about 39 jurisdictions |

## Utilities (on the property page, beside each provider)

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| U1 | For each utility (electric, gas, water, sewer, trash): who pays? Tenant pays the company directly / Included in rent / Landlord pays and charges the tenant back | Pick one per utility, blank to start | Everyone | about 45 (21) |
| U2 | If the landlord charges back: how? Separate meter for this unit (submeter) / A shared bill split by a formula / A flat monthly charge | Pick one per utility (shown only for a charge-back) | Everyone | in U1 |
| U3 | Does this unit's meter also serve areas outside the unit (hallway or outdoor lights, a shared laundry)? | Yes/No | Everyone | about 10 (3) |
| U4 | Does the electric or gas account carry an energy-efficiency or project charge the tenant will pay? | Yes/No | IL, MI, NY, WA, SC, NH, VA, WI | about 8 (4) |
| U5 | Other state-specific utility facts, one question each: landlord sells on-site solar power (HI), who hauls the trash (KS, NV, NH, GU), landlord co-signs the tenant's account (AS) | Only those states | about 6 (0) |

## You and your entities (your account and the entity page)

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| E1 | Entity type (LLC, S corp, personal, other) | Derived: the property already names the entity that owns it | — | 4 (2) |
| E2 | Primary residence (address), on your account, filled in when the account is created and editable in account settings. Every property and lease uses it, whichever entity owns the property. | Address | Everyone; it drives clauses in VA and HI | 2 (2) |
| E3 | Island (shown automatically when the primary residence is in Hawaii) | Pick one | When E2 is in Hawaii | 1 (1) |
| E4 | Do you, the landlord, hold a real estate license? | Yes/No | IL, IN, OK, SC, WI, LA | 6 (5) |
| E5 | Rare ownership facts, one question each where that state's rule needs it: a married individual (WV), a usufructuary (LA, PR), a life estate only (WY), the condo's declarant (CT), a college or university (OH), the unit's builder (MN), a federally insured lender (LA), a public facility corporation (TX) | Only those states | about 8 (5) |

## Lease page

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| L1 | Do you take a security deposit? If yes, how much (must be more than $0)? | Yes/No, then the amount | Everyone | 23 (18) |
| L2 | Lease type: Fixed term / Month-to-month | Pick one, blank to start. The end date shows for a fixed term. This replaces reading a blank end date as month-to-month, which can't tell "month-to-month" from "not entered". | Everyone | about 14 (5) |
| L3 | Is this a seasonal or vacation rental? | Yes/No | NJ, DE, WY | 6 (5) |
| L4 | Is the tenant your employee, with the housing part of the job compensation? | Checkbox | Everyone | 13 (1) |
| L5 | Did the tenant pay a holding deposit before signing? How much? | Yes/No, then the amount | WY | 1 (1) |
| L6 | Is there a utility deposit? | Checkbox | CO | 1 (0) |
| L7 | Parking spaces assigned to this lease | Number (each vehicle's spot is already on the tenant's vehicle record) | Everyone | — |
| L8 | First month's rent: Full month / Prorated / Waived for the days before the first full month | Pick one, suggested from the start date (Prorated when it isn't the rent due day), changeable | Everyone | 1 (1) |
| L9 | Storage unit assigned to this lease, and its monthly fee | Text; Number | Everyone, when P21a offers units | — |
| L10 | Who handles yard care? Tenant / Landlord | Pick one (shown when P21b is ticked) | Everyone | 2 (0) |
| L11 | Who handles snow removal? Tenant / Landlord / Not needed here | Pick one | Everyone | 5 (0) |
| — | Start and end dates, rent, late fee, pet rent | Exist | Everyone | 12 (9) |
| — | Renewal (same tenants, same property, starting when the last lease ends) | Derived | — | 2 (1) |
| — | Guarantor (a tenant on the lease with role Guarantor) | Derived | — | 14 (0) |
| — | One tenant or several (from the tenants on the lease) | Derived | — | 2 (0) |
| — | A dog or cat (from the tenants' pet records) | Derived | — | 11 (1) |

## Tenant and occupant pages

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| T1 | Student | Checkbox, on tenants and occupants | Everyone | 3 (2) |
| T2 | Active-duty servicemember | Checkbox, on tenants and occupants | Everyone | 1 (0), plus later eviction protections |
| T3 | Nonresident alien (for U.S. tax purposes) | Checkbox, shown only for an Alaska lease longer than a year | AK | 1 (1) |
| — | Occupant ages and the number of occupants | Exist | — | 3 (3) |

## Asked only in the lease builder

| # | Question | Type | Who sees it | Clauses |
|---|---|---|---|---|
| B1 | One unit-count question per rule, in that state's own words, for example: "Do you own more than four rental units in Virginia, or more than a 10% share of more than four, either in your own name or through any company? Count rentals that aren't in Steinoak too." Asked only when Steinoak's properties can't settle it; the saved answer is shown for confirmation at the next lease. | Yes/No | CO, OH, GA, VA, MD | 11 (4) |
| B2 | Foreclosure (P32) | Yes/No, every lease | AZ, LA, MN, OR | 4 (4) |

## Not asked: the landlord's own choices

Some clauses fit only when the landlord does something by choice: offers an online payment portal, attaches written house rules, gives a rent concession, has the tenant do maintenance tasks, or takes rent in installments. Choosing the clause is the choice, so there's no question; the clause stays in the picker.

## Not asked: events during a tenancy

Disability modification requests, a domestic-violence lock change and home child care happen after signing. They become an addendum or notice when they happen (backlog, "Mid-lease events and addenda"). Wyoming's clause saying whether family child care is allowed is the exception: it's a lease term, so it stays in the picker as a choice.

## Radon

No question needed. Colorado's and Florida's radon disclosures apply to every lease in those states and are on by default. Illinois's applies to every unit below the third story, which P5 decides.

## Also still to do

- **Clauses that may apply to every lease:** 40 of them, to be checked one by one before relabeling.
- **The landlord's-choice clauses:** 699 of them stay in the picker. No question decides them.
