// frontend/newsrc/features/properties/components/AddPropertyForm.test.jsx
import React from "react";
import { vi } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import AddPropertyForm from "./AddPropertyForm.jsx";

// ---- Mocks ----
vi.mock("@lib/apiClient.js", () => ({
  apiFetch: vi.fn(),
}));

vi.mock("@app/providers.jsx", () => ({
  useUser: () => ({ token: "fake-token" }),
}));

import { apiFetch } from "@lib/apiClient.js";

describe("AddPropertyForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // jsdom might not have alert; ensure it exists and reset between tests
    // @ts-ignore
    global.alert = vi.fn();
  });

  it("submits valid data, calls apiFetch, clears form, and calls onCreated", async () => {
    const onCreated = vi.fn();
    apiFetch.mockResolvedValueOnce({ id: "prop-1" });

    render(<AddPropertyForm onCreated={onCreated} />);

    // Fill in fields
    fireEvent.change(screen.getByPlaceholderText(/Name \(optional\)/i), {
      target: { value: "My Property" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Street address/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByPlaceholderText(/City/i), {
      target: { value: "Testville" },
    });
    fireEvent.change(screen.getByPlaceholderText(/State/i), {
      target: { value: "CO" },
    });
    fireEvent.change(screen.getByPlaceholderText(/ZIP/i), {
      target: { value: "12345" },
    });

    const button = screen.getByRole("button", { name: /Add property/i });

    // Submit
    fireEvent.click(button);

    // apiFetch should be called with correct payload
    await waitFor(() => {
      expect(apiFetch).toHaveBeenCalledTimes(1);
    });

    expect(apiFetch).toHaveBeenCalledWith("/api/properties", {
      method: "POST",
      token: "fake-token",
      body: {
        name: "My Property",
        address1: "123 Main St",
        city: "Testville",
        state: "CO",
        postalCode: "12345",
      },
    });

    // onCreated should be called
    expect(onCreated).toHaveBeenCalledTimes(1);

    // Form fields should be cleared
    expect(
      screen.getByPlaceholderText(/Name \(optional\)/i)
    ).toHaveValue("");
    expect(screen.getByPlaceholderText(/Street address/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/City/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/State/i)).toHaveValue("CO");
    expect(screen.getByPlaceholderText(/ZIP/i)).toHaveValue("");
  });

  it("shows an alert and does not call apiFetch when required fields are missing", async () => {
    render(<AddPropertyForm onCreated={vi.fn()} />);

    // Only fill optional name; leave required fields empty
    fireEvent.change(screen.getByPlaceholderText(/Name \(optional\)/i), {
      target: { value: "Some Name" },
    });

    const button = screen.getByRole("button", { name: /Add property/i });
    fireEvent.click(button);

    // Should NOT call API
    expect(apiFetch).not.toHaveBeenCalled();

    // Should alert about required fields
    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith(
      "Address, city, state, and postal code are required."
    );
  });

  it("alerts on failure and re-enables button", async () => {
    const onCreated = vi.fn();
    apiFetch.mockRejectedValueOnce(new Error("Network exploded"));

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    render(<AddPropertyForm onCreated={onCreated} />);

    // Fill required fields minimally
    fireEvent.change(screen.getByPlaceholderText(/Street address/i), {
      target: { value: "123 Main St" },
    });
    fireEvent.change(screen.getByPlaceholderText(/City/i), {
      target: { value: "Testville" },
    });
    fireEvent.change(screen.getByPlaceholderText(/State/i), {
      target: { value: "CO" },
    });
    fireEvent.change(screen.getByPlaceholderText(/ZIP/i), {
      target: { value: "12345" },
    });

    const button = screen.getByRole("button", { name: /Add property/i });

    fireEvent.click(button);

    await waitFor(() => {
      expect(apiFetch).toHaveBeenCalledTimes(1);
    });

    // Should NOT call onCreated on failure
    expect(onCreated).not.toHaveBeenCalled();

    // Should have alerted
    expect(global.alert).toHaveBeenCalledTimes(1);
    expect(global.alert).toHaveBeenCalledWith(
      "Failed to create property. Check console for details."
    );

    // Button should be re-enabled afterward
    expect(button).not.toBeDisabled();

    consoleErrorSpy.mockRestore();
  });
});
