import { restaurants } from "../../assets/mock.js";
import { Layout } from "../Layout/layout.jsx";
import { Menu } from "../Menu/menu.jsx";
import { RestaurantCard } from "../RestaurantCard/restaurantCard.jsx";
import { useState } from "react";

const restaurantsList = restaurants;

export const App = () => {
  let [activeRest, setActiveRest] = useState(
    <RestaurantCard restaurant={restaurantsList[0]} />
  );

  let changeActiveRest = (event) => {
    if (event.target.dataset.id === activeRest.props.restaurant.id) return;

    setActiveRest(
      <RestaurantCard
        restaurant={restaurantsList.find(
          (restaurant) => restaurant.id === event.target.dataset.id
        )}
      />
    );
  };

  return (
    <Layout>
      <Menu
        restaurantsList={restaurantsList}
        changeActiveRest={changeActiveRest}
      />
      <div>{activeRest}</div>
    </Layout>
  );
};
