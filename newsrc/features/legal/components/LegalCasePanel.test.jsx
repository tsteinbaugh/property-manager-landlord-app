import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LegalCasePanel from "./LegalCasePanel.jsx";

// We use the seeded case from legalCases.api.js:
//   id: "lc1", title: "Non-payment of rent - October", status: "open"

describe("LegalCasePanel", () => {
  it("renders the seeded case and allows status change + add event", async () => {
    render(<LegalCasePanel leaseId="lease-123" caseId="lc1" />);

    // Initial state
    expect(await screen.findByText(/Legal Case/i)).toBeInTheDocument();
    expect(screen.getByText(/Non-payment of rent - October/i)).toBeInTheDocument();
    expect(screen.getByTestId("case-status")).toHaveTextContent(/^open$/i);

    // Change status → pending_court
    const pendingBtn = screen.getByRole("button", { name: /^pending_court$/i });
    fireEvent.click(pendingBtn);
    await waitFor(() =>
      expect(screen.getByTestId("case-status")).toHaveTextContent(/^pending_court$/i)
    );

    // Add an event note
    const noteInput = screen.getByPlaceholderText(/event note/i);
    fireEvent.change(noteInput, { target: { value: "Filed with county court" } });
    fireEvent.click(screen.getByRole('button', { name: /^Add$/i }));

    await waitFor(() =>
      expect(screen.getByText(/Filed with county court/i)).toBeInTheDocument()
    );
  });

  it("shows a fallback if no case context provided", () => {
    render(<LegalCasePanel />);
    expect(screen.getByText(/No case context/i)).toBeInTheDocument();
  });
});
