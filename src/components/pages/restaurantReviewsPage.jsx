"use client";

import { useCallback, useContext, useOptimistic, useRef } from "react";
import { UserContext } from "../UserContext";
import { ReviewForm } from "../ReviewForm/reviewForm";
import { CardReviews } from "../CardReviews/cardReviews";
import { addReviewAction } from "../../actions/add-review-action";

export const RestaurantReviewsPage = ({ reviewsData, restaurantId }) => {
  const { user } = useContext(UserContext);
  const formDefaultState = { text: "", rating: 5 };
  const [optimisticReview, addOptimisicReview] = useOptimistic(
    reviewsData,
    (currentState, opmisticValue) => [
      ...currentState,
      { id: "new", ...opmisticValue },
    ]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return formDefaultState;
      }

      const text = formData.get("message");
      const rating = formData.get("rating");

      const review = {
        text,
        rating,
        userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
      };

      addOptimisicReview(review);

      await addReviewAction({ restaurantId, review });

      return formDefaultState;
    },
    [restaurantId, addOptimisicReview]
  );

  return (
    <div>
      {optimisticReview?.length ? (
        <CardReviews reviews={optimisticReview} />
      ) : null}
      {user && (
        <ReviewForm
          addClearButton={true}
          formHeaderText={"Оставь отзыв"}
          submitFormAction={handleAddReview}
        />
      )}
    </div>
  );
};
