// The fields that fill clause {{variables}} no other stored data answers
// (Taylor, 2026-11-23). Each is a factCatalog.js question, so it saves, shows
// and validates like the others; its answer fills every variable in `vars`.
// `states` is worked out from the clauses that use those variables.
//
// place "lease.clause": a term that belongs to the clause itself, asked under
// the clause in the Lease Builder and nowhere else. Any other place is a
// section of the property, Property Specs or lease page.
const { CLAUSE_TEMPLATES } = require("./clauseTemplates");

const VARIABLE = /\{\{\s*([a-z_]+)\s*\}\}/g;
const statesByVariable = {};
for (const t of CLAUSE_TEMPLATES) {
  for (const [, v] of t.bodyText.matchAll(VARIABLE)) {
    statesByVariable[v] ??= new Set();
    for (const s of t.states || []) statesByVariable[v].add(s);
  }
}

// [id, type, label, vars, extra]. `label` is also the short name on the page.
const when = (id, ...values) => ({ showIf: { id, in: values } });
const chargedBack = { showIf: { id: "utilities", whoPays: ["CHARGED_BACK"] } };

const PROPERTY = {
  "property.manager": [
    ["serviceAgentName", "text", "Agent for service of legal papers: name", "owner_agent_name va_resident_agent_name", { help: "The person in the state authorized to accept legal papers and notices for the owner." }],
    ["serviceAgentPhone", "text", "Agent for service: phone", "owner_agent_phone"],
    ["serviceAgentAddress", "text", "Agent for service: street address", "owner_agent_street_address owner_agent_address va_resident_agent_office_address"],
    ["landlordAuthorizedPerson", "text", "Person who can authorize repairs and emergency entry (name, address, phone)", "landlord_authorized_person"],
  ],
  "property.repairs": [
    ["repairContact", "text", "Who tenants contact for repairs", "landlord_repair_contact", { help: "A name with a phone, email or portal." }],
    ["repairRequestMethod", "text", "How tenants request repairs", "repair_request_method", { help: "For example: by email or the tenant portal." }],
    ["designatedRepairer", "text", "Designated repairer", "designated_repairer", { help: "The only person or company who may do repairs." }],
    ["bedBugProcedure", "text", "How tenants report bed bugs or other pests", "bed_bug_reporting_procedure"],
    ["scheduledServices", "text", "Regularly scheduled services and how often", "scheduled_services", { help: "For example: pest control, quarterly; furnace filter, every 3 months." }],
  ],
  "property.access": [
    ["smartAccessLocations", "text", "Doors with electronic entry", "smart_access_locations", when("smartLock", true)],
    ["smartAccessMethod", "text", "Kind of electronic entry", "smart_access_method", { ...when("smartLock", true), help: "For example: keypad code, key fob or mobile app." }],
  ],
  "property.facilities": [
    ["poolGuestLimit", "number", "Pool or spa: most guests at one time", "pool_guest_limit", when("waterFeatures", "POOL", "SPA")],
    ["poolMinimumAge", "number", "Pool or spa: youngest age without an adult", "pool_minimum_age", when("waterFeatures", "POOL", "SPA")],
    ["includedFacilities", "text", "Shared facilities tenants may use", "included_facilities_list"],
    ["seasonalAmenities", "text", "Seasonal amenities (what's available and when)", "seasonal_amenities_statement"],
  ],
  "property.utilities": [
    ["tenantMeteredAreas", "text", "Shared areas on the tenant's electric meter", "tenant_metered_common_areas", when("electricMeterOutsideUnit", true)],
    ["masterMeterUnits", "number", "Units on the master water meter", "number_of_units_on_master_meter", chargedBack],
    ["waterAllocationMethod", "text", "How the water bill is split", "water_allocation_method", chargedBack],
    ["utilityAdminFee", "money", "Utility billing administrative fee", "utility_admin_fee", chargedBack],
    ["utilityAdminFees", "text", "Utility administrative and billing charges", "utility_admin_fees", chargedBack],
    ["utilityAvgBill", "money", "Last year's average monthly bill (all units)", "utility_avg_bill", chargedBack],
    ["utilityHighBill", "money", "Last year's highest month's bill", "utility_high_bill", chargedBack],
    ["utilityLowBill", "money", "Last year's lowest month's bill", "utility_low_bill", chargedBack],
    ["utilityProviderName", "text", "Provider of the utility billed through you", "utility_provider_name", chargedBack],
    ["utilityProviderPhone", "text", "That provider's phone", "utility_provider_phone", chargedBack],
    ["conservationCharge", "text", "Energy conservation charge on the account", "meter_conservation_charge_details", when("energyChargeOnBill", true)],
    ["waterBillEstimate", "money", "Estimated monthly water bill", "water_bill_estimate", chargedBack],
    ["waterBillEstimateBasis", "text", "What the water estimate is based on", "water_bill_estimate_basis", chargedBack],
    ["waterBillDueDates", "text", "When water bills are due", "water_bill_due_dates", chargedBack],
    ["waterBillPaymentProcedure", "text", "How water bills are paid", "water_bill_payment_procedure", chargedBack],
    ["waterBillingAddress", "text", "Water billing questions: address", "water_billing_address", chargedBack],
    ["waterBillingEmail", "text", "Water billing questions: email", "water_billing_email", chargedBack],
    ["waterBillingPhone", "text", "Water billing questions: phone", "water_billing_phone", chargedBack],
    ["waterRepairAddress", "text", "Water leaks: address", "water_repair_address", chargedBack],
    ["waterRepairEmail", "text", "Water leaks: email", "water_repair_email", chargedBack],
    ["waterRepairPhone", "text", "Water leaks: phone", "water_repair_phone", chargedBack],
  ],
  "property.legal": [
    ["municipality", "text", "Municipality", "municipality", { help: "The city, borough or township the property is in, which isn't always the mailing city." }],
    ["taxBlock", "text", "Tax block", "block"],
    ["taxLot", "text", "Tax lot", "lot"],
    ["locality", "text", "Locality (county or independent city)", "locality"],
    ["rentControlExemptionEnd", "date", "Rent control exemption ends", "rent_control_exemption_end_date", when("rentControlExemptionClaimed", true)],
    ["environmentalRecording", "text", "Where the environmental restriction is recorded", "environmental_covenant_recording_data", when("environmentalRestriction", true)],
    ["environmentalLimits", "text", "What the environmental restriction limits", "environmental_covenant_use_limitations", when("environmentalRestriction", true)],
    ["maxOccupants", "number", "Maximum number of occupants", "max_occupants"],
    ["accessoryUnit", "text", "Separate living space not part of the rental", "accessory_unit_description"],
  ],
  "specs.furnishings": [
    ["excludedAppliances", "text", "Appliances there but not supplied by you", "excluded_appliance_list"],
    ["landlordFurniture", "text", "Furniture you provide", "landlord_furniture_list", when("furnished", true)],
  ],
};

