import styles from "./cardReview.module.css";
import { use, useCallback, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Button } from "../Button/button";
import { ReviewForm } from "../ReviewForm/reviewForm";
import { UsersContext } from "../UsersContext";
import { editReviewAction } from "../../actions/edit-review-action";
const MAX = 5;

export const CardReview = ({ id, userId, text, rating }) => {
  const { user } = use(UserContext);
  const [edit, setEditState] = useState(false);

  const { users } = useContext(UsersContext);
  const reviewer = users.find(({ id }) => id === userId);

  const changeEditState = () => {
    setEditState(true);
  };

  const handleEditReview = useCallback(
    async (state, formData) => {
      const text = formData.get("message");
      const rating = formData.get("rating");

      const review = {
        text,
        rating,
      };

      await editReviewAction({ id, review });
      setEditState(false);

      return review;
    },
    [id]
  );

  return (
    <div>
      <div className={styles.item}>
        <span>{`${reviewer.name}: ${text} - ${rating}/${MAX}`}</span>
        {user && userId === user?.id ? (
          <Button onClick={changeEditState}>Edit</Button>
        ) : null}
      </div>
      {edit ? (
        <ReviewForm
          defaultValue={{
            text: text,
            rating: rating,
          }}
          formHeaderText={"Отредактируй отзыв"}
          submitFormAction={handleEditReview}
        />
      ) : null}
    </div>
  );
};
