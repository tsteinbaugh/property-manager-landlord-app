// backend/src/routes/properties.routes.test.js
const request = require("supertest");
const { app } = require("../server.js");

describe("Properties routes", () => {
  const basePropertyPayload = {
    name: "Test Property",
    address1: "123 Test St",
    city: "Testville",
    state: "CO",
    postalCode: "80000",
  };

  it("creates a property and then lists it", async () => {
    const createRes = await request(app)
      .post("/api/properties")
      .send(basePropertyPayload);

    expect(createRes.status, createRes.text).toBe(201);
    expect(createRes.body).toBeDefined();
    expect(createRes.body.id).toBeDefined();
    expect(createRes.body.name).toBe("Test Property");

    const listRes = await request(app).get("/api/properties");

    expect(listRes.status, listRes.text).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);

    const found = listRes.body.find((p) => p.id === createRes.body.id);
    expect(found).toBeDefined();
    expect(found.name).toBe("Test Property");
  });

  it("returns 400 when required fields are missing on create", async () => {
    // Missing address1, state, postalCode
    const badPayload = {
      name: "Bad Property",
      city: "Nowhere",
    };

    const res = await request(app)
      .post("/api/properties")
      .send(badPayload);

    expect(res.status, res.text).toBe(400);
    expect(res.body).toBeDefined();
    expect(res.body.error).toMatch(/address1, city, state, and postalCode/i);
  });

  it("returns 404 when updating a non-existent property", async () => {
    const fakeId = "nonexistent-id";

    const res = await request(app)
      .patch(`/api/properties/${fakeId}`)
      .send({
        name: "Updated Name",
      });

    expect(res.status, res.text).toBe(404);
    expect(res.body).toBeDefined();
    expect(res.body.error).toMatch(/property not found/i);
  });

  it("archives a property via PATCH /api/properties/:id/archive", async () => {
    // 1) Create a property
    const createRes = await request(app)
      .post("/api/properties")
      .send({
        name: "To Archive",
        address1: "456 Archive St",
        city: "Archive City",
        state: "CO",
        postalCode: "80001",
      });

    expect(createRes.status, createRes.text).toBe(201);
    const id = createRes.body.id;
    expect(id).toBeDefined();

    // 2) Call the archive route you actually have
    const archiveRes = await request(app).patch(
      `/api/properties/${id}/archive`
    );

    expect(archiveRes.status, archiveRes.text).toBe(200);

    // Backend uses `isArchived`, not `archived`
    expect(archiveRes.body.isArchived).toBe(true);

    // 3) Verify via GET /api/properties
    const listRes = await request(app).get("/api/properties");

    expect(listRes.status, listRes.text).toBe(200);
    const updated = listRes.body.find((p) => p.id === id);
    expect(updated).toBeDefined();
    expect(updated.isArchived).toBe(true);
  });

  it("returns summary with no lease/tenant when there is no active lease", async () => {
    // Create a property using the real POST endpoint
    const createRes = await request(app)
      .post("/api/properties")
      .send({
        name: "Summary Test Property",
        address1: "789 Summary St",
        city: "Summaryville",
        state: "CO",
        postalCode: "80002",
      });

    expect(createRes.status, createRes.text).toBe(201);
    const id = createRes.body.id;
    expect(id).toBeDefined();

    // Hit the summary endpoint
    const summaryRes = await request(app).get(
      `/api/properties/${id}/summary`
    );

    expect(summaryRes.status, summaryRes.text).toBe(200);
    expect(summaryRes.body).toBeDefined();

    const { property, lease, tenant, occupants, pets, emergencyContacts } =
      summaryRes.body;

    expect(property).toBeDefined();
    expect(property.id).toBe(id);

    // No lease/tenant because we never created one
    expect(lease).toBeNull();
    expect(tenant).toBeNull();

    // These should all be empty arrays
    expect(Array.isArray(occupants)).toBe(true);
    expect(Array.isArray(pets)).toBe(true);
    expect(Array.isArray(emergencyContacts)).toBe(true);

    expect(occupants.length).toBe(0);
    expect(pets.length).toBe(0);
    expect(emergencyContacts.length).toBe(0);
  });

  it("returns 404 from summary for an unknown property id", async () => {
    const res = await request(app).get(
      "/api/properties/nonexistent-id/summary"
    );

    expect(res.status, res.text).toBe(404);
    expect(res.body).toBeDefined();
    expect(res.body.error).toMatch(/property not found/i);
  });
});
