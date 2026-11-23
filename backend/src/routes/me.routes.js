const express = require("express");
const prisma = require("../lib/prisma");
const { validateFacts, mergeFacts } = require("../lib/factCatalog");

// Clerk owns the canonical profile (name, email) — the app has no profile
// page of its own, editing happens via Clerk's account menu. This endpoint
// pulls the current name from Clerk and propagates it to the local User row
// and the default Self / Personal entity's legalName, since that entity is
// locked from direct editing and is meant to always mirror the account name.
function createMeRoutes({ clerkClient }) {
  const router = express.Router();

  // The landlord's account-level applicability answers (primary residence and
  // the like) and the states their properties are in, which decide which
  // account questions show.
  router.get("/facts", async (req, res) => {
    const [user, properties] = await Promise.all([
      prisma.user.findUnique({ where: { id: req.currentUser.id } }),
      prisma.property.findMany({ where: { userId: req.currentUser.id, archived: false }, select: { state: true } }),
    ]);
    res.json({ facts: user.facts || {}, propertyStates: [...new Set(properties.map((p) => p.state))] });
  });

  router.put("/facts", async (req, res) => {
    const { facts, error } = validateFacts("account", req.body?.facts);
    if (error) return res.status(400).json({ error });
    const user = await prisma.user.findUnique({ where: { id: req.currentUser.id } });
    const updated = await prisma.user.update({ where: { id: user.id }, data: { facts: mergeFacts(user.facts, facts) } });
    res.json({ facts: updated.facts });
  });

  router.post("/sync-profile", async (req, res) => {
    const clerkUser = await clerkClient.users.getUser(req.currentUser.clerkId);
    const email = clerkUser.emailAddresses.find((e) => e.id === clerkUser.primaryEmailAddressId)?.emailAddress;
    const name = [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(" ") || null;

    const user = await prisma.user.update({
      where: { id: req.currentUser.id },
      data: { name, email },
    });

    await prisma.entity.updateMany({
      where: { userId: req.currentUser.id, isDefault: true },
      data: { legalName: name || "Self / Personal" },
    });

    res.json(user);
  });

  return router;
}

module.exports = createMeRoutes;
