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

describe("vehicles routes", () => {
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
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/vehicles").query({ leaseId: lease.id });

    expect(res.status).toBe(401);
  });

  it("creates a vehicle with the full field set", async () => {
    const res = await request(app).post("/api/vehicles").send({
      leaseId: lease.id,
      make: "Honda",
      model: "Civic",
      year: 2022,
      color: "Blue",
      licensePlate: "ABC-1234",
      state: "CO",
      vin: "1HGCM82633A123456",
      parkingSpot: "12B",
    });

    expect(res.status).toBe(201);
    expect(res.body.make).toBe("Honda");
    expect(res.body.vin).toBe("1HGCM82633A123456");
    expect(res.body.parkingSpot).toBe("12B");
  });

  it("allows creating a vehicle with only leaseId (all detail fields optional)", async () => {
    const res = await request(app).post("/api/vehicles").send({ leaseId: lease.id });

    expect(res.status).toBe(201);
  });

  it("rejects a vehicle on a lease owned by another user", async () => {
    const otherLease = await createOtherUsersLease();

    const res = await request(app).post("/api/vehicles").send({ leaseId: otherLease.id, make: "Toyota" });

    expect(res.status).toBe(400);
  });

  it("lists vehicles for a lease", async () => {
    await request(app).post("/api/vehicles").send({ leaseId: lease.id, make: "Honda" });

    const res = await request(app).get("/api/vehicles").query({ leaseId: lease.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("updates a vehicle", async () => {
    const created = await request(app).post("/api/vehicles").send({ leaseId: lease.id, make: "Honda" });

    const res = await request(app).put(`/api/vehicles/${created.body.id}`).send({ parkingSpot: "7A" });

    expect(res.status).toBe(200);
    expect(res.body.parkingSpot).toBe("7A");
  });

  it("deletes a vehicle", async () => {
    const created = await request(app).post("/api/vehicles").send({ leaseId: lease.id, make: "Honda" });

    const res = await request(app).delete(`/api/vehicles/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.vehicle.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's vehicle", async () => {
    const otherLease = await createOtherUsersLease();
    const otherVehicle = await prisma.vehicle.create({ data: { leaseId: otherLease.id, make: "Toyota" } });

    const res = await request(app).put(`/api/vehicles/${otherVehicle.id}`).send({ make: "Hacked" });

    expect(res.status).toBe(404);
  });
});
