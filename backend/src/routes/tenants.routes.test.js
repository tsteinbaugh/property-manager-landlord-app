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

async function createOtherLandlordsProperty() {
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

describe("tenants routes", () => {
  let property;

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
    const entity = await prisma.entity.create({
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
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/tenants");

    expect(res.status).toBe(401);
  });

  it("creates a tenant applying to an owned property, defaulting to PENDING", async () => {
    const res = await request(app).post("/api/tenants").send({
      name: "Jamie Rivera",
      propertyId: property.id,
      phone: "555-0100",
      email: "jamie@example.com",
    });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Jamie Rivera");
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.applicationStatus).toBe("PENDING");
  });

  it("rejects a tenant missing required fields", async () => {
    const res = await request(app).post("/api/tenants").send({
      name: "Jamie Rivera",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a tenant applying to a property owned by another user", async () => {
    const otherProperty = await createOtherLandlordsProperty();

    const res = await request(app).post("/api/tenants").send({
      name: "Jamie Rivera",
      propertyId: otherProperty.id,
    });

    expect(res.status).toBe(400);
  });

  it("ignores unassignable fields like userId on create", async () => {
    const res = await request(app).post("/api/tenants").send({
      name: "Jamie Rivera",
      propertyId: property.id,
      userId: "someone-elses-id",
    });

    expect(res.status).toBe(201);
    expect(res.body.userId).not.toBe("someone-elses-id");
  });

  it("lists only the current user's tenants, optionally filtered by property", async () => {
    const otherProperty = await createOtherLandlordsProperty();
    await prisma.tenant.create({
      data: { userId: otherProperty.userId, propertyId: otherProperty.id, name: "Not Mine" },
    });
    await request(app).post("/api/tenants").send({ name: "Jamie Rivera", propertyId: property.id });

    const res = await request(app).get("/api/tenants").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe("Jamie Rivera");
  });

  it("gets a single tenant by id", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera", propertyId: property.id });

    const res = await request(app).get(`/api/tenants/${created.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.body.id);
  });

  it("404s for another user's tenant", async () => {
    const otherProperty = await createOtherLandlordsProperty();
    const otherTenant = await prisma.tenant.create({
      data: { userId: otherProperty.userId, propertyId: otherProperty.id, name: "Not Mine" },
    });

    const res = await request(app).get(`/api/tenants/${otherTenant.id}`);

    expect(res.status).toBe(404);
  });

  it("approves a pending applicant", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera", propertyId: property.id });

    const res = await request(app)
      .put(`/api/tenants/${created.body.id}`)
      .send({ applicationStatus: "APPROVED", idVerified: true, creditCheckStatus: "approved" });

    expect(res.status).toBe(200);
    expect(res.body.applicationStatus).toBe("APPROVED");
    expect(res.body.idVerified).toBe(true);
    expect(res.body.creditCheckStatus).toBe("approved");
  });

  it("rejects an invalid applicationStatus on update", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera", propertyId: property.id });

    const res = await request(app)
      .put(`/api/tenants/${created.body.id}`)
      .send({ applicationStatus: "MAYBE" });

    expect(res.status).toBe(400);
  });

  it("deletes a tenant", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera", propertyId: property.id });

    const res = await request(app).delete(`/api/tenants/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.tenant.findUnique({
      where: { id: created.body.id },
    });
    expect(check).toBeNull();
  });
});
