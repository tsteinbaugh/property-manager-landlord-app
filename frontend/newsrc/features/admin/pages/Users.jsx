import React from "react";
import { useUser } from "../../../app/providers.jsx";

export default function Users() {
  const { listUsers } = useUser(); // implement later in providers; for now optional
  // Temporary static placeholder while backend wires up:
  const rows = [
    { id: "1", name: "Taylor Admin", email: "admin@example.com", role: "system_admin" },
    { id: "2", name: "Casey Cleaner", email: "cleaner@mail.com", role: "cleaner" }
  ];

  return (
    <section>
      <h2>Users</h2>
      <p>Invite, change roles, disable accounts.</p>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr><th align="left">Name</th><th align="left">Email</th><th align="left">Role</th><th></th></tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.id} style={{ borderTop: "1px solid #eee" }}>
              <td>{r.name}</td>
              <td>{r.email}</td>
              <td>{r.role}</td>
              <td>
                <button>Change Role</button>{" "}
                <button>Disable</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
