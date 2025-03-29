import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useContext } from "react";
import { UserContext } from "../components/UserContext";
import { ReviewForm } from "../components/ReviewForm/reviewForm";
import { CardReviews } from "../components/CardReviews/cardReviews";

export const RestaurantReviewsPage = () => {
  const { user } = useContext(UserContext);
  const { restaurantId } = useParams();
  const { reviews } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return (
    <div>
      {reviews.length ? <CardReviews reviews={reviews} /> : null}
      {user && <ReviewForm />}
    </div>
  );
};
