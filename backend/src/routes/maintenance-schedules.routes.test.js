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

async function createOtherUsersProperty() {
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
  return { otherUser, otherProperty };
}

describe("maintenance schedules routes", () => {
  let user;
  let entity;
  let property;
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
    vendor = await prisma.vendor.create({
      data: { userId: user.id, name: "Frederick Landscaping", trade: "landscaping" },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/maintenance-schedules");

    expect(res.status).toBe(401);
  });

  it("creates a schedule under an owned property, deriving entityId server-side", async () => {
    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      vendorId: vendor.id,
      title: "Landscaping service",
      intervalDays: 30,
    });

    expect(res.status).toBe(201);
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.vendorId).toBe(vendor.id);
    expect(res.body.overdue).toBe(false);
  });

  it("computes nextDueDate from lastDoneDate + intervalDays when nextDueDate isn't given", async () => {
    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "HVAC filter change",
      intervalDays: 90,
      lastDoneDate: "2026-08-01",
    });

    expect(res.status).toBe(201);
    expect(new Date(res.body.nextDueDate).toISOString().slice(0, 10)).toBe("2026-10-30");
  });

  it("rejects a schedule missing required fields", async () => {
    const res = await request(app).post("/api/maintenance-schedules").send({ propertyId: property.id });

    expect(res.status).toBe(400);
  });

  it("rejects a schedule under a property owned by another user", async () => {
    const { otherProperty } = await createOtherUsersProperty();

    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: otherProperty.id,
      title: "Gutter cleaning",
      intervalDays: 180,
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

    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "Gutter cleaning",
      intervalDays: 180,
      vendorId: otherVendor.id,
    });

    expect(res.status).toBe(400);
  });

  it("links to a Property Specs item (any of the 7 categories) owned by the same user and property", async () => {
    const fixture = await prisma.fixture.create({
      data: { propertyId: property.id, entityId: entity.id, userId: user.id, fixtureType: "TOILET" },
    });

    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "Check toilet seal",
      intervalDays: 365,
      fixtureId: fixture.id,
    });

    expect(res.status).toBe(201);
    expect(res.body.fixtureId).toBe(fixture.id);
  });

  it("rejects a spec link for an item on another user's property", async () => {
    const { otherProperty } = await createOtherUsersProperty();
    const otherFixture = await prisma.fixture.create({
      data: {
        propertyId: otherProperty.id,
        entityId: otherProperty.entityId,
        userId: otherProperty.userId,
        fixtureType: "SINK",
      },
    });

    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "Check sink",
      intervalDays: 365,
      fixtureId: otherFixture.id,
    });

    expect(res.status).toBe(400);
  });

  it("flags overdue: true when nextDueDate is in the past, and filters by ?overdue=true", async () => {
    await prisma.maintenanceSchedule.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        title: "Smoke detector batteries",
        intervalDays: 365,
        nextDueDate: new Date("2020-01-01"),
      },
    });
    await prisma.maintenanceSchedule.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        title: "HVAC filter change",
        intervalDays: 90,
        nextDueDate: new Date("2099-01-01"),
      },
    });

    const res = await request(app)
      .get("/api/maintenance-schedules")
      .query({ propertyId: property.id, overdue: "true" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].title).toBe("Smoke detector batteries");
    expect(res.body[0].overdue).toBe(true);
  });

  it("gets a single schedule by id", async () => {
    const created = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "Gutter cleaning",
      intervalDays: 180,
    });

    const res = await request(app).get(`/api/maintenance-schedules/${created.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.body.id);
  });

  it("404s for another user's schedule", async () => {
    const { otherUser, otherProperty } = await createOtherUsersProperty();
    const otherSchedule = await prisma.maintenanceSchedule.create({
      data: {
        userId: otherUser.id,
        entityId: otherProperty.entityId,
        propertyId: otherProperty.id,
        title: "Not mine",
        intervalDays: 30,
      },
    });

    const res = await request(app).get(`/api/maintenance-schedules/${otherSchedule.id}`);

    expect(res.status).toBe(404);
  });

  it("updates a schedule", async () => {
    const created = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "Gutter cleaning",
      intervalDays: 180,
    });

    const res = await request(app)
      .put(`/api/maintenance-schedules/${created.body.id}`)
      .send({ notes: "Front and back gutters" });

    expect(res.status).toBe(200);
    expect(res.body.notes).toBe("Front and back gutters");
  });

  it("deletes a schedule", async () => {
    const created = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "Gutter cleaning",
      intervalDays: 180,
    });

    const res = await request(app).delete(`/api/maintenance-schedules/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.maintenanceSchedule.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  describe("mark-done", () => {
    it("advances lastDoneDate and nextDueDate by intervalDays", async () => {
      const created = await request(app).post("/api/maintenance-schedules").send({
        propertyId: property.id,
        title: "HVAC filter change",
        intervalDays: 90,
      });

      const res = await request(app)
        .post(`/api/maintenance-schedules/${created.body.id}/mark-done`)
        .send({ doneDate: "2026-09-01" });

      expect(res.status).toBe(200);
      expect(new Date(res.body.lastDoneDate).toISOString().slice(0, 10)).toBe("2026-09-01");
      expect(new Date(res.body.nextDueDate).toISOString().slice(0, 10)).toBe("2026-11-30");
      expect(res.body.overdue).toBe(false);
    });

    it("404s for another user's schedule", async () => {
      const { otherUser, otherProperty } = await createOtherUsersProperty();
      const otherSchedule = await prisma.maintenanceSchedule.create({
        data: {
          userId: otherUser.id,
          entityId: otherProperty.entityId,
          propertyId: otherProperty.id,
          title: "Not mine",
          intervalDays: 30,
        },
      });

      const res = await request(app).post(`/api/maintenance-schedules/${otherSchedule.id}/mark-done`);

      expect(res.status).toBe(404);
    });

    it("records a completion each time it's marked done, oldest and newest both kept", async () => {
      const created = await request(app).post("/api/maintenance-schedules").send({
        propertyId: property.id,
        title: "HVAC filter change",
        intervalDays: 90,
      });

      await request(app)
        .post(`/api/maintenance-schedules/${created.body.id}/mark-done`)
        .send({ doneDate: "2026-06-01" });
      const res = await request(app)
        .post(`/api/maintenance-schedules/${created.body.id}/mark-done`)
        .send({ doneDate: "2026-09-01" });

      expect(res.status).toBe(200);
      expect(res.body.completions).toHaveLength(2);
      const dates = res.body.completions.map((c) => c.completedDate.slice(0, 10));
      expect(dates).toContain("2026-06-01");
      expect(dates).toContain("2026-09-01");
    });
  });

  it("records an initial completion when created with a lastDoneDate", async () => {
    const res = await request(app).post("/api/maintenance-schedules").send({
      propertyId: property.id,
      title: "HVAC filter change",
      intervalDays: 90,
      lastDoneDate: "2026-06-01",
    });

    expect(res.status).toBe(201);
    expect(res.body.completions).toHaveLength(1);
    expect(res.body.completions[0].completedDate.slice(0, 10)).toBe("2026-06-01");
  });
});
