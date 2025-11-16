// backend/prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  // wipe data in a safe order
  await prisma.lease.deleteMany();
  await prisma.property.deleteMany();
  await prisma.user.deleteMany();

  const passwordHash = await bcrypt.hash("password123", 10);

  const admin = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin",
      passwordHash,
      baseRole: "SYSADMIN",
    },
  });

  const property = await prisma.property.create({
    data: {
      name: "6740 Sequoia Street",
      address1: "6740 Sequoia Street",
      city: "Frederick",
      state: "CO",
      postalCode: "80530",
      leases: {
        create: [
          {
            landlordId: admin.id,
            tenantName: "John Renter",
            rentAmount: 295000,
            status: "ACTIVE",
            startDate: new Date("2025-01-01"),
          },
        ],
      },
    },
  });

  console.log("Seed complete:");
  console.log("  Admin email: admin@example.com");
  console.log("  Admin password: password123");
  console.log("  Property:", property.address1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
