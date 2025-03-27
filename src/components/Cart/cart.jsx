import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";
import { CartItemContainer } from "../CartItem/cartItemContainer";
import styles from "./cart.module.css";

export const Cart = () => {
  const cartItems = useSelector(selectCartItems);

  if (!cartItems.length) {
    return null;
  }

  return (
    <div className={styles.container}>
      <h3>Корзина</h3>
      {cartItems.map(({ id }) => (
        <CartItemContainer key={id} id={id} />
      ))}
    </div>
  );
};
