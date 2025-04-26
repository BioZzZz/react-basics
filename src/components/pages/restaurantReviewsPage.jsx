"use client";

import { useContext } from "react";
import { UserContext } from "../UserContext";
import { ReviewForm } from "../ReviewForm/reviewForm";
import { CardReviews } from "../CardReviews/cardReviews";
import { useAddReviewMutation } from "../../redux/services/api";

export const RestaurantReviewsPage = ({ reviewsData, restaurantId }) => {
  const { user } = useContext(UserContext);

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const handleAddReviewSubmit = (review) => {
    addReview({ restaurantId: restaurantId, review });
  };

  return (
    <div>
      {reviewsData?.length ? <CardReviews reviews={reviewsData} /> : null}
      {user && (
        <ReviewForm
          addClearButton={true}
          formHeaderText={"Оставь отзыв"}
          onSubmit={handleAddReviewSubmit}
          isSubmitDisabled={isAddReviewLoading}
        />
      )}
    </div>
  );
};
