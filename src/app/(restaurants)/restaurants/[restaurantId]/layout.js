import { RestaurantsSubPagesLayout } from "../../../../components/pages/restaurantSubPagesLayout";
import { getRestaurants } from "../../../../services/get-restaurants";

const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;
  return (
    <RestaurantsSubPagesLayout restaurantId={restaurantId}>
      {children}
    </RestaurantsSubPagesLayout>
  );
};

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;
  const data = await getRestaurants();

  const restaurant = data.find(({ id }) => id === restaurantId);

  return {
    title: restaurant.name,
  };
};

export default RestaurantLayout;
