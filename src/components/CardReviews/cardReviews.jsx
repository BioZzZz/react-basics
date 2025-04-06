import { CardReview } from "../CardReview/cardReview";
import styles from "./cardReviews.module.css";

export const CardReviews = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <div>
        {reviews.map(({ id, text, rating, userId }) => (
          <div key={id}>
            <CardReview id={id} userId={userId} text={text} rating={rating} />
          </div>
        ))}
      </div>
    </div>
  );
};
