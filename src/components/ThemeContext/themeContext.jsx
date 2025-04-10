"use client";

import { useCallback, useState } from "react";
import { ThemeContext as ThemeContextProvider } from ".";

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = useCallback(() => {
    setTheme((theme) => {
      switch (theme) {
        case "light":
          return "dark";
        case "dark":
          return "light";
      }
    });
  }, []);

  return (
    <ThemeContextProvider value={{ theme, changeTheme }}>
      {children}
    </ThemeContextProvider>
  );
};
