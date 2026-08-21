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
  await prisma.income.deleteMany();
  await prisma.leaseTenant.deleteMany();
  await prisma.lateFeeWaiver.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

describe("rent status rollup", () => {
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
      data: { entityId: entity.id, userId: user.id, address1: "123 Maple St", city: "Frederick", state: "CO", zip: "80530" },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("flags an overdue property", async () => {
    await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-01-31"),
        monthlyRent: "3000.00",
        lateFeeAmount: "150.00",
        lateFeeGraceDays: 5,
      },
    });

    const res = await request(app).get("/api/rent-status");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0]).toMatchObject({ propertyId: property.id, status: "OVERDUE" });
    expect(res.body[0].totalOwed).toBe(3150);
  });

  it("excludes a terminated lease", async () => {
    await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-01-31"),
        monthlyRent: "3000.00",
        status: "TERMINATED",
      },
    });

    const res = await request(app).get("/api/rent-status");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(0);
  });

  it("excludes an archived property, even with an overdue active lease", async () => {
    await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-01-31"),
        monthlyRent: "3000.00",
      },
    });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const res = await request(app).get("/api/rent-status");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(0);
  });

  it("only returns rollups for the current user's own properties", async () => {
    const otherUser = await prisma.user.create({ data: { clerkId: "clerk_other_user", email: "other@example.com" } });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });
    const otherProperty = await prisma.property.create({
      data: { entityId: otherEntity.id, userId: otherUser.id, address1: "456 Oak St", city: "Frederick", state: "CO", zip: "80530" },
    });
    await prisma.lease.create({
      data: { propertyId: otherProperty.id, userId: otherUser.id, startDate: new Date("2020-01-01"), monthlyRent: "1800.00" },
    });

    const res = await request(app).get("/api/rent-status");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(0);
  });
});
