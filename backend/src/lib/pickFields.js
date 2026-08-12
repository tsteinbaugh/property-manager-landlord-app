// Picks only the given fields from a request body, coercing any listed as
// dates (e.g. "2026-09-01" from an HTML date input) into JS Date objects —
// Prisma rejects bare date strings, it wants a full ISO-8601 datetime or a Date.
function pickFields(body, fields, dateFields = []) {
  const data = {};
  for (const field of fields) {
    if (body[field] === undefined) continue;
    data[field] = dateFields.includes(field) && body[field] !== null ? new Date(body[field]) : body[field];
  }
  return data;
}

module.exports = { pickFields };
