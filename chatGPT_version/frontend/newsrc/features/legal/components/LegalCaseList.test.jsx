import React from "react";
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import LegalCaseList from "./LegalCaseList.jsx";

describe("LegalCaseList archive", () => {
  it("allows archiving within the row", async () => {
    render(<LegalCaseList leaseId="lease-123" includeArchived={true} />);

    const rowBefore = await screen.findByText(/Non-payment of rent - October/i);
    const li = rowBefore.closest("li") ?? rowBefore.parentElement;
    const utils = within(li);

    fireEvent.click(await utils.findByText(/Archive/i));

    const rowAfter = await screen.findByText(/Non-payment of rent - October/i);
    const liAfter = rowAfter.closest("li") ?? rowAfter.parentElement;
    const utilsAfter = within(liAfter);

    await waitFor(() => {
      expect(utilsAfter.getByText(/\(Archived\)/i)).toBeInTheDocument();
      expect(utilsAfter.getByText(/Unarchive/i)).toBeInTheDocument();
    });
  });

  it("hides archived when includeArchived=false", async () => {
    render(<LegalCaseList leaseId="lease-123" includeArchived={false} />);
    // initial seed is not archived, so badge won't be there
    expect(screen.queryByText(/\(Archived\)/i)).toBeNull();
  });
});
