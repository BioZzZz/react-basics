import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantCard } from "./restaurantCard";

export const RestaurantCardContainer = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) {
    return null;
  }

  return <RestaurantCard restaurant={restaurant} />;
};
