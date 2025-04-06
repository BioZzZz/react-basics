import { useParams } from "react-router";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { ReviewForm } from "../components/ReviewForm/reviewForm";
import { CardReviews } from "../components/CardReviews/cardReviews";
import { Loader } from "../components/Loader/loader";
import {
  useAddReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../redux/services/api";

export const RestaurantReviewsPage = () => {
  const { user } = useContext(UserContext);
  const { restaurantId } = useParams();
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
