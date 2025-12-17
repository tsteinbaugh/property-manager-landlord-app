// backend/src/routes/leases.routes.js
const { Role } = require("@prisma/client");

function registerLeaseRoutes(app, prisma, { uploadLeaseFile, shapeLease }) {
  // ============================================================
  // Helpers
  // ============================================================
  const ALLOWED_STATUS = new Set(["DRAFT", "ACTIVE", "TERMINATED", "ARCHIVED"]);

  const trimToNull = (v) => {
    if (v === undefined) return undefined;
    if (v === null) return null;
    if (typeof v !== "string") return "__INVALID__";
    const t = v.trim();
    return t ? t : null;
  };

  const parseMoneyOrNullOpt = (v) => {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (v === "") return null;
    const n = typeof v === "number" ? v : Number(String(v).trim());
    if (!Number.isFinite(n)) return "__INVALID__";
    if (n < 0) return "__INVALID__";
    // optional: cap to something sane
    if (n > 1000000000) return "__INVALID__";
    return n;
  };

  const parseDateOrNullOpt = (v) => {
    if (v === undefined) return undefined; // PATCH omit
    if (v === null) return null;
    if (v === "") return null;
    const d = new Date(v);
    if (Number.isNaN(d.getTime())) return "__INVALID__";
    return d;
  };

  const normalizeIdOrNull = (v) => {
    const s = v === undefined || v === null ? "" : String(v).trim();
    return s ? s : null;
  };

  const requireAuth = (req, res) => {
    const user = req.user || null;
    if (!user) {
      res.status(401).json({ error: "Unauthorized" });
      return null;
    }
    return user;
  };

  const requireLandlordOrSysadmin = (user, res) => {
    if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
      res.status(403).json({ error: "You are not allowed to perform this action." });
      return false;
    }
    return true;
  };

  // ============================================================
  // POST /api/leases - create a lease + optional file upload
  // ============================================================
  app.post(
    "/api/leases",
    (req, res, next) => {
      uploadLeaseFile.single("file")(req, res, (err) => {
        if (err) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ error: "File too large. Maximum size is 25 MB." });
          }
          return res.status(400).json({ error: err.message || "Upload error" });
        }
        next();
      });
    },
    async (req, res) => {
      try {
        const {
          propertyId: rawPropertyId = "",
          landlordId: rawLandlordId = "",
          tenantIds: rawTenantIds,
          propertyLabel,
          rentAmount,
          startDate,
          endDate,
          status,
        } = req.body || {};

        const authUser = req.user || null;

        // ---------- Optional property ----------
        const effectivePropertyId = normalizeIdOrNull(rawPropertyId);

        // ---------- Landlord (required; prefer auth user) ----------
        let effectiveLandlordId = normalizeIdOrNull(rawLandlordId);

        if (!effectiveLandlordId) {
          if (authUser && authUser.id) {
            effectiveLandlordId = authUser.id;
          } else {
            const firstUser = await prisma.user.findFirst({ orderBy: { createdAt: "asc" } });
            if (!firstUser) {
              return res.status(400).json({
                error: "No landlord user exists to attach this lease to. Create a user first.",
              });
            }
            effectiveLandlordId = firstUser.id;
          }
        }

        // ---------- Collect tenant IDs ----------
        let tenantIds = [];
        if (Array.isArray(rawTenantIds)) {
          tenantIds = rawTenantIds.map((id) => String(id).trim()).filter(Boolean);
        }

        let tenants = [];
        if (tenantIds.length > 0) {
          tenants = await prisma.tenant.findMany({ where: { id: { in: tenantIds } } });
          if (tenants.length !== tenantIds.length) {
            return res.status(400).json({ error: "One or more tenantIds are invalid." });
          }
        }

        const primaryTenantId = tenantIds.length > 0 ? tenantIds[0] : null;

        // ---------- Parse / validate ----------
        const labelVal = trimToNull(propertyLabel);
        if (labelVal === "__INVALID__") return res.status(400).json({ error: "propertyLabel must be a string" });

        const rentVal = parseMoneyOrNullOpt(rentAmount);
        if (rentVal === "__INVALID__") return res.status(400).json({ error: "rentAmount must be a non-negative number" });

        const startDateValue = parseDateOrNullOpt(startDate);
        if (startDateValue === "__INVALID__") return res.status(400).json({ error: "startDate must be a valid date" });

        const endDateValue = parseDateOrNullOpt(endDate);
        if (endDateValue === "__INVALID__") return res.status(400).json({ error: "endDate must be a valid date" });

        if (startDateValue && endDateValue && endDateValue < startDateValue) {
          return res.status(400).json({ error: "endDate cannot be before startDate" });
        }

        // status
        let initialStatus;
        const statusTrim = typeof status === "string" ? status.trim().toUpperCase() : "";
        if (statusTrim) {
          if (!ALLOWED_STATUS.has(statusTrim)) return res.status(400).json({ error: "Invalid status" });
          initialStatus = statusTrim;
        } else {
          initialStatus = effectivePropertyId && primaryTenantId ? "ACTIVE" : "DRAFT";
        }

        const createData = {
          landlord: { connect: { id: effectiveLandlordId } },

          propertyLabel: labelVal ?? null,
          rentAmount: rentVal ?? null,
          status: initialStatus,
          startDate: startDateValue ?? null,
          endDate: endDateValue ?? null,

          ...(req.file
            ? {
                fileUrl: `/uploads/leases/${req.file.filename}`,
                fileOriginalName: req.file.originalname,
                fileMimeType: req.file.mimetype,
                fileSize: req.file.size,
              }
            : {}),

          ...(authUser && authUser.id ? { createdBy: { connect: { id: authUser.id } } } : {}),
        };

        if (effectivePropertyId) {
          createData.property = { connect: { id: effectivePropertyId } };
        }

        if (tenantIds.length > 0) {
          createData.leaseTenants = {
            create: tenantIds.map((id, index) => {
              const t = tenants.find((tt) => tt.id === id);
              return {
                tenant: { connect: { id } },
                tenantName: t?.name || null,
                isPrimary: index === 0,
                startDate: startDateValue ?? null,
                endDate: endDateValue ?? null,
              };
            }),
          };
        }

        const created = await prisma.lease.create({
          data: createData,
          include: {
            property: true,
            landlord: true,
            leaseTenants: {
              include: { tenant: true },
              orderBy: { startDate: "desc" },
            },
          },
        });

        res.status(201).json(shapeLease(created));
      } catch (err) {
        console.error("Error in POST /api/leases", err);
        res.status(500).json({ error: err.message || "Server error" });
      }
    }
  );

  // ============================================================
  // POST /api/leases/:id/file - upload or replace the lease file
  // ============================================================
  app.post(
    "/api/leases/:id/file",
    (req, res, next) => {
      uploadLeaseFile.single("file")(req, res, (err) => {
        if (err) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ error: "File too large. Maximum size is 25 MB." });
          }
          return res.status(400).json({ error: err.message || "Upload error" });
        }
        next();
      });
    },
    async (req, res) => {
      try {
        const { id } = req.params;
        const authUser = req.user || null;

        if (!req.file) return res.status(400).json({ error: "Lease file is required" });

        const existing = await prisma.lease.findUnique({
          where: { id },
          include: {
            property: true,
            landlord: true,
            leaseTenants: { include: { tenant: true }, orderBy: { startDate: "desc" } },
          },
        });
        if (!existing) return res.status(404).json({ error: "Lease not found" });

        // landlord scoping
        if (authUser && authUser.id && existing.landlordId !== authUser.id && authUser.baseRole !== Role.SYSADMIN) {
          return res.status(403).json({ error: "Forbidden" });
        }

        const updated = await prisma.lease.update({
          where: { id },
          data: {
            fileUrl: `/uploads/leases/${req.file.filename}`,
            fileOriginalName: req.file.originalname,
            fileMimeType: req.file.mimetype,
            fileSize: req.file.size,
          },
          include: {
            property: true,
            landlord: true,
            leaseTenants: { include: { tenant: true }, orderBy: { startDate: "desc" } },
          },
        });

        res.json(shapeLease(updated));
      } catch (err) {
        console.error("Error in POST /api/leases/:id/file", err);
        res.status(500).json({ error: err.message || "Server error" });
      }
    }
  );

  // ============================================================
  // GET /api/leases - list all leases (scoped by landlord if logged in)
  // Optional ?includeArchived=0/1 flag
  // ============================================================
  app.get("/api/leases", async (req, res) => {
    try {
      const authUser = req.user || null;
      const includeArchived = req.query.includeArchived === "1" || req.query.includeArchived === "true";

      const where = {};
      if (authUser && authUser.id && authUser.baseRole === Role.LANDLORD) {
        where.landlordId = authUser.id;
      }
      if (!includeArchived) {
        where.status = { not: "ARCHIVED" };
      }

      const leases = await prisma.lease.findMany({
        where,
        orderBy: { createdAt: "desc" },
        include: {
          property: true,
          landlord: true,
          leaseTenants: { include: { tenant: true }, orderBy: { startDate: "desc" } },
        },
      });

      res.json(leases.map(shapeLease));
    } catch (err) {
      console.error("Error in GET /api/leases", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/leases/:id - get a single lease (scoped)
  // ============================================================
  app.get("/api/leases/:id", async (req, res) => {
    const { id } = req.params;
    const user = requireAuth(req, res);
    if (!user) return;

    try {
      const lease = await prisma.lease.findUnique({
        where: { id },
        include: {
          property: true,
          landlord: true,
          leaseTenants: {
            include: {
              tenant: {
                include: {
                  occupantLinks: { where: { occupant: { isArchived: false } }, include: { occupant: true } },
                  petLinks: { where: { pet: { isArchived: false } }, include: { pet: true } },
                  emergencyContactLinks: { where: { emergencyContact: { isArchived: false } }, include: { emergencyContact: true } },
                  vehicleLinks: { where: { vehicle: { isArchived: false } }, include: { vehicle: true } },
                },
              },
            },
          },
        },
      });

      if (!lease) return res.status(404).json({ error: "Lease not found" });

      if (user.baseRole === Role.LANDLORD && lease.landlordId && lease.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to view this lease." });
      }

      if (!requireLandlordOrSysadmin(user, res)) return;

      res.json(shapeLease(lease));
    } catch (err) {
      console.error("Error in GET /api/leases/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/leases/:id - update lease fields
  // NOTE: Tenants are managed via link/unlink endpoints only.
  // Also: if you change start/end dates, we mirror into LeaseTenant rows.
  // ============================================================
  app.patch("/api/leases/:id", async (req, res) => {
    const { id } = req.params;
    const user = requireAuth(req, res);
    if (!user) return;
    if (!requireLandlordOrSysadmin(user, res)) return;

    const { propertyId, propertyLabel, rentAmount, startDate, endDate, status } = req.body || {};

    try {
      const existing = await prisma.lease.findUnique({
        where: { id },
        include: { leaseTenants: true },
      });

      if (!existing) return res.status(404).json({ error: "Lease not found" });

      if (user.baseRole === Role.LANDLORD && existing.landlordId && existing.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to update this lease." });
      }

      const data = {};

      // propertyLabel
      if (propertyLabel !== undefined) {
        const v = trimToNull(propertyLabel);
        if (v === "__INVALID__") return res.status(400).json({ error: "propertyLabel must be a string" });
        data.propertyLabel = v;
      }

      // rentAmount
      if (rentAmount !== undefined) {
        const v = parseMoneyOrNullOpt(rentAmount);
        if (v === "__INVALID__") return res.status(400).json({ error: "rentAmount must be a non-negative number" });
        data.rentAmount = v;
      }

      // dates
      let nextStartDate = existing.startDate;
      let nextEndDate = existing.endDate;

      if (startDate !== undefined) {
        const v = parseDateOrNullOpt(startDate);
        if (v === "__INVALID__") return res.status(400).json({ error: "startDate must be a valid date" });
        nextStartDate = v;
        data.startDate = v;
      }
      if (endDate !== undefined) {
        const v = parseDateOrNullOpt(endDate);
        if (v === "__INVALID__") return res.status(400).json({ error: "endDate must be a valid date" });
        nextEndDate = v;
        data.endDate = v;
      }
      if (nextStartDate && nextEndDate && nextEndDate < nextStartDate) {
        return res.status(400).json({ error: "endDate cannot be before startDate" });
      }

      // status
      if (status !== undefined) {
        const next = typeof status === "string" ? status.trim().toUpperCase() : "";
        if (next) {
          if (!ALLOWED_STATUS.has(next)) return res.status(400).json({ error: "Invalid status" });
          data.status = next;
        }
      }

      // property connect/disconnect
      if (propertyId !== undefined) {
        const pid = normalizeIdOrNull(propertyId);
        if (pid) data.property = { connect: { id: pid } };
        else data.property = { disconnect: true };
      }

      // Update lease + optionally mirror dates into join rows
      const updated = await prisma.$transaction(async (tx) => {
        const leaseUpdated = await tx.lease.update({
          where: { id },
          data,
          include: {
            property: true,
            landlord: true,
            leaseTenants: { include: { tenant: true }, orderBy: { startDate: "desc" } },
          },
        });

        // Mirror lease date changes into LeaseTenant rows, but ONLY if dates were provided in patch
        const shouldMirrorDates = startDate !== undefined || endDate !== undefined;
        if (shouldMirrorDates && leaseUpdated.leaseTenants?.length) {
          await tx.leaseTenant.updateMany({
            where: { leaseId: id },
            data: {
              startDate: leaseUpdated.startDate,
              endDate: leaseUpdated.endDate,
            },
          });

          // re-fetch so response reflects mirrored dates
          return tx.lease.findUnique({
            where: { id },
            include: {
              property: true,
              landlord: true,
              leaseTenants: { include: { tenant: true }, orderBy: { startDate: "desc" } },
            },
          });
        }

        return leaseUpdated;
      });

      return res.json(shapeLease(updated));
    } catch (err) {
      console.error("Error in PATCH /api/leases/:id", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // PATCH /api/leases/:id/archive - toggle status ARCHIVED/ACTIVE
  // ============================================================
  app.patch("/api/leases/:id/archive", async (req, res) => {
    const { id } = req.params;
    const user = requireAuth(req, res);
    if (!user) return;
    if (!requireLandlordOrSysadmin(user, res)) return;

    try {
      const lease = await prisma.lease.findUnique({ where: { id } });
      if (!lease) return res.status(404).json({ error: "Lease not found" });

      if (user.baseRole === Role.LANDLORD && lease.landlordId && lease.landlordId !== user.id) {
        return res.status(403).json({ error: "You are not allowed to archive this lease." });
      }

      const nextStatus = lease.status === "ARCHIVED" ? "ACTIVE" : "ARCHIVED";

      const updated = await prisma.lease.update({
        where: { id },
        data: { status: nextStatus },
      });

      res.json(shapeLease(updated));
    } catch (err) {
      console.error("Error in PATCH /api/leases/:id/archive", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // POST /api/leases/:leaseId/tenants/:tenantId/link
  // ============================================================
  app.post("/api/leases/:leaseId/tenants/:tenantId/link", async (req, res) => {
    const { leaseId, tenantId } = req.params;
    const user = requireAuth(req, res);
    if (!user) return;
    if (!requireLandlordOrSysadmin(user, res)) return;

    try {
      const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
      if (!lease) return res.status(404).json({ error: "Lease not found" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (lease.landlordId && lease.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link tenants on this lease." });
        }
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to link this tenant." });
        }
      }

      await prisma.leaseTenant.upsert({
        where: { leaseId_tenantId: { leaseId, tenantId } },
        update: {},
        create: {
          leaseId,
          tenantId,
          tenantName: tenant.name || null,
        },
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in POST /api/leases/:leaseId/tenants/:tenantId/link", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // DELETE /api/leases/:leaseId/tenants/:tenantId/unlink
  // ============================================================
  app.delete("/api/leases/:leaseId/tenants/:tenantId/unlink", async (req, res) => {
    const { leaseId, tenantId } = req.params;
    const user = requireAuth(req, res);
    if (!user) return;
    if (!requireLandlordOrSysadmin(user, res)) return;

    try {
      const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
      if (!lease) return res.status(404).json({ error: "Lease not found" });

      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) return res.status(404).json({ error: "Tenant not found" });

      const isSysAdmin = user.baseRole === Role.SYSADMIN;
      if (!isSysAdmin) {
        if (lease.landlordId && lease.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink tenants on this lease." });
        }
        if (tenant.landlordId && tenant.landlordId !== user.id) {
          return res.status(403).json({ error: "You are not allowed to unlink this tenant." });
        }
      }

      try {
        await prisma.leaseTenant.delete({
          where: { leaseId_tenantId: { leaseId, tenantId } },
        });
      } catch (deleteErr) {
        console.error("No LeaseTenant link to delete", deleteErr);
        return res.status(404).json({ error: "Lease/tenant link not found" });
      }

      return res.json({ ok: true });
    } catch (err) {
      console.error("Error in DELETE /api/leases/:leaseId/tenants/:tenantId/unlink", err);
      return res.status(500).json({ error: "Server error" });
    }
  });
}

module.exports = {
  registerLeaseRoutes,
};
