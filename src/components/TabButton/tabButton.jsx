import styles from "./tabButton.module.css";
import { Button } from "../Button/button";

export const TabButton = ({ id, name, callbackFunc, disabledId }) => {
  return (
    <Button
      onClick={callbackFunc}
      dataId={id}
      className={styles.tabButton}
      disabled={id === disabledId}
    >
      {name}
    </Button>
  );
};
