"use client";

import { useContext } from "react";
import { UserContext } from "../UserContext";
import { ReviewForm } from "../ReviewForm/reviewForm";
import { CardReviews } from "../CardReviews/cardReviews";
import { Loader } from "../Loader/loader";
import {
  useGetUsersQuery,
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
} from "../../redux/services/api";

export const RestaurantReviewsPage = ({ restaurantId }) => {
  const { user } = useContext(UserContext);
  const {
    data: reviewsData,
    isFetching: reviewsIsFetching,
    isError: reviewsIsError,
  } = useGetReviewsByRestaurantIdQuery(restaurantId);

  const {
    data: usersData,
    isLoading: usersIsLoading,
    isError: usersIsError,
  } = useGetUsersQuery();

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const handleAddReviewSubmit = (review) => {
    addReview({ restaurantId: restaurantId, review });
  };

  return (
    <div>
      {reviewsIsFetching || usersIsLoading ? (
        <Loader text={"Loading reviews & users..."} />
      ) : reviewsIsError || usersIsError ? (
        <Loader text={"Loading reviews & users error"} />
      ) : reviewsData?.length ? (
        <CardReviews reviews={reviewsData} />
      ) : null}
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
