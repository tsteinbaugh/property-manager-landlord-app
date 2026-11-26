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
//   money     a dollar amount >= 0, starts blank.
//   date      a day, "YYYY-MM-DD", starts blank.
//   text      free text.
//   utilities who pays each utility, and how a charge-back works.
//   appliances which appliances the rental provides, and on what terms.
//
// `states`: the question shows only for those states (null = everyone). When a
// rule reads a question, its states must be covered here.
// `showIf`: { id, in: [...] } shows the question only when another answer in the
// same set is one of those values (for pickAny, includes one of them).
// `showIf`: { id: [ids], isSet: true } shows it once any of those has an answer.
// `showIf`: { id: "utilities", whoPays: [...] } shows it when any utility is paid
// that way.
// `builderOnly`: asked by the lease builder when a lease needs it, not on the
// account page (the per-rule unit-count questions, agreed 2026-11-22).
// `counts`: false keeps a question out of the "unanswered" count (contact
// details, optional amounts).

const { PROPERTY_FIELDS, LEASE_FIELDS } = require("./clauseFields");

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
    type: "yesno",
    label: "Must the association approve leases or tenants?",
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
  { id: "enforcesParkingRules", section: "Water, sewer and site", type: "yesno", label: "Do you enforce parking or towing rules?", states: ["CO", "SC", "TX"] },
  { id: "hasYard", section: "Water, sewer and site", type: "yesno", label: "Is there a yard or landscaping the tenant can use?" },
  { id: "ruralLand", section: "Water, sewer and site", type: "yesno", label: "Is it rural or farm land where hunting, fishing or grazing is possible?" },
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
  { id: "tenantControlsThermostat", section: "Heat, appliances and furnishings", type: "yesno", label: "Does the tenant control the thermostat?" },
  { id: "fireplace", section: "Heat, appliances and furnishings", type: "checkbox", default: false, label: "Fireplace or wood stove" },
  { id: "appliancesProvided", section: "Heat, appliances and furnishings", type: "appliances", label: "Which appliances does the rental provide?" },
  {
    id: "hasCarpet",
    section: "Flooring",
    type: "yesno",
    label: "Does the rental have carpet?",
    help: "If Property Specs lists carpet flooring, this is answered Yes for you.",
  },
  { id: "furnished", section: "Heat, appliances and furnishings", type: "yesno", label: "Is the rental furnished?" },
  { id: "smartLock", section: "Heat, appliances and furnishings", type: "yesno", label: "Is there a smart lock or electronic entry (keypad, fob, app)?" },

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
  // Every state since 2026-11-23: a unit found lead-based paint free by a
  // certified inspector is exempt from the federal lead disclosure (40 C.F.R.
  // § 745.101(b)); Maryland and New Jersey rules read it too.
  { id: "certifiedLeadFree", section: "What you know about the property", type: "yesno", label: "Has the unit been certified lead-free by an accredited inspector?" },
  { id: "leadServiceLineNotice", section: "What you know about the property", type: "yesno", label: "Has your water system sent you a notice that the property has a lead service line?", states: ["NJ"] },
  { id: "floodZone", section: "What you know about the property", type: "yesno", label: "Is the property in a FEMA special flood hazard area?", help: "FEMA's flood map: msc.fema.gov.", states: ["OR"] },
  {
    id: "belowFloodElevationIN",
    section: "What you know about the property",
    type: "yesno",
    label: "Is the building's lowest floor, including a basement, at or below the 100-year flood elevation?",
    help: "Use FEMA's flood map (msc.fema.gov), the Indiana Department of Natural Resources' floodplain map, or a FEMA-approved local floodplain map.",
    states: ["IN"],
  },
  {
    id: "floodProneZonePR",
    section: "What you know about the property",
    type: "yesno",
    label: "Is the land in a flood-prone zone (Zona Susceptible a Inundaciones) the Planning Board has declared, including a provisional zone?",
    help: "The Junta de Planificación's flood zone maps show these zones.",
    states: ["PR"],
  },
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
      { value: "DISABILITY", label: "Housing for people with disabilities" },
      { value: "STUDENT", label: "Student housing" },
    ],
  },
  // The federal lead disclosure's exception for "housing for the elderly"
  // (households with someone 62 or older at first occupancy) or for people with
  // disabilities (40 C.F.R. § 745.103); "Senior housing" alone may be 55+.
  {
    id: "elderlyOrDisabledHousing",
    section: "Program housing",
    type: "yesno",
    label: "Is the housing reserved for households with someone 62 or older at move-in, or for people with disabilities?",
    showIf: { id: "programHousing", in: ["SENIOR", "DISABILITY"] },
  },
  // Minn. Stat. § 325F.722: housing with services exempt from assisted living
  // licensure must put the lockable-door statement in its contract.
  {
    id: "mnExemptSetting",
    section: "Program housing",
    type: "yesno",
    label: "Is this housing with services that's exempt from assisted living licensure (a Minnesota \"exempt setting\")?",
    help: "Minn. Stat. § 325F.722. Most rentals aren't; answer No unless you provide services under that law.",
    states: ["MN"],
  },

  // Property manager and notices
  { id: "managerCompany", section: "Property manager", type: "text", label: "Property manager company", counts: false },
  { id: "managerName", section: "Property manager", type: "text", label: "Contact name", counts: false },
  { id: "managerPhone", section: "Property manager", type: "text", label: "Phone", counts: false },
  { id: "managerEmail", section: "Property manager", type: "text", label: "Email", counts: false },
  { id: "managerAddress", section: "Property manager", type: "text", label: "Address", counts: false },
  {
    id: "emergencyPhone",
    section: "Property manager",
    type: "text",
    label: "Emergency phone for tenants",
    help: "The number tenants call about an emergency at the property. Leave it blank to use the property manager's phone, or your entity's phone if there's no manager. Nevada requires a responsible person who lives in the property's county or within 60 miles (NRS 118A.260); Texas requires it to be answered around the clock if there's an on-site office (Tex. Prop. Code § 92.020).",
    counts: false,
  },
  { id: "managerSignsLeases", section: "Property manager", type: "yesno", label: "Does the manager sign leases for you?", showIf: { id: ["managerCompany", "managerName"], isSet: true } },
  { id: "managerLicensed", section: "Property manager", type: "yesno", label: "Does the manager hold a real estate license?", showIf: { id: ["managerCompany", "managerName"], isSet: true } },
  {
    id: "pmPermitNV",
    section: "Property manager",
    type: "yesno",
    label: "Does the manager hold a Nevada property management permit (NRS chapter 645)?",
    help: "A real estate license alone isn't the permit.",
    states: ["NV"],
    showIf: { id: ["managerCompany", "managerName"], isSet: true },
  },

  // Utilities
  { id: "utilities", section: "Utilities", type: "utilities", label: "Who pays each utility?" },
  // One per meter, shown in that utility's block (Taylor, 2026-11-22); the laws
  // differ in which meters they cover (factRules.js / pickerRules.js).
  { id: "electricMeterOutsideUnit", section: "Utilities", type: "yesno", label: "Does this unit's electric meter also serve areas outside the unit (hallway or outdoor lights, a shared laundry)?" },
  { id: "gasMeterOutsideUnit", section: "Utilities", type: "yesno", label: "Does this unit's gas meter also serve areas outside the unit (a shared furnace or water heater, a shared laundry)?" },
  { id: "waterMeterOutsideUnit", section: "Utilities", type: "yesno", label: "Does this unit's water meter also serve areas outside the unit (another unit, a shared laundry, a common spigot)?" },
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
  // Two parts (2026-11-23): most employee-housing clauses need the housing
  // tied to the job; Delaware's needs it to be part of the pay (25 Del. C.
  // § 5314); Minnesota's is for an employee whose housing isn't a job term.
  { id: "tenantIsEmployee", section: "This lease", type: "yesno", label: "Is the tenant your employee, or your property manager's?" },
  {
    id: "employeeHousingLink",
    section: "This lease",
    type: "pickOne",
    label: "How is the housing tied to the job?",
    options: [
      { value: "PART_OF_PAY", label: "It's part of the pay" },
      { value: "BECAUSE_OF_JOB", label: "It's provided because of the job, at a separate rent" },
      { value: "NOT_TIED", label: "It isn't tied to the job" },
    ],
    showIf: { id: "tenantIsEmployee", in: [true] },
  },
  { id: "holdingDeposit", section: "This lease", type: "yesno", label: "Did the tenant pay a holding deposit before signing?", states: ["WY"] },
  { id: "holdingDepositAmount", section: "This lease", type: "number", label: "Holding deposit amount", counts: false, states: ["WY"], showIf: { id: "holdingDeposit", in: [true] } },
  { id: "utilityDeposit", section: "This lease", type: "yesno", label: "Is there a utility deposit?", states: ["CO"] },
  {
    id: "firstMonthRent",
    section: "This lease",
    type: "pickOne",
    label: "How is the first month's rent handled?",
    ownSection: true, // the lease page's First month section
    options: [
      { value: "FULL", label: "Full month" },
      { value: "PRORATED", label: "Prorated" },
      { value: "WAIVED", label: "Waived for the days before the first full month" },
    ],
  },  {
    id: "firstMonthAmount",
    section: "This lease",
    type: "number",
    label: "First month's prorated rent",
    counts: false,
    ownSection: true,
    showIf: { id: "firstMonthRent", in: ["PRORATED"] },
  },

  // Parking for this lease; the property page records only what's physically
  // there (Taylor, 2026-11-23).
  { id: "parkingAssigned", section: "This lease", type: "number", label: "Parking spaces assigned to this lease", counts: false },
  { id: "parkingSpaceNumbers", section: "This lease", type: "text", label: "Which spaces (numbers or locations)", counts: false },
  { id: "parkingCharged", section: "This lease", type: "yesno", label: "Do you charge for parking separately from rent?" },
  { id: "parkingFeePerSpace", section: "This lease", type: "number", label: "Monthly parking fee per space", counts: false, showIf: { id: "parkingCharged", in: [true] } },
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
  { id: "foreclosureUnderway", section: "This lease", type: "yesno", label: "Is a foreclosure under way on this property right now?", help: "Count a notice of default, a trustee's sale notice, a contract forfeiture or a tax-lien foreclosure.", states: ["AZ", "LA", "MN", "NV", "OR"] },
  // Asked only in the lease builder, when a 0-bedroom unit or elderly or
  // disability housing could be exempt from the federal lead disclosure; a child
  // under 6 living there, or expected to, removes the exemption (40 C.F.R. § 745.103).
  {
    id: "childUnder6",
    section: "This lease",
    type: "yesno",
    label: "Will a child under 6 live in the rental, or is one expected to?",
    help: "A studio, or housing for seniors or people with disabilities, needs the federal lead paint disclosure only if a child under 6 lives there.",
    builderOnly: true,
  },
  // The lease page's Rent payment section (ownSection); a blank field uses the
  // default the section shows (the entity's name and phone, the notice address).
  { id: "rentPayeeName", section: "This lease", type: "text", label: "Rent is paid to", counts: false, ownSection: true },
  { id: "rentPaymentAddress", section: "This lease", type: "text", label: "Where rent is paid", counts: false, ownSection: true },
  { id: "rentPayeePhone", section: "This lease", type: "text", label: "Phone for rent", counts: false, ownSection: true },
  { id: "rentPaymentForms", section: "This lease", type: "text", label: "Forms of payment accepted", counts: false, ownSection: true },
  { id: "rentPaymentDaysHours", section: "This lease", type: "text", label: "Days and hours rent can be paid in person", counts: false, ownSection: true },
  // Shown in the lease page's Notices section, not the Lease questions card (ownSection).
  { id: "noticeAddress", section: "This lease", type: "text", label: "Address for lease notices", counts: false, ownSection: true },
  // Added with the second rule batch (2026-11-22).
  {"id": "prRentSubsidy", "section": "This lease", "type": "yesno", "label": "Does the tenant receive a rent subsidy from Puerto Rico's Rent Subsidy Program for Low-Income Older Adults or the Veterans' Rent Matching Program?", "help": "These are Puerto Rico Department of Housing and Veterans Advocate programs (Ley 173-1996), not federal Section 8.", "states": ["PR"]},
  {"id": "brokerInvolved", "section": "This lease", "type": "yesno", "label": "Is a real estate broker or agent providing brokerage services to you or the tenant for this lease (for example, finding the tenant, showing the property or negotiating the terms)?", "states": ["OK"]},
  {"id": "contractForDeedCancellation", "section": "This lease", "type": "yesno", "label": "Have you received a notice cancelling the contract for deed you bought this property under?", "help": "Only matters if you are buying the property on a contract for deed.", "states": ["MN"]},
];

