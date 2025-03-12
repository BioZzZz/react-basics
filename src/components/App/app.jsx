import { restaurants } from "../../assets/mock.js";
import { Layout } from "../Layout/layout.jsx";
import { Menu } from "../Menu/menu.jsx";
import { RestaurantCard } from "../RestaurantCard/restaurantCard.jsx";

const restaurantsList = restaurants;

export const App = () => {
  return (
    <Layout>
      <Menu restaurantsList={restaurantsList} />
      {restaurantsList.map((rest, index) => {
        return <RestaurantCard restaurant={rest} index={index} />;
      })}
    </Layout>
  );
};
