"use client";

import { Loader } from "../Loader/loader";
import { RestaurantCard } from "../RestaurantCard/restaurantCard";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantsSubPagesLayout = ({ restaurantId, children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: result?.data.find(({ id }) => id === restaurantId),
    }),
  });

  if (isLoading) {
    return <Loader text={"Loading restaurant..."} />;
  }

  if (isError) {
    return <Loader text={"Loading restaurant error"} />;
  }

  return <RestaurantCard restaurant={data}>{children}</RestaurantCard>;
};
