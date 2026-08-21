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
  await prisma.appliance.deleteMany();
  await prisma.vendor.deleteMany();
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
  return prisma.property.create({
    data: {
      entityId: otherEntity.id,
      userId: otherUser.id,
      address1: "456 Oak St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    },
  });
}

function daysFromNow(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

describe("appliances routes", () => {
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
      data: {
        entityId: entity.id,
        userId: user.id,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/appliances").query({ propertyId: property.id });

    expect(res.status).toBe(401);
  });

  it("creates an appliance", async () => {
    const res = await request(app).post("/api/appliances").send({
      propertyId: property.id,
      location: "Basement",
      make: "Carrier",
      model: "58STA",
      filterSize: "16x25x1",
    });

    expect(res.status).toBe(201);
    expect(res.body.filterSize).toBe("16x25x1");
    expect(res.body.warrantyExpiringSoon).toBe(false);
  });

  it("rejects creating an appliance against an archived property — shared behavior across all 7 Property Specs categories via createPropertySpecRoutes.js", async () => {
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const res = await request(app).post("/api/appliances").send({ propertyId: property.id, make: "Carrier" });

    expect(res.status).toBe(400);
  });

  it("flags a warranty expiring within 90 days", async () => {
    const res = await request(app).post("/api/appliances").send({
      propertyId: property.id,
      make: "Carrier",
      warrantyExpiration: daysFromNow(30),
    });

    expect(res.status).toBe(201);
    expect(res.body.warrantyExpiringSoon).toBe(true);
  });

  it("does not flag a warranty already expired", async () => {
    const res = await request(app).post("/api/appliances").send({
      propertyId: property.id,
      make: "Carrier",
      warrantyExpiration: daysFromNow(-10),
    });

    expect(res.status).toBe(201);
    expect(res.body.warrantyExpiringSoon).toBe(false);
  });

  it("does not flag a warranty far in the future", async () => {
    const res = await request(app).post("/api/appliances").send({
      propertyId: property.id,
      make: "Carrier",
      warrantyExpiration: daysFromNow(400),
    });

    expect(res.status).toBe(201);
    expect(res.body.warrantyExpiringSoon).toBe(false);
  });

  it("links a preferred vendor owned by the current user", async () => {
    const vendor = await prisma.vendor.create({ data: { userId: property.userId, name: "Frederick HVAC" } });

    const res = await request(app).post("/api/appliances").send({
      propertyId: property.id,
      make: "Carrier",
      preferredVendorId: vendor.id,
    });

    expect(res.status).toBe(201);
    expect(res.body.preferredVendorId).toBe(vendor.id);
  });

  it("rejects a preferred vendor owned by another user", async () => {
    const otherUser = await prisma.user.create({ data: { clerkId: "clerk_other_vendor_user", email: "other2@example.com" } });
    const otherVendor = await prisma.vendor.create({ data: { userId: otherUser.id, name: "Not mine" } });

    const res = await request(app).post("/api/appliances").send({
      propertyId: property.id,
      make: "Carrier",
      preferredVendorId: otherVendor.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects an appliance for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).post("/api/appliances").send({ propertyId: otherProperty.id });

    expect(res.status).toBe(400);
  });

  it("lists appliances for a property", async () => {
    await request(app).post("/api/appliances").send({ propertyId: property.id, make: "Carrier" });

    const res = await request(app).get("/api/appliances").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("404s listing appliances for another user's property", async () => {
    const otherProperty = await createOtherUsersProperty();

    const res = await request(app).get("/api/appliances").query({ propertyId: otherProperty.id });

    expect(res.status).toBe(404);
  });

  it("updates an appliance", async () => {
    const created = await request(app).post("/api/appliances").send({ propertyId: property.id, make: "Carrier" });

    const res = await request(app).put(`/api/appliances/${created.body.id}`).send({ model: "58STA090" });

    expect(res.status).toBe(200);
    expect(res.body.model).toBe("58STA090");
  });

  it("deletes an appliance", async () => {
    const created = await request(app).post("/api/appliances").send({ propertyId: property.id, make: "Carrier" });

    const res = await request(app).delete(`/api/appliances/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.appliance.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("still allows deleting an appliance on an archived property — Property Specs use hard-delete plus their own retire/replace lifecycle, not the soft-delete used by Tenant/Lease/Income/Expense/Maintenance", async () => {
    const created = await request(app).post("/api/appliances").send({ propertyId: property.id, make: "Carrier" });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const res = await request(app).delete(`/api/appliances/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.appliance.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });

  it("404s updating another user's appliance", async () => {
    const otherProperty = await createOtherUsersProperty();
    const otherAppliance = await prisma.appliance.create({
      data: { propertyId: otherProperty.id, entityId: otherProperty.entityId, userId: otherProperty.userId },
    });

    const res = await request(app).put(`/api/appliances/${otherAppliance.id}`).send({ make: "Hacked" });

    expect(res.status).toBe(404);
  });
});
