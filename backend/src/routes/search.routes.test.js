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
  await prisma.vendor.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

describe("search routes", () => {
  let user, entity, property, lease;

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

    const res = await request(app).get("/api/search").query({ q: "bob" });

    expect(res.status).toBe(401);
  });

  it("returns empty results for a query under 2 characters", async () => {
    const res = await request(app).get("/api/search").query({ q: "b" });

    expect(res.status).toBe(200);
    expect(res.body.results).toEqual([]);
  });

  it("finds a property by a typo'd substring (close enough)", async () => {
    const res = await request(app).get("/api/search").query({ q: "Mape" });

    expect(res.status).toBe(200);
    const hit = res.body.results.find((r) => r.type === "property" && r.id === property.id);
    expect(hit).toBeDefined();
    expect(hit.route).toBe(`/properties/${property.id}`);
  });

  it("finds a tenant by nickname (Bob finds Robert)", async () => {
    const tenant = await prisma.tenant.create({
      data: { userId: user.id, propertyId: property.id, firstName: "Robert", lastName: "Nguyen" },
    });

    const res = await request(app).get("/api/search").query({ q: "Bob" });

    expect(res.status).toBe(200);
    const hit = res.body.results.find((r) => r.type === "tenant" && r.id === tenant.id);
    expect(hit).toBeDefined();
    expect(hit.title).toBe("Robert Nguyen");
    expect(hit.route).toBe(`/tenants/${tenant.id}`);
  });

  it("finds a tenant by phonetic sound-alike (Shawn finds Sean)", async () => {
    const tenant = await prisma.tenant.create({
      data: { userId: user.id, propertyId: property.id, firstName: "Sean", lastName: "Walsh" },
    });

    const res = await request(app).get("/api/search").query({ q: "Shawn" });

    expect(res.status).toBe(200);
    const hit = res.body.results.find((r) => r.type === "tenant" && r.id === tenant.id);
    expect(hit).toBeDefined();
  });

  it("finds a pet and routes to its tenant's current lease", async () => {
    const petTenant = await prisma.tenant.create({
      data: {
        userId: user.id,
        propertyId: property.id,
        firstName: "Alex",
        lastName: "Rivera",
        applicationStatus: "APPROVED",
      },
    });
    await prisma.leaseTenant.create({ data: { leaseId: lease.id, tenantId: petTenant.id, role: "PRIMARY" } });
    const pet = await prisma.pet.create({
      data: { tenantId: petTenant.id, type: "dog", name: "Biscuit" },
    });

    const res = await request(app).get("/api/search").query({ q: "Biscuit" });

    expect(res.status).toBe(200);
    const hit = res.body.results.find((r) => r.type === "pet" && r.id === pet.id);
    expect(hit).toBeDefined();
    expect(hit.route).toBe(`/leases/${lease.id}`);
  });

  it("does not return another user's records", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });
    await prisma.property.create({
      data: {
        entityId: otherEntity.id,
        userId: otherUser.id,
        address1: "999 Maple Ave",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).get("/api/search").query({ q: "Maple" });

    expect(res.status).toBe(200);
    expect(res.body.results.every((r) => r.type !== "property" || r.id === property.id)).toBe(true);
  });
});
