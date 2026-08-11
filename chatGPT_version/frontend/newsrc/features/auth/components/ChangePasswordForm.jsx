import React, { useState } from "react";
import { useUser } from "@app/providers.jsx";

const BASE_URL = "http://localhost:4000";

async function changePasswordRequest({ email, currentPassword, newPassword }) {
  const res = await fetch(`${BASE_URL}/api/auth/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, currentPassword, newPassword }),
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

export default function ChangePasswordForm() {
  const { user } = useUser();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  if (!user) {
    // Shouldn't normally show in dropdown if signed out, but be safe.
    return (
      <div style={{ fontSize: 12, color: "#888", marginTop: 8 }}>
        Sign in to change your password.
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess("");

    if (!currentPassword.trim() || !newPassword.trim()) {
      setError(new Error("Current and new password are required."));
      return;
    }

    if (newPassword !== confirm) {
      setError(new Error("New password and confirmation do not match."));
      return;
    }

    if (newPassword.trim().length < 8) {
      setError(
        new Error("New password must be at least 8 characters long.")
      );
      return;
    }

    try {
      setSubmitting(true);
      await changePasswordRequest({
        email: user.email,
        currentPassword,
        newPassword,
      });
      setSuccess("Password updated.");
      setCurrentPassword("");
      setNewPassword("");
      setConfirm("");
    } catch (err) {
      console.error("ChangePasswordForm error", err);
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginTop: 12,
        paddingTop: 8,
        borderTop: "1px solid #e5e7eb",
        display: "grid",
        gap: 6,
        fontSize: 12,
      }}
    >
      <div style={{ fontWeight: 600, fontSize: 13 }}>Change password</div>

      <input
        type="password"
        placeholder="Current password"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        disabled={isSubmitting}
        style={{ padding: 6, fontSize: 12 }}
      />
      <input
        type="password"
        placeholder="New password (min 8 chars)"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        disabled={isSubmitting}
        style={{ padding: 6, fontSize: 12 }}
      />
      <input
        type="password"
        placeholder="Confirm new password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        disabled={isSubmitting}
        style={{ padding: 6, fontSize: 12 }}
      />

      {error && (
        <div style={{ color: "crimson", fontSize: 11 }}>
          {String(error.message || error)}
        </div>
      )}
      {success && (
        <div style={{ color: "green", fontSize: 11 }}>{success}</div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        style={{ marginTop: 4, padding: "4px 8px", fontSize: 12 }}
      >
        {isSubmitting ? "Updating…" : "Update password"}
      </button>
    </form>
  );
}
