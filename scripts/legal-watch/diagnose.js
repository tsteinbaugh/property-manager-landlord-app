// TEMPORARY diagnostic, not part of the permanent tool -- deleted after use.
// Tests whether LegiScan's getSearch default `year` scope is why
// 38-12-105/38-12-103 returned 0 hits in the first real dry-run, and
// whether the query format matters.

const KEY = process.env.LEGISCAN_API_KEY;

async function search(label, params) {
  const url = `https://api.legiscan.com/?key=${KEY}&op=getSearch&${params}`;
  const res = await fetch(url);
  const data = await res.json();
  const result = data.searchresult || {};
  const hits = Object.keys(result).filter((k) => k !== "summary").map((k) => result[k]);
  console.log(`\n=== ${label} ===`);
  console.log(`status=${data.status} summary=${JSON.stringify(result.summary)}`);
  hits.slice(0, 5).forEach((h) => console.log(`  ${h.bill_number} (relevance ${h.relevance}): ${h.title || h.last_action}`));
}

async function main() {
  // Theory: default year scope is "current session only", missing 2021/2025 bills.
  await search("38-12-105, default year", `state=CO&query=${encodeURIComponent("38-12-105")}`);
  await search("38-12-105, year=1 (all)", `state=CO&year=1&query=${encodeURIComponent("38-12-105")}`);
  await search("38-12-103, default year", `state=CO&query=${encodeURIComponent("38-12-103")}`);
  await search("38-12-103, year=1 (all)", `state=CO&year=1&query=${encodeURIComponent("38-12-103")}`);

  // Sanity check: can getSearch find these bills by number/keyword at all?
  await search("SB21-173 by number, year=1", `state=CO&year=1&query=${encodeURIComponent("SB21-173")}`);
  await search("HB25-1249 by number, year=1", `state=CO&year=1&query=${encodeURIComponent("HB25-1249")}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
