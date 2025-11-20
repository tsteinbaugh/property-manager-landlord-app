import React, { useState } from "react";
import { useUser } from "../../../app/providers.jsx";
import { ROLES } from "@lib/rbac/roles.js";

export default function InviteUser() {
  const { inviteUser } = useUser(); // still stubbed for now
  const [email, setEmail] = useState("");
  const [role, setRole] = useState(ROLES.CLEANER);
  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setMsg("");
    try {
      if (inviteUser) {
        await inviteUser({ email, baseRole: role });
      }
      setMsg("Invite recorded (no real email is sent in this demo).");
      setEmail("");
      setRole(ROLES.CLEANER);
    } catch (e2) {
      console.error("InviteUser error", e2);
      setMsg("Failed to record invite.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <h2>Invite User</h2>
      <p style={{ maxWidth: 480, fontSize: 14, color: "#555" }}>
        In this demo, invites are stored in the backend only; no actual emails
        are sent yet.
      </p>
      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 12, maxWidth: 420 }}
      >
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value={ROLES.CLEANER}>Cleaner</option>
          <option value={ROLES.MAINTENANCE_TECH}>Maintenance Tech</option>
          <option value={ROLES.TENANT}>Tenant</option>
          <option value={ROLES.PROPERTY_MANAGER}>Property Manager</option>
          <option value={ROLES.LANDLORD}>Landlord</option>
          <option value={ROLES.SYSADMIN}>System Admin</option>
        </select>
        <button disabled={sending} type="submit">
          {sending ? "Sending…" : "Send Invite"}
        </button>
        {msg && <div>{msg}</div>}
      </form>
    </section>
  );
}
