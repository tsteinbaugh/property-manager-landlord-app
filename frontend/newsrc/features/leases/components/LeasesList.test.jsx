//newsrc/features/leases/components/LeasesList.test.jsx

import React from "react";
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import LeasesList from "./LeasesList.jsx";

describe("LeasesList", () => {
  it("renders active leases and allows archiving", async () => {
    render(<LeasesList includeArchived={true} />);

    // Locate the row for lease-123 and click Archive
    const rowBefore = await screen.findByText(/Lease #lease-123/i);
    const liBefore = rowBefore.closest("li") ?? rowBefore.parentElement;
    const utilsBefore = within(liBefore);
    fireEvent.click(await utilsBefore.findByText(/Archive/i));

    // Re-query the row after re-render and assert new state
    const rowAfter = await screen.findByText(/Lease #lease-123/i);
    const liAfter = rowAfter.closest("li") ?? rowAfter.parentElement;
    const utilsAfter = within(liAfter);
    await waitFor(() => {
      expect(utilsAfter.getByText(/\(Archived\)/i)).toBeInTheDocument();
      expect(utilsAfter.getByText(/Unarchive/i)).toBeInTheDocument();
    });
  });

  it("can include archived leases when includeArchived=true", async () => {
    render(<LeasesList includeArchived={true} />);
    expect(await screen.findByText(/Leases/i)).toBeInTheDocument();
  });
});
