// backend/src/routes/leases.routes.js

function registerLeaseRoutes(app, prisma, { uploadLeaseFile, shapeLease }) {
    // ===================================================================
    // LEASES
    // ===================================================================

    // POST /api/leases - create a lease + upload file
    // If no propertyId is provided, attach to the most recently created property.
    // If no landlordId is provided, attach to the first user (landlord).
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
            return res
            .status(400)
            .json({ error: err.message || "Upload error" });
        }
        next();
        });
    },
    async (req, res) => {
        try {
        if (!req.file) {
            return res.status(400).json({ error: "Lease file is required" });
        }

        const {
            propertyId: rawPropertyId = "",
            landlordId: rawLandlordId = "",
            tenantId: rawTenantId = "",
            tenantName,
            propertyLabel,
            rentAmount,
            startDate,
            endDate,
        } = req.body || {};

        // ---------- Resolve property ----------
        let effectivePropertyId = rawPropertyId && String(rawPropertyId).trim();
        if (!effectivePropertyId) {
            const latestProperty = await prisma.property.findFirst({
            orderBy: { createdAt: "desc" },
            });

            if (!latestProperty) {
            return res.status(400).json({
                error:
                "No properties exist to attach this lease to. Create a property first.",
            });
            }

            effectivePropertyId = latestProperty.id;
        }

        // ---------- Resolve landlord ----------
        let effectiveLandlordId =
            rawLandlordId && String(rawLandlordId).trim();
        if (!effectiveLandlordId) {
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

        // ---------- Resolve tenant (REQUIRED now) ----------
        let effectiveTenantId =
            rawTenantId && String(rawTenantId).trim()
            ? String(rawTenantId).trim()
            : null;

        if (!effectiveTenantId) {
            return res.status(400).json({ error: "tenantId is required" });
        }

        const tenant = await prisma.tenant.findUnique({
            where: { id: effectiveTenantId },
        });
        if (!tenant) {
            return res.status(400).json({ error: "Invalid tenantId" });
        }

        // Rent parsing
        const numericRent =
            rentAmount !== undefined && rentAmount !== ""
            ? Number(rentAmount)
            : null;

        const created = await prisma.lease.create({
            data: {
            property: { connect: { id: effectivePropertyId } },
            landlord: { connect: { id: effectiveLandlordId } },
            
            tenant: { connect: { id: effectiveTenantId } },
            
            // labels (optional)
            tenantName:
                tenantName && tenantName.trim() ? tenantName.trim() : null,
            propertyLabel:
                propertyLabel && propertyLabel.trim() ? propertyLabel.trim() : null,
            
            rentAmount: numericRent,
            status: "ACTIVE",
            startDate: startDate ? new Date(startDate) : null,
            endDate: endDate ? new Date(endDate) : null,
            fileUrl: `/uploads/leases/${req.file.filename}`,
            fileOriginalName: req.file.originalname,
            fileMimeType: req.file.mimetype,
            fileSize: req.file.size,
            },
            include: {
            property: true,
            landlord: true,
            tenant: true,
            },
        });

        res.status(201).json(shapeLease(created));
        } catch (err) {
        console.error("Error in POST /api/leases", err);
        res.status(500).json({ error: err.message || "Server error" });
        }
    }
    );

    // GET /api/leases - list all leases
    app.get("/api/leases", async (req, res) => {
    try {
        const leases = await prisma.lease.findMany({
        orderBy: { createdAt: "desc" },
        include: {
            property: true,
            landlord: true,
            tenant: true,
        },
        });

        res.json(leases.map(shapeLease));
    } catch (err) {
        console.error("Error in GET /api/leases", err);
        res.status(500).json({ error: "Server error" });
    }
    });

    // PATCH /api/leases/:id - update lease fields
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
        const existing = await prisma.lease.findUnique({ where: { id } });
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
            return res.status(400).json({ error: "rentAmount must be a number" });
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

        // reassign tenant if provided
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