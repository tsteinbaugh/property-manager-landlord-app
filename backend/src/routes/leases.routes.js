// backend/src/routes/leases.routes.js
const { Role } = require("@prisma/client");

const { parseLeasePost, parseLeasePatch } = require("../utils/leaseFields.js");
const { requireAuth, requireLandlordOrSysadmin } = require("../middleware/auth.middleware.js");

const { getLeaseDetails, listLeases } = require("../services/leaseDetails.service.js");

function registerLeaseRoutes(app, prisma, { uploadLeaseFile, shapeLease }) {
  // IMPORTANT: requireAuth is a factory (needs prisma)
  const auth = requireAuth(prisma);

  // Shared upload wrapper
  const uploadSingle = (field) => (req, res, next) => {
    uploadLeaseFile.single(field)(req, res, (err) => {
      if (err) {
        if (err.code === "LIMIT_FILE_SIZE") {
          return res
            .status(400)
            .json({ error: "File too large. Maximum size is 25 MB." });
        }
        return res.status(400).json({ error: err.message || "Upload error" });
      }
      return next();
    });
  };

  // ============================================================
  // POST /api/leases - create a lease + optional file upload
  // ============================================================
  app.post("/api/leases", uploadSingle("file"), async (req, res) => {
    try {
      const authUser = req.user || null;

      const parsed = parseLeasePost(req.body);
      if (parsed.error) return res.status(400).json({ error: parsed.error });

      let {
        propertyId,
        landlordId,
        tenantIds,
        propertyLabel,
        rentAmount,
        startDate,
        endDate,
        status,
      } = parsed.data;

      // ---------- Landlord (required; prefer auth user) ----------
      if (!landlordId) {
        if (authUser?.id) {
          landlordId = authUser.id;
        } else {
          const firstUser = await prisma.user.findFirst({
            orderBy: { createdAt: "asc" },
          });
          if (!firstUser) {
            return res.status(400).json({
              error:
                "No landlord user exists to attach this lease to. Create a user first.",
            });
          }
          landlordId = firstUser.id;
        }
      }

      // ---------- Validate tenant IDs exist (if provided) ----------
      let tenants = [];
      if (tenantIds.length > 0) {
        tenants = await prisma.tenant.findMany({
          where: { id: { in: tenantIds } },
        });
        if (tenants.length !== tenantIds.length) {
          return res
            .status(400)
            .json({ error: "One or more tenantIds are invalid." });
        }
      }

      const createData = {
        landlord: { connect: { id: landlordId } },

        propertyLabel,
        rentAmount,
        status,
        startDate,
        endDate,

        ...(req.file
          ? {
              fileUrl: `/uploads/leases/${req.file.filename}`,
              fileOriginalName: req.file.originalname,
              fileMimeType: req.file.mimetype,
              fileSize: req.file.size,
            }
          : {}),

        ...(authUser?.id
          ? { createdBy: { connect: { id: authUser.id } } }
          : {}),
      };

      if (propertyId) {
        createData.property = { connect: { id: propertyId } };
      }

      if (tenantIds.length > 0) {
        createData.leaseTenants = {
          create: tenantIds.map((id, index) => {
            const t = tenants.find((tt) => tt.id === id);
            return {
              tenant: { connect: { id } },
              tenantName: t?.name || null,
              startDate: startDate ?? null,
              endDate: endDate ?? null,
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

      return res.status(201).json(shapeLease(created));
    } catch (err) {
      console.error("Error in POST /api/leases", err);
      return res.status(500).json({ error: err.message || "Server error" });
    }
  });

  // ============================================================
  // POST /api/leases/:id/file - upload or replace the lease file
  // ============================================================
  app.post("/api/leases/:id/file", uploadSingle("file"), async (req, res) => {
    try {
      const { id } = req.params;
      const authUser = req.user || null;

      if (!req.file)
        return res.status(400).json({ error: "Lease file is required" });

      const existing = await prisma.lease.findUnique({
        where: { id },
        include: {
          property: true,
          landlord: true,
          leaseTenants: {
            include: { tenant: true },
            orderBy: { startDate: "desc" },
          },
        },
      });
      if (!existing) return res.status(404).json({ error: "Lease not found" });

      if (
        authUser &&
        authUser.id &&
        existing.landlordId !== authUser.id &&
        authUser.baseRole !== Role.SYSADMIN
      ) {
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
          leaseTenants: {
            include: { tenant: true },
            orderBy: { startDate: "desc" },
          },
        },
      });

      return res.json(shapeLease(updated));
    } catch (err) {
      console.error("Error in POST /api/leases/:id/file", err);
      return res.status(500).json({ error: err.message || "Server error" });
    }
  });

  // ============================================================
  // GET /api/leases - list all leases (scoped by landlord if logged in)
  // Optional ?includeArchived=0/1 flag
  // ============================================================
  app.get("/api/leases", async (req, res) => {
    try {
      const user = req.user || null;
      const includeArchived =
        req.query.includeArchived === "1" || req.query.includeArchived === "true";

      const leases = await listLeases(prisma, { user, includeArchived });
      return res.json(leases.map(shapeLease));
    } catch (err) {
      console.error("Error in GET /api/leases", err);
      return res.status(500).json({ error: "Server error" });
    }
  });

  // ============================================================
  // GET /api/leases/:id - get a single lease (scoped)
  // ============================================================
  app.get(
    "/api/leases/:id",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const lease = await getLeaseDetails(prisma, { leaseId: id, user });
        return res.json(shapeLease(lease));
      } catch (err) {
        if (res.headersSent) return;
        if (err?.status) return res.status(err.status).json({ error: err.message });
        console.error("Error in GET /api/leases/:id", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // PATCH /api/leases/:id - update lease fields
  // NOTE: Tenants are managed via link/unlink endpoints only.
  // Mirrors start/end date changes into LeaseTenant rows.
  // ============================================================
  app.patch(
    "/api/leases/:id",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const existing = await prisma.lease.findUnique({
          where: { id },
          include: { leaseTenants: true },
        });
        if (!existing) return res.status(404).json({ error: "Lease not found" });

        // landlord scoping
        if (
          user.baseRole === Role.LANDLORD &&
          existing.landlordId &&
          existing.landlordId !== user.id
        ) {
          return res
            .status(403)
            .json({ error: "You are not allowed to update this lease." });
        }

        const parsed = parseLeasePatch(req.body);
        if (parsed.error) return res.status(400).json({ error: parsed.error });

        const { data, meta } = parsed;

        // validate date ordering against existing if only one side provided
        const finalStart =
          meta.nextStartDate !== undefined ? meta.nextStartDate : existing.startDate;
        const finalEnd =
          meta.nextEndDate !== undefined ? meta.nextEndDate : existing.endDate;
        if (finalStart && finalEnd && finalEnd < finalStart) {
          return res
            .status(400)
            .json({ error: "endDate cannot be before startDate" });
        }

        // property connect/disconnect
        if (meta.propertyIdIntent !== undefined) {
          if (meta.propertyIdIntent)
            data.property = { connect: { id: meta.propertyIdIntent } };
          else data.property = { disconnect: true };
        }

        const updated = await prisma.$transaction(async (tx) => {
          const leaseUpdated = await tx.lease.update({
            where: { id },
            data,
            include: {
              property: true,
              landlord: true,
              leaseTenants: {
                include: { tenant: true },
                orderBy: { startDate: "desc" },
              },
            },
          });

          const shouldMirrorDates =
            req.body?.startDate !== undefined || req.body?.endDate !== undefined;

          if (shouldMirrorDates && leaseUpdated.leaseTenants?.length) {
            await tx.leaseTenant.updateMany({
              where: { leaseId: id },
              data: {
                startDate: leaseUpdated.startDate,
                endDate: leaseUpdated.endDate,
              },
            });

            return tx.lease.findUnique({
              where: { id },
              include: {
                property: true,
                landlord: true,
                leaseTenants: {
                  include: { tenant: true },
                  orderBy: { startDate: "desc" },
                },
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
    }
  );

  // ============================================================
  // PATCH /api/leases/:id/archive - toggle archivedAt timestamp
  // ============================================================
  app.patch(
    "/api/leases/:id/archive",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { id } = req.params;
      const user = req.user;

      try {
        const lease = await prisma.lease.findUnique({ where: { id } });
        if (!lease) return res.status(404).json({ error: "Lease not found" });

        if (
          user.baseRole === Role.LANDLORD &&
          lease.landlordId &&
          lease.landlordId !== user.id
        ) {
          return res.status(403).json({
            error: "You are not allowed to archive this lease.",
          });
        }

        const updated = await prisma.lease.update({
          where: { id },
          data: { archivedAt: lease.archivedAt ? null : new Date() },
        });

        return res.json(shapeLease(updated));
      } catch (err) {
        console.error("Error in PATCH /api/leases/:id/archive", err);
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // POST /api/leases/:leaseId/tenants/:tenantId/link
  // ============================================================
  app.post(
    "/api/leases/:leaseId/tenants/:tenantId/link",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { leaseId, tenantId } = req.params;
      const user = req.user;

      try {
        const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
        if (!lease) return res.status(404).json({ error: "Lease not found" });

        const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          if (lease.landlordId && lease.landlordId !== user.id) {
            return res.status(403).json({
              error: "You are not allowed to link tenants on this lease.",
            });
          }
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res
              .status(403)
              .json({ error: "You are not allowed to link this tenant." });
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
        console.error(
          "Error in POST /api/leases/:leaseId/tenants/:tenantId/link",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ============================================================
  // DELETE /api/leases/:leaseId/tenants/:tenantId/unlink
  // ============================================================
  app.delete(
    "/api/leases/:leaseId/tenants/:tenantId/unlink",
    auth,
    requireLandlordOrSysadmin,
    async (req, res) => {
      const { leaseId, tenantId } = req.params;
      const user = req.user;

      try {
        const lease = await prisma.lease.findUnique({ where: { id: leaseId } });
        if (!lease) return res.status(404).json({ error: "Lease not found" });

        const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
        if (!tenant) return res.status(404).json({ error: "Tenant not found" });

        const isSysAdmin = user.baseRole === Role.SYSADMIN;
        if (!isSysAdmin) {
          if (lease.landlordId && lease.landlordId !== user.id) {
            return res.status(403).json({
              error: "You are not allowed to unlink tenants on this lease.",
            });
          }
          if (tenant.landlordId && tenant.landlordId !== user.id) {
            return res.status(403).json({
              error: "You are not allowed to unlink this tenant.",
            });
          }
        }

        await prisma.leaseTenant.delete({
          where: { leaseId_tenantId: { leaseId, tenantId } },
        });

        return res.json({ ok: true });
      } catch (err) {
        // Prisma throws if missing; keep your “not found link” behavior:
        if (String(err?.code || "") === "P2025") {
          return res.status(404).json({ error: "Lease/tenant link not found" });
        }
        console.error(
          "Error in DELETE /api/leases/:leaseId/tenants/:tenantId/unlink",
          err
        );
        return res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = { registerLeaseRoutes };
