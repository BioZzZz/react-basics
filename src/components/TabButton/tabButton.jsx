import styles from "./tabButton.module.css";
import { Button } from "../Button/button";

export const TabButton = ({ id, name, onClick, disabledId }) => {
  return (
    <Button
      onClick={onClick}
      dataId={id}
      className={styles.tabButton}
      disabled={id === disabledId}
    >
      {name}
    </Button>
  );
};
