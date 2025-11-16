import React from "react";
import { render, screen } from "@testing-library/react";
import MaintenanceTicketList from "./MaintenanceTicketList.jsx";

// Uses the stub seeded in maintenanceTickets.api.js

describe("MaintenanceTicketList", () => {
  it("lists maintenance tickets for a property", async () => {
    render(<MaintenanceTicketList propertyId="prop-123" />);

    expect(screen.getByText(/Loading maintenance tickets/i)).toBeInTheDocument();

    const item = await screen.findByText(/Leaky faucet in kitchen/i);
    expect(item).toBeInTheDocument();
    expect(screen.getByText(/\bnormal\b/i)).toBeInTheDocument();
    expect(screen.getByText(/\bopen\b/i)).toBeInTheDocument();
  });

  it("shows message if no propertyId provided", () => {
    render(<MaintenanceTicketList propertyId="" />);
    expect(screen.getByText(/No property selected/i)).toBeInTheDocument();
  });
});
