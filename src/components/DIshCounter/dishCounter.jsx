import { Counter } from "../Counter/counter";
import { useState, useCallback } from "react";

const MIN = 0;
const MAX = 5;

export const DishCounter = () => {
  const [count, setCount] = useState(0);

  const changeCounter = useCallback(
    (event) => {
      switch (event.target.dataset.action) {
        case "increment":
          setCount(Math.min(MAX, count + 1));
          break;
        case "decrement":
          setCount(Math.max(MIN, count - 1));
      }
    },
    [MIN, MAX]
  );

  return <Counter count={count} onClickCallback={changeCounter} />;
};
