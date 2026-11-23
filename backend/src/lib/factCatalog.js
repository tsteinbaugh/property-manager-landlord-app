// The questions the app asks so it can tell which situational clauses a lease
// needs (docs/applicability-questions.md, agreed with Taylor 2026-11-22). One
// catalog drives the forms on the property, lease and account pages and the
// lease builder's fill-in-the-gaps panel; the answers are stored as JSON
// (`Property.facts`, `Lease.facts`, `User.facts`) keyed by question id, and the
// applicability rules read them.
//
// Question types:
//   yesno     Yes / No, starts blank. For facts that can make a Required or
//             Legal duty clause apply: blank means "not answered", which a rule
//             treats as applying.
//   checkbox  true / false with a default. Only for facts that affect
//             Recommended or Optional clauses.
//   pickOne   one of `options`, starts blank.
//   pickAny   any of `options`; an option with `exclusive: true` (None) is an
//             answer on its own. An empty list means not answered.
//   number    a whole number >= 0, starts blank.
//   text      free text.
//   utilities who pays each utility, and how a charge-back works.
//   appliances which appliances the rental provides, and on what terms.
//
// `states`: the question shows only for those states (null = everyone). When a
// rule reads a question, its states must be covered here.
// `showIf`: { id, in: [...] } shows the question only when another answer in the
// same set is one of those values (for pickAny, includes one of them).
// `showIf`: { id: [ids], isSet: true } shows it once any of those has an answer.
// `builderOnly`: asked by the lease builder when a lease needs it, not on the
// account page (the per-rule unit-count questions, agreed 2026-11-22).
// `counts`: false keeps a question out of the "unanswered" count (contact
// details, optional amounts).

const NONE = { value: "NONE", label: "None", exclusive: true };
const MULTI_UNIT = ["APARTMENT", "CONDO", "COOP", "TOWNHOUSE"];
const KNOW = "To your best knowledge, ";

