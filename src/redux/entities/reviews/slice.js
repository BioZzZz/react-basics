import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (builder) =>
    builder.addCase(getReviews.fulfilled, (state, { payload }) =>
      entityAdapter.setAll(state, payload)
    ),
});

const selectReviewsSlice = (state) => state.reviewsSlice;

export const { selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);
