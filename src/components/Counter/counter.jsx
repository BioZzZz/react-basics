import { Button } from "../Button/button";
import styles from "./counter.module.css";

export const Counter = ({ count, onClickCallback }) => {
  return (
    <div>
      <Button onClick={onClickCallback} dataAction={"increment"}>
        +
      </Button>
      <span className={styles.span}>{count}</span>
      <Button onClick={onClickCallback} dataAction={"decrement"}>
        -
      </Button>
    </div>
  );
};
