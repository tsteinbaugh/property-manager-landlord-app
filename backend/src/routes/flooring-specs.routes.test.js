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

async function resetDatabase() {
  await prisma.maintenanceRequest.deleteMany();
  await prisma.flooringSpec.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

async function createOtherUsersProperty() {
  const otherUser = await prisma.user.create({
    data: { clerkId: "clerk_other_user", email: "other@example.com" },
  });
  const otherEntity = await prisma.entity.create({
    data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
  });
  return prisma.property.create({
    data: {
      entityId: otherEntity.id,
      userId: otherUser.id,
      address1: "456 Oak St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    },
  });
}

describe("flooring specs routes", () => {
  let user;
  let entity;
  let property;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    user = await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
    entity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Steinbaugh Estates LLC", entityType: "LLC" },
    });
    property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: user.id,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/flooring-specs").query({ propertyId: property.id });

    expect(res.status).toBe(401);
  });

  it("creates a flooring spec", async () => {
    const res = await request(app).post("/api/flooring-specs").send({
      propertyId: property.id,
      location: "Living room",
      type: "LVP",
      boxesLeftover: 3,
    });

    expect(res.status).toBe(201);
    expect(res.body.type).toBe("LVP");
    expect(res.body.lowStock).toBe(false);
  });

  it("flags low stock when boxesLeftover hits zero", async () => {
    const res = await request(app).post("/api/flooring-specs").send({
      propertyId: property.id,
      location: "Living room",
      boxesLeftover: 0,
    });

    expect(res.status).toBe(201);
    expect(res.body.lowStock).toBe(true);
  });

  it("does not flag low stock when boxesLeftover is unset", async () => {
    const res = await request(app).post("/api/flooring-specs").send({ propertyId: property.id, location: "Living room" });

    expect(res.status).toBe(201);
    expect(res.body.lowStock).toBe(false);
  });

  it("rejects a flooring spec for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).post("/api/flooring-specs").send({ propertyId: otherProperty.id });

    expect(res.status).toBe(400);
  });

  it("lists flooring specs for a property", async () => {
    await request(app).post("/api/flooring-specs").send({ propertyId: property.id, location: "Living room" });

    const res = await request(app).get("/api/flooring-specs").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("404s listing specs for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).get("/api/flooring-specs").query({ propertyId: otherProperty.id });

    expect(res.status).toBe(404);
  });

  it("updates a flooring spec", async () => {
    const created = await request(app).post("/api/flooring-specs").send({ propertyId: property.id, location: "Living room" });

    const res = await request(app).put(`/api/flooring-specs/${created.body.id}`).send({ boxesLeftover: 0 });

    expect(res.status).toBe(200);
    expect(res.body.lowStock).toBe(true);
  });

  it("deletes a flooring spec", async () => {
    const created = await request(app).post("/api/flooring-specs").send({ propertyId: property.id, location: "Living room" });

    const res = await request(app).delete(`/api/flooring-specs/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.flooringSpec.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's flooring spec", async () => {
    const otherProperty = await createOtherUsersProperty();
    const otherSpec = await prisma.flooringSpec.create({
      data: { propertyId: otherProperty.id, entityId: otherProperty.entityId, userId: otherProperty.userId },
    });

    const res = await request(app).put(`/api/flooring-specs/${otherSpec.id}`).send({ brand: "Hacked" });

    expect(res.status).toBe(404);
  });

  it("links to an Expense on the same property and returns its amount", async () => {
    const expense = await prisma.expense.create({
      data: { userId: user.id, entityId: entity.id, propertyId: property.id, category: "IMPROVEMENT", amount: "2800.00", date: new Date() },
    });

    const res = await request(app).post("/api/flooring-specs").send({
      propertyId: property.id,
      location: "Living room",
      expenseId: expense.id,
    });

    expect(res.status).toBe(201);
    expect(res.body.expenseId).toBe(expense.id);
    expect(Number(res.body.expense.amount)).toBe(2800);
  });

  it("rejects an expense linked from a different property", async () => {
    const otherProperty = await createOtherUsersProperty();
    const otherExpense = await prisma.expense.create({
      data: {
        userId: otherProperty.userId,
        entityId: otherProperty.entityId,
        propertyId: otherProperty.id,
        category: "IMPROVEMENT",
        amount: "500.00",
        date: new Date(),
      },
    });

    const res = await request(app).post("/api/flooring-specs").send({
      propertyId: property.id,
      expenseId: otherExpense.id,
    });

    expect(res.status).toBe(400);
  });

  it("replaces a flooring spec: creates a new active row and retires the old one", async () => {
    const original = await request(app).post("/api/flooring-specs").send({
      propertyId: property.id,
      location: "Living room",
      brand: "CoreLuxe",
    });

    const request1 = await prisma.maintenanceRequest.create({
      data: {
        userId: user.id,
        entityId: entity.id,
        propertyId: property.id,
        title: "Old floor repair",
        flooringSpecId: original.body.id,
        statusChanges: { create: { toStatus: "OPEN" } },
      },
    });

    const res = await request(app).post(`/api/flooring-specs/${original.body.id}/replace`);

    expect(res.status).toBe(201);
    expect(res.body.id).not.toBe(original.body.id);
    expect(res.body.location).toBe("Living room");
    expect(res.body.brand).toBeNull();
    expect(res.body.active).toBe(true);

    const oldRow = await prisma.flooringSpec.findUnique({ where: { id: original.body.id } });
    expect(oldRow.active).toBe(false);
    expect(oldRow.retiredAt).not.toBeNull();

    // Prior maintenance history stays attached to the retired row, not silently reattributed.
    const stillLinked = await prisma.maintenanceRequest.findUnique({ where: { id: request1.id } });
    expect(stillLinked.flooringSpecId).toBe(original.body.id);

    // Default list excludes the retired row; ?includeRetired=true brings it back.
    const activeOnly = await request(app).get("/api/flooring-specs").query({ propertyId: property.id });
    expect(activeOnly.body.map((f) => f.id)).toEqual([res.body.id]);

    const withRetired = await request(app).get("/api/flooring-specs").query({ propertyId: property.id, includeRetired: "true" });
    expect(withRetired.body.map((f) => f.id).sort()).toEqual([original.body.id, res.body.id].sort());
  });
});
