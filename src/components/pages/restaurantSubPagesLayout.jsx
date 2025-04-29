import { getRestaurants } from "../../services/get-restaurants";
import { RestaurantCard } from "../RestaurantCard/restaurantCard";

export const RestaurantsSubPagesLayout = async ({ restaurantId, children }) => {
  const data = await getRestaurants();

  const restaurant = data.find(({ id }) => id === restaurantId);

  if (!restaurant) {
    return null;
  }

  return <RestaurantCard restaurant={restaurant}>{children}</RestaurantCard>;
};
