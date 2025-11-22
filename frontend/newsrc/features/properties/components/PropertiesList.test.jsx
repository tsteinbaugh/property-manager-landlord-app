// frontend/newsrc/features/properties/components/PropertiesList.test.jsx
import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import PropertiesList from "./PropertiesList.jsx";

// ---- Mocks ----

// Mock the properties hook so we don't hit the real API
vi.mock("@features/properties/hooks/useProperties.js", () => ({
  useProperties: vi.fn(),
}));

// Mock ArchiveButton as a simple button that calls onToggle
vi.mock("@shared/ui/ArchiveButton.jsx", () => ({
  default: ({ archived, onToggle }) => (
    <button type="button" onClick={onToggle}>
      {archived ? "Unarchive" : "Archive"}
    </button>
  ),
}));

// Mock RBAC resources/actions
vi.mock("@lib/rbac/resources.js", () => ({
  RESOURCES: { PROPERTIES: "PROPERTIES" },
  ACTIONS: { VIEW: "VIEW", ARCHIVE: "ARCHIVE" },
}));

// Mock roles
vi.mock("@lib/rbac/roles.js", () => ({
  ROLES: {
    SYSADMIN: "SYSADMIN",
    LANDLORD: "LANDLORD",
  },
}));

// Mock RBAC can() function so we can control permissions
vi.mock("@lib/rbac/index.js", () => ({
  can: vi.fn(),
}));

// Mock useUser to avoid dragging in the real provider
vi.mock("@app/providers.jsx", () => ({
  useUser: () => ({ token: "fake-token" }),
}));

// Pull mocked things so we can configure them per test
import { useProperties } from "@features/properties/hooks/useProperties.js";
import { can } from "@lib/rbac/index.js";

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("PropertiesList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders properties from useProperties and wires archive button", async () => {
    const toggleArchive = vi.fn();

    useProperties.mockReturnValue({
      data: [
        {
          id: "prop-123",
          name: "123 Main St",
          address: "123 Main St, Testville CO 12345",
          archived: false,
        },
        {
          id: "prop-456",
          name: "456 Oak Ave",
          address: "456 Oak Ave, Testville CO 12345",
          archived: true,
        },
      ],
      isLoading: false,
      error: null,
      toggleArchive,
      refetch: vi.fn(),
    });

    // SYSADMIN can view + archive
    can.mockImplementation((role, resource, action) => {
      if (resource === "PROPERTIES" && (action === "VIEW" || action === "ARCHIVE")) {
        return role === "SYSADMIN";
      }
      return false;
    });

    renderWithRouter(<PropertiesList includeArchived={true} />);

    // Renders heading
    expect(screen.getByText(/Properties/i)).toBeInTheDocument();

    // Renders property rows
    expect(screen.getByText(/#prop-123/i)).toBeInTheDocument();
    expect(screen.getByText(/#prop-456/i)).toBeInTheDocument();

    // Archive button for first property
    const archiveButtons = screen.getAllByRole("button", { name: /Archive|Unarchive/i });

    // Click archive on the first property
    fireEvent.click(archiveButtons[0]);

    expect(toggleArchive).toHaveBeenCalledTimes(1);
    expect(toggleArchive).toHaveBeenCalledWith("prop-123");
  });

  it("shows insufficient permissions when user cannot view properties", () => {
    // useProperties shouldn't even be called when canView is false,
    // but we can mock it defensively anyway.
    useProperties.mockReturnValue({
      data: [],
      isLoading: false,
      error: null,
      toggleArchive: vi.fn(),
      refetch: vi.fn(),
    });

    // Nobody can view
    can.mockImplementation(() => false);

    renderWithRouter(<PropertiesList includeArchived={false} />);

    expect(
      screen.getByRole("heading", { name: /Properties/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Insufficient permissions to view properties/i)
    ).toBeInTheDocument();
  });

  it("renders error message when hook returns a non-forbidden error", () => {
    useProperties.mockReturnValue({
      data: [],
      isLoading: false,
      error: new Error("Something went wrong"),
      toggleArchive: vi.fn(),
      refetch: vi.fn(),
    });

    // allow viewing so it hits the error branch
    can.mockImplementation((role, resource, action) => {
      if (resource === "PROPERTIES" && action === "VIEW") return true;
      if (resource === "PROPERTIES" && action === "ARCHIVE") return true;
      return false;
    });

    renderWithRouter(<PropertiesList includeArchived={false} />);

    expect(
      screen.getByText(/Error: Something went wrong/i)
    ).toBeInTheDocument();
  });
});
