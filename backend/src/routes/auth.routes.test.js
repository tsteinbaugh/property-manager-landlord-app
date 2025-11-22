// backend/src/routes/auth.routes.test.js
const request = require("supertest");
const bcrypt = require("bcryptjs");
const { app, prisma } = require("../server.js");
const { UserStatus, AuthTokenKind, Role } = require("@prisma/client");

// ----------------- helpers -----------------

let emailCounter = 0;
function uniqueEmail(prefix = "auth") {
  emailCounter += 1;
  return `${prefix}${emailCounter}@example.com`;
}

async function seedUserWithPassword({
  email = uniqueEmail("user"),
  plainPassword = "Password123!",
  baseRole = Role.TENANT,
  status = UserStatus.ACTIVE,
  isArchived = false,
  name = "Auth User",
  bcryptHash = true,
} = {}) {
  let passwordHash;
  if (bcryptHash) {
    passwordHash = await bcrypt.hash(plainPassword, 10);
  } else {
    // legacy plain-text style
    passwordHash = plainPassword;
  }

  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      baseRole,
      status,
      isArchived,
      name,
    },
  });

  return { user, plainPassword };
}

async function seedInviteToken({
  email = uniqueEmail("invite"),
  baseRole = Role.LANDLORD,
  status = UserStatus.INVITED,
  isArchived = false,
  expiresInMs = 7 * 24 * 60 * 60 * 1000, // 7 days
} = {}) {
  const { user } = await seedUserWithPassword({
    email,
    baseRole,
    status,
    isArchived,
    plainPassword: "tempPassword!",
  });

  const token = `invite-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const expiresAt = new Date(Date.now() + expiresInMs);

  const authToken = await prisma.authToken.create({
    data: {
      token,
      kind: AuthTokenKind.INVITE,
      userId: user.id,
      email: email.toLowerCase(),
      expiresAt,
    },
  });

  return { user, authToken };
}

async function seedResetToken({
  email = uniqueEmail("reset"),
  baseRole = Role.TENANT,
  status = UserStatus.ACTIVE,
  isArchived = false,
  expiresInMs = 60 * 60 * 1000, // 1 hour
} = {}) {
  const { user } = await seedUserWithPassword({
    email,
    baseRole,
    status,
    isArchived,
    plainPassword: "OldPass123!",
  });

  const token = `reset-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const expiresAt = new Date(Date.now() + expiresInMs);

  const authToken = await prisma.authToken.create({
    data: {
      token,
      kind: AuthTokenKind.RESET_PASSWORD,
      userId: user.id,
      email: email.toLowerCase(),
      expiresAt,
    },
  });

  return { user, authToken };
}

// ----------------- tests -----------------