const PROPERTY = [
  // The building
  {
    id: "propertyType",
    section: "The building",
    type: "pickOne",
    label: "What kind of property is this?",
    options: [
      { value: "SINGLE_FAMILY", label: "Single-family house" },
      { value: "APARTMENT", label: "Apartment (including a unit in a duplex, triplex or fourplex)" },
      { value: "CONDO", label: "Condo unit" },
      { value: "COOP", label: "Co-op unit" },
      { value: "TOWNHOUSE", label: "Townhouse" },
      { value: "ADU", label: "Accessory dwelling unit (ADU)" },
      { value: "MANUFACTURED_HOME", label: "Manufactured home" },
      { value: "ROOM_IN_OWNER_HOME", label: "Room in the owner's home" },
    ],
  },
  {
    id: "unitsInBuilding",
    section: "The building",
    type: "number",
    label: "How many units are in this building?",
    help: "Count every unit, no matter who owns it.",
    showIf: { id: "propertyType", in: MULTI_UNIT },
  },
  {
    id: "ownerLivesInBuilding",
    section: "The building",
    type: "yesno",
    label: "Does the owner live in the building?",
    showIf: { id: "propertyType", in: MULTI_UNIT },
  },
  { id: "unitFloor", section: "The building", type: "number", label: "Which floor is this unit on?", help: "The ground floor is 1.", states: ["IL", "MD"] },
  { id: "highRise", section: "The building", type: "yesno", label: "Is the building four or more stories, or taller than 45 feet?", states: ["MD"] },
  { id: "completeSprinklers", section: "The building", type: "yesno", label: "Does the building have a complete sprinkler system?", states: ["MD", "CT"] },
  { id: "county", section: "The building", type: "text", label: "County" },
  {
    id: "island",
    section: "The building",
    type: "pickOne",
    label: "Island",
    options: ["Hawaiʻi", "Maui", "Oʻahu", "Kauaʻi", "Molokaʻi", "Lānaʻi", "Niʻihau"].map((v) => ({ value: v, label: v })),
    states: ["HI"],
  },

  // Association
  {
    id: "associationType",
    section: "Association",
    type: "pickOne",
    label: "Is the property part of an association?",
    options: [
      { value: "NONE", label: "None" },
      { value: "HOA", label: "HOA" },
      { value: "CONDO", label: "Condo association" },
      { value: "COOP", label: "Co-op" },
      { value: "METRO_DISTRICT", label: "Metro district" },
    ],
  },
  {
    id: "associationApprovesLeases",
    section: "Association",
    type: "checkbox",
    default: false,
    label: "The association must approve leases or tenants",
    showIf: { id: "associationType", in: ["HOA", "CONDO", "COOP", "METRO_DISTRICT"] },
  },
  {
    id: "condoConversion",
    section: "Association",
    type: "yesno",
    label: "Is this unit being converted, or has it been converted, to a condo or co-op, or have tenants been given a conversion notice?",
    states: ["NJ", "MD", "FL", "CO"],
  },

  // Water, sewer and site
  {
    id: "waterSource",
    section: "Water, sewer and site",
    type: "pickOne",
    label: "Where does the water come from?",
    options: [
      { value: "PUBLIC", label: "Public water" },
      { value: "WELL", label: "Private well" },
    ],
  },
  {
    id: "sewerType",
    section: "Water, sewer and site",
    type: "pickOne",
    label: "Sewer type",
    options: [
      { value: "PUBLIC", label: "Public sewer" },
      { value: "SEPTIC", label: "Septic system" },
    ],
  },
  {
    id: "waterFeatures",
    section: "Water, sewer and site",
    type: "pickAny",
    label: "Water features",
    options: [NONE, { value: "POOL", label: "Pool" }, { value: "SPA", label: "Hot tub or spa" }, { value: "OTHER", label: "Other (pond, fountain)" }],
  },
  {
    id: "parkingTypes",
    section: "Water, sewer and site",
    type: "pickAny",
    label: "Parking",
    options: [
      NONE,
      { value: "GARAGE", label: "Garage" },
      { value: "DRIVEWAY", label: "Driveway" },
      { value: "ASSIGNED", label: "Assigned space" },
      { value: "LOT", label: "Lot" },
      { value: "STREET", label: "Street only" },
    ],
  },
  { id: "parkingSpaces", section: "Water, sewer and site", type: "number", label: "How many parking spaces does the property have?", counts: false },
  { id: "parkingChargedSeparately", section: "Water, sewer and site", type: "checkbox", default: false, label: "You charge for parking separately from rent" },
  { id: "enforcesParkingRules", section: "Water, sewer and site", type: "yesno", label: "Do you enforce parking or towing rules?", states: ["CO", "SC", "TX"] },
  { id: "hasYard", section: "Water, sewer and site", type: "checkbox", default: false, label: "There's a yard or landscaping the tenant can use" },
  { id: "ruralLand", section: "Water, sewer and site", type: "checkbox", default: false, label: "Rural or farm land where hunting, fishing or grazing is possible" },
  {
    id: "storage",
    section: "Water, sewer and site",
    type: "pickOne",
    label: "On-site storage",
    options: [
      { value: "NONE", label: "None" },
      { value: "INCLUDED", label: "Included with the rent" },
      { value: "RENTED_UNITS", label: "Storage units rented for a separate fee" },
    ],
  },
  {
    id: "storageUnitCount",
    section: "Water, sewer and site",
    type: "number",
    label: "How many storage units?",
    counts: false,
    showIf: { id: "storage", in: ["RENTED_UNITS"] },
  },

  // Heat, appliances and furnishings
  { id: "tenantControlsThermostat", section: "Heat, appliances and furnishings", type: "checkbox", default: true, label: "The tenant controls the thermostat" },
  { id: "fireplace", section: "Heat, appliances and furnishings", type: "checkbox", default: false, label: "Fireplace or wood stove" },
  { id: "appliancesProvided", section: "Heat, appliances and furnishings", type: "appliances", label: "Which appliances does the rental provide?" },
  { id: "furnished", section: "Heat, appliances and furnishings", type: "checkbox", default: false, label: "Furnished" },
  { id: "smartLock", section: "Heat, appliances and furnishings", type: "checkbox", default: false, label: "Smart lock or electronic entry (keypad, fob, app)" },

  // What you know about the property
  {
    id: "environmentalRestriction",
    section: "What you know about the property",
    type: "yesno",
    label: `${KNOW}is there a recorded environmental restriction on the land?`,
    help: "An environmental covenant, activity and use limitation, easement, brownfield or voluntary cleanup notice, or a landfill or coal-ash notice in the land records. Your title insurance papers from the purchase list recorded restrictions.",
  },
  {
    id: "drugContamination",
    section: "What you know about the property",
    type: "yesno",
    label: `${KNOW}was the property used to make or use meth or other illegal drugs, or has a health officer ordered a cleanup?`,
    states: ["CA", "IA", "KY", "MI", "MO", "NH", "OK", "UT", "WV", "VA"],
  },
  { id: "mold", section: "What you know about the property", type: "yesno", label: `${KNOW}is there mold, or has the building been tested for mold?`, states: ["MT"] },
  { id: "codeViolations", section: "What you know about the property", type: "yesno", label: `${KNOW}are there open housing or building code violations at the property?`, states: ["RI", "WI"] },
  { id: "leadHazardOrder", section: "What you know about the property", type: "yesno", label: "Has a lead hazard order or lead mitigation notice been issued for the property?", states: ["NH", "IL"] },
  { id: "certifiedLeadFree", section: "What you know about the property", type: "yesno", label: "Has the unit been certified lead-free by an accredited inspector?", states: ["MD", "NJ"] },
  { id: "leadServiceLineNotice", section: "What you know about the property", type: "yesno", label: "Has your water system sent you a notice that the property has a lead service line?", states: ["NJ"] },
  { id: "floodZone", section: "What you know about the property", type: "yesno", label: "Is the property in a FEMA special flood hazard area?", help: "FEMA's flood map: msc.fema.gov.", states: ["IN", "OR", "PR"] },
  { id: "floodedRecently", section: "What you know about the property", type: "yesno", label: `${KNOW}has the property flooded in the last 5 years?`, states: ["OK", "GA"] },
  { id: "bedBugs", section: "What you know about the property", type: "yesno", label: `${KNOW}does this unit, or a unit next to it, have bed bugs, or is one being treated now?`, states: ["ME"] },
  {
    id: "pestControlContract",
    section: "What you know about the property",
    type: "yesno",
    label: "Does a pest-control company treat this property on a set schedule (for example, quarterly) under a service contract?",
    help: "Don't count treatments you order when a problem comes up.",
    states: ["CA"],
  },
  { id: "shoreline", section: "What you know about the property", type: "yesno", label: "Is the property on the shoreline, or does it have a shoreline right of way?", states: ["RI", "GU"] },
  { id: "nearMilitaryInstallation", section: "What you know about the property", type: "yesno", label: "Is the property within 3 miles of a military installation?", states: ["IN"] },
  { id: "militaryAirZone", section: "What you know about the property", type: "yesno", label: "Is the property in a military air installation noise or accident potential zone?", states: ["VA"] },
  { id: "specialDistrict", section: "What you know about the property", type: "yesno", label: "Is the property in a special or business improvement district?", help: "In Puerto Rico: the Convention Center District or the Science, Technology and Research District.", states: ["ID", "MS", "PR", "WV"] },
  { id: "groundwaterArea", section: "What you know about the property", type: "yesno", label: "Is the property in a groundwater management area?", states: ["OR"] },
  { id: "asbestosDisposalSite", section: "What you know about the property", type: "yesno", label: `${KNOW}is there an asbestos disposal site on the property?`, states: ["NH"] },
  { id: "noiseWaiver", section: "What you know about the property", type: "yesno", label: "Is a noise waiver recorded against the property?", states: ["IL"] },
  { id: "uncoveredSteamRadiators", section: "What you know about the property", type: "yesno", label: "Does the unit have uncovered steam radiators?", states: ["NJ"] },
  { id: "sanitaryCodeVariance", section: "What you know about the property", type: "yesno", label: "Is a sanitary code variance in effect for the property?", states: ["MA"] },
  { id: "stateSafetyException", section: "What you know about the property", type: "yesno", label: "Has the state granted a safety-code exception for the building?", states: ["NJ"] },
  { id: "ureaFormaldehyde", section: "What you know about the property", type: "yesno", label: `${KNOW}does the unit contain urea-formaldehyde building materials?`, states: ["MN"] },
  { id: "accessControlledCommunity", section: "What you know about the property", type: "yesno", label: "Is the property in an access-controlled community?", states: ["PR"] },
  { id: "defectiveDrywall", section: "What you know about the property", type: "yesno", label: `${KNOW}does the property have defective drywall?`, states: ["VA"] },
  { id: "nearSchool", section: "What you know about the property", type: "yesno", label: "Is the property within 1,000 feet of a school or child care facility?", states: ["OH"] },
  { id: "smokingNearby", section: "What you know about the property", type: "yesno", label: "Is smoking allowed in nearby units?", states: ["UT", "WV"] },
  { id: "localRentalFee", section: "What you know about the property", type: "yesno", label: "Does the local government charge a rental registration, permit or inspection fee?", states: ["NY"] },
  { id: "energyBenchmarking", section: "What you know about the property", type: "yesno", label: "Is the building covered by an energy benchmarking law?", states: ["CA", "DC"] },

  // Program housing
  {
    id: "programHousing",
    section: "Program housing",
    type: "pickAny",
    label: "Is this unit in any of these programs?",
    options: [
      NONE,
      { value: "RENT_CONTROLLED", label: "Rent-controlled or rent-stabilized" },
      { value: "VOUCHER", label: "Housing Choice Voucher tenant" },
      { value: "PROJECT_SUBSIDY", label: "Project-based subsidy" },
      { value: "LIHTC", label: "Low-income housing tax credit (LIHTC)" },
      { value: "SENIOR", label: "Senior housing" },
      { value: "STUDENT", label: "Student housing" },
    ],
  },

  // Property manager and notices
  { id: "managerCompany", section: "Property manager", type: "text", label: "Property manager company", counts: false },
  { id: "managerName", section: "Property manager", type: "text", label: "Contact name", counts: false },
  { id: "managerPhone", section: "Property manager", type: "text", label: "Phone", counts: false },
  { id: "managerEmail", section: "Property manager", type: "text", label: "Email", counts: false },
  { id: "managerAddress", section: "Property manager", type: "text", label: "Address", counts: false },
  { id: "managerSignsLeases", section: "Property manager", type: "yesno", label: "Does the manager sign leases for you?", showIf: { id: ["managerCompany", "managerName"], isSet: true } },
  { id: "managerLicensed", section: "Property manager", type: "yesno", label: "Does the manager hold a real estate license?", showIf: { id: ["managerCompany", "managerName"], isSet: true } },
  {
    id: "noticeAddress",
    section: "Property manager",
    type: "text",
    label: "Address for lease notices",
    help: "Leave blank to use the owning entity's mailing address. A lease can override it.",
    counts: false,
  },

  // Utilities
  { id: "utilities", section: "Utilities", type: "utilities", label: "Who pays each utility?" },
  { id: "meterServesOutsideUnit", section: "Utilities", type: "yesno", label: "Does this unit's meter also serve areas outside the unit (hallway or outdoor lights, a shared laundry)?" },
  {
    id: "energyChargeOnBill",
    section: "Utilities",
    type: "yesno",
    label: "Does the electric or gas account carry an energy-efficiency or project charge the tenant will pay?",
    states: ["IL", "MI", "NY", "WA", "SC", "NH", "VA", "WI"],
  },
  { id: "sellsOnsitePower", section: "Utilities", type: "yesno", label: "Do you sell power from an on-site solar or other renewable system to the tenant?", states: ["HI"] },
  {
    id: "trashHauling",
    section: "Utilities",
    type: "pickOne",
    label: "Who takes care of trash removal?",
    options: [
      { value: "CITY", label: "City or district service" },
      { value: "LANDLORD", label: "Landlord" },
      { value: "TENANT", label: "Tenant" },
    ],
    states: ["KS", "NV", "NH", "GU"],
  },
  { id: "landlordCosignsUtility", section: "Utilities", type: "yesno", label: "Do you co-sign the tenant's utility account?", states: ["AS"] },
  // Added with the second rule batch (2026-11-22).
  {"id": "hazardousContamination", "section": "What you know about the property", "type": "yesno", "label": "To your best knowledge, is or was the property (or the ground under it) contaminated with radioactive or other hazardous material, or used to store, treat or dispose of hazardous waste?", "help": "Answer Yes if you have received a report saying so, or if you know of that use, even if it was cleaned up.", "states": ["MO", "WV"]},
  {"id": "habitabilityProblem", "section": "What you know about the property", "type": "yesno", "label": "To your best knowledge, does the unit lack hot or cold running water, safe heat (67 degrees in all living areas), safe electricity, or working plumbing or sewage disposal, or have any structural or other condition that is a substantial hazard to health or safety?", "help": "Include anything you know of or would find on a reasonable inspection.", "states": ["WI"]},
  {"id": "publicCorporationOwned", "section": "What you know about the property", "type": "yesno", "label": "Is the property owned by a public facility corporation or a housing finance corporation that claims a property tax exemption for it?", "help": "These are arrangements where a city, county or housing authority corporation owns the development and it pays no property tax.", "states": ["TX"]},
  {"id": "knownContamination", "section": "What you know about the property", "type": "yesno", "label": "To your best knowledge, has any part of the land been contaminated by a release of hazardous substances or petroleum (for example, from a leaking underground storage tank), or is it listed as a contaminated site?", "help": "Answer Yes if you know of a state cleanup case, closure letter or contaminated-site listing for the parcel.", "states": ["MI", "WI"]},
  {"id": "routineCommonAreaPesticide", "section": "What you know about the property", "type": "yesno", "label": "Do you or your staff apply pesticide in common areas on a regular schedule, without a licensed pest control company?", "help": "For example, spraying hallways or a shared yard every month yourself.", "states": ["CA"]},
  {"id": "rentControlExemptionClaimed", "section": "What you know about the property", "type": "yesno", "label": "Has a claim of exemption from municipal rent control been filed with the construction official for this newly built building?", "help": "New Jersey lets newly constructed multiple dwellings of four or more units claim an exemption from rent control for up to 30 years.", "states": ["NJ"]},
  {"id": "onsiteManagerOrOffice", "section": "What you know about the property", "type": "yesno", "label": "Does the owner keep an office in the building, or employ a manager or agent who lives or keeps an office there?", "states": ["IL"]},
  {"id": "columbiaAssociation", "section": "What you know about the property", "type": "yesno", "label": "Is the property subject to Columbia Association covenants?", "help": "Only properties in Columbia, Howard County.", "states": ["MD"]},
  {"id": "indoorAirTestResults", "section": "What you know about the property", "type": "yesno", "label": "Have you received indoor air contamination test results for the property from a party doing an environmental cleanup, or from the Department of Environmental Conservation?", "help": "This usually applies where a vapor mitigation system or other control is in place, or the property is monitored under a state cleanup program.", "states": ["NY"]},
  {"id": "superfundListed", "section": "What you know about the property", "type": "yesno", "label": "To your best knowledge, is the property listed in EPA's Superfund site database (CERCLIS, now called SEMS)?", "help": "You can search the property's address on EPA's Superfund site search.", "states": ["IA"]},
  {"id": "landlordIsDeclarant", "section": "What you know about the property", "type": "yesno", "label": "Are you the developer (declarant) of this community, or a successor declarant, or acting for one?", "states": ["CT"], "showIf": {"id": "associationType", "in": ["HOA", "CONDO", "COOP"]}},
];

