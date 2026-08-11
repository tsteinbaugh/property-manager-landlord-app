// newsrc/shared/ui/SearchInput.test.jsx
import React, { useState } from "react";
import { render, screen, fireEvent, waitFor, within } from "@testing-library/react";
import SearchInput from "./SearchInput.jsx";

function Harness(props) {
  const [value, setValue] = useState(props.value ?? "");
  const [open, setOpen] = useState(props.open ?? false);
  return (
    <SearchInput
      {...props}
      value={value}
      onChange={setValue}
      open={open}
      onOpenChange={setOpen}
    />
  );
}

describe("SearchInput", () => {
  const sampleResults = [
    {
      id: "prop-1",
      label: "123 Main St",
      sublabel: "Parker, CO • Property",
      entityType: "property",
    },
    {
      id: "tenant-1",
      label: "Taylor",
      sublabel: "Frederick, CO • Tenant",
      entityType: "tenant",
    },
  ];

  it("renders placeholder and allows typing", () => {
    render(<Harness placeholder="Search…" results={[]} open={true} />);
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });

  it("shows results when open", async () => {
    render(
      <Harness
        value="tay"
        open={true}
        results={sampleResults}
        // keep selection inert for this test
        onSelect={() => {}}
      />
    );

    // Results are rendered as <button> rows
    const list = await screen.findByRole("group", { name: /search results/i });
    const rows = within(list).getAllByRole("button");
    expect(rows.length).toBe(2);

    // Sanity: specific items present
    expect(screen.getByTitle("123 Main St")).toBeInTheDocument();
    expect(screen.getByTitle("Taylor")).toBeInTheDocument();
  });

  it("renders empty state when no results", async () => {
    render(<Harness value="unknown" open={true} results={[]} />);
    await waitFor(() => {
      expect(screen.getByText(/no results/i)).toBeInTheDocument();
    });
  });

  it("calls onSelect when an item is clicked", async () => {
    const handleSelect = vi.fn();
    render(<Harness value="tay" open={true} results={sampleResults} onSelect={handleSelect} />);

    // Click the “Taylor” row (title is set to label)
    const row = await screen.findByTitle("Taylor");
    fireEvent.click(row);

    expect(handleSelect).toHaveBeenCalledTimes(1);
    expect(handleSelect).toHaveBeenCalledWith(
      expect.objectContaining({ id: "tenant-1", label: "Taylor" })
    );
  });
});
