// newsrc/features/leases/components/AddLeaseForm.test.jsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import AddLeaseForm from "./AddLeaseForm.jsx";

describe("AddLeaseForm", () => {
  const tenants = [{ id: "t1", name: "Alice Tenant" }];
  const properties = [{ id: "p1", name: "Main St House", address1: "123 Main" }];

  let fetchMock;

  beforeEach(() => {
    vi.clearAllMocks();

    // mock global.fetch
    fetchMock = vi.fn();
    global.fetch = fetchMock;

    // mock alert to avoid jsdom blowing up
    if (!window.alert) {
      // jsdom usually has this, but guard just in case
      // eslint-disable-next-line no-alert
      window.alert = () => {};
    }
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("submits form with FormData, calls onCreated, and clears fields on success", async () => {
    const mockOnCreated = vi.fn();
    const fakeLease = { id: "lease-123" };

    fetchMock.mockResolvedValueOnce({
      ok: true,
      status: 200,
      statusText: "OK",
      json: async () => fakeLease,
    });

    const { container } = render(
      <AddLeaseForm
        onCreated={mockOnCreated}
        tenants={tenants}
        properties={properties}
      />
    );

    // Get selects (tenant + property)
    const selects = container.querySelectorAll("select");
    const tenantSelect = selects[0];
    const propertySelect = selects[1];

    fireEvent.change(tenantSelect, { target: { value: "t1" } });
    fireEvent.change(propertySelect, { target: { value: "p1" } });

    // Optional labels + rent + dates
    fireEvent.change(
      screen.getByPlaceholderText(/Tenant label/i),
      { target: { value: "Alice T." } }
    );
    fireEvent.change(
      screen.getByPlaceholderText(/Property label/i),
      { target: { value: "Main House" } }
    );
    fireEvent.change(
      screen.getByPlaceholderText(/Rent amount/i),
      { target: { value: "2500" } }
    );

    const dateInputs = container.querySelectorAll('input[type="date"]');
    const startDateInput = dateInputs[0];
    const endDateInput = dateInputs[1];

    fireEvent.change(startDateInput, { target: { value: "2025-01-01" } });
    fireEvent.change(endDateInput, { target: { value: "2025-12-31" } });

    // File input – grab via querySelector since there is no label/testid
    const fileInput = container.querySelector('input[type="file"]');
    const file = new File(["dummy content"], "lease.pdf", {
      type: "application/pdf",
    });
    fireEvent.change(fileInput, {
      target: { files: [file] },
    });

    // Submit
    fireEvent.click(screen.getByRole("button", { name: /Save lease/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
    });

    const [url, options] = fetchMock.mock.calls[0];

    expect(url).toMatch(/\/api\/leases$/);
    expect(options.method).toBe("POST");
    expect(options.body).toBeInstanceOf(FormData);

    // onCreated gets called with the parsed lease
    await waitFor(() => {
      expect(mockOnCreated).toHaveBeenCalledTimes(1);
      expect(mockOnCreated).toHaveBeenCalledWith(fakeLease);
    });

    // After success, the form fields should be cleared
    await waitFor(() => {
      expect(tenantSelect.value).toBe("");
      expect(propertySelect.value).toBe("");

      expect(
        screen.getByPlaceholderText(/Tenant label/i).value
      ).toBe("");
      expect(
        screen.getByPlaceholderText(/Property label/i).value
      ).toBe("");
      expect(
        screen.getByPlaceholderText(/Rent amount/i).value
      ).toBe("");

      expect(startDateInput.value).toBe("");
      expect(endDateInput.value).toBe("");
    });
  });

  it("shows alert and does not submit when file is missing", async () => {
    render(
      <AddLeaseForm
        tenants={tenants}
        properties={properties}
      />
    );

    // Fill tenant + property but omit file
    const selects = document.querySelectorAll("select");
    const tenantSelect = selects[0];
    const propertySelect = selects[1];

    fireEvent.change(tenantSelect, { target: { value: "t1" } });
    fireEvent.change(propertySelect, { target: { value: "p1" } });

    fireEvent.click(screen.getByRole("button", { name: /Save lease/i }));

    expect(window.alert).toHaveBeenCalledWith(
      expect.stringMatching(/lease file/i)
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
