const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");
const SVGtoPDF = require("svg-to-pdfkit");

// A copy of frontend/src/assets/logo.svg — duplicated rather than read
// cross-package, since backend and frontend are otherwise fully independent
// here. Keep the two in sync if the logo ever changes. Simple flat-fill SVG
// (no gradients/clip-paths), so svg-to-pdfkit renders it directly onto the
// page without needing to rasterize it first.
const LOGO_SVG = fs.readFileSync(path.join(__dirname, "../assets/logo.svg"), "utf8");

function money(amount) {
  if (amount === null || amount === undefined) return null;
  return `$${Number(amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

function formatDate(date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString();
}

// Assembles a lease PDF from the lease's own key-terms fields (dates, rent,
// deposit, late fee, pet policy — always present regardless of whether the
// builder is used) plus the clauses, already ordered/grouped/numbered and
// {{variable}}-resolved by leaseClauseOrdering.js + clauseVariables.js (the
// exact same functions the JSON API response uses, so the PDF can never
// show different numbering or text than what's displayed on screen). Prints
// a group heading whenever a clause's group differs from the previous one.
// Returns a Buffer, collected from pdfkit's stream events rather than
// written to disk, since the caller uploads it straight to R2.
function buildLeasePdf({ lease, property, entity, tenants, clauses }) {
  return new Promise((resolve, reject) => {
    // bufferPages keeps every page in memory instead of flushing it to the
    // output stream as soon as the next page starts, so a page already
    // written (the reserved TOC page below) can still be switched back to
    // and have content added after the rest of the document — and therefore
    // its real page numbers — are known. doc.end() flushes everything for
    // real at the very end.
    const doc = new PDFDocument({ margin: 54, bufferPages: true });
    const chunks = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    // Section headings record themselves here (label + the page they landed
    // on) as the document is written top to bottom; the reserved TOC page
    // is filled in from this list at the very end, once every page number
    // is actually known. Bounded by design: at most Key Terms + one row per
    // CLAUSE_GROUPS entry + Signatures (14 rows today), comfortably one page
    // — this doesn't attempt to handle a TOC long enough to need a second
    // page itself.
    const tocEntries = [];
    function recordTocEntry(label) {
      tocEntries.push({ label, page: doc.bufferedPageRange().count });
    }

    // Nothing in this app distinguishes a freshly generated PDF from a
    // signed one — the landlord would replace this document with the
    // actual signed copy afterward — so every page gets a "DRAFT"
    // watermark until that happens. Drawn before any other content on the
    // page (and re-drawn on every auto-added page via pageAdded) so it sits
    // behind the text, not on top of it. doc.x/y are restored afterward
    // since drawing at an explicit position otherwise leaves the text-flow
    // cursor in the wrong place for what follows. Font family/size are
    // restored too, and not via doc.save()/restore() — those only cover the
    // PDF graphics state (fill color, transforms, etc.), not pdfkit's own
    // font-selection state (this._font/this._fontSize). Without this, a
    // clause body long enough to overflow onto a new page mid-sentence
    // triggers this handler while that text is still being wrapped, and the
    // rest of it silently renders in the watermark's Helvetica-Bold 80pt
    // instead of the clause's actual font — caught by reading a generated
    // multi-page PDF back page-by-page, not by inspection.
    function drawWatermark() {
      const { x: origX, y: origY, _font: origFont, _fontSize: origFontSize } = doc;
      doc.save();
      doc.rotate(-45, { origin: [doc.page.width / 2, doc.page.height / 2] });
      doc.font("Helvetica-Bold").fontSize(80).fillColor("#94a3b8", 0.25);
      doc.text("DRAFT", 0, doc.page.height / 2 - 40, { width: doc.page.width, align: "center" });
      doc.restore();
      doc.fillColor("black");
      doc.x = origX;
      doc.y = origY;
      if (origFont) doc._font = origFont;
      doc._fontSize = origFontSize;
    }
    drawWatermark();
    doc.on("pageAdded", drawWatermark);

    const logoWidth = 50;
    const logoHeight = logoWidth * (340 / 320); // matches logo.svg's viewBox aspect ratio
    SVGtoPDF(doc, LOGO_SVG, doc.page.margins.left, doc.page.margins.top, { width: logoWidth, height: logoHeight });
    doc.y = doc.page.margins.top + logoHeight + 10;

    doc.font("Helvetica-Bold").fontSize(18).text("Residential Lease Agreement", { align: "center" });
    doc.moveDown(0.75);

    // Nothing else in this document distinguishes app-generated clause language
    // from a document a licensed attorney reviewed for this specific property's
    // state/city/county — this disclaimer exists to make that distinction explicit,
    // the same reason Zillow includes an equivalent one on its own templates.
    doc
      .font("Helvetica")
      .fontSize(9)
      .fillColor("#64748b")
      .text(
        "This Lease was generated by Steinoak from clause language selected and edited by the Landlord. It may not reflect every legal requirement specific to this property's state, city, or county. Review this document carefully before use, and consult a licensed attorney where appropriate. Steinoak disclaims all liability for the accuracy, completeness, or legal sufficiency of this document.",
        { align: "center" },
      );
    doc.fillColor("black");
    doc.moveDown(1.5);

    doc.font("Helvetica-Bold").fontSize(11).text("Landlord");
    doc.font("Helvetica").fontSize(11).text(entity?.legalName || "—");
    doc.moveDown();

    doc.font("Helvetica-Bold").fontSize(11).text("Property");
    const addressLine = [property?.address1, property?.address2].filter(Boolean).join(", ");
    const cityLine = [property?.city, property?.state, property?.zip].filter(Boolean).join(", ");
    doc.font("Helvetica").fontSize(11).text(addressLine || "—");
    if (cityLine) doc.text(cityLine);
    doc.moveDown();

    doc.font("Helvetica-Bold").fontSize(11).text("Tenant(s)");
    if (tenants.length === 0) {
      doc.font("Helvetica").fontSize(11).text("—");
    } else {
      for (const t of tenants) {
        doc.font("Helvetica").fontSize(11).text(`${t.firstName} ${t.lastName} (${t.role.replace("_", " ")})`);
      }
    }
    doc.moveDown(1.5);

    // Reserve a blank page for the table of contents here, right after the
    // cover info and before the content it indexes. Its entries are written
    // back in at the very end (see below) once real page numbers exist.
    doc.addPage();
    const tocPageIndex = doc.bufferedPageRange().count - 1;
    doc.addPage();

    doc.font("Helvetica-Bold").fontSize(13).text("Key Terms");
    recordTocEntry("Key Terms");
    doc.moveDown(0.5);
    const terms = [
      ["Start date", formatDate(lease.startDate)],
      ["End date", formatDate(lease.endDate) || "Month-to-month / not specified"],
      ["Monthly rent", money(lease.monthlyRent)],
      ["Security deposit", money(lease.securityDepositAmount)],
      ["Late fee", lease.lateFeeAmount ? `${money(lease.lateFeeAmount)} after ${lease.lateFeeGraceDays ?? 0} day(s)` : null],
      ["Pet policy", lease.petPolicy ? `Allowed${lease.petRentAmount ? `, pet rent ${money(lease.petRentAmount)}` : ""}` : "Not allowed"],
      ["Renewal rent increase cap", lease.renewalRentIncreaseCap],
    ].filter(([, value]) => value);
    doc.font("Helvetica").fontSize(11);
    for (const [label, value] of terms) {
      doc.text(`${label}: ${value}`);
    }
    if (lease.notes) {
      doc.moveDown(0.5);
      doc.font("Helvetica-Bold").fontSize(11).text("Notes / Special Terms");
      doc.font("Helvetica").fontSize(11).text(lease.notes);
    }
    doc.moveDown(1.5);

    if (clauses.length > 0) {
      doc.font("Helvetica-Bold").fontSize(13).text("Clauses");
      doc.moveDown(0.5);

      let currentGroup = null;
      let groupNumber = 0;
      for (const clause of clauses) {
        if (clause.group !== currentGroup) {
          currentGroup = clause.group;
          groupNumber += 1;
          doc.moveDown(0.5);
          doc.font("Helvetica-Bold").fontSize(12).text(`${groupNumber}. ${currentGroup}`);
          recordTocEntry(`${groupNumber}. ${currentGroup}`);
          doc.moveDown(0.25);
        }
        doc.font("Helvetica-Bold").fontSize(11).text(`${clause.sectionLabel} ${clause.title}`);
        doc.font("Helvetica").fontSize(11).text(clause.resolvedBodyText, { align: "justify" });
        doc.moveDown();
      }
    }

    doc.moveDown(2);
    doc.font("Helvetica-Bold").fontSize(11).text("Signatures");
    recordTocEntry("Signatures");
    doc.moveDown(2);
    doc.font("Helvetica").fontSize(11).text("Landlord: ___________________________  Date: ___________");
    doc.moveDown(1.5);
    if (tenants.length === 0) {
      doc.text("Tenant: ___________________________  Date: ___________");
    } else {
      for (const t of tenants) {
        doc.text(`${t.firstName} ${t.lastName}: ___________________________  Date: ___________`);
        doc.moveDown(0.75);
      }
    }

    // Every heading has now recorded its real page number. Switch back to
    // the reserved page and write the TOC in for real — this has to be the
    // very last thing before doc.end(), since it's the step that depends on
    // everything above it having already happened.
    doc.switchToPage(tocPageIndex);
    doc.x = doc.page.margins.left;
    doc.y = doc.page.margins.top;
    doc.font("Helvetica-Bold").fontSize(16).text("Table of Contents");
    doc.moveDown(1.25);
    for (const entry of tocEntries) {
      drawTocLine(doc, entry.label, entry.page);
    }

    // The TOC's page references are only useful if a printed page actually
    // says what page it is — added last, after every page (including the
    // TOC page itself) already exists, so the total count is final.
    // `lineBreak: false` is load-bearing here, not optional: pdfkit's
    // _initOptions defaults `width` to the remaining page width on *any*
    // text() call unless lineBreak is explicitly false — so even a call
    // with no width/align option still goes through the line-wrapper,
    // which checks the y position against the page's content area. A
    // footer sits below that boundary by design, so without this flag
    // pdfkit silently treats it as an overflow and appends a spurious
    // blank page per footer instead of drawing on the intended page.
    // Centering the line by hand sidesteps needing `width` at all. Caught
    // by generating a real multi-page PDF and reading it back — the page
    // count quietly doubled — not by inspection.
    const { count: totalPages } = doc.bufferedPageRange();
    for (let i = 0; i < totalPages; i++) {
      doc.switchToPage(i);
      doc.font("Helvetica").fontSize(8).fillColor("#94a3b8");
      const label = `Page ${i + 1} of ${totalPages}`;
      const labelX = doc.page.margins.left + (doc.page.width - doc.page.margins.left - doc.page.margins.right - doc.widthOfString(label)) / 2;
      doc.text(label, labelX, doc.page.height - 40, { lineBreak: false });
      doc.fillColor("black");
    }

    doc.end();
  });
}

// One dot-leader row: "label ........... 4", with the run of dots computed
// to fill the space between the label and the right-aligned page number so
// the eye can track across the page, same convention as a printed TOC.
function drawTocLine(doc, label, page) {
  doc.font("Helvetica").fontSize(11);
  const usableWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right;
  const suffix = ` ${page}`;
  let line = `${label} `;
  while (doc.widthOfString(line + ".") + doc.widthOfString(suffix) < usableWidth) {
    line += ".";
  }
  doc.text(line + suffix);
  doc.moveDown(0.4);
}

module.exports = { buildLeasePdf };
