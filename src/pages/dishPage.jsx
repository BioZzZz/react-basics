import { useParams } from "react-router";
import { DishContainer } from "../components/Dish/dishContainer";
import { useRequest } from "../redux/hooks/useRequest";
import { getDish } from "../redux/entities/dishes/getDish";
import { IDLE, PENDING, REJECTED } from "../constants/request-status";

export const DishPage = () => {
  const { dishId } = useParams();
  const requestDishStatus = useRequest(getDish, dishId);

  if (requestDishStatus === IDLE || requestDishStatus === PENDING) {
    return <div>Loading dish...</div>;
  }

  if (requestDishStatus === REJECTED) {
    return <div>Loading dish error</div>;
  }

  return <DishContainer id={dishId} />;
};
