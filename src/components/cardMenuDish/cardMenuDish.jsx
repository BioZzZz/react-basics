import { use } from "react";
import { DishCounter } from "../DIshCounter/dishCounter";
import { UserContext } from "../UserContext";

export const CardMenuDish = ({ name, ingredients }) => {
  const { user } = use(UserContext);

  return (
    <span>
      {`${name} (${ingredients.join(", ")})`}
      {user && <DishCounter />}
    </span>
  );
};
