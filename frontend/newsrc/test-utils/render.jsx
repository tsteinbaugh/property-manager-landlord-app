import React, { useEffect } from "react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";
import { render } from "@testing-library/react";

/* -------- Mocked user context hook for tests -------- */
let __currentUserValue = {};
export function useUser() {
  return __currentUserValue || {};
}

/* -------- Location probe that always mounts -------- */
function LocationProbe({ onLocation }) {
  const loc = useLocation();
  useEffect(() => {
    if (onLocation) onLocation(loc);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loc]);
  return null;
}

/* -------- Render helper used by all auth tests -------- */
export function renderWithRouterAndUser({
  routes,
  initialEntries = ["/"],
  userValue = {},
  onLocation,
}) {
  __currentUserValue = userValue;

  // IMPORTANT: LocationProbe is outside <Routes> so it is always mounted,
  // regardless of which <Route> matches. This guarantees onLocation fires.
  const ui = (
    <MemoryRouter initialEntries={initialEntries}>
      <LocationProbe onLocation={onLocation} />
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );

  return render(ui);
}
