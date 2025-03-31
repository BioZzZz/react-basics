import { useParams } from "react-router";
import { RestaurantCardContainer } from "../components/RestaurantCard/restaurantCardContainer";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantCardContainer id={restaurantId} />;
};
