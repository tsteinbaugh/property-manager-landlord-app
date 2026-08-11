import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./SignIn.module.css";
import buttonStyles from "../styles/Buttons.module.css";

export default function SignIn({ setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔒 Lock page scroll while this page is mounted
  useEffect(() => {
    document.body.classList.add("lockScroll");
    return () => document.body.classList.remove("lockScroll");
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please enter both username and password.");
      return;
    }
    setRole("landlord");
    navigate("/dashboard");
  };

  return (
    <div className={styles.signInContainer}>
      <form onSubmit={handleSignIn} className={styles.card}>
        <h2 className={styles.heading}>Welcome</h2>
        <p className={styles.subtext}>Sign in to manage your properties</p>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />

        <button type="submit" className={buttonStyles.primaryButton}>
          Sign In
        </button>
      </form>
    </div>
  );
}
