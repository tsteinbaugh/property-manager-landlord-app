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

async function createOtherUsersProperty() {
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
  return { otherUser, otherProperty };
}

describe("expenses routes", () => {
  let entity;
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
    entity = await prisma.entity.create({
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

    const res = await request(app).get("/api/expenses");

    expect(res.status).toBe(401);
  });

  it("creates an expense under an owned property, deriving entityId server-side", async () => {
    const res = await request(app).post("/api/expenses").send({
      propertyId: property.id,
      category: "REPAIRS",
      amount: "250.00",
      date: "2026-09-05",
      payee: "Frederick Plumbing Co.",
    });

    expect(res.status).toBe(201);
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.category).toBe("REPAIRS");
  });

  it("accepts MAINTENANCE as a category distinct from REPAIRS", async () => {
    const res = await request(app).post("/api/expenses").send({
      propertyId: property.id,
      category: "MAINTENANCE",
      amount: "120.00",
      date: "2026-09-05",
      payee: "Frederick HVAC",
      notes: "Furnace filter swap",
    });

    expect(res.status).toBe(201);
    expect(res.body.category).toBe("MAINTENANCE");
  });

  it("accepts LEGAL as a category, scaffolded ahead of the v2 Legal Tracker module", async () => {
    const res = await request(app).post("/api/expenses").send({
      propertyId: property.id,
      category: "LEGAL",
      amount: "350.00",
      date: "2026-09-05",
      payee: "Frederick Municipal Court",
      notes: "Eviction filing fee",
    });

    expect(res.status).toBe(201);
    expect(res.body.category).toBe("LEGAL");
  });

  it("rejects an expense missing required fields", async () => {
    const res = await request(app).post("/api/expenses").send({ propertyId: property.id });

    expect(res.status).toBe(400);
  });

  it("rejects an invalid category", async () => {
    const res = await request(app).post("/api/expenses").send({
      propertyId: property.id,
      category: "FUN_MONEY",
      amount: "50.00",
      date: "2026-09-05",
    });

    expect(res.status).toBe(400);
  });

  it("rejects an expense under a property owned by another user", async () => {
    const { otherProperty } = await createOtherUsersProperty();

    const res = await request(app).post("/api/expenses").send({
      propertyId: otherProperty.id,
      category: "REPAIRS",
      amount: "250.00",
      date: "2026-09-05",
    });

    expect(res.status).toBe(400);
  });

  it("lists expenses, optionally filtered by property", async () => {
    await prisma.expense.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "MORTGAGE",
        amount: "1200.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get("/api/expenses").query({ propertyId: property.id });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  it("gets a single expense by id", async () => {
    const expense = await prisma.expense.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "UTILITIES",
        amount: "85.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get(`/api/expenses/${expense.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(expense.id);
  });

  it("404s for another user's expense", async () => {
    const { otherUser, otherProperty } = await createOtherUsersProperty();
    const otherExpense = await prisma.expense.create({
      data: {
        userId: otherUser.id,
        entityId: otherProperty.entityId,
        propertyId: otherProperty.id,
        category: "LANDSCAPING",
        amount: "60.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get(`/api/expenses/${otherExpense.id}`);
    expect(res.status).toBe(404);
  });

  it("updates an expense", async () => {
    const expense = await prisma.expense.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "REPAIRS",
        amount: "250.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app)
      .put(`/api/expenses/${expense.id}`)
      .send({ amount: "275.00", notes: "Extra part needed" });

    expect(res.status).toBe(200);
    expect(res.body.amount).toBe("275");
    expect(res.body.notes).toBe("Extra part needed");
  });


  it("soft-deletes an expense row — the row survives, hidden from the default list", async () => {
    const expense = await prisma.expense.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "TAX",
        amount: "900.00",
        date: new Date("2026-09-01"),
      },
    });

    const res = await request(app).delete(`/api/expenses/${expense.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.expense.findUnique({ where: { id: expense.id } });
    expect(check).not.toBeNull();
    expect(check.deleted).toBe(true);

    const listRes = await request(app).get("/api/expenses").query({ propertyId: property.id });
    expect(listRes.body).toEqual([]);
  });

  it("lists deleted expenses with ?deleted=true, restores via POST /:id/restore", async () => {
    const expense = await prisma.expense.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        category: "TAX",
        amount: "900.00",
        date: new Date("2026-09-01"),
      },
    });
    await request(app).delete(`/api/expenses/${expense.id}`);

    const deletedOnly = await request(app).get("/api/expenses").query({ propertyId: property.id, deleted: "true" });
    expect(deletedOnly.body.map((e) => e.id)).toEqual([expense.id]);

    const restoreRes = await request(app).post(`/api/expenses/${expense.id}/restore`);
    expect(restoreRes.status).toBe(200);
    expect(restoreRes.body.deleted).toBe(false);
  });

  it("defaults paid to true and records a payment method", async () => {
    const res = await request(app).post("/api/expenses").send({
      propertyId: property.id,
      category: "REPAIRS",
      amount: "250.00",
      date: "2026-09-01",
      method: "check",
    });

    expect(res.status).toBe(201);
    expect(res.body.paid).toBe(true);
    expect(res.body.method).toBe("check");
  });

  it("allows logging an unpaid expense and marking it paid later", async () => {
    const created = await request(app).post("/api/expenses").send({
      propertyId: property.id,
      category: "REPAIRS",
      amount: "250.00",
      date: "2026-09-01",
      paid: false,
    });
    expect(created.body.paid).toBe(false);

    const res = await request(app).put(`/api/expenses/${created.body.id}`).send({ paid: true });

    expect(res.status).toBe(200);
    expect(res.body.paid).toBe(true);
  });

  describe("expense documents (R2)", () => {
    let expense;

    beforeEach(async () => {
      expense = await prisma.expense.create({
        data: {
          userId: property.userId,
          entityId: entity.id,
          propertyId: property.id,
          category: "REPAIRS",
          amount: "250.00",
          date: new Date("2026-09-01"),
        },
      });
    });

    it("returns a presigned upload URL scoped to the expense", async () => {
      const res = await request(app)
        .post(`/api/expenses/${expense.id}/documents/upload-url`)
        .send({ fileName: "receipt.pdf", contentType: "application/pdf" });

      expect(res.status).toBe(200);
      expect(res.body.key).toMatch(new RegExp(`^expenses/${expense.id}/`));
      expect(mockR2.getUploadUrl).toHaveBeenCalledWith(res.body.key, "application/pdf");
    });

    it("confirms an upload and lists it", async () => {
      const key = `expenses/${expense.id}/abc-receipt.pdf`;
      const confirmRes = await request(app)
        .post(`/api/expenses/${expense.id}/documents/confirm`)
        .send({ key, fileName: "receipt.pdf" });

      expect(confirmRes.status).toBe(201);
      expect(confirmRes.body.documentKey).toBe(key);

      const listRes = await request(app).get(`/api/expenses/${expense.id}/documents`);
      expect(listRes.status).toBe(200);
      expect(listRes.body).toHaveLength(1);
    });

    it("rejects confirming a key that doesn't belong to this expense", async () => {
      const res = await request(app)
        .post(`/api/expenses/${expense.id}/documents/confirm`)
        .send({ key: "expenses/someone-elses-expense/abc-receipt.pdf", fileName: "receipt.pdf" });

      expect(res.status).toBe(400);
    });

    it("returns a presigned download URL and deletes a document", async () => {
      const key = `expenses/${expense.id}/abc-receipt.pdf`;
      const created = await request(app)
        .post(`/api/expenses/${expense.id}/documents/confirm`)
        .send({ key, fileName: "receipt.pdf" });

      const downloadRes = await request(app).get(
        `/api/expenses/${expense.id}/documents/${created.body.id}/download-url`,
      );
      expect(downloadRes.status).toBe(200);
      expect(mockR2.getDownloadUrl).toHaveBeenCalledWith(key);

      const deleteRes = await request(app).delete(`/api/expenses/${expense.id}/documents/${created.body.id}`);
      expect(deleteRes.status).toBe(204);
      expect(mockR2.deleteObject).toHaveBeenCalledWith(key);

      const check = await prisma.expenseDocument.findUnique({ where: { id: created.body.id } });
      expect(check).toBeNull();
    });

    it("404s document endpoints for another user's expense", async () => {
      const { otherProperty } = await createOtherUsersProperty();
      const otherExpense = await prisma.expense.create({
        data: {
          userId: otherProperty.userId,
          entityId: otherProperty.entityId,
          propertyId: otherProperty.id,
          category: "REPAIRS",
          amount: "100.00",
          date: new Date("2026-09-01"),
        },
      });

      const res = await request(app)
        .post(`/api/expenses/${otherExpense.id}/documents/upload-url`)
        .send({ fileName: "receipt.pdf", contentType: "application/pdf" });

      expect(res.status).toBe(404);
    });
  });
});
