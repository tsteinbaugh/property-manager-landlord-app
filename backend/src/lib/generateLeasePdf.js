const PDFDocument = require("pdfkit");

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
    const doc = new PDFDocument({ margin: 54 });
    const chunks = [];
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", reject);

    doc.font("Helvetica-Bold").fontSize(18).text("Residential Lease Agreement", { align: "center" });
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

    doc.font("Helvetica-Bold").fontSize(13).text("Key Terms");
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
          doc.moveDown(0.25);
        }
        doc.font("Helvetica-Bold").fontSize(11).text(`${clause.sectionLabel} ${clause.title}`);
        doc.font("Helvetica").fontSize(11).text(clause.resolvedBodyText, { align: "justify" });
        doc.moveDown();
      }
    }

    doc.moveDown(2);
    doc.font("Helvetica-Bold").fontSize(11).text("Signatures");
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

    doc.end();
  });
}

module.exports = { buildLeasePdf };
