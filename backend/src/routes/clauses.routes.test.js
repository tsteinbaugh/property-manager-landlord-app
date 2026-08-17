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
  await prisma.leaseClause.deleteMany();
  await prisma.clause.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

describe("clauses routes", () => {
  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await resetDatabase();

    await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/clauses");

    expect(res.status).toBe(401);
  });

  it("creates a clause", async () => {
    const res = await request(app).post("/api/clauses").send({
      title: "Late Fees",
      bodyText: "Rent not received within the grace period incurs a late fee.",
      sectionNumber: "2",
      category: "Rent",
    });

    expect(res.status).toBe(201);
    expect(res.body.title).toBe("Late Fees");
    expect(res.body.isEarlyTermination).toBe(false);
  });

  it("rejects a clause missing required fields", async () => {
    const res = await request(app).post("/api/clauses").send({ title: "No body text" });

    expect(res.status).toBe(400);
  });

  it("lists only the current user's clauses", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    await prisma.clause.create({ data: { userId: otherUser.id, title: "Not mine", bodyText: "..." } });
    await request(app).post("/api/clauses").send({ title: "Mine", bodyText: "..." });

    const res = await request(app).get("/api/clauses");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].title).toBe("Mine");
  });

  it("404s for another user's clause", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherClause = await prisma.clause.create({
      data: { userId: otherUser.id, title: "Not mine", bodyText: "..." },
    });

    const res = await request(app).get(`/api/clauses/${otherClause.id}`);

    expect(res.status).toBe(404);
  });

  it("updates a clause", async () => {
    const created = await request(app).post("/api/clauses").send({ title: "Pets", bodyText: "No pets." });

    const res = await request(app)
      .put(`/api/clauses/${created.body.id}`)
      .send({ bodyText: "Pets allowed with written consent.", isEarlyTermination: true });

    expect(res.status).toBe(200);
    expect(res.body.bodyText).toBe("Pets allowed with written consent.");
    expect(res.body.isEarlyTermination).toBe(true);
  });

  it("deletes a clause", async () => {
    const created = await request(app).post("/api/clauses").send({ title: "Pets", bodyText: "No pets." });

    const res = await request(app).delete(`/api/clauses/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.clause.findUnique({ where: { id: created.body.id } });
    expect(check).toBeNull();
  });
});
