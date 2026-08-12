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
  await prisma.leaseTenant.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

describe("tenants routes", () => {
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

    const res = await request(app).get("/api/tenants");

    expect(res.status).toBe(401);
  });

  it("creates a tenant scoped to the authenticated user", async () => {
    const res = await request(app).post("/api/tenants").send({
      name: "Jamie Rivera",
      phone: "555-0100",
      email: "jamie@example.com",
    });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe("Jamie Rivera");
    const user = await prisma.user.findUnique({
      where: { clerkId: "clerk_test_user_1" },
    });
    expect(res.body.userId).toBe(user.id);
  });

  it("rejects a tenant missing the required name field", async () => {
    const res = await request(app).post("/api/tenants").send({
      phone: "555-0100",
    });

    expect(res.status).toBe(400);
  });

  it("ignores unassignable fields like userId on create", async () => {
    const res = await request(app).post("/api/tenants").send({
      name: "Jamie Rivera",
      userId: "someone-elses-id",
    });

    expect(res.status).toBe(201);
    expect(res.body.userId).not.toBe("someone-elses-id");
  });

  it("lists only the current user's tenants", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    await prisma.tenant.create({
      data: { userId: otherUser.id, name: "Not Mine" },
    });
    await request(app).post("/api/tenants").send({ name: "Jamie Rivera" });

    const res = await request(app).get("/api/tenants");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].name).toBe("Jamie Rivera");
  });

  it("gets a single tenant by id", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera" });

    const res = await request(app).get(`/api/tenants/${created.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.body.id);
  });

  it("404s for another user's tenant", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherTenant = await prisma.tenant.create({
      data: { userId: otherUser.id, name: "Not Mine" },
    });

    const res = await request(app).get(`/api/tenants/${otherTenant.id}`);

    expect(res.status).toBe(404);
  });

  it("updates a tenant", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera" });

    const res = await request(app)
      .put(`/api/tenants/${created.body.id}`)
      .send({ idVerified: true, creditCheckStatus: "approved" });

    expect(res.status).toBe(200);
    expect(res.body.idVerified).toBe(true);
    expect(res.body.creditCheckStatus).toBe("approved");
  });

  it("deletes a tenant", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ name: "Jamie Rivera" });

    const res = await request(app).delete(`/api/tenants/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.tenant.findUnique({
      where: { id: created.body.id },
    });
    expect(check).toBeNull();
  });
});
