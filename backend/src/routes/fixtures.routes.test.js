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
  await prisma.fixture.deleteMany();
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

describe("fixtures routes", () => {
  let property;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    const user = await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
    const entity = await prisma.entity.create({
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

    const res = await request(app).get("/api/fixtures").query({ propertyId: property.id });

    expect(res.status).toBe(401);
  });

  it("creates a fixture", async () => {
    const res = await request(app).post("/api/fixtures").send({
      propertyId: property.id,
      fixtureType: "FAUCET",
      location: "Kitchen",
      brand: "Moen",
      finish: "Brushed nickel",
    });

    expect(res.status).toBe(201);
    expect(res.body.fixtureType).toBe("FAUCET");
    expect(res.body.finish).toBe("Brushed nickel");
  });

  it("rejects a fixture missing fixtureType", async () => {
    const res = await request(app).post("/api/fixtures").send({ propertyId: property.id, location: "Kitchen" });

    expect(res.status).toBe(400);
  });

  it("rejects a fixture for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).post("/api/fixtures").send({ propertyId: otherProperty.id, fixtureType: "SINK" });

    expect(res.status).toBe(400);
  });

  it("lists fixtures for a property", async () => {
    await request(app).post("/api/fixtures").send({ propertyId: property.id, fixtureType: "TOILET", location: "Bathroom" });

    const res = await request(app).get("/api/fixtures").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("404s listing fixtures for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).get("/api/fixtures").query({ propertyId: otherProperty.id });

    expect(res.status).toBe(404);
  });

  it("updates a fixture", async () => {
    const created = await request(app).post("/api/fixtures").send({ propertyId: property.id, fixtureType: "SINK" });

    const res = await request(app).put(`/api/fixtures/${created.body.id}`).send({ brand: "Kohler" });

    expect(res.status).toBe(200);
    expect(res.body.brand).toBe("Kohler");
  });

  it("deletes a fixture", async () => {
    const created = await request(app).post("/api/fixtures").send({ propertyId: property.id, fixtureType: "SINK" });

    const res = await request(app).delete(`/api/fixtures/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.fixture.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's fixture", async () => {
    const otherProperty = await createOtherUsersProperty();
    const otherFixture = await prisma.fixture.create({
      data: {
        propertyId: otherProperty.id,
        entityId: otherProperty.entityId,
        userId: otherProperty.userId,
        fixtureType: "SINK",
      },
    });

    const res = await request(app).put(`/api/fixtures/${otherFixture.id}`).send({ brand: "Hacked" });

    expect(res.status).toBe(404);
  });

  it("replaces a fixture, carrying over fixtureType (required) along with location", async () => {
    const original = await request(app).post("/api/fixtures").send({
      propertyId: property.id,
      fixtureType: "TOILET",
      location: "Master Bathroom",
      brand: "Kohler",
    });

    const res = await request(app).post(`/api/fixtures/${original.body.id}/replace`);

    expect(res.status).toBe(201);
    expect(res.body.fixtureType).toBe("TOILET");
    expect(res.body.location).toBe("Master Bathroom");
    expect(res.body.brand).toBeNull();

    const oldRow = await prisma.fixture.findUnique({ where: { id: original.body.id } });
    expect(oldRow.active).toBe(false);
  });
});
