import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs.jsx";

describe("Breadcrumbs", () => {
  it("renders items and links the non-last crumb", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <Breadcrumbs
          items={[
            { label: "Home", to: "/" },
            { label: "Dashboard", to: "/dashboard" },
          ]}
        />
      </MemoryRouter>,
    );

    // First crumb should be a link
    const home = screen.getByText("Home");
    expect(home.tagName.toLowerCase()).toBe("a");

    // Last crumb is typically plain text (not a link)
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });
});
