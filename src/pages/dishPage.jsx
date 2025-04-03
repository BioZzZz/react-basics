import { useParams } from "react-router";
import { DishContainer } from "../components/Dish/dishContainer";
import { useRequest } from "../redux/hooks/useRequest";
import { getDish } from "../redux/entities/dishes/getDish";
import { IDLE, PENDING, REJECTED } from "../constants/request-status";
import { Loader } from "../components/Loader/loader";

export const DishPage = () => {
  const { dishId } = useParams();
  const requestDishStatus = useRequest(getDish, dishId);

  if (requestDishStatus === IDLE || requestDishStatus === PENDING) {
    return <Loader text={"Loading dish..."} />;
  }

  if (requestDishStatus === REJECTED) {
    return <Loader text={"Loading dish error"} />;
  }

  return <DishContainer id={dishId} />;
};
