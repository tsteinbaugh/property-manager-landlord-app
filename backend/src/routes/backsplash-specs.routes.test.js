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
  await prisma.backsplashSpec.deleteMany();
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

describe("backsplash specs routes", () => {
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

    const res = await request(app).get("/api/backsplash-specs").query({ propertyId: property.id });

    expect(res.status).toBe(401);
  });

  it("creates a backsplash spec", async () => {
    const res = await request(app).post("/api/backsplash-specs").send({
      propertyId: property.id,
      location: "Kitchen",
      material: "Subway tile",
      spareTilesOnHand: 5,
    });

    expect(res.status).toBe(201);
    expect(res.body.material).toBe("Subway tile");
  });

  it("rejects a backsplash spec for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).post("/api/backsplash-specs").send({ propertyId: otherProperty.id });

    expect(res.status).toBe(400);
  });

  it("lists backsplash specs for a property", async () => {
    await request(app).post("/api/backsplash-specs").send({ propertyId: property.id, location: "Kitchen" });

    const res = await request(app).get("/api/backsplash-specs").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("404s listing specs for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).get("/api/backsplash-specs").query({ propertyId: otherProperty.id });

    expect(res.status).toBe(404);
  });

  it("updates a backsplash spec", async () => {
    const created = await request(app).post("/api/backsplash-specs").send({ propertyId: property.id, location: "Kitchen" });

    const res = await request(app).put(`/api/backsplash-specs/${created.body.id}`).send({ groutColor: "Charcoal" });

    expect(res.status).toBe(200);
    expect(res.body.groutColor).toBe("Charcoal");
  });

  it("deletes a backsplash spec", async () => {
    const created = await request(app).post("/api/backsplash-specs").send({ propertyId: property.id, location: "Kitchen" });

    const res = await request(app).delete(`/api/backsplash-specs/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.backsplashSpec.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's backsplash spec", async () => {
    const otherProperty = await createOtherUsersProperty();
    const otherSpec = await prisma.backsplashSpec.create({
      data: { propertyId: otherProperty.id, entityId: otherProperty.entityId, userId: otherProperty.userId },
    });

    const res = await request(app).put(`/api/backsplash-specs/${otherSpec.id}`).send({ material: "Hacked" });

    expect(res.status).toBe(404);
  });
});
