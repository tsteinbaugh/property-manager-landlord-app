const { buildVariableContext } = require("./clauseVariables");

describe("clauseVariables", () => {
  const base = { lease: { monthlyRent: "1500", startDate: new Date("2027-01-01"), facts: {} }, property: {}, tenants: [] };

  it("shows date-only lease dates on their own day, whatever the server's timezone", () => {
    const lease = { ...base.lease, startDate: new Date("2025-02-03T00:00:00Z"), endDate: new Date("2026-07-31T00:00:00Z") };
    const ctx = buildVariableContext({ ...base, lease });
    expect(ctx.start_date).toBe("2/3/2025");
    expect(ctx.end_date).toBe("7/31/2026");
  });

  it("leaves guarantors out of the tenant names and fills the guarantor's", () => {
    const tenants = [
      { firstName: "Ann", lastName: "Lee", role: "PRIMARY", email: "ann@example.com", emergencyContactName: "Bo Lee", emergencyContactPhone: "555-0100" },
      { firstName: "Cal", lastName: "Ray", role: "CO_TENANT", email: null },
      { firstName: "Dee", lastName: "Lee", role: "GUARANTOR" },
    ];
    const ctx = buildVariableContext({ ...base, tenants });
    expect(ctx.tenant_names).toBe("Ann Lee, Cal Ray");
    expect(ctx.guarantor_name).toBe("Dee Lee");
    expect(ctx.tenant_email).toBe(null); // one tenant has no email
    expect(ctx.tenant_emergency_contact_name).toBe("Bo Lee");
    expect(ctx.tenant_emergency_contact_phone).toBe("555-0100");
  });

  it("fills the owner, manager and county from the entity and property", () => {
    const entity = { legalName: "Example LLC", mailingAddress: "1 Main St, Denver, CO 80202", contactEmail: "llc@example.com" };
    const property = { facts: { county: "Fulton County", managerCompany: "Acme PM", managerPhone: "555-0101", managerAddress: "2 Elm St, Cheyenne, WY 82001" } };
    const ctx = buildVariableContext({ ...base, entity, property });
    expect(ctx.owner_name).toBe("Example LLC");
    expect(ctx.owner_address).toBe("1 Main St, Denver, CO 80202");
    expect(ctx.landlord_email).toBe("llc@example.com");
    expect(ctx.county).toBe("Fulton");
    expect(ctx.manager_name).toBe("Acme PM");
    expect(ctx.management_company_street_address).toBe("2 Elm St, Cheyenne, WY 82001");
    expect(ctx.wy_manager_address).toBe("2 Elm St, Cheyenne, WY 82001");
    const coManager = { facts: { managerName: "Pat", managerAddress: "3 Oak St, Denver, CO 80202" } };
    expect(buildVariableContext({ ...base, property: coManager }).wy_manager_address).toBe(undefined);
  });

  it("fills rent payment from the lease, else the entity and notice address", () => {
    const entity = { legalName: "Example LLC", mailingAddress: "1 Main St, Denver, CO 80202", contactPhone: "555-0102" };
    let ctx = buildVariableContext({ ...base, entity });
    expect(ctx.rent_payee_name).toBe("Example LLC");
    expect(ctx.rent_payee_address).toBe("1 Main St, Denver, CO 80202");
    expect(ctx.rent_payee_phone).toBe("555-0102");
    expect(ctx.rent_payment_forms).toBe(null);
    const lease = { ...base.lease, facts: { rentPaymentAddress: "PO Box 9, Boulder, CO 80301", rentPaymentForms: "check or money order" } };
    ctx = buildVariableContext({ ...base, lease, entity });
    expect(ctx.payment_address).toBe("PO Box 9, Boulder, CO 80301");
    expect(ctx.rent_payment_forms).toBe("check or money order");
  });

  it("fills parking from the lease and the emergency phone with its fallbacks", () => {
    const lease = { ...base.lease, facts: { parkingAssigned: 2, parkingSpaceNumbers: "B12, B13", parkingCharged: true, parkingFeePerSpace: 75 } };
    const ctx = buildVariableContext({ ...base, lease });
    expect(ctx.parking_fee_amount).toBe("$150.00");
    expect(ctx.parking_space_number).toBe("B12, B13");
    const free = { ...lease, facts: { ...lease.facts, parkingCharged: false } };
    expect(buildVariableContext({ ...base, lease: free }).parking_fee_amount).toBe(null);
    const entity = { contactPhone: "555-0102" };
    expect(buildVariableContext({ ...base, entity }).emergency_phone).toBe("555-0102");
    expect(buildVariableContext({ ...base, entity, property: { facts: { managerName: "Pat", managerPhone: "555-0103" } } }).emergency_phone).toBe("555-0103");
    expect(buildVariableContext({ ...base, entity, property: { facts: { emergencyPhone: "555-0199" } } }).emergency_phone).toBe("555-0199");
  });

  it("lists utilities only once every utility is answered", () => {
    const utilities = { electric: { whoPays: "TENANT_DIRECT" }, gas: { whoPays: "TENANT_DIRECT" }, water: { whoPays: "CHARGED_BACK", method: "SUBMETER" }, sewer: { whoPays: "INCLUDED" } };
    expect(buildVariableContext({ ...base, property: { facts: { utilities } } }).tenant_utilities).toBe(undefined);
    const ctx = buildVariableContext({ ...base, property: { facts: { utilities: { ...utilities, trash: { whoPays: "NOT_PROVIDED" } } } } });
    expect(ctx.tenant_utilities).toBe("electric, gas");
    expect(ctx.included_utilities).toBe("sewer");
    expect(ctx.separately_charged_utilities).toBe("water");
    expect(ctx.utility_billing_method).toBe("water: a separate meter for this unit (submeter)");
  });

  it("fills the notice address from the entity's mailing address, or the lease's own", () => {
    const entity = { legalName: "Example LLC", mailingAddress: "1 Main St, Denver, CO 80202" };
    expect(buildVariableContext({ ...base, entity }).landlord_notice_address).toBe("1 Main St, Denver, CO 80202");
    const lease = { ...base.lease, facts: { noticeAddress: "PO Box 9, Boulder, CO 80301" } };
    expect(buildVariableContext({ ...base, lease, entity }).landlord_notice_address).toBe("PO Box 9, Boulder, CO 80301");
    expect(buildVariableContext({ ...base, entity: {} }).landlord_notice_address).toBe(null);
  });

  it("names a business owner's registered agent as its agent for service, only with an address in the property's state", () => {
    const llc = { entityType: "LLC", legalName: "Acme LLC", registeredAgent: "Agents Inc.", registeredAgentAddress: "1 Main St, Reno, NV 89501" };
    const nv = { ...base, property: { state: "NV", facts: {} }, entity: llc };
    expect(buildVariableContext(nv).owner_agent_name).toBe("Agents Inc.");
    expect(buildVariableContext(nv).owner_agent_address).toBe("1 Main St, Reno, NV 89501");
    // Not Virginia's agent: that clause covers only individual owners.
    expect(buildVariableContext({ ...nv, property: { state: "VA", facts: {} } }).va_resident_agent_name ?? null).toBe(null);
    // An agent elsewhere (or on a street named for the state) isn't in the state.
    expect(buildVariableContext({ ...nv, property: { state: "CA", facts: {} } }).owner_agent_name ?? null).toBe(null);
    const street = { ...llc, registeredAgentAddress: "9 California St, Reno, NV 89501" };
    expect(buildVariableContext({ ...nv, property: { state: "CA", facts: {} }, entity: street }).owner_agent_name ?? null).toBe(null);
    // A person owner has no registered agent; the property's own agent comes first.
    expect(buildVariableContext({ ...nv, entity: { ...llc, entityType: "PERSONAL" } }).owner_agent_name ?? null).toBe(null);
    const own = { ...nv, property: { state: "NV", facts: { serviceAgentName: "Pat Lee", serviceAgentAddress: "2 B St, Reno, NV" } } };
    expect(buildVariableContext(own).owner_agent_name).toBe("Pat Lee");
    expect(buildVariableContext(own).owner_agent_address).toBe("2 B St, Reno, NV");
  });
});
