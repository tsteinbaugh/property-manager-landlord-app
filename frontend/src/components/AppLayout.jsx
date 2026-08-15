import { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import logo from "../assets/logo.svg";
import { useApi } from "../hooks/useApi";

const NAV_ITEMS = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/entities", label: "Entities" },
  { to: "/properties", label: "Properties" },
];

function navLinkClass({ isActive }) {
  return [
    "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
    isActive ? "bg-emerald-100 text-emerald-900" : "text-stone-600 hover:bg-stone-100 hover:text-stone-900",
  ].join(" ");
}

export default function AppLayout() {
  const api = useApi();

  // Keeps the default Self / Personal entity's name in sync with your Clerk
  // account name (edited via the account menu below) — runs once per app
  // load rather than on every request, since it's a one-way pull from Clerk.
  useEffect(() => {
    api.post("/api/me/sync-profile").catch(() => {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="flex items-center justify-between border-b border-stone-200 bg-white px-6 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Steinoak" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight text-stone-900">Steinoak</span>
        </div>
        <UserButton afterSignOutUrl="/sign-in" />
      </header>

      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-6">
        <nav className="w-48 shrink-0 space-y-1">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
