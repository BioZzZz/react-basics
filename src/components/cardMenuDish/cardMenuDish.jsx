import { use } from "react";
import { DishCounter } from "../DIshCounter/dishCounter";
import { UserContext } from "../UserContext";
import styles from "./cardMenuDish.module.css";

export const CardMenuDish = ({ dish }) => {
  const { user } = use(UserContext);
  const { id, name, ingredients } = dish;

  return (
    <div className={styles.item}>
      {`${name} (${ingredients.join(", ")})`}
      {user && <DishCounter id={id} />}
    </div>
  );
};
