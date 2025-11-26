// frontend/newsrc/features/tenants/components/TenantsList.test.jsx
import React from "react";
import { vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

// ---- Mocks for hooks & dependencies ----
vi.mock("@features/tenants/hooks/useTenants.js", () => ({
  useTenants: vi.fn(),
}));

vi.mock("../api/tenants.api.js", () => ({
  tenantsApi: {
    create: vi.fn(),
    update: vi.fn(),
  },
}));

vi.mock("@lib/rbac/index.js", () => ({
  can: vi.fn(),
}));

vi.mock("@lib/rbac/resources.js", () => ({
  RESOURCES: {
    TENANTS: "TENANTS",
  },
  ACTIONS: {
    VIEW: "VIEW",
    ARCHIVE: "ARCHIVE",
  },
}));

vi.mock("@lib/rbac/roles.js", () => ({
  ROLES: {
    SYSADMIN: "SYSADMIN",
  },
}));

// Make ArchiveButton a simple button that calls onToggle
vi.mock("@shared/ui/ArchiveButton.jsx", () => ({
  __esModule: true,
  default: function ArchiveButtonMock({ archived, onToggle }) {
    return (
      <button type="button" onClick={onToggle}>
        {archived ? "Unarchive" : "Archive"}
      </button>
    );
  },
}));

// Make AddTenantForm a simple button that calls onCreate with a fixed payload
vi.mock("./AddTenantForm.jsx", () => ({
  __esModule: true,
  default: function AddTenantFormMock({ onCreate }) {
    return (
      <button
        type="button"
        onClick={() =>
          onCreate({
            name: "New Tenant",
            email: "new@example.com",
            phone: "555-9999",
          })
        }
      >
        Mock Add Tenant
      </button>
    );
  },
}));

// Import after mocks
import { useTenants } from "@features/residents/hooks/useTenants.js";
import { tenantsApi } from "../../api/tenants.api.js";
import { can } from "@lib/rbac/index.js";
import TenantsList from "./TenantsList.jsx";

describe("TenantsList", () => {
  const mockToggleArchive = vi.fn();
  const mockRefetch = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    // default RBAC: can view & archive
    can.mockReturnValue(true);

    // default hook return
    useTenants.mockReturnValue({
      data: [
        {
          id: "t1",
          name: "Alice Tenant",
          email: "alice@example.com",
          phone: "555-1234",
          archived: false,
        },
      ],
      isLoading: false,
      error: null,
      toggleArchive: mockToggleArchive,
      refetch: mockRefetch,
    });
  });

  it("renders tenants and archive button calls toggleArchive", async () => {
    render(<TenantsList />);

    // Heading
    expect(
      screen.getByRole("heading", { name: /Tenants/i })
    ).toBeInTheDocument();

    // Tenant row
    expect(screen.getByText(/Alice Tenant/i)).toBeInTheDocument();
    expect(screen.getByText(/alice@example.com/i)).toBeInTheDocument();

    // Archive button (from mock ArchiveButton)
    const archiveBtn = screen.getByRole("button", { name: /Archive/i });
    fireEvent.click(archiveBtn);

    expect(mockToggleArchive).toHaveBeenCalledTimes(1);
    expect(mockToggleArchive).toHaveBeenCalledWith("t1");
  });

  it("shows message when user cannot view tenants", () => {
    // can() is called twice in the component; just always return false
    can.mockReturnValue(false);

    render(<TenantsList />);

    expect(
      screen.getByText(/You don’t have permission to view tenants\./i)
    ).toBeInTheDocument();
  });

  it("supports inline edit and calls tenantsApi.update + refetch", async () => {
    tenantsApi.update.mockResolvedValueOnce({ ok: true });

    render(<TenantsList />);

    // Enter edit mode
    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText(/Name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const phoneInput = screen.getByPlaceholderText(/Phone/i);

    // Change values
    fireEvent.change(nameInput, { target: { value: "Updated Name" } });
    fireEvent.change(emailInput, {
      target: { value: "updated@example.com" },
    });
    fireEvent.change(phoneInput, { target: { value: "555-8888" } });

    const saveButton = screen.getByRole("button", { name: /Save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(tenantsApi.update).toHaveBeenCalledTimes(1);
    });

    expect(tenantsApi.update).toHaveBeenCalledWith("t1", {
      name: "Updated Name",
      email: "updated@example.com",
      phone: "555-8888",
    });

    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });

  it("shows inline error if name is missing and does not call update", async () => {
    render(<TenantsList />);

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText(/Name/i);

    // Clear name
    fireEvent.change(nameInput, { target: { value: " " } });

    const saveButton = screen.getByRole("button", { name: /Save/i });
    fireEvent.click(saveButton);

    expect(tenantsApi.update).not.toHaveBeenCalled();

    expect(
      screen.getByText(/Name is required/i)
    ).toBeInTheDocument();
  });

  it("creates a tenant via AddTenantForm mock and refetches", async () => {
    tenantsApi.create.mockResolvedValueOnce({ id: "t2" });

    render(<TenantsList />);

    const addBtn = screen.getByRole("button", { name: /Mock Add Tenant/i });
    fireEvent.click(addBtn);

    await waitFor(() => {
      expect(tenantsApi.create).toHaveBeenCalledTimes(1);
    });

    expect(tenantsApi.create).toHaveBeenCalledWith({
      name: "New Tenant",
      email: "new@example.com",
      phone: "555-9999",
    });

    expect(mockRefetch).toHaveBeenCalledTimes(1);
  });
});