const LEASE = [
  { id: "seasonal", section: "This lease", type: "yesno", label: "Is this a seasonal or vacation rental?", states: ["NJ", "DE", "WY"] },
  { id: "employeeHousing", section: "This lease", type: "yesno", label: "Is the tenant your employee, with the housing part of the job's pay?" },
  { id: "holdingDeposit", section: "This lease", type: "yesno", label: "Did the tenant pay a holding deposit before signing?", states: ["WY"] },
  { id: "holdingDepositAmount", section: "This lease", type: "number", label: "Holding deposit amount", counts: false, states: ["WY"], showIf: { id: "holdingDeposit", in: [true] } },
  { id: "utilityDeposit", section: "This lease", type: "checkbox", default: false, label: "There's a utility deposit", states: ["CO"] },
  {
    id: "firstMonthRent",
    section: "This lease",
    type: "pickOne",
    label: "First month's rent",
    options: [
      { value: "FULL", label: "Full month" },
      { value: "PRORATED", label: "Prorated" },
      { value: "WAIVED", label: "Waived for the days before the first full month" },
    ],
  },
  { id: "parkingAssigned", section: "This lease", type: "number", label: "Parking spaces assigned to this lease", counts: false },
  { id: "storageUnitAssigned", section: "This lease", type: "text", label: "Storage unit assigned to this lease", counts: false },
  { id: "storageUnitFee", section: "This lease", type: "number", label: "Storage unit monthly fee", counts: false },
  {
    id: "yardCare",
    section: "This lease",
    type: "pickOne",
    label: "Who handles yard care?",
    options: [
      { value: "TENANT", label: "Tenant" },
      { value: "LANDLORD", label: "Landlord" },
    ],
  },
  {
    id: "snowRemoval",
    section: "This lease",
    type: "pickOne",
    label: "Who handles snow removal?",
    options: [
      { value: "TENANT", label: "Tenant" },
      { value: "LANDLORD", label: "Landlord" },
      { value: "NOT_NEEDED", label: "Not needed here" },
    ],
  },
  { id: "foreclosureUnderway", section: "This lease", type: "yesno", label: "Is a foreclosure under way on this property right now?", help: "Count a notice of default, a trustee's sale notice, a contract forfeiture or a tax-lien foreclosure.", states: ["AZ", "LA", "MN", "OR"] },
  { id: "noticeAddress", section: "This lease", type: "text", label: "Address for lease notices (only if different from the property's)", counts: false },
  // Added with the second rule batch (2026-11-22).
  {"id": "prRentSubsidy", "section": "This lease", "type": "yesno", "label": "Does the tenant receive a rent subsidy from Puerto Rico's Rent Subsidy Program for Low-Income Older Adults or the Veterans' Rent Matching Program?", "help": "These are Puerto Rico Department of Housing and Veterans Advocate programs (Ley 173-1996), not federal Section 8.", "states": ["PR"]},
  {"id": "brokerInvolved", "section": "This lease", "type": "yesno", "label": "Is a real estate broker or agent providing brokerage services to you or the tenant for this lease (for example, finding the tenant, showing the property or negotiating the terms)?", "states": ["OK"]},
  {"id": "contractForDeedCancellation", "section": "This lease", "type": "yesno", "label": "Have you received a notice cancelling the contract for deed you bought this property under?", "help": "Only matters if you are buying the property on a contract for deed.", "states": ["MN"]},
];

