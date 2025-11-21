// backend/src/routes/tenants.routes.js

function registerTenantRoutes(app, prisma, { shapeTenant }) {
    // ===================================================================
    // TENANTS
    // ===================================================================

    // GET /api/tenants – list all tenants
    app.get("/api/tenants", async (req, res) => {
    try {
        const tenants = await prisma.tenant.findMany({
        orderBy: { createdAt: "desc" },
        });

        res.json(tenants.map(shapeTenant));
    } catch (err) {
        console.error("Error in GET /api/tenants", err);
        res.status(500).json({ error: "Server error" });
    }
    });

    // POST /api/tenants – create tenant
    app.post("/api/tenants", async (req, res) => {
    const { name, email, phone } = req.body || {};
    if (!name || !name.trim()) {
        return res.status(400).json({ error: "name is required" });
    }

    try {
        const created = await prisma.tenant.create({
        data: {
            name: name.trim(),
            email: email?.trim() || null,
            phone: phone?.trim() || null,
        },
        });

        res.status(201).json(shapeTenant(created));
    } catch (err) {
        console.error("Error in POST /api/tenants", err);
        res.status(500).json({ error: "Server error" });
    }
    });

    // PATCH /api/tenants/:id – update tenant
    app.patch("/api/tenants/:id", async (req, res) => {
    const { id } = req.params;
    const { name, email, phone } = req.body || {};

    try {
        const existing = await prisma.tenant.findUnique({ where: { id } });
        if (!existing) {
        return res.status(404).json({ error: "Tenant not found" });
        }

        const updated = await prisma.tenant.update({
        where: { id },
        data: {
            name: name?.trim() ?? existing.name,
            email: email !== undefined ? email.trim() || null : existing.email,
            phone: phone !== undefined ? phone.trim() || null : existing.phone,
        },
        });

        res.json(shapeTenant(updated));
    } catch (err) {
        console.error("Error in PATCH /api/tenants/:id", err);
        res.status(500).json({ error: "Server error" });
    }
    });

    // PATCH /api/tenants/:id/archive – toggle archive flag
    app.patch("/api/tenants/:id/archive", async (req, res) => {
    const { id } = req.params;

    try {
        const existing = await prisma.tenant.findUnique({ where: { id } });
        if (!existing) {
        return res.status(404).json({ error: "Tenant not found" });
        }

        const updated = await prisma.tenant.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
        });

        res.json(shapeTenant(updated));
    } catch (err) {
        console.error("Error in PATCH /api/tenants/:id/archive", err);
        res.status(500).json({ error: "Server error" });
    }
    });
}

module.exports = {
  registerTenantRoutes,
};