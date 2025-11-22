// backend/src/routes/leases.routes.test.js
const request = require("supertest");
const { app, prisma } = require("../server.js");
const { Role, UserStatus } = require("@prisma/client");
const fs = require("fs");
const path = require("path");

// --- helpers -------------------------------------------------------------

async function seedProperty(overrides = {}) {
  return prisma.property.create({
    data: {
      name: "Lease Test Property",
      address1: "123 Lease St",
      city: "Leaseville",
      state: "CO",
      postalCode: "80000",
      ...overrides,
    },
  });
}

async function seedUser(overrides = {}) {
  return prisma.user.create({
    data: {
      email: overrides.email || "landlord@example.com",
      passwordHash: overrides.passwordHash || "hashed-password",
      // Your schema uses baseRole, not role
      baseRole: overrides.baseRole || Role.SYSADMIN,
      // Assuming you *do* have a status field enum; if not, we’ll see an error and remove this
      status: overrides.status || UserStatus.ACTIVE,
      // Give it a name for sanity
      name: overrides.name || "Test Landlord",
    },
  });
}

async function seedTenant(overrides = {}) {
  return prisma.tenant.create({
    data: {
      name: overrides.name || "Lease Tenant",
      email: overrides.email || "tenant@example.com",
      phone: overrides.phone || "555-123-4567",
    },
  });
}

// --- tests ---------------------------------------------------------------

