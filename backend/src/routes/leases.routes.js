// backend/src/routes/leases.routes.js

const { Role } = require("@prisma/client");

function registerLeaseRoutes(app, prisma, { uploadLeaseFile, shapeLease }) {
  // ===================================================================
  // LEASES
  // ===================================================================

  // POST /api/leases - create a lease + optional file upload
  app.post(
    "/api/leases",
    (req, res, next) => {
      uploadLeaseFile.single("file")(req, res, (err) => {
        if (err) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res
              .status(400)
              .json({ error: "File too large. Maximum size is 25 MB." });
          }
          return res.status(400).json({ error: err.message || "Upload error" });
        }
        next();
      });
    },
    async (req, res) => {
      try {
        const {
          // property / landlord
          propertyId: rawPropertyId = "",
          landlordId: rawLandlordId = "",

          // SINGLE tenantId (for backwards compatibility / “primary” tenant)
          tenantId: rawTenantId = "",

          // NEW: multi-tenant support
          tenantIds: rawTenantIds,

          tenantName,
          propertyLabel,
          rentAmount,
          startDate,
          endDate,
          status, // optional, can be "DRAFT", "ACTIVE", etc.
        } = req.body || {};

        const authUser = req.user || null;

        // ---------- Optional property ----------
        const effectivePropertyId =
          rawPropertyId && String(rawPropertyId).trim()
            ? String(rawPropertyId).trim()
            : null;

        // ---------- Landlord (required, use auth user if possible) ----------
        let effectiveLandlordId =
          rawLandlordId && String(rawLandlordId).trim();

        if (!effectiveLandlordId) {
          if (authUser && authUser.id) {
            effectiveLandlordId = authUser.id;
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

            effectiveLandlordId = firstUser.id;
          }
        }

        // ---------- Collect tenant IDs (multi-tenant aware) ----------
        let tenantIds = [];

        // 1) from tenantIds array
        if (Array.isArray(rawTenantIds)) {
          tenantIds = rawTenantIds
            .map((id) => String(id).trim())
            .filter(Boolean);
        }

        // 2) from single tenantId field (used by older UI / primary tenant)
        const singleTenantId =
          rawTenantId && String(rawTenantId).trim()
            ? String(rawTenantId).trim()
            : null;

        if (singleTenantId && !tenantIds.includes(singleTenantId)) {
          tenantIds.unshift(singleTenantId);
        }

        // Load all referenced tenants (if any)
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

        const primaryTenantId = tenantIds.length > 0 ? tenantIds[0] : null;
        const primaryTenant =
          primaryTenantId != null
            ? tenants.find((t) => t.id === primaryTenantId) || null
            : null;

        // Rent parsing
        const numericRent =
          rentAmount !== undefined && rentAmount !== ""
            ? Number(rentAmount)
            : null;

        const startDateValue = startDate ? new Date(startDate) : null;
        const endDateValue = endDate ? new Date(endDate) : null;

        // Decide initial status:
        // - if client supplied one, use it
        // - otherwise:
        //   - if property + at least one tenant present => ACTIVE
        //   - else => DRAFT
        const initialStatus =
          status && String(status).trim()
            ? String(status).trim()
            : effectivePropertyId && primaryTenantId
            ? "ACTIVE"
            : "DRAFT";

        const createData = {
          landlord: { connect: { id: effectiveLandlordId } },

          // labels
          tenantName:
            tenantName && tenantName.trim()
              ? tenantName.trim()
              : primaryTenant?.name ?? null,
          propertyLabel:
            propertyLabel && propertyLabel.trim()
              ? propertyLabel.trim()
              : null,

          rentAmount: numericRent,
          status: initialStatus,
          startDate: startDateValue,
          endDate: endDateValue,

          ...(req.file
            ? {
                fileUrl: `/uploads/leases/${req.file.filename}`,
                fileOriginalName: req.file.originalname,
                fileMimeType: req.file.mimetype,
                fileSize: req.file.size,
              }
            : {}),

          ...(authUser && authUser.id
            ? {
                createdBy: { connect: { id: authUser.id } },
              }
            : {}),
        };

        // Attach property if provided
        if (effectivePropertyId) {
          createData.property = {
            connect: { id: effectivePropertyId },
          };
        }

        // Attach primary tenant to Lease.tenantId (if any)
        if (primaryTenantId) {
          createData.tenant = {
            connect: { id: primaryTenantId },
          };
        }

        // Attach ALL tenants to LeaseTenant join table
        if (tenantIds.length > 0) {
          createData.leaseTenants = {
            create: tenantIds.map((id, index) => {
              const t = tenants.find((tt) => tt.id === id);
              return {
                tenant: { connect: { id } },
                tenantName: t?.name || null,
                isPrimary: index === 0,
                startDate: startDateValue,
                endDate: endDateValue,
              };
            }),
          };
        }

        const created = await prisma.lease.create({
          data: createData,
          include: {
            property: true,
            landlord: true,
            tenant: true,
            leaseTenants: {
              include: { tenant: true },
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

  // POST /api/leases/:id/file - upload or replace the lease file
  app.post(
    "/api/leases/:id/file",
    (req, res, next) => {
      uploadLeaseFile.single("file")(req, res, (err) => {
        if (err) {
          if (err.code === "LIMIT_FILE_SIZE") {
            return res
              .status(400)
              .json({ error: "File too large. Maximum size is 25 MB." });
          }
          return res
            .status(400)
            .json({ error: err.message || "Upload error" });
        }
        next();
      });
    },
    async (req, res) => {
      try {
        const { id } = req.params;
        const authUser = req.user || null;

        if (!req.file) {
          return res.status(400).json({ error: "Lease file is required" });
        }

        const existing = await prisma.lease.findUnique({
          where: { id },
          include: {
            property: true,
            landlord: true,
            tenant: true,
            leaseTenants: {
              include: { tenant: true },
            },
          },
        });

        if (!existing) {
          return res.status(404).json({ error: "Lease not found" });
        }

        // Optional: landlord scoping – only allow owner to upload
        if (authUser && authUser.id && existing.landlordId !== authUser.id) {
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
            tenant: true,
            leaseTenants: {
              include: { tenant: true },
            },
          },
        });

        res.json(shapeLease(updated));
      } catch (err) {
        console.error("Error in POST /api/leases/:id/file", err);
        res.status(500).json({ error: err.message || "Server error" });
      }
    }
  );

  // GET /api/leases - list all leases (scoped by landlord if logged in)
  // Optional ?includeArchived=0/1 flag
  app.get("/api/leases", async (req, res) => {
    try {
      const authUser = req.user || null;
      const includeArchived = req.query.includeArchived === "1";

      const where = {};
      if (authUser && authUser.id) {
        // landlord-scoped
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
          tenant: true,
          leaseTenants: {
            include: { tenant: true },
          },
        },
      });

      res.json(leases.map(shapeLease));
    } catch (err) {
      console.error("Error in GET /api/leases", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // GET /api/leases/:id - get a single lease (scoped)
  app.get("/api/leases/:id", async (req, res) => {
    const { id } = req.params;
    const user = req.user || null;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      const lease = await prisma.lease.findUnique({
        where: { id },
        include: {
          property: true,
          landlord: true,
          tenant: true,
          leaseTenants: {
            include: { tenant: true },
          },
        },
      });

      if (!lease) {
        return res.status(404).json({ error: "Lease not found" });
      }

      // Landlord can only view their own lease; sysadmin can view any.
      if (
        user.baseRole === Role.LANDLORD &&
        lease.landlordId &&
        lease.landlordId !== user.id
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to view this lease." });
      }

      // For now, block other roles; can relax later if needed
      if (
        user.baseRole !== Role.LANDLORD &&
        user.baseRole !== Role.SYSADMIN
      ) {
        return res
          .status(403)
          .json({ error: "You are not allowed to view this lease." });
      }

      res.json(shapeLease(lease));
    } catch (err) {
      console.error("Error in GET /api/leases/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/leases/:id - update lease fields (including reassign property/tenant)
  // NOTE: This still only supports single tenant reassignment via tenantId.
  // Multi-tenant editing can be added later if you want.
  app.patch("/api/leases/:id", async (req, res) => {
    const { id } = req.params;
    const {
      propertyId,
      propertyLabel,
      tenantId,
      tenantName,
      rentAmount,
      startDate,
      endDate,
    } = req.body || {};

    try {
      const existing = await prisma.lease.findUnique({
        where: { id },
        include: {
          leaseTenants: true,
        },
      });

      if (!existing) {
        return res.status(404).json({ error: "Lease not found" });
      }

      // rent parsing
      let numericRent = existing.rentAmount;
      if (rentAmount !== undefined) {
        if (rentAmount === null || rentAmount === "") {
          numericRent = null;
        } else {
          const parsed = Number(rentAmount);
          if (!Number.isFinite(parsed)) {
            return res
              .status(400)
              .json({ error: "rentAmount must be a number" });
          }
          numericRent = parsed;
        }
      }

      const data = {
        // optional labels
        tenantName:
          tenantName !== undefined
            ? tenantName.trim() || null
            : existing.tenantName,
        propertyLabel:
          propertyLabel !== undefined
            ? propertyLabel.trim() || null
            : existing.propertyLabel,

        rentAmount: numericRent,
        startDate:
          startDate !== undefined
            ? startDate
              ? new Date(startDate)
              : null
            : existing.startDate,
        endDate:
          endDate !== undefined
            ? endDate
              ? new Date(endDate)
              : null
            : existing.endDate,
      };

      // reassign property if provided
      if (propertyId !== undefined && propertyId) {
        data.property = {
          connect: { id: String(propertyId).trim() },
        };
      }

      // reassign tenant if provided (still single)
      if (tenantId !== undefined && tenantId) {
        data.tenant = {
          connect: { id: String(tenantId).trim() },
        };
      }

      const updated = await prisma.lease.update({
        where: { id },
        data,
        include: {
          property: true,
          landlord: true,
          tenant: true,
          leaseTenants: {
            include: { tenant: true },
          },
        },
      });

      res.json(shapeLease(updated));
    } catch (err) {
      console.error("Error in PATCH /api/leases/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/leases/:id/archive - toggle status ARCHIVED/ACTIVE
  app.patch("/api/leases/:id/archive", async (req, res) => {
    const { id } = req.params;

    try {
      const lease = await prisma.lease.findUnique({ where: { id } });
      if (!lease) {
        return res.status(404).json({ error: "Lease not found" });
      }

      const nextStatus = lease.status === "ARCHIVED" ? "ACTIVE" : "ARCHIVED";
      console.log(`Toggling lease ${id} from ${lease.status} -> ${nextStatus}`);

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
}

module.exports = {
  registerLeaseRoutes,
};
