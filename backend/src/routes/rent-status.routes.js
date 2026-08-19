const express = require("express");
const prisma = require("../lib/prisma");
const { buildRentTracker, summarizeRentStatus, RENT_TRACKER_CATEGORIES } = require("../lib/rentTracker");

// Portfolio-wide rollup: one row per property with an active/month-to-month
// lease, status only (not the full per-period table — that's what
// GET /api/leases/:id/rent-tracker is for). Exists so the property list and
// Dashboard can show a status pill without each fetching every property's
// full Rent Tracker (N+1) or duplicating "which lease is active, what does
// its history roll up to" logic in more than one frontend page.
const router = express.Router();

router.get("/", async (req, res) => {
  const leases = await prisma.lease.findMany({
    where: { userId: req.currentUser.id, status: { in: ["ACTIVE", "MONTH_TO_MONTH"] } },
  });

  const results = await Promise.all(
    leases.map(async (lease) => {
      const [incomes, waivers] = await Promise.all([
        prisma.income.findMany({
          where: { leaseId: lease.id, category: { in: RENT_TRACKER_CATEGORIES }, appliesToPeriod: { not: null } },
        }),
        prisma.lateFeeWaiver.findMany({ where: { leaseId: lease.id } }),
      ]);
      const rows = buildRentTracker({ lease, incomes, waivers, today: new Date() });
      const totalOwed = Math.round(rows.reduce((sum, r) => sum + Math.max(0, r.balance), 0) * 100) / 100;
      const maxDaysLate = rows.reduce((max, r) => Math.max(max, r.daysLate || 0), 0);

      return {
        propertyId: lease.propertyId,
        leaseId: lease.id,
        status: summarizeRentStatus(rows),
        totalOwed,
        maxDaysLate,
      };
    }),
  );

  res.json(results);
});

module.exports = router;
