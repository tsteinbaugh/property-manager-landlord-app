// backend/src/routes/tenantDependencies.routes.test.js
const request = require("supertest");
const { app, prisma } = require("../server.js");

// Helper: create a tenant via the real API so foreign keys are valid
async function createTenant(overrides = {}) {
  const payload = {
    name: "Tenant For Deps",
    email: "deps@example.com",
    phone: "555-000-1111",
    ...overrides,
  };

  const res = await request(app).post("/api/tenants").send(payload);
  expect(res.status, res.text).toBe(201);
  return res.body; // shapeTenant result with id, name, etc.
}

describe("Tenant dependencies routes - Occupants", () => {
  it("creates and lists occupants for a tenant, and archive hides them by default", async () => {
    const tenant = await createTenant();
    const tenantId = tenant.id;

    // Create an occupant
    const createOccRes = await request(app)
      .post(`/api/tenants/${tenantId}/occupants`)
      .send({
        name: "John Roommate",
        relation: "Roommate",
      });

    expect(createOccRes.status, createOccRes.text).toBe(201);
    const occ = createOccRes.body;
    expect(occ.id).toBeDefined();
    expect(occ.name).toBe("John Roommate");

    const occupantId = occ.id;

    // List occupants (default: only non-archived)
    const listRes = await request(app).get(
      `/api/tenants/${tenantId}/occupants`
    );

    expect(listRes.status, listRes.text).toBe(200);
    expect(Array.isArray(listRes.body)).toBe(true);
    expect(listRes.body.length).toBe(1);
    expect(listRes.body[0].id).toBe(occupantId);

    // Archive toggle
    const archiveRes = await request(app).patch(
      `/api/tenants/${tenantId}/occupants/${occupantId}/archive`
    );

    expect(archiveRes.status, archiveRes.text).toBe(200);

    // Confirm archive in DB (skip shapeOccupant assumptions)
    const dbOcc = await prisma.occupant.findUnique({
      where: { id: occupantId },
    });
    expect(dbOcc).not.toBeNull();
    expect(dbOcc.isArchived).toBe(true);

    // Now list again without includeArchived -> should be empty
    const listAfterArchiveRes = await request(app).get(
      `/api/tenants/${tenantId}/occupants`
    );

    expect(listAfterArchiveRes.status, listAfterArchiveRes.text).toBe(200);
    expect(Array.isArray(listAfterArchiveRes.body)).toBe(true);
    expect(listAfterArchiveRes.body.length).toBe(0);

    // With includeArchived=true -> should include archived occupant
    const listInclRes = await request(app).get(
      `/api/tenants/${tenantId}/occupants?includeArchived=1`
    );

    expect(listInclRes.status, listInclRes.text).toBe(200);
    const allOccs = listInclRes.body;
    expect(Array.isArray(allOccs)).toBe(true);

    const found = allOccs.find((o) => o.id === occupantId);
    expect(found).toBeDefined();
  });

  it("returns 400 when name is missing on occupant create", async () => {
    const tenant = await createTenant();
    const tenantId = tenant.id;

    const res = await request(app)
      .post(`/api/tenants/${tenantId}/occupants`)
      .send({
        relation: "Friend",
      });

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/name is required/i);
  });

  it("returns 404 when creating occupant for a non-existent tenant", async () => {
    const res = await request(app)
      .post("/api/tenants/nonexistent-tenant/occupants")
      .send({
        name: "Ghost",
        relation: "Friend",
      });

    expect(res.status, res.text).toBe(404);
    expect(res.body.error).toMatch(/tenant not found/i);
  });

  it("returns 404 when updating occupant with wrong tenantId", async () => {
    // Create tenant1 and occupant under tenant1
    const tenant1 = await createTenant({ name: "Tenant One" });
    const tenant2 = await createTenant({ name: "Tenant Two" });

    const createOccRes = await request(app)
      .post(`/api/tenants/${tenant1.id}/occupants`)
      .send({
        name: "Shared",
        relation: "Friend",
      });

    expect(createOccRes.status, createOccRes.text).toBe(201);
    const occId = createOccRes.body.id;

    // Try updating occupant under tenant2 -> should 404
    const updateRes = await request(app)
      .patch(`/api/tenants/${tenant2.id}/occupants/${occId}`)
      .send({
        name: "Updated Name",
      });

    expect(updateRes.status, updateRes.text).toBe(404);
    expect(updateRes.body.error).toMatch(/occupant not found/i);
  });
});

