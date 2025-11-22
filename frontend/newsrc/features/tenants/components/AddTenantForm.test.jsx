import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AddTenantForm from "./AddTenantForm.jsx";

describe("AddTenantForm", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("submits name/email/phone and clears fields afterward", async () => {
    const onCreate = vi.fn().mockResolvedValue({});

    render(<AddTenantForm onCreate={onCreate} />);

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email/i), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Phone/i), {
      target: { value: "555-1234" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Save tenant/i }));

    // Ensure onCreate called with trimmed payload
    expect(onCreate).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      phone: "555-1234",
    });

    // Wait for React state to flush and clear the fields
    await waitFor(() => {
      expect(screen.getByPlaceholderText(/Name/i).value).toBe("");
      expect(screen.getByPlaceholderText(/Email/i).value).toBe("");
      expect(screen.getByPlaceholderText(/Phone/i).value).toBe("");
    });
  });

  it("shows an inline error message if onCreate throws", async () => {
    const onCreate = vi.fn().mockRejectedValue(new Error("Failed to create tenant"));

    render(<AddTenantForm onCreate={onCreate} />);

    fireEvent.change(screen.getByPlaceholderText(/Name/i), {
      target: { value: "John" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Save tenant/i }));

    // Error should render
    expect(await screen.findByText(/Failed to create tenant/i)).toBeInTheDocument();
  });

  it("does not submit when name is missing and alerts instead", () => {
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    const onCreate = vi.fn();

    render(<AddTenantForm onCreate={onCreate} />);

    // Leave name blank
    fireEvent.click(screen.getByRole("button", { name: /Save tenant/i }));

    expect(alertMock).toHaveBeenCalledWith("Name is required");
    expect(onCreate).not.toHaveBeenCalled();
  });
});
