import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LeaseStatusPanel from "./LeaseStatusPanel.jsx";
import { ROLES } from "@lib/rbac/roles.js";
import { leaseLifecycleApi } from "@features/leases/api/leaseLifecycle.api.js";

describe("LeaseStatusPanel", () => {
  beforeEach(async () => {
    await leaseLifecycleApi.__setForTests("lease-123", { status: "draft", mtmSince: null, endedAt: null });
  });

  it("walks through Start → MTM → End transitions", async () => {
    render(<LeaseStatusPanel leaseId="lease-123" role={ROLES.SYSADMIN} />);

    expect(await screen.findByText(/Lease Lifecycle/i)).toBeInTheDocument();
    // be precise: only the status <strong> should match
    expect(screen.getByText(/^draft$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Start/i }));
    expect(await screen.findByText(/^active$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /Set MTM/i }));
    expect(await screen.findByText(/^mtm$/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /^End$/i }));
    // exact match so it doesn't collide with "Ended at: ..."
    expect(await screen.findByText(/^ended$/i)).toBeInTheDocument();
  });

  it("shows placeholders if no leaseId", () => {
    render(<LeaseStatusPanel leaseId="" role={ROLES.SYSADMIN} />);
    expect(screen.getByText(/No lease selected/i)).toBeInTheDocument();
  });
});
