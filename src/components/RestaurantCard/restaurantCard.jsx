import styles from "./restaurantCard.module.css";
import { TabLink } from "../TabLink/tabLink";

export const RestaurantCard = ({ restaurant, children }) => {
  const { id, name } = restaurant;

  return (
    <div className={styles.card}>
      <div className={styles.restaurantName}>
        <h2>{name}</h2>
      </div>
      <div>
        <TabLink
          href={`/restaurants/${id}/menu`}
          text={"Меню"}
          activeExpr={"/menu"}
          styleType={"button"}
        />
        <TabLink
          href={`/restaurants/${id}/reviews`}
          text={"Отзывы"}
          activeExpr={"/reviews"}
          styleType={"button"}
        />
        {children}
      </div>
    </div>
  );
};
