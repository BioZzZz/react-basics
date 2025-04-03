import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./slice";

export const getRestaurant = createAsyncThunk(
  "dishes/getDish",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/restaurant/${restaurantId}`
    );
    const result = await response.json();

    if (!result.id) {
      rejectWithValue("No data");
      return;
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return !selectRestaurantById(getState(), restaurantId);
    },
  }
);
