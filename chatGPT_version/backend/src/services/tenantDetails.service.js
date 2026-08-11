// backend/src/services/tenantDetails.service.js
const { Role } = require("@prisma/client");

const TENANT_DETAILS_INCLUDE = {
  leaseTenants: {
    orderBy: { startDate: "desc" },
    include: { lease: { include: { property: true } } },
  },
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
};

function assertCanViewTenant(user, tenant) {
  if (!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }

  if (!tenant) {
    const err = new Error("Tenant not found");
    err.status = 404;
    throw err;
  }

  if (user.baseRole !== Role.LANDLORD && user.baseRole !== Role.SYSADMIN) {
    const err = new Error("You are not allowed to view tenant details.");
    err.status = 403;
    throw err;
  }

  if (user.baseRole === Role.LANDLORD) {
    if (tenant.landlordId && tenant.landlordId !== user.id) {
      const err = new Error("Tenant not found"); // hide existence
      err.status = 404;
      throw err;
    }
  }
}

function buildLinkedResidents(tenant) {
  const occupants = (tenant.occupantLinks || [])
    .map((l) => l.occupant)
    .filter(Boolean);
  const pets = (tenant.petLinks || [])
    .map((l) => l.pet)
    .filter(Boolean);
  const emergencyContacts = (tenant.emergencyContactLinks || [])
    .map((l) => l.emergencyContact)
    .filter(Boolean);
  const vehicles = (tenant.vehicleLinks || [])
    .map((l) => l.vehicle)
    .filter(Boolean);

  return { occupants, pets, emergencyContacts, vehicles };
}

/**
 * getTenantDetails(prisma, { tenantId, user, includeArchivedAttachments })
 *
 * includeArchivedAttachments:
 *  - false (default): only return attachments where archivedAt is null
 *  - true: return all attachments (archived + active)
 */
async function getTenantDetails(prisma, { tenantId, user, includeArchivedAttachments = false }) {
  const tenant = await prisma.tenant.findUnique({
    where: { id: tenantId },
    include: {
      ...TENANT_DETAILS_INCLUDE,
      attachments: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  assertCanViewTenant(user, tenant);
  return { ...tenant, ...buildLinkedResidents(tenant) };
}

module.exports = {
  TENANT_DETAILS_INCLUDE,
  getTenantDetails,
  assertCanViewTenant,
};
