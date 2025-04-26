"use client";

import { UsersContext as UsersContextProvider } from ".";

export const UsersContext = ({ children, users }) => {
  return (
    <UsersContextProvider value={{ users }}>{children}</UsersContextProvider>
  );
};
