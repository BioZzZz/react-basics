import { getDishById } from "../../../../services/get-dish-by-id";
import { Dish } from "../../../../components/Dish/dish";

const DishPage = async ({ params }) => {
  const { dishId } = await params;
  const data = await getDishById(dishId);

  return <Dish dish={data} />;
};

export default DishPage;
