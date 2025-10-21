import React, { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
  const [role, setRole] = useState(null); // 'landlord' | 'manager' | null
  const [user, setUser] = useState({
    name: "Taylor Steinbaugh",
    email: "taylor@example.com",
    avatarUrl: "", // set a URL if you have one
  });

  const signOut = () => {
    // TODO: plug in real sign-out later (clear tokens, etc.)
    setUser(null);
    setRole(null);
  };

  const value = useMemo(() => ({ role, setRole, user, setUser, signOut }), [role, user]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useUser() {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within a UserProvider");
  return ctx;
}
