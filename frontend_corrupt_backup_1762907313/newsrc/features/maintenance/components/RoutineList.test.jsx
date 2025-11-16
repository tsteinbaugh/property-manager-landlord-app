import React from "react";
import { render, screen } from "@testing-library/react";
import RoutineList from "./RoutineList.jsx";

// Uses the stubbed routine seeded in routines.api.js

describe("RoutineList", () => {
  it("shows routine maintenance items for a property", async () => {
    render(<RoutineList propertyId="prop-123" />);

    expect(screen.getByText(/Loading routine maintenance/i)).toBeInTheDocument();

    const item = await screen.findByText(/Replace HVAC filter/i);
    expect(item).toBeInTheDocument();
    expect(screen.getByText(/every 90 days/i)).toBeInTheDocument();
  });

  it("shows message if no propertyId is given", () => {
    render(<RoutineList propertyId="" />);
    expect(screen.getByText(/No property selected/i)).toBeInTheDocument();
  });
});
