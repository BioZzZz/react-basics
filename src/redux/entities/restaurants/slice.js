import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";
import { getRestaurant } from "./getRestaurant";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurantsSlice",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.fulfilled, (state, { payload }) =>
        entityAdapter.setAll(state, payload)
      )
      .addCase(getRestaurant.fulfilled, (state, { payload }) =>
        entityAdapter.setOne(state, payload)
      ),
});

const selectRestaurantSlice = (state) => state.restaurantsSlice;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);
