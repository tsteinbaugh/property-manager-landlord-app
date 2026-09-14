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

// ---------- non-statute references (CFR, federal USC, case law / agency guidance) ----------
//
// A handful of CO rows cite something other than a plain C.R.S. section --
// found by grepping lease-clause-citations-CO.csv for CFR/U.S.C./case-law/
// agency-guidance markers (5 rows, 3 distinct kinds of reference). Each kind
// needs a genuinely different monitoring approach, so this is a short,
// hand-curated list (same "read it, don't regex-guess it" discipline as the
// citation extraction itself), not a generic multi-format citation parser --
// there are 5 rows total, a bespoke parser would be over-engineering.
//
// - CFR sections: automatable for real. eCFR.gov's public versioner API
//   (no key needed) returns every amendment date for a section.
// - The one federal statute (42 U.S.C. 4852d): automatable by reusing
//   LegiScan against Congress (state=US) instead of a state legislature.
// - Case law and HUD sub-regulatory guidance: NOT automatable for free.
//   "Is this case still good law" is the actual paid feature of Westlaw
//   KeyCite / Lexis Shepard's -- free tools like CourtListener only give raw
//   citation counts, too noisy to trust as a real signal. These get a
//   periodic manual-recheck REMINDER instead of a detection attempt, and the
//   report/email must never present a reminder as if it were a real finding.
const CFR_CHECKS = [
  { title: "40", section: "745.113", clauseIds: ["lead-based-paint"] },
  { title: "24", section: "30.65", clauseIds: ["lead-based-paint"] },
];

const FEDERAL_STATUTE_CHECKS = [{ section: "4852d", clauseIds: ["lead-based-paint"] }];

const MANUAL_RECHECK_ITEMS = [
  {
    id: "case-anderson-shorter-arms",
    label: "Anderson v. Shorter Arms Investors, LLC, 2023 COA 71, 537 P.3d 831",
    clauseIds: ["habitability-notice-co", "edu-written-notice-strictly-required-co"],
  },
  {
    id: "case-behr-burge",
    label: "Behr v. Burge, 940 P.2d 1084 (Colo. App. 1996)",
    clauseIds: ["edu-holdover-co"],
  },
  {
    id: "hud-esa-guidance",
    label: "HUD FHEO-2020-01 guidance withdrawal (2025-09-17) / HUD enforcement-narrowing memo (2026-05-22)",
    clauseIds: ["edu-esa-federal-state-divergence-co"],
  },
];
const MANUAL_RECHECK_INTERVAL_DAYS = 180;

// ---------- eCFR ----------

async function ecfrLastAmended(title, section) {
  const url = `https://www.ecfr.gov/api/versioner/v1/versions/title-${title}.json?section=${section}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`eCFR versions lookup failed for ${title} CFR ${section}: HTTP ${res.status}`);
  const data = await res.json();
  if (VERBOSE) {
    console.log(`\n--- raw eCFR versions(${title} CFR ${section}) ---`);
    console.log(JSON.stringify(data, null, 2));
  }
  const versions = data.content_versions || [];
  if (versions.length === 0) throw new Error(`eCFR returned no versions for ${title} CFR ${section}`);
  // Versions are returned oldest-first; the last entry is the most recent amendment.
  return versions[versions.length - 1].amendment_date;
}

// ---------- LegiScan ----------

async function legiscanSearch(section, jurisdiction = STATE_CODE) {
  const url = `https://api.legiscan.com/?key=${LEGISCAN_API_KEY}&op=getSearch&state=${jurisdiction}&query=${encodeURIComponent(section)}`;
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
    const state = JSON.parse(fs.readFileSync(STATE_FILE, "utf8"));
    state.sections ||= {};
    state.federalSections ||= {};
    state.cfr ||= {};
    state.manualRecheck ||= {};
    return state;
  } catch {
    return { sections: {}, federalSections: {}, cfr: {}, manualRecheck: {} };
  }
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + "\n");
}

// ---------- email ----------

