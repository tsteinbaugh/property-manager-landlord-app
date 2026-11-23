// When the lease builder's picker hides a Recommended or Optional clause
// (Taylor, 2026-11-22): only when the landlord's answers make its condition
// false. An unanswered question never hides anything, and an unticked checkbox
// counts as unanswered here. Same condition format as factRules.js
// (ruleConditions.js). Pet clauses are never hidden (a pet clause governs a
// pet the tenant may get later). Drafted 2026-11-22 from each clause's text
// and reviewed by Claude Code.

const { evaluate } = require("./ruleConditions");

const PICKER_RULES = {
  // Added 2026-11-23: the employee-housing clauses (two-part question) and five
  // of the low-confidence drafts, reviewed against each clause's text.
  "employer-housing-pr": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-occupancy-conditional-nm": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-ny": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-la": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-ar": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "tenant-employee-housing-wy": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-occupancy-ks": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-fl": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-mo": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-nj": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "employee-housing-occupancy-hi": {
    condition: {"all":[{"fact":"lease.tenantIsEmployee","op":"eq","value":true},{"fact":"lease.employeeHousingLink","op":"in","value":["PART_OF_PAY","BECAUSE_OF_JOB"]}]},
    note: "when the tenant isn't your employee, or the housing isn't tied to the job",
  },
  "tenant-employee-housing-mn": {
    condition: {"fact":"lease.tenantIsEmployee","op":"eq","value":true},
    note: "when the tenant isn't your employee",
  },
  "hotel-occupancy-tax-as": {
    condition: {"fact":"property.propertyType","op":"nin","value":["SINGLE_FAMILY","MANUFACTURED_HOME"]},
    note: "when the property is a single-family or manufactured home rather than an apartment, rooming or lodging house",
  },
  "vehicle-removal-wv": {
    condition: {"any":[{"fact":"property.parkingTypes","op":"includesAny","value":["ASSIGNED","LOT"]},{"fact":"property.propertyType","op":"in","value":["APARTMENT","CONDO","COOP","TOWNHOUSE","ADU","ROOM_IN_OWNER_HOME"]}]},
    note: "when the property is a single home whose only parking is its own driveway, garage or the street",
  },
  "pet-fees-mn": {
    condition: {"all":[{"fact":"property.programHousing","op":"includesAny","value":["VOUCHER","PROJECT_SUBSIDY"]},{"fact":"property.propertyType","op":"in","value":["APARTMENT","CONDO","COOP","TOWNHOUSE"]},{"fact":"property.unitsInBuilding","op":"gt","value":1}]},
    note: "when the unit isn't subsidized housing in a multiunit building",
  },
  "parking-tag-towing-or": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includes","value":"LOT"},{"fact":"property.enforcesParkingRules","op":"eq","value":true}]},
    note: "when the property has no parking lot with tenant spaces, or you don't enforce parking or towing rules",
  },
  "utility-allowance-cap-il": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.gas.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.water.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.sewer.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]}]},
    note: "when the tenant pays every metered utility directly",
  },
  "security-deposit-interest-ct": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "tpa-exemption-notice-ca": {
    condition: {"fact":"property.propertyType","op":"nin","value":["APARTMENT","ROOM_IN_OWNER_HOME"]},
    note: "when the unit is an apartment or a room in your home, which can't be sold separately and so can't use this exemption",
  },
  "unbundled-parking-ca": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no off-street parking",
  },
  "pool-safety-notice-az": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA","OTHER"]},
    note: "when the property has no pool, spa or other contained body of water",
  },
  "acceptable-payment-methods-va-small": {
    condition: {"fact":"landlord.propertyCountInState","op":"lte","value":4},
    note: "when you have more than four Virginia rental units in Steinoak",
  },
  "sex-offender-statement-al": {
    condition: {"fact":"property.county","op":"matches","value":["Jefferson","Morgan","Shelby"]},
    note: "when the property is outside Jefferson, Morgan and Shelby counties (Birmingham, the only Class 1 city, lies in Jefferson and Shelby)",
  },
  "lihtc-felony-screening-ok": {
    condition: {"fact":"property.programHousing","op":"includes","value":"LIHTC"},
    note: "when the unit isn't a low-income housing tax credit unit",
  },
  "deposit-account-licensee-wi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "seasonal-nonrenewable-lease-de": {
    condition: {"all":[{"fact":"property.county","op":"matches","value":["Sussex"]},{"fact":"lease.seasonal","op":"eq","value":true},{"fact":"lease.termDays","op":"lte","value":120}]},
    note: "when the property isn't in Sussex County, the lease isn't seasonal, or the term is longer than 120 days",
  },
  "utility-shutoff-notice-copy-ak": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant has no electric, gas or water account in their own name",
  },
  "furnishings-included-la": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't furnished",
  },
  "guaranty-gu": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "energy-data-release-co": {
    condition: {"fact":"property.propertyType","op":"nin","value":["SINGLE_FAMILY","ADU","MANUFACTURED_HOME"]},
    note: "for a single-family home, ADU or manufactured home, which is never a building covered by Colorado's benchmarking law",
  },
  "utility-transfer-reimbursement-co": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no utility is in the tenant's own name",
  },
  "guaranty-wy": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "seasonal-tenancy-wy": {
    condition: {"all":[{"fact":"lease.seasonal","op":"eq","value":true},{"fact":"lease.leaseType","op":"ne","value":"MONTH_TO_MONTH"}]},
    note: "when the lease isn't a seasonal or vacation rental, or is month-to-month",
  },
  "water-meter-charge-notice-ks": {
    condition: {"all":[{"fact":"property.utility.water.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.water.method","op":"eq","value":"SUBMETER"},{"fact":"property.waterSource","op":"ne","value":"WELL"}]},
    note: "unless water from a city or district is charged back to the tenant by a submeter",
  },
  "utility-disconnection-notice-authorization-nd": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no utility is in the tenant's own name",
  },
  "utility-shutoff-notice-designee-nv": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant has no gas or electric account in their own name",
  },
  "guaranty-of-lease-ca": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "utility-transfer-nj": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no utility is in the tenant's own name",
  },
  "municipal-utility-lien-va": {
    condition: {"any":[{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant has no water, sewer or gas account in their own name",
  },
  "smart-access-system-ut": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "pool-and-spa-use-il": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA"]},
    note: "when the property has no pool or hot tub",
  },
  "environmental-covenant-il": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when there's no recorded environmental restriction on the land",
  },
  "utility-billing-id": {
    condition: {"fact":"property.anyUtilityChargedBack","op":"eq","value":true},
    note: "when no utility is billed to the tenant by you",
  },
  "common-area-lighting-ok": {
    condition: {"all":[{"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},{"fact":"property.utility.electric.whoPays","op":"in","value":["TENANT_DIRECT","CHARGED_BACK"]}]},
    note: "when the unit's meter serves only the unit, or the tenant doesn't pay for electricity",
  },
  "association-documents-delivery-mi": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "pool-and-spa-use-mi": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA"]},
    note: "when the property has no pool or hot tub",
  },
  "furnishings-included-mt": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't furnished",
  },
  "smart-access-mt": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "furnishings-included-or": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't furnished",
  },
  "spouse-notice-acknowledgment-wv": {
    condition: {"fact":"landlord.isEntity","op":"eq","value":false},
    note: "when the landlord is a company rather than an individual",
  },
  "security-deposit-return": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "parking": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (street parking only or none)",
  },
  "landscaping-irrigation": {
    condition: {"fact":"property.hasYard","op":"eq","value":true},
    note: "when the property has no yard or landscaping",
  },
  "hoa-compliance-id": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "utility-allowance-cap-co": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.water.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"INCLUDED"}]},
    note: "when no utility is included in the rent",
  },
  "parking-ne": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (street parking only or none)",
  },
  "storage-space-mn": {
    condition: {"fact":"property.storage","op":"ne","value":"NONE"},
    note: "when the property has no on-site storage",
  },
  "sex-offender-occupancy-oh": {
    condition: {"fact":"property.nearSchool","op":"eq","value":true},
    note: "when the property isn't within 1,000 feet of a school or child care facility",
  },
  "security-deposit-return-nv": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-nj": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-ga": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-standards-sc": {
    condition: {"all":[{"fact":"lease.depositTaken","op":"eq","value":true},{"fact":"property.propertyType","op":"ne","value":"SINGLE_FAMILY"}]},
    note: "when the lease takes no deposit or the property is a single-family home",
  },
  "landlords-access-tn-other": {
    condition: {"not":{"fact":"property.county","op":"matches","value":["Anderson","Blount","Bradley","Davidson","Hamilton","Knox","Madison","Maury","Montgomery","Rutherford","Sevier","Shelby","Sullivan","Sumner","Washington","Williamson","Wilson"]}},
    note: "when the property is in one of the 17 Tennessee counties covered by the landlord-tenant act",
  },
  "security-deposit-return-pa": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "ev-charging-requirements-il": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking",
  },
  "security-deposit-return-mo": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-use-mi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-use-ia": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-mt": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-use-wi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "fixed-term-end-without-cause-wa": {
    condition: {"all":[{"fact":"lease.leaseType","op":"ne","value":"MONTH_TO_MONTH"},{"fact":"lease.termDays","op":"gte","value":175}]},
    note: "when the lease is month-to-month or its term is shorter than six months",
  },
  "yard-maintenance-entry-or": {
    condition: {"fact":"lease.yardCare","op":"eq","value":"LANDLORD"},
    note: "when the tenant handles yard care",
  },
  "hoa-compliance-or": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "parking-vehicle-rules-ma": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking",
  },
  "security-deposit-return-ct": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-use-ri": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-nh": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-vt": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "parking-vehicle-rules-de": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking",
  },
  "security-deposit-return-hi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-ar": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "reletting-damages-ms": {
    condition: {"fact":"lease.leaseType","op":"ne","value":"MONTH_TO_MONTH"},
    note: "when the lease is month-to-month",
  },
  "energy-data-release-dc": {
    condition: {"all":[{"fact":"property.energyBenchmarking","op":"eq","value":true},{"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]}]},
    note: "when the building isn't covered by an energy benchmarking law, or the tenant has no electric or gas account in their own name",
  },
  "security-deposit-no-interest-pr": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "guaranty-pr": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "no-hunting-pr": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "unless the property is rural or farm land",
  },
  "security-deposit-return-vi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "security-deposit-return-mp": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "deposit-charge-schedule-co": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when the lease takes no security deposit",
  },
  "farmland-sporting-rights-co": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "unless the property is rural or farm land",
  },
  "cold-weather-vacate-notice-wy": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the heat",
  },
  "ev-charging-requirements-wy": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no parking space, garage or carport",
  },
  "utility-allowance-cap-ks": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.water.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"INCLUDED"}]},
    note: "when no utility is included in the rent",
  },
  "garage-door-reporting-duty-mn": {
    condition: {"fact":"property.parkingTypes","op":"includes","value":"GARAGE"},
    note: "when the property has no garage",
  },
  "utility-disconnection-notice-authorization-ne": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant has no water, gas or electric account in their own name",
  },
  "unbundled-parking-nd": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"lease.parkingCharged","op":"eq","value":true}]},
    note: "when the property has no on-site parking or parking isn't charged separately",
  },
  "unbundled-parking-oh": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"lease.parkingCharged","op":"eq","value":true}]},
    note: "when the property has no on-site parking or parking isn't charged separately",
  },
  "energy-data-consent-ca": {
    condition: {"fact":"property.energyBenchmarking","op":"eq","value":true},
    note: "when the building isn't covered by an energy benchmarking law",
  },
  "guaranty-va": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "unbundled-parking-il": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"lease.parkingCharged","op":"eq","value":true}]},
    note: "when the property has no on-site parking or parking isn't charged separately",
  },
  "farmland-hunting-rights-il": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "unless the property is rural or farm land",
  },
  "automatic-renewal-mi": {
    condition: {"fact":"lease.leaseType","op":"ne","value":"MONTH_TO_MONTH"},
    note: "when the lease is month-to-month",
  },
  "hoa-compliance-ia": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "government-fee-reimbursement-ny": {
    condition: {"fact":"property.localRentalFee","op":"eq","value":true},
    note: "when no local government charges a rental registration, permit or inspection fee",
  },
  "utility-submetering-disclosure-co": {
    condition: {"fact":"property.chargeBackMethods","op":"includesAny","value":["SHARED_SPLIT","FLAT"]},
    note: "when no utility is charged back by a shared split or flat amount (only submetered or none charged back)",
  },
  "waterbed-ca": {
    condition: {"fact":"property.yearBuilt","op":"gte","value":1972},
    note: "when the building was built before 1972, so its certificate of occupancy predates 1973",
  },
  "parking-rules-tx": {
    condition: {"fact":"property.enforcesParkingRules","op":"eq","value":true},
    note: "when you don't enforce parking or towing rules",
  },
  "association-approval-fl": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "move-in-damage-list-ga": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "redemption-limit-va-small": {
    condition: {"all":[{"fact":"landlord.propertyCountInState","op":"lte","value":4},{"fact":"lease.leaseType","op":"eq","value":"FIXED"}]},
    note: "when you have more than four Virginia rental units in Steinoak, or the lease is month-to-month",
  },
  "carbon-monoxide-alarm-duty-pa": {
    condition: {"all":[{"fact":"property.propertyType","op":"in","value":["APARTMENT","CONDO","COOP","TOWNHOUSE"]},{"fact":"property.unitsInBuilding","op":"gte","value":3}]},
    note: "when the property isn't a unit in a building of three or more units",
  },
  "utility-charges-disclosure-ia": {
    condition: {"fact":"property.anyUtilityChargedBack","op":"eq","value":true},
    note: "when the tenant pays no utility through you",
  },
  "recycling-notice-or": {
    condition: {"all":[{"fact":"property.propertyType","op":"in","value":["APARTMENT","CONDO","COOP","TOWNHOUSE"]},{"fact":"property.unitsInBuilding","op":"gte","value":5}]},
    note: "when the property isn't in a building of five or more units",
  },
  "common-area-utility-agreement-me": {
    condition: {"fact":"property.meterServesOutsideUnit","op":"eq","value":true},
    note: "when the unit's meter serves nothing outside the unit",
  },
  "utility-submetering-de": {
    condition: {"fact":"property.chargeBackMethods","op":"includes","value":"SUBMETER"},
    note: "when no utility is submetered and billed to the tenant",
  },
  "tenant-assumed-duties-ak": {
    condition: {"fact":"property.propertyType","op":"in","value":["SINGLE_FAMILY","MANUFACTURED_HOME","TOWNHOUSE"]},
    note: "when the property isn't a single-family residence",
  },
  "shoreline-right-of-way-gu": {
    condition: {"fact":"property.shoreline","op":"eq","value":true},
    note: "when the property isn't on the shoreline and has no shoreline right of way",
  },
  "hotel-room-tax-vi": {
    condition: {"fact":"lease.termDays","op":"lt","value":90},
    note: "when the lease term is 90 days or longer",
  },
  "association-approval-co": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "towing-co": {
    condition: {"fact":"property.enforcesParkingRules","op":"eq","value":true},
    note: "when you don't enforce parking or towing rules",
  },
  "common-area-lighting-tenant-meter-wy": {
    condition: {"all":[{"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant doesn't pay the electric company directly or the meter serves nothing outside the unit",
  },
  "tenant-supplied-heat-wy": {
    condition: {"any":[{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant pays neither gas nor electricity directly to the supplier",
  },
  "association-documents-delivery-ks": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "utility-disconnection-notice-authorization-mn": {
    condition: {"any":[{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant holds neither the gas nor the electric account",
  },
  "utility-transfer-nd": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant pays no utility directly to the provider",
  },
  "hoa-compliance-al": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "service-member-additional-security-ca": {
    condition: {"all":[{"fact":"lease.anyServicemember","op":"eq","value":true},{"fact":"lease.depositTaken","op":"eq","value":true}]},
    note: "when no tenant is a service member or no security deposit is taken",
  },
  "portable-solar-devices-nj": {
    condition: {"all":[{"any":[{"fact":"lease.endDate","op":"gte","value":"2027-03-01"},{"fact":"lease.leaseType","op":"eq","value":"MONTH_TO_MONTH"}]},{"fact":"property.utility.electric.whoPays","op":"in","value":["TENANT_DIRECT","CHARGED_BACK"]}]},
    note: "when the lease ends before March 1, 2027, or the tenant doesn't pay for electricity",
  },
  "conversion-termination-fl": {
    condition: {"fact":"property.condoConversion","op":"eq","value":true},
    note: "when the unit isn't being converted to a condo or co-op",
  },
  "guaranty-al": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "heat-freeze-protection-ut": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the thermostat",
  },
  "environmental-covenant-notice-ut": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when there's no recorded environmental restriction on the land",
  },
  "smart-access-system-il": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "meter-conservation-charge-il": {
    condition: {"fact":"property.energyChargeOnBill","op":"eq","value":true},
    note: "when the electric or gas account carries no energy-upgrade charge",
  },
  "furnishings-included-ok": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't furnished",
  },
  "heat-freeze-protection-mi": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the thermostat",
  },
  "smart-access-system-mi": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "heat-freeze-protection-ia": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the thermostat",
  },
  "heat-freeze-protection-nm": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the thermostat",
  },
  "guaranty-mt": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "utility-apportionment-mt": {
    condition: {"any":[{"fact":"property.utility.water.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"CHARGED_BACK"}]},
    note: "when water, sewer and trash aren't charged back to the tenant",
  },
  "shared-meter-agreement-ny": {
    condition: {"any":[{"all":[{"fact":"property.gasMeterOutsideUnit","op":"eq","value":true},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]},{"all":[{"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"}]}]},
    note: "when neither a gas nor an electric meter the tenant holds also serves areas outside the unit",
  },
  "association-documents-delivery-ky": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "district-assessment-share-wv": {
    condition: {"fact":"property.specialDistrict","op":"eq","value":true},
    note: "when the property isn't in a special or business improvement district",
  },
  "security-deposit-return-wv": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "assigned-parking-space": {
    condition: {"all":[{"fact":"lease.parkingAssigned","op":"gt","value":0},{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]}]},
    note: "when no parking space is assigned to this lease or the property has no on-site parking",
  },
  "snow-removal": {
    condition: {"fact":"lease.snowRemoval","op":"eq","value":"TENANT"},
    note: "when you handle snow removal or none is needed",
  },
  "meth-disclosure-va": {
    condition: {"fact":"property.drugContamination","op":"eq","value":true},
    note: "when the property wasn't used to make or use illegal drugs",
  },
  "ev-charging-requirements-co": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "security-deposit-return-wy": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "storage-space-ne": {
    condition: {"fact":"property.storage","op":"ne","value":"NONE"},
    note: "when the property has no on-site storage",
  },
  "initial-final-inspection-mn": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "due-at-signing-ca": {
    condition: {"all":[{"fact":"lease.depositTaken","op":"eq","value":true},{"fact":"lease.firstMonthRent","op":"ne","value":"WAIVED"}]},
    note: "when no security deposit is taken or the first month's rent is waived",
  },
  "security-deposit-return-tx": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-fl": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "flood-disclosure-ga": {
    condition: {"fact":"property.floodedRecently","op":"eq","value":true},
    note: "when the property hasn't flooded in the last five years",
  },
  "defective-drywall-disclosure-va": {
    condition: {"fact":"property.defectiveDrywall","op":"eq","value":true},
    note: "when the property has no defective drywall",
  },
  "security-deposit-use-ca": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-id": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-in": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-mi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-ia": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-ny": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-wi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "snow-removal-ma": {
    condition: {"fact":"lease.snowRemoval","op":"eq","value":"TENANT"},
    note: "when you handle snow removal or none is needed",
  },
  "parking-vehicle-rules-ct": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "parking-vehicle-rules-ri": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "security-deposit-return-me": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-vehicle-rules-vt": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "security-deposit-return-ak": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-vehicle-rules-hi": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "parking-vehicle-rules-dc": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "security-deposit-return-pr": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "sale-termination-pr": {
    condition: {"fact":"lease.leaseType","op":"eq","value":"FIXED"},
    note: "when the lease is month-to-month",
  },
  "guaranty-vi": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "accessory-dwelling-unit-term-co": {
    condition: {"fact":"property.propertyType","op":"eq","value":"ADU"},
    note: "when the property isn't an accessory dwelling unit",
  },
  "deposit-not-last-month-rent-co": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "heat-freeze-protection-co": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the thermostat",
  },
  "deposit-last-month-rent-wy": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "farmland-hunting-rights-wy": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "when the property isn't rural or farm land where hunting, fishing or grazing is possible",
  },
  "hoa-compliance-ks": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "garage-door-opener-duty-mn": {
    condition: {"fact":"property.parkingTypes","op":"includes","value":"GARAGE"},
    note: "when the property has no garage",
  },
  "unbundled-parking-mn": {
    condition: {"all":[{"fact":"lease.parkingCharged","op":"eq","value":true},{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]}]},
    note: "when parking isn't charged separately or the property has no on-site parking",
  },
  "utility-transfer-ne": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant pays no utility directly to the provider",
  },
  "common-area-lighting-tenant-metered-nd": {
    condition: {"all":[{"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant doesn't pay the electric company directly or the meter serves nothing outside the unit",
  },
  "parking-rules-notice-nd": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "security-deposit-use-nd": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "hoa-compliance-oh": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "parking-vehicle-rules-ca": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (no garage, driveway, assigned space or lot)",
  },
  "environmental-covenant-va": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when there's no recorded environmental restriction on the land",
  },
  "automatic-renewal-il": {
    condition: {"fact":"lease.leaseType","op":"eq","value":"FIXED"},
    note: "when the lease is month-to-month",
  },
  "guaranty-mi": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "smart-access-ny": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "ev-charging-ca": {
    condition: {"all":[{"fact":"lease.parkingAssigned","op":"gt","value":0},{"fact":"property.parkingSpaces","op":"gte","value":5}]},
    note: "when no parking space is assigned to this lease, or the property has fewer than 5 parking spaces",
  },
  "electric-submeter-disclosure-tx": {
    condition: {"all":[{"fact":"property.utility.electric.method","op":"eq","value":"SUBMETER"},{"any":[{"fact":"property.propertyType","op":"in","value":["CONDO","MANUFACTURED_HOME"]},{"all":[{"fact":"property.propertyType","op":"eq","value":"APARTMENT"},{"fact":"property.unitsInBuilding","op":"gt","value":5}]}]}]},
    note: "when electricity isn't submetered, or the property isn't a condo, mobile home or apartment in a building of more than five units",
  },
  "private-well-test-results-nj": {
    condition: {"fact":"property.waterSource","op":"eq","value":"WELL"},
    note: "when the water comes from a public system",
  },
  "utility-billing-nc": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.water.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"CHARGED_BACK"}]},
    note: "when you don't bill the tenant for electricity, gas, water or sewer",
  },
  "renewal-notice-va-small": {
    condition: {"fact":"landlord.propertyCountInState","op":"lte","value":4},
    note: "when you have more than four rental units in Virginia",
  },
  "smoke-drift-waiver-ut": {
    condition: {"fact":"property.smokingNearby","op":"eq","value":true},
    note: "when smoking isn't allowed in nearby units",
  },
  "utility-bill-copies-nm": {
    condition: {"all":[{"fact":"property.propertyType","op":"ne","value":"SINGLE_FAMILY"},{"fact":"property.anyUtilityChargedBack","op":"eq","value":true}]},
    note: "when the property is a single-family home or no utility is billed back to the tenant",
  },
  "ev-charging-ct": {
    condition: {"fact":"lease.parkingAssigned","op":"gt","value":0},
    note: "when no parking space is assigned to this lease",
  },
  "utility-nonconsumption-charges-de": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.water.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"CHARGED_BACK"}]},
    note: "when you don't bill the tenant for any utility (trash doesn't count in Delaware)",
  },
  "onsite-renewable-power-disclosure-hi": {
    condition: {"fact":"property.sellsOnsitePower","op":"eq","value":true},
    note: "when you don't sell on-site renewable power to the tenant",
  },
  "pool-safety-ms": {
    condition: {"all":[{"fact":"property.waterFeatures","op":"includes","value":"POOL"},{"fact":"property.propertyType","op":"in","value":["APARTMENT","CONDO","COOP","TOWNHOUSE"]}]},
    note: "when there's no pool, or the property isn't in an apartment complex, condo, co-op or townhome project",
  },
  "garbage-subscription-gu": {
    condition: {"all":[{"any":[{"fact":"property.propertyType","op":"nin","value":["APARTMENT","CONDO","COOP","TOWNHOUSE"]},{"fact":"property.unitsInBuilding","op":"lte","value":4}]},{"fact":"property.utility.trash.whoPays","op":"in","value":["TENANT_DIRECT","NOT_PROVIDED"]}]},
    note: "when the building has more than four units, or trash service is included or billed back by you",
  },
  "water-power-availability-gu": {
    condition: {"all":[{"fact":"lease.leaseType","op":"ne","value":"MONTH_TO_MONTH"},{"fact":"lease.termDays","op":"gte","value":364}]},
    note: "when the lease is month-to-month or shorter than one year",
  },
  "utility-meter-request-waiver-vi": {
    condition: {"all":[{"fact":"property.utility.water.whoPays","op":"ne","value":"CHARGED_BACK"},{"fact":"property.utility.electric.whoPays","op":"ne","value":"CHARGED_BACK"}]},
    note: "when you bill the tenant back for water or electricity",
  },
  "conversion-notice-co": {
    condition: {"fact":"property.condoConversion","op":"eq","value":true},
    note: "when the unit isn't being converted to a condo",
  },
  "exempt-residential-agreement-notice-co": {
    condition: {"fact":"property.propertyType","op":"eq","value":"SINGLE_FAMILY"},
    note: "when the property isn't a single-family home",
  },
  "unbundled-parking-co": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"lease.parkingCharged","op":"eq","value":true}]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "pool-and-spa-use-wy": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA"]},
    note: "when the property has no pool or hot tub",
  },
  "unbundled-parking-wy": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"lease.parkingCharged","op":"eq","value":true}]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "common-area-lighting-ks": {
    condition: {"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},
    note: "when the tenant's electric meter serves only the unit",
  },
  "accessory-dwelling-unit-term-mn": {
    condition: {"fact":"property.propertyType","op":"eq","value":"ADU"},
    note: "when the property isn't an accessory dwelling unit",
  },
  "smart-access-system-mn": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "farmland-hunting-rights-reserved-nd": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "when the property isn't rural or farm land",
  },
  "utility-shutoff-notice-designee-oh": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant holds no utility account in their own name",
  },
  "utility-allocation-fl": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.water.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"CHARGED_BACK"}]},
    note: "when you don't bill the tenant back for electricity, water or sewer",
  },
  "utility-disconnection-notice-authorization-nc": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant holds no electric or gas account in their own name",
  },
  "utility-apportionment-ut": {
    condition: {"any":[{"fact":"property.utility.water.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"CHARGED_BACK"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"CHARGED_BACK"}]},
    note: "when you don't bill the tenant back for water, sewer or trash",
  },
  "common-area-lighting-il": {
    condition: {"fact":"property.meterServesOutsideUnit","op":"eq","value":true},
    note: "when the unit's meter serves only the unit",
  },
  "utility-disconnection-notice-authorization-il": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when the tenant holds no gas, electric, water or sewer account in their own name",
  },
  "environmental-covenant-notice-in": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when no environmental restriction is recorded on the land",
  },
  "environmental-covenant-ok": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when no environmental restriction is recorded on the land",
  },
  "furnishings-included-mi": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "meter-project-charge-disclosure-mi": {
    condition: {"fact":"property.energyChargeOnBill","op":"eq","value":true},
    note: "when no energy project charge is on the utility bill",
  },
  "pool-use-ia": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA","OTHER"]},
    note: "when the property has no pool, spa, hot tub or other water feature",
  },
  "smart-access-nm": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "institutional-control-notice-mt": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when no environmental restriction is recorded on the land",
  },
  "furnishings-included-wi": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "meter-conservation-charge-wa": {
    condition: {"fact":"property.energyChargeOnBill","op":"eq","value":true},
    note: "when no energy savings charge is on the utility bill",
  },
  "common-area-lighting-ky": {
    condition: {"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},
    note: "when the tenant's electric meter serves only the unit",
  },
  "furnishings-wv": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "utility-cosigner-reimbursement-as": {
    condition: {"fact":"property.landlordCosignsUtility","op":"eq","value":true},
    note: "when you don't co-sign the tenant's utility account",
  },
  "utilities-paid-by-landlord": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.gas.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.water.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.sewer.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]},{"fact":"property.utility.trash.whoPays","op":"in","value":["INCLUDED","CHARGED_BACK"]}]},
    note: "when the tenant pays every utility directly (or it isn't provided)",
  },
  "parking-vehicle-rules": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "hoa-compliance": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "security-deposit-return-co": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "ev-charging-shared-area-co": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"property.propertyType","op":"ne","value":"SINGLE_FAMILY"}]},
    note: "when the property is a single-family home or has no off-street parking",
  },
  "utility-apportionment-mn": {
    condition: {"any":[{"fact":"property.utility.gas.method","op":"eq","value":"SHARED_SPLIT"},{"fact":"property.utility.water.method","op":"eq","value":"SHARED_SPLIT"},{"fact":"property.utility.sewer.method","op":"eq","value":"SHARED_SPLIT"}]},
    note: "when you don't split a shared gas, water or sewer bill among units",
  },
  "deposit-last-month-rent-mn": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "storage-space-ks-oh-ca": {
    condition: {"fact":"property.storage","op":"ne","value":"NONE"},
    note: "when the property has no on-site storage",
  },
  "deposit-last-month-rent-tx": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-az": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-nc": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-tn-other": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "military-air-zone-disclosure-va": {
    condition: {"fact":"property.militaryAirZone","op":"eq","value":true},
    note: "when the property isn't in a military air noise or accident potential zone",
  },
  "security-deposit-return-ut": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-vehicle-rules-id": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "security-deposit-return-in": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "assigned-parking-space-mi": {
    condition: {"fact":"lease.parkingAssigned","op":"gt","value":0},
    note: "when no parking space is assigned to this lease",
  },
  "security-deposit-return-nm": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-ny": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-wa": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-vehicle-rules-or": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "security-deposit-return-ky": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "bed-bug-cooperation-ct": {
    condition: {"fact":"property.propertyType","op":"ne","value":"SINGLE_FAMILY"},
    note: "when the property is a single-family home",
  },
  "landscaping-irrigation-ri": {
    condition: {"fact":"lease.yardCare","op":"eq","value":"TENANT"},
    note: "when you handle the yard care",
  },
  "parking-vehicle-rules-me": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "security-deposit-use-de": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "hoa-compliance-ak": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "security-deposit-return-la": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "owner-agent-identity-ms": {
    condition: {"fact":"property.hasManager","op":"eq","value":true},
    note: "when no property manager is named for the property",
  },
  "security-deposit-return-dc": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "utility-allowance-cap-pr": {
    condition: {"any":[{"fact":"property.utility.water.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"INCLUDED"}]},
    note: "when you don't pay any utility other than electricity",
  },
  "security-deposit-return-gu": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-as": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "association-documents-provided-co": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "deposit-surrender-notice-co": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "hoa-compliance-co": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a homeowners', condo or co-op association",
  },
  "deposit-surrender-notice-wy": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "well-water-disclosure-wy": {
    condition: {"fact":"property.waterSource","op":"eq","value":"WELL"},
    note: "when the water comes from a public system",
  },
  "utility-allowance-cap-mn": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.water.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"INCLUDED"}]},
    note: "when you don't pay any utility",
  },
  "utility-allowance-cap-oh": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.water.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"INCLUDED"}]},
    note: "when you don't pay any utility",
  },
  "hoa-compliance-ut": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in an association",
  },
  "move-out-forwarding-address-va": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "utility-allowance-cap-va": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.water.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"INCLUDED"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"INCLUDED"}]},
    note: "when you don't pay any utility",
  },
  "guaranty-il": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "automatic-renewal-mo": {
    condition: {"fact":"lease.leaseType","op":"eq","value":"FIXED"},
    note: "when the lease is month-to-month",
  },
  "owner-move-in-termination-mt": {
    condition: {"fact":"lease.leaseType","op":"eq","value":"FIXED"},
    note: "when the lease is month-to-month",
  },
  "unbundled-parking-ny": {
    condition: {"all":[{"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},{"fact":"lease.parkingCharged","op":"eq","value":true}]},
    note: "when the property has no off-street parking (street parking only or none)",
  },
  "smoke-drift-disclosure-wv": {
    condition: {"fact":"property.smokingNearby","op":"eq","value":true},
    note: "when smoking isn't allowed in nearby units",
  },
  "repair-escrow-exemption-notice-oh": {
    condition: {"fact":"landlord.propertyCount","op":"lte","value":3},
    note: "when you have more than three rental units in the app",
  },
  "portable-solar-va-small": {
    condition: {"fact":"landlord.propertyCountInState","op":"lte","value":4},
    note: "when you have more than four rental units in Virginia",
  },
  "subsidized-inspection-refusal-il": {
    condition: {"fact":"property.programHousing","op":"includesAny","value":["VOUCHER","PROJECT_SUBSIDY","LIHTC"]},
    note: "when the unit isn't in a voucher, project-subsidy or tax-credit program",
  },
  "furnishings-included-ks": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "common-area-garbage-nh": {
    condition: {"all":[{"fact":"property.trashHauling","op":"ne","value":"LANDLORD"},{"fact":"property.propertyType","op":"ne","value":"SINGLE_FAMILY"}]},
    note: "when you handle trash removal, or the property is a single-family house with no common areas",
  },
  "energy-data-release-vt": {
    condition: {"all":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.propertyType","op":"nin","value":["SINGLE_FAMILY","MANUFACTURED_HOME"]},{"fact":"property.unitsInBuilding","op":"gte","value":2}]},
    note: "when the electric account isn't in the tenant's name or the building isn't multiunit",
  },
  "furnishings-de": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "water-supply-waiver-ak": {
    condition: {"fact":"property.waterSource","op":"nin","value":["PUBLIC","WELL"]},
    note: "when the property's water comes from a well or a public water system",
  },
  "association-approval-la": {
    condition: {"all":[{"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},{"fact":"property.associationApprovesLeases","op":"eq","value":true}]},
    note: "when the property isn't in a condo, co-op or homeowners' association that must approve leases",
  },
  "accessory-dwelling-unit-term-gu": {
    condition: {"fact":"property.propertyType","op":"in","value":["ADU","SINGLE_FAMILY","MANUFACTURED_HOME"]},
    note: "when the property is an apartment, condo, co-op, townhouse or room rather than an accessory unit or the main house on its lot",
  },
  "utility-shutoff-notice-designee-vi": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no utility account is in the tenant's name",
  },
  "electric-submeter-billing-co": {
    condition: {"fact":"property.utility.electric.method","op":"eq","value":"SUBMETER"},
    note: "when electricity isn't billed to the tenant by submeter",
  },
  "utility-deposit-co": {
    condition: {"fact":"lease.utilityDeposit","op":"eq","value":true},
    note: "when there's no utility deposit",
  },
  "waste-removal-duty-shift-ks": {
    condition: {"all":[{"fact":"property.trashHauling","op":"eq","value":"TENANT"},{"fact":"property.unitsInBuilding","op":"lte","value":4}]},
    note: "when the tenant doesn't handle trash removal, or the building has more than four units",
  },
  "environmental-covenant-notice-and-compliance-nd": {
    condition: {"fact":"property.environmentalRestriction","op":"eq","value":true},
    note: "when there's no recorded environmental restriction on the land",
  },
  "garbage-removal-by-tenant-nv": {
    condition: {"all":[{"fact":"property.trashHauling","op":"ne","value":"LANDLORD"},{"fact":"property.utility.trash.whoPays","op":"nin","value":["INCLUDED","CHARGED_BACK"]}]},
    note: "when you handle or pay for trash removal",
  },
  "furnishings-included-ca": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "utility-disconnection-notice-authorization-nj": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no electric, gas, water or sewer account is in the tenant's name",
  },
  "utility-shutoff-notice-designee-fl": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when neither the electric nor the gas account is in the tenant's name",
  },
  "meter-conservation-charge-va": {
    condition: {"fact":"property.energyChargeOnBill","op":"eq","value":true},
    note: "when the electric account carries no energy-efficiency charge",
  },
  "deposit-trust-account-exemption-ut": {
    condition: {"fact":"property.hasManager","op":"eq","value":true},
    note: "when no property manager is listed",
  },
  "pool-and-spa-use-ut": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA"]},
    note: "when the property has no pool, spa or hot tub",
  },
  "private-well-water-il": {
    condition: {"fact":"property.waterSource","op":"eq","value":"WELL"},
    note: "when the property's water comes from a public water system",
  },
  "municipal-utility-lien-il": {
    condition: {"any":[{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when neither the water nor the sewer account is in the tenant's name",
  },
  "heat-freeze-protection-id": {
    condition: {"fact":"property.tenantControlsThermostat","op":"eq","value":true},
    note: "when the tenant doesn't control the thermostat",
  },
  "association-approval-ok": {
    condition: {"all":[{"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},{"fact":"property.associationApprovesLeases","op":"eq","value":true}]},
    note: "when the property isn't in a condo, co-op or homeowners' association that must approve leases",
  },
  "tenant-garbage-receptacles-mi": {
    condition: {"any":[{"fact":"property.propertyType","op":"in","value":["SINGLE_FAMILY","ADU","MANUFACTURED_HOME","ROOM_IN_OWNER_HOME"]},{"fact":"property.unitsInBuilding","op":"lte","value":2}]},
    note: "when the building has more than two units",
  },
  "utility-apportionment-mi": {
    condition: {"any":[{"fact":"property.utility.water.method","op":"in","value":["SHARED_SPLIT","SUBMETER"]},{"fact":"property.utility.sewer.method","op":"in","value":["SHARED_SPLIT","SUBMETER"]},{"fact":"property.utility.trash.method","op":"in","value":["SHARED_SPLIT","SUBMETER"]}]},
    note: "when no water, sewer or trash bill is shared and split with the tenant",
  },
  "association-rules-receipt-ia": {
    condition: {"fact":"property.associationType","op":"in","value":["HOA","CONDO","COOP"]},
    note: "when the property isn't in a condo, co-op or homeowners' association",
  },
  "common-area-lighting-mt": {
    condition: {"all":[{"fact":"property.electricMeterOutsideUnit","op":"eq","value":true},{"fact":"property.utility.electric.whoPays","op":"in","value":["TENANT_DIRECT","CHARGED_BACK"]}]},
    note: "when the tenant's electric meter doesn't serve any area outside the unit, or the tenant doesn't pay for electricity",
  },
  "pool-use-mt": {
    condition: {"fact":"property.waterFeatures","op":"includesAny","value":["POOL","SPA"]},
    note: "when the property has no pool, spa or hot tub",
  },
  "gjgny-charge-notice-ny": {
    condition: {"all":[{"fact":"property.energyChargeOnBill","op":"eq","value":true},{"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]}]},
    note: "when there's no on-bill energy-efficiency charge, or neither the electric nor the gas account is in the tenant's name",
  },
  "furnishings-included-wa": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "subsidy-inspection-access-wv": {
    condition: {"fact":"property.programHousing","op":"includesAny","value":["VOUCHER","PROJECT_SUBSIDY"]},
    note: "when the unit isn't in a voucher or project-subsidy program",
  },
  "utility-shutoff-notice-designee-wv": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when neither the electric nor the gas account is in the tenant's name",
  },
  "security-deposit-use": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "storage-space": {
    condition: {"fact":"property.storage","op":"ne","value":"NONE"},
    note: "when the property has no on-site storage",
  },
  "hoa-compliance-va": {
    condition: {"fact":"property.associationType","op":"ne","value":"NONE"},
    note: "when the property isn't in a homeowners' or condominium association",
  },
  "ev-charging-end-of-tenancy-co": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (none, or street only)",
  },
  "security-deposit-use-ks": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-mn": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (none, or street only)",
  },
  "security-deposit-return-oh": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-ks-oh-ca": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (none, or street only)",
  },
  "parking-vehicle-rules-tx": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (none, or street only)",
  },
  "water-submeter-disclosure-ca": {
    condition: {"fact":"property.utility.water.method","op":"eq","value":"SUBMETER"},
    note: "when water isn't billed to the tenant by submeter",
  },
  "security-deposit-return-sc": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "landlords-access-tn-act": {
    condition: {"fact":"property.county","op":"matches","value":["Anderson","Blount","Bradley","Davidson","Hamilton","Knox","Madison","Maury","Montgomery","Rutherford","Sevier","Shelby","Sullivan","Sumner","Washington","Williamson","Wilson"]},
    note: "when the property is outside Tennessee's 17 landlord-tenant act counties",
  },
  "security-deposit-return-al": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-il": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-mo": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-ok": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-vehicle-rules-mi": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (none, or street only)",
  },
  "security-deposit-use-mt": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "parking-vehicle-rules-ny": {
    condition: {"fact":"property.parkingTypes","op":"includesAny","value":["GARAGE","DRIVEWAY","ASSIGNED","LOT"]},
    note: "when the property has no on-site parking (none, or street only)",
  },
  "lease-end-continuation-wa": {
    condition: {"all":[{"fact":"lease.leaseType","op":"eq","value":"FIXED"},{"fact":"lease.termDays","op":"gte","value":178},{"fact":"lease.termDays","op":"lte","value":367}]},
    note: "when the lease isn't a fixed term of six to 12 months",
  },
  "security-deposit-return-or": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-wv": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-ct": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "furnishings-included-ri": {
    condition: {"fact":"property.furnished","op":"eq","value":true},
    note: "when the property isn't rented furnished",
  },
  "snow-removal-ri": {
    condition: {"fact":"lease.snowRemoval","op":"eq","value":"TENANT"},
    note: "when you handle snow removal or none is needed",
  },
  "security-deposit-use-vt": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-return-de": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "security-deposit-use-hi": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "joint-liability-la": {
    condition: {"fact":"lease.peopleCount","op":"gte","value":2},
    note: "when only one person is on the lease",
  },
  "security-deposit-return-ms": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "hunting-rights-ms": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "when the property isn't rural or farm land where hunting or fishing is possible",
  },
  "sidewalk-snow-removal-dc": {
    condition: {"fact":"lease.snowRemoval","op":"eq","value":"TENANT"},
    note: "when you handle snow removal or none is needed",
  },
  "utility-transfer-pr": {
    condition: {"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},
    note: "when electricity isn't in the tenant's name",
  },
  "assigned-parking-space-pr": {
    condition: {"fact":"lease.parkingAssigned","op":"gte","value":1},
    note: "when no parking space is assigned to this lease",
  },
  "security-deposit-use-gu": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "guaranty-as": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "deposit-forwarding-address-co": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "energy-data-release-wy": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no electric, gas or water account is in the tenant's name",
  },
  "smart-access-system-wy": {
    condition: {"fact":"property.smartLock","op":"eq","value":true},
    note: "when the property has no smart lock or electronic entry",
  },
  "deposit-surrender-notice-mn": {
    condition: {"fact":"lease.depositTaken","op":"eq","value":true},
    note: "when no security deposit is taken",
  },
  "smoke-drift-and-common-areas-mn": {
    condition: {"all":[{"fact":"property.propertyType","op":"nin","value":["SINGLE_FAMILY","MANUFACTURED_HOME","ADU","ROOM_IN_OWNER_HOME"]},{"fact":"property.unitsInBuilding","op":"gte","value":2}]},
    note: "when the property isn't in a multiunit building",
  },
  "utility-transfer-mn": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no utility is the tenant's to put in their own name",
  },
  "guaranty-renewals-nd": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "rent-installments-nv": {
    condition: {"fact":"lease.leaseType","op":"eq","value":"FIXED"},
    note: "when the lease isn't a fixed term",
  },
  "farmland-hunting-rights-va": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "when the property isn't rural or farm land where hunting or fishing is possible",
  },
  "utility-shutoff-notice-copy-in": {
    condition: {"any":[{"fact":"property.utility.electric.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.gas.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.water.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.sewer.whoPays","op":"eq","value":"TENANT_DIRECT"},{"fact":"property.utility.trash.whoPays","op":"eq","value":"TENANT_DIRECT"}]},
    note: "when no utility account is in the tenant's name",
  },
  "farmland-sporting-rights-mi": {
    condition: {"fact":"property.ruralLand","op":"eq","value":true},
    note: "when the property isn't rural or farm land where hunting or fishing is possible",
  },
  "guarantor-renewal-wi": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  "guaranty-or": {
    condition: {"fact":"lease.hasGuarantor","op":"eq","value":true},
    note: "when no guarantor is on the lease",
  },
  // Added 2026-11-22 with the portal, carpet and late fee questions.
  "late-fee": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-md": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-mn": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-tn": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-va": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-nc": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-safe-harbor-tx": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-de": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-limit-or": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-safe-harbor-ca": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-ks": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-ne": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-nv": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-nj": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-az": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-fl": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-tn-other": {
    condition: {"all":[{"fact":"lease.lateFeeCharged","op":"eq","value":true},{"not":{"fact":"property.county","op":"matches","value":["Anderson","Blount","Bradley","Davidson","Hamilton","Knox","Madison","Maury","Montgomery","Rutherford","Sevier","Shelby","Sullivan","Sumner","Washington","Williamson","Wilson"]}}]},
    note: "when the lease charges no late fee, or the property is in one of the 17 Tennessee counties covered by the landlord-tenant act",
  },
  "deposit-carpet-cleaning-mo": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "late-fee-ia": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-nm": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-wa": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "carpet-cleaning-deduction-or": {
    condition: {"all":[{"fact":"property.hasCarpet","op":"eq","value":true},{"fact":"lease.depositTaken","op":"eq","value":true}]},
    note: "when the rental has no carpet, or no security deposit is taken",
  },
  "late-fee-ky": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-ma": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-ct": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-ri": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-nh": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-me": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "carpet-cleaning-ak": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "carpet-cleaning-la": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "carpet-cleaning-ar": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "late-fee-dc": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-pr": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "late-fee-gu": {
    condition: {"fact":"lease.lateFeeCharged","op":"eq","value":true},
    note: "when the lease charges no late fee",
  },
  "carpet-cleaning-gu": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "carpet-condition-at-move-out-co": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "carpet-cleaning-wy": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "carpet-cleaning-mn": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "tenant-portal-mn": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "portal-rent-payment-ne": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "tenant-portal-nd": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "carpet-cleaning-oh": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "tenant-portal-oh": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "carpet-cleaning-nv": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "tenant-portal-nv": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "tenant-portal-fl": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "carpet-cleaning-ut": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "tenant-portal-ut": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "tenant-portal-il": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "carpet-cleaning-id": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "tenant-portal-mi": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "carpet-cleaning-nm": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "carpet-cleaning-mt": {
    condition: {"fact":"property.hasCarpet","op":"eq","value":true},
    note: "when the rental has no carpet",
  },
  "tenant-portal-mt": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
  "carpet-cleaning-wv": {
    condition: {"all":[{"fact":"property.hasCarpet","op":"eq","value":true},{"fact":"lease.depositTaken","op":"eq","value":true}]},
    note: "when the rental has no carpet, or the lease takes no security deposit",
  },
  "tenant-portal-wv": {
    condition: {"fact":"account.offersTenantPortal","op":"eq","value":true},
    note: "when you don’t offer tenants an online portal",
  },
};

// The provided clauses in `templates` that this lease's answers rule out.
function hiddenTemplates(templates, ctx) {
  const strict = { ...ctx, strictCheckboxes: true };
  return templates
    .filter((t) => PICKER_RULES[t.id] && evaluate(PICKER_RULES[t.id].condition, strict) === false)
    .map((t) => ({ templateId: t.id, note: PICKER_RULES[t.id].note }));
}

module.exports = { PICKER_RULES, hiddenTemplates };
