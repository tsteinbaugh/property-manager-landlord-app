import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LeaseFinancialsPanel from "./LeaseFinancialsPanel.jsx";

describe("LeaseFinancialsPanel", () => {
  it("shows seeded entries and allows adding a new one", async () => {
    render(<LeaseFinancialsPanel leaseId="lease-123" />);

    expect(await screen.findByText(/Lease Financials/i)).toBeInTheDocument();
    expect(screen.getByText(/November rent/i)).toBeInTheDocument();
    expect(screen.getByText(/Tenant payment/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/description/i), { target: { value: "Late fee" } });
    fireEvent.change(screen.getByPlaceholderText(/amount/i), { target: { value: "25" } });
    fireEvent.click(screen.getByText(/^Add$/i));

    expect(await screen.findByText(/Late fee/i)).toBeInTheDocument();
  });

  it("shows placeholder when no lease selected", () => {
    render(<LeaseFinancialsPanel leaseId="" />);
    expect(screen.getByText(/No lease selected/i)).toBeInTheDocument();
  });
});
