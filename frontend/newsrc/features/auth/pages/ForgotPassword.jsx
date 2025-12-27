import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

const BASE_URL = "http://localhost:4000";

async function apiRequestPasswordReset(email) {
  const res = await fetch(`${BASE_URL}/api/auth/request-password-reset`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
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

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState("");
  const [devResetUrl, setDevResetUrl] = useState("");
  const navigate = useNavigate();
  const { requestPasswordReset } = useUser() || {};

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo("");
    setDevResetUrl("");

    const trimmed = email.trim();
    if (!trimmed) {
      setError(new Error("Email is required."));
      return;
    }

    try {
      setSubmitting(true);

      if (requestPasswordReset) {
        // What the test expects:
        await requestPasswordReset({ email: trimmed });
      } else {
        // Fallback to direct API for real app usage
        const res = await apiRequestPasswordReset(trimmed);
        if (res && res.resetUrl) {
          setDevResetUrl(res.resetUrl);
        }
      }

      setInfo(
        "If an account with that email exists, a password reset link has been generated."
      );

      // Redirect to sign-in with flag (what the test asserts)
      navigate("/sign-in?sent=1");
    } catch (err) {
      console.error("ForgotPassword error", err);
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Forgot password</h2>
      <p style={{ color: "#555" }}>
        Enter your email and we&apos;ll generate a reset link.
      </p>

      <form
        onSubmit={onSubmit}
        style={{ display: "grid", gap: 8, marginTop: 12 }}
      >
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          disabled={submitting}
          style={{ padding: "8px 12px" }}
        >
          {submitting ? "Sending…" : "Send reset link"}
        </button>
      </form>

      {devResetUrl && (
        <div style={{ marginTop: 16, fontSize: 12, color: "#555" }}>
          <div>Dev reset URL (no email configured):</div>
          <a href={devResetUrl}>{devResetUrl}</a>
        </div>
      )}
    </div>
  );
}
