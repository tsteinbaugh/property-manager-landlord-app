import React from "react";
import { describe, it, expect, vi } from "vitest";
import { Route } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithRouterAndUser } from "../../../test-utils/render.jsx";

import ResetPassword from "./ResetPassword.jsx";
import SignIn from "./SignIn.jsx";

vi.mock("../../../app/providers.jsx", async () => {
  const mod = await import("../../../test-utils/render.jsx");
  return { useUser: mod.useUser };
});

describe("ResetPassword", () => {
  it("resets with valid token and navigates to /sign-in?reset=1", async () => {
    const resetPassword = vi.fn().mockResolvedValue();
    let lastLoc = null;

    renderWithRouterAndUser({
      userValue: { resetPassword },
      initialEntries: ["/reset-password?token=tok123"],
      routes: (
        <>
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/sign-in" element={<SignIn />} />
        </>
      ),
      onLocation: (loc) => (lastLoc = loc),
    });

    fireEvent.change(screen.getByPlaceholderText(/^New password$/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText(/^Confirm new password$/i), {
      target: { value: "password123" },
    });

    fireEvent.click(
      screen.getByRole("button", { name: /update password/i })
    );

    expect(resetPassword).toHaveBeenCalledWith({
      token: "tok123",
      password: "password123",
    });

    await waitFor(() => {
      expect(lastLoc?.pathname).toBe("/sign-in");
    });
    expect(lastLoc?.search).toContain("reset=1");
  });
});
