import { DishPage as RestaurantDishPage } from "../../../../components/pages/dishPage";

const DishPage = async ({ params }) => {
  const { dishId } = await params;

  return <RestaurantDishPage dishId={dishId} />;
};

export default DishPage;
