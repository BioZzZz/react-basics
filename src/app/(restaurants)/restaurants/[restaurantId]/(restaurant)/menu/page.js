import { RestaurantMenuPage } from "../../../../../../components/pages/restaurantMenuPage";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  return <RestaurantMenuPage restaurantId={restaurantId} />;
};

export default MenuPage;
