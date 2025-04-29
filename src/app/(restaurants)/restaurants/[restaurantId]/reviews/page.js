import { RestaurantReviewsPage } from "../../../../../components/pages/restaurantReviewsPage";
import { UsersContext } from "../../../../../components/UsersContext/usersContext";
import { getReviewsByRestaurantId } from "../../../../../services/get-reviews-by-restaurant-id";
import { getUsers } from "../../../../../services/get-users";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  const [reviewsData, usersData] = await Promise.all([
    getReviewsByRestaurantId(restaurantId),
    getUsers(),
  ]);

  return (
    <UsersContext users={usersData}>
      <RestaurantReviewsPage
        reviewsData={reviewsData}
        restaurantId={restaurantId}
      />
    </UsersContext>
  );
};

export default ReviewsPage;
