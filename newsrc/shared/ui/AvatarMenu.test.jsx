import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AvatarMenu from "./AvatarMenu.jsx";
import { AppProviders } from "@app/providers.jsx";
import { ROLES } from "@lib/rbac/roles.js";

function renderWithUser(seedUser) {
  return render(
    <AppProviders seedUser={seedUser}>
      <AvatarMenu />
    </AppProviders>
  );
}

describe("AvatarMenu", () => {
  it("renders user name and role", () => {
    renderWithUser({ id: "u1", name: "Taylor", email: "t@example.com", role: ROLES.TENANT });
    expect(screen.getByText(/taylor/i)).toBeInTheDocument();
    // role text should show the label for TENANT
    expect(screen.getByTestId("role-text").textContent).toMatch(/tenant/i);
  });

  it("opens and closes the menu on click", async () => {
    renderWithUser({ id: "u2", name: "Taylor", email: "t@example.com", role: ROLES.TENANT });

    const btn = screen.getByRole("button", { name: /account menu/i });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByRole("menu", { name: /user menu/i })).toBeInTheDocument();
    });

    // click outside by clicking the button again should still keep focus; instead press Escape or click outside node
    fireEvent.mouseDown(document.body);
    await waitFor(() => {
      expect(screen.queryByRole("menu", { name: /user menu/i })).toBeNull();
    });
  });

  it("shows Administration section only for sysadmin", async () => {
    renderWithUser({ id: "admin", name: "Admin", email: "a@example.com", role: ROLES.SYSADMIN });

    fireEvent.click(screen.getByRole("button", { name: /account menu/i }));

    await waitFor(() => {
      expect(screen.getByText(/administration/i)).toBeInTheDocument();
      expect(screen.getByRole("group", { name: /role switcher/i })).toBeInTheDocument();
    });
  });

  it("does NOT show Administration section for non-admin", async () => {
    renderWithUser({ id: "v1", name: "Tenant User", email: "v@example.com", role: ROLES.TENANT });

    fireEvent.click(screen.getByRole("button", { name: /account menu/i }));

    await waitFor(() => {
      expect(screen.queryByText(/administration/i)).toBeNull();
      expect(screen.queryByRole("group", { name: /role switcher/i })).toBeNull();
    });
  });

  it("updates effective role when sysadmin selects a new role", async () => {
    renderWithUser({ id: "admin", name: "Admin", email: "a@example.com", role: ROLES.SYSADMIN });

    // open menu
    fireEvent.click(screen.getByRole("button", { name: /account menu/i }));

    const pmBtn = await screen.findByRole("button", { name: /property manager/i });
    fireEvent.click(pmBtn);

    // the visible role next to the name should update to "Property Manager"
    await waitFor(() => {
      expect(screen.getByTestId("role-text").textContent).toMatch(/property manager/i);
    });

    // Clear impersonation should restore System Admin
    const clearBtn = screen.getByRole("menuitem", { name: /clear impersonation/i });
    fireEvent.click(clearBtn);

    await waitFor(() => {
      expect(screen.getByTestId("role-text").textContent).toMatch(/system admin/i);
    });
  });

  it("handles sign out click", async () => {
    // Just verify the button is present and clickable
    renderWithUser({ id: "u3", name: "T", email: "t@example.com", role: ROLES.TENANT });

    fireEvent.click(screen.getByRole("button", { name: /account menu/i }));

    const signOutBtn = await screen.findByRole("menuitem", { name: /sign out/i });
    fireEvent.click(signOutBtn);

    // no assertion against navigation here; presence + clickability is enough
    expect(signOutBtn).toBeInTheDocument();
  });
});
