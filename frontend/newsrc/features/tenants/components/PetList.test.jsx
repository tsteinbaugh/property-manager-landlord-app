// frontend/newsrc/features/tenants/components/PetList.test.jsx
import React from "react";
import { vi } from "vitest";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";

// ---- Mocks ----
vi.mock("../api/pets.api.js", () => ({
  petsApi: {
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

import { petsApi } from "../api/pets.api.js";
// NOTE: file is PetList.jsx, component is PetsList
import PetsList from "./PetList.jsx";

describe("PetsList", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shows placeholder when no tenantId and does not call API", () => {
    render(<PetsList tenantId="" />);

    expect(
      screen.getByText(/Create a tenant first to attach pets/i)
    ).toBeInTheDocument();
    expect(petsApi.list).not.toHaveBeenCalled();
  });

  it("loads and renders pets for a tenant", async () => {
    petsApi.list.mockResolvedValueOnce([
      {
        id: "p1",
        name: "Scout",
        type: "Dog",
        breed: "Shepherd",
        weightLb: 50,
        archived: false,
      },
    ]);

    render(<PetsList tenantId="t1" />);

    // Wait for fetch to resolve
    expect(await screen.findByText(/Scout/i)).toBeInTheDocument();
    expect(screen.getByText(/Dog/i)).toBeInTheDocument();
    expect(screen.getByText(/Shepherd/i)).toBeInTheDocument();
    expect(screen.getByText(/50 lbs/i)).toBeInTheDocument();
  });

  it("shows 'No pets.' when list is empty", async () => {
    petsApi.list.mockResolvedValueOnce([]);

    render(<PetsList tenantId="t1" />);

    expect(await screen.findByText(/No pets\./i)).toBeInTheDocument();
  });

  it("creates a pet via AddPetForm and reloads list", async () => {
    // Initial load: no pets
    petsApi.list
      .mockResolvedValueOnce([]) // first load
      .mockResolvedValueOnce([
        // after create + reload
        {
          id: "p2",
          name: "Mochi",
          type: "Cat",
          breed: "DSH",
          weightLb: 10,
          archived: false,
        },
      ]);

    petsApi.create.mockResolvedValueOnce({ id: "p2" });

    render(<PetsList tenantId="t1" />);

    await screen.findByText(/No pets\./i);

    fireEvent.change(screen.getByPlaceholderText(/^name$/i), {
      target: { value: "Mochi" },
    });
    fireEvent.change(screen.getByPlaceholderText(/type/i), {
      target: { value: "Cat" },
    });
    fireEvent.change(screen.getByPlaceholderText(/breed/i), {
      target: { value: "DSH" },
    });
    fireEvent.change(screen.getByPlaceholderText(/weight \(lbs\)/i), {
      target: { value: "10" },
    });

    fireEvent.click(screen.getByRole("button", { name: /^Add$/i }));

    await waitFor(() => {
      expect(petsApi.create).toHaveBeenCalledTimes(1);
    });

    expect(petsApi.create).toHaveBeenCalledWith("t1", {
      name: "Mochi",
      type: "Cat",
      breed: "DSH",
      weightLb: "10",
    });

    // After reload, new pet is rendered
    expect(await screen.findByText(/Mochi/i)).toBeInTheDocument();
    expect(screen.getByText(/Cat/i)).toBeInTheDocument();
  });

  it("supports inline edit and calls petsApi.update", async () => {
    petsApi.list
      .mockResolvedValueOnce([
        {
          id: "p1",
          name: "Scout",
          type: "Dog",
          breed: "Shepherd",
          weightLb: 50,
          archived: false,
        },
      ]) // initial
      .mockResolvedValueOnce([
        {
          id: "p1",
          name: "Updated Name",
          type: "Doggo",
          breed: "Mix",
          weightLb: 55,
          archived: false,
        },
      ]); // after update + reload

    petsApi.update.mockResolvedValueOnce({});

    render(<PetsList tenantId="t1" />);

    await screen.findByText(/Scout/i);

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    // Use exact string placeholders to avoid the "name"/"Name" clash
    const nameInput = screen.getByPlaceholderText("Name");
    const typeInput = screen.getByPlaceholderText("Type");
    const breedInput = screen.getByPlaceholderText("Breed");
    const weightInput = screen.getByPlaceholderText("Weight (lbs)");

    fireEvent.change(nameInput, { target: { value: "Updated Name" } });
    fireEvent.change(typeInput, { target: { value: "Doggo" } });
    fireEvent.change(breedInput, { target: { value: "Mix" } });
    fireEvent.change(weightInput, { target: { value: "55" } });

    fireEvent.click(screen.getByRole("button", { name: /^Save$/i }));

    await waitFor(() => {
      expect(petsApi.update).toHaveBeenCalledTimes(1);
    });

    expect(petsApi.update).toHaveBeenCalledWith("t1", "p1", {
      name: "Updated Name",
      type: "Doggo",
      breed: "Mix",
      weightLb: "55",
    });
  });

  it("shows inline error if name is missing and does not call update", async () => {
    petsApi.list.mockResolvedValueOnce([
      {
        id: "p1",
        name: "Scout",
        type: "Dog",
        breed: "Shepherd",
        weightLb: 50,
        archived: false,
      },
    ]);

    render(<PetsList tenantId="t1" />);

    // Just wait for the list to load; we don't care about the specific name
    await screen.findByRole("button", { name: /Edit/i });

    fireEvent.click(screen.getByRole("button", { name: /Edit/i }));

    const nameInput = screen.getByPlaceholderText("Name");
    fireEvent.change(nameInput, { target: { value: " " } });

    fireEvent.click(screen.getByRole("button", { name: /^Save$/i }));

    expect(petsApi.update).not.toHaveBeenCalled();

    expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
  });

  it("toggles archive via ArchiveButton and reloads", async () => {
    petsApi.list
      .mockResolvedValueOnce([
        {
          id: "p1",
          name: "Scout",
          type: "Dog",
          breed: "Shepherd",
          weightLb: 50,
          archived: false,
        },
      ])
      .mockResolvedValueOnce([
        {
          id: "p1",
          name: "Scout",
          type: "Dog",
          breed: "Shepherd",
          weightLb: 50,
          archived: true,
        },
      ]);

    petsApi.toggleArchive.mockResolvedValueOnce({});

    render(<PetsList tenantId="t1" />);

    await screen.findByText(/Scout/i);

    const archiveBtn = screen.getAllByRole("button", { name: /Archive/i })[0];
    fireEvent.click(archiveBtn);

    await waitFor(() => {
      expect(petsApi.toggleArchive).toHaveBeenCalledTimes(1);
    });

    expect(petsApi.toggleArchive).toHaveBeenCalledWith("t1", "p1");
  });
});
