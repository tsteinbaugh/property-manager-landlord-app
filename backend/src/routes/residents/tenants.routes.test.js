// backend/src/routes/tenants.routes.test.js
const request = require("supertest");
const { app } = require("../../server.js");

describe("Tenants routes", () => {
  const baseTenantPayload = {
    name: "Test Tenant",
    email: "test@example.com",
    phone: "555-123-4567",
  };

  it("creates a tenant and then lists it", async () => {
    const createRes = await request(app)
      .post("/api/tenants")
      .send(baseTenantPayload);

    expect(createRes.status, createRes.text).toBe(201);
    expect(createRes.body).toBeDefined();
    expect(createRes.body.id).toBeDefined();
    expect(createRes.body.name).toBe("Test Tenant");

    const listRes = await request(app).get("/api/tenants");

    expect(listRes.status, listRes.text).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);

    const found = listRes.body.find((t) => t.id === createRes.body.id);
    expect(found).toBeDefined();
    expect(found.name).toBe("Test Tenant");
  });

  it("returns 400 when name is missing on create", async () => {
    const res = await request(app)
      .post("/api/tenants")
      .send({
        email: "no-name@example.com",
        phone: "555-000-0000",
      });

    expect(res.status, res.text).toBe(400);
    expect(res.body).toBeDefined();
    expect(res.body.error).toMatch(/name is required/i);
  });

  it("trims name/email/phone on create", async () => {
    const createRes = await request(app)
      .post("/api/tenants")
      .send({
        name: "  Spaced Name  ",
        email: "  spaced@example.com  ",
        phone: "  555-999-0000  ",
      });

    expect(createRes.status, createRes.text).toBe(201);
    const t = createRes.body;

    expect(t.name).toBe("Spaced Name");
    // shapeTenant may or may not alter these, but it should reflect trimmed values
    expect(t.email).toBe("spaced@example.com");
    expect(t.phone).toBe("555-999-0000");
  });

  it("returns 404 when updating a non-existent tenant", async () => {
    const res = await request(app)
      .patch("/api/tenants/nonexistent-id")
      .send({ name: "No One" });

    expect(res.status, res.text).toBe(404);
    expect(res.body).toBeDefined();
    expect(res.body.error).toMatch(/tenant not found/i);
  });

  it("updates an existing tenant", async () => {
    // First create
    const createRes = await request(app)
      .post("/api/tenants")
      .send(baseTenantPayload);

    expect(createRes.status, createRes.text).toBe(201);
    const id = createRes.body.id;
    expect(id).toBeDefined();

    // Now update
    const updateRes = await request(app)
      .patch(`/api/tenants/${id}`)
      .send({
        name: "Updated Tenant",
        phone: "555-777-8888",
      });

    expect(updateRes.status, updateRes.text).toBe(200);
    const updated = updateRes.body;

    expect(updated.id).toBe(id);
    expect(updated.name).toBe("Updated Tenant");
    expect(updated.phone).toBe("555-777-8888");

    // Double-check via list
    const listRes = await request(app).get("/api/tenants");
    expect(listRes.status, listRes.text).toBe(200);

    const found = listRes.body.find((t) => t.id === id);
    expect(found).toBeDefined();
    expect(found.name).toBe("Updated Tenant");
  });

    it("archives a tenant via PATCH /api/tenants/:id/archive", async () => {
      // Create tenant
      const createRes = await request(app)
        .post("/api/tenants")
        .send({
          name: "To Archive Tenant",
          email: "archive@example.com",
          phone: "555-111-2222",
        });
    
      expect(createRes.status, createRes.text).toBe(201);
      const id = createRes.body.id;
      expect(id).toBeDefined();
    
      // Archive toggle
      const archiveRes = await request(app).patch(
        `/api/tenants/${id}/archive`
      );
  
      expect(archiveRes.status, archiveRes.text).toBe(200);
      const archivedTenant = archiveRes.body;
  
      expect(archivedTenant.id).toBe(id);
      // shapeTenant exposes `archived`, not `isArchived`
      expect(archivedTenant.archived).toBe(true);
  
      // Confirm via list
      const listRes = await request(app).get("/api/tenants");
      expect(listRes.status, listRes.text).toBe(200);
  
      const found = listRes.body.find((t) => t.id === id);
      expect(found).toBeDefined();
      expect(found.archived).toBe(true);
    });
});
