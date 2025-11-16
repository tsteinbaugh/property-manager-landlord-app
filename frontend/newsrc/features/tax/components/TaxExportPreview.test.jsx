import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TaxExportPreview from "./TaxExportPreview.jsx";

describe("TaxExportPreview", () => {
  it("exports expenses CSV and shows the textarea with CSV content", async () => {
    render(<TaxExportPreview propertyId="prop-123" defaultYear={2025} />);

    fireEvent.click(screen.getByText(/Export Expenses \(CSV\)/i));

    // Now expect TWO rows (maintenance + cleaning)
    expect(await screen.findByText(/CSV rows:\s*2/i)).toBeInTheDocument();

    // Check the textarea content via its value string
    const ta = screen.getByRole("textbox");
    const val = ta.value;

    // Header includes cleaningTicketId
    expect(val).toMatch(/dateISO,vendor,category,description,amountCents,maintenanceTicketId,cleaningTicketId,notes/i);

    // Includes the cleaning line we seeded
    expect(val).toMatch(/Sparkle & Shine LLC,cleaning,Turnover deep clean,25000,,ct1,3-hour turnover/i);

    // Still contains the maintenance line
    expect(val).toMatch(/Home Depot,maintenance,P-trap and plumber's tape,2499,mt1,,/i);
  });

  it("exports summary JSON and shows totals", async () => {
    render(<TaxExportPreview propertyId="prop-123" defaultYear={2025} />);
    fireEvent.click(screen.getByText(/Export Summary \(JSON\)/i));
    const pre = await screen.findByText(/"totalsCents"/i);
    expect(pre).toBeInTheDocument();
  });
});