// Account questions show when any of the landlord's properties is in `states`.
const ACCOUNT = [
  { id: "residenceAddress", section: "Your primary residence", type: "text", label: "Primary residence address" },
  { id: "residenceState", section: "Your primary residence", type: "state", label: "State or territory" },
  {
    id: "residenceIsland",
    section: "Your primary residence",
    type: "pickOne",
    label: "Island",
    options: ["Hawaiʻi", "Maui", "Oʻahu", "Kauaʻi", "Molokaʻi", "Lānaʻi", "Niʻihau"].map((v) => ({ value: v, label: v })),
    showIf: { id: "residenceState", in: ["HI"] },
  },
  { id: "landlordLicensed", section: "Your primary residence", type: "yesno", label: "Do you hold a real estate license?", states: ["IL", "IN", "OK", "SC", "WI", "LA"] },
  // Added with the second rule batch (2026-11-22).
  {"id": "moreThanTenRentalUnits", "section": "Your primary residence", "type": "yesno", "label": "Counting rental units owned by you, your spouse and your minor children, do you own more than 10 rental units?", "help": "Count every rental unit, including ones not entered in this app.", "states": ["GA"], "builderOnly": true},
  {"id": "isCollegeOrUniversity", "section": "Your primary residence", "type": "yesno", "label": "Are you a college or university renting housing to your own students?", "states": ["OH"], "builderOnly": true},
  {"id": "ownsSixPlusUnitsMD", "section": "Your primary residence", "type": "yesno", "label": "Do you own six or more residential rental units in Maryland?", "help": "Count every unit you own in Maryland, including any not set up in Steinoak.", "states": ["MD"], "builderOnly": true},
];

