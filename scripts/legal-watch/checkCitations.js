// Legal-change watcher, Colorado proof of concept.
//
// Reads lease-clause-citations-CO.csv, pulls out every distinct C.R.S. section
// number that a shipped clause/education row actually depends on, asks
// LegiScan (https://legiscan.com/legiscan, free tier, 30k queries/month)
// whether any bill has been enacted that touches that section since we last
// checked, and emails a summary if anything looks worth a human review.
//
// This is a TRIPWIRE, not a source of truth: it never edits clause content
// itself, and a hit here means "go verify against primary text," not "the
// law is confirmed to have changed." Per the project's own state-law-research
// discipline, only Claude Browser (or Taylor reading primary text) resolves
// what a flagged change actually means.
//
// LegiScan only sees LEGISLATIVE bills. It cannot see administrative/
// regulatory changes, federal agency guidance, or incorporated model codes
// (see CLAUDE.md's known-issues history: the CFR 36.104 version-trap finding,
// ND's incorporated fire code) -- those categories need their own mechanism,
// deliberately out of scope for this first pass.
//
// Usage:
//   node checkCitations.js                 -- real run: query, diff, email if needed, update state
//   node checkCitations.js --dry-run        -- query and print findings, touch nothing
//   node checkCitations.js --dry-run --verbose  -- also dump raw LegiScan responses, for tuning queries
//   node checkCitations.js --test-email     -- send one canned test email via Resend, no LegiScan call at all
//                                               (for validating the email path independently, e.g. while a
//                                               LegiScan API key application is still pending)

const fs = require("fs");
const path = require("path");

const STATE_CODE = "CO";
const CITATIONS_CSV = path.join(__dirname, "..", "..", `lease-clause-citations-${STATE_CODE}.csv`);
const STATE_FILE = path.join(__dirname, "state", `${STATE_CODE}.json`);

const LEGISCAN_API_KEY = process.env.LEGISCAN_API_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const ALERT_EMAIL_TO = process.env.ALERT_EMAIL_TO;

const DRY_RUN = process.argv.includes("--dry-run");
const VERBOSE = process.argv.includes("--verbose");

// ---------- minimal RFC4180 CSV parser (no dependency needed) ----------

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = "";
  let inQuotes = false;
  let i = 0;
  const len = text.length;

  function pushField() {
    row.push(field);
    field = "";
  }
  function pushRow() {
    pushField();
    rows.push(row);
    row = [];
  }

  while (i < len) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
        } else {
          inQuotes = false;
          i += 1;
        }
      } else {
        field += c;
        i += 1;
      }
    } else if (c === '"') {
      inQuotes = true;
      i += 1;
    } else if (c === ",") {
      pushField();
      i += 1;
    } else if (c === "\r") {
      if (text[i + 1] === "\n") {
        pushRow();
        i += 2;
      } else {
        pushRow();
        i += 1;
      }
    } else if (c === "\n") {
      pushRow();
      i += 1;
    } else {
      field += c;
      i += 1;
    }
  }
  if (field.length > 0 || row.length > 0) pushRow();
  if (rows.length && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === "") rows.pop();
  return rows;
}

function readCitationsRows() {
  const rows = parseCsv(fs.readFileSync(CITATIONS_CSV, "utf8"));
  const header = rows[0];
  const idx = (name) => header.indexOf(name);
  return rows.slice(1).map((r) => ({
    clauseId: r[idx("clause_id")],
    citation: r[idx("citation")],
    citationStatus: r[idx("citation_status")],
  }));
}

// ---------- section-number extraction ----------

// Matches a C.R.S.-style section number: 1-2 digit title, 1-3 digit article,
// 2-4 digit section, optional decimal (e.g. "38-12-103", "6-1-737", "13-40-107").
// Deliberately drops subsection parens like "(1)(j)" -- LegiScan's full-text
// search works at the section level, and a bill amending any subsection of a
// section is exactly what we want to catch.
const SECTION_PATTERN = /\b(\d{1,2}-\d{1,3}-\d{2,4}(?:\.\d+)?)\b/g;

