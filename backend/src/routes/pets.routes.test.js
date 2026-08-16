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
  await prisma.occupant.deleteMany();
  await prisma.pet.deleteMany();
  await prisma.vehicle.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

async function createOtherUsersLease() {
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
  const otherLease = await prisma.lease.create({
    data: {
      propertyId: otherProperty.id,
      userId: otherUser.id,
      startDate: new Date("2026-09-01"),
      monthlyRent: "1500.00",
    },
  });
  return otherLease;
}

describe("pets routes", () => {
  let lease;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    const user = await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
    const entity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Steinbaugh Estates LLC", entityType: "LLC" },
    });
    const property = await prisma.property.create({
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
        petPolicy: true,
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/pets").query({ leaseId: lease.id });

    expect(res.status).toBe(401);
  });

  it("creates a pet on a lease", async () => {
    const res = await request(app).post("/api/pets").send({
      leaseId: lease.id,
      type: "Dog",
      breed: "Labrador",
      name: "Biscuit",
      license: "K9-1234",
      age: 3,
    });

    expect(res.status).toBe(201);
    expect(res.body.type).toBe("Dog");
    expect(res.body.breed).toBe("Labrador");
    expect(res.body.name).toBe("Biscuit");
  });

  it("rejects a pet missing a type", async () => {
    const res = await request(app).post("/api/pets").send({ leaseId: lease.id, name: "Biscuit" });

    expect(res.status).toBe(400);
  });

  it("rejects a pet on a lease owned by another user", async () => {
    const otherLease = await createOtherUsersLease();

    const res = await request(app).post("/api/pets").send({ leaseId: otherLease.id, type: "Cat" });

    expect(res.status).toBe(400);
  });

  it("lists pets for a lease", async () => {
    await request(app).post("/api/pets").send({ leaseId: lease.id, type: "Cat" });

    const res = await request(app).get("/api/pets").query({ leaseId: lease.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("updates a pet", async () => {
    const created = await request(app).post("/api/pets").send({ leaseId: lease.id, type: "Cat" });

    const res = await request(app).put(`/api/pets/${created.body.id}`).send({ name: "Whiskers" });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Whiskers");
  });

  it("deletes a pet", async () => {
    const created = await request(app).post("/api/pets").send({ leaseId: lease.id, type: "Cat" });

    const res = await request(app).delete(`/api/pets/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.pet.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's pet", async () => {
    const otherLease = await createOtherUsersLease();
    const otherPet = await prisma.pet.create({ data: { leaseId: otherLease.id, type: "Cat" } });

    const res = await request(app).put(`/api/pets/${otherPet.id}`).send({ type: "Dog" });

    expect(res.status).toBe(404);
  });
});
