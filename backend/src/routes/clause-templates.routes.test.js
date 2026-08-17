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

describe("clause templates route", () => {
  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await prisma.defaultClauseTemplate.deleteMany();
    await prisma.user.deleteMany();
    await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
  });

  afterAll(async () => {
    await prisma.defaultClauseTemplate.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/clause-templates");

    expect(res.status).toBe(401);
  });

  it("returns a large static template list, each with a valid group", async () => {
    const { CLAUSE_GROUPS } = require("../lib/clauseGroups");
    const res = await request(app).get("/api/clause-templates");

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThan(20);
    for (const template of res.body) {
      expect(template.id).toBeTruthy();
      expect(template.title).toBeTruthy();
      expect(template.bodyText).toBeTruthy();
      expect(CLAUSE_GROUPS).toContain(template.group);
    }
  });

  it("includes an early termination template in Default & Termination", async () => {
    const res = await request(app).get("/api/clause-templates");
    const earlyTermination = res.body.find((t) => t.id === "early-termination");

    expect(earlyTermination).toBeTruthy();
    expect(earlyTermination.group).toBe("Default & Termination");
  });

  it("annotates templates as not-default by default", async () => {
    const res = await request(app).get("/api/clause-templates");
    expect(res.body.every((t) => t.isDefault === false)).toBe(true);
  });

  it("marks a template as default without modifying its wording", async () => {
    const original = (await request(app).get("/api/clause-templates")).body.find((t) => t.id === "rent-payment");

    const toggle = await request(app).post("/api/clause-templates/rent-payment/default");
    expect(toggle.status).toBe(201);

    const res = await request(app).get("/api/clause-templates");
    const marked = res.body.find((t) => t.id === "rent-payment");
    expect(marked.isDefault).toBe(true);
    expect(marked.bodyText).toBe(original.bodyText);
  });

  it("is idempotent when marking the same template default twice", async () => {
    await request(app).post("/api/clause-templates/rent-payment/default");
    const res = await request(app).post("/api/clause-templates/rent-payment/default");
    expect(res.status).toBe(201);

    const count = await prisma.defaultClauseTemplate.count();
    expect(count).toBe(1);
  });

  it("404s marking an unknown template as default", async () => {
    const res = await request(app).post("/api/clause-templates/not-a-real-template/default");
    expect(res.status).toBe(404);
  });

  it("unmarks a template as default", async () => {
    await request(app).post("/api/clause-templates/rent-payment/default");
    const res = await request(app).delete("/api/clause-templates/rent-payment/default");
    expect(res.status).toBe(204);

    const list = await request(app).get("/api/clause-templates");
    expect(list.body.find((t) => t.id === "rent-payment").isDefault).toBe(false);
  });

  it("scopes default templates per user", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    await prisma.defaultClauseTemplate.create({ data: { userId: otherUser.id, templateId: "rent-payment" } });

    const res = await request(app).get("/api/clause-templates");
    expect(res.body.find((t) => t.id === "rent-payment").isDefault).toBe(false);
  });
});
