import { RestaurantTab } from "../components/RestaurantTab/restaurantTab.jsx";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice.js";
import { Outlet } from "react-router";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants.js";
import { useRequest } from "../redux/hooks/useRequest.js";
import { useSelector } from "react-redux";
import { IDLE, PENDING, REJECTED } from "../constants/request-status.js";

export const RestaurantsPage = () => {
  const requestStatus = useRequest(getRestaurants);
  const restaurantsIds = useSelector(selectRestaurantsIds);

  if (requestStatus === IDLE || requestStatus === PENDING) {
    return "Loading restaurants...";
  }

  if (requestStatus === REJECTED) {
    return "Loading restaurants error";
  }

  return (
    <>
      <div>
        {restaurantsIds.map((id) => (
          <RestaurantTab key={id} id={id} />
        ))}
        <Outlet />
      </div>
    </>
  );
};
