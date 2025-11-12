import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OccupantList from "./OccupantList.jsx";

describe("OccupantList", () => {
  it("shows seeded occupant and allows adding another", async () => {
    render(<OccupantList tenantId="t1" />);

    // Seeded occupant appears
    expect(await screen.findByText(/Occupants/i)).toBeInTheDocument();
    expect(screen.getByText(/Alex/i)).toBeInTheDocument();

    // Add a new occupant
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: "Jamie" } });
    fireEvent.change(screen.getByPlaceholderText(/relationship/i), { target: { value: "child" } });
    fireEvent.change(screen.getByPlaceholderText(/age/i), { target: { value: "7" } });
    fireEvent.click(screen.getByText(/^Add$/i));

    // New occupant appears
    expect(await screen.findByText(/Jamie/i)).toBeInTheDocument();
    expect(screen.getByText(/child/i)).toBeInTheDocument();
  });

  it("shows placeholder when no tenant selected", () => {
    render(<OccupantList tenantId="" />);
    expect(screen.getByText(/No tenant selected/i)).toBeInTheDocument();
  });
});
