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

describe("entities routes", () => {
  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();

    await prisma.user.create({
      data: { clerkId: "clerk_test_user_1", email: "landlord@example.com", name: "Taylor" },
    });
  });

  afterAll(async () => {
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  describe("owner answers (/api/entities/:id/facts)", () => {
    async function makeOwner(entityType) {
      const res = await request(app).post("/api/entities").send({ legalName: "Owner", entityType });
      return res.body;
    }

    it("saves where a person owner lives and returns its property states", async () => {
      const owner = await makeOwner("PERSONAL");
      const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
      await prisma.property.create({
        data: { userId: user.id, entityId: owner.id, address1: "1 A St", city: "Hilo", state: "HI", zip: "96720" },
      });
      const res = await request(app)
        .put(`/api/entities/${owner.id}/facts`)
        .send({ facts: { homeAddress: "12 Ocean Rd, Hilo, HI", homeState: "HI", homeIsland: "Hawaiʻi" } });
      expect(res.status).toBe(200);
      expect(res.body.facts.homeIsland).toBe("Hawaiʻi");

      const got = await request(app).get(`/api/entities/${owner.id}/facts`);
      expect(got.body).toEqual({ facts: res.body.facts, propertyStates: ["HI"] });

      const bad = await request(app).put(`/api/entities/${owner.id}/facts`).send({ facts: { homeState: "ZZ" } });
      expect(bad.status).toBe(400);
    });

    it("keeps another user's owner private", async () => {
      const owner = await makeOwner("LLC");
      mockGetAuth.mockReturnValue({ userId: "clerk_test_user_2" });
      mockGetUser.mockResolvedValueOnce({
        id: "clerk_test_user_2",
        primaryEmailAddressId: "e2",
        emailAddresses: [{ id: "e2", emailAddress: "other@example.com" }],
        firstName: "Other",
        lastName: null,
      });
      const res = await request(app).put(`/api/entities/${owner.id}/facts`).send({ facts: { officeState: "CO" } });
      expect(res.status).toBe(404);
    });

    it("stores a registered agent's name and address", async () => {
      const owner = await makeOwner("LLC");
      const res = await request(app)
        .put(`/api/entities/${owner.id}`)
        .send({ registeredAgent: "Agents Inc.", registeredAgentAddress: "1 Main St, Reno, NV 89501" });
      expect(res.status).toBe(200);
      expect(res.body.registeredAgentAddress).toBe("1 Main St, Reno, NV 89501");
    });
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/entities");

    expect(res.status).toBe(401);
  });

  it("creates an entity for the current user", async () => {
    const res = await request(app).post("/api/entities").send({
      legalName: "Steinbaugh Estates LLC",
      entityType: "LLC",
      stateOfFormation: "CO",
    });

    expect(res.status).toBe(201);
    expect(res.body.legalName).toBe("Steinbaugh Estates LLC");
    expect(res.body.entityType).toBe("LLC");

    const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
    expect(res.body.userId).toBe(user.id);
  });

  it("creates an entity with its own contact info, separate from the user's account", async () => {
    const res = await request(app).post("/api/entities").send({
      legalName: "Steinbaugh Estates LLC",
      entityType: "LLC",
      contactEmail: "business@steinbaughestates.com",
      contactPhone: "555-0199",
      mailingAddress: "PO Box 42, Frederick, CO 80530",
    });

    expect(res.status).toBe(201);
    expect(res.body.contactEmail).toBe("business@steinbaughestates.com");
    expect(res.body.contactPhone).toBe("555-0199");
    expect(res.body.mailingAddress).toBe("PO Box 42, Frederick, CO 80530");
  });

  it("rejects an entity missing legalName", async () => {
    const res = await request(app).post("/api/entities").send({ entityType: "LLC" });

    expect(res.status).toBe(400);
  });

  it("rejects an entity with an invalid entityType", async () => {
    const res = await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "NONPROFIT" });

    expect(res.status).toBe(400);
  });

  it("encrypts ein at rest and decrypts it back on read", async () => {
    const res = await request(app).post("/api/entities").send({
      legalName: "Steinbaugh Estates LLC",
      entityType: "LLC",
      ein: "12-3456789",
    });

    expect(res.status).toBe(201);
    expect(res.body.ein).toBe("12-3456789");

    const raw = await prisma.entity.findUnique({ where: { id: res.body.id } });
    expect(raw.ein).not.toBe("12-3456789");
    expect(raw.ein).toContain(":");

    const getRes = await request(app).get(`/api/entities/${res.body.id}`);
    expect(getRes.body.ein).toBe("12-3456789");
  });

  it("lists entities scoped to the current user", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });
    await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    const res = await request(app).get("/api/entities");

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].legalName).toBe("Steinbaugh Estates LLC");
  });

  it("gets a single entity by id", async () => {
    const createRes = await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    const res = await request(app).get(`/api/entities/${createRes.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(createRes.body.id);
  });

  it("404s for a missing entity", async () => {
    const res = await request(app).get("/api/entities/nonexistent-id");
    expect(res.status).toBe(404);
  });

  it("404s for another user's entity", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });

    const res = await request(app).get(`/api/entities/${otherEntity.id}`);
    expect(res.status).toBe(404);
  });

  it("updates an entity", async () => {
    const createRes = await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    const res = await request(app)
      .put(`/api/entities/${createRes.body.id}`)
      .send({ legalName: "Renamed LLC" });

    expect(res.status).toBe(200);
    expect(res.body.legalName).toBe("Renamed LLC");
  });

  it("rejects updating an entity to an invalid entityType", async () => {
    const createRes = await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    const res = await request(app)
      .put(`/api/entities/${createRes.body.id}`)
      .send({ entityType: "NONPROFIT" });

    expect(res.status).toBe(400);
  });

  it("deletes an entity with no properties", async () => {
    const createRes = await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    const res = await request(app).delete(`/api/entities/${createRes.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.entity.findUnique({ where: { id: createRes.body.id } });
    expect(check).toBeNull();
  });

  it("refuses to delete an entity that still owns properties", async () => {
    const createRes = await request(app)
      .post("/api/entities")
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    await prisma.property.create({
      data: {
        entityId: createRes.body.id,
        userId: createRes.body.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).delete(`/api/entities/${createRes.body.id}`);
    expect(res.status).toBe(400);
  });

  it("refuses to edit the default Self / Personal entity", async () => {
    const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
    const defaultEntity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Taylor", entityType: "PERSONAL", isDefault: true },
    });

    const res = await request(app)
      .put(`/api/entities/${defaultEntity.id}`)
      .send({ legalName: "Steinbaugh Estates LLC", entityType: "LLC" });

    expect(res.status).toBe(400);

    const check = await prisma.entity.findUnique({ where: { id: defaultEntity.id } });
    expect(check.legalName).toBe("Taylor");
    expect(check.entityType).toBe("PERSONAL");
  });

  it("allows editing contact info on the default Self / Personal entity", async () => {
    const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
    const defaultEntity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Taylor", entityType: "PERSONAL", isDefault: true },
    });

    const res = await request(app).put(`/api/entities/${defaultEntity.id}`).send({
      contactEmail: "taylor.personal@example.com",
      contactPhone: "555-0100",
      mailingAddress: "PO Box 1, Frederick, CO 80530",
    });

    expect(res.status).toBe(200);
    expect(res.body.contactEmail).toBe("taylor.personal@example.com");
    expect(res.body.contactPhone).toBe("555-0100");
    expect(res.body.legalName).toBe("Taylor");
  });

  it("refuses to delete the default Self / Personal entity", async () => {
    const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
    const defaultEntity = await prisma.entity.create({
      data: { userId: user.id, legalName: "Taylor", entityType: "PERSONAL", isDefault: true },
    });

    const res = await request(app).delete(`/api/entities/${defaultEntity.id}`);
    expect(res.status).toBe(400);

    const check = await prisma.entity.findUnique({ where: { id: defaultEntity.id } });
    expect(check).not.toBeNull();
  });

  it("allows adding, editing, and deleting a second personal entity alongside the default one", async () => {
    const user = await prisma.user.findUnique({ where: { clerkId: "clerk_test_user_1" } });
    await prisma.entity.create({
      data: { userId: user.id, legalName: "Taylor", entityType: "PERSONAL", isDefault: true },
    });

    const createRes = await request(app)
      .post("/api/entities")
      .send({ legalName: "Son's college house", entityType: "PERSONAL" });
    expect(createRes.status).toBe(201);
    expect(createRes.body.isDefault).toBe(false);

    const editRes = await request(app)
      .put(`/api/entities/${createRes.body.id}`)
      .send({ legalName: "Son's rental" });
    expect(editRes.status).toBe(200);
    expect(editRes.body.legalName).toBe("Son's rental");

    const deleteRes = await request(app).delete(`/api/entities/${createRes.body.id}`);
    expect(deleteRes.status).toBe(204);
  });
});
