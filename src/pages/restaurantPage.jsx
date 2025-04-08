import { useParams } from "react-router";
import { Loader } from "../components/Loader/loader";
import { useGetRestaurantsQuery } from "../redux/services/api";
import { RestaurantCard } from "../components/RestaurantCard/restaurantCard";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data.find(({ id }) => id === restaurantId),
    }),
  });

  if (isLoading) {
    return <Loader text={"Loading restaurant..."} />;
  }

  if (isError) {
    return <Loader text={"Loading restaurant error"} />;
  }

  return <RestaurantCard restaurant={data} />;
};
