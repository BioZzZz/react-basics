import styles from "./tabLink.module.css";
import classNames from "classnames";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";
import Link from "next/link";

export const TabLink = ({ href, text, className, isActive, styleType }) => {
  const { theme } = use(ThemeContext);

  return (
    <Link
      className={classNames(styles.default, className, {
        [styles.button]: styleType === "button",
        [styles.link]: styleType === "link",
        [styles.lightTheme]: theme === "light",
        [styles.darkTheme]: theme === "dark",
        [styles.isActive]: isActive,
      })}
      href={href}
    >
      {text}
    </Link>
  );
};