const HAWAII_ISLANDS = ["Hawaiʻi", "Maui", "Oʻahu", "Kauaʻi", "Molokaʻi", "Lānaʻi", "Niʻihau"].map((v) => ({ value: v, label: v }));

// Account questions are about the user personally (not about a property's
// owner, which can be an LLC); they show when any of the user's properties is
// in `states`.
const ACCOUNT = [
  { id: "landlordLicensed", section: "About you", type: "yesno", label: "Do you hold a real estate license?", states: ["IL", "IN", "OK", "SC", "WI", "LA"] },
  {
    id: "offersTenantPortal",
    section: "How you run your rentals",
    type: "yesno",
    label: "Do you offer tenants an online portal?",
    help: "A website or app where tenants pay rent, send repair requests or get notices, such as TurboTenant, Avail, Zillow Rental Manager, Buildium or AppFolio.",
  },
  {"id": "isCollegeOrUniversity", "section": "About you", "type": "yesno", "label": "Are you a college or university renting housing to your own students?", "states": ["OH"], "builderOnly": true},
];

// Owner questions are about the property's owner (an Entity: the landlord
// personally, or an LLC or other business), saved on the owner (Taylor,
// 2026-11-26). `kind` limits a question to a person owner (PERSONAL) or a
// business owner (every other entity type): only a person lives somewhere; a
// business has a principal office. They show when any of the owner's
// properties is in `states`. "this owner" in a label is replaced with the
// owner's name in the lease builder.
const OWNER = [
  {
    id: "homeAddress",
    section: "Where this owner lives",
    kind: "person",
    type: "text",
    label: "Home address",
    help: "Where this person lives, which can differ from the owner's mailing address.",
  },
  { id: "homeState", section: "Where this owner lives", kind: "person", type: "state", label: "State or territory where this owner lives" },
  {
    id: "homeIsland",
    section: "Where this owner lives",
    kind: "person",
    type: "pickOne",
    label: "Island where this owner lives",
    options: HAWAII_ISLANDS,
    showIf: { id: "homeState", in: ["HI"] },
  },
  {
    id: "officeAddress",
    section: "Principal office",
    kind: "business",
    type: "text",
    label: "Principal office address",
    help: "Where the business is actually run from, which can differ from its mailing address (a PO box, for example).",
  },
  { id: "officeState", section: "Principal office", kind: "business", type: "state", label: "State or territory of this owner's principal office" },
  {
    id: "officeIsland",
    section: "Principal office",
    kind: "business",
    type: "pickOne",
    label: "Island of this owner's principal office",
    options: HAWAII_ISLANDS,
    showIf: { id: "officeState", in: ["HI"] },
  },
  {"id": "moreThanTenRentalUnits", "section": "Rentals this owner has", "kind": "person", "type": "yesno", "label": "Counting rental units owned by this owner, their spouse and their minor children, do they own more than 10 rental units?", "help": "Count every rental unit, including ones not entered in this app.", "states": ["GA"], "builderOnly": true},
  {"id": "ownsSixPlusUnitsMD", "section": "Rentals this owner has", "type": "yesno", "label": "Does this owner own six or more residential rental units in Maryland?", "help": "Count every unit this owner has in Maryland, including any not set up in Steinoak.", "states": ["MD"], "builderOnly": true},
];