const LEASE = {
  "lease.fees": [
    ["returnedPaymentFee", "money", "Returned payment fee", "nsf_fee returned_payment_fee"],
    ["lateFeeDaily", "money", "Daily late fee", "late_fee_daily_amount"],
    ["lateFeeMonthlyMax", "money", "Most late fees in one month", "late_fee_monthly_max"],
    ["holdoverDailyRate", "money", "Holdover charge per day", "holdover_daily_rate", { help: "What the tenant pays for each day they stay after the lease ends." }],
    ["interestRate", "text", "Interest rate on unpaid amounts (per year)", "unpaid_amount_interest_rate", { help: "For example: 8%." }],
    ["portalFee", "money", "Electronic payment fee", "portal_fee"],
    ["portalFeeMethod", "text", "Payment method that fee applies to", "fee_bearing_method"],
    ["utilityDepositAmount", "money", "Utility deposit amount", "utility_deposit"],
    ["utilityAllowance", "money", "Utility allowance you cover", "utility_allowance_amount"],
    ["nonrefundablePetFee", "money", "Nonrefundable pet fee", "nonrefundable_pet_fee"],
    ["nonrefundableFees", "text", "Other fees, each with its amount and purpose", "nonrefundable_fees_and_purposes"],
    ["nonrefundableDeposit", "money", "Nonrefundable part of the security deposit", "nonrefundable_deposit_amount"],
    ["totalMonthlyPayment", "money", "Total monthly payment (rent plus required fees)", "total_monthly_payment"],
    ["concessionDescription", "text", "Rent concession", "concession_description"],
    ["concessionValue", "money", "Rent concession: total value", "concession_total_value"],
    ["concessionApplication", "text", "Rent concession: how it's applied", "concession_application"],
  ],
  "lease.rentPayment": [
    ["nonelectronicPayment", "text", "Non-electronic way to pay rent", "nonelectronic_payment_method alternate_payment_method"],
    ["paymentPortalUrl", "text", "Payment portal web address", "payment_portal_url"],
  ],
  "lease.deposit": [
    ["depositBankName", "text", "Bank holding the deposit", "deposit_bank_name"],
    ["depositBankAddress", "text", "Bank's address", "deposit_bank_address"],
    ["depositBondInsurer", "text", "Bond insurer (if you use a bond)", "deposit_bond_insurer"],
    ["depositHoldingMethod", "text", "How the deposit is held", "deposit_holding_method"],
    ["depositLocation", "text", "Where the deposit is held, as the notice states it", "deposit_location_statement", { help: "For example: in a separate account at First Bank, 1 Main St, Tampa, FL." }],
    ["depositInterest", "pickOne", "Does the tenant get interest on the deposit?", "deposit_interest_statement", { options: [{ value: "is", label: "Yes" }, { value: "is not", label: "No" }] }],
    ["advanceRent", "money", "Advance rent held", "advance_rent"],
  ],
  "lease.noticePeriods": [
    ["renewalNoticeDays", "number", "Days' notice before renewal or non-renewal", "renewal_notice_days"],
    ["escalationNoticeDays", "number", "Days' notice of a rent increase during the term", "escalation_notice_days"],
    ["ruleChangeNoticeDays", "number", "Days' notice of a rule change", "rule_change_notice_days"],
    ["surrenderNoticeDays", "number", "Days' notice before the tenant moves out (for the deposit)", "surrender_notice_days"],
  ],
  "lease.maintenance": [
    ["tenantMaintainedItems", "text", "What the tenant maintains", "tenant_maintained_items"],
    ["maintenanceConsideration", "text", "What the tenant gets in return", "maintenance_consideration maintenance_agreement_consideration", { help: "For example: a $50 monthly rent reduction." }],
    ["tenantMaintenanceScope", "text", "Parts of the property the tenant improves or repairs", "tenant_maintenance_scope"],
    ["maintenanceRentCredit", "money", "Monthly rent reduction for that work", "tenant_maintenance_rent_credit"],
  ],
  "lease.details": [
    ["employmentPosition", "text", "Employee's position", "employment_position employee_position", when("tenantIsEmployee", true)],
    ["employeeDuties", "text", "Employee's duties", "employee_duties", when("tenantIsEmployee", true)],
    ["employeeHousingConsideration", "text", "What the housing is given in exchange for", "employee_housing_consideration", when("tenantIsEmployee", true)],
    ["employeeHousingValue", "money", "Monthly value of the housing", "employee_housing_monthly_value", when("tenantIsEmployee", true)],
    ["foreclosureContact", "text", "Foreclosure contact (court or trustee: name, address, phone)", "foreclosure_contact", when("foreclosureUnderway", true)],
    ["foreclosureSale", "text", "Foreclosure sale: time, date and place", "foreclosure_sale_time_date_place", when("foreclosureUnderway", true)],
    ["seasonalDescription", "text", "Kind of seasonal property", "seasonal_property_description", when("seasonal", true)],
    ["tenantOtherResidence", "text", "Tenant's main residence elsewhere", "tenant_other_residence", when("seasonal", true)],
    ["credentialCount", "number", "Entry credentials given to the tenant", "smart_access_credential_count"],
  ],
  "lease.contacts": [
    ["authorizedPerson", "text", "Tenant's authorized contact (name, address, phone)", "authorized_person_name_address_phone", { help: "Who you may contact about the tenant's belongings or animals, or if the tenant dies or has an emergency." }],
    ["guarantyMax", "money", "Guarantor's maximum liability", "guaranty_max_liability", { guarantor: true }],
    ["guarantyEnd", "date", "Guaranty ends", "guaranty_end_date", { guarantor: true }],
    ["guarantorNoticeAddress", "text", "Guarantor's address for notices", "guarantor_notice_address", { guarantor: true }],
  ],
  "lease.clause": [
    ["additionalSecurity", "money", "Security above your standard amount", "additional_security_amount"],
    ["additionalSecurityReturn", "date", "Date it will be returned", "additional_security_return_date", { help: "No more than six months after the tenant moves in, under this clause." }],
    ["alarmTamperingFee", "money", "Charge for each alarm tampered with", "alarm_tampering_fee"],
    ["associationApprovalDeadline", "date", "Association approval deadline", "association_approval_deadline"],
    ["associationFeePayer", "text", "Who pays the association's application fee", "association_fee_payer"],
    ["childCareLiability", "money", "Child care liability insurance", "child_care_liability_amount"],
    ["maxChildrenInCare", "number", "Most children in care at one time", "max_children_in_care"],
    ["conductCode", "text", "Student conduct code", "conduct_code_reference"],
    ["hearingProcedures", "text", "Where the hearing procedures are set out", "hearing_procedures_reference"],
    ["institutionName", "text", "College or university", "institution_name"],
    ["credentialDataDays", "number", "Days to delete entry data", "credential_data_deletion_days"],
    ["lostCredentialDays", "number", "Days to report a lost credential", "lost_credential_notice_days"],
    ["cureDays", "number", "Days to fix a breach", "cure_period_days"],
    ["damageInsuranceFee", "money", "Damage insurance administrative fee", "damage_insurance_admin_fee"],
    ["depositInstallment", "money", "Monthly deposit installment", "deposit_installment_amount"],
    ["feeInLieu", "money", "Fee in place of the deposit", "fee_in_lieu_amount"],
    ["feeInLieuSchedule", "text", "When the fee is paid", "fee_in_lieu_schedule"],
    ["feeInLieuMethod", "text", "How the fee is paid", "fee_in_lieu_method"],
    ["feeInLieuRefundable", "text", "Whether the fee is refundable", "fee_in_lieu_refundable", { help: 'Reads after "The fee": for example, "is nonrefundable".' }],
    ["feeInLieuCharges", "text", "Other charges for the deposit options", "fee_in_lieu_option_charges", { help: 'Enter "none" if there are none.' }],
    ["feeInLieuDefaultDays", "number", "Days to pay the deposit after a default", "fee_in_lieu_default_days"],
    ["displayLimit", "number", "Most items on display", "display_item_limit"],
    ["dvTerminationFee", "money", "Domestic violence termination fee", "dv_termination_fee", { help: "No more than one month's rent." }],
    ["earlyTerminationFee", "money", "Early termination fee", "early_termination_fee", { help: "No more than two months' rent." }],
    ["earlyTerminationDays", "number", "Days' notice to end early", "early_termination_notice_days", { help: "No more than 60 if there's an early termination fee." }],
    ["ownerOccupancyDays", "number", "Days' notice when the owner moves in", "owner_occupancy_notice_days"],
    ["electricLatePenalty", "money", "Late penalty on the electric bill", "electric_late_penalty"],
    ["emergencyResponseHours", "number", "Hours to respond to an emergency", "emergency_response_hours"],
    ["endOfTermDamages", "money", "Damages for leaving without notice", "end_of_term_liquidated_damages"],
    ["endOfTermDays", "number", "Days' notice before the term ends", "end_of_term_notice_days", { help: "30 to 60 days." }],
    ["landlordEndOfTermDays", "number", "Days' notice you give before the term ends", "landlord_end_of_term_notice_days"],
    ["evLiability", "money", "EV charger liability coverage", "ev_liability_coverage_amount", { help: "No more than ten times the annual rent." }],
    ["evPowerMethod", "text", "How EV charging power is measured", "ev_power_cost_method"],
    ["evProofDays", "number", "Days to show proof of EV insurance", "ev_insurance_proof_days"],
    ["exhibitLetter", "text", "Exhibit letter", "exhibit_letter"],
    ["expeditedDepositFee", "money", "Fee for an early deposit return", "expedited_deposit_fee"],
    ["flotationInsurance", "money", "Waterbed insurance", "flotation_insurance_amount"],
    ["inspectionHours", "number", "Hours' notice of a program inspection", "inspection_notice_hours"],
    ["insuranceProofDays", "number", "Days to show proof of renter's insurance", "insurance_proof_days"],
    ["judgmentInterest", "text", "Interest rate on an award (per year)", "judgment_interest_rate", { help: "For example: 8% per year." }],
    ["lienReleaseDays", "number", "Days to release a lien", "lien_release_days"],
    ["noticeToQuitDays", "number", "Days in the shortened notice to quit", "notice_to_quit_days"],
    ["noticeToVacateDays", "number", "Days' notice to vacate before an eviction suit", "notice_to_vacate_days"],
    ["periodicNoticeDays", "number", "Days' notice to end month-to-month", "periodic_tenancy_notice_days"],
    ["reassignedDuties", "text", "Duties assigned to the tenant", "reassigned_duties"],
    ["reconnectionFee", "money", "Reconnection fee", "reconnection_fee", { help: "No more than $10, and it must reflect your average cost." }],
    ["reconnectionFeeCap", "money", "Most the tenant reimburses for reconnection", "reconnection_fee_cap"],
    ["repairReimbursementDays", "number", "Days to reimburse an emergency repair", "repair_reimbursement_days"],
    ["serviceHours", "number", "Hours' notice of a scheduled service", "service_notice_hours"],
    ["substituteDays", "number", "Days to offer a substitute rental", "substitute_premises_offer_days"],
    ["tenantNoticeDays", "number", "Days' notice before the tenant moves out", "tenant_notice_days"],
    ["pestNoticeDays", "number", "Days to report pests", "pest_notice_days"],
    ["utilityBillCopyFee", "money", "Fee for a utility bill copy", "utility_bill_copy_fee"],
    ["utilityTransferDays", "number", "Days to put utilities in the tenant's name", "utility_transfer_days"],
  ],
};

function build(byPlace) {
  return Object.entries(byPlace).flatMap(([place, rows]) =>
    rows.map(([id, type, label, vars, extra = {}]) => {
      const list = vars.split(" ");
      const states = [...new Set(list.flatMap((v) => [...(statesByVariable[v] || [])]))].sort();
      return {
        id, type, label, short: label.replace(/\?$/, ""), place, section: "Clause fields", counts: false,
        states, vars: list, ...extra, ...(place === "lease.clause" ? { builderOnly: true } : {}),
      };
    }),
  );
}

module.exports = { PROPERTY_FIELDS: build(PROPERTY), LEASE_FIELDS: build(LEASE) };