function extractSections(citationText) {
  if (!citationText) return [];
  const matches = citationText.match(SECTION_PATTERN) || [];
  return [...new Set(matches)];
}

// Build { sectionNumber: Set<clauseId> } across all monitorable rows.
function buildSectionMap(rows) {
  const map = new Map();
  const MONITORABLE = new Set(["CITED", "PARTIAL"]);
  rows.forEach((row) => {
    if (!MONITORABLE.has(row.citationStatus)) return;
    extractSections(row.citation).forEach((section) => {
      if (!map.has(section)) map.set(section, new Set());
      map.get(section).add(row.clauseId);
    });
  });
  return map;
}

// ---------- LegiScan ----------

async function legiscanSearch(section) {
  const url = `https://api.legiscan.com/?key=${LEGISCAN_API_KEY}&op=getSearch&state=${STATE_CODE}&query=${encodeURIComponent(section)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`LegiScan search failed for ${section}: HTTP ${res.status}`);
  const data = await res.json();
  if (VERBOSE) {
    console.log(`\n--- raw getSearch(${section}) ---`);
    console.log(JSON.stringify(data, null, 2));
  }
  if (data.status !== "OK") {
    throw new Error(data.alert?.message || `unexpected LegiScan response for ${section}`);
  }
  const result = data.searchresult || {};
  return Object.keys(result)
    .filter((k) => k !== "summary")
    .map((k) => result[k]);
}

async function legiscanGetBill(billId) {
  const url = `https://api.legiscan.com/?key=${LEGISCAN_API_KEY}&op=getBill&id=${billId}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`LegiScan getBill failed for ${billId}: HTTP ${res.status}`);
  const data = await res.json();
  if (VERBOSE) {
    console.log(`\n--- raw getBill(${billId}) ---`);
    console.log(JSON.stringify(data, null, 2));
  }
  if (data.status !== "OK") {
    throw new Error(data.alert?.message || `unexpected LegiScan response for bill ${billId}`);
  }
  return data.bill;
}

// LegiScan status codes: 1 Introduced, 2 Engrossed, 3 Enrolled, 4 Passed, 5 Vetoed, 6 Failed/Dead.
// Treat Enrolled or Passed as "real enough to flag" -- matches this project's own
// "a bill is not evidence of enactment, check enrolled/enacted text" rule.
const ENACTED_STATUSES = new Set([3, 4]);

// ---------- state (what we've already flagged, so we don't re-flag forever) ----------

function loadState() {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
  } catch {
    return { sections: {} };
  }
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n");
}

// ---------- email ----------

async function sendAlertEmail(findings) {
  const lines = findings.map(
    (f) =>
      `<li><b>${f.section}</b> (affects: ${[...f.clauseIds].join(", ")}) — <a href="${f.bill.url}">${f.bill.bill_number}</a>: ${f.bill.title || f.bill.last_action}. Status: ${f.statusLabel}. Last action ${f.bill.last_action_date}: ${f.bill.last_action}.</li>`,
  );
  const html = `<p>Possible Colorado law changes affecting shipped lease clauses -- verify against primary text before touching anything:</p><ul>${lines.join("")}</ul><p><i>Automated tripwire, not a verified finding. See lease-clause-citations-CO.csv for what each clause currently asserts.</i></p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Steinoak Legal Watch <onboarding@resend.dev>",
      to: [ALERT_EMAIL_TO],
      subject: `[Steinoak] ${findings.length} possible Colorado law change${findings.length === 1 ? "" : "s"} to review`,
      html,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Resend send failed: HTTP ${res.status} - ${body}`);
  }
}

// ---------- main ----------

