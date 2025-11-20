// backend/prisma/seed.js
const { PrismaClient, Role } = require("@prisma/client");

const prisma = new PrismaClient();

/**
 * This seed script is now a *bootstrap* helper, not a destructive reset.
 *
 * Behavior:
 *   - If there are NO users, create a single SYSADMIN account:
 *       email: sysadmin@example.com
 *       password: password123  (matches the stub sign-in)
 *   - If users already exist, do nothing.
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

  const sysadmin = await prisma.user.create({
    data: {
      email: "sysadmin@example.com",
      name: "System Admin",
      // still plain-text-ish because our auth stub compares directly
      // (we'll switch to real hashing later)
      passwordHash: "password123",
      baseRole: Role.SYSADMIN,
    },
  });

  console.log("Created initial sysadmin user:");
  console.log(`  email: ${sysadmin.email}`);
  console.log(`  role:  ${sysadmin.baseRole}`);
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
