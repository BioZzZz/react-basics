import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { getDish } from "./getDish";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.fulfilled, (state, { payload }) =>
        entityAdapter.setAll(state, payload)
      )
      .addCase(getDish.fulfilled, (state, { payload }) =>
        entityAdapter.setOne(state, payload)
      ),
});

const selectDishesSlice = (state) => state.dishesSlice;

export const { selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishesSlice);
