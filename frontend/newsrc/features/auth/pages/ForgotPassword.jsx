import React, { useState } from "react";

const BASE_URL = "http://localhost:4000";

async function requestReset(email) {
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

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo("");
    setDevResetUrl("");

    if (!email.trim()) {
      setError(new Error("Email is required."));
      return;
    }

    try {
      setSubmitting(true);
      const res = await requestReset(email.trim());
      setInfo(
        "If an account with that email exists, a password reset link has been generated."
      );
      if (res && res.resetUrl) {
        setDevResetUrl(res.resetUrl);
      }
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

        <button type="submit" disabled={submitting} style={{ padding: "8px 12px" }}>
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
