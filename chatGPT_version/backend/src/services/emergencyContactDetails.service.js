// backend/src/services/emergencyContactDetails.service.js
const { Role } = require("@prisma/client");

function assertCanViewEmergencyContact(user, emergencyContact) {
  if (!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  if (!emergencyContact) {
    const err = new Error("Emergency contact not found");
    err.status = 404;
    throw err;
  }

  // Landlord can only view their own; sysadmin can view any
  if (user.baseRole === Role.LANDLORD) {
    if (emergencyContact.landlordId && emergencyContact.landlordId !== user.id) {
      const err = new Error("Emergency contact not found");
      err.status = 404; // hide existence
      throw err;
    }
  } else if (user.baseRole !== Role.SYSADMIN) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }
}

async function getEmergencyContactDetails(prisma, { emergencyContactId, user, shapeEmergencyContact }) {
  const emergencyContact = await prisma.emergencyContact.findUnique({
    where: { id: emergencyContactId },
  });

  assertCanViewEmergencyContact(user, emergencyContact);

  const links = await prisma.tenantEmergencyContact.findMany({
    where: { emergencyContactId },
    include: { tenant: true },
  });

  const tenants = links
    .map((l) => l.tenant)
    .filter(Boolean)
    .map((t) => ({
      id: t.id,
      name: t.name,
      email: t.email,
      phone: t.phone,
      archived: !!t.archivedAt,
      createdAt: t.createdAt,
      updatedAt: t.updatedAt,
    }));

  const shaped = shapeEmergencyContact ? shapeEmergencyContact(emergencyContact) : emergencyContact;

  return { ...shaped, tenants };
}

module.exports = {
  getEmergencyContactDetails,
  assertCanViewEmergencyContact,
};
