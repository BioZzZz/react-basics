import { useSelector } from "react-redux";
import { CardMenu } from "../components/CardMenu/cardMenu";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useParams } from "react-router";
import { selectDishById } from "../redux/entities/dishes/slice";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const menuMap = menu.map((id) =>
    useSelector((state) => selectDishById(state, id))
  );

  return <CardMenu menu={menuMap} />;
};
