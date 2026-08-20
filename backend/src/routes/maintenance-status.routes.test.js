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
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

describe("maintenance status rollup", () => {
  let user;
  let property;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    user = await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
    const entity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Steinbaugh Estates LLC", entityType: "LLC" },
    });
    property = await prisma.property.create({
      data: { entityId: entity.id, userId: user.id, address1: "123 Maple St", city: "Frederick", state: "CO", zip: "80530" },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("returns OK with zero counts for a property with no maintenance records", async () => {
    const res = await request(app).get("/api/maintenance-status");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toEqual({
      propertyId: property.id,
      openRequestsCount: 0,
      overdueSchedulesCount: 0,
      status: "OK",
    });
  });

  it("flags an overdue preventive schedule, outranking an open request", async () => {
    await prisma.maintenanceRequest.create({
      data: {
        userId: user.id,
        entityId: property.entityId,
        propertyId: property.id,
        title: "Leaking faucet",
        status: "OPEN",
      },
    });
    await prisma.maintenanceSchedule.create({
      data: {
        userId: user.id,
        entityId: property.entityId,
        propertyId: property.id,
        title: "Furnace filter",
        intervalDays: 90,
        nextDueDate: new Date("2000-01-01"),
      },
    });

    const res = await request(app).get("/api/maintenance-status");

    expect(res.status).toBe(200);
    expect(res.body[0]).toMatchObject({
      propertyId: property.id,
      openRequestsCount: 1,
      overdueSchedulesCount: 1,
      status: "OVERDUE",
    });
  });

  it("flags an open request when nothing is overdue", async () => {
    await prisma.maintenanceRequest.create({
      data: {
        userId: user.id,
        entityId: property.entityId,
        propertyId: property.id,
        title: "Leaking faucet",
        status: "IN_PROGRESS",
      },
    });

    const res = await request(app).get("/api/maintenance-status");

    expect(res.status).toBe(200);
    expect(res.body[0]).toMatchObject({ openRequestsCount: 1, overdueSchedulesCount: 0, status: "OPEN" });
  });

  it("does not count a closed request as open", async () => {
    await prisma.maintenanceRequest.create({
      data: {
        userId: user.id,
        entityId: property.entityId,
        propertyId: property.id,
        title: "Leaking faucet",
        status: "CLOSED",
      },
    });

    const res = await request(app).get("/api/maintenance-status");

    expect(res.status).toBe(200);
    expect(res.body[0]).toMatchObject({ openRequestsCount: 0, status: "OK" });
  });

  it("only returns rollups for the current user's own properties", async () => {
    const otherUser = await prisma.user.create({ data: { clerkId: "clerk_other_user", email: "other@example.com" } });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });
    const otherProperty = await prisma.property.create({
      data: { entityId: otherEntity.id, userId: otherUser.id, address1: "456 Oak St", city: "Frederick", state: "CO", zip: "80530" },
    });
    await prisma.maintenanceRequest.create({
      data: {
        userId: otherUser.id,
        entityId: otherEntity.id,
        propertyId: otherProperty.id,
        title: "Not yours",
        status: "OPEN",
      },
    });

    const res = await request(app).get("/api/maintenance-status");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].propertyId).toBe(property.id);
  });
});
