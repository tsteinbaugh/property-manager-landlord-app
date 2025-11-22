// frontend/newsrc/features/tenants/components/OccupantList.test.jsx
import React from "react";
import { vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

// ---- Mocks ----
vi.mock("../api/occupants.api.js", () => ({
  occupantsApi: {
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

import { occupantsApi } from "../api/occupants.api.js";
import OccupantList from "./OccupantList.jsx";

describe("OccupantList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows placeholder when no tenantId and does not call API", () => {
    render(<OccupantList tenantId="" />);

    expect(
      screen.getByText(/Create a tenant first to attach occupants/i)
    ).toBeInTheDocument();
    expect(occupantsApi.list).not.toHaveBeenCalled();
  });

  it("loads and renders occupants for a tenant", async () => {
    occupantsApi.list.mockResolvedValueOnce([
      {
        id: "o1",
        name: "Alex",
        relation: "Roommate",
        archived: false,
      },
    ]);

    render(<OccupantList tenantId="t1" />);

    expect(await screen.findByText(/Alex/i)).toBeInTheDocument();
    expect(screen.getByText(/Roommate/i)).toBeInTheDocument();
  });

  it("shows 'No occupants.' when list is empty", async () => {
    occupantsApi.list.mockResolvedValueOnce([]);

    render(<OccupantList tenantId="t1" />);

    expect(await screen.findByText(/No occupants\./i)).toBeInTheDocument();
  });

  it("creates an occupant via AddOccupantForm and reloads list", async () => {
    occupantsApi.list
      .mockResolvedValueOnce([]) // initial
      .mockResolvedValueOnce([
        {
          id: "o2",
          name: "Jamie",
          relation: "Child",
          archived: false,
        },
      ]); // after create + reload

    occupantsApi.create.mockResolvedValueOnce({ id: "o2" });

    render(<OccupantList tenantId="t1" />);

    // Wait for initial empty state
    await screen.findByText(/No occupants\./i);

    fireEvent.change(
      screen.getByPlaceholderText("Name (required)"),
      { target: { value: "Jamie" } }
    );
    fireEvent.change(
      screen.getByPlaceholderText(/Relation \(roommate, child, etc\.\)/i),
      { target: { value: "Child" } }
    );

    fireEvent.click(
      screen.getByRole("button", { name: /Save occupant/i })
    );

    await waitFor(() => {
      expect(occupantsApi.create).toHaveBeenCalledTimes(1);
    });

    expect(occupantsApi.create).toHaveBeenCalledWith("t1", {
      name: "Jamie",
      relation: "Child",
    });

    // After reload, new occupant is rendered
    expect(await screen.findByText(/Jamie/i)).toBeInTheDocument();
    expect(screen.getByText(/Child/i)).toBeInTheDocument();
  });

  it("supports inline edit and calls occupantsApi.update", async () => {
    occupantsApi.list
      .mockResolvedValueOnce([
        {
          id: "o1",
          name: "Alex",
          relation: "Roommate",
          archived: false,
        },
      ]) // initial
      .mockResolvedValueOnce([
        {
          id: "o1",
          name: "Updated Name",
          relation: "Partner",
          archived: false,
        },
      ]); // after update + reload

    occupantsApi.update.mockResolvedValueOnce({});

    render(<OccupantList tenantId="t1" />);

    await screen.findByText(/Alex/i);

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText("Name");
    const relationInput = screen.getByPlaceholderText("Relation");

    fireEvent.change(nameInput, { target: { value: "Updated Name" } });
    fireEvent.change(relationInput, { target: { value: "Partner" } });

    fireEvent.click(screen.getByRole("button", { name: /^Save$/i }));

    await waitFor(() => {
      expect(occupantsApi.update).toHaveBeenCalledTimes(1);
    });

    expect(occupantsApi.update).toHaveBeenCalledWith("t1", "o1", {
      name: "Updated Name",
      relation: "Partner",
    });
  });

  it("shows inline error if name is missing and does not call update", async () => {
    occupantsApi.list.mockResolvedValueOnce([
      {
        id: "o1",
        name: "Alex",
        relation: "Roommate",
        archived: false,
      },
    ]);

    render(<OccupantList tenantId="t1" />);

    await screen.findByText(/Alex/i);

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: " " } });

    fireEvent.click(screen.getByRole("button", { name: /^Save$/i }));

    expect(occupantsApi.update).not.toHaveBeenCalled();
    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  });

  it("toggles archive via ArchiveButton and reloads", async () => {
    occupantsApi.list
      .mockResolvedValueOnce([
        {
          id: "o1",
          name: "Alex",
          relation: "Roommate",
          archived: false,
        },
      ])
      .mockResolvedValueOnce([
        {
          id: "o1",
          name: "Alex",
          relation: "Roommate",
          archived: true,
        },
      ]);

    occupantsApi.toggleArchive.mockResolvedValueOnce({});

    render(<OccupantList tenantId="t1" />);

    await screen.findByText(/Alex/i);

    const archiveBtn = screen.getAllByRole("button", { name: /Archive/i })[0];
    fireEvent.click(archiveBtn);

    await waitFor(() => {
      expect(occupantsApi.toggleArchive).toHaveBeenCalledTimes(1);
    });

    expect(occupantsApi.toggleArchive).toHaveBeenCalledWith("t1", "o1");
  });
});
