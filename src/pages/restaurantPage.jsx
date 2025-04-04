import { useParams } from "react-router";
import { RestaurantCardContainer } from "../components/RestaurantCard/restaurantCardContainer";
import { useRequest } from "../redux/hooks/useRequest";
import { getRestaurant } from "../redux/entities/restaurants/getRestaurant";
import { IDLE, PENDING, REJECTED } from "../constants/request-status";
import { Loader } from "../components/Loader/loader";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();
  const requestRestaurantStatus = useRequest(getRestaurant, restaurantId);

  if (requestRestaurantStatus === IDLE || requestRestaurantStatus === PENDING) {
    return <Loader text={"Loading restaurant..."} />;
  }

  if (requestRestaurantStatus === REJECTED) {
    return <Loader text={"Loading restaurant error"} />;
  }

  return <RestaurantCardContainer id={restaurantId} />;
};
