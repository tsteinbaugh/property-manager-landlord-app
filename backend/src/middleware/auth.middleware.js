// backend/src/middleware/auth.middleware.js
const jwt = require("jsonwebtoken");
const { UserStatus } = require("@prisma/client");

const JWT_SECRET = process.env.JWT_SECRET || "dev-only-change-me";

/**
 * Extracts token from:
 * - Authorization: Bearer <token>
 * - or X-Auth-Token header
 */
function getTokenFromReq(req) {
  const auth = req.headers.authorization || "";

  if (auth.startsWith("Bearer ")) {
    return auth.slice("Bearer ".length).trim();
  }

  const headerToken = req.headers["x-auth-token"];
  if (typeof headerToken === "string" && headerToken.trim()) {
    return headerToken.trim();
  }

  return null;
}

/**
 * attachUser:
 *  - DOES NOT enforce auth
 *  - If a valid token exists, it attaches req.user
 *  - If no/invalid token, it just continues with no req.user
 *
 * This makes it safe to roll out without breaking existing routes.
 */
function attachUser(prisma) {
  return async function attachUserMiddleware(req, res, next) {
    const token = getTokenFromReq(req);
    if (!token) {
      return next();
    }

    try {
      const payload = jwt.verify(token, JWT_SECRET);

      // We store user id as "sub" (subject)
      const userId = payload.sub;
      if (!userId) {
        return next();
      }

      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return next();
      }

      if (user.isArchived || user.status === UserStatus.DISABLED) {
        return next();
      }

      // Keep req.user light and explicit
      req.user = {
        id: user.id,
        email: user.email,
        name: user.name,
        baseRole: user.baseRole,
        status: user.status,
      };

      return next();
    } catch (err) {
      console.warn("attachUser: invalid or expired auth token:", err.message);
      // Do NOT block the request, just continue without req.user
      return next();
    }
  };
}

/**
 * requireAuth:
 *  - Uses attachUser internally
 *  - Enforces that req.user must be present or returns 401
 *  - We'll use this later on specific routes (e.g. POST /properties)
 */
function requireAuth(prisma) {
  const attach = attachUser(prisma);

  return async function requireAuthMiddleware(req, res, next) {
    await attach(req, res, async function innerNext() {
      if (!req.user) {
        return res.status(401).json({ error: "Unauthorized" });
      }
      return next();
    });
  };
}

module.exports = {
  attachUser,
  requireAuth,
};
