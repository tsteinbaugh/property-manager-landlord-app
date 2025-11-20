import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PetList from "./PetList.jsx";

describe("PetList", () => {
  it("shows seeded pet and allows adding another", async () => {
    render(<PetList tenantId="t1" />);

    // Seeded pet appears
    expect(await screen.findByText(/Pets/i)).toBeInTheDocument();
    expect(screen.getByText(/Scout/i)).toBeInTheDocument();

    // Add a new pet
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: "Mochi" } });
    fireEvent.change(screen.getByPlaceholderText(/type/i), { target: { value: "cat" } });
    fireEvent.change(screen.getByPlaceholderText(/breed/i), { target: { value: "DSH" } });
    fireEvent.change(screen.getByPlaceholderText(/weight/i), { target: { value: "10" } });
    fireEvent.click(screen.getByText(/^Add$/i));

    // New pet appears
    expect(await screen.findByText(/Mochi/i)).toBeInTheDocument();
    expect(screen.getByText(/cat/i)).toBeInTheDocument();
  });

  it("shows placeholder when no tenant selected", () => {
    render(<PetList tenantId="" />);
    expect(screen.getByText(/No tenant selected/i)).toBeInTheDocument();
  });
});
