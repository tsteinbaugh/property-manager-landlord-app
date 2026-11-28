const request = require("supertest");
const createApp = require("../app");
const prisma = require("../lib/prisma");
const { CLAUSE_TEMPLATES } = require("../lib/clauseTemplates");
const { ruleApplies } = require("../lib/clauseApplicability");

// The provided clauses "Add my default clauses" includes on its own for a state:
// those the law always requires, those an applicability rule says this lease
// needs (by default a property with no year built and a lease with nothing
// entered, so missing facts count as applying), and the legal duties on by
// default (`defaultOn`), less any a state version replaces.
function requiredFor(state, ctx = { property: { yearBuilt: null }, lease: {} }) {
  const here = CLAUSE_TEMPLATES.filter((t) => t.states.includes(state));
  const replaced = new Set(here.map((t) => t.supersedes).filter(Boolean));
  return here
    .filter((t) => (t.alwaysDefault || t.defaultOn || ruleApplies(t.id, ctx)) && !replaced.has(t.id))
    .map((t) => t.id);
}

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
  putObject: vi.fn(() => Promise.resolve()),
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
  await prisma.leaseClause.deleteMany();
  await prisma.leaseAttachment.deleteMany();
  await prisma.lateFeeWaiver.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.clause.deleteMany();
  await prisma.defaultClauseTemplate.deleteMany();
  await prisma.occupant.deleteMany();
  await prisma.appliance.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.property.deleteMany();
  await prisma.entity.deleteMany();
  await prisma.user.deleteMany();
}