describe("Auth routes - sign-in & change-password", () => {
  it("signs in with a bcrypt-hashed password", async () => {
    const email = uniqueEmail("signin-bcrypt");
    const password = "StrongPass123!";
    const { user } = await seedUserWithPassword({
      email,
      plainPassword: password,
      bcryptHash: true,
    });

    const res = await request(app)
      .post("/api/auth/sign-in")
      .send({ email, password });

    expect(res.status, res.text).toBe(200);
    expect(res.body.user).toBeDefined();
    expect(res.body.user.id).toBe(user.id);
    expect(res.body.user.email).toBe(email);
    expect(res.body.user.baseRole).toBe(user.baseRole);
  });

  it("signs in with a legacy plain-text password", async () => {
    const email = uniqueEmail("signin-plain");
    const password = "LegacyPass!";
    await seedUserWithPassword({
      email,
      plainPassword: password,
      bcryptHash: false, // stored as plain text
    });

    const res = await request(app)
      .post("/api/auth/sign-in")
      .send({ email, password });

    expect(res.status, res.text).toBe(200);
    expect(res.body.user.email).toBe(email);
  });

  it("rejects invalid credentials on sign-in", async () => {
    const email = uniqueEmail("signin-invalid");
    const password = "CorrectPass!";
    await seedUserWithPassword({ email, plainPassword: password });

    const resBadPass = await request(app)
      .post("/api/auth/sign-in")
      .send({ email, password: "WrongPass!" });

    expect(resBadPass.status, resBadPass.text).toBe(401);
    expect(resBadPass.body.error).toMatch(/invalid credentials/i);

    const resNoUser = await request(app)
      .post("/api/auth/sign-in")
      .send({ email: "nouser@example.com", password: "anything" });

    expect(resNoUser.status, resNoUser.text).toBe(401);
  });

  it("changes password when currentPassword is correct", async () => {
    const email = uniqueEmail("change-pass");
    const oldPassword = "OldPassword1!";
    const newPassword = "NewPassword2!";

    const { user } = await seedUserWithPassword({
      email,
      plainPassword: oldPassword,
    });

    const res = await request(app)
      .post("/api/auth/change-password")
      .send({
        email,
        currentPassword: oldPassword,
        newPassword,
      });

    expect(res.status, res.text).toBe(200);
    expect(res.body.ok).toBe(true);

    const updated = await prisma.user.findUnique({ where: { id: user.id } });
    expect(updated.passwordHash).not.toBe(user.passwordHash);

    const okNew = await bcrypt.compare(newPassword, updated.passwordHash);
    expect(okNew).toBe(true);
  });

  it("rejects change-password with invalid currentPassword", async () => {
    const email = uniqueEmail("change-pass-bad");
    const oldPassword = "OldPassword1!";
    const newPassword = "NewPassword2!";

    await seedUserWithPassword({
      email,
      plainPassword: oldPassword,
    });

    const res = await request(app)
      .post("/api/auth/change-password")
      .send({
        email,
        currentPassword: "WrongPassword!",
        newPassword,
      });

    expect(res.status, res.text).toBe(401);
    expect(res.body.error).toMatch(/invalid credentials/i);
  });

  it("rejects change-password when new password is too short", async () => {
    const email = uniqueEmail("change-pass-short");
    const oldPassword = "OldPassword1!";

    await seedUserWithPassword({
      email,
      plainPassword: oldPassword,
    });

    const res = await request(app)
      .post("/api/auth/change-password")
      .send({
        email,
        currentPassword: oldPassword,
        newPassword: "short",
      });

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/at least 8 characters/i);
  });
});

describe("Auth routes - invite flow", () => {
  it("validates a valid invite token via GET /api/auth/invite/:token", async () => {
    const { user, authToken } = await seedInviteToken();

    const res = await request(app).get(
      `/api/auth/invite/${authToken.token}`
    );

    expect(res.status, res.text).toBe(200);
    expect(res.body.email).toBe(user.email.toLowerCase());
    expect(res.body.baseRole).toBe(user.baseRole);
    expect(res.body.status).toBe(user.status);
  });

  it("rejects invalid or expired invite tokens", async () => {
    // completely unknown token
    const resUnknown = await request(app).get(
      "/api/auth/invite/not-a-token"
    );
    expect(resUnknown.status, resUnknown.text).toBe(400);

    // expired token
    const { authToken } = await seedInviteToken({
      expiresInMs: -1000, // already expired
    });

    const resExpired = await request(app).get(
      `/api/auth/invite/${authToken.token}`
    );
    expect(resExpired.status, resExpired.text).toBe(400);
    expect(resExpired.body.error).toMatch(/invalid or expired/i);
  });

  it("accepts an invite and sets password + activates user", async () => {
    const { user, authToken } = await seedInviteToken();

    const res = await request(app)
      .post("/api/auth/accept-invite")
      .send({
        token: authToken.token,
        name: "New Name From Invite",
        password: "InvitePass123!",
      });

    expect(res.status, res.text).toBe(200);
    expect(res.body.user).toBeDefined();
    expect(res.body.user.id).toBe(user.id);
    expect(res.body.user.email).toBe(user.email);
    expect(res.body.user.name).toBe("New Name From Invite");

    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    expect(updatedUser.status).toBe(UserStatus.ACTIVE);
    expect(updatedUser.isArchived).toBe(false);

    const ok = await bcrypt.compare(
      "InvitePass123!",
      updatedUser.passwordHash
    );
    expect(ok).toBe(true);

    const updatedToken = await prisma.authToken.findUnique({
      where: { id: authToken.id },
    });
    expect(updatedToken.usedAt).not.toBeNull();
  });

  it("rejects accept-invite with too-short password or invalid token", async () => {
    const { authToken } = await seedInviteToken();

    const resShort = await request(app)
      .post("/api/auth/accept-invite")
      .send({
        token: authToken.token,
        password: "short",
      });

    expect(resShort.status, resShort.text).toBe(400);
    expect(resShort.body.error).toMatch(/at least 8 characters/i);

    const resInvalid = await request(app)
      .post("/api/auth/accept-invite")
      .send({
        token: "not-a-real-token",
        password: "ValidPass123!",
      });

    expect(resInvalid.status, resInvalid.text).toBe(400);
    expect(resInvalid.body.error).toMatch(/invalid or expired invite/i);
  });
});

