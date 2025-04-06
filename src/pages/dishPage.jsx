import { useParams } from "react-router";
import { Loader } from "../components/Loader/loader";
import { useGetDishByIdQuery } from "../redux/services/api";
import { Dish } from "../components/Dish/dish";

export const DishPage = () => {
  const { dishId } = useParams();
  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Loader text={"Loading dish..."} />;
  }

  if (isError) {
    return <Loader text={"Loading dish error"} />;
  }

  return <Dish dish={data} />;
};