const UTILITY_KINDS = [
  { value: "electric", label: "Electric" },
  { value: "gas", label: "Gas" },
  { value: "water", label: "Water" },
  { value: "sewer", label: "Sewer" },
  { value: "trash", label: "Trash" },
];
const UTILITY_WHO_PAYS = [
  { value: "TENANT_DIRECT", label: "Tenant pays the company directly" },
  { value: "INCLUDED", label: "Included in rent" },
  { value: "CHARGED_BACK", label: "Landlord pays and charges the tenant back" },
  { value: "NOT_PROVIDED", label: "Not provided at this property" },
];
const UTILITY_METHODS = [
  { value: "SUBMETER", label: "Separate meter for this unit (submeter)" },
  { value: "SHARED_SPLIT", label: "A shared bill split by a formula" },
  { value: "FLAT", label: "A flat monthly charge" },
];
const APPLIANCE_KINDS = [
  { value: "refrigerator", label: "Refrigerator" },
  { value: "range", label: "Range or stove" },
  { value: "dishwasher", label: "Dishwasher" },
  { value: "microwave", label: "Microwave" },
  { value: "washer", label: "Washer" },
  { value: "dryer", label: "Dryer" },
  { value: "freezer", label: "Freezer" },
  { value: "garageDoorOpener", label: "Garage door opener" },
];
const APPLIANCE_TERMS = [
  { value: "COVERED", label: "Provided, covered by the lease" },
  { value: "AS_IS", label: "Provided as-is, not covered by the lease" },
  { value: "NOT_PROVIDED", label: "Not provided" },
];

