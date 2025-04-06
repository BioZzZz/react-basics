import { CartItem } from "./cartItem";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const CartItemContainer = ({ id }) => {
  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  if (isLoading || isError) {
    return null;
  }

  return <CartItem item={data} />;
};
