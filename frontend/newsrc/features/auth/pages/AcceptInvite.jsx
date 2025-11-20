import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:4000";

function useQueryToken() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return params.get("token") || "";
}

async function fetchInviteInfo(token) {
  const res = await fetch(`${BASE_URL}/api/auth/invite/${encodeURIComponent(token)}`);
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

async function acceptInvite({ token, name, password }) {
  const res = await fetch(`${BASE_URL}/api/auth/accept-invite`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, name, password }),
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

export default function AcceptInvite() {
  const token = useQueryToken();
  const navigate = useNavigate();

  const [inviteInfo, setInviteInfo] = useState(null);
  const [loading, setLoading] = useState(!!token);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [info, setInfo] = useState("");

  useEffect(() => {
    if (!token) {
      setLoading(false);
      setError(new Error("Missing invite token."));
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const payload = await fetchInviteInfo(token);
        if (!cancelled) {
          setInviteInfo(payload);
        }
      } catch (e) {
        console.error("AcceptInvite fetch error", e);
        if (!cancelled) {
          setError(e);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setInfo("");

    if (!token) {
      setError(new Error("Missing invite token."));
      return;
    }

    if (!password.trim()) {
      setError(new Error("Password is required."));
      return;
    }

    if (password !== confirm) {
      setError(new Error("Password and confirmation do not match."));
      return;
    }

    if (password.trim().length < 8) {
      setError(
        new Error("Password must be at least 8 characters long.")
      );
      return;
    }

    try {
      setSubmitting(true);
      await acceptInvite({ token, name: name.trim() || undefined, password });
      setInfo("Your account has been activated. You can now sign in.");
      setPassword("");
      setConfirm("");
    } catch (err) {
      console.error("AcceptInvite submit error", err);
      setError(err);
    } finally {
      setSubmitting(false);
    }
  };

  const goToSignIn = () => {
    navigate("/sign-in");
  };

  return (
    <div style={{ maxWidth: 420, margin: "40px auto" }}>
      <h2>Accept invite</h2>

      {loading && <div>Validating invite…</div>}

      {!loading && error && (
        <div style={{ color: "crimson", marginBottom: 12 }}>
          {String(error.message || error)}
        </div>
      )}

      {!loading && !error && (
        <>
          <p style={{ color: "#555" }}>
            {inviteInfo?.email ? (
              <>
                You&apos;ve been invited with email{" "}
                <strong>{inviteInfo.email}</strong>.
              </>
            ) : (
              "You have been invited to MyHaven."
            )}
          </p>

          <form
            onSubmit={onSubmit}
            style={{ display: "grid", gap: 8, marginTop: 12 }}
          >
            <input
              type="text"
              placeholder="Your name (optional)"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
              style={{ padding: 8 }}
            />
            <input
              type="password"
              placeholder="Choose a password (min 8 chars)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={submitting}
              style={{ padding: 8 }}
            />
            <input
              type="password"
              placeholder="Confirm password"
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
              disabled={submitting}
              style={{ padding: "8px 12px" }}
            >
              {submitting ? "Activating…" : "Activate account"}
            </button>
          </form>

          <button
            type="button"
            onClick={goToSignIn}
            style={{ marginTop: 12, padding: "6px 10px" }}
          >
            Go to sign-in
          </button>
        </>
      )}
    </div>
  );
}
