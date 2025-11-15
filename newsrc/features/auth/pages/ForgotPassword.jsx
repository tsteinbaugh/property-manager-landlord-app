import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "../SignCard.module.css";
import { useUser } from "../../../app/providers.jsx";
import React from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const { requestPasswordReset } = useUser();

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
      // Stub behavior: don't reveal existence
      if (requestPasswordReset) {
        await requestPasswordReset({ email });
      } else {
        console.log("[stub] requestPasswordReset", { email });
      }
      navigate("/sign-in?sent=1");
    } catch (err) {
      // Still navigate with generic message
      console.error(err);
      navigate("/sign-in?sent=1");
    }
  };

  return (
    <div className={css.signInContainer}>
      <form onSubmit={handleSubmit} className={css.card}>
        <h2 className={css.heading}>Forgot password</h2>
        <p className={css.subtext}>
          Enter your email and we’ll send you a reset link if an account exists.
        </p>

        <input
          className={css.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
        />

        <button type="submit" className={css.button}>
          Send reset link
        </button>
      </form>
    </div>
  );
}
