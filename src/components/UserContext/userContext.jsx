import { useCallback, useState } from "react";
import { UserContext as UserContextProvider } from ".";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginFunction = useCallback(() => {
    setUser("Denis");
  }, []);

  const logoutFunction = useCallback(() => {
    setUser(null);
  }, []);

  return (
    <UserContextProvider value={{ user, loginFunction, logoutFunction }}>
      {children}
    </UserContextProvider>
  );
};
