import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";

export const Button = ({
  children,
  onClick,
  dataId,
  disabled,
  className,
  dataAction,
}) => {
  const { theme } = use(ThemeContext);
  return (
    <button
      onClick={onClick}
      data-id={dataId}
      data-action={dataAction}
      disabled={disabled}
      className={classNames(styles.default, className, {
        [styles.lightTheme]: theme === "light",
        [styles.darkTheme]: theme === "dark",
        [styles.disabled]: disabled,
      })}
    >
      {children}
    </button>
  );
};
