import React from "react";
import { render, screen } from "@testing-library/react";
import ExpenseList from "./ExpenseList.jsx";

// Uses the stubbed expense we seeded in expenses.api.js:
// Home Depot — $24.99 on 2025-11-01 for prop-123

describe("ExpenseList", () => {
  it("shows expenses for a property", async () => {
    render(<ExpenseList propertyId="prop-123" />);

    // Loading first
    expect(screen.getByText(/Loading expenses/i)).toBeInTheDocument();

    // Then our seeded line item
    const vendor = await screen.findByText(/Home Depot/i);
    expect(vendor).toBeInTheDocument();
    expect(screen.getByText(/\$24\.99/)).toBeInTheDocument();
    expect(screen.getByText(/2025-11-01/)).toBeInTheDocument();
  });

  it("shows message when no property selected", () => {
    render(<ExpenseList propertyId="" />);
    expect(screen.getByText(/No property selected/i)).toBeInTheDocument();
  });
});
