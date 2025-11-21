// backend/src/routes/admin.routes.test.js
const request = require("supertest");
const { app, prisma } = require("../server.js");
const { Role, UserStatus, AuthTokenKind } = require("@prisma/client");

// simple unique email helper so we don't hit unique constraints
let userCounter = 0;
function uniqueEmail(prefix = "user") {
  userCounter += 1;
  return `${prefix}${userCounter}@example.com`;
}

// Seed helpers
async function seedUser(overrides = {}) {
  return prisma.user.create({
    data: {
      email: overrides.email || uniqueEmail("user"),
      passwordHash: overrides.passwordHash || "hashed-password",
      baseRole: overrides.baseRole || Role.TENANT,
      status: overrides.status || UserStatus.ACTIVE,
      isArchived: overrides.isArchived ?? false,
      name: overrides.name || "Test User",
    },
  });
}

async function seedSysadmin(overrides = {}) {
  return prisma.user.create({
    data: {
      email: overrides.email || uniqueEmail("sysadmin"),
      passwordHash: overrides.passwordHash || "hashed-password",
      baseRole: overrides.baseRole || Role.SYSADMIN,
      status: overrides.status || UserStatus.ACTIVE,
      isArchived: overrides.isArchived ?? false,
      name: overrides.name || "Sysadmin User",
    },
  });
}

describe("Admin routes - users", () => {
  it("lists users and respects includeArchived filter", async () => {
    const active = await seedUser({ name: "Active User" });
    const archived = await seedUser({
      name: "Archived User",
      isArchived: true,
    });

    const resDefault = await request(app).get("/api/admin/users");
    expect(resDefault.status, resDefault.text).toBe(200);
    expect(Array.isArray(resDefault.body)).toBe(true);

    const idsDefault = resDefault.body.map((u) => u.id);
    expect(idsDefault).toContain(active.id);
    expect(idsDefault).not.toContain(archived.id);

    const resIncl = await request(app).get(
      "/api/admin/users?includeArchived=1"
    );
    expect(resIncl.status, resIncl.text).toBe(200);
    const idsIncl = resIncl.body.map((u) => u.id);
    expect(idsIncl).toContain(active.id);
    expect(idsIncl).toContain(archived.id);

    const archivedUserShape = resIncl.body.find(
      (u) => u.id === archived.id
    );
    expect(archivedUserShape.archived).toBe(true);
  });

  it("creates an admin user with normalized baseRole", async () => {
    const email = uniqueEmail("create-admin");

    const res = await request(app)
      .post("/api/admin/users")
      .send({
        email,
        name: "Admin User",
        baseRole: "SYSTEM_ADMIN", // normalized to Role.SYSADMIN
      });

    expect(res.status, res.text).toBe(201);
    expect(res.body.email).toBe(email.toLowerCase());
    expect(res.body.baseRole).toBe(Role.SYSADMIN);

    const dbUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    expect(dbUser).not.toBeNull();
    expect(dbUser.baseRole).toBe(Role.SYSADMIN);
    expect(dbUser.passwordHash).toBeTruthy(); // temp password hashed
  });

  it("rejects creating user with invalid baseRole", async () => {
    const res = await request(app)
      .post("/api/admin/users")
      .send({
        email: uniqueEmail("badrole"),
        baseRole: "NOT_A_ROLE",
      });

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/invalid baserole/i);
  });

  it("updates user email, name, baseRole, status, and password", async () => {
    const user = await seedUser({
      baseRole: Role.TENANT,
      status: UserStatus.ACTIVE,
    });

    const newEmail = uniqueEmail("updated");
    const res = await request(app)
      .patch(`/api/admin/users/${user.id}`)
      .send({
        email: newEmail,
        name: "Updated Name",
        baseRole: Role.LANDLORD,
        status: UserStatus.DISABLED,
        password: "new-secret",
      });

    expect(res.status, res.text).toBe(200);
    expect(res.body.email).toBe(newEmail.toLowerCase());
    expect(res.body.name).toBe("Updated Name");
    expect(res.body.baseRole).toBe(Role.LANDLORD);
    expect(res.body.status).toBe(UserStatus.DISABLED);

    const dbUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    expect(dbUser.email).toBe(newEmail.toLowerCase());
    expect(dbUser.baseRole).toBe(Role.LANDLORD);
    expect(dbUser.status).toBe(UserStatus.DISABLED);
    expect(dbUser.passwordHash).toBeTruthy();
  });

  it("rejects invalid baseRole and status on update", async () => {
    const user = await seedUser();

    const resRole = await request(app)
      .patch(`/api/admin/users/${user.id}`)
      .send({ baseRole: "NOPE" });

    expect(resRole.status, resRole.text).toBe(400);
    expect(resRole.body.error).toMatch(/invalid baserole/i);

    const resStatus = await request(app)
      .patch(`/api/admin/users/${user.id}`)
      .send({ status: "NOT_A_STATUS" });

    expect(resStatus.status, resStatus.text).toBe(400);
    expect(resStatus.body.error).toMatch(/invalid status/i);
  });

  it("returns 404 when updating a non-existent user", async () => {
    const res = await request(app)
      .patch("/api/admin/users/nonexistent-id")
      .send({ email: "nobody@example.com" });

    expect(res.status, res.text).toBe(404);
    expect(res.body.error).toMatch(/user not found/i);
  });

  it("archives and unarchives non-sysadmin users", async () => {
    const user = await seedUser({ baseRole: Role.TENANT });

    const archiveRes = await request(app).patch(
      `/api/admin/users/${user.id}/archive`
    );
    expect(archiveRes.status, archiveRes.text).toBe(200);
    expect(archiveRes.body.archived).toBe(true);

    const dbArchived = await prisma.user.findUnique({
      where: { id: user.id },
    });
    expect(dbArchived.isArchived).toBe(true);

    const unarchiveRes = await request(app).patch(
      `/api/admin/users/${user.id}/archive`
    );
    expect(unarchiveRes.status, unarchiveRes.text).toBe(200);
    expect(unarchiveRes.body.archived).toBe(false);

    const dbUnarchived = await prisma.user.findUnique({
      where: { id: user.id },
    });
    expect(dbUnarchived.isArchived).toBe(false);
  });

  it("prevents archiving the last active sysadmin", async () => {
    const sysadmin = await seedSysadmin();

    const res = await request(app).patch(
      `/api/admin/users/${sysadmin.id}/archive`
    );

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(
      /cannot archive the last active system administrator/i
    );

    const dbUser = await prisma.user.findUnique({
      where: { id: sysadmin.id },
    });
    expect(dbUser.isArchived).toBe(false);
  });

  it("allows archiving a sysadmin when another active one exists", async () => {
    const sys1 = await seedSysadmin({ name: "Primary Sysadmin" });
    const sys2 = await seedSysadmin({ name: "Secondary Sysadmin" });

    const res = await request(app).patch(
      `/api/admin/users/${sys2.id}/archive`
    );

    expect(res.status, res.text).toBe(200);
    expect(res.body.archived).toBe(true);

    const dbSys2 = await prisma.user.findUnique({ where: { id: sys2.id } });
    expect(dbSys2.isArchived).toBe(true);

    const dbSys1 = await prisma.user.findUnique({ where: { id: sys1.id } });
    expect(dbSys1.isArchived).toBe(false);
  });

  it("prevents deleting the last active sysadmin", async () => {
    const sysadmin = await seedSysadmin();

    const res = await request(app).delete(
      `/api/admin/users/${sysadmin.id}`
    );

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(
      /cannot delete the last active system administrator/i
    );

    const dbUser = await prisma.user.findUnique({
      where: { id: sysadmin.id },
    });
    expect(dbUser).not.toBeNull();
  });

  it("allows deleting non-sysadmin or when other sysadmins exist", async () => {
    const sysadmin = await seedSysadmin();
    const normal = await seedUser({ baseRole: Role.TENANT });

    const deleteRes = await request(app).delete(
      `/api/admin/users/${normal.id}`
    );
    expect(deleteRes.status, deleteRes.text).toBe(200);
    expect(deleteRes.body.ok).toBe(true);

    const dbNormal = await prisma.user.findUnique({
      where: { id: normal.id },
    });
    expect(dbNormal).toBeNull();

    const dbSys = await prisma.user.findUnique({
      where: { id: sysadmin.id },
    });
    expect(dbSys).not.toBeNull();
  });
});

