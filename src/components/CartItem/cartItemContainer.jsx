import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { CartItem } from "./cartItem";

export const CartItemContainer = ({ id }) => {
  const item = useSelector((state) => selectDishById(state, id));

  if (!item) {
    return null;
  }

  return <CartItem item={item} />;
};
