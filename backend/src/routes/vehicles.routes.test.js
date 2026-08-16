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
  await prisma.leaseTenant.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

async function createOtherUsersTenant() {
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
  return prisma.tenant.create({
    data: { userId: otherUser.id, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
  });
}

describe("vehicles routes", () => {
  let tenant;

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
    tenant = await prisma.tenant.create({
      data: {
        userId: user.id,
        propertyId: property.id,
        firstName: "Robert",
        lastName: "Nguyen",
        applicationStatus: "APPROVED",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).post("/api/vehicles").send({ tenantId: tenant.id, make: "Honda" });

    expect(res.status).toBe(401);
  });

  it("creates a vehicle linked to a tenant", async () => {
    const res = await request(app).post("/api/vehicles").send({
      tenantId: tenant.id,
      make: "Honda",
      model: "Civic",
      licensePlate: "ABC123",
    });

    expect(res.status).toBe(201);
    expect(res.body.make).toBe("Honda");
    expect(res.body.tenant.id).toBe(tenant.id);
  });

  it("rejects a vehicle missing a tenantId", async () => {
    const res = await request(app).post("/api/vehicles").send({ make: "Honda" });

    expect(res.status).toBe(400);
  });

  it("rejects a vehicle linked to another user's tenant", async () => {
    const otherTenant = await createOtherUsersTenant();

    const res = await request(app).post("/api/vehicles").send({
      tenantId: otherTenant.id,
      make: "Toyota",
    });

    expect(res.status).toBe(400);
  });

  it("lists vehicles for a lease via its attached tenants", async () => {
    const property = await prisma.property.findFirst({ where: { userId: tenant.userId } });
    const lease = await prisma.lease.create({
      data: { propertyId: property.id, userId: tenant.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
    });
    await prisma.leaseTenant.create({ data: { leaseId: lease.id, tenantId: tenant.id, role: "PRIMARY" } });
    await request(app).post("/api/vehicles").send({ tenantId: tenant.id, make: "Honda" });

    const res = await request(app).get("/api/vehicles").query({ leaseId: lease.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("lists vehicles for a tenant directly (e.g. from the tenant's own page, pre-lease)", async () => {
    await request(app).post("/api/vehicles").send({ tenantId: tenant.id, make: "Honda" });

    const res = await request(app).get("/api/vehicles").query({ tenantId: tenant.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("404s listing vehicles for another user's tenant", async () => {
    const otherTenant = await createOtherUsersTenant();

    const res = await request(app).get("/api/vehicles").query({ tenantId: otherTenant.id });

    expect(res.status).toBe(404);
  });

  it("404s listing vehicles for another user's lease", async () => {
    const otherTenant = await createOtherUsersTenant();
    const otherProperty = await prisma.property.findUnique({ where: { id: otherTenant.propertyId } });
    const otherLease = await prisma.lease.create({
      data: {
        propertyId: otherProperty.id,
        userId: otherTenant.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1500.00",
      },
    });

    const res = await request(app).get("/api/vehicles").query({ leaseId: otherLease.id });

    expect(res.status).toBe(404);
  });

  it("updates a vehicle", async () => {
    const created = await request(app).post("/api/vehicles").send({ tenantId: tenant.id, make: "Honda" });

    const res = await request(app).put(`/api/vehicles/${created.body.id}`).send({ color: "Blue" });

    expect(res.status).toBe(200);
    expect(res.body.color).toBe("Blue");
  });

  it("deletes a vehicle", async () => {
    const created = await request(app).post("/api/vehicles").send({ tenantId: tenant.id, make: "Honda" });

    const res = await request(app).delete(`/api/vehicles/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.vehicle.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's vehicle", async () => {
    const otherTenant = await createOtherUsersTenant();
    const otherVehicle = await prisma.vehicle.create({
      data: { tenantId: otherTenant.id, make: "Toyota" },
    });

    const res = await request(app).put(`/api/vehicles/${otherVehicle.id}`).send({ make: "Hacked" });

    expect(res.status).toBe(404);
  });

  it("follows a tenant onto a new lease without recreating the vehicle", async () => {
    const property = await prisma.property.findFirst({ where: { userId: tenant.userId } });
    const oldLease = await prisma.lease.create({
      data: { propertyId: property.id, userId: tenant.userId, startDate: new Date("2026-01-01"), monthlyRent: "1500.00" },
    });
    await prisma.leaseTenant.create({ data: { leaseId: oldLease.id, tenantId: tenant.id, role: "PRIMARY" } });
    const created = await request(app).post("/api/vehicles").send({ tenantId: tenant.id, make: "Honda" });

    const newLease = await prisma.lease.create({
      data: { propertyId: property.id, userId: tenant.userId, startDate: new Date("2026-10-01"), monthlyRent: "1800.00" },
    });
    await prisma.leaseTenant.create({ data: { leaseId: newLease.id, tenantId: tenant.id, role: "PRIMARY" } });

    const res = await request(app).get("/api/vehicles").query({ leaseId: newLease.id });

    expect(res.status).toBe(200);
    expect(res.body.map((v) => v.id)).toContain(created.body.id);
  });
});
