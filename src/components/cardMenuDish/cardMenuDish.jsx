import { DishCounter } from "../DIshCounter/dishCounter";

export const CardMenuDish = ({ name, ingredients }) => {
  return (
    <span>
      {`${name} (${ingredients.join(", ")})`}
      <DishCounter />
    </span>
  );
};
