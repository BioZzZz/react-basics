import { RestaurantReviewsPage } from "../../../../../../components/pages/restaurantReviewsPage";

const ReviewsPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <RestaurantReviewsPage restaurantId={restaurantId} />;
};

export default ReviewsPage;
