// newsrc/features/leases/components/LeasesList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";

// ---- Mocks ----

// Hook that drives lease data
vi.mock("@features/leases/hooks/useLeases.js", () => ({
  useLeases: vi.fn(),
}));

// API (we don't directly use it here but keep it mocked for safety)
vi.mock("@features/leases/api/leases.api.js", () => ({
  leasesApi: {
    update: vi.fn(),
  },
}));

// ArchiveButton -> simple button with label Archive/Unarchive
vi.mock("@shared/ui/ArchiveButton.jsx", () => ({
  default: ({ archived, onToggle, ...props }) => (
    <button type="button" onClick={onToggle} {...props}>
      {archived ? "Unarchive" : "Archive"}
    </button>
  ),
}));

// AddLeaseForm -> simple button that calls onCreated when clicked
vi.mock("../components/AddLeaseForm.jsx", () => ({
  default: ({ onCreated }) => (
    <button
      type="button"
      onClick={() => onCreated && onCreated()}
      data-testid="mock-add-lease"
    >
      Mock Add Lease
    </button>
  ),
}));

// RBAC
vi.mock("@lib/rbac/index.js", () => ({
  can: vi.fn(),
}));

vi.mock("@lib/rbac/resources.js", () => ({
  RESOURCES: { LEASES: "leases" },
  ACTIONS: { VIEW: "view", ARCHIVE: "archive" },
}));

vi.mock("@lib/rbac/roles.js", () => ({
  ROLES: {
    SYSADMIN: "sysadmin",
    MANAGER: "manager",
  },
}));

import LeasesList from "./LeasesList.jsx";
import { useLeases } from "@features/leases/hooks/useLeases.js";
import { can } from "@lib/rbac/index.js";

describe("LeasesList", () => {
  const mockToggleArchive = vi.fn();
  const mockRefetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // Default RBAC: allow viewing + archiving
    can.mockImplementation(() => true);

    // Default hook result: one active lease
    useLeases.mockReturnValue({
      data: [
        {
          id: "lease-123",
          startDateISO: "2025-01-01",
          endDateISO: "2025-12-31",
          archived: false,
          tenant: { id: "t1", name: "Alice Tenant" },
          property: { id: "p1", name: "Main St House", address1: "123 Main" },
          fileUrl: "/uploads/leases/lease-123.pdf",
          fileOriginalName: "lease-123.pdf",
        },
      ],
      isLoading: false,
      error: null,
      toggleArchive: mockToggleArchive,
      refetch: mockRefetch,
    });

    // Mock fetch for tenants + properties used inside LeasesList
    global.fetch = vi.fn((url) => {
      if (url.endsWith("/api/tenants")) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => [{ id: "t1", name: "Alice Tenant", isArchived: false }],
        });
      }
      if (url.endsWith("/api/properties")) {
        return Promise.resolve({
          ok: true,
          status: 200,
          json: async () => [
            {
              id: "p1",
              name: "Main St House",
              address1: "123 Main St",
            },
          ],
        });
      }
      return Promise.reject(new Error(`Unexpected fetch URL: ${url}`));
    });
  });

  it("renders leases with tenant and property data", async () => {
    render(<LeasesList includeArchived={true} />);

    // Heading
    expect(await screen.findByText(/Leases/i)).toBeInTheDocument();

    // Lease row
    expect(screen.getByText(/Lease #lease-123/i)).toBeInTheDocument();

    // Tenant label line
    expect(
      screen.getByText(/Tenant:\s*Alice Tenant/i)
    ).toBeInTheDocument();

    // Property label line
    expect(
      screen.getByText(/Property:\s*Main St House/i)
    ).toBeInTheDocument();

    // Link to file (from fileUrl)
    expect(screen.getByText(/View lease document/i)).toBeInTheDocument();
  });

  it("calls toggleArchive when Archive button is clicked", async () => {
    render(<LeasesList includeArchived={true} />);

    // Wait for the lease row to appear
    expect(await screen.findByText(/Lease #lease-123/i)).toBeInTheDocument();

    const archiveBtn = screen.getByRole("button", { name: /Archive/i });
    fireEvent.click(archiveBtn);

    expect(mockToggleArchive).toHaveBeenCalledTimes(1);
    expect(mockToggleArchive).toHaveBeenCalledWith("lease-123");
  });

  it("shows a no-permission message when user cannot view leases", async () => {
    // For this test, deny VIEW
    can.mockImplementation((role, resource, action) => {
      if (action === "view") return false;
      return true;
    });

    render(<LeasesList includeArchived={true} />);

    expect(
      screen.getByText(/don’t have permission to view leases/i)
    ).toBeInTheDocument();

    // No heading or Lease rows should matter here
    expect(screen.queryByText(/Leases$/i)).not.toBeInTheDocument();
  });
});
