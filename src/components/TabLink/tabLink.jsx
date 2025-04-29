"use client";

import styles from "./tabLink.module.css";
import classNames from "classnames";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const TabLink = ({ href, text, className, activeExpr, styleType }) => {
  const { theme } = use(ThemeContext);
  const path = usePathname();
  const isActive = path.includes(activeExpr);

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
