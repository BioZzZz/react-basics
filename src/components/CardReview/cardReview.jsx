import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/slice";
import styles from "./cardReview.module.css";
const MAX = 5;

export const CardReview = ({ review }) => {
  const { userId, text, rating } = review;
  const { name } = useSelector((state) => selectUserById(state, userId));

  return (
    <div className={styles.item}>{`${name}: ${text} - ${rating}/${MAX}`}</div>
  );
};