async function sendAlertEmail({ billFindings = [], cfrFindings = [], reminders = [] }) {
  const sections = [];

  if (billFindings.length > 0) {
    const lines = billFindings.map(
      (f) =>
        `<li><b>${f.section}</b> (${f.jurisdiction}, affects: ${[...f.clauseIds].join(", ")}) — <a href="${f.bill.url}">${f.bill.bill_number}</a>: ${f.bill.title || f.bill.last_action}. Status: ${f.statusLabel}. Last action ${f.bill.last_action_date}: ${f.bill.last_action}.</li>`,
    );
    sections.push(`<h3>Possible law changes (LegiScan)</h3><ul>${lines.join("")}</ul>`);
  }

  if (cfrFindings.length > 0) {
    const lines = cfrFindings.map(
      (f) => `<li><b>${f.title} CFR ${f.section}</b> (affects: ${[...f.clauseIds].join(", ")}) — amended ${f.lastAmended}.</li>`,
    );
    sections.push(`<h3>Possible federal regulation changes (eCFR)</h3><ul>${lines.join("")}</ul>`);
  }

  if (reminders.length > 0) {
    const lines = reminders.map(
      (r) => `<li><b>${r.label}</b> (affects: ${r.clauseIds.join(", ")}) — no automated check exists for this; time to look again.</li>`,
    );
    sections.push(
      `<h3>Due for manual recheck (not an automated finding)</h3><p>These are case-law and agency-guidance citations with no reliable free automated signal -- "is this case still good law" is a paid Westlaw/Lexis feature. This is just a periodic nudge, not a detected change.</p><ul>${lines.join("")}</ul>`,
    );
  }

  const totalRealFindings = billFindings.length + cfrFindings.length;
  const html = `<p>Colorado lease-clause legal watch -- verify anything below against primary text before touching a clause; nothing here is a verified finding.</p>${sections.join("")}<p><i>See lease-clause-citations-CO.csv for what each clause currently asserts.</i></p>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Steinoak Legal Watch <onboarding@resend.dev>",
      to: [ALERT_EMAIL_TO],
      subject:
        totalRealFindings > 0
          ? `[Steinoak] ${totalRealFindings} possible Colorado law change${totalRealFindings === 1 ? "" : "s"} to review`
          : `[Steinoak] ${reminders.length} Colorado citation${reminders.length === 1 ? "" : "s"} due for manual recheck`,
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
    await sendAlertEmail({
      billFindings: [
        {
          section: "38-12-105",
          jurisdiction: "CO",
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
      ],
    });
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

  let checksAttempted = 0;
  let checksErrored = 0;

  // ---- stream 1: Colorado statute sections, via LegiScan ----

  console.log(`Checking ${sectionMap.size} distinct C.R.S. sections cited by ${STATE_CODE} clauses...`);
  const billFindings = [];

  async function checkLegiscanSection(section, clauseIds, jurisdiction, stateBucket) {
    checksAttempted++;
    const seen = stateBucket[section] || { billIds: [] };
    let candidates;
    try {
      candidates = await legiscanSearch(section, jurisdiction);
    } catch (err) {
      console.error(`  [${jurisdiction}] ${section}: search error - ${err.message}`);
      checksErrored++;
      return;
    }

    // Only look closely at reasonably relevant hits -- LegiScan returns a
    // relevance score; low-relevance matches are usually noise (the section
    // number appearing incidentally in unrelated bill text).
    const relevant = candidates.filter((c) => Number(c.relevance) >= 50);
    if (VERBOSE) console.log(`  [${jurisdiction}] ${section}: ${candidates.length} raw hits, ${relevant.length} relevant`);

    for (const candidate of relevant) {
      if (seen.billIds.includes(candidate.bill_id)) continue; // already flagged before

      let bill;
      try {
        bill = await legiscanGetBill(candidate.bill_id);
      } catch (err) {
        console.error(`  [${jurisdiction}] ${section}: getBill error for ${candidate.bill_id} - ${err.message}`);
        continue;
      }
      if (!bill) continue;

      if (ENACTED_STATUSES.has(Number(bill.status))) {
        billFindings.push({
          section,
          jurisdiction,
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

    stateBucket[section] = seen;
  }

  for (const [section, clauseIds] of sectionMap) {
    await checkLegiscanSection(section, clauseIds, STATE_CODE, state.sections);
  }

  // ---- stream 2: the one federal statute citation, via LegiScan against Congress ----

  console.log(`\nChecking ${FEDERAL_STATUTE_CHECKS.length} federal statute section(s) via LegiScan (state=US)...`);
  for (const { section, clauseIds } of FEDERAL_STATUTE_CHECKS) {
    await checkLegiscanSection(section, new Set(clauseIds), "US", state.federalSections);
  }

  // ---- stream 3: federal regulation citations, via eCFR ----

  console.log(`\nChecking ${CFR_CHECKS.length} CFR section(s) via eCFR...`);
  const cfrFindings = [];
  for (const { title, section, clauseIds } of CFR_CHECKS) {
    checksAttempted++;
    const key = `${title}-${section}`;
    let lastAmended;
    try {
      lastAmended = await ecfrLastAmended(title, section);
    } catch (err) {
      console.error(`  ${title} CFR ${section}: eCFR error - ${err.message}`);
      checksErrored++;
      continue;
    }
    const seenAmendment = state.cfr[key]?.lastSeenAmendment;
    if (seenAmendment && seenAmendment !== lastAmended) {
      cfrFindings.push({ title, section, clauseIds, lastAmended });
    }
    state.cfr[key] = { lastSeenAmendment: lastAmended };
  }

  // A run where every real check errored out is a broken run, not a clean
  // "all clear" -- fail loudly rather than silently reporting 0 findings and
  // writing state, which would look identical to a real clean check and give
  // false confidence (e.g. an expired/revoked LegiScan key, or an outage
  // affecting both LegiScan and eCFR).
  if (checksAttempted > 0 && checksErrored === checksAttempted) {
    console.error(`\nAll ${checksAttempted} check(s) failed -- treating this as a failed run, not a clean result. Not sending an email, not updating state.`);
    process.exit(1);
  }

  // ---- stream 4: case law / agency guidance -- no live check, just a periodic reminder ----

  const today = new Date().toISOString().slice(0, 10);
  const daysSince = (dateStr) => (Date.now() - new Date(dateStr).getTime()) / 86_400_000;
  const reminders = [];
  for (const item of MANUAL_RECHECK_ITEMS) {
    const lastReminded = state.manualRecheck[item.id]?.lastReminded;
    if (!lastReminded || daysSince(lastReminded) >= MANUAL_RECHECK_INTERVAL_DAYS) {
      reminders.push(item);
      state.manualRecheck[item.id] = { lastReminded: today };
    }
  }

  console.log(
    `\n${billFindings.length + cfrFindings.length} real finding(s), ${reminders.length} manual-recheck reminder(s) (${checksErrored}/${checksAttempted} live checks errored):`,
  );
  billFindings.forEach((f) => console.log(`  [bill] ${f.jurisdiction} ${f.section} -> ${f.bill.bill_number} (${f.statusLabel}), affects: ${[...f.clauseIds].join(", ")}`));
  cfrFindings.forEach((f) => console.log(`  [cfr] ${f.title} CFR ${f.section} amended ${f.lastAmended}, affects: ${[...f.clauseIds].join(", ")}`));
  reminders.forEach((r) => console.log(`  [reminder] ${r.label}`));

  if (DRY_RUN) {
    console.log("\n--dry-run: not sending email, not writing state.");
    return;
  }

  if (billFindings.length > 0 || cfrFindings.length > 0 || reminders.length > 0) {
    if (!RESEND_API_KEY || !ALERT_EMAIL_TO) {
      console.error("Findings/reminders exist but RESEND_API_KEY/ALERT_EMAIL_TO not set -- skipping email.");
    } else {
      await sendAlertEmail({ billFindings, cfrFindings, reminders });
      console.log("Alert email sent.");
    }
  }

  saveState(state);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
