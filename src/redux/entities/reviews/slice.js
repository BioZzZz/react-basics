import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState,
  selectors: {
    selectReviewById: (state, id) => state.entities[id],
  },
});

export const { selectReviewById } = reviewsSlice.selectors;
