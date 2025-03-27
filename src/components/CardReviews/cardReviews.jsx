import { CardReviewContainer } from "../CardReview/cardReviewContainer";
import styles from "./cardReviews.module.css";

export const CardReviews = ({ reviews }) => {
  return (
    <div className={styles.container}>
      <h3>Отзывы</h3>
      <div>
        {reviews.map((id) => (
          <div key={id}>
            <CardReviewContainer id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
