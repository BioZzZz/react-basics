import { Link } from "react-router";
import styles from "./greeting.module.css";
import { use } from "react";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext";

export const Greeting = () => {
  const { theme } = use(ThemeContext);

  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h3>Откройте для себя вкусные блюда</h3>
        <Link
          className={classNames(styles.default, {
            [styles.lightTheme]: theme === "light",
            [styles.darkTheme]: theme === "dark",
          })}
          to="/restaurants"
        >
          К ресторанам!
        </Link>
      </div>
    </div>
  );
};
