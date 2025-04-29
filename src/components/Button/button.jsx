import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";
import { useFormStatus } from "react-dom";

export const Button = ({
  children,
  onClick,
  dataId,
  disabled,
  className,
  dataAction,
  formAction,
}) => {
  const { theme } = use(ThemeContext);
  const { pending } = useFormStatus();

  return (
    <button
      onClick={onClick}
      formAction={formAction}
      data-id={dataId}
      data-action={dataAction}
      disabled={disabled}
      className={classNames(styles.default, className, {
        [styles.lightTheme]: theme === "light",
        [styles.darkTheme]: theme === "dark",
        [styles.disabled]: disabled || pending,
      })}
    >
      {children}
    </button>
  );
};
