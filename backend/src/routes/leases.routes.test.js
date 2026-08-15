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

describe("leases routes", () => {
  let property;
  let tenant;

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
    tenant = await prisma.tenant.create({
      data: { userId: user.id, propertyId: property.id, name: "Jamie Rivera" },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/leases");

    expect(res.status).toBe(401);
  });

  it("creates a lease under an owned property", async () => {
    const res = await request(app).post("/api/leases").send({
      propertyId: property.id,
      startDate: "2026-09-01",
      monthlyRent: "1800.00",
    });

    expect(res.status).toBe(201);
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.status).toBe("ACTIVE");
    expect(res.body.leaseTenants).toEqual([]);
  });

  it("rejects a lease missing required fields", async () => {
    const res = await request(app).post("/api/leases").send({
      propertyId: property.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects a lease under a property owned by another user", async () => {
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

    const res = await request(app).post("/api/leases").send({
      propertyId: otherProperty.id,
      startDate: "2026-09-01",
      monthlyRent: "1800.00",
    });

    expect(res.status).toBe(400);
  });

  it("lists leases, optionally filtered by property", async () => {
    await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).get("/api/leases").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single lease by id", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).get(`/api/leases/${lease.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(lease.id);
  });

  it("404s for another user's lease", async () => {
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
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).get(`/api/leases/${otherLease.id}`);
    expect(res.status).toBe(404);
  });

  it("updates a lease", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app)
      .put(`/api/leases/${lease.id}`)
      .send({ status: "TERMINATED", notes: "Tenant broke lease early" });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("TERMINATED");
    expect(res.body.notes).toBe("Tenant broke lease early");
  });

  it("deletes a lease", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).delete(`/api/leases/${lease.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.lease.findUnique({ where: { id: lease.id } });
    expect(check).toBeNull();
  });

  describe("attaching and detaching tenants", () => {
    let lease;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });
    });

    it("attaches a tenant with a role", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "PRIMARY" });

      expect(res.status).toBe(201);
      expect(res.body.leaseTenants).toHaveLength(1);
      expect(res.body.leaseTenants[0].role).toBe("PRIMARY");
      expect(res.body.leaseTenants[0].tenant.id).toBe(tenant.id);
    });

    it("rejects an invalid role", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "ROOMMATE" });

      expect(res.status).toBe(400);
    });

    it("rejects attaching a tenant owned by another user", async () => {
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
      const otherTenant = await prisma.tenant.create({
        data: { userId: otherUser.id, propertyId: otherProperty.id, name: "Not Mine" },
      });

      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: otherTenant.id, role: "PRIMARY" });

      expect(res.status).toBe(400);
    });

    it("rejects attaching the same tenant twice", async () => {
      await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "PRIMARY" });

      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "CO_TENANT" });

      expect(res.status).toBe(400);
    });

    it("detaches a tenant from a lease", async () => {
      await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "PRIMARY" });

      const res = await request(app).delete(`/api/leases/${lease.id}/tenants/${tenant.id}`);
      expect(res.status).toBe(204);

      const updated = await request(app).get(`/api/leases/${lease.id}`);
      expect(updated.body.leaseTenants).toEqual([]);
    });

    it("404s when detaching a tenant not on the lease", async () => {
      const res = await request(app).delete(`/api/leases/${lease.id}/tenants/${tenant.id}`);
      expect(res.status).toBe(404);
    });
  });
});
