import React, { useState } from "react";
import { useUser } from "../../../app/providers.jsx";

export default function InviteUser() {
  const { inviteUser } = useUser(); // add stub in providers if not present
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("cleaner");
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg("");
    try {
      if (inviteUser) await inviteUser({ email, role });
      setMsg("Invite sent.");
      setEmail("");
      setRole("cleaner");
    } catch (e2) {
      setMsg("Failed to send invite.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <h2>Invite User</h2>
      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, maxWidth: 420 }}>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="cleaner">Cleaner</option>
          <option value="tenant">Tenant</option>
          <option value="landlord">Landlord</option>
          <option value="system_admin">System Admin</option>
        </select>
        <button disabled={sending} type="submit">{sending ? "Sending…" : "Send Invite"}</button>
        {msg && <div>{msg}</div>}
      </form>
    </section>
  );
}
