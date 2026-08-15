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
}

async function createOtherUsersProperty() {
  const otherUser = await prisma.user.create({
    data: { clerkId: "clerk_other_user", email: "other@example.com" },
  });
  const otherEntity = await prisma.entity.create({
    data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
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
  return { otherUser, otherProperty };
}

describe("income routes", () => {
  let entity;
  let property;
  let lease;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

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
    lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: user.id,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/income");

    expect(res.status).toBe(401);
  });

  it("creates income under an owned property, deriving entityId server-side", async () => {
    const res = await request(app).post("/api/income").send({
      propertyId: property.id,
      leaseId: lease.id,
      category: "RENT",
      amount: "1800.00",
      date: "2026-09-01",
      method: "bank transfer",
    });

    expect(res.status).toBe(201);
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.leaseId).toBe(lease.id);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.category).toBe("RENT");
  });

  it("allows income with no lease attached", async () => {
    const res = await request(app).post("/api/income").send({
      propertyId: property.id,
      category: "OTHER",
      amount: "50.00",
      date: "2026-09-01",
    });

    expect(res.status).toBe(201);
    expect(res.body.leaseId).toBeNull();
  });

  it("rejects income missing required fields", async () => {
    const res = await request(app).post("/api/income").send({ propertyId: property.id });

    expect(res.status).toBe(400);
  });

  it("rejects an invalid category", async () => {
    const res = await request(app).post("/api/income").send({
      propertyId: property.id,
      category: "BONUS",
      amount: "50.00",
      date: "2026-09-01",
    });

    expect(res.status).toBe(400);
  });

  it("rejects income under a property owned by another user", async () => {
    const { otherProperty } = await createOtherUsersProperty();

    const res = await request(app).post("/api/income").send({
      propertyId: otherProperty.id,
      category: "RENT",
      amount: "1800.00",
      date: "2026-09-01",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a lease that does not belong to the given property", async () => {
    const { otherUser, otherProperty } = await createOtherUsersProperty();
    const otherLease = await prisma.lease.create({
      data: {
        propertyId: otherProperty.id,
        userId: otherUser.id,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1500.00",
      },
    });

    const res = await request(app).post("/api/income").send({
      propertyId: property.id,
      leaseId: otherLease.id,
      category: "RENT",
      amount: "1800.00",
      date: "2026-09-01",
    });

    expect(res.status).toBe(400);
  });

  it("lists income, optionally filtered by property and lease", async () => {
    await prisma.income.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        leaseId: lease.id,
        category: "RENT",
        amount: "1800.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app)
      .get("/api/income")
      .query({ propertyId: property.id, leaseId: lease.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single income row by id", async () => {
    const income = await prisma.income.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "RENT",
        amount: "1800.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get(`/api/income/${income.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(income.id);
  });

  it("404s for another user's income", async () => {
    const { otherUser, otherProperty } = await createOtherUsersProperty();
    const otherIncome = await prisma.income.create({
      data: {
        userId: otherUser.id,
        entityId: otherProperty.entityId,
        propertyId: otherProperty.id,
        category: "RENT",
        amount: "1800.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get(`/api/income/${otherIncome.id}`);
    expect(res.status).toBe(404);
  });

  it("updates income", async () => {
    const income = await prisma.income.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "RENT",
        amount: "1800.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app)
      .put(`/api/income/${income.id}`)
      .send({ amount: "1850.00", notes: "Paid a bit late" });

    expect(res.status).toBe(200);
    expect(res.body.amount).toBe("1850");
    expect(res.body.notes).toBe("Paid a bit late");
  });

  it("deletes income", async () => {
    const income = await prisma.income.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "RENT",
        amount: "1800.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).delete(`/api/income/${income.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.income.findUnique({ where: { id: income.id } });
    expect(check).toBeNull();
  });
});
