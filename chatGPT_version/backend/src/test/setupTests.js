const path = require("path");
const dotenv = require("dotenv");
const { PrismaClient } = require("@prisma/client");

// Load .env.test specifically
dotenv.config({
  path: path.resolve(__dirname, "../../.env.test"),
  override: true, // <-- important so DATABASE_URL from .env.test wins
});

// Make sure we *are* in test
if (process.env.NODE_ENV !== "test") {
  console.warn(
    `Warning: NODE_ENV is "${process.env.NODE_ENV}", but tests expect "test".`
  );
}

const prisma = new PrismaClient();

// Make prisma available if you want it in tests
global.prisma = prisma;

// Optional: run migrations automatically before tests
const { execSync } = require("child_process");

beforeAll(async () => {
  // Run migrations against the test DB so schema is up to date
  try {
    execSync("npx prisma migrate deploy", {
      stdio: "inherit",
      cwd: path.resolve(__dirname, "../.."),
    });
  } catch (err) {
    console.error("Failed to run prisma migrate deploy for tests", err);
    throw err;
  }
});

afterEach(async () => {
  // Generic Postgres table truncate between tests
  // Skips schema/table name hardcoding.
  const tablenames = await prisma.$queryRaw`
    SELECT tablename 
    FROM pg_tables 
    WHERE schemaname = 'public'
      AND tablename NOT IN ('_prisma_migrations')
  `;

  if (tablenames.length) {
    const tables = tablenames
      .map((t) => `"public"."${t.tablename}"`)
      .join(", ");

    // Use executeRawUnsafe because we’re inserting dynamic table list
    await prisma.$executeRawUnsafe(
      `TRUNCATE TABLE ${tables} RESTART IDENTITY CASCADE;`
    );
  }
});

afterAll(async () => {
  await prisma.$disconnect();
});
