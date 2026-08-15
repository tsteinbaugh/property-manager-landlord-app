const prisma = require("../lib/prisma");

function createRequireAuth({ getAuth }) {
  return function requireAuth(req, res, next) {
    const { userId } = getAuth(req);
    if (!userId) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    next();
  };
}

// Just-in-time provisioning: the first authenticated request from a given
// Clerk user creates the matching local User row, since Clerk owns signup
// and we don't have a reachable webhook endpoint in local dev.
function createResolveCurrentUser({ getAuth, clerkClient }) {
  return async function resolveCurrentUser(req, res, next) {
    const { userId: clerkId } = getAuth(req);

    let user = await prisma.user.findUnique({ where: { clerkId } });

    if (!user) {
      const clerkUser = await clerkClient.users.getUser(clerkId);
      const email = clerkUser.emailAddresses.find(
        (e) => e.id === clerkUser.primaryEmailAddressId,
      )?.emailAddress;

      const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || null;

      // Every property needs an Entity, and "Self / Personal" is a valid one
      // for landlords without an LLC — so give every new user a default
      // entity up front instead of blocking property creation on setting
      // one up manually. Marked isDefault so entities.routes.js locks it
      // from direct edit/delete — the invariant "every user always has at
      // least one entity to fall back to" depends on this one being permanent.
      user = await prisma.user.create({
        data: {
          clerkId,
          email,
          name,
          entities: {
            create: { legalName: name || "Self / Personal", entityType: "PERSONAL", isDefault: true },
          },
        },
      });
    }

    req.currentUser = user;
    next();
  };
}

module.exports = { createRequireAuth, createResolveCurrentUser };
