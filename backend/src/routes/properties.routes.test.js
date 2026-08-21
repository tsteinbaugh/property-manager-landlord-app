const request = require("supertest");
const createApp = require("../app");
const prisma = require("../lib/prisma");

const mockGetAuth = vi.fn(() => ({ userId: "clerk_test_user_1" }));
const mockGetUser = vi.fn(() =>
  Promise.resolve({
    id: "clerk_test_user_1",
    primaryEmailAddressId: "email_1",
    emailAddresses: [{ id: "email_1", emailAddress: "landlord@example.com" }],
    firstName: "Taylor",
    lastName: null,
  }),
);

const app = createApp({
  clerkMiddleware: () => (req, res, next) => next(),
  getAuth: (req) => mockGetAuth(req),
  clerkClient: { users: { getUser: (...args) => mockGetUser(...args) } },
});

describe("properties routes", () => {
  let entity;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
  await prisma.maintenanceStatusChange.deleteMany();
  await prisma.maintenanceRequest.deleteMany();
  await prisma.maintenanceSchedule.deleteMany();
  await prisma.vendor.deleteMany();

    await prisma.depositDeduction.deleteMany();
    await prisma.deposit.deleteMany();
    await prisma.income.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.leaseTenant.deleteMany();
    await prisma.lease.deleteMany();
    await prisma.tenant.deleteMany();
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
      data: {
        clerkId: "clerk_test_user_1",
        email: "landlord@example.com",
        name: "Taylor",
      },
    });

    entity = await prisma.entity.create({
      data: {
        userId: user.id,
        legalName: "Steinbaugh Estates LLC",
        entityType: "LLC",
      },
    });
  });

  afterAll(async () => {
  await prisma.maintenanceStatusChange.deleteMany();
  await prisma.maintenanceRequest.deleteMany();
  await prisma.maintenanceSchedule.deleteMany();
  await prisma.vendor.deleteMany();
    await prisma.depositDeduction.deleteMany();
    await prisma.deposit.deleteMany();
    await prisma.income.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.leaseTenant.deleteMany();
    await prisma.lease.deleteMany();
    await prisma.tenant.deleteMany();
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/properties");

    expect(res.status).toBe(401);
  });

  it("provisions a local User the first time a Clerk user is seen", async () => {
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();

    const res = await request(app).get("/api/properties");
    expect(res.status).toBe(200);

    const user = await prisma.user.findUnique({
      where: { clerkId: "clerk_test_user_1" },
    });
    expect(user).not.toBeNull();
    expect(user.email).toBe("landlord@example.com");
  });

  it("gives a newly provisioned user a default Self / Personal entity", async () => {
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();

    await request(app).get("/api/properties");

    const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
    const entities = await prisma.entity.findMany({ where: { userId: user.id } });

    expect(entities).toHaveLength(1);
    expect(entities[0].entityType).toBe("PERSONAL");
    expect(entities[0].legalName).toBe("Taylor");
    expect(entities[0].isDefault).toBe(true);
  });

  it("creates a property under an entity, deriving userId from the entity", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
      name: "Maple St",
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(201);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.userId).toBe(entity.userId);
  });

  it("creates a property with real attributes (yearBuilt, bedrooms, bathrooms, sqFt, amenities)", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
      yearBuilt: 1998,
      bedrooms: 3,
      bathrooms: 2.5,
      sqFt: 1800,
      amenities: ["Garage", "Fenced yard"],
    });

    expect(res.status).toBe(201);
    expect(res.body.yearBuilt).toBe(1998);
    expect(res.body.bedrooms).toBe(3);
    expect(res.body.bathrooms).toBe("2.5");
    expect(res.body.sqFt).toBe(1800);
    expect(res.body.amenities).toEqual(["Garage", "Fenced yard"]);
  });

  it("updates a property's attributes", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app)
      .put(`/api/properties/${property.id}`)
      .send({ bedrooms: 4, bathrooms: 3, sqFt: 2200, amenities: ["Pool"] });

    expect(res.status).toBe(200);
    expect(res.body.bedrooms).toBe(4);
    expect(res.body.bathrooms).toBe("3");
    expect(res.body.sqFt).toBe(2200);
    expect(res.body.amenities).toEqual(["Pool"]);
  });

  it("creates and updates a property with the second attributes batch (utilities/access/legal)", async () => {
    const createRes = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
      propertyType: "Single-family",
      stories: 2,
      basement: "Unfinished",
      lotSize: "0.25 acres",
      parking: "2-car garage",
      storage: "Shed in backyard",
      mailboxLocation: "Curbside, cluster box #4",
      trashPickupDay: "Tuesday",
      trashCanStorageLocation: "Side yard, behind gate",
      hoaOrMetroDistrict: "Maple Grove Metro District",
      hoaContact: "hoa@maplegrove.example",
      acceptsSection8: true,
      mortgageCompany: "Frederick Community Bank",
      mortgageContact: "555-0111",
      insuranceNotes: "State Farm, policy #12345, agent Jane Doe 555-0100",
      electricityProvider: "Xcel Energy",
      electricityContact: "1-800-895-4999, acct #555",
      gasProvider: "Xcel Energy",
      gasContact: "1-800-895-4999, acct #555",
      waterProvider: "City of Frederick",
      waterContact: "acct #778899",
      sewerProvider: "City of Frederick",
      sewerContact: "acct #778899",
      trashProvider: "Republic Services",
      trashContact: "555-0122",
      internetProvider: "Comcast (required by HOA bulk agreement)",
      internetContact: "1-800-555-0199",
    });

    expect(createRes.status).toBe(201);
    expect(createRes.body.propertyType).toBe("Single-family");
    expect(createRes.body.stories).toBe(2);
    expect(createRes.body.acceptsSection8).toBe(true);
    expect(createRes.body.hoaOrMetroDistrict).toBe("Maple Grove Metro District");
    expect(createRes.body.trashPickupDay).toBe("Tuesday");
    expect(createRes.body.insuranceNotes).toBe("State Farm, policy #12345, agent Jane Doe 555-0100");
    expect(createRes.body.electricityProvider).toBe("Xcel Energy");
    expect(createRes.body.waterContact).toBe("acct #778899");
    expect(createRes.body.internetProvider).toBe("Comcast (required by HOA bulk agreement)");
    expect(createRes.body.mortgageContact).toBe("555-0111");

    const updateRes = await request(app)
      .put(`/api/properties/${createRes.body.id}`)
      .send({ acceptsSection8: false, mortgageCompany: "New Lender" });

    expect(updateRes.status).toBe(200);
    expect(updateRes.body.acceptsSection8).toBe(false);
    expect(updateRes.body.mortgageCompany).toBe("New Lender");
    // untouched fields survive a partial update
    expect(updateRes.body.hoaOrMetroDistrict).toBe("Maple Grove Metro District");
  });

  it("defaults acceptsSection8 to false when not specified", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(201);
    expect(res.body.acceptsSection8).toBe(false);
  });

  it("defaults forCauseEvictionExemption to STANDARD_LONG_TERM when not specified", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(201);
    expect(res.body.forCauseEvictionExemption).toBe("STANDARD_LONG_TERM");
  });

  it("accepts a valid forCauseEvictionExemption value on create and update", async () => {
    const createRes = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
      forCauseEvictionExemption: "SHORT_TERM_RENTAL",
    });
    expect(createRes.status).toBe(201);
    expect(createRes.body.forCauseEvictionExemption).toBe("SHORT_TERM_RENTAL");

    const updateRes = await request(app)
      .put(`/api/properties/${createRes.body.id}`)
      .send({ forCauseEvictionExemption: "OWNER_OCCUPIED_OR_ADJACENT" });
    expect(updateRes.status).toBe(200);
    expect(updateRes.body.forCauseEvictionExemption).toBe("OWNER_OCCUPIED_OR_ADJACENT");
  });

  it("rejects an invalid forCauseEvictionExemption value on create and update", async () => {
    const createRes = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
      forCauseEvictionExemption: "NOT_A_REAL_VALUE",
    });
    expect(createRes.status).toBe(400);

    const goodRes = await request(app).post("/api/properties").send({
      entityId: entity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });
    const updateRes = await request(app)
      .put(`/api/properties/${goodRes.body.id}`)
      .send({ forCauseEvictionExemption: "NOT_A_REAL_VALUE" });
    expect(updateRes.status).toBe(400);
  });

  it("rejects a property missing required fields", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects a property with a nonexistent entity", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: "nonexistent-id",
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a property under an entity owned by another user", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: {
        userId: otherUser.id,
        legalName: "Someone Else LLC",
        entityType: "LLC",
      },
    });

    const res = await request(app).post("/api/properties").send({
      entityId: otherEntity.id,
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(400);
  });

  it("lists properties, optionally filtered by entity", async () => {
    await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app)
      .get("/api/properties")
      .query({ entityId: entity.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single property by id", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).get(`/api/properties/${property.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(property.id);
  });

  it("computes canDelete: true for a genuinely empty property, false once anything is attached", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const emptyRes = await request(app).get(`/api/properties/${property.id}`);
    expect(emptyRes.body.canDelete).toBe(true);

    await prisma.tenant.create({
      data: { userId: entity.userId, propertyId: property.id, firstName: "Jane", lastName: "Doe" },
    });

    const attachedRes = await request(app).get(`/api/properties/${property.id}`);
    expect(attachedRes.body.canDelete).toBe(false);
  });

  it("includes canDelete on the update/archive/unarchive responses too, not just GET", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const putRes = await request(app).put(`/api/properties/${property.id}`).send({ name: "New Name" });
    expect(putRes.body.canDelete).toBe(true);

    const archiveRes = await request(app).post(`/api/properties/${property.id}/archive`).send({});
    expect(archiveRes.body.canDelete).toBe(true);

    const unarchiveRes = await request(app).post(`/api/properties/${property.id}/unarchive`);
    expect(unarchiveRes.body.canDelete).toBe(true);
  });

  it("404s for a missing property", async () => {
    const res = await request(app).get("/api/properties/nonexistent-id");
    expect(res.status).toBe(404);
  });

  it("404s for another user's property", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: {
        userId: otherUser.id,
        legalName: "Someone Else LLC",
        entityType: "LLC",
      },
    });
    const otherProperty = await prisma.property.create({
      data: {
        entityId: otherEntity.id,
        userId: otherUser.id,
        address1: "456 Oak St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).get(`/api/properties/${otherProperty.id}`);
    expect(res.status).toBe(404);
  });

  it("updates a property", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app)
      .put(`/api/properties/${property.id}`)
      .send({ name: "Renamed" });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Renamed");
  });

  it("reassigns a property to a different entity owned by the same user", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });
    const llc = await prisma.entity.create({
      data: { userId: entity.userId, legalName: "New LLC", entityType: "LLC" },
    });

    const res = await request(app)
      .put(`/api/properties/${property.id}`)
      .send({ entityId: llc.id });

    expect(res.status).toBe(200);
    expect(res.body.entityId).toBe(llc.id);
  });

  it("rejects reassigning a property to an entity owned by another user", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });

    const res = await request(app)
      .put(`/api/properties/${property.id}`)
      .send({ entityId: otherEntity.id });

    expect(res.status).toBe(400);

    const check = await prisma.property.findUnique({ where: { id: property.id } });
    expect(check.entityId).toBe(entity.id);
  });

  it("deletes a property", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).delete(`/api/properties/${property.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.property.findUnique({
      where: { id: property.id },
    });
    expect(check).toBeNull();
  });

  describe("archiving", () => {
    let property;

    beforeEach(async () => {
      property = await prisma.property.create({
        data: {
          entityId: entity.id,
          userId: entity.userId,
          address1: "123 Maple St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
    });

    it("archives a property with a reason", async () => {
      const res = await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Sold" });

      expect(res.status).toBe(200);
      expect(res.body.archived).toBe(true);
      expect(res.body.archivedReason).toBe("Sold");
      expect(res.body.archivedAt).toBeTruthy();
    });

    it("archives a property with no reason given", async () => {
      const res = await request(app).post(`/api/properties/${property.id}/archive`).send({});

      expect(res.status).toBe(200);
      expect(res.body.archived).toBe(true);
      expect(res.body.archivedReason).toBeNull();
    });

    it("rejects archiving a property that's already archived", async () => {
      await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Sold" });
      const res = await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Again" });

      expect(res.status).toBe(400);
    });

    it("unarchives a property, clearing the archive fields", async () => {
      await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Sold" });
      const res = await request(app).post(`/api/properties/${property.id}/unarchive`);

      expect(res.status).toBe(200);
      expect(res.body.archived).toBe(false);
      expect(res.body.archivedAt).toBeNull();
      expect(res.body.archivedReason).toBeNull();
    });

    it("rejects unarchiving a property that isn't archived", async () => {
      const res = await request(app).post(`/api/properties/${property.id}/unarchive`);
      expect(res.status).toBe(400);
    });

    it("404s archiving/unarchiving another user's property", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: { entityId: otherEntity.id, userId: otherUser.id, address1: "456 Oak St", city: "Frederick", state: "CO", zip: "80530" },
      });

      const archiveRes = await request(app).post(`/api/properties/${otherProperty.id}/archive`).send({});
      expect(archiveRes.status).toBe(404);

      await prisma.property.update({ where: { id: otherProperty.id }, data: { archived: true } });
      const unarchiveRes = await request(app).post(`/api/properties/${otherProperty.id}/unarchive`);
      expect(unarchiveRes.status).toBe(404);
    });

    it("excludes archived properties from the default list, and ?archived=true returns only archived ones", async () => {
      await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Sold" });
      const otherActive = await prisma.property.create({
        data: { entityId: entity.id, userId: entity.userId, address1: "999 Other St", city: "Frederick", state: "CO", zip: "80530" },
      });

      const activeRes = await request(app).get("/api/properties");
      expect(activeRes.body.map((p) => p.id)).toEqual([otherActive.id]);

      const archivedRes = await request(app).get("/api/properties?archived=true");
      expect(archivedRes.body.map((p) => p.id)).toEqual([property.id]);
    });

    it("still returns an archived property directly by id", async () => {
      await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Sold" });
      const res = await request(app).get(`/api/properties/${property.id}`);
      expect(res.status).toBe(200);
      expect(res.body.archived).toBe(true);
    });

    it("rejects editing an archived property until it's unarchived", async () => {
      await request(app).post(`/api/properties/${property.id}/archive`).send({ reason: "Sold" });

      const putRes = await request(app).put(`/api/properties/${property.id}`).send({ name: "New Name" });
      expect(putRes.status).toBe(400);

      await request(app).post(`/api/properties/${property.id}/unarchive`);
      const putRes2 = await request(app).put(`/api/properties/${property.id}`).send({ name: "New Name" });
      expect(putRes2.status).toBe(200);
      expect(putRes2.body.name).toBe("New Name");
    });

    it("rejects deleting a property with dependents attached, suggesting archiving instead", async () => {
      await prisma.tenant.create({
        data: { userId: entity.userId, propertyId: property.id, firstName: "Jane", lastName: "Doe" },
      });

      const res = await request(app).delete(`/api/properties/${property.id}`);
      expect(res.status).toBe(400);
      expect(res.body.error).toMatch(/archive/i);

      const check = await prisma.property.findUnique({ where: { id: property.id } });
      expect(check).not.toBeNull();
    });
  });
});
