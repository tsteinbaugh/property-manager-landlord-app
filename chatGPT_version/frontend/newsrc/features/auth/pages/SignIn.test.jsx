import React from "react";
import { describe, it, expect, vi } from "vitest";
import { Route } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouterAndUser } from "../../../test-utils/render.jsx";

import SignIn from "./SignIn.jsx";

// Mock the app providers' useUser to our test helper's one
vi.mock("../../../app/providers.jsx", async () => {
  const mod = await import("../../../test-utils/render.jsx");
  return { useUser: mod.useUser };
});

describe("SignIn", () => {
  it("submits credentials and navigates to /dashboard", async () => {
    const signIn = vi.fn().mockResolvedValue();
    let lastLoc = null;

    renderWithRouterAndUser({
      userValue: { signIn },
      initialEntries: ["/sign-in"],
      routes: (
        <>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/dashboard" element={<div>Dashboard</div>} />
        </>
      ),
      onLocation: (loc) => (lastLoc = loc),
    });

    fireEvent.change(screen.getByPlaceholderText(/email or username/i), {
      target: { value: "taylor" },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: "secret" },
    });

    fireEvent.click(screen.getByRole("button", { name: /sign in/i }));

    // signIn called and router moved
    expect(signIn).toHaveBeenCalledWith({ username: "taylor", password: "secret" });

    // Wait a tick for navigation to commit
    await screen.findByText(/dashboard/i);
    expect(lastLoc?.pathname).toBe("/dashboard");
  });

  it("shows post-reset and post-email banners via querystring flags", async () => {
    renderWithRouterAndUser({
      userValue: { signIn: vi.fn() },
      initialEntries: ["/sign-in?reset=1&sent=1"],
      routes: <Route path="/sign-in" element={<SignIn />} />,
    });

    // Both banners are rendered by the page
    expect(
      screen.getByText(/your password has been reset/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we’ve sent a reset link/i)
    ).toBeInTheDocument();
  });
});
