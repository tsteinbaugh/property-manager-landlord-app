// backend/prisma/seed.js
const { PrismaClient, Role, LeaseStatus } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database…");

  // Clear in child → parent order to avoid FK issues
  await prisma.occupant.deleteMany();
  await prisma.lease.deleteMany();
  await prisma.property.deleteMany();
  await prisma.tenant.deleteMany();
  await prisma.user.deleteMany();

  // 1) Create a SYSADMIN user
  const sysadmin = await prisma.user.create({
    data: {
      email: "sysadmin@example.com",
      name: "System Admin",
      // still plain text for now to match our stub auth
      passwordHash: "password123",
      baseRole: Role.SYSADMIN,
    },
  });

  // 2) Create a landlord user (so we still have a demo landlord)
  const landlord = await prisma.user.create({
    data: {
      email: "landlord@example.com",
      name: "Demo Landlord",
      passwordHash: "password123",
      baseRole: Role.LANDLORD,
    },
  });

  // 3) Create a property
  const prop = await prisma.property.create({
    data: {
      name: "6740 Sequoia Street",
      address1: "6740 Sequoia Street",
      city: "Frederick",
      state: "CO",
      postalCode: "80530",
      isArchived: false,
    },
  });

  // 4) Create a couple of tenants
  const tenant1 = await prisma.tenant.create({
    data: {
      name: "John Renter",
      email: "john.renter@example.com",
      phone: "555-111-2222",
    },
  });

  const tenant2 = await prisma.tenant.create({
    data: {
      name: "Jane Roommate",
      email: "jane.roommate@example.com",
      phone: "555-333-4444",
      isArchived: false,
    },
  });

  // 5) Create a lease for the property (attach to landlord user)
  await prisma.lease.create({
    data: {
      propertyId: prop.id,
      landlordId: landlord.id,
      tenantName: tenant1.name,
      rentAmount: 295000, // just a demo value
      status: LeaseStatus.ACTIVE,
      startDate: new Date("2025-01-01T00:00:00Z"),
    },
  });

  console.log("Seed complete.");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
