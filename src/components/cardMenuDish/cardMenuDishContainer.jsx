import { useSelector } from "react-redux";
import { CardMenuDish } from "./cardMenuDish";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const CardMenuDishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <CardMenuDish dish={dish} />;
};
