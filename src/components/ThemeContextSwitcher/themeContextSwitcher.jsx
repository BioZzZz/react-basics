import { use } from "react";
import { Button } from "../Button/button";
import { ThemeContext } from "../ThemeContext";

export const ThemeContextSwitcher = () => {
  const { changeTheme } = use(ThemeContext);
  return <Button onClick={changeTheme}>{"Switch theme"}</Button>;
};
