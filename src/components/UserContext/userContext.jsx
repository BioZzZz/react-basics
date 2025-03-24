import { useCallback, useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = useCallback(() => {
    setUser("Denis");
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
