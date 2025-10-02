import React, { useRef, useState, useEffect } from "react";
import styles from "./AvatarMenu.module.css";
import { useUser } from "../../context/UserContext";

export default function AvatarMenu() {
  const { user, signOut } = useUser();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const initials = (user?.name || user?.email || "?")
    .split(" ")
    .map((s) => s[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <button className={styles.avatarBtn} onClick={() => setOpen((v) => !v)} aria-haspopup="menu" aria-expanded={open}>
        <span className={styles.avatarCircle}>
          {user?.avatarUrl ? (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img src={user.avatarUrl} width="28" height="28" />
          ) : (
            <span style={{
              fontSize: 12,
              display: "inline-flex",
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              color: "#111827"
            }}>
              {initials}
            </span>
          )}
        </span>
        <span style={{ fontSize: 14, color: "#374151" }}>{user?.name || user?.email || "Signed out"}</span>
      </button>

      {open && (
        <div className={styles.menu} role="menu">
          <button className={styles.item} role="menuitem" onClick={() => alert("Profile clicked")}>
            Profile
          </button>
          <button className={styles.item} role="menuitem" onClick={() => alert("Settings clicked")}>
            Settings
          </button>
          <hr style={{ border: 0, borderTop: "1px solid #eee", margin: "6px 0" }} />
          <button className={styles.item} role="menuitem" onClick={signOut}>
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
