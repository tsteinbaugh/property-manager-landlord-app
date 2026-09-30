// Offline check (no LegiScan calls): every clause id that stateConfig.js
// names must still exist in that state's lease-clause-citations-<ST>.csv.
// Added 2026-09-29 after the three-bucket scrub renamed citation rows: an
// extraSectionAliases key that names a renamed row silently drops those
// sections from monitoring, and a stale clauseIds entry mislabels alerts.
// Run at every sync, from the repo root:
//   node scripts/legal-watch/checkConfigIds.js
const fs = require("fs");
const path = require("path");
const { STATE_CONFIG } = require("./stateConfig.js");

function clauseIds(file) {
  const ids = new Set();
  const lines = fs.readFileSync(file, "utf8").split(/\r?\n/).slice(1);
  for (const line of lines) {
    // clause_id is the first field and never contains a comma or quote.
    const id = line.split(",", 1)[0];
    if (id) ids.add(id);
  }
  return ids;
}

const root = path.join(__dirname, "..", "..");
let problems = 0;
for (const [st, cfg] of Object.entries(STATE_CONFIG)) {
  const ids = clauseIds(path.join(root, `lease-clause-citations-${st}.csv`));
  for (const key of Object.keys(cfg.extraSectionAliases || {})) {
    if (!ids.has(key)) {
      problems++;
      console.log(`${st}: extraSectionAliases key "${key}" is not in the citations file (its sections are not being monitored)`);
    }
  }
  for (const group of ["cfrChecks", "federalStatuteChecks", "manualRecheckItems"]) {
    for (const item of cfg[group] || []) {
      for (const id of item.clauseIds || []) {
        if (!ids.has(id)) {
          problems++;
          console.log(`${st}: ${group} names "${id}", which is not in the citations file`);
        }
      }
    }
  }
}
if (problems) {
  console.log(`FAIL - ${problems} stale clause id(s) in stateConfig.js`);
  process.exit(1);
}
console.log("ok - every clause id in stateConfig.js exists in its state's citations file");
