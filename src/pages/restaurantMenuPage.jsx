import { useSelector } from "react-redux";
import { CardMenu } from "../components/CardMenu/cardMenu";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useParams } from "react-router";
import { useRequest } from "../redux/hooks/useRequest";
import { getDishes } from "../redux/entities/dishes/getDishes";
import { IDLE, PENDING, REJECTED } from "../constants/request-status";

export const RestaurantMenuPage = () => {
  const { restaurantId } = useParams();
  const { menu } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  const requestDishesStatus = useRequest(getDishes, restaurantId);

  if (requestDishesStatus === IDLE || requestDishesStatus === PENDING) {
    return <div>Loading dishes...</div>;
  }

  if (requestDishesStatus === REJECTED) {
    return <div>Loading dishes error</div>;
  }

  return <CardMenu menu={menu} />;
};
