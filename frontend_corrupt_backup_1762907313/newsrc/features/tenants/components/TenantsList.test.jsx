import React from "react";
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import TenantsList from "./TenantsList.jsx";

describe("TenantsList", () => {
  it("renders tenants and allows archiving", async () => {
    render(<TenantsList includeArchived={true} />);
    const rowBefore = await screen.findByText(/#t1/i);
    expect(rowBefore).toBeInTheDocument();
    const liBefore = rowBefore.closest("li") ?? rowBefore.parentElement;
    const utilsBefore = within(liBefore);

    fireEvent.click(await utilsBefore.findByText(/Archive/i));

    // Re-query and assert archived state + Unarchive label
    const rowAfter = await screen.findByText(/#t1/i);
    const liAfter = rowAfter.closest("li") ?? rowAfter.parentElement;
    const utilsAfter = within(liAfter);
    await waitFor(() => {
      expect(utilsAfter.getByText(/\(Archived\)/i)).toBeInTheDocument();
      expect(utilsAfter.getByText(/Unarchive/i)).toBeInTheDocument();
    });
  });

  it("filters out archived by default", async () => {
    render(<TenantsList />); // includeArchived = false
    // t1 was archived in previous test instance; fresh test env re-seeds API
    const anyArchivedBadge = screen.queryByText(/\(Archived\)/i);
    expect(anyArchivedBadge).toBeNull();
  });
});
