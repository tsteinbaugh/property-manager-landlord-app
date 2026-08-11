import React from "react";
import { describe, it, expect, vi } from "vitest";
import { Route } from "react-router-dom";
import { fireEvent, screen } from "@testing-library/react";
import { renderWithRouterAndUser } from "../../../test-utils/render.jsx";

import ForgotPassword from "./ForgotPassword.jsx";
import SignIn from "./SignIn.jsx";

vi.mock("../../../app/providers.jsx", async () => {
  const mod = await import("../../../test-utils/render.jsx");
  return { useUser: mod.useUser };
});

describe("ForgotPassword", () => {
  it("requests reset and routes back to /sign-in?sent=1", async () => {
    const requestPasswordReset = vi.fn().mockResolvedValue();
    let lastLoc = null;

    renderWithRouterAndUser({
      userValue: { requestPasswordReset },
      initialEntries: ["/forgot-password"],
      routes: (
        <>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/sign-in" element={<SignIn />} />
        </>
      ),
      onLocation: (loc) => (lastLoc = loc),
    });

    fireEvent.change(screen.getByPlaceholderText(/you@example.com/i), {
      target: { value: "me@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /send reset link/i }));

    expect(requestPasswordReset).toHaveBeenCalledWith({ email: "me@example.com" });

    // lands on /sign-in?sent=1
    await screen.findByText(/we’ve sent a reset link/i);
    expect(lastLoc?.pathname).toBe("/sign-in");
    expect(lastLoc?.search).toContain("sent=1");
  });
});
