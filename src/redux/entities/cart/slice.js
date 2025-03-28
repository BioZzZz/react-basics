import { createSlice } from "@reduxjs/toolkit";

export const cartSclice = createSlice({
  name: "cartSlice",
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },

    removeFromCart: (state, { payload }) => {
      if (!state[payload]) {
        return state;
      }

      state[payload] -= 1;

      if (state[payload] === 0) {
        delete state[payload];
      }
    },
  },
  selectors: {
    selectCartItems: (state) => {
      return Object.keys(state).reduce((acc, id) => {
        acc.push({ id, amount: state[id] });

        return acc;
      }, []);
    },
    selectCartItemAmountById: (state, id) => state[id],
  },
});

export const { selectCartItems, selectCartItemAmountById } =
  cartSclice.selectors;
export const { addToCart, removeFromCart } = cartSclice.actions;
