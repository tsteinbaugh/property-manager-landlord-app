// backend/src/services/occupantDetails.service.js
const { Role } = require("@prisma/client");

function assertCanViewOccupant(user, occupant) {
  if (!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  if (!occupant) {
    const err = new Error("Occupant not found");
    err.status = 404;
    throw err;
  }

  if (user.baseRole === Role.LANDLORD) {
    if (occupant.landlordId && occupant.landlordId !== user.id) {
      const err = new Error("Occupant not found"); // hide existence
      err.status = 404;
      throw err;
    }
  } else if (user.baseRole !== Role.SYSADMIN) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }
}

async function getOccupantDetails(prisma, { occupantId, user, shapeOccupant }) {
  const occupant = await prisma.occupant.findUnique({ where: { id: occupantId } });
  assertCanViewOccupant(user, occupant);

  const links = await prisma.tenantOccupant.findMany({
    where: { occupantId },
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

  const shaped = shapeOccupant ? shapeOccupant(occupant) : occupant;
  return { ...shaped, tenants };
}

module.exports = {
  getOccupantDetails,
  assertCanViewOccupant,
};
