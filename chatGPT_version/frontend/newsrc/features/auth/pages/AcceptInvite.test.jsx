import React from "react";
import { describe, it, expect, vi } from "vitest";
import { Route } from "react-router-dom";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithRouterAndUser } from "../../../test-utils/render.jsx";

import AcceptInvite from "./AcceptInvite.jsx";

// Make the app hook come from our test helpers
vi.mock("../../../app/providers.jsx", async () => {
  const mod = await import("../../../test-utils/render.jsx");
  return { useUser: mod.useUser };
});

describe("AcceptInvite", () => {
  it("activates account and routes to /sign-in?accepted=1", async () => {
    // sanity: the component we import must be a function
    expect(typeof AcceptInvite).toBe("function");

    const acceptInvite = vi.fn().mockResolvedValue();
    let lastLoc = null;

    renderWithRouterAndUser({
      userValue: { acceptInvite },
      initialEntries: ["/accept-invite?token=tok123&email=cleaner%40mail.com"],
      routes: (
        <>
          <Route path="/accept-invite" element={<AcceptInvite />} />
          {/* stub destination so we avoid pulling real SignIn and its deps */}
          <Route path="/sign-in" element={<div>Sign in page</div>} />
        </>
      ),
      onLocation: (loc) => (lastLoc = loc),
    });

    // Fill form
    fireEvent.change(screen.getByPlaceholderText(/full name/i), {
      target: { value: "Casey Cleaner" },
    });
    expect(screen.getByDisplayValue("cleaner@mail.com")).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/create password/i), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByPlaceholderText(/confirm password/i), {
      target: { value: "password123" },
    });

    // Submit
    fireEvent.click(screen.getByRole("button", { name: /activate account/i }));

    // Called with the right payload
    await waitFor(() =>
      expect(acceptInvite).toHaveBeenCalledWith({
        token: "tok123",
        name: "Casey Cleaner",
        email: "cleaner@mail.com",
        password: "password123",
      })
    );

    // We navigated to sign-in and the banner flag is present
    await screen.findByText(/sign in page/i);
    expect(lastLoc?.pathname).toBe("/sign-in");
    expect(lastLoc?.search).toContain("accepted=1");
  });
});
