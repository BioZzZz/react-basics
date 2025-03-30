import { Outlet } from "react-router";
import styles from "./restaurantCard.module.css";
import { TabNavLink } from "../TabNavLink/tabNavLink";

export const RestaurantCard = ({ restaurant }) => {
  const { id, name } = restaurant;

  return (
    <div className={styles.card}>
      <div className={styles.restaurantName}>
        <h2>{name}</h2>
      </div>
      <div>
        <TabNavLink to={`/restaurants/${id}/menu`} text="Меню" />
        <TabNavLink to={`/restaurants/${id}/reviews`} text="Отзывы" />
        <Outlet />
      </div>
    </div>
  );
};
