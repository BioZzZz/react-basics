import { use } from "react";
import { Button } from "../Button/button";
import { ThemeContext } from "../ThemeContext";

export const ThemeConstextSwitcher = () => {
  const { changeTheme } = use(ThemeContext);
  return <Button onClick={changeTheme}>{"Switch theme"}</Button>;
};
