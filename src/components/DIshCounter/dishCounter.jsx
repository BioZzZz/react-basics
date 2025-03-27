import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../Counter/counter";
import {
  addToCart,
  removeFromCart,
  selectCartItemAmountById,
} from "../../redux/entities/cart/slice";
import { useCallback } from "react";

export const DishCounter = ({ id }) => {
  const value =
    useSelector((state) => selectCartItemAmountById(state, id)) || 0;

  const dispatch = useDispatch();

  const changeCounter = useCallback(
    (event) => {
      switch (event.target.dataset.action) {
        case "increment":
          dispatch(addToCart(id));
          break;
        case "decrement":
          dispatch(removeFromCart(id));
      }
    },
    [dispatch, id]
  );

  return <Counter count={value} onClickCallback={changeCounter} />;
};