const STATE_CODES = [
  "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
  "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE", "NH", "NJ", "NM", "NV", "NY", "OH", "OK",
  "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY", "DC", "AS", "GU", "MP",
  "PR", "VI",
];

const CATALOG = { property: PROPERTY, lease: LEASE, account: ACCOUNT };

// Whether `question` shows for these states and these answers.
function isVisible(question, states, answers) {
  if (question.states && !question.states.some((s) => states.includes(s))) return false;
  if (question.showIf) {
    if (question.showIf.isSet) {
      const ids = [].concat(question.showIf.id);
      if (!ids.some((id) => answers?.[id] !== undefined && answers?.[id] !== null && answers?.[id] !== "")) return false;
    } else {
      const other = answers?.[question.showIf.id];
      const values = Array.isArray(other) ? other : [other];
      if (!values.some((v) => question.showIf.in.includes(v))) return false;
    }
  }
  return true;
}

// Whether a visible question still needs an answer.
function isUnanswered(question, answers) {
  if (question.counts === false || question.type === "checkbox") return false;
  const value = answers?.[question.id];
  if (question.type === "pickAny") return !Array.isArray(value) || value.length === 0;
  if (question.type === "utilities") return UTILITY_KINDS.some((u) => !value?.[u.value]?.whoPays);
  if (question.type === "appliances") return false;
  return value === undefined || value === null || value === "";
}

