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

describe("me routes", () => {
  let user;
  let defaultEntity;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    mockGetUser.mockResolvedValue({
      id: "clerk_test_user_1",
      primaryEmailAddressId: "email_1",
      emailAddresses: [{ id: "email_1", emailAddress: "landlord@example.com" }],
      firstName: "Taylor",
      lastName: null,
    });

    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();

    user = await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
    defaultEntity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Taylor", entityType: "PERSONAL", isDefault: true },
    });
  });

  afterAll(async () => {
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("syncs the local user name/email and the default entity's legalName from Clerk", async () => {
    mockGetUser.mockResolvedValue({
      id: "clerk_test_user_1",
      primaryEmailAddressId: "email_1",
      emailAddresses: [{ id: "email_1", emailAddress: "taylor.new@example.com" }],
      firstName: "Taylor",
      lastName: "Steinbaugh",
    });

    const res = await request(app).post("/api/me/sync-profile");

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Taylor Steinbaugh");
    expect(res.body.email).toBe("taylor.new@example.com");

    const entity = await prisma.entity.findUnique({ where: { id: defaultEntity.id } });
    expect(entity.legalName).toBe("Taylor Steinbaugh");
  });

  it("leaves non-default entities alone", async () => {
    const llc = await prisma.entity.create({
      data: { userId: user.id, legalName: "Steinbaugh Estates LLC", entityType: "LLC" },
    });

    mockGetUser.mockResolvedValue({
      id: "clerk_test_user_1",
      primaryEmailAddressId: "email_1",
      emailAddresses: [{ id: "email_1", emailAddress: "landlord@example.com" }],
      firstName: "Taylor",
      lastName: "Steinbaugh",
    });

    await request(app).post("/api/me/sync-profile");

    const entity = await prisma.entity.findUnique({ where: { id: llc.id } });
    expect(entity.legalName).toBe("Steinbaugh Estates LLC");
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).post("/api/me/sync-profile");

    expect(res.status).toBe(401);
  });
});
