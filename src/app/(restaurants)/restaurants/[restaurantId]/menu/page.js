import { Suspense } from "react";
import { RestaurantMenuPage } from "../../../../../components/pages/restaurantMenuPage";
import { getDishesByRestaurantId } from "../../../../../services/get-dishes-by-restaurant-id";

const MenuPage = async ({ params }) => {
  const { restaurantId } = await params;
  const data = await getDishesByRestaurantId(restaurantId);

  return (
    <Suspense>
      <RestaurantMenuPage menu={data} />
    </Suspense>
  );
};

export default MenuPage;
