const express = require("express");
const { Prisma } = require("@prisma/client");
const prisma = require("../lib/prisma");
const { buildMatch } = require("../lib/search");

const MIN_QUERY_LENGTH = 2;
const PER_TYPE_LIMIT = 6;

// Occupant/Pet/Vehicle are linked to a Tenant, not a Lease (a Tenant can be
// on several leases over time as they move between units) — so search links
// to whichever lease is most likely the one you're looking for: the active
// one, or failing that, the most recently started one. Falls back to the
// Tenant's own page (mapRows below) if they aren't on any lease yet.
function currentLeaseIdSubquery(tenantIdExpr) {
  return Prisma.sql`
    SELECT lt."leaseId" FROM "LeaseTenant" lt
    JOIN "Lease" cl ON cl.id = lt."leaseId"
    WHERE lt."tenantId" = ${Prisma.raw(tenantIdExpr)}
    ORDER BY (cl.status = 'ACTIVE') DESC, cl."startDate" DESC
    LIMIT 1
  `;
}

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
             concat_ws(' ', 'Linked to', t."firstName", t."lastName") AS subtitle,
             t.id AS "tenantId",
             (${currentLeaseIdSubquery(`o."tenantId"`)}) AS "leaseId",
             ${occupantMatch.score} AS score
      FROM "Occupant" o
      JOIN "Tenant" t ON t.id = o."tenantId"
      WHERE t."userId" = ${userId} AND ${occupantMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT pt.id, COALESCE(pt.name, pt.type) AS title,
             concat_ws(' · ', pt.type, 'Linked to', t."firstName", t."lastName") AS subtitle,
             t.id AS "tenantId",
             (${currentLeaseIdSubquery(`pt."tenantId"`)}) AS "leaseId",
             ${petMatch.score} AS score
      FROM "Pet" pt
      JOIN "Tenant" t ON t.id = pt."tenantId"
      WHERE t."userId" = ${userId} AND ${petMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
    prisma.$queryRaw`
      SELECT v.id,
             COALESCE(NULLIF(trim(concat_ws(' ', v.year::text, v.make, v.model)), ''), v."licensePlate", 'Vehicle') AS title,
             concat_ws(' · ', v."licensePlate", 'Linked to', t."firstName", t."lastName") AS subtitle,
             t.id AS "tenantId",
             (${currentLeaseIdSubquery(`v."tenantId"`)}) AS "leaseId",
             ${vehicleMatch.score} AS score
      FROM "Vehicle" v
      JOIN "Tenant" t ON t.id = v."tenantId"
      WHERE t."userId" = ${userId} AND ${vehicleMatch.where}
      ORDER BY score DESC
      LIMIT ${PER_TYPE_LIMIT}
    `,
  ]);

  const results = [
    ...mapRows(entities, "entity", (r) => `/entities/${r.id}`),
    ...mapRows(properties, "property", (r) => `/properties/${r.id}`),
    ...mapRows(tenants, "tenant", (r) => `/tenants/${r.id}`),
    ...mapRows(vendors, "vendor", (r) => `/vendors/${r.id}`),
    ...mapRows(occupants, "occupant", (r) => (r.leaseId ? `/leases/${r.leaseId}` : `/tenants/${r.tenantId}`)),
    ...mapRows(pets, "pet", (r) => (r.leaseId ? `/leases/${r.leaseId}` : `/tenants/${r.tenantId}`)),
    ...mapRows(vehicles, "vehicle", (r) => (r.leaseId ? `/leases/${r.leaseId}` : `/tenants/${r.tenantId}`)),
  ].sort((a, b) => b.score - a.score);

  res.json({ results });
});

module.exports = router;
