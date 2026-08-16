const express = require("express");
const prisma = require("../lib/prisma");
const { buildMatch } = require("../lib/search");

const MIN_QUERY_LENGTH = 2;
const PER_TYPE_LIMIT = 6;

function mapRows(rows, type, routeFor) {
  return rows.map((row) => ({
    type,
    id: row.id,
    title: row.title,
    subtitle: row.subtitle,
    score: row.score,
    route: routeFor(row),
  }));
}

const router = express.Router();

// Searches the "who/what" directory records (Entities, Properties, Tenants,
// Occupants, Pets, Vehicles, Vendors) — not transactional Finances/Maintenance
// rows, which are reached from the property/lease pages these results link to.
router.get("/", async (req, res) => {
  const term = (req.query.q || "").trim();
  if (term.length < MIN_QUERY_LENGTH) {
    return res.json({ results: [] });
  }

  const userId = req.currentUser.id;

  const entityMatch = buildMatch(`"legalName"`, term);
  const propertyMatch = buildMatch(`concat_ws(' ', name, address1, address2, city, zip)`, term);
  const tenantMatch = buildMatch(`concat_ws(' ', t."firstName", t."lastName", t.email, t.phone)`, term);
  const vendorMatch = buildMatch(`concat_ws(' ', name, trade)`, term);
  const occupantMatch = buildMatch(`o.name`, term);
  const petMatch = buildMatch(`concat_ws(' ', pt.name, pt.type, pt.breed)`, term);
  const vehicleMatch = buildMatch(`concat_ws(' ', v.make, v.model, v.color, v."licensePlate", v.vin)`, term);

  const [entities, properties, tenants, vendors, occupants, pets, vehicles] = await Promise.all([
    prisma.$queryRaw`
      SELECT id, "legalName" AS title, "entityType"::text AS subtitle, ${entityMatch.score} AS score
      FROM "Entity"
      WHERE "userId" = ${userId} AND ${entityMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT id, COALESCE(name, address1) AS title,
             concat_ws(', ', address1, city, state) AS subtitle,
             ${propertyMatch.score} AS score
      FROM "Property"
      WHERE "userId" = ${userId} AND ${propertyMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT t.id,
             concat_ws(' ', t."firstName", t."lastName") AS title,
             concat_ws(' · ', p.address1, t."applicationStatus"::text) AS subtitle,
             ${tenantMatch.score} AS score
      FROM "Tenant" t
      JOIN "Property" p ON p.id = t."propertyId"
      WHERE t."userId" = ${userId} AND ${tenantMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT id, name AS title, COALESCE(trade, '') AS subtitle, ${vendorMatch.score} AS score
      FROM "Vendor"
      WHERE "userId" = ${userId} AND ${vendorMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT o.id, o.name AS title,
             concat_ws(', ', p.address1, p.city) AS subtitle,
             l.id AS "leaseId",
             ${occupantMatch.score} AS score
      FROM "Occupant" o
      JOIN "Lease" l ON l.id = o."leaseId"
      JOIN "Property" p ON p.id = l."propertyId"
      WHERE l."userId" = ${userId} AND ${occupantMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT pt.id, COALESCE(pt.name, pt.type) AS title,
             concat_ws(' · ', pt.type, pr.address1) AS subtitle,
             l.id AS "leaseId",
             ${petMatch.score} AS score
      FROM "Pet" pt
      JOIN "Lease" l ON l.id = pt."leaseId"
      JOIN "Property" pr ON pr.id = l."propertyId"
      WHERE l."userId" = ${userId} AND ${petMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT v.id,
             COALESCE(NULLIF(trim(concat_ws(' ', v.year::text, v.make, v.model)), ''), v."licensePlate", 'Vehicle') AS title,
             concat_ws(' · ', v."licensePlate", pr.address1) AS subtitle,
             l.id AS "leaseId",
             ${vehicleMatch.score} AS score
      FROM "Vehicle" v
      JOIN "Lease" l ON l.id = v."leaseId"
      JOIN "Property" pr ON pr.id = l."propertyId"
      WHERE l."userId" = ${userId} AND ${vehicleMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
  ]);

  const results = [
    ...mapRows(entities, "entity", (r) => `/entities/${r.id}`),
    ...mapRows(properties, "property", (r) => `/properties/${r.id}`),
    ...mapRows(tenants, "tenant", (r) => `/tenants/${r.id}`),
    ...mapRows(vendors, "vendor", (r) => `/vendors/${r.id}`),
    ...mapRows(occupants, "occupant", (r) => `/leases/${r.leaseId}`),
    ...mapRows(pets, "pet", (r) => `/leases/${r.leaseId}`),
    ...mapRows(vehicles, "vehicle", (r) => `/leases/${r.leaseId}`),
  ].sort((a, b) => b.score - a.score);

  res.json({ results });
});

module.exports = router;
