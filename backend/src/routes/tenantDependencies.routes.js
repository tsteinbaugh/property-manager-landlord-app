// backend/src/routes/tenantDependencies.routes.js

function registerTenantDependenciesRoutes(
  app,
  prisma,
  { shapeOccupant, shapePet, shapeEmergencyContact }
) {
  // ===================================================================
  // OCCUPANTS (per-tenant)
  // ===================================================================

  // GET /api/tenants/:tenantId/occupants
  app.get("/api/tenants/:tenantId/occupants", async (req, res) => {
    const { tenantId } = req.params;
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const user = req.user || null;

      // If a tenant is logged in, they can only access their own occupants
      if (user && user.baseRole === "TENANT") {
        const tenant = await prisma.tenant.findFirst({
          where: {
            id: tenantId,
            isArchived: false,
          },
        });

        if (!tenant || tenant.userId !== user.id) {
          return res.status(404).json({ error: "Tenant not found" });
        }
      }

      const where = {
        tenantId,
        ...(includeArchived ? {} : { isArchived: false }),
      };

      const occupants = await prisma.occupant.findMany({
        where,
        orderBy: { createdAt: "asc" },
      });

      res.json(occupants.map(shapeOccupant));
    } catch (err) {
      console.error("Error in GET /api/tenants/:tenantId/occupants", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/occupants – create occupant
  app.post("/api/tenants/:tenantId/occupants", async (req, res) => {
    const { tenantId } = req.params;
    const { name, relation } = req.body || {};

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "name is required" });
    }

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) {
        return res.status(404).json({ error: "Tenant not found" });
      }

      const user = req.user || null;
      if (user && user.baseRole === "TENANT") {
        if (tenant.userId !== user.id) {
          return res.status(404).json({ error: "Tenant not found" });
        }
      }

      const created = await prisma.occupant.create({
        data: {
          tenantId,
          name: name.trim(),
          relation: relation?.trim() || null,
        },
      });

      res.status(201).json(shapeOccupant(created));
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/occupants", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/:tenantId/occupants/:id – update occupant
  app.patch("/api/tenants/:tenantId/occupants/:id", async (req, res) => {
    const { tenantId, id } = req.params;
    const { name, relation } = req.body || {};

    try {
      const existing = await prisma.occupant.findUnique({ where: { id } });
      if (!existing || existing.tenantId !== tenantId) {
        return res.status(404).json({ error: "Occupant not found" });
      }

      const user = req.user || null;
      if (user && user.baseRole === "TENANT") {
        const tenant = await prisma.tenant.findFirst({
          where: {
            id: existing.tenantId,
            isArchived: false,
          },
        });

        if (!tenant || tenant.userId !== user.id) {
          return res.status(404).json({ error: "Occupant not found" });
        }
      }

      const updated = await prisma.occupant.update({
        where: { id },
        data: {
          name: name?.trim() ?? existing.name,
          relation:
            relation !== undefined ? relation.trim() || null : existing.relation,
        },
      });

      res.json(shapeOccupant(updated));
    } catch (err) {
      console.error(
        "Error in PATCH /api/tenants/:tenantId/occupants/:id",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/:tenantId/occupants/:id/archive – toggle isArchived
  app.patch(
    "/api/tenants/:tenantId/occupants/:id/archive",
    async (req, res) => {
      const { tenantId, id } = req.params;

      try {
        const existing = await prisma.occupant.findUnique({ where: { id } });
        if (!existing || existing.tenantId !== tenantId) {
          return res.status(404).json({ error: "Occupant not found" });
        }

        const user = req.user || null;
        if (user && user.baseRole === "TENANT") {
          const tenant = await prisma.tenant.findFirst({
            where: {
              id: existing.tenantId,
              isArchived: false,
            },
          });

          if (!tenant || tenant.userId !== user.id) {
            return res.status(404).json({ error: "Occupant not found" });
          }
        }

        const updated = await prisma.occupant.update({
          where: { id },
          data: { isArchived: !existing.isArchived },
        });

        res.json(shapeOccupant(updated));
      } catch (err) {
        console.error(
          "Error in PATCH /api/tenants/:tenantId/occupants/:id/archive",
          err
        );
        res.status(500).json({ error: "Server error" });
      }
    }
  );

  // ===================================================================
  // PETS (per-tenant)
  // ===================================================================

  // GET /api/tenants/:tenantId/pets
  app.get("/api/tenants/:tenantId/pets", async (req, res) => {
    const { tenantId } = req.params;
    const includeArchived =
      req.query.includeArchived === "1" ||
      req.query.includeArchived === "true";

    try {
      const user = req.user || null;
      if (user && user.baseRole === "TENANT") {
        const tenant = await prisma.tenant.findFirst({
          where: {
            id: tenantId,
            isArchived: false,
          },
        });

        if (!tenant || tenant.userId !== user.id) {
          return res.status(404).json({ error: "Tenant not found" });
        }
      }

      const where = {
        tenantId,
        ...(includeArchived ? {} : { isArchived: false }),
      };

      const pets = await prisma.pet.findMany({
        where,
        orderBy: { createdAt: "asc" },
      });

      res.json(pets.map(shapePet));
    } catch (err) {
      console.error("Error in GET /api/tenants/:tenantId/pets", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // POST /api/tenants/:tenantId/pets – create pet
  app.post("/api/tenants/:tenantId/pets", async (req, res) => {
    const { tenantId } = req.params;
    const { name, type, breed, weightLb } = req.body || {};

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "name is required" });
    }

    try {
      const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
      if (!tenant) {
        return res.status(404).json({ error: "Tenant not found" });
      }

      const user = req.user || null;
      if (user && user.baseRole === "TENANT") {
        if (tenant.userId !== user.id) {
          return res.status(404).json({ error: "Tenant not found" });
        }
      }

      const parsedWeight =
        weightLb !== undefined && weightLb !== null && weightLb !== ""
          ? Number(weightLb)
          : null;

      const created = await prisma.pet.create({
        data: {
          tenantId,
          name: name.trim(),
          type: type?.trim() || null,
          breed: breed?.trim() || null,
          weightLb: parsedWeight,
        },
      });

      res.status(201).json(shapePet(created));
    } catch (err) {
      console.error("Error in POST /api/tenants/:tenantId/pets", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/:tenantId/pets/:id – update pet
  app.patch("/api/tenants/:tenantId/pets/:id", async (req, res) => {
    const { tenantId, id } = req.params;
    const { name, type, breed, weightLb } = req.body || {};

    try {
      const existing = await prisma.pet.findUnique({ where: { id } });
      if (!existing || existing.tenantId !== tenantId) {
        return res.status(404).json({ error: "Pet not found" });
      }

      const user = req.user || null;
      if (user && user.baseRole === "TENANT") {
        const tenant = await prisma.tenant.findFirst({
          where: {
            id: existing.tenantId,
            isArchived: false,
          },
        });

        if (!tenant || tenant.userId !== user.id) {
          return res.status(404).json({ error: "Pet not found" });
        }
      }

      const parsedWeight =
        weightLb !== undefined && weightLb !== null && weightLb !== ""
          ? Number(weightLb)
          : null;

      const updated = await prisma.pet.update({
        where: { id },
        data: {
          name: name !== undefined ? name.trim() || existing.name : existing.name,
          type: type !== undefined ? type.trim() || null : existing.type,
          breed: breed !== undefined ? breed.trim() || null : existing.breed,
          weightLb:
            weightLb !== undefined ? parsedWeight : existing.weightLb,
        },
      });

      res.json(shapePet(updated));
    } catch (err) {
      console.error("Error in PATCH /api/tenants/:tenantId/pets/:id", err);
      res.status(500).json({ error: "Server error" });
    }
  });

  // PATCH /api/tenants/:tenantId/pets/:id/archive – toggle isArchived
  app.patch("/api/tenants/:tenantId/pets/:id/archive", async (req, res) => {
    const { tenantId, id } = req.params;

    try {
      const existing = await prisma.pet.findUnique({ where: { id } });
      if (!existing || existing.tenantId !== tenantId) {
        return res.status(404).json({ error: "Pet not found" });
      }

      const user = req.user || null;
      if (user && user.baseRole === "TENANT") {
        const tenant = await prisma.tenant.findFirst({
          where: {
            id: existing.tenantId,
            isArchived: false,
          },
        });

        if (!tenant || tenant.userId !== user.id) {
          return res.status(404).json({ error: "Pet not found" });
        }
      }

      const updated = await prisma.pet.update({
        where: { id },
        data: { isArchived: !existing.isArchived },
      });

      res.json(shapePet(updated));
    } catch (err) {
      console.error(
        "Error in PATCH /api/tenants/:tenantId/pets/:id/archive",
        err
      );
      res.status(500).json({ error: "Server error" });
    }
  });

  // ===================================================================
  // EMERGENCY CONTACTS (per-tenant)
  // ===================================================================

  // GET /api/tenants/:tenantId/emergency-contacts
  app.get(
    "/api/tenants/:tenantId/emergency-contacts",
    async (req, res) => {
      const { tenantId } = req.params;
      const includeArchived =
        req.query.includeArchived === "1" ||
        req.query.includeArchived === "true";

      try {
        const user = req.user || null;
        if (user && user.baseRole === "TENANT") {
          const tenant = await prisma.tenant.findFirst({
            where: {
              id: tenantId,
              isArchived: false,
            },
          });

          if (!tenant || tenant.userId !== user.id) {
            return res.status(404).json({ error: "Tenant not found" });
          }
        }

        const where = {
          tenantId,
          ...(includeArchived ? {} : { isArchived: false }),
        };

        const contacts = await prisma.emergencyContact.findMany({
          where,
          orderBy: { createdAt: "asc" },
        });

        res.json(contacts.map(shapeEmergencyContact));
      } catch (err) {
        console.error(
          "Error in GET /api/tenants/:tenantId/emergency-contacts",
          err
        );
        res.status(500).json({ error: "Server error" });
      }
    }
  );

  // POST /api/tenants/:tenantId/emergency-contacts – create contact
  app.post(
    "/api/tenants/:tenantId/emergency-contacts",
    async (req, res) => {
      const { tenantId } = req.params;
      const { name, phone, relation, email } = req.body || {};

      if (!name || !name.trim()) {
        return res.status(400).json({ error: "name is required" });
      }

      try {
        const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
        if (!tenant) {
          return res.status(404).json({ error: "Tenant not found" });
        }

        const user = req.user || null;
        if (user && user.baseRole === "TENANT") {
          if (tenant.userId !== user.id) {
            return res.status(404).json({ error: "Tenant not found" });
          }
        }

        const created = await prisma.emergencyContact.create({
          data: {
            tenantId,
            name: name.trim(),
            phone: phone?.trim() || null,
            relation: relation?.trim() || null,
            email: email?.trim() || null,
          },
        });

        res.status(201).json(shapeEmergencyContact(created));
      } catch (err) {
        console.error(
          "Error in POST /api/tenants/:tenantId/emergency-contacts",
          err
        );
        res.status(500).json({ error: "Server error" });
      }
    }
  );

  // PATCH /api/tenants/:tenantId/emergency-contacts/:id – update contact
  app.patch(
    "/api/tenants/:tenantId/emergency-contacts/:id",
    async (req, res) => {
      const { tenantId, id } = req.params;
      const { name, phone, relation, email } = req.body || {};

      try {
        const existing = await prisma.emergencyContact.findUnique({
          where: { id },
        });
        if (!existing || existing.tenantId !== tenantId) {
          return res.status(404).json({ error: "Emergency contact not found" });
        }

        const user = req.user || null;
        if (user && user.baseRole === "TENANT") {
          const tenant = await prisma.tenant.findFirst({
            where: {
              id: existing.tenantId,
              isArchived: false,
            },
          });

          if (!tenant || tenant.userId !== user.id) {
            return res
              .status(404)
              .json({ error: "Emergency contact not found" });
          }
        }

        const updated = await prisma.emergencyContact.update({
          where: { id },
          data: {
            name:
              name !== undefined
                ? name.trim() || existing.name
                : existing.name,
            phone:
              phone !== undefined ? phone.trim() || null : existing.phone,
            relation:
              relation !== undefined
                ? relation.trim() || null
                : existing.relation,
            email:
              email !== undefined ? email.trim() || null : existing.email,
          },
        });

        res.json(shapeEmergencyContact(updated));
      } catch (err) {
        console.error(
          "Error in PATCH /api/tenants/:tenantId/emergency-contacts/:id",
          err
        );
        res.status(500).json({ error: "Server error" });
      }
    }
  );

  // PATCH /api/tenants/:tenantId/emergency-contacts/:id/archive – toggle isArchived
  app.patch(
    "/api/tenants/:tenantId/emergency-contacts/:id/archive",
    async (req, res) => {
      const { tenantId, id } = req.params;

      try {
        const existing = await prisma.emergencyContact.findUnique({
          where: { id },
        });
        if (!existing || existing.tenantId !== tenantId) {
          return res.status(404).json({ error: "Emergency contact not found" });
        }

        const user = req.user || null;
        if (user && user.baseRole === "TENANT") {
          const tenant = await prisma.tenant.findFirst({
            where: {
              id: existing.tenantId,
              isArchived: false,
            },
          });

          if (!tenant || tenant.userId !== user.id) {
            return res
              .status(404)
              .json({ error: "Emergency contact not found" });
          }
        }

        const updated = await prisma.emergencyContact.update({
          where: { id },
          data: { isArchived: !existing.isArchived },
        });

        res.json(shapeEmergencyContact(updated));
      } catch (err) {
        console.error(
          "Error in PATCH /api/tenants/:tenantId/emergency-contacts/:id/archive",
          err
        );
        res.status(500).json({ error: "Server error" });
      }
    }
  );
}

module.exports = {
  registerTenantDependenciesRoutes,
};