async function main() {
  if (process.argv.includes("--test-email")) {
    if (!RESEND_API_KEY || !ALERT_EMAIL_TO) {
      console.error("Missing RESEND_API_KEY or ALERT_EMAIL_TO");
      process.exit(1);
    }
    await sendAlertEmail([
      {
        section: "38-12-105",
        clauseIds: new Set(["late-fee-limit-co"]),
        bill: {
          bill_number: "TEST-0001",
          title: "This is a test email from the Colorado legal-watch workflow, not a real finding.",
          url: "https://legiscan.com/",
          last_action: "Test run",
          last_action_date: new Date().toISOString().slice(0, 10),
        },
        statusLabel: "Test",
      },
    ]);
    console.log(`Test email sent to ${ALERT_EMAIL_TO}.`);
    return;
  }

  if (!LEGISCAN_API_KEY) {
    console.error("Missing LEGISCAN_API_KEY");
    process.exit(1);
  }

  const rows = readCitationsRows();
  const sectionMap = buildSectionMap(rows);
  const state = loadState();
  const findings = [];

  console.log(`Checking ${sectionMap.size} distinct C.R.S. sections cited by ${STATE_CODE} clauses...`);

  let sectionErrorCount = 0;

  for (const [section, clauseIds] of sectionMap) {
    const seen = state.sections[section] || { billIds: [] };
    let candidates;
    try {
      candidates = await legiscanSearch(section);
    } catch (err) {
      console.error(`  ${section}: search error - ${err.message}`);
      sectionErrorCount++;
      continue;
    }

    // Only look closely at reasonably relevant hits -- LegiScan returns a
    // relevance score; low-relevance matches are usually noise (the section
    // number appearing incidentally in unrelated bill text).
    const relevant = candidates.filter((c) => Number(c.relevance) >= 50);
    if (VERBOSE) console.log(`  ${section}: ${candidates.length} raw hits, ${relevant.length} relevant`);

    for (const candidate of relevant) {
      if (seen.billIds.includes(candidate.bill_id)) continue; // already flagged before

      let bill;
      try {
        bill = await legiscanGetBill(candidate.bill_id);
      } catch (err) {
        console.error(`  ${section}: getBill error for ${candidate.bill_id} - ${err.message}`);
        continue;
      }
      if (!bill) continue;

      if (ENACTED_STATUSES.has(Number(bill.status))) {
        findings.push({
          section,
          clauseIds,
          bill: {
            bill_id: bill.bill_id,
            bill_number: bill.bill_number,
            title: bill.title,
            url: bill.url,
            last_action: bill.status_date ? bill.last_action : candidate.last_action,
            last_action_date: bill.last_action_date || candidate.last_action_date,
          },
          statusLabel: Number(bill.status) === 4 ? "Passed" : "Enrolled",
        });
      }

      // Record every bill we've actually looked at (enacted or not), so we
      // don't re-fetch and re-judge it on every future run.
      seen.billIds.push(candidate.bill_id);
    }

    state.sections[section] = seen;
  }

  // A run where every section errored out is a broken run, not a clean "all
  // clear" -- fail loudly rather than silently reporting 0 findings and
  // writing state, which would look identical to a real clean check and give
  // false confidence (e.g. an expired/revoked LegiScan key, or an outage).
  if (sectionMap.size > 0 && sectionErrorCount === sectionMap.size) {
    console.error(`\nAll ${sectionMap.size} section checks failed -- treating this as a failed run, not a clean result. Not sending an email, not updating state.`);
    process.exit(1);
  }

  console.log(`\n${findings.length} finding(s) (${sectionErrorCount} section(s) errored and were skipped):`);
  findings.forEach((f) => console.log(`  ${f.section} -> ${f.bill.bill_number} (${f.statusLabel}), affects: ${[...f.clauseIds].join(", ")}`));

  if (DRY_RUN) {
    console.log("\n--dry-run: not sending email, not writing state.");
    return;
  }

  if (findings.length > 0) {
    if (!RESEND_API_KEY || !ALERT_EMAIL_TO) {
      console.error("Findings exist but RESEND_API_KEY/ALERT_EMAIL_TO not set -- skipping email.");
    } else {
      await sendAlertEmail(findings);
      console.log("Alert email sent.");
    }
  }

  saveState(state);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
