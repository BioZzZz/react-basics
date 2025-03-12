import { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount(++count);
  };

  let decrement = () => {
    setCount(--count);
  };

  return (
    <div>
      <button onClick={increment}>+</button>
      {count}
      <button onClick={decrement}>-</button>
    </div>
  );
};
