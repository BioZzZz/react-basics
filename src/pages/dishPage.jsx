import { useParams } from "react-router";
import { CardMenuDishContainer } from "../components/CardMenuDish/cardMenuDishContainer";

export const DishPage = () => {
  const { dishId } = useParams();

  return <CardMenuDishContainer id={dishId} />;
};