describe("leases routes", () => {
  let property;
  let tenant;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
    mockR2.getUploadUrl.mockClear();
    mockR2.getDownloadUrl.mockClear();
    mockR2.deleteObject.mockClear();
    mockR2.putObject.mockClear();
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
    tenant = await prisma.tenant.create({
      data: {
        userId: user.id,
        propertyId: property.id,
        firstName: "Jamie",
        lastName: "Rivera",
        applicationStatus: "APPROVED",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/leases");

    expect(res.status).toBe(401);
  });

  it("creates a lease under an owned property", async () => {
    const res = await request(app).post("/api/leases").send({
      propertyId: property.id,
      startDate: "2026-09-01",
      monthlyRent: "1800.00",
    });

    expect(res.status).toBe(201);
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.status).toBe("ACTIVE");
    expect(res.body.leaseTenants).toEqual([]);
  });

  it("rejects creating a lease against an archived property", async () => {
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const res = await request(app).post("/api/leases").send({
      propertyId: property.id,
      startDate: "2026-09-01",
      monthlyRent: "1800.00",
    });

    expect(res.status).toBe(400);
  });

  it("excludes leases of archived properties from the cross-property list, but not a property-scoped one", async () => {
    await request(app)
      .post("/api/leases")
      .send({ propertyId: property.id, startDate: "2026-09-01", monthlyRent: "1800.00" });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const hubRes = await request(app).get("/api/leases");
    expect(hubRes.body).toEqual([]);

    const scopedRes = await request(app).get("/api/leases").query({ propertyId: property.id });
    expect(scopedRes.body).toHaveLength(1);
  });

  it("rejects a lease missing required fields", async () => {
    const res = await request(app).post("/api/leases").send({
      propertyId: property.id,
    });

    expect(res.status).toBe(400);
  });

  it("rejects a lease under a property owned by another user", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });
    const otherProperty = await prisma.property.create({
      data: {
        entityId: otherEntity.id,
        userId: otherUser.id,
        address1: "456 Oak St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });

    const res = await request(app).post("/api/leases").send({
      propertyId: otherProperty.id,
      startDate: "2026-09-01",
      monthlyRent: "1800.00",
    });

    expect(res.status).toBe(400);
  });

  it("lists leases, optionally filtered by property", async () => {
    await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).get("/api/leases").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single lease by id", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).get(`/api/leases/${lease.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(lease.id);
  });

  it("404s for another user's lease", async () => {
    const otherUser = await prisma.user.create({
      data: { clerkId: "clerk_other_user", email: "other@example.com" },
    });
    const otherEntity = await prisma.entity.create({
      data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
    });
    const otherProperty = await prisma.property.create({
      data: {
        entityId: otherEntity.id,
        userId: otherUser.id,
        address1: "456 Oak St",
        city: "Frederick",
        state: "CO",
        zip: "80530",
      },
    });
    const otherLease = await prisma.lease.create({
      data: {
        propertyId: otherProperty.id,
        userId: otherUser.id,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).get(`/api/leases/${otherLease.id}`);
    expect(res.status).toBe(404);
  });

  it("updates a lease", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app)
      .put(`/api/leases/${lease.id}`)
      .send({ status: "TERMINATED", notes: "Tenant broke lease early" });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("TERMINATED");
    expect(res.body.notes).toBe("Tenant broke lease early");
  });

  it("updates an integer field (lateFeeGraceDays)", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).put(`/api/leases/${lease.id}`).send({ lateFeeGraceDays: 5 });

    expect(res.status).toBe(200);
    expect(res.body.lateFeeGraceDays).toBe(5);
  });

  it("soft-deletes a lease — the row survives, hidden from the default list", async () => {
    const lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: property.userId,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });

    const res = await request(app).delete(`/api/leases/${lease.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.lease.findUnique({ where: { id: lease.id } });
    expect(check).not.toBeNull();
    expect(check.deleted).toBe(true);
    expect(check.deletedAt).toBeTruthy();

    const listRes = await request(app).get("/api/leases").query({ propertyId: property.id });
    expect(listRes.body).toEqual([]);
  });

  it("lists deleted leases with ?deleted=true, and all with ?deleted=all", async () => {
    const kept = await prisma.lease.create({
      data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
    });
    const deleted = await prisma.lease.create({
      data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
    });
    await request(app).delete(`/api/leases/${deleted.id}`);

    const deletedOnly = await request(app).get("/api/leases").query({ propertyId: property.id, deleted: "true" });
    expect(deletedOnly.body.map((l) => l.id)).toEqual([deleted.id]);

    const all = await request(app).get("/api/leases").query({ propertyId: property.id, deleted: "all" });
    expect(all.body.map((l) => l.id).sort()).toEqual([deleted.id, kept.id].sort());
  });

  it("?deleted=all finds a lease even when its property is archived", async () => {
    const lease = await prisma.lease.create({
      data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
    });
    await prisma.property.update({ where: { id: property.id }, data: { archived: true } });

    const hubRes = await request(app).get("/api/leases");
    expect(hubRes.body.map((l) => l.id)).not.toContain(lease.id);

    const allRes = await request(app).get("/api/leases").query({ deleted: "all" });
    expect(allRes.body.map((l) => l.id)).toContain(lease.id);
  });

  it("restores a deleted lease", async () => {
    const lease = await prisma.lease.create({
      data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
    });
    await request(app).delete(`/api/leases/${lease.id}`);

    const res = await request(app).post(`/api/leases/${lease.id}/restore`);
    expect(res.status).toBe(200);
    expect(res.body.deleted).toBe(false);

    const listRes = await request(app).get("/api/leases").query({ propertyId: property.id });
    expect(listRes.body.map((l) => l.id)).toContain(lease.id);
  });

  it("rejects restoring a lease that isn't deleted", async () => {
    const lease = await prisma.lease.create({
      data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
    });

    const res = await request(app).post(`/api/leases/${lease.id}/restore`);
    expect(res.status).toBe(400);
  });


  describe("attaching and detaching tenants", () => {
    let lease;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });
    });

    it("attaches a tenant with a role", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "PRIMARY" });

      expect(res.status).toBe(201);
      expect(res.body.leaseTenants).toHaveLength(1);
      expect(res.body.leaseTenants[0].role).toBe("PRIMARY");
      expect(res.body.leaseTenants[0].tenant.id).toBe(tenant.id);
    });

    it("rejects attaching a tenant who isn't approved yet", async () => {
      const pendingTenant = await prisma.tenant.create({
        data: { userId: property.userId, propertyId: property.id, firstName: "Pat", lastName: "Applicant" },
      });

      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: pendingTenant.id, role: "PRIMARY" });

      expect(res.status).toBe(400);
    });

    it("rejects an invalid role", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "ROOMMATE" });

      expect(res.status).toBe(400);
    });

    it("rejects attaching a tenant owned by another user", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: {
          entityId: otherEntity.id,
          userId: otherUser.id,
          address1: "456 Oak St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
      const otherTenant = await prisma.tenant.create({
        data: { userId: otherUser.id, propertyId: otherProperty.id, firstName: "Not", lastName: "Mine" },
      });

      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: otherTenant.id, role: "PRIMARY" });

      expect(res.status).toBe(400);
    });

    it("rejects attaching the same tenant twice", async () => {
      await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "PRIMARY" });

      const res = await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "CO_TENANT" });

      expect(res.status).toBe(400);
    });

    it("detaches a tenant from a lease", async () => {
      await request(app)
        .post(`/api/leases/${lease.id}/tenants`)
        .send({ tenantId: tenant.id, role: "PRIMARY" });

      const res = await request(app).delete(`/api/leases/${lease.id}/tenants/${tenant.id}`);
      expect(res.status).toBe(204);

      const updated = await request(app).get(`/api/leases/${lease.id}`);
      expect(updated.body.leaseTenants).toEqual([]);
    });

    it("404s when detaching a tenant not on the lease", async () => {
      const res = await request(app).delete(`/api/leases/${lease.id}/tenants/${tenant.id}`);
      expect(res.status).toBe(404);
    });
  });

  describe("lease document (R2)", () => {
    let lease;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });
    });

    it("issues a presigned upload URL scoped to the lease", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/document-upload-url`)
        .send({ fileName: "signed lease.pdf", contentType: "application/pdf" });

      expect(res.status).toBe(200);
      expect(res.body.uploadUrl).toBeTruthy();
      expect(res.body.key).toMatch(new RegExp(`^leases/${lease.id}/.+signed_lease\\.pdf$`));
      expect(mockR2.getUploadUrl).toHaveBeenCalledWith(res.body.key, "application/pdf");
    });

    it("rejects a non-PDF content type", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/document-upload-url`)
        .send({ fileName: "lease.docx", contentType: "application/msword" });

      expect(res.status).toBe(400);
    });

    it("confirms an upload and attaches the key to the lease", async () => {
      const key = `leases/${lease.id}/abc-lease.pdf`;

      const res = await request(app).post(`/api/leases/${lease.id}/document-confirm`).send({ key });

      expect(res.status).toBe(200);
      expect(res.body.documentKey).toBe(key);
    });

    it("rejects confirming a key that doesn't belong to the lease", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/document-confirm`)
        .send({ key: "leases/some-other-lease/abc-lease.pdf" });

      expect(res.status).toBe(400);
    });

    it("deletes the old object when replacing an existing document", async () => {
      const firstKey = `leases/${lease.id}/first-lease.pdf`;
      const secondKey = `leases/${lease.id}/second-lease.pdf`;

      await request(app).post(`/api/leases/${lease.id}/document-confirm`).send({ key: firstKey });
      const res = await request(app)
        .post(`/api/leases/${lease.id}/document-confirm`)
        .send({ key: secondKey });

      expect(res.status).toBe(200);
      expect(res.body.documentKey).toBe(secondKey);
      expect(mockR2.deleteObject).toHaveBeenCalledWith(firstKey);
    });

    it("returns a presigned download URL for an uploaded document", async () => {
      const key = `leases/${lease.id}/lease.pdf`;
      await request(app).post(`/api/leases/${lease.id}/document-confirm`).send({ key });

      const res = await request(app).get(`/api/leases/${lease.id}/document-url`);

      expect(res.status).toBe(200);
      expect(res.body.downloadUrl).toBeTruthy();
      expect(mockR2.getDownloadUrl).toHaveBeenCalledWith(key);
    });

    it("404s for a download URL when no document is uploaded", async () => {
      const res = await request(app).get(`/api/leases/${lease.id}/document-url`);
      expect(res.status).toBe(404);
    });

    it("deletes the lease document", async () => {
      const key = `leases/${lease.id}/lease.pdf`;
      await request(app).post(`/api/leases/${lease.id}/document-confirm`).send({ key });

      const res = await request(app).delete(`/api/leases/${lease.id}/document`);

      expect(res.status).toBe(204);
      expect(mockR2.deleteObject).toHaveBeenCalledWith(key);

      const updated = await prisma.lease.findUnique({ where: { id: lease.id } });
      expect(updated.documentKey).toBeNull();
    });

    it("404s deleting a document when none is uploaded", async () => {
      const res = await request(app).delete(`/api/leases/${lease.id}/document`);
      expect(res.status).toBe(404);
    });

    it("404s document endpoints for another user's lease", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: {
          entityId: otherEntity.id,
          userId: otherUser.id,
          address1: "456 Oak St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
      const otherLease = await prisma.lease.create({
        data: {
          propertyId: otherProperty.id,
          userId: otherUser.id,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });

      const res = await request(app)
        .post(`/api/leases/${otherLease.id}/document-upload-url`)
        .send({ fileName: "lease.pdf", contentType: "application/pdf" });

      expect(res.status).toBe(404);
    });
  });

  describe("lease attachments (R2)", () => {
    let lease;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });
    });

    it("issues a presigned upload URL scoped to the lease's attachments prefix", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/attachments/upload-url`)
        .send({ fileName: "hoa rules.pdf", contentType: "application/pdf", category: "HOA Rules" });

      expect(res.status).toBe(200);
      expect(res.body.uploadUrl).toBeTruthy();
      expect(res.body.key).toMatch(new RegExp(`^leases/${lease.id}/attachments/.+hoa_rules\\.pdf$`));
    });

    it("rejects an unsupported content type", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/attachments/upload-url`)
        .send({ fileName: "rules.docx", contentType: "application/msword", category: "HOA Rules" });

      expect(res.status).toBe(400);
    });

    it("confirms an upload, creating a new attachment row (not overwriting a single document field)", async () => {
      const key = `leases/${lease.id}/attachments/abc-hoa-rules.pdf`;

      const res = await request(app)
        .post(`/api/leases/${lease.id}/attachments/confirm`)
        .send({ key, category: "HOA Rules", fileName: "hoa rules.pdf" });

      expect(res.status).toBe(201);
      expect(res.body.category).toBe("HOA Rules");

      const secondKey = `leases/${lease.id}/attachments/def-rules-addendum.pdf`;
      await request(app)
        .post(`/api/leases/${lease.id}/attachments/confirm`)
        .send({ key: secondKey, category: "Rules Addendum", fileName: "rules addendum.pdf" });

      const list = await request(app).get(`/api/leases/${lease.id}/attachments`);
      expect(list.body).toHaveLength(2);
    });

    it("rejects confirming a key that doesn't belong to this lease's attachment prefix", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/attachments/confirm`)
        .send({ key: `leases/${lease.id}/generated-lease.pdf`, category: "HOA Rules", fileName: "sneaky.pdf" });

      expect(res.status).toBe(400);
    });

    it("returns a presigned download URL and deletes the R2 object on removal", async () => {
      const key = `leases/${lease.id}/attachments/abc-hoa-rules.pdf`;
      const confirmed = await request(app)
        .post(`/api/leases/${lease.id}/attachments/confirm`)
        .send({ key, category: "HOA Rules", fileName: "hoa rules.pdf" });

      const downloadRes = await request(app).get(`/api/leases/${lease.id}/attachments/${confirmed.body.id}/download-url`);
      expect(downloadRes.status).toBe(200);
      expect(downloadRes.body.downloadUrl).toBeTruthy();

      const deleteRes = await request(app).delete(`/api/leases/${lease.id}/attachments/${confirmed.body.id}`);
      expect(deleteRes.status).toBe(204);
      expect(mockR2.deleteObject).toHaveBeenCalledWith(key);

      const list = await request(app).get(`/api/leases/${lease.id}/attachments`);
      expect(list.body).toHaveLength(0);
    });

    it("404s attachment endpoints for another user's lease", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: {
          entityId: otherEntity.id,
          userId: otherUser.id,
          address1: "456 Oak St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
      const otherLease = await prisma.lease.create({
        data: {
          propertyId: otherProperty.id,
          userId: otherUser.id,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });

      const res = await request(app)
        .post(`/api/leases/${otherLease.id}/attachments/upload-url`)
        .send({ fileName: "rules.pdf", contentType: "application/pdf", category: "HOA Rules" });

      expect(res.status).toBe(404);
    });
  });

  describe("lease builder clauses", () => {
    let lease;
    let clause;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });
      clause = await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "Late Fees",
          bodyText: "A late fee of {{late_fee_amount}} applies after {{late_fee_grace_days}} days.",
          group: "Rent & Payment",
        },
      });
    });

    it("attaches a clause from the library as a snapshot, grouped and numbered", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id });

      expect(res.status).toBe(201);
      expect(res.body.leaseClauses).toHaveLength(1);
      expect(res.body.leaseClauses[0].title).toBe("Late Fees");
      expect(res.body.leaseClauses[0].group).toBe("Rent & Payment");
      expect(res.body.leaseClauses[0].sectionLabel).toBe("1.1");
      expect(res.body.leaseClauses[0].order).toBe(1);
    });

    it("resolves {{variables}} against the lease's own fields", async () => {
      await prisma.lease.update({ where: { id: lease.id }, data: { lateFeeAmount: "75.00", lateFeeGraceDays: 5 } });
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id });

      expect(res.body.leaseClauses[0].resolvedBodyText).toContain("$75.00");
      expect(res.body.leaseClauses[0].resolvedBodyText).toContain("5 days");
      expect(res.body.leaseClauses[0].bodyText).toContain("{{late_fee_amount}}"); // raw text untouched
    });

    it("resolves occupant_names from the primary tenant's linked Occupant records", async () => {
      await prisma.occupant.create({ data: { tenantId: tenant.id, name: "Sam Rivera", dateOfBirth: new Date("2017-03-04") } });
      await prisma.occupant.create({ data: { tenantId: tenant.id, name: "Alex Rivera", dateOfBirth: new Date("2021-06-01") } });
      await prisma.leaseTenant.create({ data: { leaseId: lease.id, tenantId: tenant.id, role: "PRIMARY" } });
      const occupantClause = await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "Occupants",
          bodyText: "Occupied by {{tenant_names}}, together with {{occupant_names}}.",
          group: "Tenant Responsibilities",
        },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: occupantClause.id });

      expect(res.body.leaseClauses[0].resolvedBodyText).toContain("Sam Rivera, Alex Rivera");
    });

    it("falls back to a plain-language default when no occupants are linked", async () => {
      await prisma.leaseTenant.create({ data: { leaseId: lease.id, tenantId: tenant.id, role: "PRIMARY" } });
      const occupantClause = await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "Occupants",
          bodyText: "Occupied by {{tenant_names}}, together with {{occupant_names}}.",
          group: "Tenant Responsibilities",
        },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: occupantClause.id });

      expect(res.body.leaseClauses[0].resolvedBodyText).toContain("no additional occupants identified");
    });

    it("resolves pet_deposit from the lease's PET-type Deposit, appliance_list from active Appliances, and tenant_insurance_minimum from the lease field", async () => {
      await prisma.deposit.create({
        data: {
          userId: property.userId,
          entityId: property.entityId,
          propertyId: property.id,
          leaseId: lease.id,
          type: "PET",
          amountHeld: "250.00",
          dateReceived: new Date("2026-09-01"),
        },
      });
      await prisma.appliance.create({
        data: {
          userId: property.userId,
          entityId: property.entityId,
          propertyId: property.id,
          location: "Kitchen",
          make: "Whirlpool",
          model: "WRF555",
        },
      });
      await prisma.appliance.create({
        data: {
          userId: property.userId,
          entityId: property.entityId,
          propertyId: property.id,
          location: "Garage",
          active: false, // retired — should not appear
        },
      });
      await prisma.lease.update({ where: { id: lease.id }, data: { tenantInsuranceMinimumCoverage: "100000.00" } });

      const variableClause = await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "Amounts & Equipment",
          bodyText: "Pet deposit {{pet_deposit}}. Appliances: {{appliance_list}}. Insurance minimum {{tenant_insurance_minimum}}.",
          group: "Other / Miscellaneous",
        },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: variableClause.id });
      const text = res.body.leaseClauses[0].resolvedBodyText;

      expect(text).toContain("$250.00");
      expect(text).toContain("Kitchen (Whirlpool WRF555)");
      expect(text).not.toContain("Garage");
      expect(text).toContain("$100,000.00");
    });

    it("attaches a clause from the provided template set", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "rent-payment" });

      expect(res.status).toBe(201);
      expect(res.body.leaseClauses[0].sourceTemplateId).toBe("rent-payment");
      expect(res.body.leaseClauses[0].sourceClauseId).toBeNull();
    });

    it("rejects an unknown template id", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "not-a-real-template" });
      expect(res.status).toBe(400);
    });

    it("editing the library clause afterward does not change an already-attached snapshot", async () => {
      await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id });
      await prisma.clause.update({ where: { id: clause.id }, data: { bodyText: "Edited later text." } });

      const res = await request(app).get(`/api/leases/${lease.id}`);
      expect(res.body.leaseClauses[0].bodyText).toContain("{{late_fee_amount}}");
    });

    it("rejects attaching a clause owned by another user", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherClause = await prisma.clause.create({
        data: { userId: otherUser.id, title: "Not mine", bodyText: "...", group: "Other / Miscellaneous" },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: otherClause.id });
      expect(res.status).toBe(400);
    });

    it("adds a custom one-off clause without touching the library", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({
        title: "Custom Rule",
        bodyText: "No smoking anywhere on the premises.",
        group: "Rules & Regulations",
      });

      expect(res.status).toBe(201);
      expect(res.body.leaseClauses).toHaveLength(1);
      expect(res.body.leaseClauses[0].sourceClauseId).toBeNull();

      const libraryCount = await prisma.clause.count();
      expect(libraryCount).toBe(1); // just the one created in beforeEach
    });

    it("rejects a custom clause missing required fields", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ title: "No body or group" });
      expect(res.status).toBe(400);
    });

    it("rejects a custom clause with an invalid group", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({
        title: "Bad group",
        bodyText: "...",
        group: "Not A Real Group",
      });
      expect(res.status).toBe(400);
    });

    it("groups clauses and numbers them compactly, skipping unused groups", async () => {
      await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id }); // Rent & Payment
      const res = await request(app).post(`/api/leases/${lease.id}/clauses`).send({
        title: "Pet Rule",
        bodyText: "...",
        group: "Pets", // 8th in CLAUSE_GROUPS, but only the 2nd group actually used here
      });

      const labels = res.body.leaseClauses.map((c) => c.sectionLabel);
      expect(labels).toEqual(["1.1", "2.1"]);
    });

    it("edits a lease clause snapshot, including its group", async () => {
      const attach = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id });
      const leaseClauseId = attach.body.leaseClauses[0].id;

      const res = await request(app)
        .put(`/api/leases/${lease.id}/clauses/${leaseClauseId}`)
        .send({ bodyText: "Overridden text just for this lease.", group: "Other / Miscellaneous" });

      expect(res.status).toBe(200);
      expect(res.body.leaseClauses[0].bodyText).toBe("Overridden text just for this lease.");
      expect(res.body.leaseClauses[0].group).toBe("Other / Miscellaneous");

      const sourceStillIntact = await prisma.clause.findUnique({ where: { id: clause.id } });
      expect(sourceStillIntact.group).toBe("Rent & Payment");
    });

    it("rejects editing a provided clause on a lease", async () => {
      const attach = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "rent-payment" });
      const provided = attach.body.leaseClauses[0];

      const res = await request(app)
        .put(`/api/leases/${lease.id}/clauses/${provided.id}`)
        .send({ bodyText: "Changed." });
      expect(res.status).toBe(400);

      const stored = await prisma.leaseClause.findUnique({ where: { id: provided.id } });
      expect(stored.bodyText).toBe(provided.bodyText);
    });

    it("rejects editing a lease clause to an invalid group", async () => {
      const attach = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id });
      const leaseClauseId = attach.body.leaseClauses[0].id;

      const res = await request(app)
        .put(`/api/leases/${lease.id}/clauses/${leaseClauseId}`)
        .send({ group: "Not A Real Group" });
      expect(res.status).toBe(400);
    });

    it("removes a clause from a lease without touching the library", async () => {
      const attach = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ clauseId: clause.id });
      const leaseClauseId = attach.body.leaseClauses[0].id;

      const res = await request(app).delete(`/api/leases/${lease.id}/clauses/${leaseClauseId}`);
      expect(res.status).toBe(204);

      const updated = await request(app).get(`/api/leases/${lease.id}`);
      expect(updated.body.leaseClauses).toEqual([]);

      const libraryClause = await prisma.clause.findUnique({ where: { id: clause.id } });
      expect(libraryClause).not.toBeNull();
    });

    it("404s clause actions for another user's lease", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: {
          entityId: otherEntity.id,
          userId: otherUser.id,
          address1: "456 Oak St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
      const otherLease = await prisma.lease.create({
        data: {
          propertyId: otherProperty.id,
          userId: otherUser.id,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });

      const res = await request(app).post(`/api/leases/${otherLease.id}/clauses`).send({ clauseId: clause.id });
      expect(res.status).toBe(404);
    });
  });

  describe("adding default clauses", () => {
    let lease;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });
    });

    it("attaches every default clause and default template in one action", async () => {
      await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "My Standard Late Fee",
          bodyText: "...",
          group: "Rent & Payment",
          isDefault: true,
        },
      });
      await prisma.clause.create({
        data: { userId: property.userId, title: "Not a default", bodyText: "...", group: "Pets", isDefault: false },
      });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "rent-payment" } });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      expect(res.status).toBe(201);
      expect(res.body.leaseClauses).toHaveLength(2 + requiredFor("CO").length);
      const titles = res.body.leaseClauses.map((c) => c.title);
      expect(titles).toContain("My Standard Late Fee");
      expect(titles).toContain("Rent Payment");
      expect(titles).not.toContain("Not a default");
    });

    it("adds only the clauses the law always requires when the landlord marked no defaults", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      expect(res.status).toBe(201);
      const required = requiredFor("CO");
      expect(required.length).toBeGreaterThan(0);
      expect(res.body.leaseClauses.map((c) => c.sourceTemplateId).sort()).toEqual(required.sort());
    });

    it("adds a legal duty that is on by default unless the landlord unticked it", async () => {
      const duty = CLAUSE_TEMPLATES.find((t) => t.defaultOn && t.states.includes("CO"));
      const ids = async () =>
        (await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`)).body.leaseClauses.map(
          (c) => c.sourceTemplateId,
        );
      await request(app).delete(`/api/clause-templates/${duty.id}/default`);
      expect(await ids()).not.toContain(duty.id);
      await request(app).post(`/api/clause-templates/${duty.id}/default`);
      expect(await ids()).toContain(duty.id);
    });

    it("adds the lead-paint disclosure for a home built before 1978 or with no year, not for a newer one", async () => {
      const ids = async () =>
        (await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`)).body.leaseClauses.map(
          (c) => c.sourceTemplateId,
        );

      await prisma.property.update({ where: { id: property.id }, data: { yearBuilt: 1995 } });
      expect(await ids()).not.toContain("lead-based-paint");

      await prisma.property.update({ where: { id: property.id }, data: { yearBuilt: 1977 } });
      expect(await ids()).toContain("lead-based-paint");
    });

    it("adds a deposit clause only when a deposit is taken, and lets the landlord untick a legal duty one", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { state: "WA" } });
      const ids = async () =>
        (await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`)).body.leaseClauses.map(
          (c) => c.sourceTemplateId,
        );

      await prisma.lease.update({ where: { id: lease.id }, data: { securityDepositAmount: "0.00" } });
      let added = await ids();
      expect(added).not.toContain("security-deposit-use-wa");
      expect(added).not.toContain("deposit-depository-wa");

      await prisma.lease.update({ where: { id: lease.id }, data: { securityDepositAmount: "1000.00" } });
      await request(app).delete(`/api/clause-templates/deposit-depository-wa/default`);
      added = await ids();
      expect(added).toContain("security-deposit-use-wa");
      expect(added).not.toContain("deposit-depository-wa");

      await request(app).post(`/api/clause-templates/deposit-depository-wa/default`);
      expect(await ids()).toContain("deposit-depository-wa");
    });

    it("never adds an always-required clause from another state, or one a state version replaces", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      const ids = res.body.leaseClauses.map((c) => c.sourceTemplateId);
      for (const id of ids) {
        expect(CLAUSE_TEMPLATES.find((t) => t.id === id).states).toContain("CO");
      }
      const replacedForCo = new Set(
        CLAUSE_TEMPLATES.filter((t) => t.states.includes("CO") && t.supersedes).map((t) => t.supersedes),
      );
      expect(ids.some((id) => replacedForCo.has(id))).toBe(false);
    });

    it("is safe to click twice — does not duplicate already-attached defaults", async () => {
      await prisma.clause.create({
        data: { userId: property.userId, title: "Default Clause", bodyText: "...", group: "Pets", isDefault: true },
      });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "rent-payment" } });

      await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);
      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      expect(res.body.leaseClauses).toHaveLength(2 + requiredFor("CO").length);
    });

    it("only adds defaults still missing, if some were already attached individually", async () => {
      await prisma.clause.create({
        data: { userId: property.userId, title: "Default Clause", bodyText: "...", group: "Pets", isDefault: true },
      });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "rent-payment" } });

      await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "rent-payment" });
      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      expect(res.body.leaseClauses).toHaveLength(2 + requiredFor("CO").length);
      expect(res.body.leaseClauses.filter((c) => c.sourceTemplateId === "rent-payment")).toHaveLength(1);
    });

    it("404s for another user's lease", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: {
          entityId: otherEntity.id,
          userId: otherUser.id,
          address1: "456 Oak St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
      const otherLease = await prisma.lease.create({
        data: {
          propertyId: otherProperty.id,
          userId: otherUser.id,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });

      const res = await request(app).post(`/api/leases/${otherLease.id}/clauses/add-defaults`);
      expect(res.status).toBe(404);
    });

    it("only attaches a state-tagged default when it matches the lease's property state; universal defaults always attach", async () => {
      await prisma.clause.create({
        data: {
          userId: property.userId, // property.state is "CO"
          title: "Colorado Default",
          bodyText: "...",
          group: "Rules & Regulations",
          states: ["CO"],
          isDefault: true,
        },
      });
      await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "Texas Default",
          bodyText: "...",
          group: "Rules & Regulations",
          states: ["TX"],
          isDefault: true,
        },
      });
      await prisma.clause.create({
        data: {
          userId: property.userId,
          title: "Universal Default",
          bodyText: "...",
          group: "Rules & Regulations",
          states: [],
          isDefault: true,
        },
      });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "security-deposit-return-co" } });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      const titles = res.body.leaseClauses.map((c) => c.title);
      expect(titles).toContain("Colorado Default");
      expect(titles).toContain("Universal Default");
      expect(titles).toContain("Security Deposit Return Timeline");
      expect(titles).not.toContain("Texas Default");
    });

    it("attaches a default tagged with multiple states when the property matches any of them", async () => {
      await prisma.clause.create({
        data: {
          userId: property.userId, // property.state is "CO"
          title: "Multi-State Default",
          bodyText: "...",
          group: "Rules & Regulations",
          states: ["TX", "CO", "NY"],
          isDefault: true,
        },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      expect(res.body.leaseClauses.map((c) => c.title)).toContain("Multi-State Default");
    });

    it("only auto-attaches the month-to-month notice variant matching the property's for-cause-eviction exemption", async () => {
      // Worked out from facts (2026-11-27): the owner lives in this single-family home.
      await prisma.property.update({ where: { id: property.id }, data: { facts: { propertyType: "SINGLE_FAMILY", coOwnerResides: "here" } } });
      await prisma.defaultClauseTemplate.create({
        data: { userId: property.userId, templateId: "month-to-month-notice-co-exempt" },
      });
      await prisma.defaultClauseTemplate.create({
        data: { userId: property.userId, templateId: "month-to-month-notice-co-covered" },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      const titles = res.body.leaseClauses.map((c) => c.title);
      expect(titles).toContain("Termination Notice (Property Exempt from For-Cause Requirements)");
      expect(titles).not.toContain("Termination Notice (Subject to For-Cause Requirements)");
    });

    it("auto-attaches the covered variant for a standard long-term rental (the default)", async () => {
      // A family member living there doesn't make it exempt (C.R.S. § 38-12-1302(1)(b)).
      await prisma.property.update({ where: { id: property.id }, data: { facts: { propertyType: "SINGLE_FAMILY", coOwnerResides: "no" } } });
      await prisma.defaultClauseTemplate.create({
        data: { userId: property.userId, templateId: "month-to-month-notice-co-exempt" },
      });
      await prisma.defaultClauseTemplate.create({
        data: { userId: property.userId, templateId: "month-to-month-notice-co-covered" },
      });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      const titles = res.body.leaseClauses.map((c) => c.title);
      expect(titles).toContain("Termination Notice (Subject to For-Cause Requirements)");
      expect(titles).not.toContain("Termination Notice (Property Exempt from For-Cause Requirements)");
    });

    it("attaches at most one member of a choice group, preferring the group's default", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { state: "CA" } });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "tpa-exemption-notice-ca" } });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "tpa-notice-ca" } });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      const sourceIds = res.body.leaseClauses.map((c) => c.sourceTemplateId);
      expect(sourceIds).toContain("tpa-notice-ca");
      expect(sourceIds).not.toContain("tpa-exemption-notice-ca");
    });

    it("skips a choice-group default when an alternative is already attached", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { state: "CA" } });
      await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "no-sublet-assign-discretion-ca" });
      await prisma.defaultClauseTemplate.create({ data: { userId: property.userId, templateId: "no-sublet-assign-ca" } });

      const res = await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);

      const sourceIds = res.body.leaseClauses.map((c) => c.sourceTemplateId);
      expect(sourceIds).toContain("no-sublet-assign-discretion-ca");
      expect(sourceIds).not.toContain("no-sublet-assign-ca");
    });
  });

  describe("choice-group clauses", () => {
    it("refuses to manually attach a second member of the same choice group", async () => {
      const lease = await prisma.lease.create({
        data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
      });
      const first = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "tpa-notice-ca" });
      expect(first.status).toBe(201);

      const second = await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "tpa-exemption-notice-ca" });

      expect(second.status).toBe(409);
      const count = await prisma.leaseClause.count({ where: { leaseId: lease.id } });
      expect(count).toBe(1);
    });
  });

  describe("generating a lease document", () => {
    let lease;

    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
          lateFeeAmount: "75.00",
          lateFeeGraceDays: 5,
        },
      });
      await request(app).post(`/api/leases/${lease.id}/tenants`).send({ tenantId: tenant.id, role: "PRIMARY" });
      await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "rent-payment" });
      await request(app).post(`/api/leases/${lease.id}/clauses`).send({ templateId: "early-termination" });
      await prisma.property.update({ where: { id: property.id }, data: { yearBuilt: 1950 } });
      const answers = await request(app).get(`/api/leases/${lease.id}/applicability`);
      const facts = Object.fromEntries(
        answers.body.questions.filter((q) => q.target === "property").map((q) => [q.id, q.type === "yesno" ? false : q.options?.[0]?.value]),
      );
      if (Object.keys(facts).length) await request(app).put(`/api/properties/${property.id}/facts`).send({ facts });
      await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);
      // The 1950 house gets the Required federal lead disclosure, whose questions must be answered.
      await request(app).put(`/api/leases/${lease.id}/facts`).send({
        facts: { noticePortal: "none", leadPaintKnowledge: "none", leadPaintRecords: "none", leasingAgentInvolved: "no" },
      });
      // The Required habitability notice prints the owner's notice address and email.
      await prisma.entity.update({
        where: { id: property.entityId },
        data: { mailingAddress: "PO Box 1, Frederick, CO 80530", contactEmail: "owner@example.com" },
      });
    });

    it("refuses to generate while a clause's choice isn't picked, naming it", async () => {
      await request(app).put(`/api/leases/${lease.id}/facts`).send({ facts: { noticePortal: null } });
      const res = await request(app).post(`/api/leases/${lease.id}/generate-document`);
      expect(res.status).toBe(409);
      expect(res.body.holdingBlanks.map((c) => c.key)).toEqual(["lease.noticePortal"]);
    });

    it("refuses to generate while a Required clause has a blank (Taylor, 2026-11-27)", async () => {
      await prisma.entity.update({ where: { id: property.entityId }, data: { contactEmail: null } });
      const res = await request(app).post(`/api/leases/${lease.id}/generate-document`);
      expect(res.status).toBe(409);
      expect(res.body.holdingBlanks.map((c) => c.label)).toEqual(["Landlord email"]);
    });

    it("refuses a deposit return longer than Colorado allows", async () => {
      const res = await request(app).put(`/api/leases/${lease.id}/facts`).send({ facts: { depositReturnDays: 75 } });
      expect(res.status).toBe(400);
      expect(res.body.error).toContain("60 days");
    });

    it("refuses to generate while a question that decides a required clause is blank", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { yearBuilt: null } });
      const res = await request(app).post(`/api/leases/${lease.id}/generate-document`);
      expect(res.status).toBe(409);
      expect(res.body.blockingQuestions.map((q) => q.key)).toContain("property.yearBuilt");
    });

    it("refuses to generate while a clause the law requires is missing, naming it", async () => {
      const bare = await prisma.lease.create({
        data: { propertyId: property.id, userId: property.userId, startDate: new Date("2026-09-01"), monthlyRent: "1800.00" },
      });
      await request(app).post(`/api/leases/${bare.id}/clauses`).send({ templateId: "rent-payment" });
      const res = await request(app).post(`/api/leases/${bare.id}/generate-document`);
      expect(res.status).toBe(409);
      expect(res.body.missingRequired.length).toBeGreaterThan(0);
      expect(res.body.missingRequired.map((c) => c.templateId)).toContain("lead-based-paint");
    });

    it("generates and attaches a PDF document", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/generate-document`);

      expect(res.status).toBe(200);
      expect(res.body.documentKey).toMatch(new RegExp(`^leases/${lease.id}/generated-\\d+\\.pdf$`));
      expect(mockR2.putObject).toHaveBeenCalledTimes(1);
      const [key, buffer, contentType] = mockR2.putObject.mock.calls[0];
      expect(key).toBe(res.body.documentKey);
      expect(Buffer.isBuffer(buffer)).toBe(true);
      expect(buffer.length).toBeGreaterThan(0);
      expect(contentType).toBe("application/pdf");
    });

    it("deletes the previous generated document when regenerating", async () => {
      const first = await request(app).post(`/api/leases/${lease.id}/generate-document`);
      const res = await request(app).post(`/api/leases/${lease.id}/generate-document`);

      expect(res.status).toBe(200);
      expect(mockR2.deleteObject).toHaveBeenCalledWith(first.body.documentKey);
    });

    it("404s generating a document for another user's lease", async () => {
      const otherUser = await prisma.user.create({
        data: { clerkId: "clerk_other_user", email: "other@example.com" },
      });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: {
          entityId: otherEntity.id,
          userId: otherUser.id,
          address1: "456 Oak St",
          city: "Frederick",
          state: "CO",
          zip: "80530",
        },
      });
      const otherLease = await prisma.lease.create({
        data: {
          propertyId: otherProperty.id,
          userId: otherUser.id,
          startDate: new Date("2026-09-01"),
          monthlyRent: "1800.00",
        },
      });

      const res = await request(app).post(`/api/leases/${otherLease.id}/generate-document`);
      expect(res.status).toBe(404);
    });
  });

  describe("rent tracker", () => {
    let lease;

    // Fixed safely in the past (well before this test suite will ever run)
    // so "today" is always well past every period's grace deadline —
    // deterministic OVERDUE/late-fee behavior regardless of when tests run.
    beforeEach(async () => {
      lease = await prisma.lease.create({
        data: {
          propertyId: property.id,
          userId: property.userId,
          startDate: new Date("2020-01-01"),
          endDate: new Date("2020-03-31"),
          monthlyRent: "3000.00",
          lateFeeAmount: "150.00",
          lateFeeGraceDays: 5,
        },
      });
    });

    it("computes one row per month of the term, with an unpaid past period OVERDUE and its late fee accrued", async () => {
      const res = await request(app).get(`/api/leases/${lease.id}/rent-tracker`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(3);
      const jan = res.body[0];
      expect(jan.status).toBe("OVERDUE");
      expect(jan.expectedLateFee).toBe(150);
      expect(jan.balance).toBe(3150);
    });

    it("404s the rent tracker for another user's lease", async () => {
      const otherUser = await prisma.user.create({ data: { clerkId: "clerk_other_user", email: "other@example.com" } });
      const otherEntity = await prisma.entity.create({
        data: { userId: otherUser.id, legalName: "Someone Else LLC", entityType: "LLC" },
      });
      const otherProperty = await prisma.property.create({
        data: { entityId: otherEntity.id, userId: otherUser.id, address1: "456 Oak St", city: "Frederick", state: "CO", zip: "80530" },
      });
      const otherLease = await prisma.lease.create({
        data: { propertyId: otherProperty.id, userId: otherUser.id, startDate: new Date("2020-01-01"), monthlyRent: "1800.00" },
      });

      const res = await request(app).get(`/api/leases/${otherLease.id}/rent-tracker`);
      expect(res.status).toBe(404);
    });

    it("previews a payment split without writing anything", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/rent-payments/preview`).send({ amount: 2000 });

      expect(res.status).toBe(200);
      expect(res.body.allocations[0]).toMatchObject({ category: "RENT", amount: 2000 });
      expect(res.body.unapplied).toBe(0);
      expect(await prisma.income.count()).toBe(0);
    });

    it("logs a payment spanning multiple categories/periods as ONE Income row with allocation line items underneath", async () => {
      // All three months of this fixed-past lease are overdue by the time this
      // test runs. Rent comes first, oldest month first ($9,000), and only
      // then late fees ($150 Jan, $50 of Feb's). It's still one real $9,200
      // payment, so it must be one Ledger row, not five.
      const res = await request(app).post(`/api/leases/${lease.id}/rent-payments`).send({ amount: 9200, date: "2020-01-10" });

      expect(res.status).toBe(201);
      expect(await prisma.income.count()).toBe(1);
      expect(res.body.income.amount).toBe("9200");
      expect(res.body.income.category).toBe("RENT"); // dominant by dollar amount
      expect(res.body.income.appliesToPeriod).toBe(null);
      expect(res.body.income.leaseId).toBe(lease.id);

      const allocations = res.body.income.allocations;
      expect(allocations.map((a) => a.category)).toEqual(["RENT", "RENT", "RENT", "LATE_FEE", "LATE_FEE"]);
      expect(allocations.map((a) => a.amount)).toEqual(["3000", "3000", "3000", "150", "50"]);
    });

    it("rejects a payment that overshoots everything currently owed without explicit allocations", async () => {
      const res = await request(app).post(`/api/leases/${lease.id}/rent-payments`).send({ amount: 100000, date: "2020-01-10" });

      expect(res.status).toBe(400);
      expect(await prisma.income.count()).toBe(0);
    });

    it("logs a single-bucket payment as a plain Income row with no allocation children", async () => {
      const res = await request(app)
        .post(`/api/leases/${lease.id}/rent-payments`)
        .send({ date: "2020-01-10", allocations: [{ period: "2020-01-01", category: "RENT", amount: 500 }] });

      expect(res.status).toBe(201);
      expect(res.body.income.category).toBe("RENT");
      expect(res.body.income.amount).toBe("500");
      expect(res.body.income.appliesToPeriod).not.toBe(null);
      expect(res.body.income.allocations).toEqual([]);
    });

    it("appears as one row in the property's income list, even when split across categories", async () => {
      await request(app).post(`/api/leases/${lease.id}/rent-payments`).send({ amount: 9200, date: "2020-01-10" });

      const res = await request(app).get(`/api/income?propertyId=${property.id}`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0].amount).toBe("9200");
      expect(res.body[0].allocations).toHaveLength(5);
    });

    it("lists waivers for a lease", async () => {
      await request(app).post(`/api/leases/${lease.id}/late-fee-waivers`).send({ period: "2020-01-01" });

      const res = await request(app).get(`/api/leases/${lease.id}/late-fee-waivers`);

      expect(res.status).toBe(200);
      expect(res.body).toHaveLength(1);
      expect(res.body[0].leaseId).toBe(lease.id);
    });

    it("waives a period's late fee, excluding it from what's expected", async () => {
      const waiveRes = await request(app).post(`/api/leases/${lease.id}/late-fee-waivers`).send({ period: "2020-01-01" });
      expect(waiveRes.status).toBe(201);

      const trackerRes = await request(app).get(`/api/leases/${lease.id}/rent-tracker`);
      const jan = trackerRes.body[0];
      expect(jan.isLateFeeWaived).toBe(true);
      expect(jan.expectedLateFee).toBe(0);
      expect(jan.balance).toBe(3000);
    });

    it("rejects a duplicate waiver for the same period", async () => {
      await request(app).post(`/api/leases/${lease.id}/late-fee-waivers`).send({ period: "2020-01-01" });
      const res = await request(app).post(`/api/leases/${lease.id}/late-fee-waivers`).send({ period: "2020-01-01" });

      expect(res.status).toBe(400);
    });

    it("removes a waiver, restoring the late fee", async () => {
      const waiveRes = await request(app).post(`/api/leases/${lease.id}/late-fee-waivers`).send({ period: "2020-01-01" });

      const delRes = await request(app).delete(`/api/leases/${lease.id}/late-fee-waivers/${waiveRes.body.id}`);
      expect(delRes.status).toBe(204);

      const trackerRes = await request(app).get(`/api/leases/${lease.id}/rent-tracker`);
      expect(trackerRes.body[0].isLateFeeWaived).toBe(false);
      expect(trackerRes.body[0].expectedLateFee).toBe(150);
    });
  });

  describe("deposit and lease type answers", () => {
    const base = () => ({ propertyId: property.id, startDate: "2027-01-01", monthlyRent: "1500.00" });

    it("leaves the deposit unanswered when nothing is entered (never fills in $0)", async () => {
      const res = await request(app).post("/api/leases").send(base());
      expect(res.status).toBe(201);
      expect(res.body.securityDepositTaken).toBeNull();
      expect(res.body.securityDepositAmount).toBeNull();
      expect(res.body.leaseType).toBeNull();
    });

    it("an amount over $0 answers Yes; $0 answers No and stores no amount", async () => {
      let res = await request(app).post("/api/leases").send({ ...base(), securityDepositAmount: "1500.00" });
      expect(res.body.securityDepositTaken).toBe(true);

      res = await request(app).post("/api/leases").send({ ...base(), securityDepositAmount: "0" });
      expect(res.body.securityDepositTaken).toBe(false);
      expect(res.body.securityDepositAmount).toBeNull();
    });

    it("refuses Yes with a $0 deposit", async () => {
      const res = await request(app).post("/api/leases").send({ ...base(), securityDepositTaken: true, securityDepositAmount: 0 });
      expect(res.status).toBe(400);
    });

    it("No clears the amount, and clearing the amount on edit doesn't keep the old one", async () => {
      const created = await request(app).post("/api/leases").send({ ...base(), securityDepositAmount: "1500.00" });
      let res = await request(app).put(`/api/leases/${created.body.id}`).send({ securityDepositAmount: null });
      expect(res.body.securityDepositAmount).toBeNull();
      expect(res.body.securityDepositTaken).toBe(true);

      res = await request(app).put(`/api/leases/${created.body.id}`).send({ securityDepositTaken: false });
      expect(res.body.securityDepositTaken).toBe(false);
      expect(res.body.securityDepositAmount).toBeNull();
    });

    it("validates the lease type", async () => {
      let res = await request(app).post("/api/leases").send({ ...base(), leaseType: "MONTH_TO_MONTH" });
      expect(res.body.leaseType).toBe("MONTH_TO_MONTH");
      res = await request(app).post("/api/leases").send({ ...base(), leaseType: "WEEKLY" });
      expect(res.status).toBe(400);
    });

    it("saves the lease's own answers", async () => {
      const created = await request(app).post("/api/leases").send(base());
      let res = await request(app).put(`/api/leases/${created.body.id}/facts`).send({ facts: { firstMonthRent: "PRORATED", yardCare: "TENANT" } });
      expect(res.status).toBe(200);
      expect(res.body.facts).toEqual({ firstMonthRent: "PRORATED", yardCare: "TENANT" });
      res = await request(app).put(`/api/leases/${created.body.id}/facts`).send({ facts: { firstMonthRent: "HALF" } });
      expect(res.status).toBe(400);
    });
  });

  describe("parking spaces", () => {
    it("won't assign a lease more spaces than the property has, or drop the property below a current lease", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { facts: { parkingSpaces: 2 } } });
      const created = await request(app).post("/api/leases").send({ propertyId: property.id, startDate: "2027-01-01", monthlyRent: "1500.00" });
      const tooMany = await request(app).put(`/api/leases/${created.body.id}/facts`).send({ facts: { parkingAssigned: 3 } });
      expect(tooMany.status).toBe(400);
      expect(tooMany.body.error).toMatch(/2 parking spaces/);
      const ok = await request(app).put(`/api/leases/${created.body.id}/facts`).send({ facts: { parkingAssigned: 2 } });
      expect(ok.status).toBe(200);
      const fewer = await request(app).put(`/api/properties/${property.id}/facts`).send({ facts: { parkingSpaces: 1 } });
      expect(fewer.status).toBe(400);
      const more = await request(app).put(`/api/properties/${property.id}/facts`).send({ facts: { parkingSpaces: 4 } });
      expect(more.status).toBe(200);
    });
  });

  describe("fill-in-the-gaps questions (GET /:id/missing-facts)", () => {
    const keys = (res) => res.body.questions.map((q) => q.key);

    it("asks the blank answers this lease's rules wait on, with the clauses each decides", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { state: "WA" } });
      const created = await request(app).post("/api/leases").send({ propertyId: property.id, startDate: "2027-01-01", monthlyRent: "1500.00" });
      const res = await request(app).get(`/api/leases/${created.body.id}/applicability`);
      expect(res.status).toBe(200);
      expect(keys(res)).toContain("property.yearBuilt");
      expect(keys(res)).toContain("lease.depositTaken");
      const lead = res.body.questions.find((q) => q.key === "property.yearBuilt");
      expect(lead.target).toBe("propertyField");
      expect(lead.clauses.length).toBeGreaterThan(0);
    });

    it("drops a question once it's answered, and shows a follow-up once its answer is in", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { state: "NJ", yearBuilt: 1990 } });
      const created = await request(app)
        .post("/api/leases")
        .send({ propertyId: property.id, startDate: "2027-01-01", monthlyRent: "1500.00", securityDepositTaken: false });
      let res = await request(app).get(`/api/leases/${created.body.id}/applicability`);
      expect(keys(res)).not.toContain("property.yearBuilt");
      expect(keys(res)).not.toContain("lease.depositTaken");
      expect(keys(res)).toContain("property.propertyType");
      expect(keys(res)).not.toContain("property.unitsInBuilding");

      await request(app).put(`/api/properties/${property.id}/facts`).send({ facts: { propertyType: "APARTMENT" } });
      res = await request(app).get(`/api/leases/${created.body.id}/applicability`);
      expect(keys(res)).toContain("property.unitsInBuilding");

      await request(app).put(`/api/properties/${property.id}/facts`).send({ facts: { propertyType: "SINGLE_FAMILY" } });
      res = await request(app).get(`/api/leases/${created.body.id}/applicability`);
      expect(keys(res)).not.toContain("property.unitsInBuilding");
      expect(keys(res)).not.toContain("property.propertyType");
    });

    it("404s for another user's lease", async () => {
      const res = await request(app).get("/api/leases/not-a-lease/missing-facts");
      expect(res.status).toBe(404);
    });
  });

  describe("required clauses are locked in", () => {
    it("won't remove a clause the law requires for this lease, but removes it once it no longer applies", async () => {
      const lease = await prisma.lease.create({
        data: { propertyId: property.id, userId: property.userId, startDate: new Date("2027-01-01"), monthlyRent: "1800.00" },
      });
      await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);
      const full = await request(app).get(`/api/leases/${lease.id}`);
      const lead = full.body.leaseClauses.find((c) => c.sourceTemplateId === "lead-based-paint");
      expect(lead).toBeTruthy();
      let res = await request(app).delete(`/api/leases/${lease.id}/clauses/${lead.id}`);
      expect(res.status).toBe(409);

      await prisma.property.update({ where: { id: property.id }, data: { yearBuilt: 2005 } });
      res = await request(app).delete(`/api/leases/${lease.id}/clauses/${lead.id}`);
      expect(res.status).toBe(204);
    });

    it("lists the required clauses for the lease, marking which are attached", async () => {
      const lease = await prisma.lease.create({
        data: { propertyId: property.id, userId: property.userId, startDate: new Date("2027-01-01"), monthlyRent: "1800.00" },
      });
      let res = await request(app).get(`/api/leases/${lease.id}/applicability`);
      const lead = res.body.clauses.required.find((c) => c.templateId === "lead-based-paint");
      expect(lead.attached).toBe(false);
      await request(app).post(`/api/leases/${lease.id}/clauses/add-defaults`);
      res = await request(app).get(`/api/leases/${lease.id}/applicability`);
      expect(res.body.clauses.required.every((c) => c.attached)).toBe(true);
    });
  });

  describe("questions about the people on the lease", () => {
    it("asks each tenant a blank nonresident question in Alaska, saved to the tenant", async () => {
      await prisma.property.update({ where: { id: property.id }, data: { state: "AK" } });
      const lease = await prisma.lease.create({
        data: { propertyId: property.id, userId: property.userId, startDate: new Date("2027-01-01"), monthlyRent: "1800.00" },
      });
      await request(app).post(`/api/leases/${lease.id}/tenants`).send({ tenantId: tenant.id, role: "PRIMARY" });
      let res = await request(app).get(`/api/leases/${lease.id}/applicability`);
      const key = `tenant.${tenant.id}.nonresidentAlien`;
      const q = res.body.questions.find((x) => x.key === key);
      expect(q.label).toContain("Jamie Rivera");

      await request(app).put(`/api/tenants/${tenant.id}`).send({ nonresidentAlien: false });
      res = await request(app).get(`/api/leases/${lease.id}/applicability`);
      expect(res.body.questions.map((x) => x.key)).not.toContain(key);
    });
  });

  describe("late fee and notices", () => {
    it("treats a $0 late fee as No and clears the fee when the answer is No", async () => {
      const lease = await prisma.lease.create({
        data: { propertyId: property.id, userId: property.userId, startDate: new Date("2027-01-01"), monthlyRent: "1800.00" },
      });
      let res = await request(app).put(`/api/leases/${lease.id}`).send({ lateFeeAmount: 0 });
      expect(res.body.lateFeeCharged).toBe(false);
      res = await request(app).put(`/api/leases/${lease.id}`).send({ lateFeeAmount: 75, lateFeeGraceDays: 5 });
      expect(res.body.lateFeeCharged).toBe(true);
      res = await request(app).put(`/api/leases/${lease.id}`).send({ lateFeeCharged: false });
      expect(res.body.lateFeeAmount).toBe(null);
      expect(res.body.lateFeeGraceDays).toBe(null);
      res = await request(app).put(`/api/leases/${lease.id}`).send({ lateFeeCharged: true, lateFeeAmount: 0 });
      expect(res.status).toBe(400);
    });
  });
});

