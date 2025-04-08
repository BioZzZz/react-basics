import styles from "./cardReview.module.css";
import {
  useEditReviewMutation,
  useGetUsersQuery,
} from "../../redux/services/api";
import { use, useState } from "react";
import { UserContext } from "../UserContext";
import { Button } from "../Button/button";
import { ReviewForm } from "../ReviewForm/reviewForm";
const MAX = 5;

export const CardReview = ({ id, userId, text, rating }) => {
  const { user } = use(UserContext);
  const [edit, setEditState] = useState(false);
  const { data } = useGetUsersQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data.find(({ id }) => id === userId),
    }),
  });

  const changeEditState = () => {
    setEditState(true);
  };

  const [editReview, { isLoading: isEditReviewLoading }] =
    useEditReviewMutation();

  const handleEditReviewSubmit = (review) => {
    editReview({ reviewId: id, review });
    setEditState(false);
  };

  return (
    <div>
      <div className={styles.item}>
        <span>{`${data.name}: ${text} - ${rating}/${MAX}`}</span>
        {user && userId === user?.id ? (
          <Button onClick={changeEditState}>Edit</Button>
        ) : null}
      </div>
      {edit ? (
        <ReviewForm
          defaultValue={{
            text: text,
            count: rating,
          }}
          formHeaderText={"Отредактируй отзыв"}
          onSubmit={handleEditReviewSubmit}
          isSubmitDisabled={isEditReviewLoading}
        />
      ) : null}
    </div>
  );
};
