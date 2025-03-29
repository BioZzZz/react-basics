import { RestaurantTab } from "../RestaurantTab/restaurantTab.jsx";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { Outlet } from "react-router";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

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
