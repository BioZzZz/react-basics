import styles from "./restaurantCard.module.css";
import { TabLink } from "../TabLink/tabLink";
import { usePathname } from "next/navigation";

export const RestaurantCard = ({ restaurant, children }) => {
  const { id, name } = restaurant;
  const path = usePathname();

  return (
    <div className={styles.card}>
      <div className={styles.restaurantName}>
        <h2>{name}</h2>
      </div>
      <div>
        <TabLink
          href={`/restaurants/${id}/menu`}
          text={"Меню"}
          isActive={path.includes("/menu")}
          styleType={"button"}
        />
        <TabLink
          href={`/restaurants/${id}/reviews`}
          text={"Отзывы"}
          isActive={path.includes("/reviews")}
          styleType={"button"}
        />
        {children}
      </div>
    </div>
  );
};
