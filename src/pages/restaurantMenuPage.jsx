import { CardMenu } from "../components/CardMenu/cardMenu";
import { useParams } from "react-router";
import { Loader } from "../components/Loader/loader";
import { useGetDishesByRestaurantIdQuery } from "../redux/services/api";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Loader text={"Loading dishes..."} />;
  }

  if (isError) {
    return <Loader text={"Loading dishes error"} />;
  }

  return <CardMenu menu={data} />;
};