// Whether an owner question fits this owner: a person or a business.
function ownerKindOf(entity) {
  if (!entity?.entityType) return null;
  return entity.entityType === "PERSONAL" ? "person" : "business";
}
function fitsOwner(question, entity) {
  return !question.kind || question.kind === ownerKindOf(entity);
}

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

// Where each question lives on the pages (Taylor, 2026-11-22: built into the
// pages, not a separate Lease questions card). `place` is
// "<page>.<section>": property.address, property.structural,
// property.parking, property.utilities, property.legal, property.manager,
// property.disclosures, specs.furnishings, specs.flooring, lease.details,
// lease.firstMonth, lease.notices, lease.rentPayment, account.about, account.rentals,
// owner.location, owner.rentals.
const PLACE_BY_SECTION = {
  "The building": "property.structural",
  Association: "property.legal",
  "Water, sewer and site": "property.structural",
  "Heat, appliances and furnishings": "specs.furnishings",
  "What you know about the property": "property.disclosures",
  "Program housing": "property.legal",
  "Property manager": "property.manager",
  Utilities: "property.utilities",
  "This lease": "lease.details",
  "About you": "account.about",
  "How you run your rentals": "account.rentals",
  "Where this owner lives": "owner.location",
  "Principal office": "owner.location",
  "Rentals this owner has": "owner.rentals",
};
const PLACE_BY_ID = {
  county: "property.address",
  island: "property.address",
  waterSource: "property.utilities",
  sewerType: "property.utilities",
  parkingTypes: "property.parking",
  parkingSpaces: "property.parking",
  enforcesParkingRules: "property.parking",
  storage: "property.parking",
  storageUnitCount: "property.parking",
  hasCarpet: "specs.flooring",
  firstMonthRent: "lease.firstMonth",
  firstMonthAmount: "lease.firstMonth",
  noticeAddress: "lease.notices",
  rentPayeeName: "lease.rentPayment",
  rentPaymentAddress: "lease.rentPayment",
  rentPayeePhone: "lease.rentPayment",
  rentPaymentForms: "lease.rentPayment",
  rentPaymentDaysHours: "lease.rentPayment",
};
// Fields that only fill clause variables (clauseFields.js) bring their own place.
PROPERTY.push(...PROPERTY_FIELDS);
LEASE.push(...LEASE_FIELDS);
for (const list of [PROPERTY, LEASE, ACCOUNT, OWNER]) {
  for (const q of list) q.place ||= PLACE_BY_ID[q.id] || PLACE_BY_SECTION[q.section];
}

