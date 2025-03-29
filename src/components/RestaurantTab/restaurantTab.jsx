import styles from "./restaurantTab.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { NavLink } from "react-router";
import { use } from "react";
import classNames from "classnames";
import { ThemeContext } from "../ThemeContext";

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { theme } = use(ThemeContext);

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.default, {
          [styles.lightTheme]: theme === "light",
          [styles.darkTheme]: theme === "dark",
          [styles.isActive]: isActive,
        })
      }
      to={id}
    >
      {name}
    </NavLink>
  );
};
