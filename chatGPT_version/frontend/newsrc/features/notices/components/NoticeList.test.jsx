import React from "react";
/* @vitest-environment jsdom */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NoticeList from "./NoticeList.jsx";
import * as api from "../api/notices.api.js";

vi.mock("../api/notices.api.js", () => ({
  noticesApi: {
    list: vi.fn(() =>
      Promise.resolve([{ id: "n1", type: "JDF-99A", status: "draft", mode: "posted" }])
    ),
    setStatus: vi.fn(() => Promise.resolve({ ok: true })),
    create: vi.fn(() => Promise.resolve({ ok: true })),
    toggleArchive: vi.fn(() => Promise.resolve({ ok: true })),
    remove: vi.fn(() => Promise.resolve({ ok: true })),
  },
}));

describe("<NoticeList />", () => {
  it("renders notices", async () => {
    render(<NoticeList role="landlord" propertyId="p1" />);
    expect(await screen.findByText(/JDF-99A/i)).toBeInTheDocument();
  });

  it("updates status", async () => {
    render(<NoticeList role="landlord" propertyId="p1" />);
    const btn = await screen.findByRole("button", { name: /sent/i });
    fireEvent.click(btn);

    await waitFor(() => {
      expect(api.noticesApi.setStatus).toHaveBeenCalled();
    });
  });

  it("shows no notices", () => {
    vi.mocked(api.noticesApi.list).mockResolvedValueOnce([]);
    render(<NoticeList propertyId="p1" />);
    expect(screen.getByText(/Loading notices/i)).toBeInTheDocument();
  });
});
