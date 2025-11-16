// backend/prisma.config.mjs
import "dotenv/config";

/**
 * @type {import("@prisma/config").PrismaConfig}
 */
const config = {
  schema: "./prisma/schema.prisma",
};

export default config;
