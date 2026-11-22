// Helpers for the "official sources" stream of checkCitations.js (added
// 2026-11-21 for the five territories, which LegiScan doesn't cover).
//
// A source check reads an official website directly (plain GET, no browser)
// and returns the items it currently lists: new laws, code-update entries, a
// revision date. checkCitations.js remembers every item key it has seen and
// reports only new ones, so a check's first run seeds itself. Each check
// decides which new items are worth a human look (`relevant`); the rest are
// recorded silently.
//
// Politeness: one request at a time, at least 1.5 seconds apart, a timeout on
// every request, and a few retries on network errors, 429 and 5xx. The user
// agent is never changed. A page that blocks or fails is reported as an
// unchecked item in the run's "incomplete" email, never worked around.

const FETCH_TIMEOUT_MS = 45000;
const MIN_INTERVAL_MS = 1500;
const RETRY_DELAYS_MS = [3000, 10000, 30000];
let lastCall = 0;

async function fetchText(url, { allow404 = false } = {}) {
  for (let attempt = 0; ; attempt++) {
    const wait = lastCall + MIN_INTERVAL_MS - Date.now();
    if (wait > 0) await new Promise((r) => setTimeout(r, wait));
    lastCall = Date.now();
    let res;
    try {
      res = await fetch(url, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS), redirect: "follow" });
    } catch (err) {
      if (attempt >= RETRY_DELAYS_MS.length) throw new Error(`${url}: ${err.cause?.code || err.message}`);
      await new Promise((r) => setTimeout(r, RETRY_DELAYS_MS[attempt]));
      continue;
    }
    if (allow404 && res.status === 404) return "";
    if (res.ok) return await res.text();
    if ((res.status === 429 || res.status >= 500) && attempt < RETRY_DELAYS_MS.length) {
      await new Promise((r) => setTimeout(r, RETRY_DELAYS_MS[attempt]));
      continue;
    }
    throw new Error(`${url}: HTTP ${res.status}`);
  }
}

const ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " ", "#039": "'" };
function decodeEntities(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&([a-z0-9#]+);/gi, (m, n) => (n.toLowerCase() in ENTITIES ? ENTITIES[n.toLowerCase()] : m));
}

// Visible text of an HTML fragment, whitespace collapsed.
function htmlToText(html) {
  return decodeEntities(
    html
      .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

// Visible text of an HTML page with one line per text node (keeps the line
// structure list pages are parsed by).
function htmlToLines(html) {
  return html
    .replace(/<(script|style|select)[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]+>/g, "\n")
    .split("\n")
    .map((l) => decodeEntities(l).replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n");
}

// Status, Last-Modified and total size of a file, reading one byte of it
// (a Range request), for watching large PDFs without downloading them.
async function fetchFileStamp(url) {
  const wait = lastCall + MIN_INTERVAL_MS - Date.now();
  if (wait > 0) await new Promise((r) => setTimeout(r, wait));
  lastCall = Date.now();
  const res = await fetch(url, { headers: { Range: "bytes=0-0" }, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
  await res.arrayBuffer();
  const total = (res.headers.get("content-range") || "").split("/")[1] || res.headers.get("content-length") || "";
  return { status: res.status, lastModified: res.headers.get("last-modified") || "", size: total };
}

// Every <tr> of an HTML page as an array of { text, hrefs } cells.
function tableRows(html) {
  const rows = [];
  for (const tr of html.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)) {
    const cells = [...tr[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) => ({
      text: htmlToText(c[1]),
      hrefs: [...c[1].matchAll(/href="([^"]+)"/gi)].map((h) => decodeEntities(h[1])),
    }));
    if (cells.length) rows.push(cells);
  }
  return rows;
}

// A keyword test for law titles: the subjects a landlord-tenant library cares
// about. Deliberately broad; a false hit costs one line in an email.
const LANDLORD_TENANT_WORDS =
  /landlord|tenan|\blease|\bleasing|\brent|rental|housing|evict|dwelling|residential|security deposit|real property|real estate|homestead|condominium|foreclos|mortgage|price (freeze|control|gouging)|building code|fire code|habitab|mold|lead[- ]based|smoke (alarm|detector)|fair housing|discriminat|squat|trespass|unlawful detainer|ejectment|summary (process|possession|repossession)|arrendamiento|arrendador|arrendatario|inquilin|alquiler|vivienda|desahucio|propiedad|condominio|hipoteca/i;

// RFC 4180 CSV text (a leading BOM is dropped) as an array of objects keyed
// by the header row.
function csvRecords(text) {
  const rows = [];
  let row = [];
  let field = "";
  let q = false;
  const t = text.replace(/^\uFEFF/, "");
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (q) {
      if (c === '"' && t[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') q = false;
      else field += c;
    } else if (c === '"') q = true;
    else if (c === ",") { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && t[i + 1] === "\n") i++;
      row.push(field); field = "";
      if (row.some((x) => x !== "")) rows.push(row);
      row = [];
    } else field += c;
  }
  if (field !== "" || row.length) { row.push(field); rows.push(row); }
  const [head, ...body] = rows;
  return body.map((r) => Object.fromEntries(head.map((h, i) => [h.trim(), (r[i] || "").trim()])));
}

// Section keys ("28 V.I.C. § 752") an act's title names, for titles written
// like "amending title 28 Virgin Islands Code, chapter 31, section 752" or
// "sections 41, 42(a), and 43(a)". Misses text that names only a chapter, so
// callers pair it with a keyword test.
function viCodeSections(subject) {
  const keys = new Set();
  const parts = subject.split(/\btitle\s+(\d+[A-Z]?)\b/i);
  for (let i = 1; i < parts.length; i += 2) {
    const title = parts[i].toUpperCase();
    const rest = parts[i + 1].split(/\btitle\s+\d/i)[0];
    for (const m of rest.matchAll(/\bsections?\s+((?:\d+[a-z]?(?:\([^)]*\))*(?:\s*(?:,|and|through|-|to)\s*)*)+)/gi)) {
      for (const n of m[1].matchAll(/(\d+[a-z]?)(?:\([^)]*\))*/g)) keys.add(`${title} V.I.C. § ${n[1]}`);
    }
  }
  return [...keys];
}

module.exports = { fetchText, fetchFileStamp, htmlToText, htmlToLines, tableRows, decodeEntities, csvRecords, viCodeSections, LANDLORD_TENANT_WORDS };
