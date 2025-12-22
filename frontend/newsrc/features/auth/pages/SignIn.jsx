import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import css from "../SignInCard.module.css";
import buttonCss from "../../../shared/styles/Buttons.module.css"; // if you have it
import React from "react";

import { useUser } from "../../../app/providers.jsx";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { signIn } = useUser();

  // lock scroll while mounted
  useEffect(() => {
    document.body.classList.add("lockScroll");
    return () => document.body.classList.remove("lockScroll");
  }, []);

  const justReset = params.get("reset") === "1";
  const emailSent = params.get("sent") === "1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }

    try {
      // Stub: call your real auth later
      if (signIn) {
        await signIn({ username, password });
      } else {
        console.log("[stub] signIn", { username, password });
      }
      navigate("/dashboard");
    } catch (err) {
      alert("Sign in failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className={css.signInContainer}>
      <form onSubmit={handleSubmit} className={css.card}>
        <h2 className={css.heading}>Welcome</h2>
        <p className={css.subtext}>Sign in to manage your properties</p>

        {justReset && (
          <div className={css.tokenWarning}>
            Your password has been reset. Please sign in with your new password.
          </div>
        )}
        {emailSent && (
          <div className={css.tokenWarning}>
            If an account exists for that email, we’ve sent a reset link.
          </div>
        )}

        <input
          className={css.input}
          type="text"
          placeholder="Email or username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <input
          className={css.input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className={css.actions}>
          <Link className={css.link} to="/forgot-password">
            Forgot password?
          </Link>
          {/* No "Create account" link — onboarding is controlled by Admin */}
        </div>

        <button type="submit" className={buttonCss?.primaryButton || css.button}>
          Sign In
        </button>

        <p className={css.note}>
          Need access? Contact your system administrator.
        </p>
      </form>
    </div>
  );
}
