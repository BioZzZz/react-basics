import styles from "./cardReview.module.css";
import { useGetUsersQuery } from "../../redux/services/api";
const MAX = 5;

export const CardReview = ({ userId, text, rating }) => {
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data.find(({ id }) => id === userId),
    }),
  });

  return (
    <div
      className={styles.item}
    >{`${data.name}: ${text} - ${rating}/${MAX}`}</div>
  );
};
