// backend/src/services/leaseDetails.service.js
const { Role } = require("@prisma/client");

const LEASE_DETAILS_INCLUDE = {
  property: true,
  landlord: true,
  leaseTenants: {
    orderBy: { startDate: "desc" },
    include: {
      tenant: {
        include: {
          occupantLinks: {
            where: { occupant: { archivedAt: null } },
            include: { occupant: true },
          },
          petLinks: {
            where: { pet: { archivedAt: null } },
            include: { pet: true },
          },
          emergencyContactLinks: {
            where: { emergencyContact: { archivedAt: null } },
            include: { emergencyContact: true },
          },
          vehicleLinks: {
            where: { vehicle: { archivedAt: null } },
            include: { vehicle: true },
          },
        },
      },
    },
  },
};

function assertCanAccessLease(user, lease, { requireUser = true } = {}) {
  if (requireUser && !user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  if (!lease) {
    const err = new Error("Lease not found");
    err.status = 404;
    throw err;
  }

  if (user?.baseRole === Role.LANDLORD) {
    if (lease.landlordId && lease.landlordId !== user.id) {
      const err = new Error("Lease not found");
      err.status = 404; // hide existence
      throw err;
    }
  }
}

async function getLeaseDetails(prisma, { leaseId, user }) {
  const lease = await prisma.lease.findUnique({
    where: { id: leaseId },
    include: {
      ...LEASE_DETAILS_INCLUDE,
      attachments: {
        orderBy: { createdAt: "desc" },
      },
    },
  });

  assertCanAccessLease(user, lease, { requireUser: true });
  return lease;  
}

async function listLeases(prisma, { user, includeArchived = false }) {
  const where = {};

  if (user?.baseRole === Role.LANDLORD) {
    where.landlordId = user.id;
  }
  if (!includeArchived) {
    where.archivedAt = null;
  }

  return prisma.lease.findMany({
    where,
    orderBy: { createdAt: "desc" },
    include: {
      property: true,
      landlord: true,
      leaseTenants: { include: { tenant: true }, orderBy: { startDate: "desc" } },
      attachments: { 
        where: {archivedAt: null },
        orderBy: { createdAt: "desc" } 
      },  
    },
  });
}

module.exports = {
  LEASE_DETAILS_INCLUDE,
  getLeaseDetails,
  listLeases,
  assertCanAccessLease,
};
