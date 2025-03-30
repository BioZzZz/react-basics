import styles from "./tabLink.module.css";
import classNames from "classnames";
import { use } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../ThemeContext";

export const TabLink = ({ to, text, className }) => {
  const { theme } = use(ThemeContext);

  return (
    <Link
      className={classNames(styles.default, className, {
        [styles.lightTheme]: theme === "light",
        [styles.darkTheme]: theme === "dark",
      })}
      to={to}
    >
      {text}
    </Link>
  );
};
