import { restaurants } from "../../assets/mock.js";
import { TabButton } from "../TabButton/tabButton.jsx";
import { RestaurantCard } from "../RestaurantCard/restaurantCard.jsx";
import { useState } from "react";

const restaurantsList = restaurants;

export const RestaurantsPage = () => {
  const [activeRestaurant, setActiveRestaurant] = useState(restaurantsList[0]);

  const changeActiveRestaurant = (event) => {
    if (event.target.dataset.id === activeRestaurant.id) {
      return;
    }

    setActiveRestaurant(
      restaurantsList.find(
        (restaurant) => restaurant.id === event.target.dataset.id
      )
    );
  };

  return (
    <>
      <div>
        {restaurantsList.map(({ id, name }) => (
          <TabButton
            key={id}
            id={id}
            name={name}
            onClick={changeActiveRestaurant}
            disabledId={activeRestaurant.id}
          />
        ))}
      </div>
      <RestaurantCard restaurant={activeRestaurant} />
      <RestaurantCard restaurant={activeRestaurant} />
    </>
  );
};
