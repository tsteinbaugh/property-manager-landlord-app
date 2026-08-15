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

async function resetDatabase() {
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

async function createOtherUsersLease() {
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
      monthlyRent: "1500.00",
    },
  });
  return { otherUser, otherProperty, otherLease };
}

describe("deposits routes", () => {
  let entity;
  let property;
  let lease;

  beforeEach(async () => {
    mockGetAuth.mockReturnValue({ userId: "clerk_test_user_1" });
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
    lease = await prisma.lease.create({
      data: {
        propertyId: property.id,
        userId: user.id,
        startDate: new Date("2026-09-01"),
        monthlyRent: "1800.00",
      },
    });
  });

  afterAll(async () => {
    await resetDatabase();
    await prisma.$disconnect();
  });

  it("rejects unauthenticated requests", async () => {
    mockGetAuth.mockReturnValue({ userId: null });

    const res = await request(app).get("/api/deposits");

    expect(res.status).toBe(401);
  });

  it("creates a security deposit for an owned lease, deriving entityId/propertyId server-side", async () => {
    const res = await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "SECURITY",
      amountHeld: "1800.00",
      dateReceived: "2026-09-01",
      storageMethod: "escrow account",
    });

    expect(res.status).toBe(201);
    expect(res.body.leaseId).toBe(lease.id);
    expect(res.body.type).toBe("SECURITY");
    expect(res.body.propertyId).toBe(property.id);
    expect(res.body.entityId).toBe(entity.id);
    expect(res.body.status).toBe("HELD");
    expect(res.body.deductions).toEqual([]);
  });

  it("allows a security deposit and a pet deposit to coexist on the same lease", async () => {
    const security = await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "SECURITY",
      amountHeld: "1800.00",
      dateReceived: "2026-09-01",
    });
    const pet = await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "PET",
      amountHeld: "300.00",
      dateReceived: "2026-09-01",
    });

    expect(security.status).toBe(201);
    expect(pet.status).toBe(201);

    const res = await request(app).get("/api/deposits").query({ leaseId: lease.id });
    expect(res.body).toHaveLength(2);
  });

  it("rejects a deposit missing required fields", async () => {
    const res = await request(app).post("/api/deposits").send({ leaseId: lease.id });

    expect(res.status).toBe(400);
  });

  it("rejects an invalid type", async () => {
    const res = await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "CLEANING",
      amountHeld: "200.00",
      dateReceived: "2026-09-01",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a second deposit of the same type on the same lease", async () => {
    await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "SECURITY",
      amountHeld: "1800.00",
      dateReceived: "2026-09-01",
    });

    const res = await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "SECURITY",
      amountHeld: "1800.00",
      dateReceived: "2026-09-01",
    });

    expect(res.status).toBe(400);
  });

  it("rejects a deposit on a lease owned by another user", async () => {
    const { otherLease } = await createOtherUsersLease();

    const res = await request(app).post("/api/deposits").send({
      leaseId: otherLease.id,
      type: "SECURITY",
      amountHeld: "1500.00",
      dateReceived: "2026-09-01",
    });

    expect(res.status).toBe(400);
  });

  it("rejects an invalid status", async () => {
    const res = await request(app).post("/api/deposits").send({
      leaseId: lease.id,
      type: "SECURITY",
      amountHeld: "1800.00",
      dateReceived: "2026-09-01",
      status: "MISPLACED",
    });

    expect(res.status).toBe(400);
  });

  it("lists deposits, optionally filtered by property, lease, and type", async () => {
    await prisma.deposit.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        leaseId: lease.id,
        type: "PET",
        amountHeld: "300.00",
        dateReceived: new Date("2026-09-01"),
      },
    });

    const res = await request(app)
      .get("/api/deposits")
      .query({ propertyId: property.id, leaseId: lease.id, type: "PET" });

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].type).toBe("PET");
  });

  it("gets a single deposit by id", async () => {
    const deposit = await prisma.deposit.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        leaseId: lease.id,
        type: "SECURITY",
        amountHeld: "1800.00",
        dateReceived: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get(`/api/deposits/${deposit.id}`);
    expect(res.status).toBe(200);
    expect(res.body.id).toBe(deposit.id);
  });

  it("404s for another user's deposit", async () => {
    const { otherUser, otherProperty, otherLease } = await createOtherUsersLease();
    const otherDeposit = await prisma.deposit.create({
      data: {
        userId: otherUser.id,
        entityId: otherProperty.entityId,
        propertyId: otherProperty.id,
        leaseId: otherLease.id,
        type: "SECURITY",
        amountHeld: "1500.00",
        dateReceived: new Date("2026-09-01"),
      },
    });

    const res = await request(app).get(`/api/deposits/${otherDeposit.id}`);
    expect(res.status).toBe(404);
  });

  it("updates a deposit, e.g. marking it returned", async () => {
    const deposit = await prisma.deposit.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        leaseId: lease.id,
        type: "SECURITY",
        amountHeld: "1800.00",
        dateReceived: new Date("2026-09-01"),
      },
    });

    const res = await request(app).put(`/api/deposits/${deposit.id}`).send({
      status: "FULLY_RETURNED",
      returnedAmount: "1800.00",
      returnedDate: "2027-09-01",
    });

    expect(res.status).toBe(200);
    expect(res.body.status).toBe("FULLY_RETURNED");
    expect(res.body.returnedAmount).toBe("1800");
  });

  it("deletes a deposit", async () => {
    const deposit = await prisma.deposit.create({
      data: {
        userId: property.userId,
        entityId: entity.id,
        propertyId: property.id,
        leaseId: lease.id,
        type: "SECURITY",
        amountHeld: "1800.00",
        dateReceived: new Date("2026-09-01"),
      },
    });

    const res = await request(app).delete(`/api/deposits/${deposit.id}`);
    expect(res.status).toBe(204);

    const check = await prisma.deposit.findUnique({ where: { id: deposit.id } });
    expect(check).toBeNull();
  });

  describe("deductions", () => {
    let deposit;

    beforeEach(async () => {
      deposit = await prisma.deposit.create({
        data: {
          userId: property.userId,
          entityId: entity.id,
          propertyId: property.id,
          leaseId: lease.id,
          type: "SECURITY",
          amountHeld: "1800.00",
          dateReceived: new Date("2026-09-01"),
        },
      });
    });

    it("adds a deduction", async () => {
      const res = await request(app)
        .post(`/api/deposits/${deposit.id}/deductions`)
        .send({ description: "Carpet cleaning", amount: "150.00" });

      expect(res.status).toBe(201);
      expect(res.body.deductions).toHaveLength(1);
      expect(res.body.deductions[0].description).toBe("Carpet cleaning");
      expect(res.body.deductions[0].amount).toBe("150");
    });

    it("rejects a deduction missing required fields", async () => {
      const res = await request(app)
        .post(`/api/deposits/${deposit.id}/deductions`)
        .send({ description: "Carpet cleaning" });

      expect(res.status).toBe(400);
    });

    it("removes a deduction", async () => {
      const created = await request(app)
        .post(`/api/deposits/${deposit.id}/deductions`)
        .send({ description: "Carpet cleaning", amount: "150.00" });
      const deductionId = created.body.deductions[0].id;

      const res = await request(app).delete(`/api/deposits/${deposit.id}/deductions/${deductionId}`);
      expect(res.status).toBe(204);

      const updated = await request(app).get(`/api/deposits/${deposit.id}`);
      expect(updated.body.deductions).toEqual([]);
    });

    it("404s when removing a deduction not on the deposit", async () => {
      const res = await request(app).delete(
        `/api/deposits/${deposit.id}/deductions/nonexistent-id`,
      );
      expect(res.status).toBe(404);
    });
  });
});
