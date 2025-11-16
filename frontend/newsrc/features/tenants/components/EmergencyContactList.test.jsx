import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmergencyContactList from "./EmergencyContactList.jsx";

describe("EmergencyContactList", () => {
  it("shows seeded contact and allows adding another", async () => {
    render(<EmergencyContactList tenantId="t1" />);

    // Seeded contact
    expect(await screen.findByText(/Emergency Contacts/i)).toBeInTheDocument();
    expect(screen.getByText(/Mom/i)).toBeInTheDocument();

    // Add a new contact
    fireEvent.change(screen.getByPlaceholderText(/name/i), { target: { value: "Dad" } });
    fireEvent.change(screen.getByPlaceholderText(/relation/i), { target: { value: "father" } });
    fireEvent.change(screen.getByPlaceholderText(/phone/i), { target: { value: "555-987-6543" } });
    fireEvent.click(screen.getByText(/^Add$/i));

    // New contact shows
    expect(await screen.findByText(/Dad/i)).toBeInTheDocument();
    expect(screen.getByText(/father/i)).toBeInTheDocument();
    expect(screen.getByText(/555-987-6543/i)).toBeInTheDocument();
  });

  it("shows placeholder when no tenant selected", () => {
    render(<EmergencyContactList tenantId="" />);
    expect(screen.getByText(/No tenant selected/i)).toBeInTheDocument();
  });
});