// The short name a page shows beside an answer ("Property type: Single-family
// house", Taylor, 2026-11-23); the full question is for the forms.
const SHORT_LABELS = {
  propertyType: "Property type",
  unitsInBuilding: "Units in building",
  ownerLivesInBuilding: "Owner lives in building",
  unitFloor: "Floor",
  highRise: "Four or more stories (or over 45 ft)",
  completeSprinklers: "Complete sprinkler system",
  county: "County",
  island: "Island",
  associationType: "Association",
  associationApprovesLeases: "Association approves leases",
  condoConversion: "Condo or co-op conversion",
  waterSource: "Water source",
  sewerType: "Sewer type",
  waterFeatures: "Water features",
  parkingTypes: "Parking",
  parkingSpaces: "Parking spaces",
  emergencyPhone: "Emergency phone",
  rentPayeeName: "Rent paid to",
  rentPaymentAddress: "Where rent is paid",
  rentPayeePhone: "Phone for rent",
  rentPaymentForms: "Payment forms",
  rentPaymentDaysHours: "In-person days and hours",
  enforcesParkingRules: "Parking or towing rules enforced",
  hasYard: "Yard for tenant use",
  ruralLand: "Rural or farm land",
  storage: "On-site storage",
  storageUnitCount: "Storage units",
  tenantControlsThermostat: "Tenant controls thermostat",
  fireplace: "Fireplace or wood stove",
  appliancesProvided: "Appliances provided",
  hasCarpet: "Carpet",
  furnished: "Furnished",
  smartLock: "Smart lock or electronic entry",
  environmentalRestriction: "Recorded environmental restriction",
  drugContamination: "Drug lab or drug-use contamination",
  mold: "Mold or mold testing",
  codeViolations: "Open code violations",
  leadHazardOrder: "Lead hazard order",
  certifiedLeadFree: "Certified lead-free",
  leadServiceLineNotice: "Lead service line notice",
  floodZone: "FEMA flood hazard area",
  belowFloodElevationIN: "Lowest floor at or below 100-year flood elevation",
  floodProneZonePR: "Flood-prone zone",
  floodedRecently: "Flooded in the last 5 years",
  bedBugs: "Bed bugs",
  pestControlContract: "Scheduled pest control contract",
  shoreline: "Shoreline or shoreline right of way",
  nearMilitaryInstallation: "Within 3 miles of a military installation",
  militaryAirZone: "Military air noise or accident zone",
  specialDistrict: "Special or business improvement district",
  groundwaterArea: "Groundwater management area",
  asbestosDisposalSite: "Asbestos disposal site",
  noiseWaiver: "Recorded noise waiver",
  uncoveredSteamRadiators: "Uncovered steam radiators",
  sanitaryCodeVariance: "Sanitary code variance",
  stateSafetyException: "State safety-code exception",
  ureaFormaldehyde: "Urea-formaldehyde materials",
  accessControlledCommunity: "Access-controlled community",
  defectiveDrywall: "Defective drywall",
  nearSchool: "Within 1,000 ft of a school or child care",
  smokingNearby: "Smoking allowed in nearby units",
  localRentalFee: "Local rental registration or inspection fee",
  energyBenchmarking: "Energy benchmarking law",
  programHousing: "Housing programs",
  managerCompany: "Company",
  managerName: "Contact",
  managerPhone: "Phone",
  managerEmail: "Email",
  managerAddress: "Address",
  managerSignsLeases: "Signs leases for you",
  managerLicensed: "Real estate license",
  pmPermitNV: "Nevada property management permit",
  utilities: "Who pays",
  electricMeterOutsideUnit: "Electric meter serves areas outside the unit",
  gasMeterOutsideUnit: "Gas meter serves areas outside the unit",
  waterMeterOutsideUnit: "Water meter serves areas outside the unit",
  energyChargeOnBill: "Energy-efficiency charge on the bill",
  sellsOnsitePower: "Sells on-site power to the tenant",
  trashHauling: "Trash removal",
  landlordCosignsUtility: "You co-sign the utility account",
  hazardousContamination: "Hazardous material contamination",
  habitabilityProblem: "Habitability problem",
  publicCorporationOwned: "Owned by a public facility or housing finance corporation",
  knownContamination: "Contaminated land",
  routineCommonAreaPesticide: "Staff apply pesticide in common areas",
  rentControlExemptionClaimed: "Rent control exemption claimed",
  onsiteManagerOrOffice: "On-site office or manager",
  columbiaAssociation: "Columbia Association covenants",
  indoorAirTestResults: "Indoor air test results received",
  superfundListed: "Superfund site",
  landlordIsDeclarant: "You are the community's declarant",
  seasonal: "Seasonal or vacation rental",
  tenantIsEmployee: "Tenant is your (or your manager's) employee",
  employeeHousingLink: "Housing and the job",
  holdingDeposit: "Holding deposit",
  holdingDepositAmount: "Holding deposit amount",
  utilityDeposit: "Utility deposit",
  firstMonthRent: "First month",
  firstMonthAmount: "First month's rent",
  parkingAssigned: "Parking spaces assigned",
  parkingSpaceNumbers: "Parking spaces",
  parkingCharged: "Parking charged separately",
  parkingFeePerSpace: "Parking fee per space",
  storageUnitAssigned: "Storage unit",
  storageUnitFee: "Storage unit fee",
  yardCare: "Yard care",
  snowRemoval: "Snow removal",
  foreclosureUnderway: "Foreclosure under way",
  noticeAddress: "Notice address",
  childUnder6: "Child under 6 living in the rental",
  elderlyOrDisabledHousing: "Reserved for 62+ or people with disabilities",
  mnExemptSetting: "Minnesota exempt setting (housing with services)",
  prRentSubsidy: "Rent subsidy (older adults or veterans)",
  brokerInvolved: "Broker or agent involved",
  contractForDeedCancellation: "Contract for deed cancellation notice",
  homeAddress: "Home address",
  homeState: "Lives in",
  homeIsland: "Island",
  officeAddress: "Principal office",
  officeState: "Principal office state",
  officeIsland: "Principal office island",
  landlordLicensed: "Real estate license",
  offersTenantPortal: "Online tenant portal",
};

