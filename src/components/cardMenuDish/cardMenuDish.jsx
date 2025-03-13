import { Counter } from "../Counter/counter";

export const CardMenuDish = ({ name, ingredients }) => {
  return (
    <span>
      {`${name} (${ingredients.join(", ")})`}
      <Counter />
    </span>
  );
};
