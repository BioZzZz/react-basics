import { Counter } from "../Counter/counter";
import { useReviewForm } from "./useReviewForm";
import { Button } from "../Button/button";
import styles from "./reviewForm.module.css";

export const ReviewForm = () => {
  const { name, text, count, setName, setText, changeCounter, clearForm } =
    useReviewForm();

  return (
    <div className={styles.container}>
      <h3 className={styles.name}>Оставь свой отзыв</h3>
      <div id="myForm">
        <div className={styles.group}>
          <label className={styles.label}> Имя:</label>
          <input className={styles.input} value={name} onChange={setName} />
        </div>
        <div className={styles.group}>
          <label className={styles.label}>Отзыв:</label>
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
        <Button onClick={clearForm}>Clear</Button>
      </div>
    </div>
  );
};
