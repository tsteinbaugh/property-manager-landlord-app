import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

// --- Mock child lists so we only test wiring, not their internals ---
vi.mock("./OccupantList.jsx", () => ({
  default: ({ tenantId }) => (
    <div data-testid="occupant-list">OccupantList tenantId={tenantId}</div>
  ),
}));

vi.mock("./PetList.jsx", () => ({
  default: ({ tenantId }) => (
    <div data-testid="pets-list">PetsList tenantId={tenantId}</div>
  ),
}));

vi.mock("./EmergencyContactList.jsx", () => ({
  default: ({ tenantId }) => (
    <div data-testid="emergency-list">
      EmergencyContactList tenantId={tenantId}
    </div>
  ),
}));

import AddTenantDependentsForm from "./AddTenantDependentsForm.jsx";

describe("AddTenantDependentsForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    global.fetch = vi.fn();
  });

  it("loads tenants, auto-selects first active tenant, and wires tenantId to child lists", async () => {
    // t1 active, t2 archived
    global.fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [
        { id: "t1", name: "Alice", isArchived: false },
        { id: "t2", name: "Bob", isArchived: true },
      ],
    });

    render(<AddTenantDependentsForm />);

    // Shows loading first
    expect(screen.getByText(/Loading tenants/i)).toBeInTheDocument();

    // Wait for select to appear
    const select = await screen.findByRole("combobox", { name: /tenant/i });

    // Should have options for Alice and Bob
    expect(select).toBeInTheDocument();
    expect(screen.getByText(/Alice/i)).toBeInTheDocument();
    expect(screen.getByText(/Bob/i)).toBeInTheDocument();

    // Auto-selected tenant should be the first non-archived one: t1
    expect(select.value).toBe("t1");

    // Child lists should receive tenantId="t1"
    expect(screen.getByTestId("occupant-list").textContent).toContain("t1");
    expect(screen.getByTestId("pets-list").textContent).toContain("t1");
    expect(screen.getByTestId("emergency-list").textContent).toContain("t1");

    // Ensure fetch was called correctly
    expect(global.fetch).toHaveBeenCalledWith(
      "http://localhost:4000/api/tenants"
    );
  });

  it("allows switching tenants via the select and propagates tenantId to child lists", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [
        { id: "t1", name: "Alice", isArchived: false },
        { id: "t2", name: "Bob", isArchived: false },
      ],
    });

    render(<AddTenantDependentsForm />);

    const select = await screen.findByRole("combobox", { name: /tenant/i });

    // Initial default is first non-archived: t1
    expect(select.value).toBe("t1");
    expect(screen.getByTestId("occupant-list").textContent).toContain("t1");

    // Switch to t2
    fireEvent.change(select, { target: { value: "t2" } });

    await waitFor(() => {
      expect(screen.getByTestId("occupant-list").textContent).toContain("t2");
      expect(screen.getByTestId("pets-list").textContent).toContain("t2");
      expect(screen.getByTestId("emergency-list").textContent).toContain("t2");
    });
  });

  it("shows a no-tenants message and no select when the backend returns an empty list", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => [],
    });

    render(<AddTenantDependentsForm />);

    // Wait for loading to finish and empty-state message to appear
    expect(
      await screen.findByText(/No tenants found\. Create a tenant first/i)
    ).toBeInTheDocument();

    // No select since tenants.length === 0
    expect(screen.queryByRole("combobox", { name: /tenant/i })).not.toBeInTheDocument();

    // No child lists either
    expect(screen.queryByTestId("occupant-list")).not.toBeInTheDocument();
    expect(screen.queryByTestId("pets-list")).not.toBeInTheDocument();
    expect(screen.queryByTestId("emergency-list")).not.toBeInTheDocument();
  });

  it("shows an error message if loading tenants fails", async () => {
    global.fetch.mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    });

    render(<AddTenantDependentsForm />);

    expect(
      await screen.findByText(/Error loading tenants/i)
    ).toBeInTheDocument();

    // No select rendered when there's an error
    expect(screen.queryByRole("combobox", { name: /tenant/i })).not.toBeInTheDocument();
  });
});
