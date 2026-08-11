// backend/src/services/vehicleDetails.service.js
const { Role } = require("@prisma/client");

function assertCanViewVehicle(user, vehicle) {
  if (!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  if (!vehicle) {
    const err = new Error("Vehicle not found");
    err.status = 404;
    throw err;
  }

  if (user.baseRole === Role.LANDLORD) {
    if (vehicle.landlordId && vehicle.landlordId !== user.id) {
      const err = new Error("Vehicle not found"); // hide existence
      err.status = 404;
      throw err;
    }
  } else if (user.baseRole !== Role.SYSADMIN) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }
}

async function getVehicleDetails(prisma, { vehicleId, user, shapeVehicle }) {
  const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicleId } });
  assertCanViewVehicle(user, vehicle);

  const links = await prisma.tenantVehicle.findMany({
    where: { vehicleId },
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

  const shaped = shapeVehicle ? shapeVehicle(vehicle) : vehicle;
  return { ...shaped, tenants };
}

module.exports = {
  getVehicleDetails,
  assertCanViewVehicle,
};
