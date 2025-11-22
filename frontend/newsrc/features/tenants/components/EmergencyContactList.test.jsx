// frontend/newsrc/features/tenants/components/EmergencyContactList.test.jsx
import React from "react";
import { vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";

// ---- Mocks ----
vi.mock("../api/emergencyContacts.api.js", () => ({
  emergencyContactsApi: {
    list: vi.fn(),
    create: vi.fn(),
    update: vi.fn(),
    toggleArchive: vi.fn(),
  },
}));

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

import { emergencyContactsApi } from "../api/emergencyContacts.api.js";
import EmergencyContactList from "./EmergencyContactList.jsx";

describe("EmergencyContactList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows placeholder when no tenantId and does not call API", () => {
    render(<EmergencyContactList tenantId="" />);

    expect(
      screen.getByText(
        /Create a tenant first to attach emergency contacts\./i
      )
    ).toBeInTheDocument();
    expect(emergencyContactsApi.list).not.toHaveBeenCalled();
  });

  it("loads and renders emergency contacts for a tenant", async () => {
    emergencyContactsApi.list.mockResolvedValueOnce([
      {
        id: "c1",
        name: "Mom",
        relation: "Mother",
        phone: "555-111-2222",
        email: "mom@example.com",
        archived: false,
      },
    ]);

    render(<EmergencyContactList tenantId="t1" />);

    // Wait for Mom to appear, then find the <li> row she lives in
    const [momNode] = await screen.findAllByText(/Mom/i);
    const row = momNode.closest("li");
    expect(row).not.toBeNull();
    const utils = within(row);

    expect(row).toHaveTextContent(/Mom/i);
    expect(utils.getByText(/Mother/i)).toBeInTheDocument();
    expect(utils.getByText(/555-111-2222/i)).toBeInTheDocument();
    expect(utils.getByText(/mom@example\.com/i)).toBeInTheDocument();
  });

  it("shows 'No emergency contacts.' when list is empty", async () => {
    emergencyContactsApi.list.mockResolvedValueOnce([]);

    render(<EmergencyContactList tenantId="t1" />);

    expect(
      await screen.findByText(/No emergency contacts\./i)
    ).toBeInTheDocument();
  });

  it("creates a contact via AddEmergencyContactForm and reloads list", async () => {
    emergencyContactsApi.list
      .mockResolvedValueOnce([]) // initial load
      .mockResolvedValueOnce([
        {
          id: "c2",
          name: "Dad",
          relation: "Father",
          phone: "555-987-6543",
          email: "dad@example.com",
          archived: false,
        },
      ]); // after create + reload

    emergencyContactsApi.create.mockResolvedValueOnce({ id: "c2" });

    render(<EmergencyContactList tenantId="t1" />);

    // Confirm initial empty state
    await screen.findByText(/No emergency contacts\./i);

    fireEvent.change(screen.getByPlaceholderText(/name/i), {
      target: { value: "Dad" },
    });
    fireEvent.change(screen.getByPlaceholderText(/phone/i), {
      target: { value: "555-987-6543" },
    });
    fireEvent.change(screen.getByPlaceholderText(/relation/i), {
      target: { value: "Father" },
    });
    fireEvent.change(screen.getByPlaceholderText(/email/i), {
      target: { value: "dad@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /^Add$/i }));

    await waitFor(() => {
      expect(emergencyContactsApi.create).toHaveBeenCalledTimes(1);
    });

    expect(emergencyContactsApi.create).toHaveBeenCalledWith("t1", {
      name: "Dad",
      phone: "555-987-6543",
      relation: "Father",
      email: "dad@example.com",
    });

    // After reload, new contact is rendered
    const [dadNode] = await screen.findAllByText(/Dad/i);
    const row = dadNode.closest("li");
    expect(row).not.toBeNull();
    const utils = within(row);

    expect(row).toHaveTextContent(/Dad/i);
    expect(utils.getByText(/Father/i)).toBeInTheDocument();
    expect(utils.getByText(/555-987-6543/i)).toBeInTheDocument();
    expect(utils.getByText(/dad@example\.com/i)).toBeInTheDocument();
  });

  it("supports inline edit and calls emergencyContactsApi.update", async () => {
    emergencyContactsApi.list
      .mockResolvedValueOnce([
        {
          id: "c1",
          name: "Mom",
          relation: "Mother",
          phone: "555-111-2222",
          email: "mom@example.com",
          archived: false,
        },
      ]) // initial
      .mockResolvedValueOnce([
        {
          id: "c1",
          name: "Updated Name",
          relation: "Sister",
          phone: "555-000-0000",
          email: "updated@example.com",
          archived: false,
        },
      ]); // after update + reload

    emergencyContactsApi.update.mockResolvedValueOnce({});

    render(<EmergencyContactList tenantId="t1" />);

    // Wait for initial Mom row to exist
    await screen.findAllByText(/Mom/i);

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText("Name");
    const phoneInput = screen.getByPlaceholderText("Phone");
    const relationInput = screen.getByPlaceholderText("Relation");
    const emailInput = screen.getByPlaceholderText("Email");

    fireEvent.change(nameInput, { target: { value: "Updated Name" } });
    fireEvent.change(phoneInput, { target: { value: "555-000-0000" } });
    fireEvent.change(relationInput, { target: { value: "Sister" } });
    fireEvent.change(emailInput, {
      target: { value: "updated@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /^Save$/i }));

    await waitFor(() => {
      expect(emergencyContactsApi.update).toHaveBeenCalledTimes(1);
    });

    expect(emergencyContactsApi.update).toHaveBeenCalledWith("t1", "c1", {
      name: "Updated Name",
      phone: "555-000-0000",
      relation: "Sister",
      email: "updated@example.com",
    });
  });

  it("shows inline error if name is missing and does not call update", async () => {
    emergencyContactsApi.list.mockResolvedValueOnce([
      {
        id: "c1",
        name: "Mom",
        relation: "Mother",
        phone: "555-111-2222",
        email: "mom@example.com",
        archived: false,
      },
    ]);

    emergencyContactsApi.update.mockResolvedValueOnce({});

    render(<EmergencyContactList tenantId="t1" />);

    // Wait for Mom to be present (row exists)
    await screen.findAllByText(/Mom/i);

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: " " } });

    fireEvent.click(screen.getByRole("button", { name: /^Save$/i }));

    expect(emergencyContactsApi.update).not.toHaveBeenCalled();
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  });

  it("toggles archive via ArchiveButton and reloads", async () => {
    emergencyContactsApi.list
      .mockResolvedValueOnce([
        {
          id: "c1",
          name: "Mom",
          relation: "Mother",
          phone: "555-111-2222",
          email: "mom@example.com",
          archived: false,
        },
      ])
      .mockResolvedValueOnce([
        {
          id: "c1",
          name: "Mom",
          relation: "Mother",
          phone: "555-111-2222",
          email: "mom@example.com",
          archived: true,
        },
      ]);

    emergencyContactsApi.toggleArchive.mockResolvedValueOnce({});

    render(<EmergencyContactList tenantId="t1" />);

    // Wait for Mom to show up
    await screen.findAllByText(/Mom/i);

    const archiveBtn = screen.getAllByRole("button", { name: /Archive/i })[0];
    fireEvent.click(archiveBtn);

    await waitFor(() => {
      expect(emergencyContactsApi.toggleArchive).toHaveBeenCalledTimes(1);
    });

    expect(emergencyContactsApi.toggleArchive).toHaveBeenCalledWith("t1", "c1");
  });
});
