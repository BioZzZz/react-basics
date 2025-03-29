import { NavLink } from "react-router";
import styles from "./restaurantCardTab.module.css";
import classNames from "classnames";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";

export const RestaurantCardTab = ({ to, name }) => {
  const { theme } = use(ThemeContext);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        classNames(styles.default, {
          [styles.lightTheme]: theme === "light",
          [styles.darkTheme]: theme === "dark",
          [styles.isActive]: isActive,
        })
      }
    >
      {name}
    </NavLink>
  );
};