describe("Admin routes - invites", () => {
  it("creates an invite for a new user", async () => {
    const email = uniqueEmail("invite");
    const res = await request(app)
      .post("/api/admin/invites")
      .send({
        email,
        baseRole: "LANDLORD",
      });

    expect(res.status, res.text).toBe(201);
    expect(res.body.email).toBe(email.toLowerCase());
    expect(res.body.baseRole).toBe(Role.LANDLORD);
    expect(res.body.status).toBe(UserStatus.INVITED);
    expect(res.body.inviteUrl).toContain("accept-invite?token=");

    const dbUser = await prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
    expect(dbUser).not.toBeNull();
    expect(dbUser.baseRole).toBe(Role.LANDLORD);
    expect(dbUser.status).toBe(UserStatus.INVITED);

    const authToken = await prisma.authToken.findFirst({
      where: {
        userId: dbUser.id,
        kind: AuthTokenKind.INVITE,
      },
    });
    expect(authToken).not.toBeNull();
    expect(authToken.email).toBe(email.toLowerCase());
  });

  it("re-invites an existing non-disabled user and updates baseRole/status", async () => {
    const email = uniqueEmail("reinvite");
    const existing = await seedUser({
      email,
      baseRole: Role.TENANT,
      status: UserStatus.ACTIVE,
    });

    const res = await request(app)
      .post("/api/admin/invites")
      .send({
        email,
        baseRole: "LANDLORD",
      });

    expect(res.status, res.text).toBe(201);
    expect(res.body.email).toBe(email.toLowerCase());
    expect(res.body.baseRole).toBe(Role.LANDLORD);
    expect(res.body.status).toBe(UserStatus.INVITED);

    const dbUser = await prisma.user.findUnique({
      where: { id: existing.id },
    });
    expect(dbUser.baseRole).toBe(Role.LANDLORD);
    expect(dbUser.status).toBe(UserStatus.INVITED);
    expect(dbUser.isArchived).toBe(false);
  });

  it("rejects invalid baseRole on invite", async () => {
    const res = await request(app)
      .post("/api/admin/invites")
      .send({
        email: uniqueEmail("badinvite"),
        baseRole: "NOPE",
      });

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/invalid baserole/i);
  });
});

describe("Admin routes - overview", () => {
  it("returns counts of users by role and pendingInvites is 0", async () => {
    await seedSysadmin();
    await seedUser({ baseRole: Role.LANDLORD });
    await seedUser({ baseRole: Role.LANDLORD });
    await seedUser({ baseRole: Role.TENANT });
    await seedUser({ baseRole: Role.PROPERTY_MANAGER });

    const res = await request(app).get("/api/admin/overview");
    expect(res.status, res.text).toBe(200);

    const body = res.body;
    expect(body.totalUsers).toBe(5);
    expect(body.landlords).toBe(2);
    expect(body.tenants).toBe(1);
    expect(body.propertyManagers).toBe(1);
    expect(body.pendingInvites).toBe(0);
  });
});