describe("Tenant dependencies routes - Pets", () => {
  it("creates a pet, parses weight, and updates it", async () => {
    const tenant = await createTenant();
    const tenantId = tenant.id;

    // Create pet with weight as string
    const createPetRes = await request(app)
      .post(`/api/tenants/${tenantId}/pets`)
      .send({
        name: "Fluffy",
        type: "Cat",
        breed: "Tabby",
        weightLb: "12.5",
      });

    expect(createPetRes.status, createPetRes.text).toBe(201);
    const pet = createPetRes.body;
    expect(pet.id).toBeDefined();
    expect(pet.name).toBe("Fluffy");

    const petId = pet.id;

    // Confirm weight parsed in DB
    const dbPet = await prisma.pet.findUnique({ where: { id: petId } });
    expect(dbPet).not.toBeNull();
    expect(dbPet.weightLb).toBe(12);

    // Update pet
    const updateRes = await request(app)
      .patch(`/api/tenants/${tenantId}/pets/${petId}`)
      .send({
        name: "Fluffy Jr",
        weightLb: "",
      });

    expect(updateRes.status, updateRes.text).toBe(200);

    const dbPetUpdated = await prisma.pet.findUnique({
      where: { id: petId },
    });
    expect(dbPetUpdated.name).toBe("Fluffy Jr");
    // empty string -> null
    expect(dbPetUpdated.weightLb).toBeNull();
  });

  it("archives a pet and respects includeArchived filter", async () => {
    const tenant = await createTenant();
    const tenantId = tenant.id;

    const createPetRes = await request(app)
      .post(`/api/tenants/${tenantId}/pets`)
      .send({
        name: "Fido",
        type: "Dog",
      });

    expect(createPetRes.status, createPetRes.text).toBe(201);
    const petId = createPetRes.body.id;

    // Archive
    const archiveRes = await request(app).patch(
      `/api/tenants/${tenantId}/pets/${petId}/archive`
    );

    expect(archiveRes.status, archiveRes.text).toBe(200);

    const dbPet = await prisma.pet.findUnique({ where: { id: petId } });
    expect(dbPet).not.toBeNull();
    expect(dbPet.isArchived).toBe(true);

    // Default GET (no includeArchived) -> empty
    const listRes = await request(app).get(
      `/api/tenants/${tenantId}/pets`
    );
    expect(listRes.status, listRes.text).toBe(200);
    expect(listRes.body.length).toBe(0);

    // With includeArchived
    const listInclRes = await request(app).get(
      `/api/tenants/${tenantId}/pets?includeArchived=true`
    );
    expect(listInclRes.status, listInclRes.text).toBe(200);

    const found = listInclRes.body.find((p) => p.id === petId);
    expect(found).toBeDefined();
  });

  it("returns 404 when creating pet for non-existent tenant", async () => {
    const res = await request(app)
      .post("/api/tenants/nonexistent/pets")
      .send({
        name: "Ghost Pet",
      });

    expect(res.status, res.text).toBe(404);
    expect(res.body.error).toMatch(/tenant not found/i);
  });

  it("returns 404 when updating pet with wrong tenantId", async () => {
    const tenant1 = await createTenant({ name: "Pet Parent 1" });
    const tenant2 = await createTenant({ name: "Pet Parent 2" });

    const createPetRes = await request(app)
      .post(`/api/tenants/${tenant1.id}/pets`)
      .send({
        name: "Misowned",
      });

    expect(createPetRes.status, createPetRes.text).toBe(201);
    const petId = createPetRes.body.id;

    const updateRes = await request(app)
      .patch(`/api/tenants/${tenant2.id}/pets/${petId}`)
      .send({
        name: "Updated Name",
      });

    expect(updateRes.status, updateRes.text).toBe(404);
    expect(updateRes.body.error).toMatch(/pet not found/i);
  });
});

