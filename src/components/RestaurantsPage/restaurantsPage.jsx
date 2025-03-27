import { TabButton } from "../TabButton/tabButton.jsx";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../redux/entities/restaurants/slice.js";
import { RestaurantCardContainer } from "../RestaurantCard/restaurantCardContainer.jsx";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurantsIds[0]
  );

  const changeActiveRestaurant = (event) => {
    if (event.target.dataset.id === activeRestaurantId) {
      return;
    }

    setActiveRestaurantId(event.target.dataset.id);
  };

  return (
    <>
      <div>
        {restaurantsIds.map((id) => (
          <TabButton
            key={id}
            id={id}
            onClick={changeActiveRestaurant}
            disabledId={activeRestaurantId}
          />
        ))}
      </div>
      <RestaurantCardContainer id={activeRestaurantId} />
      <RestaurantCardContainer id={activeRestaurantId} />
    </>
  );
};
