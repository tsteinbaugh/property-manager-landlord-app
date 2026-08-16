const { Prisma } = require("@prisma/client");
const { getNameAliases } = require("./nicknames");

// A single-word query also searches its nickname cluster-mates (e.g. "Bob"
// also searches "Robert") — see nicknames.js for why that's a separate
// relationship from trigram/phonetic matching. Multi-word queries (e.g. a
// full name or an address) skip alias expansion; nicknames only make sense
// for a bare first name.
function expandTerms(query) {
  const trimmed = query.trim();
  const terms = new Set([trimmed]);
  if (!trimmed.includes(" ")) {
    for (const alias of getNameAliases(trimmed)) {
      terms.add(alias);
    }
  }
  return Array.from(terms);
}

// Builds a Prisma.sql score expression for how well `textExpr` (a raw SQL
// expression over already-quoted, hardcoded column names — never
// user-supplied, so this stays injection-safe) matches `query`, combining
// three independent signals per candidate term (the query plus any nickname
// aliases):
//   - trigram word_similarity — "close enough" (typos, partial words) — uses
//     word_similarity rather than plain similarity() so a short query still
//     scores well against a long concatenated field (address + city + zip,
//     etc.) instead of being diluted by the whole string's length
//   - ILIKE substring      — literal substring, including an alias's full name
//   - Soundex per word     — sounds alike, spelled differently
// Returns { score, where } — `score` for SELECT/ORDER BY, `where` (score > threshold)
// for the WHERE clause.
function buildMatch(textExpr, query, threshold = 0.2) {
  const terms = expandTerms(query);

  const perTermScores = terms.map(
    (term) => Prisma.sql`
      GREATEST(
        word_similarity(${term}, ${Prisma.raw(textExpr)}),
        (CASE WHEN ${Prisma.raw(textExpr)} ILIKE ${"%" + term + "%"} THEN 0.6 ELSE 0 END),
        (CASE WHEN EXISTS (
          SELECT 1 FROM unnest(string_to_array(${Prisma.raw(textExpr)}, ' ')) AS w
          WHERE length(w) > 1 AND soundex(w) = soundex(${term})
        ) THEN 0.5 ELSE 0 END)
      )
    `,
  );

  const score = Prisma.sql`GREATEST(${Prisma.join(perTermScores)})`;

  return { score, where: Prisma.sql`${score} > ${threshold}` };
}

module.exports = { buildMatch, expandTerms };
