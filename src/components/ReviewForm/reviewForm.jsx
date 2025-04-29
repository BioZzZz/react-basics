import { Button } from "../Button/button";
import styles from "./reviewForm.module.css";
import { use, useActionState, useRef } from "react";
import { UserContext } from "../UserContext";

export const ReviewForm = ({
  defaultValue,
  addClearButton,
  formHeaderText,
  submitFormAction,
}) => {
  const { user } = use(UserContext);

  const [formState, submitAction] = useActionState(
    submitFormAction,
    defaultValue || {
      text: "",
      rating: 5,
    }
  );

  const ratingRef = useRef();

  return (
    <>
      <form action={submitAction}>
        <div className={styles.container}>
          <h3 className={styles.name}>{formHeaderText}</h3>
          <div id="myForm">
            <div className={styles.group}>
              <textarea
                id="message"
                className={styles.textArea}
                name="message"
                rows="3"
                defaultValue={formState.text}
              ></textarea>
            </div>
            <div className={styles.group}>
              <label className={styles.label}>Рейтинг:</label>
              <button
                type="button"
                id="decrement-button"
                onClick={() => ratingRef.current.stepDown()}
              >
                -
              </button>
              <input
                type="number"
                id="rating"
                name="rating"
                readOnly
                min={1}
                max={5}
                ref={ratingRef}
                defaultValue={formState.rating}
              />
              <button
                type="button"
                id="increment-button"
                onClick={() => ratingRef.current.stepUp()}
              >
                +
              </button>
            </div>
            <div>
              {addClearButton ? (
                <Button type="submit" formAction={() => submitAction(null)}>
                  Clear
                </Button>
              ) : null}
              <Button type="submit">Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
