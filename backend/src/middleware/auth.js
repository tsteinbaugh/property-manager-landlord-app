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

      user = await prisma.user.create({
        data: {
          clerkId,
          email,
          name: [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || null,
        },
      });
    }

    req.currentUser = user;
    next();
  };
}

module.exports = { createRequireAuth, createResolveCurrentUser };
