import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { ReviewForm } from "../components/ReviewForm/reviewForm";
import { CardReviews } from "../components/CardReviews/cardReviews";
import { getReviews } from "../redux/entities/reviews/getReviews";
import { useRequest } from "../redux/hooks/useRequest";
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from "../constants/request-status";
import { getUsers } from "../redux/entities/users/getUsers";

export const RestaurantReviewsPage = () => {
  const { user } = useContext(UserContext);
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestReviewsStatus = useRequest(getReviews, restaurantId);
  const requestUsersStatus = useRequest(getUsers);

  if (
    requestReviewsStatus === IDLE ||
    requestReviewsStatus === IDLE ||
    requestUsersStatus === PENDING ||
    requestUsersStatus === PENDING
  ) {
    return <div>Loading reviews & users...</div>;
  }

  if (requestReviewsStatus === REJECTED || requestUsersStatus === REJECTED) {
    return <div>Loading reviews & users error</div>;
  }

  return (
    <div>
      {reviews.length ? <CardReviews reviews={reviews} /> : null}
      {user && <ReviewForm />}
    </div>
  );
};
