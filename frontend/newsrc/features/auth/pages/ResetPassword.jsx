import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../../app/providers.jsx";

const BASE_URL = "http://localhost:4000";

// Fallback API helper if no context resetPassword is provided (e.g. outside tests)
async function apiResetPassword({ token, password }) {
  const res = await fetch(`${BASE_URL}/api/auth/reset-password`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword: password }),
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

  return payload || { ok: true };
}

function useQueryToken() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return params.get("token") || "";
}

export default function ResetPassword() {
  const navigate = useNavigate();
  const token = useQueryToken();
  const { resetPassword } = useUser() || {};

  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo("");

    if (!token) {
      setError(new Error("Missing or invalid reset token."));
      return;
    }

    if (!newPassword.trim()) {
      setError(new Error("New password is required."));
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

      // Test expects this exact shape: { token, password }
      if (resetPassword) {
        await resetPassword({ token, password: newPassword });
      } else {
        await apiResetPassword({ token, password: newPassword });
      }

      // Clear fields and navigate with reset flag (what the test asserts)
      setNewPassword("");
      setConfirm("");
      setInfo("Password updated. You can now sign in.");
      navigate("/sign-in?reset=1");
    } catch (err) {
      console.error("ResetPassword error", err);
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  const goToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Reset password</h2>

      {!token && (
        <div style={{ color: "crimson", marginBottom: 12 }}>
          This reset link is missing a token. Please use the link from your
          email.
        </div>
      )}

      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 8, marginTop: 12 }}
      >
        <input
          type="password"
          placeholder="New password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          disabled={submitting}
          style={{ padding: 8 }}
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          disabled={submitting}
          style={{ padding: 8 }}
        />

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
          disabled={submitting || !token}
          style={{ padding: "8px 12px" }}
        >
          {submitting ? "Updating…" : "Update password"}
        </button>
      </form>

      <button
        type="button"
        onClick={goToSignIn}
        style={{ marginTop: 12, padding: "6px 10px" }}
      >
        Back to sign-in
      </button>
    </div>
  );
}
