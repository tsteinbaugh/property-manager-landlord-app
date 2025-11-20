// backend/prisma/seed.js
const { PrismaClient, Role } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

/**
 * Bootstrap seed:
 *  - If there are NO users, create a single SYSADMIN account:
 *      email:    sysadmin@example.com
 *      password: password123
 *  - If users already exist, do nothing.
 *
 * Run with:
 *   npm run seed
 */
async function main() {
  console.log("Bootstrapping database…");

  const userCount = await prisma.user.count();
  if (userCount > 0) {
    console.log(`Users already exist (${userCount}). Skipping bootstrap.`);
    return;
  }

  console.log("No users found. Creating initial sysadmin user…");

  const plainPassword = "password123";
  const hashed = await bcrypt.hash(plainPassword, 10);

  const sysadmin = await prisma.user.create({
    data: {
      email: "sysadmin@example.com",
      name: "System Admin",
      passwordHash: hashed,
      baseRole: Role.SYSADMIN,
    },
  });

  console.log("Created initial sysadmin user:");
  console.log(`  email:    ${sysadmin.email}`);
  console.log(`  password: ${plainPassword}`);
  console.log(`  role:     ${sysadmin.baseRole}`);
  console.log("You can now sign in with sysadmin@example.com / password123");
}

main()
  .catch((e) => {
    console.error("Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
