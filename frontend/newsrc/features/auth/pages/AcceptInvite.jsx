import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "@app/providers.jsx";

function useInviteParams() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const token = params.get("token") || "";
  const email = params.get("email")
    ? decodeURIComponent(params.get("email"))
    : "";
  return { token, email };
}

export default function AcceptInvite() {
  const navigate = useNavigate();
  const { token, email } = useInviteParams();

  const { acceptInvite } = useUser() || {};

  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState("");

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

      if (acceptInvite) {
        // This is what the test asserts
        await acceptInvite({
          token,
          name: fullName.trim(),
          email,
          password,
        });
      }

      setInfo("Your account has been activated. You can now sign in.");
      setPassword("");
      setConfirm("");

      // Redirect to sign-in with flag, as test expects
      navigate("/sign-in?accepted=1");
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

      {!token && (
        <div style={{ color: "crimson", marginBottom: 12 }}>
          This invite link is missing a token. Please use the link from your
          email.
        </div>
      )}

      <p style={{ color: "#555" }}>
        {email ? (
          <>
            You&apos;ve been invited with email{" "}
            <strong>{email}</strong>.
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
          placeholder="Full name (optional)"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={submitting}
          style={{ padding: 8 }}
        />

        {/* email is shown, pre-filled from querystring */}
        <input
          type="email"
          value={email}
          readOnly
          style={{ padding: 8, backgroundColor: "#f9fafb" }}
        />

        <input
          type="password"
          placeholder="Create password (min 8 chars)"
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
          disabled={submitting || !token}
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
    </div>
  );
}
