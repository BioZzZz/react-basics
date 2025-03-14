import { useState } from "react";

const MIN = 0;
const MAX = 5;

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < MAX) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > MIN) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};
