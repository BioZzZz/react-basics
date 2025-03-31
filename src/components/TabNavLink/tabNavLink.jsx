import styles from "./tabNavLink.module.css";
import classNames from "classnames";
import { use } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../ThemeContext";

export const TabNavLink = ({ to, text, className }) => {
  const { theme } = use(ThemeContext);

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.default, className, {
          [styles.lightTheme]: theme === "light",
          [styles.darkTheme]: theme === "dark",
          [styles.isActive]: isActive,
        })
      }
      to={to}
    >
      {text}
    </NavLink>
  );
};
