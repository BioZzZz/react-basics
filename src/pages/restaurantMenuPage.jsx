import { useSelector } from "react-redux";
import { CardMenu } from "../components/CardMenu/cardMenu";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useParams } from "react-router";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  return <CardMenu menu={menu} />;
};
