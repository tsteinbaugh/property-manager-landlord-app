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
  await prisma.maintenanceStatusChange.deleteMany();
  await prisma.maintenanceRequest.deleteMany();
  await prisma.maintenanceSchedule.deleteMany();
  await prisma.paintSpec.deleteMany();
  await prisma.fixture.deleteMany();
  await prisma.vendor.deleteMany();
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

async function createOtherUsersPropertyAndTenant() {
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
    data: { userId: otherUser.id, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
  });
  return { otherUser, otherProperty, otherTenant };
}

describe("maintenance requests routes", () => {
  let user;
  let entity;
  let property;
  let tenant;
  let vendor;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    user = await prisma.user.create({
      data: {
        clerkId: "clerk_test_user_1",
        email: "landlord@example.com",
        name: "Taylor",
      },
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
    tenant = await prisma.tenant.create({
      data: { userId: user.id, propertyId: property.id, firstName: "Jamie", lastName: "Rivera" },
    });
    vendor = await prisma.vendor.create({
      data: { userId: user.id, name: "Frederick Plumbing Co.", trade: "plumber" },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/maintenance-requests");

    expect(res.status).toBe(401);
  });

  it("creates a request under an owned property, deriving entityId and logging an initial status change", async () => {
    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      tenantId: tenant.id,
      title: "Water coming out from under the sink",
      reportedBy: "Jamie Rivera",
    });

    expect(res.status).toBe(201);
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.status).toBe("OPEN");
    expect(res.body.statusChanges).toHaveLength(1);
    expect(res.body.statusChanges[0].fromStatus).toBeNull();
    expect(res.body.statusChanges[0].toStatus).toBe("OPEN");
  });

  it("rejects creating a request against an archived property", async () => {
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Water coming out from under the sink",
    });

    expect(res.status).toBe(400);
  });

  it("excludes requests of archived properties from the cross-property list, but not a property-scoped one", async () => {
    await request(app).post("/api/maintenance-requests").send({ propertyId: property.id, title: "Leaky faucet" });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const hubRes = await request(app).get("/api/maintenance-requests");
    expect(hubRes.body).toEqual([]);

    const scopedRes = await request(app).get("/api/maintenance-requests").query({ propertyId: property.id });
    expect(scopedRes.body).toHaveLength(1);
  });

  it("rejects a request missing required fields", async () => {
    const res = await request(app).post("/api/maintenance-requests").send({ propertyId: property.id });

    expect(res.status).toBe(400);
  });

  it("rejects an invalid status", async () => {
    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
      status: "DONE",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a request under a property owned by another user", async () => {
    const { otherProperty } = await createOtherUsersPropertyAndTenant();

    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: otherProperty.id,
      title: "Leak",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a tenant that does not belong to the given property", async () => {
    const { otherTenant } = await createOtherUsersPropertyAndTenant();

    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
      tenantId: otherTenant.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects a vendor owned by another user", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherVendor = await prisma.vendor.create({
      data: { userId: otherUser.id, name: "Not Mine" },
    });

    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
      vendorId: otherVendor.id,
    });

    expect(res.status).toBe(400);
  });

  it("links to a Property Specs item (any of the 7 categories) owned by the same user and property", async () => {
    const paintSpec = await prisma.paintSpec.create({
      data: { propertyId: property.id, entityId: entity.id, userId: user.id, location: "Hallway" },
    });

    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Touch up scuffed hallway paint",
      paintSpecId: paintSpec.id,
    });

    expect(res.status).toBe(201);
    expect(res.body.paintSpecId).toBe(paintSpec.id);
  });

  it("rejects a spec link for an item on another user's property", async () => {
    const { otherProperty } = await createOtherUsersPropertyAndTenant();
    const otherFixture = await prisma.fixture.create({
      data: {
        propertyId: otherProperty.id,
        entityId: otherProperty.entityId,
        userId: otherProperty.userId,
        fixtureType: "SINK",
      },
    });

    const res = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Fix sink",
      fixtureId: otherFixture.id,
    });

    expect(res.status).toBe(400);
  });

  it("lists requests, optionally filtered by property, tenant, vendor, and status", async () => {
    await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      tenantId: tenant.id,
      vendorId: vendor.id,
      title: "Leak",
    });

    const res = await request(app)
      .get("/api/maintenance-requests")
      .query({ propertyId: property.id, tenantId: tenant.id, vendorId: vendor.id, status: "OPEN" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single request by id", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
    });

    const res = await request(app).get(`/api/maintenance-requests/${created.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.body.id);
  });

  it("404s for another user's request", async () => {
    const { otherUser, otherProperty } = await createOtherUsersPropertyAndTenant();
    const otherRequest = await prisma.maintenanceRequest.create({
      data: {
        userId: otherUser.id,
        entityId: otherProperty.entityId,
        propertyId: otherProperty.id,
        title: "Not mine",
      },
    });

    const res = await request(app).get(`/api/maintenance-requests/${otherRequest.id}`);

    expect(res.status).toBe(404);
  });

  it("logs a status change on update when status actually changes, and leaves no log entry when it doesn't", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
    });

    const noopUpdate = await request(app)
      .put(`/api/maintenance-requests/${created.body.id}`)
      .send({ description: "Under the kitchen sink" });
    expect(noopUpdate.body.statusChanges).toHaveLength(1);

    const statusUpdate = await request(app)
      .put(`/api/maintenance-requests/${created.body.id}`)
      .send({ status: "IN_PROGRESS", vendorId: vendor.id });

    expect(statusUpdate.status).toBe(200);
    expect(statusUpdate.body.status).toBe("IN_PROGRESS");
    expect(statusUpdate.body.statusChanges).toHaveLength(2);
    expect(statusUpdate.body.statusChanges[1].fromStatus).toBe("OPEN");
    expect(statusUpdate.body.statusChanges[1].toStatus).toBe("IN_PROGRESS");

    const closedUpdate = await request(app)
      .put(`/api/maintenance-requests/${created.body.id}`)
      .send({ status: "CLOSED", actualCost: "180.00" });

    expect(closedUpdate.body.statusChanges).toHaveLength(3);
    expect(closedUpdate.body.actualCost).toBe("180");
  });

  it("rejects an invalid status on update", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
    });

    const res = await request(app)
      .put(`/api/maintenance-requests/${created.body.id}`)
      .send({ status: "DONE" });

    expect(res.status).toBe(400);
  });

  it("soft-deletes a request — the row (and its audit trail) survives, hidden from the default list", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
    });

    const res = await request(app).delete(`/api/maintenance-requests/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.maintenanceRequest.findUnique({ where: { id: created.body.id } });
    expect(check).not.toBeNull();
    expect(check.deleted).toBe(true);

    const statusChanges = await prisma.maintenanceStatusChange.findMany({
      where: { maintenanceRequestId: created.body.id },
    });
    expect(statusChanges.length).toBeGreaterThan(0);

    const listRes = await request(app).get("/api/maintenance-requests").query({ propertyId: property.id });
    expect(listRes.body).toEqual([]);
  });

  it("lists deleted requests with ?deleted=true, restores via POST /:id/restore", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
    });
    await request(app).delete(`/api/maintenance-requests/${created.body.id}`);

    const deletedOnly = await request(app).get("/api/maintenance-requests").query({ propertyId: property.id, deleted: "true" });
    expect(deletedOnly.body.map((r) => r.id)).toEqual([created.body.id]);

    const restoreRes = await request(app).post(`/api/maintenance-requests/${created.body.id}/restore`);
    expect(restoreRes.status).toBe(200);
    expect(restoreRes.body.deleted).toBe(false);
  });

  it("?deleted=all finds a request even when its property is archived", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({ propertyId: property.id, title: "Leak" });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const hubRes = await request(app).get("/api/maintenance-requests");
    expect(hubRes.body.map((r) => r.id)).not.toContain(created.body.id);

    const allRes = await request(app).get("/api/maintenance-requests").query({ deleted: "all" });
    expect(allRes.body.map((r) => r.id)).toContain(created.body.id);
  });

  it("records and updates notes", async () => {
    const created = await request(app).post("/api/maintenance-requests").send({
      propertyId: property.id,
      title: "Leak",
      notes: "Tenant says it's worse at night",
    });
    expect(created.body.notes).toBe("Tenant says it's worse at night");

    const res = await request(app)
      .put(`/api/maintenance-requests/${created.body.id}`)
      .send({ notes: "Plumber confirmed a slow drip, parts ordered" });

    expect(res.status).toBe(200);
    expect(res.body.notes).toBe("Plumber confirmed a slow drip, parts ordered");
  });
});
