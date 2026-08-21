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

const mockR2 = {
  getUploadUrl: vi.fn((key) => Promise.resolve(`https://r2.example.com/upload/${key}`)),
  getDownloadUrl: vi.fn((key) => Promise.resolve(`https://r2.example.com/download/${key}`)),
  deleteObject: vi.fn(() => Promise.resolve()),
};

const app = createApp({
  clerkMiddleware: () => (req, res, next) => next(),
  getAuth: (req) => mockGetAuth(req),
  clerkClient: { users: { getUser: (...args) => mockGetUser(...args) } },
  r2: mockR2,
});

async function resetDatabase() {
  await prisma.maintenanceStatusChange.deleteMany();
  await prisma.maintenanceRequest.deleteMany();
  await prisma.maintenanceSchedule.deleteMany();
  await prisma.vendor.deleteMany();
  await prisma.depositDeduction.deleteMany();
  await prisma.deposit.deleteMany();
  await prisma.income.deleteMany();
  await prisma.expense.deleteMany();
  await prisma.leaseTenant.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

async function createOtherLandlordsProperty() {
  const otherUser = await prisma.user.create({
    data: { clerkId: "clerk_other_user", email: "other@example.com" },
  });
  const otherEntity = await prisma.entity.create({
    data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
  });
  return prisma.property.create({
    data: {
      entityId: otherEntity.id,
      userId: otherUser.id,
      address1: "456 Oak St",
      city: "Frederick",
      state: "CO",
      zip: "80530",
    },
  });
}

describe("tenants routes", () => {
  let property;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    mockR2.getUploadUrl.mockClear();
    mockR2.getDownloadUrl.mockClear();
    mockR2.deleteObject.mockClear();
    await resetDatabase();

    const user = await prisma.user.create({
      data: {
        clerkId: "clerk_test_user_1",
        email: "landlord@example.com",
        name: "Taylor",
      },
    });
    const entity = await prisma.entity.create({
      data: {
        userId: user.id,
        legalName: "Steinbaugh Estates LLC",
        entityType: "LLC",
      },
    });
    property = await prisma.property.create({
      data: {
        entityId: entity.id,
        userId: user.id,
        address1: "123 Maple St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/tenants");

    expect(res.status).toBe(401);
  });

  it("creates a tenant applying to an owned property, defaulting to PENDING", async () => {
    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
      lastName: "Rivera",
      propertyId: property.id,
      phone: "555-0100",
      email: "jamie@example.com",
    });

    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe("Jamie");
    expect(res.body.lastName).toBe("Rivera");
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.applicationStatus).toBe("PENDING");
  });

  it("rejects a tenant missing required fields", async () => {
    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a tenant missing a last name", async () => {
    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
      propertyId: property.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects a tenant applying to a property owned by another user", async () => {
    const otherProperty = await createOtherLandlordsProperty();

    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
      lastName: "Rivera",
      propertyId: otherProperty.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects creating a tenant against an archived property", async () => {
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
      lastName: "Rivera",
      propertyId: property.id,
    });

    expect(res.status).toBe(400);
  });

  it("excludes tenants of archived properties from the cross-property list, but not a property-scoped one", async () => {
    await request(app).post("/api/tenants").send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const hubRes = await request(app).get("/api/tenants");
    expect(hubRes.body).toEqual([]);

    const scopedRes = await request(app).get("/api/tenants").query({ propertyId: property.id });
    expect(scopedRes.body).toHaveLength(1);
  });

  it("ignores unassignable fields like userId on create", async () => {
    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
      lastName: "Rivera",
      propertyId: property.id,
      userId: "someone-elses-id",
    });

    expect(res.status).toBe(201);
    expect(res.body.userId).not.toBe("someone-elses-id");
  });

  it("lists only the current user's tenants, optionally filtered by property", async () => {
    const otherProperty = await createOtherLandlordsProperty();
    await prisma.tenant.create({
      data: { userId: otherProperty.userId, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
    });
    await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app).get("/api/tenants").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].firstName).toBe("Jamie");
  });

  it("gets a single tenant by id", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app).get(`/api/tenants/${created.body.id}`);

    expect(res.status).toBe(200);
    expect(res.body.id).toBe(created.body.id);
  });

  it("404s for another user's tenant", async () => {
    const otherProperty = await createOtherLandlordsProperty();
    const otherTenant = await prisma.tenant.create({
      data: { userId: otherProperty.userId, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
    });

    const res = await request(app).get(`/api/tenants/${otherTenant.id}`);

    expect(res.status).toBe(404);
  });

  it("approves a pending applicant", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app)
      .put(`/api/tenants/${created.body.id}`)
      .send({ applicationStatus: "APPROVED", idVerified: true, creditCheckStatus: "approved" });

    expect(res.status).toBe(200);
    expect(res.body.applicationStatus).toBe("APPROVED");
    expect(res.body.idVerified).toBe(true);
    expect(res.body.creditCheckStatus).toBe("approved");
  });

  it("rejects an invalid applicationStatus on update", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app)
      .put(`/api/tenants/${created.body.id}`)
      .send({ applicationStatus: "MAYBE" });

    expect(res.status).toBe(400);
  });

  it("rejects blanking out firstName or lastName on update", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app).put(`/api/tenants/${created.body.id}`).send({ lastName: "" });

    expect(res.status).toBe(400);

    const check = await prisma.tenant.findUnique({ where: { id: created.body.id } });
    expect(check.lastName).toBe("Rivera");
  });


  it("soft-deletes a tenant — the row survives, hidden from the default list", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app).delete(`/api/tenants/${created.body.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.tenant.findUnique({ where: { id: created.body.id } });
    expect(check).not.toBeNull();
    expect(check.deleted).toBe(true);
    expect(check.deletedAt).toBeTruthy();

    const listRes = await request(app).get("/api/tenants").query({ propertyId: property.id });
    expect(listRes.body).toEqual([]);
  });

  it("is safe to delete an already-deleted tenant twice", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    await request(app).delete(`/api/tenants/${created.body.id}`);
    const res = await request(app).delete(`/api/tenants/${created.body.id}`);
    expect(res.status).toBe(204);
  });

  it("lists deleted tenants with ?deleted=true, and all tenants with ?deleted=all", async () => {
    const kept = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Kept", lastName: "Tenant", propertyId: property.id });
    const deleted = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Deleted", lastName: "Tenant", propertyId: property.id });
    await request(app).delete(`/api/tenants/${deleted.body.id}`);

    const deletedOnly = await request(app).get("/api/tenants").query({ propertyId: property.id, deleted: "true" });
    expect(deletedOnly.body.map((t) => t.id)).toEqual([deleted.body.id]);

    const all = await request(app).get("/api/tenants").query({ propertyId: property.id, deleted: "all" });
    expect(all.body.map((t) => t.id).sort()).toEqual([deleted.body.id, kept.body.id].sort());
  });

  it("restores a deleted tenant", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });
    await request(app).delete(`/api/tenants/${created.body.id}`);

    const res = await request(app).post(`/api/tenants/${created.body.id}/restore`);
    expect(res.status).toBe(200);
    expect(res.body.deleted).toBe(false);
    expect(res.body.deletedAt).toBeNull();

    const listRes = await request(app).get("/api/tenants").query({ propertyId: property.id });
    expect(listRes.body.map((t) => t.id)).toContain(created.body.id);
  });

  it("rejects restoring a tenant that isn't deleted", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app).post(`/api/tenants/${created.body.id}/restore`);
    expect(res.status).toBe(400);
  });

  it("copies details from a previous tenant record and links back to it", async () => {
    const previous = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Tim", lastName: "Renter", phone: "555-0100", propertyId: property.id });

    const res = await request(app).post("/api/tenants").send({
      firstName: "Tim",
      lastName: "Renter",
      phone: "555-0100",
      propertyId: property.id,
      previousTenantId: previous.body.id,
    });
    expect(res.status).toBe(201);
    expect(res.body.previousTenantId).toBe(previous.body.id);

    const fetched = await request(app).get(`/api/tenants/${res.body.id}`);
    expect(fetched.body.previousTenant.id).toBe(previous.body.id);

    const fetchedPrevious = await request(app).get(`/api/tenants/${previous.body.id}`);
    expect(fetchedPrevious.body.nextTenants.map((t) => t.id)).toEqual([res.body.id]);
  });

  it("?deleted=all finds a tenant even when their property is archived — the 'copy from an existing tenant' picker's use case", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Sample", lastName: "Tenant", propertyId: property.id });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    // The normal hub view (no propertyId) still hides them, since their property is archived.
    const hubRes = await request(app).get("/api/tenants");
    expect(hubRes.body.map((t) => t.id)).not.toContain(created.body.id);

    // ?deleted=all bypasses both the deleted filter and the archived-property hide.
    const allRes = await request(app).get("/api/tenants").query({ deleted: "all" });
    expect(allRes.body.map((t) => t.id)).toContain(created.body.id);
  });

  it("rejects a previousTenantId that doesn't belong to the current user", async () => {
    const otherProperty = await createOtherLandlordsProperty();
    const otherTenant = await prisma.tenant.create({
      data: { userId: otherProperty.userId, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
    });

    const res = await request(app).post("/api/tenants").send({
      firstName: "Jamie",
      lastName: "Rivera",
      propertyId: property.id,
      previousTenantId: otherTenant.id,
    });

    expect(res.status).toBe(400);
  });

  it("records background check and income fields", async () => {
    const created = await request(app)
      .post("/api/tenants")
      .send({ firstName: "Jamie", lastName: "Rivera", propertyId: property.id });

    const res = await request(app).put(`/api/tenants/${created.body.id}`).send({
      backgroundCheckStatus: "clear",
      backgroundCheckDate: "2026-08-01",
      monthlyIncome: "5400.00",
    });

    expect(res.status).toBe(200);
    expect(res.body.backgroundCheckStatus).toBe("clear");
    expect(res.body.monthlyIncome).toBe("5400");
  });

  describe("tenant documents (R2)", () => {
    let tenant;

    beforeEach(async () => {
      tenant = await prisma.tenant.create({
        data: { userId: property.userId, propertyId: property.id, firstName: "Jamie", lastName: "Rivera" },
      });
    });

    it("returns a presigned upload URL and R2 key scoped to the tenant", async () => {
      const res = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/upload-url`)
        .send({ fileName: "credit-report.pdf", contentType: "application/pdf", category: "CREDIT_REPORT" });

      expect(res.status).toBe(200);
      expect(res.body.key).toMatch(new RegExp(`^tenants/${tenant.id}/`));
      expect(mockR2.getUploadUrl).toHaveBeenCalledWith(res.body.key, "application/pdf");
    });

    it("rejects an unsupported content type", async () => {
      const res = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/upload-url`)
        .send({ fileName: "report.docx", contentType: "application/msword", category: "CREDIT_REPORT" });

      expect(res.status).toBe(400);
    });

    it("rejects an invalid category", async () => {
      const res = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/upload-url`)
        .send({ fileName: "id.png", contentType: "image/png", category: "PASSPORT" });

      expect(res.status).toBe(400);
    });

    it("confirms an upload and lists it", async () => {
      const key = `tenants/${tenant.id}/abc-id.png`;
      const confirmRes = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/confirm`)
        .send({ key, category: "ID", fileName: "id.png" });

      expect(confirmRes.status).toBe(201);
      expect(confirmRes.body.category).toBe("ID");
      expect(confirmRes.body.documentKey).toBe(key);

      const listRes = await request(app).get(`/api/tenants/${tenant.id}/documents`);
      expect(listRes.status).toBe(200);
      expect(listRes.body).toHaveLength(1);
    });

    it("allows multiple documents in the same category", async () => {
      await request(app)
        .post(`/api/tenants/${tenant.id}/documents/confirm`)
        .send({ key: `tenants/${tenant.id}/1-paystub1.pdf`, category: "INCOME_VERIFICATION", fileName: "paystub1.pdf" });
      await request(app)
        .post(`/api/tenants/${tenant.id}/documents/confirm`)
        .send({ key: `tenants/${tenant.id}/2-paystub2.pdf`, category: "INCOME_VERIFICATION", fileName: "paystub2.pdf" });

      const res = await request(app).get(`/api/tenants/${tenant.id}/documents`);
      expect(res.body).toHaveLength(2);
    });

    it("rejects confirming a key that doesn't belong to this tenant", async () => {
      const res = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/confirm`)
        .send({ key: "tenants/someone-elses-tenant/abc-id.png", category: "ID", fileName: "id.png" });

      expect(res.status).toBe(400);
    });

    it("returns a presigned download URL for a document", async () => {
      const key = `tenants/${tenant.id}/abc-id.png`;
      const created = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/confirm`)
        .send({ key, category: "ID", fileName: "id.png" });

      const res = await request(app).get(`/api/tenants/${tenant.id}/documents/${created.body.id}/download-url`);

      expect(res.status).toBe(200);
      expect(res.body.downloadUrl).toContain(key);
      expect(mockR2.getDownloadUrl).toHaveBeenCalledWith(key);
    });

    it("deletes a document from R2 and the database", async () => {
      const key = `tenants/${tenant.id}/abc-id.png`;
      const created = await request(app)
        .post(`/api/tenants/${tenant.id}/documents/confirm`)
        .send({ key, category: "ID", fileName: "id.png" });

      const res = await request(app).delete(`/api/tenants/${tenant.id}/documents/${created.body.id}`);
      expect(res.status).toBe(204);
      expect(mockR2.deleteObject).toHaveBeenCalledWith(key);

      const check = await prisma.tenantDocument.findUnique({ where: { id: created.body.id } });
      expect(check).toBeNull();
    });

    it("404s document endpoints for another user's tenant", async () => {
      const otherProperty = await createOtherLandlordsProperty();
      const otherTenant = await prisma.tenant.create({
        data: { userId: otherProperty.userId, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
      });

      const res = await request(app)
        .post(`/api/tenants/${otherTenant.id}/documents/upload-url`)
        .send({ fileName: "id.png", contentType: "image/png", category: "ID" });

      expect(res.status).toBe(404);
    });
  });
});
