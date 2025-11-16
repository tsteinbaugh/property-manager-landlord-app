import React from "react";
import { render, screen, within, fireEvent, waitFor } from "@testing-library/react";
import PropertiesList from "./PropertiesList.jsx";

describe("PropertiesList", () => {
  it("renders properties and allows archiving", async () => {
    render(<PropertiesList includeArchived={true} />);

    const rowBefore = await screen.findByText(/#prop-123/i);
    expect(rowBefore).toBeInTheDocument();
    const liBefore = rowBefore.closest("li") ?? rowBefore.parentElement;
    const utilsBefore = within(liBefore);

    fireEvent.click(await utilsBefore.findByText(/Archive/i));

    const rowAfter = await screen.findByText(/#prop-123/i);
    const liAfter = rowAfter.closest("li") ?? rowAfter.parentElement;
    const utilsAfter = within(liAfter);

    await waitFor(() => {
      expect(utilsAfter.getByText(/\(Archived\)/i)).toBeInTheDocument();
      expect(utilsAfter.getByText(/Unarchive/i)).toBeInTheDocument();
    });
  });

  it("filters out archived by default", async () => {
    render(<PropertiesList />);
    // fresh test instance re-seeds API, but default view should hide archived ones
    const archivedBadge = screen.queryByText(/\(Archived\)/i);
    expect(archivedBadge).toBeNull();
  });
});
