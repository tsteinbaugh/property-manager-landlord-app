const request = require("supertest");
const createApp = require("../app");
const prisma = require("../lib/prisma");
const { CLAUSE_GROUPS } = require("../lib/clauseGroups");

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

describe("clause groups route", () => {
  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await prisma.user.deleteMany();
    await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/clause-groups");

    expect(res.status).toBe(401);
  });

  it("returns the fixed ordered group list, ending with a catch-all", async () => {
    const res = await request(app).get("/api/clause-groups");

    expect(res.status).toBe(200);
    expect(res.body).toEqual(CLAUSE_GROUPS);
    expect(res.body[res.body.length - 1]).toBe("Other / Miscellaneous");
  });
});
