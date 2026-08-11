import React from "react";
/* @vitest-environment jsdom */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FinancialsPanel from "./FinancialsPanel.jsx";
import * as api from "../api/financials.api.js";

vi.mock("../api/financials.api.js", () => ({
  financialsApi: {
    list: vi.fn(() =>
      Promise.resolve([
        { id: "f1", type: "charge", description: "HOA Dues", amountCents: 20000, dateISO: "2025-01-01" },
      ])
    ),
    add: vi.fn(() => Promise.resolve({ ok: true })),
    remove: vi.fn(() => Promise.resolve({ ok: true })),
    toggleArchive: vi.fn(() => Promise.resolve({ ok: true })),
  },
}));

describe("<FinancialsPanel />", () => {
  it("renders financials and balance", async () => {
    render(<FinancialsPanel role="landlord" propertyId="prop-1" />);
    expect(await screen.findByText(/HOA Dues/i)).toBeInTheDocument();

    // Disambiguate the duplicate $200.00 (one in list item, one in Balance line)
    const amounts = screen.getAllByText(/\$200\.00/i);
    const balanceAmount = amounts.find((el) => el.closest("div")?.textContent?.includes("Balance:"));
    expect(balanceAmount).toBeTruthy();
  });

  it("shows loading state", () => {
    render(<FinancialsPanel role="landlord" />);
    expect(screen.getByText(/No scope selected/i)).toBeInTheDocument();
  });

  it("adds a new entry", async () => {
    render(<FinancialsPanel role="landlord" propertyId="prop-1" />);

    const desc = await screen.findByPlaceholderText(/description/i);
    fireEvent.change(desc, { target: { value: "Test Charge" } });

    const amt = screen.getByPlaceholderText(/amount/i);
    fireEvent.change(amt, { target: { value: "100" } });

    fireEvent.click(screen.getByRole("button", { name: /^Add$/i }));

    await waitFor(() => {
      expect(api.financialsApi.add).toHaveBeenCalled();
    });
  });
});
