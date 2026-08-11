// backend/src/services/propertyDetails.service.js
const { Role } = require("@prisma/client");

const { shapeTenant } = require("@shapes/tenant.shape.js");
const { shapeOccupant } = require("@shapes/occupant.shape.js");
const { shapePet } = require("@shapes/pet.shape.js");
const { shapeEmergencyContact } = require("@shapes/emergencyContact.shape.js");
const { shapeVehicle } = require("@shapes/vehicle.shape.js");

// Prisma include used by both detail + summary
const PROPERTY_DETAILS_INCLUDE = {
  leases: {
    include: {
      leaseTenants: {
        include: {
          tenant: {
            include: {
              occupantLinks: {
                include: { occupant: true },
              },
              petLinks: {
                include: { pet: true },
              },
              emergencyContactLinks: {
                include: { emergencyContact: true },
              },
              vehicleLinks: {
                include: { vehicle: true },
              },
            },
          },
        },
      },
    },
  },
};

const PROPERTY_SUMMARY_INCLUDE = {
  leases: {
    orderBy: { startDate: "desc" },
    include: PROPERTY_DETAILS_INCLUDE.leases.include,
  },
};

function assertCanViewProperty(user, property) {
  if (!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }

  if (!property) {
    const err = new Error("Property not found");
    err.status = 404;
    throw err;
  }

  // Landlord sees only their own; sysadmin sees all
  if (user.baseRole === Role.LANDLORD) {
    if (property.landlordId && property.landlordId !== user.id) {
      // you intentionally return 404 here (not 403) to avoid leaking existence
      const err = new Error("Property not found");
      err.status = 404;
      throw err;
    }
  }
}

// mode determines if you want shaped “child entities” or raw “child entities”
function buildResidentsFromProperty(property, { mode = "DETAIL" } = {}) {
  const tenantMap = new Map();
  const occupantMap = new Map();
  const petMap = new Map();
  const emergencyContactMap = new Map();
  const vehicleMap = new Map();

  function collectTenant(t) {
    if (!t?.id) return;

    if (!tenantMap.has(t.id)) {
      // DETAIL route currently returns a *custom* tenant object (not your shapeTenant)
      // but we can safely switch to shapeTenant because it matches your “DTO” intent.
      // If you want to keep EXACT old behavior, replace this with the old inline object.
      tenantMap.set(t.id, shapeTenant(t));
    }

    for (const link of t.occupantLinks || []) {
      const o = link.occupant;
      if (!o?.id) continue;
      if (!occupantMap.has(o.id)) {
        occupantMap.set(o.id, mode === "DETAIL" ? shapeOccupant(o) : o);
      }
    }

    for (const link of t.petLinks || []) {
      const p = link.pet;
      if (!p?.id) continue;
      if (!petMap.has(p.id)) {
        petMap.set(p.id, mode === "DETAIL" ? shapePet(p) : p);
      }
    }

    for (const link of t.emergencyContactLinks || []) {
      const e = link.emergencyContact;
      if (!e?.id) continue;
      if (!emergencyContactMap.has(e.id)) {
        emergencyContactMap.set(
          e.id,
          mode === "DETAIL" ? shapeEmergencyContact(e) : e
        );
      }
    }

    for (const link of t.vehicleLinks || []) {
      const v = link.vehicle;
      if (!v?.id) continue;
      if (!vehicleMap.has(v.id)) {
        vehicleMap.set(v.id, mode === "DETAIL" ? shapeVehicle(v) : v);
      }
    }
  }

  for (const lease of property.leases || []) {
    for (const lt of lease.leaseTenants || []) {
      if (lt?.tenant) collectTenant(lt.tenant);
    }
  }

  return {
    tenants: Array.from(tenantMap.values()),
    occupants: Array.from(occupantMap.values()),
    pets: Array.from(petMap.values()),
    emergencyContacts: Array.from(emergencyContactMap.values()),
    vehicles: Array.from(vehicleMap.values()),
  };
}

async function getPropertyDetails(prisma, { propertyId, user }) {
  const property = await prisma.property.findUnique({
    where: { id: propertyId },
    include: PROPERTY_DETAILS_INCLUDE,
  });

  assertCanViewProperty(user, property);

  const residents = buildResidentsFromProperty(property, { mode: "DETAIL" });

  return {
    ...property,
    ...residents,
  };
}

async function getPropertySummary(prisma, { propertyId, user }) {
  const property = await prisma.property.findUnique({
    where: { id: propertyId },
    include: PROPERTY_SUMMARY_INCLUDE,
  });

  // NOTE: your current /summary allows unauthenticated but still scopes for landlord.
  // In your current code you do NOT 401 if no user; you only scope if landlord.
  // If you want to keep that behavior, we won't require auth here.
  if (!property) {
    const err = new Error("Property not found");
    err.status = 404;
    throw err;
  }
  if (user && user.baseRole === Role.LANDLORD) {
    if (property.landlordId && property.landlordId !== user.id) {
      const err = new Error("Property not found");
      err.status = 404;
      throw err;
    }
  }

  const activeLease = property.leases?.[0] || null;

  // SUMMARY route currently returns raw tenant/etc objects (not shaped).
  const residents = buildResidentsFromProperty(
    { ...property, leases: activeLease ? [activeLease] : [] },
    { mode: "SUMMARY" }
  );

  return {
    property,
    lease: activeLease,
    ...residents,
  };
}

module.exports = {
  getPropertyDetails,
  getPropertySummary,
};