describe("Leases routes", () => {
  it("returns 400 if lease file is missing", async () => {
    const res = await request(app)
      .post("/api/leases")
      .field("tenantId", "some-tenant-id"); // arbitrary, we fail before tenant check

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/lease file is required/i);
  });

  it("returns 400 if no properties exist to attach a lease", async () => {
    // DB is empty at test start due to truncate in setup
    const res = await request(app)
      .post("/api/leases")
      .field("tenantId", "some-tenant-id")
      .attach("file", Buffer.from("dummy lease content"), "lease.pdf");

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/no properties exist/i);
  });

  it("returns 400 if no landlord user exists to attach a lease", async () => {
    // Seed a property but no users
    const property = await seedProperty();

    const res = await request(app)
      .post("/api/leases")
      .field("tenantId", "some-tenant-id")
      .attach("file", Buffer.from("dummy lease content"), "lease.pdf");

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/no landlord user exists/i);
  });

  it("returns 400 when tenantId is missing", async () => {
    await seedProperty();
    await seedUser();

    const res = await request(app)
      .post("/api/leases")
      // no tenantId
      .attach("file", Buffer.from("dummy lease content"), "lease.pdf");

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/tenantid is required/i);
  });

  it("returns 400 when tenantId is invalid", async () => {
    await seedProperty();
    await seedUser();

    const res = await request(app)
      .post("/api/leases")
      .field("tenantId", "nonexistent-tenant-id")
      .attach("file", Buffer.from("dummy lease content"), "lease.pdf");

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/invalid tenantid/i);
  });

  it("creates a lease successfully with auto-resolved property and landlord", async () => {
    const property = await seedProperty();
    const user = await seedUser();
    const tenant = await seedTenant();

    const startDate = "2025-01-01";
    const endDate = "2025-12-31";

    const res = await request(app)
      .post("/api/leases")
      .field("tenantId", tenant.id)
      .field("tenantName", "Shown Tenant Name")
      .field("propertyLabel", "Nice House")
      .field("rentAmount", "1500")
      .field("startDate", startDate)
      .field("endDate", endDate)
      .attach("file", Buffer.from("dummy lease content"), "lease.pdf");

    expect(res.status, res.text).toBe(201);
    expect(res.body).toBeDefined();
    expect(res.body.id).toBeDefined();

    const leaseId = res.body.id;

    // Verify persisted lease via Prisma
    const dbLease = await prisma.lease.findUnique({
      where: { id: leaseId },
    });

    expect(dbLease).not.toBeNull();
    expect(dbLease.propertyId).toBe(property.id);
    expect(dbLease.landlordId).toBe(user.id);
    expect(dbLease.tenantId).toBe(tenant.id);

    expect(dbLease.rentAmount).toBe(1500);
    expect(dbLease.status).toBe("ACTIVE");
    expect(dbLease.tenantName).toBe("Shown Tenant Name");
    expect(dbLease.propertyLabel).toBe("Nice House");

    expect(dbLease.startDate.toISOString().slice(0, 10)).toBe(startDate);
    expect(dbLease.endDate.toISOString().slice(0, 10)).toBe(endDate);

    expect(dbLease.fileUrl).toMatch(/^\/uploads\/leases\//);
    expect(dbLease.fileOriginalName).toBe("lease.pdf");
    expect(dbLease.fileMimeType).toBe("application/pdf");
    expect(dbLease.fileSize).toBeGreaterThan(0);
  });

  it("lists leases via GET /api/leases", async () => {
    // Seed dependencies and create a lease via API
    const property = await seedProperty();
    await seedUser();
    const tenant = await seedTenant();

    const createRes = await request(app)
      .post("/api/leases")
      .field("tenantId", tenant.id)
      .field("rentAmount", "2000")
      .attach("file", Buffer.from("lease file"), "lease2.pdf");

    expect(createRes.status, createRes.text).toBe(201);
    const leaseId = createRes.body.id;

    const listRes = await request(app).get("/api/leases");

    expect(listRes.status, listRes.text).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);

    const found = listRes.body.find((l) => l.id === leaseId);
    expect(found).toBeDefined();
    // shapeLease likely preserves status & rentAmount
    expect(found.status).toBe("ACTIVE");
    expect(found.rentAmount).toBe(2000);
  });

  it("returns 404 when updating a non-existent lease", async () => {
    const res = await request(app)
      .patch("/api/leases/nonexistent-id")
      .send({
        rentAmount: "1500",
      });

    expect(res.status, res.text).toBe(404);
    expect(res.body.error).toMatch(/lease not found/i);
  });

  it("returns 400 when rentAmount is not a number on update", async () => {
    const property = await seedProperty();
    const user = await seedUser();
    const tenant = await seedTenant();

    // Create a lease via API
    const createRes = await request(app)
      .post("/api/leases")
      .field("tenantId", tenant.id)
      .field("rentAmount", "1500")
      .attach("file", Buffer.from("lease file"), "lease3.pdf");

    expect(createRes.status, createRes.text).toBe(201);
    const leaseId = createRes.body.id;

    // Try to update with invalid rent
    const updateRes = await request(app)
      .patch(`/api/leases/${leaseId}`)
      .send({
        rentAmount: "not-a-number",
      });

    expect(updateRes.status, updateRes.text).toBe(400);
    expect(updateRes.body.error).toMatch(/rentamount must be a number/i);
  });

  it("updates lease fields (rent, dates) via PATCH /api/leases/:id", async () => {
    const property = await seedProperty();
    await seedUser();
    const tenant = await seedTenant();

    const createRes = await request(app)
      .post("/api/leases")
      .field("tenantId", tenant.id)
      .field("rentAmount", "1500")
      .field("startDate", "2025-01-01")
      .field("endDate", "2025-12-31")
      .attach("file", Buffer.from("lease file"), "lease4.pdf");

    expect(createRes.status, createRes.text).toBe(201);
    const leaseId = createRes.body.id;

    const newStart = "2026-01-01";
    const newEnd = "2026-12-31";

    const updateRes = await request(app)
      .patch(`/api/leases/${leaseId}`)
      .send({
        rentAmount: "1800",
        startDate: newStart,
        endDate: newEnd,
        tenantName: "Updated Tenant Label",
        propertyLabel: "Updated Property Label",
      });

    expect(updateRes.status, updateRes.text).toBe(200);

    const dbLease = await prisma.lease.findUnique({ where: { id: leaseId } });
    expect(dbLease.rentAmount).toBe(1800);
    expect(dbLease.tenantName).toBe("Updated Tenant Label");
    expect(dbLease.propertyLabel).toBe("Updated Property Label");
    expect(dbLease.startDate.toISOString().slice(0, 10)).toBe(newStart);
    expect(dbLease.endDate.toISOString().slice(0, 10)).toBe(newEnd);
  });

  it("toggles lease status via PATCH /api/leases/:id/archive", async () => {
    const property = await seedProperty();
    await seedUser();
    const tenant = await seedTenant();

    const createRes = await request(app)
      .post("/api/leases")
      .field("tenantId", tenant.id)
      .field("rentAmount", "1500")
      .attach("file", Buffer.from("lease file"), "lease5.pdf");

    expect(createRes.status, createRes.text).toBe(201);
    const leaseId = createRes.body.id;

    const firstToggle = await request(app).patch(
      `/api/leases/${leaseId}/archive`
    );
    expect(firstToggle.status, firstToggle.text).toBe(200);

    let dbLease = await prisma.lease.findUnique({ where: { id: leaseId } });
    expect(dbLease.status).toBe("ARCHIVED");

    const secondToggle = await request(app).patch(
      `/api/leases/${leaseId}/archive`
    );
    expect(secondToggle.status, secondToggle.text).toBe(200);

    dbLease = await prisma.lease.findUnique({ where: { id: leaseId } });
    expect(dbLease.status).toBe("ACTIVE");
  });
});

afterAll(async () => {
  // Remove lease uploads created during test runs
  const leasesDir = path.join(__dirname, "..", "..", "uploads", "leases");

  try {
    const files = fs.readdirSync(leasesDir);
    for (const file of files) {
      fs.unlinkSync(path.join(leasesDir, file));
    }
  } catch (err) {
    console.warn("Warning: Failed to clean lease uploads:", err.message);
  }
});