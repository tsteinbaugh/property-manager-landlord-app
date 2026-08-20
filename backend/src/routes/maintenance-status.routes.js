const express = require("express");
const prisma = require("../lib/prisma");

// Portfolio-wide rollup, mirroring rent-status.routes.js: one row per
// property (every property the user owns, unlike rent-status which only
// covers properties with an active lease — a property can have overdue
// maintenance with no lease at all) so the property list and Dashboard can
// show a status without each fetching every property's full request/schedule
// list (N+1). Worst-case wins: any overdue preventive item outranks a merely
// open request, which outranks nothing to report.
const router = express.Router();

router.get("/", async (req, res) => {
  const userId = req.currentUser.id;

  const [properties, openRequestCounts, overdueScheduleCounts] = await Promise.all([
    prisma.property.findMany({ where: { userId }, select: { id: true } }),
    prisma.maintenanceRequest.groupBy({
      by: ["propertyId"],
      where: { userId, status: { not: "CLOSED" } },
      _count: { _all: true },
    }),
    prisma.maintenanceSchedule.groupBy({
      by: ["propertyId"],
      where: { userId, nextDueDate: { lt: new Date() } },
      _count: { _all: true },
    }),
  ]);

  const openRequestsByProperty = Object.fromEntries(openRequestCounts.map((r) => [r.propertyId, r._count._all]));
  const overdueSchedulesByProperty = Object.fromEntries(
    overdueScheduleCounts.map((r) => [r.propertyId, r._count._all]),
  );

  const results = properties.map((property) => {
    const openRequestsCount = openRequestsByProperty[property.id] || 0;
    const overdueSchedulesCount = overdueSchedulesByProperty[property.id] || 0;
    const status = overdueSchedulesCount > 0 ? "OVERDUE" : openRequestsCount > 0 ? "OPEN" : "OK";

    return { propertyId: property.id, openRequestsCount, overdueSchedulesCount, status };
  });

  res.json(results);
});

module.exports = router;
