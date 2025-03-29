import { Outlet } from "react-router";
import styles from "./restaurantCard.module.css";
import { RestaurantCardTab } from "../RestaurantCardTab/restaurentCardTab";

export const RestaurantCard = ({ restaurant, children }) => {
  const { id, name } = restaurant;

  return (
    <div className={styles.card}>
      <div className={styles.restaurantName}>
        <h2>{name}</h2>
      </div>
      <div>
        <RestaurantCardTab to={`/restaurants/${id}/menu`} name="Меню" />
        <RestaurantCardTab to={`/restaurants/${id}/reviews`} name="Отзывы" />
        <Outlet />
      </div>
    </div>
  );
};
