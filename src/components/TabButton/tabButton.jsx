import styles from "./tabButton.module.css";
import { Button } from "../Button/button";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";

export const TabButton = ({ id, onClick, disabledId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

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