describe("Auth routes - password reset", () => {
  it("requests a password reset and creates a reset token for existing user", async () => {
    const email = uniqueEmail("reset-existing");
    const { user } = await seedUserWithPassword({
      email,
      plainPassword: "OldPass123!",
      status: UserStatus.ACTIVE,
    });

    const res = await request(app)
      .post("/api/auth/request-password-reset")
      .send({ email });

    expect(res.status, res.text).toBe(200);
    expect(res.body.ok).toBe(true);
    expect(res.body.resetUrl).toContain("/reset-password?token=");

    const token = await prisma.authToken.findFirst({
      where: {
        userId: user.id,
        kind: AuthTokenKind.RESET_PASSWORD,
      },
    });
    expect(token).not.toBeNull();
  });

  it("request-password-reset hides whether user exists / is disabled", async () => {
    const emailDisabled = uniqueEmail("reset-disabled");
    await seedUserWithPassword({
      email: emailDisabled,
      status: UserStatus.DISABLED,
    });

    const resUnknown = await request(app)
      .post("/api/auth/request-password-reset")
      .send({ email: "noone@example.com" });
    expect(resUnknown.status, resUnknown.text).toBe(200);
    expect(resUnknown.body.ok).toBe(true);

    const resDisabled = await request(app)
      .post("/api/auth/request-password-reset")
      .send({ email: emailDisabled });
    expect(resDisabled.status, resDisabled.text).toBe(200);
    expect(resDisabled.body.ok).toBe(true);

    const tokensForDisabled = await prisma.authToken.findMany({
      where: {
        email: emailDisabled.toLowerCase(),
        kind: AuthTokenKind.RESET_PASSWORD,
      },
    });
    expect(tokensForDisabled.length).toBe(0);
  });

  it("resets password using valid reset token and marks token used", async () => {
    const email = uniqueEmail("reset-valid");
    const { user, authToken } = await seedResetToken({ email });

    const res = await request(app)
      .post("/api/auth/reset-password")
      .send({
        token: authToken.token,
        newPassword: "NewResetPass123!",
      });

    expect(res.status, res.text).toBe(200);
    expect(res.body.ok).toBe(true);

    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    const ok = await bcrypt.compare(
      "NewResetPass123!",
      updatedUser.passwordHash
    );
    expect(ok).toBe(true);

    const updatedToken = await prisma.authToken.findUnique({
      where: { id: authToken.id },
    });
    expect(updatedToken.usedAt).not.toBeNull();
  });

  it("activates user if they were INVITED and reset via reset-password", async () => {
    const email = uniqueEmail("reset-invited");
    const { user, authToken } = await seedResetToken({
      email,
      status: UserStatus.INVITED,
    });

    const res = await request(app)
      .post("/api/auth/reset-password")
      .send({
        token: authToken.token,
        newPassword: "ResetFromInvite123!",
      });

    expect(res.status, res.text).toBe(200);
    expect(res.body.ok).toBe(true);

    const updatedUser = await prisma.user.findUnique({
      where: { id: user.id },
    });
    expect(updatedUser.status).toBe(UserStatus.ACTIVE);
  });

  it("rejects invalid or expired reset tokens", async () => {
    const resUnknown = await request(app)
      .post("/api/auth/reset-password")
      .send({
        token: "not-a-token",
        newPassword: "SomePass123!",
      });

    expect(resUnknown.status, resUnknown.text).toBe(400);
    expect(resUnknown.body.error).toMatch(/invalid or expired reset/i);

    const { authToken } = await seedResetToken({
      expiresInMs: -1000, // expired
    });

    const resExpired = await request(app)
      .post("/api/auth/reset-password")
      .send({
        token: authToken.token,
        newPassword: "SomePass123!",
      });

    expect(resExpired.status, resExpired.text).toBe(400);
    expect(resExpired.body.error).toMatch(/invalid or expired reset/i);
  });

  it("rejects reset-password when newPassword is too short", async () => {
    const { authToken } = await seedResetToken();

    const res = await request(app)
      .post("/api/auth/reset-password")
      .send({
        token: authToken.token,
        newPassword: "short",
      });

    expect(res.status, res.text).toBe(400);
    expect(res.body.error).toMatch(/at least 8 characters/i);
  });
});