// Shown on a page only when the answer is Yes: a No is the ordinary case and
// would only add clutter (every disclosure, and rare situations).
const SHOW_ONLY_WHEN_YES = new Set([
  "condoConversion", "ruralLand", "energyChargeOnBill", "sellsOnsitePower", "landlordCosignsUtility",
  "seasonal", "tenantIsEmployee", "holdingDeposit", "utilityDeposit", "foreclosureUnderway",
  "prRentSubsidy", "brokerInvolved", "contractForDeedCancellation", "pmPermitNV", "mnExemptSetting",
]);
for (const list of [PROPERTY, LEASE, ACCOUNT, OWNER]) {
  for (const q of list) {
    if (SHORT_LABELS[q.id]) q.short = SHORT_LABELS[q.id];
    if (SHOW_ONLY_WHEN_YES.has(q.id) || q.place === "property.disclosures") q.showOnlyWhenYes = true;
  }
}

const CATALOG = { property: PROPERTY, lease: LEASE, account: ACCOUNT, owner: OWNER };

// Whether `question` shows for these states and these answers.
function isVisible(question, states, answers) {
  if (question.states && !question.states.some((s) => states.includes(s))) return false;
  if (question.showIf) {
    if (question.showIf.isSet) {
      const ids = [].concat(question.showIf.id);
      if (!ids.some((id) => answers?.[id] !== undefined && answers?.[id] !== null && answers?.[id] !== "")) return false;
    } else if (question.showIf.whoPays) {
      const entries = Object.values(answers?.[question.showIf.id] || {});
      if (!entries.some((u) => question.showIf.whoPays.includes(u?.whoPays))) return false;
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
function validateFacts(target, patch, state = null) {
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
      case "date":
        if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(value))) return bad();
        break;
      case "number":
      case "money":
        if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return bad();
        if (q.limits?.[state] && value > q.limits[state].max) return { error: q.limits[state].why };
        break;
      case "longtext":
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
  fitsOwner,
  ownerKindOf,
  unansweredQuestions,
  validateFacts,
  mergeFacts,
};
