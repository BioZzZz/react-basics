import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { use } from "react";
import { ThemeContext } from "../ThemeContext";
import { TabNavLink } from "../TabNavLink/tabNavLink";

export const RestaurantTab = ({ id }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));
  const { theme } = use(ThemeContext);

  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return <TabNavLink to={id} text={name} />;
};
