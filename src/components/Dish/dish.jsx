"use client";

import { use } from "react";
import { DishCounter } from "../DIshCounter/dishCounter";
import styles from "./dish.module.css";
import { UserContext } from "../UserContext";

export const Dish = ({ dish }) => {
  const { user } = use(UserContext);
  const { id, name, ingredients } = dish;

  return (
    <div className={styles.item}>
      {`${name} (${ingredients.join(", ")})`}
      {user && <DishCounter id={id} />}
    </div>
  );
};
