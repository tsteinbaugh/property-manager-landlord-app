// backend/prisma/seed.js
require("dotenv").config();

const { PrismaClient, Role } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const { Pool } = require("pg");
const bcrypt = require("bcryptjs");

// Prisma v7: use a Driver Adapter (instead of datasource url in schema)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// IMPORTANT: pass adapter to PrismaClient
const prisma = new PrismaClient({
  adapter: new PrismaPg(pool),
});

/**
 * Bootstrap seed:
 *  - If there are NO users, create a single SYSADMIN account:
 *      email:    sysadmin@example.com
 *      password: password123
 *  - If users already exist, do nothing.
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
    // disconnect prisma AND close the pg pool
    await prisma.$disconnect();
    await pool.end();
  });
