import React, { useState } from "react";
import { ROLES } from "@lib/rbac/roles.js";

const BASE_URL = "http://localhost:4000";

const ROLE_LABEL = {
  [ROLES.SYSADMIN]: "System Admin",
  [ROLES.LANDLORD]: "Landlord",
  [ROLES.PROPERTY_MANAGER]: "Property Manager",
  [ROLES.MAINTENANCE_TECH]: "Maintenance Tech",
  [ROLES.TENANT]: "Tenant",
  [ROLES.CLEANER]: "Cleaner",
};

async function createInvite({ email, baseRole }) {
  const res = await fetch(`${BASE_URL}/api/admin/invites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, baseRole }),
  });

  const text = await res.text().catch(() => "");
  let payload = null;
  try {
    payload = text ? JSON.parse(text) : null;
  } catch {
    payload = null;
  }

  if (!res.ok) {
    const msg =
      (payload && payload.error) ||
      text ||
      `HTTP ${res.status} ${res.statusText}`;
    throw new Error(msg);
  }

  return payload;
}

export default function InviteUser() {
  const [email, setEmail] = useState("");
  const [baseRole, setBaseRole] = useState(ROLES.TENANT);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState("");
  const [inviteUrl, setInviteUrl] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo("");
    setInviteUrl("");

    if (!email.trim()) {
      setError(new Error("Email is required."));
      return;
    }

    try {
      setSending(true);
      const payload = await createInvite({
        email: email.trim(),
        baseRole,
      });

      setInfo(
        `Invite created for ${payload.email} with role ${payload.baseRole}.`
      );
      if (payload.inviteUrl) {
        setInviteUrl(payload.inviteUrl);
      }
    } catch (err) {
      console.error("InviteUser error", err);
      setError(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <section>
      <h2>Invite User</h2>
      <p style={{ color: "#555" }}>
        Generate an invite link you can send by email or message. Later this
        can hook into a real mailer.
      </p>

      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 8, maxWidth: 420, marginTop: 12 }}
      >
        <input
          type="email"
          placeholder="user@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={sending}
          style={{ padding: 8 }}
        />

        <select
          value={baseRole}
          onChange={(e) => setBaseRole(e.target.value)}
          disabled={sending}
          style={{ padding: 8 }}
        >
          {Object.values(ROLES).map((r) => (
            <option key={r} value={r}>
              {ROLE_LABEL[r] || r}
            </option>
          ))}
        </select>

        {error && (
          <div style={{ color: "crimson", fontSize: 13 }}>
            {String(error.message || error)}
          </div>
        )}
        {info && (
          <div style={{ color: "green", fontSize: 13 }}>
            {info}
          </div>
        )}

        <button
          type="submit"
          disabled={sending}
          style={{ padding: "8px 12px" }}
        >
          {sending ? "Creating invite…" : "Create invite"}
        </button>
      </form>

      {inviteUrl && (
        <div style={{ marginTop: 16, fontSize: 12 }}>
          <div>Invite link (dev helper):</div>
          <a href={inviteUrl}>{inviteUrl}</a>
          <div style={{ color: "#666", marginTop: 4 }}>
            Copy this link into an email or message to the user.
          </div>
        </div>
      )}
    </section>
  );
}
