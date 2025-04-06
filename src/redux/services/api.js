import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["reviews"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({ query: () => "/restaurants" }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `dishes?restaurantId=${restaurantId}`,
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
      providesTags: [{ type: "reviews", id: "all" }],
    }),
    getDishById: builder.query({ query: (dishId) => `dish/${dishId}` }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `review/${restaurantId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
    }),
    editReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `review/${reviewId}`,
        body: review,
        method: "PATCH",
      }),
      invalidatesTags: [{ type: "reviews", id: "all" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesByRestaurantIdQuery,
  useGetUsersQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetDishByIdQuery,
  useAddReviewMutation,
  useEditReviewMutation,
} = api;
