import { use } from "react";
import { DishCounter } from "../DIshCounter/dishCounter";
import { UserContext } from "../UserContext";
import styles from "./cartItem.module.css";

export const CartItem = ({ item }) => {
  const { id, name } = item;
  const { user } = use(UserContext);

  return (
    <div className={styles.item}>
      {name}
      {user && <DishCounter id={id} />}
    </div>
  );
};
