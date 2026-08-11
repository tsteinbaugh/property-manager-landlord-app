import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const link = ({ isActive }) => ({
  padding: "8px 12px",
  borderRadius: 8,
  textDecoration: "none",
  background: isActive ? "#eef2ff" : "transparent"
});

export default function AdminLayout() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", minHeight: "calc(100vh - 64px)" }}>
      <aside style={{ borderRight: "1px solid #e5e7eb", padding: 16 }}>
        <h3 style={{ marginTop: 0 }}>Administration</h3>
        <nav style={{ display: "grid", gap: 8 }}>
          <NavLink to="" end style={link}>Overview</NavLink>
          <NavLink to="users" style={link}>Users</NavLink>
          <NavLink to="invite" style={link}>Invite User</NavLink>
          <NavLink to="logs" style={link}>System Logs</NavLink>
        </nav>
      </aside>
      <main style={{ padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
