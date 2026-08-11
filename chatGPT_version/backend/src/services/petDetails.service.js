// backend/src/services/petDetails.service.js
const { Role } = require("@prisma/client");

function assertCanViewPet(user, pet) {
  if (!user) {
    const err = new Error("Unauthorized");
    err.status = 401;
    throw err;
  }
  if (!pet) {
    const err = new Error("Pet not found");
    err.status = 404;
    throw err;
  }

  if (user.baseRole === Role.LANDLORD) {
    if (pet.landlordId && pet.landlordId !== user.id) {
      const err = new Error("Pet not found"); // hide existence
      err.status = 404;
      throw err;
    }
  } else if (user.baseRole !== Role.SYSADMIN) {
    const err = new Error("Forbidden");
    err.status = 403;
    throw err;
  }
}

async function getPetDetails(prisma, { petId, user, shapePet }) {
  const pet = await prisma.pet.findUnique({ where: { id: petId } });
  assertCanViewPet(user, pet);

  const links = await prisma.tenantPet.findMany({
    where: { petId },
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

  const shaped = shapePet ? shapePet(pet) : pet;
  return { ...shaped, tenants };
}

module.exports = {
  getPetDetails,
  assertCanViewPet,
};
