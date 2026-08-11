import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRole } from "./useRole.js";

function Probe({ user }) {
  const r = useRole(user);
  return (
    <div>
      <div data-testid="auth">{r.authRole}</div>
      <div data-testid="role">{r.role}</div>
      <div data-testid="imp">{r.impersonated || ""}</div>
      <button onClick={() => r.setRole("finance")}>imp-finance</button>
      <button onClick={() => r.resetRole()}>reset</button>
    </div>
  );
}

describe("useRole", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorage.clear();
  });

  it("defaults role to authRole when not impersonating", () => {
    render(<Probe user={{ role: "viewer" }} />);
    expect(screen.getByTestId("auth").textContent).toBe("viewer");
    expect(screen.getByTestId("role").textContent).toBe("viewer");
    expect(screen.getByTestId("imp").textContent).toBe("");
  });

  it("sysadmin can impersonate and then reset", () => {
    render(<Probe user={{ role: "sysadmin" }} />);
    fireEvent.click(screen.getByText(/imp-finance/i));
    expect(screen.getByTestId("role").textContent).toBe("finance");
    expect(screen.getByTestId("imp").textContent).toBe("finance");

    // persisted
    expect(localStorage.getItem("RBAC_IMPERSONATED")).toBe("finance");

    // reset
    fireEvent.click(screen.getByText(/reset/i));
    expect(screen.getByTestId("role").textContent).toBe("sysadmin");
    expect(screen.getByTestId("imp").textContent).toBe("");
    expect(localStorage.getItem("RBAC_IMPERSONATED")).toBeNull();
  });

  it("non-admin cannot impersonate", () => {
    render(<Probe user={{ role: "viewer" }} />);
    fireEvent.click(screen.getByText(/imp-finance/i)); // no-op
    expect(screen.getByTestId("role").textContent).toBe("viewer");
    expect(screen.getByTestId("imp").textContent).toBe("");
  });
});
