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

describe("vendors routes", () => {
  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    await prisma.user.create({
      data: {
        clerkId: "clerk_test_user_1",
        email: "landlord@example.com",
        name: "Taylor",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/vendors");

    expect(res.status).toBe(401);
  });

  it("creates a vendor", async () => {
    const res = await request(app).post("/api/vendors").send({
      name: "Frederick Plumbing Co.",
      trade: "plumber",
      phone: "555-0110",
      preferred: true,
    });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Frederick Plumbing Co.");
    expect(res.body.trade).toBe("plumber");
    expect(res.body.preferred).toBe(true);
  });

  it("rejects a vendor missing required fields", async () => {
    const res = await request(app).post("/api/vendors").send({ trade: "plumber" });

    expect(res.status).toBe(400);
  });

  it("lists only the current user's vendors", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    await prisma.vendor.create({ data: { userId: otherUser.id, name: "Not Mine" } });
    await request(app).post("/api/vendors").send({ name: "Frederick Plumbing Co." });

    const res = await request(app).get("/api/vendors");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe("Frederick Plumbing Co.");
  });

  it("gets a single vendor by id", async () => {
    const created = await request(app).post("/api/vendors").send({ name: "Frederick Plumbing Co." });

    const res = await request(app).get(`/api/vendors/${created.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.body.id);
  });

  it("404s for another user's vendor", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherVendor = await prisma.vendor.create({
      data: { userId: otherUser.id, name: "Not Mine" },
    });

    const res = await request(app).get(`/api/vendors/${otherVendor.id}`);

    expect(res.status).toBe(404);
  });

  it("updates a vendor", async () => {
    const created = await request(app).post("/api/vendors").send({ name: "Frederick Plumbing Co." });

    const res = await request(app)
      .put(`/api/vendors/${created.body.id}`)
      .send({ preferred: true, notes: "Fast response time" });

    expect(res.status).toBe(200);
    expect(res.body.preferred).toBe(true);
    expect(res.body.notes).toBe("Fast response time");
  });

  it("deletes a vendor", async () => {
    const created = await request(app).post("/api/vendors").send({ name: "Frederick Plumbing Co." });

    const res = await request(app).delete(`/api/vendors/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.vendor.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });
});
