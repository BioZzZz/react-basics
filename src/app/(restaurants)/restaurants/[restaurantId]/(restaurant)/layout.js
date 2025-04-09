import { RestaurantsSubPagesLayout } from "../../../../../components/pages/restaurantSubPagesLayout";

const RestaurantLayout = async ({ params, children }) => {
  const { restaurantId } = await params;
  return (
    <RestaurantsSubPagesLayout
      restaurantId={restaurantId}
      children={children}
    />
  );
};

export default RestaurantLayout;