function unansweredQuestions(target, states, answers) {
  return CATALOG[target].filter((q) => isVisible(q, states, answers) && isUnanswered(q, answers));
}

const optionValues = (q) => q.options.map((o) => o.value);

// Validates and normalizes a patch of answers for `target`. Returns
// { facts } or { error }. A null value clears an answer.
function validateFacts(target, patch) {
  if (!patch || typeof patch !== "object" || Array.isArray(patch)) return { error: "facts must be an object" };
  const byId = Object.fromEntries(CATALOG[target].map((q) => [q.id, q]));
  const facts = {};
  for (const [id, value] of Object.entries(patch)) {
    const q = byId[id];
    if (!q) return { error: `Unknown question: ${id}` };
    if (value === null) {
      facts[id] = null;
      continue;
    }
    const bad = () => ({ error: `Invalid answer for ${id}` });
    switch (q.type) {
      case "yesno":
      case "checkbox":
        if (typeof value !== "boolean") return bad();
        break;
      case "pickOne":
        if (!optionValues(q).includes(value)) return bad();
        break;
      case "state":
        if (!STATE_CODES.includes(value)) return bad();
        break;
      case "pickAny": {
        if (!Array.isArray(value) || !value.every((v) => optionValues(q).includes(v))) return bad();
        const exclusive = q.options.filter((o) => o.exclusive).map((o) => o.value);
        if (value.some((v) => exclusive.includes(v)) && value.length > 1) return bad();
        break;
      }
      case "number":
        if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return bad();
        break;
      case "text":
        if (typeof value !== "string") return bad();
        break;
      case "utilities":
        if (typeof value !== "object" || Array.isArray(value)) return bad();
        for (const [kind, entry] of Object.entries(value)) {
          if (!UTILITY_KINDS.some((u) => u.value === kind) || typeof entry !== "object" || entry === null) return bad();
          if (entry.whoPays != null && !UTILITY_WHO_PAYS.some((o) => o.value === entry.whoPays)) return bad();
          if (entry.method != null && !UTILITY_METHODS.some((o) => o.value === entry.method)) return bad();
        }
        break;
      case "appliances":
        if (typeof value !== "object" || Array.isArray(value)) return bad();
        for (const [kind, term] of Object.entries(value)) {
          if (!APPLIANCE_KINDS.some((a) => a.value === kind) || !APPLIANCE_TERMS.some((t) => t.value === term)) return bad();
        }
        break;
      default:
        return bad();
    }
    facts[id] = typeof value === "string" ? value.trim() : value;
  }
  return { facts };
}

// Applies a validated patch to stored answers: null removes an answer.
function mergeFacts(existing, patch) {
  const merged = { ...(existing || {}) };
  for (const [id, value] of Object.entries(patch)) {
    if (value === null || value === "") delete merged[id];
    else merged[id] = value;
  }
  return merged;
}

module.exports = {
  CATALOG,
  UTILITY_KINDS,
  UTILITY_WHO_PAYS,
  UTILITY_METHODS,
  APPLIANCE_KINDS,
  APPLIANCE_TERMS,
  STATE_CODES,
  isVisible,
  unansweredQuestions,
  validateFacts,
  mergeFacts,
};
