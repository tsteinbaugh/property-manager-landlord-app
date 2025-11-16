import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import css from "../SignCard.module.css";
import { useUser } from "../../../app/providers.jsx";

function AcceptInvite() {
  const [params] = useSearchParams();
  const token = params.get("token") || "";
  const emailPrefill = params.get("email") || "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState(emailPrefill);
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const navigate = useNavigate();
  const { acceptInvite } = useUser();

  useEffect(() => {
    document.body.classList.add("lockScroll");
    return () => {
      // clean up
      document.body.classList.remove("lockScroll");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("Invalid invite link.");
      return;
    }
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }
    if (!pw || pw.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }
    if (pw !== pw2) {
      alert("Passwords do not match.");
      return;
    }

    try {
      if (acceptInvite) {
        await acceptInvite({ token, name, email, password: pw });
      } else {
        // test stub path
        // eslint-disable-next-line no-console
        console.log("[stub] acceptInvite", { token, name, email });
      }
      navigate("/sign-in?accepted=1");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      alert("Invite activation failed. Your link may be invalid or expired.");
    }
  };

  return (
    <div className={css.signInContainer}>
      <form onSubmit={handleSubmit} className={css.card}>
        <h2 className={css.heading}>Finish setting up your account</h2>
        {!token && (
          <div className={css.tokenWarning}>
            Missing token. Please use the invite link we sent you.
          </div>
        )}
        <p className={css.subtext}>
          Create your password to activate your account.
        </p>

        <input
          className={css.input}
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <input
          className={css.input}
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={css.input}
          type="password"
          placeholder="Create password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          className={css.input}
          type="password"
          placeholder="Confirm password"
          value={pw2}
          onChange={(e) => setPw2(e.target.value)}
        />
        <button type="submit" className={css.button}>
          Activate account
        </button>
      </form>
    </div>
  );
}

// 🔒 make absolutely sure the default export is a function React can render
export default AcceptInvite;
