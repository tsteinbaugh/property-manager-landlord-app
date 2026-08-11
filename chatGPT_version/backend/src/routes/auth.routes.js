// backend/src/routes/auth.routes.js
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { UserStatus, AuthTokenKind } = require("@prisma/client");

const JWT_SECRET = process.env.JWT_SECRET || "dev-only-change-me";

function generateToken() {
  return crypto.randomBytes(32).toString("hex");
}

/**
 * Register auth routes:
 * - /api/auth/sign-in
 * - /api/auth/change-password
 * - /api/auth/invite/:token
 * - /api/auth/accept-invite
 * - /api/auth/request-password-reset
 * - /api/auth/reset-password
 */
function registerAuthRoutes(app, prisma, { FRONTEND_ORIGIN }) {
  // ===================================================================
  // AUTH (bcrypt-backed sign-in)
  // ===================================================================
  app.post("/api/auth/sign-in", async (req, res) => {
    const { email, password } = req.body || {};

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "email and password are required" });
    }

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const stored = user.passwordHash || "";
      let ok = false;

      // If it looks like a bcrypt hash, use bcrypt.compare
      if (
        stored.startsWith("$2a$") ||
        stored.startsWith("$2b$") ||
        stored.startsWith("$2y$")
      ) {
        ok = await bcrypt.compare(password, stored);
      } else {
        // Backwards-compat: allow old plain-text passwords to keep working
        ok = stored === password;
      }

      if (!ok) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Issue a JWT so the frontend can send it on subsequent requests
      const token = jwt.sign(
        {
          sub: user.id,
          role: user.baseRole,
        },
        JWT_SECRET,
        {
          expiresIn: "7d", // adjust if you want shorter/longer sessions
        }
      );

      return res.json({
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          baseRole: user.baseRole,
        },
        token,
      });
    } catch (err) {
      console.error("Error in /api/auth/sign-in", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ===================================================================
  // AUTH – change password for current user
  // ===================================================================
  app.post("/api/auth/change-password", async (req, res) => {
    const { email, currentPassword, newPassword } = req.body || {};

    if (!email || !currentPassword || !newPassword) {
      return res.status(400).json({
        error: "email, currentPassword, and newPassword are required",
      });
    }

    try {
      const user = await prisma.user.findUnique({ where: { email } });

      // Don't leak which part is wrong – generic invalid creds
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const stored = user.passwordHash || "";
      let ok = false;

      // Same logic as sign-in: bcrypt first, fallback to legacy plain text
      if (
        stored.startsWith("$2a$") ||
        stored.startsWith("$2b$") ||
        stored.startsWith("$2y$")
      ) {
        ok = await bcrypt.compare(currentPassword, stored);
      } else {
        ok = stored === currentPassword;
      }

      if (!ok) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      const trimmedNew = newPassword.trim();
      if (trimmedNew.length < 8) {
        return res
          .status(400)
          .json({ error: "Password must be at least 8 characters long" });
      }

      const hashed = await bcrypt.hash(trimmedNew, 10);

      await prisma.user.update({
        where: { id: user.id },
        data: { passwordHash: hashed },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in /api/auth/change-password", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ===================================================================
  // AUTH – invite token handling
  // ===================================================================

  // GET /api/auth/invite/:token - validate invite token and return basic info
  app.get("/api/auth/invite/:token", async (req, res) => {
    const { token } = req.params;
    try {
      const authToken = await prisma.authToken.findUnique({
        where: { token },
        include: { user: true },
      });

      if (
        !authToken ||
        authToken.kind !== AuthTokenKind.INVITE ||
        authToken.usedAt ||
        authToken.expiresAt < new Date()
      ) {
        return res.status(400).json({ error: "Invalid or expired invite link" });
      }

      if (!authToken.user) {
        return res
          .status(400)
          .json({ error: "Invite is not attached to a user" });
      }

      return res.json({
        email: authToken.email || authToken.user.email,
        baseRole: authToken.user.baseRole,
        status: authToken.user.status,
      });
    } catch (err) {
      console.error("Error in GET /api/auth/invite/:token", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/auth/accept-invite
  // Body: { token, name?, password }
  app.post("/api/auth/accept-invite", async (req, res) => {
    const { token, name, password } = req.body || {};

    if (!token || !password || !password.trim()) {
      return res
        .status(400)
        .json({ error: "token and password are required" });
    }

    try {
      const authToken = await prisma.authToken.findUnique({
        where: { token },
        include: { user: true },
      });

      if (
        !authToken ||
        authToken.kind !== AuthTokenKind.INVITE ||
        authToken.usedAt ||
        authToken.expiresAt < new Date()
      ) {
        return res.status(400).json({ error: "Invalid or expired invite link" });
      }

      if (!authToken.user) {
        return res
          .status(400)
          .json({ error: "Invite is not attached to a user" });
      }

      const trimmedPassword = password.trim();
      if (trimmedPassword.length < 8) {
        return res
          .status(400)
          .json({ error: "Password must be at least 8 characters long" });
      }

      const hash = await bcrypt.hash(trimmedPassword, 10);

      const updatedUser = await prisma.user.update({
        where: { id: authToken.userId },
        data: {
          name: name && name.trim() ? name.trim() : authToken.user.name,
          passwordHash: hash,
          status: UserStatus.ACTIVE,
          archivedAt: null,
        },
      });

      await prisma.authToken.update({
        where: { id: authToken.id },
        data: { usedAt: new Date() },
      });

      return res.json({
        user: {
          id: updatedUser.id,
          email: updatedUser.email,
          name: updatedUser.name,
          baseRole: updatedUser.baseRole,
        },
      });
    } catch (err) {
      console.error("Error in POST /api/auth/accept-invite", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ===================================================================
  // AUTH – password reset via token
  // ===================================================================

  // POST /api/auth/request-password-reset
  // Body: { email }
  app.post("/api/auth/request-password-reset", async (req, res) => {
    const { email } = req.body || {};
    if (!email || !email.trim()) {
      return res.status(400).json({ error: "email is required" });
    }

    const emailTrimmed = email.trim().toLowerCase();

    try {
      const user = await prisma.user.findUnique({
        where: { email: emailTrimmed },
      });

      // Always respond with generic success to avoid leaking which emails exist
      if (!user || user.status === UserStatus.DISABLED) {
        return res.json({ ok: true });
      }

      const token = generateToken();
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

      const resetToken = await prisma.authToken.create({
        data: {
          token,
          kind: AuthTokenKind.RESET_PASSWORD,
          userId: user.id,
          email: emailTrimmed,
          expiresAt,
        },
      });

      const resetUrl = `${FRONTEND_ORIGIN}/reset-password?token=${encodeURIComponent(
        resetToken.token
      )}`;

      console.log(
        `Password reset requested for ${emailTrimmed}: ${resetUrl}`
      );

      // For now we also return the URL so you can click it in dev
      return res.json({ ok: true, resetUrl });
    } catch (err) {
      console.error("Error in POST /api/auth/request-password-reset", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/auth/reset-password
  // Body: { token, newPassword }
  app.post("/api/auth/reset-password", async (req, res) => {
    const { token, newPassword } = req.body || {};

    if (!token || !newPassword || !newPassword.trim()) {
      return res
        .status(400)
        .json({ error: "token and newPassword are required" });
    }

    try {
      const authToken = await prisma.authToken.findUnique({
        where: { token },
        include: { user: true },
      });

      if (
        !authToken ||
        authToken.kind !== AuthTokenKind.RESET_PASSWORD ||
        authToken.usedAt ||
        authToken.expiresAt < new Date()
      ) {
        return res
          .status(400)
          .json({ error: "Invalid or expired reset link" });
      }

      if (!authToken.user) {
        return res
          .status(400)
          .json({ error: "Reset token not attached to a user" });
      }

      const trimmed = newPassword.trim();
      if (trimmed.length < 8) {
        return res
          .status(400)
          .json({ error: "Password must be at least 8 characters long" });
      }

      const hash = await bcrypt.hash(trimmed, 10);

      await prisma.user.update({
        where: { id: authToken.userId },
        data: {
          passwordHash: hash,
          status:
            authToken.user.status === UserStatus.INVITED
              ? UserStatus.ACTIVE
              : authToken.user.status,
        },
      });

      await prisma.authToken.update({
        where: { id: authToken.id },
        data: { usedAt: new Date() },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/auth/reset-password", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerAuthRoutes,
};
