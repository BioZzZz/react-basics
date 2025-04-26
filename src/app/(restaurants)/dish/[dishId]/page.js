import { Suspense } from "react";
import { DishPage as RestaurantDishPage } from "../../../../components/pages/dishPage";
import { getDishById } from "../../../../services/get-dish-by-id";

const DishPage = async ({ params }) => {
  const { dishId } = await params;
  const data = await getDishById(dishId);

  return (
    <Suspense>
      <RestaurantDishPage dish={data} />
    </Suspense>
  );
};

export default DishPage;
