import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import IncludeArchivedToggle from "./IncludeArchivedToggle.jsx";

it("toggles checked state and calls onChange", () => {
  const onChange = vi.fn();
  render(<IncludeArchivedToggle value={false} onChange={onChange} />);
  const cb = screen.getByRole("checkbox", { name: /include archived/i });
  expect(cb).not.toBeChecked();
  fireEvent.click(cb);
  expect(onChange).toHaveBeenCalledWith(true);
});
