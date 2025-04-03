import { useParams } from "react-router";
import { RestaurantCardContainer } from "../components/RestaurantCard/restaurantCardContainer";
import { useRequest } from "../redux/hooks/useRequest";
import { getRestaurant } from "../redux/entities/restaurants/getRestaurant";
import { IDLE, PENDING, REJECTED } from "../constants/request-status";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestRestaurantStatus = useRequest(getRestaurant, restaurantId);

  if (requestRestaurantStatus === IDLE || requestRestaurantStatus === PENDING) {
    return <div>Loading restaurant...</div>;
  }

  if (requestRestaurantStatus === REJECTED) {
    return <div>Loading restaurant error</div>;
  }

  return <RestaurantCardContainer id={restaurantId} />;
};
