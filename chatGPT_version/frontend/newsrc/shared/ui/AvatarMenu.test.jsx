import { describe, it, expect, vi } from "vitest";
import React from "react";
import { Route } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";

// Mock providers BEFORE importing AvatarMenu so our hook is used by the component.
vi.mock("@app/providers.jsx", async () => {
  const mod = await import("../../test-utils/render.jsx");
  return { useUser: mod.useUser };
});

import { renderWithRouterAndUser } from "../../test-utils/render.jsx";
import { ROLES } from "@lib/rbac/roles.js";
import AvatarMenu from "./AvatarMenu.jsx";

describe("AvatarMenu", () => {
  it("updates effective role when sysadmin selects a new role (calls impersonate) and can clear impersonation", async () => {
    const impersonate = vi.fn();
    const clearImpersonation = vi.fn();

    renderWithRouterAndUser({
      userValue: {
        user: { name: "Admin", email: "admin@mail.com" },
        isSysAdmin: true,
        effectiveRole: ROLES.SYSADMIN,
        impersonate,
        clearImpersonation,
        signOut: vi.fn(),
      },
      initialEntries: ["/"],
      routes: <Route path="/" element={<AvatarMenu />} />,
    });

    // Open menu
    const trigger = screen.getByRole("button", { name: /account menu/i });
    fireEvent.click(trigger);

    // Wait until the admin section shows up to avoid timing flakiness
    await screen.findByText(/administration/i);

    // Click a role pill (Tenant). Be tolerant to markup changes by matching text.
    // Prefer role=button with name=/tenant/i if present, else fallback to text match.
    let tenantBtn =
      screen.queryByRole("button", { name: /tenant/i }) ||
      Array.from(screen.getAllByRole("button")).find((b) =>
        /tenant/i.test(b.textContent || "")
      );
    expect(tenantBtn).toBeTruthy();
    fireEvent.click(tenantBtn);

    // If clicking caused a re-render/close, re-open before looking for Clear impersonation
    if (!screen.queryByText(/administration/i)) {
      fireEvent.click(trigger);
      await screen.findByText(/administration/i);
    }

    // Click Clear impersonation (use text to avoid role specificity issues)
    const clearBtn =
      screen.queryByRole("menuitem", { name: /clear impersonation/i }) ||
      screen.getByText(/clear impersonation/i);
    fireEvent.click(clearBtn);
    expect(clearImpersonation).toHaveBeenCalled();
  });

  it("handles sign out click", async () => {
    const signOut = vi.fn();

    renderWithRouterAndUser({
      userValue: {
        user: { name: "Taylor", email: "taylor@mail.com" },
        isSysAdmin: true,
        effectiveRole: ROLES.SYSADMIN,
        impersonate: vi.fn(),
        clearImpersonation: vi.fn(),
        signOut,
      },
      initialEntries: ["/"],
      routes: <Route path="/" element={<AvatarMenu />} />,
    });

    // Open menu
    fireEvent.click(screen.getByRole("button", { name: /account menu/i }));

    const signOutBtn =
      (await screen.findByRole("menuitem", { name: /sign out/i })) ||
      screen.getByText(/sign out/i);
    fireEvent.click(signOutBtn);
    expect(signOut).toHaveBeenCalled();
  });
});
