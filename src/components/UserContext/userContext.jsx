"use client";

import { useCallback, useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = useCallback(() => {
    setUser({ name: "Sam", id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54" });
  }, []);

  const logout = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContextProvider value={{ user, handleLogin, logout }}>
      {children}
    </UserContextProvider>
  );
};
