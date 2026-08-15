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
});
