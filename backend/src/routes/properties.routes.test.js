const request = require("supertest");
const app = require("../app");
const prisma = require("../lib/prisma");

describe("properties routes", () => {
  let entity;

  beforeEach(async () => {
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
      data: { email: "landlord@example.com", name: "Taylor" },
    });

    entity = await prisma.entity.create({
      data: {
        userId: user.id,
        legalName: "Steinbaugh Estates LLC",
        entityType: "LLC",
      },
    });
  });

  afterAll(async () => {
    await prisma.property.deleteMany();
    await prisma.entity.deleteMany();
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("creates a property under an entity, deriving userId from the entity", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
      name: "Maple St",
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(201);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.userId).toBe(entity.userId);
  });

  it("rejects a property missing required fields", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: entity.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects a property with a nonexistent entity", async () => {
    const res = await request(app).post("/api/properties").send({
      entityId: "nonexistent-id",
      address1: "123 Maple St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    });

    expect(res.status).toBe(400);
  });

  it("lists properties, optionally filtered by entity", async () => {
    await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app)
      .get("/api/properties")
      .query({ entityId: entity.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single property by id", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).get(`/api/properties/${property.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(property.id);
  });

  it("404s for a missing property", async () => {
    const res = await request(app).get("/api/properties/nonexistent-id");
    expect(res.status).toBe(404);
  });

  it("updates a property", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app)
      .put(`/api/properties/${property.id}`)
      .send({ name: "Renamed" });

    expect(res.status).toBe(200);
    expect(res.body.name).toBe("Renamed");
  });

  it("deletes a property", async () => {
    const property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: entity.userId,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).delete(`/api/properties/${property.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.property.findUnique({
      where: { id: property.id },
    });
    expect(check).toBeNull();
  });
});
