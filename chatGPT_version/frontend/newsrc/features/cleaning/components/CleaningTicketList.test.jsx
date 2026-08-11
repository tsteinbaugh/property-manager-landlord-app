import React from "react";
import { render, screen } from "@testing-library/react";
import CleaningTicketList from "./CleaningTicketList.jsx";

// Uses stub seeded in cleaningTickets.api.js

describe("CleaningTicketList", () => {
  it("lists cleaning tickets for a property", async () => {
    render(<CleaningTicketList propertyId="prop-123" />);

    expect(screen.getByText(/Loading cleaning tickets/i)).toBeInTheDocument();

    const item = await screen.findByText(/Turnover clean after move-out/i);
    expect(item).toBeInTheDocument();
    expect(screen.getByText(/\bhigh\b/i)).toBeInTheDocument();
    expect(screen.getByText(/\bscheduled\b/i)).toBeInTheDocument();
  });

  it("shows message if no propertyId provided", () => {
    render(<CleaningTicketList propertyId="" />);
    expect(screen.getByText(/No property selected/i)).toBeInTheDocument();
  });
});
