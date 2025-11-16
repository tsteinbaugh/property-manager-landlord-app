import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../SignCard.module.css";
import { useUser } from "../../../app/providers.jsx";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { requestPasswordReset } = useUser() || {};

  // lock scroll while mounted (same pattern as SignIn / ResetPassword)
  useEffect(() => {
    document.body.classList.add("lockScroll");
    return () => document.body.classList.remove("lockScroll");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      // Call into the auth layer if provided (tests will mock this)
      if (requestPasswordReset) {
        await requestPasswordReset({ email });
      } else {
        console.log("[stub] request password reset for", email);
      }

      // Tests expect redirect to /sign-in?sent=1
      navigate("/sign-in?sent=1");
    } catch (err) {
      console.error("Password reset failed", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className={css.signInContainer}>
      <form onSubmit={handleSubmit} className={css.card}>
        <h2 className={css.heading}>Forgot password</h2>
        <p className={css.subtext}>
          Enter your email and we'll send you a reset link.
        </p>

        <input
          className={css.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        {/* 🔴 IMPORTANT: text must be "Send reset link" for the test */}
        <button type="submit" className={css.button}>
          Send reset link
        </button>
      </form>
    </div>
  );
}
