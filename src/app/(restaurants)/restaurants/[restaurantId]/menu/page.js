import { RestaurantMenuPage } from "../../../../../components/pages/restaurantMenuPage";
import { getDishesByRestaurantId } from "../../../../../services/get-dishes-by-restaurant-id";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  const data = await getDishesByRestaurantId(restaurantId);

  return <RestaurantMenuPage menu={data} />;
};

export default MenuPage;
