const request = require("supertest");
const createApp = require("../app");
const prisma = require("../lib/prisma");
const { APPLICABILITY_RULE_IDS } = require("../lib/clauseApplicability");

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

  it("every supersedes reference points to a real template in the same set", async () => {
    // "universal" no longer means blank/[] states (see clauseTemplates.js's
    // Aug 2026 header comment) — a supersedes target can itself be
    // state-tagged now (e.g. landlords-access-co supersedes landlords-access,
    // both tagged ["CO"]). The only invariant left to check is that the
    // reference actually resolves to a real, shipped template.
    const res = await request(app).get("/api/clause-templates");
    const byId = new Map(res.body.map((t) => [t.id, t]));

    const withSupersedes = res.body.filter((t) => t.supersedes);
    expect(withSupersedes.length).toBeGreaterThan(0);
    for (const template of withSupersedes) {
      const target = byId.get(template.supersedes);
      expect(target).toBeTruthy();
      expect(target.bodyText).toBeTruthy();
    }
  });

  it("includes an early termination template in Default & Termination", async () => {
    const res = await request(app).get("/api/clause-templates");
    const earlyTermination = res.body.find((t) => t.id === "early-termination");

    expect(earlyTermination).toBeTruthy();
    expect(earlyTermination.group).toBe("Default & Termination");
  });

  it("annotates templates as not-default by default, except clauses the law always requires", async () => {
    const res = await request(app).get("/api/clause-templates");
    expect(res.body.some((t) => t.alwaysDefault)).toBe(true);
    const optOut = (t) => Boolean(t.defaultOn) || (APPLICABILITY_RULE_IDS.includes(t.id) && t.tag === "LEGAL_DUTY");
    expect(res.body.every((t) => t.isDefault === (t.autoDefault || optOut(t)))).toBe(true);
    expect(res.body.filter((t) => t.autoDefault).every((t) => t.autoDefaultNote)).toBe(true);
  });

  it("treats the lead-paint disclosure as required where it applies, not always", async () => {
    const lead = (await request(app).get("/api/clause-templates")).body.find((t) => t.id === "lead-based-paint");
    expect(lead.tag).toBe("REQUIRED");
    expect(lead.alwaysDefault).toBeUndefined();
    expect(lead.autoDefault).toBe(true);
    expect(lead.autoDefaultNote).toMatch(/before 1978/);
  });

  it("only marks an always-required clause that is tagged Required and isn't a pick-one alternative", async () => {
    const res = await request(app).get("/api/clause-templates");
    for (const t of res.body.filter((x) => x.alwaysDefault)) {
      expect(t.tag).toBe("REQUIRED");
      expect(t.choiceGroup).toBeUndefined();
      expect(t.states.length).toBeGreaterThan(0);
    }
  });

  it("turns on by default only a legal duty that always applies and isn't a pick-one alternative", async () => {
    const res = await request(app).get("/api/clause-templates");
    const on = res.body.filter((x) => x.defaultOn);
    expect(on.length).toBeGreaterThan(0);
    for (const t of on) {
      expect(t.tag).toBe("LEGAL_DUTY");
      expect(t.autoDefault).toBe(false);
      expect(t.choiceGroup).toBeUndefined();
      expect(t.states.length).toBeGreaterThan(0);
      expect(t.autoDefaultNote).toMatch(/another way/);
    }
  });

  it("treats a legal duty with an applicability rule as on by default but untickable", async () => {
    const list = (await request(app).get("/api/clause-templates")).body;
    const duty = list.find((t) => t.id === "deposit-depository-wa");
    expect(duty.tag).toBe("LEGAL_DUTY");
    expect(duty.autoDefault).toBe(false);
    expect(duty.isDefault).toBe(true);
    expect(duty.autoDefaultNote).toMatch(/security deposit/);
    expect(duty.autoDefaultNote).toMatch(/another way/);
    const required = list.find((t) => t.id === "security-deposit-use-wa");
    expect(required.autoDefault).toBe(true);
    expect(required.autoDefaultNote).toMatch(/^Required by law/);
    expect((await request(app).delete(`/api/clause-templates/security-deposit-use-wa/default`)).status).toBe(409);
  });

  it("lets the landlord untick and re-tick a legal duty that is on by default", async () => {
    const duty = (await request(app).get("/api/clause-templates")).body.find((t) => t.defaultOn);
    const off = await request(app).delete(`/api/clause-templates/${duty.id}/default`);
    expect(off.status).toBe(204);
    let list = (await request(app).get("/api/clause-templates")).body;
    expect(list.find((t) => t.id === duty.id).isDefault).toBe(false);

    await request(app).post(`/api/clause-templates/${duty.id}/default`);
    list = (await request(app).get("/api/clause-templates")).body;
    expect(list.find((t) => t.id === duty.id).isDefault).toBe(true);
  });

  it("refuses to unmark an always-required clause as a default", async () => {
    const required = (await request(app).get("/api/clause-templates")).body.find((t) => t.alwaysDefault);
    const res = await request(app).delete(`/api/clause-templates/${required.id}/default`);
    expect(res.status).toBe(409);
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

  it("marking one choice-group member as default clears its alternatives", async () => {
    await request(app).post("/api/clause-templates/tpa-exemption-notice-ca/default");
    await request(app).post("/api/clause-templates/tpa-notice-ca/default");

    const list = (await request(app).get("/api/clause-templates")).body;
    expect(list.find((t) => t.id === "tpa-notice-ca").isDefault).toBe(true);
    expect(list.find((t) => t.id === "tpa-exemption-notice-ca").isDefault).toBe(false);
  });

  it("every choice group has exactly one default member", async () => {
    const res = await request(app).get("/api/clause-templates");
    const groups = {};
    for (const t of res.body.filter((t) => t.choiceGroup)) {
      (groups[t.choiceGroup] ||= []).push(t);
    }
    expect(Object.keys(groups).length).toBeGreaterThan(0);
    for (const members of Object.values(groups)) {
      expect(members.length).toBeGreaterThan(1);
      expect(members.filter((t) => t.choiceGroupDefault)).toHaveLength(1);
    }
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
