import { Counter } from "../Counter/counter";
import { useReviewForm } from "./useReviewForm";
import { Button } from "../Button/button";
import styles from "./reviewForm.module.css";
import { use } from "react";
import { UserContext } from "../UserContext";

export const ReviewForm = ({ onSubmit, isSubmitDisabled }) => {
  const { text, count, setText, changeCounter, clearForm } = useReviewForm();
  const { user } = use(UserContext);

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>Оставь свой отзыв</h3>
      <div id="myForm">
        <div className={styles.group}>
          <textarea
            id="message"
            className={styles.textArea}
            name="message"
            rows="3"
            value={text}
            onChange={setText}
          ></textarea>
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Рейтинг:</label>
          <Counter count={count} onClickCallback={changeCounter} />
        </div>
        <div>
          <Button onClick={clearForm}>Clear</Button>
          <Button
            className={styles.button}
            disabled={isSubmitDisabled}
            onClick={() => {
              onSubmit({
                userId: user.id,
                text,
                rating: count,
              });
              clearForm();
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};
