import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviewById } from "./slice";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result.length) {
      rejectWithValue("No data");
      return;
    }

    return result;
  }
);
