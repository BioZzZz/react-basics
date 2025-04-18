import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { CardMenuDish } from "./cardMenuDish";

export const CardMenuDishContainer = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) {
    return null;
  }

  return <CardMenuDish dish={dish} />;
};