describe("Tenant dependencies routes - Emergency contacts", () => {
  it("creates an emergency contact and updates it", async () => {
    const tenant = await createTenant();
    const tenantId = tenant.id;

    const createRes = await request(app)
      .post(`/api/tenants/${tenantId}/emergency-contacts`)
      .send({
        name: "Mom",
        phone: "555-777-8888",
        relation: "Mother",
        email: "mom@example.com",
      });

    expect(createRes.status, createRes.text).toBe(201);
    const contact = createRes.body;
    const contactId = contact.id;
    expect(contactId).toBeDefined();

    // Update
    const updateRes = await request(app)
      .patch(
        `/api/tenants/${tenantId}/emergency-contacts/${contactId}`
      )
      .send({
        name: "Mom Updated",
        phone: "555-000-9999",
      });

    expect(updateRes.status, updateRes.text).toBe(200);

    const dbContact = await prisma.emergencyContact.findUnique({
      where: { id: contactId },
    });
    expect(dbContact.name).toBe("Mom Updated");
    expect(dbContact.phone).toBe("555-000-9999");
  });

  it("archives an emergency contact and respects includeArchived", async () => {
    const tenant = await createTenant();
    const tenantId = tenant.id;

    const createRes = await request(app)
      .post(`/api/tenants/${tenantId}/emergency-contacts`)
      .send({
        name: "Dad",
        phone: "555-111-2222",
      });

    expect(createRes.status, createRes.text).toBe(201);
    const contactId = createRes.body.id;

    const archiveRes = await request(app).patch(
      `/api/tenants/${tenantId}/emergency-contacts/${contactId}/archive`
    );

    expect(archiveRes.status, archiveRes.text).toBe(200);

    const dbContact = await prisma.emergencyContact.findUnique({
      where: { id: contactId },
    });
    expect(dbContact.isArchived).toBe(true);

    // Default GET -> no archived contacts
    const listRes = await request(app).get(
      `/api/tenants/${tenantId}/emergency-contacts`
    );
    expect(listRes.status, listRes.text).toBe(200);
    expect(listRes.body.length).toBe(0);

    // includeArchived -> should include contact
    const listInclRes = await request(app).get(
      `/api/tenants/${tenantId}/emergency-contacts?includeArchived=1`
    );
    expect(listInclRes.status, listInclRes.text).toBe(200);

    const found = listInclRes.body.find((c) => c.id === contactId);
    expect(found).toBeDefined();
  });

  it("returns 404 when creating emergency contact for non-existent tenant", async () => {
    const res = await request(app)
      .post("/api/tenants/nonexistent/emergency-contacts")
      .send({
        name: "Ghost Contact",
      });

    expect(res.status, res.text).toBe(404);
    expect(res.body.error).toMatch(/tenant not found/i);
  });

  it("returns 404 when updating emergency contact with wrong tenantId", async () => {
    const tenant1 = await createTenant({ name: "EC Tenant 1" });
    const tenant2 = await createTenant({ name: "EC Tenant 2" });

    const createRes = await request(app)
      .post(`/api/tenants/${tenant1.id}/emergency-contacts`)
      .send({
        name: "Shared EC",
      });

    expect(createRes.status, createRes.text).toBe(201);
    const contactId = createRes.body.id;

    const updateRes = await request(app)
      .patch(
        `/api/tenants/${tenant2.id}/emergency-contacts/${contactId}`
      )
      .send({
        name: "Updated Name",
      });

    expect(updateRes.status, updateRes.text).toBe(404);
    expect(updateRes.body.error).toMatch(/emergency contact not found/i);
  });
});
